"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["868756"], {
145398(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_store_kit_guide_store_iap_store_iap_distribute_store_iap_distribute_purchase_store_iap_distribute_purchase_md_314_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-store-kit-guide-store-iap-store-iap-distribute-store-iap-distribute-purchase-store-iap-distribute-purchase-md-314.json
var site_docs_store_kit_guide_store_iap_store_iap_distribute_store_iap_distribute_purchase_store_iap_distribute_purchase_md_314_namespaceObject = JSON.parse('{"id":"store-kit-guide/store-iap/store-iap-distribute/store-iap-distribute-purchase/store-iap-distribute-purchase","title":"购买数字商品","description":"场景介绍","source":"@site/docs/store-kit-guide/store-iap/store-iap-distribute/store-iap-distribute-purchase/store-iap-distribute-purchase.md","sourceDirName":"store-kit-guide/store-iap/store-iap-distribute/store-iap-distribute-purchase","slug":"/store-kit-guide/store-iap/store-iap-distribute/store-iap-distribute-purchase/","permalink":"/harmonyos-docs-site/store-kit-guide/store-iap/store-iap-distribute/store-iap-distribute-purchase/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"购买数字商品","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/store-iap-distribute-purchase","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"展示数字商品","permalink":"/harmonyos-docs-site/store-kit-guide/store-iap/store-iap-distribute/store-iap-distribute-query/"},"next":{"title":"发放数字商品权益","permalink":"/harmonyos-docs-site/store-kit-guide/store-iap/store-iap-distribute/store-iap-distribute-delivering/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/store-kit-guide/store-iap/store-iap-distribute/store-iap-distribute-purchase/store-iap-distribute-purchase.md


const frontMatter = {
	title: '购买数字商品',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/store-iap-distribute-purchase',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '购买数字商品';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "业务流程及开发步骤",
  "id": "业务流程及开发步骤",
  "level": 2
}, {
  "value": "消耗型/非消耗型商品",
  "id": "消耗型非消耗型商品",
  "level": 3
}, {
  "value": "自动续期订阅商品",
  "id": "自动续期订阅商品",
  "level": 3
}, {
  "value": "非续期订阅商品",
  "id": "非续期订阅商品",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "购买数字商品",
        children: "购买数字商品"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在应用内数字商品的购买场景中，用户会以一次性付款的方式购买消耗型商品或非消耗型商品。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "订阅是指用户在购买自动续期订阅商品后，可以在一段时间访问应用的增值功能或内容，并且会在订阅周期结束后自动续期购买下一期服务的能力。如果期间用户取消订阅，则订阅在当期结束后将不再自动续期。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["接入数字商品服务购买能力前，您需在华为", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/service/josp/agc/index.html",
        children: "AppGallery Connect"
      }), "网站", (0,jsx_runtime.jsx)(_components.a, {
        href: "/store-kit-guide/store-iap/store-iap-config-product/store-iap-product",
        children: "配置数字商品"
      }), "，录入商品ID和商品价格等信息。用户在开发者应用内发起购买时，使用数字商品服务的应用需要调用IAP Kit的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/iap-api/iap-arkts/iap-iap/iap-iap#iapcreatepurchase",
        children: "createPurchase"
      }), "接口来拉起收银台，收银台会展示商品名称、商品价格等信息，用户可在收银台完成商品购买。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "业务流程及开发步骤",
      children: "业务流程及开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "消耗型非消耗型商品",
      children: "消耗型/非消耗型商品"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细开发流程请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/iap-kit-guide/iap-purchases/iap-purchase/iap-integrate-purchase",
        children: "消耗型/非消耗型商品接入购买"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "自动续期订阅商品",
      children: "自动续期订阅商品"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细开发流程请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/iap-kit-guide/iap-purchases/iap-subscription/iap-integrate-subscription",
        children: "接入自动续期订阅"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "非续期订阅商品",
      children: "非续期订阅商品"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细开发流程请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/iap-kit-guide/iap-purchases/iap-nonrenewable/iap-integrate-nonrenewable",
        children: "非续期订阅商品购买"
      }), "。"]
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