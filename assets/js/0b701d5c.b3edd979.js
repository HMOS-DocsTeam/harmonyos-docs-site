"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["968728"], {
852396(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_display_manager_native_display_manager_native_display_manager_md_0b7_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-display-manager-native-display-manager-native-display-manager-md-0b7.json
var site_docs_arkui_display_manager_native_display_manager_native_display_manager_md_0b7_namespaceObject = JSON.parse('{"id":"arkui/display-manager/native-display-manager/native-display-manager","title":"使用OH_DisplayManager实现屏幕基础信息查询和状态监听 (C/C++)","description":"场景介绍","source":"@site/docs/arkui/display-manager/native-display-manager/native-display-manager.md","sourceDirName":"arkui/display-manager/native-display-manager","slug":"/arkui/display-manager/native-display-manager/","permalink":"/harmonyos-docs-site/arkui/display-manager/native-display-manager/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"使用OH_DisplayManager实现屏幕基础信息查询和状态监听 (C/C++)","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/native-display-manager","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"屏幕管理简介","permalink":"/harmonyos-docs-site/arkui/display-manager/displaymanager-overview/"},"next":{"title":"使用Display实现屏幕属性查询及状态监听 (ArkTS)","permalink":"/harmonyos-docs-site/arkui/display-manager/screenproperty-guideline/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/display-manager/native-display-manager/native-display-manager.md


const frontMatter = {
	title: '使用OH_DisplayManager实现屏幕基础信息查询和状态监听 (C/C++)',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/native-display-manager',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '使用OH_DisplayManager实现屏幕基础信息查询和状态监听 (C/C++)';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "基本概念",
  "id": "基本概念",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "在CMake脚本中链接动态库",
  "id": "在cmake脚本中链接动态库",
  "level": 2
}, {
  "value": "添加头文件",
  "id": "添加头文件",
  "level": 2
}, {
  "value": "获取屏幕状态",
  "id": "获取屏幕状态",
  "level": 2
}, {
  "value": "监听屏幕状态变化",
  "id": "监听屏幕状态变化",
  "level": 2
}, {
  "value": "监听折叠设备状态变化",
  "id": "监听折叠设备状态变化",
  "level": 2
}, {
  "value": "注册函数",
  "id": "注册函数",
  "level": 2
}, {
  "value": "注册模块",
  "id": "注册模块",
  "level": 2
}, {
  "value": "在Index.ets文件中调用函数",
  "id": "在indexets文件中调用函数",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "使用oh_displaymanager实现屏幕基础信息查询和状态监听-cc",
        children: "使用OH_DisplayManager实现屏幕基础信息查询和状态监听 (C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-module/capi-oh-displaymanager/capi-oh-displaymanager",
        children: "OH_DisplayManager"
      }), "屏幕管理模块用于提供屏幕的信息查询、屏幕状态变化监听、折叠设备的折叠状态变化监听等能力，应用可根据对应的屏幕信息、屏幕状态变化、屏幕折叠状态适配不同的UI界面显示。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持查询的屏幕信息，包括屏幕的分辨率、物理像素密度、逻辑像素密度、刷新率、屏幕尺寸、屏幕旋转方向、屏幕旋转角度等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持屏幕状态变化的监听，包括屏幕旋转变化，屏幕分辨率变化、屏幕刷新率变化等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持查询当前设备是否为可折叠设备，同时支持折叠状态（展开/折叠）变化的监听。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "屏幕的物理像素密度(densityDPI)：代表每英寸屏幕所拥有的物理像素点数。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "屏幕的逻辑像素的密度(densityPixels)：代表物理像素与逻辑像素的缩放系数比，计算方法为物理像素密度除以160。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["常用接口如下表所示。更多API说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-module/capi-oh-displaymanager/capi-oh-displaymanager",
        children: "OH_DisplayManager"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeDisplayManager_GetDefaultDisplayRotation(NativeDisplayManager_Rotation *displayRotation)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取默认屏幕的旋转角度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeDisplayManager_CreateDefaultDisplayCutoutInfo(NativeDisplayManager_CutoutInfo **cutoutInfo)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取挖孔屏、刘海屏、瀑布屏等不可用屏幕区域信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeDisplayManager_DestroyDefaultDisplayCutoutInfo(NativeDisplayManager_CutoutInfo *cutoutInfo)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁挖孔屏、刘海屏、瀑布屏等不可用屏幕区域信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeDisplayManager_IsFoldable()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询设备是否可折叠。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeDisplayManager_RegisterDisplayChangeListener( OH_NativeDisplayManager_DisplayChangeCallback displayChangeCallback, uint32_t *listenerIndex)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册屏幕状态变化监听（如旋转变化、刷新率、DPI、分辨率等）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeDisplayManager_UnregisterDisplayChangeListener(uint32_t listenerIndex)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消屏幕状态变化监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeDisplayManager_RegisterFoldDisplayModeChangeListener( OH_NativeDisplayManager_FoldDisplayModeChangeCallback displayModeChangeCallback, uint32_t *listenerIndex)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册屏幕展开、折叠状态变化监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeDisplayManager_UnregisterFoldDisplayModeChangeListener(uint32_t listenerIndex)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消屏幕展开、折叠状态变化监听。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "在cmake脚本中链接动态库",
      children: "在CMake脚本中链接动态库"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "target_link_libraries(entry PUBLIC libhilog_ndk.z.so)\ntarget_link_libraries(entry PUBLIC libnative_display_manager.so )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "添加头文件",
      children: "添加头文件"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <window_manager/oh_display_info.h>\n#include <window_manager/oh_display_manager.h>\n#include <hilog/log.h>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "获取屏幕状态",
      children: "获取屏幕状态"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "可以通过OH_NativeDisplayManager_GetDefaultDisplayRotation获取默认屏幕的旋转角度。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "static napi_value GetDefaultDisplayRotation(napi_env env, napi_callback_info info)\n{\n    NativeDisplayManager_Rotation displayRotation;\n    NativeDisplayManager_ErrorCode errCode = OH_NativeDisplayManager_GetDefaultDisplayRotation(&displayRotation);\n    if (errCode == NativeDisplayManager_ErrorCode::DISPLAY_MANAGER_OK) {\n        napi_value rotation;\n        napi_create_int32(env, displayRotation, &rotation);\n        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"DMSTest\", \"rotation=%{public}d\", displayRotation);\n        return rotation;\n    } else {\n        napi_value errorCode;\n        napi_create_int32(env, errCode, &errorCode);\n        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"DMSTest\",\n            \"GetDefaultDisplayRotation errCode=%{public}d\", errCode);\n        return errorCode;\n    }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "可以通过OH_NativeDisplayManager_CreateDefaultDisplayCutoutInfo获取挖孔屏、刘海屏、瀑布屏等不可用屏幕区域信息。 可通过OH_NativeDisplayManager_DestroyDefaultDisplayCutoutInfo销毁挖孔屏、刘海屏、瀑布屏等不可用屏幕区域信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "static napi_value CreateDefaultDisplayCutoutInfo(napi_env env, napi_callback_info info)\n{\n    NativeDisplayManager_CutoutInfo *cutOutInfo = NULL;\n    NativeDisplayManager_ErrorCode errCode = OH_NativeDisplayManager_CreateDefaultDisplayCutoutInfo(&cutOutInfo);\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"DMSTest\", \"GetDefaultCutoutInfo errCode=%{public}d\", errCode);\n    if (errCode == NativeDisplayManager_ErrorCode::DISPLAY_MANAGER_OK) {\n        if (cutOutInfo != NULL && cutOutInfo->boundingRectsLength != 0) {\n            OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"DMSTest\",\n                \"GetDefaultCutoutInfo cutOutInfo length=%{public}d\", cutOutInfo->boundingRectsLength);\n            for (int i = 0; i < cutOutInfo->boundingRectsLength; i++) {\n                OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"DMSTest\",\n                    \"cutOutInfo[%{public}d]=[%{public}d %{public}d %{public}d %{public}d]\",\n                    i, cutOutInfo->boundingRects[i].left, cutOutInfo->boundingRects[i].top,\n                    cutOutInfo->boundingRects[i].width, cutOutInfo->boundingRects[i].height);\n            }\n            OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"DMSTest\",\n                \"cutOutInfo waterfall left rect=[%{public}d %{public}d %{public}d %{public}d]\",\n                cutOutInfo->waterfallDisplayAreaRects.left.left, cutOutInfo->waterfallDisplayAreaRects.left.top,\n                cutOutInfo->waterfallDisplayAreaRects.left.width, cutOutInfo->waterfallDisplayAreaRects.left.height);\n            OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"DMSTest\",\n                \"cutOutInfo waterfall top rect=[%{public}d %{public}d %{public}d %{public}d]\",\n                cutOutInfo->waterfallDisplayAreaRects.top.left, cutOutInfo->waterfallDisplayAreaRects.top.top,\n                cutOutInfo->waterfallDisplayAreaRects.top.width, cutOutInfo->waterfallDisplayAreaRects.top.height);\n            OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"DMSTest\",\n                \"cutOutInfo waterfall right rect=[%{public}d %{public}d %{public}d %{public}d]\",\n                cutOutInfo->waterfallDisplayAreaRects.right.left, cutOutInfo->waterfallDisplayAreaRects.right.top,\n                cutOutInfo->waterfallDisplayAreaRects.right.width, cutOutInfo->waterfallDisplayAreaRects.right.height);\n            OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"DMSTest\",\n                \"cutOutInfo waterfall bottom rect=[%{public}d %{public}d %{public}d %{public}d]\",\n                cutOutInfo->waterfallDisplayAreaRects.bottom.left,\n                cutOutInfo->waterfallDisplayAreaRects.bottom.top,\n                cutOutInfo->waterfallDisplayAreaRects.bottom.width,\n                cutOutInfo->waterfallDisplayAreaRects.bottom.height);\n        }\n        napi_value boundingRectsLength;\n        napi_create_int32(env, cutOutInfo->boundingRectsLength, &boundingRectsLength);\n        OH_NativeDisplayManager_DestroyDefaultDisplayCutoutInfo(cutOutInfo);\n        return boundingRectsLength;\n    } else {\n        napi_value errorCode;\n        napi_create_int32(env, errCode, &errorCode);\n        return errorCode;\n    }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "监听屏幕状态变化",
      children: "监听屏幕状态变化"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以通过OH_NativeDisplayManager_RegisterDisplayChangeListener接口注册屏幕变化的监听，包括屏幕旋转、分辨率变化、刷新率变化、DPI变化等。 通过OH_NativeDisplayManager_UnregisterDisplayChangeListener接口取消屏幕状态变化的监听。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void DisplayChangeCallback(uint64_t displayId)\n{\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"DMSTest\",\n        \"DisplayChangeCallback displayId=%{public}lu.\", displayId);\n}\n\nstatic napi_value RegisterDisplayChangeListener(napi_env env, napi_callback_info info)\n{\n    uint32_t listenerIndex;\n    NativeDisplayManager_ErrorCode errCode = OH_NativeDisplayManager_RegisterDisplayChangeListener(\n        DisplayChangeCallback, &listenerIndex);\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"DMSTest\",\n        \"RegisterDisplayChangeListener listenerIndex =%{public}d errCode=%{public}d.\", listenerIndex, errCode);\n    if (errCode == NativeDisplayManager_ErrorCode::DISPLAY_MANAGER_OK) {\n        napi_value registerIndex;\n        napi_create_int32(env, listenerIndex, &registerIndex);\n        return registerIndex;\n    } else {\n        napi_value errorCode;\n        napi_create_int32(env, errCode, &errorCode);\n        return errorCode;\n    }\n}\n\nstatic napi_value UnregisterDisplayChangeListener(napi_env env, napi_callback_info info)\n{\n    size_t argc = 1;\n    napi_value args[1] = { nullptr };\n\n    uint32_t listenerIndex;\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n    napi_get_value_uint32(env, args[0], &listenerIndex);\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"DMSTest\",\n        \"UnregisterDisplayChangeListener listenerIndex =%{public}d.\", listenerIndex);\n    NativeDisplayManager_ErrorCode errCode = OH_NativeDisplayManager_UnregisterDisplayChangeListener(listenerIndex);\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"DMSTest\",\n        \"UnregisterDisplayChangeListener errCode=%{public}d.\", errCode);\n    napi_value errorCode;\n    napi_create_int32(env, errCode, &errorCode);\n    return errorCode;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "监听折叠设备状态变化",
      children: "监听折叠设备状态变化"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "可以通过OH_NativeDisplayManager_IsFoldable接口查询设备是不是折叠设备。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "static napi_value IsFoldable(napi_env env, napi_callback_info info)\n{\n    bool isFoldDevice = OH_NativeDisplayManager_IsFoldable();\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"DMSTest\", \"IsFoldable isFoldDevice =%{public}d.\", isFoldDevice);\n    napi_value isFold;\n    napi_get_boolean(env, isFoldDevice, &isFold);\n    return isFold;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "可以通过OH_NativeDisplayManager_RegisterFoldDisplayModeChangeListener注册屏幕展开/折叠状态变化的监听。 通过OH_NativeDisplayManager_UnregisterFoldDisplayModeChangeListener接口取消屏幕展开/折叠状态变化的监听。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "void FoldDisplayModeChangeCallback(NativeDisplayManager_FoldDisplayMode displayMode)\n{\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"DMSTest\", \"displayMode=%{public}d.\", displayMode);\n}\n\nstatic napi_value RegisterFoldDisplayModeChangeListener(napi_env env, napi_callback_info info)\n{\n    uint32_t listenerIndex = 0;\n    NativeDisplayManager_ErrorCode errCode = OH_NativeDisplayManager_RegisterFoldDisplayModeChangeListener(\n        FoldDisplayModeChangeCallback, &listenerIndex);\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"DMSTest\", \"listenerIndex =%{public}d errCode=%{public}d.\",\n        listenerIndex, errCode);\n    if (errCode == NativeDisplayManager_ErrorCode::DISPLAY_MANAGER_OK) {\n        napi_value registerIndex;\n        napi_create_int32(env, listenerIndex, &registerIndex);\n        return registerIndex;\n    } else {\n        napi_value errorCode;\n        napi_create_int32(env, errCode, &errorCode);\n        return errorCode;\n    }\n}\n\nstatic napi_value UnregisterFoldDisplayModeChangeListener(napi_env env, napi_callback_info info)\n{\n    size_t argc = 1;\n    napi_value args[1] = { nullptr };\n    uint32_t listenerIndex;\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n    napi_get_value_uint32(env, args[0], &listenerIndex);\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"DMSTest\", \"listenerIndex =%{public}d.\", listenerIndex);\n    NativeDisplayManager_ErrorCode errCode =\n        OH_NativeDisplayManager_UnregisterFoldDisplayModeChangeListener(listenerIndex);\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"DMSTest\", \"errorCode=%{public}d\", errCode);\n    napi_value errorCode;\n    napi_create_int32(env, errCode, &errorCode);\n    return errorCode;\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "注册函数",
      children: "注册函数"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "EXTERN_C_START\nstatic napi_value Init(napi_env env, napi_value exports)\n{\n    napi_property_descriptor desc[] = {\n        {\"getDisplayRotation\", nullptr, GetDefaultDisplayRotation, nullptr, nullptr, nullptr, napi_default, nullptr},\n        {\"getCutoutInfo\", nullptr, CreateDefaultDisplayCutoutInfo, nullptr, nullptr, nullptr, napi_default, nullptr},\n        {\"registerDisplayChange\", nullptr, RegisterDisplayChangeListener,\n            nullptr, nullptr, nullptr, napi_default, nullptr},\n        {\"unregisterDisplayChange\", nullptr, UnregisterDisplayChangeListener,\n            nullptr, nullptr, nullptr, napi_default, nullptr},\n        {\"checkIsFoldDevice\", nullptr, IsFoldable, nullptr, nullptr, nullptr, napi_default, nullptr},\n        {\"registerFoldDisplayModeChange\", nullptr, RegisterFoldDisplayModeChangeListener,\n            nullptr, nullptr, nullptr, napi_default, nullptr},\n        {\"unregisterFoldDisplayModeChange\", nullptr, UnregisterFoldDisplayModeChangeListener,\n            nullptr, nullptr, nullptr, napi_default, nullptr},\n    };\n    napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc);\n    return exports;\n}\nEXTERN_C_END\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "注册模块",
      children: "注册模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "static napi_module displayModule = {\n    .nm_version = 1,\n    .nm_flags = 0,\n    .nm_filename = nullptr,\n    .nm_register_func = Init,\n    .nm_modname = \"nativedisplay\",\n    .nm_priv = ((void*)0),\n    .reserved = { 0 },\n};\n\nextern \"C\" __attribute__((constructor)) void RegisterEntryModule(void)\n{\n    napi_module_register(&displayModule);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "static napi_module displayModule = {\n    .nm_version = 1,\n    .nm_flags = 0,\n    .nm_filename = nullptr,\n    .nm_register_func = Init,\n    .nm_modname = \"nativedisplay\",\n    .nm_priv = ((void*)0),\n    .reserved = { 0 },\n};\n\nextern \"C\" __attribute__((constructor)) void RegisterEntryModule(void)\n{\n    napi_module_register(&displayModule);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "在indexets文件中调用函数",
      children: "在Index.ets文件中调用函数"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "private callGetDisplayRotation(): void {\n  this.promptAction.openToast({ message: '调用getDisplayRotation方法' }).catch((error: Error) => {\n    console.error(`callGetDisplayRotation error ${JSON.stringify(error)}`);\n  }).then(() => {\n    console.info(`get rotation value is: ${displayNapi.getDisplayRotation()}`);\n  });\n}\n\nprivate callFoldableCallback(): void {\n  this.promptAction.openToast({ message: '调用register displayMode方法' }).catch((error: Error) => {\n    console.error(`callFoldableCallback error ${JSON.stringify(error)}`);\n  }).then(() => {\n    let registerIndex = displayNapi.registerFoldDisplayModeChange();\n    console.info(`register foldable value is: ${registerIndex}`);\n    console.info(`unregister foldable value is: ${displayNapi.unregisterFoldDisplayModeChange(registerIndex)}`);\n  });\n}\n\nprivate callGetCutoutInfo(): void {\n  this.promptAction.openToast({ message: '调用getCutoutInfo方法' }).catch((error: Error) => {\n    console.error(`callGetCutoutInfo error ${JSON.stringify(error)}`);\n  }).then(() => {\n    console.info(`cutoutInfo length is: ${displayNapi.getCutoutInfo()}`);\n  });\n}\n\nprivate callDealListenCallback(): void {\n  this.promptAction.openToast({ message: '调用register change方法' }).catch((error: Error) => {\n    console.error(`callDealListenCallback error ${JSON.stringify(error)}`);\n  }).then(() => {\n    let registerIndex = displayNapi.registerDisplayChange();\n    console.info(`register display change value is: ${registerIndex}`);\n    console.info(`unregister display change value is: ${displayNapi.unregisterDisplayChange(registerIndex)}`);\n  });\n}\n\nprivate callDealFoldableDevice(): void {\n  this.promptAction.openToast({ message: '调用dealFoldableDevice方法' }).catch((error: Error) => {\n    console.error(`callDealFoldableDevice error ${JSON.stringify(error)}`);\n  }).then(() => {\n    console.info(`fold device is: ${displayNapi.checkIsFoldDevice()}`);\n  });\n}\n"
      })
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