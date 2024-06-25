export class ProtocolXCarrierTemperatureData
{
    static mask: bigint = BigInt(1) << BigInt(17);

    public channel1ReturnTemperatureDeg: number;
    public channel2ReturnTemperatureDeg: number;
    public channel3ReturnTemperatureDeg: number;
    public channel4ReturnTemperatureDeg: number;
    public channel5ReturnTemperatureDeg: number;
    public channel6ReturnTemperatureDeg: number;
    public compartment1Setpoint: number;
    public compartment2Setpoint: number;
    public compartment3Setpoint: number;
    public refrigeratorFuelLevelRaw: number;
    public refrigeratorTotalEngineHours: number;
    public refrigeratorTotalStandbyHours: number;
    public refrigeratorStatusMask: number;
    public alarmFlagsMask: number;

    constructor (
        channel1ReturnTemperatureDeg: number,
        channel2ReturnTemperatureDeg: number,
        channel3ReturnTemperatureDeg: number,
        channel4ReturnTemperatureDeg: number,
        channel5ReturnTemperatureDeg: number,
        channel6ReturnTemperatureDeg: number,
        compartment1Setpoint: number,
        compartment2Setpoint: number,
        compartment3Setpoint: number,
        refrigeratorFuelLevelRaw: number,
        refrigeratorTotalEngineHours: number,
        refrigeratorTotalStandbyHours: number,
        refrigeratorStatusMask: number,
        alarmFlagsMask: number
    )
    {
        this.channel1ReturnTemperatureDeg = channel1ReturnTemperatureDeg;
        this.channel2ReturnTemperatureDeg = channel2ReturnTemperatureDeg;
        this.channel3ReturnTemperatureDeg = channel3ReturnTemperatureDeg;
        this.channel4ReturnTemperatureDeg = channel4ReturnTemperatureDeg;
        this.channel5ReturnTemperatureDeg = channel5ReturnTemperatureDeg;
        this.channel6ReturnTemperatureDeg = channel6ReturnTemperatureDeg;
        this.compartment1Setpoint = compartment1Setpoint;
        this.compartment2Setpoint = compartment2Setpoint;
        this.compartment3Setpoint = compartment3Setpoint;
        this.refrigeratorFuelLevelRaw = refrigeratorFuelLevelRaw;
        this.refrigeratorTotalEngineHours = refrigeratorTotalEngineHours;
        this.refrigeratorTotalStandbyHours = refrigeratorTotalStandbyHours;
        this.refrigeratorStatusMask = refrigeratorStatusMask;
        this.alarmFlagsMask = alarmFlagsMask;
    }
}