"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["95777"], {
404810(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_device_security_kit_guide_devicesecurity_quota_devicesecurity_quota_md_9c1_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-device-security-kit-guide-devicesecurity-quota-devicesecurity-quota-md-9c1.json
var site_docs_system_security_device_security_kit_guide_devicesecurity_quota_devicesecurity_quota_md_9c1_namespaceObject = JSON.parse('{"id":"system-security/device-security-kit-guide/devicesecurity-quota/devicesecurity-quota","title":"服务配额","description":"| 功能 | 配额说明 |","source":"@site/docs/system-security/device-security-kit-guide/devicesecurity-quota/devicesecurity-quota.md","sourceDirName":"system-security/device-security-kit-guide/devicesecurity-quota","slug":"/system-security/device-security-kit-guide/devicesecurity-quota/","permalink":"/harmonyos-docs-site/system-security/device-security-kit-guide/devicesecurity-quota/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"服务配额","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/devicesecurity-quota","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Device Security Kit简介","permalink":"/harmonyos-docs-site/system-security/device-security-kit-guide/devicesecurity-introduction/"},"next":{"title":"开通Device Security服务","permalink":"/harmonyos-docs-site/system-security/device-security-kit-guide/devicesecurity-prepare/devicesecurity-deviceverify-activateservice/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/device-security-kit-guide/devicesecurity-quota/devicesecurity-quota.md


const frontMatter = {
	title: '服务配额',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/devicesecurity-quota',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '服务配额';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    header: "header",
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
        id: "服务配额",
        children: "服务配额"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "功能"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "配额说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "应用设备状态检测（DeviceVerify）"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["API限额：默认情况下，每个应用每天最多可以调用10万次的DeviceVerify Rest接口请求。  如果应用需要修改服务配额，请通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/support/feedback/#/",
              children: "在线提单"
            }), "申请修改配额。  - 问题分类：选择HarmonyOS NEXT/系统/Device Security Kit。  - 问题描述：填写申请原因、申请应用、配额大小以及使用场景。  我们会在5个工作日内回复申请结果，请留意电话和邮箱消息。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "安全检测（SafetyDetect）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- 系统完整性检测API：每个应用在每个设备上每天最多可以调用1万次、每分钟最多调用5次。  - URL检测API：每个应用在每个设备上每天最多可以调用1万次。  - 系统完整性增强检测API：每个应用在每个设备上每天最多可以调用1万次、每分钟最多调用5次。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "业务风险检测（BusinessRiskIntelligentDetection）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- 涉诈剧本检测API：每个应用在每个设备上每天最多可以调用10次。  - 模拟点击检测API：每30秒最多可以调用10次，每个应用在每个设备上每天最多可以调用20次。  - 模拟点击增强检测API：每30秒最多可以调用10次，每个应用在每个设备上每天最多可以调用20次。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "安全审计（SecurityAudit）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- 订阅通知类事件场景：每个应用在每个设备上最多创建2个通知类事件客户端，单个设备上最多创建16个通知类事件客户端。  - 订阅阻断类事件场景：每个应用在每个设备上最多创建2个阻断类事件客户端，单个设备上最多创建16个阻断类事件客户端。"
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