"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["220532"], {
185272(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_scenario_fusion_guide_scenario_fusion_api_information_attribute_scenario_fusion_api_system_setup_scenario_fusion_api_system_setup_md_304_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-scenario-fusion-guide-scenario-fusion-api-information-attribute-scenario-fusion-api-system-setup-scenario-fusion-api-system-setup-md-304.json
var site_docs_scenario_fusion_guide_scenario_fusion_api_information_attribute_scenario_fusion_api_system_setup_scenario_fusion_api_system_setup_md_304_namespaceObject = JSON.parse('{"id":"scenario-fusion-guide/scenario-fusion-api-information-attribute/scenario-fusion-api-system-setup/scenario-fusion-api-system-setup","title":"通过API获取系统设置属性","description":"场景介绍","source":"@site/docs/scenario-fusion-guide/scenario-fusion-api-information-attribute/scenario-fusion-api-system-setup/scenario-fusion-api-system-setup.md","sourceDirName":"scenario-fusion-guide/scenario-fusion-api-information-attribute/scenario-fusion-api-system-setup","slug":"/scenario-fusion-guide/scenario-fusion-api-information-attribute/scenario-fusion-api-system-setup/","permalink":"/harmonyos-docs-site/scenario-fusion-guide/scenario-fusion-api-information-attribute/scenario-fusion-api-system-setup/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"通过API获取系统设置属性","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scenario-fusion-api-system-setup","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"通过API异步获取系统信息属性","permalink":"/harmonyos-docs-site/scenario-fusion-guide/scenario-fusion-api-information-attribute/scenario-fusion-api-asyn-system-info/"},"next":{"title":"通过API展示关注组件","permalink":"/harmonyos-docs-site/scenario-fusion-guide/scenario-fusion-api-information-attribute/scenario-fusion-api-followcomponent/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/scenario-fusion-guide/scenario-fusion-api-information-attribute/scenario-fusion-api-system-setup/scenario-fusion-api-system-setup.md


const frontMatter = {
	title: '通过API获取系统设置属性',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scenario-fusion-api-system-setup',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '通过API获取系统设置属性';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
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
        id: "通过api获取系统设置属性",
        children: "通过API获取系统设置属性"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Scenario Fusion Kit提供获取系统设置属性API，调用该接口可以获取蓝牙、定位、Wi-Fi开关信息，以及设备方向信息等系统信息属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "场景化API支持Phone、Tablet和2in1设备，并且从5.1.0(18)版本开始，新增支持Wearable和TV设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下是获取系统设置属性的接口说明，更多接口及使用方法请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/scenario-fusion-api/scenario-fusion-arktsapi/scenario-fusion-atomicservice/scenario-fusion-atomicservice",
        children: "atomicService（融合场景化API）"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/scenario-fusion-api/scenario-fusion-arktsapi/scenario-fusion-atomicservice/scenario-fusion-atomicservice#getsystemsetting",
              children: "getSystemSetting"
            }), "(properties?: Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/scenario-fusion-api/scenario-fusion-arktsapi/scenario-fusion-atomicservice/scenario-fusion-atomicservice#systemsettingtype",
              children: "SystemSettingType"
            }), ">): ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/scenario-fusion-api/scenario-fusion-arktsapi/scenario-fusion-atomicservice/scenario-fusion-atomicservice#systemsettinginfo",
              children: "SystemSettingInfo"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取系统设置属性的方法，支持获取蓝牙、定位、Wi-Fi开关信息，以及设备方向信息的请求对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入Scenario Fusion Kit模块以及相关公共模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { atomicService } from '@kit.ScenarioFusionKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "传入属性参数，调用接口获取对应属性值，代码如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let stateArray: Array<atomicService.SystemSettingType> =\n  ['bluetoothEnabled', 'locationEnabled', 'deviceOrientation', 'wifiEnabled'];\ntry {\n  let data = atomicService.getSystemSetting(stateArray);\n  hilog.info(0x0000, 'testTag', 'succeeded in getting system setting info');\n  let bluetoothEnabled: boolean | undefined = data.bluetoothEnabled;\n  let locationEnabled: boolean | undefined = data.locationEnabled;\n  let deviceOrientation: string | undefined = data.deviceOrientation;\n  let wifiEnabled: boolean | undefined = data.wifiEnabled;\n} catch (error) {\n  hilog.error(0x0001, 'testTag', 'failReason: %{public}d %{public}s', error.code, error.message);\n}\n"
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