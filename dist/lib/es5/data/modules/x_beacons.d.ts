export declare enum ProtocolXBeaconType {
    NONE = 0,
    HEIGHT = 1
}
export declare class ProtocolXBeacon {
    macAddress: string;
    rssi: number;
    isCompanion: boolean;
    lastSeenS: number;
    type: ProtocolXBeaconType;
    heightCm?: number;
}
export declare class ProtocolXBeacons {
    static mask: bigint;
    beacons?: ProtocolXBeacon[];
}
