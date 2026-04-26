"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["254976"], {
160781(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_intents_kit_guide_intents_local_rec_intents_local_rec_dp_self_validation_intents_beacon_scheme_intents_beacon_scheme_md_1bd_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-intents-kit-guide-intents-local-rec-intents-local-rec-dp-self-validation-intents-beacon-scheme-intents-beacon-scheme-md-1bd.json
var site_docs_intents_kit_guide_intents_local_rec_intents_local_rec_dp_self_validation_intents_beacon_scheme_intents_beacon_scheme_md_1bd_namespaceObject = JSON.parse('{"id":"intents-kit-guide/intents-local-rec/intents-local-rec-dp-self-validation/intents-beacon-scheme/intents-beacon-scheme","title":"Beacon（蓝牙信标设备）方案","description":"根据与华为方锁定的场景选择的Beacon（蓝牙信标设备）方案对应步骤详情参考：","source":"@site/docs/intents-kit-guide/intents-local-rec/intents-local-rec-dp-self-validation/intents-beacon-scheme/intents-beacon-scheme.md","sourceDirName":"intents-kit-guide/intents-local-rec/intents-local-rec-dp-self-validation/intents-beacon-scheme","slug":"/intents-kit-guide/intents-local-rec/intents-local-rec-dp-self-validation/intents-beacon-scheme/","permalink":"/harmonyos-docs-site/intents-kit-guide/intents-local-rec/intents-local-rec-dp-self-validation/intents-beacon-scheme/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Beacon（蓝牙信标设备）方案","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/intents-beacon-scheme","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"POI方案","permalink":"/harmonyos-docs-site/intents-kit-guide/intents-local-rec/intents-local-rec-dp-self-validation/intents-poi-scheme/"},"next":{"title":"概述","permalink":"/harmonyos-docs-site/intents-kit-guide/intents-skill-all-rec/intents-skill-all-rec-introduction/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/intents-kit-guide/intents-local-rec/intents-local-rec-dp-self-validation/intents-beacon-scheme/intents-beacon-scheme.md


const frontMatter = {
	title: 'Beacon（蓝牙信标设备）方案',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/intents-beacon-scheme',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = 'Beacon（蓝牙信标设备）方案';

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
        id: "beacon蓝牙信标设备方案",
        children: "Beacon（蓝牙信标设备）方案"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据与华为方锁定的场景选择的Beacon（蓝牙信标设备）方案对应步骤详情参考："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-location-sense-by-beacon-0000002305369365",
        children: "近场服务-信标设备场景"
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