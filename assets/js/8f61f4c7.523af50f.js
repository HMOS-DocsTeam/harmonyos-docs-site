"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["929395"], {
786958(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_payment_kit_guide_payment_password_free_pay_payment_withhold_process_payment_withhold_process_md_8f6_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-payment-kit-guide-payment-password-free-pay-payment-withhold-process-payment-withhold-process-md-8f6.json
var site_docs_payment_kit_guide_payment_password_free_pay_payment_withhold_process_payment_withhold_process_md_8f6_namespaceObject = JSON.parse('{"id":"payment-kit-guide/payment-password-free-pay/payment-withhold-process/payment-withhold-process","title":"签约代扣场景","description":"场景介绍","source":"@site/docs/payment-kit-guide/payment-password-free-pay/payment-withhold-process/payment-withhold-process.md","sourceDirName":"payment-kit-guide/payment-password-free-pay/payment-withhold-process","slug":"/payment-kit-guide/payment-password-free-pay/payment-withhold-process/","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-password-free-pay/payment-withhold-process/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"签约代扣场景","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-withhold-process","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"支付并签约场景","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-password-free-pay/payment-pay-and-sign/"},"next":{"title":"数字人民币支付场景","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-digital-cny-pay/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/payment-kit-guide/payment-password-free-pay/payment-withhold-process/payment-withhold-process.md


const frontMatter = {
	title: '签约代扣场景',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-withhold-process',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '签约代扣场景';

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
  "value": "预签约（服务器开发）",
  "id": "预签约服务器开发",
  "level": 3
}, {
  "value": "拉起华为支付签约收银台（端侧开发）",
  "id": "拉起华为支付签约收银台端侧开发",
  "level": 3
}, {
  "value": "签约结果回调通知（服务器开发）",
  "id": "签约结果回调通知服务器开发",
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
        id: "签约代扣场景",
        children: "签约代扣场景"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从4.1.0(11)版本开始，新增支持签约代扣场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户在商户APP应用/元服务开通会员一段时间后，想要每个月自动续费而不用自己每个月都重新开通，商户可提供自动续费选项，用户主动选择开启，商户通过请求预签约接口发起签约，待签约生效后，商家可以按照协议中的时间，会员到期后直接发起免密代扣请求完成扣款续费，无需用户每个月都进行开通会员操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持商户模型：直连商户、平台类商户、服务商"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "华为支付签约页面展示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(930644)/* ["default"] */.A) + "",
        width: "533",
        height: "487"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "业务流程",
      children: "业务流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者通过接入Payment Kit 签约代扣能力，在获取用户签约授权的前提下，可以向用户的华为支付账户发起支付扣款，无需用户输入支付密码就可以优先使用签约的支付方式完成扣款。具体接入流程如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(154228)/* ["default"] */.A) + "",
        width: "856",
        height: "624"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "商户客户端请求商户服务端创建签约订单。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["商户服务端按照商户模型调用Payment Kit服务端", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/payment-api/payment-rest/payment-merc/payment-withhold/payment-withhold-presign/payment-withhold-presign",
          children: "直连商户预签约"
        }), "或", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/payment-api/payment-rest/payment-agent-merc/payment-partner-withhold/payment-partner-withhold-presign/payment-partner-withhold-presign",
          children: "服务商预签约"
        }), "接口。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Payment Kit服务端返回预签约号（preSignNo）给商户服务端。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["商户服务端构建", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/payment-api/payment-model/payment-model#contractstr",
          children: "contractStr"
        }), "参数返回给商户客户端。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["商户客户端通过contractStr调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/payment-api/payment-arkts/payment-paymentservice/payment-paymentservice#paymentservicerequestcontract",
          children: "requestContract"
        }), "接口拉起Payment Kit签约收银台。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Payment Kit客户端通过签约收银台展示签约相关信息。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户在Payment Kit客户端签约收银台完成签约操作。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Payment Kit服务端处理签约。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Payment Kit服务端受理签约成功后返回签约结果信息给Payment Kit客户端。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Payment Kit客户端展示签约结果页。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户关闭签约结果页后Payment Kit客户端会返回商户客户端。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "签约完成后Payment Kit服务器会调用商户服务端调用预签约接口时传递的回调接口返回签约结果信息给商户服务器。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["商户服务器收到签约结果回调响应后，使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/payment-api/payment-rest/payment-rest-overview/payment-rest-overview#%E9%AA%8C%E7%AD%BE%E8%A7%84%E5%88%99",
          children: "SM2验签方式"
        }), "对签约结果进行验签。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["签约完成后，商户服务器后续可以调用Payment Kit服务端", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/payment-api/payment-rest/payment-merc/payment-withhold/payment-withhold-apply/payment-withhold-apply",
          children: "直连商户申请免密代扣"
        }), "/", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/payment-api/payment-rest/payment-agent-merc/payment-partner-withhold/payment-partner-withhold-apply/payment-partner-withhold-apply",
          children: "服务商申请免密代扣"
        }), "接口来完成扣款服务。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "商户服务器调用Payment Kit服务端申请免密代扣接口后，Payment Kit服务端同步返回代扣申请结果。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Payment Kit服务端处理代扣扣款成功后，会调用商户服务器请求代扣接口时传递回调接口返回扣款结果信息给商户服务器。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["商户服务器收到扣款结果回调响应后，使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/payment-api/payment-rest/payment-rest-overview/payment-rest-overview#%E9%AA%8C%E7%AD%BE%E8%A7%84%E5%88%99",
          children: "SM2验签方式"
        }), "对扣款结果进行验签。"]
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
            children: "requestContract(context: common.UIAbilityContext, contractStr: string): Promise<void>;"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拉起Payment Kit签约收银台。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "requestContract(context: common.UIAbilityContext, contractStr: string, callback: AsyncCallback<void>): void;"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拉起Payment Kit签约收银台。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "预签约服务器开发",
      children: "预签约（服务器开发）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["开发者按照商户模型调用预", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/payment-api/payment-rest/payment-merc/payment-withhold/payment-withhold-presign/payment-withhold-presign",
            children: "直连商户预签约"
          }), "或", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/payment-api/payment-rest/payment-agent-merc/payment-partner-withhold/payment-partner-withhold-presign/payment-partner-withhold-presign",
            children: "服务商预签约"
          }), "接口获取preSignNo构建签约信息参数", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/payment-api/payment-model/payment-model#contractstr",
            children: "contractStr"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["为保证支付订单的安全性和可靠性需要对请求body和请求头PayMercAuth对象内的入参排序拼接进行签名。可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/payment-api/payment-rest/payment-rest-overview/payment-rest-overview#%E7%AD%BE%E5%90%8D%E8%A7%84%E5%88%99",
            children: "签名规则"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["以下为开放API接口请求及", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/payment-api/payment-model/payment-model#contractstr",
            children: "contractStr"
          }), "构建", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://gitcode.com/HarmonyOS_Samples/paymentkit-sample-code-serverdemo-java",
            children: "示例代码"
          }), "片段："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import com.huawei.petalpay.paymentservice.apiservice.client.model.BaseGwRspWithSign;\nimport com.huawei.petalpay.paymentservice.apiservice.client.model.PreSignRequestV2;\nimport com.huawei.petalpay.paymentservice.apiservice.client.model.PreSignResponse;\nimport com.huawei.petalpay.paymentservice.core.client.DefaultPetalPayClient;\nimport com.huawei.petalpay.paymentservice.core.client.PetalPayClient;\nimport com.huawei.petalpay.paymentservice.example.common.CommonResponse;\nimport com.huawei.petalpay.paymentservice.example.common.MercConfigUtil;\n\npublic class MercApiController {\n    private static PetalPayClient payClient = new DefaultPetalPayClient(MercConfigUtil.getMercConfig());\n    /**\n     * 预签约接口调用\n     */\n    public CommonResponse contractPreSignAppV2() {\n        // 组装对象\n        PreSignRequestV2 preSignReq = getPreSignRequestV2();\n        PreSignResponse response = null;\n        try {\n            response = payClient.execute(\"POST\", \"/api/v2/contract/presign/app\", PreSignResponse.class, preSignReq);\n        } catch (Exception e) {\n            // todo 异常处理\n            log.error(\"request error \", e);\n            return CommonResponse.buildErrorRsp(e.getMessage());\n        }\n        if (!validResponse(response)) {\n            // todo 异常处理\n            log.error(\"response is invalid \", response);\n            return CommonResponse.buildFailRsp(response);\n        }\n        return CommonResponse.buildSuccessRsp(payClient.buildContractStr(response.getPreSignNo()));\n    }\n    public static boolean validResponse(BaseGwRspWithSign rsp) {\n        return rsp != null && \"000000\".equals(rsp.getResultCode());\n    }\n    /**\n     * 预签约接口请求参数组装，商户请根据业务自行实现\n     */\n    private PreSignRequestV2 getPreSignRequestV2() {\n        return PreSignRequestV2.builder().appId(MercConfigUtil.APP_ID) // appId，需要配置为与商户绑定的正确的appId\n            .mercContractCode(\"pay-example-\" + System.currentTimeMillis()) // 签约协议号，每次请求都要变，请将pay-example-修改为商户自己的订单前缀\n            .mercNo(MercConfigUtil.MERC_NO) // 商户号\n            .planId(\"100\") // 协议模板ID，该模板ID是商户在向华为支付提交代扣权限申请时由华为支付生成。请填写正确的协议模板ID。\n            .callbackUrl(\"https://www.xxxxxx.com/hw/sign/callback\") // 回调通知地址，通知URL必须为直接可访问的URL，要求为https地址。最大长度为512。请替换为格式正确的结果通知回调地址。\n            .build();\n    }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "拉起华为支付签约收银台端侧开发",
      children: "拉起华为支付签约收银台（端侧开发）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["商户客户端使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-model/payment-model#contractstr",
        children: "contractStr"
      }), "作为参数调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-arkts/payment-paymentservice/payment-paymentservice#paymentservicerequestcontract",
        children: "requestContract"
      }), "接口拉起Payment Kit签约收银台。"]
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
        children: "import { BusinessError } from '@kit.BasicServicesKit';\nimport { paymentService } from '@kit.PaymentKit';\nimport { common } from '@kit.AbilityKit';\n\n@Entry\n@Component\nstruct Index {\n  context: common.UIAbilityContext = this.getUIContext().getHostContext() as common.UIAbilityContext;\n  requestContractPromise() {\n    // use your own contractStr\n    const contractStr = '{\"appId\":\"***\",\"preSignNo\":\"***\"}';\n    paymentService.requestContract(this.context, contractStr)\n      .then(() => {\n        // succeeded in signing\n        console.info('succeeded in signing');\n      })\n      .catch((error: BusinessError) => {\n        // failed to sign\n        console.error(`failed to sign, error.code: ${error.code}, error.message: ${error.message}`);\n      });\n  }\n\n  build() {\n    Column() {\n      Button('requestContractPromise')\n        .type(ButtonType.Capsule)\n        .width('50%')\n        .margin(20)\n        .onClick(() => {\n          this.requestContractPromise();\n        })\n      }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(965095)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果用户没有提前登录，系统会自动拉起华为账号登录页面让用户登录。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "签约成功，不建议以客户端返回作为用户的签约结果，需以服务器接收到的结果通知或者查询API返回为准。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "签约结果回调通知服务器开发",
      children: "签约结果回调通知（服务器开发）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["支付成功后华为支付服务器会调用开发者提供的回调接口，将签约信息返回给开发者服务器，回调详细信息按商户模式请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-rest/payment-merc/payment-withhold/payment-withhold-sign-notify/payment-withhold-sign-notify",
        children: "签约结果回调通知"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(691565)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "回调接口是开发者调用预签约时的入参字段callbackUrl或签约模板配置的回调地址。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为保证信息合法性，商户服务器需要对返回的签约信息进行", (0,jsx_runtime.jsx)(_components.a, {
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
        href: "/ref/payment-api/payment-rest/payment-merc/payment-withhold/payment-withhold-apply/payment-withhold-apply",
        children: "申请免密代扣"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-rest/payment-merc/payment-withhold/payment-sign-query/payment-withhold-query-contractcode/payment-withhold-query-contractcode",
        children: "查询签约订单"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-rest/payment-merc/payment-withhold/payment-withhold-query/payment-withhold-query-merc-order/payment-withhold-query-merc-order",
        children: "查询代扣订单"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-rest/payment-merc/payment-withhold/payment-withhold-unsign/payment-withhold-unsign",
        children: "申请解约"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-rest/payment-merc/payment-withhold/payment-withhold-refunds/payment-withhold-refunds",
        children: "申请退款"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-rest/payment-merc/payment-withhold/payment-withhold-query-refunds/payment-withhold-query-merc-refund-order/payment-withhold-query-merc-refund-order",
        children: "查询退款订单"
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
        href: "/ref/payment-api/payment-rest/payment-agent-merc/payment-partner-withhold/payment-partner-withhold-apply/payment-partner-withhold-apply",
        children: "申请免密代扣"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-rest/payment-agent-merc/payment-partner-withhold/payment-partner-sign-query/payment-partner-withhold-query-contractcode/payment-partner-withhold-query-contractcode",
        children: "查询签约订单"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-rest/payment-agent-merc/payment-partner-withhold/payment-partner-withhold-query/payment-partner-withhold-query-merc-order/payment-partner-withhold-query-merc-order",
        children: "查询代扣订单"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-rest/payment-agent-merc/payment-partner-withhold/payment-partner-withhold-unsign/payment-partner-withhold-unsign",
        children: "申请解约"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-rest/payment-agent-merc/payment-partner-withhold/payment-partner-withhold-refunds/payment-partner-withhold-refunds",
        children: "申请退款"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-rest/payment-agent-merc/payment-partner-withhold/payment-partner-withhold-query-refunds/payment-partner-withhold-query-merc-refund-order/payment-partner-withhold-query-merc-refund-order",
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
691565(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
965095(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
930644(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959088-aa45f26a5b22e641e388175d16bf9523.png");

},
154228(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479089-5d46cb0f8a0d98e815a2df3cef65c161.png");

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