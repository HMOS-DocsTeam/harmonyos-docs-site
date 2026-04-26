"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["148155"], {
356037(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_js_comp_arkui_card_comp_card_comp_framework_overview_js_service_widget_theme_js_service_widget_theme_md_016_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-js-comp-arkui-card-comp-card-comp-framework-overview-js-service-widget-theme-js-service-widget-theme-md-016.json
var site_docs_ref_arkui_api_arkui_js_comp_arkui_card_comp_card_comp_framework_overview_js_service_widget_theme_js_service_widget_theme_md_016_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-js-comp/arkui-card-comp/card-comp-framework-overview/js-service-widget-theme/js-service-widget-theme","title":"设置主题样式","description":"卡片目前支持修改的主题样式如下：","source":"@site/docs-ref/arkui-api/arkui-js-comp/arkui-card-comp/card-comp-framework-overview/js-service-widget-theme/js-service-widget-theme.md","sourceDirName":"arkui-api/arkui-js-comp/arkui-card-comp/card-comp-framework-overview/js-service-widget-theme","slug":"/arkui-api/arkui-js-comp/arkui-card-comp/card-comp-framework-overview/js-service-widget-theme/js-service-widget-theme","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-js-comp/arkui-card-comp/card-comp-framework-overview/js-service-widget-theme/js-service-widget-theme","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"设置主题样式","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-service-widget-theme","kit":"应用框架","last_updated":"2026-04-22","slug":"js-service-widget-theme"},"sidebar":"ref","previous":{"title":"版本兼容适配","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-js-comp/arkui-card-comp/card-comp-framework-overview/js-service-widget-version-compatibility/js-service-widget-version-compatibility"},"next":{"title":"通用属性","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-js-comp/arkui-card-comp/card-comp-universal-comp-inform/js-service-widget-common-attributes/js-service-widget-common-attributes"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-js-comp/arkui-card-comp/card-comp-framework-overview/js-service-widget-theme/js-service-widget-theme.md


const frontMatter = {
	title: '设置主题样式',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-service-widget-theme',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'js-service-widget-theme'
};
const contentTitle = '设置主题样式';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    header: "header",
    p: "p",
    pre: "pre",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "设置主题样式",
        children: "设置主题样式"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "卡片目前支持修改的主题样式如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "app_background"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置卡片背景颜色。默认为纯白色。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "修改主题样式需要在widget文件夹下手动创建与pages同级的resources文件夹，在widget/resources/styles/default.json文件中配置主题样式。例如，修改卡片默认的背景色为浅灰色："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"style\": {\n    \"app_background\": \"#dcdcdc\"\n  }\n}\n"
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