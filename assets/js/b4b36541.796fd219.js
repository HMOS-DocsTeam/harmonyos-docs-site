"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["870559"], {
869976(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_localization_kit_i_18_n_i_18_n_sorting_i_18_n_sorting_overview_i_18_n_sorting_overview_md_b4b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-localization-kit-i-18-n-i-18-n-sorting-i-18-n-sorting-overview-i-18-n-sorting-overview-md-b4b.json
var site_docs_localization_kit_i_18_n_i_18_n_sorting_i_18_n_sorting_overview_i_18_n_sorting_overview_md_b4b_namespaceObject = JSON.parse('{"id":"localization-kit/i18n/i18n-sorting/i18n-sorting-overview/i18n-sorting-overview","title":"概述","description":"世界各地的语言、文化不同，对相同的字符可能有不同的排序规则。为了满足不同国家、地区和语言用户的使用习惯，需提供不同的排序规则，输出具有语义特性的排序结果，方便用户查找。该功能适用于语言列表、国家/地区列表、联系人列表等多种场景。","source":"@site/docs/localization-kit/i18n/i18n-sorting/i18n-sorting-overview/i18n-sorting-overview.md","sourceDirName":"localization-kit/i18n/i18n-sorting/i18n-sorting-overview","slug":"/localization-kit/i18n/i18n-sorting/i18n-sorting-overview/","permalink":"/harmonyos-docs-site/localization-kit/i18n/i18n-sorting/i18n-sorting-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/i18n-sorting-overview","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"夏令时跳变","permalink":"/harmonyos-docs-site/localization-kit/i18n/i18n-time-zone-dst/i18n-dst-transition/"},"next":{"title":"本地习惯排序","permalink":"/harmonyos-docs-site/localization-kit/i18n/i18n-sorting/i18n-sorting-local/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/localization-kit/i18n/i18n-sorting/i18n-sorting-overview/i18n-sorting-overview.md


const frontMatter = {
	title: '概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/i18n-sorting-overview',
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
      children: "世界各地的语言、文化不同，对相同的字符可能有不同的排序规则。为了满足不同国家、地区和语言用户的使用习惯，需提供不同的排序规则，输出具有语义特性的排序结果，方便用户查找。该功能适用于语言列表、国家/地区列表、联系人列表等多种场景。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["多语言排序分为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/localization-kit/i18n/i18n-sorting/i18n-sorting-local",
        children: "按本地习惯排序"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/localization-kit/i18n/i18n-sorting/i18n-sorting-index",
        children: "创建索引"
      }), "两种方式，具体使用场景和开发步骤请参考对应章节。"]
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