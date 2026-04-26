"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["543252"], {
220177(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_c_arkui_headerfile_capi_native_interface_xcomponent_h_capi_native_interface_xcomponent_h_md_11d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-c-arkui-headerfile-capi-native-interface-xcomponent-h-capi-native-interface-xcomponent-h-md-11d.json
var site_docs_ref_arkui_api_arkui_c_arkui_headerfile_capi_native_interface_xcomponent_h_capi_native_interface_xcomponent_h_md_11d_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h","title":"native_interface_xcomponent.h","description":"概述","source":"@site/docs-ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h.md","sourceDirName":"arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h","slug":"/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"title":"native_interface_xcomponent.h","sidebar_position":9,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-interface-xcomponent-h","kit":"应用框架","last_updated":"2026-04-22","slug":"capi-native-interface-xcomponent-h"},"sidebar":"ref","previous":{"title":"native_interface_focus.h","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-focus-h/capi-native-interface-focus-h"},"next":{"title":"native_key_event.h","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-key-event-h/capi-native-key-event-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h.md


const frontMatter = {
	title: 'native_interface_xcomponent.h',
	sidebar_position: 9,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-interface-xcomponent-h',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'capi-native-interface-xcomponent-h'
};
const contentTitle = 'native_interface_xcomponent.h';

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
  "value": "宏定义",
  "id": "宏定义",
  "level": 3
}, {
  "value": "函数",
  "id": "函数",
  "level": 3
}, {
  "value": "变量",
  "id": "变量",
  "level": 3
}, {
  "value": "枚举类型说明",
  "id": "枚举类型说明",
  "level": 2
}, {
  "value": "anonymous",
  "id": "anonymous",
  "level": 3
}, {
  "value": "ArkUI_XComponent_ImageAnalyzerState",
  "id": "arkui_xcomponent_imageanalyzerstate",
  "level": 3
}, {
  "value": "OH_NativeXComponent_TouchEventType",
  "id": "oh_nativexcomponent_toucheventtype",
  "level": 3
}, {
  "value": "OH_NativeXComponent_TouchPointToolType",
  "id": "oh_nativexcomponent_touchpointtooltype",
  "level": 3
}, {
  "value": "OH_NativeXComponent_EventSourceType",
  "id": "oh_nativexcomponent_eventsourcetype",
  "level": 3
}, {
  "value": "OH_NativeXComponent_MouseEventAction",
  "id": "oh_nativexcomponent_mouseeventaction",
  "level": 3
}, {
  "value": "OH_NativeXComponent_MouseEventButton",
  "id": "oh_nativexcomponent_mouseeventbutton",
  "level": 3
}, {
  "value": "OH_NativeXComponent_TouchEvent_SourceTool",
  "id": "oh_nativexcomponent_touchevent_sourcetool",
  "level": 3
}, {
  "value": "函数说明",
  "id": "函数说明",
  "level": 2
}, {
  "value": "OH_NativeXComponent_GetXComponentId()",
  "id": "oh_nativexcomponent_getxcomponentid",
  "level": 3
}, {
  "value": "OH_NativeXComponent_GetXComponentSize()",
  "id": "oh_nativexcomponent_getxcomponentsize",
  "level": 3
}, {
  "value": "OH_NativeXComponent_GetXComponentOffset()",
  "id": "oh_nativexcomponent_getxcomponentoffset",
  "level": 3
}, {
  "value": "OH_NativeXComponent_GetTouchEvent()",
  "id": "oh_nativexcomponent_gettouchevent",
  "level": 3
}, {
  "value": "OH_NativeXComponent_GetTouchPointToolType()",
  "id": "oh_nativexcomponent_gettouchpointtooltype",
  "level": 3
}, {
  "value": "OH_NativeXComponent_GetTouchPointTiltX()",
  "id": "oh_nativexcomponent_gettouchpointtiltx",
  "level": 3
}, {
  "value": "OH_NativeXComponent_GetTouchPointTiltY()",
  "id": "oh_nativexcomponent_gettouchpointtilty",
  "level": 3
}, {
  "value": "OH_NativeXComponent_GetTouchPointWindowX()",
  "id": "oh_nativexcomponent_gettouchpointwindowx",
  "level": 3
}, {
  "value": "OH_NativeXComponent_GetTouchPointWindowY()",
  "id": "oh_nativexcomponent_gettouchpointwindowy",
  "level": 3
}, {
  "value": "OH_NativeXComponent_GetTouchPointDisplayX()",
  "id": "oh_nativexcomponent_gettouchpointdisplayx",
  "level": 3
}, {
  "value": "OH_NativeXComponent_GetTouchPointDisplayY()",
  "id": "oh_nativexcomponent_gettouchpointdisplayy",
  "level": 3
}, {
  "value": "OH_NativeXComponent_GetHistoricalPoints()",
  "id": "oh_nativexcomponent_gethistoricalpoints",
  "level": 3
}, {
  "value": "OH_NativeXComponent_GetMouseEvent()",
  "id": "oh_nativexcomponent_getmouseevent",
  "level": 3
}, {
  "value": "OH_NativeXComponent_RegisterCallback()",
  "id": "oh_nativexcomponent_registercallback",
  "level": 3
}, {
  "value": "OH_NativeXComponent_RegisterMouseEventCallback()",
  "id": "oh_nativexcomponent_registermouseeventcallback",
  "level": 3
}, {
  "value": "OH_NativeXComponent_GetExtraMouseEventInfo()",
  "id": "oh_nativexcomponent_getextramouseeventinfo",
  "level": 3
}, {
  "value": "OH_NativeXComponent_GetMouseEventModifierKeyStates()",
  "id": "oh_nativexcomponent_getmouseeventmodifierkeystates",
  "level": 3
}, {
  "value": "OH_NativeXComponent_RegisterFocusEventCallback()",
  "id": "oh_nativexcomponent_registerfocuseventcallback",
  "level": 3
}, {
  "value": "OH_NativeXComponent_RegisterKeyEventCallback()",
  "id": "oh_nativexcomponent_registerkeyeventcallback",
  "level": 3
}, {
  "value": "OH_NativeXComponent_RegisterBlurEventCallback()",
  "id": "oh_nativexcomponent_registerblureventcallback",
  "level": 3
}, {
  "value": "OH_NativeXComponent_GetKeyEvent()",
  "id": "oh_nativexcomponent_getkeyevent",
  "level": 3
}, {
  "value": "OH_NativeXComponent_GetKeyEventAction()",
  "id": "oh_nativexcomponent_getkeyeventaction",
  "level": 3
}, {
  "value": "OH_NativeXComponent_GetKeyEventCode()",
  "id": "oh_nativexcomponent_getkeyeventcode",
  "level": 3
}, {
  "value": "OH_NativeXComponent_GetKeyEventSourceType()",
  "id": "oh_nativexcomponent_getkeyeventsourcetype",
  "level": 3
}, {
  "value": "OH_NativeXComponent_GetKeyEventDeviceId()",
  "id": "oh_nativexcomponent_getkeyeventdeviceid",
  "level": 3
}, {
  "value": "OH_NativeXComponent_GetKeyEventTimestamp()",
  "id": "oh_nativexcomponent_getkeyeventtimestamp",
  "level": 3
}, {
  "value": "OH_NativeXComponent_GetKeyEventModifierKeyStates()",
  "id": "oh_nativexcomponent_getkeyeventmodifierkeystates",
  "level": 3
}, {
  "value": "OH_NativeXComponent_GetKeyEventNumLockState()",
  "id": "oh_nativexcomponent_getkeyeventnumlockstate",
  "level": 3
}, {
  "value": "OH_NativeXComponent_GetKeyEventCapsLockState()",
  "id": "oh_nativexcomponent_getkeyeventcapslockstate",
  "level": 3
}, {
  "value": "OH_NativeXComponent_GetKeyEventScrollLockState()",
  "id": "oh_nativexcomponent_getkeyeventscrolllockstate",
  "level": 3
}, {
  "value": "OH_NativeXComponent_SetExpectedFrameRateRange()",
  "id": "oh_nativexcomponent_setexpectedframeraterange",
  "level": 3
}, {
  "value": "OH_NativeXComponent_RegisterOnFrameCallback()",
  "id": "oh_nativexcomponent_registeronframecallback",
  "level": 3
}, {
  "value": "OH_NativeXComponent_UnregisterOnFrameCallback()",
  "id": "oh_nativexcomponent_unregisteronframecallback",
  "level": 3
}, {
  "value": "OH_NativeXComponent_AttachNativeRootNode()",
  "id": "oh_nativexcomponent_attachnativerootnode",
  "level": 3
}, {
  "value": "OH_NativeXComponent_DetachNativeRootNode()",
  "id": "oh_nativexcomponent_detachnativerootnode",
  "level": 3
}, {
  "value": "OH_NativeXComponent_RegisterUIInputEventCallback()",
  "id": "oh_nativexcomponent_registeruiinputeventcallback",
  "level": 3
}, {
  "value": "OH_NativeXComponent_RegisterOnTouchInterceptCallback()",
  "id": "oh_nativexcomponent_registerontouchinterceptcallback",
  "level": 3
}, {
  "value": "OH_NativeXComponent_SetNeedSoftKeyboard()",
  "id": "oh_nativexcomponent_setneedsoftkeyboard",
  "level": 3
}, {
  "value": "OH_NativeXComponent_RegisterSurfaceShowCallback()",
  "id": "oh_nativexcomponent_registersurfaceshowcallback",
  "level": 3
}, {
  "value": "OH_NativeXComponent_RegisterSurfaceHideCallback()",
  "id": "oh_nativexcomponent_registersurfacehidecallback",
  "level": 3
}, {
  "value": "OH_NativeXComponent_GetTouchEventSourceType()",
  "id": "oh_nativexcomponent_gettoucheventsourcetype",
  "level": 3
}, {
  "value": "OH_NativeXComponent_GetNativeXComponent()",
  "id": "oh_nativexcomponent_getnativexcomponent",
  "level": 3
}, {
  "value": "OH_NativeXComponent_GetNativeAccessibilityProvider()",
  "id": "oh_nativexcomponent_getnativeaccessibilityprovider",
  "level": 3
}, {
  "value": "OH_NativeXComponent_RegisterKeyEventCallbackWithResult()",
  "id": "oh_nativexcomponent_registerkeyeventcallbackwithresult",
  "level": 3
}, {
  "value": "OH_ArkUI_XComponent_StartImageAnalyzer()",
  "id": "oh_arkui_xcomponent_startimageanalyzer",
  "level": 3
}, {
  "value": "OH_ArkUI_XComponent_StopImageAnalyzer()",
  "id": "oh_arkui_xcomponent_stopimageanalyzer",
  "level": 3
}, {
  "value": "OH_ArkUI_SurfaceHolder_Create()",
  "id": "oh_arkui_surfaceholder_create",
  "level": 3
}, {
  "value": "OH_ArkUI_SurfaceHolder_Dispose()",
  "id": "oh_arkui_surfaceholder_dispose",
  "level": 3
}, {
  "value": "OH_ArkUI_SurfaceHolder_SetUserData()",
  "id": "oh_arkui_surfaceholder_setuserdata",
  "level": 3
}, {
  "value": "OH_ArkUI_SurfaceHolder_GetUserData()",
  "id": "oh_arkui_surfaceholder_getuserdata",
  "level": 3
}, {
  "value": "OH_ArkUI_SurfaceCallback_Create()",
  "id": "oh_arkui_surfacecallback_create",
  "level": 3
}, {
  "value": "OH_ArkUI_SurfaceCallback_Dispose()",
  "id": "oh_arkui_surfacecallback_dispose",
  "level": 3
}, {
  "value": "OH_ArkUI_SurfaceCallback_SetSurfaceCreatedEvent()",
  "id": "oh_arkui_surfacecallback_setsurfacecreatedevent",
  "level": 3
}, {
  "value": "OH_ArkUI_SurfaceCallback_SetSurfaceChangedEvent()",
  "id": "oh_arkui_surfacecallback_setsurfacechangedevent",
  "level": 3
}, {
  "value": "OH_ArkUI_SurfaceCallback_SetSurfaceDestroyedEvent()",
  "id": "oh_arkui_surfacecallback_setsurfacedestroyedevent",
  "level": 3
}, {
  "value": "OH_ArkUI_SurfaceHolder_AddSurfaceCallback()",
  "id": "oh_arkui_surfaceholder_addsurfacecallback",
  "level": 3
}, {
  "value": "OH_ArkUI_SurfaceHolder_RemoveSurfaceCallback()",
  "id": "oh_arkui_surfaceholder_removesurfacecallback",
  "level": 3
}, {
  "value": "OH_ArkUI_XComponent_GetNativeWindow()",
  "id": "oh_arkui_xcomponent_getnativewindow",
  "level": 3
}, {
  "value": "OH_ArkUI_XComponent_SetAutoInitialize()",
  "id": "oh_arkui_xcomponent_setautoinitialize",
  "level": 3
}, {
  "value": "OH_ArkUI_XComponent_Initialize()",
  "id": "oh_arkui_xcomponent_initialize",
  "level": 3
}, {
  "value": "OH_ArkUI_XComponent_Finalize()",
  "id": "oh_arkui_xcomponent_finalize",
  "level": 3
}, {
  "value": "OH_ArkUI_XComponent_IsInitialized()",
  "id": "oh_arkui_xcomponent_isinitialized",
  "level": 3
}, {
  "value": "OH_ArkUI_XComponent_SetExpectedFrameRateRange()",
  "id": "oh_arkui_xcomponent_setexpectedframeraterange",
  "level": 3
}, {
  "value": "OH_ArkUI_XComponent_RegisterOnFrameCallback()",
  "id": "oh_arkui_xcomponent_registeronframecallback",
  "level": 3
}, {
  "value": "OH_ArkUI_XComponent_UnregisterOnFrameCallback()",
  "id": "oh_arkui_xcomponent_unregisteronframecallback",
  "level": 3
}, {
  "value": "OH_ArkUI_XComponent_SetNeedSoftKeyboard()",
  "id": "oh_arkui_xcomponent_setneedsoftkeyboard",
  "level": 3
}, {
  "value": "OH_ArkUI_AccessibilityProvider_Create()",
  "id": "oh_arkui_accessibilityprovider_create",
  "level": 3
}, {
  "value": "OH_ArkUI_AccessibilityProvider_Dispose()",
  "id": "oh_arkui_accessibilityprovider_dispose",
  "level": 3
}, {
  "value": "OH_ArkUI_SurfaceCallback_SetSurfaceShowEvent()",
  "id": "oh_arkui_surfacecallback_setsurfaceshowevent",
  "level": 3
}, {
  "value": "OH_ArkUI_SurfaceCallback_SetSurfaceHideEvent()",
  "id": "oh_arkui_surfacecallback_setsurfacehideevent",
  "level": 3
}, {
  "value": "OH_ArkUI_XComponentSurfaceConfig_Create()",
  "id": "oh_arkui_xcomponentsurfaceconfig_create",
  "level": 3
}, {
  "value": "OH_ArkUI_XComponentSurfaceConfig_Dispose()",
  "id": "oh_arkui_xcomponentsurfaceconfig_dispose",
  "level": 3
}, {
  "value": "OH_ArkUI_XComponentSurfaceConfig_SetIsOpaque()",
  "id": "oh_arkui_xcomponentsurfaceconfig_setisopaque",
  "level": 3
}, {
  "value": "OH_ArkUI_SurfaceHolder_SetSurfaceConfig()",
  "id": "oh_arkui_surfaceholder_setsurfaceconfig",
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
        id: "native_interface_xcomponenth",
        children: "native_interface_xcomponent.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "声明用于访问Native XComponent的API。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <ace/xcomponent/native_interface_xcomponent.h>"]
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
      }), " 8"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-module/capi-oh-nativexcomponent-native-xcomponent/capi-oh-nativexcomponent-native-xcomponent",
        children: "OH_NativeXComponent Native XComponent"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关示例："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/HarmonyOS_Samples/guide-snippets/tree/master/ArkUISample/NativeXComponentSample",
        children: "NativeXComponentSample"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/ive-xcomponent-oh-nativexcomponent-historicalpoint/ive-xcomponent-oh-nativexcomponent-historicalpoint",
              children: "OH_NativeXComponent_HistoricalPoint"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeXComponent_HistoricalPoint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "历史接触点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/t-native-xcomponent-oh-nativexcomponent-touchpoint/t-native-xcomponent-oh-nativexcomponent-touchpoint",
              children: "OH_NativeXComponent_TouchPoint"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeXComponent_TouchPoint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "触摸事件中触摸点的信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/t-native-xcomponent-oh-nativexcomponent-touchevent/t-native-xcomponent-oh-nativexcomponent-touchevent",
              children: "OH_NativeXComponent_TouchEvent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeXComponent_TouchEvent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "触摸事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/t-native-xcomponent-oh-nativexcomponent-mouseevent/t-native-xcomponent-oh-nativexcomponent-mouseevent",
              children: "OH_NativeXComponent_MouseEvent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeXComponent_MouseEvent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "鼠标事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/ent-native-xcomponent-oh-nativexcomponent-callback/ent-native-xcomponent-oh-nativexcomponent-callback",
              children: "OH_NativeXComponent_Callback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeXComponent_Callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册Surface生命周期和触摸事件回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/xcomponent-oh-nativexcomponent-mouseevent-callback/xcomponent-oh-nativexcomponent-mouseevent-callback",
              children: "OH_NativeXComponent_MouseEvent_Callback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeXComponent_MouseEvent_Callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册鼠标事件的回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/e-xcomponent-oh-nativexcomponent-expectedraterange/e-xcomponent-oh-nativexcomponent-expectedraterange",
              children: "OH_NativeXComponent_ExpectedRateRange"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeXComponent_ExpectedRateRange"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义期望帧率范围。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeXComponent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供封装的OH_NativeXComponent实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/ent-native-xcomponent-oh-nativexcomponent-keyevent/ent-native-xcomponent-oh-nativexcomponent-keyevent",
              children: "OH_NativeXComponent_KeyEvent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeXComponent_KeyEvent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供封装按键事件信息的OH_NativeXComponent_KeyEvent实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/xcomponent-oh-nativexcomponent-extramouseeventinfo/xcomponent-oh-nativexcomponent-extramouseeventinfo",
              children: "OH_NativeXComponent_ExtraMouseEventInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeXComponent_ExtraMouseEventInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供封装的扩展的鼠标事件信息实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/component-native-xcomponent-oh-arkui-surfaceholder/component-native-xcomponent-oh-arkui-surfaceholder",
              children: "OH_ArkUI_SurfaceHolder"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_ArkUI_SurfaceHolder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供封装的OH_ArkUI_SurfaceHolder实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/mponent-native-xcomponent-oh-arkui-surfacecallback/mponent-native-xcomponent-oh-arkui-surfacecallback",
              children: "OH_ArkUI_SurfaceCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_ArkUI_SurfaceCallback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义Surface生命周期回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/oh-nativexcomponent-native-xcomponent-nativewindow/oh-nativexcomponent-native-xcomponent-nativewindow",
              children: "NativeWindow"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OHNativeWindow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供封装的NativeWindow实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/nt-native-xcomponent-arkui-xcomponentsurfaceconfig/nt-native-xcomponent-arkui-xcomponentsurfaceconfig",
              children: "ArkUI_XComponentSurfaceConfig"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkUI_XComponentSurfaceConfig"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义XComponent组件持有的Surface选项，用于设置XComponent组件持有的Surface在渲染时是否被视为不透明。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#anonymous",
              children: "anonymous"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "枚举API访问状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#arkui_xcomponent_imageanalyzerstate",
              children: "ArkUI_XComponent_ImageAnalyzerState"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkUI_XComponent_ImageAnalyzerState"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XComponent图像AI分析状态码."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativexcomponent_toucheventtype",
              children: "OH_NativeXComponent_TouchEventType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeXComponent_TouchEventType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "触摸事件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativexcomponent_touchpointtooltype",
              children: "OH_NativeXComponent_TouchPointToolType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeXComponent_TouchPointToolType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "触摸点工具类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativexcomponent_eventsourcetype",
              children: "OH_NativeXComponent_EventSourceType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeXComponent_EventSourceType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "触摸事件源类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativexcomponent_mouseeventaction",
              children: "OH_NativeXComponent_MouseEventAction"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeXComponent_MouseEventAction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "鼠标事件动作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativexcomponent_mouseeventbutton",
              children: "OH_NativeXComponent_MouseEventButton"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeXComponent_MouseEventButton"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "鼠标事件按键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativexcomponent_touchevent_sourcetool",
              children: "OH_NativeXComponent_TouchEvent_SourceTool"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeXComponent_TouchEvent_SourceTool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示触摸事件的源工具类型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "宏定义",
      children: "宏定义"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "OH_NATIVE_XCOMPONENT_OBJ (\"__NATIVE_XCOMPONENT_OBJ__\")"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "代表Native XComponent实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NATIVE_XCOMPONENT_MAX_TOUCH_POINTS_NUMBER 10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "触摸事件中的可识别的触摸点个数最大值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#oh_nativexcomponent_getxcomponentid",
              children: "int32_t OH_NativeXComponent_GetXComponentId(OH_NativeXComponent* component, char* id, uint64_t* size)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取ArkUI XComponent的id。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativexcomponent_getxcomponentsize",
              children: "int32_t OH_NativeXComponent_GetXComponentSize(OH_NativeXComponent* component, const void* window, uint64_t* width, uint64_t* height)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取ArkUI XComponent持有的Surface的大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativexcomponent_getxcomponentoffset",
              children: "int32_t OH_NativeXComponent_GetXComponentOffset(OH_NativeXComponent* component, const void* window, double* x, double* y)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取ArkUI XComponent持有的Surface相对其父组件左顶点的偏移量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativexcomponent_gettouchevent",
              children: "int32_t OH_NativeXComponent_GetTouchEvent(OH_NativeXComponent* component, const void* window, OH_NativeXComponent_TouchEvent* touchEvent)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取ArkUI XComponent调度的触摸事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativexcomponent_gettouchpointtooltype",
              children: "int32_t OH_NativeXComponent_GetTouchPointToolType(OH_NativeXComponent* component, uint32_t pointIndex, OH_NativeXComponent_TouchPointToolType* toolType)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取ArkUI XComponent触摸点工具类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativexcomponent_gettouchpointtiltx",
              children: "int32_t OH_NativeXComponent_GetTouchPointTiltX(OH_NativeXComponent* component, uint32_t pointIndex, float* tiltX)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取ArkUI XComponent触摸点倾斜与X轴角度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativexcomponent_gettouchpointtilty",
              children: "int32_t OH_NativeXComponent_GetTouchPointTiltY(OH_NativeXComponent* component, uint32_t pointIndex, float* tiltY)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取ArkUI XComponent触摸点倾斜与Y轴角度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativexcomponent_gettouchpointwindowx",
              children: "int32_t OH_NativeXComponent_GetTouchPointWindowX(OH_NativeXComponent* component, uint32_t pointIndex, float* windowX)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取ArkUI XComponent触摸点相对于应用窗口左上角的X坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativexcomponent_gettouchpointwindowy",
              children: "int32_t OH_NativeXComponent_GetTouchPointWindowY(OH_NativeXComponent* component, uint32_t pointIndex, float* windowY)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取ArkUI XComponent触摸点相对于应用窗口左上角的Y坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativexcomponent_gettouchpointdisplayx",
              children: "int32_t OH_NativeXComponent_GetTouchPointDisplayX(OH_NativeXComponent* component, uint32_t pointIndex, float* displayX)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取ArkUI XComponent触摸点相对于应用所在屏幕左上角的X坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativexcomponent_gettouchpointdisplayy",
              children: "int32_t OH_NativeXComponent_GetTouchPointDisplayY(OH_NativeXComponent* component, uint32_t pointIndex, float* displayY)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取ArkUI XComponent触摸点相对于应用所在屏幕左上角的Y坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativexcomponent_gethistoricalpoints",
              children: "int32_t OH_NativeXComponent_GetHistoricalPoints(OH_NativeXComponent* component, const void* window, int32_t* size, OH_NativeXComponent_HistoricalPoint** historicalPoints)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前XComponent触摸事件的历史点信息。由于部分输入设备上报触点的频率非常高（最高可达每1 ms上报一次），而对输入事件的响应通常是为了使UI界面发生变化以响应用户操作，如果将触摸事件按照上报触点的频率如此高频率上报给应用，大多会造成冗余，因此触摸事件在一帧内只会上报一次给应用。在当前帧内上报的触点均作为历史点保存，如果应用需要直接处理这些数据，可调用该接口获取历史点信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativexcomponent_getmouseevent",
              children: "int32_t OH_NativeXComponent_GetMouseEvent(OH_NativeXComponent* component, const void* window, OH_NativeXComponent_MouseEvent* mouseEvent)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取ArkUI XComponent调度的鼠标事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativexcomponent_registercallback",
              children: "int32_t OH_NativeXComponent_RegisterCallback(OH_NativeXComponent* component, OH_NativeXComponent_Callback* callback)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为此", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "实例注册回调。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativexcomponent_registermouseeventcallback",
              children: "int32_t OH_NativeXComponent_RegisterMouseEventCallback(OH_NativeXComponent* component, OH_NativeXComponent_MouseEvent_Callback* callback)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为此", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "实例注册鼠标事件回调。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativexcomponent_getextramouseeventinfo",
              children: "int32_t OH_NativeXComponent_GetExtraMouseEventInfo(OH_NativeXComponent* component, OH_NativeXComponent_ExtraMouseEventInfo** extraMouseEventInfo)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从此", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "实例中获取扩展的鼠标事件信息。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativexcomponent_getmouseeventmodifierkeystates",
              children: "int32_t OH_NativeXComponent_GetMouseEventModifierKeyStates (OH_NativeXComponent_ExtraMouseEventInfo* extraMouseEventInfo, uint64_t* keys)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/xcomponent-oh-nativexcomponent-extramouseeventinfo/xcomponent-oh-nativexcomponent-extramouseeventinfo",
              children: "OH_NativeXComponent_ExtraMouseEventInfo"
            }), "实例中获取功能键按压状态信息。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativexcomponent_registerfocuseventcallback",
              children: "int32_t OH_NativeXComponent_RegisterFocusEventCallback(OH_NativeXComponent* component, void (*callback)(OH_NativeXComponent* component, void* window))"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为此", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "实例注册获焦事件回调。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativexcomponent_registerkeyeventcallback",
              children: "int32_t OH_NativeXComponent_RegisterKeyEventCallback(OH_NativeXComponent* component, void (*callback)(OH_NativeXComponent* component, void* window))"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为此", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "实例注册按键事件回调。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativexcomponent_registerblureventcallback",
              children: "int32_t OH_NativeXComponent_RegisterBlurEventCallback(OH_NativeXComponent* component, void (*callback)(OH_NativeXComponent* component, void* window))"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为此", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "实例注册失焦事件回调。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativexcomponent_getkeyevent",
              children: "int32_t OH_NativeXComponent_GetKeyEvent(OH_NativeXComponent* component, OH_NativeXComponent_KeyEvent** keyEvent)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取ArkUI XComponent调度的按键事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativexcomponent_getkeyeventaction",
              children: "int32_t OH_NativeXComponent_GetKeyEventAction(OH_NativeXComponent_KeyEvent* keyEvent, OH_NativeXComponent_KeyAction* action)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取传入按键事件的动作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativexcomponent_getkeyeventcode",
              children: "int32_t OH_NativeXComponent_GetKeyEventCode(OH_NativeXComponent_KeyEvent* keyEvent, OH_NativeXComponent_KeyCode* code)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取传入按键事件的按键码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativexcomponent_getkeyeventsourcetype",
              children: "int32_t OH_NativeXComponent_GetKeyEventSourceType(OH_NativeXComponent_KeyEvent* keyEvent, OH_NativeXComponent_EventSourceType* sourceType)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取传入按键事件的事件源类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativexcomponent_getkeyeventdeviceid",
              children: "int32_t OH_NativeXComponent_GetKeyEventDeviceId(OH_NativeXComponent_KeyEvent* keyEvent, int64_t* deviceId)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取传入按键事件的设备id。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativexcomponent_getkeyeventtimestamp",
              children: "int32_t OH_NativeXComponent_GetKeyEventTimestamp(OH_NativeXComponent_KeyEvent* keyEvent, int64_t* timestamp)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取传入按键事件的时间戳。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativexcomponent_getkeyeventmodifierkeystates",
              children: "int32_t OH_NativeXComponent_GetKeyEventModifierKeyStates(OH_NativeXComponent_KeyEvent* keyEvent, uint64_t* keys)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从按键事件中获取功能键按压状态信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativexcomponent_getkeyeventnumlockstate",
              children: "int32_t OH_NativeXComponent_GetKeyEventNumLockState(OH_NativeXComponent_KeyEvent* keyEvent, bool* isNumLockOn)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从按键事件中获取NumLock（小键盘锁定）键的状态信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativexcomponent_getkeyeventcapslockstate",
              children: "int32_t OH_NativeXComponent_GetKeyEventCapsLockState(OH_NativeXComponent_KeyEvent* keyEvent, bool* isCapsLockOn)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从按键事件中获取CapsLock（大写锁定）键的状态信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativexcomponent_getkeyeventscrolllockstate",
              children: "int32_t OH_NativeXComponent_GetKeyEventScrollLockState(OH_NativeXComponent_KeyEvent* keyEvent, bool* isScrollLockOn)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从按键事件中获取ScrollLock（滚动锁定）键的状态信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativexcomponent_setexpectedframeraterange",
              children: "int32_t OH_NativeXComponent_SetExpectedFrameRateRange(OH_NativeXComponent* component, OH_NativeXComponent_ExpectedRateRange* range)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置期望帧率范围。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativexcomponent_registeronframecallback",
              children: "int32_t OH_NativeXComponent_RegisterOnFrameCallback(OH_NativeXComponent* component, void (*callback)(OH_NativeXComponent* component, uint64_t timestamp, uint64_t targetTimestamp))"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为此", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "实例注册显示更新回调，并使能每帧回调此函数。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativexcomponent_unregisteronframecallback",
              children: "int32_t OH_NativeXComponent_UnregisterOnFrameCallback(OH_NativeXComponent* component)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为此", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "实例取消注册回调函数，并关闭每帧回调此函数。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativexcomponent_attachnativerootnode",
              children: "int32_t OH_NativeXComponent_AttachNativeRootNode(OH_NativeXComponent* component, ArkUI_NodeHandle root)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将通过ArkUI的Native接口创建出来的UI组件挂载到当前XComponent上。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativexcomponent_detachnativerootnode",
              children: "int32_t OH_NativeXComponent_DetachNativeRootNode(OH_NativeXComponent* component, ArkUI_NodeHandle root)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将ArkUI的Native组件从当前XComponent上卸载。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativexcomponent_registeruiinputeventcallback",
              children: "int32_t OH_NativeXComponent_RegisterUIInputEventCallback(OH_NativeXComponent *component, void (*callback)(OH_NativeXComponent *component, ArkUI_UIInputEvent *event,ArkUI_UIInputEvent_Type type),ArkUI_UIInputEvent_Type type)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为此", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "实例注册UI输入事件回调，并使能收到UI输入事件时回调此函数。当前仅支持轴事件。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativexcomponent_registerontouchinterceptcallback",
              children: "int32_t OH_NativeXComponent_RegisterOnTouchInterceptCallback(OH_NativeXComponent* component, HitTestMode (*callback)(OH_NativeXComponent* component, ArkUI_UIInputEvent* event))"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为此", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "实例注册自定义事件拦截回调，并使能在做触摸测试时回调此函数。通过该回调获取到的事件对象不支持UIInput相关信息操作接口，建议切换为通过注册native node上的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#arkui_nodeeventtype",
              children: "NODE_ON_TOUCH_INTERCEPT"
            }), "通用事件来支持。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativexcomponent_setneedsoftkeyboard",
              children: "int32_t OH_NativeXComponent_SetNeedSoftKeyboard(OH_NativeXComponent* component, bool needSoftKeyboard)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为此", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "实例设置是否需要软键盘。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativexcomponent_registersurfaceshowcallback",
              children: "int32_t OH_NativeXComponent_RegisterSurfaceShowCallback(OH_NativeXComponent* component, void (*callback)(OH_NativeXComponent* component, void* window))"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为此", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "实例注册Surface显示回调，该回调在应用窗口已经从后台回到前台时触发。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativexcomponent_registersurfacehidecallback",
              children: "int32_t OH_NativeXComponent_RegisterSurfaceHideCallback(OH_NativeXComponent* component, void (*callback)(OH_NativeXComponent* component, void* window))"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为此", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "实例注册Surface隐藏回调，该回调在应用窗口已经从前台进入后台时触发。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativexcomponent_gettoucheventsourcetype",
              children: "int32_t OH_NativeXComponent_GetTouchEventSourceType(OH_NativeXComponent* component, int32_t pointId, OH_NativeXComponent_EventSourceType* sourceType)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取ArkUI XComponent触摸事件的输入设备类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativexcomponent_getnativexcomponent",
              children: "OH_NativeXComponent* OH_NativeXComponent_GetNativeXComponent(ArkUI_NodeHandle node)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["基于Native接口创建的组件实例获取", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "类型的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativexcomponent_getnativeaccessibilityprovider",
              children: "int32_t OH_NativeXComponent_GetNativeAccessibilityProvider(OH_NativeXComponent* component, ArkUI_AccessibilityProvider** handle)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取ArkUI XComponent无障碍接入句柄指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nativexcomponent_registerkeyeventcallbackwithresult",
              children: "int32_t OH_NativeXComponent_RegisterKeyEventCallbackWithResult(OH_NativeXComponent* component, bool (*callback)(OH_NativeXComponent* component, void* window))"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为此", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "实例注册带有返回值的按键事件回调。通过此接口注册的按键事件回调都必须返回一个结果，即true或false。当返回值为true时，该事件将不会继续分发；当返回值为false时，该事件将按照事件处理流程继续分发。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_xcomponent_startimageanalyzer",
              children: "int32_t OH_ArkUI_XComponent_StartImageAnalyzer(ArkUI_NodeHandle node, void* userData, void (*callback)(ArkUI_NodeHandle node, ArkUI_XComponent_ImageAnalyzerState statusCode, void* userData))"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为此XComponent组件实例开始图像AI分析，使用前需先使能图像AI分析能力。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_xcomponent_stopimageanalyzer",
              children: "int32_t OH_ArkUI_XComponent_StopImageAnalyzer(ArkUI_NodeHandle node)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为此XComponent组件实例停止图像AI分析。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_surfaceholder_create",
              children: "OH_ArkUI_SurfaceHolder* OH_ArkUI_SurfaceHolder_Create(ArkUI_NodeHandle node)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建XComponent组件的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/component-native-xcomponent-oh-arkui-surfaceholder/component-native-xcomponent-oh-arkui-surfaceholder",
              children: "OH_ArkUI_SurfaceHolder"
            }), "对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_surfaceholder_dispose",
              children: "void OH_ArkUI_SurfaceHolder_Dispose(OH_ArkUI_SurfaceHolder* surfaceHolder)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["销毁", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/component-native-xcomponent-oh-arkui-surfaceholder/component-native-xcomponent-oh-arkui-surfaceholder",
              children: "OH_ArkUI_SurfaceHolder"
            }), "对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_surfaceholder_setuserdata",
              children: "int32_t OH_ArkUI_SurfaceHolder_SetUserData(OH_ArkUI_SurfaceHolder* surfaceHolder, void* userData)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/component-native-xcomponent-oh-arkui-surfaceholder/component-native-xcomponent-oh-arkui-surfaceholder",
              children: "OH_ArkUI_SurfaceHolder"
            }), "实例存储自定义数据。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_surfaceholder_getuserdata",
              children: "void* OH_ArkUI_SurfaceHolder_GetUserData(OH_ArkUI_SurfaceHolder* surfaceHolder)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/component-native-xcomponent-oh-arkui-surfaceholder/component-native-xcomponent-oh-arkui-surfaceholder",
              children: "OH_ArkUI_SurfaceHolder"
            }), "实例存储的自定义数据。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_surfacecallback_create",
              children: "OH_ArkUI_SurfaceCallback* OH_ArkUI_SurfaceCallback_Create()"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/mponent-native-xcomponent-oh-arkui-surfacecallback/mponent-native-xcomponent-oh-arkui-surfacecallback",
              children: "OH_ArkUI_SurfaceCallback"
            }), "对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_surfacecallback_dispose",
              children: "void OH_ArkUI_SurfaceCallback_Dispose(OH_ArkUI_SurfaceCallback* callback)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["销毁", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/mponent-native-xcomponent-oh-arkui-surfacecallback/mponent-native-xcomponent-oh-arkui-surfacecallback",
              children: "OH_ArkUI_SurfaceCallback"
            }), "对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_surfacecallback_setsurfacecreatedevent",
              children: "void OH_ArkUI_SurfaceCallback_SetSurfaceCreatedEvent(OH_ArkUI_SurfaceCallback* callback,void (*onSurfaceCreated)(OH_ArkUI_SurfaceHolder* surfaceHolder))"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置Surface生命周期回调中的创建回调事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_surfacecallback_setsurfacechangedevent",
              children: "void OH_ArkUI_SurfaceCallback_SetSurfaceChangedEvent(OH_ArkUI_SurfaceCallback* callback,void (*onSurfaceChanged)(OH_ArkUI_SurfaceHolder* surfaceHolder, uint64_t width, uint64_t height))"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置Surface生命周期回调中的大小改变回调事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_surfacecallback_setsurfacedestroyedevent",
              children: "void OH_ArkUI_SurfaceCallback_SetSurfaceDestroyedEvent(OH_ArkUI_SurfaceCallback* callback,void (*onSurfaceDestroyed)(OH_ArkUI_SurfaceHolder* surfaceHolder))"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置Surface生命周期回调中的销毁回调事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_surfaceholder_addsurfacecallback",
              children: "int32_t OH_ArkUI_SurfaceHolder_AddSurfaceCallback(OH_ArkUI_SurfaceHolder* surfaceHolder,OH_ArkUI_SurfaceCallback* callback)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["添加Surface生命周期回调到", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/component-native-xcomponent-oh-arkui-surfaceholder/component-native-xcomponent-oh-arkui-surfaceholder",
              children: "OH_ArkUI_SurfaceHolder"
            }), "实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_surfaceholder_removesurfacecallback",
              children: "int32_t OH_ArkUI_SurfaceHolder_RemoveSurfaceCallback(OH_ArkUI_SurfaceHolder* surfaceHolder,OH_ArkUI_SurfaceCallback* callback)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["删除", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/component-native-xcomponent-oh-arkui-surfaceholder/component-native-xcomponent-oh-arkui-surfaceholder",
              children: "OH_ArkUI_SurfaceHolder"
            }), "实例的先前添加的Surface生命周期回调。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_xcomponent_getnativewindow",
              children: "OHNativeWindow* OH_ArkUI_XComponent_GetNativeWindow(OH_ArkUI_SurfaceHolder* surfaceHolder)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/component-native-xcomponent-oh-arkui-surfaceholder/component-native-xcomponent-oh-arkui-surfaceholder",
              children: "OH_ArkUI_SurfaceHolder"
            }), "实例关联的NativeWindow。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_xcomponent_setautoinitialize",
              children: "int32_t OH_ArkUI_XComponent_SetAutoInitialize(ArkUI_NodeHandle node, bool autoInitialize)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置XComponent组件是否需要自动初始化Surface的标志位。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_xcomponent_initialize",
              children: "int32_t OH_ArkUI_XComponent_Initialize(ArkUI_NodeHandle node)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "初始化XComponent组件持有的Surface。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_xcomponent_finalize",
              children: "int32_t OH_ArkUI_XComponent_Finalize(ArkUI_NodeHandle node)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁XComponent组件持有的Surface。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_xcomponent_isinitialized",
              children: "int32_t OH_ArkUI_XComponent_IsInitialized(ArkUI_NodeHandle node, bool* isInitialized)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取XComponent组件是否已经初始化的标志位。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_xcomponent_setexpectedframeraterange",
              children: "int32_t OH_ArkUI_XComponent_SetExpectedFrameRateRange(ArkUI_NodeHandle node, OH_NativeXComponent_ExpectedRateRange range)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为此XComponent组件实例设置期望帧率。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_xcomponent_registeronframecallback",
              children: "int32_t OH_ArkUI_XComponent_RegisterOnFrameCallback(ArkUI_NodeHandle node,void (*callback)(ArkUI_NodeHandle node, uint64_t timestamp, uint64_t targetTimestamp))"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为此XComponent组件实例注册帧回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_xcomponent_unregisteronframecallback",
              children: "int32_t OH_ArkUI_XComponent_UnregisterOnFrameCallback(ArkUI_NodeHandle node)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为此XComponent组件实例取消注册帧回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_xcomponent_setneedsoftkeyboard",
              children: "int32_t OH_ArkUI_XComponent_SetNeedSoftKeyboard(ArkUI_NodeHandle node, bool needSoftKeyboard)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为此XComponent组件实例设置是否需要软键盘。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_accessibilityprovider_create",
              children: "ArkUI_AccessibilityProvider* OH_ArkUI_AccessibilityProvider_Create(ArkUI_NodeHandle node)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["基于此XComponent实例创建", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/pi-arkui-accessibility-arkui-accessibilityprovider/pi-arkui-accessibility-arkui-accessibilityprovider",
              children: "ArkUI_AccessibilityProvider"
            }), "实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_accessibilityprovider_dispose",
              children: "void OH_ArkUI_AccessibilityProvider_Dispose(ArkUI_AccessibilityProvider* provider)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["销毁由Native接口", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h#oh_arkui_accessibilityprovider_create",
              children: "OH_ArkUI_AccessibilityProvider_Create"
            }), "创建的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/pi-arkui-accessibility-arkui-accessibilityprovider/pi-arkui-accessibility-arkui-accessibilityprovider",
              children: "ArkUI_AccessibilityProvider"
            }), "实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_surfacecallback_setsurfaceshowevent",
              children: "void OH_ArkUI_SurfaceCallback_SetSurfaceShowEvent(OH_ArkUI_SurfaceCallback* callback, void (*onSurfaceShow)(OH_ArkUI_SurfaceHolder* surfaceHolder))"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为此", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/mponent-native-xcomponent-oh-arkui-surfacecallback/mponent-native-xcomponent-oh-arkui-surfacecallback",
              children: "OH_ArkUI_SurfaceCallback"
            }), "实例设置Surface显示回调，该回调在应用窗口已经从后台回到前台时触发。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_surfacecallback_setsurfacehideevent",
              children: "void OH_ArkUI_SurfaceCallback_SetSurfaceHideEvent(OH_ArkUI_SurfaceCallback* callback, void (*onSurfaceHide)(OH_ArkUI_SurfaceHolder* surfaceHolder))"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为此", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/mponent-native-xcomponent-oh-arkui-surfacecallback/mponent-native-xcomponent-oh-arkui-surfacecallback",
              children: "OH_ArkUI_SurfaceCallback"
            }), "实例设置Surface隐藏回调，该回调在应用窗口已经从前台进入后台时触发。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_xcomponentsurfaceconfig_create",
              children: "ArkUI_XComponentSurfaceConfig* OH_ArkUI_XComponentSurfaceConfig_Create()"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建XComponent组件的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/nt-native-xcomponent-arkui-xcomponentsurfaceconfig/nt-native-xcomponent-arkui-xcomponentsurfaceconfig",
              children: "ArkUI_XComponentSurfaceConfig"
            }), "对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_xcomponentsurfaceconfig_dispose",
              children: "void OH_ArkUI_XComponentSurfaceConfig_Dispose(ArkUI_XComponentSurfaceConfig* config)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["销毁", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/nt-native-xcomponent-arkui-xcomponentsurfaceconfig/nt-native-xcomponent-arkui-xcomponentsurfaceconfig",
              children: "ArkUI_XComponentSurfaceConfig"
            }), "对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_xcomponentsurfaceconfig_setisopaque",
              children: "void OH_ArkUI_XComponentSurfaceConfig_SetIsOpaque(ArkUI_XComponentSurfaceConfig* config, bool isOpaque)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置XComponent组件持有的Surface在渲染时是否被视为不透明，无论该Surface是否存在半透明像素。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_surfaceholder_setsurfaceconfig",
              children: "int32_t OH_ArkUI_SurfaceHolder_SetSurfaceConfig(OH_ArkUI_SurfaceHolder* surfaceHolder, ArkUI_XComponentSurfaceConfig *config)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/component-native-xcomponent-oh-arkui-surfaceholder/component-native-xcomponent-oh-arkui-surfaceholder",
              children: "OH_ArkUI_SurfaceHolder"
            }), "实例设置Surface选项。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "变量",
      children: "变量"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "const uint32_t OH_XCOMPONENT_ID_LEN_MAX = 128"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["ArkUI XComponent的id最大长度。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 8"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const uint32_t OH_MAX_TOUCH_POINTS_NUMBER = 10"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["触摸事件中的可识别的触摸点个数最大值。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 8"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NATIVE_XCOMPONENT_MAX_TOUCH_POINTS_NUMBER 10"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["最大支持10个触摸点。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 8"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "anonymous",
      children: "anonymous"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum anonymous\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "枚举API访问状态。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 8"]
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
            children: "OH_NATIVEXCOMPONENT_RESULT_SUCCESS = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "成功结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NATIVEXCOMPONENT_RESULT_FAILED = -1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "失败结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NATIVEXCOMPONENT_RESULT_BAD_PARAMETER = -2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无效参数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "arkui_xcomponent_imageanalyzerstate",
      children: "ArkUI_XComponent_ImageAnalyzerState"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum ArkUI_XComponent_ImageAnalyzerState\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "XComponent图像AI分析状态码."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
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
            children: "ARKUI_XCOMPONENT_AI_ANALYSIS_FINISHED = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像AI分析完成。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_XCOMPONENT_AI_ANALYSIS_DISABLED = 110000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像AI分析已禁用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_XCOMPONENT_AI_ANALYSIS_UNSUPPORTED = 110001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备不支持图像AI分析。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_XCOMPONENT_AI_ANALYSIS_ONGOING = 110002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像AI分析进行中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_XCOMPONENT_AI_ANALYSIS_STOPPED = 110003"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像AI分析停止。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativexcomponent_toucheventtype",
      children: "OH_NativeXComponent_TouchEventType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_NativeXComponent_TouchEventType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "触摸事件类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 8"]
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
            children: "OH_NATIVEXCOMPONENT_DOWN = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "手指按下时触发触摸事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NATIVEXCOMPONENT_UP = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "手指抬起时触发触摸事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NATIVEXCOMPONENT_MOVE = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "手指按下状态下在屏幕上移动时触发触摸事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NATIVEXCOMPONENT_CANCEL = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "触摸事件取消时触发事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NATIVEXCOMPONENT_UNKNOWN = 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无效的触摸类型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativexcomponent_touchpointtooltype",
      children: "OH_NativeXComponent_TouchPointToolType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_NativeXComponent_TouchPointToolType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "触摸点工具类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "OH_NATIVEXCOMPONENT_TOOL_TYPE_UNKNOWN = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "未识别工具类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NATIVEXCOMPONENT_TOOL_TYPE_FINGER = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示用手指。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NATIVEXCOMPONENT_TOOL_TYPE_PEN = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示用触笔。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NATIVEXCOMPONENT_TOOL_TYPE_RUBBER = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示用橡皮擦。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NATIVEXCOMPONENT_TOOL_TYPE_BRUSH = 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示用画笔。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NATIVEXCOMPONENT_TOOL_TYPE_PENCIL = 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示用铅笔。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NATIVEXCOMPONENT_TOOL_TYPE_AIRBRUSH = 6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示用气笔。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NATIVEXCOMPONENT_TOOL_TYPE_MOUSE = 7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示用鼠标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NATIVEXCOMPONENT_TOOL_TYPE_LENS = 8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示用晶状体。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativexcomponent_eventsourcetype",
      children: "OH_NativeXComponent_EventSourceType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_NativeXComponent_EventSourceType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "触摸事件源类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
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
            children: "OH_NATIVEXCOMPONENT_SOURCE_TYPE_UNKNOWN = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "未知的输入源类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NATIVEXCOMPONENT_SOURCE_TYPE_MOUSE = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示输入源生成鼠标多点触摸事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NATIVEXCOMPONENT_SOURCE_TYPE_TOUCHSCREEN = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示输入源生成一个触摸屏多点触摸事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NATIVEXCOMPONENT_SOURCE_TYPE_TOUCHPAD = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示输入源生成一个触摸板多点触摸事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NATIVEXCOMPONENT_SOURCE_TYPE_JOYSTICK = 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示输入源生成一个操纵杆多点触摸事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NATIVEXCOMPONENT_SOURCE_TYPE_KEYBOARD = 5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示输入源生成一个键盘事件。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 10"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativexcomponent_mouseeventaction",
      children: "OH_NativeXComponent_MouseEventAction"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_NativeXComponent_MouseEventAction\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "鼠标事件动作。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
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
            children: "OH_NATIVEXCOMPONENT_MOUSE_NONE = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无效鼠标事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NATIVEXCOMPONENT_MOUSE_PRESS = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "鼠标按键按下时触发鼠标事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NATIVEXCOMPONENT_MOUSE_RELEASE = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "鼠标按键松开时触发鼠标事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NATIVEXCOMPONENT_MOUSE_MOVE = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "鼠标在屏幕上移动时触发鼠标事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NATIVEXCOMPONENT_MOUSE_CANCEL = 4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["鼠标按键被取消时触发鼠标事件。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 18  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " OH_NATIVEXCOMPONENT_MOUSE_CANCEL表示鼠标事件被取消，通常在以下场景被触发：  1.组件失去焦点：当前持有焦点的XComponent因系统事件（如弹窗打断、应用切换）失去焦点时，会触发该动作。  2.事件中断：鼠标操作过程中发生更高优先级事件（如系统级手势或强制回收事件流），导致当前鼠标操作被强制终止。  3.异常状态退出：如组件销毁、渲染环境异常等场景下，未完成的鼠标事件会被标记为取消。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativexcomponent_mouseeventbutton",
      children: "OH_NativeXComponent_MouseEventButton"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_NativeXComponent_MouseEventButton\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "鼠标事件按键。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
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
            children: "OH_NATIVEXCOMPONENT_NONE_BUTTON = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "鼠标无按键操作时触发鼠标事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NATIVEXCOMPONENT_LEFT_BUTTON = 0x01"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按下鼠标左键时触发鼠标事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NATIVEXCOMPONENT_RIGHT_BUTTON = 0x02"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按下鼠标右键时触发鼠标事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NATIVEXCOMPONENT_MIDDLE_BUTTON = 0x04"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按下鼠标中键时触发鼠标事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NATIVEXCOMPONENT_BACK_BUTTON = 0x08"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按下鼠标左侧后退键时触发鼠标事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NATIVEXCOMPONENT_FORWARD_BUTTON = 0x10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按下鼠标左侧前进键时触发鼠标事件。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativexcomponent_touchevent_sourcetool",
      children: "OH_NativeXComponent_TouchEvent_SourceTool"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_NativeXComponent_TouchEvent_SourceTool\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "表示触摸事件的源工具类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "OH_NATIVEXCOMPONENT_SOURCETOOL_UNKNOWN = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "未知的触摸事件的源工具。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NATIVEXCOMPONENT_SOURCETOOL_FINGER = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示触摸事件的源工具是手指。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NATIVEXCOMPONENT_SOURCETOOL_PEN = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示触摸事件的源工具是钢笔。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NATIVEXCOMPONENT_SOURCETOOL_RUBBER = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示触摸事件的源工具是橡皮。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NATIVEXCOMPONENT_SOURCETOOL_BRUSH = 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示触摸事件的源工具是笔刷。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NATIVEXCOMPONENT_SOURCETOOL_PENCIL = 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示触摸事件的源工具是铅笔。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NATIVEXCOMPONENT_SOURCETOOL_AIRBRUSH = 6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示触摸事件的源工具是喷枪。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NATIVEXCOMPONENT_SOURCETOOL_MOUSE = 7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示触摸事件的源工具是鼠标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NATIVEXCOMPONENT_SOURCETOOL_LENS = 8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示触摸事件的源工具是透镜。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NATIVEXCOMPONENT_SOURCETOOL_TOUCHPAD = 9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示触摸事件的源工具是触摸板。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativexcomponent_getxcomponentid",
      children: "OH_NativeXComponent_GetXComponentId()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeXComponent_GetXComponentId(OH_NativeXComponent* component, char* id, uint64_t* size)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取ArkUI XComponent的id。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 8"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "* component"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "char* id"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示用于保存此", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "实例的ID的字符缓冲区。请注意，空终止符将附加到字符缓冲区，因此字符缓冲区的大小应至少比真实id长度大一个单位。建议字符缓冲区的大小为[", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%8F%98%E9%87%8F",
              children: "OH_XCOMPONENT_ID_LEN_MAX"
            }), " + 1]。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint64_t* size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向id长度的指针，用于接收id的长度信息。"
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
            children: ["返回执行的状态代码。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h#anonymous",
              children: "OH_NATIVEXCOMPONENT_RESULT_SUCCESS"
            }), " - 执行成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h#anonymous",
              children: "OH_NATIVEXCOMPONENT_RESULT_BAD_PARAMETER"
            }), " - 传入参数异常。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativexcomponent_getxcomponentsize",
      children: "OH_NativeXComponent_GetXComponentSize()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeXComponent_GetXComponentSize(OH_NativeXComponent* component, const void* window, uint64_t* width, uint64_t* height)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取ArkUI XComponent持有的Surface的大小。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 8"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "* component"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const void* window"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示NativeWindow句柄。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint64_t* width"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向当前Surface宽度的指针。单位：vp。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint64_t* height"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向当前Surface高度的指针。单位：vp。"
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
            children: ["返回执行的状态代码。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h#anonymous",
              children: "OH_NATIVEXCOMPONENT_RESULT_SUCCESS"
            }), " - 执行成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h#anonymous",
              children: "OH_NATIVEXCOMPONENT_RESULT_BAD_PARAMETER"
            }), " - 传入参数异常。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativexcomponent_getxcomponentoffset",
      children: "OH_NativeXComponent_GetXComponentOffset()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeXComponent_GetXComponentOffset(OH_NativeXComponent* component, const void* window, double* x, double* y)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取ArkUI XComponent持有的Surface相对其父组件左顶点的偏移量。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 8"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "* component"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const void* window"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示NativeWindow句柄。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "double* x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向当前Surface相对于XComponent父组件左顶点x坐标的指针。单位：vp。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "double* y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向当前Surface相对于XComponent父组件左顶点y坐标的指针。单位：vp。"
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
            children: ["返回执行的状态代码。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h#anonymous",
              children: "OH_NATIVEXCOMPONENT_RESULT_SUCCESS"
            }), " - 执行成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h#anonymous",
              children: "OH_NATIVEXCOMPONENT_RESULT_BAD_PARAMETER"
            }), " - 传入参数异常。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativexcomponent_gettouchevent",
      children: "OH_NativeXComponent_GetTouchEvent()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeXComponent_GetTouchEvent(OH_NativeXComponent* component, const void* window, OH_NativeXComponent_TouchEvent* touchEvent)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取ArkUI XComponent调度的触摸事件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 8"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "* component"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const void* window"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示NativeWindow句柄。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/t-native-xcomponent-oh-nativexcomponent-touchevent/t-native-xcomponent-oh-nativexcomponent-touchevent",
              children: "OH_NativeXComponent_TouchEvent"
            }), "* touchEvent"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向当前触摸事件的指针。"
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
            children: ["返回执行的状态代码。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h#anonymous",
              children: "OH_NATIVEXCOMPONENT_RESULT_SUCCESS"
            }), " - 执行成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h#anonymous",
              children: "OH_NATIVEXCOMPONENT_RESULT_BAD_PARAMETER"
            }), " - 传入参数异常。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativexcomponent_gettouchpointtooltype",
      children: "OH_NativeXComponent_GetTouchPointToolType()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeXComponent_GetTouchPointToolType(OH_NativeXComponent* component, uint32_t pointIndex,OH_NativeXComponent_TouchPointToolType* toolType)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取ArkUI XComponent触摸点工具类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "* component"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t pointIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示触摸点的指针索引。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h#oh_nativexcomponent_touchpointtooltype",
              children: "OH_NativeXComponent_TouchPointToolType"
            }), "* toolType"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向工具类型的指针。"
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
            children: ["返回执行的状态代码。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h#anonymous",
              children: "OH_NATIVEXCOMPONENT_RESULT_SUCCESS"
            }), " - 执行成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h#anonymous",
              children: "OH_NATIVEXCOMPONENT_RESULT_BAD_PARAMETER"
            }), " - 传入参数异常。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativexcomponent_gettouchpointtiltx",
      children: "OH_NativeXComponent_GetTouchPointTiltX()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeXComponent_GetTouchPointTiltX(OH_NativeXComponent* component, uint32_t pointIndex, float* tiltX)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取ArkUI XComponent触摸点倾斜与X轴角度。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "* component"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t pointIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示触摸点的指针索引。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float* tiltX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向X倾斜度的指针。"
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
            children: ["返回执行的状态代码。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h#anonymous",
              children: "OH_NATIVEXCOMPONENT_RESULT_SUCCESS"
            }), " - 执行成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h#anonymous",
              children: "OH_NATIVEXCOMPONENT_RESULT_BAD_PARAMETER"
            }), " - 传入参数异常。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativexcomponent_gettouchpointtilty",
      children: "OH_NativeXComponent_GetTouchPointTiltY()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeXComponent_GetTouchPointTiltY(OH_NativeXComponent* component, uint32_t pointIndex, float* tiltY)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取ArkUI XComponent触摸点倾斜与Y轴角度。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "* component"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t pointIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示触摸点的指针索引。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float* tiltY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向Y倾斜度的指针。"
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
            children: ["返回执行的状态代码。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h#anonymous",
              children: "OH_NATIVEXCOMPONENT_RESULT_SUCCESS"
            }), " - 执行成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h#anonymous",
              children: "OH_NATIVEXCOMPONENT_RESULT_BAD_PARAMETER"
            }), " - 传入参数异常。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativexcomponent_gettouchpointwindowx",
      children: "OH_NativeXComponent_GetTouchPointWindowX()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeXComponent_GetTouchPointWindowX(OH_NativeXComponent* component, uint32_t pointIndex, float* windowX)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取ArkUI XComponent触摸点相对于应用窗口左上角的X坐标。"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "* component"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t pointIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示触摸点的指针索引。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float* windowX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向触摸点相对于应用窗口左上角的X坐标的指针。"
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
            children: ["返回执行的状态代码。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h#anonymous",
              children: "OH_NATIVEXCOMPONENT_RESULT_SUCCESS"
            }), " 获取windowX成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h#anonymous",
              children: "OH_NATIVEXCOMPONENT_RESULT_BAD_PARAMETER"
            }), " component是空指针、windowX是空指针或者native XComponent是空指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativexcomponent_gettouchpointwindowy",
      children: "OH_NativeXComponent_GetTouchPointWindowY()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeXComponent_GetTouchPointWindowY(OH_NativeXComponent* component, uint32_t pointIndex, float* windowY)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取ArkUI XComponent触摸点相对于应用窗口左上角的Y坐标。"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "* component"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t pointIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示触摸点的指针索引。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float* windowY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向触摸点相对于应用窗口左上角的Y坐标的指针。"
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
            children: ["返回执行的状态代码。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h#anonymous",
              children: "OH_NATIVEXCOMPONENT_RESULT_SUCCESS"
            }), " 获取windowY成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h#anonymous",
              children: "OH_NATIVEXCOMPONENT_RESULT_BAD_PARAMETER"
            }), " component是空指针、windowY是空指针或者native XComponent是空指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativexcomponent_gettouchpointdisplayx",
      children: "OH_NativeXComponent_GetTouchPointDisplayX()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeXComponent_GetTouchPointDisplayX(OH_NativeXComponent* component, uint32_t pointIndex, float* displayX)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取ArkUI XComponent触摸点相对于应用所在屏幕左上角的X坐标。"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "* component"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t pointIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示触摸点的指针索引。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float* displayX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向触摸点相对于应用所在屏幕左上角的X坐标的指针。"
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
            children: ["返回执行的状态代码。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h#anonymous",
              children: "OH_NATIVEXCOMPONENT_RESULT_SUCCESS"
            }), " 获取displayX成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h#anonymous",
              children: "OH_NATIVEXCOMPONENT_RESULT_BAD_PARAMETER"
            }), " component是空指针、displayX是空指针或者native XComponent是空指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativexcomponent_gettouchpointdisplayy",
      children: "OH_NativeXComponent_GetTouchPointDisplayY()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeXComponent_GetTouchPointDisplayY(OH_NativeXComponent* component, uint32_t pointIndex, float* displayY)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取ArkUI XComponent触摸点相对于应用所在屏幕左上角的Y坐标。"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "* component"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t pointIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示触摸点的指针索引。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float* displayY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向触摸点相对于应用所在屏幕左上角的Y坐标的指针。"
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
            children: ["返回执行的状态代码。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h#anonymous",
              children: "OH_NATIVEXCOMPONENT_RESULT_SUCCESS"
            }), " 获取displayY成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h#anonymous",
              children: "OH_NATIVEXCOMPONENT_RESULT_BAD_PARAMETER"
            }), " component是空指针、displayY是空指针或者native XComponent是空指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativexcomponent_gethistoricalpoints",
      children: "OH_NativeXComponent_GetHistoricalPoints()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeXComponent_GetHistoricalPoints(OH_NativeXComponent* component, const void* window,int32_t* size, OH_NativeXComponent_HistoricalPoint** historicalPoints)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前XComponent触摸事件的历史点信息。由于部分输入设备上报触点的频率非常高（最高可达每1 ms上报一次），而对输入事件的响应通常是为了使UI界面发生变化以响应用户操作，如果将触摸事件按照上报触点的频率如此高频率上报给应用，大多会造成冗余，因此触摸事件在一帧内只会上报一次给应用。在当前帧内上报的触点均作为历史点保存，如果应用需要直接处理这些数据，可调用该接口获取历史点信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "* component"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const void* window"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示NativeWindow句柄。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t* size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示当前历史接触点数组的长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/ive-xcomponent-oh-nativexcomponent-historicalpoint/ive-xcomponent-oh-nativexcomponent-historicalpoint",
              children: "OH_NativeXComponent_HistoricalPoint"
            }), "** historicalPoints"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向当前历史接触点数组的指针。"
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
            children: ["返回执行的状态代码。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h#anonymous",
              children: "OH_NATIVEXCOMPONENT_RESULT_SUCCESS"
            }), " - 执行成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h#anonymous",
              children: "OH_NATIVEXCOMPONENT_RESULT_BAD_PARAMETER"
            }), " - 传入参数异常。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativexcomponent_getmouseevent",
      children: "OH_NativeXComponent_GetMouseEvent()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeXComponent_GetMouseEvent(OH_NativeXComponent* component, const void* window, OH_NativeXComponent_MouseEvent* mouseEvent)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取ArkUI XComponent调度的鼠标事件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "* component"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const void* window"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示NativeWindow句柄。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/t-native-xcomponent-oh-nativexcomponent-mouseevent/t-native-xcomponent-oh-nativexcomponent-mouseevent",
              children: "OH_NativeXComponent_MouseEvent"
            }), "* mouseEvent"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向当前鼠标事件的指针。"
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
            children: ["返回执行的状态代码。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h#anonymous",
              children: "OH_NATIVEXCOMPONENT_RESULT_SUCCESS"
            }), " - 执行成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h#anonymous",
              children: "OH_NATIVEXCOMPONENT_RESULT_BAD_PARAMETER"
            }), " - 传入参数异常。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativexcomponent_registercallback",
      children: "OH_NativeXComponent_RegisterCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeXComponent_RegisterCallback(OH_NativeXComponent* component, OH_NativeXComponent_Callback* callback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为此", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
        children: "OH_NativeXComponent"
      }), "实例注册回调。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 8"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "* component"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/ent-native-xcomponent-oh-nativexcomponent-callback/ent-native-xcomponent-oh-nativexcomponent-callback",
              children: "OH_NativeXComponent_Callback"
            }), "* callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向Surface生命周期和触摸事件回调的指针。"
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
            children: ["返回执行的状态代码。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h#anonymous",
              children: "OH_NATIVEXCOMPONENT_RESULT_SUCCESS"
            }), " - 执行成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h#anonymous",
              children: "OH_NATIVEXCOMPONENT_RESULT_BAD_PARAMETER"
            }), " - 传入参数异常。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativexcomponent_registermouseeventcallback",
      children: "OH_NativeXComponent_RegisterMouseEventCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeXComponent_RegisterMouseEventCallback(OH_NativeXComponent* component, OH_NativeXComponent_MouseEvent_Callback* callback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为此", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
        children: "OH_NativeXComponent"
      }), "实例注册鼠标事件回调。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "* component"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/xcomponent-oh-nativexcomponent-mouseevent-callback/xcomponent-oh-nativexcomponent-mouseevent-callback",
              children: "OH_NativeXComponent_MouseEvent_Callback"
            }), "* callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向鼠标事件回调的指针。"
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
            children: ["返回执行的状态代码。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h#anonymous",
              children: "OH_NATIVEXCOMPONENT_RESULT_SUCCESS"
            }), " - 执行成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h#anonymous",
              children: "OH_NATIVEXCOMPONENT_RESULT_BAD_PARAMETER"
            }), " - 传入参数异常。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativexcomponent_getextramouseeventinfo",
      children: "OH_NativeXComponent_GetExtraMouseEventInfo()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeXComponent_GetExtraMouseEventInfo(OH_NativeXComponent* component, OH_NativeXComponent_ExtraMouseEventInfo** extraMouseEventInfo)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从此", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
        children: "OH_NativeXComponent"
      }), "实例中获取扩展的鼠标事件信息。"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "* component"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/xcomponent-oh-nativexcomponent-extramouseeventinfo/xcomponent-oh-nativexcomponent-extramouseeventinfo",
              children: "OH_NativeXComponent_ExtraMouseEventInfo"
            }), "** extraMouseEventInfo"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/xcomponent-oh-nativexcomponent-extramouseeventinfo/xcomponent-oh-nativexcomponent-extramouseeventinfo",
              children: "OH_NativeXComponent_ExtraMouseEventInfo"
            }), "类型指针的地址。"]
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
            children: ["返回执行的状态代码。  返回 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_NO_ERROR"
            }), " - 执行成功。  返回 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_PARAM_INVALID"
            }), " - 传入参数异常。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativexcomponent_getmouseeventmodifierkeystates",
      children: "OH_NativeXComponent_GetMouseEventModifierKeyStates()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeXComponent_GetMouseEventModifierKeyStates(OH_NativeXComponent_ExtraMouseEventInfo* extraMouseEventInfo, uint64_t* keys)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-struct/xcomponent-oh-nativexcomponent-extramouseeventinfo/xcomponent-oh-nativexcomponent-extramouseeventinfo",
        children: "OH_NativeXComponent_ExtraMouseEventInfo"
      }), "实例中获取功能键按压状态信息。"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/xcomponent-oh-nativexcomponent-extramouseeventinfo/xcomponent-oh-nativexcomponent-extramouseeventinfo",
              children: "OH_NativeXComponent_ExtraMouseEventInfo"
            }), "* extraMouseEventInfo"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向扩展的鼠标事件信息实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint64_t* keys"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示用于接收功能键按压状态信息的64位无符号整数的地址。"
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
            children: ["返回执行的状态代码。  返回 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_NO_ERROR"
            }), " - 执行成功。  返回 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_PARAM_INVALID"
            }), " - 传入参数异常。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativexcomponent_registerfocuseventcallback",
      children: "OH_NativeXComponent_RegisterFocusEventCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeXComponent_RegisterFocusEventCallback(OH_NativeXComponent* component, void (*callback)(OH_NativeXComponent* component, void* window))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为此", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
        children: "OH_NativeXComponent"
      }), "实例注册获焦事件回调。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "* component"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void (*callback)(OH_NativeXComponent* component, void* window)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向获焦事件回调的指针。- window: 表示NativeWindow句柄。"
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
            children: ["返回执行的状态代码。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h#anonymous",
              children: "OH_NATIVEXCOMPONENT_RESULT_SUCCESS"
            }), " - 执行成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h#anonymous",
              children: "OH_NATIVEXCOMPONENT_RESULT_BAD_PARAMETER"
            }), " - 传入参数异常。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativexcomponent_registerkeyeventcallback",
      children: "OH_NativeXComponent_RegisterKeyEventCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeXComponent_RegisterKeyEventCallback(OH_NativeXComponent* component, void (*callback)(OH_NativeXComponent* component, void* window))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为此", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
        children: "OH_NativeXComponent"
      }), "实例注册按键事件回调。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "* component"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void (*callback)(OH_NativeXComponent* component, void* window)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向按键事件回调的指针。- window: 表示NativeWindow句柄。"
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
            children: ["返回执行的状态代码。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h#anonymous",
              children: "OH_NATIVEXCOMPONENT_RESULT_SUCCESS"
            }), " - 执行成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h#anonymous",
              children: "OH_NATIVEXCOMPONENT_RESULT_BAD_PARAMETER"
            }), " - 传入参数异常。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativexcomponent_registerblureventcallback",
      children: "OH_NativeXComponent_RegisterBlurEventCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeXComponent_RegisterBlurEventCallback(OH_NativeXComponent* component, void (*callback)(OH_NativeXComponent* component, void* window))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为此", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
        children: "OH_NativeXComponent"
      }), "实例注册失焦事件回调。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "* component"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void (*callback)(OH_NativeXComponent* component, void* window)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向失焦事件回调的指针。- window: 表示NativeWindow句柄。"
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
            children: ["返回执行的状态代码。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h#anonymous",
              children: "OH_NATIVEXCOMPONENT_RESULT_SUCCESS"
            }), " - 执行成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h#anonymous",
              children: "OH_NATIVEXCOMPONENT_RESULT_BAD_PARAMETER"
            }), " - 传入参数异常。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativexcomponent_getkeyevent",
      children: "OH_NativeXComponent_GetKeyEvent()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeXComponent_GetKeyEvent(OH_NativeXComponent* component, OH_NativeXComponent_KeyEvent** keyEvent)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取ArkUI XComponent调度的按键事件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "* component"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/ent-native-xcomponent-oh-nativexcomponent-keyevent/ent-native-xcomponent-oh-nativexcomponent-keyevent",
              children: "OH_NativeXComponent_KeyEvent"
            }), "** keyEvent"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向当前按键事件指针的指针。"
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
            children: ["返回执行的状态代码。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h#anonymous",
              children: "OH_NATIVEXCOMPONENT_RESULT_SUCCESS"
            }), " - 执行成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h#anonymous",
              children: "OH_NATIVEXCOMPONENT_RESULT_BAD_PARAMETER"
            }), " - 传入参数异常。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativexcomponent_getkeyeventaction",
      children: "OH_NativeXComponent_GetKeyEventAction()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeXComponent_GetKeyEventAction(OH_NativeXComponent_KeyEvent* keyEvent, OH_NativeXComponent_KeyAction* action)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取传入按键事件的动作。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/ent-native-xcomponent-oh-nativexcomponent-keyevent/ent-native-xcomponent-oh-nativexcomponent-keyevent",
              children: "OH_NativeXComponent_KeyEvent"
            }), "* keyEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/ent-native-xcomponent-oh-nativexcomponent-keyevent/ent-native-xcomponent-oh-nativexcomponent-keyevent",
              children: "OH_NativeXComponent_KeyEvent"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-xcomponent-key-event-h/capi-native-xcomponent-key-event-h#oh_nativexcomponent_keyaction",
              children: "OH_NativeXComponent_KeyAction"
            }), "* action"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向按键事件动作的指针。"
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
            children: ["返回执行的状态代码。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h#anonymous",
              children: "OH_NATIVEXCOMPONENT_RESULT_SUCCESS"
            }), " - 执行成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h#anonymous",
              children: "OH_NATIVEXCOMPONENT_RESULT_BAD_PARAMETER"
            }), " - 传入参数异常。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativexcomponent_getkeyeventcode",
      children: "OH_NativeXComponent_GetKeyEventCode()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeXComponent_GetKeyEventCode(OH_NativeXComponent_KeyEvent* keyEvent, OH_NativeXComponent_KeyCode* code)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取传入按键事件的按键码。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/ent-native-xcomponent-oh-nativexcomponent-keyevent/ent-native-xcomponent-oh-nativexcomponent-keyevent",
              children: "OH_NativeXComponent_KeyEvent"
            }), "* keyEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/ent-native-xcomponent-oh-nativexcomponent-keyevent/ent-native-xcomponent-oh-nativexcomponent-keyevent",
              children: "OH_NativeXComponent_KeyEvent"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-xcomponent-key-event-h/capi-native-xcomponent-key-event-h#oh_nativexcomponent_keycode",
              children: "OH_NativeXComponent_KeyCode"
            }), "* code"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向按键事件按键码的指针。"
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
            children: ["返回执行的状态代码。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h#anonymous",
              children: "OH_NATIVEXCOMPONENT_RESULT_SUCCESS"
            }), " - 执行成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h#anonymous",
              children: "OH_NATIVEXCOMPONENT_RESULT_BAD_PARAMETER"
            }), " - 传入参数异常。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativexcomponent_getkeyeventsourcetype",
      children: "OH_NativeXComponent_GetKeyEventSourceType()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeXComponent_GetKeyEventSourceType(OH_NativeXComponent_KeyEvent* keyEvent, OH_NativeXComponent_EventSourceType* sourceType)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取传入按键事件的事件源类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/ent-native-xcomponent-oh-nativexcomponent-keyevent/ent-native-xcomponent-oh-nativexcomponent-keyevent",
              children: "OH_NativeXComponent_KeyEvent"
            }), "* keyEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/ent-native-xcomponent-oh-nativexcomponent-keyevent/ent-native-xcomponent-oh-nativexcomponent-keyevent",
              children: "OH_NativeXComponent_KeyEvent"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h#oh_nativexcomponent_eventsourcetype",
              children: "OH_NativeXComponent_EventSourceType"
            }), "* sourceType"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向按键事件事件源类型的指针。"
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
            children: ["返回执行的状态代码。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h#anonymous",
              children: "OH_NATIVEXCOMPONENT_RESULT_SUCCESS"
            }), " - 执行成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h#anonymous",
              children: "OH_NATIVEXCOMPONENT_RESULT_BAD_PARAMETER"
            }), " - 传入参数异常。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativexcomponent_getkeyeventdeviceid",
      children: "OH_NativeXComponent_GetKeyEventDeviceId()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeXComponent_GetKeyEventDeviceId(OH_NativeXComponent_KeyEvent* keyEvent, int64_t* deviceId)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取传入按键事件的设备id。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/ent-native-xcomponent-oh-nativexcomponent-keyevent/ent-native-xcomponent-oh-nativexcomponent-keyevent",
              children: "OH_NativeXComponent_KeyEvent"
            }), "* keyEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/ent-native-xcomponent-oh-nativexcomponent-keyevent/ent-native-xcomponent-oh-nativexcomponent-keyevent",
              children: "OH_NativeXComponent_KeyEvent"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int64_t* deviceId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向按键事件设备id的指针。"
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
            children: ["返回执行的状态代码。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h#anonymous",
              children: "OH_NATIVEXCOMPONENT_RESULT_SUCCESS"
            }), " - 执行成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h#anonymous",
              children: "OH_NATIVEXCOMPONENT_RESULT_BAD_PARAMETER"
            }), " - 传入参数异常。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativexcomponent_getkeyeventtimestamp",
      children: "OH_NativeXComponent_GetKeyEventTimestamp()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeXComponent_GetKeyEventTimestamp(OH_NativeXComponent_KeyEvent* keyEvent, int64_t* timestamp)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取传入按键事件的时间戳。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/ent-native-xcomponent-oh-nativexcomponent-keyevent/ent-native-xcomponent-oh-nativexcomponent-keyevent",
              children: "OH_NativeXComponent_KeyEvent"
            }), "* keyEvent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/ent-native-xcomponent-oh-nativexcomponent-keyevent/ent-native-xcomponent-oh-nativexcomponent-keyevent",
              children: "OH_NativeXComponent_KeyEvent"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int64_t* timestamp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向按键事件时间戳的指针。"
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
            children: ["返回执行的状态代码。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h#anonymous",
              children: "OH_NATIVEXCOMPONENT_RESULT_SUCCESS"
            }), " - 执行成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h#anonymous",
              children: "OH_NATIVEXCOMPONENT_RESULT_BAD_PARAMETER"
            }), " - 传入参数异常。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativexcomponent_getkeyeventmodifierkeystates",
      children: "OH_NativeXComponent_GetKeyEventModifierKeyStates()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeXComponent_GetKeyEventModifierKeyStates(OH_NativeXComponent_KeyEvent* keyEvent, uint64_t* keys)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从按键事件中获取功能键按压状态信息。"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/ent-native-xcomponent-oh-nativexcomponent-keyevent/ent-native-xcomponent-oh-nativexcomponent-keyevent",
              children: "OH_NativeXComponent_KeyEvent"
            }), "* keyEvent"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向按键事件的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint64_t* keys"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示用于接收功能键按压状态信息的64位无符号整数的地址。"
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
            children: ["返回执行的状态代码。  返回 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_NO_ERROR"
            }), " - 执行成功。  返回 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_PARAM_INVALID"
            }), " - 传入参数异常。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativexcomponent_getkeyeventnumlockstate",
      children: "OH_NativeXComponent_GetKeyEventNumLockState()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeXComponent_GetKeyEventNumLockState(OH_NativeXComponent_KeyEvent* keyEvent, bool* isNumLockOn)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从按键事件中获取NumLock（小键盘锁定）键的状态信息。"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/ent-native-xcomponent-oh-nativexcomponent-keyevent/ent-native-xcomponent-oh-nativexcomponent-keyevent",
              children: "OH_NativeXComponent_KeyEvent"
            }), "* keyEvent"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向按键事件的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool* isNumLockOn"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示用于接收NumLock（小键盘锁定）键状态的bool类型变量的地址。true表示小键盘锁定，false表示小键盘解锁。"
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
            children: ["返回执行的状态代码。  返回 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_NO_ERROR"
            }), " - 执行成功。  返回 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_PARAM_INVALID"
            }), " - 传入参数异常。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativexcomponent_getkeyeventcapslockstate",
      children: "OH_NativeXComponent_GetKeyEventCapsLockState()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeXComponent_GetKeyEventCapsLockState(OH_NativeXComponent_KeyEvent* keyEvent, bool* isCapsLockOn)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从按键事件中获取CapsLock（大写锁定）键的状态信息。"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/ent-native-xcomponent-oh-nativexcomponent-keyevent/ent-native-xcomponent-oh-nativexcomponent-keyevent",
              children: "OH_NativeXComponent_KeyEvent"
            }), "* keyEvent"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向按键事件的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool* isCapsLockOn"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示用于接收CapsLock（大写锁定）键状态的bool类型变量的地址。true表示大写处于锁定，false表示大写处于解锁。"
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
            children: ["返回执行的状态代码。  返回 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_NO_ERROR"
            }), " - 执行成功。  返回 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_PARAM_INVALID"
            }), " - 传入参数异常。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativexcomponent_getkeyeventscrolllockstate",
      children: "OH_NativeXComponent_GetKeyEventScrollLockState()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeXComponent_GetKeyEventScrollLockState(OH_NativeXComponent_KeyEvent* keyEvent, bool* isScrollLockOn)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从按键事件中获取ScrollLock（滚动锁定）键的状态信息。"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/ent-native-xcomponent-oh-nativexcomponent-keyevent/ent-native-xcomponent-oh-nativexcomponent-keyevent",
              children: "OH_NativeXComponent_KeyEvent"
            }), "* keyEvent"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向按键事件的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool* isScrollLockOn"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示用于接收ScrollLock（滚动锁定）键状态的bool类型变量的地址。true表示滚动处于锁定，false表示滚动处于解锁。"
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
            children: ["返回执行的状态代码。  返回 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_NO_ERROR"
            }), " - 执行成功。  返回 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_PARAM_INVALID"
            }), " - 传入参数异常。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativexcomponent_setexpectedframeraterange",
      children: "OH_NativeXComponent_SetExpectedFrameRateRange()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeXComponent_SetExpectedFrameRateRange(OH_NativeXComponent* component, OH_NativeXComponent_ExpectedRateRange* range)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置期望帧率范围。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "* component"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/e-xcomponent-oh-nativexcomponent-expectedraterange/e-xcomponent-oh-nativexcomponent-expectedraterange",
              children: "OH_NativeXComponent_ExpectedRateRange"
            }), "* range"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/e-xcomponent-oh-nativexcomponent-expectedraterange/e-xcomponent-oh-nativexcomponent-expectedraterange",
              children: "OH_NativeXComponent_ExpectedRateRange"
            }), "类型的期望帧率信息对象的指针。"]
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
            children: ["返回执行的状态代码。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h#anonymous",
              children: "OH_NATIVEXCOMPONENT_RESULT_SUCCESS"
            }), " - 执行成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h#anonymous",
              children: "OH_NATIVEXCOMPONENT_RESULT_BAD_PARAMETER"
            }), " - 传入参数异常。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativexcomponent_registeronframecallback",
      children: "OH_NativeXComponent_RegisterOnFrameCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeXComponent_RegisterOnFrameCallback(OH_NativeXComponent* component,void (*callback)(OH_NativeXComponent* component, uint64_t timestamp, uint64_t targetTimestamp))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为此", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
        children: "OH_NativeXComponent"
      }), "实例注册显示更新回调，并使能每帧回调此函数。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "* component"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void (*callback)(OH_NativeXComponent* component, uint64_t timestamp, uint64_t targetTimestamp)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向显示更新回调的指针。- timestamp: 当前帧到达的时间（单位：纳秒）。- targetTimestamp: 下一帧预期到达的时间（单位：纳秒）。"
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
            children: ["返回执行的状态代码。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h#anonymous",
              children: "OH_NATIVEXCOMPONENT_RESULT_SUCCESS"
            }), " - 执行成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h#anonymous",
              children: "OH_NATIVEXCOMPONENT_RESULT_BAD_PARAMETER"
            }), " - 传入参数异常。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativexcomponent_unregisteronframecallback",
      children: "OH_NativeXComponent_UnregisterOnFrameCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeXComponent_UnregisterOnFrameCallback(OH_NativeXComponent* component)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为此", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
        children: "OH_NativeXComponent"
      }), "实例取消注册回调函数，并关闭每帧回调此函数。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "* component"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "实例的指针。"]
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
            children: ["返回执行的状态代码。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h#anonymous",
              children: "OH_NATIVEXCOMPONENT_RESULT_SUCCESS"
            }), " - 执行成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h#anonymous",
              children: "OH_NATIVEXCOMPONENT_RESULT_BAD_PARAMETER"
            }), " - 传入参数异常。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativexcomponent_attachnativerootnode",
      children: "OH_NativeXComponent_AttachNativeRootNode()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeXComponent_AttachNativeRootNode(OH_NativeXComponent* component, ArkUI_NodeHandle root)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将通过ArkUI的Native接口创建出来的UI组件挂载到当前XComponent上。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "废弃版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "替代接口："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#oh_arkui_nodecontent_addnode",
        children: "OH_ArkUI_NodeContent_AddNode"
      })]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "* component"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-node8h/capi-arkui-nativemodule-arkui-node8h",
              children: "ArkUI_NodeHandle"
            }), " root"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向Native接口创建的组件实例的指针。"
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
            children: ["返回执行的状态代码。  返回 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h#anonymous",
              children: "OH_NATIVEXCOMPONENT_RESULT_SUCCESS"
            }), " - 成功。  返回 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h#anonymous",
              children: "OH_NATIVEXCOMPONENT_RESULT_BAD_PARAMETER"
            }), " - 参数异常。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativexcomponent_detachnativerootnode",
      children: "OH_NativeXComponent_DetachNativeRootNode()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeXComponent_DetachNativeRootNode(OH_NativeXComponent* component, ArkUI_NodeHandle root)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将ArkUI的Native组件从当前XComponent上卸载。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "废弃版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "替代接口："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#oh_arkui_nodecontent_removenode",
        children: "OH_ArkUI_NodeContent_RemoveNode"
      })]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "* component"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-node8h/capi-arkui-nativemodule-arkui-node8h",
              children: "ArkUI_NodeHandle"
            }), " root"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向Native接口创建的组件实例的指针。"
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
            children: ["返回执行的状态代码。  返回 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h#anonymous",
              children: "OH_NATIVEXCOMPONENT_RESULT_SUCCESS"
            }), " - 成功。  返回 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h#anonymous",
              children: "OH_NATIVEXCOMPONENT_RESULT_BAD_PARAMETER"
            }), " - 参数异常。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativexcomponent_registeruiinputeventcallback",
      children: "OH_NativeXComponent_RegisterUIInputEventCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeXComponent_RegisterUIInputEventCallback(OH_NativeXComponent *component,void (*callback)(OH_NativeXComponent *component, ArkUI_UIInputEvent *event,ArkUI_UIInputEvent_Type type),ArkUI_UIInputEvent_Type type)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为此", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
        children: "OH_NativeXComponent"
      }), "实例注册UI输入事件回调，并使能收到UI输入事件时回调此函数。当前仅支持轴事件。"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), " *component"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void (*callback)(OH_NativeXComponent *component, ArkUI_UIInputEvent *event,ArkUI_UIInputEvent_Type type)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向UI输入事件回调的指针。- event: 表示指向UI输入事件的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-ui-input-event-h/capi-ui-input-event-h#arkui_uiinputevent_type",
              children: "ArkUI_UIInputEvent_Type"
            }), " type"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示当前UI输入事件的类型。"
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
            children: ["返回执行的状态代码。  返回 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_NO_ERROR"
            }), " - 成功。  返回 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_PARAM_INVALID"
            }), " - 参数异常。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativexcomponent_registerontouchinterceptcallback",
      children: "OH_NativeXComponent_RegisterOnTouchInterceptCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeXComponent_RegisterOnTouchInterceptCallback(OH_NativeXComponent* component, HitTestMode (*callback)(OH_NativeXComponent* component, ArkUI_UIInputEvent* event))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为此", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
        children: "OH_NativeXComponent"
      }), "实例注册自定义事件拦截回调，并使能在做触摸测试时回调此函数。通过该回调获取到的事件对象不支持UIInput相关信息操作接口，建议切换为通过注册native node上的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#arkui_nodeeventtype",
        children: "NODE_ON_TOUCH_INTERCEPT"
      }), "通用事件来支持。"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "* component"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HitTestMode (*callback)(OH_NativeXComponent* component, ArkUI_UIInputEvent* event)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向自定义事件拦截回调的指针。- event: 表示指向UI输入事件的指针。"
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
            children: ["返回执行的状态代码。  返回 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_NO_ERROR"
            }), " - 成功。  返回 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_PARAM_INVALID"
            }), " - 参数异常。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativexcomponent_setneedsoftkeyboard",
      children: "OH_NativeXComponent_SetNeedSoftKeyboard()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeXComponent_SetNeedSoftKeyboard(OH_NativeXComponent* component, bool needSoftKeyboard)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为此", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
        children: "OH_NativeXComponent"
      }), "实例设置是否需要软键盘。"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "* component"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool needSoftKeyboard"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示此", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "实例是否需要软键盘。需要时为true，不需要时为false，默认值为false。"]
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
            children: ["返回执行的状态代码。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h#anonymous",
              children: "OH_NATIVEXCOMPONENT_RESULT_SUCCESS"
            }), " - 执行成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h#anonymous",
              children: "OH_NATIVEXCOMPONENT_RESULT_BAD_PARAMETER"
            }), " - 传入参数异常。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativexcomponent_registersurfaceshowcallback",
      children: "OH_NativeXComponent_RegisterSurfaceShowCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeXComponent_RegisterSurfaceShowCallback(OH_NativeXComponent* component, void (*callback)(OH_NativeXComponent* component, void* window))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为此", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
        children: "OH_NativeXComponent"
      }), "实例注册Surface显示回调，该回调在应用窗口已经从后台回到前台时触发。"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "* component"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void (*callback)(OH_NativeXComponent* component, void* window)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向Surface显示回调的指针。- window: 表示NativeWindow句柄。"
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
            children: ["返回执行的状态代码。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h#anonymous",
              children: "OH_NATIVEXCOMPONENT_RESULT_SUCCESS"
            }), " - 执行成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h#anonymous",
              children: "OH_NATIVEXCOMPONENT_RESULT_BAD_PARAMETER"
            }), " - 传入参数异常。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativexcomponent_registersurfacehidecallback",
      children: "OH_NativeXComponent_RegisterSurfaceHideCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeXComponent_RegisterSurfaceHideCallback(OH_NativeXComponent* component, void (*callback)(OH_NativeXComponent* component, void* window))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为此", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
        children: "OH_NativeXComponent"
      }), "实例注册Surface隐藏回调，该回调在应用窗口已经从前台进入后台时触发。"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "* component"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void (*callback)(OH_NativeXComponent* component, void* window)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向Surface隐藏回调的指针。- window: 表示NativeWindow句柄。"
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
            children: ["返回执行的状态代码。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h#anonymous",
              children: "OH_NATIVEXCOMPONENT_RESULT_SUCCESS"
            }), " - 执行成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h#anonymous",
              children: "OH_NATIVEXCOMPONENT_RESULT_BAD_PARAMETER"
            }), " - 传入参数异常。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativexcomponent_gettoucheventsourcetype",
      children: "OH_NativeXComponent_GetTouchEventSourceType()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeXComponent_GetTouchEventSourceType(OH_NativeXComponent* component, int32_t pointId, OH_NativeXComponent_EventSourceType* sourceType)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取ArkUI XComponent触摸事件的输入设备类型。"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "* component"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t pointId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示触摸点的id。仅当传入的id为触发该touch事件的触点id时，可正确返回输入设备类型，否则返回OH_NATIVEXCOMPONENT_RESULT_BAD_PARAMETER。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h#oh_nativexcomponent_eventsourcetype",
              children: "OH_NativeXComponent_EventSourceType"
            }), "* sourceType"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向返回设备类型的指针。"
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h#anonymous",
              children: "OH_NATIVEXCOMPONENT_RESULT_SUCCESS"
            }), " - 成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h#anonymous",
              children: "OH_NATIVEXCOMPONENT_RESULT_BAD_PARAMETER"
            }), " - 参数异常。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h#anonymous",
              children: "OH_NATIVEXCOMPONENT_RESULT_FAILED"
            }), " - 其他错误。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativexcomponent_getnativexcomponent",
      children: "OH_NativeXComponent_GetNativeXComponent()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_NativeXComponent* OH_NativeXComponent_GetNativeXComponent(ArkUI_NodeHandle node)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["基于Native接口创建的组件实例获取", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
        children: "OH_NativeXComponent"
      }), "类型的指针。"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-node8h/capi-arkui-nativemodule-arkui-node8h",
              children: "ArkUI_NodeHandle"
            }), " node"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向Native接口创建的组件实例的指针。"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "*"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "实例的指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativexcomponent_getnativeaccessibilityprovider",
      children: "OH_NativeXComponent_GetNativeAccessibilityProvider()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeXComponent_GetNativeAccessibilityProvider(OH_NativeXComponent* component, ArkUI_AccessibilityProvider** handle)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取ArkUI XComponent无障碍接入句柄指针。"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "* component"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/pi-arkui-accessibility-arkui-accessibilityprovider/pi-arkui-accessibility-arkui-accessibilityprovider",
              children: "ArkUI_AccessibilityProvider"
            }), "** handle"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/pi-arkui-accessibility-arkui-accessibilityprovider/pi-arkui-accessibility-arkui-accessibilityprovider",
              children: "ArkUI_AccessibilityProvider"
            }), "实例的指针。"]
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h#anonymous",
              children: "OH_NATIVEXCOMPONENT_RESULT_SUCCESS"
            }), " - 成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h#anonymous",
              children: "OH_NATIVEXCOMPONENT_RESULT_BAD_PARAMETER"
            }), " - 参数异常。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h#anonymous",
              children: "OH_NATIVEXCOMPONENT_RESULT_FAILED"
            }), " - 其他错误。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nativexcomponent_registerkeyeventcallbackwithresult",
      children: "OH_NativeXComponent_RegisterKeyEventCallbackWithResult()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_NativeXComponent_RegisterKeyEventCallbackWithResult(OH_NativeXComponent* component, bool (*callback)(OH_NativeXComponent* component, void* window))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为此", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
        children: "OH_NativeXComponent"
      }), "实例注册带有返回值的按键事件回调。通过此接口注册的按键事件回调都必须返回一个结果，即true或false。当返回值为true时，该事件将不会继续分发；当返回值为false时，该事件将按照事件处理流程继续分发。"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "* component"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/vexcomponent-native-xcomponent-oh-nativexcomponent/vexcomponent-native-xcomponent-oh-nativexcomponent",
              children: "OH_NativeXComponent"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool (*callback)(OH_NativeXComponent* component, void* window)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向按键事件回调的指针。- window: 表示NativeWindow句柄。当回调返回值为true时，该事件将不会继续分发；当回调返回值为false时，该事件将按照事件处理流程继续分发。"
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
            children: ["返回执行的状态代码。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h#anonymous",
              children: "OH_NATIVEXCOMPONENT_RESULT_SUCCESS"
            }), " - 回调函数注册成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h#anonymous",
              children: "OH_NATIVEXCOMPONENT_RESULT_BAD_PARAMETER"
            }), " - 传入参数异常。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_xcomponent_startimageanalyzer",
      children: "OH_ArkUI_XComponent_StartImageAnalyzer()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_XComponent_StartImageAnalyzer(ArkUI_NodeHandle node, void* userData,void (*callback)(ArkUI_NodeHandle node, ArkUI_XComponent_ImageAnalyzerState statusCode, void* userData))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为此XComponent组件实例开始图像AI分析，使用前需先使能图像AI分析能力。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-node8h/capi-arkui-nativemodule-arkui-node8h",
              children: "ArkUI_NodeHandle"
            }), " node"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示XComponent组件实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示开发者需要在回调函数执行时获取的数据的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void (*callback)(ArkUI_NodeHandle node, ArkUI_XComponent_ImageAnalyzerState statusCode, void* userData)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示图像AI分析状态刷新时触发的回调函数。- statusCode: 回调函数的入参之一，表示当前的图像分析状态。"
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
            children: ["返回执行的状态代码。  返回 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_NO_ERROR"
            }), " - 执行成功。  返回 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_PARAM_INVALID"
            }), " - 传入参数异常。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_xcomponent_stopimageanalyzer",
      children: "OH_ArkUI_XComponent_StopImageAnalyzer()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_XComponent_StopImageAnalyzer(ArkUI_NodeHandle node)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为此XComponent组件实例停止图像AI分析。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-node8h/capi-arkui-nativemodule-arkui-node8h",
              children: "ArkUI_NodeHandle"
            }), " node"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示XComponent组件实例。"
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
            children: ["返回执行的状态代码。  返回 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_NO_ERROR"
            }), " - 执行成功。  返回 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_PARAM_INVALID"
            }), " - 传入参数异常。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_surfaceholder_create",
      children: "OH_ArkUI_SurfaceHolder_Create()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_ArkUI_SurfaceHolder* OH_ArkUI_SurfaceHolder_Create(ArkUI_NodeHandle node)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建XComponent组件的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-struct/component-native-xcomponent-oh-arkui-surfaceholder/component-native-xcomponent-oh-arkui-surfaceholder",
        children: "OH_ArkUI_SurfaceHolder"
      }), "对象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 19"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-node8h/capi-arkui-nativemodule-arkui-node8h",
              children: "ArkUI_NodeHandle"
            }), " node"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向Native接口创建的XComponent组件实例的指针。"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/component-native-xcomponent-oh-arkui-surfaceholder/component-native-xcomponent-oh-arkui-surfaceholder",
              children: "OH_ArkUI_SurfaceHolder"
            }), "*"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回被创建的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/component-native-xcomponent-oh-arkui-surfaceholder/component-native-xcomponent-oh-arkui-surfaceholder",
              children: "OH_ArkUI_SurfaceHolder"
            }), "对象的指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_surfaceholder_dispose",
      children: "OH_ArkUI_SurfaceHolder_Dispose()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_ArkUI_SurfaceHolder_Dispose(OH_ArkUI_SurfaceHolder* surfaceHolder)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["销毁", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-struct/component-native-xcomponent-oh-arkui-surfaceholder/component-native-xcomponent-oh-arkui-surfaceholder",
        children: "OH_ArkUI_SurfaceHolder"
      }), "对象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 19"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/component-native-xcomponent-oh-arkui-surfaceholder/component-native-xcomponent-oh-arkui-surfaceholder",
              children: "OH_ArkUI_SurfaceHolder"
            }), "* surfaceHolder"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向需要销毁的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/component-native-xcomponent-oh-arkui-surfaceholder/component-native-xcomponent-oh-arkui-surfaceholder",
              children: "OH_ArkUI_SurfaceHolder"
            }), "实例的指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_surfaceholder_setuserdata",
      children: "OH_ArkUI_SurfaceHolder_SetUserData()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_SurfaceHolder_SetUserData(OH_ArkUI_SurfaceHolder* surfaceHolder, void* userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["向", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-struct/component-native-xcomponent-oh-arkui-surfaceholder/component-native-xcomponent-oh-arkui-surfaceholder",
        children: "OH_ArkUI_SurfaceHolder"
      }), "实例存储自定义数据。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 19"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/component-native-xcomponent-oh-arkui-surfaceholder/component-native-xcomponent-oh-arkui-surfaceholder",
              children: "OH_ArkUI_SurfaceHolder"
            }), "* surfaceHolder"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向存储自定义数据的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/component-native-xcomponent-oh-arkui-surfaceholder/component-native-xcomponent-oh-arkui-surfaceholder",
              children: "OH_ArkUI_SurfaceHolder"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向要存储的自定义数据的指针。"
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
            children: ["返回执行的状态代码。  返回 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_NO_ERROR"
            }), " - 执行成功。  返回 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_PARAM_INVALID"
            }), " - 传入参数异常。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_surfaceholder_getuserdata",
      children: "OH_ArkUI_SurfaceHolder_GetUserData()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void* OH_ArkUI_SurfaceHolder_GetUserData(OH_ArkUI_SurfaceHolder* surfaceHolder)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-struct/component-native-xcomponent-oh-arkui-surfaceholder/component-native-xcomponent-oh-arkui-surfaceholder",
        children: "OH_ArkUI_SurfaceHolder"
      }), "实例存储的自定义数据。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 19"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/component-native-xcomponent-oh-arkui-surfaceholder/component-native-xcomponent-oh-arkui-surfaceholder",
              children: "OH_ArkUI_SurfaceHolder"
            }), "* surfaceHolder"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向存储自定义数据的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/component-native-xcomponent-oh-arkui-surfaceholder/component-native-xcomponent-oh-arkui-surfaceholder",
              children: "OH_ArkUI_SurfaceHolder"
            }), "实例的指针。"]
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
            children: "void*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回自定义数据。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_surfacecallback_create",
      children: "OH_ArkUI_SurfaceCallback_Create()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_ArkUI_SurfaceCallback* OH_ArkUI_SurfaceCallback_Create()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-struct/mponent-native-xcomponent-oh-arkui-surfacecallback/mponent-native-xcomponent-oh-arkui-surfacecallback",
        children: "OH_ArkUI_SurfaceCallback"
      }), "对象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 19"]
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/mponent-native-xcomponent-oh-arkui-surfacecallback/mponent-native-xcomponent-oh-arkui-surfacecallback",
              children: "OH_ArkUI_SurfaceCallback"
            }), "*"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回创建的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/mponent-native-xcomponent-oh-arkui-surfacecallback/mponent-native-xcomponent-oh-arkui-surfacecallback",
              children: "OH_ArkUI_SurfaceCallback"
            }), "对象的指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_surfacecallback_dispose",
      children: "OH_ArkUI_SurfaceCallback_Dispose()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_ArkUI_SurfaceCallback_Dispose(OH_ArkUI_SurfaceCallback* callback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["销毁", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-struct/mponent-native-xcomponent-oh-arkui-surfacecallback/mponent-native-xcomponent-oh-arkui-surfacecallback",
        children: "OH_ArkUI_SurfaceCallback"
      }), "对象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 19"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/mponent-native-xcomponent-oh-arkui-surfacecallback/mponent-native-xcomponent-oh-arkui-surfacecallback",
              children: "OH_ArkUI_SurfaceCallback"
            }), "* callback"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向需要销毁的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/mponent-native-xcomponent-oh-arkui-surfacecallback/mponent-native-xcomponent-oh-arkui-surfacecallback",
              children: "OH_ArkUI_SurfaceCallback"
            }), "对象的指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_surfacecallback_setsurfacecreatedevent",
      children: "OH_ArkUI_SurfaceCallback_SetSurfaceCreatedEvent()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_ArkUI_SurfaceCallback_SetSurfaceCreatedEvent(OH_ArkUI_SurfaceCallback* callback,void (*onSurfaceCreated)(OH_ArkUI_SurfaceHolder* surfaceHolder))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置Surface生命周期回调中的创建回调事件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 19"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/mponent-native-xcomponent-oh-arkui-surfacecallback/mponent-native-xcomponent-oh-arkui-surfacecallback",
              children: "OH_ArkUI_SurfaceCallback"
            }), "* callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向Surface生命周期回调的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void (*onSurfaceCreated)(OH_ArkUI_SurfaceHolder* surfaceHolder)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示声明Surface创建时会触发的回调事件。- surfaceHolder: 表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/component-native-xcomponent-oh-arkui-surfaceholder/component-native-xcomponent-oh-arkui-surfaceholder",
              children: "OH_ArkUI_SurfaceHolder"
            }), "实例的指针。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_surfacecallback_setsurfacechangedevent",
      children: "OH_ArkUI_SurfaceCallback_SetSurfaceChangedEvent()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_ArkUI_SurfaceCallback_SetSurfaceChangedEvent(OH_ArkUI_SurfaceCallback* callback,void (*onSurfaceChanged)(OH_ArkUI_SurfaceHolder* surfaceHolder, uint64_t width, uint64_t height))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置Surface生命周期回调中的大小改变回调事件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 19"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/mponent-native-xcomponent-oh-arkui-surfacecallback/mponent-native-xcomponent-oh-arkui-surfacecallback",
              children: "OH_ArkUI_SurfaceCallback"
            }), "* callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向Surface生命周期回调的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void (*onSurfaceChanged)(OH_ArkUI_SurfaceHolder* surfaceHolder, uint64_t width, uint64_t height)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示声明Surface大小改变时会触发的回调事件。- surfaceHolder: 表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/component-native-xcomponent-oh-arkui-surfaceholder/component-native-xcomponent-oh-arkui-surfaceholder",
              children: "OH_ArkUI_SurfaceHolder"
            }), "实例的指针。- width: 表示Surface大小变化后的宽度。单位：vp。- height: 表示Surface大小变化后的高度。单位：vp。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_surfacecallback_setsurfacedestroyedevent",
      children: "OH_ArkUI_SurfaceCallback_SetSurfaceDestroyedEvent()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_ArkUI_SurfaceCallback_SetSurfaceDestroyedEvent(OH_ArkUI_SurfaceCallback* callback,void (*onSurfaceDestroyed)(OH_ArkUI_SurfaceHolder* surfaceHolder))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置Surface生命周期回调中的销毁回调事件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 19"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/mponent-native-xcomponent-oh-arkui-surfacecallback/mponent-native-xcomponent-oh-arkui-surfacecallback",
              children: "OH_ArkUI_SurfaceCallback"
            }), "* callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向Surface生命周期回调的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void (*onSurfaceDestroyed)(OH_ArkUI_SurfaceHolder* surfaceHolder)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示声明Surface销毁时会触发的回调事件。- surfaceHolder: 表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/component-native-xcomponent-oh-arkui-surfaceholder/component-native-xcomponent-oh-arkui-surfaceholder",
              children: "OH_ArkUI_SurfaceHolder"
            }), "实例的指针。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_surfaceholder_addsurfacecallback",
      children: "OH_ArkUI_SurfaceHolder_AddSurfaceCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_SurfaceHolder_AddSurfaceCallback(OH_ArkUI_SurfaceHolder* surfaceHolder,OH_ArkUI_SurfaceCallback* callback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["添加Surface生命周期回调到", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-struct/component-native-xcomponent-oh-arkui-surfaceholder/component-native-xcomponent-oh-arkui-surfaceholder",
        children: "OH_ArkUI_SurfaceHolder"
      }), "实例。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 19"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/component-native-xcomponent-oh-arkui-surfaceholder/component-native-xcomponent-oh-arkui-surfaceholder",
              children: "OH_ArkUI_SurfaceHolder"
            }), "* surfaceHolder"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/component-native-xcomponent-oh-arkui-surfaceholder/component-native-xcomponent-oh-arkui-surfaceholder",
              children: "OH_ArkUI_SurfaceHolder"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/mponent-native-xcomponent-oh-arkui-surfacecallback/mponent-native-xcomponent-oh-arkui-surfacecallback",
              children: "OH_ArkUI_SurfaceCallback"
            }), "* callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向新回调的指针。"
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
            children: ["返回执行的状态代码。  返回 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_NO_ERROR"
            }), " - 执行成功。  返回 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_PARAM_INVALID"
            }), " - 传入参数异常。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_surfaceholder_removesurfacecallback",
      children: "OH_ArkUI_SurfaceHolder_RemoveSurfaceCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_SurfaceHolder_RemoveSurfaceCallback(OH_ArkUI_SurfaceHolder* surfaceHolder,OH_ArkUI_SurfaceCallback* callback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["删除", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-struct/component-native-xcomponent-oh-arkui-surfaceholder/component-native-xcomponent-oh-arkui-surfaceholder",
        children: "OH_ArkUI_SurfaceHolder"
      }), "实例的先前添加的Surface生命周期回调。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 19"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/component-native-xcomponent-oh-arkui-surfaceholder/component-native-xcomponent-oh-arkui-surfaceholder",
              children: "OH_ArkUI_SurfaceHolder"
            }), "* surfaceHolder"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/component-native-xcomponent-oh-arkui-surfaceholder/component-native-xcomponent-oh-arkui-surfaceholder",
              children: "OH_ArkUI_SurfaceHolder"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/mponent-native-xcomponent-oh-arkui-surfacecallback/mponent-native-xcomponent-oh-arkui-surfacecallback",
              children: "OH_ArkUI_SurfaceCallback"
            }), "* callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向需要删除的回调的指针。"
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
            children: ["返回执行的状态代码。  返回 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_NO_ERROR"
            }), " - 执行成功。  返回 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_PARAM_INVALID"
            }), " - 传入参数异常。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_xcomponent_getnativewindow",
      children: "OH_ArkUI_XComponent_GetNativeWindow()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OHNativeWindow* OH_ArkUI_XComponent_GetNativeWindow(OH_ArkUI_SurfaceHolder* surfaceHolder)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-struct/component-native-xcomponent-oh-arkui-surfaceholder/component-native-xcomponent-oh-arkui-surfaceholder",
        children: "OH_ArkUI_SurfaceHolder"
      }), "实例关联的NativeWindow。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 19"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/component-native-xcomponent-oh-arkui-surfaceholder/component-native-xcomponent-oh-arkui-surfaceholder",
              children: "OH_ArkUI_SurfaceHolder"
            }), "* surfaceHolder"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/component-native-xcomponent-oh-arkui-surfaceholder/component-native-xcomponent-oh-arkui-surfaceholder",
              children: "OH_ArkUI_SurfaceHolder"
            }), "实例的指针。"]
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/oh-nativexcomponent-native-xcomponent-nativewindow/oh-nativexcomponent-native-xcomponent-nativewindow",
              children: "NativeWindow"
            }), "*"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/component-native-xcomponent-oh-arkui-surfaceholder/component-native-xcomponent-oh-arkui-surfaceholder",
              children: "OH_ArkUI_SurfaceHolder"
            }), "实例关联的NativeWindow。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_xcomponent_setautoinitialize",
      children: "OH_ArkUI_XComponent_SetAutoInitialize()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_XComponent_SetAutoInitialize(ArkUI_NodeHandle node, bool autoInitialize)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置XComponent组件是否需要自动初始化Surface的标志位。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 19"]
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
            children: "表示指向XComponent组件实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool autoInitialize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示XComponent组件是否需要自动初始化Surface。如果autoInitialize值是true，OnSurfaceCreated回调会在挂树时被触发，OnSurfaceDestroyed回调会在下树时被触发。false表示组件不需要自动初始化Surface。  autoInitialize默认值是true。"
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
            children: ["返回执行的状态代码。  返回 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_NO_ERROR"
            }), " - 执行成功。  返回 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_PARAM_INVALID"
            }), " - 传入参数异常。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_xcomponent_initialize",
      children: "OH_ArkUI_XComponent_Initialize()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_XComponent_Initialize(ArkUI_NodeHandle node)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "初始化XComponent组件持有的Surface。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 19"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-node8h/capi-arkui-nativemodule-arkui-node8h",
              children: "ArkUI_NodeHandle"
            }), " node"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向XComponent组件实例的指针。"
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
            children: ["返回执行的状态代码。  返回 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_NO_ERROR"
            }), " - 执行成功。  返回 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_PARAM_INVALID"
            }), " - 传入参数异常。  返回 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_XCOMPONENT_STATE_INVALID"
            }), " - XComponent持有的Surface已经被初始化。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_xcomponent_finalize",
      children: "OH_ArkUI_XComponent_Finalize()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_XComponent_Finalize(ArkUI_NodeHandle node)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "销毁XComponent组件持有的Surface。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 19"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-node8h/capi-arkui-nativemodule-arkui-node8h",
              children: "ArkUI_NodeHandle"
            }), " node"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示指向XComponent组件实例的指针。"
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
            children: ["返回执行的状态代码。  返回 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_NO_ERROR"
            }), " - 执行成功。  返回 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_PARAM_INVALID"
            }), " - 传入参数异常。  返回 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_XCOMPONENT_STATE_INVALID"
            }), " - XComponent持有的Surface已经被销毁。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_xcomponent_isinitialized",
      children: "OH_ArkUI_XComponent_IsInitialized()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_XComponent_IsInitialized(ArkUI_NodeHandle node, bool* isInitialized)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取XComponent组件是否已经初始化的标志位。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 19"]
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
            children: "表示指向XComponent组件实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool* isInitialized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示XComponent组件是否已经初始化Surface。true表示组件已初始化Surface，false表示组件未初始化Surface。"
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
            children: ["返回执行的状态代码。  返回 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_NO_ERROR"
            }), " - 执行成功。  返回 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_PARAM_INVALID"
            }), " - 传入参数异常。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_xcomponent_setexpectedframeraterange",
      children: "OH_ArkUI_XComponent_SetExpectedFrameRateRange()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_XComponent_SetExpectedFrameRateRange(ArkUI_NodeHandle node, OH_NativeXComponent_ExpectedRateRange range)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为此XComponent组件实例设置期望帧率。"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-node8h/capi-arkui-nativemodule-arkui-node8h",
              children: "ArkUI_NodeHandle"
            }), " node"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示XComponent组件实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/e-xcomponent-oh-nativexcomponent-expectedraterange/e-xcomponent-oh-nativexcomponent-expectedraterange",
              children: "OH_NativeXComponent_ExpectedRateRange"
            }), " range"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/e-xcomponent-oh-nativexcomponent-expectedraterange/e-xcomponent-oh-nativexcomponent-expectedraterange",
              children: "OH_NativeXComponent_ExpectedRateRange"
            }), "类型的期望帧率信息对象。"]
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
            children: ["返回执行的状态代码。  返回 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_NO_ERROR"
            }), " - 执行成功。  返回 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_PARAM_INVALID"
            }), " - 传入参数异常。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_xcomponent_registeronframecallback",
      children: "OH_ArkUI_XComponent_RegisterOnFrameCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_XComponent_RegisterOnFrameCallback(ArkUI_NodeHandle node,void (*callback)(ArkUI_NodeHandle node, uint64_t timestamp, uint64_t targetTimestamp))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为此XComponent组件实例注册帧回调函数。"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-node8h/capi-arkui-nativemodule-arkui-node8h",
              children: "ArkUI_NodeHandle"
            }), " node"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示XComponent组件实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void (*callback)(ArkUI_NodeHandle node, uint64_t timestamp, uint64_t targetTimestamp)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示执行帧回调函数的指针。- timestamp: 当前帧到达的时间（单位：纳秒）。- targetTimestamp: 下一帧预期到达的时间（单位：纳秒）。"
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
            children: ["返回执行的状态代码。  返回 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_NO_ERROR"
            }), " - 执行成功。  返回 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_PARAM_INVALID"
            }), " - 传入参数异常。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_xcomponent_unregisteronframecallback",
      children: "OH_ArkUI_XComponent_UnregisterOnFrameCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_XComponent_UnregisterOnFrameCallback(ArkUI_NodeHandle node)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为此XComponent组件实例取消注册帧回调函数。"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-node8h/capi-arkui-nativemodule-arkui-node8h",
              children: "ArkUI_NodeHandle"
            }), " node"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示XComponent组件实例。"
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
            children: ["返回执行的状态代码。  返回 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_NO_ERROR"
            }), " - 执行成功。  返回 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_PARAM_INVALID"
            }), " - 传入参数异常。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_xcomponent_setneedsoftkeyboard",
      children: "OH_ArkUI_XComponent_SetNeedSoftKeyboard()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_XComponent_SetNeedSoftKeyboard(ArkUI_NodeHandle node, bool needSoftKeyboard)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为此XComponent组件实例设置是否需要软键盘。"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-node8h/capi-arkui-nativemodule-arkui-node8h",
              children: "ArkUI_NodeHandle"
            }), " node"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示XComponent组件实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool needSoftKeyboard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示是否需要软键盘。需要时为true，不需要时为false，默认值为false。"
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
            children: ["返回执行的状态代码。  返回 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_NO_ERROR"
            }), " - 执行成功。  返回 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_PARAM_INVALID"
            }), " - 传入参数异常。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_accessibilityprovider_create",
      children: "OH_ArkUI_AccessibilityProvider_Create()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ArkUI_AccessibilityProvider* OH_ArkUI_AccessibilityProvider_Create(ArkUI_NodeHandle node)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["基于此XComponent实例创建", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-struct/pi-arkui-accessibility-arkui-accessibilityprovider/pi-arkui-accessibility-arkui-accessibilityprovider",
        children: "ArkUI_AccessibilityProvider"
      }), "实例。"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-node8h/capi-arkui-nativemodule-arkui-node8h",
              children: "ArkUI_NodeHandle"
            }), " node"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示XComponent组件实例。"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/pi-arkui-accessibility-arkui-accessibilityprovider/pi-arkui-accessibility-arkui-accessibilityprovider",
              children: "ArkUI_AccessibilityProvider"
            }), "*"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/pi-arkui-accessibility-arkui-accessibilityprovider/pi-arkui-accessibility-arkui-accessibilityprovider",
              children: "ArkUI_AccessibilityProvider"
            }), "类型的指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_accessibilityprovider_dispose",
      children: "OH_ArkUI_AccessibilityProvider_Dispose()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_ArkUI_AccessibilityProvider_Dispose(ArkUI_AccessibilityProvider* provider)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["销毁由Native接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h#oh_arkui_accessibilityprovider_create",
        children: "OH_ArkUI_AccessibilityProvider_Create"
      }), "创建的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-struct/pi-arkui-accessibility-arkui-accessibilityprovider/pi-arkui-accessibility-arkui-accessibilityprovider",
        children: "ArkUI_AccessibilityProvider"
      }), "实例。"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/pi-arkui-accessibility-arkui-accessibilityprovider/pi-arkui-accessibility-arkui-accessibilityprovider",
              children: "ArkUI_AccessibilityProvider"
            }), "* provider"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示由Native接口", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h#oh_arkui_accessibilityprovider_create",
              children: "OH_ArkUI_AccessibilityProvider_Create"
            }), "创建的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/pi-arkui-accessibility-arkui-accessibilityprovider/pi-arkui-accessibility-arkui-accessibilityprovider",
              children: "ArkUI_AccessibilityProvider"
            }), "实例。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_surfacecallback_setsurfaceshowevent",
      children: "OH_ArkUI_SurfaceCallback_SetSurfaceShowEvent()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_ArkUI_SurfaceCallback_SetSurfaceShowEvent(OH_ArkUI_SurfaceCallback* callback,void (*onSurfaceShow)(OH_ArkUI_SurfaceHolder* surfaceHolder))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为此", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-struct/mponent-native-xcomponent-oh-arkui-surfacecallback/mponent-native-xcomponent-oh-arkui-surfacecallback",
        children: "OH_ArkUI_SurfaceCallback"
      }), "实例设置Surface显示回调，该回调在应用窗口已经从后台回到前台时触发。"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/mponent-native-xcomponent-oh-arkui-surfacecallback/mponent-native-xcomponent-oh-arkui-surfacecallback",
              children: "OH_ArkUI_SurfaceCallback"
            }), "* callback"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/mponent-native-xcomponent-oh-arkui-surfacecallback/mponent-native-xcomponent-oh-arkui-surfacecallback",
              children: "OH_ArkUI_SurfaceCallback"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onSurfaceShow"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示Surface显示回调函数指针。- surfaceHolder: 表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/component-native-xcomponent-oh-arkui-surfaceholder/component-native-xcomponent-oh-arkui-surfaceholder",
              children: "OH_ArkUI_SurfaceHolder"
            }), "实例的指针。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_surfacecallback_setsurfacehideevent",
      children: "OH_ArkUI_SurfaceCallback_SetSurfaceHideEvent()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_ArkUI_SurfaceCallback_SetSurfaceHideEvent(OH_ArkUI_SurfaceCallback* callback,void (*onSurfaceHide)(OH_ArkUI_SurfaceHolder* surfaceHolder))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为此", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-struct/mponent-native-xcomponent-oh-arkui-surfacecallback/mponent-native-xcomponent-oh-arkui-surfacecallback",
        children: "OH_ArkUI_SurfaceCallback"
      }), "实例设置Surface隐藏回调，该回调在应用窗口已经从前台进入后台时触发。"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/mponent-native-xcomponent-oh-arkui-surfacecallback/mponent-native-xcomponent-oh-arkui-surfacecallback",
              children: "OH_ArkUI_SurfaceCallback"
            }), "* callback"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/mponent-native-xcomponent-oh-arkui-surfacecallback/mponent-native-xcomponent-oh-arkui-surfacecallback",
              children: "OH_ArkUI_SurfaceCallback"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onSurfaceHide"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示Surface隐藏回调函数指针。- surfaceHolder: 表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/component-native-xcomponent-oh-arkui-surfaceholder/component-native-xcomponent-oh-arkui-surfaceholder",
              children: "OH_ArkUI_SurfaceHolder"
            }), "实例的指针。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_xcomponentsurfaceconfig_create",
      children: "OH_ArkUI_XComponentSurfaceConfig_Create()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ArkUI_XComponentSurfaceConfig* OH_ArkUI_XComponentSurfaceConfig_Create()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建XComponent组件的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-struct/nt-native-xcomponent-arkui-xcomponentsurfaceconfig/nt-native-xcomponent-arkui-xcomponentsurfaceconfig",
        children: "ArkUI_XComponentSurfaceConfig"
      }), "对象。"]
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/nt-native-xcomponent-arkui-xcomponentsurfaceconfig/nt-native-xcomponent-arkui-xcomponentsurfaceconfig",
              children: "ArkUI_XComponentSurfaceConfig"
            }), "*"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回创建的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/nt-native-xcomponent-arkui-xcomponentsurfaceconfig/nt-native-xcomponent-arkui-xcomponentsurfaceconfig",
              children: "ArkUI_XComponentSurfaceConfig"
            }), "对象的指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_xcomponentsurfaceconfig_dispose",
      children: "OH_ArkUI_XComponentSurfaceConfig_Dispose()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_ArkUI_XComponentSurfaceConfig_Dispose(ArkUI_XComponentSurfaceConfig* config)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["销毁", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-struct/nt-native-xcomponent-arkui-xcomponentsurfaceconfig/nt-native-xcomponent-arkui-xcomponentsurfaceconfig",
        children: "ArkUI_XComponentSurfaceConfig"
      }), "对象。"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/nt-native-xcomponent-arkui-xcomponentsurfaceconfig/nt-native-xcomponent-arkui-xcomponentsurfaceconfig",
              children: "ArkUI_XComponentSurfaceConfig"
            }), "* config"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向需要销毁的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/nt-native-xcomponent-arkui-xcomponentsurfaceconfig/nt-native-xcomponent-arkui-xcomponentsurfaceconfig",
              children: "ArkUI_XComponentSurfaceConfig"
            }), "对象的指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_xcomponentsurfaceconfig_setisopaque",
      children: "OH_ArkUI_XComponentSurfaceConfig_SetIsOpaque()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_ArkUI_XComponentSurfaceConfig_SetIsOpaque(ArkUI_XComponentSurfaceConfig* config, bool isOpaque)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置XComponent组件持有的Surface在渲染时是否被视为不透明，无论该Surface是否存在半透明像素。"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/nt-native-xcomponent-arkui-xcomponentsurfaceconfig/nt-native-xcomponent-arkui-xcomponentsurfaceconfig",
              children: "ArkUI_XComponentSurfaceConfig"
            }), "* config"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/nt-native-xcomponent-arkui-xcomponentsurfaceconfig/nt-native-xcomponent-arkui-xcomponentsurfaceconfig",
              children: "ArkUI_XComponentSurfaceConfig"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool isOpaque"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示设置XComponent组件持有的Surface在渲染时是否需要被视为不透明。true表示需要被视为不透明，false表示不需要被视为不透明，默认值为false，即在渲染时会应用Surface中绘制内容像素的透明度。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_surfaceholder_setsurfaceconfig",
      children: "OH_ArkUI_SurfaceHolder_SetSurfaceConfig()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_SurfaceHolder_SetSurfaceConfig(OH_ArkUI_SurfaceHolder* surfaceHolder, ArkUI_XComponentSurfaceConfig *config)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-struct/component-native-xcomponent-oh-arkui-surfaceholder/component-native-xcomponent-oh-arkui-surfaceholder",
        children: "OH_ArkUI_SurfaceHolder"
      }), "实例设置Surface选项。"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/component-native-xcomponent-oh-arkui-surfaceholder/component-native-xcomponent-oh-arkui-surfaceholder",
              children: "OH_ArkUI_SurfaceHolder"
            }), "* surfaceHolder"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/component-native-xcomponent-oh-arkui-surfaceholder/component-native-xcomponent-oh-arkui-surfaceholder",
              children: "OH_ArkUI_SurfaceHolder"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/nt-native-xcomponent-arkui-xcomponentsurfaceconfig/nt-native-xcomponent-arkui-xcomponentsurfaceconfig",
              children: "ArkUI_XComponentSurfaceConfig"
            }), " *config"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/nt-native-xcomponent-arkui-xcomponentsurfaceconfig/nt-native-xcomponent-arkui-xcomponentsurfaceconfig",
              children: "ArkUI_XComponentSurfaceConfig"
            }), "实例的指针。"]
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
            children: ["返回执行结果。  返回 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_NO_ERROR"
            }), " - 执行成功。  返回 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_PARAM_INVALID"
            }), " - 传入参数异常。"]
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