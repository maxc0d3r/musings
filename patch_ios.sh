#!/bin/bash

FILE="build/jsb-link/frameworks/runtime-src/proj.ios_mac/ios/AppController.mm"

if [ ! -f "$FILE" ]; then
    echo "Error: $FILE not found!"
    echo "Please build the iOS project in Cocos Creator first."
    exit 1
fi

if grep -q "nw_path_monitor_create" "$FILE"; then
    echo "AppController.mm is already patched!"
    exit 0
fi

echo "Patching $FILE to add iOS Hardware Network Monitor..."

# Inject Imports at the top (after the first #import)
sed -i '' '/#import/a\
#import <Network/Network.h>\
#import "cocos/scripting/js-bindings/jswrapper/SeApi.h"
' "$FILE"

# Inject the network monitor logic right before "return YES;" in didFinishLaunchingWithOptions
sed -i '' '/return YES;/i\
    \
    nw_path_monitor_t monitor = nw_path_monitor_create();\
    nw_path_monitor_set_queue(monitor, dispatch_get_main_queue());\
    nw_path_monitor_set_update_handler(monitor, ^(nw_path_t path) {\
        nw_path_status_t status = nw_path_get_status(path);\
        if (status != nw_path_status_satisfied) {\
            se::ScriptEngine::getInstance()->evalString("if(window.onNativeNetworkStatusChanged) window.onNativeNetworkStatusChanged('"'"'Offline'"'"');");\
        } else {\
            se::ScriptEngine::getInstance()->evalString("if(window.onNativeNetworkStatusChanged) window.onNativeNetworkStatusChanged('"'"'Online'"'"');");\
        }\
    });\
    nw_path_monitor_start(monitor);\
    \
' "$FILE"

echo "Patch successful! You can now compile the iOS project in Xcode."
