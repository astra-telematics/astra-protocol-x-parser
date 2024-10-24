import { ProtocolXReport } from "./x_report";
export declare class ProtocolXPacket {
    constructor();
    private length?;
    mode4Imei?: string;
    reports: ProtocolXReport[];
    static fromData(data: Buffer, enableMode4?: boolean): ProtocolXPacket | null;
}
