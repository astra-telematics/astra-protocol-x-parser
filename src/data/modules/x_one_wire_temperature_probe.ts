export class ProtocolXOneWireTemperatureProbe
{
    static mask: bigint = BigInt(1) << BigInt(18);

    public channel1TemperatureDeg: number;
    public channel2TemperatureDeg: number;
    public channel3TemperatureDeg: number;
    public channel4TemperatureDeg: number;

    constructor (
        channel1TemperatureDeg: number,
        channel2TemperatureDeg: number,
        channel3TemperatureDeg: number,
        channel4TemperatureDeg: number
    )
    {
        this.channel1TemperatureDeg = channel1TemperatureDeg;
        this.channel2TemperatureDeg = channel2TemperatureDeg;
        this.channel3TemperatureDeg = channel3TemperatureDeg;
        this.channel4TemperatureDeg = channel4TemperatureDeg;
    }
}