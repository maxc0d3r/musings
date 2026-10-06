const {ccclass, property} = cc._decorator;

@ccclass
export default class CocosNetworkMonitor extends cc.Component {

    private socket: any = null;
    
    @property
    serverIP: string = '192.168.1.100'; // Make this editable in the editor

    start () {
        const SERVER_URL = `http://${this.serverIP}:3000`; 
        
        // @ts-ignore
        if (typeof io !== 'undefined') {
            // @ts-ignore
            this.socket = io(SERVER_URL, {
                transports: ['websocket']
            });

            this.socket.on('connect', () => {
                cc.log("Connected to Socket.IO server!");
            });

            this.socket.on('disconnect', (reason) => {
                cc.log("Disconnected from server. Reason: " + reason);
            });
        } else {
            cc.error("Socket.io client not found. Ensure it is imported as a plugin.");
        }

        // Expose function to global scope for iOS Native JS Bridge
        window.onNativeNetworkStatusChanged = (status: string) => {
            cc.log(`[Native Bridge] Network status changed to: ${status}`);
            
            if (status === "Offline") {
                if (this.socket && this.socket.connected) {
                    cc.log("Forcing socket disconnect due to iOS hardware offline...");
                    this.socket.io.engine.close(); 
                }
            } else if (status === "Online") {
                if (this.socket && this.socket.disconnected) {
                    this.socket.connect();
                }
            }
        };
    }
}

declare global {
    interface Window {
        onNativeNetworkStatusChanged: (status: string) => void;
    }
}
