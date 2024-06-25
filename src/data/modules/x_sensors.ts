export enum ProtocolXSensorType
{
    UNASSIGNED = 0,
    TEMPERATURE,
    HUMIDITY,
    LIGHT
}

export class ProtocolXSensor
{
    public index: number;
    public type: ProtocolXSensorType;
    public dataValid: boolean;

    public temperatureDeg?: number;
    public humidityPercent?: number;

    constructor (
        index: number,
        type: ProtocolXSensorType,
        dataValid: boolean,
        temperatureDeg?: number,
        humidityPercent?: number
    )
    {
        this.index = index;
        this.type = type;
        this.dataValid = dataValid;
        this.temperatureDeg = temperatureDeg;
        this.humidityPercent = humidityPercent;
    }
}

export class ProtocolXSensors
{
    static mask: bigint = BigInt(1) << BigInt(32);

    public sensors?: ProtocolXSensor[]
}