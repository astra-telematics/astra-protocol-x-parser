export var ProtocolXAstraDebugDataType;
(function (ProtocolXAstraDebugDataType) {
    ProtocolXAstraDebugDataType[ProtocolXAstraDebugDataType["NV_DATA"] = 1] = "NV_DATA";
    ProtocolXAstraDebugDataType[ProtocolXAstraDebugDataType["SYSTEM_DATA"] = 2] = "SYSTEM_DATA";
})(ProtocolXAstraDebugDataType || (ProtocolXAstraDebugDataType = {}));
var ProtocolXAstraDebugNvData = /** @class */ (function () {
    function ProtocolXAstraDebugNvData(flags, pcRegister, lrRegister) {
        this.flags = flags;
        this.pcRegister = pcRegister;
        this.lrRegister = lrRegister;
    }
    return ProtocolXAstraDebugNvData;
}());
export { ProtocolXAstraDebugNvData };
var ProtocolXAstraGenericDebugData = /** @class */ (function () {
    function ProtocolXAstraGenericDebugData() {
    }
    ProtocolXAstraGenericDebugData.mask = BigInt(1) << BigInt(47);
    return ProtocolXAstraGenericDebugData;
}());
export { ProtocolXAstraGenericDebugData };
