"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["577159"], {
904225(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_ui_js_dev_ui_js_building_ui_ui_js_building_layout_ui_js_building_ui_layout_text_ui_js_building_ui_layout_text_md_33b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-ui-js-dev-ui-js-building-ui-ui-js-building-layout-ui-js-building-ui-layout-text-ui-js-building-ui-layout-text-md-33b.json
var site_docs_arkui_ui_js_dev_ui_js_building_ui_ui_js_building_layout_ui_js_building_ui_layout_text_ui_js_building_ui_layout_text_md_33b_namespaceObject = JSON.parse('{"id":"arkui/ui-js-dev/ui-js-building-ui/ui-js-building-layout/ui-js-building-ui-layout-text/ui-js-building-ui-layout-text","title":"添加标题行和文本区域","description":"实现标题和文本区域最常用的是基础组件text。text组件用于展示文本，可以设置不同的属性和样式，文本内容需要写在标签内容区，完整属性和样式信息请参考text。在页面中插入标题和文本区域的示例如下：","source":"@site/docs/arkui/ui-js-dev/ui-js-building-ui/ui-js-building-layout/ui-js-building-ui-layout-text/ui-js-building-ui-layout-text.md","sourceDirName":"arkui/ui-js-dev/ui-js-building-ui/ui-js-building-layout/ui-js-building-ui-layout-text","slug":"/arkui/ui-js-dev/ui-js-building-ui/ui-js-building-layout/ui-js-building-ui-layout-text/","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-building-ui/ui-js-building-layout/ui-js-building-ui-layout-text/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"添加标题行和文本区域","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-js-building-ui-layout-text","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"布局说明","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-building-ui/ui-js-building-layout/ui-js-building-ui-layout-intro/"},"next":{"title":"添加图片区域","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-building-ui/ui-js-building-layout/ui-js-building-ui-layout-image/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/ui-js-dev/ui-js-building-ui/ui-js-building-layout/ui-js-building-ui-layout-text/ui-js-building-ui-layout-text.md


const frontMatter = {
	title: '添加标题行和文本区域',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-js-building-ui-layout-text',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '添加标题行和文本区域';

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
        id: "添加标题行和文本区域",
        children: "添加标题行和文本区域"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["实现标题和文本区域最常用的是基础组件text。text组件用于展示文本，可以设置不同的属性和样式，文本内容需要写在标签内容区，完整属性和样式信息请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-basic-comp/js-components-basic-text/js-components-basic-text",
        children: "text"
      }), "。在页面中插入标题和文本区域的示例如下："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"container\">\n  <text class=\"title-text\">{{headTitle}}</text>\n  <text class=\"paragraph-text\">{{paragraphFirst}}</text>\n  <text class=\"paragraph-text\">{{paragraphSecond}}</text>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container {\n  flex-direction: column;\n  margin-top: 20px;\n  margin-left: 30px;\n}\n.title-text {\n  color: #1a1a1a;\n  font-size: 50px;\n  margin-top: 40px;\n  margin-bottom: 20px;\n  font-weight: 700;\n}\n.paragraph-text {\n  width: 95%;\n  color: #000000;\n  font-size: 35px;\n  line-height: 60px;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  data: {\n    headTitle: 'Capture the Beauty in Moment',\n    paragraphFirst: 'Capture the beauty of light during the transition and fusion of ice and water. At the instant of movement and stillness, softness and rigidity, force and beauty, condensing moving moments.',\n    paragraphSecond: 'Reflecting the purity of nature, the innovative design upgrades your visual entertainment and ergonomic comfort. Effortlessly capture what you see and let it speak for what you feel.',\n  },\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(537374)/* ["default"] */.A) + "",
        width: "346",
        height: "588"
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
537374(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958082-e46eb5c35201a5050b5dbc14e91798dc.png");

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