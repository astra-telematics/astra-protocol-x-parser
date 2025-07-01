import { ProtocolXReport } from "./x_report";
import { ProtocolXLoginData } from "./x_login_data";
export declare class ProtocolXPacket {
    constructor();
    private length?;
    mode4Imei?: string;
    reports: ProtocolXReport[];
    static fromData(data: Buffer, enableMode4?: boolean, loginData?: ProtocolXLoginData): ProtocolXPacket | null;
}
