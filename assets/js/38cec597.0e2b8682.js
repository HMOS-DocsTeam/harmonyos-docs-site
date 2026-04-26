"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["401087"], {
291520(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_ui_js_dev_ui_js_components_ui_js_svg_ui_js_components_svg_graphics_ui_js_components_svg_graphics_md_38c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-ui-js-dev-ui-js-components-ui-js-svg-ui-js-components-svg-graphics-ui-js-components-svg-graphics-md-38c.json
var site_docs_arkui_ui_js_dev_ui_js_components_ui_js_svg_ui_js_components_svg_graphics_ui_js_components_svg_graphics_md_38c_namespaceObject = JSON.parse('{"id":"arkui/ui-js-dev/ui-js-components/ui-js-svg/ui-js-components-svg-graphics/ui-js-components-svg-graphics","title":"绘制图形","description":"svg组件可以用来绘制常见图形和线段，如矩形（&lt;rect&gt;）、圆形（&lt;circle&gt;）、线条(&lt;line&gt;）等，具体支持图形样式还请参考svg组件。","source":"@site/docs/arkui/ui-js-dev/ui-js-components/ui-js-svg/ui-js-components-svg-graphics/ui-js-components-svg-graphics.md","sourceDirName":"arkui/ui-js-dev/ui-js-components/ui-js-svg/ui-js-components-svg-graphics","slug":"/arkui/ui-js-dev/ui-js-components/ui-js-svg/ui-js-components-svg-graphics/","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-components/ui-js-svg/ui-js-components-svg-graphics/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"绘制图形","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-js-components-svg-graphics","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"基础知识","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-components/ui-js-svg/ui-js-components-svg-overview/"},"next":{"title":"绘制路径","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-components/ui-js-svg/ui-js-components-svg-path/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/ui-js-dev/ui-js-components/ui-js-svg/ui-js-components-svg-graphics/ui-js-components-svg-graphics.md


const frontMatter = {
	title: '绘制图形',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-js-components-svg-graphics',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '绘制图形';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    header: "header",
    img: "img",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "绘制图形",
        children: "绘制图形"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["svg组件可以用来绘制常见图形和线段，如矩形（<rect>）、圆形（<circle>）、线条(<line>）等，具体支持图形样式还请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-svg-comp/js-components-svg/js-components-svg",
        children: "svg"
      }), "组件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在本场景中，绘制各种图形拼接成一个小房子。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"container\">\n  <svg width=\"1000\" height=\"1000\">\n    <polygon points=\"100,400 300,200 500,400\" fill=\"red\"></polygon>     //屋顶\n    <polygon points=\"375,275 375,225 425,225 425,325\" fill=\"orange\"></polygon>   //烟囱\n    <rect width=\"300\" height=\"300\" x=\"150\" y=\"400\" fill=\"orange\">      //房子\n    </rect>\n    <rect width=\"100\" height=\"100\" x=\"180\" y=\"450\" fill=\"white\">    //窗户\n    </rect>\n    <line x1=\"180\" x2=\"280\" y1=\"500\" y2=\"500\" stroke-width=\"4\" fill=\"white\" stroke=\"black\"></line>     //窗框\n    <line x1=\"230\" x2=\"230\" y1=\"450\" y2=\"550\" stroke-width=\"4\" fill=\"white\" stroke=\"black\"></line>     //窗框\n    <polygon points=\"325,700 325,550 400,550 400,700\" fill=\"red\"></polygon>     //门\n    <circle cx=\"380\" cy=\"625\" r=\"20\" fill=\"black\"></circle>      //门把手\n  </svg>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container {\n  width: 100%;\n  height: 100%;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: #F1F3F5;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(474378)/* ["default"] */.A) + "",
        width: "341",
        height: "551"
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
474378(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958140-47617dfbb20d636ebc782a878e16365a.png");

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