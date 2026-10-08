
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/CocosNetworkMonitor.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0NvY29zTmV0d29ya01vbml0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQWlELHVDQUFZO0lBQTdEO1FBQUEscUVBNENDO1FBMUNXLFlBQU0sR0FBUSxJQUFJLENBQUM7UUFHM0IsY0FBUSxHQUFXLGVBQWUsQ0FBQyxDQUFDLG1DQUFtQzs7SUF1QzNFLENBQUM7SUFyQ0csbUNBQUssR0FBTDtRQUFBLGlCQW9DQztRQW5DRyxJQUFNLFVBQVUsR0FBRyxZQUFVLElBQUksQ0FBQyxRQUFRLFVBQU8sQ0FBQztRQUVsRCxhQUFhO1FBQ2IsSUFBSSxPQUFPLEVBQUUsS0FBSyxXQUFXLEVBQUU7WUFDM0IsYUFBYTtZQUNiLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLFVBQVUsRUFBRTtnQkFDekIsVUFBVSxFQUFFLENBQUMsV0FBVyxDQUFDO2FBQzVCLENBQUMsQ0FBQztZQUVILElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRTtnQkFDdEIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1lBQzdDLENBQUMsQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLFVBQUMsTUFBTTtnQkFDaEMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxvQ0FBb0MsR0FBRyxNQUFNLENBQUMsQ0FBQztZQUMxRCxDQUFDLENBQUMsQ0FBQztTQUNOO2FBQU07WUFDSCxFQUFFLENBQUMsS0FBSyxDQUFDLGdFQUFnRSxDQUFDLENBQUM7U0FDOUU7UUFFRCwyREFBMkQ7UUFDM0QsTUFBTSxDQUFDLDRCQUE0QixHQUFHLFVBQUMsTUFBYztZQUNqRCxFQUFFLENBQUMsR0FBRyxDQUFDLGdEQUE4QyxNQUFRLENBQUMsQ0FBQztZQUUvRCxJQUFJLE1BQU0sS0FBSyxTQUFTLEVBQUU7Z0JBQ3RCLElBQUksS0FBSSxDQUFDLE1BQU0sSUFBSSxLQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRTtvQkFDdEMsRUFBRSxDQUFDLEdBQUcsQ0FBQywwREFBMEQsQ0FBQyxDQUFDO29CQUNuRSxLQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7aUJBQ2pDO2FBQ0o7aUJBQU0sSUFBSSxNQUFNLEtBQUssUUFBUSxFQUFFO2dCQUM1QixJQUFJLEtBQUksQ0FBQyxNQUFNLElBQUksS0FBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUU7b0JBQ3pDLEtBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7aUJBQ3pCO2FBQ0o7UUFDTCxDQUFDLENBQUM7SUFDTixDQUFDO0lBdENEO1FBREMsUUFBUTt5REFDMEI7SUFMbEIsbUJBQW1CO1FBRHZDLE9BQU87T0FDYSxtQkFBbUIsQ0E0Q3ZDO0lBQUQsMEJBQUM7Q0E1Q0QsQUE0Q0MsQ0E1Q2dELEVBQUUsQ0FBQyxTQUFTLEdBNEM1RDtrQkE1Q29CLG1CQUFtQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29jb3NOZXR3b3JrTW9uaXRvciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBwcml2YXRlIHNvY2tldDogYW55ID0gbnVsbDtcbiAgICBcbiAgICBAcHJvcGVydHlcbiAgICBzZXJ2ZXJJUDogc3RyaW5nID0gJzE5Mi4xNjguMS4xMDAnOyAvLyBNYWtlIHRoaXMgZWRpdGFibGUgaW4gdGhlIGVkaXRvclxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICBjb25zdCBTRVJWRVJfVVJMID0gYGh0dHA6Ly8ke3RoaXMuc2VydmVySVB9OjMwMDBgOyBcbiAgICAgICAgXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgaWYgKHR5cGVvZiBpbyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIHRoaXMuc29ja2V0ID0gaW8oU0VSVkVSX1VSTCwge1xuICAgICAgICAgICAgICAgIHRyYW5zcG9ydHM6IFsnd2Vic29ja2V0J11cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLnNvY2tldC5vbignY29ubmVjdCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjYy5sb2coXCJDb25uZWN0ZWQgdG8gU29ja2V0LklPIHNlcnZlciFcIik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5zb2NrZXQub24oJ2Rpc2Nvbm5lY3QnLCAocmVhc29uKSA9PiB7XG4gICAgICAgICAgICAgICAgY2MubG9nKFwiRGlzY29ubmVjdGVkIGZyb20gc2VydmVyLiBSZWFzb246IFwiICsgcmVhc29uKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2MuZXJyb3IoXCJTb2NrZXQuaW8gY2xpZW50IG5vdCBmb3VuZC4gRW5zdXJlIGl0IGlzIGltcG9ydGVkIGFzIGEgcGx1Z2luLlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEV4cG9zZSBmdW5jdGlvbiB0byBnbG9iYWwgc2NvcGUgZm9yIGlPUyBOYXRpdmUgSlMgQnJpZGdlXG4gICAgICAgIHdpbmRvdy5vbk5hdGl2ZU5ldHdvcmtTdGF0dXNDaGFuZ2VkID0gKHN0YXR1czogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICBjYy5sb2coYFtOYXRpdmUgQnJpZGdlXSBOZXR3b3JrIHN0YXR1cyBjaGFuZ2VkIHRvOiAke3N0YXR1c31gKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gXCJPZmZsaW5lXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zb2NrZXQgJiYgdGhpcy5zb2NrZXQuY29ubmVjdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZyhcIkZvcmNpbmcgc29ja2V0IGRpc2Nvbm5lY3QgZHVlIHRvIGlPUyBoYXJkd2FyZSBvZmZsaW5lLi4uXCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNvY2tldC5pby5lbmdpbmUuY2xvc2UoKTsgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChzdGF0dXMgPT09IFwiT25saW5lXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zb2NrZXQgJiYgdGhpcy5zb2NrZXQuZGlzY29ubmVjdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc29ja2V0LmNvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gICAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgICAgIG9uTmF0aXZlTmV0d29ya1N0YXR1c0NoYW5nZWQ6IChzdGF0dXM6IHN0cmluZykgPT4gdm9pZDtcbiAgICB9XG59XG4iXX0=