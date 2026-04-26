"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["417257"], {
728062(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_hardware_wear_engine_kit_guide_wearengine_faq_wearengine_faq_3_wearengine_faq_3_md_8c2_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-hardware-wear-engine-kit-guide-wearengine-faq-wearengine-faq-3-wearengine-faq-3-md-8c2.json
var site_docs_system_hardware_wear_engine_kit_guide_wearengine_faq_wearengine_faq_3_wearengine_faq_3_md_8c2_namespaceObject = JSON.parse('{"id":"system-hardware/wear-engine-kit-guide/wearengine_faq/wearengine_faq-3/wearengine_faq-3","title":"接口调用时返回App has not applied for the Wear Engine service错误信息","description":"1. 请确保已在华为开发者联盟网站完成了申请接入Wear Engine服务，并已审批通过。","source":"@site/docs/system-hardware/wear-engine-kit-guide/wearengine_faq/wearengine_faq-3/wearengine_faq-3.md","sourceDirName":"system-hardware/wear-engine-kit-guide/wearengine_faq/wearengine_faq-3","slug":"/system-hardware/wear-engine-kit-guide/wearengine_faq/wearengine_faq-3/","permalink":"/harmonyos-docs-site/system-hardware/wear-engine-kit-guide/wearengine_faq/wearengine_faq-3/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"接口调用时返回App has not applied for the Wear Engine service错误信息","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/wearengine_faq-3","kit":"system/hardware","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"没有弹出用户授权界面","permalink":"/harmonyos-docs-site/system-hardware/wear-engine-kit-guide/wearengine_faq/wearengine_faq-2/"},"next":{"title":"打开HR传感器后，没有立刻上报数据","permalink":"/harmonyos-docs-site/system-hardware/wear-engine-kit-guide/wearengine_faq/wearengine_faq-4/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-hardware/wear-engine-kit-guide/wearengine_faq/wearengine_faq-3/wearengine_faq-3.md


const frontMatter = {
	title: '接口调用时返回App has not applied for the Wear Engine service错误信息',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/wearengine_faq-3',
	kit: 'system/hardware',
	last_updated: '2026-04-22'
};
const contentTitle = '接口调用时返回App has not applied for the Wear Engine service错误信息';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    header: "header",
    li: "li",
    ol: "ol",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "接口调用时返回app-has-not-applied-for-the-wear-engine-service错误信息",
        children: "接口调用时返回App has not applied for the Wear Engine service错误信息"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["请确保已在华为开发者联盟网站完成了", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-hardware/wear-engine-kit-guide/wearengine_phonedev/wearengine_preparation/wearengine_apply",
          children: "申请接入Wear Engine服务"
        }), "，并已审批通过。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果已申请了Wear Engine服务并且通过审批，仍返回App has not applied for the Wear Engine service错误信息，可能是您在华为联盟网站上申请Wear Engine服务前已经调用过相关接口，申请审核通过后，本地已缓存的未申请权限的记录未更新（每24小时自动刷新一次）。请在应用管理中清除华为运动健康App数据，或卸载重装华为运动健康App后重试。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["如仍无法解决，请通过华为开发者联盟的“", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/support/feedback/#/",
          children: "在线提单"
        }), "”获取人工帮助。"]
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