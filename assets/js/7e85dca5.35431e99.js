"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["601064"], {
120563(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_window_manager_launch_page_launch_page_overview_launch_page_overview_md_7e8_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-window-manager-launch-page-launch-page-overview-launch-page-overview-md-7e8.json
var site_docs_arkui_window_manager_launch_page_launch_page_overview_launch_page_overview_md_7e8_namespaceObject = JSON.parse('{"id":"arkui/window-manager/launch-page/launch-page-overview/launch-page-overview","title":"应用启动页简介","description":"启动页（Starting Window）是应用冷启动时显示的首个页面，在应用进程没有运行或者应用内容没有加载完成前，都将显示启动页。同时承载了应用展示品牌特性的功能，应用可以根据自己的设计配置资源，用于展示产品独特的标识，加强用户对产品的认知。","source":"@site/docs/arkui/window-manager/launch-page/launch-page-overview/launch-page-overview.md","sourceDirName":"arkui/window-manager/launch-page/launch-page-overview","slug":"/arkui/window-manager/launch-page/launch-page-overview/","permalink":"/harmonyos-docs-site/arkui/window-manager/launch-page/launch-page-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"应用启动页简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/launch-page-overview","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"顶部窗口控制条避让适配智慧多窗","permalink":"/harmonyos-docs-site/arkui/window-manager/multi-window-guide/multi-window-adapt/multi-window-controlbar-adapt/"},"next":{"title":"配置应用启动页","permalink":"/harmonyos-docs-site/arkui/window-manager/launch-page/launch-page-config/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/window-manager/launch-page/launch-page-overview/launch-page-overview.md


const frontMatter = {
	title: '应用启动页简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/launch-page-overview',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '应用启动页简介';

const assets = {

};



const toc = [{
  "value": "启动页展示场景",
  "id": "启动页展示场景",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
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
        id: "应用启动页简介",
        children: "应用启动页简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "启动页（Starting Window）是应用冷启动时显示的首个页面，在应用进程没有运行或者应用内容没有加载完成前，都将显示启动页。同时承载了应用展示品牌特性的功能，应用可以根据自己的设计配置资源，用于展示产品独特的标识，加强用户对产品的认知。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "启动页展示场景",
      children: "启动页展示场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用展示启动页主要包括如下场景，建议应用在进行启动页设计时，同时考虑如下场景的显示效果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用冷启动"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用在没有后台进程的情况下启动，会先展示启动页。启动页到应用内容有200ms的透明渐隐动效过渡。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "多任务卡片"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在应用还处于启动页阶段时退出到后台，多任务中将会展示该应用的启动页。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用主动销毁退出"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当应用主动销毁，且系统侧未生成快照时，会在应用退出动效中展示为启动页。"
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