export declare class ProtocolXLoginData {
    imei: string;
    model: string;
    vin: string;
    firmwareVersion: string;
    hardwareRevision: string;
    settingsChecksum?: string;
    constructor(imei: string, model: string, vin: string, firmwareVersion: string, hardwareRevision: string, settingsChecksum?: string);
}
