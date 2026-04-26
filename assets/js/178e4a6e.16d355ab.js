"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["735833"], {
296969(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_iap_kit_guide_iap_preparations_iap_basic_preparation_iap_set_necessary_parameters_iap_set_necessary_parameters_md_178_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-iap-kit-guide-iap-preparations-iap-basic-preparation-iap-set-necessary-parameters-iap-set-necessary-parameters-md-178.json
var site_docs_iap_kit_guide_iap_preparations_iap_basic_preparation_iap_set_necessary_parameters_iap_set_necessary_parameters_md_178_namespaceObject = JSON.parse('{"id":"iap-kit-guide/iap-preparations/iap-basic-preparation/iap-set-necessary-parameters/iap-set-necessary-parameters","title":"（可选）配置应用内购买服务参数","description":"配置订单/订阅通知接收地址","source":"@site/docs/iap-kit-guide/iap-preparations/iap-basic-preparation/iap-set-necessary-parameters/iap-set-necessary-parameters.md","sourceDirName":"iap-kit-guide/iap-preparations/iap-basic-preparation/iap-set-necessary-parameters","slug":"/iap-kit-guide/iap-preparations/iap-basic-preparation/iap-set-necessary-parameters/","permalink":"/harmonyos-docs-site/iap-kit-guide/iap-preparations/iap-basic-preparation/iap-set-necessary-parameters/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"（可选）配置应用内购买服务参数","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/iap-set-necessary-parameters","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"开启和激活应用内购买服务","permalink":"/harmonyos-docs-site/iap-kit-guide/iap-preparations/iap-basic-preparation/iap-enable-in-app-purchases/"},"next":{"title":"配置商品信息","permalink":"/harmonyos-docs-site/iap-kit-guide/iap-preparations/iap-config-product/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/iap-kit-guide/iap-preparations/iap-basic-preparation/iap-set-necessary-parameters/iap-set-necessary-parameters.md


const frontMatter = {
	title: '（可选）配置应用内购买服务参数',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/iap-set-necessary-parameters',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '（可选）配置应用内购买服务参数';

const assets = {

};



const toc = [{
  "value": "配置订单/订阅通知接收地址",
  "id": "配置订单订阅通知接收地址",
  "level": 2
}, {
  "value": "配置密钥",
  "id": "配置密钥",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "可选配置应用内购买服务参数",
        children: "（可选）配置应用内购买服务参数"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "配置订单订阅通知接收地址",
      children: "配置订单/订阅通知接收地址"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["IAP服务器支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/iap-api/iap-rest/iap-key-event-notifications/iap-key-event-notifications",
        children: "服务端关键事件通知"
      }), "的能力。用户购买商品后，IAP服务器会在订单（消耗型/非消耗型商品）和订阅场景的某些关键事件发生时发送通知至开发者配置的订单/订阅通知接收地址，具体的通知接收地址配置请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/app/parameters-0000001931995692",
        children: "激活服务和配置事件通知"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "配置密钥",
      children: "配置密钥"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["IAP服务器要求对每个服务端API请求进行JSON Web Token（JWT）授权。开发者可以使用从", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/service/josp/agc/index.html",
        children: "AppGallery Connect"
      }), "下载的API密钥对Token签名生成JWT，授权发起的服务端API请求。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/app/key-0000001959074877",
        children: "创建密钥"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/app/download-0000001958955101",
        children: "下载密钥"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/app/cancel-0000001931995696",
        children: "撤销密钥"
      }), "管理服务端密钥。"]
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