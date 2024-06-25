export class ProtocolXAskollEs2ScooterData
{
    static mask: bigint = BigInt(1) << BigInt(37);

    public canEventDateTime: Date;
    public battery1SocPercent: number;
    public battery2SocPercent: number;
    public battery1SerialNumber: number;
    public battery2SerialNumber: number;
    public batteryTemperatureDeg: number;
    public batteryVoltageMv: number;
    public batteryCurrentMa: number;
    public batteryHeartbeatFlags: number;
    public speedKmh: number;
    public lifetimeOdometerM: number;
    public tripDistanceM: number;
    public estimatedRangeKm: number;
    public statusInformation2020Model: number;
    public statusInformation2021Model: number;
    public drivingProfile: number;
    public remainingCapacityMah: number;
    public errorFlags: number;
    public gnssHdop: number;
    public gnssEstimatedPositionErrorM: number;

    constructor (
        canEventDateTime: Date,
        battery1SocPercent: number,
        battery2SocPercent: number,
        battery1SerialNumber: number,
        battery2SerialNumber: number,
        batteryTemperatureDeg: number,
        batteryVoltageMv: number,
        batteryCurrentMa: number,
        batteryHeartbeatFlags: number,
        speedKmh: number,
        lifetimeOdometerM: number,
        tripDistanceM: number,
        estimatedRangeKm: number,
        statusInformation2020Model: number,
        statusInformation2021Model: number,
        drivingProfile: number,
        remainingCapacityMah: number,
        errorFlags: number,
        gnssHdop: number,
        gnssEstimatedPositionErrorM: number
    )
    {
       this.canEventDateTime = canEventDateTime;
       this.battery1SocPercent = battery1SocPercent;
       this.battery2SocPercent = battery2SocPercent;
       this.battery1SerialNumber = battery1SerialNumber;
       this.battery2SerialNumber = battery2SerialNumber;
       this.batteryTemperatureDeg = batteryTemperatureDeg;
       this.batteryVoltageMv = batteryVoltageMv;
       this.batteryCurrentMa = batteryCurrentMa;
       this.batteryHeartbeatFlags = batteryHeartbeatFlags;
       this.speedKmh = speedKmh;
       this.lifetimeOdometerM = lifetimeOdometerM;
       this.tripDistanceM = tripDistanceM;
       this.estimatedRangeKm = estimatedRangeKm;
       this.statusInformation2020Model = statusInformation2020Model;
       this.statusInformation2021Model = statusInformation2021Model;
       this.drivingProfile = drivingProfile;
       this.remainingCapacityMah = remainingCapacityMah;
       this.errorFlags = errorFlags;
       this.gnssHdop = gnssHdop;
       this.gnssEstimatedPositionErrorM = gnssEstimatedPositionErrorM;
    }
}