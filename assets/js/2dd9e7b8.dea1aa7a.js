"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["267455"], {
935621(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_payment_kit_guide_payment_password_free_pay_payment_pay_and_sign_payment_pay_and_sign_md_2dd_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-payment-kit-guide-payment-password-free-pay-payment-pay-and-sign-payment-pay-and-sign-md-2dd.json
var site_docs_payment_kit_guide_payment_password_free_pay_payment_pay_and_sign_payment_pay_and_sign_md_2dd_namespaceObject = JSON.parse('{"id":"payment-kit-guide/payment-password-free-pay/payment-pay-and-sign/payment-pay-and-sign","title":"支付并签约场景","description":"场景介绍","source":"@site/docs/payment-kit-guide/payment-password-free-pay/payment-pay-and-sign/payment-pay-and-sign.md","sourceDirName":"payment-kit-guide/payment-password-free-pay/payment-pay-and-sign","slug":"/payment-kit-guide/payment-password-free-pay/payment-pay-and-sign/","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-password-free-pay/payment-pay-and-sign/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"支付并签约场景","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-pay-and-sign","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"免密代扣说明","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-password-free-pay/payment-password-free-pay-overview/"},"next":{"title":"签约代扣场景","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-password-free-pay/payment-withhold-process/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/payment-kit-guide/payment-password-free-pay/payment-pay-and-sign/payment-pay-and-sign.md


const frontMatter = {
	title: '支付并签约场景',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-pay-and-sign',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '支付并签约场景';

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
  "value": "支付并签约结果处理（服务器开发）",
  "id": "支付并签约结果处理服务器开发",
  "level": 3
}, {
  "value": "延伸和拓展",
  "id": "延伸和拓展",
  "level": 2
}, {
  "value": "直连商户",
  "id": "直连商户",
  "level": 3
}, {
  "value": "服务商",
  "id": "服务商",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "支付并签约场景",
        children: "支付并签约场景"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从4.1.0(11)版本开始，新增支持支付并签约场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户在商户APP应用/元服务选购完不同的商品确认订单后，跳转至用户支付并签约确认页面，用户完成支付并签约后，后续再次购买商品时，商户可以直接发起代扣，减少用户拉起收银台、输入支付密码等相关操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持商户模型：直连商户、服务商"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "华为支付支付并签约页面展示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(443392)/* ["default"] */.A) + "",
        width: "533",
        height: "493"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "业务流程",
      children: "业务流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者通过接入Payment Kit 提供的支付并签约能力，可以让用户在支付完成后快速与商户建立签约代扣的关系。具体接入流程如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(990240)/* ["default"] */.A) + "",
        width: "960",
        height: "707"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "商户客户端请求商户服务端创建商品订单。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["商户服务端调用Payment Kit服务端", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/payment-api/payment-rest/payment-merc/payment-pay-and-sign-api/payment-pas-prepay/payment-pas-prepay",
          children: "直连商户预下单"
        }), "或", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/payment-api/payment-rest/payment-agent-merc/payment-partner-pay-and-sign/payment-partner-pas-prepay/payment-partner-pas-prepay",
          children: "服务商预下单"
        }), "接口。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Payment Kit服务端返回预支付ID（prepayId）给商户服务端。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["商户服务端组建订单信息参数", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/payment-api/payment-model/payment-model#orderstr",
          children: "orderStr"
        }), "返回给商户客户端。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["商户客户端使用orderStr调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/payment-api/payment-arkts/payment-paymentservice/payment-paymentservice#paymentservicerequestpayment",
          children: "requestPayment"
        }), "接口拉起Payment Kit支付收银台。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Payment Kit客户端展示支付收银台。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户通过收银台完成支付并签约。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Payment Kit服务端处理支付并同步返回支付受理成功结果给Payment Kit客户端。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Payment Kit异步处理支付完成并回调支付结果给商户服务端（支付失败场景不会有支付结果回调通知）。商户服务端需要使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/payment-api/payment-rest/payment-rest-overview/payment-rest-overview#%E9%AA%8C%E7%AD%BE%E8%A7%84%E5%88%99",
          children: "SM2验签方式"
        }), "对支付结果进行验签。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Payment Kit服务端处理签约并同步返回签约受理成功结果给Payment Kit客户端。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Payment Kit服务端异步处理签约完成后回调签约结果给商户服务端（取消签约和签约失败场景不会有回调结果通知）。商户服务端需要使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/payment-api/payment-rest/payment-rest-overview/payment-rest-overview#%E9%AA%8C%E7%AD%BE%E8%A7%84%E5%88%99",
          children: "SM2验签方式"
        }), "对签约结果进行验签。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Payment Kit客户端展示结果页。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户关闭结果页后Payment Kit客户端会返回支付状态给商户客户端。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "商户客户端进行后续处理操作。"
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
          children: ["按照商户模型调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/payment-api/payment-rest/payment-merc/payment-pay-and-sign-api/payment-pas-prepay/payment-pas-prepay",
            children: "直连商户预下单"
          }), "或", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/payment-api/payment-rest/payment-agent-merc/payment-partner-pay-and-sign/payment-partner-pas-prepay/payment-partner-pas-prepay",
            children: "服务商预下单"
          }), "接口获取预支付ID（prepayId）。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["为保证支付订单的安全性和可靠性需要对请求body和请求头PayMercAuth对象内的入参排序拼接进行签名，可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/payment-api/payment-rest/payment-rest-overview/payment-rest-overview#%E7%AD%BE%E5%90%8D%E8%A7%84%E5%88%99",
            children: "签名规则"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["构建订单信息参数", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/payment-api/payment-model/payment-model#orderstr",
            children: "orderStr"
          }), "返回给客户端，业务接口请求示例代码可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/payment-kit-guide/payment-preparations/payment-server-connect#%E4%B8%9A%E5%8A%A1%E6%8E%A5%E5%8F%A3%E8%AF%B7%E6%B1%82",
            children: "业务接口请求"
          }), "。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "拉起华为支付收银台端侧开发",
      children: "拉起华为支付收银台（端侧开发）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-model/payment-model#orderstr",
        children: "orderStr"
      }), "调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-arkts/payment-paymentservice/payment-paymentservice#paymentservicerequestpayment",
        children: "requestPayment"
      }), "接口拉起Payment Kit支付收银台。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["支付并签约拉起支付收银台与商户基础支付场景处理逻辑一致，可参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/payment-kit-guide/payment-payment-process#%E6%8B%89%E8%B5%B7%E5%8D%8E%E4%B8%BA%E6%94%AF%E4%BB%98%E6%94%B6%E9%93%B6%E5%8F%B0%E7%AB%AF%E4%BE%A7%E5%BC%80%E5%8F%91",
        children: "这里"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "支付并签约结果处理服务器开发",
      children: "支付并签约结果处理（服务器开发）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["商户在构建", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-rest/payment-merc/payment-pay-and-sign-api/payment-pas-prepay/payment-pas-prepay",
        children: "直连商户预下单"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-rest/payment-agent-merc/payment-partner-pay-and-sign/payment-partner-pas-prepay/payment-partner-pas-prepay",
        children: "服务商预下单"
      }), "请求参数时，传入一个callbackUrl。在完成支付并签约后，华为支付服务器将以POST方式调用callbackUrl，将支付并签约的结果返回给商户服务器。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(70667)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果用户没有提前登录，系统会自动拉起华为账号登录页面让用户登录。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支付并签约接口请求成功不代表支付或签约成功，建议不要以客户端签约收银台返回作为用户支付并签约的最终结果，需以服务器接收到的结果通知或者查询API返回为准。"
      }), "\n"]
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
      children: "当开发者完成上述支付并签约接入操作之后还可以调用以下API接口完成订单相关操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "直连商户",
      children: "直连商户"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-rest/payment-merc/payment-pay-and-sign-api/payment-pas-query-order/payment-pas-merc-query-order/payment-pas-merc-query-order",
        children: "查询支付订单"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-rest/payment-merc/payment-pay-and-sign-api/payment-pas--refund/payment-pas--refund",
        children: "申请退款"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-rest/payment-merc/payment-pay-and-sign-api/payment-pas-query-refund/payment-pas-merc-query-refund/payment-pas-merc-query-refund",
        children: "查询退款订单"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-rest/payment-merc/payment-withhold/payment-sign-query/payment-withhold-query-contractcode/payment-withhold-query-contractcode",
        children: "查询签约订单"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-rest/payment-merc/payment-pay-and-sign-api/payment-pas-withhold-unsign/payment-pas-withhold-unsign",
        children: "申请解约"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-rest/payment-merc/payment-bill/payment-query-trade-bill/payment-query-trade-bill",
        children: "查询对账单"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-rest/payment-merc/payment-bill/payment-query-settle-bill/payment-query-settle-bill",
        children: "查询结算账单"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "服务商",
      children: "服务商"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-rest/payment-agent-merc/payment-partner-pay-and-sign/payment-partner-pas-query-order/payment-partner-pas-merc-query-order/payment-partner-pas-merc-query-order",
        children: "查询支付订单"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-rest/payment-agent-merc/payment-partner-pay-and-sign/payment-partner-pas-refund/payment-partner-pas-refund",
        children: "申请退款"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-rest/payment-agent-merc/payment-partner-pay-and-sign/payment-partner-pas-query-refund/payment-partner-pas-merc-query-refund/payment-partner-pas-merc-query-refund",
        children: "查询退款订单"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-rest/payment-agent-merc/payment-partner-withhold/payment-partner-sign-query/payment-partner-withhold-query-contractcode/payment-partner-withhold-query-contractcode",
        children: "查询签约订单"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-rest/payment-agent-merc/payment-partner-pay-and-sign/payment-partner-pas-unsign/payment-partner-pas-unsign",
        children: "申请解约"
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
70667(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
443392(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799438-730ab0cdc536c878655a5e1e91ef32ef.png");

},
990240(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439133-6e7f2e656258a0d31c494d59654d8b35.png");

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