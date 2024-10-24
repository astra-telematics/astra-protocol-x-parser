import { ProtocolXLoginData } from "./data/x_login_data";
import { ProtocolXPacket } from "./data/x_packet";
import { ProtocolXParserOptions } from "./x_parser_options";
export declare class ProtocolXParser {
    private data;
    private options;
    isLogin: boolean;
    loginData?: ProtocolXLoginData;
    packet?: ProtocolXPacket | null;
    constructor(data: Buffer, options?: ProtocolXParserOptions);
    private checkLogin;
    private parse;
}
