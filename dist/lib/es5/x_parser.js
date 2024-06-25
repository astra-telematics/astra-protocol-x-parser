"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtocolXParser = void 0;
var x_login_data_1 = require("./data/x_login_data");
var x_packet_1 = require("./data/x_packet");
var ProtocolXParser = /** @class */ (function () {
    function ProtocolXParser(data) {
        this.isLogin = false;
        this.data = data;
        this.parse();
    }
    ProtocolXParser.prototype.checkLogin = function () {
        var decoded = this.data.toString('ascii');
        if (decoded.startsWith('$ASTRA;')) {
            var components = decoded.replace('\r\n', '').split(';');
            if (components.length >= 7) {
                if (components[5] === 'X') {
                    this.loginData = new x_login_data_1.ProtocolXLoginData(components[2], components[1], components[3], components[4], components[6], components.length >= 8 ? components[7].replace('\r', '') : undefined);
                    return true;
                }
            }
        }
        return false;
    };
    ProtocolXParser.prototype.parse = function () {
        if (this.checkLogin()) {
            this.isLogin = true;
        }
        else {
            this.packet = x_packet_1.ProtocolXPacket.fromData(this.data);
        }
    };
    return ProtocolXParser;
}());
exports.ProtocolXParser = ProtocolXParser;
