"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["644584"], {
664466(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_live_view_kit_guide_liveview_faq_liveview_faq_3_liveview_faq_3_md_547_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-live-view-kit-guide-liveview-faq-liveview-faq-3-liveview-faq-3-md-547.json
var site_docs_live_view_kit_guide_liveview_faq_liveview_faq_3_liveview_faq_3_md_547_namespaceObject = JSON.parse('{"id":"live-view-kit-guide/liveview-faq/liveview-faq-3/liveview-faq-3","title":"关于实况窗生命周期的问题","description":"如何实现“App关闭时，自动关闭构建的实况窗”","source":"@site/docs/live-view-kit-guide/liveview-faq/liveview-faq-3/liveview-faq-3.md","sourceDirName":"live-view-kit-guide/liveview-faq/liveview-faq-3","slug":"/live-view-kit-guide/liveview-faq/liveview-faq-3/","permalink":"/harmonyos-docs-site/live-view-kit-guide/liveview-faq/liveview-faq-3/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"关于实况窗生命周期的问题","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/liveview-faq-3","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"三方开发框架接入的问题","permalink":"/harmonyos-docs-site/live-view-kit-guide/liveview-faq/liveview-faq-2/"},"next":{"title":"关于实况窗模板使用的问题","permalink":"/harmonyos-docs-site/live-view-kit-guide/liveview-faq/liveview-faq-4/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/live-view-kit-guide/liveview-faq/liveview-faq-3/liveview-faq-3.md


const frontMatter = {
	title: '关于实况窗生命周期的问题',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/liveview-faq-3',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '关于实况窗生命周期的问题';

const assets = {

};



const toc = [{
  "value": "如何实现“App关闭时，自动关闭构建的实况窗”",
  "id": "如何实现app关闭时自动关闭构建的实况窗",
  "level": 2
}, {
  "value": "本地更新如何获取实况窗实例以及实况窗被清除后的限制",
  "id": "本地更新如何获取实况窗实例以及实况窗被清除后的限制",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "关于实况窗生命周期的问题",
        children: "关于实况窗生命周期的问题"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "如何实现app关闭时自动关闭构建的实况窗",
      children: "如何实现“App关闭时，自动关闭构建的实况窗”"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当App关闭时，可以调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/live-view-api/liveview-arkts/liveview-liveviewmanager/liveview-liveviewmanager#liveviewmanagerstopliveview",
        children: "liveViewManager.stopLiveView"
      }), "方法，设置参数", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/live-view-api/liveview-arkts/liveview-liveviewmanager/liveview-liveviewmanager#primarydata",
        children: "PrimaryData"
      }), "实例的keepTime值为0，即可实现立即关闭实况窗。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "本地更新如何获取实况窗实例以及实况窗被清除后的限制",
      children: "本地更新如何获取实况窗实例以及实况窗被清除后的限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["本地更新实况窗时，可以通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/live-view-api/liveview-arkts/liveview-liveviewmanager/liveview-liveviewmanager#liveviewmanagergetactiveliveview",
          children: "liveViewManager.getActiveLiveView"
        }), "函数获取活动的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/live-view-api/liveview-arkts/liveview-liveviewmanager/liveview-liveviewmanager#liveview",
          children: "LiveView"
        }), "实例。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["如果想要结束实况窗，建议使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/live-view-api/liveview-arkts/liveview-liveviewmanager/liveview-liveviewmanager#liveviewmanagerstopliveview",
          children: "liveViewManager.stopLiveView"
        }), "方法。如果实况窗被notificationManager.cancel或notificationManager.cancelAll清除后，无论是Live View Kit还是Push Kit，无法再次通过该id更新或结束实况窗。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "再次创建该id的实况窗时，Live View Kit可以通过该id再次创建实况窗，Push Kit在12小时内无法通过该id再次创建实况窗。"
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