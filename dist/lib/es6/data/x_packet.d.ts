import { ProtocolXReport } from "./x_report";
export declare class ProtocolXPacket {
    constructor();
    private length?;
    reports: ProtocolXReport[];
    static fromData(data: Buffer): ProtocolXPacket | null;
}
