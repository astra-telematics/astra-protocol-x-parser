var ProtocolXSignalQuality = /** @class */ (function () {
    function ProtocolXSignalQuality(gnssSatellitesInUse, gsmSignalStrength) {
        this.gnssSatellitesInUse = gnssSatellitesInUse;
        this.gsmSignalStrength = gsmSignalStrength;
    }
    ProtocolXSignalQuality.mask = BigInt(1) << BigInt(5);
    return ProtocolXSignalQuality;
}());
export { ProtocolXSignalQuality };
