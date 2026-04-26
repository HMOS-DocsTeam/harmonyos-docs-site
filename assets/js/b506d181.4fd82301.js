"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["951263"], {
387722(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_js_comp_arkui_card_comp_card_comp_framework_overview_js_service_widget_version_compatibility_js_service_widget_version_compatibility_md_b50_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-js-comp-arkui-card-comp-card-comp-framework-overview-js-service-widget-version-compatibility-js-service-widget-version-compatibility-md-b50.json
var site_docs_ref_arkui_api_arkui_js_comp_arkui_card_comp_card_comp_framework_overview_js_service_widget_version_compatibility_js_service_widget_version_compatibility_md_b50_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-js-comp/arkui-card-comp/card-comp-framework-overview/js-service-widget-version-compatibility/js-service-widget-version-compatibility","title":"版本兼容适配","description":"卡片特性不断增加，使用了新特性的卡片，在不支持这些新特性的老系统上可能显示异常。可以在卡片工程中指定最小SDK版本，防止使用新特性的卡片推送安装在老的系统上。也可以参考本章节的内容，在卡片开发阶段做前向兼容适配。","source":"@site/docs-ref/arkui-api/arkui-js-comp/arkui-card-comp/card-comp-framework-overview/js-service-widget-version-compatibility/js-service-widget-version-compatibility.md","sourceDirName":"arkui-api/arkui-js-comp/arkui-card-comp/card-comp-framework-overview/js-service-widget-version-compatibility","slug":"/arkui-api/arkui-js-comp/arkui-card-comp/card-comp-framework-overview/js-service-widget-version-compatibility/js-service-widget-version-compatibility","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-js-comp/arkui-card-comp/card-comp-framework-overview/js-service-widget-version-compatibility/js-service-widget-version-compatibility","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"版本兼容适配","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-service-widget-version-compatibility","kit":"应用框架","last_updated":"2026-04-22","slug":"js-service-widget-version-compatibility"},"sidebar":"ref","previous":{"title":"多语言支持","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-js-comp/arkui-card-comp/card-comp-framework-overview/js-service-widget-multiple-languages/js-service-widget-multiple-languages"},"next":{"title":"设置主题样式","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-js-comp/arkui-card-comp/card-comp-framework-overview/js-service-widget-theme/js-service-widget-theme"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-js-comp/arkui-card-comp/card-comp-framework-overview/js-service-widget-version-compatibility/js-service-widget-version-compatibility.md


const frontMatter = {
	title: '版本兼容适配',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-service-widget-version-compatibility',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'js-service-widget-version-compatibility'
};
const contentTitle = '版本兼容适配';

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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "版本兼容适配",
        children: "版本兼容适配"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "卡片特性不断增加，使用了新特性的卡片，在不支持这些新特性的老系统上可能显示异常。可以在卡片工程中指定最小SDK版本，防止使用新特性的卡片推送安装在老的系统上。也可以参考本章节的内容，在卡片开发阶段做前向兼容适配。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以通过JSON配置文件配置前向兼容能力。该文件提供了apiVersion属性用于兼容版本，该字段和卡片配置文件的数据字段data、事件字段actions同级。在apiVersion标签下定义的内容会基于当前运行版本信息，覆盖原始的data标签内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "假设JS服务卡片框架从API version 9开始，支持设置webp格式的图源（仅用于举例，不代表实际情况），则可以按照如下的方式，做前向兼容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div>\n    <image src=\"{{imageSrc}}\" style=\"width: 100px;height: 100px;\"></image>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JSON配置文件："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"data\": {\n    \"imageSrc\": \"defaultSrc.png\"\n  },\n  \"apiVersion\": {\n    \"9\": {\n      \"imageSrc\": \"newSrc.webp\"\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JS服务卡片开发框架会根据应用中的配置及当前系统运行版本，选取最合适的数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "假设系统运行版本在8及以下，则实际解析的imageSrc值为defaultSrc.png；"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "假设系统运行版本为9，则实际解析的imageSrc值为newSrc.webp。"
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