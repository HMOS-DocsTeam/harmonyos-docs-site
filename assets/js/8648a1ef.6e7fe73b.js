"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["293535"], {
709842(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_ui_js_dev_ui_js_building_ui_ui_js_building_ui_interactions_ui_js_building_ui_interactions_md_864_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-ui-js-dev-ui-js-building-ui-ui-js-building-ui-interactions-ui-js-building-ui-interactions-md-864.json
var site_docs_arkui_ui_js_dev_ui_js_building_ui_ui_js_building_ui_interactions_ui_js_building_ui_interactions_md_864_namespaceObject = JSON.parse('{"id":"arkui/ui-js-dev/ui-js-building-ui/ui-js-building-ui-interactions/ui-js-building-ui-interactions","title":"添加交互","description":"添加交互可以通过在组件上关联事件实现。本节将介绍如何用div、text、image组件关联click事件，构建一个如下图所示的点赞按钮。","source":"@site/docs/arkui/ui-js-dev/ui-js-building-ui/ui-js-building-ui-interactions/ui-js-building-ui-interactions.md","sourceDirName":"arkui/ui-js-dev/ui-js-building-ui/ui-js-building-ui-interactions","slug":"/arkui/ui-js-dev/ui-js-building-ui/ui-js-building-ui-interactions/","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-building-ui/ui-js-building-ui-interactions/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"添加交互","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-js-building-ui-interactions","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"添加容器","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-building-ui/ui-js-building-layout/ui-js-building-ui-layout-external-container/"},"next":{"title":"动画","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-building-ui/ui-js-building-ui-animation/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/ui-js-dev/ui-js-building-ui/ui-js-building-ui-interactions/ui-js-building-ui-interactions.md


const frontMatter = {
	title: '添加交互',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-js-building-ui-interactions',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '添加交互';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "添加交互",
        children: "添加交互"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "添加交互可以通过在组件上关联事件实现。本节将介绍如何用div、text、image组件关联click事件，构建一个如下图所示的点赞按钮。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(197217)/* ["default"] */.A) + "",
        width: "197",
        height: "95"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "点赞按钮通过一个div组件关联click事件实现。div组件包含一个image组件和一个text组件："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "image组件用于显示未点赞和点赞的效果。click事件函数会交替更新点赞和未点赞图片的路径。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "text组件用于显示点赞数，点赞数会在click事件的函数中同步更新。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "click事件作为一个函数定义在js文件中，可以更改isPressed的状态，从而更新显示的image组件。如果isPressed为真，则点赞数加1。该函数在hml文件中对应的div组件上生效，点赞按钮各子组件的样式设置在css文件当中。具体的实现示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<!-- 点赞按钮 -->\n<div>\n  <div class=\"like\" onclick=\"likeClick\">\n    <image class=\"like-img\" src=\"{{likeImage}}\" focusable=\"true\"></image>\n    <text class=\"like-num\" focusable=\"true\">{{total}}</text>\n  </div>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.like {\n  width: 104px;\n  height: 54px;\n  border: 2px solid #bcbcbc;\n  justify-content: space-between;\n  align-items: center;\n  margin-left: 72px;\n  border-radius: 8px;\n}\n.like-img {\n  width: 33px;\n  height: 33px;\n  margin-left: 14px;\n}\n.like-num {\n  color: #bcbcbc;\n  font-size: 20px;\n  margin-right: 17px;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  data: {\n    likeImage: '/common/unLike.png',\n    isPressed: false,\n    total: 20,\n  },\n  likeClick() {\n    var temp;\n    if (!this.isPressed) {\n      temp = this.total + 1;\n      this.likeImage = '/common/like.png';\n    } else {\n      temp = this.total - 1;\n      this.likeImage = '/common/unLike.png';\n    }\n    this.total = temp;\n    this.isPressed = !this.isPressed;\n  },\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "除此之外，还提供了很多表单组件，例如开关、标签、滑动选择器等，以便于开发者在页面布局时灵活使用和提高交互性。"
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
197217(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/gif;base64,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");

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