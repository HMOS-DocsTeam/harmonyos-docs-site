"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["276201"], {
199347(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_payment_kit_guide_payment_partner_combined_payment_partner_combined_md_eb3_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-payment-kit-guide-payment-partner-combined-payment-partner-combined-md-eb3.json
var site_docs_payment_kit_guide_payment_partner_combined_payment_partner_combined_md_eb3_namespaceObject = JSON.parse('{"id":"payment-kit-guide/payment-partner-combined/payment-partner-combined","title":"平台类商户合单支付场景","description":"场景介绍","source":"@site/docs/payment-kit-guide/payment-partner-combined/payment-partner-combined.md","sourceDirName":"payment-kit-guide/payment-partner-combined","slug":"/payment-kit-guide/payment-partner-combined/","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-partner-combined/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"平台类商户合单支付场景","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-partner-combined","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"商户基础支付场景","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-payment-process/"},"next":{"title":"免密代扣说明","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-password-free-pay/payment-password-free-pay-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/payment-kit-guide/payment-partner-combined/payment-partner-combined.md


const frontMatter = {
	title: '平台类商户合单支付场景',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-partner-combined',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '平台类商户合单支付场景';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "业务流程",
  "id": "业务流程",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "预下单（服务器开发）",
  "id": "预下单服务器开发",
  "level": 3
}, {
  "value": "拉起华为支付收银台（端侧开发）",
  "id": "拉起华为支付收银台端侧开发",
  "level": 3
}, {
  "value": "支付结果回调通知（服务器开发）",
  "id": "支付结果回调通知服务器开发",
  "level": 3
}, {
  "value": "延伸和拓展",
  "id": "延伸和拓展",
  "level": 2
}, {
  "value": "平台类商户",
  "id": "平台类商户",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
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
        id: "平台类商户合单支付场景",
        children: "平台类商户合单支付场景"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从4.1.0(11)版本开始，新增支持平台类商户合单支付场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户在商户开发的APP应用/元服务上购买了一个旅行套餐，包含机票、保险、酒店等这几个不同的产品对应不同的收单商户，但用户是一次支付。平台类商户通过接入合单支付将多个不同商户的订单合到同一订单下发起支付。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持商户模型：平台类商户"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "华为支付收银台合单支付展示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(648303)/* ["default"] */.A) + "",
        width: "800",
        height: "450"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "业务流程",
      children: "业务流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者通过接入Payment Kit合单支付，可以将多个子订单合并到同一个主订单里完成支付。具体接入流程如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(778601)/* ["default"] */.A) + "",
        width: "960",
        height: "567"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "商户客户端请求商户服务端创建合单支付订单。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["商户服务器通过调用Payment Kit服务端", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/payment-api/payment-rest/payment-agent-merc/payment-partner-combined-pay/payment-partner-combined-app-prepay/payment-partner-combined-app-prepay",
          children: "平台类商户合单支付预下单"
        }), "接口。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Payment Kit服务端返回预支付ID（prepayId）给商户服务端。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["商户服务端组建订单信息参数", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/payment-api/payment-model/payment-model#orderstr",
          children: "orderStr"
        }), "返回给客户端。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["商户客户端使用orderStr作为入参调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/payment-api/payment-arkts/payment-paymentservice/payment-paymentservice#paymentservicerequestpayment",
          children: "requestPayment"
        }), "接口拉起Payment Kit支付收银台。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Payment Kit客户端展示支付收银台，通过支付收银台可查看多个订单详情信息。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户在Payment Kit客户端收银台完成支付操作后。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Payment Kit服务端受理支付，异步处理支付订单。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Payment Kit服务端同步返回支付结果信息给Payment Kit客户端。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Payment Kit客户端展示支付结果页。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户关闭支付结果页后Payment Kit客户端会返回支付状态给商户客户端。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Payment Kit服务端异步处理支付完成后，会调用商户预下单时通过callbackUrl传递的回调接口返回支付结果信息给商户服务器。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["商户服务器收到支付结果回调响应后，使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/payment-api/payment-rest/payment-rest-overview/payment-rest-overview#%E9%AA%8C%E7%AD%BE%E8%A7%84%E5%88%99",
          children: "SM2验签方式"
        }), "对支付结果进行验签。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["接口返回值有两种返回形式：Promise和AsyncCallback。Promise和AsyncCallback只是返回方式不一样，功能相同。具体API说明详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-arkts/payment-paymentservice/payment-paymentservice",
        children: "接口文档"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "requestPayment(context:common.UIAbilityContext, orderStr: string): Promise<void>;"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拉起Payment Kit支付收银台。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "requestPayment(context:common.UIAbilityContext, orderStr: string, callback: AsyncCallback<void>): void;"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拉起Payment Kit支付收银台。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "预下单服务器开发",
      children: "预下单（服务器开发）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["开发者按照商户模型调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/payment-api/payment-rest/payment-agent-merc/payment-partner-combined-pay/payment-partner-combined-app-prepay/payment-partner-combined-app-prepay",
            children: "平台类商户合单支付预下单"
          }), "接口获取预支付ID（prepayId）。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["为保证支付订单的安全性和可靠性需要对请求body和请求头PayMercAuth对象内的入参排序拼接进行签名，可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/payment-api/payment-rest/payment-rest-overview/payment-rest-overview#%E7%AD%BE%E5%90%8D%E8%A7%84%E5%88%99",
            children: "签名规则"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["构建合单订单信息参数", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/payment-api/payment-model/payment-model#orderstr",
            children: "orderStr"
          }), "并返回给客户端。业务接口请求示例代码可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/payment-kit-guide/payment-preparations/payment-server-connect#%E4%B8%9A%E5%8A%A1%E6%8E%A5%E5%8F%A3%E8%AF%B7%E6%B1%82",
            children: "业务接口请求"
          }), "。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "拉起华为支付收银台端侧开发",
      children: "拉起华为支付收银台（端侧开发）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用服务端返回的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-model/payment-model#orderstr",
        children: "orderStr"
      }), "调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-arkts/payment-paymentservice/payment-paymentservice#paymentservicerequestpayment",
        children: "requestPayment"
      }), "接口拉起Payment Kit支付收银台。合单支付拉起支付收银台与商户基础支付场景处理逻辑一致，可参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/payment-kit-guide/payment-payment-process#%E6%8B%89%E8%B5%B7%E5%8D%8E%E4%B8%BA%E6%94%AF%E4%BB%98%E6%94%B6%E9%93%B6%E5%8F%B0%E7%AB%AF%E4%BE%A7%E5%BC%80%E5%8F%91",
        children: "这里"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "支付结果回调通知服务器开发",
      children: "支付结果回调通知（服务器开发）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["支付成功后华为支付服务器会调用开发者提供回调接口，将支付信息返回给开发者的服务器，回调详细信息按商户模式请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-rest/payment-agent-merc/payment-partner-combined-pay/payment-partner-combined-notify/payment-partner-combined-notify",
        children: "平台类商户合单支付结果回调通知"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为保证信息合法性，商户服务器需要对返回的支付信息进行", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-rest/payment-rest-overview/payment-rest-overview#%E9%AA%8C%E7%AD%BE%E8%A7%84%E5%88%99",
        children: "SM2验签"
      }), "，验签注意事项："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "需直接使用通知的完整内容进行验签。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "验签前需要对返回数据进行排序拼接，sign字段是签名值，排序拼接后的待验签内容需要排除sign字段。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["验签公钥使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/payment-kit-guide/payment-preparations/payment-certificates-config#%E5%8D%8E%E4%B8%BA%E6%94%AF%E4%BB%98%E8%AF%81%E4%B9%A6",
          children: "华为支付证书"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "延伸和拓展",
      children: "延伸和拓展"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当开发者完成上述能力之后，可以调用以下API接口完成订单其他相关操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "平台类商户",
      children: "平台类商户"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-rest/payment-agent-merc/payment-partner-combined-pay/payment-partner-combined-query-order/payment-partner-combined-merc-query-order/payment-partner-combined-merc-query-order",
        children: "查询合单支付订单"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-rest/payment-agent-merc/payment-partner-combined-pay/payment-partner-combined-refund/payment-partner-combined-refund",
        children: "申请退款"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-rest/payment-agent-merc/payment-partner-combined-pay/payment-partner-combined-query-refund/payment-partner-combined-merc-query-refund/payment-partner-combined-merc-query-refund",
        children: "查询退款订单"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-rest/payment-agent-merc/payment-partner-bill/payment-partner-agent-query-trade-bill/payment-partner-agent-query-trade-bill",
        children: "查询对账单"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-rest/payment-agent-merc/payment-partner-bill/payment-partner-agent-query-settle-bill/payment-partner-agent-query-settle-bill",
        children: "查询结算账单"
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
778601(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479087-8c6a6cd500332c50f5b5ffa6f945b81f.png");

},
648303(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959086-47d0ed34fe47345e91c42d5e73464996.png");

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