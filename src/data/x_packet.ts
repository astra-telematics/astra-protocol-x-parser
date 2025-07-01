import * as moment from "moment";
import { astraCrc } from "../crc";
import { ProtocolXReport } from "./x_report";
import * as luhn from "luhn";
import { ProtocolXLoginData } from "./x_login_data";

const binutils = require('binutils64');

export class ProtocolXPacket
{    
    constructor(){}

    private length?: number;
    public mode4Imei?: string;
    public reports: ProtocolXReport[] = [];

    static fromData (data: Buffer, enableMode4:boolean = false, loginData?: ProtocolXLoginData): ProtocolXPacket | null
    {
        let packet = new ProtocolXPacket();
        let reader = new binutils.BinaryReader(data);

        if (data.length >= 6)
        {
            // skip protocol id
            reader.ReadBytes(1);
            // packet length
            packet.length = reader.ReadUInt16();
            // number of reports
            let numReports = reader.ReadUInt8();

            if (enableMode4)
            {
                let isMode4 = false;

                // look for a valid imei and run sanity checks to determine mode 4/6
                let tacFac = data.readUint32BE(4);
                let msnCd = data.readUint8(8);
                msnCd <<= 8;
                msnCd |= data.readUint8(9);
                msnCd <<= 8;
                msnCd |= data.readUint8(10);
                
                let mode4Imei = tacFac.toString().padEnd(8, '0')+msnCd.toString().padStart(7, '0');
    
                if (luhn.validate(mode4Imei) && mode4Imei.length === 15)
                {
                    // this could be a $MODE,4 packet, lets do some extra sanity checks to be certain
                    isMode4 = true;
    
                    // make a new reader
                    let mode4CheckReader = new binutils.BinaryReader(data);
                    // skip to first report assuming $MODE,4
                    mode4CheckReader.ReadBytes(11);
                    // sequence number
                    mode4CheckReader.ReadBytes(1);
                    // module mask
                    mode4CheckReader.ReadBytes(6);
                    // rtc time
                    let julianSecs = mode4CheckReader.ReadUInt32();
                    let rtcTime = moment.tz('1980-01-06T00:00:00', 'UTC').add(julianSecs, 'seconds');
    
                    // check rtc time validity
                    isMode4 = rtcTime.isBefore(moment.utc().add(24, 'hours'));
                }
    
                if (isMode4)
                {
                    // this is a $MODE,4 packet, store imei in the packet and skip the bytes
                    packet.mode4Imei = mode4Imei;
                    reader.ReadBytes(7);
                }
            }

            // confirm packet length
            if (packet.length === data.length)
            {
                // confirm crc
                if (data.readUint16BE(data.length-2) === astraCrc(data.subarray(0, data.length-2)))
                {
                    // check there are reports
                    if (numReports > 0)
                    {
                        // parse reports
                        for (let i = 0; i < numReports; i++)
                        {
                            packet.reports.push(ProtocolXReport.fromReader(reader, loginData));
                        }
                        
                        return packet;
                    }
                    else
                    {
                        throw Error('Empty packet');
                    }
                }
                else
                {
                    throw Error('Bad checksum');
                }
            }
            else
            {
                throw Error('Packet length incorrect');
            }
        }
        else
        {
            throw Error('Packet too small');
        }

        return null;
    }
}