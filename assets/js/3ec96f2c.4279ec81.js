"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["156783"], {
447121(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_hardware_wear_engine_kit_guide_wearengine_faq_wearengine_faq_5_wearengine_faq_5_md_3ec_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-hardware-wear-engine-kit-guide-wearengine-faq-wearengine-faq-5-wearengine-faq-5-md-3ec.json
var site_docs_system_hardware_wear_engine_kit_guide_wearengine_faq_wearengine_faq_5_wearengine_faq_5_md_3ec_namespaceObject = JSON.parse('{"id":"system-hardware/wear-engine-kit-guide/wearengine_faq/wearengine_faq-5/wearengine_faq-5","title":"HR传感器数据中，存在数值为0或255的异常情况","description":"0和255为瞬时异常数据，出现异常数据的原因可能是手表佩戴的位置有误或佩戴较松，请开发者对此异常数据进行过滤。","source":"@site/docs/system-hardware/wear-engine-kit-guide/wearengine_faq/wearengine_faq-5/wearengine_faq-5.md","sourceDirName":"system-hardware/wear-engine-kit-guide/wearengine_faq/wearengine_faq-5","slug":"/system-hardware/wear-engine-kit-guide/wearengine_faq/wearengine_faq-5/","permalink":"/harmonyos-docs-site/system-hardware/wear-engine-kit-guide/wearengine_faq/wearengine_faq-5/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"HR传感器数据中，存在数值为0或255的异常情况","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/wearengine_faq-5","kit":"system/hardware","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"打开HR传感器后，没有立刻上报数据","permalink":"/harmonyos-docs-site/system-hardware/wear-engine-kit-guide/wearengine_faq/wearengine_faq-4/"},"next":{"title":"手机和轻量级智能穿戴设备通信，提示错误码206","permalink":"/harmonyos-docs-site/system-hardware/wear-engine-kit-guide/wearengine_faq/wearengine_faq-6/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-hardware/wear-engine-kit-guide/wearengine_faq/wearengine_faq-5/wearengine_faq-5.md


const frontMatter = {
	title: 'HR传感器数据中，存在数值为0或255的异常情况',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/wearengine_faq-5',
	kit: 'system/hardware',
	last_updated: '2026-04-22'
};
const contentTitle = 'HR传感器数据中，存在数值为0或255的异常情况';

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
        id: "hr传感器数据中存在数值为0或255的异常情况",
        children: "HR传感器数据中，存在数值为0或255的异常情况"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "0和255为瞬时异常数据，出现异常数据的原因可能是手表佩戴的位置有误或佩戴较松，请开发者对此异常数据进行过滤。"
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