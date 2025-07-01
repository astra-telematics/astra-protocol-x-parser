export class ProtocolXLoginData
{
    public imei: string;
    public model: string;
    public vin: string;
    public firmwareVersion: string;
    public hardwareRevision: string;
    public settingsChecksum?: string;
    public protocolId?: string;

    constructor (
        imei: string,
        model: string,
        vin: string,
        firmwareVersion: string,
        hardwareRevision: string,
        settingsChecksum?: string,
        protocolId?: string
    )
    {
        this.imei = imei;
        this.model = model;
        this.vin = vin;
        this.firmwareVersion = firmwareVersion;
        this.hardwareRevision = hardwareRevision;
        this.settingsChecksum = settingsChecksum;
        this.protocolId = protocolId;
    }
}