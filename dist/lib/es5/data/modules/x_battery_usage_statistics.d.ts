export declare class ProtocolXBatteryUsageStatistics {
    static mask: bigint;
    gnssAcquiringTimeS: number;
    gnssFixingTimeS: number;
    modemOnTimeS: number;
    modemCsRegisteredTimeS: number;
    modemPsRegisteredTimeS: number;
    pdpActiveTimeS: number;
    socketOpenTimeS: number;
    awakeTimeS: number;
    sleepTimeS: number;
    externalPowerOnTimeS: number;
    bleOnTimeS: number;
    wakeCycleCount: number;
    reportsSent: number;
    constructor(gnssAcquiringTimeS: number, gnssFixingTimeS: number, modemOnTimeS: number, modemCsRegisteredTimeS: number, modemPsRegisteredTimeS: number, pdpActiveTimeS: number, socketOpenTimeS: number, awakeTimeS: number, sleepTimeS: number, externalPowerOnTimeS: number, bleOnTimeS: number, wakeCycleCount: number, reportsSent: number);
}
