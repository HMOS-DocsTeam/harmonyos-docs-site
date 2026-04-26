"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["287119"], {
588988(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_store_kit_guide_store_faq_store_faq_27_store_faq_27_md_260_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-store-kit-guide-store-faq-store-faq-27-store-faq-27-md-260.json
var site_docs_store_kit_guide_store_faq_store_faq_27_store_faq_27_md_260_namespaceObject = JSON.parse('{"id":"store-kit-guide/store-faq/store-faq-27/store-faq-27","title":"向用户显示应用更新提示弹框文案能否自定义？","description":"可以，弹框文案详细信息由用户配置，具体请参考配置本地化基础信息中的新版本特性。","source":"@site/docs/store-kit-guide/store-faq/store-faq-27/store-faq-27.md","sourceDirName":"store-kit-guide/store-faq/store-faq-27","slug":"/store-kit-guide/store-faq/store-faq-27/","permalink":"/harmonyos-docs-site/store-kit-guide/store-faq/store-faq-27/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":26,"frontMatter":{"title":"向用户显示应用更新提示弹框文案能否自定义？","sidebar_position":26,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/store-faq-27","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"应用市场更新功能抛出不在前台异常","permalink":"/harmonyos-docs-site/store-kit-guide/store-faq/store-faq-4/"},"next":{"title":"调用应用归因服务登记归因来源接口报错身份检查错误","permalink":"/harmonyos-docs-site/store-kit-guide/store-faq/store-faq-5/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/store-kit-guide/store-faq/store-faq-27/store-faq-27.md


const frontMatter = {
	title: '向用户显示应用更新提示弹框文案能否自定义？',
	sidebar_position: 26,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/store-faq-27',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '向用户显示应用更新提示弹框文案能否自定义？';

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
        id: "向用户显示应用更新提示弹框文案能否自定义",
        children: "向用户显示应用更新提示弹框文案能否自定义？"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可以，弹框文案详细信息由用户配置，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-app-intro-0000002313477961",
        children: "配置本地化基础信息"
      }), "中的新版本特性。"]
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