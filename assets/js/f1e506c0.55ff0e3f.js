"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["743558"], {
935804(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_game_controller_kit_game_controller_monitor_device_game_controller_monitor_device_md_f1e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-game-controller-kit-game-controller-monitor-device-game-controller-monitor-device-md-f1e.json
var site_docs_game_controller_kit_game_controller_monitor_device_game_controller_monitor_device_md_f1e_namespaceObject = JSON.parse('{"id":"game-controller-kit/game-controller-monitor-device/game-controller-monitor-device","title":"监听设备上下线（C/C++）","description":"功能介绍","source":"@site/docs/game-controller-kit/game-controller-monitor-device/game-controller-monitor-device.md","sourceDirName":"game-controller-kit/game-controller-monitor-device","slug":"/game-controller-kit/game-controller-monitor-device/","permalink":"/harmonyos-docs-site/game-controller-kit/game-controller-monitor-device/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"监听设备上下线（C/C++）","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/game-controller-monitor-device","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Game Controller Kit简介","permalink":"/harmonyos-docs-site/game-controller-kit/game-controller-introduction/"},"next":{"title":"监听游戏手柄的轴和按键事件（C/C++）","permalink":"/harmonyos-docs-site/game-controller-kit/game-controller-monitor-pad/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/game-controller-kit/game-controller-monitor-device/game-controller-monitor-device.md


const frontMatter = {
	title: '监听设备上下线（C/C++）',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/game-controller-monitor-device',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '监听设备上下线（C/C++）';

const assets = {

};



const toc = [{
  "value": "功能介绍",
  "id": "功能介绍",
  "level": 2
}, {
  "value": "业务流程",
  "id": "业务流程",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "链接动态库",
  "id": "链接动态库",
  "level": 3
}, {
  "value": "导入模块",
  "id": "导入模块",
  "level": 3
}, {
  "value": "注册设备上下线监听",
  "id": "注册设备上下线监听",
  "level": 3
}, {
  "value": "取消注册设备上下线监听",
  "id": "取消注册设备上下线监听",
  "level": 3
}, {
  "value": "查询所有在线设备",
  "id": "查询所有在线设备",
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
        id: "监听设备上下线cc",
        children: "监听设备上下线（C/C++）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能介绍",
      children: "功能介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Game Controller Kit提供设备上下线事件监听和查询在线设备信息的功能。注册监听事件后，设备拔插时可获取实时回调通知，同时支持查询当前所有在线设备的具体信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "业务流程",
      children: "业务流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(693222)/* ["default"] */.A) + "",
        width: "837",
        height: "570"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "玩家启动游戏。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "游戏调用OH_GameDevice_RegisterDeviceMonitor接口注册设备状态变化事件监听。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "玩家插拔设备。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "终端系统将设备状态变化通知Game Controller Kit。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Game Controller Kit向游戏反馈设备状态变化。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "游戏调用OH_GameDevice_GetAllDeviceInfos接口向Game Controller Kit查询所有在线的游戏设备信息。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Game Controller Kit从终端系统获取所有在线的游戏设备信息。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果不再需要订阅，游戏可以调用OH_GameDevice_UnregisterDeviceMonitor接口取消设备状态变化事件监听。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["接口详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller",
        children: "API参考"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "GameController_ErrorCode OH_GameDevice_RegisterDeviceMonitor (GameDevice_DeviceMonitorCallback deviceMonitorCallback)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册设备状态变化事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GameController_ErrorCode OH_GameDevice_UnregisterDeviceMonitor (void)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册设备状态变化事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GameController_ErrorCode OH_GameDevice_GetAllDeviceInfos (GameDevice_AllDeviceInfos **allDeviceInfos)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取所有在线设备的信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "链接动态库",
      children: "链接动态库"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "target_link_libraries(entry PUBLIC libohgame_controller.z.so)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <GameControllerKit/game_device.h>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "注册设备上下线监听",
      children: "注册设备上下线监听"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调用OH_GameDevice_RegisterDeviceMonitor接口注册设备状态变化监听，获取设备上下线的回调通知。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_value DeviceApi::RegisterDeviceMonitor(napi_env env, napi_callback_info info) {\n    napi_value result;\n    GameController_ErrorCode errorCode = OH_GameDevice_RegisterDeviceMonitor(DeviceApi::OnDeviceChanged);\n    if (errorCode != GameController_ErrorCode::GAME_CONTROLLER_SUCCESS) {\n        OH_LOG_ERROR(LOG_APP, \"RegisterDeviceMonitor Failed, %{public}d\", errorCode);\n        napi_create_double(env, errorCode, &result);\n        return result;\n    }\n    OH_LOG_INFO(LOG_APP, \"RegisterDeviceMonitor Success\");\n    napi_create_double(env, 0, &result);\n    return result;\n}\n\nvoid DeviceApi::OnDeviceChanged(const struct GameDevice_DeviceEvent *deviceEvent) {\n    GameDevice_StatusChangedType type;\n    OH_GameDevice_DeviceEvent_GetChangedType(deviceEvent, &type);\n    GameDevice_DeviceInfo *deviceInfo;\n    OH_GameDevice_DeviceEvent_GetDeviceInfo(deviceEvent, &deviceInfo);\n    std::string temp = GetDeviceInfoStringForPrint(deviceInfo);\n    Log::GetInstance()->PrintLog(\"OnDeviceChanged type[\" + std::to_string(type) + \"] DeviceInfo\" + temp);\n    OH_LOG_INFO(LOG_APP, \"OnDeviceChanged type:%{public}d DeviceInfo:%{public}s\", type, temp.c_str());\n    OH_GameDevice_DestroyDeviceInfo(&deviceInfo);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "取消注册设备上下线监听",
      children: "取消注册设备上下线监听"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果不再需要订阅，可以调用OH_GameDevice_UnregisterDeviceMonitor接口取消设备状态变化事件的监听。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_value DeviceApi::UnregisterDeviceMonitor(napi_env env, napi_callback_info info) {\n    napi_value result;\n    GameController_ErrorCode errorCode = OH_GameDevice_UnregisterDeviceMonitor();\n    if (errorCode != GameController_ErrorCode::GAME_CONTROLLER_SUCCESS) {\n        OH_LOG_ERROR(LOG_APP, \"UnregisterDeviceMonitor Failed, %{public}d\", errorCode);\n        napi_create_double(env, errorCode, &result);\n        return result;\n    }\n    OH_LOG_INFO(LOG_APP, \"UnregisterDeviceMonitor Success\");\n    napi_create_double(env, 0, &result);\n    return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "查询所有在线设备",
      children: "查询所有在线设备"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调用OH_GameDevice_GetAllDeviceInfos接口，查询所有在线游戏设备的信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GameController_ErrorCode DeviceApi::DoQueryAllDeviceInfos() {\n    GameDevice_AllDeviceInfos *gameDevice_AllDeviceInfos;\n    // 查询所有在线设备\n    GameController_ErrorCode errorCode = OH_GameDevice_GetAllDeviceInfos(&gameDevice_AllDeviceInfos);\n    if (errorCode != GameController_ErrorCode::GAME_CONTROLLER_SUCCESS) {\n        OH_LOG_ERROR(LOG_APP, \"GetAllDeviceInfos Failed, %{public}d\", errorCode);\n        return errorCode;\n    }\n    // 依次获取设备信息\n    int count;\n    OH_GameDevice_AllDeviceInfos_GetCount(gameDevice_AllDeviceInfos, &count);\n    Log::GetInstance()->PrintLog(\"GetAllDeviceInfos Success, the count is \" + std::to_string(count));\n    for (int idx = 0; idx < count; idx++) {\n        GameDevice_DeviceInfo *deviceInfo;\n        errorCode = OH_GameDevice_AllDeviceInfos_GetDeviceInfo(gameDevice_AllDeviceInfos, idx, &deviceInfo);\n        if (errorCode != GameController_ErrorCode::GAME_CONTROLLER_SUCCESS) {\n            OH_LOG_ERROR(LOG_APP, \"OH_GameDevice_AllDeviceInfos_GetDeviceInfo Failed, %{public}d\", errorCode);\n            return errorCode;\n        }\n        std::string temp = GetDeviceInfoStringForPrint(deviceInfo);\n        Log::GetInstance()->PrintLog(\"AllDeviceInfos[\" + std::to_string(idx) + \"]\" + temp);\n        OH_LOG_INFO(LOG_APP, \"AllDeviceInfos[%{public}d] DeviceInfo: %{public}s\", idx, temp.c_str());\n        OH_GameDevice_DestroyDeviceInfo(&deviceInfo);\n    }\n    // 销毁指向设备查询结果的指针\n    OH_GameDevice_DestroyAllDeviceInfos(&gameDevice_AllDeviceInfos);\n    OH_LOG_INFO(LOG_APP, \"GetAllDeviceInfos Success\");\n    return errorCode;\n}\n\nstd::string DeviceApi::GetDeviceInfoStringForPrint(GameDevice_DeviceInfo *deviceInfo) {\n    std::string log;\n    char *deviceId = NULL;\n    OH_GameDevice_DeviceInfo_GetDeviceId(deviceInfo, &deviceId);\n    log.append(\"deviceId:\").append(deviceId);\n    free(deviceId);\n    char *name = NULL;\n    OH_GameDevice_DeviceInfo_GetName(deviceInfo, &name);\n    log.append(\",name:\").append(name);\n    free(name);\n    int product;\n    OH_GameDevice_DeviceInfo_GetProduct(deviceInfo, &product);\n    log.append(\",product:\").append(std::to_string(product));\n    int version;\n    OH_GameDevice_DeviceInfo_GetVersion(deviceInfo, &version);\n    log.append(\",version:\").append(std::to_string(version));\n    char *physicalAddress = NULL;\n    OH_GameDevice_DeviceInfo_GetPhysicalAddress(deviceInfo, &physicalAddress);\n    log.append(\",physicalAddress:\").append(physicalAddress);\n    free(physicalAddress);\n    GameDevice_DeviceType type;\n    OH_GameDevice_DeviceInfo_GetDeviceType(deviceInfo, &type);\n    log.append(\",type:\").append(std::to_string(type));\n    return log;\n}\n"
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
693222(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478883-08bf7556f48d49b8014ac4fa042f52f4.png");

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