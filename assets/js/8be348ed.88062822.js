"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["534139"], {
945160(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_game_controller_api_game_controller_c_game_controller_headerfile_and_struct_game_controller_headerfile_capi_game_device_capi_game_device_md_8be_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-game-controller-api-game-controller-c-game-controller-headerfile-and-struct-game-controller-headerfile-capi-game-device-capi-game-device-md-8be.json
var site_docs_ref_game_controller_api_game_controller_c_game_controller_headerfile_and_struct_game_controller_headerfile_capi_game_device_capi_game_device_md_8be_namespaceObject = JSON.parse('{"id":"game-controller-api/game-controller-c/game-controller-headerfile-and-struct/game-controller-headerfile/capi-game-device/capi-game-device","title":"game_device.h","description":"概述","source":"@site/docs-ref/game-controller-api/game-controller-c/game-controller-headerfile-and-struct/game-controller-headerfile/capi-game-device/capi-game-device.md","sourceDirName":"game-controller-api/game-controller-c/game-controller-headerfile-and-struct/game-controller-headerfile/capi-game-device","slug":"/game-controller-api/game-controller-c/game-controller-headerfile-and-struct/game-controller-headerfile/capi-game-device/capi-game-device","permalink":"/harmonyos-docs-site/ref/game-controller-api/game-controller-c/game-controller-headerfile-and-struct/game-controller-headerfile/capi-game-device/capi-game-device","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"game_device.h","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-device","kit":"应用服务","last_updated":"2026-04-22","slug":"capi-game-device"},"sidebar":"ref","previous":{"title":"game_controller_type.h","permalink":"/harmonyos-docs-site/ref/game-controller-api/game-controller-c/game-controller-headerfile-and-struct/game-controller-headerfile/capi-game-controller-type/capi-game-controller-type"},"next":{"title":"game_device_event.h","permalink":"/harmonyos-docs-site/ref/game-controller-api/game-controller-c/game-controller-headerfile-and-struct/game-controller-headerfile/capi-game-device-event/capi-game-device-event"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/game-controller-api/game-controller-c/game-controller-headerfile-and-struct/game-controller-headerfile/capi-game-device/capi-game-device.md


const frontMatter = {
	title: 'game_device.h',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-device',
	kit: '应用服务',
	last_updated: '2026-04-22',
	slug: 'capi-game-device'
};
const contentTitle = 'game_device.h';

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
  "value": "类型定义",
  "id": "类型定义",
  "level": 3
}, {
  "value": "函数",
  "id": "函数",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    p: "p",
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
        id: "game_deviceh",
        children: "game_device.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义游戏设备的接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libohgame_controller.z.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Game.GameController"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller",
        children: "GameController"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "类型定义",
      children: "类型定义"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamedevice_alldeviceinfos",
              children: "GameDevice_AllDeviceInfos"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamedevice_alldeviceinfos",
              children: "GameDevice_AllDeviceInfos"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["定义", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#oh_gamedevice_getalldeviceinfos",
              children: "OH_GameDevice_GetAllDeviceInfos"
            }), "接口的调用结果。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#oh_gamedevice_getalldeviceinfos",
              children: "OH_GameDevice_GetAllDeviceInfos"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamedevice_alldeviceinfos",
              children: "GameDevice_AllDeviceInfos"
            }), " **allDeviceInfos)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取所有在线设备的信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#oh_gamedevice_registerdevicemonitor",
              children: "OH_GameDevice_RegisterDeviceMonitor"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamedevice_devicemonitorcallback",
              children: "GameDevice_DeviceMonitorCallback"
            }), " deviceMonitorCallback)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册设备状态变化事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#oh_gamedevice_unregisterdevicemonitor",
              children: "OH_GameDevice_UnregisterDeviceMonitor"
            }), " (void)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册设备状态变化事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#oh_gamedevice_destroyalldeviceinfos",
              children: "OH_GameDevice_DestroyAllDeviceInfos"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamedevice_alldeviceinfos",
              children: "GameDevice_AllDeviceInfos"
            }), " **allDeviceInfos)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["当", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamedevice_alldeviceinfos",
              children: "GameDevice_AllDeviceInfos"
            }), "实例不再使用，销毁该实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#oh_gamedevice_alldeviceinfos_getcount",
              children: "OH_GameDevice_AllDeviceInfos_GetCount"
            }), " (const struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamedevice_alldeviceinfos",
              children: "GameDevice_AllDeviceInfos"
            }), " *allDeviceInfos, int32_t *count)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取设备数量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#oh_gamedevice_alldeviceinfos_getdeviceinfo",
              children: "OH_GameDevice_AllDeviceInfos_GetDeviceInfo"
            }), " (const struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamedevice_alldeviceinfos",
              children: "GameDevice_AllDeviceInfos"
            }), " *allDeviceInfos, const int32_t index, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamedevice_deviceinfo",
              children: "GameDevice_DeviceInfo"
            }), " **deviceInfo)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从所有设备信息中获取指定序号的设备信息。"
          })]
        })]
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