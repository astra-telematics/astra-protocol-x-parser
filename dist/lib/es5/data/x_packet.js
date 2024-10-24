"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtocolXPacket = void 0;
var moment = require("moment");
var crc_1 = require("../crc");
var x_report_1 = require("./x_report");
var luhn = require("luhn");
var binutils = require('binutils64');
var ProtocolXPacket = /** @class */ (function () {
    function ProtocolXPacket() {
        this.reports = [];
    }
    ProtocolXPacket.fromData = function (data, enableMode4) {
        if (enableMode4 === void 0) { enableMode4 = false; }
        var packet = new ProtocolXPacket();
        var reader = new binutils.BinaryReader(data);
        if (data.length >= 6) {
            // skip protocol id
            reader.ReadBytes(1);
            // packet length
            packet.length = reader.ReadUInt16();
            // number of reports
            var numReports = reader.ReadUInt8();
            if (enableMode4) {
                var isMode4 = false;
                // look for a valid imei and run sanity checks to determine mode 4/6
                var tacFac = data.readUint32BE(4);
                var msnCd = data.readUint8(8);
                msnCd <<= 8;
                msnCd |= data.readUint8(9);
                msnCd <<= 8;
                msnCd |= data.readUint8(10);
                var mode4Imei = tacFac.toString() + msnCd.toString();
                if (luhn.validate(mode4Imei) && mode4Imei.length === 15) {
                    // this could be a $MODE,4 packet, lets do some extra sanity checks to be certain
                    isMode4 = true;
                    // make a new reader
                    var mode4CheckReader = new binutils.BinaryReader(data);
                    // skip to first report assuming $MODE,4
                    mode4CheckReader.ReadBytes(11);
                    // sequence number
                    mode4CheckReader.ReadBytes(1);
                    // module mask
                    mode4CheckReader.ReadBytes(6);
                    // rtc time
                    var julianSecs = mode4CheckReader.ReadUInt32();
                    var rtcTime = moment.tz('1980-01-06T00:00:00', 'UTC').add(julianSecs, 'seconds');
                    // check rtc time validity
                    isMode4 = rtcTime.isBefore(moment.utc().add(24, 'hours'));
                }
                if (isMode4) {
                    // this is a $MODE,4 packet, store imei in the packet and skip the bytes
                    packet.mode4Imei = mode4Imei;
                    reader.ReadBytes(7);
                }
            }
            // confirm packet length
            if (packet.length === data.length) {
                // confirm crc
                if (data.readUint16BE(data.length - 2) === (0, crc_1.astraCrc)(data.subarray(0, data.length - 2))) {
                    // check there are reports
                    if (numReports > 0) {
                        // parse reports
                        for (var i = 0; i < numReports; i++) {
                            packet.reports.push(x_report_1.ProtocolXReport.fromReader(reader));
                        }
                        return packet;
                    }
                    else {
                        throw Error('Empty packet');
                    }
                }
                else {
                    throw Error('Bad checksum');
                }
            }
            else {
                throw Error('Packet length incorrect');
            }
        }
        else {
            throw Error('Packet too small');
        }
        return null;
    };
    return ProtocolXPacket;
}());
exports.ProtocolXPacket = ProtocolXPacket;
