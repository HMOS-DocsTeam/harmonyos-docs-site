"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["20725"], {
852804(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_payment_kit_guide_payment_common_pay_connect_payment_common_pay_mix_payment_common_pay_mix_md_f7b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-payment-kit-guide-payment-common-pay-connect-payment-common-pay-mix-payment-common-pay-mix-md-f7b.json
var site_docs_payment_kit_guide_payment_common_pay_connect_payment_common_pay_mix_payment_common_pay_mix_md_f7b_namespaceObject = JSON.parse('{"id":"payment-kit-guide/payment-common-pay-connect/payment-common-pay-mix/payment-common-pay-mix","title":"混合支付场景","description":"场景介绍","source":"@site/docs/payment-kit-guide/payment-common-pay-connect/payment-common-pay-mix/payment-common-pay-mix.md","sourceDirName":"payment-kit-guide/payment-common-pay-connect/payment-common-pay-mix","slug":"/payment-kit-guide/payment-common-pay-connect/payment-common-pay-mix/","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-common-pay-connect/payment-common-pay-mix/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"混合支付场景","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-common-pay-mix","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"业务规则说明","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-common-pay-connect/payment-common-pay-introduction/"},"next":{"title":"纯外部支付场景","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-common-pay-connect/payment-common-pay-external/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/payment-kit-guide/payment-common-pay-connect/payment-common-pay-mix/payment-common-pay-mix.md


const frontMatter = {
	title: '混合支付场景',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-common-pay-mix',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '混合支付场景';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "接入流程",
  "id": "接入流程",
  "level": 2
}, {
  "value": "业务流程",
  "id": "业务流程",
  "level": 2
}, {
  "value": "选择华为支付场景",
  "id": "选择华为支付场景",
  "level": 3
}, {
  "value": "选择三方支付场景",
  "id": "选择三方支付场景",
  "level": 3
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "华为支付预下单（服务端开发）",
  "id": "华为支付预下单服务端开发",
  "level": 3
}, {
  "value": "拉起通用收银台（端侧开发）",
  "id": "拉起通用收银台端侧开发",
  "level": 3
}, {
  "value": "支付处理",
  "id": "支付处理",
  "level": 3
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
        id: "混合支付场景",
        children: "混合支付场景"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从5.0.2(14)版本开始，新增支持通用收银台混合支付场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户在开发者的应用/元服务中选购完商品，点击确认支付，应用/元服务拉起通用收银台支付时，用户可以在通用收银台支付方式中选择华为支付方式或第三方支付方式完成商品订单的支付。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持商户模型：直连商户、平台类商户、服务商"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通用收银台混合支付页面展示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(365692)/* ["default"] */.A) + "",
        width: "800",
        height: "479"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接入流程",
      children: "接入流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "华为支付通用收银台混合支付接入流程如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "步骤"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/payment-kit-guide/payment-preparations/payment-merc-regist-apply",
              children: "商户入网及开发准备"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["- ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "华为支付商户入网及开发准备"
              })
            }), "  在准备开发前，商户需要在", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://petalpay-merchant.cloud.huawei.com/",
              children: "华为支付商户平台"
            }), "入网及完成开发准备操作。  支持的商户模型：直连商户、平台商户、服务商。  商户模型详细内容请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/pay-docs/hwzf-hezuoshenfen-0000001725918617",
              children: "接入模式"
            }), "。  - ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "三方支付商户入网（非必选）"
              })
            }), "  由于三方支付直接连接第三方支付平台完成支付，故可能需要开发者在第三方支付平台注册、创建商户（建议开发者用新申请的商户号与现有商户号做区分）。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/payment-kit-guide/payment-common-pay-connect/payment-common-pay-introduction#%E4%BA%A7%E5%93%81%E5%BC%80%E9%80%9A%E4%B8%8E%E9%85%8D%E7%BD%AE",
              children: "产品开通与配置"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["接入通用收银台，商户入网后需与华为支付业务侧沟通（合作咨询可", (0,jsx_runtime.jsx)(_components.a, {
              href: "/payment-kit-guide/payment-service-support",
              children: "点击此处"
            }), "）后申请开通三方支付及完成相关支付模式配置。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "通用收银台接入"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["根据混合支付场景", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%BC%80%E5%8F%91%E6%AD%A5%E9%AA%A4",
              children: "开发步骤"
            }), "完成通用收银台支付接入。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "业务流程",
      children: "业务流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "混合支付模式，收银台上用户可选择华为支付或三方支付方式支付。具体接入流程如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(59870)/* ["default"] */.A) + "",
        width: "992",
        height: "824"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "商户客户端请求商户服务器创建订单。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["商户服务器按照商户模型调用Payment Kit服务端", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/payment-api/payment-rest/payment-merc/payment-pay/payment-prepay/payment-prepay",
          children: "直连商户预下单"
        }), "或", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/payment-api/payment-rest/payment-agent-merc/payment-partner-pay/payment-agent-prepay/payment-agent-prepay",
          children: "平台类商户/服务商预下单"
        }), "接口。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Payment Kit服务端返回预支付ID（prepayId）。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["商户服务端构建", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "订单支付信息"
          })
        }), (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/payment-api/payment-model/payment-model#orderstr",
          children: "orderStr"
        }), "返回给商户客户端。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["商户客户端调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/payment-api/payment-arkts/payment-paymentservice/payment-paymentservice#paymentservicerequestpayment",
          children: "requestPayment"
        }), "接口拉起Payment Kit通用收银台。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Payment Kit客户端展示含华为支付方式的通用收银台，根据用户所选择的不同支付方式完成支付操作。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "选择华为支付场景",
      children: "选择华为支付场景"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户选择华为支付方式支付，Payment Kit客户端向Payment Kit服务端发起支付请求。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Payment Kit服务端处理支付操作。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Payment Kit服务端同步返回支付状态给Payment Kit客户端，Payment Kit客户端展示支付状态后返回商户客户端。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Payment Kit服务端通过回调接口将支付结果返回给商户服务端。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["商户服务端收到支付结果回调响应后，使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/payment-api/payment-rest/payment-rest-overview/payment-rest-overview#%E9%AA%8C%E7%AD%BE%E8%A7%84%E5%88%99",
          children: "SM2验签方式"
        }), "对支付结果进行验签"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "选择三方支付场景",
      children: "选择三方支付场景"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户选择三方支付方式并确认支付。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Payment Kit客户端将用户在通用收银台选择支付方式并确认支付后的支付信息", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/payment-api/payment-arkts/payment-paymentservice/payment-paymentservice#payresult",
          children: "PayResult"
        }), "返回给商户客户端。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "基于URL跳转方式拉起收银台："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3-1-1. 商户客户端将支付方式通知给商户服务端。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3-1-2. 商户服务端调用三方支付的接口获取支付信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3-1-3. 三方支付服务端将支付跳转链接信息返回给商户服务端。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3-1-4. 商户服务端将支付跳转链接信息返回给商户客户端。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["3-1-5. 商户客户端构建", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "订单支付跳转信息"
        })
      }), (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-model/payment-model#orderstr",
        children: "orderStr"
      }), "调用Payment Kit的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-arkts/payment-paymentservice/payment-paymentservice#paymentservicerequestpayment",
        children: "requestPayment"
      }), "接口跳转三方支付。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3-1-6. Payment Kit客户端根据传递的支付消息拉起三方支付收银台。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3-1-7. 三方支付客户端展示支付收银台。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3-1-8. 用户完成支付操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3-1-9. 三方支付服务端处理支付。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3-1-10. 三方支付服务端同步返回支付状态给三方支付客户端，三方支付客户端展示支付状态后返回商户客户端。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3-1-11. 三方支付服务端通过回调接口将支付结果返回给商户服务端。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3-1-12. 商户服务端收到支付结果回调请求后，根据三方支付服务要求对支付结果进行验签。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "基于接口拉起方式拉起收银台："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3-2-1. 商户客户端将返回的支付方式上送给商户服务端。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["3-2-2. 商户服务端获取拉起三方收银台参数，构建", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-model/payment-model#payinfo",
        children: "payInfo"
      }), "（不同三方支付方式拉起收银台参数不同）返回。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["3-2-3. 商户服务端返回三方支付信息", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-model/payment-model#payinfo",
        children: "payInfo"
      }), "给商户客户端。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["3-2-4. 商户客户端使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-model/payment-model#payinfo",
        children: "payInfo"
      }), "调用Payment Kit的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-arkts/payment-third-payment-service/payment-third-payment-service#pay",
        children: "ThirdPayClient.pay"
      }), "接口拉起三方支付（可同步通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-arkts/payment-third-payment-service/payment-third-payment-service#handlepaycallback",
        children: "ThirdPayClient.handlePayCallback"
      }), "接口调用，获取三方支付操作处理结果）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3-2-5. Payment Kit拉起三方支付收银台。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3-2-6. 三方支付客户端展示支付收银台。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3-2-7. 用户完成支付操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3-2-8. 三方支付服务端处理支付。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3-2-9. 三方支付服务端同步返回支付状态给三方支付客户端，三方支付客户端展示支付状态后返回商户客户端。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3-2-10. 三方支付客户端将用户支付操作完成同步给Payment Kit客户端。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["3-2-11. Payment Kit客户端通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-arkts/payment-third-payment-service/payment-third-payment-service#handlepaycallback",
        children: "ThirdPayClient.handlePayCallback"
      }), "接口，将用户支付操作结果返回给商户客户端。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3-2-12. 三方支付服务端通过回调接口将支付结果返回给商户服务端。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3-2-13. 商户服务端收到支付结果回调请求后，根据三方支付服务要求对支付结果进行验签，同步返回支付结果给客户端。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["混合支付场景拉起通用收银台接口通过Promise返回结果。具体API说明详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-arkts/payment-paymentservice/payment-paymentservice",
        children: "接口文档"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "requestPayment(context: common.UIAbilityContext, orderStr: string, payload: string): Promise<PayResult>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持拉起Payment Kit通用收银台（含华为支付）、跳转三方支付收银台。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pay(payInfo: string): Promise<void>;"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拉起三方支付收银台。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "handlePayCallback(want: Want): boolean;"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "三方支付结果回调同步华为支付收银台。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "华为支付预下单服务端开发",
      children: "华为支付预下单（服务端开发）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["开发者按照商户模型调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/payment-api/payment-rest/payment-merc/payment-pay/payment-prepay/payment-prepay",
            children: "直连商户预下单"
          }), "或", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/payment-api/payment-rest/payment-agent-merc/payment-partner-pay/payment-agent-prepay/payment-agent-prepay",
            children: "平台类商户/服务商预下单"
          }), "接口获取预支付ID（prepayId）。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["为保证支付订单的安全性和可靠性需要对请求body和请求头PayMercAuth对象内的入参排序拼接进行签名。可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/payment-api/payment-rest/payment-rest-overview/payment-rest-overview#%E7%AD%BE%E5%90%8D%E8%A7%84%E5%88%99",
            children: "签名规则"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["构建订单信息参数", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/payment-api/payment-model/payment-model#orderstr",
            children: "orderStr"
          }), "并返回给客户端。业务接口请求示例代码可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/payment-kit-guide/payment-preparations/payment-server-connect#%E4%B8%9A%E5%8A%A1%E6%8E%A5%E5%8F%A3%E8%AF%B7%E6%B1%82",
            children: "业务接口请求"
          }), "。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "拉起通用收银台端侧开发",
      children: "拉起通用收银台（端侧开发）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["商户客户端使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-model/payment-model#orderstr",
        children: "orderStr"
      }), "作为参数调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-arkts/payment-paymentservice/payment-paymentservice#paymentservicerequestpayment",
        children: "requestPayment"
      }), "接口拉起Payment Kit支付收银台。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当接口通过.then()方法返回时，则表示当前接口请求响应正常，通过.catch()方法返回表示接口请求响应异常。当此次请求有异常时，可通过", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "error.code"
        })
      }), "获取错误码，错误码相关信息请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-arkts/payment-error-code/payment-error-code",
        children: "错误码"
      }), "。示例代码如下："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\nimport { paymentService } from '@kit.PaymentKit';\nimport { common } from '@kit.AbilityKit';\n\n@Entry\n@Component\nstruct Index {\n  context: common.UIAbilityContext = this.getUIContext().getHostContext() as common.UIAbilityContext;\n  requestPaymentPromise() {\n    // used orderStr to pay for an order, use your own orderStr.\n    const orderStr = '{\"app_id\":\"***\",\"merc_no\":\"***\",\"prepay_id\":\"xxx\",\"timestamp\":\"1680259863114\",\"noncestr\":\"1487b8a60ed9f9ecc0ba759fbec23f4f\",\"sign\":\"****\",\"auth_id\":\"***\"}';\n    paymentService.requestPayment(this.context, orderStr, \"\")\n      .then((payResult: paymentService.PayResult) => {\n        // succeeded in paying\n        console.info('succeeded in paying, pay result: ', payResult);\n      })\n      .catch((error: BusinessError) => {\n        // failed to pay\n        console.error(`failed to pay, error.code: ${error.code}, error.message: ${error.message}`);\n      });\n  }\n\n  build() {\n    Column() {\n      Button('requestPaymentPromise')\n        .type(ButtonType.Capsule)\n        .width('50%')\n        .margin(20)\n        .onClick(() => {\n          this.requestPaymentPromise();\n        })\n      }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "支付处理",
      children: "支付处理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "场景1：用户选择华为支付方式支付"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["用户选择华为支付方式支付，通用收银台会直接处理支付，支付成功后华为支付服务器会调用开发者提供的回调接口，将支付信息返回给开发者的服务器，回调详细信息按商户模式请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-rest/payment-merc/payment-pay/payment-pay-notify/payment-pay-notify",
        children: "直连商户支付结果回调通知"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-rest/payment-agent-merc/payment-partner-pay/payment-agent-pay-notify/payment-agent-pay-notify",
        children: "平台类商户/服务商支付结果回调通知"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(97585)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果用户没有提前登录，系统会自动拉起华为账号登录页面让用户登录。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支付成功，不建议以客户端返回作为用户的支付结果，需以服务器接收到的结果通知或者查询API返回为准。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "回调接口是开发者调用预下单时的入参字段callbackUrl。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "场景2：用户选择三方支付方式支付"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者需要根据", (0,jsx_runtime.jsx)(_components.a, {
        href: "/payment-kit-guide/payment-common-pay-connect/payment-common-pay-introduction#%E4%BA%A7%E5%93%81%E5%BC%80%E9%80%9A%E4%B8%8E%E9%85%8D%E7%BD%AE",
        children: "产品开通与配置"
      }), "中的所配置的支付方式，参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/payment-kit-guide/payment-common-pay-connect/payment-launch-third-party-payment/payment-launch-third-party-payment-url",
        children: "拉起三方支付收银台"
      }), "不同方式进行三方支付收银台拉起处理。"]
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
97585(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
365692(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479091-29186595bf3b3a095b519564a2eca331.png");

},
59870(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799442-293649ce5a5ced5821c47749ea438965.png");

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