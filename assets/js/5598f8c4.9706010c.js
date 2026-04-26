"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["456502"], {
122892(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_push_kit_guide_push_faq_push_faq_4_push_faq_4_md_559_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-push-kit-guide-push-faq-push-faq-4-push-faq-4-md-559.json
var site_docs_push_kit_guide_push_faq_push_faq_4_push_faq_4_md_559_namespaceObject = JSON.parse('{"id":"push-kit-guide/push-faq/push-faq-4/push-faq-4","title":"如何处理推送通知消息数量不够用问题","description":"建议您优化推送策略，做精细化推送，尽量减少或避免全量用户的推送。如果您的消息内容中有符合服务与通讯类消息的内容，建议您申请和接入消息自分类，详情请参见通知消息分类标准与提醒方式，系统会根据现网使用场景和流量进行管控，不合理的使用场景系统会进行频控。","source":"@site/docs/push-kit-guide/push-faq/push-faq-4/push-faq-4.md","sourceDirName":"push-kit-guide/push-faq/push-faq-4","slug":"/push-kit-guide/push-faq/push-faq-4/","permalink":"/harmonyos-docs-site/push-kit-guide/push-faq/push-faq-4/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"如何处理推送通知消息数量不够用问题","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/push-faq-4","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"如何处理误分类问题","permalink":"/harmonyos-docs-site/push-kit-guide/push-faq/push-faq-3/"},"next":{"title":"关于通知消息被频控的问题","permalink":"/harmonyos-docs-site/push-kit-guide/push-faq/push-faq-5/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/push-kit-guide/push-faq/push-faq-4/push-faq-4.md


const frontMatter = {
	title: '如何处理推送通知消息数量不够用问题',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/push-faq-4',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '如何处理推送通知消息数量不够用问题';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    header: "header",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "如何处理推送通知消息数量不够用问题",
        children: "如何处理推送通知消息数量不够用问题"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["建议您优化推送策略，做精细化推送，尽量减少或避免全量用户的推送。如果您的消息内容中有符合服务与通讯类消息的内容，建议您申请和接入消息自分类，详情请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/push-kit-guide/push-preparations/push-apply-right#%E9%80%9A%E7%9F%A5%E6%B6%88%E6%81%AF%E5%88%86%E7%B1%BB%E6%A0%87%E5%87%86%E4%B8%8E%E6%8F%90%E9%86%92%E6%96%B9%E5%BC%8F",
        children: "通知消息分类标准与提醒方式"
      }), "，系统会根据现网使用场景和流量进行管控，不合理的使用场景系统会进行频控。"]
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