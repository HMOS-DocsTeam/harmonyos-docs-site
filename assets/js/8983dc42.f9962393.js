"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["178181"], {
990892(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_c_arkui_headerfile_capi_ui_input_event_h_capi_ui_input_event_h_md_898_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-c-arkui-headerfile-capi-ui-input-event-h-capi-ui-input-event-h-md-898.json
var site_docs_ref_arkui_api_arkui_c_arkui_headerfile_capi_ui_input_event_h_capi_ui_input_event_h_md_898_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-c/arkui-headerfile/capi-ui-input-event-h/capi-ui-input-event-h","title":"ui_input_event.h","description":"概述","source":"@site/docs-ref/arkui-api/arkui-c/arkui-headerfile/capi-ui-input-event-h/capi-ui-input-event-h.md","sourceDirName":"arkui-api/arkui-c/arkui-headerfile/capi-ui-input-event-h","slug":"/arkui-api/arkui-c/arkui-headerfile/capi-ui-input-event-h/capi-ui-input-event-h","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-c/arkui-headerfile/capi-ui-input-event-h/capi-ui-input-event-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":17,"frontMatter":{"title":"ui_input_event.h","sidebar_position":17,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ui-input-event-h","kit":"应用框架","last_updated":"2026-04-22","slug":"capi-ui-input-event-h"},"sidebar":"ref","previous":{"title":"styled_string.h","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-c/arkui-headerfile/capi-styled-string-h/capi-styled-string-h"},"next":{"title":"oh_window.h","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-window-h/capi-oh-window-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-c/arkui-headerfile/capi-ui-input-event-h/capi-ui-input-event-h.md


const frontMatter = {
	title: 'ui_input_event.h',
	sidebar_position: 17,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ui-input-event-h',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'capi-ui-input-event-h'
};
const contentTitle = 'ui_input_event.h';

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
  "value": "ArkUI_UIInputEvent_Type",
  "id": "arkui_uiinputevent_type",
  "level": 3
}, {
  "value": "anonymous1",
  "id": "anonymous1",
  "level": 3
}, {
  "value": "anonymous2",
  "id": "anonymous2",
  "level": 3
}, {
  "value": "anonymous3",
  "id": "anonymous3",
  "level": 3
}, {
  "value": "HitTestMode",
  "id": "hittestmode",
  "level": 3
}, {
  "value": "anonymous4",
  "id": "anonymous4",
  "level": 3
}, {
  "value": "anonymous5",
  "id": "anonymous5",
  "level": 3
}, {
  "value": "ArkUI_ModifierKeyName",
  "id": "arkui_modifierkeyname",
  "level": 3
}, {
  "value": "anonymous6",
  "id": "anonymous6",
  "level": 3
}, {
  "value": "ArkUI_InteractionHand",
  "id": "arkui_interactionhand",
  "level": 3
}, {
  "value": "anonymous7",
  "id": "anonymous7",
  "level": 3
}, {
  "value": "anonymous8",
  "id": "anonymous8",
  "level": 3
}, {
  "value": "ArkUI_CoastingAxisEventPhase",
  "id": "arkui_coastingaxiseventphase",
  "level": 3
}, {
  "value": "ArkUI_TouchTestStrategy",
  "id": "arkui_touchteststrategy",
  "level": 3
}, {
  "value": "函数说明",
  "id": "函数说明",
  "level": 2
}, {
  "value": "OH_ArkUI_UIInputEvent_GetType()",
  "id": "oh_arkui_uiinputevent_gettype",
  "level": 3
}, {
  "value": "OH_ArkUI_UIInputEvent_GetAction()",
  "id": "oh_arkui_uiinputevent_getaction",
  "level": 3
}, {
  "value": "OH_ArkUI_UIInputEvent_GetSourceType()",
  "id": "oh_arkui_uiinputevent_getsourcetype",
  "level": 3
}, {
  "value": "OH_ArkUI_UIInputEvent_GetToolType()",
  "id": "oh_arkui_uiinputevent_gettooltype",
  "level": 3
}, {
  "value": "OH_ArkUI_UIInputEvent_GetEventTime()",
  "id": "oh_arkui_uiinputevent_geteventtime",
  "level": 3
}, {
  "value": "OH_ArkUI_PointerEvent_GetPointerCount()",
  "id": "oh_arkui_pointerevent_getpointercount",
  "level": 3
}, {
  "value": "OH_ArkUI_PointerEvent_GetPointerId()",
  "id": "oh_arkui_pointerevent_getpointerid",
  "level": 3
}, {
  "value": "OH_ArkUI_PointerEvent_GetChangedPointerId()",
  "id": "oh_arkui_pointerevent_getchangedpointerid",
  "level": 3
}, {
  "value": "OH_ArkUI_PointerEvent_GetX()",
  "id": "oh_arkui_pointerevent_getx",
  "level": 3
}, {
  "value": "OH_ArkUI_PointerEvent_GetXByIndex()",
  "id": "oh_arkui_pointerevent_getxbyindex",
  "level": 3
}, {
  "value": "OH_ArkUI_PointerEvent_GetY()",
  "id": "oh_arkui_pointerevent_gety",
  "level": 3
}, {
  "value": "OH_ArkUI_PointerEvent_GetYByIndex()",
  "id": "oh_arkui_pointerevent_getybyindex",
  "level": 3
}, {
  "value": "OH_ArkUI_PointerEvent_GetWindowX()",
  "id": "oh_arkui_pointerevent_getwindowx",
  "level": 3
}, {
  "value": "OH_ArkUI_PointerEvent_GetWindowXByIndex()",
  "id": "oh_arkui_pointerevent_getwindowxbyindex",
  "level": 3
}, {
  "value": "OH_ArkUI_PointerEvent_GetWindowY()",
  "id": "oh_arkui_pointerevent_getwindowy",
  "level": 3
}, {
  "value": "OH_ArkUI_PointerEvent_GetWindowYByIndex()",
  "id": "oh_arkui_pointerevent_getwindowybyindex",
  "level": 3
}, {
  "value": "OH_ArkUI_PointerEvent_GetDisplayX()",
  "id": "oh_arkui_pointerevent_getdisplayx",
  "level": 3
}, {
  "value": "OH_ArkUI_PointerEvent_GetDisplayXByIndex()",
  "id": "oh_arkui_pointerevent_getdisplayxbyindex",
  "level": 3
}, {
  "value": "OH_ArkUI_PointerEvent_GetDisplayY()",
  "id": "oh_arkui_pointerevent_getdisplayy",
  "level": 3
}, {
  "value": "OH_ArkUI_PointerEvent_GetDisplayYByIndex()",
  "id": "oh_arkui_pointerevent_getdisplayybyindex",
  "level": 3
}, {
  "value": "OH_ArkUI_PointerEvent_GetGlobalDisplayX()",
  "id": "oh_arkui_pointerevent_getglobaldisplayx",
  "level": 3
}, {
  "value": "OH_ArkUI_PointerEvent_GetGlobalDisplayXByIndex()",
  "id": "oh_arkui_pointerevent_getglobaldisplayxbyindex",
  "level": 3
}, {
  "value": "OH_ArkUI_PointerEvent_GetGlobalDisplayY()",
  "id": "oh_arkui_pointerevent_getglobaldisplayy",
  "level": 3
}, {
  "value": "OH_ArkUI_PointerEvent_GetGlobalDisplayYByIndex()",
  "id": "oh_arkui_pointerevent_getglobaldisplayybyindex",
  "level": 3
}, {
  "value": "OH_ArkUI_PointerEvent_GetPressure()",
  "id": "oh_arkui_pointerevent_getpressure",
  "level": 3
}, {
  "value": "OH_ArkUI_PointerEvent_GetTiltX()",
  "id": "oh_arkui_pointerevent_gettiltx",
  "level": 3
}, {
  "value": "OH_ArkUI_PointerEvent_GetTiltY()",
  "id": "oh_arkui_pointerevent_gettilty",
  "level": 3
}, {
  "value": "OH_ArkUI_PointerEvent_GetRollAngle()",
  "id": "oh_arkui_pointerevent_getrollangle",
  "level": 3
}, {
  "value": "OH_ArkUI_PointerEvent_GetTouchAreaWidth()",
  "id": "oh_arkui_pointerevent_gettouchareawidth",
  "level": 3
}, {
  "value": "OH_ArkUI_PointerEvent_GetTouchAreaHeight()",
  "id": "oh_arkui_pointerevent_gettouchareaheight",
  "level": 3
}, {
  "value": "OH_ArkUI_PointerEvent_GetInteractionHand()",
  "id": "oh_arkui_pointerevent_getinteractionhand",
  "level": 3
}, {
  "value": "OH_ArkUI_PointerEvent_GetInteractionHandByIndex()",
  "id": "oh_arkui_pointerevent_getinteractionhandbyindex",
  "level": 3
}, {
  "value": "OH_ArkUI_PointerEvent_GetHistorySize()",
  "id": "oh_arkui_pointerevent_gethistorysize",
  "level": 3
}, {
  "value": "OH_ArkUI_PointerEvent_GetHistoryEventTime()",
  "id": "oh_arkui_pointerevent_gethistoryeventtime",
  "level": 3
}, {
  "value": "OH_ArkUI_PointerEvent_GetHistoryPointerCount()",
  "id": "oh_arkui_pointerevent_gethistorypointercount",
  "level": 3
}, {
  "value": "OH_ArkUI_PointerEvent_GetHistoryPointerId()",
  "id": "oh_arkui_pointerevent_gethistorypointerid",
  "level": 3
}, {
  "value": "OH_ArkUI_PointerEvent_GetHistoryX()",
  "id": "oh_arkui_pointerevent_gethistoryx",
  "level": 3
}, {
  "value": "OH_ArkUI_PointerEvent_GetHistoryY()",
  "id": "oh_arkui_pointerevent_gethistoryy",
  "level": 3
}, {
  "value": "OH_ArkUI_PointerEvent_GetHistoryWindowX()",
  "id": "oh_arkui_pointerevent_gethistorywindowx",
  "level": 3
}, {
  "value": "OH_ArkUI_PointerEvent_GetHistoryWindowY()",
  "id": "oh_arkui_pointerevent_gethistorywindowy",
  "level": 3
}, {
  "value": "OH_ArkUI_PointerEvent_GetHistoryDisplayX()",
  "id": "oh_arkui_pointerevent_gethistorydisplayx",
  "level": 3
}, {
  "value": "OH_ArkUI_PointerEvent_GetHistoryDisplayY()",
  "id": "oh_arkui_pointerevent_gethistorydisplayy",
  "level": 3
}, {
  "value": "OH_ArkUI_PointerEvent_GetHistoryGlobalDisplayX()",
  "id": "oh_arkui_pointerevent_gethistoryglobaldisplayx",
  "level": 3
}, {
  "value": "OH_ArkUI_PointerEvent_GetHistoryGlobalDisplayY()",
  "id": "oh_arkui_pointerevent_gethistoryglobaldisplayy",
  "level": 3
}, {
  "value": "OH_ArkUI_PointerEvent_GetHistoryPressure()",
  "id": "oh_arkui_pointerevent_gethistorypressure",
  "level": 3
}, {
  "value": "OH_ArkUI_PointerEvent_GetHistoryTiltX()",
  "id": "oh_arkui_pointerevent_gethistorytiltx",
  "level": 3
}, {
  "value": "OH_ArkUI_PointerEvent_GetHistoryTiltY()",
  "id": "oh_arkui_pointerevent_gethistorytilty",
  "level": 3
}, {
  "value": "OH_ArkUI_PointerEvent_GetHistoryTouchAreaWidth()",
  "id": "oh_arkui_pointerevent_gethistorytouchareawidth",
  "level": 3
}, {
  "value": "OH_ArkUI_PointerEvent_GetHistoryTouchAreaHeight()",
  "id": "oh_arkui_pointerevent_gethistorytouchareaheight",
  "level": 3
}, {
  "value": "OH_ArkUI_AxisEvent_GetVerticalAxisValue()",
  "id": "oh_arkui_axisevent_getverticalaxisvalue",
  "level": 3
}, {
  "value": "OH_ArkUI_AxisEvent_GetHorizontalAxisValue()",
  "id": "oh_arkui_axisevent_gethorizontalaxisvalue",
  "level": 3
}, {
  "value": "OH_ArkUI_AxisEvent_GetPinchAxisScaleValue()",
  "id": "oh_arkui_axisevent_getpinchaxisscalevalue",
  "level": 3
}, {
  "value": "OH_ArkUI_AxisEvent_GetAxisAction()",
  "id": "oh_arkui_axisevent_getaxisaction",
  "level": 3
}, {
  "value": "OH_ArkUI_AxisEvent_HasAxis()",
  "id": "oh_arkui_axisevent_hasaxis",
  "level": 3
}, {
  "value": "OH_ArkUI_PointerEvent_SetInterceptHitTestMode()",
  "id": "oh_arkui_pointerevent_setintercepthittestmode",
  "level": 3
}, {
  "value": "OH_ArkUI_MouseEvent_GetMouseButton()",
  "id": "oh_arkui_mouseevent_getmousebutton",
  "level": 3
}, {
  "value": "OH_ArkUI_MouseEvent_GetMouseAction()",
  "id": "oh_arkui_mouseevent_getmouseaction",
  "level": 3
}, {
  "value": "OH_ArkUI_PointerEvent_SetStopPropagation()",
  "id": "oh_arkui_pointerevent_setstoppropagation",
  "level": 3
}, {
  "value": "OH_ArkUI_UIInputEvent_GetDeviceId()",
  "id": "oh_arkui_uiinputevent_getdeviceid",
  "level": 3
}, {
  "value": "OH_ArkUI_UIInputEvent_GetPressedKeys()",
  "id": "oh_arkui_uiinputevent_getpressedkeys",
  "level": 3
}, {
  "value": "OH_ArkUI_FocusAxisEvent_GetAxisValue()",
  "id": "oh_arkui_focusaxisevent_getaxisvalue",
  "level": 3
}, {
  "value": "OH_ArkUI_FocusAxisEvent_SetStopPropagation()",
  "id": "oh_arkui_focusaxisevent_setstoppropagation",
  "level": 3
}, {
  "value": "OH_ArkUI_UIInputEvent_GetModifierKeyStates()",
  "id": "oh_arkui_uiinputevent_getmodifierkeystates",
  "level": 3
}, {
  "value": "OH_ArkUI_AxisEvent_SetPropagation()",
  "id": "oh_arkui_axisevent_setpropagation",
  "level": 3
}, {
  "value": "OH_ArkUI_AxisEvent_GetScrollStep()",
  "id": "oh_arkui_axisevent_getscrollstep",
  "level": 3
}, {
  "value": "OH_ArkUI_UIInputEvent_GetEventTargetWidth()",
  "id": "oh_arkui_uiinputevent_geteventtargetwidth",
  "level": 3
}, {
  "value": "OH_ArkUI_UIInputEvent_GetEventTargetHeight()",
  "id": "oh_arkui_uiinputevent_geteventtargetheight",
  "level": 3
}, {
  "value": "OH_ArkUI_UIInputEvent_GetEventTargetPositionX()",
  "id": "oh_arkui_uiinputevent_geteventtargetpositionx",
  "level": 3
}, {
  "value": "OH_ArkUI_UIInputEvent_GetEventTargetPositionY()",
  "id": "oh_arkui_uiinputevent_geteventtargetpositiony",
  "level": 3
}, {
  "value": "OH_ArkUI_UIInputEvent_GetEventTargetGlobalPositionX()",
  "id": "oh_arkui_uiinputevent_geteventtargetglobalpositionx",
  "level": 3
}, {
  "value": "OH_ArkUI_UIInputEvent_GetEventTargetGlobalPositionY()",
  "id": "oh_arkui_uiinputevent_geteventtargetglobalpositiony",
  "level": 3
}, {
  "value": "OH_ArkUI_PointerEvent_GetPressedTimeByIndex()",
  "id": "oh_arkui_pointerevent_getpressedtimebyindex",
  "level": 3
}, {
  "value": "OH_ArkUI_MouseEvent_GetRawDeltaX()",
  "id": "oh_arkui_mouseevent_getrawdeltax",
  "level": 3
}, {
  "value": "OH_ArkUI_MouseEvent_GetRawDeltaY()",
  "id": "oh_arkui_mouseevent_getrawdeltay",
  "level": 3
}, {
  "value": "OH_ArkUI_MouseEvent_GetPressedButtons()",
  "id": "oh_arkui_mouseevent_getpressedbuttons",
  "level": 3
}, {
  "value": "OH_ArkUI_UIInputEvent_GetTargetDisplayId()",
  "id": "oh_arkui_uiinputevent_gettargetdisplayid",
  "level": 3
}, {
  "value": "OH_ArkUI_HoverEvent_IsHovered()",
  "id": "oh_arkui_hoverevent_ishovered",
  "level": 3
}, {
  "value": "OH_ArkUI_PointerEvent_CreateClonedEvent()",
  "id": "oh_arkui_pointerevent_createclonedevent",
  "level": 3
}, {
  "value": "OH_ArkUI_PointerEvent_DestroyClonedEvent()",
  "id": "oh_arkui_pointerevent_destroyclonedevent",
  "level": 3
}, {
  "value": "OH_ArkUI_PointerEvent_SetClonedEventLocalPosition()",
  "id": "oh_arkui_pointerevent_setclonedeventlocalposition",
  "level": 3
}, {
  "value": "OH_ArkUI_PointerEvent_SetClonedEventLocalPositionByIndex()",
  "id": "oh_arkui_pointerevent_setclonedeventlocalpositionbyindex",
  "level": 3
}, {
  "value": "OH_ArkUI_PointerEvent_SetClonedEventActionType()",
  "id": "oh_arkui_pointerevent_setclonedeventactiontype",
  "level": 3
}, {
  "value": "OH_ArkUI_PointerEvent_SetClonedEventChangedFingerId()",
  "id": "oh_arkui_pointerevent_setclonedeventchangedfingerid",
  "level": 3
}, {
  "value": "OH_ArkUI_PointerEvent_SetClonedEventFingerIdByIndex()",
  "id": "oh_arkui_pointerevent_setclonedeventfingeridbyindex",
  "level": 3
}, {
  "value": "OH_ArkUI_PointerEvent_PostClonedEvent()",
  "id": "oh_arkui_pointerevent_postclonedevent",
  "level": 3
}, {
  "value": "OH_ArkUI_UIInputEvent_GetLatestStatus()",
  "id": "oh_arkui_uiinputevent_getlateststatus",
  "level": 3
}, {
  "value": "OH_ArkUI_UIInputEvent_GetCoastingAxisEvent()",
  "id": "oh_arkui_uiinputevent_getcoastingaxisevent",
  "level": 3
}, {
  "value": "OH_ArkUI_CoastingAxisEvent_GetEventTime()",
  "id": "oh_arkui_coastingaxisevent_geteventtime",
  "level": 3
}, {
  "value": "OH_ArkUI_CoastingAxisEvent_GetPhase()",
  "id": "oh_arkui_coastingaxisevent_getphase",
  "level": 3
}, {
  "value": "OH_ArkUI_CoastingAxisEvent_GetDeltaY",
  "id": "oh_arkui_coastingaxisevent_getdeltay",
  "level": 3
}, {
  "value": "OH_ArkUI_CoastingAxisEvent_GetDeltaX",
  "id": "oh_arkui_coastingaxisevent_getdeltax",
  "level": 3
}, {
  "value": "OH_ArkUI_CoastingAxisEvent_SetPropagation()",
  "id": "oh_arkui_coastingaxisevent_setpropagation",
  "level": 3
}, {
  "value": "OH_ArkUI_TouchTestInfo_GetTouchTestInfoList",
  "id": "oh_arkui_touchtestinfo_gettouchtestinfolist",
  "level": 3
}, {
  "value": "OH_ArkUI_TouchTestInfoItem_GetX",
  "id": "oh_arkui_touchtestinfoitem_getx",
  "level": 3
}, {
  "value": "OH_ArkUI_TouchTestInfoItem_GetY",
  "id": "oh_arkui_touchtestinfoitem_gety",
  "level": 3
}, {
  "value": "OH_ArkUI_TouchTestInfoItem_GetWindowX",
  "id": "oh_arkui_touchtestinfoitem_getwindowx",
  "level": 3
}, {
  "value": "OH_ArkUI_TouchTestInfoItem_GetWindowY",
  "id": "oh_arkui_touchtestinfoitem_getwindowy",
  "level": 3
}, {
  "value": "OH_ArkUI_TouchTestInfoItem_GetXRelativeToParent",
  "id": "oh_arkui_touchtestinfoitem_getxrelativetoparent",
  "level": 3
}, {
  "value": "OH_ArkUI_TouchTestInfoItem_GetYRelativeToParent",
  "id": "oh_arkui_touchtestinfoitem_getyrelativetoparent",
  "level": 3
}, {
  "value": "OH_ArkUI_TouchTestInfoItem_GetChildRect",
  "id": "oh_arkui_touchtestinfoitem_getchildrect",
  "level": 3
}, {
  "value": "OH_ArkUI_TouchTestInfoItem_GetChildId",
  "id": "oh_arkui_touchtestinfoitem_getchildid",
  "level": 3
}, {
  "value": "OH_ArkUI_TouchTestInfo_SetTouchResultStrategy",
  "id": "oh_arkui_touchtestinfo_settouchresultstrategy",
  "level": 3
}, {
  "value": "OH_ArkUI_TouchTestInfo_SetTouchResultId",
  "id": "oh_arkui_touchtestinfo_settouchresultid",
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
        id: "ui_input_eventh",
        children: "ui_input_event.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供ArkUI在Native侧的事件定义。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <arkui/ui_input_event.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libace_ndk.z.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
        href: "/ref/arkui-api/arkui-c/arkui-module/capi-arkui-eventmodule/capi-arkui-eventmodule",
        children: "ArkUI_EventModule"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关示例："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/HarmonyOS_Samples/guide-snippets/tree/master/ArkUISample/NdkInputEvent",
        children: "NdkInputEvent"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/openharmony/applications_app_samples/tree/master/code/DocsSample/ArkUISample/CoastingAxisEventNDK",
        children: "CoastingAxisEventNDK"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "结构体",
      children: "结构体"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "ArkUI_UIInputEvent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkUI_UIInputEvent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UI输入事件定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-coastingaxisevent/capi-arkui-nativemodule-arkui-coastingaxisevent",
              children: "ArkUI_CoastingAxisEvent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkUI_CoastingAxisEvent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义惯性滚动轴事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-touchtestinfo/capi-arkui-nativemodule-arkui-touchtestinfo",
              children: "ArkUI_TouchTestInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkUI_TouchTestInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义触摸测试信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-touchtestinfoitem/capi-arkui-nativemodule-arkui-touchtestinfoitem",
              children: "ArkUI_TouchTestInfoItem"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkUI_TouchTestInfoItem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义触摸测试信息项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/i-arkui-nativemodule-arkui-touchtestinfoitemhandle/i-arkui-nativemodule-arkui-touchtestinfoitemhandle",
              children: "ArkUI_TouchTestInfoItem*"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkUI_TouchTestInfoItemHandle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义触摸测试信息项句柄。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/ui-nativemodule-arkui-touchtestinfoitemhandlearray/ui-nativemodule-arkui-touchtestinfoitemhandlearray",
              children: "ArkUI_TouchTestInfoItemHandle*"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkUI_TouchTestInfoItemArray"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义触摸测试信息项句柄数组。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
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
              href: "#arkui_uiinputevent_type",
              children: "ArkUI_UIInputEvent_Type"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkUI_UIInputEvent_Type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UI输入事件类型定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#anonymous1",
              children: "anonymous1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义输入事件的行为类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#anonymous2",
              children: "anonymous2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "产生输入事件的工具类型定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#anonymous3",
              children: "anonymous3"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "产生输入事件的来源类型定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#hittestmode",
              children: "HitTestMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HitTestMode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义触摸测试类型的枚举值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#anonymous4",
              children: "anonymous4"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义鼠标事件的行为类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#anonymous5",
              children: "anonymous5"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义鼠标事件的按键类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#arkui_modifierkeyname",
              children: "ArkUI_ModifierKeyName"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkUI_ModifierKeyName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义modifier按键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#anonymous6",
              children: "anonymous6"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义焦点轴事件的轴类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#arkui_interactionhand",
              children: "ArkUI_InteractionHand"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkUI_InteractionHand"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义触摸事件是左手还是右手。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#anonymous7",
              children: "anonymous7"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义轴事件的操作类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#anonymous8",
              children: "anonymous8"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义轴事件的轴类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#arkui_coastingaxiseventphase",
              children: "ArkUI_CoastingAxisEventPhase"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkUI_CoastingAxisEventPhase"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义惯性滚动轴事件的阶段。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#arkui_touchteststrategy",
              children: "ArkUI_TouchTestStrategy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkUI_TouchTestStrategy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义触摸测试策略。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_uiinputevent_gettype",
              children: "int32_t OH_ArkUI_UIInputEvent_GetType(const ArkUI_UIInputEvent* event)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取UI输入事件的类型。在访问一个ArkUI_UIInputEvent指针对象之前，推荐使用该方法判断该输入事件的类型，该接口会返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-ui-input-event-h/capi-ui-input-event-h#arkui_uiinputevent_type",
              children: "ArkUI_UIInputEvent_Type"
            }), "枚举中的一种。比如，当事件是一个触控类型时，由于触控类型是指向性事件，那么使用OH_ArkUI_UIInputEvent_GetXXX及OH_ArkUI_PointerEvent_GetXXX系列接口，均可以正常访问；而如果使用OH_ArkUI_KeyEvent_GetXXX相关接口去访问它，则会有无法预期的结果。对于还未支持的事件类型，接口返回默认值0。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_uiinputevent_getaction",
              children: "int32_t OH_ArkUI_UIInputEvent_GetAction(const ArkUI_UIInputEvent* event)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取输入事件的action类型。action类型为基础事件在不同阶段的类型定义，通常代表了事件的特点，并表征事件的开始与结束，如touch down, touch up。触控事件的action类型为UI_TOUCH_EVENT_ACTION_XXX，鼠标事件的action类型为UI_MOUSE_EVENT_ACTION_XXX。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_uiinputevent_getsourcetype",
              children: "int32_t OH_ArkUI_UIInputEvent_GetSourceType(const ArkUI_UIInputEvent* event)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取UI输入事件的触发源类型。输入源为产生输入事件的真实物理设备，如触摸屏，鼠标等，由UI_INPUT_EVENT_SOURCE_TYPE_XXX定义，而输入工具为操作输入源设备来产生事件的工具，如手指、触控笔。在某些情况下两者可能容易发生混淆，比如当用户在操作鼠标时，鼠标既是输入源，也是输入工具。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_uiinputevent_gettooltype",
              children: "int32_t OH_ArkUI_UIInputEvent_GetToolType(const ArkUI_UIInputEvent* event)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取UI输入事件的工具类型。输入工具为操作输入源设备来产生事件的操作方，如手指、触控笔，他们自身不真实产生事件，但可以驱动输入源设备不断产生事件。返回的类型由UI_INPUT_EVENT_TOOL_TYPE_XXX枚举值定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_uiinputevent_geteventtime",
              children: "int64_t OH_ArkUI_UIInputEvent_GetEventTime(const ArkUI_UIInputEvent* event)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取UI输入事件发生的时间。单位为ns。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_pointerevent_getpointercount",
              children: "uint32_t OH_ArkUI_PointerEvent_GetPointerCount(const ArkUI_UIInputEvent* event)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从指向性输入事件（如触摸事件、鼠标事件、轴事件）中获取多点触控的接触点数量。指向性事件一般是附带有事件发生位置信息的事件，如触摸事件，用户操作时，可以感知事件在什么位置发生。而非指向性事件，如按键事件，一般没有位置信息，没有触点的说法，所以该接口对按键事件无效。对于触摸事件，该接口多用于处理多指触控，判断用户有几根手指在操作当前控件。而对于鼠标和轴事件，可认为触点只有1个，该接口永远返回1。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_pointerevent_getpointerid",
              children: "int32_t OH_ArkUI_PointerEvent_GetPointerId(const ArkUI_UIInputEvent* event, uint32_t pointerIndex)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从指向性输入事件（如触摸事件、鼠标事件、轴事件）中获取多点触控的接触点标识。返回事件发生时，事件触点的唯一标识符，用于区分同类输入设备的多点触控信息。其数值没有除标识触点外的其他含义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_pointerevent_getchangedpointerid",
              children: "int32_t OH_ArkUI_PointerEvent_GetChangedPointerId(const ArkUI_UIInputEvent* event, uint32_t* pointerIndex)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前触摸事件触发的id。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_pointerevent_getx",
              children: "float OH_ArkUI_PointerEvent_GetX(const ArkUI_UIInputEvent* event)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从指向性输入事件（如触摸事件、鼠标事件、轴事件）中获取相对于当前组件左上角的X坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_pointerevent_getxbyindex",
              children: "float OH_ArkUI_PointerEvent_GetXByIndex(const ArkUI_UIInputEvent* event, uint32_t pointerIndex)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从指向性输入事件（如触摸事件、鼠标事件、轴事件）中获取特定接触点相对于当前组件左上角的X坐标。对于鼠标和轴事件，当给定的索引大于0时，返回默认值0.0f。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_pointerevent_gety",
              children: "float OH_ArkUI_PointerEvent_GetY(const ArkUI_UIInputEvent* event)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从指向性输入事件（如触摸事件、鼠标事件、轴事件）中获取相对于当前组件左上角的Y坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_pointerevent_getybyindex",
              children: "float OH_ArkUI_PointerEvent_GetYByIndex(const ArkUI_UIInputEvent* event, uint32_t pointerIndex)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从指向性输入事件（如触摸事件、鼠标事件、轴事件）中获取特定接触点相对于当前组件左上角的Y坐标。对于鼠标和轴事件，当给定的索引大于0时，返回默认值0.0f。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_pointerevent_getwindowx",
              children: "float OH_ArkUI_PointerEvent_GetWindowX(const ArkUI_UIInputEvent* event)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从指向性输入事件（如触摸事件、鼠标事件、轴事件）中获取相对于当前应用窗口左上角的X坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_pointerevent_getwindowxbyindex",
              children: "float OH_ArkUI_PointerEvent_GetWindowXByIndex(const ArkUI_UIInputEvent* event, uint32_t pointerIndex)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从指向性输入事件（如触摸事件、鼠标事件、轴事件）中获取特定接触点相对于当前应用窗口左上角的X坐标。对于鼠标和轴事件，当给定的索引大于0时，总是返回默认值0.0f。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_pointerevent_getwindowy",
              children: "float OH_ArkUI_PointerEvent_GetWindowY(const ArkUI_UIInputEvent* event)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从指向性输入事件（如触摸事件、鼠标事件、轴事件）中获取相对于当前应用窗口左上角的Y坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_pointerevent_getwindowybyindex",
              children: "float OH_ArkUI_PointerEvent_GetWindowYByIndex(const ArkUI_UIInputEvent* event, uint32_t pointerIndex)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从指向性输入事件（如触摸事件、鼠标事件、轴事件）中获取特定接触点相对于当前应用窗口左上角的Y坐标。对于鼠标和轴事件，当给定的索引大于0时，总是返回默认值0.0f。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_pointerevent_getdisplayx",
              children: "float OH_ArkUI_PointerEvent_GetDisplayX(const ArkUI_UIInputEvent* event)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从指向性输入事件（如触摸事件、鼠标事件、轴事件）中获取相对于当前屏幕左上角的X坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_pointerevent_getdisplayxbyindex",
              children: "float OH_ArkUI_PointerEvent_GetDisplayXByIndex(const ArkUI_UIInputEvent* event, uint32_t pointerIndex)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从指向性输入事件（如触摸事件、鼠标事件、轴事件）中获取特定接触点相对于当前屏幕左上角的X坐标。对于鼠标和轴事件，当给定的索引大于0时，总是返回默认值0.0f。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_pointerevent_getdisplayy",
              children: "float OH_ArkUI_PointerEvent_GetDisplayY(const ArkUI_UIInputEvent* event)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从指向性输入事件（如触摸事件、鼠标事件、轴事件）中获取相对于当前屏幕左上角的Y坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_pointerevent_getdisplayybyindex",
              children: "float OH_ArkUI_PointerEvent_GetDisplayYByIndex(const ArkUI_UIInputEvent* event, uint32_t pointerIndex)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从指向性输入事件（如触摸事件、鼠标事件、轴事件）中获取特定接触点相对于当前屏幕左上角的Y坐标。对于鼠标和轴事件，当给定的索引大于0时，总是返回默认值0.0f。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_pointerevent_getglobaldisplayx",
              children: "float OH_ArkUI_PointerEvent_GetGlobalDisplayX(const ArkUI_UIInputEvent* event)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从指向性输入事件（如触摸事件、鼠标事件、轴事件）中获取相对于全局显示的X坐标。只能从", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "ArkUI_UIInputEvent"
            }), "事件中获取位置信息。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_pointerevent_getglobaldisplayxbyindex",
              children: "float OH_ArkUI_PointerEvent_GetGlobalDisplayXByIndex(const ArkUI_UIInputEvent* event, uint32_t pointerIndex)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从指向性输入事件（如触摸事件、鼠标事件、轴事件）中获取相对于全局显示的X坐标。只能从指针事件中获取位置信息，对于鼠标和轴事件，当给定的pointerIndex大于0时，始终返回默认值0.0f。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_pointerevent_getglobaldisplayy",
              children: "float OH_ArkUI_PointerEvent_GetGlobalDisplayY(const ArkUI_UIInputEvent* event)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从指向性输入事件（如触摸事件、鼠标事件、轴事件）中获取相对于全局显示的Y坐标。只能从", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "ArkUI_UIInputEvent"
            }), "事件中获取位置信息。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_pointerevent_getglobaldisplayybyindex",
              children: "float OH_ArkUI_PointerEvent_GetGlobalDisplayYByIndex(const ArkUI_UIInputEvent* event, uint32_t pointerIndex)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从指向性输入事件（如触摸事件、鼠标事件、轴事件）中获取相对于全局显示的Y坐标。只能从指针事件中获取位置信息，对于鼠标和轴事件，当给定的pointerIndex大于0时，始终返回默认值0.0f。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_pointerevent_getpressure",
              children: "float OH_ArkUI_PointerEvent_GetPressure(const ArkUI_UIInputEvent* event, uint32_t pointerIndex)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从指向性输入事件（如触摸事件）中获取触屏压力。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_pointerevent_gettiltx",
              children: "float OH_ArkUI_PointerEvent_GetTiltX(const ArkUI_UIInputEvent* event, uint32_t pointerIndex)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从指向性输入事件（如触摸事件）中获取相对YZ平面的角度，取值的范围[-90, 90]，单位为deg，其中正值是向右倾斜。仅适用于支持倾角上报的触控笔操作产生的触控事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_pointerevent_gettilty",
              children: "float OH_ArkUI_PointerEvent_GetTiltY(const ArkUI_UIInputEvent* event, uint32_t pointerIndex)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从指向性输入事件（如触摸事件）中获取相对XZ平面的角度，取值的范围[-90, 90]，单位为deg，其中正值是向下倾斜。仅适用于支持倾角上报的触控笔操作产生的触控事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_pointerevent_getrollangle",
              children: "int32_t OH_ArkUI_PointerEvent_GetRollAngle(const ArkUI_UIInputEvent* event, double* rollAngle)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取触控笔绕Z轴旋转的角度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_pointerevent_gettouchareawidth",
              children: "float OH_ArkUI_PointerEvent_GetTouchAreaWidth(const ArkUI_UIInputEvent* event, uint32_t pointerIndex)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从指向性输入事件（如触摸事件）中获取触屏区域的宽度。仅适用于手指操作产生的触控事件，这通常是一个圆形区域的半径。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_pointerevent_gettouchareaheight",
              children: "float OH_ArkUI_PointerEvent_GetTouchAreaHeight(const ArkUI_UIInputEvent* event, uint32_t pointerIndex)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从指向性输入事件（如触摸事件）中获取触屏区域的高度。仅适用于手指操作产生的触控事件，这通常是一个圆形区域的半径。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_pointerevent_getinteractionhand",
              children: "int32_t OH_ArkUI_PointerEvent_GetInteractionHand(const ArkUI_UIInputEvent *event, ArkUI_InteractionHand *hand)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前触摸事件是左手点击触发还是右手点击触发。仅在部分触控产品上有效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_pointerevent_getinteractionhandbyindex",
              children: "int32_t OH_ArkUI_PointerEvent_GetInteractionHandByIndex(const ArkUI_UIInputEvent *event, int32_t pointerIndex, ArkUI_InteractionHand *hand)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前触摸事件是左手点击触发还是右手点击触发。仅在部分触控产品上有效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_pointerevent_gethistorysize",
              children: "uint32_t OH_ArkUI_PointerEvent_GetHistorySize(const ArkUI_UIInputEvent* event)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从指向性输入事件（如触摸事件）中获取历史事件数量。历史事件为此次事件与上一次事件之间发生的原始事件，仅在指向性输入事件的移动阶段（即触摸移动或鼠标移动）中适用，在其他状态中调用返回默认值0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_pointerevent_gethistoryeventtime",
              children: "int64_t OH_ArkUI_PointerEvent_GetHistoryEventTime(const ArkUI_UIInputEvent* event, uint32_t historyIndex)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从指向性输入事件（如触摸事件、鼠标事件、轴事件）中获取历史事件发生的时间。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_pointerevent_gethistorypointercount",
              children: "uint32_t OH_ArkUI_PointerEvent_GetHistoryPointerCount(const ArkUI_UIInputEvent* event, uint32_t historyIndex)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从指向性输入事件（如触摸事件、鼠标事件、轴事件）中获取特定历史事件中多点触控的接触点数量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_pointerevent_gethistorypointerid",
              children: "int32_t OH_ArkUI_PointerEvent_GetHistoryPointerId(const ArkUI_UIInputEvent* event, uint32_t pointerIndex, uint32_t historyIndex)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从指向性输入事件（如触摸事件）的历史点中获取多点触控的接触点标识。返回事件发生时，事件触点的唯一标识符，用于区分同类输入设备的多点触控信息。其数值没有除标识触点外的其他含义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_pointerevent_gethistoryx",
              children: "float OH_ArkUI_PointerEvent_GetHistoryX(const ArkUI_UIInputEvent* event, uint32_t pointerIndex, uint32_t historyIndex)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从指向性输入事件（如触摸事件、鼠标事件、轴事件）中获取特定历史事件中特定接触点相对于当前组件左上角的X坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_pointerevent_gethistoryy",
              children: "float OH_ArkUI_PointerEvent_GetHistoryY(const ArkUI_UIInputEvent* event, uint32_t pointerIndex, uint32_t historyIndex)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从指向性输入事件（如触摸事件、鼠标事件、轴事件）中获取特定历史事件中特定接触点相对于当前组件左上角的Y坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_pointerevent_gethistorywindowx",
              children: "float OH_ArkUI_PointerEvent_GetHistoryWindowX(const ArkUI_UIInputEvent* event, uint32_t pointerIndex, uint32_t historyIndex)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从指向性输入事件（如触摸事件、鼠标事件、轴事件）中获取特定历史事件中特定接触点相对于当前应用窗口左上角的X坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_pointerevent_gethistorywindowy",
              children: "float OH_ArkUI_PointerEvent_GetHistoryWindowY(const ArkUI_UIInputEvent* event, uint32_t pointerIndex, uint32_t historyIndex)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从指向性输入事件（如触摸事件、鼠标事件、轴事件）中获取特定历史事件中特定接触点相对于当前应用窗口左上角的Y坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_pointerevent_gethistorydisplayx",
              children: "float OH_ArkUI_PointerEvent_GetHistoryDisplayX(const ArkUI_UIInputEvent* event, uint32_t pointerIndex, uint32_t historyIndex)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从指向性输入事件（如触摸事件、鼠标事件、轴事件）中获取特定历史事件中特定接触点相对于当前屏幕左上角的X坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_pointerevent_gethistorydisplayy",
              children: "float OH_ArkUI_PointerEvent_GetHistoryDisplayY(const ArkUI_UIInputEvent* event, uint32_t pointerIndex, uint32_t historyIndex)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从指向性输入事件（如触摸事件、鼠标事件、轴事件）中获取特定历史事件中特定接触点相对于当前屏幕左上角的Y坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_pointerevent_gethistoryglobaldisplayx",
              children: "float OH_ArkUI_PointerEvent_GetHistoryGlobalDisplayX(const ArkUI_UIInputEvent* event, uint32_t pointerIndex, uint32_t historyIndex)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从给定指针索引和历史记录索引的输入事件（如触摸事件、鼠标事件、轴事件）中获取历史事件中相对于全局显示的特定触摸点的X坐标。只能从指针事件中获取位置信息，对于鼠标和轴事件，当给定的pointerIndex大于0时，始终返回默认值0.0f。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_pointerevent_gethistoryglobaldisplayy",
              children: "float OH_ArkUI_PointerEvent_GetHistoryGlobalDisplayY(const ArkUI_UIInputEvent* event, uint32_t pointerIndex, uint32_t historyIndex)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从给定指针索引和历史记录索引的输入事件（如触摸事件、鼠标事件、轴事件）中获取历史事件中相对于全局显示的特定触摸点的Y坐标。只能从指针事件中获取位置信息，对于鼠标和轴事件，当给定的pointerIndex大于0时，始终返回默认值0.0f。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_pointerevent_gethistorypressure",
              children: "float OH_ArkUI_PointerEvent_GetHistoryPressure(const ArkUI_UIInputEvent* event, uint32_t pointerIndex, uint32_t historyIndex)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从指向性输入事件（如触摸事件）中获取特定历史事件中的触屏压力。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_pointerevent_gethistorytiltx",
              children: "float OH_ArkUI_PointerEvent_GetHistoryTiltX(const ArkUI_UIInputEvent* event, uint32_t pointerIndex, uint32_t historyIndex)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从指向性输入事件（如触摸事件）中获取特定历史事件中的相对YZ平面的角度，取值的范围[-90, 90]，单位为deg，其中正值是向右倾斜。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_pointerevent_gethistorytilty",
              children: "float OH_ArkUI_PointerEvent_GetHistoryTiltY(const ArkUI_UIInputEvent* event, uint32_t pointerIndex, uint32_t historyIndex)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从指向性输入事件（如触摸事件）中获取特定历史事件中的相对XZ平面的角度，值的范围[-90, 90]，单位为deg，其中正值是向下倾斜。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_pointerevent_gethistorytouchareawidth",
              children: "float OH_ArkUI_PointerEvent_GetHistoryTouchAreaWidth(const ArkUI_UIInputEvent* event, uint32_t pointerIndex, uint32_t historyIndex)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从指向性输入事件（如触摸事件）中获取特定历史事件中的触屏区域的宽度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_pointerevent_gethistorytouchareaheight",
              children: "float OH_ArkUI_PointerEvent_GetHistoryTouchAreaHeight(const ArkUI_UIInputEvent* event, uint32_t pointerIndex, uint32_t historyIndex)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从指向性输入事件（如触摸事件）中获取特定历史事件中的触屏区域的高度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_axisevent_getverticalaxisvalue",
              children: "double OH_ArkUI_AxisEvent_GetVerticalAxisValue(const ArkUI_UIInputEvent* event)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取当前轴事件的垂直滚动轴的值。通常由鼠标滚轮，或用户在触控板上双指竖向滑动产生。当通过鼠标滚动触发时：1.上报的数值单位为角度，为单次滚动角度增量，非滚动总量；2.上报的数值已与用户配置的放大系数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-ui-input-event-h/capi-ui-input-event-h#oh_arkui_axisevent_getscrollstep",
              children: "OH_ArkUI_AxisEvent_GetScrollStep"
            }), "叠加运算；3.数值的正负代表方向，向前滚动鼠标滚轮时上报数值为正数，向后滚动鼠标滚轮时上报数值为负数；当通过触控板双指竖向滑动时：1.上报的数值单位为PX，为单次滚动增量，非滚动总量；2.上报的数值不受用户配置的放大系数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-ui-input-event-h/capi-ui-input-event-h#oh_arkui_axisevent_getscrollstep",
              children: "OH_ArkUI_AxisEvent_GetScrollStep"
            }), "影响；3.数值的正负代表方向，双指从上往下滑动时上报数值为负数，双指从下往上滑动时上报数值为正数；4.方向会受系统设置中\"自然滚动\"配置的影响。通常情况下，垂直滚动轴事件只能驱动竖向的滑动手势响应，但当鼠标指针下命中的可滑动手势里，如果可响应的方向都是一致的，那么垂直滚动轴事件可以驱动这些滑动手势得到响应，即使这些手势所定义的方向是横向的。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_axisevent_gethorizontalaxisvalue",
              children: "double OH_ArkUI_AxisEvent_GetHorizontalAxisValue(const ArkUI_UIInputEvent* event)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前轴事件的水平滚动轴的值，通过在触控板上双指横向滑动产生。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_axisevent_getpinchaxisscalevalue",
              children: "double OH_ArkUI_AxisEvent_GetPinchAxisScaleValue(const ArkUI_UIInputEvent* event)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前轴事件的捏合轴缩放的值。通过触控板双指缩放/捏合操作产生。上报的scale数值，为相对于初始状态时的当前scale值。初始状态为系统识别到用户通过触控板发生了捏合操作时的两指位置状态，此时的scale数值为1.0。在手指抬起前的本次捏合操作过程中，所上报的scale数值均将初始状态作为参考系，从初始状态往中心捏合，则上报的scale会从1.0逐步往0.0缩小；当从初始化状态往外扩大双指距离时，会从1.0逐步变大。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_axisevent_getaxisaction",
              children: "int32_t OH_ArkUI_AxisEvent_GetAxisAction(const ArkUI_UIInputEvent* event)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前轴事件的操作类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_axisevent_hasaxis",
              children: "int32_t OH_ArkUI_AxisEvent_HasAxis(const ArkUI_UIInputEvent* event, int32_t axis)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检测此轴事件是否包含指定的轴类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_pointerevent_setintercepthittestmode",
              children: "int32_t OH_ArkUI_PointerEvent_SetInterceptHitTestMode(const ArkUI_UIInputEvent* event, HitTestMode mode)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["配置触摸测试模式。仅适用于接收基础事件的场景，如使用NODE_ON_TOUCH接收触摸事件场景。对于通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-gesture-h/capi-native-gesture-h#oh_arkui_gestureevent_getrawinputevent",
              children: "OH_ArkUI_GestureEvent_GetRawInputEvent"
            }), "接口从一个手势事件中获取到的ArkUI_UIInputEvent对象，无法使用该接口。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_mouseevent_getmousebutton",
              children: "int32_t OH_ArkUI_MouseEvent_GetMouseButton(const ArkUI_UIInputEvent* event)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取鼠标事件的按键类型的值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_mouseevent_getmouseaction",
              children: "int32_t OH_ArkUI_MouseEvent_GetMouseAction(const ArkUI_UIInputEvent* event)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取鼠标事件的鼠标动作类型的值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_pointerevent_setstoppropagation",
              children: "int32_t OH_ArkUI_PointerEvent_SetStopPropagation(const ArkUI_UIInputEvent* event, bool stopPropagation)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置是否阻止事件冒泡。仅适用于接收基础事件的场景，如使用NODE_ON_TOUCH接收触摸事件场景。对于通过 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-gesture-h/capi-native-gesture-h#oh_arkui_gestureevent_getrawinputevent",
              children: "OH_ArkUI_GestureEvent_GetRawInputEvent"
            }), "接口从一个手势事件中获取到的ArkUI_UIInputEvent对象，无法使用该接口。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_uiinputevent_getdeviceid",
              children: "int32_t OH_ArkUI_UIInputEvent_GetDeviceId(const ArkUI_UIInputEvent* event)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前按键的输入设备ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_uiinputevent_getpressedkeys",
              children: "int32_t OH_ArkUI_UIInputEvent_GetPressedKeys(const ArkUI_UIInputEvent* event, int32_t* pressedKeyCodes, int32_t* length)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取所有按下的按键，当前只支持按键事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_focusaxisevent_getaxisvalue",
              children: "double OH_ArkUI_FocusAxisEvent_GetAxisValue(const ArkUI_UIInputEvent* event, int32_t axis)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取焦点轴事件的轴值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_focusaxisevent_setstoppropagation",
              children: "int32_t OH_ArkUI_FocusAxisEvent_SetStopPropagation(const ArkUI_UIInputEvent* event, bool stopPropagation)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置是否阻止焦点轴事件冒泡。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_uiinputevent_getmodifierkeystates",
              children: "int32_t OH_ArkUI_UIInputEvent_GetModifierKeyStates(const ArkUI_UIInputEvent* event, uint64_t* keys)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取UI输入事件的修饰键状态。该接口会通过keys传出当前事件发生时所有修饰键的状态，你可以通过与", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-ui-input-event-h/capi-ui-input-event-h#arkui_modifierkeyname",
              children: "ArkUI_ModifierKeyName"
            }), "中定义的修饰键类型进行位计算操作获取哪些键处于按下状态。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_axisevent_setpropagation",
              children: "int32_t OH_ArkUI_AxisEvent_SetPropagation(const ArkUI_UIInputEvent* event, bool propagation)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置是否使能轴事件冒泡。默认不会进行冒泡传递，仅发送给第一个可响应轴事件的控件。可在接收到轴事件时，主动使能冒泡传递，以便当前事件可以继续传递给响应链上的下一个可响应轴事件的祖先组件处理。不支持对从手势事件中获取到的轴事件进行设置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_axisevent_getscrollstep",
              children: "int32_t OH_ArkUI_AxisEvent_GetScrollStep(const ArkUI_UIInputEvent* event)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取滚动轴事件的滚动步长系数，适用于鼠标滚轮产生的轴事件。这个值可以告诉你用户所配置的滚动放大系数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_uiinputevent_geteventtargetwidth",
              children: "float OH_ArkUI_UIInputEvent_GetEventTargetWidth(const ArkUI_UIInputEvent* event)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取事件命中的组件的宽度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_uiinputevent_geteventtargetheight",
              children: "float OH_ArkUI_UIInputEvent_GetEventTargetHeight(const ArkUI_UIInputEvent* event)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取事件命中的组件的高度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_uiinputevent_geteventtargetpositionx",
              children: "float OH_ArkUI_UIInputEvent_GetEventTargetPositionX(const ArkUI_UIInputEvent* event)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取事件命中的组件的X坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_uiinputevent_geteventtargetpositiony",
              children: "float OH_ArkUI_UIInputEvent_GetEventTargetPositionY(const ArkUI_UIInputEvent* event)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取事件命中的组件的Y坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_uiinputevent_geteventtargetglobalpositionx",
              children: "float OH_ArkUI_UIInputEvent_GetEventTargetGlobalPositionX(const ArkUI_UIInputEvent* event)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取事件命中的组件的全局X坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_uiinputevent_geteventtargetglobalpositiony",
              children: "float OH_ArkUI_UIInputEvent_GetEventTargetGlobalPositionY(const ArkUI_UIInputEvent* event)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取事件命中的组件的全局Y坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_pointerevent_getpressedtimebyindex",
              children: "int64_t OH_ArkUI_PointerEvent_GetPressedTimeByIndex(const ArkUI_UIInputEvent* event, uint32_t pointerIndex)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取指定触点的按下时间。仅对触摸事件有效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_mouseevent_getrawdeltax",
              children: "float OH_ArkUI_MouseEvent_GetRawDeltaX(const ArkUI_UIInputEvent* event)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取鼠标设备在二维平面X轴的移动增量。其数值为鼠标硬件的原始移动数据，使用物理世界中鼠标移动的距离单位进行表示。上报数值由硬件本身决定，并非屏幕的物理/逻辑像素。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_mouseevent_getrawdeltay",
              children: "float OH_ArkUI_MouseEvent_GetRawDeltaY(const ArkUI_UIInputEvent* event)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取鼠标设备在二维平面Y轴的移动增量。其数值为鼠标硬件的原始移动数据，使用物理世界中鼠标移动的距离单位进行表示。上报数值由硬件本身决定，并非屏幕的物理/逻辑像素。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_mouseevent_getpressedbuttons",
              children: "int32_t OH_ArkUI_MouseEvent_GetPressedButtons(const ArkUI_UIInputEvent* event, int32_t* pressedButtons, int32_t* length)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从鼠标事件中获取按下的按键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_uiinputevent_gettargetdisplayid",
              children: "int32_t OH_ArkUI_UIInputEvent_GetTargetDisplayId(const ArkUI_UIInputEvent* event)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取发生UI输入事件的屏幕ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_hoverevent_ishovered",
              children: "bool OH_ArkUI_HoverEvent_IsHovered(const ArkUI_UIInputEvent* event)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取鼠标是否悬浮在当前组件上"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_pointerevent_createclonedevent",
              children: "int32_t OH_ArkUI_PointerEvent_CreateClonedEvent(const ArkUI_UIInputEvent* event, ArkUI_UIInputEvent** clonedEvent)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "基于原始事件指针创建克隆事件指针。仅对触摸事件有效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_pointerevent_destroyclonedevent",
              children: "int32_t OH_ArkUI_PointerEvent_DestroyClonedEvent(const ArkUI_UIInputEvent* event)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁克隆事件指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_pointerevent_setclonedeventlocalposition",
              children: "int32_t OH_ArkUI_PointerEvent_SetClonedEventLocalPosition(const ArkUI_UIInputEvent* event, float x, float y)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置指向性事件相对于当前组件左上角的X坐标和Y坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_pointerevent_setclonedeventlocalpositionbyindex",
              children: "int32_t OH_ArkUI_PointerEvent_SetClonedEventLocalPositionByIndex(const ArkUI_UIInputEvent* event, float x, float y, int32_t pointerIndex)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置指向性事件特有接触点相对于当前组件左上角的X坐标和Y坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_pointerevent_setclonedeventactiontype",
              children: "int32_t OH_ArkUI_PointerEvent_SetClonedEventActionType(const ArkUI_UIInputEvent* event, int32_t actionType)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置当前带有指向性的克隆输入事件的事件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_pointerevent_setclonedeventchangedfingerid",
              children: "int32_t OH_ArkUI_PointerEvent_SetClonedEventChangedFingerId(const ArkUI_UIInputEvent* event, int32_t fingerId)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置当前带有指向性的克隆输入事件的触摸点ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_pointerevent_setclonedeventfingeridbyindex",
              children: "int32_t OH_ArkUI_PointerEvent_SetClonedEventFingerIdByIndex(const ArkUI_UIInputEvent* event, int32_t fingerId, int32_t pointerIndex)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置带有指向性的克隆输入事件特定接触点的触摸点ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_pointerevent_postclonedevent",
              children: "int32_t OH_ArkUI_PointerEvent_PostClonedEvent(ArkUI_NodeHandle node, const ArkUI_UIInputEvent* event)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "转发克隆事件到特定节点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_uiinputevent_getlateststatus",
              children: "ArkUI_ErrorCode OH_ArkUI_UIInputEvent_GetLatestStatus()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用该方法获取最近一次UIInput相关方法的执行情况。通常情况下不需要使用该方法，仅在返回值结果不确定是否异常时使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_uiinputevent_getcoastingaxisevent",
              children: "ArkUI_CoastingAxisEvent OH_ArkUI_UIInputEvent_GetCoastingAxisEvent(ArkUI_UIInputEvent* event)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取惯性滚动轴事件的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_coastingaxisevent_geteventtime",
              children: "int64_t OH_ArkUI_CoastingAxisEvent_GetEventTime(ArkUI_CoastingAxisEvent event)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取惯性滚动轴事件发生的时间。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_coastingaxisevent_getphase",
              children: "ArkUI_CoastingAxisEventPhase OH_ArkUI_CoastingAxisEvent_GetPhase(ArkUI_CoastingAxisEvent event)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取惯性滚动轴事件发生时的滚动阶段。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_coastingaxisevent_getdeltay",
              children: "float OH_ArkUI_CoastingAxisEvent_GetDeltaY(ArkUI_CoastingAxisEvent event)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取惯性滚动轴事件垂直方向的增量值。单位为px，表示为单次滚动增量，非滚动总量。数值的正负代表方向，双指从上往下滑动时为负数，双指从下往上滑动时为正数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_coastingaxisevent_getdeltax",
              children: "float OH_ArkUI_CoastingAxisEvent_GetDeltaX(ArkUI_CoastingAxisEvent event)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取惯性滚动轴事件水平方向的增量值。单位为px，表示为单次滚动增量，非滚动总量。数值的正负代表方向，双指从左往右滑动时为负数，双指从右往左滑动时为正数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_coastingaxisevent_setpropagation",
              children: "int32_t OH_ArkUI_CoastingAxisEvent_SetPropagation(ArkUI_CoastingAxisEvent event, bool propagation)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置惯性滚动轴事件是否启用冒泡，默认禁止冒泡。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_touchtestinfo_gettouchtestinfolist",
              children: "ArkUI_ErrorCode OH_ArkUI_TouchTestInfo_GetTouchTestInfoList(ArkUI_TouchTestInfo* info, ArkUI_TouchTestInfoItemArray* array, int32_t* size)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取触摸测试信息中的触摸测试信息项数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_touchtestinfoitem_getx",
              children: "float OH_ArkUI_TouchTestInfoItem_GetX(const ArkUI_TouchTestInfoItem* info)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从触摸测试信息项中获取相对于子组件左上角的X坐标，单位为px。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_touchtestinfoitem_gety",
              children: "float OH_ArkUI_TouchTestInfoItem_GetY(const ArkUI_TouchTestInfoItem* info)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从触摸测试信息项中获取相对于子组件左上角的Y坐标，单位为px。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_touchtestinfoitem_getwindowx",
              children: "float OH_ArkUI_TouchTestInfoItem_GetWindowX(const ArkUI_TouchTestInfoItem* info)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从触摸测试信息项中获取相对于当前应用窗口左上角的X坐标，单位为px。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_touchtestinfoitem_getwindowy",
              children: "float OH_ArkUI_TouchTestInfoItem_GetWindowY(const ArkUI_TouchTestInfoItem* info)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从触摸测试信息项中获取相对于当前应用窗口左上角的Y坐标，单位为px。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_touchtestinfoitem_getxrelativetoparent",
              children: "float OH_ArkUI_TouchTestInfoItem_GetXRelativeToParent(const ArkUI_TouchTestInfoItem* info)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从触摸测试信息项中获取相对于父组件左上角的X坐标，单位为px。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_touchtestinfoitem_getyrelativetoparent",
              children: "float OH_ArkUI_TouchTestInfoItem_GetYRelativeToParent(const ArkUI_TouchTestInfoItem* info)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从触摸测试信息项中获取相对于父组件左上角的Y坐标，单位为px。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_touchtestinfoitem_getchildrect",
              children: "ArkUI_ErrorCode OH_ArkUI_TouchTestInfoItem_GetChildRect(const ArkUI_TouchTestInfoItem* info, ArkUI_Rect* childRect)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从触摸测试信息项中获取子组件的边界矩形信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_touchtestinfoitem_getchildid",
              children: "ArkUI_ErrorCode OH_ArkUI_TouchTestInfoItem_GetChildId(const ArkUI_TouchTestInfoItem* info, char* buffer, int32_t bufferSize)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从触摸测试信息项中获取子组件的ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_touchtestinfo_settouchresultstrategy",
              children: "ArkUI_ErrorCode OH_ArkUI_TouchTestInfo_SetTouchResultStrategy(ArkUI_TouchTestInfo* info, ArkUI_TouchTestStrategy strategy)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置触摸测试策略，即组件及其子组件在命中测试过程中的行为方式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_touchtestinfo_settouchresultid",
              children: "ArkUI_ErrorCode OH_ArkUI_TouchTestInfo_SetTouchResultId(ArkUI_TouchTestInfo* info, const char* id)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置命中测试过程中需要作用的子组件ID。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "arkui_uiinputevent_type",
      children: "ArkUI_UIInputEvent_Type"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum ArkUI_UIInputEvent_Type\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "UI输入事件类型定义。"
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
            children: "ARKUI_UIINPUTEVENT_TYPE_UNKNOWN = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "未知。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_UIINPUTEVENT_TYPE_TOUCH = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "触摸事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_UIINPUTEVENT_TYPE_AXIS = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "轴事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_UIINPUTEVENT_TYPE_MOUSE = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "鼠标事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_UIINPUTEVENT_TYPE_KEY = 4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["按键事件。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 20"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "anonymous1",
      children: "anonymous1"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum anonymous1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义输入事件的行为类型。"
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
            children: "UI_TOUCH_EVENT_ACTION_CANCEL = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "触摸取消。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UI_TOUCH_EVENT_ACTION_DOWN = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "触摸按下。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UI_TOUCH_EVENT_ACTION_MOVE = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "触摸移动。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UI_TOUCH_EVENT_ACTION_UP = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "触摸抬起。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "anonymous2",
      children: "anonymous2"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum anonymous2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "产生输入事件的工具类型定义。"
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
            children: "UI_INPUT_EVENT_TOOL_TYPE_UNKNOWN = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持的工具类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UI_INPUT_EVENT_TOOL_TYPE_FINGER = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "手指。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UI_INPUT_EVENT_TOOL_TYPE_PEN = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "笔。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UI_INPUT_EVENT_TOOL_TYPE_MOUSE = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "鼠标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UI_INPUT_EVENT_TOOL_TYPE_TOUCHPAD = 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "触控板。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UI_INPUT_EVENT_TOOL_TYPE_JOYSTICK = 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "操纵杆。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "anonymous3",
      children: "anonymous3"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum anonymous3\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "产生输入事件的来源类型定义。"
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
            children: "UI_INPUT_EVENT_SOURCE_TYPE_UNKNOWN = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "未知输入源。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UI_INPUT_EVENT_SOURCE_TYPE_MOUSE = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "鼠标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UI_INPUT_EVENT_SOURCE_TYPE_TOUCH_SCREEN = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "触摸屏。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UI_INPUT_EVENT_SOURCE_TYPE_KEY = 4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["按键。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UI_INPUT_EVENT_SOURCE_TYPE_JOYSTICK = 5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["手柄。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hittestmode",
      children: "HitTestMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum HitTestMode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义触摸测试类型的枚举值。"
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
            children: "HTM_DEFAULT = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认触摸测试效果。自身及子节点响应触摸测试，但阻塞兄弟节点的触摸测试，不影响祖先节点的触摸测试。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HTM_BLOCK = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自身响应触摸测试，阻塞子节点、兄弟节点和祖先节点的触摸测试。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HTM_TRANSPARENT = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自身和子节点都响应触摸测试，不会阻塞兄弟节点和祖先节点的触摸测试。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HTM_NONE = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自身不响应触摸测试，不会阻塞子节点、兄弟节点和祖先节点的触摸测试。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HTM_BLOCK_HIERARCHY = 4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["自身和子节点响应触摸测试，阻止所有优先级较低的兄弟节点和父节点参与触摸测试。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 20"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HTM_BLOCK_DESCENDANTS = 5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["自身不响应触摸测试，并且所有的后代（孩子，孙子等）也不响应触摸测试，不会影响祖先节点的触摸测试。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 20"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "anonymous4",
      children: "anonymous4"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum anonymous4\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义鼠标事件的行为类型。"
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
            children: "UI_MOUSE_EVENT_ACTION_UNKNOWN = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无效行为。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UI_MOUSE_EVENT_ACTION_PRESS = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "鼠标按键按下。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UI_MOUSE_EVENT_ACTION_RELEASE = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "鼠标按键松开。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UI_MOUSE_EVENT_ACTION_MOVE = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "鼠标移动。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UI_MOUSE_EVENT_ACTION_CANCEL = 13"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["鼠标按键被取消。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 18"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "anonymous5",
      children: "anonymous5"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum anonymous5\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义鼠标事件的按键类型。"
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
            children: "UI_MOUSE_EVENT_BUTTON_NONE = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无按键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UI_MOUSE_EVENT_BUTTON_LEFT = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "鼠标左键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UI_MOUSE_EVENT_BUTTON_RIGHT = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "鼠标右键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UI_MOUSE_EVENT_BUTTON_MIDDLE = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "鼠标中键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UI_MOUSE_EVENT_BUTTON_BACK = 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "鼠标左侧后退键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UI_MOUSE_EVENT_BUTTON_FORWARD = 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "鼠标左侧前进键。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "arkui_modifierkeyname",
      children: "ArkUI_ModifierKeyName"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum ArkUI_ModifierKeyName\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义modifier按键。"
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
            children: "ARKUI_MODIFIER_KEY_CTRL = 1 << 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ctrl."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_MODIFIER_KEY_SHIFT = 1 << 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shift."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_MODIFIER_KEY_ALT = 1 << 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alt."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_MODIFIER_KEY_FN = 1 << 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fn（仅调试使用，通常不上报Fn状态）."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "anonymous6",
      children: "anonymous6"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum anonymous6\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["定义", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/basic-raw-input-event/ts-universal-events-focus_axis/ts-universal-events-focus_axis",
        children: "焦点轴事件"
      }), "的轴类型。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 15"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "UI_FOCUS_AXIS_EVENT_ABS_X = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "游戏手柄X轴。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UI_FOCUS_AXIS_EVENT_ABS_Y = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "游戏手柄Y轴。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UI_FOCUS_AXIS_EVENT_ABS_Z = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "游戏手柄Z轴。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UI_FOCUS_AXIS_EVENT_ABS_RZ = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "游戏手柄RZ轴。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UI_FOCUS_AXIS_EVENT_ABS_GAS = 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "游戏手柄GAS轴。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UI_FOCUS_AXIS_EVENT_ABS_BRAKE = 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "游戏手柄BRAKE轴。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UI_FOCUS_AXIS_EVENT_ABS_HAT0X = 6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "游戏手柄HAT0X轴。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UI_FOCUS_AXIS_EVENT_ABS_HAT0Y = 7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "游戏手柄HAT0Y轴。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UI_FOCUS_AXIS_EVENT_ABS_RX = 8"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["游戏手柄RX轴。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UI_FOCUS_AXIS_EVENT_ABS_RY = 9"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["游戏手柄RY轴。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UI_FOCUS_AXIS_EVENT_ABS_THROTTLE = 10"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["游戏手柄THROTTLE轴。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UI_FOCUS_AXIS_EVENT_ABS_RUDDER = 11"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["游戏手柄RUDDER轴。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UI_FOCUS_AXIS_EVENT_ABS_WHEEL = 12"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["游戏手柄WHEEL轴。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UI_FOCUS_AXIS_EVENT_ABS_HAT1X = 13"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["游戏手柄HAT1X轴。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UI_FOCUS_AXIS_EVENT_ABS_HAT1Y = 14"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["游戏手柄HAT1Y轴。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UI_FOCUS_AXIS_EVENT_ABS_HAT2X = 15"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["游戏手柄HAT2X轴。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UI_FOCUS_AXIS_EVENT_ABS_HAT2Y = 16"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["游戏手柄HAT2Y轴。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UI_FOCUS_AXIS_EVENT_ABS_HAT3X = 17"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["游戏手柄HAT3X轴。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UI_FOCUS_AXIS_EVENT_ABS_HAT3Y = 18"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["游戏手柄HAT3Y轴。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "arkui_interactionhand",
      children: "ArkUI_InteractionHand"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum ArkUI_InteractionHand\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义触摸事件是左手还是右手。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 15"]
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
            children: "ARKUI_EVENT_HAND_NONE = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "未知。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_EVENT_HAND_LEFT = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "左手。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_EVENT_HAND_RIGHT = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "右手。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "anonymous7",
      children: "anonymous7"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum anonymous7\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["定义", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/basic-raw-input-event/ts-universal-events-axis/ts-universal-events-axis",
        children: "轴事件"
      }), "的操作类型。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 15"]
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
            children: "UI_AXIS_EVENT_ACTION_NONE = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "轴事件异常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UI_AXIS_EVENT_ACTION_BEGIN = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "轴事件开始。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UI_AXIS_EVENT_ACTION_UPDATE = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "轴事件更新。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UI_AXIS_EVENT_ACTION_END = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "轴事件结束。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UI_AXIS_EVENT_ACTION_CANCEL = 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "轴事件取消。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "anonymous8",
      children: "anonymous8"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum anonymous8\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义轴事件的轴类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
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
            children: "UI_AXIS_TYPE_VERTICAL_AXIS = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "垂直滚动轴。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UI_AXIS_TYPE_HORIZONTAL_AXIS = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "水平滚动轴。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UI_AXIS_TYPE_PINCH_AXIS = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "捏合轴。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "arkui_coastingaxiseventphase",
      children: "ArkUI_CoastingAxisEventPhase"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum ArkUI_CoastingAxisEventPhase\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义惯性滚动轴事件的阶段。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
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
            children: "ARKUI_COASTING_AXIS_EVENT_PHASE_NONE = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "非惯性轴事件阶段，异常默认值，可以通过检查惯性轴阶段值不为该值来判断当前惯性轴事件是有效的。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_COASTING_AXIS_EVENT_PHASE_BEGIN = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "惯性滚动轴事件开始，此为惯性阶段的第一个事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_COASTING_AXIS_EVENT_PHASE_UPDATE = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "惯性滚动轴事件更新，此阶段可以获取惯性轴值增量来处理滚动偏移。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_COASTING_AXIS_EVENT_PHASE_END = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "惯性滚动轴事件结束，此值在惯性被刹停（惯性滚动阶段用户重新触摸触控板或通过鼠标及触屏与组件产生交互等）或惯性衰减至自然停止时发送，到达此阶段时，应立即停止惯性滚动效果。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "arkui_touchteststrategy",
      children: "ArkUI_TouchTestStrategy"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum ArkUI_TouchTestStrategy\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义触摸测试策略。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
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
            children: "ARKUI_TOUCH_TEST_STRATEGY_DEFAULT = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义分发不产生影响，系统按当前节点命中状态分发事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_TOUCH_TEST_STRATEGY_FORWARD_COMPETITION = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用指定分发事件到某个子节点，其他兄弟节点是否分发事件交由系统决定。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_TOUCH_TEST_STRATEGY_FORWARD = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用指定分发事件到某个子节点，系统不再分发事件到其他兄弟节点。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_uiinputevent_gettype",
      children: "OH_ArkUI_UIInputEvent_GetType()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_UIInputEvent_GetType(const ArkUI_UIInputEvent* event)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取UI输入事件的类型。在访问一个ArkUI_UIInputEvent指针对象之前，推荐使用该方法判断该输入事件的类型，该接口会返回", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-ui-input-event-h/capi-ui-input-event-h#arkui_uiinputevent_type",
        children: "ArkUI_UIInputEvent_Type"
      }), "枚举中的一种。比如，当事件是一个触控类型时，由于触控类型是指向性事件，那么使用OH_ArkUI_UIInputEvent_GetXXX及OH_ArkUI_PointerEvent_GetXXX系列接口，均可以正常访问；而如果使用OH_ArkUI_KeyEvent_GetXXX相关接口去访问它，则会有无法预期的结果。对于还未支持的事件类型，接口返回默认值0。"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向当前UI输入事件的指针。"
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
            children: "返回当前UI输入事件的类型，如果参数异常则返回0。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_uiinputevent_getaction",
      children: "OH_ArkUI_UIInputEvent_GetAction()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_UIInputEvent_GetAction(const ArkUI_UIInputEvent* event)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取输入事件的action类型。action类型为基础事件在不同阶段的类型定义，通常代表了事件的特点，并表征事件的开始与结束，如touch down, touch up。触控事件的action类型为", (0,jsx_runtime.jsx)(_components.a, {
        href: "#anonymous1",
        children: "UI_TOUCH_EVENT_ACTION_XXX"
      }), "，鼠标事件的action类型为", (0,jsx_runtime.jsx)(_components.a, {
        href: "#anonymous4",
        children: "UI_MOUSE_EVENT_ACTION_XXX"
      }), "。轴事件的action类型获取请使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_arkui_axisevent_getaxisaction",
        children: "OH_ArkUI_AxisEvent_GetAxisAction"
      }), "接口，返回值类型为", (0,jsx_runtime.jsx)(_components.a, {
        href: "#anonymous7",
        children: "UI_AXIS_EVENT_ACTION_XXX"
      }), "，按键事件的action类型获取请使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-key-event-h/capi-native-key-event-h#oh_arkui_keyevent_gettype",
        children: "OH_ArkUI_KeyEvent_GetType"
      }), "接口，返回值类型为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-key-event-h/capi-native-key-event-h#arkui_keyeventtype",
        children: "ArkUI_KeyEventType"
      }), "。"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向当前UI输入事件的指针。"
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
            children: "返回当前UI输入事件的操作类型，如果参数异常则返回-1。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_uiinputevent_getsourcetype",
      children: "OH_ArkUI_UIInputEvent_GetSourceType()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_UIInputEvent_GetSourceType(const ArkUI_UIInputEvent* event)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取UI输入事件的触发源类型。输入源为产生输入事件的真实物理设备，如触摸屏，鼠标等，由", (0,jsx_runtime.jsx)(_components.a, {
        href: "#anonymous3",
        children: "UI_INPUT_EVENT_SOURCE_TYPE_XXX"
      }), "定义，而输入工具为操作输入源设备来产生事件的工具，如手指、触控笔。在某些情况下两者可能容易发生混淆，比如当用户在操作鼠标时，鼠标既是输入源，也是输入工具。对于按键事件，并不支持获取输入源类型，返回unknown。"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向当前UI输入事件的指针。"
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
            children: "返回产生当前UI输入事件的来源类型。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_uiinputevent_gettooltype",
      children: "OH_ArkUI_UIInputEvent_GetToolType()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_UIInputEvent_GetToolType(const ArkUI_UIInputEvent* event)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取UI输入事件的工具类型。输入工具为操作输入源设备来产生事件的操作方，如手指、触控笔，他们自身不真实产生事件，但可以驱动输入源设备不断产生事件。返回的类型由", (0,jsx_runtime.jsx)(_components.a, {
        href: "#anonymous2",
        children: "UI_INPUT_EVENT_TOOL_TYPE_XXX"
      }), "枚举值定义。对于按键事件，并不支持获取输入工具类型，返回unknown。"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向当前UI输入事件的指针。"
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
            children: "返回产生当前UI输入事件的工具类型。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_uiinputevent_geteventtime",
      children: "OH_ArkUI_UIInputEvent_GetEventTime()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int64_t OH_ArkUI_UIInputEvent_GetEventTime(const ArkUI_UIInputEvent* event)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取UI输入事件发生的时间。单位为ns。"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向当前UI输入事件的指针。"
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
            children: "返回UI输入事件发生的时间，如果参数异常则返回0。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_pointerevent_getpointercount",
      children: "OH_ArkUI_PointerEvent_GetPointerCount()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uint32_t OH_ArkUI_PointerEvent_GetPointerCount(const ArkUI_UIInputEvent* event)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从指向性输入事件（如触摸事件、鼠标事件、轴事件）中获取多点触控的接触点数量。指向性事件一般是附带有事件发生位置信息的事件，如触摸事件，用户操作时，可以感知事件在什么位置发生。而非指向性事件，如按键事件，一般没有位置信息，没有触点的说法，该接口永远返回0。对于触摸事件，该接口多用于处理多指触控，判断用户有几根手指在操作当前控件。而对于鼠标和轴事件，可认为触点只有1个，该接口永远返回1。"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向当前UI输入事件的指针。"
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
            children: "uint32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回当前指向性输入事件的接触点数量。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_pointerevent_getpointerid",
      children: "OH_ArkUI_PointerEvent_GetPointerId()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_PointerEvent_GetPointerId(const ArkUI_UIInputEvent* event, uint32_t pointerIndex)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从指向性输入事件（如触摸事件、鼠标事件、轴事件）中获取多点触控的接触点标识。返回事件发生时，事件触点的唯一标识符，用于区分同类输入设备的多点触控信息。其数值没有除标识触点外的其他含义。"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向当前UI输入事件的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t pointerIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示多点触控数据列表中的序号。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回特定接触点标识。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_pointerevent_getchangedpointerid",
      children: "OH_ArkUI_PointerEvent_GetChangedPointerId()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_PointerEvent_GetChangedPointerId(const ArkUI_UIInputEvent* event, uint32_t* pointerIndex)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取触发当前事件的对应的手指id。"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向当前UI输入事件的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t* pointerIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示多点触控数据列表中的序号。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["错误码。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_NO_ERROR"
            }), " 成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_PARAM_INVALID"
            }), " 函数参数异常。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_pointerevent_getx",
      children: "OH_ArkUI_PointerEvent_GetX()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float OH_ArkUI_PointerEvent_GetX(const ArkUI_UIInputEvent* event)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从指向性输入事件（如触摸事件、鼠标事件、轴事件）中获取相对于当前组件左上角的X坐标。"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向当前UI输入事件的指针。"
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
            children: "返回当前指向性输入事件相对于当前组件左上角的X坐标，单位为px。如果参数异常则返回0.0f。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_pointerevent_getxbyindex",
      children: "OH_ArkUI_PointerEvent_GetXByIndex()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float OH_ArkUI_PointerEvent_GetXByIndex(const ArkUI_UIInputEvent* event, uint32_t pointerIndex)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从指向性输入事件（如触摸事件、鼠标事件、轴事件）中获取特定接触点相对于当前组件左上角的X坐标。对于鼠标和轴事件，当给定的索引大于0时，返回默认值0.0f。"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向当前UI输入事件的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t pointerIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示多点触控数据列表中的序号。"
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
            children: "float"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回指向性输入事件中特定接触点相对于当前组件左上角的X坐标，单位为px。如果参数异常则返回0.0f。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_pointerevent_gety",
      children: "OH_ArkUI_PointerEvent_GetY()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float OH_ArkUI_PointerEvent_GetY(const ArkUI_UIInputEvent* event)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从指向性输入事件（如触摸事件、鼠标事件、轴事件）中获取相对于当前组件左上角的Y坐标。"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向当前UI输入事件的指针。"
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
            children: "返回当前指向性输入事件相对于当前组件左上角的Y坐标，单位为px。如果参数异常则返回0.0f。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_pointerevent_getybyindex",
      children: "OH_ArkUI_PointerEvent_GetYByIndex()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float OH_ArkUI_PointerEvent_GetYByIndex(const ArkUI_UIInputEvent* event, uint32_t pointerIndex)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从指向性输入事件（如触摸事件、鼠标事件、轴事件）中获取特定接触点相对于当前组件左上角的Y坐标。对于鼠标和轴事件，当给定的索引大于0时，返回默认值0.0f。"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向当前UI输入事件的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t pointerIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示多点触控数据列表中的序号。"
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
            children: "float"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回指向性输入事件事件中特定接触点相对于当前组件左上角的Y坐标，单位为px。如果参数异常则返回0.0f。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_pointerevent_getwindowx",
      children: "OH_ArkUI_PointerEvent_GetWindowX()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float OH_ArkUI_PointerEvent_GetWindowX(const ArkUI_UIInputEvent* event)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从指向性输入事件（如触摸事件、鼠标事件、轴事件）中获取相对于当前应用窗口左上角的X坐标。"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向当前UI输入事件的指针。"
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
            children: "返回当前指向性输入事件相对于当前应用窗口左上角的X坐标，单位为px。如果参数异常则返回0.0f。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_pointerevent_getwindowxbyindex",
      children: "OH_ArkUI_PointerEvent_GetWindowXByIndex()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float OH_ArkUI_PointerEvent_GetWindowXByIndex(const ArkUI_UIInputEvent* event, uint32_t pointerIndex)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从指向性输入事件（如触摸事件、鼠标事件、轴事件）中获取特定接触点相对于当前应用窗口左上角的X坐标。对于鼠标和轴事件，当给定的索引大于0时，总是返回默认值0.0f。"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向当前UI输入事件的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t pointerIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示多点触控数据列表中的序号。"
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
            children: "float"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回指向性输入事件中特定接触点相对于当前应用窗口左上角的X坐标，单位为px。如果参数异常则返回0.0f。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_pointerevent_getwindowy",
      children: "OH_ArkUI_PointerEvent_GetWindowY()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float OH_ArkUI_PointerEvent_GetWindowY(const ArkUI_UIInputEvent* event)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从指向性输入事件（如触摸事件、鼠标事件、轴事件）中获取相对于当前应用窗口左上角的Y坐标。"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向当前UI输入事件的指针。"
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
            children: "返回当前指向性输入事件相对于当前应用窗口左上角的Y坐标，单位为px。如果参数异常则返回0.0f。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_pointerevent_getwindowybyindex",
      children: "OH_ArkUI_PointerEvent_GetWindowYByIndex()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float OH_ArkUI_PointerEvent_GetWindowYByIndex(const ArkUI_UIInputEvent* event, uint32_t pointerIndex)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从指向性输入事件（如触摸事件、鼠标事件、轴事件）中获取特定接触点相对于当前应用窗口左上角的Y坐标。对于鼠标和轴事件，当给定的索引大于0时，总是返回默认值0.0f。"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向当前UI输入事件的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t pointerIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示多点触控数据列表中的序号。"
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
            children: "float"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回指向性输入事件中特定接触点相对于当前应用窗口左上角的Y坐标，单位为px。如果参数异常则返回0.0f。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_pointerevent_getdisplayx",
      children: "OH_ArkUI_PointerEvent_GetDisplayX()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float OH_ArkUI_PointerEvent_GetDisplayX(const ArkUI_UIInputEvent* event)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从指向性输入事件（如触摸事件、鼠标事件、轴事件）中获取相对于当前屏幕左上角的X坐标。"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向当前UI输入事件的指针。"
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
            children: "返回当前指向性输入事件相对于当前屏幕左上角的X坐标，单位为px。如果参数异常则返回0.0f。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_pointerevent_getdisplayxbyindex",
      children: "OH_ArkUI_PointerEvent_GetDisplayXByIndex()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float OH_ArkUI_PointerEvent_GetDisplayXByIndex(const ArkUI_UIInputEvent* event, uint32_t pointerIndex)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从指向性输入事件（如触摸事件、鼠标事件、轴事件）中获取特定接触点相对于当前屏幕左上角的X坐标。对于鼠标和轴事件，当给定的索引大于0时，总是返回默认值0.0f。"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向当前UI输入事件的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t pointerIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示多点触控数据列表中的序号。"
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
            children: "float"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回指向性输入事件中特定接触点相对于当前屏幕左上角的X坐标，单位为px。如果参数异常则返回0.0f。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_pointerevent_getdisplayy",
      children: "OH_ArkUI_PointerEvent_GetDisplayY()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float OH_ArkUI_PointerEvent_GetDisplayY(const ArkUI_UIInputEvent* event)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从指向性输入事件（如触摸事件、鼠标事件、轴事件）中获取相对于当前屏幕左上角的Y坐标。"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向当前UI输入事件的指针。"
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
            children: "返回当前指向性输入事件相对于当前屏幕左上角的Y坐标，单位为px。如果参数异常则返回0.0f。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_pointerevent_getdisplayybyindex",
      children: "OH_ArkUI_PointerEvent_GetDisplayYByIndex()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float OH_ArkUI_PointerEvent_GetDisplayYByIndex(const ArkUI_UIInputEvent* event, uint32_t pointerIndex)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从指向性输入事件（如触摸事件、鼠标事件、轴事件）中获取特定接触点相对于当前屏幕左上角的Y坐标。对于鼠标和轴事件，当给定的索引大于0时，总是返回默认值0.0f。"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向当前UI输入事件的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t pointerIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示多点触控数据列表中的序号。"
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
            children: "float"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回指向性输入事件中特定接触点相对于当前屏幕左上角的Y坐标，单位为px。如果参数异常则返回0.0f。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_pointerevent_getglobaldisplayx",
      children: "OH_ArkUI_PointerEvent_GetGlobalDisplayX()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float OH_ArkUI_PointerEvent_GetGlobalDisplayX(const ArkUI_UIInputEvent* event)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从指向性输入事件（如触摸事件、鼠标事件、轴事件）中获取相对于全局显示的X坐标。只能从", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
        children: "ArkUI_UIInputEvent"
      }), "事件中获取位置信息。"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向当前UI输入事件的指针。"
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
            children: "返回相对于全局显示的X坐标，单位为px。如果发生任何参数错误，例如传递的一个事件没有位置信息，则返回0.0f。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_pointerevent_getglobaldisplayxbyindex",
      children: "OH_ArkUI_PointerEvent_GetGlobalDisplayXByIndex()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float OH_ArkUI_PointerEvent_GetGlobalDisplayXByIndex(const ArkUI_UIInputEvent* event, uint32_t pointerIndex)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从指向性输入事件（如触摸事件、鼠标事件、轴事件）中获取相对于全局显示的X坐标。只能从指针事件中获取位置信息，对于鼠标和轴事件，当给定的pointerIndex大于0时，始终返回默认值0.0f。"
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向当前UI输入事件的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t pointerIndex"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示多点触控数据列表中目标触控点的索引。有效值范围[0, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_pointerevent_getpointercount",
              children: "OH_ArkUI_PointerEvent_GetPointerCount()"
            }), " - 1]"]
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
            children: "float"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回指向性输入事件中特定接触点相对于全局显示的X坐标，单位为px。如果发生任何参数错误，则返回0.0f。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_pointerevent_getglobaldisplayy",
      children: "OH_ArkUI_PointerEvent_GetGlobalDisplayY()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float OH_ArkUI_PointerEvent_GetGlobalDisplayY(const ArkUI_UIInputEvent* event)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从指向性输入事件（如触摸事件、鼠标事件、轴事件）中获取相对于全局显示的Y坐标。只能从", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
        children: "ArkUI_UIInputEvent"
      }), "事件中获取位置信息。"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向当前UI输入事件的指针。"
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
            children: "float 返回相对于全局显示的Y坐标，单位为px。如果发生任何参数错误，例如传递的一个事件没有位置信息，则返回0.0f。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_pointerevent_getglobaldisplayybyindex",
      children: "OH_ArkUI_PointerEvent_GetGlobalDisplayYByIndex()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float OH_ArkUI_PointerEvent_GetGlobalDisplayYByIndex(const ArkUI_UIInputEvent* event, uint32_t pointerIndex)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从指向性输入事件（如触摸事件、鼠标事件、轴事件）中获取相对于全局显示的Y坐标。只能从指针事件中获取位置信息，对于鼠标和轴事件，当给定的pointerIndex大于0时，始终返回默认值0.0f。"
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向当前UI输入事件的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t pointerIndex"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示多点触控数据列表中目标触控点的索引。有效值范围[0, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_pointerevent_getpointercount",
              children: "OH_ArkUI_PointerEvent_GetPointerCount()"
            }), " - 1]"]
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
            children: "float"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "float 返回相对于全局显示的Y坐标，单位为px。如果发生任何参数错误，则返回0.0f。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_pointerevent_getpressure",
      children: "OH_ArkUI_PointerEvent_GetPressure()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float OH_ArkUI_PointerEvent_GetPressure(const ArkUI_UIInputEvent* event, uint32_t pointerIndex)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从指向性输入事件（如触摸事件）中获取触屏压力。"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向当前UI输入事件的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t pointerIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示多点触控数据列表中的序号。"
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
            children: "float"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回当前指向性输入事件产生的触屏压力。取值范围为[0, 1]，压感大小与数值正相关。如果参数异常则返回默认值0.0f。在部分设备中，由于设备的硬件参数配置不同，可能会返回大于1的值。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_pointerevent_gettiltx",
      children: "OH_ArkUI_PointerEvent_GetTiltX()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float OH_ArkUI_PointerEvent_GetTiltX(const ArkUI_UIInputEvent* event, uint32_t pointerIndex)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从指向性输入事件（如触摸事件）中获取相对YZ平面的角度，取值的范围[-90, 90]，单位为deg，其中正值是向右倾斜。仅适用于支持倾角上报的触控笔操作产生的触控事件。"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向当前UI输入事件的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t pointerIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示多点触控数据列表中的序号。"
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
            children: "float"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回当前指向性输入事件中相对YZ平面的角度。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_pointerevent_gettilty",
      children: "OH_ArkUI_PointerEvent_GetTiltY()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float OH_ArkUI_PointerEvent_GetTiltY(const ArkUI_UIInputEvent* event, uint32_t pointerIndex)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从指向性输入事件（如触摸事件）中获取相对XZ平面的角度，取值的范围[-90, 90]，单位为deg，其中正值是向下倾斜。仅适用于支持倾角上报的触控笔操作产生的触控事件。"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向当前UI输入事件的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t pointerIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示多点触控数据列表中的序号。"
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
            children: "float"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回当前指向性输入事件中相对XZ平面的角度。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_pointerevent_getrollangle",
      children: "OH_ArkUI_PointerEvent_GetRollAngle()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_PointerEvent_GetRollAngle(const ArkUI_UIInputEvent* event, double* rollAngle)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取触控笔绕Z轴旋转的角度。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 17"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向当前UI输入事件的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "double* rollAngle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "触控笔绕Z轴旋转的角度，单位为deg。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["错误码。  Returns ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_NO_ERROR"
            }), " 成功。  Returns ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_PARAM_INVALID"
            }), " 函数参数异常。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_pointerevent_gettouchareawidth",
      children: "OH_ArkUI_PointerEvent_GetTouchAreaWidth()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float OH_ArkUI_PointerEvent_GetTouchAreaWidth(const ArkUI_UIInputEvent* event, uint32_t pointerIndex)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从指向性输入事件（如触摸事件）中获取触屏区域的宽度。仅适用于手指操作产生的触控事件，这通常是一个圆形区域的半径。"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向当前UI输入事件的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t pointerIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示多点触控数据列表中的序号。"
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
            children: "float"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回当前指向性输入事件中触屏区域的宽度，单位为px。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_pointerevent_gettouchareaheight",
      children: "OH_ArkUI_PointerEvent_GetTouchAreaHeight()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float OH_ArkUI_PointerEvent_GetTouchAreaHeight(const ArkUI_UIInputEvent* event, uint32_t pointerIndex)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从指向性输入事件（如触摸事件）中获取触屏区域的高度。仅适用于手指操作产生的触控事件，这通常是一个圆形区域的半径。"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向当前UI输入事件的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t pointerIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示多点触控数据列表中的序号。"
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
            children: "float"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回当前指向性输入事件中触屏区域的高度，单位为px。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_pointerevent_getinteractionhand",
      children: "OH_ArkUI_PointerEvent_GetInteractionHand()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_PointerEvent_GetInteractionHand(const ArkUI_UIInputEvent *event, ArkUI_InteractionHand *hand)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前触摸事件是左手点击触发还是右手点击触发。仅在部分触控产品上有效。该值并非在按下时就能实时获取，在系统完成结果推断之前，皆默认返回NONE，因此请不要过度依赖该接口返回的结果。"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), " *event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向当前UI输入事件的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-ui-input-event-h/capi-ui-input-event-h#arkui_interactionhand",
              children: "ArkUI_InteractionHand"
            }), " *hand"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示触摸点是左手还是右手。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回结果。  如果操作成功，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_NO_ERROR"
            }), "。  如果发生参数异常，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_PARAM_INVALID"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_pointerevent_getinteractionhandbyindex",
      children: "OH_ArkUI_PointerEvent_GetInteractionHandByIndex()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_PointerEvent_GetInteractionHandByIndex(const ArkUI_UIInputEvent *event, int32_t pointerIndex, ArkUI_InteractionHand *hand)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前触摸事件是左手点击触发还是右手点击触发。仅在部分触控产品上有效。该值并非在按下时就能实时获取，在系统完成结果推断之前，皆默认返回NONE，因此请不要过度依赖该接口返回的结果。"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), " *event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向当前UI输入事件的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t pointerIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示多点触控数据列表中目标触控点的索引。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-ui-input-event-h/capi-ui-input-event-h#arkui_interactionhand",
              children: "ArkUI_InteractionHand"
            }), " *hand"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示触摸点是左手还是右手。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回结果。  如果操作成功，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_NO_ERROR"
            }), "。  如果发生参数异常，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_PARAM_INVALID"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_pointerevent_gethistorysize",
      children: "OH_ArkUI_PointerEvent_GetHistorySize()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uint32_t OH_ArkUI_PointerEvent_GetHistorySize(const ArkUI_UIInputEvent* event)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从指向性输入事件（如触摸事件）中获取历史事件数量。历史事件为此次事件与上一次事件之间发生的原始事件，仅在指向性输入事件的移动阶段（即触摸移动或鼠标移动）中适用，在其他状态中调用返回默认值0。"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向当前UI输入事件的指针。"
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
            children: "uint32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回当前历史事件数量。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_pointerevent_gethistoryeventtime",
      children: "OH_ArkUI_PointerEvent_GetHistoryEventTime()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int64_t OH_ArkUI_PointerEvent_GetHistoryEventTime(const ArkUI_UIInputEvent* event, uint32_t historyIndex)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从指向性输入事件（如触摸事件、鼠标事件、轴事件）中获取历史事件发生的时间。"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向当前UI输入事件的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t historyIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示历史事件数据列表的序号。"
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
            children: "int64_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回UI输入事件发生的时间，单位为ns。如果参数异常则返回0。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_pointerevent_gethistorypointercount",
      children: "OH_ArkUI_PointerEvent_GetHistoryPointerCount()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uint32_t OH_ArkUI_PointerEvent_GetHistoryPointerCount(const ArkUI_UIInputEvent* event, uint32_t historyIndex)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从指向性输入事件（如触摸事件、鼠标事件、轴事件）中获取特定历史事件中多点触控的接触点数量。"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向当前UI输入事件的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t historyIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示历史事件数据列表的序号。"
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
            children: "uint32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "特定历史事件中多点触控的接触点数量。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_pointerevent_gethistorypointerid",
      children: "OH_ArkUI_PointerEvent_GetHistoryPointerId()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_PointerEvent_GetHistoryPointerId(const ArkUI_UIInputEvent* event, uint32_t pointerIndex, uint32_t historyIndex)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从指向性输入事件（如触摸事件）的历史点中获取多点触控的接触点标识。返回事件发生时，事件触点的唯一标识符，用于区分同类输入设备的多点触控信息。其数值没有除标识触点外的其他含义。"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向当前UI输入事件的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t pointerIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示多点触控数据列表的序号。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t historyIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示历史事件数据列表的序号。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回特定历史事件中的特定接触点标识。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_pointerevent_gethistoryx",
      children: "OH_ArkUI_PointerEvent_GetHistoryX()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float OH_ArkUI_PointerEvent_GetHistoryX(const ArkUI_UIInputEvent* event, uint32_t pointerIndex, uint32_t historyIndex)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从指向性输入事件（如触摸事件、鼠标事件、轴事件）中获取特定历史事件中特定接触点相对于当前组件左上角的X坐标。"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向当前UI输入事件的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t pointerIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示多点触控数据列表的序号。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t historyIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示历史事件数据列表的序号。"
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
            children: "float"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回在指向性输入事件中，特定历史事件内特定接触点相对于当前组件左上角的X坐标，单位为px。如果参数异常则返回0.0f。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_pointerevent_gethistoryy",
      children: "OH_ArkUI_PointerEvent_GetHistoryY()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float OH_ArkUI_PointerEvent_GetHistoryY(const ArkUI_UIInputEvent* event, uint32_t pointerIndex, uint32_t historyIndex)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从指向性输入事件（如触摸事件、鼠标事件、轴事件）中获取特定历史事件中特定接触点相对于当前组件左上角的Y坐标。"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向当前UI输入事件的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t pointerIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示多点触控数据列表的序号。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t historyIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示历史事件数据列表的序号。"
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
            children: "float"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回在指向性输入事件中，特定历史事件内特定接触点相对于当前组件左上角的Y坐标，单位为px。如果参数异常则返回0.0f。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_pointerevent_gethistorywindowx",
      children: "OH_ArkUI_PointerEvent_GetHistoryWindowX()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float OH_ArkUI_PointerEvent_GetHistoryWindowX(const ArkUI_UIInputEvent* event, uint32_t pointerIndex, uint32_t historyIndex)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从指向性输入事件（如触摸事件、鼠标事件、轴事件）中获取特定历史事件中特定接触点相对于当前应用窗口左上角的X坐标。"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向当前UI输入事件的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t pointerIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示多点触控数据列表的序号。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t historyIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示历史事件数据列表的序号。"
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
            children: "float"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回在指向性输入事件中，特定历史事件内特定接触点相对于当前应用窗口左上角的X坐标，单位为px。如果参数异常则返回0.0f。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_pointerevent_gethistorywindowy",
      children: "OH_ArkUI_PointerEvent_GetHistoryWindowY()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float OH_ArkUI_PointerEvent_GetHistoryWindowY(const ArkUI_UIInputEvent* event, uint32_t pointerIndex, uint32_t historyIndex)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从指向性输入事件（如触摸事件、鼠标事件、轴事件）中获取特定历史事件中特定接触点相对于当前应用窗口左上角的Y坐标。"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向当前UI输入事件的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t pointerIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示多点触控数据列表的序号。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t historyIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示历史事件数据列表的序号。"
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
            children: "float"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回在指向性输入事件中，特定历史事件内特定接触点相对于当前应用窗口左上角的Y坐标，单位为px。如果参数异常则返回0.0f。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_pointerevent_gethistorydisplayx",
      children: "OH_ArkUI_PointerEvent_GetHistoryDisplayX()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float OH_ArkUI_PointerEvent_GetHistoryDisplayX(const ArkUI_UIInputEvent* event, uint32_t pointerIndex, uint32_t historyIndex)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从指向性输入事件（如触摸事件、鼠标事件、轴事件）中获取特定历史事件中特定接触点相对于当前屏幕左上角的X坐标。"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向当前UI输入事件的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t pointerIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示多点触控数据列表的序号。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t historyIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示历史事件数据列表的序号。"
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
            children: "float"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回在指向性输入事件中，特定历史事件内特定接触点相对于当前屏幕左上角的X坐标，单位为px。如果参数异常则返回0.0f。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_pointerevent_gethistorydisplayy",
      children: "OH_ArkUI_PointerEvent_GetHistoryDisplayY()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float OH_ArkUI_PointerEvent_GetHistoryDisplayY(const ArkUI_UIInputEvent* event, uint32_t pointerIndex, uint32_t historyIndex)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从指向性输入事件（如触摸事件、鼠标事件、轴事件）中获取特定历史事件中特定接触点相对于当前屏幕左上角的Y坐标。"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向当前UI输入事件的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t pointerIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示多点触控数据列表的序号。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t historyIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示历史事件数据列表的序号。"
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
            children: "float"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回在指向性输入事件中，特定历史事件内特定接触点相对于当前屏幕左上角的Y坐标，单位为px。如果参数异常则返回0.0f。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_pointerevent_gethistoryglobaldisplayx",
      children: "OH_ArkUI_PointerEvent_GetHistoryGlobalDisplayX()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float OH_ArkUI_PointerEvent_GetHistoryGlobalDisplayX(const ArkUI_UIInputEvent* event, uint32_t pointerIndex, uint32_t historyIndex)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从给定指针索引和历史记录索引的输入事件（如触摸事件、鼠标事件、轴事件）中获取历史事件中相对于全局显示的特定触摸点的X坐标。只能从指针事件中获取位置信息，对于鼠标和轴事件，当给定的pointerIndex大于0时，始终返回默认值0.0f。"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向当前UI输入事件的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t pointerIndex"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示多点触控数据列表中目标触控点的索引。有效值范围[0, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_pointerevent_getpointercount",
              children: "OH_ArkUI_PointerEvent_GetPointerCount()"
            }), " - 1]"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t historyIndex"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示要返回的历史值，必须小于", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-ui-input-event-h/capi-ui-input-event-h#oh_arkui_pointerevent_gethistorysize",
              children: "OH_ArkUI_PointerEvent_GetHistorySize"
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
            children: "float"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回在指向性输入事件中，特定历史事件内特定接触点相对于全局显示的X坐标，单位为px。如果发生任何参数错误，则返回0.0f。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_pointerevent_gethistoryglobaldisplayy",
      children: "OH_ArkUI_PointerEvent_GetHistoryGlobalDisplayY()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float OH_ArkUI_PointerEvent_GetHistoryGlobalDisplayY(const ArkUI_UIInputEvent* event, uint32_t pointerIndex, uint32_t historyIndex)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从给定指针索引和历史记录索引的输入事件（如触摸事件、鼠标事件、轴事件）中获取历史事件中相对于全局显示的特定触摸点的Y坐标。只能从指针事件中获取位置信息，对于鼠标和轴事件，当给定的pointerIndex大于0时，始终返回默认值0.0f。"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向当前UI输入事件的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t pointerIndex"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示多点触控数据列表中目标触控点的索引。有效值范围[0, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_pointerevent_getpointercount",
              children: "OH_ArkUI_PointerEvent_GetPointerCount()"
            }), " - 1]"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t historyIndex"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示要返回的历史值，必须小于", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-ui-input-event-h/capi-ui-input-event-h#oh_arkui_pointerevent_gethistorysize",
              children: "OH_ArkUI_PointerEvent_GetHistorySize"
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
            children: "float"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回在指向性输入事件中，特定历史事件内特定接触点相对于全局显示的Y坐标，单位为px。如果发生任何参数错误，则返回0.0f。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_pointerevent_gethistorypressure",
      children: "OH_ArkUI_PointerEvent_GetHistoryPressure()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float OH_ArkUI_PointerEvent_GetHistoryPressure(const ArkUI_UIInputEvent* event, uint32_t pointerIndex, uint32_t historyIndex)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从指向性输入事件（如触摸事件）中获取特定历史事件中的触屏压力。"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向当前UI输入事件的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t pointerIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示多点触控数据列表中的序号。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t historyIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示历史事件数据列表的序号。"
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
            children: "float"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回当前指向性输入事件产生的触屏压力。取值范围为[0, 1]，压感大小与数值正相关。如果参数异常则返回默认值0.0f。在部分设备中，由于设备的硬件参数配置不同，可能会返回大于1的值。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_pointerevent_gethistorytiltx",
      children: "OH_ArkUI_PointerEvent_GetHistoryTiltX()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float OH_ArkUI_PointerEvent_GetHistoryTiltX(const ArkUI_UIInputEvent* event, uint32_t pointerIndex, uint32_t historyIndex)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从指向性输入事件（如触摸事件）中获取特定历史事件中的相对YZ平面的角度，取值的范围[-90, 90]，单位为deg，其中正值是向右倾斜。"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向当前UI输入事件的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t pointerIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示多点触控数据列表中的序号。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t historyIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示历史事件数据列表的序号。"
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
            children: "float"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回当前指向性输入事件中相对YZ平面的角度。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_pointerevent_gethistorytilty",
      children: "OH_ArkUI_PointerEvent_GetHistoryTiltY()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float OH_ArkUI_PointerEvent_GetHistoryTiltY(const ArkUI_UIInputEvent* event, uint32_t pointerIndex, uint32_t historyIndex)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从指向性输入事件（如触摸事件）中获取特定历史事件中的相对XZ平面的角度，值的范围[-90, 90]，单位为deg，其中正值是向下倾斜。"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向当前UI输入事件的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t pointerIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示多点触控数据列表中的序号。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t historyIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示历史事件数据列表的序号。"
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
            children: "float"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回当前指向性输入事件中相对XZ平面的角度。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_pointerevent_gethistorytouchareawidth",
      children: "OH_ArkUI_PointerEvent_GetHistoryTouchAreaWidth()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float OH_ArkUI_PointerEvent_GetHistoryTouchAreaWidth(const ArkUI_UIInputEvent* event, uint32_t pointerIndex, uint32_t historyIndex)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从指向性输入事件（如触摸事件）中获取特定历史事件中的触屏区域的宽度。"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向当前UI输入事件的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t pointerIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示多点触控数据列表中的序号。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t historyIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示历史事件数据列表的序号。"
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
            children: "float"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回当前指向性输入事件中触屏区域的宽度，单位为px。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_pointerevent_gethistorytouchareaheight",
      children: "OH_ArkUI_PointerEvent_GetHistoryTouchAreaHeight()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float OH_ArkUI_PointerEvent_GetHistoryTouchAreaHeight(const ArkUI_UIInputEvent* event, uint32_t pointerIndex, uint32_t historyIndex)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从指向性输入事件（如触摸事件）中获取特定历史事件中的触屏区域的高度。"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向当前UI输入事件的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t pointerIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示多点触控数据列表中的序号。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t historyIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示历史事件数据列表的序号。"
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
            children: "float"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回当前指向性输入事件中触屏区域的高度，单位为px。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_axisevent_getverticalaxisvalue",
      children: "OH_ArkUI_AxisEvent_GetVerticalAxisValue()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "double OH_ArkUI_AxisEvent_GetVerticalAxisValue(const ArkUI_UIInputEvent* event)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取当前轴事件的垂直滚动轴的值。通常由鼠标滚轮，或用户在触控板上双指竖向滑动产生。当通过鼠标滚动触发时：1.上报的数值单位为角度，为单次滚动角度增量，非滚动总量；2.上报的数值已与用户配置的放大系数", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-ui-input-event-h/capi-ui-input-event-h#oh_arkui_axisevent_getscrollstep",
        children: "OH_ArkUI_AxisEvent_GetScrollStep"
      }), "叠加运算；3.数值的正负代表方向，向前滚动鼠标滚轮时上报数值为负数，向后滚动鼠标滚轮时上报数值为正数；当通过触控板双指竖向滑动时：1.上报的数值单位为PX，为单次滚动增量，非滚动总量；2.上报的数值不受用户配置的放大系数", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-ui-input-event-h/capi-ui-input-event-h#oh_arkui_axisevent_getscrollstep",
        children: "OH_ArkUI_AxisEvent_GetScrollStep"
      }), "影响；3.数值的正负代表方向，双指从上往下滑动时上报数值为负数，双指从下往上滑动时上报数值为正数；4.方向会受系统设置中\"自然滚动\"配置的影响。通常情况下，垂直滚动轴事件只能驱动竖向的滑动手势响应，但当鼠标指针下命中的可滑动手势里，如果可响应的方向都是一致的，那么垂直滚动轴事件可以驱动这些滑动手势得到响应，即使这些手势所定义的方向是横向的。"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向当前UI输入事件的指针。"
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
            children: "double"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回当前轴事件的垂直滚动轴的值，如果参数异常则返回0.0。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_axisevent_gethorizontalaxisvalue",
      children: "OH_ArkUI_AxisEvent_GetHorizontalAxisValue()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "double OH_ArkUI_AxisEvent_GetHorizontalAxisValue(const ArkUI_UIInputEvent* event)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取当前轴事件的水平滚动轴的值，通过在触控板上双指横向滑动产生。1.上报的数值单位为PX，为单次滚动增量，非滚动总量；2.上报的数值不受用户配置的放大系数", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-ui-input-event-h/capi-ui-input-event-h#oh_arkui_axisevent_getscrollstep",
        children: "OH_ArkUI_AxisEvent_GetScrollStep"
      }), "影响；3.数值的正负代表方向，双指从左往右滑动时上报数值为负数，双指从右往左滑动时上报数值为正数；4.方向会受系统设置中\"自然滚动\"配置的影响。"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向当前UI输入事件的指针。"
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
            children: "double"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回当前轴事件的水平滚动轴的值，如果参数异常则返回0.0。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_axisevent_getpinchaxisscalevalue",
      children: "OH_ArkUI_AxisEvent_GetPinchAxisScaleValue()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "double OH_ArkUI_AxisEvent_GetPinchAxisScaleValue(const ArkUI_UIInputEvent* event)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前轴事件的捏合轴缩放的值。通过触控板双指缩放/捏合操作产生。上报的scale数值，为相对于初始状态时的当前scale值。初始状态为系统识别到用户通过触控板发生了捏合操作时的两指位置状态，此时的scale数值为1.0。在手指抬起前的本次捏合操作过程中，所上报的scale数值均将初始状态作为参考系，从初始状态往中心捏合，则上报的scale会从1.0逐步往0.0缩小；当从初始化状态往外扩大双指距离时，会从1.0逐步变大。"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向当前UI输入事件的指针。"
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
            children: "double"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回当前轴事件的捏合轴缩放的值，如果参数异常则返回0.0。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_axisevent_getaxisaction",
      children: "OH_ArkUI_AxisEvent_GetAxisAction()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_AxisEvent_GetAxisAction(const ArkUI_UIInputEvent* event)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前轴事件的操作类型。"
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向当前UI输入事件的指针。"
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
            children: ["返回当前轴事件的操作类型，取值可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#anonymous7",
              children: "anonymous7"
            }), "。当输入非轴事件时，默认返回0。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_axisevent_hasaxis",
      children: "OH_ArkUI_AxisEvent_HasAxis()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_AxisEvent_HasAxis(const ArkUI_UIInputEvent* event, int32_t axis)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检测此轴事件是否包含指定的轴类型。"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向当前UI输入事件的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t axis"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示轴事件的轴类型", (0,jsx_runtime.jsx)(_components.a, {
              href: "#anonymous8",
              children: "UI_AXIS_TYPE_XXX"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
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
            children: "返回此轴事件是否包含指定的轴类型。返回true表示包含指定的轴类型，返回false表示不包含指定的轴类型。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_pointerevent_setintercepthittestmode",
      children: "OH_ArkUI_PointerEvent_SetInterceptHitTestMode()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_PointerEvent_SetInterceptHitTestMode(const ArkUI_UIInputEvent* event, HitTestMode mode)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["配置触摸测试模式。仅适用于接收基础事件的场景，如使用NODE_ON_TOUCH接收触摸事件场景。对于通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-gesture-h/capi-native-gesture-h#oh_arkui_gestureevent_getrawinputevent",
        children: "OH_ArkUI_GestureEvent_GetRawInputEvent"
      }), "接口从一个手势事件中获取到的ArkUI_UIInputEvent对象，无法使用该接口。"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向当前UI输入事件的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-ui-input-event-h/capi-ui-input-event-h#hittestmode",
              children: "HitTestMode"
            }), " mode"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指定触摸测试模式，参数类型", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-ui-input-event-h/capi-ui-input-event-h#hittestmode",
              children: "HitTestMode"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回执行的状态代码。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_mouseevent_getmousebutton",
      children: "OH_ArkUI_MouseEvent_GetMouseButton()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_MouseEvent_GetMouseButton(const ArkUI_UIInputEvent* event)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取鼠标事件的按键类型的值。"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向当前UI输入事件的指针。"
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
            children: ["返回鼠标按键类型，取值由", (0,jsx_runtime.jsx)(_components.a, {
              href: "#anonymous5",
              children: "anonymous5"
            }), "枚举定义，但在非鼠标事件中调用时返回值为-1。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_mouseevent_getmouseaction",
      children: "OH_ArkUI_MouseEvent_GetMouseAction()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_MouseEvent_GetMouseAction(const ArkUI_UIInputEvent* event)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取鼠标事件的鼠标动作类型的值。"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向当前UI输入事件的指针。"
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
            children: ["返回鼠标动作类型，取值由", (0,jsx_runtime.jsx)(_components.a, {
              href: "#anonymous4",
              children: "anonymous4"
            }), "枚举定义，但在非鼠标事件中调用时返回值为-1。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_pointerevent_setstoppropagation",
      children: "OH_ArkUI_PointerEvent_SetStopPropagation()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_PointerEvent_SetStopPropagation(const ArkUI_UIInputEvent* event, bool stopPropagation)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置是否阻止事件冒泡。仅适用于接收基础事件的场景，如使用NODE_ON_TOUCH接收触摸事件场景，不适用于轴事件。对于通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-gesture-h/capi-native-gesture-h#oh_arkui_gestureevent_getrawinputevent",
        children: "OH_ArkUI_GestureEvent_GetRawInputEvent"
      }), "接口从一个手势事件中获取到的ArkUI_UIInputEvent对象，无法使用该接口。"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向当前UI输入事件的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool stopPropagation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示是否阻止事件冒泡。true表示阻止事件冒泡，false表示不阻止事件冒泡。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回执行的状态代码。返回0表示设置成功，如果返回401，表示返回失败，可能的原因是参数异常，例如event是一个空指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_uiinputevent_getdeviceid",
      children: "OH_ArkUI_UIInputEvent_GetDeviceId()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_UIInputEvent_GetDeviceId(const ArkUI_UIInputEvent* event)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前UI输入事件的设备ID。"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkUI_UIInputEvent事件指针。"
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
            children: "当前UI输入事件的设备ID。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_uiinputevent_getpressedkeys",
      children: "OH_ArkUI_UIInputEvent_GetPressedKeys()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_UIInputEvent_GetPressedKeys(const ArkUI_UIInputEvent* event, int32_t* pressedKeyCodes, int32_t* length)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取所有按下的按键，当前只支持按键事件。"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkUI_UIInputEvent事件指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t* pressedKeyCodes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出参数，表示所有按下键的数组，指向的内存空间需要调用者申请。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t* length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "作为输入参数表示传入的pressedKeyCodes数组长度，作为输出参数表示实际按下按键的个数。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["错误码。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_NO_ERROR"
            }), " 成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_BUFFER_SIZE_NOT_ENOUGH"
            }), " 内存分配不足。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_PARAM_INVALID"
            }), " 函数参数异常。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_focusaxisevent_getaxisvalue",
      children: "OH_ArkUI_FocusAxisEvent_GetAxisValue()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "double OH_ArkUI_FocusAxisEvent_GetAxisValue(const ArkUI_UIInputEvent* event, int32_t axis)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取焦点轴事件的轴值。"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkUI_UIInputEvent事件指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t axis"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["焦点轴事件的轴类型，取值可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#anonymous6",
              children: "anonymous6"
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
            children: "double"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "焦点轴事件的轴值，如果参数异常则返回0.0。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_focusaxisevent_setstoppropagation",
      children: "OH_ArkUI_FocusAxisEvent_SetStopPropagation()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_FocusAxisEvent_SetStopPropagation(const ArkUI_UIInputEvent* event, bool stopPropagation)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置是否阻止焦点轴事件冒泡。"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向当前UI输入事件的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool stopPropagation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示是否阻止事件冒泡。true表示阻止事件冒泡，false表示不阻止事件冒泡。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["错误码。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_NO_ERROR"
            }), " 成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_PARAM_INVALID"
            }), " 参数异常。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_uiinputevent_getmodifierkeystates",
      children: "OH_ArkUI_UIInputEvent_GetModifierKeyStates()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_UIInputEvent_GetModifierKeyStates(const ArkUI_UIInputEvent* event, uint64_t* keys)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取UI输入事件的修饰键状态。该接口会通过keys传出当前事件发生时所有修饰键的状态，你可以通过与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-ui-input-event-h/capi-ui-input-event-h#arkui_modifierkeyname",
        children: "ArkUI_ModifierKeyName"
      }), "中定义的修饰键类型进行位计算操作获取哪些键处于按下状态。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 17"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkUI_UIInputEvent事件指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint64_t* keys"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回当前处于按下状态的修饰键组合，应用可通过位运算进行判断。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["错误码。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_NO_ERROR"
            }), " 成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_PARAM_INVALID"
            }), " 函数参数异常。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_axisevent_setpropagation",
      children: "OH_ArkUI_AxisEvent_SetPropagation()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_AxisEvent_SetPropagation(const ArkUI_UIInputEvent* event, bool propagation)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置是否使能轴事件冒泡。默认不会进行冒泡传递，仅发送给第一个可响应轴事件的控件。可在接收到轴事件时，主动使能冒泡传递，以便当前事件可以继续传递给响应链上的下一个可响应轴事件的祖先组件处理。不支持对从手势事件中获取到的轴事件进行设置。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 17"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向当前 UI 输入事件的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool propagation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示是否激活事件冒泡。true表示激活事件冒泡，false表示不激活事件冒泡。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["错误码。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_NO_ERROR"
            }), " 成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_PARAM_INVALID"
            }), " 参数异常。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_axisevent_getscrollstep",
      children: "OH_ArkUI_AxisEvent_GetScrollStep()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_AxisEvent_GetScrollStep(const ArkUI_UIInputEvent* event)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取滚动轴事件的滚动步长系数，适用于鼠标滚轮产生的轴事件。这个值可以告诉你用户所配置的滚动放大系数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 17"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向 ArkUI_UIInputEvent事件指针。"
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
            children: "返回鼠标滚轮轴滚动步长配置。在非鼠标事件返回默认值0。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_uiinputevent_geteventtargetwidth",
      children: "OH_ArkUI_UIInputEvent_GetEventTargetWidth()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float OH_ArkUI_UIInputEvent_GetEventTargetWidth(const ArkUI_UIInputEvent* event)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取事件命中的组件的宽度。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 17"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向ArkUI_UIInputEvent对象的指针。"
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
            children: "返回事件命中的组件的宽度，单位为px；如果发生任何参数错误，则返回 0.0f。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_uiinputevent_geteventtargetheight",
      children: "OH_ArkUI_UIInputEvent_GetEventTargetHeight()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float OH_ArkUI_UIInputEvent_GetEventTargetHeight(const ArkUI_UIInputEvent* event)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取事件命中的组件的高度。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 17"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向ArkUI_UIInputEvent对象的指针。"
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
            children: "返回事件命中的组件的高度，单位为px；如果发生任何参数错误，则返回 0.0f。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_uiinputevent_geteventtargetpositionx",
      children: "OH_ArkUI_UIInputEvent_GetEventTargetPositionX()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float OH_ArkUI_UIInputEvent_GetEventTargetPositionX(const ArkUI_UIInputEvent* event)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取事件命中的组件的X坐标。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 17"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向ArkUI_UIInputEvent对象的指针。"
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
            children: "返回事件命中的组件的X坐标，单位为px；如果发生任何参数错误，则返回 0.0f。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_uiinputevent_geteventtargetpositiony",
      children: "OH_ArkUI_UIInputEvent_GetEventTargetPositionY()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float OH_ArkUI_UIInputEvent_GetEventTargetPositionY(const ArkUI_UIInputEvent* event)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取事件命中的组件的Y坐标。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 17"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向ArkUI_UIInputEvent对象的指针。"
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
            children: "返回事件命中的组件的Y坐标，单位为px；如果发生任何参数错误，则返回 0.0f。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_uiinputevent_geteventtargetglobalpositionx",
      children: "OH_ArkUI_UIInputEvent_GetEventTargetGlobalPositionX()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float OH_ArkUI_UIInputEvent_GetEventTargetGlobalPositionX(const ArkUI_UIInputEvent* event)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取事件命中的组件的全局X坐标。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 17"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向ArkUI_UIInputEvent对象的指针。"
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
            children: "返回事件命中的组件的全局X坐标，单位为px；如果发生任何参数错误，则返回 0.0f。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_uiinputevent_geteventtargetglobalpositiony",
      children: "OH_ArkUI_UIInputEvent_GetEventTargetGlobalPositionY()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float OH_ArkUI_UIInputEvent_GetEventTargetGlobalPositionY(const ArkUI_UIInputEvent* event)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取事件命中的组件的全局Y坐标。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 17"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向ArkUI_UIInputEvent对象的指针。"
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
            children: "返回事件命中的组件的全局Y坐标，单位为px；如果发生任何参数错误，则返回 0.0f。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_pointerevent_getpressedtimebyindex",
      children: "OH_ArkUI_PointerEvent_GetPressedTimeByIndex()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int64_t OH_ArkUI_PointerEvent_GetPressedTimeByIndex(const ArkUI_UIInputEvent* event, uint32_t pointerIndex)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取指定触点的按下时间。仅对触摸事件有效。"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkUI_UIInputEvent事件指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t pointerIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指示多点触控数据列表中目标触控点的索引。"
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
            children: "int64_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回特定触摸点的按下时间，单位为ns；如果发生任何参数错误，则返回0。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_mouseevent_getrawdeltax",
      children: "OH_ArkUI_MouseEvent_GetRawDeltaX()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float OH_ArkUI_MouseEvent_GetRawDeltaX(const ArkUI_UIInputEvent* event)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取鼠标设备在二维平面X轴的移动增量。其数值为鼠标硬件的原始移动数据，使用物理世界中鼠标移动的距离单位进行表示。上报数值由硬件本身决定，并非屏幕的物理/逻辑像素。"
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkUI_UIInputEvent事件指针。"
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
            children: "返回鼠标设备在二维平面X轴的移动增量，使用物理世界中鼠标移动的距离单位进行表示；如果发生任何参数错误，则返回0.0f。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_mouseevent_getrawdeltay",
      children: "OH_ArkUI_MouseEvent_GetRawDeltaY()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float OH_ArkUI_MouseEvent_GetRawDeltaY(const ArkUI_UIInputEvent* event)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取鼠标设备在二维平面Y轴的移动增量。其数值为鼠标硬件的原始移动数据，使用物理世界中鼠标移动的距离单位进行表示。上报数值由硬件本身决定，并非屏幕的物理/逻辑像素。"
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkUI_UIInputEvent事件指针。"
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
            children: "返回鼠标设备在二维平面Y轴的移动增量，使用物理世界中鼠标移动的距离单位进行表示；如果发生任何参数错误，则返回0.0f。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_mouseevent_getpressedbuttons",
      children: "OH_ArkUI_MouseEvent_GetPressedButtons()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_MouseEvent_GetPressedButtons(const ArkUI_UIInputEvent* event, int32_t* pressedButtons, int32_t* length)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从鼠标事件中获取按下的按键。"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkUI_UIInputEvent事件指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t* pressedButtons"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指示按下按键的列表。需要先创建一个int数组，用来储存按下的按键，按键的值请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#anonymous5",
              children: "anonymous5"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t* length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指示列表数组的总长度。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回结果代码。  如果操作成功，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_NO_ERROR"
            }), "。  如果传入的缓冲区大小异常，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_BUFFER_SIZE_ERROR"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_uiinputevent_gettargetdisplayid",
      children: "OH_ArkUI_UIInputEvent_GetTargetDisplayId()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_UIInputEvent_GetTargetDisplayId(const ArkUI_UIInputEvent* event)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取发生UI输入事件的屏幕ID。"
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkUI_UIInputEvent事件指针。"
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
            children: "返回屏幕ID；如果发生任何参数错误，则返回0。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_hoverevent_ishovered",
      children: "OH_ArkUI_HoverEvent_IsHovered()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "bool OH_ArkUI_HoverEvent_IsHovered(const ArkUI_UIInputEvent* event)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取鼠标是否悬浮在当前组件上"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 17"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkUI_UIInputEvent事件指针。"
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
            children: "bool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果鼠标悬浮在当前组件上则返回true。  如果鼠标没有悬浮在当前组件上，返回false"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_pointerevent_createclonedevent",
      children: "OH_ArkUI_PointerEvent_CreateClonedEvent()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_PointerEvent_CreateClonedEvent(const ArkUI_UIInputEvent* event, ArkUI_UIInputEvent** clonedEvent)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基于原始事件指针创建克隆事件指针。仅对触摸事件有效。"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkUI_UIInputEvent事件指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "ArkUI_UIInputEvent"
            }), "** clonedEvent"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkUI_UIInputEvent克隆事件指针。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回结果代码。  如果操作成功，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_NO_ERROR"
            }), "。  如果入参错误，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_PARAM_INVALID"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_pointerevent_destroyclonedevent",
      children: "OH_ArkUI_PointerEvent_DestroyClonedEvent()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_PointerEvent_DestroyClonedEvent(const ArkUI_UIInputEvent* event)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "销毁克隆事件指针。"
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkUI_UIInputEvent事件指针。"
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
            children: ["返回结果代码。  如果操作成功，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_NO_ERROR"
            }), "。  如果入参错误，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_PARAM_INVALID"
            }), "。  如果输入的事件指针不是克隆事件指针，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_NOT_CLONED_POINTER_EVENT"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_pointerevent_setclonedeventlocalposition",
      children: "OH_ArkUI_PointerEvent_SetClonedEventLocalPosition()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_PointerEvent_SetClonedEventLocalPosition(const ArkUI_UIInputEvent* event, float x, float y)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置指向性事件相对于当前组件左上角的X坐标和Y坐标。"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkUI_UIInputEvent事件指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前指向性输入事件相对于当前组件左上角的X坐标，单位为px。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前指向性输入事件相对于当前组件左上角的Y坐标，单位为px。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回结果代码。  如果操作成功，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_NO_ERROR"
            }), "。  如果入参错误，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_PARAM_INVALID"
            }), "。  如果输入的事件指针不是克隆事件指针，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_NOT_CLONED_POINTER_EVENT"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_pointerevent_setclonedeventlocalpositionbyindex",
      children: "OH_ArkUI_PointerEvent_SetClonedEventLocalPositionByIndex()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_PointerEvent_SetClonedEventLocalPositionByIndex(const ArkUI_UIInputEvent* event, float x, float y, int32_t pointerIndex)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置指向性事件特有接触点相对于当前组件左上角的X坐标和Y坐标。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkUI_UIInputEvent事件指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前指向性输入事件相对于当前组件左上角的X坐标，单位为px。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前指向性输入事件相对于当前组件左上角的Y坐标，单位为px。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t pointerIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示多点触控数据列表中的序号。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回结果代码。  如果操作成功，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_NO_ERROR"
            }), "。  如果入参错误，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_PARAM_INVALID"
            }), "。  如果输入的事件指针不是克隆事件指针，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_NOT_CLONED_POINTER_EVENT"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_pointerevent_setclonedeventactiontype",
      children: "OH_ArkUI_PointerEvent_SetClonedEventActionType()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_PointerEvent_SetClonedEventActionType(const ArkUI_UIInputEvent* event, int32_t actionType)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置当前带有指向性的克隆输入事件的事件类型。"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkUI_UIInputEvent事件指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t actionType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkUI_UIInputEvent克隆事件类型。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回结果代码。  如果操作成功，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_NO_ERROR"
            }), "。  如果入参错误，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_PARAM_INVALID"
            }), "。  如果输入的事件指针不是克隆事件指针，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_NOT_CLONED_POINTER_EVENT"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_pointerevent_setclonedeventchangedfingerid",
      children: "OH_ArkUI_PointerEvent_SetClonedEventChangedFingerId()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_PointerEvent_SetClonedEventChangedFingerId(const ArkUI_UIInputEvent* event, int32_t fingerId)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置当前带有指向性的克隆输入事件的触摸点ID。"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkUI_UIInputEvent事件指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t fingerId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "触发当前事件指针的触摸点ID。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回结果代码。  如果操作成功，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_NO_ERROR"
            }), "。  如果入参错误，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_PARAM_INVALID"
            }), "。  如果输入的事件指针不是克隆事件指针，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_NOT_CLONED_POINTER_EVENT"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_pointerevent_setclonedeventfingeridbyindex",
      children: "OH_ArkUI_PointerEvent_SetClonedEventFingerIdByIndex()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_PointerEvent_SetClonedEventFingerIdByIndex(const ArkUI_UIInputEvent* event, int32_t fingerId, int32_t pointerIndex)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置带有指向性的克隆输入事件特定接触点的触摸点ID。"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkUI_UIInputEvent事件指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t fingerId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向性的输入事件特定接触点的触摸点ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t pointerIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示多点触控数据列表中的序号。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回结果代码。  如果操作成功，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_NO_ERROR"
            }), "。  如果入参错误，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_PARAM_INVALID"
            }), "。  如果输入的事件指针不是克隆事件指针，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_NOT_CLONED_POINTER_EVENT"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_pointerevent_postclonedevent",
      children: "OH_ArkUI_PointerEvent_PostClonedEvent()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_PointerEvent_PostClonedEvent(ArkUI_NodeHandle node, const ArkUI_UIInputEvent* event)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "转发克隆事件到特定节点。"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-node8h/capi-arkui-nativemodule-arkui-node8h",
              children: "ArkUI_NodeHandle"
            }), " node"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "目标节点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkUI_UIInputEvent事件指针。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回结果代码。  如果操作成功，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_NO_ERROR"
            }), "。  如果入参错误，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_PARAM_INVALID"
            }), "。  如果输入的事件指针不是克隆事件指针，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_NOT_CLONED_POINTER_EVENT"
            }), "。  如果组件状态异常，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_POST_CLONED_COMPONENT_STATUS_ABNORMAL"
            }), "。  如果未命中可响应事件的组件，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_POST_CLONED_NO_COMPONENT_HIT_TO_RESPOND_TO_THE_EVENT"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_uiinputevent_getlateststatus",
      children: "OH_ArkUI_UIInputEvent_GetLatestStatus()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ArkUI_ErrorCode OH_ArkUI_UIInputEvent_GetLatestStatus()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调用该方法获取最近一次UIInput相关方法的执行情况。通常情况下不需要使用该方法，仅在返回值结果不确定是否异常时使用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
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
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ArkUI_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回最近一次调用UIInput方法产生的结果代码。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_uiinputevent_getcoastingaxisevent",
      children: "OH_ArkUI_UIInputEvent_GetCoastingAxisEvent()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ArkUI_CoastingAxisEvent* OH_ArkUI_UIInputEvent_GetCoastingAxisEvent(ArkUI_UIInputEvent* event)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从组件事件中获取惯性滚动轴事件，仅当用户在触摸板上使用双指滑动一定距离并快速抬手，且指针位置下存在注册了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#arkui_nodeeventtype",
        children: "NODE_ON_COASTING_AXIS_EVENT"
      }), "事件的组件时，才能获取到有效事件。在从", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nodeevent/capi-arkui-nativemodule-arkui-nodeevent",
        children: "ArkUI_NodeEvent"
      }), "对象获取到", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
        children: "ArkUI_UIInputEvent"
      }), "对象后调用此方法。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["惯性滚动轴事件仅在双指抛滑并离开触控板时触发，因此仅支持触控板。惯性滚动轴事件会在手指离开触控板后，根据抛滑速度产生轴值逐渐衰减的事件。由于刷新频率和性能的影响，当前事件轴值可能高于或低于上一个事件值。在惯性滚动轴事件期间，以下四种行为会中断事件，并立即收到", (0,jsx_runtime.jsx)(_components.a, {
        href: "#arkui_coastingaxiseventphase",
        children: "ARKUI_COASTING_AXIS_EVENT_PHASE_END"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "手指触摸触控板。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "滚动鼠标滚轮。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["手指或鼠标点击注册了惯性滚动轴事件的节点。需要注意的是，点击未注册此事件的节点不会产生任何效果。例如，A节点注册了惯性滚动轴事件，当事件发生时，让B节点滚动，但点击B节点不会中断此事件。点击事件的中断行为受", (0,jsx_runtime.jsx)(_components.a, {
          href: "#oh_arkui_pointerevent_setintercepthittestmode",
          children: "HitTest模式"
        }), "的影响。此外，如果用户点击区域存在已收集的可响应惯性滚动轴事件的节点，本次惯性滚动轴事件会被强制终止。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用休眠（例如最小化、锁屏）。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkUI_UIInputEvent事件指针。"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-coastingaxisevent/capi-arkui-nativemodule-arkui-coastingaxisevent",
              children: "ArkUI_CoastingAxisEvent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回指向惯性滚动轴事件的指针，如果未发生任何惯性滚动轴事件或发生任何参数错误，则返回空指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_coastingaxisevent_geteventtime",
      children: "OH_ArkUI_CoastingAxisEvent_GetEventTime()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int64_t OH_ArkUI_CoastingAxisEvent_GetEventTime(ArkUI_CoastingAxisEvent* event)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取惯性滚动轴事件发生的时间。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-coastingaxisevent/capi-arkui-nativemodule-arkui-coastingaxisevent",
              children: "ArkUI_CoastingAxisEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkUI_CoastingAxisEvent事件指针。"
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
            children: "返回UI输入事件发生的时间，单位为ns；如果发生任何参数错误则返回0。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_coastingaxisevent_getphase",
      children: "OH_ArkUI_CoastingAxisEvent_GetPhase()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ArkUI_CoastingAxisEventPhase OH_ArkUI_CoastingAxisEvent_GetPhase(ArkUI_CoastingAxisEvent* event)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取惯性滚动轴事件发生时的滚动阶段。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-coastingaxisevent/capi-arkui-nativemodule-arkui-coastingaxisevent",
              children: "ArkUI_CoastingAxisEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkUI_CoastingAxisEvent事件指针。"
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
              href: "#arkui_coastingaxiseventphase",
              children: "ArkUI_CoastingAxisEventPhase"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回事件阶段，参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#arkui_coastingaxiseventphase",
              children: "ArkUI_CoastingAxisEventPhase"
            }), "。  如果发生任何参数错误则返回ARKUI_COASTING_AXIS_EVENT_PHASE_NONE。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_coastingaxisevent_getdeltay",
      children: "OH_ArkUI_CoastingAxisEvent_GetDeltaY"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float OH_ArkUI_CoastingAxisEvent_GetDeltaY(ArkUI_CoastingAxisEvent* event)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取惯性滚动轴事件垂直方向的增量值。单位为px，表示为单次滚动增量，非滚动总量。数值的正负代表方向，双指从上往下滑动时为负数，双指从下往上滑动时为正数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-coastingaxisevent/capi-arkui-nativemodule-arkui-coastingaxisevent",
              children: "ArkUI_CoastingAxisEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkUI_CoastingAxisEvent事件指针。"
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
            children: "返回Y轴增量值，以px为单位；如果发生任何参数错误则返回0.0f。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_coastingaxisevent_getdeltax",
      children: "OH_ArkUI_CoastingAxisEvent_GetDeltaX"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float OH_ArkUI_CoastingAxisEvent_GetDeltaX(ArkUI_CoastingAxisEvent* event)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取惯性滚动轴事件水平方向的增量值。单位为px，表示为单次滚动增量，非滚动总量。数值的正负代表方向，双指从左往右滑动时为负数，双指从右往左滑动时为正数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-coastingaxisevent/capi-arkui-nativemodule-arkui-coastingaxisevent",
              children: "ArkUI_CoastingAxisEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkUI_CoastingAxisEvent事件指针。"
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
            children: "返回X轴增量值，以px为单位；如果发生任何参数错误则返回0.0f。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_coastingaxisevent_setpropagation",
      children: "OH_ArkUI_CoastingAxisEvent_SetPropagation()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_CoastingAxisEvent_SetPropagation(ArkUI_CoastingAxisEvent* event, bool propagation)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置惯性滚动轴事件是否启用冒泡，默认禁止冒泡。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-coastingaxisevent/capi-arkui-nativemodule-arkui-coastingaxisevent",
              children: "ArkUI_CoastingAxisEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkUI_CoastingAxisEvent事件指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool propagation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否启用事件冒泡。true表示启用，false表示禁用。"
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回结果代码。  如果操作成功，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_NO_ERROR"
            }), "。  如果入参错误，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_PARAM_INVALID"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_touchtestinfo_gettouchtestinfolist",
      children: "OH_ArkUI_TouchTestInfo_GetTouchTestInfoList"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ArkUI_ErrorCode OH_ArkUI_TouchTestInfo_GetTouchTestInfoList(ArkUI_TouchTestInfo* info,\n    ArkUI_TouchTestInfoItemArray* array, int32_t* size);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取触摸测试信息项数组。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-touchtestinfo/capi-arkui-nativemodule-arkui-touchtestinfo",
              children: "ArkUI_TouchTestInfo"
            }), "* info"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向触摸测试信息的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/ui-nativemodule-arkui-touchtestinfoitemhandlearray/ui-nativemodule-arkui-touchtestinfoitemhandlearray",
              children: "ArkUI_TouchTestInfoItemArray"
            }), "* array"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向触摸测试信息项数组的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t* size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "触摸测试信息项数组的大小。"
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
            children: "ArkUI_ErrorCode"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回结果代码。  如果操作成功，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_NO_ERROR"
            }), "。  如果入参错误，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_PARAM_INVALID"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_touchtestinfoitem_getx",
      children: "OH_ArkUI_TouchTestInfoItem_GetX"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float OH_ArkUI_TouchTestInfoItem_GetX(const ArkUI_TouchTestInfoItem* info);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从触摸测试信息项中获取相对于子组件左上角的X坐标，单位为px。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-touchtestinfoitem/capi-arkui-nativemodule-arkui-touchtestinfoitem",
              children: "ArkUI_TouchTestInfoItem"
            }), "* info"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向触摸测试信息项的指针。"
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
            children: "相对于子组件左上角的X坐标，单位为px。若参数错误，返回0.0f。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_touchtestinfoitem_gety",
      children: "OH_ArkUI_TouchTestInfoItem_GetY"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float OH_ArkUI_TouchTestInfoItem_GetY(const ArkUI_TouchTestInfoItem* info);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从触摸测试信息项中获取相对于子组件左上角的Y坐标，单位为px。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-touchtestinfoitem/capi-arkui-nativemodule-arkui-touchtestinfoitem",
              children: "ArkUI_TouchTestInfoItem"
            }), "* info"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向触摸测试信息项的指针。"
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
            children: "相对于子组件左上角的Y坐标，单位为px。若参数错误，返回0.0f。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_touchtestinfoitem_getwindowx",
      children: "OH_ArkUI_TouchTestInfoItem_GetWindowX"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float OH_ArkUI_TouchTestInfoItem_GetWindowX(const ArkUI_TouchTestInfoItem* info);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从触摸测试信息项中获取相对于当前应用窗口左上角的X坐标，单位为px。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-touchtestinfoitem/capi-arkui-nativemodule-arkui-touchtestinfoitem",
              children: "ArkUI_TouchTestInfoItem"
            }), "* info"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向触摸测试信息项的指针。"
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
            children: "相对于当前应用窗口左上角的X坐标，单位为px。若参数错误，返回0.0f。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_touchtestinfoitem_getwindowy",
      children: "OH_ArkUI_TouchTestInfoItem_GetWindowY"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float OH_ArkUI_TouchTestInfoItem_GetWindowY(const ArkUI_TouchTestInfoItem* info);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从触摸测试信息项中获取相对于当前应用窗口左上角的Y坐标，单位为px。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-touchtestinfoitem/capi-arkui-nativemodule-arkui-touchtestinfoitem",
              children: "ArkUI_TouchTestInfoItem"
            }), "* info"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向触摸测试信息项的指针。"
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
            children: "相对于当前应用窗口左上角的Y坐标，单位为px。若参数错误，返回0.0f。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_touchtestinfoitem_getxrelativetoparent",
      children: "OH_ArkUI_TouchTestInfoItem_GetXRelativeToParent"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float OH_ArkUI_TouchTestInfoItem_GetXRelativeToParent(const ArkUI_TouchTestInfoItem* info);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从触摸测试信息项中获取相对于父组件左上角的X坐标，单位为px。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-touchtestinfoitem/capi-arkui-nativemodule-arkui-touchtestinfoitem",
              children: "ArkUI_TouchTestInfoItem"
            }), "* info"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向触摸测试信息项的指针。"
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
            children: "相对于父组件左上角的X坐标，单位为px。若参数错误，返回0.0f。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_touchtestinfoitem_getyrelativetoparent",
      children: "OH_ArkUI_TouchTestInfoItem_GetYRelativeToParent"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float OH_ArkUI_TouchTestInfoItem_GetYRelativeToParent(const ArkUI_TouchTestInfoItem* info);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从触摸测试信息项中获取相对于父组件左上角的Y坐标，单位为px。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-touchtestinfoitem/capi-arkui-nativemodule-arkui-touchtestinfoitem",
              children: "ArkUI_TouchTestInfoItem"
            }), "* info"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向触摸测试信息项的指针。"
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
            children: "相对于父组件左上角的Y坐标，单位为px。若参数错误，返回0.0f。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_touchtestinfoitem_getchildrect",
      children: "OH_ArkUI_TouchTestInfoItem_GetChildRect"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ArkUI_ErrorCode OH_ArkUI_TouchTestInfoItem_GetChildRect(const ArkUI_TouchTestInfoItem* info, ArkUI_Rect* childRect);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从触摸测试信息项中获取子组件的边界矩形信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-touchtestinfoitem/capi-arkui-nativemodule-arkui-touchtestinfoitem",
              children: "ArkUI_TouchTestInfoItem"
            }), "* info"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向触摸测试信息项的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-rect/capi-arkui-nativemodule-arkui-rect",
              children: "ArkUI_Rect"
            }), "* childRect"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向子组件边界矩形的指针，用于存储获取到的边界矩形信息。"
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
            children: "ArkUI_ErrorCode"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回结果代码。  如果操作成功，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_NO_ERROR"
            }), "。  如果入参错误，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_PARAM_INVALID"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_touchtestinfoitem_getchildid",
      children: "OH_ArkUI_TouchTestInfoItem_GetChildId"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ArkUI_ErrorCode OH_ArkUI_TouchTestInfoItem_GetChildId(const ArkUI_TouchTestInfoItem* info, char* buffer,\n    int32_t bufferSize);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从触摸测试信息项中获取子组件的ID。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-touchtestinfoitem/capi-arkui-nativemodule-arkui-touchtestinfoitem",
              children: "ArkUI_TouchTestInfoItem"
            }), "* info"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向触摸测试信息项的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "char* buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "存储结果的缓冲区。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t bufferSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缓冲区的大小。"
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
            children: "ArkUI_ErrorCode"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回结果代码。  如果操作成功，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_NO_ERROR"
            }), "。  如果入参错误，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_PARAM_INVALID"
            }), "。  如果缓冲区空间不足，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_BUFFER_SIZE_NOT_ENOUGH"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_touchtestinfo_settouchresultstrategy",
      children: "OH_ArkUI_TouchTestInfo_SetTouchResultStrategy"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ArkUI_ErrorCode OH_ArkUI_TouchTestInfo_SetTouchResultStrategy(ArkUI_TouchTestInfo* info, ArkUI_TouchTestStrategy strategy);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置触摸测试策略，即组件及其子组件在命中测试过程中的行为方式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-touchtestinfo/capi-arkui-nativemodule-arkui-touchtestinfo",
              children: "ArkUI_TouchTestInfo"
            }), "* info"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向触摸测试信息的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#arkui_touchteststrategy",
              children: "ArkUI_TouchTestStrategy"
            }), " strategy"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "触摸测试策略，定义组件及子组件在命中测试中的行为规则。"
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
            children: "ArkUI_ErrorCode"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回结果代码。  如果操作成功，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_NO_ERROR"
            }), "。  如果入参错误，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_PARAM_INVALID"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_touchtestinfo_settouchresultid",
      children: "OH_ArkUI_TouchTestInfo_SetTouchResultId"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ArkUI_ErrorCode OH_ArkUI_TouchTestInfo_SetTouchResultId(ArkUI_TouchTestInfo* info, const char* id);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置命中测试过程中需要作用的子组件ID。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-touchtestinfo/capi-arkui-nativemodule-arkui-touchtestinfo",
              children: "ArkUI_TouchTestInfo"
            }), "* info"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向触摸测试信息的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "子组件的ID，指定命中测试中需要作用的目标子组件。"
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
            children: "ArkUI_ErrorCode"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回结果代码。  如果操作成功，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_NO_ERROR"
            }), "。  如果入参错误，则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_PARAM_INVALID"
            }), "。"]
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