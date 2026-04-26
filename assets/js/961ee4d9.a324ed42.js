"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["524555"], {
964873(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_iap_kit_guide_iap_purchases_iap_purchase_iap_delivering_products_iap_delivering_products_md_961_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-iap-kit-guide-iap-purchases-iap-purchase-iap-delivering-products-iap-delivering-products-md-961.json
var site_docs_iap_kit_guide_iap_purchases_iap_purchase_iap_delivering_products_iap_delivering_products_md_961_namespaceObject = JSON.parse('{"id":"iap-kit-guide/iap-purchases/iap-purchase/iap-delivering-products/iap-delivering-products","title":"权益发放","description":"场景介绍","source":"@site/docs/iap-kit-guide/iap-purchases/iap-purchase/iap-delivering-products/iap-delivering-products.md","sourceDirName":"iap-kit-guide/iap-purchases/iap-purchase/iap-delivering-products","slug":"/iap-kit-guide/iap-purchases/iap-purchase/iap-delivering-products/","permalink":"/harmonyos-docs-site/iap-kit-guide/iap-purchases/iap-purchase/iap-delivering-products/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"权益发放","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/iap-delivering-products","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"接入购买","permalink":"/harmonyos-docs-site/iap-kit-guide/iap-purchases/iap-purchase/iap-integrate-purchase/"},"next":{"title":"自动续期订阅说明","permalink":"/harmonyos-docs-site/iap-kit-guide/iap-purchases/iap-subscription/iap-subscription-functions/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/iap-kit-guide/iap-purchases/iap-purchase/iap-delivering-products/iap-delivering-products.md


const frontMatter = {
	title: '权益发放',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/iap-delivering-products',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '权益发放';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "确保权益发放",
  "id": "确保权益发放",
  "level": 2
}, {
  "value": "业务流程",
  "id": "业务流程",
  "level": 3
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 3
}, {
  "value": "单机应用权益发放（非消耗型商品）",
  "id": "单机应用权益发放非消耗型商品",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤-1",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "权益发放",
        children: "权益发放"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用在收到用户购买消耗型/非消耗型商品成功的结果后，需要发放相关权益，并在权益发放后，向IAP Kit确认发货，完成购买流程，具体实现请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/iap-kit-guide/iap-purchases/iap-purchase/iap-integrate-purchase",
        children: "接入购买"
      }), "。此外，还需要补充如下处理，确保权益发放："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["若应用提供消耗型商品，需要按照", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E7%A1%AE%E4%BF%9D%E6%9D%83%E7%9B%8A%E5%8F%91%E6%94%BE",
          children: "确保权益发放"
        }), "处理消耗型商品的权益发放。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["若应用提供非消耗型商品，且为单机应用，则需要按照", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E5%8D%95%E6%9C%BA%E5%BA%94%E7%94%A8%E6%9D%83%E7%9B%8A%E5%8F%91%E6%94%BE%E9%9D%9E%E6%B6%88%E8%80%97%E5%9E%8B%E5%95%86%E5%93%81",
          children: "单机应用权益发放（非消耗型商品）"
        }), "处理非消耗型商品的权益发放。其他场景需要按照", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E7%A1%AE%E4%BF%9D%E6%9D%83%E7%9B%8A%E5%8F%91%E6%94%BE",
          children: "确保权益发放"
        }), "处理非消耗型商品的权益发放。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "确保权益发放",
      children: "确保权益发放"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户购买商品后，开发者需要及时发放相关权益。但实际应用场景中，若出现异常（网络错误、进程被中止等）将导致应用无法知道用户实际是否支付成功，从而无法及时发放权益，即出现掉单情况。为了确保权益发放，需要在以下场景检查用户是否存在已购未发货的商品："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用启动时。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["购买请求（", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/iap-api/iap-arkts/iap-iap/iap-iap#iapcreatepurchase",
          children: "createPurchase"
        }), "）返回", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/iap-api/iap-arkts/iap-iap/iap-iap#iaperrorcode",
          children: "iap.IAPErrorCode.PRODUCT_OWNED"
        }), "或", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/iap-api/iap-arkts/iap-iap/iap-iap#iaperrorcode",
          children: "iap.IAPErrorCode.SYSTEM_ERROR"
        }), "时。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果存在已购未发货商品，则发放相关权益，然后向IAP Kit确认发货，完成购买。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "业务流程",
      children: "业务流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(570483)/* ["default"] */.A) + "",
        width: "600",
        height: "567"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["应用客户端向IAP Kit发起", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-iap/iap-iap#iapquerypurchases",
            children: "queryPurchases"
          }), "请求，查询用户已购买但未确认发货的订单信息。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["IAP Kit返回", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-data-model/iap-data-model#purchasedata",
            children: "PurchaseData"
          }), "列表。", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-data-model/iap-data-model#purchasedata",
            children: "PurchaseData"
          }), "为JWS格式的字符串，承载了相关的订单信息。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["应用客户端向应用服务器上报", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-data-model/iap-data-model#purchasedata",
            children: "PurchaseData"
          }), "列表。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["应用服务器需对每个", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-data-model/iap-data-model#purchasedata",
            children: "PurchaseData"
          }), ".jwsPurchaseOrder进行", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-rest/iap-verifying-signature/iap-verifying-signature#jws%E8%A7%A3%E7%A0%81%E5%92%8C%E9%AA%8C%E7%AD%BE",
            children: "解码验签"
          }), "，验证成功可得到对应的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-data-model/iap-data-model#purchaseorderpayload",
            children: "PurchaseOrderPayload"
          }), "的JSON字符串。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["处理权益发放。检查当前", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-data-model/iap-data-model#purchaseorderpayload",
            children: "PurchaseOrderPayload"
          }), "是否已发放权益，未发放则发放相关权益，并记录对应的订单信息（", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-data-model/iap-data-model#purchaseorderpayload",
            children: "PurchaseOrderPayload"
          }), "）。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用客户端向应用服务器查询订单的发货状态。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["应用服务器返回对应的发货状态以及订单信息（", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-data-model/iap-data-model#purchaseorderpayload",
            children: "PurchaseOrderPayload"
          }), "）。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["发货成功后应用客户端向IAP Kit发送", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-iap/iap-iap#iapfinishpurchase",
            children: "finishPurchase"
          }), "请求，以此通知IAP服务器更新商品的发货状态，完成购买流程。应用成功执行", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-iap/iap-iap#iapfinishpurchase",
            children: "finishPurchase"
          }), "之后，IAP服务器会将相应商品标记为已发货状态。此步骤也可放到应用服务器处理。应用服务器可通过请求服务端", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-rest/iap-confirm-purchase-for-order/iap-confirm-purchase-for-order",
            children: "订单确认发货"
          }), "接口来确认发货，完成购买流程。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(664487)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "对于消耗型商品，IAP服务器会将相应商品重新设置为可购买状态，用户即可再次购买该商品。如果不执行此步骤，会导致用户无法再次购买该商品。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "确保在发货成功之后再执行此步骤，否则可能导致IAP服务器已经确认发货但是应用没有发货的问题。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["应用客户端向IAP Kit发起", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-iap/iap-iap#iapquerypurchases",
            children: "queryPurchases"
          }), "请求，获取用户已购买但未确认发货的订单信息。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在请求参数", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-iap/iap-iap#querypurchasesparameter",
            children: "QueryPurchasesParameter"
          }), "中指定对应的productType，同时指定queryType为", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-iap/iap-iap#purchasequerytype",
            children: "iap.PurchaseQueryType.UNFINISHED"
          }), "。当接口请求成功时，IAP Kit将返回一个", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-iap/iap-iap#querypurchaseresult",
            children: "QueryPurchaseResult"
          }), "对象，该对象包含承载了订单信息的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-data-model/iap-data-model#purchasedata",
            children: "PurchaseData"
          }), "的列表。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["对", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-data-model/iap-data-model#purchasedata",
            children: "purchaseData"
          }), ".jwsPurchaseOrder进行", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-rest/iap-verifying-signature/iap-verifying-signature#jws%E8%A7%A3%E7%A0%81%E5%92%8C%E9%AA%8C%E7%AD%BE",
            children: "解码验签"
          }), "。建议应用客户端将", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-data-model/iap-data-model#purchasedata",
            children: "purchaseData"
          }), "发送至应用服务器，在应用服务器执行此操作。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["验证成功可得到对应的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-data-model/iap-data-model#purchaseorderpayload",
            children: "PurchaseOrderPayload"
          }), "的JSON字符串，如果", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-data-model/iap-data-model#purchaseorderpayload",
            children: "PurchaseOrderPayload"
          }), ".purchaseOrderRevocationReasonCode为空，则代表购买成功，需要进行补发货处理。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["建议先检查此笔订单权益的发放状态，未发放则发放权益，成功后记录", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-data-model/iap-data-model#purchaseorderpayload",
            children: "PurchaseOrderPayload"
          }), "等信息，用于后续检查权益发放状态。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(773290)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如果开发者在", (0,jsx_runtime.jsx)(_components.a, {
            href: "/iap-kit-guide/iap-purchases/iap-purchase/iap-integrate-purchase#%E5%8F%91%E8%B5%B7%E8%B4%AD%E4%B9%B0",
            children: "发起购买"
          }), "时支持消耗型商品的批量购买，则需要在发货时校验下单的商品数量和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-data-model/iap-data-model#purchaseorderpayload",
            children: "PurchaseOrderPayload"
          }), ".quantity是否一致，避免造成漏发、多发的情况。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["发货成功后，应用需调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-iap/iap-iap#iapfinishpurchase",
            children: "finishPurchase"
          }), "接口确认发货，以此通知IAP服务器更新商品的发货状态，完成购买流程。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["发起请求时，需在请求参数", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-iap/iap-iap#finishpurchaseparameter",
            children: "FinishPurchaseParameter"
          }), "中携带", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-data-model/iap-data-model#purchaseorderpayload",
            children: "PurchaseOrderPayload"
          }), "中的productType、purchaseToken、purchaseOrderId。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "请求成功后，IAP服务器会将相应商品标记为已发货状态。对于消耗型商品，IAP服务器会将相应商品重新设置为可购买状态，用户即可再次购买该商品。对于非消耗型商品，用户购买后永久拥有，无法再次购买该商品。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(903148)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["JWSUtil为自定义类，可参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/iap-kit-guide/iap-dev-guide#%E7%A4%BA%E4%BE%8B%E4%BB%A3%E7%A0%81",
            children: "示例代码"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { iap } from '@kit.IAPKit';\nimport { common } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n// JWSUtil为自定义类\nimport { JWSUtil } from '../common/JWSUtil';\n\n@Entry\n@Component\nstruct Index {\n  queryPurchases(context: common.UIAbilityContext,) {\n    const param: iap.QueryPurchasesParameter = {\n      // iap.ProductType.CONSUMABLE：消耗型商品\n      // iap.ProductType.NONCONSUMABLE：非消耗型商品\n      productType: iap.ProductType.CONSUMABLE,\n      queryType: iap.PurchaseQueryType.UNFINISHED\n    };\n    iap.queryPurchases(context, param).then((res: iap.QueryPurchaseResult) => {\n      console.info('Succeeded in querying purchases.');\n      const purchaseDataList: string[] = res.purchaseDataList;\n      if (purchaseDataList === undefined || purchaseDataList.length <= 0) {\n        return;\n      }\n      for (let i = 0; i < purchaseDataList.length; i++) {\n        const jwsPurchaseOrder: string = JSON.parse(purchaseDataList[i]).jwsPurchaseOrder;\n        if (!jwsPurchaseOrder) {\n          continue;\n        }\n        const purchaseStr = JWSUtil.decodeJwsObj(jwsPurchaseOrder);\n        // 需自定义PurchaseOrderPayload类，包含的信息请参见PurchaseOrderPayload\n        const purchaseOrderPayload = JSON.parse(purchaseStr) as PurchaseOrderPayload;\n        // 处理发货\n        // ...\n        // 发货成功后向IAP Kit发送finishPurchase请求，确认发货，完成购买\n        this.finishPurchase(context, purchaseOrderPayload);\n      }\n    }).catch((err: BusinessError) => {\n      // 请求失败\n      console.error(`Failed to query purchases. Code is ${err.code}, message is ${err.message}`);\n    });\n  }\n\n  finishPurchase(context: common.UIAbilityContext, purchaseOrder: PurchaseOrderPayload) {\n    const finishPurchaseParam: iap.FinishPurchaseParameter = {\n      productType: Number(purchaseOrder.productType),\n      purchaseToken: purchaseOrder.purchaseToken,\n      purchaseOrderId: purchaseOrder.purchaseOrderId\n    };\n    iap.finishPurchase(context, finishPurchaseParam).then(() => {\n      // 请求成功\n      console.info('Succeeded in finishing purchase.');\n    }).catch((err: BusinessError) => {\n      // 请求失败\n      console.error(`Failed to finish purchase. Code is ${err.code}, message is ${err.message}`);\n    });\n  }\n\n  build() {}\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "单机应用权益发放非消耗型商品",
      children: "单机应用权益发放（非消耗型商品）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户在购买非消耗型商品后，将永久拥有该商品的权益。应用需要在用户购买非消耗型商品后，始终为其发放相关权益。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请在以下场景获取用户已购非消耗型商品的信息，并发放相关权益。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用启动时。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["购买请求（", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/iap-api/iap-arkts/iap-iap/iap-iap#iapcreatepurchase",
          children: "createPurchase"
        }), "）返回", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/iap-api/iap-arkts/iap-iap/iap-iap#iaperrorcode",
          children: "iap.IAPErrorCode.PRODUCT_OWNED"
        }), "或", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/iap-api/iap-arkts/iap-iap/iap-iap#iaperrorcode",
          children: "iap.IAPErrorCode.SYSTEM_ERROR"
        }), "时。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(705941)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为了在卸载重装、更换设备安装等场景下保障用户权益，需要在应用首次打开时，应用客户端向IAP Kit发起", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/iap-api/iap-arkts/iap-iap/iap-iap#iapquerypurchases",
        children: "queryPurchases"
      }), "请求，查询用户已购非消耗型商品，完成权益恢复。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发步骤-1",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["应用客户端向IAP Kit发起", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-iap/iap-iap#iapquerypurchases",
            children: "queryPurchases"
          }), "请求，获取用户已购非消耗型商品的订单状态信息。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在请求参数", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-iap/iap-iap#querypurchasesparameter",
            children: "QueryPurchasesParameter"
          }), "中指定productType为", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-iap/iap-iap#producttype",
            children: "iap.ProductType.NONCONSUMABLE"
          }), "，同时指定queryType为", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-iap/iap-iap#purchasequerytype",
            children: "iap.PurchaseQueryType.CURRENT_ENTITLEMENT"
          }), "。当接口请求成功时，IAP Kit将返回一个", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-iap/iap-iap#querypurchaseresult",
            children: "QueryPurchaseResult"
          }), "对象，该对象包含承载了订单信息的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-data-model/iap-data-model#purchasedata",
            children: "PurchaseData"
          }), "的列表。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["对每个", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-data-model/iap-data-model#purchasedata",
            children: "PurchaseData"
          }), ".jwsPurchaseOrder进行", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-rest/iap-verifying-signature/iap-verifying-signature#jws%E8%A7%A3%E7%A0%81%E5%92%8C%E9%AA%8C%E7%AD%BE",
            children: "解码验签"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["验证成功可得到对应的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-data-model/iap-data-model#purchaseorderpayload",
            children: "PurchaseOrderPayload"
          }), "的JSON字符串，此时需要发放相关权益。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["发放权益后，应用需调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-iap/iap-iap#iapfinishpurchase",
            children: "finishPurchase"
          }), "接口确认发货，以此通知IAP服务器更新商品的发货状态，完成购买流程。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["发起请求时，需在请求参数", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-iap/iap-iap#finishpurchaseparameter",
            children: "FinishPurchaseParameter"
          }), "中携带", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-data-model/iap-data-model#purchaseorderpayload",
            children: "PurchaseOrderPayload"
          }), "中的productType、purchaseToken、purchaseOrderId。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "请求成功后，IAP服务器会将相应商品标记为已发货。对于非消耗型商品，用户购买后永久拥有，无法再次购买该商品。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(675962)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["JWSUtil为自定义类，可参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/iap-kit-guide/iap-dev-guide#%E7%A4%BA%E4%BE%8B%E4%BB%A3%E7%A0%81",
            children: "示例代码"
          }), "。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { iap } from '@kit.IAPKit';\nimport { common } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n// JWSUtil为自定义类\nimport { JWSUtil } from '../common/JWSUtil';\n\n@Entry\n@Component\nstruct Index {\n  queryPurchases(context: common.UIAbilityContext) {\n    const param: iap.QueryPurchasesParameter = {\n      productType: iap.ProductType.NONCONSUMABLE,\n      queryType: iap.PurchaseQueryType.CURRENT_ENTITLEMENT\n    };\n    iap.queryPurchases(context, param).then((res: iap.QueryPurchaseResult) => {\n      console.info('Succeeded in querying purchases.');\n      const purchaseDataList: string[] = res.purchaseDataList;\n      if (purchaseDataList === undefined || purchaseDataList.length <= 0) {\n        return;\n      }\n      for (let i = 0; i < purchaseDataList.length; i++) {\n        const jwsPurchaseOrder: string = JSON.parse(purchaseDataList[i]).jwsPurchaseOrder;\n        if (!jwsPurchaseOrder) {\n          continue;\n        }\n        // 对jwsPurchaseOrder进行解码验签\n        const purchaseStr = JWSUtil.decodeJwsObj(jwsPurchaseOrder);\n        // 需自定义PurchaseOrderPayload类，包含的信息请参见PurchaseOrderPayload\n        const purchaseOrderPayload = JSON.parse(purchaseStr) as PurchaseOrderPayload;\n        // 处理权益发放\n        // ...\n        // 发放权益后向IAP Kit发送finishPurchase请求，确认发货，完成购买\n        if (purchaseOrderPayload && purchaseOrderPayload.finishStatus !== '1') {\n          this.finishPurchase(context, purchaseOrderPayload);\n        }\n      }\n    }).catch((err: BusinessError) => {\n      // 请求失败\n      console.error(`Failed to query purchases. Code is ${err.code}, message is ${err.message}`);\n    });\n  }\n\n  finishPurchase(context: common.UIAbilityContext, purchaseOrder: PurchaseOrderPayload) {\n    const finishPurchaseParam: iap.FinishPurchaseParameter = {\n      productType: Number(purchaseOrder.productType),\n      purchaseToken: purchaseOrder.purchaseToken,\n      purchaseOrderId: purchaseOrder.purchaseOrderId\n    };\n    iap.finishPurchase(context, finishPurchaseParam).then(() => {\n      // 请求成功\n      console.info('Succeeded in finishing purchase.');\n    }).catch((err: BusinessError) => {\n      // 请求失败\n      console.error(`Failed to finish purchase. Code is ${err.code}, message is ${err.message}`);\n    });\n  }\n\n  build() {}\n}\n"
      })
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
903148(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
705941(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
773290(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
664487(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
570483(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799276-53e63413ae240b0247af38fae207e2f7.png");

},
675962(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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