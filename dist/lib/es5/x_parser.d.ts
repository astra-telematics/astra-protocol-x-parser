import { ProtocolXLoginData } from "./data/x_login_data";
import { ProtocolXPacket } from "./data/x_packet";
export declare class ProtocolXParser {
    private data;
    isLogin: boolean;
    loginData?: ProtocolXLoginData;
    packet?: ProtocolXPacket | null;
    constructor(data: Buffer);
    private checkLogin;
    private parse;
}
