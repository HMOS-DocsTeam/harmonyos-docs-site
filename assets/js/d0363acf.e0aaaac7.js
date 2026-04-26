"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["326044"], {
584451(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_localization_kit_i_18_n_i_18_n_name_localization_i_18_n_display_overview_i_18_n_display_overview_md_d03_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-localization-kit-i-18-n-i-18-n-name-localization-i-18-n-display-overview-i-18-n-display-overview-md-d03.json
var site_docs_localization_kit_i_18_n_i_18_n_name_localization_i_18_n_display_overview_i_18_n_display_overview_md_d03_namespaceObject = JSON.parse('{"id":"localization-kit/i18n/i18n-name-localization/i18n-display-overview/i18n-display-overview","title":"概述","description":"本地化是指将语言、地区、脚本、时区、历法和日期等区域性元素按照本地的语言习惯显示。","source":"@site/docs/localization-kit/i18n/i18n-name-localization/i18n-display-overview/i18n-display-overview.md","sourceDirName":"localization-kit/i18n/i18n-name-localization/i18n-display-overview","slug":"/localization-kit/i18n/i18n-name-localization/i18n-display-overview/","permalink":"/harmonyos-docs-site/localization-kit/i18n/i18n-name-localization/i18n-display-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/i18n-display-overview","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"字符处理","permalink":"/harmonyos-docs-site/localization-kit/i18n/i18n-character-processing/"},"next":{"title":"本地化语言与地区名称","permalink":"/harmonyos-docs-site/localization-kit/i18n/i18n-name-localization/i18n-language-region-display/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/localization-kit/i18n/i18n-name-localization/i18n-display-overview/i18n-display-overview.md


const frontMatter = {
	title: '概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/i18n-display-overview',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '概述';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "概述",
        children: "概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本地化是指将语言、地区、脚本、时区、历法和日期等区域性元素按照本地的语言习惯显示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以通过以下方式进行本地化："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames",
          children: "本地化名称"
        }), "：采用Intl.DisplayNames接口本地化表示语言、地区、脚本、货币、历法和时间字段（如年、月、日等）。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/localization-kit/i18n/i18n-name-localization/i18n-language-region-display",
          children: "本地化语言与地区名称"
        }), "：采用i18n.System.getDisplayLanguage和i18n.System.getDisplayCountry接口实现本地化表示语言和地区。"]
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