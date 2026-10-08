"use strict";
cc._RF.push(module, '306eaWvvSNE6a7ypsOSrQaY', 'CocosNetworkMonitor');
// Scripts/CocosNetworkMonitor.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CocosNetworkMonitor = /** @class */ (function (_super) {
    __extends(CocosNetworkMonitor, _super);
    function CocosNetworkMonitor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.socket = null;
        _this.serverIP = '192.168.1.100'; // Make this editable in the editor
        return _this;
    }
    CocosNetworkMonitor.prototype.start = function () {
        var _this = this;
        var SERVER_URL = "http://" + this.serverIP + ":3000";
        // @ts-ignore
        if (typeof io !== 'undefined') {
            // @ts-ignore
            this.socket = io(SERVER_URL, {
                transports: ['websocket']
            });
            this.socket.on('connect', function () {
                cc.log("Connected to Socket.IO server!");
            });
            this.socket.on('disconnect', function (reason) {
                cc.log("Disconnected from server. Reason: " + reason);
            });
        }
        else {
            cc.error("Socket.io client not found. Ensure it is imported as a plugin.");
        }
        // Expose function to global scope for iOS Native JS Bridge
        window.onNativeNetworkStatusChanged = function (status) {
            cc.log("[Native Bridge] Network status changed to: " + status);
            if (status === "Offline") {
                if (_this.socket && _this.socket.connected) {
                    cc.log("Forcing socket disconnect due to iOS hardware offline...");
                    _this.socket.io.engine.close();
                }
            }
            else if (status === "Online") {
                if (_this.socket && _this.socket.disconnected) {
                    _this.socket.connect();
                }
            }
        };
    };
    __decorate([
        property
    ], CocosNetworkMonitor.prototype, "serverIP", void 0);
    CocosNetworkMonitor = __decorate([
        ccclass
    ], CocosNetworkMonitor);
    return CocosNetworkMonitor;
}(cc.Component));
exports.default = CocosNetworkMonitor;

cc._RF.pop();