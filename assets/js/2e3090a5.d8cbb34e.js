"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["429981"], {
74636(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_payment_kit_guide_payment_sandbox_test_payment_sandbox_test_md_2e3_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-payment-kit-guide-payment-sandbox-test-payment-sandbox-test-md-2e3.json
var site_docs_payment_kit_guide_payment_sandbox_test_payment_sandbox_test_md_2e3_namespaceObject = JSON.parse('{"id":"payment-kit-guide/payment-sandbox-test/payment-sandbox-test","title":"沙盒环境验证","description":"华为支付提供沙盒环境，开发者无需真实完成商户入网即可开始调试华为支付接入，模拟真实环境下华为支付交易过程，提前介入方案设计和开发联调，提升接入效率。","source":"@site/docs/payment-kit-guide/payment-sandbox-test/payment-sandbox-test.md","sourceDirName":"payment-kit-guide/payment-sandbox-test","slug":"/payment-kit-guide/payment-sandbox-test/","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-sandbox-test/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":13,"frontMatter":{"title":"沙盒环境验证","sidebar_position":13,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-sandbox-test","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"身份验证服务调用记录查看","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-real-name-service/payment-real-name-service-req-query/"},"next":{"title":"服务与支持","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-service-support/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/payment-kit-guide/payment-sandbox-test/payment-sandbox-test.md


const frontMatter = {
	title: '沙盒环境验证',
	sidebar_position: 13,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-sandbox-test',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '沙盒环境验证';

const assets = {

};



const toc = [{
  "value": "沙盒环境调试配置",
  "id": "沙盒环境调试配置",
  "level": 2
}, {
  "value": "获取沙盒环境配置",
  "id": "获取沙盒环境配置",
  "level": 3
}, {
  "value": "构建debug签名应用",
  "id": "构建debug签名应用",
  "level": 3
}, {
  "value": "沙盒环境接口请求及支持维度说明",
  "id": "沙盒环境接口请求及支持维度说明",
  "level": 2
}, {
  "value": "验证商户基础支付场景",
  "id": "验证商户基础支付场景",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
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
        id: "沙盒环境验证",
        children: "沙盒环境验证"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "华为支付提供沙盒环境，开发者无需真实完成商户入网即可开始调试华为支付接入，模拟真实环境下华为支付交易过程，提前介入方案设计和开发联调，提升接入效率。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(371617)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["沙盒环境当前仅支持部分能力及接口调试，具体可参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E6%B2%99%E7%9B%92%E7%8E%AF%E5%A2%83%E6%8E%A5%E5%8F%A3%E8%AF%B7%E6%B1%82%E5%8F%8A%E6%94%AF%E6%8C%81%E7%BB%B4%E5%BA%A6%E8%AF%B4%E6%98%8E",
          children: "沙盒环境接口请求及支持维度说明"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用沙盒环境验证支付场景，支付成功不会产生真实扣款。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当前沙盒环境创建的订单与真实环境订单暂无明确的沙盒验证相关标识，开发者应自行将沙盒验证订单与真实订单做区分（如在商户订单号中添加沙盒标识、预下单通过payload字段添加标识等）。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "沙盒环境支付订单暂不支持分账，生成、查询及下载账单数据。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "沙盒环境调试配置",
      children: "沙盒环境调试配置"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "获取沙盒环境配置",
      children: "获取沙盒环境配置"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在沙盒验证前，需要生成沙盒环境配置信息（如商户号、证书ID、用户账号、支付密码等）进行调试，生成沙盒环境配置暂不支持开发者生成，请联系华为工程师获取，相关咨询可", (0,jsx_runtime.jsx)(_components.a, {
        href: "/payment-kit-guide/payment-service-support",
        children: "点击此处"
      }), "或者通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/support/feedback/#/add/13?level2=111",
        children: "在线工单系统"
      }), "与我们联系。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "生成沙盒环境配置信息需提供如下信息："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "配置项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "商户模式  (mercNo)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "沙盒验证使用的商户模式。  - DIRECT：直连（普通）  - AGENT：服务商  - PLAT_AGENT：平台商户"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "应用ID  (appId)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["应用的AppID（在", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/service/josp/agc/index.html",
              children: "AppGallery Connect"
            }), "网站点击“开发与服务”，在项目列表中找到项目，在“项目设置 > 常规”页面的“应用”区域获取“APP ID”的值）。  生成的沙盒验证配置需要与开发者应用关联。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "华为账号  (hwAccount)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开发者华为账号。用于生成测试用账号及支付密码等测试信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "邮箱地址"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开发者邮箱地址。用于后续配置或其他信息邮件答复。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "业务说明"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用业务简介（可附应用页面截图）。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "构建debug签名应用",
      children: "构建debug签名应用"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(957134)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者应用为debug模式，应用相关测试场景才能正常进入沙盒环境。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "构建debug签名应用步骤如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-cert-0000002270829389",
          children: "手动签名方式调试HarmonyOS应用/元服务"
        }), "，申请应用调试证书->注册调试设备->申请调试Profile。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-signing#section1240072619462",
          children: "配置签名信息"
        }), "，在DevEco Studio侧配置签名信息。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/service/josp/agc/index.html",
          children: "AppGallery Connect"
        }), "中", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-cert-fingerprint-0000002278002933",
          children: "配置应用签名证书指纹"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "沙盒环境接口请求及支持维度说明",
      children: "沙盒环境接口请求及支持维度说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "REST API请求说明："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["沙盒环境调试开放API接口请使用以下站点：", (0,jsx_runtime.jsx)(_components.code, {
          children: "https://petalpay-developer-sandbox.cloud.huawei.com.cn"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["沙盒环境REST API 接口请求与真实环境请求方式一致，仅使用的配置不同（参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E6%B2%99%E7%9B%92%E7%8E%AF%E5%A2%83%E8%B0%83%E8%AF%95%E9%85%8D%E7%BD%AE",
          children: "沙盒环境调试配置"
        }), "），API接口调用请参见REST API", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/payment-api/payment-rest/payment-rest-overview/payment-rest-overview",
          children: "公共说明"
        }), "以及对应的API接口说明。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "沙盒调试支持调试的能力维度如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "操作层面"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "能力维度描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "用户"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "用户登录"
              })
            }), "：支持用户在支付过程中使用华为账号进行登录操作。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "银行卡支付"
              })
            }), "：支持用户在华为支付收银台选择银行卡支付（测试配置默认绑定测试银行卡，暂不支持用户主动绑卡）。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "余额支付"
              })
            }), "：支持用户在华为支付收银台选择余额支付（预置余额，暂不支持充值，支付后不会产生扣费）。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "密码支付"
              })
            }), "：支持用户在华为支付收银台通过输入密码完成支付（不支持修改用户支付密码）。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "商户（开发者）"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "拉起支付收银台："
              })
            }), " 支持商户应用/元服务通过预下单接口获取预支付ID（prepayId）构建", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/payment-api/payment-model/payment-model#orderstr",
              children: "orderStr"
            }), "参数调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/payment-api/payment-arkts/payment-paymentservice/payment-paymentservice#paymentservicerequestpayment",
              children: "requestPayment"
            }), "接口拉起华为支付收银台。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "调用REST API接口查询订单、退款等操作："
              })
            }), "  - ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "直连商户："
              })
            }), "  - ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/payment-api/payment-rest/payment-merc/payment-pay/payment-prepay/payment-prepay",
              children: "预下单"
            }), "：商户可以通过本接口提交华为支付订单信息，同时获取华为支付预交易订单号。  - ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/payment-api/payment-rest/payment-merc/payment-pay/payment-pay-notify/payment-pay-notify",
              children: "支付结果回调通知"
            }), "：用户支付完成后，华为支付服务器通过开发者请求预下单接口时入参传递的回调通知URL（callbackUrl）向开发者的服务器发送支付关键事件通知。  - ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/payment-api/payment-rest/payment-merc/payment-pay/payment-query-order/payment-merc-query-order/payment-merc-query-order",
              children: "查询支付订单"
            }), "：商户可以通过本接口查询某笔交易订单状态。  - ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/payment-api/payment-rest/payment-merc/payment-pay/payment-service--refund/payment-service--refund",
              children: "申请退款"
            }), "：商户可以调用此接口将订单金额退还给用户。  - ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/payment-api/payment-rest/payment-merc/payment-pay/payment-refund-notify/payment-refund-notify",
              children: "退款结果通知"
            }), "：用户支付完成后，华为支付服务器通过开发者请求申请退款接口时入参传递的回调通知URL（callbackUrl）向开发者的服务器发送支付关键事件通知。  - ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/payment-api/payment-rest/payment-merc/payment-pay/payment-query-refund/payment-merc-query-refund/payment-merc-query-refund",
              children: "查询退款订单"
            }), "：商户调用退款申请成功后，商户可以调用此接口查询退款订单状态。  - ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "平台类商户/服务商："
              })
            }), "  - ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/payment-api/payment-rest/payment-agent-merc/payment-partner-pay/payment-agent-prepay/payment-agent-prepay",
              children: "预下单"
            }), "：平台类商户/服务商可通过本接口提交华为支付订单信息，同时获取华为支付预交易订单号。  - ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/payment-api/payment-rest/payment-agent-merc/payment-partner-pay/payment-agent-pay-notify/payment-agent-pay-notify",
              children: "支付结果回调通知"
            }), "：用户支付完成后，华为支付服务器通过开发者请求预下单接口时入参传递的回调通知URL（callbackUrl）向开发者的服务器发送支付关键事件通知。  - ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/payment-api/payment-rest/payment-agent-merc/payment-partner-pay/payment-agent-query-order/payment-agent-merc-query-order/payment-agent-merc-query-order",
              children: "查询支付订单"
            }), "：平台类商户/服务商可通过本接口查询某笔交易订单状态。  - ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/payment-api/payment-rest/payment-agent-merc/payment-partner-pay/payment-agent-refund/payment-agent-refund",
              children: "申请退款"
            }), "：平台类商户/服务商可调用此接口将订单金额退还给用户。  - ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/payment-api/payment-rest/payment-agent-merc/payment-partner-pay/payment-agent-refund-notify/payment-agent-refund-notify",
              children: "退款结果通知"
            }), "：用户支付完成后，华为支付服务器通过开发者请求申请退款接口时入参传递的回调通知URL（callbackUrl）向开发者的服务器发送支付关键事件通知。  - ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/payment-api/payment-rest/payment-agent-merc/payment-partner-pay/payment-agentmerc-query-refund/payment-agent-merc-query-refund/payment-agent-merc-query-refund",
              children: "查询退款订单"
            }), "：调用退款申请成功后，平台类商户/服务商可调用此接口查询退款订单状态。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "验证商户基础支付场景",
      children: "验证商户基础支付场景"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "支持商户模型："
        })
      }), " 直连商户、平台类商户、服务商"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在满足沙盒验证条件（已获取", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E6%B2%99%E7%9B%92%E7%8E%AF%E5%A2%83%E8%B0%83%E8%AF%95%E9%85%8D%E7%BD%AE",
            children: "沙盒环境调试配置"
          }), "）下，开发者可以使用沙盒环境配置调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/payment-api/payment-rest/payment-merc/payment-pay/payment-prepay/payment-prepay",
            children: "直连商户预下单"
          }), "/", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/payment-api/payment-rest/payment-agent-merc/payment-partner-pay/payment-agent-prepay/payment-agent-prepay",
            children: "平台类商户/服务商预下单"
          }), "获取预支付ID（prepayId）构建", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/payment-api/payment-model/payment-model#orderstr",
            children: "orderStr"
          }), "请求", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/payment-api/payment-arkts/payment-paymentservice/payment-paymentservice#paymentservicerequestpayment",
            children: "requestPayment"
          }), "接口拉起Payment Kit支付收银台（开发步骤可参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/payment-kit-guide/payment-payment-process#%E5%BC%80%E5%8F%91%E6%AD%A5%E9%AA%A4",
            children: "商户基础支付场景"
          }), "）。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(461199)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "沙盒环境下的支付流程与正式环境的支付流程一致，相关配置信息（如mercNo、authId等）需要替换为沙盒环境的站点及配置。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["使用沙盒环境时，构建的", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/payment-api/payment-model/payment-model#orderstr",
                children: "orderStr"
              }), "中需要传递沙盒环境标识sandbox_flag。示例如下："]
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{\"app_id\":\"101831***\",\"merc_no\":\"101610000***\",\"prepay_id\":\"12507011723580897591704***\",\"timestamp\":\"1751361838042\",\"noncestr\":\"6f18060eee669126b98e474407cc0682\",\"sign\":\"OeS+xINxcEoClk+WlsLdnZqL0aIJ5qV734StxULDIgnwz8********************qURxBMzdT2NqdwNefGfrcB5kWVic0RuLz8wqrUPoQBrcl83VVzw59jmgrupitpHMD9sHDpja92H4AMP2SBOdFR2a58qexJves26iTO2f2hsSKFSUEUlHYEW/bgZmVv83GOTo4wIaIbN94gBjkou0kBInTqP2Ht0R9gzVCdB0pYLK+PM4nCY72TkeglyuYHjzD6GlqKMO3UZmuUoqYi8=\",\"auth_id\":\"101610000031***\",\"reserved\":\"{\\\"sandbox_flag\\\": true}\"}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "如果用户没有提前登录，系统会拉起华为账号登录页面让用户登录，请使用沙盒环境用户账户进行登录。"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "用户按照正常流程完成支付（实际不会产生真实扣费）后，开发者可以收到回调通知，需要完成回调事件处理。开发者也可以主动请求订单查询、申请退款等接口，以完成订单查询、退款等整个支付流程的闭环。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["沙盒环境拉起支付收银台完成订单支付与正常环境支付流程体验一致，页面示例参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/payment-kit-guide/payment-payment-process#%E5%9C%BA%E6%99%AF%E4%BB%8B%E7%BB%8D",
            children: "商户基础支付场景"
          }), "所示。"]
        }), "\n"]
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
461199(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
371617(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
957134(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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