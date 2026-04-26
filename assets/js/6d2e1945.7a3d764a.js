"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["169830"], {
518652(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_payment_api_payment_rest_payment_agent_merc_payment_partner_pay_and_sign_payment_partner_pas_query_order_payment_partner_pas_merc_query_order_payment_partner_pas_merc_query_order_md_6d2_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-payment-api-payment-rest-payment-agent-merc-payment-partner-pay-and-sign-payment-partner-pas-query-order-payment-partner-pas-merc-query-order-payment-partner-pas-merc-query-order-md-6d2.json
var site_docs_ref_payment_api_payment_rest_payment_agent_merc_payment_partner_pay_and_sign_payment_partner_pas_query_order_payment_partner_pas_merc_query_order_payment_partner_pas_merc_query_order_md_6d2_namespaceObject = JSON.parse('{"id":"payment-api/payment-rest/payment-agent-merc/payment-partner-pay-and-sign/payment-partner-pas-query-order/payment-partner-pas-merc-query-order/payment-partner-pas-merc-query-order","title":"通过mercOrderNo查询订单信息","description":"功能介绍","source":"@site/docs-ref/payment-api/payment-rest/payment-agent-merc/payment-partner-pay-and-sign/payment-partner-pas-query-order/payment-partner-pas-merc-query-order/payment-partner-pas-merc-query-order.md","sourceDirName":"payment-api/payment-rest/payment-agent-merc/payment-partner-pay-and-sign/payment-partner-pas-query-order/payment-partner-pas-merc-query-order","slug":"/payment-api/payment-rest/payment-agent-merc/payment-partner-pay-and-sign/payment-partner-pas-query-order/payment-partner-pas-merc-query-order/payment-partner-pas-merc-query-order","permalink":"/harmonyos-docs-site/ref/payment-api/payment-rest/payment-agent-merc/payment-partner-pay-and-sign/payment-partner-pas-query-order/payment-partner-pas-merc-query-order/payment-partner-pas-merc-query-order","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"通过mercOrderNo查询订单信息","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/payment-partner-pas-merc-query-order","kit":"应用服务","last_updated":"2026-04-22","slug":"payment-partner-pas-merc-query-order"},"sidebar":"ref","previous":{"title":"通过sysTransOrderNo查询订单信息","permalink":"/harmonyos-docs-site/ref/payment-api/payment-rest/payment-agent-merc/payment-partner-pay-and-sign/payment-partner-pas-query-order/payment-partner-pas-sys-query-order/payment-partner-pas-sys-query-order"},"next":{"title":"申请退款","permalink":"/harmonyos-docs-site/ref/payment-api/payment-rest/payment-agent-merc/payment-partner-pay-and-sign/payment-partner-pas-refund/payment-partner-pas-refund"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/payment-api/payment-rest/payment-agent-merc/payment-partner-pay-and-sign/payment-partner-pas-query-order/payment-partner-pas-merc-query-order/payment-partner-pas-merc-query-order.md


const frontMatter = {
	title: '通过mercOrderNo查询订单信息',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/payment-partner-pas-merc-query-order',
	kit: '应用服务',
	last_updated: '2026-04-22',
	slug: 'payment-partner-pas-merc-query-order'
};
const contentTitle = '通过mercOrderNo查询订单信息';

const assets = {

};



const toc = [{
  "value": "功能介绍",
  "id": "功能介绍",
  "level": 2
}, {
  "value": "场景描述",
  "id": "场景描述",
  "level": 2
}, {
  "value": "接口原型",
  "id": "接口原型",
  "level": 2
}, {
  "value": "请求参数",
  "id": "请求参数",
  "level": 2
}, {
  "value": "请求示例",
  "id": "请求示例",
  "level": 2
}, {
  "value": "响应参数",
  "id": "响应参数",
  "level": 2
}, {
  "value": "响应示例",
  "id": "响应示例",
  "level": 2
}, {
  "value": "错误码",
  "id": "错误码",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
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
        id: "通过mercorderno查询订单信息",
        children: "通过mercOrderNo查询订单信息"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能介绍",
      children: "功能介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以调用此接口来查询所有通过华为支付方式支付且已成功创建交易订单的订单详细信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(72618)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "resultCode返回“000000”表示查询支付订单成功，不代表支付订单成功，订单状态需根据orderStatus字段判断。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景描述",
      children: "场景描述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该接口支持所有的华为支付系统交易订单的查询，若商户已完成Payment Kit单次支付能力的集成，并且有产生交易订单，可以通过该接口查看某笔订单的支付状态。开发者也可通过主动查询交易订单状态用以完成下一步的业务逻辑。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "需要调用该接口的场景："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支付时由于网络、服务器等异常未收到支付回调通知。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调用支付接口返回未知支付状态时。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口原型",
      children: "接口原型"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "承载协议："
            })
          }), " HTTPS GET"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "接口方向："
            })
          }), " 开发者服务器 -> 华为支付服务器"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "接口URL："
            })
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "https://petalpay-developer.cloud.huawei.com.cn/api/v2/partner/aggr/transactions/merc-orders/\\{mercOrderNo\\}"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "数据格式："
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "请求消息：Content-Type: application/json; charset=UTF-8"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "响应消息：Content-Type: application/json; charset=UTF-8"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "请求参数",
      children: "请求参数"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Request Header"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Content-Type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取值为：application/json; charset=UTF-8"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PayMercAuth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["取值为：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/payment-api/payment-model/payment-model#paymercauth",
              children: "PayMercAuth"
            }), "的JSON字符串"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "request path"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mercOrderNo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "商户订单号，由商户自己生成，商户需保证订单信息唯一性。最大长度46。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "请求示例",
      children: "请求示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GET /api/v2/partner/aggr/transactions/merc-orders/{mercOrderNo} HTTP/1.1\nContent-Type: application/json;charset=UTF-8\nPayMercAuth: {\"callerId\":\"10132120***\",\"traceId\":\"202305151047578634337\",\"time\":1684118877557,\"authId\":\"120291744647139***\",\"headerSign\":\"FB0vzUONHsvsurnKHZhc4*******************sZ3oJYeLt/4Da5n3DLXlSKYFmE=\",\"bodySign\":\"DDRuPlG/QFb3OQTNHLIOaNFKnQ********************kvvni+9cVmsqHir0bRFLANqqh2zyzv4=\"}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "响应参数",
      children: "响应参数"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Response Header"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Content-Type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取值为：application/json; charset=UTF-8"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Response Body"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "resultCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "结果码，“000000”表示成功，其他表示失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "resultDesc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "结果描述。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "subCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "业务错误码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "subDesc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "业务错误描述信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sign"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "签名值。用于开发者对响应报文进行防篡改验证。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sysTransOrderNo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "华为支付系统订单号。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mercOrderNo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "商户订单号，由商户自己生成，商户需保证订单信息唯一性。最大长度46。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "orderStatus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "订单状态。  - TRX_SUCCESS:交易成功  - TRX_FAILED:交易失败  - TRX_APPLY：交易处理中  - TRX_PROC：交易处理中"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "payload"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "预留信息，如商户请求时传递该参数，此时会原样返回。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "currency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "交易币种单位，最大长度为3。  CNY （默认，当前仅支持该币种单位）"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "totalAmount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Long"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "订单总金额，单位：分。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "payerAmount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Long"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "买家实付金额，单位：分。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "promotionAmount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Long"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "优惠金额，单位：分。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "finishTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支付完成时间，UTC时间格式（yyyy-MM-dd'T'HH:mm:ss.SSSZ）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "paymentTools"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支付工具。  - WECHAT_MICROPAY：微信小程序支付  - AGMT：快捷  - ACCT：账户余额  - HUAWEIPAY：华为pay"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "promotionDetail"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["List<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/payment-api/payment-model/payment-model#promotionitem",
              children: "PromotionItem"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "营销信息，订单参与营销活动时才会返回。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "spMercNo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "合作伙伴父商户号。最大长度12。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "subMercNo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "合作伙伴子商户号。最大长度12。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "spAppId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "合作伙伴父商户关联的应用ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "subAppId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["合作伙伴子商户关联的应用ID。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 平台子商户当前不支持绑定AppID，平台类商户请求传递该入参可能导致校验异常。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "payer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/payment-api/payment-model/payment-model#payerout",
              children: "PayerOut"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户支付时客户端信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "响应示例",
      children: "响应示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "HTTP/1.1 200 OK\nContent-Type: application/json; charset=UTF-8\n{\n    \"resultCode\": \"000000\",\n    \"resultDesc\": \"Success.\",\n    \"sign\": \"MEQCIH5/3J3onT8qdEQhPZcI2eHH08eo********************eAOjIYtSAMtvDH1hRbA4MY861dug==\",\n    \"sysTransOrderNo\": \"12407030857530004914518***\",\n    \"mercOrderNo\": \"czl00120240705***\",\n    \"orderStatus\": \"TRX_SUCCESS\",\n    \"payload\": \"example-payload\",\n    \"currency\": \"CNY\",\n    \"totalAmount\": 100000,\n    \"payerAmount\": 80000,\n    \"promotionAmount\": 20000,\n    \"finishTime\": \"2023-11-28T10:09:01.276+0800\",\n    \"paymentTools\": \"AGMT\"\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "错误码",
      children: "错误码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "resultCode"
        })
      }), "非400000的错误码请查看", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-rest/payment-error-code-rest/payment-error-code-rest#%E5%85%AC%E5%85%B1%E9%94%99%E8%AF%AF%E7%A0%81%E8%AF%B4%E6%98%8E",
        children: "公共错误码说明"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "返回码"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "错误码"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "错误描述"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "解决方案"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "400000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UNKNOW_ERROR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "服务暂不可用，请稍后重试"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "稍后重试。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "400000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INVALID_ARGUMENTS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "参数不合法"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检查请求参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "400000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PAY_ORDER_NOT_EXIST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支付订单号不存在"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检查入参订单号是否正确。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "400000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MERC_ORDER_NOT_EXIST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "商户订单号不存在"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检查入参订单号是否正确。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "400000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INVALID_MERCNO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无效商户号"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检查入参商户号是否正确。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "400000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CHECK_ORDER_STATUS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "订单状态异常"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请检查是否使用相同订单重复下单。"
          })]
        })]
      })]
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
72618(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

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