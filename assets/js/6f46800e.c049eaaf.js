"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["235897"], {
229315(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkweb_web_render_layout_web_router_flash_optimization_web_router_flash_optimization_md_6f4_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkweb-web-render-layout-web-router-flash-optimization-web-router-flash-optimization-md-6f4.json
var site_docs_arkweb_web_render_layout_web_router_flash_optimization_web_router_flash_optimization_md_6f4_namespaceObject = JSON.parse('{"id":"arkweb/web-render-layout/web-router-flash-optimization/web-router-flash-optimization","title":"优化跳转至新Web组件过程中的页面闪烁现象","description":"应用使用Navigation等路由策略导航至Web组件页面时，在网页加载过程中，页面底部可能出现闪烁现象，这会影响用户体验。","source":"@site/docs/arkweb/web-render-layout/web-router-flash-optimization/web-router-flash-optimization.md","sourceDirName":"arkweb/web-render-layout/web-router-flash-optimization","slug":"/arkweb/web-render-layout/web-router-flash-optimization/","permalink":"/harmonyos-docs-site/arkweb/web-render-layout/web-router-flash-optimization/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"优化跳转至新Web组件过程中的页面闪烁现象","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-router-flash-optimization","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Web组件大小自适应页面内容布局","permalink":"/harmonyos-docs-site/arkweb/web-render-layout/web-fit-content/"},"next":{"title":"获取网页内容高度","permalink":"/harmonyos-docs-site/arkweb/web-render-layout/web-getpage-height/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkweb/web-render-layout/web-router-flash-optimization/web-router-flash-optimization.md


const frontMatter = {
	title: '优化跳转至新Web组件过程中的页面闪烁现象',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-router-flash-optimization',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '优化跳转至新Web组件过程中的页面闪烁现象';

const assets = {

};



const toc = [{
  "value": "闪烁原因",
  "id": "闪烁原因",
  "level": 2
}, {
  "value": "优化方法",
  "id": "优化方法",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "优化跳转至新web组件过程中的页面闪烁现象",
        children: "优化跳转至新Web组件过程中的页面闪烁现象"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation",
        children: "Navigation"
      }), "等路由策略导航至Web组件页面时，在网页加载过程中，页面底部可能出现闪烁现象，这会影响用户体验。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "闪烁原因",
      children: "闪烁原因"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用Navigation等路由策略导航至Web组件页面时，通常根据网页的回调通知判断是否隐藏系统导航栏。若决定隐藏，Web组件布局会进行调整。这一布局调整过程可简化为如下四个阶段："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(815694)/* ["default"] */.A) + "",
        width: "1429",
        height: "333"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图中四个状态的说明（从左至右）："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "将应用路由至Web页面，页面顶部为系统导航栏，底部是Web组件。在此情况下，网页能够正常加载。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在网页加载过程中，系统会回调通知应用侧隐藏系统导航栏，以便切换至网页端的导航栏。此时系统导航栏被隐藏，Web组件的布局随即进行调整，页面底部最初会显露出Web组件的背景色（假设为灰色）。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "网页继续根据新的尺寸加载并显示，首先呈现的是HTML网页的背景色（假设为白色）。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "最后，网页内容完全加载，展现出完整的HTML网页内容。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在上述流程中，如果Web组件的背景色与网页背景色不同，跳转时可能会出现闪烁。闪烁的概率取决于网页的复杂度和网络状况。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "优化方法",
      children: "优化方法"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用可以通过设置与网页背景色相同的Web组件的背景色，避免视觉闪烁，提升用户体验。例如，将Web组件的背景色设置为白色。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在类似情况下，如果Web组件的默认背景色为白色，而网页背景色为灰色，导航到新的Web页面时可能会出现白色闪烁。同理，将Web组件的背景色设置为灰色可以解决此问题。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下为设置Web组件背景色的接口示例（示例中将Web组件背景色设置为灰色，若不设置，Web组件背景色默认为白色）："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Web({ src: $rawfile('xxx.html'),  controller: this.webController})\n  .backgroundColor(Color.Gray)\n"
      })
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
815694(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958212-6a6aea86f25dea0a4a45c28f25e45a96.png");

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