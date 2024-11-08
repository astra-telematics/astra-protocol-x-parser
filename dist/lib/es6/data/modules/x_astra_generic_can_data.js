var ProtocolXAstraGenericCanDataEntry = /** @class */ (function () {
    function ProtocolXAstraGenericCanDataEntry(id, data, dataAgeS) {
        this.id = id;
        this.data = data;
        this.dataAgeS = dataAgeS;
    }
    return ProtocolXAstraGenericCanDataEntry;
}());
export { ProtocolXAstraGenericCanDataEntry };
var ProtocolXAstraGenericCanData = /** @class */ (function () {
    function ProtocolXAstraGenericCanData() {
    }
    ProtocolXAstraGenericCanData.mask = BigInt(1) << BigInt(45);
    return ProtocolXAstraGenericCanData;
}());
export { ProtocolXAstraGenericCanData };
