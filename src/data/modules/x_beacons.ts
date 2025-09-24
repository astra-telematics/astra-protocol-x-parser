export enum ProtocolXBeaconType
{
    NONE = 0,
    HEIGHT = 1
}

export class ProtocolXBeacon
{
    public macAddress: string;
    public rssi: number;
    public isCompanion: boolean;
    public lastSeenS: number;
    public type: ProtocolXBeaconType;
    public heightCm?: number;
}

export class ProtocolXBeacons
{
    static mask: bigint = BigInt(1) << BigInt(44);

    public beacons?: ProtocolXBeacon[];
}