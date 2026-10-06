# Cocos Creator 2.4.13 - Socket.IO Native iOS Fix Project

This is a fully self-contained Cocos Creator 2.4.13 project that demonstrates the native iOS Airplane Mode fix for Socket.IO. 

## Project Setup

1. **Open the Project:**
   Open Cocos Dashboard, click **Import**, and select this `cocos_project` folder. It will load right up in Cocos Creator 2.4.13.

2. **Prepare the Scene:**
   - Create a New Scene (`File -> New Scene`).
   - In the **Node Tree** (Hierarchy), select the `Canvas` node.
   - Drag the `CocosNetworkMonitor.ts` script (from `assets/Scripts/`) onto the `Canvas` node.
   - In the **Properties** panel on the right, change the `Server IP` to your computer's actual local Wi-Fi IP (e.g., `192.168.1.100`), otherwise the phone won't be able to connect!
   - Save the Scene.

## Building and Testing on Native iOS

1. **Build the Project:**
   - Go to **Project -> Build...**
   - Select **iOS** and click **Build**.
   - Wait for the compilation to finish.

2. **Run the Automatic iOS Patch:**
   Because Cocos completely generates the native iOS project on the fly, you have to patch the Xcode project *after* you click Build. 
   I have included an automated script to do this for you. Open your Mac's terminal in this project's folder and run:
   ```bash
   chmod +x patch_ios.sh
   ./patch_ios.sh
   ```
   *(This script automatically injects the Apple Network.framework listener into the generated `AppController.mm`.)*

3. **Compile in Xcode & Test:**
   - Open `build/jsb-link/frameworks/runtime-src/proj.ios_mac/YourProject.xcodeproj` in Xcode.
   - Install the app on your physical iPhone.
   - Tap **Airplane Mode**. You will see the socket immediately disconnect within milliseconds!
