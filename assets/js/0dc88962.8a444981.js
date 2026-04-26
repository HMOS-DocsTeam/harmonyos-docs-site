"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["855480"], {
392405(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_weather_service_kit_guide_weather_service_faq_weather_service_faq_3_weather_service_faq_3_md_0dc_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-weather-service-kit-guide-weather-service-faq-weather-service-faq-3-weather-service-faq-3-md-0dc.json
var site_docs_weather_service_kit_guide_weather_service_faq_weather_service_faq_3_weather_service_faq_3_md_0dc_namespaceObject = JSON.parse('{"id":"weather-service-kit-guide/weather-service-faq/weather-service-faq-3/weather-service-faq-3","title":"请求了分钟级降水预报/天气预警/潮汐，未返回任何数据。","description":"如果查询区域当时无短时降水、无天气预警发布或预警已经解除、无潮汐站点时，没有数据返回属于正常现象。","source":"@site/docs/weather-service-kit-guide/weather-service-faq/weather-service-faq-3/weather-service-faq-3.md","sourceDirName":"weather-service-kit-guide/weather-service-faq/weather-service-faq-3","slug":"/weather-service-kit-guide/weather-service-faq/weather-service-faq-3/","permalink":"/harmonyos-docs-site/weather-service-kit-guide/weather-service-faq/weather-service-faq-3/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"请求了分钟级降水预报/天气预警/潮汐，未返回任何数据。","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/weather-service-faq-3","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Weather Service Kit接口有定位功能吗？","permalink":"/harmonyos-docs-site/weather-service-kit-guide/weather-service-faq/weather-service-faq-2/"},"next":{"title":"个人数据处理说明","permalink":"/harmonyos-docs-site/weather-service-kit-guide/weather-service-personal-data/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/weather-service-kit-guide/weather-service-faq/weather-service-faq-3/weather-service-faq-3.md


const frontMatter = {
	title: '请求了分钟级降水预报/天气预警/潮汐，未返回任何数据。',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/weather-service-faq-3',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '请求了分钟级降水预报/天气预警/潮汐，未返回任何数据。';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    header: "header",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "请求了分钟级降水预报天气预警潮汐未返回任何数据",
        children: "请求了分钟级降水预报/天气预警/潮汐，未返回任何数据。"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果查询区域当时无短时降水、无天气预警发布或预警已经解除、无潮汐站点时，没有数据返回属于正常现象。"
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