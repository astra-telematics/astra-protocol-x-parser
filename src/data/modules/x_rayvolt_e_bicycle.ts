export class ProtocolXRayvoltEBicycle
{
    static mask: bigint = BigInt(1) << BigInt(20);

    public controllerUid: number;
    public controllerFirmwareVersion: number;
    public controllerFirmwareBoot: number;
    public errorFlags: number;
    public batterySocPercent: number;
    public batteryVoltage: number;
    public controllerTemperatureDeg: number;
    public currentSpeedKmh: number;
    public status: number;

    constructor (
        controllerUid: number,
        controllerFirmwareVersion: number,
        controllerFirmwareBoot: number,
        errorFlags: number,
        batterySocPercent: number,
        batteryVoltage: number,
        controllerTemperatureDeg: number,
        currentSpeedKmh: number,
        status: number
    )
    {
        this .controllerUid = controllerUid;
        this.controllerFirmwareVersion = controllerFirmwareVersion;
        this.controllerFirmwareBoot = controllerFirmwareBoot;
        this.errorFlags = errorFlags;
        this.batterySocPercent = batterySocPercent;
        this.batteryVoltage = batteryVoltage;
        this.controllerTemperatureDeg = controllerTemperatureDeg;
        this.currentSpeedKmh = currentSpeedKmh;
        this.status = status;
    }
}