export declare class ProtocolXLoginData {
    imei: string;
    model: string;
    vin: string;
    firmwareVersion: string;
    hardwareRevision: string;
    settingsChecksum?: string;
    protocolId?: string;
    constructor(imei: string, model: string, vin: string, firmwareVersion: string, hardwareRevision: string, settingsChecksum?: string, protocolId?: string);
}
