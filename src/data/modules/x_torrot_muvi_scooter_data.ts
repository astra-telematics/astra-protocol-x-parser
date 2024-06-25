export class ProtocolXTorrotMuviScooterData
{
    static mask: bigint = BigInt(1) << BigInt(35);

    public battery1SocPercent: number;
    public battery2SocPercent: number;
    public battery1TotalCurrentMa: number;
    public battery2TotalCurrentMa: number;
    public battery1TotalVoltageMv: number;
    public battery2TotalVoltageMv: number;
    public battery1UserTotalCapacityMah: number;
    public battery2UserTotalCapacityMah: number;
    public battery1RatedCapacityAh: number;
    public battery2RatedCapacityAh: number;
    public battery1CapacityRemainingMah: number;
    public battery2CapacityRemainingMah: number;
    public battery1Alarm485: number;
    public battery2Alarm485: number;
    public batteryStatus: number;
    public rpm: number;
    public ecuHeartbeatCount: number;
    public controllerTemperatureDeg: number;
    public motorTemperatureDeg: number;
    public throttlePositionPercent: number;
    public speedKmh: number;
    public lifetimeOdometerM: number;
    public scooterStatus: number;
    public rangeEcoKm: number;
    public rangeFullKm: number;
    public currentDrivingMode: number;

    constructor (
        battery1SocPercent: number,
        battery2SocPercent: number,
        battery1TotalCurrentMa: number,
        battery2TotalCurrentMa: number,
        battery1TotalVoltageMv: number,
        battery2TotalVoltageMv: number,
        battery1UserTotalCapacityMah: number,
        battery2UserTotalCapacityMah: number,
        battery1RatedCapacityAh: number,
        battery2RatedCapacityAh: number,
        battery1CapacityRemainingMah: number,
        battery2CapacityRemainingMah: number,
        battery1Alarm485: number,
        battery2Alarm485: number,
        batteryStatus: number,
        rpm: number,
        ecuHeartbeatCount: number,
        controllerTemperatureDeg: number,
        motorTemperatureDeg: number,
        throttlePositionPercent: number,
        speedKmh: number,
        lifetimeOdometerM: number,
        scooterStatus: number,
        rangeEcoKm: number,
        rangeFullKm: number,
        currentDrivingMode: number
    )
    {
        this.battery1SocPercent = battery1SocPercent;
        this.battery2SocPercent = battery2SocPercent;
        this.battery1TotalCurrentMa = battery1TotalCurrentMa;
        this.battery2TotalCurrentMa = battery2TotalCurrentMa;
        this.battery1TotalVoltageMv = battery1TotalVoltageMv;
        this.battery2TotalVoltageMv = battery2TotalVoltageMv;
        this.battery1UserTotalCapacityMah = battery1UserTotalCapacityMah;
        this.battery2UserTotalCapacityMah = battery2UserTotalCapacityMah;
        this.battery1RatedCapacityAh = battery1RatedCapacityAh;
        this.battery2RatedCapacityAh = battery2RatedCapacityAh;
        this.battery1CapacityRemainingMah = battery1CapacityRemainingMah;
        this.battery2CapacityRemainingMah = battery2CapacityRemainingMah;
        this.battery1Alarm485 = battery1Alarm485;
        this.battery2Alarm485 = battery2Alarm485;
        this.batteryStatus = batteryStatus;
        this.rpm = rpm;
        this.ecuHeartbeatCount = ecuHeartbeatCount;
        this.controllerTemperatureDeg = controllerTemperatureDeg;
        this.motorTemperatureDeg = motorTemperatureDeg;
        this.throttlePositionPercent = throttlePositionPercent;
        this.speedKmh = speedKmh;
        this.lifetimeOdometerM = lifetimeOdometerM;
        this.scooterStatus = scooterStatus;
        this.rangeEcoKm = rangeEcoKm;
        this.rangeFullKm = rangeFullKm;
        this.currentDrivingMode = currentDrivingMode;
    }
}