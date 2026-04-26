"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["309989"], {
905305(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_form_kit_arkts_ui_arkts_ui_widget_arkts_ui_widget_page_arkts_ui_widget_page_overview_arkts_ui_widget_page_overview_md_f42_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-form-kit-arkts-ui-arkts-ui-widget-arkts-ui-widget-page-arkts-ui-widget-page-overview-arkts-ui-widget-page-overview-md-f42.json
var site_docs_form_kit_arkts_ui_arkts_ui_widget_arkts_ui_widget_page_arkts_ui_widget_page_overview_arkts_ui_widget_page_overview_md_f42_namespaceObject = JSON.parse('{"id":"form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-page/arkts-ui-widget-page-overview/arkts-ui-widget-page-overview","title":"ArkTS卡片界面开发概述","description":"ArkTS卡片开发采用通用ArkTS语言，开发者可以使用ArkTS声明式开发范式开发ArkTS卡片页面。","source":"@site/docs/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-page/arkts-ui-widget-page-overview/arkts-ui-widget-page-overview.md","sourceDirName":"form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-page/arkts-ui-widget-page-overview","slug":"/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-page/arkts-ui-widget-page-overview/","permalink":"/harmonyos-docs-site/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-page/arkts-ui-widget-page-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"ArkTS卡片界面开发概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-ui-widget-page-overview","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"ArkTS卡片进程模型","permalink":"/harmonyos-docs-site/form-kit/arkts-ui/arkts-ui-widget-process/"},"next":{"title":"ArkTS卡片为组件添加动效","permalink":"/harmonyos-docs-site/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-page/arkts-ui-widget-page-animation/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-page/arkts-ui-widget-page-overview/arkts-ui-widget-page-overview.md


const frontMatter = {
	title: 'ArkTS卡片界面开发概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-ui-widget-page-overview',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'ArkTS卡片界面开发概述';

const assets = {

};



const toc = [{
  "value": "ArkTS卡片支持的页面能力",
  "id": "arkts卡片支持的页面能力",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "arkts卡片界面开发概述",
        children: "ArkTS卡片界面开发概述"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ArkTS卡片开发采用通用", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/learning-arkts",
        children: "ArkTS语言"
      }), "，开发者可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-development-overview",
        children: "ArkTS声明式开发范式"
      }), "开发ArkTS卡片页面。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如下卡片页面由DevEco Studio模板自动生成，开发者可以根据自身的业务场景进行调整。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(625357)/* ["default"] */.A) + "",
        width: "240",
        height: "268"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "arkts卡片支持的页面能力",
      children: "ArkTS卡片支持的页面能力"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ArkTS卡片具备JS卡片的全量能力，并且新增了动效能力和自定义绘制的能力，支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-development-overview",
        children: "ArkTS声明式开发范式"
      }), "的部分组件、事件、动效、数据管理、状态管理能力。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于支持在ArkTS卡片UI界面中使用的接口，会添加“卡片能力”的标记，如：从API version 12开始，该接口支持在ArkTS卡片中使用。同时请留意卡片场景下的能力差异说明。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如：以下说明表示CircleShape可在ArkTS卡片中使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(984375)/* ["default"] */.A) + "",
        width: "762",
        height: "222"
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
984375(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798642-11586a1e76ea2d6b0f131e4387df072e.png");

},
625357(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

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