"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["763832"], {
917748(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_ui_js_dev_ui_js_building_ui_ui_js_building_layout_ui_js_building_ui_layout_image_ui_js_building_ui_layout_image_md_1cf_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-ui-js-dev-ui-js-building-ui-ui-js-building-layout-ui-js-building-ui-layout-image-ui-js-building-ui-layout-image-md-1cf.json
var site_docs_arkui_ui_js_dev_ui_js_building_ui_ui_js_building_layout_ui_js_building_ui_layout_image_ui_js_building_ui_layout_image_md_1cf_namespaceObject = JSON.parse('{"id":"arkui/ui-js-dev/ui-js-building-ui/ui-js-building-layout/ui-js-building-ui-layout-image/ui-js-building-ui-layout-image","title":"添加图片区域","description":"添加图片区域通常用image组件来实现，使用的方法和text组件类似。","source":"@site/docs/arkui/ui-js-dev/ui-js-building-ui/ui-js-building-layout/ui-js-building-ui-layout-image/ui-js-building-ui-layout-image.md","sourceDirName":"arkui/ui-js-dev/ui-js-building-ui/ui-js-building-layout/ui-js-building-ui-layout-image","slug":"/arkui/ui-js-dev/ui-js-building-ui/ui-js-building-layout/ui-js-building-ui-layout-image/","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-building-ui/ui-js-building-layout/ui-js-building-ui-layout-image/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"添加图片区域","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-js-building-ui-layout-image","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"添加标题行和文本区域","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-building-ui/ui-js-building-layout/ui-js-building-ui-layout-text/"},"next":{"title":"添加留言区域","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-building-ui/ui-js-building-layout/ui-js-building-ui-layout-comment/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/ui-js-dev/ui-js-building-ui/ui-js-building-layout/ui-js-building-ui-layout-image/ui-js-building-ui-layout-image.md


const frontMatter = {
	title: '添加图片区域',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-js-building-ui-layout-image',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '添加图片区域';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    header: "header",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "添加图片区域",
        children: "添加图片区域"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["添加图片区域通常用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-basic-comp/js-components-basic-image/js-components-basic-image",
        children: "image"
      }), "组件来实现，使用的方法和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-basic-comp/js-components-basic-text/js-components-basic-text",
        children: "text"
      }), "组件类似。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["图片资源建议放在js\\default\\common目录下，common目录需自行创建，详细的目录结构见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/ui-js-dev/js-framework-overview/js-framework-file#%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84",
        children: "目录结构"
      }), "。代码示例如下："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<image class=\"img\" src=\"{{middleImage}}\"></image>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.img {\n  margin-top: 30px;\n  margin-bottom: 30px;\n  height: 385px;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  data: {\n    middleImage: '/common/ice.png',\n  },\n}\n"
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