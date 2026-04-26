"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["170847"], {
8563(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_hardware_wear_engine_kit_guide_wearengine_phonedev_wear_engine_app_development_wearengine_service_status_wearengine_service_status_md_063_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-hardware-wear-engine-kit-guide-wearengine-phonedev-wear-engine-app-development-wearengine-service-status-wearengine-service-status-md-063.json
var site_docs_system_hardware_wear_engine_kit_guide_wearengine_phonedev_wear_engine_app_development_wearengine_service_status_wearengine_service_status_md_063_namespaceObject = JSON.parse('{"id":"system-hardware/wear-engine-kit-guide/wearengine_phonedev/wear-engine-app-development/wearengine_service_status/wearengine_service_status","title":"管理应用与Wear Engine服务的连接状态","description":"监测应用与Wear Engine服务的连接状态","source":"@site/docs/system-hardware/wear-engine-kit-guide/wearengine_phonedev/wear-engine-app-development/wearengine_service_status/wearengine_service_status.md","sourceDirName":"system-hardware/wear-engine-kit-guide/wearengine_phonedev/wear-engine-app-development/wearengine_service_status","slug":"/system-hardware/wear-engine-kit-guide/wearengine_phonedev/wear-engine-app-development/wearengine_service_status/","permalink":"/harmonyos-docs-site/system-hardware/wear-engine-kit-guide/wearengine_phonedev/wear-engine-app-development/wearengine_service_status/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"title":"管理应用与Wear Engine服务的连接状态","sidebar_position":9,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/wearengine_service_status","kit":"system/hardware","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"穿戴设备传感器获取","permalink":"/harmonyos-docs-site/system-hardware/wear-engine-kit-guide/wearengine_phonedev/wear-engine-app-development/device_sensor/"},"next":{"title":"已连接对端设备查询","permalink":"/harmonyos-docs-site/system-hardware/wear-engine-kit-guide/wearengine_watchdev/watch_query_connected_devices/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-hardware/wear-engine-kit-guide/wearengine_phonedev/wear-engine-app-development/wearengine_service_status/wearengine_service_status.md


const frontMatter = {
	title: '管理应用与Wear Engine服务的连接状态',
	sidebar_position: 9,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/wearengine_service_status',
	kit: 'system/hardware',
	last_updated: '2026-04-22'
};
const contentTitle = '管理应用与Wear Engine服务的连接状态';

const assets = {

};



const toc = [{
  "value": "监测应用与Wear Engine服务的连接状态",
  "id": "监测应用与wear-engine服务的连接状态",
  "level": 2
}, {
  "value": "断开应用与Wear Engine服务的连接",
  "id": "断开应用与wear-engine服务的连接",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "管理应用与wear-engine服务的连接状态",
        children: "管理应用与Wear Engine服务的连接状态"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "监测应用与wear-engine服务的连接状态",
      children: "监测应用与Wear Engine服务的连接状态"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "华为运动健康App在后台停止服务（如功耗过高），从而导致应用与Wear Engine服务的连接状态发生变化。对于类似这种不确定的断开情况，开发者可以通过本功能特性了解当前应用和Wear Engine的连接状态。前提是在服务断开前，开发者已经使用该功能订阅过对Wear Engine服务连接状态的监测。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在使用Wear Engine服务前，请导入WearEngine与相关模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { wearEngine } from '@kit.WearEngine';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "构造当服务连接断开时执行的回调函数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let callback = () => {\n  console.info(`The service destruction event`);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api",
            children: "wearEngine"
          }), "中的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api#wearengineon",
            children: "on"
          }), "方法，订阅监听应用与Wear Engine服务的断联事件。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  wearEngine.on('serviceDie', callback);\n  console.info(`Succeeded in subscribing the service destruction event.`);\n} catch (error) {\n  const err: BusinessError = error as BusinessError;\n  console.error(`Failed to subscribe the service destruction event. Code is ${err.code}, message is ${err.message}`);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api",
            children: "wearEngine"
          }), "中的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api#wearengineoff",
            children: "off"
          }), "方法，取消监听应用与Wear Engine服务的断联事件。需要传入订阅监听时的同一个回调函数对象。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  wearEngine.off('serviceDie', callback);\n  console.info(`Succeeded in unsubscribing the service destruction event.`);\n} catch (error) {\n  const err: BusinessError = error as BusinessError;\n  console.error(`Failed to unsubscribe the service destruction event. Code is ${err.code}, message is ${err.message}`);\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "断开应用与wear-engine服务的连接",
      children: "断开应用与Wear Engine服务的连接"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "断开后，将释放Wear Engine资源，监测设备状态、收消息、收文件等功能不可用，监听服务端断联事件的回调函数不会执行，同时会清理掉之前注册的回调函数。如需重新连接，主动调用任意接口即可。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在使用Wear Engine服务前，请导入WearEngine与相关模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { wearEngine } from '@kit.WearEngine';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api",
            children: "wearEngine"
          }), "中的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api#wearenginedestroy",
            children: "destroy"
          }), "方法，断开应用与Wear Engine服务的连接。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "wearEngine.destroy().then(() => {\n  console.info(`Succeeded in destroying wear engine channel`);\n}).catch((error: BusinessError) => {\n  console.error(`Failed to destroy wear engine channel. Code is ${error.code}, message is ${error.message}`);\n})\n"
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