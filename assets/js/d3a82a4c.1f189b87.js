"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["479828"], {
58997(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_basicfun_api_input_api_input_c_input_headerfile_capi_oh_input_manager_h_capi_oh_input_manager_h_md_d3a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-basicfun-api-input-api-input-c-input-headerfile-capi-oh-input-manager-h-capi-oh-input-manager-h-md-d3a.json
var site_docs_ref_system_basicfun_api_input_api_input_c_input_headerfile_capi_oh_input_manager_h_capi_oh_input_manager_h_md_d3a_namespaceObject = JSON.parse('{"id":"system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-input-manager-h/capi-oh-input-manager-h","title":"oh_input_manager.h","description":"概述","source":"@site/docs-ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-input-manager-h/capi-oh-input-manager-h.md","sourceDirName":"system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-input-manager-h","slug":"/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-input-manager-h/capi-oh-input-manager-h","permalink":"/harmonyos-docs-site/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-input-manager-h/capi-oh-input-manager-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"oh_input_manager.h","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-input-manager-h","kit":"系统","last_updated":"2026-04-22","slug":"capi-oh-input-manager-h"},"sidebar":"ref","previous":{"title":"oh_axis_type.h","permalink":"/harmonyos-docs-site/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-axis-type-h/capi-oh-axis-type-h"},"next":{"title":"oh_key_code.h","permalink":"/harmonyos-docs-site/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-key-code-h/capi-oh-key-code-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-input-manager-h/capi-oh-input-manager-h.md


const frontMatter = {
	title: 'oh_input_manager.h',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-input-manager-h',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'capi-oh-input-manager-h'
};
const contentTitle = 'oh_input_manager.h';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "汇总",
  "id": "汇总",
  "level": 2
}, {
  "value": "结构体",
  "id": "结构体",
  "level": 3
}, {
  "value": "枚举",
  "id": "枚举",
  "level": 3
}, {
  "value": "函数",
  "id": "函数",
  "level": 3
}, {
  "value": "枚举类型说明",
  "id": "枚举类型说明",
  "level": 2
}, {
  "value": "Input_KeyStateAction",
  "id": "input_keystateaction",
  "level": 3
}, {
  "value": "Input_KeyEventAction",
  "id": "input_keyeventaction",
  "level": 3
}, {
  "value": "Input_MouseEventAction",
  "id": "input_mouseeventaction",
  "level": 3
}, {
  "value": "InputEvent_MouseAxis",
  "id": "inputevent_mouseaxis",
  "level": 3
}, {
  "value": "Input_MouseEventButton",
  "id": "input_mouseeventbutton",
  "level": 3
}, {
  "value": "Input_TouchEventAction",
  "id": "input_toucheventaction",
  "level": 3
}, {
  "value": "Input_InjectionStatus",
  "id": "input_injectionstatus",
  "level": 3
}, {
  "value": "InputEvent_SourceType",
  "id": "inputevent_sourcetype",
  "level": 3
}, {
  "value": "Input_KeyboardType",
  "id": "input_keyboardtype",
  "level": 3
}, {
  "value": "Input_Result",
  "id": "input_result",
  "level": 3
}, {
  "value": "函数说明",
  "id": "函数说明",
  "level": 2
}, {
  "value": "Input_HotkeyCallback()",
  "id": "input_hotkeycallback",
  "level": 3
}, {
  "value": "Input_KeyEventCallback()",
  "id": "input_keyeventcallback",
  "level": 3
}, {
  "value": "Input_MouseEventCallback()",
  "id": "input_mouseeventcallback",
  "level": 3
}, {
  "value": "Input_TouchEventCallback()",
  "id": "input_toucheventcallback",
  "level": 3
}, {
  "value": "Input_AxisEventCallback()",
  "id": "input_axiseventcallback",
  "level": 3
}, {
  "value": "Input_DeviceAddedCallback()",
  "id": "input_deviceaddedcallback",
  "level": 3
}, {
  "value": "Input_DeviceRemovedCallback()",
  "id": "input_deviceremovedcallback",
  "level": 3
}, {
  "value": "Input_InjectAuthorizeCallback()",
  "id": "input_injectauthorizecallback",
  "level": 3
}, {
  "value": "OH_Input_GetKeyState()",
  "id": "oh_input_getkeystate",
  "level": 3
}, {
  "value": "OH_Input_CreateKeyState()",
  "id": "oh_input_createkeystate",
  "level": 3
}, {
  "value": "OH_Input_DestroyKeyState()",
  "id": "oh_input_destroykeystate",
  "level": 3
}, {
  "value": "OH_Input_SetKeyCode()",
  "id": "oh_input_setkeycode",
  "level": 3
}, {
  "value": "OH_Input_GetKeyCode()",
  "id": "oh_input_getkeycode",
  "level": 3
}, {
  "value": "OH_Input_SetKeyPressed()",
  "id": "oh_input_setkeypressed",
  "level": 3
}, {
  "value": "OH_Input_GetKeyPressed()",
  "id": "oh_input_getkeypressed",
  "level": 3
}, {
  "value": "OH_Input_SetKeySwitch()",
  "id": "oh_input_setkeyswitch",
  "level": 3
}, {
  "value": "OH_Input_GetKeySwitch()",
  "id": "oh_input_getkeyswitch",
  "level": 3
}, {
  "value": "OH_Input_InjectKeyEvent()",
  "id": "oh_input_injectkeyevent",
  "level": 3
}, {
  "value": "OH_Input_CreateKeyEvent()",
  "id": "oh_input_createkeyevent",
  "level": 3
}, {
  "value": "OH_Input_DestroyKeyEvent()",
  "id": "oh_input_destroykeyevent",
  "level": 3
}, {
  "value": "OH_Input_SetKeyEventAction()",
  "id": "oh_input_setkeyeventaction",
  "level": 3
}, {
  "value": "OH_Input_GetKeyEventAction()",
  "id": "oh_input_getkeyeventaction",
  "level": 3
}, {
  "value": "OH_Input_SetKeyEventKeyCode()",
  "id": "oh_input_setkeyeventkeycode",
  "level": 3
}, {
  "value": "OH_Input_GetKeyEventKeyCode()",
  "id": "oh_input_getkeyeventkeycode",
  "level": 3
}, {
  "value": "OH_Input_SetKeyEventActionTime()",
  "id": "oh_input_setkeyeventactiontime",
  "level": 3
}, {
  "value": "OH_Input_GetKeyEventActionTime()",
  "id": "oh_input_getkeyeventactiontime",
  "level": 3
}, {
  "value": "OH_Input_SetKeyEventWindowId()",
  "id": "oh_input_setkeyeventwindowid",
  "level": 3
}, {
  "value": "OH_Input_GetKeyEventWindowId()",
  "id": "oh_input_getkeyeventwindowid",
  "level": 3
}, {
  "value": "OH_Input_GetKeyEventDisplayId()",
  "id": "oh_input_getkeyeventdisplayid",
  "level": 3
}, {
  "value": "OH_Input_SetKeyEventDisplayId()",
  "id": "oh_input_setkeyeventdisplayid",
  "level": 3
}, {
  "value": "OH_Input_CreateMouseEvent()",
  "id": "oh_input_createmouseevent",
  "level": 3
}, {
  "value": "OH_Input_DestroyMouseEvent()",
  "id": "oh_input_destroymouseevent",
  "level": 3
}, {
  "value": "OH_Input_SetMouseEventAction()",
  "id": "oh_input_setmouseeventaction",
  "level": 3
}, {
  "value": "OH_Input_GetMouseEventAction()",
  "id": "oh_input_getmouseeventaction",
  "level": 3
}, {
  "value": "OH_Input_SetMouseEventDisplayX()",
  "id": "oh_input_setmouseeventdisplayx",
  "level": 3
}, {
  "value": "OH_Input_GetMouseEventDisplayX()",
  "id": "oh_input_getmouseeventdisplayx",
  "level": 3
}, {
  "value": "OH_Input_SetMouseEventDisplayY()",
  "id": "oh_input_setmouseeventdisplayy",
  "level": 3
}, {
  "value": "OH_Input_GetMouseEventDisplayY()",
  "id": "oh_input_getmouseeventdisplayy",
  "level": 3
}, {
  "value": "OH_Input_SetMouseEventButton()",
  "id": "oh_input_setmouseeventbutton",
  "level": 3
}, {
  "value": "OH_Input_GetMouseEventButton()",
  "id": "oh_input_getmouseeventbutton",
  "level": 3
}, {
  "value": "OH_Input_SetMouseEventAxisType()",
  "id": "oh_input_setmouseeventaxistype",
  "level": 3
}, {
  "value": "OH_Input_GetMouseEventAxisType()",
  "id": "oh_input_getmouseeventaxistype",
  "level": 3
}, {
  "value": "OH_Input_SetMouseEventAxisValue()",
  "id": "oh_input_setmouseeventaxisvalue",
  "level": 3
}, {
  "value": "OH_Input_GetMouseEventAxisValue()",
  "id": "oh_input_getmouseeventaxisvalue",
  "level": 3
}, {
  "value": "OH_Input_SetMouseEventActionTime()",
  "id": "oh_input_setmouseeventactiontime",
  "level": 3
}, {
  "value": "OH_Input_GetMouseEventActionTime()",
  "id": "oh_input_getmouseeventactiontime",
  "level": 3
}, {
  "value": "OH_Input_SetMouseEventWindowId()",
  "id": "oh_input_setmouseeventwindowid",
  "level": 3
}, {
  "value": "OH_Input_GetMouseEventWindowId()",
  "id": "oh_input_getmouseeventwindowid",
  "level": 3
}, {
  "value": "OH_Input_SetMouseEventDisplayId()",
  "id": "oh_input_setmouseeventdisplayid",
  "level": 3
}, {
  "value": "OH_Input_CreateTouchEvent()",
  "id": "oh_input_createtouchevent",
  "level": 3
}, {
  "value": "OH_Input_DestroyTouchEvent()",
  "id": "oh_input_destroytouchevent",
  "level": 3
}, {
  "value": "OH_Input_SetTouchEventAction()",
  "id": "oh_input_settoucheventaction",
  "level": 3
}, {
  "value": "OH_Input_GetTouchEventAction()",
  "id": "oh_input_gettoucheventaction",
  "level": 3
}, {
  "value": "OH_Input_SetTouchEventFingerId()",
  "id": "oh_input_settoucheventfingerid",
  "level": 3
}, {
  "value": "OH_Input_GetTouchEventFingerId()",
  "id": "oh_input_gettoucheventfingerid",
  "level": 3
}, {
  "value": "OH_Input_SetTouchEventDisplayX()",
  "id": "oh_input_settoucheventdisplayx",
  "level": 3
}, {
  "value": "OH_Input_GetTouchEventDisplayX()",
  "id": "oh_input_gettoucheventdisplayx",
  "level": 3
}, {
  "value": "OH_Input_SetTouchEventDisplayY()",
  "id": "oh_input_settoucheventdisplayy",
  "level": 3
}, {
  "value": "OH_Input_GetTouchEventDisplayY()",
  "id": "oh_input_gettoucheventdisplayy",
  "level": 3
}, {
  "value": "OH_Input_SetTouchEventActionTime()",
  "id": "oh_input_settoucheventactiontime",
  "level": 3
}, {
  "value": "OH_Input_GetTouchEventActionTime()",
  "id": "oh_input_gettoucheventactiontime",
  "level": 3
}, {
  "value": "OH_Input_SetTouchEventWindowId()",
  "id": "oh_input_settoucheventwindowid",
  "level": 3
}, {
  "value": "OH_Input_GetTouchEventWindowId()",
  "id": "oh_input_gettoucheventwindowid",
  "level": 3
}, {
  "value": "OH_Input_SetTouchEventDisplayId()",
  "id": "oh_input_settoucheventdisplayid",
  "level": 3
}, {
  "value": "OH_Input_GetTouchEventDisplayId()",
  "id": "oh_input_gettoucheventdisplayid",
  "level": 3
}, {
  "value": "OH_Input_CancelInjection()",
  "id": "oh_input_cancelinjection",
  "level": 3
}, {
  "value": "OH_Input_RequestInjection()",
  "id": "oh_input_requestinjection",
  "level": 3
}, {
  "value": "OH_Input_QueryAuthorizedStatus()",
  "id": "oh_input_queryauthorizedstatus",
  "level": 3
}, {
  "value": "OH_Input_CreateAxisEvent()",
  "id": "oh_input_createaxisevent",
  "level": 3
}, {
  "value": "OH_Input_DestroyAxisEvent()",
  "id": "oh_input_destroyaxisevent",
  "level": 3
}, {
  "value": "OH_Input_SetAxisEventAction()",
  "id": "oh_input_setaxiseventaction",
  "level": 3
}, {
  "value": "OH_Input_GetAxisEventAction()",
  "id": "oh_input_getaxiseventaction",
  "level": 3
}, {
  "value": "OH_Input_SetAxisEventDisplayX()",
  "id": "oh_input_setaxiseventdisplayx",
  "level": 3
}, {
  "value": "OH_Input_GetAxisEventDisplayX()",
  "id": "oh_input_getaxiseventdisplayx",
  "level": 3
}, {
  "value": "OH_Input_SetAxisEventDisplayY()",
  "id": "oh_input_setaxiseventdisplayy",
  "level": 3
}, {
  "value": "OH_Input_GetAxisEventDisplayY()",
  "id": "oh_input_getaxiseventdisplayy",
  "level": 3
}, {
  "value": "OH_Input_SetAxisEventAxisValue()",
  "id": "oh_input_setaxiseventaxisvalue",
  "level": 3
}, {
  "value": "OH_Input_GetAxisEventAxisValue()",
  "id": "oh_input_getaxiseventaxisvalue",
  "level": 3
}, {
  "value": "OH_Input_SetAxisEventActionTime()",
  "id": "oh_input_setaxiseventactiontime",
  "level": 3
}, {
  "value": "OH_Input_GetAxisEventActionTime()",
  "id": "oh_input_getaxiseventactiontime",
  "level": 3
}, {
  "value": "OH_Input_SetAxisEventType()",
  "id": "oh_input_setaxiseventtype",
  "level": 3
}, {
  "value": "OH_Input_GetAxisEventType()",
  "id": "oh_input_getaxiseventtype",
  "level": 3
}, {
  "value": "OH_Input_SetAxisEventSourceType()",
  "id": "oh_input_setaxiseventsourcetype",
  "level": 3
}, {
  "value": "OH_Input_GetAxisEventSourceType()",
  "id": "oh_input_getaxiseventsourcetype",
  "level": 3
}, {
  "value": "OH_Input_SetAxisEventWindowId()",
  "id": "oh_input_setaxiseventwindowid",
  "level": 3
}, {
  "value": "OH_Input_GetAxisEventWindowId()",
  "id": "oh_input_getaxiseventwindowid",
  "level": 3
}, {
  "value": "OH_Input_SetAxisEventDisplayId()",
  "id": "oh_input_setaxiseventdisplayid",
  "level": 3
}, {
  "value": "OH_Input_GetAxisEventDisplayId()",
  "id": "oh_input_getaxiseventdisplayid",
  "level": 3
}, {
  "value": "OH_Input_AddKeyEventMonitor()",
  "id": "oh_input_addkeyeventmonitor",
  "level": 3
}, {
  "value": "OH_Input_AddMouseEventMonitor()",
  "id": "oh_input_addmouseeventmonitor",
  "level": 3
}, {
  "value": "OH_Input_AddTouchEventMonitor()",
  "id": "oh_input_addtoucheventmonitor",
  "level": 3
}, {
  "value": "OH_Input_AddAxisEventMonitorForAll()",
  "id": "oh_input_addaxiseventmonitorforall",
  "level": 3
}, {
  "value": "OH_Input_AddAxisEventMonitor()",
  "id": "oh_input_addaxiseventmonitor",
  "level": 3
}, {
  "value": "OH_Input_RemoveKeyEventMonitor()",
  "id": "oh_input_removekeyeventmonitor",
  "level": 3
}, {
  "value": "OH_Input_RemoveMouseEventMonitor()",
  "id": "oh_input_removemouseeventmonitor",
  "level": 3
}, {
  "value": "OH_Input_RemoveTouchEventMonitor()",
  "id": "oh_input_removetoucheventmonitor",
  "level": 3
}, {
  "value": "OH_Input_RemoveAxisEventMonitorForAll()",
  "id": "oh_input_removeaxiseventmonitorforall",
  "level": 3
}, {
  "value": "OH_Input_RemoveAxisEventMonitor()",
  "id": "oh_input_removeaxiseventmonitor",
  "level": 3
}, {
  "value": "OH_Input_AddKeyEventInterceptor()",
  "id": "oh_input_addkeyeventinterceptor",
  "level": 3
}, {
  "value": "OH_Input_AddInputEventInterceptor()",
  "id": "oh_input_addinputeventinterceptor",
  "level": 3
}, {
  "value": "OH_Input_RemoveKeyEventInterceptor()",
  "id": "oh_input_removekeyeventinterceptor",
  "level": 3
}, {
  "value": "OH_Input_RemoveInputEventInterceptor()",
  "id": "oh_input_removeinputeventinterceptor",
  "level": 3
}, {
  "value": "OH_Input_GetIntervalSinceLastInput()",
  "id": "oh_input_getintervalsincelastinput",
  "level": 3
}, {
  "value": "OH_Input_CreateHotkey()",
  "id": "oh_input_createhotkey",
  "level": 3
}, {
  "value": "OH_Input_DestroyHotkey()",
  "id": "oh_input_destroyhotkey",
  "level": 3
}, {
  "value": "OH_Input_SetPreKeys()",
  "id": "oh_input_setprekeys",
  "level": 3
}, {
  "value": "OH_Input_GetPreKeys()",
  "id": "oh_input_getprekeys",
  "level": 3
}, {
  "value": "OH_Input_SetFinalKey()",
  "id": "oh_input_setfinalkey",
  "level": 3
}, {
  "value": "OH_Input_GetFinalKey()",
  "id": "oh_input_getfinalkey",
  "level": 3
}, {
  "value": "OH_Input_CreateAllSystemHotkeys()",
  "id": "oh_input_createallsystemhotkeys",
  "level": 3
}, {
  "value": "OH_Input_DestroyAllSystemHotkeys()",
  "id": "oh_input_destroyallsystemhotkeys",
  "level": 3
}, {
  "value": "OH_Input_GetAllSystemHotkeys()",
  "id": "oh_input_getallsystemhotkeys",
  "level": 3
}, {
  "value": "OH_Input_SetRepeat()",
  "id": "oh_input_setrepeat",
  "level": 3
}, {
  "value": "OH_Input_GetRepeat()",
  "id": "oh_input_getrepeat",
  "level": 3
}, {
  "value": "OH_Input_AddHotkeyMonitor()",
  "id": "oh_input_addhotkeymonitor",
  "level": 3
}, {
  "value": "OH_Input_RemoveHotkeyMonitor()",
  "id": "oh_input_removehotkeymonitor",
  "level": 3
}, {
  "value": "OH_Input_RegisterDeviceListener()",
  "id": "oh_input_registerdevicelistener",
  "level": 3
}, {
  "value": "OH_Input_UnregisterDeviceListener()",
  "id": "oh_input_unregisterdevicelistener",
  "level": 3
}, {
  "value": "OH_Input_UnregisterDeviceListeners()",
  "id": "oh_input_unregisterdevicelisteners",
  "level": 3
}, {
  "value": "OH_Input_GetDeviceIds()",
  "id": "oh_input_getdeviceids",
  "level": 3
}, {
  "value": "OH_Input_GetDevice()",
  "id": "oh_input_getdevice",
  "level": 3
}, {
  "value": "OH_Input_CreateDeviceInfo()",
  "id": "oh_input_createdeviceinfo",
  "level": 3
}, {
  "value": "OH_Input_DestroyDeviceInfo()",
  "id": "oh_input_destroydeviceinfo",
  "level": 3
}, {
  "value": "OH_Input_GetKeyboardType()",
  "id": "oh_input_getkeyboardtype",
  "level": 3
}, {
  "value": "OH_Input_GetDeviceId()",
  "id": "oh_input_getdeviceid",
  "level": 3
}, {
  "value": "OH_Input_GetDeviceName()",
  "id": "oh_input_getdevicename",
  "level": 3
}, {
  "value": "OH_Input_GetCapabilities()",
  "id": "oh_input_getcapabilities",
  "level": 3
}, {
  "value": "OH_Input_GetDeviceVersion()",
  "id": "oh_input_getdeviceversion",
  "level": 3
}, {
  "value": "OH_Input_GetDeviceProduct()",
  "id": "oh_input_getdeviceproduct",
  "level": 3
}, {
  "value": "OH_Input_GetDeviceVendor()",
  "id": "oh_input_getdevicevendor",
  "level": 3
}, {
  "value": "OH_Input_GetDeviceAddress()",
  "id": "oh_input_getdeviceaddress",
  "level": 3
}, {
  "value": "OH_Input_GetFunctionKeyState()",
  "id": "oh_input_getfunctionkeystate",
  "level": 3
}, {
  "value": "OH_Input_InjectTouchEvent()",
  "id": "oh_input_injecttouchevent",
  "level": 3
}, {
  "value": "OH_Input_InjectMouseEvent()",
  "id": "oh_input_injectmouseevent",
  "level": 3
}, {
  "value": "OH_Input_GetMouseEventDisplayId()",
  "id": "oh_input_getmouseeventdisplayid",
  "level": 3
}, {
  "value": "OH_Input_QueryMaxTouchPoints()",
  "id": "oh_input_querymaxtouchpoints",
  "level": 3
}, {
  "value": "OH_Input_InjectMouseEventGlobal()",
  "id": "oh_input_injectmouseeventglobal",
  "level": 3
}, {
  "value": "OH_Input_SetMouseEventGlobalX()",
  "id": "oh_input_setmouseeventglobalx",
  "level": 3
}, {
  "value": "OH_Input_GetMouseEventGlobalX()",
  "id": "oh_input_getmouseeventglobalx",
  "level": 3
}, {
  "value": "OH_Input_SetMouseEventGlobalY()",
  "id": "oh_input_setmouseeventglobaly",
  "level": 3
}, {
  "value": "OH_Input_GetMouseEventGlobalY()",
  "id": "oh_input_getmouseeventglobaly",
  "level": 3
}, {
  "value": "OH_Input_InjectTouchEventGlobal()",
  "id": "oh_input_injecttoucheventglobal",
  "level": 3
}, {
  "value": "OH_Input_SetTouchEventGlobalX()",
  "id": "oh_input_settoucheventglobalx",
  "level": 3
}, {
  "value": "OH_Input_GetTouchEventGlobalX()",
  "id": "oh_input_gettoucheventglobalx",
  "level": 3
}, {
  "value": "OH_Input_SetTouchEventGlobalY()",
  "id": "oh_input_settoucheventglobaly",
  "level": 3
}, {
  "value": "OH_Input_GetTouchEventGlobalY()",
  "id": "oh_input_gettoucheventglobaly",
  "level": 3
}, {
  "value": "OH_Input_SetAxisEventGlobalX()",
  "id": "oh_input_setaxiseventglobalx",
  "level": 3
}, {
  "value": "OH_Input_GetAxisEventGlobalX()",
  "id": "oh_input_getaxiseventglobalx",
  "level": 3
}, {
  "value": "OH_Input_SetAxisEventGlobalY()",
  "id": "oh_input_setaxiseventglobaly",
  "level": 3
}, {
  "value": "OH_Input_GetAxisEventGlobalY()",
  "id": "oh_input_getaxiseventglobaly",
  "level": 3
}, {
  "value": "OH_Input_GetPointerLocation()",
  "id": "oh_input_getpointerlocation",
  "level": 3
}, {
  "value": "OH_Input_GetKeyEventId()",
  "id": "oh_input_getkeyeventid",
  "level": 3
}, {
  "value": "OH_Input_AddKeyEventHook()",
  "id": "oh_input_addkeyeventhook",
  "level": 3
}, {
  "value": "OH_Input_RemoveKeyEventHook()",
  "id": "oh_input_removekeyeventhook",
  "level": 3
}, {
  "value": "OH_Input_DispatchToNextHandler()",
  "id": "oh_input_dispatchtonexthandler",
  "level": 3
}, {
  "value": "OH_Input_SetPointerVisible()",
  "id": "oh_input_setpointervisible",
  "level": 3
}, {
  "value": "OH_Input_GetPointerStyle()",
  "id": "oh_input_getpointerstyle",
  "level": 3
}, {
  "value": "OH_Input_SetPointerStyle()",
  "id": "oh_input_setpointerstyle",
  "level": 3
}, {
  "value": "OH_Input_CustomCursor_Create()",
  "id": "oh_input_customcursor_create",
  "level": 3
}, {
  "value": "OH_Input_CustomCursor_Destroy()",
  "id": "oh_input_customcursor_destroy",
  "level": 3
}, {
  "value": "OH_Input_CustomCursor_GetPixelMap()",
  "id": "oh_input_customcursor_getpixelmap",
  "level": 3
}, {
  "value": "OH_Input_CustomCursor_GetAnchor()",
  "id": "oh_input_customcursor_getanchor",
  "level": 3
}, {
  "value": "OH_Input_CursorConfig_Create()",
  "id": "oh_input_cursorconfig_create",
  "level": 3
}, {
  "value": "OH_Input_CursorConfig_Destroy()",
  "id": "oh_input_cursorconfig_destroy",
  "level": 3
}, {
  "value": "OH_Input_CursorConfig_IsFollowSystem()",
  "id": "oh_input_cursorconfig_isfollowsystem",
  "level": 3
}, {
  "value": "OH_Input_SetCustomCursor()",
  "id": "oh_input_setcustomcursor",
  "level": 3
}, {
  "value": "OH_Input_CursorInfo_Create()",
  "id": "oh_input_cursorinfo_create",
  "level": 3
}, {
  "value": "OH_Input_CursorInfo_Destroy()",
  "id": "oh_input_cursorinfo_destroy",
  "level": 3
}, {
  "value": "OH_Input_CursorInfo_IsVisible()",
  "id": "oh_input_cursorinfo_isvisible",
  "level": 3
}, {
  "value": "OH_Input_CursorInfo_GetStyle()",
  "id": "oh_input_cursorinfo_getstyle",
  "level": 3
}, {
  "value": "OH_Input_CursorInfo_GetSizeLevel()",
  "id": "oh_input_cursorinfo_getsizelevel",
  "level": 3
}, {
  "value": "OH_Input_CursorInfo_GetColor()",
  "id": "oh_input_cursorinfo_getcolor",
  "level": 3
}, {
  "value": "OH_Input_GetMouseEventCursorInfo()",
  "id": "oh_input_getmouseeventcursorinfo",
  "level": 3
}, {
  "value": "OH_Input_GetCursorInfo()",
  "id": "oh_input_getcursorinfo",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "oh_input_managerh",
        children: "oh_input_manager.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供事件注入和关键状态查询等功能。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <multimodalinput/oh_input_manager.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libohinput.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/input-api/input-c/input-module/capi-input/capi-input",
        children: "input"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "结构体",
      children: "结构体"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "typedef关键字"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-interceptoreventcallback/capi-input-input-interceptoreventcallback",
              children: "Input_InterceptorEventCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Input_InterceptorEventCallback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拦截回调事件结构体，拦截鼠标事件、触屏输入事件和轴事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-devicelistener/capi-input-input-devicelistener",
              children: "Input_DeviceListener"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Input_DeviceListener"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义一个结构体用于监听设备热插拔。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-oh-pixelmapnative/capi-input-oh-pixelmapnative",
              children: "OH_PixelmapNative"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_PixelmapNative"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "像素图。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-keystate/capi-input-input-keystate",
              children: "Input_KeyState"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Input_KeyState"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义按键信息，用于标识按键行为。例如，“Ctrl”按键信息包含键值和键类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-keyevent/capi-input-input-keyevent",
              children: "Input_KeyEvent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Input_KeyEvent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键事件对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-mouseevent/capi-input-input-mouseevent",
              children: "Input_MouseEvent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Input_MouseEvent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "鼠标事件对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-touchevent/capi-input-input-touchevent",
              children: "Input_TouchEvent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Input_TouchEvent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "触屏输入事件对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-axisevent/capi-input-input-axisevent",
              children: "Input_AxisEvent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Input_AxisEvent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "轴事件对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-hotkey/capi-input-input-hotkey",
              children: "Input_Hotkey"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Input_Hotkey"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义快捷键结构体。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-deviceinfo/capi-input-input-deviceinfo",
              children: "Input_DeviceInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Input_DeviceInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入设备信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-interceptoroptions/capi-input-input-interceptoroptions",
              children: "Input_InterceptorOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Input_InterceptorOptions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "事件拦截选项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-customcursor/capi-input-input-customcursor",
              children: "Input_CustomCursor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Input_CustomCursor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义鼠标光标像素图资源。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-cursorconfig/capi-input-input-cursorconfig",
              children: "Input_CursorConfig"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Input_CursorConfig"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义鼠标光标配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-cursorinfo/capi-input-input-cursorinfo",
              children: "Input_CursorInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Input_CursorInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义鼠标光标信息，包括光标显示状态、光标样式、光标大小档位、光标颜色。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "typedef关键字"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_keystateaction",
              children: "Input_KeyStateAction"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Input_KeyStateAction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键状态的枚举值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_keyeventaction",
              children: "Input_KeyEventAction"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Input_KeyEventAction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键事件类型的枚举值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_mouseeventaction",
              children: "Input_MouseEventAction"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Input_MouseEventAction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "鼠标动作的枚举值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#inputevent_mouseaxis",
              children: "InputEvent_MouseAxis"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "InputEvent_MouseAxis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "鼠标轴事件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_mouseeventbutton",
              children: "Input_MouseEventButton"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Input_MouseEventButton"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "鼠标按键的枚举值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_toucheventaction",
              children: "Input_TouchEventAction"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Input_TouchEventAction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "触屏动作的枚举值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_injectionstatus",
              children: "Input_InjectionStatus"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Input_InjectionStatus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注入权限状态枚举值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#inputevent_sourcetype",
              children: "InputEvent_SourceType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "InputEvent_SourceType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入事件源类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_keyboardtype",
              children: "Input_KeyboardType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Input_KeyboardType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入设备的键盘类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "Input_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Input_Result"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回值枚举值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "typedef关键字"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_hotkeycallback",
              children: "typedef void (*Input_HotkeyCallback)(Input_Hotkey* hotkey)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Input_HotkeyCallback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数，用于回调快捷键事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_keyeventcallback",
              children: "typedef void (*Input_KeyEventCallback)(const Input_KeyEvent* keyEvent)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Input_KeyEventCallback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键事件的回调函数，keyEvent的生命周期为回调函数内。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_mouseeventcallback",
              children: "typedef void (*Input_MouseEventCallback)(const Input_MouseEvent* mouseEvent)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Input_MouseEventCallback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "鼠标事件的回调函数，mouseEvent的生命周期为回调函数内。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_toucheventcallback",
              children: "typedef void (*Input_TouchEventCallback)(const Input_TouchEvent* touchEvent)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Input_TouchEventCallback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "触屏输入事件的回调函数，touchEvent的生命周期为回调函数内。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_axiseventcallback",
              children: "typedef void (*Input_AxisEventCallback)(const Input_AxisEvent* axisEvent)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Input_AxisEventCallback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "轴事件的回调函数，axisEvent的生命周期为回调函数内。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_deviceaddedcallback",
              children: "typedef void (*Input_DeviceAddedCallback)(int32_t deviceId)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Input_DeviceAddedCallback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数，用于回调输入设备的热插事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_deviceremovedcallback",
              children: "typedef void (*Input_DeviceRemovedCallback)(int32_t deviceId)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Input_DeviceRemovedCallback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数，用于回调输入设备的热拔事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_injectauthorizecallback",
              children: "typedef void (*Input_InjectAuthorizeCallback)(Input_InjectionStatus authorizedStatus)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Input_InjectAuthorizeCallback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数，用于获取注入权限状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_getkeystate",
              children: "Input_Result OH_Input_GetKeyState(struct Input_KeyState* keyState)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询按键状态的枚举对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createkeystate",
              children: "struct Input_KeyState* OH_Input_CreateKeyState()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建按键状态的枚举对象。通过调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroykeystate",
              children: "OH_Input_DestroyKeyState"
            }), "销毁按键状态的枚举对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroykeystate",
              children: "void OH_Input_DestroyKeyState(struct Input_KeyState** keyState)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁按键状态的枚举对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_setkeycode",
              children: "void OH_Input_SetKeyCode(struct Input_KeyState* keyState, int32_t keyCode)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置按键状态对象的键值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_getkeycode",
              children: "int32_t OH_Input_GetKeyCode(const struct Input_KeyState* keyState)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取按键状态对象的键值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_setkeypressed",
              children: "void OH_Input_SetKeyPressed(struct Input_KeyState* keyState, int32_t keyAction)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置按键状态对象的按键是否按下。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_getkeypressed",
              children: "int32_t OH_Input_GetKeyPressed(const struct Input_KeyState* keyState)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取按键状态对象的按键是否按下。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_setkeyswitch",
              children: "void OH_Input_SetKeySwitch(struct Input_KeyState* keyState, int32_t keySwitch)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置按键状态对象的按键开关。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_getkeyswitch",
              children: "int32_t OH_Input_GetKeySwitch(const struct Input_KeyState* keyState)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取按键状态对象的按键开关。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_injectkeyevent",
              children: "int32_t OH_Input_InjectKeyEvent(const struct Input_KeyEvent* keyEvent)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注入按键事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createkeyevent",
              children: "struct Input_KeyEvent* OH_Input_CreateKeyEvent()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建按键事件对象。通过调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroykeyevent",
              children: "OH_Input_DestroyKeyEvent"
            }), "销毁按键事件对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroykeyevent",
              children: "void OH_Input_DestroyKeyEvent(struct Input_KeyEvent** keyEvent)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁按键事件对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_setkeyeventaction",
              children: "void OH_Input_SetKeyEventAction(struct Input_KeyEvent* keyEvent, int32_t action)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置按键事件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_getkeyeventaction",
              children: "int32_t OH_Input_GetKeyEventAction(const struct Input_KeyEvent* keyEvent)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取按键事件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_setkeyeventkeycode",
              children: "void OH_Input_SetKeyEventKeyCode(struct Input_KeyEvent* keyEvent, int32_t keyCode)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置按键事件的键值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_getkeyeventkeycode",
              children: "int32_t OH_Input_GetKeyEventKeyCode(const struct Input_KeyEvent* keyEvent)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取按键事件的键值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_setkeyeventactiontime",
              children: "void OH_Input_SetKeyEventActionTime(struct Input_KeyEvent* keyEvent, int64_t actionTime)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置按键事件发生的时间。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_getkeyeventactiontime",
              children: "int64_t OH_Input_GetKeyEventActionTime(const struct Input_KeyEvent* keyEvent)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取按键事件发生的时间。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_setkeyeventwindowid",
              children: "void OH_Input_SetKeyEventWindowId(struct Input_KeyEvent* keyEvent, int32_t windowId)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置按键事件的窗口ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_getkeyeventwindowid",
              children: "int32_t OH_Input_GetKeyEventWindowId(const struct Input_KeyEvent* keyEvent)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取按键事件的窗口ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_setkeyeventdisplayid",
              children: "void OH_Input_SetKeyEventDisplayId(struct Input_KeyEvent* keyEvent, int32_t displayId)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置按键事件的屏幕ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_getkeyeventdisplayid",
              children: "int32_t OH_Input_GetKeyEventDisplayId(const struct Input_KeyEvent* keyEvent)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取按键事件的屏幕ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createmouseevent",
              children: "struct Input_MouseEvent* OH_Input_CreateMouseEvent()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建鼠标事件对象。通过调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroymouseevent",
              children: "OH_Input_DestroyMouseEvent"
            }), "销毁鼠标事件对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroymouseevent",
              children: "void OH_Input_DestroyMouseEvent(struct Input_MouseEvent** mouseEvent)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁鼠标事件对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_setmouseeventaction",
              children: "void OH_Input_SetMouseEventAction(struct Input_MouseEvent* mouseEvent, int32_t action)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置鼠标事件的动作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_getmouseeventaction",
              children: "int32_t OH_Input_GetMouseEventAction(const struct Input_MouseEvent* mouseEvent)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取鼠标事件的动作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_setmouseeventdisplayx",
              children: "void OH_Input_SetMouseEventDisplayX(struct Input_MouseEvent* mouseEvent, int32_t displayX)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置鼠标事件以指定屏幕左上角为原点的相对坐标系的X坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_getmouseeventdisplayx",
              children: "int32_t OH_Input_GetMouseEventDisplayX(const struct Input_MouseEvent* mouseEvent)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取鼠标事件以指定屏幕左上角为原点的相对坐标系的X坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_setmouseeventdisplayy",
              children: "void OH_Input_SetMouseEventDisplayY(struct Input_MouseEvent* mouseEvent, int32_t displayY)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置鼠标事件以指定屏幕左上角为原点的相对坐标系的Y坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_getmouseeventdisplayy",
              children: "int32_t OH_Input_GetMouseEventDisplayY(const struct Input_MouseEvent* mouseEvent)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取鼠标事件以指定屏幕左上角为原点的相对坐标系的Y坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_setmouseeventbutton",
              children: "void OH_Input_SetMouseEventButton(struct Input_MouseEvent* mouseEvent, int32_t button)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置鼠标事件的按键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_getmouseeventbutton",
              children: "int32_t OH_Input_GetMouseEventButton(const struct Input_MouseEvent* mouseEvent)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取鼠标事件的按键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_setmouseeventaxistype",
              children: "void OH_Input_SetMouseEventAxisType(struct Input_MouseEvent* mouseEvent, int32_t axisType)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置鼠标轴事件的类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_getmouseeventaxistype",
              children: "int32_t OH_Input_GetMouseEventAxisType(const struct Input_MouseEvent* mouseEvent)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取鼠标轴事件的类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_setmouseeventaxisvalue",
              children: "void OH_Input_SetMouseEventAxisValue(struct Input_MouseEvent* mouseEvent, float axisValue)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置鼠标轴事件的值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_getmouseeventaxisvalue",
              children: "float OH_Input_GetMouseEventAxisValue(const struct Input_MouseEvent* mouseEvent)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取鼠标轴事件的值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_setmouseeventactiontime",
              children: "void OH_Input_SetMouseEventActionTime(struct Input_MouseEvent* mouseEvent, int64_t actionTime)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置鼠标事件发生的时间。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_getmouseeventactiontime",
              children: "int64_t OH_Input_GetMouseEventActionTime(const struct Input_MouseEvent* mouseEvent)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取鼠标事件发生的时间。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_setmouseeventwindowid",
              children: "void OH_Input_SetMouseEventWindowId(struct Input_MouseEvent* mouseEvent, int32_t windowId)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置鼠标事件的窗口ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_getmouseeventwindowid",
              children: "int32_t OH_Input_GetMouseEventWindowId(const struct Input_MouseEvent* mouseEvent)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取鼠标事件的窗口ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_setmouseeventdisplayid",
              children: "void OH_Input_SetMouseEventDisplayId(struct Input_MouseEvent* mouseEvent, int32_t displayId)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置鼠标事件的屏幕ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createtouchevent",
              children: "struct Input_TouchEvent* OH_Input_CreateTouchEvent()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建触屏输入事件对象。通过调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroytouchevent",
              children: "OH_Input_DestroyTouchEvent"
            }), "销毁触屏输入事件对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroytouchevent",
              children: "void OH_Input_DestroyTouchEvent(struct Input_TouchEvent** touchEvent)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁触屏输入事件对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_settoucheventaction",
              children: "void OH_Input_SetTouchEventAction(struct Input_TouchEvent* touchEvent, int32_t action)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置触屏输入事件的动作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_gettoucheventaction",
              children: "int32_t OH_Input_GetTouchEventAction(const struct Input_TouchEvent* touchEvent)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取触屏输入事件的动作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_settoucheventfingerid",
              children: "void OH_Input_SetTouchEventFingerId(struct Input_TouchEvent* touchEvent, int32_t id)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置触屏输入事件的手指ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_gettoucheventfingerid",
              children: "int32_t OH_Input_GetTouchEventFingerId(const struct Input_TouchEvent* touchEvent)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取触屏输入事件的手指ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_settoucheventdisplayx",
              children: "void OH_Input_SetTouchEventDisplayX(struct Input_TouchEvent* touchEvent, int32_t displayX)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置触屏输入事件以指定屏幕左上角为原点的相对坐标系的X坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_gettoucheventdisplayx",
              children: "int32_t OH_Input_GetTouchEventDisplayX(const struct Input_TouchEvent* touchEvent)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取触屏输入事件以指定屏幕左上角为原点的相对坐标系的X坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_settoucheventdisplayy",
              children: "void OH_Input_SetTouchEventDisplayY(struct Input_TouchEvent* touchEvent, int32_t displayY)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置触屏输入事件以指定屏幕左上角为原点的相对坐标系的Y坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_gettoucheventdisplayy",
              children: "int32_t OH_Input_GetTouchEventDisplayY(const struct Input_TouchEvent* touchEvent)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取触屏输入事件以指定屏幕左上角为原点的相对坐标系的Y坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_settoucheventactiontime",
              children: "void OH_Input_SetTouchEventActionTime(struct Input_TouchEvent* touchEvent, int64_t actionTime)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置触屏输入事件发生的时间。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_gettoucheventactiontime",
              children: "int64_t OH_Input_GetTouchEventActionTime(const struct Input_TouchEvent* touchEvent)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取触屏输入事件发生的时间。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_settoucheventwindowid",
              children: "void OH_Input_SetTouchEventWindowId(struct Input_TouchEvent* touchEvent, int32_t windowId)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置触屏输入事件的窗口ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_gettoucheventwindowid",
              children: "int32_t OH_Input_GetTouchEventWindowId(const struct Input_TouchEvent* touchEvent)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取触屏输入事件的窗口ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_settoucheventdisplayid",
              children: "void OH_Input_SetTouchEventDisplayId(struct Input_TouchEvent* touchEvent, int32_t displayId)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置触屏输入事件的屏幕ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_gettoucheventdisplayid",
              children: "int32_t OH_Input_GetTouchEventDisplayId(const struct Input_TouchEvent* touchEvent)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取触屏输入事件的屏幕ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_cancelinjection",
              children: "void OH_Input_CancelInjection()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消事件注入并撤销授权。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_requestinjection",
              children: "Input_Result OH_Input_RequestInjection(Input_InjectAuthorizeCallback callback)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["当前应用申请注入权限，包括申请注入按键事件", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-input-manager-h/capi-oh-input-manager-h#oh_input_injectkeyevent",
              children: "OH_Input_InjectKeyEvent"
            }), "、注入触屏输入事件", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-input-manager-h/capi-oh-input-manager-h#oh_input_injecttouchevent",
              children: "OH_Input_InjectTouchEvent"
            }), "、注入鼠标事件", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-input-manager-h/capi-oh-input-manager-h#oh_input_injectmouseevent",
              children: "OH_Input_InjectMouseEvent"
            }), "等注入操作的权限。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_queryauthorizedstatus",
              children: "Input_Result OH_Input_QueryAuthorizedStatus(Input_InjectionStatus* status)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询当前应用注入的权限状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createaxisevent",
              children: "Input_AxisEvent* OH_Input_CreateAxisEvent(void)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建轴事件对象。通过调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroyaxisevent",
              children: "OH_Input_DestroyAxisEvent"
            }), "销毁轴事件对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroyaxisevent",
              children: "Input_Result OH_Input_DestroyAxisEvent(Input_AxisEvent** axisEvent)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁轴事件对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_setaxiseventaction",
              children: "Input_Result OH_Input_SetAxisEventAction(Input_AxisEvent* axisEvent, InputEvent_AxisAction action)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置轴事件的动作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_getaxiseventaction",
              children: "Input_Result OH_Input_GetAxisEventAction(const Input_AxisEvent* axisEvent, InputEvent_AxisAction *action)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取轴事件的动作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_setaxiseventdisplayx",
              children: "Input_Result OH_Input_SetAxisEventDisplayX(Input_AxisEvent* axisEvent, float displayX)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置轴事件以指定屏幕左上角为原点的相对坐标系的X坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_getaxiseventdisplayx",
              children: "Input_Result OH_Input_GetAxisEventDisplayX(const Input_AxisEvent* axisEvent, float* displayX)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取轴事件以指定屏幕左上角为原点的相对坐标系的X坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_setaxiseventdisplayy",
              children: "Input_Result OH_Input_SetAxisEventDisplayY(Input_AxisEvent* axisEvent, float displayY)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置轴事件以指定屏幕左上角为原点的相对坐标系的Y坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_getaxiseventdisplayy",
              children: "Input_Result OH_Input_GetAxisEventDisplayY(const Input_AxisEvent* axisEvent, float* displayY)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取轴事件以指定屏幕左上角为原点的相对坐标系的Y坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_setaxiseventaxisvalue",
              children: "Input_Result OH_Input_SetAxisEventAxisValue(Input_AxisEvent* axisEvent,InputEvent_AxisType axisType, double axisValue)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置轴事件指定轴类型的轴值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_getaxiseventaxisvalue",
              children: "Input_Result OH_Input_GetAxisEventAxisValue(const Input_AxisEvent* axisEvent,InputEvent_AxisType axisType, double* axisValue)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取轴事件指定轴类型的轴值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_setaxiseventactiontime",
              children: "Input_Result OH_Input_SetAxisEventActionTime(Input_AxisEvent* axisEvent, int64_t actionTime)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置轴事件发生的时间。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_getaxiseventactiontime",
              children: "Input_Result OH_Input_GetAxisEventActionTime(const Input_AxisEvent* axisEvent, int64_t* actionTime)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取轴事件发生的时间。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_setaxiseventtype",
              children: "Input_Result OH_Input_SetAxisEventType(Input_AxisEvent* axisEvent, InputEvent_AxisEventType axisEventType)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置轴事件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_getaxiseventtype",
              children: "Input_Result OH_Input_GetAxisEventType(const Input_AxisEvent* axisEvent, InputEvent_AxisEventType* axisEventType)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取轴事件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_setaxiseventsourcetype",
              children: "Input_Result OH_Input_SetAxisEventSourceType(Input_AxisEvent* axisEvent, InputEvent_SourceType sourceType)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置轴事件源类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_getaxiseventsourcetype",
              children: "Input_Result OH_Input_GetAxisEventSourceType(const Input_AxisEvent* axisEvent, InputEvent_SourceType* sourceType)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取轴事件源类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_setaxiseventwindowid",
              children: "Input_Result OH_Input_SetAxisEventWindowId(Input_AxisEvent* axisEvent, int32_t windowId)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置轴事件的窗口ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_getaxiseventwindowid",
              children: "Input_Result OH_Input_GetAxisEventWindowId(const Input_AxisEvent* axisEvent, int32_t* windowId)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取轴事件的窗口ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_setaxiseventdisplayid",
              children: "Input_Result OH_Input_SetAxisEventDisplayId(Input_AxisEvent* axisEvent, int32_t displayId)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置轴事件的屏幕ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_getaxiseventdisplayid",
              children: "Input_Result OH_Input_GetAxisEventDisplayId(const Input_AxisEvent* axisEvent, int32_t* displayId)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取轴事件的屏幕ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_addkeyeventmonitor",
              children: "Input_Result OH_Input_AddKeyEventMonitor(Input_KeyEventCallback callback)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "添加按键事件监听。重复添加只有第一次生效，后续添加请求将被忽略。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_addmouseeventmonitor",
              children: "Input_Result OH_Input_AddMouseEventMonitor(Input_MouseEventCallback callback)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "添加鼠标事件监听，包含鼠标点击，移动，不包含滚轮事件，滚轮事件归属于轴事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_addtoucheventmonitor",
              children: "Input_Result OH_Input_AddTouchEventMonitor(Input_TouchEventCallback callback)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "添加触屏输入事件监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_addaxiseventmonitorforall",
              children: "Input_Result OH_Input_AddAxisEventMonitorForAll(Input_AxisEventCallback callback)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["添加所有类型轴事件监听，轴事件类型定义在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-axis-type-h/capi-oh-axis-type-h#inputevent_axiseventtype",
              children: "InputEvent_AxisEventType"
            }), "中。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_addaxiseventmonitor",
              children: "Input_Result OH_Input_AddAxisEventMonitor(InputEvent_AxisEventType axisEventType, Input_AxisEventCallback callback)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["添加指定类型的轴事件监听，轴事件类型定义在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-axis-type-h/capi-oh-axis-type-h#inputevent_axiseventtype",
              children: "InputEvent_AxisEventType"
            }), "中。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_removekeyeventmonitor",
              children: "Input_Result OH_Input_RemoveKeyEventMonitor(Input_KeyEventCallback callback)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "移除按键事件监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_removemouseeventmonitor",
              children: "Input_Result OH_Input_RemoveMouseEventMonitor(Input_MouseEventCallback callback)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "移除鼠标事件监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_removetoucheventmonitor",
              children: "Input_Result OH_Input_RemoveTouchEventMonitor(Input_TouchEventCallback callback)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "移除触屏输入事件监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_removeaxiseventmonitorforall",
              children: "Input_Result OH_Input_RemoveAxisEventMonitorForAll(Input_AxisEventCallback callback)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "移除所有类型轴事件监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_removeaxiseventmonitor",
              children: "Input_Result OH_Input_RemoveAxisEventMonitor(InputEvent_AxisEventType axisEventType, Input_AxisEventCallback callback)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["移除指定类型轴事件监听，轴事件类型定义在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-axis-type-h/capi-oh-axis-type-h#inputevent_axiseventtype",
              children: "InputEvent_AxisEventType"
            }), "中。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_addkeyeventinterceptor",
              children: "Input_Result OH_Input_AddKeyEventInterceptor(Input_KeyEventCallback callback, Input_InterceptorOptions *option)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["添加按键事件的拦截，重复添加只有第一次生效，后续添加请求返回错误码", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_REPEAT_INTERCEPTOR"
            }), "。仅在应用获焦时拦截按键事件。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_addinputeventinterceptor",
              children: "Input_Result OH_Input_AddInputEventInterceptor(Input_InterceptorEventCallback *callback,Input_InterceptorOptions *option)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["添加输入事件拦截，包括鼠标、触屏和轴事件。重复添加只有第一次生效，后续添加请求返回错误码", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_REPEAT_INTERCEPTOR"
            }), "。仅命中应用窗口时拦截输入事件。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_removekeyeventinterceptor",
              children: "Input_Result OH_Input_RemoveKeyEventInterceptor(void)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "移除按键事件拦截。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_removeinputeventinterceptor",
              children: "Input_Result OH_Input_RemoveInputEventInterceptor(void)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "移除输入事件拦截，包括鼠标、触屏和轴事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_getintervalsincelastinput",
              children: "Input_Result OH_Input_GetIntervalSinceLastInput(int64_t *timeInterval)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取距离上次系统输入事件的时间间隔。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createhotkey",
              children: "Input_Hotkey *OH_Input_CreateHotkey(void)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建快捷键对象。通过调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroyhotkey",
              children: "OH_Input_DestroyHotkey"
            }), "销毁快捷键对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroyhotkey",
              children: "void OH_Input_DestroyHotkey(Input_Hotkey **hotkey)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁快捷键对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_setprekeys",
              children: "void OH_Input_SetPreKeys(Input_Hotkey *hotkey, int32_t *preKeys, int32_t size)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置修饰键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_getprekeys",
              children: "Input_Result OH_Input_GetPreKeys(const Input_Hotkey *hotkey, int32_t **preKeys, int32_t *preKeyCount)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取修饰键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_setfinalkey",
              children: "void OH_Input_SetFinalKey(Input_Hotkey* hotkey, int32_t finalKey)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置被修饰键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_getfinalkey",
              children: "Input_Result OH_Input_GetFinalKey(const Input_Hotkey* hotkey, int32_t *finalKeyCode)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取被修饰键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createallsystemhotkeys",
              children: "Input_Hotkey **OH_Input_CreateAllSystemHotkeys(int32_t count)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-hotkey/capi-input-input-hotkey",
              children: "Input_Hotkey"
            }), "类型实例的数组。通过调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroyallsystemhotkeys",
              children: "OH_Input_DestroyAllSystemHotkeys"
            }), "销毁", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-hotkey/capi-input-input-hotkey",
              children: "Input_Hotkey"
            }), "实例数组并回收内存。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroyallsystemhotkeys",
              children: "void OH_Input_DestroyAllSystemHotkeys(Input_Hotkey **hotkeys, int32_t count)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["销毁", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-hotkey/capi-input-input-hotkey",
              children: "Input_Hotkey"
            }), "实例数组并回收内存。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_getallsystemhotkeys",
              children: "Input_Result OH_Input_GetAllSystemHotkeys(Input_Hotkey **hotkey, int32_t *count)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取设置的所有快捷键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_setrepeat",
              children: "void OH_Input_SetRepeat(Input_Hotkey* hotkey, bool isRepeat)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置是否上报重复key事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_getrepeat",
              children: "Input_Result OH_Input_GetRepeat(const Input_Hotkey* hotkey, bool *isRepeat)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取是否上报重复key事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_addhotkeymonitor",
              children: "Input_Result OH_Input_AddHotkeyMonitor(const Input_Hotkey* hotkey, Input_HotkeyCallback callback)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "订阅快捷键事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_removehotkeymonitor",
              children: "Input_Result OH_Input_RemoveHotkeyMonitor(const Input_Hotkey* hotkey, Input_HotkeyCallback callback)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消订阅快捷键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_registerdevicelistener",
              children: "Input_Result OH_Input_RegisterDeviceListener(Input_DeviceListener* listener)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册设备热插拔的监听器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_unregisterdevicelistener",
              children: "Input_Result OH_Input_UnregisterDeviceListener(Input_DeviceListener* listener)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册设备热插拔的监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_unregisterdevicelisteners",
              children: "Input_Result OH_Input_UnregisterDeviceListeners()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册所有的设备热插拔的监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_getdeviceids",
              children: "Input_Result OH_Input_GetDeviceIds(int32_t *deviceIds, int32_t inSize, int32_t *outSize)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取所有输入设备的ID列表。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_getdevice",
              children: "Input_Result OH_Input_GetDevice(int32_t deviceId, Input_DeviceInfo **deviceInfo)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取输入设备信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createdeviceinfo",
              children: "Input_DeviceInfo* OH_Input_CreateDeviceInfo(void)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建输入设备信息的对象。通过调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroydeviceinfo",
              children: "OH_Input_DestroyDeviceInfo"
            }), "销毁输入设备信息的对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroydeviceinfo",
              children: "void OH_Input_DestroyDeviceInfo(Input_DeviceInfo **deviceInfo)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁输入设备信息的对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_getkeyboardtype",
              children: "Input_Result OH_Input_GetKeyboardType(int32_t deviceId, int32_t *keyboardType)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取输入设备的键盘类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_getdeviceid",
              children: "Input_Result OH_Input_GetDeviceId(Input_DeviceInfo *deviceInfo, int32_t *id)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取输入设备的ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_getdevicename",
              children: "Input_Result OH_Input_GetDeviceName(Input_DeviceInfo *deviceInfo, char **name)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取输入设备的名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_getcapabilities",
              children: "Input_Result OH_Input_GetCapabilities(Input_DeviceInfo *deviceInfo, int32_t *capabilities)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取有关输入设备能力信息，比如设备是触摸屏、触控板、键盘等。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_getdeviceversion",
              children: "Input_Result OH_Input_GetDeviceVersion(Input_DeviceInfo *deviceInfo, int32_t *version)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取输入设备的版本信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_getdeviceproduct",
              children: "Input_Result OH_Input_GetDeviceProduct(Input_DeviceInfo *deviceInfo, int32_t *product)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取输入设备的产品信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_getdevicevendor",
              children: "Input_Result OH_Input_GetDeviceVendor(Input_DeviceInfo *deviceInfo, int32_t *vendor)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取输入设备的厂商信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_getdeviceaddress",
              children: "Input_Result OH_Input_GetDeviceAddress(Input_DeviceInfo *deviceInfo, char **address)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取输入设备的物理地址。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_getfunctionkeystate",
              children: "Input_Result OH_Input_GetFunctionKeyState(int32_t keyCode, int32_t *state)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取功能键状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_injecttouchevent",
              children: "int32_t OH_Input_InjectTouchEvent(const struct Input_TouchEvent* touchEvent)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用以指定屏幕左上角为原点的相对坐标系的坐标注入触屏输入事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_injectmouseevent",
              children: "int32_t OH_Input_InjectMouseEvent(const struct Input_MouseEvent* mouseEvent)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用以指定屏幕左上角为原点的相对坐标系的坐标注入鼠标事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_getmouseeventdisplayid",
              children: "int32_t OH_Input_GetMouseEventDisplayId(const struct Input_MouseEvent* mouseEvent)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取鼠标事件的屏幕ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_querymaxtouchpoints",
              children: "Input_Result OH_Input_QueryMaxTouchPoints(int32_t *count)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询设备支持的最大触屏报点数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_injectmouseeventglobal",
              children: "int32_t OH_Input_InjectMouseEventGlobal(const struct Input_MouseEvent* mouseEvent)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用以主屏左上角为原点的全局坐标系的坐标注入鼠标事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_setmouseeventglobalx",
              children: "void OH_Input_SetMouseEventGlobalX(struct Input_MouseEvent* mouseEvent, int32_t globalX)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置鼠标事件以主屏左上角为原点的全局坐标系的X坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_getmouseeventglobalx",
              children: "int32_t OH_Input_GetMouseEventGlobalX(const struct Input_MouseEvent* mouseEvent)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取鼠标事件以主屏左上角为原点的全局坐标系的X坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_setmouseeventglobaly",
              children: "void OH_Input_SetMouseEventGlobalY(struct Input_MouseEvent* mouseEvent, int32_t globalY)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置鼠标事件以主屏左上角为原点的全局坐标系的Y坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_getmouseeventglobaly",
              children: "int32_t OH_Input_GetMouseEventGlobalY(const struct Input_MouseEvent* mouseEvent)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取鼠标事件以主屏左上角为原点的全局坐标系的Y坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_injecttoucheventglobal",
              children: "int32_t OH_Input_InjectTouchEventGlobal(const struct Input_TouchEvent* touchEvent)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用以主屏左上角为原点的全局坐标系的坐标注入触屏输入事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_settoucheventglobalx",
              children: "void OH_Input_SetTouchEventGlobalX(struct Input_TouchEvent* touchEvent, int32_t globalX)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置触屏输入事件以主屏左上角为原点的全局坐标系的X坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_gettoucheventglobalx",
              children: "int32_t OH_Input_GetTouchEventGlobalX(const struct Input_TouchEvent* touchEvent)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取触屏输入事件以主屏左上角为原点的全局坐标系的X坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_settoucheventglobaly",
              children: "void OH_Input_SetTouchEventGlobalY(struct Input_TouchEvent* touchEvent, int32_t globalY)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置触屏输入事件以主屏左上角为原点的全局坐标系的Y坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_gettoucheventglobaly",
              children: "int32_t OH_Input_GetTouchEventGlobalY(const struct Input_TouchEvent* touchEvent)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取触屏输入事件以主屏左上角为原点的全局坐标系的Y坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_setaxiseventglobalx",
              children: "Input_Result OH_Input_SetAxisEventGlobalX(struct Input_AxisEvent* axisEvent, int32_t globalX)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置轴事件以主屏左上角为原点的全局坐标系的X坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_getaxiseventglobalx",
              children: "Input_Result OH_Input_GetAxisEventGlobalX(const Input_AxisEvent* axisEvent, int32_t* globalX)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取轴事件以主屏左上角为原点的全局坐标系的X坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_setaxiseventglobaly",
              children: "Input_Result OH_Input_SetAxisEventGlobalY(struct Input_AxisEvent* axisEvent, int32_t globalY)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置轴事件以主屏左上角为原点的全局坐标系的Y坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_getaxiseventglobaly",
              children: "Input_Result OH_Input_GetAxisEventGlobalY(const Input_AxisEvent* axisEvent, int32_t* globalY)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取轴事件以主屏左上角为原点的全局坐标系的Y坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_getpointerlocation",
              children: "Input_Result OH_Input_GetPointerLocation(int32_t *displayId, double *displayX, double *displayY)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取鼠标在屏幕上的坐标点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_getkeyeventid",
              children: "Input_Result OH_Input_GetKeyEventId(const struct Input_KeyEvent* keyEvent, int32_t* eventId)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取按键事件的ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_addkeyeventhook",
              children: "Input_Result OH_Input_AddKeyEventHook(Input_KeyEventCallback callback)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "添加一个按键事件拦截钩子函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_removekeyeventhook",
              children: "Input_Result OH_Input_RemoveKeyEventHook(Input_KeyEventCallback callback)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "移除按键事件拦截钩子函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_dispatchtonexthandler",
              children: "Input_Result OH_Input_DispatchToNextHandler(int32_t eventId)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "重新分发按键事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_setpointervisible",
              children: "Input_Result OH_Input_SetPointerVisible(bool visible)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置当前窗口的鼠标光标的显示或隐藏状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_getpointerstyle",
              children: "Input_Result OH_Input_GetPointerStyle(int32_t windowId, int32_t *pointerStyle)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取指定窗口的鼠标光标样式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_setpointerstyle",
              children: "Input_Result OH_Input_SetPointerStyle(int32_t windowId, int32_t pointerStyle)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置指定窗口的鼠标光标样式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_customcursor_create",
              children: "Input_CustomCursor* OH_Input_CustomCursor_Create(OH_PixelmapNative* pixelMap, int32_t anchorX, int32_t anchorY)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建自定义鼠标光标资源对象。通过调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_customcursor_destroy",
              children: "OH_Input_CustomCursor_Destroy"
            }), "销毁自定义鼠标光标资源对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_customcursor_destroy",
              children: "void OH_Input_CustomCursor_Destroy(Input_CustomCursor** customCursor)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁自定义鼠标光标资源对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_customcursor_getpixelmap",
              children: "Input_Result OH_Input_CustomCursor_GetPixelMap(Input_CustomCursor* customCursor, OH_PixelmapNative** pixelMap)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取指定自定义鼠标光标资源的自定义鼠标光标像素图。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_customcursor_getanchor",
              children: "Input_Result OH_Input_CustomCursor_GetAnchor(Input_CustomCursor* customCursor, int32_t* anchorX, int32_t* anchorY)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取指定自定义鼠标光标资源的焦点坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_cursorconfig_create",
              children: "Input_CursorConfig* OH_Input_CursorConfig_Create(bool followSystem)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建自定义鼠标光标配置对象。通过调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_cursorconfig_destroy",
              children: "OH_Input_CursorConfig_Destroy"
            }), "销毁自定义鼠标光标配置对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_cursorconfig_destroy",
              children: "void OH_Input_CursorConfig_Destroy(Input_CursorConfig** cursorConfig)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁自定义鼠标光标配置对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_cursorconfig_isfollowsystem",
              children: "Input_Result OH_Input_CursorConfig_IsFollowSystem(Input_CursorConfig *cursorConfig, bool *followSystem)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询自定义鼠标光标配置是否跟随系统设置调整光标大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_setcustomcursor",
              children: "Input_Result OH_Input_SetCustomCursor(int32_t windowId, Input_CustomCursor* customCursor, Input_CursorConfig* cursorConfig)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置自定义鼠标光标样式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_cursorinfo_create",
              children: "struct Input_CursorInfo* OH_Input_CursorInfo_Create()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建鼠标光标信息对象。通过调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_cursorinfo_destroy",
              children: "OH_Input_CursorInfo_Destroy"
            }), "销毁鼠标光标信息对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_cursorinfo_destroy",
              children: "void OH_Input_CursorInfo_Destroy(Input_CursorInfo** cursorInfo)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁鼠标光标信息对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_cursorinfo_isvisible",
              children: "Input_Result OH_Input_CursorInfo_IsVisible(Input_CursorInfo* cursorInfo, bool* visible)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取指定鼠标光标信息对象对应的光标显示状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_cursorinfo_getstyle",
              children: "Input_Result OH_Input_CursorInfo_GetStyle(Input_CursorInfo* cursorInfo, Input_PointerStyle* style)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取指定鼠标光标信息对象对应的光标样式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_cursorinfo_getsizelevel",
              children: "Input_Result OH_Input_CursorInfo_GetSizeLevel(Input_CursorInfo* cursorInfo, int32_t* sizeLevel)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取指定鼠标光标信息对象对应的光标大小档位。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_cursorinfo_getcolor",
              children: "Input_Result OH_Input_CursorInfo_GetColor(Input_CursorInfo* cursorInfo, uint32_t* color)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取指定鼠标光标信息对象对应的光标颜色, 使用32位ARGB整数表示。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_getmouseeventcursorinfo",
              children: "Input_Result OH_Input_GetMouseEventCursorInfo(const struct Input_MouseEvent* mouseEvent, Input_CursorInfo* cursorInfo)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取鼠标事件的鼠标光标信息，包括光标显示状态、光标样式、光标大小档位、光标颜色。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_getcursorinfo",
              children: "Input_Result OH_Input_GetCursorInfo(Input_CursorInfo* cursorInfo, OH_PixelmapNative** pixelmap)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["查询当前鼠标光标信息，包括光标显示状态、光标样式、光标大小档位、光标颜色。如果pixelmap参数非空，且光标样式为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-pointer-style-h/capi-oh-pointer-style-h#input_pointerstyle",
              children: "DEVELOPER_DEFINED_ICON"
            }), "，则会同时返回光标的PixelMap位图对象。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "input_keystateaction",
      children: "Input_KeyStateAction"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Input_KeyStateAction\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "按键状态的枚举值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_DEFAULT = -1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_PRESSED = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键按下。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_RELEASED = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键抬起。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_SWITCH_ON = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键开关使能。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_SWITCH_OFF = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键开关去使能。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "input_keyeventaction",
      children: "Input_KeyEventAction"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Input_KeyEventAction\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "按键事件类型的枚举值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_ACTION_CANCEL = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键动作取消。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_ACTION_DOWN = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键按下。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEY_ACTION_UP = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键抬起。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "input_mouseeventaction",
      children: "Input_MouseEventAction"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Input_MouseEventAction\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "鼠标动作的枚举值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MOUSE_ACTION_CANCEL = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消鼠标动作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MOUSE_ACTION_MOVE = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "移动鼠标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MOUSE_ACTION_BUTTON_DOWN = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按下鼠标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MOUSE_ACTION_BUTTON_UP = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "抬起鼠标按键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MOUSE_ACTION_AXIS_BEGIN = 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "鼠标轴事件开始。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MOUSE_ACTION_AXIS_UPDATE = 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "更新鼠标轴事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MOUSE_ACTION_AXIS_END = 6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "鼠标轴事件结束。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "inputevent_mouseaxis",
      children: "InputEvent_MouseAxis"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum InputEvent_MouseAxis\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "鼠标轴事件类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MOUSE_AXIS_SCROLL_VERTICAL = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "垂直滚动轴。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MOUSE_AXIS_SCROLL_HORIZONTAL = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "水平滚动轴。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "input_mouseeventbutton",
      children: "Input_MouseEventButton"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Input_MouseEventButton\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "鼠标按键的枚举值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MOUSE_BUTTON_NONE = -1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无效按键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MOUSE_BUTTON_LEFT = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "鼠标左键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MOUSE_BUTTON_MIDDLE = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "鼠标中间键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MOUSE_BUTTON_RIGHT = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "鼠标右键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MOUSE_BUTTON_FORWARD = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "鼠标前进键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MOUSE_BUTTON_BACK = 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "鼠标返回键。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "input_toucheventaction",
      children: "Input_TouchEventAction"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Input_TouchEventAction\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "触屏动作的枚举值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TOUCH_ACTION_CANCEL = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "触屏取消。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TOUCH_ACTION_DOWN = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "触屏按下。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TOUCH_ACTION_MOVE = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "触屏移动。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TOUCH_ACTION_UP = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "触屏抬起。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "input_injectionstatus",
      children: "Input_InjectionStatus"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Input_InjectionStatus\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注入权限状态枚举值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UNAUTHORIZED = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "未授权。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUTHORIZING = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "授权中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUTHORIZED = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "已授权。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "inputevent_sourcetype",
      children: "InputEvent_SourceType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum InputEvent_SourceType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "输入事件源类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SOURCE_TYPE_MOUSE = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示输入源生成鼠标光标移动、按键按下和释放以及滚轮滚动的事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SOURCE_TYPE_TOUCHSCREEN = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示输入源产生触摸屏多点触屏输入事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SOURCE_TYPE_TOUCHPAD = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示输入源产生触控板多点触屏输入事件。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "input_keyboardtype",
      children: "Input_KeyboardType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Input_KeyboardType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "输入设备的键盘类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYBOARD_TYPE_NONE = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示无按键设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYBOARD_TYPE_UNKNOWN = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示未知按键设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYBOARD_TYPE_ALPHABETIC = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示全键盘设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYBOARD_TYPE_DIGITAL = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示数字键盘设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYBOARD_TYPE_STYLUS = 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示手写笔设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KEYBOARD_TYPE_REMOTE_CONTROL = 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示遥控器设备。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "input_result",
      children: "Input_Result"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Input_Result\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回值枚举值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INPUT_SUCCESS = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "操作成功。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INPUT_PERMISSION_DENIED = 201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "权限验证失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INPUT_NOT_SYSTEM_APPLICATION = 202"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "非系统应用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INPUT_PARAMETER_ERROR = 401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "参数检查失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INPUT_DEVICE_NOT_SUPPORTED = 801"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示不支持该功能。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INPUT_SERVICE_EXCEPTION = 3800001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "服务异常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INPUT_REPEAT_INTERCEPTOR = 4200001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用创建拦截后，再次执行创建拦截的操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INPUT_OCCUPIED_BY_SYSTEM = 4200002"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["已经被系统应用占用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 14。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INPUT_OCCUPIED_BY_OTHER = 4200003"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["已经被其他应用占用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 14。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INPUT_KEYBOARD_DEVICE_NOT_EXIST = 3900002"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["未连接键盘设备。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 15。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INPUT_INJECTION_AUTHORIZING = 3900005"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["正在授权中。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 20。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INPUT_INJECTION_OPERATION_FREQUENT = 3900006"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["重复请求。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 20。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INPUT_INJECTION_AUTHORIZED = 3900007"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["当前应用已经授权。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 20。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INPUT_INJECTION_AUTHORIZED_OTHERS = 3900008"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["其它应用已经授权。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 20。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INPUT_APP_NOT_FOCUSED = 3900009"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["当前应用不是焦点应用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 20。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INPUT_DEVICE_NO_POINTER = 3900010"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["无鼠标类输入外设。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 20。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INPUT_INVALID_WINDOWID = 26500001"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["无效的窗口ID。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "input_hotkeycallback",
      children: "Input_HotkeyCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*Input_HotkeyCallback)(Input_Hotkey* hotkey)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "回调函数，用于回调快捷键事件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 14"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-hotkey/capi-input-input-hotkey",
              children: "Input_Hotkey"
            }), "* hotkey"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "hotkey 快捷键对象的实例。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "input_keyeventcallback",
      children: "Input_KeyEventCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*Input_KeyEventCallback)(const Input_KeyEvent* keyEvent)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "按键事件的回调函数，keyEvent的生命周期为回调函数内。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-keyevent/capi-input-input-keyevent",
              children: "Input_KeyEvent"
            }), "* keyEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["按键事件对象，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createkeyevent",
              children: "OH_Input_CreateKeyEvent"
            }), "接口可以创建按键事件对象。  使用完需使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroykeyevent",
              children: "OH_Input_DestroyKeyEvent"
            }), "接口销毁按键事件对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "input_mouseeventcallback",
      children: "Input_MouseEventCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*Input_MouseEventCallback)(const Input_MouseEvent* mouseEvent)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "鼠标事件的回调函数，mouseEvent的生命周期为回调函数内。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-mouseevent/capi-input-input-mouseevent",
              children: "Input_MouseEvent"
            }), "* mouseEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["鼠标事件对象，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createmouseevent",
              children: "OH_Input_CreateMouseEvent"
            }), "接口可以创建鼠标事件对象。  使用完需使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroymouseevent",
              children: "OH_Input_DestroyMouseEvent"
            }), "接口销毁鼠标事件对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "input_toucheventcallback",
      children: "Input_TouchEventCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*Input_TouchEventCallback)(const Input_TouchEvent* touchEvent)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "触屏输入事件的回调函数，touchEvent的生命周期为回调函数内。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-touchevent/capi-input-input-touchevent",
              children: "Input_TouchEvent"
            }), "* touchEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["触屏输入事件对象，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createtouchevent",
              children: "OH_Input_CreateTouchEvent"
            }), "接口可以创建触屏输入事件对象。  使用完需使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroytouchevent",
              children: "OH_Input_DestroyTouchEvent"
            }), "接口销毁触屏输入事件对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "input_axiseventcallback",
      children: "Input_AxisEventCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*Input_AxisEventCallback)(const Input_AxisEvent* axisEvent)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "轴事件的回调函数，axisEvent的生命周期为回调函数内。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-axisevent/capi-input-input-axisevent",
              children: "Input_AxisEvent"
            }), "* axisEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["轴事件对象，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createaxisevent",
              children: "OH_Input_CreateAxisEvent"
            }), "接口可以创建轴事件对象。  使用完需使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroyaxisevent",
              children: "OH_Input_DestroyAxisEvent"
            }), "接口销毁轴事件对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "input_deviceaddedcallback",
      children: "Input_DeviceAddedCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*Input_DeviceAddedCallback)(int32_t deviceId)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "回调函数，用于回调输入设备的热插事件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t deviceId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入设备的唯一标识，同一个物理设备反复插拔或重启，设备ID可能会发生变化。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "input_deviceremovedcallback",
      children: "Input_DeviceRemovedCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*Input_DeviceRemovedCallback)(int32_t deviceId)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "回调函数，用于回调输入设备的热拔事件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t deviceId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入设备的唯一标识，同一个物理设备反复插拔或重启，设备ID可能会发生变化。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "input_injectauthorizecallback",
      children: "Input_InjectAuthorizeCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*Input_InjectAuthorizeCallback)(Input_InjectionStatus authorizedStatus)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "回调函数，用于获取注入权限状态。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-input-manager-h/capi-oh-input-manager-h#input_injectionstatus",
              children: "Input_InjectionStatus"
            }), " authorizedStatus"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注入权限状态。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_getkeystate",
      children: "OH_Input_GetKeyState()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_Result OH_Input_GetKeyState(struct Input_KeyState* keyState)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询按键状态的枚举对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-keystate/capi-input-input-keystate",
              children: "Input_KeyState"
            }), "* keyState"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["按键状态的枚举对象，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_keystateaction",
              children: "Input_KeyStateAction"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "Input_Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["如果操作成功，@return返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SUCCESS"
            }), "；  否则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "Input_Result"
            }), "中定义的其他错误代码。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_createkeystate",
      children: "OH_Input_CreateKeyState()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "struct Input_KeyState* OH_Input_CreateKeyState()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建按键状态的枚举对象。通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_input_destroykeystate",
        children: "OH_Input_DestroyKeyState"
      }), "销毁按键状态的枚举对象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "struct"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["如果操作成功，@return返回一个", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-keystate/capi-input-input-keystate",
              children: "Input_KeyState"
            }), "指针对象；否则返回空指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_destroykeystate",
      children: "OH_Input_DestroyKeyState()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Input_DestroyKeyState(struct Input_KeyState** keyState)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "销毁按键状态的枚举对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-keystate/capi-input-input-keystate",
              children: "Input_KeyState"
            }), "** keyState"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["按键状态的枚举对象，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_keystateaction",
              children: "Input_KeyStateAction"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_setkeycode",
      children: "OH_Input_SetKeyCode()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Input_SetKeyCode(struct Input_KeyState* keyState, int32_t keyCode)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置按键状态对象的键值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-keystate/capi-input-input-keystate",
              children: "Input_KeyState"
            }), "* keyState"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["按键状态的枚举对象，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_keystateaction",
              children: "Input_KeyStateAction"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t keyCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键键值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_getkeycode",
      children: "OH_Input_GetKeyCode()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_Input_GetKeyCode(const struct Input_KeyState* keyState)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取按键状态对象的键值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-keystate/capi-input-input-keystate",
              children: "Input_KeyState"
            }), "* keyState"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["按键状态的枚举对象，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-input-manager-h/capi-oh-input-manager-h#input_keystateaction",
              children: "Input_KeyStateAction"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回按键状态对象的键值。相关取值可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_keystateaction",
              children: "Input_KeyStateAction"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_setkeypressed",
      children: "OH_Input_SetKeyPressed()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Input_SetKeyPressed(struct Input_KeyState* keyState, int32_t keyAction)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置按键状态对象的按键是否按下。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-keystate/capi-input-input-keystate",
              children: "Input_KeyState"
            }), "* keyState"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["按键状态的枚举对象，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_keystateaction",
              children: "Input_KeyStateAction"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t keyAction"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["按键是否按下，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_keyeventaction",
              children: "Input_KeyEventAction"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_getkeypressed",
      children: "OH_Input_GetKeyPressed()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_Input_GetKeyPressed(const struct Input_KeyState* keyState)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取按键状态对象的按键是否按下。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-keystate/capi-input-input-keystate",
              children: "Input_KeyState"
            }), "* keyState"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["按键状态的枚举对象，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-input-manager-h/capi-oh-input-manager-h#input_keystateaction",
              children: "Input_KeyStateAction"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回按键状态对象的按键按下状态。相关取值可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_keystateaction",
              children: "Input_KeyStateAction"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_setkeyswitch",
      children: "OH_Input_SetKeySwitch()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Input_SetKeySwitch(struct Input_KeyState* keyState, int32_t keySwitch)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置按键状态对象的按键开关。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-keystate/capi-input-input-keystate",
              children: "Input_KeyState"
            }), "* keyState"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["按键状态的枚举对象，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_keystateaction",
              children: "Input_KeyStateAction"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t keySwitch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键开关。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_getkeyswitch",
      children: "OH_Input_GetKeySwitch()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_Input_GetKeySwitch(const struct Input_KeyState* keyState)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取按键状态对象的按键开关。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-keystate/capi-input-input-keystate",
              children: "Input_KeyState"
            }), "* keyState"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["按键状态的枚举对象，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-input-manager-h/capi-oh-input-manager-h#input_keystateaction",
              children: "Input_KeyStateAction"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回按键状态对象的按键开关。相关取值可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_keystateaction",
              children: "Input_KeyStateAction"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_injectkeyevent",
      children: "OH_Input_InjectKeyEvent()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_Input_InjectKeyEvent(const struct Input_KeyEvent* keyEvent)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注入按键事件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果当前处于用户未授权状态，调用该接口注入事件不生效。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，建议先使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_input_requestinjection",
        children: "OH_Input_RequestInjection"
      }), "请求授权。然后通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_input_queryauthorizedstatus",
        children: "OH_Input_QueryAuthorizedStatus"
      }), "查询授权状态，当授权状态为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-input-manager-h/capi-oh-input-manager-h#input_injectionstatus",
        children: "AUTHORIZED"
      }), "时，再使用该接口。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 22开始，如果注入了修饰键（KEYCODE_META_LEFT、KEYCODE_META_RIGHT、KEYCODE_CTRL_LEFT、KEYCODE_CTRL_RIGHT、KEYCODE_ALT_LEFT、KEYCODE_ALT_RIGHT、KEYCODE_SHIFT_LEFT、KEYCODE_SHIFT_RIGHT、KEYCODE_CAPS_LOCK、KEYCODE_SCROLL_LOCK、KEYCODE_NUM_LOCK）的按压事件（KEY_ACTION_DOWN）时，请及时注入该按键的抬起事件（KEY_ACTION_UP），以避免该按键长时间处于按压状态。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-keyevent/capi-input-input-keyevent",
              children: "Input_KeyEvent"
            }), "* keyEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["按键事件对象，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createkeyevent",
              children: "OH_Input_CreateKeyEvent"
            }), "接口可以创建按键事件对象。并通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_setkeyeventkeycode",
              children: "OH_Input_SetKeyEventKeyCode"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_setkeyeventaction",
              children: "OH_Input_SetKeyEventAction"
            }), "接口可以设置按键事件的键值和按键事件的类型。  使用完需使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroykeyevent",
              children: "OH_Input_DestroyKeyEvent"
            }), "接口销毁按键事件对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_Input_InjectKeyEvent 函数返回值。  若注入成功，返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-input-manager-h/capi-oh-input-manager-h#input_result",
              children: "INPUT_SUCCESS"
            }), "；  若缺少权限，返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-input-manager-h/capi-oh-input-manager-h#input_result",
              children: "INPUT_PERMISSION_DENIED"
            }), "；  若参数错误，返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-input-manager-h/capi-oh-input-manager-h#input_result",
              children: "INPUT_PARAMETER_ERROR"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_createkeyevent",
      children: "OH_Input_CreateKeyEvent()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "struct Input_KeyEvent* OH_Input_CreateKeyEvent()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建按键事件对象。通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_input_destroykeyevent",
        children: "OH_Input_DestroyKeyEvent"
      }), "销毁按键事件对象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "struct"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["如果操作成功返回一个", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-keyevent/capi-input-input-keyevent",
              children: "Input_KeyEvent"
            }), "指针对象，否则返回空指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_destroykeyevent",
      children: "OH_Input_DestroyKeyEvent()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Input_DestroyKeyEvent(struct Input_KeyEvent** keyEvent)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "销毁按键事件对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-keyevent/capi-input-input-keyevent",
              children: "Input_KeyEvent"
            }), "** keyEvent"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键事件对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_setkeyeventaction",
      children: "OH_Input_SetKeyEventAction()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Input_SetKeyEventAction(struct Input_KeyEvent* keyEvent, int32_t action)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置按键事件类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-keyevent/capi-input-input-keyevent",
              children: "Input_KeyEvent"
            }), "* keyEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["按键事件对象，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createkeyevent",
              children: "OH_Input_CreateKeyEvent"
            }), "接口可以创建按键事件对象。  使用完需使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroykeyevent",
              children: "OH_Input_DestroyKeyEvent"
            }), "接口销毁按键事件对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t action"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["按键事件类型。相关取值可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_keyeventaction",
              children: "Input_KeyEventAction"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_getkeyeventaction",
      children: "OH_Input_GetKeyEventAction()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_Input_GetKeyEventAction(const struct Input_KeyEvent* keyEvent)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取按键事件类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-keyevent/capi-input-input-keyevent",
              children: "Input_KeyEvent"
            }), "* keyEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["按键事件对象，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createkeyevent",
              children: "OH_Input_CreateKeyEvent"
            }), "接口可以创建按键事件对象。  使用完需使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroykeyevent",
              children: "OH_Input_DestroyKeyEvent"
            }), "接口销毁按键事件对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回按键事件类型。相关取值可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_keyeventaction",
              children: "Input_KeyEventAction"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_setkeyeventkeycode",
      children: "OH_Input_SetKeyEventKeyCode()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Input_SetKeyEventKeyCode(struct Input_KeyEvent* keyEvent, int32_t keyCode)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置按键事件的键值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-keyevent/capi-input-input-keyevent",
              children: "Input_KeyEvent"
            }), "* keyEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["按键事件对象，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createkeyevent",
              children: "OH_Input_CreateKeyEvent"
            }), "接口可以创建按键事件对象。  使用完需使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroykeyevent",
              children: "OH_Input_DestroyKeyEvent"
            }), "接口销毁按键事件对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t keyCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键的键值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_getkeyeventkeycode",
      children: "OH_Input_GetKeyEventKeyCode()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_Input_GetKeyEventKeyCode(const struct Input_KeyEvent* keyEvent)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取按键事件的键值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-keyevent/capi-input-input-keyevent",
              children: "Input_KeyEvent"
            }), "* keyEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["按键事件对象，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createkeyevent",
              children: "OH_Input_CreateKeyEvent"
            }), "接口可以创建按键事件对象。  使用完需使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroykeyevent",
              children: "OH_Input_DestroyKeyEvent"
            }), "接口销毁按键事件对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回按键事件的键值。相关取值可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-key-code-h/capi-oh-key-code-h#input_keycode",
              children: "Input_KeyCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_setkeyeventactiontime",
      children: "OH_Input_SetKeyEventActionTime()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Input_SetKeyEventActionTime(struct Input_KeyEvent* keyEvent, int64_t actionTime)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置按键事件发生的时间。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-keyevent/capi-input-input-keyevent",
              children: "Input_KeyEvent"
            }), "* keyEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["按键事件对象，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createkeyevent",
              children: "OH_Input_CreateKeyEvent"
            }), "接口可以创建按键事件对象。  使用完需使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroykeyevent",
              children: "OH_Input_DestroyKeyEvent"
            }), "接口销毁按键事件对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int64_t actionTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键事件发生的时间，表示系统启动运行至今逝去的微秒数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_getkeyeventactiontime",
      children: "OH_Input_GetKeyEventActionTime()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int64_t OH_Input_GetKeyEventActionTime(const struct Input_KeyEvent* keyEvent)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取按键事件发生的时间。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-keyevent/capi-input-input-keyevent",
              children: "Input_KeyEvent"
            }), "* keyEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["按键事件对象，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createkeyevent",
              children: "OH_Input_CreateKeyEvent"
            }), "接口可以创建按键事件对象。  使用完需使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroykeyevent",
              children: "OH_Input_DestroyKeyEvent"
            }), "接口销毁按键事件对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int64_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回按键事件发生的时间。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_setkeyeventwindowid",
      children: "OH_Input_SetKeyEventWindowId()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Input_SetKeyEventWindowId(struct Input_KeyEvent* keyEvent, int32_t windowId)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置按键事件的窗口ID。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 15"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-keyevent/capi-input-input-keyevent",
              children: "Input_KeyEvent"
            }), "* keyEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["按键事件对象，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createkeyevent",
              children: "OH_Input_CreateKeyEvent"
            }), "接口可以创建按键事件对象。  使用完需使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroykeyevent",
              children: "OH_Input_DestroyKeyEvent"
            }), "接口销毁按键事件对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t windowId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键事件对应的窗口ID。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_getkeyeventwindowid",
      children: "OH_Input_GetKeyEventWindowId()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_Input_GetKeyEventWindowId(const struct Input_KeyEvent* keyEvent)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取按键事件的窗口ID。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 15"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-keyevent/capi-input-input-keyevent",
              children: "Input_KeyEvent"
            }), "* keyEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["按键事件对象，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createkeyevent",
              children: "OH_Input_CreateKeyEvent"
            }), "接口可以创建按键事件对象。  使用完需使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroykeyevent",
              children: "OH_Input_DestroyKeyEvent"
            }), "接口销毁按键事件对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键事件的窗口ID。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_getkeyeventdisplayid",
      children: "OH_Input_GetKeyEventDisplayId()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_Input_GetKeyEventDisplayId(const struct Input_KeyEvent* keyEvent)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取按键事件的屏幕ID。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 15"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-keyevent/capi-input-input-keyevent",
              children: "Input_KeyEvent"
            }), "* keyEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["按键事件对象，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createkeyevent",
              children: "OH_Input_CreateKeyEvent"
            }), "接口可以创建按键事件对象。  使用完需使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroykeyevent",
              children: "OH_Input_DestroyKeyEvent"
            }), "接口销毁按键事件对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键事件的屏幕ID。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_setkeyeventdisplayid",
      children: "OH_Input_SetKeyEventDisplayId()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Input_SetKeyEventDisplayId(struct Input_KeyEvent* keyEvent, int32_t displayId)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置按键事件的屏幕ID。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 15"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-keyevent/capi-input-input-keyevent",
              children: "Input_KeyEvent"
            }), "* keyEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["按键事件对象，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createkeyevent",
              children: "OH_Input_CreateKeyEvent"
            }), "接口可以创建按键事件对象。  使用完需使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroykeyevent",
              children: "OH_Input_DestroyKeyEvent"
            }), "接口销毁按键事件对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t displayId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键事件对应的屏幕ID。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_createmouseevent",
      children: "OH_Input_CreateMouseEvent()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "struct Input_MouseEvent* OH_Input_CreateMouseEvent()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建鼠标事件对象。通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_input_destroymouseevent",
        children: "OH_Input_DestroyMouseEvent"
      }), "销毁鼠标事件对象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "struct"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["如果操作成功返回一个", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-mouseevent/capi-input-input-mouseevent",
              children: "Input_MouseEvent"
            }), "指针对象，否则返回空指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_destroymouseevent",
      children: "OH_Input_DestroyMouseEvent()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Input_DestroyMouseEvent(struct Input_MouseEvent** mouseEvent)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "销毁鼠标事件对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-mouseevent/capi-input-input-mouseevent",
              children: "Input_MouseEvent"
            }), "** mouseEvent"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "鼠标事件对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_setmouseeventaction",
      children: "OH_Input_SetMouseEventAction()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Input_SetMouseEventAction(struct Input_MouseEvent* mouseEvent, int32_t action)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置鼠标事件的动作。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-mouseevent/capi-input-input-mouseevent",
              children: "Input_MouseEvent"
            }), "* mouseEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["鼠标事件对象，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createmouseevent",
              children: "OH_Input_CreateMouseEvent"
            }), "接口可以创建鼠标事件对象。  使用完需使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroymouseevent",
              children: "OH_Input_DestroyMouseEvent"
            }), "接口销毁鼠标事件对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t action"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["鼠标的动作。相关取值可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_mouseeventaction",
              children: "Input_MouseEventAction"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_getmouseeventaction",
      children: "OH_Input_GetMouseEventAction()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_Input_GetMouseEventAction(const struct Input_MouseEvent* mouseEvent)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取鼠标事件的动作。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-mouseevent/capi-input-input-mouseevent",
              children: "Input_MouseEvent"
            }), "* mouseEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["鼠标事件对象，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createmouseevent",
              children: "OH_Input_CreateMouseEvent"
            }), "接口可以创建鼠标事件对象。  使用完需使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroymouseevent",
              children: "OH_Input_DestroyMouseEvent"
            }), "接口销毁鼠标事件对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["鼠标的动作。相关取值可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_mouseeventaction",
              children: "Input_MouseEventAction"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_setmouseeventdisplayx",
      children: "OH_Input_SetMouseEventDisplayX()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Input_SetMouseEventDisplayX(struct Input_MouseEvent* mouseEvent, int32_t displayX)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置鼠标事件以指定屏幕左上角为原点的相对坐标系的X坐标。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-mouseevent/capi-input-input-mouseevent",
              children: "Input_MouseEvent"
            }), "* mouseEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["鼠标事件对象，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createmouseevent",
              children: "OH_Input_CreateMouseEvent"
            }), "接口可以创建鼠标事件对象。  使用完需使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroymouseevent",
              children: "OH_Input_DestroyMouseEvent"
            }), "接口销毁鼠标事件对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t displayX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "鼠标事件以指定屏幕左上角为原点的相对坐标系的X坐标。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_getmouseeventdisplayx",
      children: "OH_Input_GetMouseEventDisplayX()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_Input_GetMouseEventDisplayX(const struct Input_MouseEvent* mouseEvent)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取鼠标事件以指定屏幕左上角为原点的相对坐标系的X坐标。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-mouseevent/capi-input-input-mouseevent",
              children: "Input_MouseEvent"
            }), "* mouseEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["鼠标事件对象，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createmouseevent",
              children: "OH_Input_CreateMouseEvent"
            }), "接口可以创建鼠标事件对象。  使用完需使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroymouseevent",
              children: "OH_Input_DestroyMouseEvent"
            }), "接口销毁鼠标事件对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "鼠标事件以指定屏幕左上角为原点的相对坐标系的X坐标。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_setmouseeventdisplayy",
      children: "OH_Input_SetMouseEventDisplayY()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Input_SetMouseEventDisplayY(struct Input_MouseEvent* mouseEvent, int32_t displayY)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置鼠标事件以指定屏幕左上角为原点的相对坐标系的Y坐标。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-mouseevent/capi-input-input-mouseevent",
              children: "Input_MouseEvent"
            }), "* mouseEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["鼠标事件对象，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createmouseevent",
              children: "OH_Input_CreateMouseEvent"
            }), "接口可以创建鼠标事件对象。  使用完需使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroymouseevent",
              children: "OH_Input_DestroyMouseEvent"
            }), "接口销毁鼠标事件对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t displayY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "鼠标事件以指定屏幕左上角为原点的相对坐标系的Y坐标。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_getmouseeventdisplayy",
      children: "OH_Input_GetMouseEventDisplayY()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_Input_GetMouseEventDisplayY(const struct Input_MouseEvent* mouseEvent)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取鼠标事件以指定屏幕左上角为原点的相对坐标系的Y坐标。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-mouseevent/capi-input-input-mouseevent",
              children: "Input_MouseEvent"
            }), "* mouseEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["鼠标事件对象，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createmouseevent",
              children: "OH_Input_CreateMouseEvent"
            }), "接口可以创建鼠标事件对象。  使用完需使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroymouseevent",
              children: "OH_Input_DestroyMouseEvent"
            }), "接口销毁鼠标事件对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "鼠标事件以指定屏幕左上角为原点的相对坐标系的Y坐标。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_setmouseeventbutton",
      children: "OH_Input_SetMouseEventButton()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Input_SetMouseEventButton(struct Input_MouseEvent* mouseEvent, int32_t button)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置鼠标事件的按键。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-mouseevent/capi-input-input-mouseevent",
              children: "Input_MouseEvent"
            }), "* mouseEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["鼠标事件对象，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createmouseevent",
              children: "OH_Input_CreateMouseEvent"
            }), "接口可以创建鼠标事件对象。  使用完需使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroymouseevent",
              children: "OH_Input_DestroyMouseEvent"
            }), "接口销毁鼠标事件对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t button"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["鼠标按键。相关取值可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_mouseeventbutton",
              children: "Input_MouseEventButton"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_getmouseeventbutton",
      children: "OH_Input_GetMouseEventButton()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_Input_GetMouseEventButton(const struct Input_MouseEvent* mouseEvent)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取鼠标事件的按键。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-mouseevent/capi-input-input-mouseevent",
              children: "Input_MouseEvent"
            }), "* mouseEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["鼠标事件对象，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createmouseevent",
              children: "OH_Input_CreateMouseEvent"
            }), "接口可以创建鼠标事件对象。  使用完需使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroymouseevent",
              children: "OH_Input_DestroyMouseEvent"
            }), "接口销毁鼠标事件对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["鼠标按键。相关取值可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_mouseeventbutton",
              children: "Input_MouseEventButton"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_setmouseeventaxistype",
      children: "OH_Input_SetMouseEventAxisType()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Input_SetMouseEventAxisType(struct Input_MouseEvent* mouseEvent, int32_t axisType)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置鼠标轴事件的类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-mouseevent/capi-input-input-mouseevent",
              children: "Input_MouseEvent"
            }), "* mouseEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["鼠标事件对象，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createmouseevent",
              children: "OH_Input_CreateMouseEvent"
            }), "接口可以创建鼠标事件对象。  使用完需使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroymouseevent",
              children: "OH_Input_DestroyMouseEvent"
            }), "接口销毁鼠标事件对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t axisType"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["鼠标轴类型，比如垂直轴、水平轴。相关取值可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#inputevent_mouseaxis",
              children: "InputEvent_MouseAxis"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_getmouseeventaxistype",
      children: "OH_Input_GetMouseEventAxisType()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_Input_GetMouseEventAxisType(const struct Input_MouseEvent* mouseEvent)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取鼠标轴事件的类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-mouseevent/capi-input-input-mouseevent",
              children: "Input_MouseEvent"
            }), "* mouseEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["鼠标事件对象，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createmouseevent",
              children: "OH_Input_CreateMouseEvent"
            }), "接口可以创建鼠标事件对象。  使用完需使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroymouseevent",
              children: "OH_Input_DestroyMouseEvent"
            }), "接口销毁鼠标事件对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["鼠标轴类型。相关取值可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#inputevent_mouseaxis",
              children: "InputEvent_MouseAxis"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_setmouseeventaxisvalue",
      children: "OH_Input_SetMouseEventAxisValue()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Input_SetMouseEventAxisValue(struct Input_MouseEvent* mouseEvent, float axisValue)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置鼠标轴事件的值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-mouseevent/capi-input-input-mouseevent",
              children: "Input_MouseEvent"
            }), "* mouseEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["鼠标事件对象，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createmouseevent",
              children: "OH_Input_CreateMouseEvent"
            }), "接口可以创建鼠标事件对象。  使用完需使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroymouseevent",
              children: "OH_Input_DestroyMouseEvent"
            }), "接口销毁鼠标事件对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float axisValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "轴事件的值，正数向前滚动（例如，1.0表示向前滚动一个单位），负数向后滚动（例如，-1.0表示向后滚动一个单位）,零表示没有滚动。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_getmouseeventaxisvalue",
      children: "OH_Input_GetMouseEventAxisValue()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float OH_Input_GetMouseEventAxisValue(const struct Input_MouseEvent* mouseEvent)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取鼠标轴事件的值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-mouseevent/capi-input-input-mouseevent",
              children: "Input_MouseEvent"
            }), "* mouseEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["鼠标事件对象，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createmouseevent",
              children: "OH_Input_CreateMouseEvent"
            }), "接口可以创建鼠标事件对象。  使用完需使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroymouseevent",
              children: "OH_Input_DestroyMouseEvent"
            }), "接口销毁鼠标事件对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "轴事件的值。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_setmouseeventactiontime",
      children: "OH_Input_SetMouseEventActionTime()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Input_SetMouseEventActionTime(struct Input_MouseEvent* mouseEvent, int64_t actionTime)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置鼠标事件发生的时间。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-mouseevent/capi-input-input-mouseevent",
              children: "Input_MouseEvent"
            }), "* mouseEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["鼠标事件对象，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createmouseevent",
              children: "OH_Input_CreateMouseEvent"
            }), "接口可以创建鼠标事件对象。  使用完需使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroymouseevent",
              children: "OH_Input_DestroyMouseEvent"
            }), "接口销毁鼠标事件对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int64_t actionTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "鼠标事件发生的时间，表示系统启动运行至今逝去的微秒数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_getmouseeventactiontime",
      children: "OH_Input_GetMouseEventActionTime()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int64_t OH_Input_GetMouseEventActionTime(const struct Input_MouseEvent* mouseEvent)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取鼠标事件发生的时间。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mouseEvent"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["鼠标事件对象，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createmouseevent",
              children: "OH_Input_CreateMouseEvent"
            }), "接口可以创建鼠标事件对象。  使用完需使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroymouseevent",
              children: "OH_Input_DestroyMouseEvent"
            }), "接口销毁鼠标事件对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int64_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回鼠标事件发生的时间。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_setmouseeventwindowid",
      children: "OH_Input_SetMouseEventWindowId()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Input_SetMouseEventWindowId(struct Input_MouseEvent* mouseEvent, int32_t windowId)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置鼠标事件的窗口ID。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 15"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-mouseevent/capi-input-input-mouseevent",
              children: "Input_MouseEvent"
            }), "* mouseEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["鼠标事件对象，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createmouseevent",
              children: "OH_Input_CreateMouseEvent"
            }), "接口可以创建鼠标事件对象。  使用完需使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroymouseevent",
              children: "OH_Input_DestroyMouseEvent"
            }), "接口销毁鼠标事件对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t windowId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "鼠标事件的窗口ID。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_getmouseeventwindowid",
      children: "OH_Input_GetMouseEventWindowId()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_Input_GetMouseEventWindowId(const struct Input_MouseEvent* mouseEvent)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取鼠标事件的窗口ID。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 15"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-mouseevent/capi-input-input-mouseevent",
              children: "Input_MouseEvent"
            }), "* mouseEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["鼠标事件对象，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createmouseevent",
              children: "OH_Input_CreateMouseEvent"
            }), "接口可以创建鼠标事件对象。  使用完需使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroymouseevent",
              children: "OH_Input_DestroyMouseEvent"
            }), "接口销毁鼠标事件对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "鼠标事件的窗口ID。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_setmouseeventdisplayid",
      children: "OH_Input_SetMouseEventDisplayId()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Input_SetMouseEventDisplayId(struct Input_MouseEvent* mouseEvent, int32_t displayId)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置鼠标事件的屏幕ID。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 15"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-mouseevent/capi-input-input-mouseevent",
              children: "Input_MouseEvent"
            }), "* mouseEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["鼠标事件对象，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createmouseevent",
              children: "OH_Input_CreateMouseEvent"
            }), "接口可以创建鼠标事件对象。  使用完需使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroymouseevent",
              children: "OH_Input_DestroyMouseEvent"
            }), "接口销毁鼠标事件对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t displayId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "鼠标事件的屏幕ID。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_createtouchevent",
      children: "OH_Input_CreateTouchEvent()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "struct Input_TouchEvent* OH_Input_CreateTouchEvent()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建触屏输入事件对象。通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_input_destroytouchevent",
        children: "OH_Input_DestroyTouchEvent"
      }), "销毁触屏输入事件对象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "struct"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["如果操作成功返回一个", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-touchevent/capi-input-input-touchevent",
              children: "Input_TouchEvent"
            }), "指针对象，否则返回空指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_destroytouchevent",
      children: "OH_Input_DestroyTouchEvent()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Input_DestroyTouchEvent(struct Input_TouchEvent** touchEvent)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "销毁触屏输入事件对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-touchevent/capi-input-input-touchevent",
              children: "Input_TouchEvent"
            }), "** touchEvent"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "触屏输入事件对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_settoucheventaction",
      children: "OH_Input_SetTouchEventAction()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Input_SetTouchEventAction(struct Input_TouchEvent* touchEvent, int32_t action)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置触屏输入事件的动作。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-touchevent/capi-input-input-touchevent",
              children: "Input_TouchEvent"
            }), "* touchEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["触屏输入事件对象，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createtouchevent",
              children: "OH_Input_CreateTouchEvent"
            }), "接口可以创建触屏输入事件对象。  使用完需使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroytouchevent",
              children: "OH_Input_DestroyTouchEvent"
            }), "接口销毁触屏输入事件对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t action"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["触屏的动作。相关取值可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_toucheventaction",
              children: "Input_TouchEventAction"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_gettoucheventaction",
      children: "OH_Input_GetTouchEventAction()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_Input_GetTouchEventAction(const struct Input_TouchEvent* touchEvent)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取触屏输入事件的动作。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-touchevent/capi-input-input-touchevent",
              children: "Input_TouchEvent"
            }), "* touchEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["触屏输入事件对象，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createtouchevent",
              children: "OH_Input_CreateTouchEvent"
            }), "接口可以创建触屏输入事件对象。  使用完需使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroytouchevent",
              children: "OH_Input_DestroyTouchEvent"
            }), "接口销毁触屏输入事件对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["触屏的动作。相关取值可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_toucheventaction",
              children: "Input_TouchEventAction"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_settoucheventfingerid",
      children: "OH_Input_SetTouchEventFingerId()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Input_SetTouchEventFingerId(struct Input_TouchEvent* touchEvent, int32_t id)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置触屏输入事件的手指ID。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-touchevent/capi-input-input-touchevent",
              children: "Input_TouchEvent"
            }), "* touchEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["触屏输入事件对象，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createtouchevent",
              children: "OH_Input_CreateTouchEvent"
            }), "接口可以创建触屏输入事件对象。  使用完需使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroytouchevent",
              children: "OH_Input_DestroyTouchEvent"
            }), "接口销毁触屏输入事件对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "触屏的手指ID。第一个手指碰到屏幕，ID就是0，第二个手指碰到屏幕，ID就是1，依次累加。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_gettoucheventfingerid",
      children: "OH_Input_GetTouchEventFingerId()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_Input_GetTouchEventFingerId(const struct Input_TouchEvent* touchEvent)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取触屏输入事件的手指ID。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-touchevent/capi-input-input-touchevent",
              children: "Input_TouchEvent"
            }), "* touchEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["触屏输入事件对象，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createtouchevent",
              children: "OH_Input_CreateTouchEvent"
            }), "接口可以创建触屏输入事件对象。  使用完需使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroytouchevent",
              children: "OH_Input_DestroyTouchEvent"
            }), "接口销毁触屏输入事件对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "触屏的手指ID。第一个手指碰到屏幕，ID就是0，第二个手指碰到屏幕，ID就是1，依次累加。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_settoucheventdisplayx",
      children: "OH_Input_SetTouchEventDisplayX()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Input_SetTouchEventDisplayX(struct Input_TouchEvent* touchEvent, int32_t displayX)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置触屏输入事件以指定屏幕左上角为原点的相对坐标系的X坐标。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-touchevent/capi-input-input-touchevent",
              children: "Input_TouchEvent"
            }), "* touchEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["触屏输入事件对象，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createtouchevent",
              children: "OH_Input_CreateTouchEvent"
            }), "接口可以创建触屏输入事件对象。  使用完需使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroytouchevent",
              children: "OH_Input_DestroyTouchEvent"
            }), "接口销毁触屏输入事件对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t displayX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "触屏输入事件以指定屏幕左上角为原点的相对坐标系的X坐标。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_gettoucheventdisplayx",
      children: "OH_Input_GetTouchEventDisplayX()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_Input_GetTouchEventDisplayX(const struct Input_TouchEvent* touchEvent)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取触屏输入事件以指定屏幕左上角为原点的相对坐标系的X坐标。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-touchevent/capi-input-input-touchevent",
              children: "Input_TouchEvent"
            }), "* touchEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["触屏输入事件对象，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createtouchevent",
              children: "OH_Input_CreateTouchEvent"
            }), "接口可以创建触屏输入事件对象。  使用完需使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroytouchevent",
              children: "OH_Input_DestroyTouchEvent"
            }), "接口销毁触屏输入事件对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "触屏输入事件以指定屏幕左上角为原点的相对坐标系的X坐标。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_settoucheventdisplayy",
      children: "OH_Input_SetTouchEventDisplayY()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Input_SetTouchEventDisplayY(struct Input_TouchEvent* touchEvent, int32_t displayY)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置触屏输入事件以指定屏幕左上角为原点的相对坐标系的Y坐标。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-touchevent/capi-input-input-touchevent",
              children: "Input_TouchEvent"
            }), "* touchEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["触屏输入事件对象，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createtouchevent",
              children: "OH_Input_CreateTouchEvent"
            }), "接口可以创建触屏输入事件对象。  使用完需使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroytouchevent",
              children: "OH_Input_DestroyTouchEvent"
            }), "接口销毁触屏输入事件对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t displayY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "触屏输入事件以指定屏幕左上角为原点的相对坐标系的Y坐标。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_gettoucheventdisplayy",
      children: "OH_Input_GetTouchEventDisplayY()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_Input_GetTouchEventDisplayY(const struct Input_TouchEvent* touchEvent)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取触屏输入事件以指定屏幕左上角为原点的相对坐标系的Y坐标。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-touchevent/capi-input-input-touchevent",
              children: "Input_TouchEvent"
            }), "* touchEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["触屏输入事件对象，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createtouchevent",
              children: "OH_Input_CreateTouchEvent"
            }), "接口可以创建触屏输入事件对象。  使用完需使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroytouchevent",
              children: "OH_Input_DestroyTouchEvent"
            }), "接口销毁触屏输入事件对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "触屏输入事件以指定屏幕左上角为原点的相对坐标系的Y坐标。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_settoucheventactiontime",
      children: "OH_Input_SetTouchEventActionTime()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Input_SetTouchEventActionTime(struct Input_TouchEvent* touchEvent, int64_t actionTime)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置触屏输入事件发生的时间。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "touchEvent"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["触屏输入事件对象，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createtouchevent",
              children: "OH_Input_CreateTouchEvent"
            }), "接口可以创建触屏输入事件对象。  使用完需使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroytouchevent",
              children: "OH_Input_DestroyTouchEvent"
            }), "接口销毁触屏输入事件对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int64_t actionTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "触屏输入事件发生的时间，表示系统启动运行至今逝去的微秒数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_gettoucheventactiontime",
      children: "OH_Input_GetTouchEventActionTime()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int64_t OH_Input_GetTouchEventActionTime(const struct Input_TouchEvent* touchEvent)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取触屏输入事件发生的时间。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "touchEvent"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["触屏输入事件对象，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createtouchevent",
              children: "OH_Input_CreateTouchEvent"
            }), "接口可以创建触屏输入事件对象。  使用完需使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroytouchevent",
              children: "OH_Input_DestroyTouchEvent"
            }), "接口销毁触屏输入事件对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int64_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回触屏输入事件发生的时间。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_settoucheventwindowid",
      children: "OH_Input_SetTouchEventWindowId()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Input_SetTouchEventWindowId(struct Input_TouchEvent* touchEvent, int32_t windowId)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置触屏输入事件的窗口ID。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 15"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-touchevent/capi-input-input-touchevent",
              children: "Input_TouchEvent"
            }), "* touchEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["触屏输入事件对象，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createtouchevent",
              children: "OH_Input_CreateTouchEvent"
            }), "接口可以创建触屏输入事件对象。  使用完需使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroytouchevent",
              children: "OH_Input_DestroyTouchEvent"
            }), "接口销毁触屏输入事件对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t windowId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "触屏输入事件的窗口ID。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_gettoucheventwindowid",
      children: "OH_Input_GetTouchEventWindowId()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_Input_GetTouchEventWindowId(const struct Input_TouchEvent* touchEvent)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取触屏输入事件的窗口ID。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 15"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-touchevent/capi-input-input-touchevent",
              children: "Input_TouchEvent"
            }), "* touchEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["触屏输入事件对象，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createtouchevent",
              children: "OH_Input_CreateTouchEvent"
            }), "接口可以创建触屏输入事件对象。  使用完需使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroytouchevent",
              children: "OH_Input_DestroyTouchEvent"
            }), "接口销毁触屏输入事件对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "触屏输入事件的窗口ID。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_settoucheventdisplayid",
      children: "OH_Input_SetTouchEventDisplayId()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Input_SetTouchEventDisplayId(struct Input_TouchEvent* touchEvent, int32_t displayId)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置触屏输入事件的屏幕ID。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 15"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-touchevent/capi-input-input-touchevent",
              children: "Input_TouchEvent"
            }), "* touchEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["触屏输入事件对象，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createtouchevent",
              children: "OH_Input_CreateTouchEvent"
            }), "接口可以创建触屏输入事件对象。  使用完需使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroytouchevent",
              children: "OH_Input_DestroyTouchEvent"
            }), "接口销毁触屏输入事件对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t displayId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "触屏输入事件的屏幕ID。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_gettoucheventdisplayid",
      children: "OH_Input_GetTouchEventDisplayId()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_Input_GetTouchEventDisplayId(const struct Input_TouchEvent* touchEvent)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取触屏输入事件的屏幕ID。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 15"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-touchevent/capi-input-input-touchevent",
              children: "Input_TouchEvent"
            }), "* touchEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["触屏输入事件对象，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createtouchevent",
              children: "OH_Input_CreateTouchEvent"
            }), "接口可以创建触屏输入事件对象。  使用完需使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroytouchevent",
              children: "OH_Input_DestroyTouchEvent"
            }), "接口销毁触屏输入事件对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "触屏输入事件的屏幕ID。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_cancelinjection",
      children: "OH_Input_CancelInjection()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Input_CancelInjection()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消事件注入并撤销授权。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_requestinjection",
      children: "OH_Input_RequestInjection()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_Result OH_Input_RequestInjection(Input_InjectAuthorizeCallback callback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当前应用申请注入权限，包括申请注入按键事件", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-input-manager-h/capi-oh-input-manager-h#oh_input_injectkeyevent",
        children: "OH_Input_InjectKeyEvent"
      }), "、注入触屏输入事件", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-input-manager-h/capi-oh-input-manager-h#oh_input_injecttouchevent",
        children: "OH_Input_InjectTouchEvent"
      }), "、注入鼠标事件", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-input-manager-h/capi-oh-input-manager-h#oh_input_injectmouseevent",
        children: "OH_Input_InjectMouseEvent"
      }), "等注入操作的权限。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异"
        })
      }), "：该接口仅在PC/2in1设备上生效，在其他设备上返回801错误码。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-input-manager-h/capi-oh-input-manager-h#input_injectauthorizecallback",
              children: "Input_InjectAuthorizeCallback"
            }), " callback"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["授权状态回调，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-input-manager-h/capi-oh-input-manager-h#input_injectauthorizecallback",
              children: "Input_InjectAuthorizeCallback"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-input-manager-h/capi-oh-input-manager-h#input_result",
              children: "Input_Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["函数返回值，参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-input-manager-h/capi-oh-input-manager-h#input_result",
              children: "Input_Result"
            }), "。  INPUT_SUCCESS = 0 申请授权成功，等待用户授权结果并回调授权状态。  INPUT_PARAMETER_ERROR = 401 参数错误，参数callback为空。  INPUT_DEVICE_NOT_SUPPORTED = 801 表示不支持该功能。  INPUT_SERVICE_EXCEPTION = 3800001 服务异常。  INPUT_INJECTION_AUTHORIZING = 3900005 正在授权中。  INPUT_INJECTION_OPERATION_FREQUENT = 3900006 重复请求（当前应用连续申请授权弹窗成功，间隔时间不超过3秒）。  INPUT_INJECTION_AUTHORIZED = 3900007 当前应用已经授权。  INPUT_INJECTION_AUTHORIZED_OTHERS = 3900008 其它应用已经授权。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_queryauthorizedstatus",
      children: "OH_Input_QueryAuthorizedStatus()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_Result OH_Input_QueryAuthorizedStatus(Input_InjectionStatus* status)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询当前应用注入的权限状态。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-input-manager-h/capi-oh-input-manager-h#input_injectionstatus",
              children: "Input_InjectionStatus"
            }), "* status"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["当前应用注入权限状态。参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-input-manager-h/capi-oh-input-manager-h#input_injectionstatus",
              children: "Input_InjectionStatus"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-input-manager-h/capi-oh-input-manager-h#input_result",
              children: "Input_Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["函数返回值，参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-input-manager-h/capi-oh-input-manager-h#input_result",
              children: "Input_Result"
            }), "。  INPUT_SUCCESS = 0 查询成功。  INPUT_PARAMETER_ERROR = 401 参数错误，参数status为空。  INPUT_SERVICE_EXCEPTION = 3800001 服务异常。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_createaxisevent",
      children: "OH_Input_CreateAxisEvent()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_AxisEvent* OH_Input_CreateAxisEvent(void)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建轴事件对象。通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_input_destroyaxisevent",
        children: "OH_Input_DestroyAxisEvent"
      }), "销毁轴事件对象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Input_AxisEvent*"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["成功返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-axisevent/capi-input-input-axisevent",
              children: "Input_AxisEvent"
            }), "对象实例，失败则返回null。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_destroyaxisevent",
      children: "OH_Input_DestroyAxisEvent()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_Result OH_Input_DestroyAxisEvent(Input_AxisEvent** axisEvent)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "销毁轴事件对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-axisevent/capi-input-input-axisevent",
              children: "Input_AxisEvent"
            }), "** axisEvent"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "轴事件对象实例的指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "Input_Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["若销毁成功，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SUCCESS"
            }), "；若axisEvent为NULL或者axisEvent为NULL，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PARAMETER_ERROR"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_setaxiseventaction",
      children: "OH_Input_SetAxisEventAction()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_Result OH_Input_SetAxisEventAction(Input_AxisEvent* axisEvent, InputEvent_AxisAction action)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置轴事件的动作。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-axisevent/capi-input-input-axisevent",
              children: "Input_AxisEvent"
            }), "* axisEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["轴事件对象，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createaxisevent",
              children: "OH_Input_CreateAxisEvent"
            }), "接口可以创建轴事件对象。  使用完需使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroyaxisevent",
              children: "OH_Input_DestroyAxisEvent"
            }), "接口销毁轴事件对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-axis-type-h/capi-oh-axis-type-h#inputevent_axisaction",
              children: "InputEvent_AxisAction"
            }), " action"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["轴事件动作，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-axis-type-h/capi-oh-axis-type-h#inputevent_axisaction",
              children: "InputEvent_AxisAction"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "Input_Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["若设置轴事件的动作成功，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SUCCESS"
            }), "；若axisEvent为NULL，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PARAMETER_ERROR"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_getaxiseventaction",
      children: "OH_Input_GetAxisEventAction()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_Result OH_Input_GetAxisEventAction(const Input_AxisEvent* axisEvent, InputEvent_AxisAction *action)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取轴事件的动作。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-axisevent/capi-input-input-axisevent",
              children: "Input_AxisEvent"
            }), "* axisEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["轴事件对象，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createaxisevent",
              children: "OH_Input_CreateAxisEvent"
            }), "接口可以创建轴事件对象。  使用完需使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroyaxisevent",
              children: "OH_Input_DestroyAxisEvent"
            }), "接口销毁轴事件对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-axis-type-h/capi-oh-axis-type-h#inputevent_axisaction",
              children: "InputEvent_AxisAction"
            }), " *action"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["action 出参，返回轴事件动作，具体请参考在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-axis-type-h/capi-oh-axis-type-h#inputevent_axisaction",
              children: "InputEvent_AxisAction"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "Input_Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["若获取轴事件的动作成功，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SUCCESS"
            }), "；若axisEvent或者action为NULL，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PARAMETER_ERROR"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_setaxiseventdisplayx",
      children: "OH_Input_SetAxisEventDisplayX()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_Result OH_Input_SetAxisEventDisplayX(Input_AxisEvent* axisEvent, float displayX)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置轴事件以指定屏幕左上角为原点的相对坐标系的X坐标。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-axisevent/capi-input-input-axisevent",
              children: "Input_AxisEvent"
            }), "* axisEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["轴事件对象，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createaxisevent",
              children: "OH_Input_CreateAxisEvent"
            }), "接口可以创建轴事件对象。  使用完需使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroyaxisevent",
              children: "OH_Input_DestroyAxisEvent"
            }), "接口销毁轴事件对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float displayX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "轴事件以指定屏幕左上角为原点的相对坐标系的X坐标。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "Input_Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["若设置轴事件的X坐标成功，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SUCCESS"
            }), "；若axisEvent为NULL，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PARAMETER_ERROR"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_getaxiseventdisplayx",
      children: "OH_Input_GetAxisEventDisplayX()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_Result OH_Input_GetAxisEventDisplayX(const Input_AxisEvent* axisEvent, float* displayX)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取轴事件以指定屏幕左上角为原点的相对坐标系的X坐标。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-axisevent/capi-input-input-axisevent",
              children: "Input_AxisEvent"
            }), "* axisEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["轴事件对象，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createaxisevent",
              children: "OH_Input_CreateAxisEvent"
            }), "接口可以创建轴事件对象。  使用完需使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroyaxisevent",
              children: "OH_Input_DestroyAxisEvent"
            }), "接口销毁轴事件对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float* displayX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "出参，返回轴事件以指定屏幕左上角为原点的相对坐标系的X坐标。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "Input_Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["若获取轴事件的X坐标成功，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SUCCESS"
            }), "；若axisEvent或者displayX为NULL，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PARAMETER_ERROR"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_setaxiseventdisplayy",
      children: "OH_Input_SetAxisEventDisplayY()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_Result OH_Input_SetAxisEventDisplayY(Input_AxisEvent* axisEvent, float displayY)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置轴事件以指定屏幕左上角为原点的相对坐标系的Y坐标。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-axisevent/capi-input-input-axisevent",
              children: "Input_AxisEvent"
            }), "* axisEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["轴事件对象，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createaxisevent",
              children: "OH_Input_CreateAxisEvent"
            }), "接口可以创建轴事件对象。  使用完需使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroyaxisevent",
              children: "OH_Input_DestroyAxisEvent"
            }), "接口销毁轴事件对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float displayY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "轴事件以指定屏幕左上角为原点的相对坐标系的Y坐标。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "Input_Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["若设置轴事件的Y坐标成功，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SUCCESS"
            }), "；若axisEvent为NULL，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PARAMETER_ERROR"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_getaxiseventdisplayy",
      children: "OH_Input_GetAxisEventDisplayY()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_Result OH_Input_GetAxisEventDisplayY(const Input_AxisEvent* axisEvent, float* displayY)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取轴事件以指定屏幕左上角为原点的相对坐标系的Y坐标。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-axisevent/capi-input-input-axisevent",
              children: "Input_AxisEvent"
            }), "* axisEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["轴事件对象，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createaxisevent",
              children: "OH_Input_CreateAxisEvent"
            }), "接口可以创建轴事件对象。  使用完需使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroyaxisevent",
              children: "OH_Input_DestroyAxisEvent"
            }), "接口销毁轴事件对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float* displayY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "出参，返回轴事件以指定屏幕左上角为原点的相对坐标系的Y坐标。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "Input_Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["若获取轴事件的Y坐标成功，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SUCCESS"
            }), "；若axisEvent或者displayY为NULL，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PARAMETER_ERROR"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_setaxiseventaxisvalue",
      children: "OH_Input_SetAxisEventAxisValue()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_Result OH_Input_SetAxisEventAxisValue(Input_AxisEvent* axisEvent,InputEvent_AxisType axisType, double axisValue)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置轴事件指定轴类型的轴值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-axisevent/capi-input-input-axisevent",
              children: "Input_AxisEvent"
            }), "* axisEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["轴事件对象，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createaxisevent",
              children: "OH_Input_CreateAxisEvent"
            }), "接口可以创建轴事件对象。  使用完需使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroyaxisevent",
              children: "OH_Input_DestroyAxisEvent"
            }), "接口销毁轴事件对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-axis-type-h/capi-oh-axis-type-h#inputevent_axistype",
              children: "InputEvent_AxisType"
            }), " axisType"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["轴类型，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-axis-type-h/capi-oh-axis-type-h#inputevent_axistype",
              children: "InputEvent_AxisType"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "double axisValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "轴事件的值，正数向前滚动（例如，1.0表示向前滚动一个单位），负数向后滚动（例如，-1.0表示向后滚动一个单位）,零表示没有滚动。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "Input_Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["若设置轴事件指定轴类型的轴值成功，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SUCCESS"
            }), "；若axisEvent为NULL，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PARAMETER_ERROR"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_getaxiseventaxisvalue",
      children: "OH_Input_GetAxisEventAxisValue()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_Result OH_Input_GetAxisEventAxisValue(const Input_AxisEvent* axisEvent,InputEvent_AxisType axisType, double* axisValue)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取轴事件指定轴类型的轴值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-axisevent/capi-input-input-axisevent",
              children: "Input_AxisEvent"
            }), "* axisEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["轴事件对象，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createaxisevent",
              children: "OH_Input_CreateAxisEvent"
            }), "接口可以创建轴事件对象。  使用完需使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroyaxisevent",
              children: "OH_Input_DestroyAxisEvent"
            }), "接口销毁轴事件对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-axis-type-h/capi-oh-axis-type-h#inputevent_axistype",
              children: "InputEvent_AxisType"
            }), " axisType"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["轴类型，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-axis-type-h/capi-oh-axis-type-h#inputevent_axistype",
              children: "InputEvent_AxisType"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "double* axisValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "出参，返回轴事件的值，正数向前滚动（例如，1.0表示向前滚动一个单位），负数向后滚动（例如，-1.0表示向后滚动一个单位）,零表示没有滚动。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "Input_Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["若获取轴事件指定轴类型的轴值成功，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SUCCESS"
            }), "；若axisEvent或者axisValue为NULL，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PARAMETER_ERROR"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_setaxiseventactiontime",
      children: "OH_Input_SetAxisEventActionTime()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_Result OH_Input_SetAxisEventActionTime(Input_AxisEvent* axisEvent, int64_t actionTime)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置轴事件发生的时间。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-axisevent/capi-input-input-axisevent",
              children: "Input_AxisEvent"
            }), "* axisEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["轴事件对象，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createaxisevent",
              children: "OH_Input_CreateAxisEvent"
            }), "接口可以创建轴事件对象。  使用完需使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroyaxisevent",
              children: "OH_Input_DestroyAxisEvent"
            }), "接口销毁轴事件对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int64_t actionTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "轴事件发生的时间，表示系统启动运行至今逝去的微秒数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "Input_Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["若设置轴事件发生的时间成功，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SUCCESS"
            }), "；若axisEvent为NULL，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PARAMETER_ERROR"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_getaxiseventactiontime",
      children: "OH_Input_GetAxisEventActionTime()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_Result OH_Input_GetAxisEventActionTime(const Input_AxisEvent* axisEvent, int64_t* actionTime)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取轴事件发生的时间。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-axisevent/capi-input-input-axisevent",
              children: "Input_AxisEvent"
            }), "* axisEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["轴事件对象，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createaxisevent",
              children: "OH_Input_CreateAxisEvent"
            }), "接口可以创建轴事件对象。  使用完需使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroyaxisevent",
              children: "OH_Input_DestroyAxisEvent"
            }), "接口销毁轴事件对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int64_t* actionTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "出参，返回轴事件发生的时间，表示系统启动运行至今逝去的微秒数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "Input_Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["若获取轴事件发生的时间成功，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SUCCESS"
            }), "；若axisEvent或者actionTime为NULL，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PARAMETER_ERROR"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_setaxiseventtype",
      children: "OH_Input_SetAxisEventType()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_Result OH_Input_SetAxisEventType(Input_AxisEvent* axisEvent, InputEvent_AxisEventType axisEventType)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置轴事件类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-axisevent/capi-input-input-axisevent",
              children: "Input_AxisEvent"
            }), "* axisEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["轴事件对象，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createaxisevent",
              children: "OH_Input_CreateAxisEvent"
            }), "接口可以创建轴事件对象。  使用完需使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroyaxisevent",
              children: "OH_Input_DestroyAxisEvent"
            }), "接口销毁轴事件对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-axis-type-h/capi-oh-axis-type-h#inputevent_axiseventtype",
              children: "InputEvent_AxisEventType"
            }), " axisEventType"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["轴事件类型，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-axis-type-h/capi-oh-axis-type-h#inputevent_axiseventtype",
              children: "InputEvent_AxisEventType"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "Input_Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["若设置轴事件类型成功，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SUCCESS"
            }), "；若axisEvent为NULL，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PARAMETER_ERROR"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_getaxiseventtype",
      children: "OH_Input_GetAxisEventType()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_Result OH_Input_GetAxisEventType(const Input_AxisEvent* axisEvent, InputEvent_AxisEventType* axisEventType)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取轴事件类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-axisevent/capi-input-input-axisevent",
              children: "Input_AxisEvent"
            }), "* axisEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["轴事件对象，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createaxisevent",
              children: "OH_Input_CreateAxisEvent"
            }), "接口可以创建轴事件对象。  使用完需使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroyaxisevent",
              children: "OH_Input_DestroyAxisEvent"
            }), "接口销毁轴事件对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-axis-type-h/capi-oh-axis-type-h#inputevent_axiseventtype",
              children: "InputEvent_AxisEventType"
            }), "* axisEventType"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["出参，返回轴事件类型，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-axis-type-h/capi-oh-axis-type-h#inputevent_axiseventtype",
              children: "InputEvent_AxisEventType"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "Input_Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["若获取轴事件类型成功，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SUCCESS"
            }), "；若axisEvent或者axisEventType为NULL，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PARAMETER_ERROR"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_setaxiseventsourcetype",
      children: "OH_Input_SetAxisEventSourceType()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_Result OH_Input_SetAxisEventSourceType(Input_AxisEvent* axisEvent, InputEvent_SourceType sourceType)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置轴事件源类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-axisevent/capi-input-input-axisevent",
              children: "Input_AxisEvent"
            }), "* axisEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["轴事件对象，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createaxisevent",
              children: "OH_Input_CreateAxisEvent"
            }), "接口可以创建轴事件对象。  使用完需使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroyaxisevent",
              children: "OH_Input_DestroyAxisEvent"
            }), "接口销毁轴事件对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#inputevent_sourcetype",
              children: "InputEvent_SourceType"
            }), " sourceType"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["轴事件源类型,具体请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#inputevent_sourcetype",
              children: "InputEvent_SourceType"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "Input_Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["若设置轴事件源类型成功，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SUCCESS"
            }), "；若axisEvent为NULL，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PARAMETER_ERROR"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_getaxiseventsourcetype",
      children: "OH_Input_GetAxisEventSourceType()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_Result OH_Input_GetAxisEventSourceType(const Input_AxisEvent* axisEvent, InputEvent_SourceType* sourceType)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取轴事件源类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-axisevent/capi-input-input-axisevent",
              children: "Input_AxisEvent"
            }), "* axisEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["轴事件对象，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createaxisevent",
              children: "OH_Input_CreateAxisEvent"
            }), "接口可以创建轴事件对象。  使用完需使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroyaxisevent",
              children: "OH_Input_DestroyAxisEvent"
            }), "接口销毁轴事件对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#inputevent_sourcetype",
              children: "InputEvent_SourceType"
            }), "* sourceType"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["出参，返回轴事件源类型，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#inputevent_sourcetype",
              children: "InputEvent_SourceType"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "Input_Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["若获取轴事件源类型成功，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SUCCESS"
            }), "；若axisEvent或者sourceType为NULL，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PARAMETER_ERROR"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_setaxiseventwindowid",
      children: "OH_Input_SetAxisEventWindowId()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_Result OH_Input_SetAxisEventWindowId(Input_AxisEvent* axisEvent, int32_t windowId)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置轴事件的窗口ID。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 15"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-axisevent/capi-input-input-axisevent",
              children: "Input_AxisEvent"
            }), "* axisEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["轴事件对象，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createaxisevent",
              children: "OH_Input_CreateAxisEvent"
            }), "接口可以创建轴事件对象。  使用完需使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroyaxisevent",
              children: "OH_Input_DestroyAxisEvent"
            }), "接口销毁轴事件对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t windowId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "轴事件窗口ID。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "Input_Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["若设置轴事件的窗口ID成功，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SUCCESS"
            }), "；若axisEvent为NULL，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PARAMETER_ERROR"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_getaxiseventwindowid",
      children: "OH_Input_GetAxisEventWindowId()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_Result OH_Input_GetAxisEventWindowId(const Input_AxisEvent* axisEvent, int32_t* windowId)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取轴事件的窗口ID。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 15"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-axisevent/capi-input-input-axisevent",
              children: "Input_AxisEvent"
            }), "* axisEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["轴事件对象，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createaxisevent",
              children: "OH_Input_CreateAxisEvent"
            }), "接口可以创建轴事件对象。  使用完需使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroyaxisevent",
              children: "OH_Input_DestroyAxisEvent"
            }), "接口销毁轴事件对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t* windowId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "出参，返回轴事件窗口ID。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "Input_Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["若获取轴事件的窗口ID成功，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SUCCESS"
            }), "；若axisEvent或者windowId为NULL，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PARAMETER_ERROR"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_setaxiseventdisplayid",
      children: "OH_Input_SetAxisEventDisplayId()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_Result OH_Input_SetAxisEventDisplayId(Input_AxisEvent* axisEvent, int32_t displayId)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置轴事件的屏幕ID。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 15"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-axisevent/capi-input-input-axisevent",
              children: "Input_AxisEvent"
            }), "* axisEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["轴事件对象，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createaxisevent",
              children: "OH_Input_CreateAxisEvent"
            }), "接口可以创建轴事件对象。  使用完需使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroyaxisevent",
              children: "OH_Input_DestroyAxisEvent"
            }), "接口销毁轴事件对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t displayId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "轴事件屏幕ID。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "Input_Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["若设置轴事件的屏幕ID成功，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SUCCESS"
            }), "；若axisEvent为NULL，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PARAMETER_ERROR"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_getaxiseventdisplayid",
      children: "OH_Input_GetAxisEventDisplayId()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_Result OH_Input_GetAxisEventDisplayId(const Input_AxisEvent* axisEvent, int32_t* displayId)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取轴事件的屏幕ID。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 15"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-axisevent/capi-input-input-axisevent",
              children: "Input_AxisEvent"
            }), "* axisEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["轴事件对象，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createaxisevent",
              children: "OH_Input_CreateAxisEvent"
            }), "接口可以创建轴事件对象。  使用完需使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroyaxisevent",
              children: "OH_Input_DestroyAxisEvent"
            }), "接口销毁轴事件对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t* displayId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "出参，返回轴事件屏幕ID。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "Input_Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["若获取轴事件的屏幕ID成功，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SUCCESS"
            }), "；若axisEvent或者displayId为NULL，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PARAMETER_ERROR"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_addkeyeventmonitor",
      children: "OH_Input_AddKeyEventMonitor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_Result OH_Input_AddKeyEventMonitor(Input_KeyEventCallback callback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "添加按键事件监听。重复添加只有第一次生效，后续添加请求将被忽略。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.INPUT_MONITORING"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该权限为受限权限，申请方式请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions-in-acl",
        children: "申请受限权限"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#input_keyeventcallback",
              children: "Input_KeyEventCallback"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数，用于接收按键事件。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "Input_Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["若添加按键事件监听成功，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SUCCESS"
            }), "；若权限校验失败，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PERMISSION_DENIED"
            }), "；  若callback为空，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PARAMETER_ERROR"
            }), "；若服务异常，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SERVICE_EXCEPTION"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_addmouseeventmonitor",
      children: "OH_Input_AddMouseEventMonitor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_Result OH_Input_AddMouseEventMonitor(Input_MouseEventCallback callback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "添加鼠标事件监听，包含鼠标点击，移动，不包含滚轮事件，滚轮事件归属于轴事件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该接口处于录屏场景时才允许调用，否则调用该接口不生效。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.INPUT_MONITORING"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该权限为受限权限，申请方式请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions-in-acl",
        children: "申请受限权限"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#input_mouseeventcallback",
              children: "Input_MouseEventCallback"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数，用于接收鼠标事件。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "Input_Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["若添加鼠标事件监听成功，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SUCCESS"
            }), "；若权限校验失败，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PERMISSION_DENIED"
            }), "；  若callback为空，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PARAMETER_ERROR"
            }), "；若服务异常，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SERVICE_EXCEPTION"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_addtoucheventmonitor",
      children: "OH_Input_AddTouchEventMonitor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_Result OH_Input_AddTouchEventMonitor(Input_TouchEventCallback callback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "添加触屏输入事件监听。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.INPUT_MONITORING"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该权限为受限权限，申请方式请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions-in-acl",
        children: "申请受限权限"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#input_toucheventcallback",
              children: "Input_TouchEventCallback"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数，用于接收触屏输入事件。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "Input_Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["若添加触屏输入事件监听成功，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SUCCESS"
            }), "；若权限校验失败，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PERMISSION_DENIED"
            }), "；  若callback为空，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PARAMETER_ERROR"
            }), "；若服务异常，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SERVICE_EXCEPTION"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_addaxiseventmonitorforall",
      children: "OH_Input_AddAxisEventMonitorForAll()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_Result OH_Input_AddAxisEventMonitorForAll(Input_AxisEventCallback callback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["添加所有类型轴事件监听，轴事件类型定义在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-axis-type-h/capi-oh-axis-type-h#inputevent_axiseventtype",
        children: "InputEvent_AxisEventType"
      }), "中。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.INPUT_MONITORING"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该权限为受限权限，申请方式请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions-in-acl",
        children: "申请受限权限"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#input_axiseventcallback",
              children: "Input_AxisEventCallback"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数，用于接收轴事件。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "Input_Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["若添加轴事件监听成功，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SUCCESS"
            }), "；若权限校验失败，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PERMISSION_DENIED"
            }), "；  若callback为空，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PARAMETER_ERROR"
            }), "；若服务异常，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SERVICE_EXCEPTION"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_addaxiseventmonitor",
      children: "OH_Input_AddAxisEventMonitor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_Result OH_Input_AddAxisEventMonitor(InputEvent_AxisEventType axisEventType, Input_AxisEventCallback callback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["添加指定类型的轴事件监听，轴事件类型定义在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-axis-type-h/capi-oh-axis-type-h#inputevent_axiseventtype",
        children: "InputEvent_AxisEventType"
      }), "中。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.INPUT_MONITORING"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该权限为受限权限，申请方式请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions-in-acl",
        children: "申请受限权限"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-axis-type-h/capi-oh-axis-type-h#inputevent_axiseventtype",
              children: "InputEvent_AxisEventType"
            }), " axisEventType"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["要监听的轴事件类型，轴事件类型定义在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-axis-type-h/capi-oh-axis-type-h#inputevent_axiseventtype",
              children: "InputEvent_AxisEventType"
            }), "中。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#input_axiseventcallback",
              children: "Input_AxisEventCallback"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数，用于接收指定类型的轴事件"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "Input_Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["若添加轴事件监听成功，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SUCCESS"
            }), "；若权限校验失败，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PERMISSION_DENIED"
            }), "；  若callback为空，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PARAMETER_ERROR"
            }), "；若服务异常，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SERVICE_EXCEPTION"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_removekeyeventmonitor",
      children: "OH_Input_RemoveKeyEventMonitor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_Result OH_Input_RemoveKeyEventMonitor(Input_KeyEventCallback callback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "移除按键事件监听。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.INPUT_MONITORING"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该权限为受限权限，申请方式请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions-in-acl",
        children: "申请受限权限"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#input_keyeventcallback",
              children: "Input_KeyEventCallback"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定要被移除的用于按键事件监听的回调函数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "Input_Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["若移除按键事件监听成功，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SUCCESS"
            }), "；若权限校验失败，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PERMISSION_DENIED"
            }), "；  若callback为空或者没有被添加监听，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PARAMETER_ERROR"
            }), "；若服务异常，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SERVICE_EXCEPTION"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_removemouseeventmonitor",
      children: "OH_Input_RemoveMouseEventMonitor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_Result OH_Input_RemoveMouseEventMonitor(Input_MouseEventCallback callback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "移除鼠标事件监听。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.INPUT_MONITORING"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该权限为受限权限，申请方式请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions-in-acl",
        children: "申请受限权限"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#input_mouseeventcallback",
              children: "Input_MouseEventCallback"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定要被移除的用于鼠标事件监听的回调函数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "Input_Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["若移除鼠标事件监听成功，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SUCCESS"
            }), "；若权限校验失败，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PERMISSION_DENIED"
            }), "；  若callback为空或者没有被添加监听，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PARAMETER_ERROR"
            }), "；若服务异常，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SERVICE_EXCEPTION"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_removetoucheventmonitor",
      children: "OH_Input_RemoveTouchEventMonitor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_Result OH_Input_RemoveTouchEventMonitor(Input_TouchEventCallback callback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "移除触屏输入事件监听。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.INPUT_MONITORING"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该权限为受限权限，申请方式请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions-in-acl",
        children: "申请受限权限"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#input_toucheventcallback",
              children: "Input_TouchEventCallback"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定要被移除的用于触屏输入事件监听的回调函数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "Input_Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["若移除触屏输入事件监听成功，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SUCCESS"
            }), "；若权限校验失败，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PERMISSION_DENIED"
            }), "；  若callback为空或者没有被添加监听，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PARAMETER_ERROR"
            }), "；若服务异常，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SERVICE_EXCEPTION"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_removeaxiseventmonitorforall",
      children: "OH_Input_RemoveAxisEventMonitorForAll()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_Result OH_Input_RemoveAxisEventMonitorForAll(Input_AxisEventCallback callback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "移除所有类型轴事件监听。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.INPUT_MONITORING"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该权限为受限权限，申请方式请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions-in-acl",
        children: "申请受限权限"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#input_axiseventcallback",
              children: "Input_AxisEventCallback"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定要被移除的用于所有类型轴事件监听的回调函数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "Input_Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["若移除轴事件监听成功，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SUCCESS"
            }), "；若权限校验失败，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PERMISSION_DENIED"
            }), "；  若callback为空或者没有被添加监听，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PARAMETER_ERROR"
            }), "；若服务异常，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SERVICE_EXCEPTION"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_removeaxiseventmonitor",
      children: "OH_Input_RemoveAxisEventMonitor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_Result OH_Input_RemoveAxisEventMonitor(InputEvent_AxisEventType axisEventType, Input_AxisEventCallback callback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["移除指定类型轴事件监听，轴事件类型定义在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-axis-type-h/capi-oh-axis-type-h#inputevent_axiseventtype",
        children: "InputEvent_AxisEventType"
      }), "中。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.INPUT_MONITORING"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该权限为受限权限，申请方式请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions-in-acl",
        children: "申请受限权限"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-axis-type-h/capi-oh-axis-type-h#inputevent_axiseventtype",
              children: "InputEvent_AxisEventType"
            }), " axisEventType"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指定要移除监听的轴事件类型，轴事件类型定义在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-axis-type-h/capi-oh-axis-type-h#inputevent_axiseventtype",
              children: "InputEvent_AxisEventType"
            }), "中。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#input_axiseventcallback",
              children: "Input_AxisEventCallback"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定要被移除的用于指定类型轴事件监听的回调函数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "Input_Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["若移除轴事件监听成功，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SUCCESS"
            }), "；若权限校验失败，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PERMISSION_DENIED"
            }), "；  若callback为空或者没有被添加监听，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PARAMETER_ERROR"
            }), "；若服务异常，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SERVICE_EXCEPTION"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_addkeyeventinterceptor",
      children: "OH_Input_AddKeyEventInterceptor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_Result OH_Input_AddKeyEventInterceptor(Input_KeyEventCallback callback, Input_InterceptorOptions *option)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["添加按键事件的拦截，重复添加只有第一次生效，后续添加请求返回错误码", (0,jsx_runtime.jsx)(_components.a, {
        href: "#input_result",
        children: "INPUT_REPEAT_INTERCEPTOR"
      }), "。仅在应用获焦时拦截按键事件。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.INTERCEPT_INPUT_EVENT"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该权限为受限权限，申请方式请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions-in-acl",
        children: "申请受限权限"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#input_keyeventcallback",
              children: "Input_KeyEventCallback"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数，用于接收按键事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-interceptoroptions/capi-input-input-interceptoroptions",
              children: "Input_InterceptorOptions"
            }), " *option"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "option 输入事件拦截的可选项，传null则使用默认值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "Input_Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["若添加按键事件的拦截成功，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SUCCESS"
            }), "；若权限校验失败，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PERMISSION_DENIED"
            }), "；  若callback为空，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PARAMETER_ERROR"
            }), "；若重复添加拦截器，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_REPEAT_INTERCEPTOR"
            }), "；  若服务异常；则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SERVICE_EXCEPTION"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_addinputeventinterceptor",
      children: "OH_Input_AddInputEventInterceptor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_Result OH_Input_AddInputEventInterceptor(Input_InterceptorEventCallback *callback,Input_InterceptorOptions *option)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["添加输入事件拦截，包括鼠标、触屏和轴事件。重复添加只有第一次生效，后续添加请求返回错误码", (0,jsx_runtime.jsx)(_components.a, {
        href: "#input_result",
        children: "INPUT_REPEAT_INTERCEPTOR"
      }), "。仅命中应用窗口时拦截输入事件。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.INTERCEPT_INPUT_EVENT"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该权限为受限权限，申请方式请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions-in-acl",
        children: "申请受限权限"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-interceptoreventcallback/capi-input-input-interceptoreventcallback",
              children: "Input_InterceptorEventCallback"
            }), " *callback"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["callback 用于回调输入事件的结构体指针，请参考定义", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-interceptoreventcallback/capi-input-input-interceptoreventcallback",
              children: "Input_InterceptorEventCallback"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-interceptoroptions/capi-input-input-interceptoroptions",
              children: "Input_InterceptorOptions"
            }), " *option"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "option 输入事件拦截的可选项，传null则使用默认值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "Input_Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["若添加输入事件的拦截成功，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SUCCESS"
            }), "；若权限校验失败，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PERMISSION_DENIED"
            }), "；  若callback为空，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PARAMETER_ERROR"
            }), "；若重复添加拦截器，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_REPEAT_INTERCEPTOR"
            }), "；  若服务异常；则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SERVICE_EXCEPTION"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_removekeyeventinterceptor",
      children: "OH_Input_RemoveKeyEventInterceptor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_Result OH_Input_RemoveKeyEventInterceptor(void)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "移除按键事件拦截。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.INTERCEPT_INPUT_EVENT"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该权限为受限权限，申请方式请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions-in-acl",
        children: "申请受限权限"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "Input_Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["若移除按键事件拦截成功，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SUCCESS"
            }), "；若权限校验失败，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PERMISSION_DENIED"
            }), "；  若服务异常，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SERVICE_EXCEPTION"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_removeinputeventinterceptor",
      children: "OH_Input_RemoveInputEventInterceptor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_Result OH_Input_RemoveInputEventInterceptor(void)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "移除输入事件拦截，包括鼠标、触屏和轴事件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.INTERCEPT_INPUT_EVENT"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该权限为受限权限，申请方式请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions-in-acl",
        children: "申请受限权限"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "Input_Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["若移除输入事件拦截成功，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SUCCESS"
            }), "；若权限校验失败，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PERMISSION_DENIED"
            }), "；  若服务异常，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SERVICE_EXCEPTION"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_getintervalsincelastinput",
      children: "OH_Input_GetIntervalSinceLastInput()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_Result OH_Input_GetIntervalSinceLastInput(int64_t *timeInterval)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取距离上次系统输入事件的时间间隔。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 14"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int64_t *timeInterval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "timeInterval 时间间隔，单位：μs。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "Input_Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_Input_GetIntervalSinceLastInput 函数返回值。  若获取时间间隔成功，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SUCCESS"
            }), "；若服务异常，返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SERVICE_EXCEPTION"
            }), "；若参数错误，返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PARAMETER_ERROR"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_createhotkey",
      children: "OH_Input_CreateHotkey()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_Hotkey *OH_Input_CreateHotkey(void)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建快捷键对象。通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_input_destroyhotkey",
        children: "OH_Input_DestroyHotkey"
      }), "销毁快捷键对象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 14"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-hotkey/capi-input-input-hotkey",
              children: "Input_Hotkey"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["如果操作成功,则返回一个", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-hotkey/capi-input-input-hotkey",
              children: "Input_Hotkey"
            }), "指针对象。否则, 返回一个空指针， 可能的原因是内存分配失败。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_destroyhotkey",
      children: "OH_Input_DestroyHotkey()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Input_DestroyHotkey(Input_Hotkey **hotkey)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "销毁快捷键对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 14"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-hotkey/capi-input-input-hotkey",
              children: "Input_Hotkey"
            }), " **hotkey"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "hotkey 快捷键对象的实例。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_setprekeys",
      children: "OH_Input_SetPreKeys()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Input_SetPreKeys(Input_Hotkey *hotkey, int32_t *preKeys, int32_t size)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置修饰键。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 14"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-hotkey/capi-input-input-hotkey",
              children: "Input_Hotkey"
            }), " *hotkey"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "hotkey 快捷键对象的实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t *preKeys"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "preKeys 修饰键列表。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "修饰键个数， 取值范围1~2个。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_getprekeys",
      children: "OH_Input_GetPreKeys()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_Result OH_Input_GetPreKeys(const Input_Hotkey *hotkey, int32_t **preKeys, int32_t *preKeyCount)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取修饰键。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 14"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-hotkey/capi-input-input-hotkey",
              children: "Input_Hotkey"
            }), " *hotkey"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "hotkey 快捷键对象的实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t **preKeys"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "preKeys 返回修饰键列表。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t *preKeyCount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "preKeyCount 返回修饰键个数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "Input_Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_Input_GetPreKeys 函数返回值。  若获取成功，返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SUCCESS"
            }), "；若获取失败，返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PARAMETER_ERROR"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_setfinalkey",
      children: "OH_Input_SetFinalKey()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Input_SetFinalKey(Input_Hotkey* hotkey, int32_t finalKey)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置被修饰键。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 14"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-hotkey/capi-input-input-hotkey",
              children: "Input_Hotkey"
            }), "* hotkey"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "快捷键对象的实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t finalKey"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被修饰键值，被修饰键值只能是1个。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_getfinalkey",
      children: "OH_Input_GetFinalKey()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_Result OH_Input_GetFinalKey(const Input_Hotkey* hotkey, int32_t *finalKeyCode)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取被修饰键。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 14"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-hotkey/capi-input-input-hotkey",
              children: "Input_Hotkey"
            }), "* hotkey"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "快捷键对象的实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t *finalKeyCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "finalKeyCode 返回被修饰键键值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "Input_Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_Input_GetFinalKey 函数返回值。  若获取成功，返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SUCCESS"
            }), "；  若获取失败，返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PARAMETER_ERROR"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_createallsystemhotkeys",
      children: "OH_Input_CreateAllSystemHotkeys()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_Hotkey **OH_Input_CreateAllSystemHotkeys(int32_t count)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-hotkey/capi-input-input-hotkey",
        children: "Input_Hotkey"
      }), "类型实例的数组。通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_input_destroyallsystemhotkeys",
        children: "OH_Input_DestroyAllSystemHotkeys"
      }), "销毁", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-hotkey/capi-input-input-hotkey",
        children: "Input_Hotkey"
      }), "实例数组并回收内存。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异"
        })
      }), "：该接口在Wearable设备上调用无效果，在其他设备上可正常调用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 14"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t count"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-hotkey/capi-input-input-hotkey",
              children: "Input_Hotkey"
            }), "实例的数量。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-hotkey/capi-input-input-hotkey",
              children: "Input_Hotkey"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_Input_CreateAllSystemHotkeys 函数返回值。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SUCCESS"
            }), " 创建实例数组的双指针成功。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_destroyallsystemhotkeys",
      children: "OH_Input_DestroyAllSystemHotkeys()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Input_DestroyAllSystemHotkeys(Input_Hotkey **hotkeys, int32_t count)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["销毁", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-hotkey/capi-input-input-hotkey",
        children: "Input_Hotkey"
      }), "实例数组并回收内存。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 14"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-hotkey/capi-input-input-hotkey",
              children: "Input_Hotkey"
            }), " **hotkeys"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["hotkeys 指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-hotkey/capi-input-input-hotkey",
              children: "Input_Hotkey"
            }), "实例数组的双指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t count"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["销毁", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-hotkey/capi-input-input-hotkey",
              children: "Input_Hotkey"
            }), "实例的数量。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_getallsystemhotkeys",
      children: "OH_Input_GetAllSystemHotkeys()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_Result OH_Input_GetAllSystemHotkeys(Input_Hotkey **hotkey, int32_t *count)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取设置的所有快捷键。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异"
        })
      }), "：该接口在Wearable设备上调用无效果，在其他设备上可正常调用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 14"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-hotkey/capi-input-input-hotkey",
              children: "Input_Hotkey"
            }), " **hotkey"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["hotkey 返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-hotkey/capi-input-input-hotkey",
              children: "Input_Hotkey"
            }), " 类型实例数组。首次调用可传入NULL，可获取数组长度。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t *count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "count 返回支持快捷键的个数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "Input_Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_Input_GetAllSystemHotkeys 函数返回值。  若获取成功，返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SUCCESS"
            }), "；  若获取失败，返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PARAMETER_ERROR"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_setrepeat",
      children: "OH_Input_SetRepeat()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Input_SetRepeat(Input_Hotkey* hotkey, bool isRepeat)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置是否上报重复key事件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 14"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-hotkey/capi-input-input-hotkey",
              children: "Input_Hotkey"
            }), "* hotkey"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "快捷键对象的实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool isRepeat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否上报重复key事件。true表示上报，false表示不上报。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_getrepeat",
      children: "OH_Input_GetRepeat()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_Result OH_Input_GetRepeat(const Input_Hotkey* hotkey, bool *isRepeat)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取是否上报重复key事件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 14"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-hotkey/capi-input-input-hotkey",
              children: "Input_Hotkey"
            }), "* hotkey"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "快捷键对象的实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool *isRepeat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "isRepeat 返回Key事件是否重复。true表示重复，false表示不重复。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "Input_Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_Input_GetRepeat 函数返回值。  若获取成功，返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SUCCESS"
            }), "；  若获取失败，返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PARAMETER_ERROR"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_addhotkeymonitor",
      children: "OH_Input_AddHotkeyMonitor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_Result OH_Input_AddHotkeyMonitor(const Input_Hotkey* hotkey, Input_HotkeyCallback callback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "订阅快捷键事件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(763348)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "订阅快捷键事件时，对于preKeys和finalKey有以下约束："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "preKeys：修饰键（包括 Ctrl、Shift 和 Alt）集合，数量范围[1, 4]，无顺序要求。例如，Ctrl+Shift+Esc中，Ctrl+Shift称为修饰键。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["finalKey：被修饰键，除修饰键和Meta键以外的按键，详细按键介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-key-code-h/capi-oh-key-code-h",
          children: "按键设备的键值"
        }), "。例如，Ctrl+Shift+Esc中，Esc称为被修饰键。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异"
        })
      }), "：该接口在Wearable设备上返回801错误码，在其他设备上可正常调用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 14"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-hotkey/capi-input-input-hotkey",
              children: "Input_Hotkey"
            }), "* hotkey"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定要订阅的快捷键对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#input_hotkeycallback",
              children: "Input_HotkeyCallback"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数，用于回调快捷键事件。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "Input_Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_Input_AddHotkeyMonitor 函数返回值。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SUCCESS"
            }), " 表示订阅组合按键成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PARAMETER_ERROR"
            }), " 参数检查失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_OCCUPIED_BY_SYSTEM"
            }), " 该快捷键已被系统占用，可以通过接口", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_getallsystemhotkeys",
              children: "OH_Input_GetAllSystemHotkeys"
            }), "查询所有的系统快捷键。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_OCCUPIED_BY_OTHER"
            }), " 已被抢占订阅。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_DEVICE_NOT_SUPPORTED"
            }), " 表示不支持该功能。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_removehotkeymonitor",
      children: "OH_Input_RemoveHotkeyMonitor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_Result OH_Input_RemoveHotkeyMonitor(const Input_Hotkey* hotkey, Input_HotkeyCallback callback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消订阅快捷键。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 14"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-hotkey/capi-input-input-hotkey",
              children: "Input_Hotkey"
            }), "* hotkey"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定要取消订阅的快捷键对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#input_hotkeycallback",
              children: "Input_HotkeyCallback"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数，用于回调快捷键事件。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "Input_Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_Input_RemoveHotkeyMonitor 函数返回值。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SUCCESS"
            }), " 取消订阅组合按键成功， ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PARAMETER_ERROR"
            }), " 参数检查失败。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_registerdevicelistener",
      children: "OH_Input_RegisterDeviceListener()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_Result OH_Input_RegisterDeviceListener(Input_DeviceListener* listener)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册设备热插拔的监听器。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-devicelistener/capi-input-input-devicelistener",
              children: "Input_DeviceListener"
            }), "* listener"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向设备热插拔监听器", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-devicelistener/capi-input-input-devicelistener",
              children: "Input_DeviceListener"
            }), "的指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "Input_Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_Input_RegisterDeviceListener 函数返回值。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SUCCESS"
            }), " 表示注册成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PARAMETER_ERROR"
            }), " 表示listener 为NULL。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_unregisterdevicelistener",
      children: "OH_Input_UnregisterDeviceListener()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_Result OH_Input_UnregisterDeviceListener(Input_DeviceListener* listener)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消注册设备热插拔的监听。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-devicelistener/capi-input-input-devicelistener",
              children: "Input_DeviceListener"
            }), "* listener"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向设备热插拔监听器", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-devicelistener/capi-input-input-devicelistener",
              children: "Input_DeviceListener"
            }), "的指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "Input_Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_Input_UnregisterDeviceListener 函数返回值。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SUCCESS"
            }), " 表示取消注册成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PARAMETER_ERROR"
            }), " 表示listener 为 NULL 或者 listener 未被注册。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SERVICE_EXCEPTION"
            }), " 表示由于服务异常调用失败。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_unregisterdevicelisteners",
      children: "OH_Input_UnregisterDeviceListeners()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_Result OH_Input_UnregisterDeviceListeners()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消注册所有的设备热插拔的监听。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "Input_Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_Input_UnregisterDeviceListener 函数返回值。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SUCCESS"
            }), " 表示调用成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SERVICE_EXCEPTION"
            }), " 表示由于服务异常调用失败。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_getdeviceids",
      children: "OH_Input_GetDeviceIds()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_Result OH_Input_GetDeviceIds(int32_t *deviceIds, int32_t inSize, int32_t *outSize)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取所有输入设备的ID列表。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t *deviceIds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "deviceIds 保存输入设备ID的列表。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t inSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "保存输入设备ID列表的大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t *outSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "outSize 输出输入设备ID列表的长度，值小于等于inSize长度。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "Input_Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SUCCESS"
            }), " 表示操作成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PARAMETER_ERROR"
            }), " 表示deviceIds或outSize为空指针或inSize小于0。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_getdevice",
      children: "OH_Input_GetDevice()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_Result OH_Input_GetDevice(int32_t deviceId, Input_DeviceInfo **deviceInfo)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取输入设备信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t deviceId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入设备的唯一标识，同一个物理设备反复插拔或重启，设备ID可能会发生变化。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-deviceinfo/capi-input-input-deviceinfo",
              children: "Input_DeviceInfo"
            }), " **deviceInfo"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["deviceInfo 指向输入设备信息", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-deviceinfo/capi-input-input-deviceinfo",
              children: "Input_DeviceInfo"
            }), "的指针。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "Input_Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SUCCESS"
            }), " 表示操作成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PARAMETER_ERROR"
            }), " 表示deviceInfo为空指针或deviceId无效。  可以通过 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_getdeviceids",
              children: "OH_Input_GetDeviceIds"
            }), " 表示接口查询系统支持的设备ID。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_createdeviceinfo",
      children: "OH_Input_CreateDeviceInfo()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_DeviceInfo* OH_Input_CreateDeviceInfo(void)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建输入设备信息的对象。通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_input_destroydeviceinfo",
        children: "OH_Input_DestroyDeviceInfo"
      }), "销毁输入设备信息的对象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Input_DeviceInfo*"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["如果操作成功，返回设备信息", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-deviceinfo/capi-input-input-deviceinfo",
              children: "Input_DeviceInfo"
            }), "实例的指针。否则返回空指针，可能的原因是分配内存失败。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_destroydeviceinfo",
      children: "OH_Input_DestroyDeviceInfo()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Input_DestroyDeviceInfo(Input_DeviceInfo **deviceInfo)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "销毁输入设备信息的对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-deviceinfo/capi-input-input-deviceinfo",
              children: "Input_DeviceInfo"
            }), " **deviceInfo"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "deviceInfo 设备信息的对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_getkeyboardtype",
      children: "OH_Input_GetKeyboardType()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_Result OH_Input_GetKeyboardType(int32_t deviceId, int32_t *keyboardType)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取输入设备的键盘类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t deviceId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入设备的唯一标识，同一个物理设备反复插拔或重启，设备ID可能会发生变化。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t *keyboardType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "keyboardType 指向输入设备的键盘指针。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "Input_Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SUCCESS"
            }), " 表示操作成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PARAMETER_ERROR"
            }), " 表示设备ID为无效值或者keyboardType是空指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_getdeviceid",
      children: "OH_Input_GetDeviceId()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_Result OH_Input_GetDeviceId(Input_DeviceInfo *deviceInfo, int32_t *id)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取输入设备的ID。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-deviceinfo/capi-input-input-deviceinfo",
              children: "Input_DeviceInfo"
            }), " *deviceInfo"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["deviceInfo 输入设备信息", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-deviceinfo/capi-input-input-deviceinfo",
              children: "Input_DeviceInfo"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t *id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "id 指向输入设备ID的指针。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "Input_Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SUCCESS"
            }), " 表示操作成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PARAMETER_ERROR"
            }), " 表示deviceInfo或者ID是空指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_getdevicename",
      children: "OH_Input_GetDeviceName()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_Result OH_Input_GetDeviceName(Input_DeviceInfo *deviceInfo, char **name)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取输入设备的名称。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-deviceinfo/capi-input-input-deviceinfo",
              children: "Input_DeviceInfo"
            }), " *deviceInfo"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["deviceInfo 输入设备信息", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-deviceinfo/capi-input-input-deviceinfo",
              children: "Input_DeviceInfo"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "char **name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "name 指向输入设备名称的指针。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "Input_Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SUCCESS"
            }), " 表示操作成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PARAMETER_ERROR"
            }), " 表示deviceInfo或者name是空指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_getcapabilities",
      children: "OH_Input_GetCapabilities()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_Result OH_Input_GetCapabilities(Input_DeviceInfo *deviceInfo, int32_t *capabilities)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取有关输入设备能力信息，比如设备是触摸屏、触控板、键盘等。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-deviceinfo/capi-input-input-deviceinfo",
              children: "Input_DeviceInfo"
            }), " *deviceInfo"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["deviceInfo 输入设备信息", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-deviceinfo/capi-input-input-deviceinfo",
              children: "Input_DeviceInfo"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t *capabilities"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "capabilities 指向输入设备能力信息的指针。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "Input_Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SUCCESS"
            }), " 表示操作成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PARAMETER_ERROR"
            }), " 表示deviceInfo或者capabilities是空指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_getdeviceversion",
      children: "OH_Input_GetDeviceVersion()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_Result OH_Input_GetDeviceVersion(Input_DeviceInfo *deviceInfo, int32_t *version)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取输入设备的版本信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-deviceinfo/capi-input-input-deviceinfo",
              children: "Input_DeviceInfo"
            }), " *deviceInfo"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["deviceInfo 输入设备信息", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-deviceinfo/capi-input-input-deviceinfo",
              children: "Input_DeviceInfo"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t *version"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "version 指向输入设备版本信息的指针。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "Input_Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SUCCESS"
            }), " 表示操作成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PARAMETER_ERROR"
            }), " 表示deviceInfo或者version是空指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_getdeviceproduct",
      children: "OH_Input_GetDeviceProduct()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_Result OH_Input_GetDeviceProduct(Input_DeviceInfo *deviceInfo, int32_t *product)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取输入设备的产品信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-deviceinfo/capi-input-input-deviceinfo",
              children: "Input_DeviceInfo"
            }), " *deviceInfo"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["deviceInfo 输入设备信息", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-deviceinfo/capi-input-input-deviceinfo",
              children: "Input_DeviceInfo"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t *product"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "product 指向输入设备产品信息的指针。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "Input_Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SUCCESS"
            }), " 表示操作成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PARAMETER_ERROR"
            }), " 表示deviceInfo或者product是空指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_getdevicevendor",
      children: "OH_Input_GetDeviceVendor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_Result OH_Input_GetDeviceVendor(Input_DeviceInfo *deviceInfo, int32_t *vendor)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取输入设备的厂商信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-deviceinfo/capi-input-input-deviceinfo",
              children: "Input_DeviceInfo"
            }), " *deviceInfo"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["deviceInfo 输入设备信息", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-deviceinfo/capi-input-input-deviceinfo",
              children: "Input_DeviceInfo"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t *vendor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vendor 指向输入设备厂商信息的指针。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "Input_Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SUCCESS"
            }), " 表示操作成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PARAMETER_ERROR"
            }), " 表示deviceInfo或者vendor是空指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_getdeviceaddress",
      children: "OH_Input_GetDeviceAddress()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_Result OH_Input_GetDeviceAddress(Input_DeviceInfo *deviceInfo, char **address)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取输入设备的物理地址。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-deviceinfo/capi-input-input-deviceinfo",
              children: "Input_DeviceInfo"
            }), " *deviceInfo"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["deviceInfo 输入设备信息", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-deviceinfo/capi-input-input-deviceinfo",
              children: "Input_DeviceInfo"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "char **address"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "address 指向输入设备物理地址的指针。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "Input_Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SUCCESS"
            }), " 表示操作成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PARAMETER_ERROR"
            }), " 表示deviceInfo或者address是空指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_getfunctionkeystate",
      children: "OH_Input_GetFunctionKeyState()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_Result OH_Input_GetFunctionKeyState(int32_t keyCode, int32_t *state)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取功能键状态。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 15"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t keyCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "功能键值。目前仅支持CapsLock键，键值为1。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t *state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "state 功能键状态。0表示功能键关闭，1表示功能键打开。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "Input_Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_Input_GetFunctionKeyState 函数返回值。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SUCCESS"
            }), " 表示获取状态成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PARAMETER_ERROR"
            }), " 表示参数错误。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_KEYBOARD_DEVICE_NOT_EXIST"
            }), " 表示键盘设备不存在。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_injecttouchevent",
      children: "OH_Input_InjectTouchEvent()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_Input_InjectTouchEvent(const struct Input_TouchEvent* touchEvent)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用以指定屏幕左上角为原点的相对坐标系的坐标注入触屏输入事件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果当前处于用户未授权状态，调用该接口注入事件不生效。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，建议先使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_input_requestinjection",
        children: "OH_Input_RequestInjection"
      }), "请求授权。然后通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_input_queryauthorizedstatus",
        children: "OH_Input_QueryAuthorizedStatus"
      }), "查询授权状态，当授权状态为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-input-manager-h/capi-oh-input-manager-h#input_injectionstatus",
        children: "AUTHORIZED"
      }), "时，再使用该接口。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异"
        })
      }), "：该接口在PC/2in1设备中可正常调用，在其他设备上调用无效果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-touchevent/capi-input-input-touchevent",
              children: "Input_TouchEvent"
            }), "* touchEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["触屏输入事件对象，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createtouchevent",
              children: "OH_Input_CreateTouchEvent"
            }), "接口可以创建触屏输入事件对象。  使用完需使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroytouchevent",
              children: "OH_Input_DestroyTouchEvent"
            }), "接口销毁触屏输入事件对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_Input_InjectTouchEvent 函数返回值。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SUCCESS"
            }), " 表示注入成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PARAMETER_ERROR"
            }), " 表示参数错误。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PERMISSION_DENIED"
            }), " 表示缺少权限。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_injectmouseevent",
      children: "OH_Input_InjectMouseEvent()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_Input_InjectMouseEvent(const struct Input_MouseEvent* mouseEvent)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用以指定屏幕左上角为原点的相对坐标系的坐标注入鼠标事件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果当前处于用户未授权状态，调用该接口注入事件不生效。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，建议先使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_input_requestinjection",
        children: "OH_Input_RequestInjection"
      }), "请求授权。然后通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_input_queryauthorizedstatus",
        children: "OH_Input_QueryAuthorizedStatus"
      }), "查询授权状态，当授权状态为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-input-manager-h/capi-oh-input-manager-h#input_injectionstatus",
        children: "AUTHORIZED"
      }), "时，再使用该接口。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-mouseevent/capi-input-input-mouseevent",
              children: "Input_MouseEvent"
            }), "* mouseEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["鼠标事件对象，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createmouseevent",
              children: "OH_Input_CreateMouseEvent"
            }), "接口可以创建鼠标事件对象。  使用完需使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroymouseevent",
              children: "OH_Input_DestroyMouseEvent"
            }), "接口销毁鼠标事件对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_Input_InjectTouchEvent 函数返回值。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SUCCESS"
            }), " 表示注入成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PARAMETER_ERROR"
            }), " 表示参数错误。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PERMISSION_DENIED"
            }), " 表示缺少权限。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_getmouseeventdisplayid",
      children: "OH_Input_GetMouseEventDisplayId()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_Input_GetMouseEventDisplayId(const struct Input_MouseEvent* mouseEvent)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取鼠标事件的屏幕ID。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MultimodalInput.Input.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 15"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-mouseevent/capi-input-input-mouseevent",
              children: "Input_MouseEvent"
            }), "* mouseEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["鼠标事件对象，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createmouseevent",
              children: "OH_Input_CreateMouseEvent"
            }), "接口可以创建鼠标事件对象。  使用完需使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroymouseevent",
              children: "OH_Input_DestroyMouseEvent"
            }), "接口销毁鼠标事件对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "若获取鼠标事件的屏幕ID成功，则返回鼠标事件的屏幕ID；若mouseEvent为NULL，则返回-1。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_querymaxtouchpoints",
      children: "OH_Input_QueryMaxTouchPoints()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_Result OH_Input_QueryMaxTouchPoints(int32_t *count)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询设备支持的最大触屏报点数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t *count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备支持的最大触屏报点数，count取值范围为0-10，-1表示未知数量。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-input-manager-h/capi-oh-input-manager-h#input_result",
              children: "Input_Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_Input_QueryMaxTouchPoints 函数返回值：  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SUCCESS"
            }), " 表示查询成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-input-manager-h/capi-oh-input-manager-h#input_result",
              children: "INPUT_PARAMETER_ERROR"
            }), " 表示参数错误。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_injectmouseeventglobal",
      children: "OH_Input_InjectMouseEventGlobal()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_Input_InjectMouseEventGlobal(const struct Input_MouseEvent* mouseEvent)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用以主屏左上角为原点的全局坐标系的坐标注入鼠标事件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果当前处于用户未授权状态，调用该接口注入事件不生效。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["建议先使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_input_requestinjection",
        children: "OH_Input_RequestInjection"
      }), "请求授权。然后通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_input_queryauthorizedstatus",
        children: "OH_Input_QueryAuthorizedStatus"
      }), "查询授权状态，当授权状态为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-input-manager-h/capi-oh-input-manager-h#input_injectionstatus",
        children: "AUTHORIZED"
      }), "时，再使用该接口。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-mouseevent/capi-input-input-mouseevent",
              children: "Input_MouseEvent"
            }), "* mouseEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["鼠标事件对象，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createmouseevent",
              children: "OH_Input_CreateMouseEvent"
            }), "接口可以创建鼠标事件对象。  使用完需使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroymouseevent",
              children: "OH_Input_DestroyMouseEvent"
            }), "接口销毁鼠标事件对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_Input_InjectMouseEventGlobal 函数返回值。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SUCCESS"
            }), " 表示注入成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PARAMETER_ERROR"
            }), " 表示参数错误。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PERMISSION_DENIED"
            }), " 表示缺少权限。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_setmouseeventglobalx",
      children: "OH_Input_SetMouseEventGlobalX()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Input_SetMouseEventGlobalX(struct Input_MouseEvent* mouseEvent, int32_t globalX)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置鼠标事件以主屏左上角为原点的全局坐标系的X坐标。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-mouseevent/capi-input-input-mouseevent",
              children: "Input_MouseEvent"
            }), "* mouseEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["鼠标事件对象，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createmouseevent",
              children: "OH_Input_CreateMouseEvent"
            }), "接口可以创建鼠标事件对象。  使用完需使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroymouseevent",
              children: "OH_Input_DestroyMouseEvent"
            }), "接口销毁鼠标事件对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t globalX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "鼠标事件以主屏左上角为原点的全局坐标系的X坐标。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_getmouseeventglobalx",
      children: "OH_Input_GetMouseEventGlobalX()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_Input_GetMouseEventGlobalX(const struct Input_MouseEvent* mouseEvent)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取鼠标事件以主屏左上角为原点的全局坐标系的X坐标。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-mouseevent/capi-input-input-mouseevent",
              children: "Input_MouseEvent"
            }), "* mouseEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["鼠标事件对象，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createmouseevent",
              children: "OH_Input_CreateMouseEvent"
            }), "接口可以创建鼠标事件对象。  使用完需使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroymouseevent",
              children: "OH_Input_DestroyMouseEvent"
            }), "接口销毁鼠标事件对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "鼠标事件以主屏左上角为原点的全局坐标系的X坐标。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_setmouseeventglobaly",
      children: "OH_Input_SetMouseEventGlobalY()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Input_SetMouseEventGlobalY(struct Input_MouseEvent* mouseEvent, int32_t globalY)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置鼠标事件以主屏左上角为原点的全局坐标系的Y坐标。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-mouseevent/capi-input-input-mouseevent",
              children: "Input_MouseEvent"
            }), "* mouseEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["鼠标事件对象，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createmouseevent",
              children: "OH_Input_CreateMouseEvent"
            }), "接口可以创建鼠标事件对象。  使用完需使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroymouseevent",
              children: "OH_Input_DestroyMouseEvent"
            }), "接口销毁鼠标事件对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t globalY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "鼠标事件以主屏左上角为原点的全局坐标系的Y坐标。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_getmouseeventglobaly",
      children: "OH_Input_GetMouseEventGlobalY()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_Input_GetMouseEventGlobalY(const struct Input_MouseEvent* mouseEvent)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取鼠标事件以主屏左上角为原点的全局坐标系的Y坐标。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-mouseevent/capi-input-input-mouseevent",
              children: "Input_MouseEvent"
            }), "* mouseEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["鼠标事件对象，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createmouseevent",
              children: "OH_Input_CreateMouseEvent"
            }), "接口可以创建鼠标事件对象。  使用完需使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroymouseevent",
              children: "OH_Input_DestroyMouseEvent"
            }), "接口销毁鼠标事件对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "鼠标事件以主屏左上角为原点的全局坐标系的Y坐标。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_injecttoucheventglobal",
      children: "OH_Input_InjectTouchEventGlobal()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_Input_InjectTouchEventGlobal(const struct Input_TouchEvent* touchEvent)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用以主屏左上角为原点的全局坐标系的坐标注入触屏输入事件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果当前处于用户未授权状态，调用该接口注入事件不生效。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["建议先使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_input_requestinjection",
        children: "OH_Input_RequestInjection"
      }), "请求授权。然后通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_input_queryauthorizedstatus",
        children: "OH_Input_QueryAuthorizedStatus"
      }), "查询授权状态，当授权状态为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-input-manager-h/capi-oh-input-manager-h#input_injectionstatus",
        children: "AUTHORIZED"
      }), "时，再使用该接口。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-touchevent/capi-input-input-touchevent",
              children: "Input_TouchEvent"
            }), "* touchEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["触屏输入事件对象，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createtouchevent",
              children: "OH_Input_CreateTouchEvent"
            }), "接口可以创建触屏输入事件对象。  使用完需使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroytouchevent",
              children: "OH_Input_DestroyTouchEvent"
            }), "接口销毁触屏输入事件对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_Input_InjectTouchEventGlobal 函数返回值。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SUCCESS"
            }), " 表示注入成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PARAMETER_ERROR"
            }), " 表示参数错误。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PERMISSION_DENIED"
            }), " 表示缺少权限。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_settoucheventglobalx",
      children: "OH_Input_SetTouchEventGlobalX()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Input_SetTouchEventGlobalX(struct Input_TouchEvent* touchEvent, int32_t globalX)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置触屏输入事件以主屏左上角为原点的全局坐标系的X坐标。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-touchevent/capi-input-input-touchevent",
              children: "Input_TouchEvent"
            }), "* touchEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["触屏输入事件对象，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createtouchevent",
              children: "OH_Input_CreateTouchEvent"
            }), "接口可以创建触屏输入事件对象。  使用完需使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroytouchevent",
              children: "OH_Input_DestroyTouchEvent"
            }), "接口销毁触屏输入事件对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t globalX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "触屏输入事件以主屏左上角为原点的全局坐标系的X坐标。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_gettoucheventglobalx",
      children: "OH_Input_GetTouchEventGlobalX()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_Input_GetTouchEventGlobalX(const struct Input_TouchEvent* touchEvent)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取触屏输入事件以主屏左上角为原点的全局坐标系的X坐标。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-touchevent/capi-input-input-touchevent",
              children: "Input_TouchEvent"
            }), "* touchEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["触屏输入事件对象，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createtouchevent",
              children: "OH_Input_CreateTouchEvent"
            }), "接口可以创建触屏输入事件对象。  使用完需使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroytouchevent",
              children: "OH_Input_DestroyTouchEvent"
            }), "接口销毁触屏输入事件对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "触屏输入事件以主屏左上角为原点的全局坐标系的X坐标。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_settoucheventglobaly",
      children: "OH_Input_SetTouchEventGlobalY()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Input_SetTouchEventGlobalY(struct Input_TouchEvent* touchEvent, int32_t globalY)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置触屏输入事件以主屏左上角为原点的全局坐标系的Y坐标。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-touchevent/capi-input-input-touchevent",
              children: "Input_TouchEvent"
            }), "* touchEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["触屏输入事件对象，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createtouchevent",
              children: "OH_Input_CreateTouchEvent"
            }), "接口可以创建触屏输入事件对象。  使用完需使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroytouchevent",
              children: "OH_Input_DestroyTouchEvent"
            }), "接口销毁触屏输入事件对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t globalY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "触屏输入事件以主屏左上角为原点的全局坐标系的Y坐标。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_gettoucheventglobaly",
      children: "OH_Input_GetTouchEventGlobalY()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_Input_GetTouchEventGlobalY(const struct Input_TouchEvent* touchEvent)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取触屏输入事件以主屏左上角为原点的全局坐标系的Y坐标。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-touchevent/capi-input-input-touchevent",
              children: "Input_TouchEvent"
            }), "* touchEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["触屏输入事件对象，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createtouchevent",
              children: "OH_Input_CreateTouchEvent"
            }), "接口可以创建触屏输入事件对象。  使用完需使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroytouchevent",
              children: "OH_Input_DestroyTouchEvent"
            }), "接口销毁触屏输入事件对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "触屏输入事件以主屏左上角为原点的全局坐标系的Y坐标。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_setaxiseventglobalx",
      children: "OH_Input_SetAxisEventGlobalX()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_Result OH_Input_SetAxisEventGlobalX(struct Input_AxisEvent* axisEvent, int32_t globalX)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置轴事件以主屏左上角为原点的全局坐标系的X坐标。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-axisevent/capi-input-input-axisevent",
              children: "Input_AxisEvent"
            }), "* axisEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["轴事件对象，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createaxisevent",
              children: "OH_Input_CreateAxisEvent"
            }), "接口可以创建轴事件对象。  使用完需使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroyaxisevent",
              children: "OH_Input_DestroyAxisEvent"
            }), "接口销毁轴事件对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t globalX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "轴事件以主屏左上角为原点的全局坐标系的X坐标。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "Input_Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SUCCESS"
            }), " 表示操作成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PARAMETER_ERROR"
            }), " 表示axisEvent是空指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_getaxiseventglobalx",
      children: "OH_Input_GetAxisEventGlobalX()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_Result OH_Input_GetAxisEventGlobalX(const Input_AxisEvent* axisEvent, int32_t* globalX)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取轴事件以主屏左上角为原点的全局坐标系的X坐标。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-axisevent/capi-input-input-axisevent",
              children: "Input_AxisEvent"
            }), "* axisEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["轴事件对象，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createaxisevent",
              children: "OH_Input_CreateAxisEvent"
            }), "接口可以创建轴事件对象。  使用完需使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroyaxisevent",
              children: "OH_Input_DestroyAxisEvent"
            }), "接口销毁轴事件对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t* globalX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "轴事件以主屏左上角为原点的全局坐标系的X坐标。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "Input_Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SUCCESS"
            }), " 表示操作成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PARAMETER_ERROR"
            }), " 表示axisEvent或者globalX是空指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_setaxiseventglobaly",
      children: "OH_Input_SetAxisEventGlobalY()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_Result OH_Input_SetAxisEventGlobalY(struct Input_AxisEvent* axisEvent, int32_t globalY)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置轴事件以主屏左上角为原点的全局坐标系的Y坐标。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-axisevent/capi-input-input-axisevent",
              children: "Input_AxisEvent"
            }), "* axisEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["轴事件对象，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createaxisevent",
              children: "OH_Input_CreateAxisEvent"
            }), "接口可以创建轴事件对象。  使用完需使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroyaxisevent",
              children: "OH_Input_DestroyAxisEvent"
            }), "接口销毁轴事件对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t globalY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "轴事件以主屏左上角为原点的全局坐标系的Y坐标。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "Input_Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SUCCESS"
            }), " 表示操作成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PARAMETER_ERROR"
            }), " 表示axisEvent是空指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_getaxiseventglobaly",
      children: "OH_Input_GetAxisEventGlobalY()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_Result OH_Input_GetAxisEventGlobalY(const Input_AxisEvent* axisEvent, int32_t* globalY)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取轴事件以主屏左上角为原点的全局坐标系的Y坐标。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-axisevent/capi-input-input-axisevent",
              children: "Input_AxisEvent"
            }), "* axisEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["轴事件对象，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createaxisevent",
              children: "OH_Input_CreateAxisEvent"
            }), "接口可以创建轴事件对象。  使用完需使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroyaxisevent",
              children: "OH_Input_DestroyAxisEvent"
            }), "接口销毁轴事件对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t* globalY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "轴事件以主屏左上角为原点的全局坐标系的Y坐标。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "Input_Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SUCCESS"
            }), " 表示操作成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PARAMETER_ERROR"
            }), " 表示axisEvent或者globalY是空指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_getpointerlocation",
      children: "OH_Input_GetPointerLocation()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_Result OH_Input_GetPointerLocation(int32_t *displayId, double *displayX, double *displayY)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前屏幕上鼠标的坐标点。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异"
        })
      }), "：该接口在Wearable设备上返回3900010错误码，在其他设备上可正常调用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t *displayId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前屏幕的屏幕ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "double *displayX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "鼠标在当前屏幕的X坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "double *displayY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "鼠标在当前屏幕的Y坐标。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "Input_Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_Input_GetPointerLocation 函数返回值：  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SUCCESS"
            }), " 表示查询成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PARAMETER_ERROR"
            }), " 表示参数错误。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SERVICE_EXCEPTION"
            }), " 表示服务异常。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_APP_NOT_FOCUSED"
            }), " 表示当前应用不是焦点应用。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_DEVICE_NO_POINTER"
            }), " 表示无鼠标类输入外设。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_getkeyeventid",
      children: "OH_Input_GetKeyEventId()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_Result OH_Input_GetKeyEventId(const struct Input_KeyEvent* keyEvent, int32_t* eventId)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取按键事件的ID。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-keyevent/capi-input-input-keyevent",
              children: "Input_KeyEvent"
            }), "* keyEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["按键事件对象，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_createkeyevent",
              children: "OH_Input_CreateKeyEvent"
            }), "接口可以创建按键事件对象。  使用完需使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_destroykeyevent",
              children: "OH_Input_DestroyKeyEvent"
            }), "接口销毁按键事件对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t* eventId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键事件的ID。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "Input_Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_Input_GetKeyEventId 函数返回值：  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SUCCESS"
            }), " 表示操作成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PARAMETER_ERROR"
            }), " 表示参数检查失败。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_addkeyeventhook",
      children: "OH_Input_AddKeyEventHook()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_Result OH_Input_AddKeyEventHook(Input_KeyEventCallback callback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "添加一个按键事件拦截钩子函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["添加后可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_input_removekeyeventhook",
        children: "OH_Input_RemoveKeyEventHook"
      }), "接口移除。一个进程仅支持设置一个钩子，一个应用支持多个钩子函数，后添加的生效优先级更高。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在使用该接口之前，需要用户在设备的“设置”->“隐私和安全”->“权限管理”中打开“键盘输入辅助”权限。该权限仅PC/2in1、Tablet设备支持。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.HOOK_KEY_EVENT"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异"
        })
      }), "：该接口在Wearable设备上返回801错误码，在其他设备上可正常调用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#input_keyeventcallback",
              children: "Input_KeyEventCallback"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "钩子函数，用于拦截待分发的所有按键事件。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "Input_Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_Input_AddKeyEventHook 函数返回值：  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SUCCESS"
            }), " 表示操作成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PARAMETER_ERROR"
            }), " 表示参数检查失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_DEVICE_NOT_SUPPORTED"
            }), " 表示不支持该功能。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PERMISSION_DENIED"
            }), " 表示权限验证失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_REPEAT_INTERCEPTOR"
            }), " 表示重复设置钩子。一个进程仅支持设置一个钩子。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SERVICE_EXCEPTION"
            }), " 表示服务异常，请重试。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_removekeyeventhook",
      children: "OH_Input_RemoveKeyEventHook()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_Result OH_Input_RemoveKeyEventHook(Input_KeyEventCallback callback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "移除按键事件拦截钩子函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通常与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_input_addkeyeventhook",
        children: "OH_Input_AddKeyEventHook"
      }), "接口配合使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异"
        })
      }), "：该接口在Wearable设备上返回801错误码，在其他设备上可正常调用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#input_keyeventcallback",
              children: "Input_KeyEventCallback"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "钩子函数，用于拦截待分发的所有按键事件。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "Input_Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_Input_RemoveKeyEventHook 函数返回值：  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SUCCESS"
            }), " 表示操作成功。如果之前没有添加对应钩子，移除时也会返回成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PARAMETER_ERROR"
            }), " 表示参数检查失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SERVICE_EXCEPTION"
            }), " 表示服务异常，请重试。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_dispatchtonexthandler",
      children: "OH_Input_DispatchToNextHandler()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_Result OH_Input_DispatchToNextHandler(int32_t eventId)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "重新分发按键事件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "只有被钩子拦截的按键事件才能被重新分发，重新分发的事件必须保持原有优先级顺序。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用该接口后，按键事件可在3秒内重新分发。如果超过3秒，将返回", (0,jsx_runtime.jsx)(_components.a, {
        href: "#input_result",
        children: "INPUT_PARAMETER_ERROR"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["重新分发的事件需要保证配对关系。如果重新分发了一个或多个按键按下事件", (0,jsx_runtime.jsx)(_components.a, {
        href: "#input_keyeventaction",
        children: "KEY_ACTION_DOWN"
      }), "，再重新分发按键抬起事件", (0,jsx_runtime.jsx)(_components.a, {
        href: "#input_keyeventaction",
        children: "KEY_ACTION_UP"
      }), "或按键动作取消事件", (0,jsx_runtime.jsx)(_components.a, {
        href: "#input_keyeventaction",
        children: "KEY_ACTION_CANCEL"
      }), "可以成功。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果仅分发", (0,jsx_runtime.jsx)(_components.a, {
        href: "#input_keyeventaction",
        children: "KEY_ACTION_UP"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "#input_keyeventaction",
        children: "KEY_ACTION_CANCEL"
      }), "按键事件，接口可以调用成功，但不会执行实际的分发动作。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果分发的事件未被钩子拦截，函数调用会成功，但不会执行实际的分发动作。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异"
        })
      }), "：该接口在Wearable设备上返回801错误码，在其他设备上可正常调用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t eventId"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["按键事件的ID。可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_getkeyeventid",
              children: "OH_Input_GetKeyEventId"
            }), "接口获取。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "Input_Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_Input_DispatchToNextHandler 函数返回值：  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SUCCESS"
            }), " 表示操作成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PARAMETER_ERROR"
            }), " 表示参数检查失败。可通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_getkeyeventid",
              children: "OH_Input_GetKeyEventId"
            }), "查看传入的eventId是否准确。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SERVICE_EXCEPTION"
            }), " 表示服务异常，请重试。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_setpointervisible",
      children: "OH_Input_SetPointerVisible()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_Result OH_Input_SetPointerVisible(bool visible)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置当前窗口的鼠标光标的显示或隐藏状态。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异"
        })
      }), "：该接口在Wearable设备上返回801错误码，在其他设备上可正常调用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool visible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "鼠标光标是否显示。true表示显示，false表示不显示。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "Input_Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_Input_SetPointerVisible 函数返回值：  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SUCCESS"
            }), " 表示操作成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_DEVICE_NOT_SUPPORTED"
            }), " 表示设备不支持。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SERVICE_EXCEPTION"
            }), " 表示服务异常，请重试。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_getpointerstyle",
      children: "OH_Input_GetPointerStyle()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_Result OH_Input_GetPointerStyle(int32_t windowId, int32_t *pointerStyle)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取指定窗口的鼠标光标样式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异"
        })
      }), "：该接口在Wearable设备上调用无效果，在其他设备上可正常调用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t windowId"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["窗口ID。取值范围为大于等于-1的整数，取值为-1时表示全局窗口。  仅支持传入当前窗口和全局窗口的ID，传入其他ID返回全局窗口的默认光标样式，当前窗口ID可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#getwindowproperties9",
              children: "getWindowProperties"
            }), "获取。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t* pointerStyle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "鼠标光标样式的指针。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "Input_Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_Input_GetPointerStyle 函数返回值：  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SUCCESS"
            }), " 表示操作成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PARAMETER_ERROR"
            }), " 表示参数检查失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SERVICE_EXCEPTION"
            }), " 表示服务异常，请重试。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_setpointerstyle",
      children: "OH_Input_SetPointerStyle()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_Result OH_Input_SetPointerStyle(int32_t windowId, int32_t pointerStyle)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置指定窗口的鼠标光标样式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异"
        })
      }), "：该接口在Wearable设备上调用无效果，在其他设备上可正常调用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t windowId"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["窗口ID。取值范围为大于等于0的整数。  仅支持传入当前窗口的光标样式，传入其他窗口ID本接口可以运行成功但设置不生效，当前窗口ID可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#getwindowproperties9",
              children: "getWindowProperties"
            }), "获取。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t pointerStyle"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["鼠标光标样式，取值为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-pointer-style-h/capi-oh-pointer-style-h#input_pointerstyle",
              children: "Input_PointerStyle"
            }), "的枚举值。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "Input_Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_Input_SetPointerStyle 函数返回值：  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SUCCESS"
            }), " 表示操作成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PARAMETER_ERROR"
            }), " 表示参数检查失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SERVICE_EXCEPTION"
            }), " 表示服务异常，请重试。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_customcursor_create",
      children: "OH_Input_CustomCursor_Create()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_CustomCursor* OH_Input_CustomCursor_Create(OH_PixelmapNative* pixelMap, int32_t anchorX, int32_t anchorY)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建自定义鼠标光标资源对象。通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_input_customcursor_destroy",
        children: "OH_Input_CustomCursor_Destroy"
      }), "销毁自定义鼠标光标资源对象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_PixelmapNative* pixelMap"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-pixelmapnative/capi-image-nativemodule-oh-pixelmapnative",
              children: "OH_PixelmapNative"
            }), "自定义鼠标光标像素图。最小限制为资源图本身的最小限制。最大限制为256 x 256px。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t anchorX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义鼠标光标焦点的水平坐标。该坐标受自定义鼠标光标大小的限制。最小值为0，最大值为资源图的宽度最大值，单位为px。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t anchorY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义鼠标光标焦点的垂直坐标。该坐标受自定义鼠标光标大小的限制。最小值为0，最大值为资源图的高度最大值，单位为px。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Input_CustomCursor*"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-customcursor/capi-input-input-customcursor",
              children: "Input_CustomCursor"
            }), "对象。操作成功时返回自定义鼠标光标资源对象的指针。异常时返回空指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_customcursor_destroy",
      children: "OH_Input_CustomCursor_Destroy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Input_CustomCursor_Destroy(Input_CustomCursor** customCursor)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "销毁自定义鼠标光标资源对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Input_CustomCursor** customCursor"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["自定义鼠标光标资源", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-customcursor/capi-input-input-customcursor",
              children: "Input_CustomCursor"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_customcursor_getpixelmap",
      children: "OH_Input_CustomCursor_GetPixelMap()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_Result OH_Input_CustomCursor_GetPixelMap(Input_CustomCursor* customCursor, OH_PixelmapNative** pixelMap)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取指定自定义鼠标光标资源的自定义鼠标光标像素图。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Input_CustomCursor* customCursor"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["自定义鼠标光标资源", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-customcursor/capi-input-input-customcursor",
              children: "Input_CustomCursor"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_PixelmapNative** pixelMap"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-pixelmapnative/capi-image-nativemodule-oh-pixelmapnative",
              children: "OH_PixelmapNative"
            }), "自定义鼠标光标像素图。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "Input_Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_Input_CustomCursor_GetPixelMap 函数返回值：  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SUCCESS"
            }), " 表示操作成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PARAMETER_ERROR"
            }), " 表示参数检查失败。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_customcursor_getanchor",
      children: "OH_Input_CustomCursor_GetAnchor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_Result OH_Input_CustomCursor_GetAnchor(Input_CustomCursor* customCursor, int32_t* anchorX, int32_t* anchorY)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取指定自定义鼠标光标资源的焦点坐标。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Input_CustomCursor* customCursor"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["自定义鼠标光标资源", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-customcursor/capi-input-input-customcursor",
              children: "Input_CustomCursor"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t* anchorX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义鼠标光标资源的焦点水平坐标，单位为px。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t* anchorY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义鼠标光标资源的焦点垂直坐标，单位为px。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "Input_Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_Input_CustomCursor_GetAnchor 函数返回值：  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SUCCESS"
            }), " 表示操作成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PARAMETER_ERROR"
            }), " 表示参数检查失败。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_cursorconfig_create",
      children: "OH_Input_CursorConfig_Create()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_CursorConfig* OH_Input_CursorConfig_Create(bool followSystem)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建自定义鼠标光标配置对象。通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_input_cursorconfig_destroy",
        children: "OH_Input_CursorConfig_Destroy"
      }), "销毁自定义鼠标光标配置对象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool followSystem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否根据系统设置调整鼠标光标大小。false表示使用自定义鼠标光标样式大小，true表示根据系统设置调整鼠标光标大小，可调整范围为：[光标资源图大小，256×256]，单位为px。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Input_CursorConfig*"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["自定义鼠标光标配置", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-cursorconfig/capi-input-input-cursorconfig",
              children: "Input_CursorConfig"
            }), "对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_cursorconfig_destroy",
      children: "OH_Input_CursorConfig_Destroy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Input_CursorConfig_Destroy(Input_CursorConfig** cursorConfig)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "销毁自定义鼠标光标配置对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Input_CursorConfig** cursorConfig"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["自定义鼠标光标配置", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-cursorconfig/capi-input-input-cursorconfig",
              children: "Input_CursorConfig"
            }), "对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_cursorconfig_isfollowsystem",
      children: "OH_Input_CursorConfig_IsFollowSystem()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_Result OH_Input_CursorConfig_IsFollowSystem(Input_CursorConfig *cursorConfig, bool *followSystem)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询自定义鼠标光标配置是否跟随系统设置调整光标大小。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Input_CursorConfig* cursorConfig"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["自定义鼠标光标配置", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-cursorconfig/capi-input-input-cursorconfig",
              children: "Input_CursorConfig"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool* followSystem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否根据系统设置调整光标大小，取值为true表示根据系统设置调整鼠标光标大小，取值为false表示使用自定义鼠标光标样式大小。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "Input_Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_Input_CursorConfig_IsFollowSystem 函数返回值：  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SUCCESS"
            }), " 表示操作成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PARAMETER_ERROR"
            }), " 表示参数检查失败。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_setcustomcursor",
      children: "OH_Input_SetCustomCursor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_Result OH_Input_SetCustomCursor(int32_t windowId, Input_CustomCursor* customCursor, Input_CursorConfig* cursorConfig)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置自定义鼠标光标样式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用窗口布局改变、热区切换、页面跳转、光标移出再回到窗口、光标在窗口不同区域移动，以上场景可能导致光标切换回系统样式，需要开发者重新设置光标样式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异"
        })
      }), "：该接口在Wearable设备上返回801错误码，在其他设备上可正常调用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t windowId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "窗口ID。取值范围为大于等于0的整数，仅支持传入当前窗口的光标样式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Input_CustomCursor* customCursor"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["自定义鼠标光标资源", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-customcursor/capi-input-input-customcursor",
              children: "Input_CustomCursor"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Input_CursorConfig* cursorConfig"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["自定义鼠标光标配置", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-cursorconfig/capi-input-input-cursorconfig",
              children: "Input_CursorConfig"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "Input_Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_Input_SetCustomCursor 函数返回值：  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SUCCESS"
            }), " 表示操作成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PARAMETER_ERROR"
            }), " 表示参数检查失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_INVALID_WINDOWID"
            }), " 表示窗口ID无效。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_DEVICE_NOT_SUPPORTED"
            }), " 表示设备不支持。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SERVICE_EXCEPTION"
            }), " 表示服务异常，请重试。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_cursorinfo_create",
      children: "OH_Input_CursorInfo_Create()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "struct Input_CursorInfo* OH_Input_CursorInfo_Create()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建鼠标光标信息对象。通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_input_cursorinfo_destroy",
        children: "OH_Input_CursorInfo_Destroy"
      }), "销毁鼠标光标信息对象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "struct Input_CursorInfo*"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建成功返回一个", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-cursorinfo/capi-input-input-cursorinfo",
              children: "Input_CursorInfo"
            }), "对象，否则返回空指针，可能原因是内存分配失败。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_cursorinfo_destroy",
      children: "OH_Input_CursorInfo_Destroy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_Input_CursorInfo_Destroy(Input_CursorInfo** cursorInfo)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "销毁鼠标光标信息对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-cursorinfo/capi-input-input-cursorinfo",
              children: "Input_CursorInfo"
            }), "** cursorInfo"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "鼠标光标信息对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_cursorinfo_isvisible",
      children: "OH_Input_CursorInfo_IsVisible()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_Result OH_Input_CursorInfo_IsVisible(Input_CursorInfo* cursorInfo, bool* visible)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取指定鼠标光标信息对象对应的光标显示状态。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-cursorinfo/capi-input-input-cursorinfo",
              children: "Input_CursorInfo"
            }), "* cursorInfo"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指定鼠标光标信息对象。可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_getmouseeventcursorinfo",
              children: "OH_Input_GetMouseEventCursorInfo"
            }), "查询指定鼠标事件的鼠标光标信息、或通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_getcursorinfo",
              children: "OH_Input_GetCursorInfo"
            }), "接口查询当前的鼠标光标信息。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool* visible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "鼠标光标显示或隐藏状态。true代表显示状态，false代表隐藏状态。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "Input_Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_Input_CursorInfo_IsVisible 函数返回值：  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SUCCESS"
            }), " 表示操作成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PARAMETER_ERROR"
            }), " 表示参数检查失败。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_cursorinfo_getstyle",
      children: "OH_Input_CursorInfo_GetStyle()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_Result OH_Input_CursorInfo_GetStyle(Input_CursorInfo* cursorInfo, Input_PointerStyle* style)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取指定鼠标光标信息对象对应的光标样式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-cursorinfo/capi-input-input-cursorinfo",
              children: "Input_CursorInfo"
            }), "* cursorInfo"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指定鼠标光标信息对象。可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_getmouseeventcursorinfo",
              children: "OH_Input_GetMouseEventCursorInfo"
            }), "查询指定鼠标事件的鼠标光标信息、或通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_getcursorinfo",
              children: "OH_Input_GetCursorInfo"
            }), "接口查询当前的鼠标光标信息。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-pointer-style-h/capi-oh-pointer-style-h",
              children: "Input_PointerStyle"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["鼠标光标信息的光标样式枚举，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-pointer-style-h/capi-oh-pointer-style-h#input_pointerstyle",
              children: "Input_PointerStyle"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "Input_Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_Input_CursorInfo_GetStyle 函数返回值：  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SUCCESS"
            }), " 表示操作成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PARAMETER_ERROR"
            }), " 表示参数检查失败或者光标不可见。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_cursorinfo_getsizelevel",
      children: "OH_Input_CursorInfo_GetSizeLevel()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_Result OH_Input_CursorInfo_GetSizeLevel(Input_CursorInfo* cursorInfo, int32_t* sizeLevel)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取指定鼠标光标信息对象对应的光标大小档位。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-cursorinfo/capi-input-input-cursorinfo",
              children: "Input_CursorInfo"
            }), "* cursorInfo"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指定鼠标光标信息对象。可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_getmouseeventcursorinfo",
              children: "OH_Input_GetMouseEventCursorInfo"
            }), "查询指定鼠标事件的鼠标光标信息、或通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_getcursorinfo",
              children: "OH_Input_GetCursorInfo"
            }), "接口查询当前的鼠标光标信息。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t* sizeLevel"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["鼠标光标信息的光标大小档位。取值范围为整数1~7，数值越大则光标越大。应用自定义光标", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-pointer-style-h/capi-oh-pointer-style-h#input_pointerstyle",
              children: "DEVELOPER_DEFINED_ICON"
            }), "请以实际位图大小为准。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "Input_Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_Input_CursorInfo_GetSizeLevel 函数返回值：  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SUCCESS"
            }), " 表示操作成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PARAMETER_ERROR"
            }), " 表示参数检查失败或者光标不可见。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_cursorinfo_getcolor",
      children: "OH_Input_CursorInfo_GetColor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_Result OH_Input_CursorInfo_GetColor(Input_CursorInfo* cursorInfo, uint32_t* color)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取指定鼠标光标信息对象对应的光标颜色, 使用32位ARGB整数表示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-cursorinfo/capi-input-input-cursorinfo",
              children: "Input_CursorInfo"
            }), "* cursorInfo"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指定鼠标光标信息对象。可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_getmouseeventcursorinfo",
              children: "OH_Input_GetMouseEventCursorInfo"
            }), "查询指定鼠标事件的鼠标光标信息、或通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_getcursorinfo",
              children: "OH_Input_GetCursorInfo"
            }), "接口查询当前的鼠标光标信息。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t* color"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["鼠标光标信息的光标颜色, 使用32位ARGB整数表示。应用自定义光标", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-pointer-style-h/capi-oh-pointer-style-h#input_pointerstyle",
              children: "DEVELOPER_DEFINED_ICON"
            }), "请以实际位图颜色为准。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "Input_Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_Input_CursorInfo_GetColor 函数返回值：  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SUCCESS"
            }), " 表示操作成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PARAMETER_ERROR"
            }), " 表示参数检查失败或者光标不可见。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_getmouseeventcursorinfo",
      children: "OH_Input_GetMouseEventCursorInfo()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_Result OH_Input_GetMouseEventCursorInfo(const struct Input_MouseEvent* mouseEvent, Input_CursorInfo* cursorInfo)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取鼠标事件的鼠标光标信息，包括光标显示状态、光标样式、光标大小档位、光标颜色。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-mouseevent/capi-input-input-mouseevent",
              children: "Input_MouseEvent"
            }), "* mouseEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["鼠标事件对象。可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_addmouseeventmonitor",
              children: "OH_Input_AddMouseEventMonitor"
            }), "或者", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_addinputeventinterceptor",
              children: "OH_Input_AddInputEventInterceptor"
            }), "接口的回调函数中获取鼠标事件对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-cursorinfo/capi-input-input-cursorinfo",
              children: "Input_CursorInfo"
            }), "* cursorInfo"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["鼠标光标信息对象，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_cursorinfo_create",
              children: "OH_Input_CursorInfo_Create"
            }), "接口创建鼠标光标信息对象。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "Input_Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_Input_GetMouseEventCursorInfo 函数返回值：  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SUCCESS"
            }), " 表示操作成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PARAMETER_ERROR"
            }), " 表示参数检查失败。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_input_getcursorinfo",
      children: "OH_Input_GetCursorInfo()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Input_Result OH_Input_GetCursorInfo(Input_CursorInfo* cursorInfo, OH_PixelmapNative** pixelmap)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["查询当前鼠标光标信息，包括光标显示状态、光标样式、光标大小档位、光标颜色。如果pixelmap参数非空，且光标样式为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-pointer-style-h/capi-oh-pointer-style-h#input_pointerstyle",
        children: "DEVELOPER_DEFINED_ICON"
      }), "，则会同时返回光标的PixelMap位图对象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异"
        })
      }), "：该接口在Wearable设备上调用无效果，在其他设备上可正常调用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-cursorinfo/capi-input-input-cursorinfo",
              children: "Input_CursorInfo"
            }), "* cursorInfo"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["鼠标光标信息对象，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_input_cursorinfo_create",
              children: "OH_Input_CursorInfo_Create"
            }), "接口创建鼠标光标信息对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-pixelmapnative/capi-image-nativemodule-oh-pixelmapnative",
              children: "OH_PixelmapNative"
            }), "** pixelmap"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["PixelMap位图对象，如果该参数非空且光标为应用自定义，则会返回光标的PixelMap位图对象，否则不返回PixelMap位图对象。首先通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#oh_pixelmapinitializationoptions_create",
              children: "OH_PixelmapInitializationOptions_Create"
            }), "接口创建OH_PixelmapInitializationOptions对象，然后调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#oh_pixelmapinitializationoptions_setwidth",
              children: "OH_PixelmapInitializationOptions_SetWidth"
            }), "接口设置大于0的宽度，调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#oh_pixelmapinitializationoptions_setheight",
              children: "OH_PixelmapInitializationOptions_SetHeight"
            }), "接口设置大于0的高度，最后以该OH_PixelmapInitializationOptions对象作为入参调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#oh_pixelmapnative_createemptypixelmap",
              children: "OH_PixelmapNative_CreateEmptyPixelmap"
            }), "接口创建PixelMap位图对象。  使用完需要先调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#oh_pixelmapnative_release",
              children: "OH_PixelmapNative_Release"
            }), "接口释放PixelMap位图对象，然后调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#oh_pixelmapnative_destroy",
              children: "OH_PixelmapNative_Destroy"
            }), "接口销毁PixelMap位图对象。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "Input_Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_Input_GetCursorInfo 函数返回值：  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SUCCESS"
            }), " 表示操作成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_PARAMETER_ERROR"
            }), " 表示参数检查失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#input_result",
              children: "INPUT_SERVICE_EXCEPTION"
            }), " 表示服务异常，请重试。"]
          })]
        })
      })]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



},
763348(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
28453(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  R: () => (useMDXComponents),
  x: () => (MDXProvider)
});
/* import */ var react__rspack_import_0 = __webpack_require__(296540);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__rspack_import_0.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__rspack_import_0.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__rspack_import_0.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__rspack_import_0.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


},

}]);