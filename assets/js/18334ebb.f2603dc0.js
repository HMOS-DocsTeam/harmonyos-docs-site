"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["690076"], {
589753(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_live_view_kit_guide_liveview_faq_liveview_faq_1_liveview_faq_1_md_183_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-live-view-kit-guide-liveview-faq-liveview-faq-1-liveview-faq-1-md-183.json
var site_docs_live_view_kit_guide_liveview_faq_liveview_faq_1_liveview_faq_1_md_183_namespaceObject = JSON.parse('{"id":"live-view-kit-guide/liveview-faq/liveview-faq-1/liveview-faq-1","title":"更新实况窗被频控的问题","description":"通过Push Kit更新实况窗时，单个实况窗消息每个设备每5分钟最多更新10次，每小时最多更新60次。出行打车与赛事比分场景，5分钟最多更新30次，每小时最多更新180次。详情见Push Kit消息频控。","source":"@site/docs/live-view-kit-guide/liveview-faq/liveview-faq-1/liveview-faq-1.md","sourceDirName":"live-view-kit-guide/liveview-faq/liveview-faq-1","slug":"/live-view-kit-guide/liveview-faq/liveview-faq-1/","permalink":"/harmonyos-docs-site/live-view-kit-guide/liveview-faq/liveview-faq-1/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"更新实况窗被频控的问题","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/liveview-faq-1","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"通过Push Kit更新实况窗","permalink":"/harmonyos-docs-site/live-view-kit-guide/liveview-scenes/liveview-update-by-push/"},"next":{"title":"三方开发框架接入的问题","permalink":"/harmonyos-docs-site/live-view-kit-guide/liveview-faq/liveview-faq-2/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/live-view-kit-guide/liveview-faq/liveview-faq-1/liveview-faq-1.md


const frontMatter = {
	title: '更新实况窗被频控的问题',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/liveview-faq-1',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '更新实况窗被频控的问题';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    header: "header",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "更新实况窗被频控的问题",
        children: "更新实况窗被频控的问题"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过Push Kit更新实况窗时，单个实况窗消息每个设备每5分钟最多更新10次，每小时最多更新60次。出行打车与赛事比分场景，5分钟最多更新30次，每小时最多更新180次。详情见Push Kit", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-msg-freq-control/push-msg-freq-control",
        children: "消息频控"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "实况窗创建和更新有流控机制:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "系统级流控（针对所有应用），实况通知创建每秒最多15次，实况通知更新每秒最多30次，超过频次部分被丢弃不下发。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用级流控（针对单个应用），实况通知创建每秒最多10次，实况通知更新每秒最多20次，超过频次部分被丢弃不下发。"
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