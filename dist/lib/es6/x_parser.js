import { ProtocolXLoginData } from "./data/x_login_data";
import { ProtocolXPacket } from "./data/x_packet";
import { ProtocolXParserOptions } from "./x_parser_options";
var ProtocolXParser = /** @class */ (function () {
    function ProtocolXParser(data, options) {
        if (options === void 0) { options = new ProtocolXParserOptions(); }
        this.isLogin = false;
        this.data = data;
        this.options = options;
        this.parse();
    }
    ProtocolXParser.prototype.checkLogin = function () {
        var decoded = this.data.toString('ascii');
        if (decoded.startsWith('$ASTRA;')) {
            var components = decoded.replace('\r\n', '').split(';');
            if (components.length >= 7) {
                if (components[5] === 'X' || components[5] === 'Z') {
                    this.loginData = new ProtocolXLoginData(components[2], components[1], components[3], components[4], components[6], components.length >= 8 ? components[7].replace('\r', '') : undefined, components[5]);
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
            this.packet = ProtocolXPacket.fromData(this.data, this.options.enableMode4, this.options.loginData);
        }
    };
    return ProtocolXParser;
}());
export { ProtocolXParser };
