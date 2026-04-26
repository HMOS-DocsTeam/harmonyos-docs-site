"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["261883"], {
378613(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_payment_kit_guide_payment_common_pay_connect_payment_common_pay_external_payment_common_pay_external_md_f00_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-payment-kit-guide-payment-common-pay-connect-payment-common-pay-external-payment-common-pay-external-md-f00.json
var site_docs_payment_kit_guide_payment_common_pay_connect_payment_common_pay_external_payment_common_pay_external_md_f00_namespaceObject = JSON.parse('{"id":"payment-kit-guide/payment-common-pay-connect/payment-common-pay-external/payment-common-pay-external","title":"纯外部支付场景","description":"场景介绍","source":"@site/docs/payment-kit-guide/payment-common-pay-connect/payment-common-pay-external/payment-common-pay-external.md","sourceDirName":"payment-kit-guide/payment-common-pay-connect/payment-common-pay-external","slug":"/payment-kit-guide/payment-common-pay-connect/payment-common-pay-external/","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-common-pay-connect/payment-common-pay-external/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"纯外部支付场景","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-common-pay-external","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"混合支付场景","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-common-pay-connect/payment-common-pay-mix/"},"next":{"title":"基于URL跳转方式","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-common-pay-connect/payment-launch-third-party-payment/payment-launch-third-party-payment-url/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/payment-kit-guide/payment-common-pay-connect/payment-common-pay-external/payment-common-pay-external.md


const frontMatter = {
	title: '纯外部支付场景',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-common-pay-external',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '纯外部支付场景';

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
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "拉起通用收银台（端侧开发）",
  "id": "拉起通用收银台端侧开发",
  "level": 3
}, {
  "value": "拉起三方支付收银台（端侧开发）",
  "id": "拉起三方支付收银台端侧开发",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "纯外部支付场景",
        children: "纯外部支付场景"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从5.0.2(14)版本开始，新增支持通用收银台纯外部支付场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户在开发者的应用/元服务中选购完商品，点击下单购买，应用/元服务拉起通用收银台支付仅可以选择三方支付方式完成商品订单的支付。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持商户模型：不涉及华为支付商户入网。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通用收银台纯外部支付页面展示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(689144)/* ["default"] */.A) + "",
        width: "533",
        height: "497"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接入流程",
      children: "接入流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "华为支付通用收银台纯外部支付接入流程如下："
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
            children: "商户入网（非必选）"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "三方支付商户入网（非必选）"
              })
            }), "  由于三方支付为直接连接第三方支付平台完成支付，故可能涉及需要开发者在第三方支付平台注册、创建商户（建议开发者用新申请的商户号与现有商户号做区分）。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/payment-kit-guide/payment-common-pay-connect/payment-common-pay-introduction#%E4%BA%A7%E5%93%81%E5%BC%80%E9%80%9A%E4%B8%8E%E9%85%8D%E7%BD%AE",
              children: "产品开通与配置"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "申请开通三方支付及完成相关支付模式配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "通用收银台接入"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["根据纯外部支付场景", (0,jsx_runtime.jsx)(_components.a, {
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
      children: "纯外部支付模式下，收银台仅支持第三方平台支付，用户无法使用华为支付。具体接入流程如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(227277)/* ["default"] */.A) + "",
        width: "970",
        height: "672"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["商户客户端根据商户已开通的支付模式构建", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/payment-api/payment-arkts/payment-paymentservice/payment-paymentservice#paymentinfo",
          children: "PaymentInfo"
        }), "参数调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/payment-api/payment-arkts/payment-paymentservice/payment-paymentservice#paymentservicecashierpicker",
          children: "cashierPicker"
        }), "接口拉起Payment Kit通用收银台。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Payment Kit通用收银台展示可用的三方支付方式，用户选择三方支付方式并确认支付。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Payment Kit客户端将用户在通用收银台选择支付方式并确认支付后的支付信息", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/payment-api/payment-arkts/payment-paymentservice/payment-paymentservice#pickerresult",
          children: "PickerResult"
        }), "返回给商户客户端。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "基于URL跳转方式拉起收银台："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "商户客户端将支付方式通知给商户服务端。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "商户服务端调用三方支付的接口获取支付信息。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "三方支付服务端将支付跳转链接信息返回给商户服务端。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "商户服务端将支付跳转链接信息返回给商户客户端。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["商户客户端构建", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "订单支付跳转信息"
          })
        }), (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/payment-api/payment-model/payment-model#orderstr",
          children: "orderStr"
        }), "请求Payment Kit的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/payment-api/payment-arkts/payment-paymentservice/payment-paymentservice#paymentservicerequestpayment",
          children: "requestPayment"
        }), "接口跳转三方支付。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Payment Kit客户端根据传递的支付消息拉起三方支付收银台。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "三方支付客户端展示支付收银台。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户完成支付操作。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "三方支付服务端处理支付。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "三方支付服务端同步返回支付状态给三方支付客户端，三方支付客户端展示支付状态后返回商户客户端。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "三方支付服务端通过回调接口将支付结果返回给商户服务端。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "商户服务端收到支付结果回调请求后，根据三方支付服务要求对支付结果进行验签。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "基于接口拉起方式拉起收银台："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "商户客户端将返回的支付方式上送给商户服务端。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["商户服务端获取拉起三方收银台参数，构建", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/payment-api/payment-model/payment-model#payinfo",
          children: "payInfo"
        }), "（不同三方支付方式拉起收银台参数不同）返回。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["商户服务端返回三方支付信息", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/payment-api/payment-model/payment-model#payinfo",
          children: "payInfo"
        }), "给商户客户端。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["商户客户端使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/payment-api/payment-model/payment-model#payinfo",
          children: "payInfo"
        }), "调用Payment Kit的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/payment-api/payment-arkts/payment-third-payment-service/payment-third-payment-service#pay",
          children: "ThirdPayClient.pay"
        }), "接口拉起三方支付（可同步通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/payment-api/payment-arkts/payment-third-payment-service/payment-third-payment-service#handlepaycallback",
          children: "ThirdPayClient.handlePayCallback"
        }), "接口调用，获取三方支付操作处理结果）。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Payment Kit拉起三方支付收银台。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "三方支付客户端展示支付收银台。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户完成支付操作。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "三方支付服务端处理支付。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "三方支付服务端同步返回支付状态给三方支付客户端，三方支付客户端展示支付状态后返回商户客户端。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "三方支付客户端将用户支付操作完成同步给Payment Kit客户端。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Payment Kit客户端通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/payment-api/payment-arkts/payment-third-payment-service/payment-third-payment-service#handlepaycallback",
          children: "ThirdPayClient.handlePayCallback"
        }), "接口，将用户支付操作结果返回给商户客户端。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "三方支付服务端通过回调接口将支付结果返回给商户服务端。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "商户服务端收到支付结果回调请求后，根据三方支付服务要求对支付结果进行验签，同步返回支付结果给客户端。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["拉起通用收银台接口通过Promise返回结果。具体API说明详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-arkts/payment-paymentservice/payment-paymentservice",
        children: "接口文档"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "cashierPicker(context: common.UIAbilityContext, paymentInfo: PaymentInfo): Promise<PickerResult>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拉起Payment Kit通用收银台（不含华为支付）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "requestPayment(context: common.UIAbilityContext, orderStr: string, payload: string): Promise<PayResult>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "跳转三方支付收银台。"
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
      id: "拉起通用收银台端侧开发",
      children: "拉起通用收银台（端侧开发）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["商户客户端构建", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-arkts/payment-paymentservice/payment-paymentservice#paymentinfo",
        children: "PaymentInfo"
      }), "参数调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-arkts/payment-paymentservice/payment-paymentservice#paymentservicecashierpicker",
        children: "cashierPicker"
      }), "接口拉起Payment Kit通用收银台，用户选择支付方式并确认支付后，Payment Kit客户端将支付信息", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-arkts/payment-paymentservice/payment-paymentservice#pickerresult",
        children: "PickerResult"
      }), "返回给商户客户端 。"]
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
        children: "import { BusinessError } from '@kit.BasicServicesKit';\nimport { paymentService } from '@kit.PaymentKit';\nimport { common } from '@kit.AbilityKit';\n\n@Entry\n@Component\nstruct Index {\n  context: common.UIAbilityContext = this.getUIContext().getHostContext() as common.UIAbilityContext;\n  requestCashierPickerCallBack() {\n    // use your own paymentInfo\n    const paymentInfo: paymentService.PaymentInfo= {\n      tradeSummary: \"***交易\",\n      amount: 100,\n      currency: \"CNY\",\n      extraInfo: '{\"***\":\"***\"}'\n    }\n    paymentService.cashierPicker(this.context, paymentInfo)\n      .then((pickerResult: paymentService.PickerResult) => {\n        // succeeded in paying\n        console.info('succeeded in paying, picker result: ', pickerResult);\n      })\n      .catch((error: BusinessError) => {\n        // failed to pay\n        console.error(`failed to pay, error.code: ${error.code}, error.message: ${error.message}`);\n      });\n  }\n\n  build() {\n    Column() {\n      Button('requestCashierPickerCallBack')\n        .type(ButtonType.Capsule)\n        .width('50%')\n        .margin(20)\n        .onClick(() => {\n          this.requestCashierPickerCallBack();\n        })\n      }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "拉起三方支付收银台端侧开发",
      children: "拉起三方支付收银台（端侧开发）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["根据", (0,jsx_runtime.jsx)(_components.a, {
        href: "/payment-kit-guide/payment-common-pay-connect/payment-common-pay-introduction#%E4%BA%A7%E5%93%81%E5%BC%80%E9%80%9A%E4%B8%8E%E9%85%8D%E7%BD%AE",
        children: "产品开通与配置"
      }), "中的所配置的支付方式，参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/payment-kit-guide/payment-common-pay-connect/payment-launch-third-party-payment/payment-launch-third-party-payment-url",
        children: "拉起三方支付收银台"
      }), "进行三方支付收银台拉起处理。"]
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
227277(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959092-555bbe56acd75f35be94f64c5fbbacac.png");

},
689144(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439137-0598ef90195b6e5976f6c120a9360745.png");

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