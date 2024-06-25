export class ProtocolXEcooterScooterData
{
    static mask: bigint = BigInt(1) << BigInt(34);

    public battery1SocPercent: number;
    public battery2SocPercent: number;
    public battery1TemperatureDeg: number;
    public battery2TemperatureDeg: number;
    public totalBatteryCurrentMa: number;
    public status: number;

    constructor (
        battery1SocPercent: number,
        battery2SocPercent: number,
        battery1TemperatureDeg: number,
        battery2TemperatureDeg: number,
        totalBatteryCurrentMa: number,
        status: number
    )
    {
        this.battery1SocPercent = battery1SocPercent;
        this.battery2SocPercent = battery2SocPercent;
        this.battery1TemperatureDeg = battery1TemperatureDeg;
        this.battery2TemperatureDeg = battery2TemperatureDeg;
        this.totalBatteryCurrentMa = totalBatteryCurrentMa;
        this.status = status;
    }
}