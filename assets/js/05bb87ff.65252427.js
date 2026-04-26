"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["141746"], {
705028(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_hardware_wear_engine_kit_guide_wearengine_faq_wearengine_faq_2_wearengine_faq_2_md_05b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-hardware-wear-engine-kit-guide-wearengine-faq-wearengine-faq-2-wearengine-faq-2-md-05b.json
var site_docs_system_hardware_wear_engine_kit_guide_wearengine_faq_wearengine_faq_2_wearengine_faq_2_md_05b_namespaceObject = JSON.parse('{"id":"system-hardware/wear-engine-kit-guide/wearengine_faq/wearengine_faq-2/wearengine_faq-2","title":"没有弹出用户授权界面","description":"1. 首次使用运动健康App，请打开App同意相关的隐私声明。","source":"@site/docs/system-hardware/wear-engine-kit-guide/wearengine_faq/wearengine_faq-2/wearengine_faq-2.md","sourceDirName":"system-hardware/wear-engine-kit-guide/wearengine_faq/wearengine_faq-2","slug":"/system-hardware/wear-engine-kit-guide/wearengine_faq/wearengine_faq-2/","permalink":"/harmonyos-docs-site/system-hardware/wear-engine-kit-guide/wearengine_faq/wearengine_faq-2/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"没有弹出用户授权界面","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/wearengine_faq-2","kit":"system/hardware","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用AppInfo时，如何获取应用身份标识","permalink":"/harmonyos-docs-site/system-hardware/wear-engine-kit-guide/wearengine_faq/wearengine_faq-9/"},"next":{"title":"接口调用时返回App has not applied for the Wear Engine service错误信息","permalink":"/harmonyos-docs-site/system-hardware/wear-engine-kit-guide/wearengine_faq/wearengine_faq-3/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-hardware/wear-engine-kit-guide/wearengine_faq/wearengine_faq-2/wearengine_faq-2.md


const frontMatter = {
	title: '没有弹出用户授权界面',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/wearengine_faq-2',
	kit: 'system/hardware',
	last_updated: '2026-04-22'
};
const contentTitle = '没有弹出用户授权界面';

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
        id: "没有弹出用户授权界面",
        children: "没有弹出用户授权界面"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "首次使用运动健康App，请打开App同意相关的隐私声明。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["请确保已按照", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-hardware/wear-engine-kit-guide/wearengine_phonedev/wear-engine-app-development/request_user_authorization",
          children: "请求用户授权"
        }), "章节，完成功能开发。"]
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