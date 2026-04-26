"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["281390"], {
844135(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_payment_kit_guide_payment_payment_process_payment_payment_process_md_d29_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-payment-kit-guide-payment-payment-process-payment-payment-process-md-d29.json
var site_docs_payment_kit_guide_payment_payment_process_payment_payment_process_md_d29_namespaceObject = JSON.parse('{"id":"payment-kit-guide/payment-payment-process/payment-payment-process","title":"商户基础支付场景","description":"场景介绍","source":"@site/docs/payment-kit-guide/payment-payment-process/payment-payment-process.md","sourceDirName":"payment-kit-guide/payment-payment-process","slug":"/payment-kit-guide/payment-payment-process/","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-payment-process/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"商户基础支付场景","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-payment-process","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"（可选）用户身份验证服务接入准备","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-preparations/payment-real-name-preparations/"},"next":{"title":"平台类商户合单支付场景","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-partner-combined/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/payment-kit-guide/payment-payment-process/payment-payment-process.md


const frontMatter = {
	title: '商户基础支付场景',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-payment-process',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '商户基础支付场景';

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
  "value": "直连商户",
  "id": "直连商户",
  "level": 3
}, {
  "value": "平台类商户/服务商",
  "id": "平台类商户服务商",
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
        id: "商户基础支付场景",
        children: "商户基础支付场景"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从4.1.0(11)版本开始，新增支持商户基础支付场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如用户出行需要提前预订酒店房间，此时用户可打开商户开发的APP应用/元服务，选好预订房间后发起支付，商户通过接入华为支付拉起华为支付收银台完成单个订单支付。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持商户模型：直连商户、平台类商户、服务商"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "华为支付收银台展示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(916982)/* ["default"] */.A) + "",
        width: "800",
        height: "470"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "业务流程",
      children: "业务流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者通过接入Payment Kit基础支付，可以简便快捷的实现应用的支付能力。具体接入流程如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(837886)/* ["default"] */.A) + "",
        width: "960",
        height: "555"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "商户客户端请求商户服务器创建商品订单。"
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
        children: ["商户服务端组建订单信息参数", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/payment-api/payment-model/payment-model#orderstr",
          children: "orderStr"
        }), "返回给商户客户端。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["商户客户端调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/payment-api/payment-arkts/payment-paymentservice/payment-paymentservice#paymentservicerequestpayment",
          children: "requestPayment"
        }), "接口拉起Payment Kit支付收银台。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Payment Kit客户端展示收银台。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户通过收银台完成支付，Payment Kit客户端会收到支付结果信息并请求Payment Kit服务端处理支付。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Payment Kit服务端成功受理支付订单并异步处理支付。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Payment Kit服务端将支付结果返回给Payment Kit客户端。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Payment Kit客户端展示支付结果页。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户关闭支付结果页后Payment Kit客户端会返回支付状态给商户客户端。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支付处理完成后，Payment Kit服务端会调用回调接口返回支付结果信息给商户服务端。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["商户服务端收到支付结果回调响应后，使用", (0,jsx_runtime.jsx)(_components.a, {
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
            href: "/ref/payment-api/payment-rest/payment-merc/payment-pay/payment-prepay/payment-prepay",
            children: "直连商户预下单"
          }), "或", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/payment-api/payment-rest/payment-agent-merc/payment-partner-pay/payment-agent-prepay/payment-agent-prepay",
            children: "平台类商户/服务商预下单"
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
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "商户服务器需要将客户端支付接口入参orderStr签名后返回给客户端。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(934604)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/payment-api/payment-model/payment-model#orderstr",
            children: "orderStr"
          }), "中sign字段签名规则是将除sign外的参数都做排序拼接后再签名（参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/payment-api/payment-rest/payment-rest-overview/payment-rest-overview#%E7%AD%BE%E5%90%8D%E8%A7%84%E5%88%99",
            children: "签名规则"
          }), "），签名值赋值给sign字段。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["以下为开放API接口请求及orderStr构建", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://gitcode.com/HarmonyOS_Samples/paymentkit-sample-code-serverdemo-java",
            children: "示例代码"
          }), "片段："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import com.huawei.petalpay.paymentservice.apiservice.client.model.BaseGwRspWithSign;\nimport com.huawei.petalpay.paymentservice.apiservice.client.model.PreOrderCreateRequestV2;\nimport com.huawei.petalpay.paymentservice.apiservice.client.model.PreOrderCreateResponse;\nimport com.huawei.petalpay.paymentservice.apiservice.client.model.PreSignRequestV2;\nimport com.huawei.petalpay.paymentservice.apiservice.client.model.PreSignResponse;\nimport com.huawei.petalpay.paymentservice.core.client.DefaultPetalPayClient;\nimport com.huawei.petalpay.paymentservice.core.client.PetalPayClient;\nimport com.huawei.petalpay.paymentservice.example.common.CommonResponse;\nimport com.huawei.petalpay.paymentservice.example.common.MercConfigUtil;\nimport lombok.extern.slf4j.Slf4j;\n\npublic class MercApiController {\n    private static PetalPayClient payClient = new DefaultPetalPayClient(MercConfigUtil.getMercConfig());\n    /**\n     * 预下单接口调用\n     */\n    public CommonResponse aggrPreOrderForAppV2() {\n        // 组装对象\n        PreOrderCreateRequestV2 preOrderReq = getPreOrderCreateRequestV2();\n        PreOrderCreateResponse response = null;\n        try {\n            response = payClient.execute(\"POST\", \"/api/v2/aggr/preorder/create/app\", PreOrderCreateResponse.class,\n                preOrderReq);\n        } catch (Exception e) {\n            // todo 异常处理\n            log.error(\"request error \", e);\n            return CommonResponse.buildErrorRsp(e.getMessage());\n        }\n        if (!validResponse(response)) {\n            // todo 异常处理\n            log.error(\"response is invalid \", response);\n            return CommonResponse.buildFailRsp(response);\n        }\n        return CommonResponse.buildSuccessRsp(payClient.buildOrderStr(response.getPrepayId()));\n    }\n    public static boolean validResponse(BaseGwRspWithSign rsp) {\n        return rsp != null && \"000000\".equals(rsp.getResultCode());\n    }\n    /**\n     * 预下单接口请求参数组装，商户请根据业务自行实现\n     */\n    public static PreOrderCreateRequestV2 getPreOrderCreateRequestV2() {\n        return PreOrderCreateRequestV2.builder()\n            .mercOrderNo(\"pay-example-\" + System.currentTimeMillis()) // 每次订单号都要变，请将pay-example-修改为商户自己的订单前缀\n            .appId(MercConfigUtil.APP_ID)  // appId，需要配置为与商户绑定的正确的appId\n            .mercNo(MercConfigUtil.MERC_NO) // 商户的商户号\n            .tradeSummary(\"请修改为对应的商品简称\") // 请修改为商品简称\n            .totalAmount(2L)\n            .callbackUrl(\"https://www.xxxxxx.com/hw/pay/callback\") // 回调通知地址，通知URL必须为直接可访问的URL，要求为https地址。最大长度为512。请替换为格式正确的结果通知回调地址。\n            .build();\n    }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "拉起华为支付收银台端侧开发",
      children: "拉起华为支付收银台（端侧开发）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["商户客户端使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-model/payment-model#orderstr",
        children: "orderStr"
      }), "作为参数调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-arkts/payment-paymentservice/payment-paymentservice#paymentservicerequestpayment",
        children: "requestPayment"
      }), "接口拉起Payment Kit支付收银台。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当接口通过.then()方法返回时，则表示当前订单支付成功，通过.catch()方法返回表示订单支付失败。当此次请求有异常时，可通过", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "error.code"
        })
      }), "获取错误码，错误码相关信息请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-arkts/payment-error-code/payment-error-code",
        children: "错误码"
      }), "。示例代码如下："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\nimport { paymentService } from '@kit.PaymentKit';\nimport { common } from '@kit.AbilityKit';\n\n@Entry\n@Component\nstruct Index {\n  context: common.UIAbilityContext = this.getUIContext().getHostContext() as common.UIAbilityContext;\n  requestPaymentPromise() {\n    // use your own orderStr\n    const orderStr = '{\"app_id\":\"***\",\"merc_no\":\"***\",\"prepay_id\":\"xxx\",\"timestamp\":\"1680259863114\",\"noncestr\":\"1487b8a60ed9f9ecc0ba759fbec23f4f\",\"sign\":\"****\",\"auth_id\":\"***\"}';\n    paymentService.requestPayment(this.context, orderStr)\n      .then(() => {\n        // pay success\n        console.info('succeeded in paying');\n      })\n      .catch((error: BusinessError) => {\n        // failed to pay\n        console.error(`failed to pay, error.code: ${error.code}, error.message: ${error.message}`);\n      });\n  }\n\n  build() {\n    Column() {\n      Button('requestPaymentPromise')\n        .type(ButtonType.Capsule)\n        .width('50%')\n        .margin(20)\n        .onClick(() => {\n          this.requestPaymentPromise();\n        })\n      }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(244570)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果用户没有提前登录，系统会自动拉起华为账号登录页面让用户登录。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支付成功，不建议以客户端返回作为用户的支付结果，需以服务器接收到的结果通知或者查询API返回为准。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "支付结果回调通知服务器开发",
      children: "支付结果回调通知（服务器开发）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["支付成功后华为支付服务器会调用开发者提供的回调接口，将支付信息返回给开发者的服务器，回调详细信息按商户模式请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-rest/payment-merc/payment-pay/payment-pay-notify/payment-pay-notify",
        children: "直连商户支付结果回调通知"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-rest/payment-agent-merc/payment-partner-pay/payment-agent-pay-notify/payment-agent-pay-notify",
        children: "平台类商户/服务商支付结果回调通知"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(160690)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "回调接口是开发者调用预下单时的入参字段callbackUrl。"
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
      children: "当开发者完成上述能力之后还可以调用以下API接口完成订单相关操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "直连商户",
      children: "直连商户"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-rest/payment-merc/payment-pay-and-sign-api/payment-pas-query-order/payment-pas-merc-query-order/payment-pas-merc-query-order",
        children: "查询支付订单"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-rest/payment-merc/payment-pay/payment-service--refund/payment-service--refund",
        children: "申请退款"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-rest/payment-merc/payment-pay/payment-query-refund/payment-merc-query-refund/payment-merc-query-refund",
        children: "查询退款订单"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-rest/payment-merc/payment-bill/payment-query-trade-bill/payment-query-trade-bill",
        children: "查询对账单"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-rest/payment-merc/payment-bill/payment-query-settle-bill/payment-query-settle-bill",
        children: "查询结算账单"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "平台类商户服务商",
      children: "平台类商户/服务商"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-rest/payment-agent-merc/payment-partner-pay-and-sign/payment-partner-pas-query-order/payment-partner-pas-merc-query-order/payment-partner-pas-merc-query-order",
        children: "查询支付订单"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-rest/payment-agent-merc/payment-partner-pay/payment-agent-refund/payment-agent-refund",
        children: "申请退款"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-rest/payment-agent-merc/payment-partner-pay/payment-agentmerc-query-refund/payment-agent-merc-query-refund/payment-agent-merc-query-refund",
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
837886(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439131-6121ce391148ba3c2ebf0332590444fd.png");

},
244570(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
160690(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
934604(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
916982(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799436-1a40cc71c027b806a7d0f9566ae8bdb5.png");

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