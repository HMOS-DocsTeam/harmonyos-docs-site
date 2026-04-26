"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["865544"], {
349232(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_hardware_wear_engine_kit_guide_wearengine_phonedev_wear_engine_app_development_we_device_selection_we_device_selection_md_057_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-hardware-wear-engine-kit-guide-wearengine-phonedev-wear-engine-app-development-we-device-selection-we-device-selection-md-057.json
var site_docs_system_hardware_wear_engine_kit_guide_wearengine_phonedev_wear_engine_app_development_we_device_selection_we_device_selection_md_057_namespaceObject = JSON.parse('{"id":"system-hardware/wear-engine-kit-guide/wearengine_phonedev/wear-engine-app-development/we-device-selection/we-device-selection","title":"目标设备选择","description":"当获取到的已连接设备列表中包含多个设备时，需要根据业务需求正确挑选目标设备。","source":"@site/docs/system-hardware/wear-engine-kit-guide/wearengine_phonedev/wear-engine-app-development/we-device-selection/we-device-selection.md","sourceDirName":"system-hardware/wear-engine-kit-guide/wearengine_phonedev/wear-engine-app-development/we-device-selection","slug":"/system-hardware/wear-engine-kit-guide/wearengine_phonedev/wear-engine-app-development/we-device-selection/","permalink":"/harmonyos-docs-site/system-hardware/wear-engine-kit-guide/wearengine_phonedev/wear-engine-app-development/we-device-selection/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"目标设备选择","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/we-device-selection","kit":"system/hardware","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"穿戴设备信息查询","permalink":"/harmonyos-docs-site/system-hardware/wear-engine-kit-guide/wearengine_phonedev/wear-engine-app-development/query_device_info/"},"next":{"title":"应用间消息通信","permalink":"/harmonyos-docs-site/system-hardware/wear-engine-kit-guide/wearengine_phonedev/wear-engine-app-development/p2p_communication/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-hardware/wear-engine-kit-guide/wearengine_phonedev/wear-engine-app-development/we-device-selection/we-device-selection.md


const frontMatter = {
	title: '目标设备选择',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/we-device-selection',
	kit: 'system/hardware',
	last_updated: '2026-04-22'
};
const contentTitle = '目标设备选择';

const assets = {

};



const toc = [{
  "value": "选择某种类型的设备",
  "id": "选择某种类型的设备",
  "level": 2
}, {
  "value": "选择支持某种能力集的设备",
  "id": "选择支持某种能力集的设备",
  "level": 2
}, {
  "value": "根据设备支持的WearEngine能力集挑选目标设备",
  "id": "根据设备支持的wearengine能力集挑选目标设备",
  "level": 3
}, {
  "value": "根据设备支持的Device能力集挑选目标设备",
  "id": "根据设备支持的device能力集挑选目标设备",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "目标设备选择",
        children: "目标设备选择"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当获取到的已连接设备列表中包含多个设备时，需要根据业务需求正确挑选目标设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "选择某种类型的设备",
      children: "选择某种类型的设备"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取到的设备", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api#device",
        children: "Device"
      }), "类中，包含有", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api#devicecategory",
        children: "DeviceCategory"
      }), "字段，表明了当前设备的类型，可根据设备的类型挑选目标设备。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-hardware/wear-engine-kit-guide/wearengine_phonedev/wear-engine-app-development/query_connected_devices",
            children: "已连接穿戴设备查询"
          }), "章节，获取已连接设备列表。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "从已连接设备列表中根据设备类型选定需要通信的设备。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 声明目标设备\nlet targetDevice: wearEngine.Device;\nfor (let index = 0; index < deviceList.length; index++) {\n  // 挑选类型为手表的设备\n  if (deviceList[index].category === wearEngine.DeviceCategory.WATCH) {\n    targetDevice = deviceList[index];\n    break;\n  }\n  if (index === deviceList.length - 1) {\n    // 若不存在目标设备则抛出错误\n    throw new Error('cannot find target device');\n  }\n}\n// targetDevice为undefined则抛出错误\nif (!targetDevice) {\n    throw new Error('The value of targetDevice is undefined');\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "选择支持某种能力集的设备",
      children: "选择支持某种能力集的设备"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取到的设备中包含了查询能力集的方法，可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-hardware/wear-engine-kit-guide/wearengine_phonedev/wear-engine-app-development/query_device_info",
        children: "穿戴设备信息查询"
      }), "章节。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "根据设备支持的wearengine能力集挑选目标设备",
      children: "根据设备支持的WearEngine能力集挑选目标设备"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-hardware/wear-engine-kit-guide/wearengine_phonedev/wear-engine-app-development/query_connected_devices",
            children: "已连接穿戴设备查询"
          }), "章节，获取已连接设备列表。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "从已连接设备列表中根据WearEngine能力集选定需要通信的设备。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "async function fun() {\n  // 声明目标设备\n  let targetDevice: wearEngine.Device;\n  for (let index = 0; index < deviceList.length; index++) {\n    // 挑选类型为手表的设备\n    if (await device.isWearEngineCapabilitySupported(wearEngine.WearEngineCapability.MONITOR)) {\n      targetDevice = deviceList[index];\n      break;\n    }\n    if (index === deviceList.length - 1) {\n      // 若不存在目标设备则抛出错误\n      throw new Error('cannot find target device');\n    }\n  }\n  // targetDevice为undefined则抛出错误\n  if (!targetDevice) {\n    throw new Error('The value of targetDevice is undefined.');\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "根据设备支持的device能力集挑选目标设备",
      children: "根据设备支持的Device能力集挑选目标设备"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-hardware/wear-engine-kit-guide/wearengine_phonedev/wear-engine-app-development/query_connected_devices",
            children: "已连接穿戴设备查询"
          }), "章节，获取已连接设备列表。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "从已连接设备列表中根据Device能力集选定需要通信的设备。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "async function fun() {\n  // 声明目标设备\n  let targetDevice: wearEngine.Device;\n  for (let index = 0; index < deviceList.length; index++) {\n    // 挑选类型为手表的设备\n    if (await device.isDeviceCapabilitySupported(wearEngine.DeviceCapability.APP_INSTALLATION)) {\n      targetDevice = deviceList[index];\n      break;\n    }\n    if (index === deviceList.length - 1) {\n      // 若不存在目标设备则抛出错误\n      throw new Error('cannot find target device');\n    }\n  }\n  // targetDevice为undefined则抛出错误\n  if (!targetDevice) {\n    throw new Error('The value of targetDevice is undefined.');\n  }\n}\n"
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