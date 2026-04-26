"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["658612"], {
542487(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_payment_kit_guide_payment_password_free_pay_payment_password_free_pay_overview_payment_password_free_pay_overview_md_b64_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-payment-kit-guide-payment-password-free-pay-payment-password-free-pay-overview-payment-password-free-pay-overview-md-b64.json
var site_docs_payment_kit_guide_payment_password_free_pay_payment_password_free_pay_overview_payment_password_free_pay_overview_md_b64_namespaceObject = JSON.parse('{"id":"payment-kit-guide/payment-password-free-pay/payment-password-free-pay-overview/payment-password-free-pay-overview","title":"免密代扣说明","description":"免密代扣包括支付并签约以及签约代扣场景。","source":"@site/docs/payment-kit-guide/payment-password-free-pay/payment-password-free-pay-overview/payment-password-free-pay-overview.md","sourceDirName":"payment-kit-guide/payment-password-free-pay/payment-password-free-pay-overview","slug":"/payment-kit-guide/payment-password-free-pay/payment-password-free-pay-overview/","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-password-free-pay/payment-password-free-pay-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"免密代扣说明","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-password-free-pay-overview","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"平台类商户合单支付场景","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-partner-combined/"},"next":{"title":"支付并签约场景","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-password-free-pay/payment-pay-and-sign/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/payment-kit-guide/payment-password-free-pay/payment-password-free-pay-overview/payment-password-free-pay-overview.md


const frontMatter = {
	title: '免密代扣说明',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-password-free-pay-overview',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '免密代扣说明';

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
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "免密代扣说明",
        children: "免密代扣说明"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "免密代扣包括支付并签约以及签约代扣场景。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者接入免密支付前需先申请开通签约代扣产品（即申请", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "配置免密代扣模板"
        })
      }), "和获取", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "协议模板ID"
        })
      }), "），产品开通参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/payment-kit-guide/payment-preparations/payment-product-configuration#%E5%9C%BA%E6%99%AF%E4%B8%80%E4%BA%A7%E5%93%81%E5%BC%80%E9%80%9A%E6%93%8D%E4%BD%9C",
        children: "产品开通操作"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "华为支付以模板维度管理每个代扣扣费服务，主要组成要素如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "字段含义"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "开发者对接字段"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "协议模板ID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "planId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "由华为支付分配的唯一模板ID，开发对接免密支付的必选参数之一。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "商户签约协议号"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "mercContractCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "即商户签约标识。开发者请求签约时传入的签约协议号，商户侧生成，商户需保证唯一性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "委托代扣协议ID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "contractId"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["即华为签约标识。商户与用户签约成功后从华为支付签约回调通知中返回给商户或通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/payment-api/payment-rest/payment-merc/payment-withhold/payment-sign-query/payment-withhold-query-contractcode/payment-withhold-query-contractcode",
              children: "直连商户查询签约信息"
            }), "或", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/payment-api/payment-rest/payment-agent-merc/payment-partner-withhold/payment-partner-sign-query/payment-partner-withhold-query-contractcode/payment-partner-withhold-query-contractcode",
              children: "服务商查询签约信息"
            }), "接口查询获取。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接入免密支付时需注意以下事项："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不允许多个应用共同使用同一个免密代扣模板，发布的商品必须和免密代扣模板是一对一的关系。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "同一用户在同一商户同一模板下的多次签约，需要使用新的商户签约协议号，生成的华为支付侧委托代扣协议ID不变,且与最新商户签约协议号关联。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "商户在多个应用中使用同一委托代扣协议ID发起免密代扣时，需要统一传递用户签约的应用ID。"
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