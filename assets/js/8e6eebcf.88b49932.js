"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["230280"], {
420930(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_hardware_car_kit_guide_car_get_connect_status_car_listener_connect_status_car_listener_connect_status_md_8e6_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-hardware-car-kit-guide-car-get-connect-status-car-listener-connect-status-car-listener-connect-status-md-8e6.json
var site_docs_system_hardware_car_kit_guide_car_get_connect_status_car_listener_connect_status_car_listener_connect_status_md_8e6_namespaceObject = JSON.parse('{"id":"system-hardware/car-kit-guide/car-get-connect-status/car-listener-connect-status/car-listener-connect-status","title":"监听HiCar的连接状态","description":"场景介绍","source":"@site/docs/system-hardware/car-kit-guide/car-get-connect-status/car-listener-connect-status/car-listener-connect-status.md","sourceDirName":"system-hardware/car-kit-guide/car-get-connect-status/car-listener-connect-status","slug":"/system-hardware/car-kit-guide/car-get-connect-status/car-listener-connect-status/","permalink":"/harmonyos-docs-site/system-hardware/car-kit-guide/car-get-connect-status/car-listener-connect-status/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"监听HiCar的连接状态","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/car-listener-connect-status","kit":"system/hardware","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"主动获取HiCar的连接状态","permalink":"/harmonyos-docs-site/system-hardware/car-kit-guide/car-get-connect-status/car-check-application-start/"},"next":{"title":"超级桌面应用接入分布式相机","permalink":"/harmonyos-docs-site/system-hardware/car-kit-guide/car-superlauncher-camera-distributed/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-hardware/car-kit-guide/car-get-connect-status/car-listener-connect-status/car-listener-connect-status.md


const frontMatter = {
	title: '监听HiCar的连接状态',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/car-listener-connect-status',
	kit: 'system/hardware',
	last_updated: '2026-04-22'
};
const contentTitle = '监听HiCar的连接状态';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发流程",
  "id": "开发流程",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
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
        id: "监听hicar的连接状态",
        children: "监听HiCar的连接状态"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "生态应用可以通过监听智慧出行连接状态接口获取连接信息，适配HiCar业务（如：应用流转）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(694955)/* ["default"] */.A) + "",
        width: "803",
        height: "189"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "监听HiCar的连接状态使用接口如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/car-api/car-api-references/car-smartmobilitycommon/car-smartmobilitycommon#onsmartmobilitystatus",
              children: "on('smartMobilityStatus')"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册智慧出行连接状态的监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/car-api/car-api-references/car-smartmobilitycommon/car-smartmobilitycommon#offsmartmobilitystatus",
              children: "off('smartMobilityStatus')"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册智慧出行连接状态的监听。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发流程",
      children: "开发流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(142973)/* ["default"] */.A) + "",
        width: "524",
        height: "552"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入相关模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { smartMobilityCommon } from '@kit.CarKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "监听HiCar连接状态。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用在适配HiCar时，需要注册智慧出行连接状态的监听，用于对应的业务逻辑处理。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  // 获取SmartMobilityAwareness实例\n  let awareness: smartMobilityCommon.SmartMobilityAwareness = smartMobilityCommon.getSmartMobilityAwareness();\n\n  // 业务类型\n  let types: smartMobilityCommon.SmartMobilityType[] = [smartMobilityCommon.SmartMobilityType.HICAR];\n\n  // 智慧出行连接状态回调函数\n  const callBack = (info: smartMobilityCommon.SmartMobilityInfo) => {\n    hilog.info(0x0000, 'testTag', 'Received smart mobility info: ', JSON.stringify(info));\n    if (info.status === smartMobilityCommon.SmartMobilityStatus.RUNNING) {\n      // 连接成功通知\n    } else if (info.status === smartMobilityCommon.SmartMobilityStatus.IDLE) {\n      // 断开连接通知\n    }\n  };\n\n  // 注册智慧出行连接状态的监听\n  awareness.on('smartMobilityStatus', types, callBack);\n} catch (e) {\n  // 捕获接口调用异常时的错误码并做相应处理\n  hilog.error(0x0000, 'testTag', `on smart mobility status listener error, error code: ${e?.code}`);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "取消监听。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在应用退出时，需要取消之前注册的监听，减少系统不必要的资源消耗。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  // 获取SmartMobilityAwareness实例\n  let awareness: smartMobilityCommon.SmartMobilityAwareness = smartMobilityCommon.getSmartMobilityAwareness();\n  // 业务类型\n  let types: smartMobilityCommon.SmartMobilityType[] = [smartMobilityCommon.SmartMobilityType.HICAR];\n  // 取消注册智慧出行连接状态的监听\n  awareness.off('smartMobilityStatus', types);\n} catch (e) {\n  // 捕获接口调用异常时的错误码并做相应处理\n  hilog.error(0x0000, 'testTag', `off smart mobility status listener error, error code: ${e?.code}`);\n}\n"
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
142973(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798822-7d437100b744c426b6738e6f3e4920e1.png");

},
694955(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478471-33c06f1e2c13b06c5f5ecf6d53e8e9b1.png");

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