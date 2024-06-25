"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtocolXDigitals = void 0;
var ProtocolXDigitals = /** @class */ (function () {
    function ProtocolXDigitals(statesMask, changesMask) {
        var _this = this;
        this.inState = function (number) {
            var mask = 1 << (number - 1);
            return (_this.statesMask & mask) === mask ? 1 : 0;
        };
        this.outState = function (number) {
            var mask = 1 << (number + 7);
            return (_this.statesMask & mask) === mask ? 1 : 0;
        };
        this.inChanged = function (number) {
            var mask = 1 << (number - 1);
            return (_this.changesMask & mask) === mask ? true : false;
        };
        this.outChanged = function (number) {
            var mask = 1 << (number + 7);
            return (_this.changesMask & mask) === mask ? true : false;
        };
        this.applyMasks = function () {
            _this.digin1_state = _this.inState(1);
            _this.digin2_state = _this.inState(2);
            _this.digin3_state = _this.inState(3);
            _this.digin4_state = _this.inState(4);
            _this.digin5_state = _this.inState(5);
            _this.digin6_state = _this.inState(6);
            _this.digin7_state = _this.inState(7);
            _this.digin8_state = _this.inState(8);
            _this.digout1_state = _this.outState(1);
            _this.digout2_state = _this.outState(2);
            _this.digout3_state = _this.outState(3);
            _this.digout4_state = _this.outState(4);
            _this.digout5_state = _this.outState(5);
            _this.digout6_state = _this.outState(6);
            _this.digout7_state = _this.outState(7);
            _this.digout8_state = _this.outState(8);
            _this.digin1_changed = _this.inChanged(1);
            _this.digin2_changed = _this.inChanged(2);
            _this.digin3_changed = _this.inChanged(3);
            _this.digin4_changed = _this.inChanged(4);
            _this.digin5_changed = _this.inChanged(5);
            _this.digin6_changed = _this.inChanged(6);
            _this.digin7_changed = _this.inChanged(7);
            _this.digin8_changed = _this.inChanged(8);
            _this.digout1_changed = _this.outChanged(1);
            _this.digout2_changed = _this.outChanged(2);
            _this.digout3_changed = _this.outChanged(3);
            _this.digout4_changed = _this.outChanged(4);
            _this.digout5_changed = _this.outChanged(5);
            _this.digout6_changed = _this.outChanged(6);
            _this.digout7_changed = _this.outChanged(7);
            _this.digout8_changed = _this.outChanged(8);
        };
        this.statesMask = statesMask;
        this.changesMask = changesMask;
        this.applyMasks();
    }
    ProtocolXDigitals.mask = BigInt(1) << BigInt(2);
    return ProtocolXDigitals;
}());
exports.ProtocolXDigitals = ProtocolXDigitals;
