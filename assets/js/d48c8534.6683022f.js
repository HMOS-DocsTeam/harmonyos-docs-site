"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["371261"], {
382608(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_hardware_wear_engine_kit_guide_wearengine_watchdev_watch_query_connected_devices_watch_query_connected_devices_md_d48_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-hardware-wear-engine-kit-guide-wearengine-watchdev-watch-query-connected-devices-watch-query-connected-devices-md-d48.json
var site_docs_system_hardware_wear_engine_kit_guide_wearengine_watchdev_watch_query_connected_devices_watch_query_connected_devices_md_d48_namespaceObject = JSON.parse('{"id":"system-hardware/wear-engine-kit-guide/wearengine_watchdev/watch_query_connected_devices/watch_query_connected_devices","title":"已连接对端设备查询","description":"Wear Engine提供查询用户在穿戴侧已连接的对端设备列表的接口。","source":"@site/docs/system-hardware/wear-engine-kit-guide/wearengine_watchdev/watch_query_connected_devices/watch_query_connected_devices.md","sourceDirName":"system-hardware/wear-engine-kit-guide/wearengine_watchdev/watch_query_connected_devices","slug":"/system-hardware/wear-engine-kit-guide/wearengine_watchdev/watch_query_connected_devices/","permalink":"/harmonyos-docs-site/system-hardware/wear-engine-kit-guide/wearengine_watchdev/watch_query_connected_devices/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"已连接对端设备查询","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/watch_query_connected_devices","kit":"system/hardware","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"管理应用与Wear Engine服务的连接状态","permalink":"/harmonyos-docs-site/system-hardware/wear-engine-kit-guide/wearengine_phonedev/wear-engine-app-development/wearengine_service_status/"},"next":{"title":"应用间消息通信","permalink":"/harmonyos-docs-site/system-hardware/wear-engine-kit-guide/wearengine_watchdev/watch_p2p_communication/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-hardware/wear-engine-kit-guide/wearengine_watchdev/watch_query_connected_devices/watch_query_connected_devices.md


const frontMatter = {
	title: '已连接对端设备查询',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/watch_query_connected_devices',
	kit: 'system/hardware',
	last_updated: '2026-04-22'
};
const contentTitle = '已连接对端设备查询';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "已连接对端设备查询",
        children: "已连接对端设备查询"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Wear Engine提供查询用户在穿戴侧已连接的对端设备列表的接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "建议开发者在使用Wear Engine其他API接口前先实现该接口功能，从已连接的对端设备列表中选定设备。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api#wearenginegetdeviceclient",
            children: "getDeviceClient"
          }), "方法，获取", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api#deviceclient",
            children: "DeviceClient"
          }), "对象。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api#getconnecteddevices",
            children: "getConnectedDevices"
          }), "方法，查询用户已连接的穿戴设备列表。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "从已连接设备列表中选定需要通信的对端设备。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "查询对端设备的操作系统类型。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 在使用Wear Engine服务前，请导入wearEngine与相关模块\nimport { wearEngine } from '@kit.WearEngine';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n// 步骤1：获取DeviceClient对象\n// this.getUIContext().getHostContext() 表示应用上下文Context对象\nlet deviceClient: wearEngine.DeviceClient = wearEngine.getDeviceClient(this.getUIContext().getHostContext());\n// 声明目标设备\nlet targetDevice: wearEngine.Device;\n\n// 步骤2：调用getConnectedDevices方法，查询用户是否有已连接的对端设备\ndeviceClient.getConnectedDevices().then(devices => {\n  console.info(`Succeeded in getting deviceList, deviceList number is ${devices.length}`);\n  // 步骤3：从已连接设备列表中选定需要通信的设备\n  if (devices.length > 0) {\n    targetDevice = devices[0];\n    console.info(`Succeeded to get target device.`);\n    // 步骤4：查询对端设备的操作系统类型\n    let osCategory: wearEngine.OsCategory | undefined = targetDevice.osCategory;\n    console.info(`The osCategory of target device is ${osCategory}`);\n  } else {\n    console.warn(`Failed to get target device. deviceList is empty.`);\n  }\n}).catch((error: BusinessError) => {\n  // 处理调用失败时捕获到的异常\n  console.error(`Failed to get deviceList. Code is ${error.code}, message is ${error.message}`);\n})\n"
          })
        }), "\n"]
      }), "\n"]
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