"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["481416"], {
784499(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_store_kit_guide_store_iap_store_iap_config_product_store_iap_product_server_store_iap_product_server_md_a82_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-store-kit-guide-store-iap-store-iap-config-product-store-iap-product-server-store-iap-product-server-md-a82.json
var site_docs_store_kit_guide_store_iap_store_iap_config_product_store_iap_product_server_store_iap_product_server_md_a82_namespaceObject = JSON.parse('{"id":"store-kit-guide/store-iap/store-iap-config-product/store-iap-product-server/store-iap-product-server","title":"通过Server API配置数字商品","description":"您也可以通过PMS（Product Management System）接口，对应用内数字商品的销售完成商品创建、查询、更新、管理促销活动等操作，并实现全球本地化定价。","source":"@site/docs/store-kit-guide/store-iap/store-iap-config-product/store-iap-product-server/store-iap-product-server.md","sourceDirName":"store-kit-guide/store-iap/store-iap-config-product/store-iap-product-server","slug":"/store-kit-guide/store-iap/store-iap-config-product/store-iap-product-server/","permalink":"/harmonyos-docs-site/store-kit-guide/store-iap/store-iap-config-product/store-iap-product-server/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"通过Server API配置数字商品","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/store-iap-product-server","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"通过AppGallery Connect配置数字商品","permalink":"/harmonyos-docs-site/store-kit-guide/store-iap/store-iap-config-product/store-iap-product-agc/"},"next":{"title":"展示数字商品","permalink":"/harmonyos-docs-site/store-kit-guide/store-iap/store-iap-distribute/store-iap-distribute-query/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/store-kit-guide/store-iap/store-iap-config-product/store-iap-product-server/store-iap-product-server.md


const frontMatter = {
	title: '通过Server API配置数字商品',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/store-iap-product-server',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '通过Server API配置数字商品';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    header: "header",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "通过server-api配置数字商品",
        children: "通过Server API配置数字商品"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["您也可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcapi-pmsapi-0000001162548121",
        children: "PMS"
      }), "（Product Management System）接口，对应用内数字商品的销售完成商品创建、查询、更新、管理促销活动等操作，并实现全球本地化定价。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基本的开发流程如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agcapi-getstarted-0000001111845114",
          children: "获取AppGallery Connect服务端授权"
        }), "：通过API客户端方式或者OAuth客户端方式获取服务端授权。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agcapi-pms-add_product-0000001115868326",
          children: "创建商品"
        }), "：包括商品的单个和批量方式的创建，您还可以参考《HarmonyOS NEXT 应用服务》中", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/app/digital-products-manage-0000001959074881",
          children: "管理数字商品"
        }), "的相关内容基于AppGallery Connect网站进行商品管理的相关操作。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agcapi-pms-manage_product-0000001162468125",
          children: "查询与更新商品"
        }), "：商品创建后可以查询和更新商品信息。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agcapi-pms-manage_productstatus-0000001162548101",
          children: "管理商品状态"
        }), "：激活与去激活商品。激活后商品生效，将开放商品的购买。去激活后商品失效，将禁用商品的购买，如有进行中的优惠活动将立即结束。针对订阅类商品客户端用户原已生效的订阅仍然有效，建议开发者维持订阅服务到已生效订阅有效期截止。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agcapi-pms-manage_product_prom-0000001116028236",
          children: "管理商品促销信息"
        }), "：针对订阅类和非订阅类商品可以创建、更新和查询商品促销信息，定义促销的时间段，适用国家/地区，以及促销价格。"]
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