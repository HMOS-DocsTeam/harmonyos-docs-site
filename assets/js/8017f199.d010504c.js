"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["877771"], {
467431(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_network_service_collaboration_kit_guide_servicecollaboration_faq_servicecollaboration_faq_1_servicecollaboration_faq_1_md_801_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-network-service-collaboration-kit-guide-servicecollaboration-faq-servicecollaboration-faq-1-servicecollaboration-faq-1-md-801.json
var site_docs_system_network_service_collaboration_kit_guide_servicecollaboration_faq_servicecollaboration_faq_1_servicecollaboration_faq_1_md_801_namespaceObject = JSON.parse('{"id":"system-network/service-collaboration-kit-guide/servicecollaboration-faq/servicecollaboration-faq-1/servicecollaboration-faq-1","title":"接入跨设备互通控件后，设备选择列表没有周围设备","description":"跨设备互通API支持根据特定调用策略调用设备。调用策略：2in1设备可以调用平板和手机，平板可以调用手机，同类型设备不可调用。","source":"@site/docs/system-network/service-collaboration-kit-guide/servicecollaboration-faq/servicecollaboration-faq-1/servicecollaboration-faq-1.md","sourceDirName":"system-network/service-collaboration-kit-guide/servicecollaboration-faq/servicecollaboration-faq-1","slug":"/system-network/service-collaboration-kit-guide/servicecollaboration-faq/servicecollaboration-faq-1/","permalink":"/harmonyos-docs-site/system-network/service-collaboration-kit-guide/servicecollaboration-faq/servicecollaboration-faq-1/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"接入跨设备互通控件后，设备选择列表没有周围设备","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/servicecollaboration-faq-1","kit":"system/network","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"跨设备互通（RichEditor控件）","permalink":"/harmonyos-docs-site/system-network/service-collaboration-kit-guide/servicecollaboration-richeditor-title/"},"next":{"title":"Telephony Kit简介","permalink":"/harmonyos-docs-site/system-network/telephony-kit/telephony-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-network/service-collaboration-kit-guide/servicecollaboration-faq/servicecollaboration-faq-1/servicecollaboration-faq-1.md


const frontMatter = {
	title: '接入跨设备互通控件后，设备选择列表没有周围设备',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/servicecollaboration-faq-1',
	kit: 'system/network',
	last_updated: '2026-04-22'
};
const contentTitle = '接入跨设备互通控件后，设备选择列表没有周围设备';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
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
        id: "接入跨设备互通控件后设备选择列表没有周围设备",
        children: "接入跨设备互通控件后，设备选择列表没有周围设备"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "跨设备互通API支持根据特定调用策略调用设备。调用策略：2in1设备可以调用平板和手机，平板可以调用手机，同类型设备不可调用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确保设备调用策略无误。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设备选择列表仍没有周围设备，请检查双端设备是否开启WLAN、蓝牙，并且登录同一个华为账号。"
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