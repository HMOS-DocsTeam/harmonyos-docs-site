"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["488738"], {
444460(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_iap_kit_guide_iap_purchases_iap_subscription_iap_delivering_subscriptions_iap_delivering_subscriptions_md_320_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-iap-kit-guide-iap-purchases-iap-subscription-iap-delivering-subscriptions-iap-delivering-subscriptions-md-320.json
var site_docs_iap_kit_guide_iap_purchases_iap_subscription_iap_delivering_subscriptions_iap_delivering_subscriptions_md_320_namespaceObject = JSON.parse('{"id":"iap-kit-guide/iap-purchases/iap-subscription/iap-delivering-subscriptions/iap-delivering-subscriptions","title":"权益发放","description":"对生效中的订阅发放权益","source":"@site/docs/iap-kit-guide/iap-purchases/iap-subscription/iap-delivering-subscriptions/iap-delivering-subscriptions.md","sourceDirName":"iap-kit-guide/iap-purchases/iap-subscription/iap-delivering-subscriptions","slug":"/iap-kit-guide/iap-purchases/iap-subscription/iap-delivering-subscriptions/","permalink":"/harmonyos-docs-site/iap-kit-guide/iap-purchases/iap-subscription/iap-delivering-subscriptions/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"权益发放","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/iap-delivering-subscriptions","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"接入自动续期订阅","permalink":"/harmonyos-docs-site/iap-kit-guide/iap-purchases/iap-subscription/iap-integrate-subscription/"},"next":{"title":"接入购买","permalink":"/harmonyos-docs-site/iap-kit-guide/iap-purchases/iap-nonrenewable/iap-integrate-nonrenewable/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/iap-kit-guide/iap-purchases/iap-subscription/iap-delivering-subscriptions/iap-delivering-subscriptions.md


const frontMatter = {
	title: '权益发放',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/iap-delivering-subscriptions',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '权益发放';

const assets = {

};



const toc = [{
  "value": "对生效中的订阅发放权益",
  "id": "对生效中的订阅发放权益",
  "level": 2
}, {
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 3
}, {
  "value": "业务流程",
  "id": "业务流程",
  "level": 3
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 3
}, {
  "value": "确保权益发放",
  "id": "确保权益发放",
  "level": 2
}, {
  "value": "业务流程",
  "id": "业务流程-1",
  "level": 3
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
      id: "对生效中的订阅发放权益",
      children: "对生效中的订阅发放权益"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户购买自动续期订阅商品后，若订阅处于生效状态，开发者需要及时给用户发放对应权益。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在应用启动时，获取用户当前处于生效状态的订阅列表，处理此部分订阅的权益发放。建议先检查当前订阅对应权益的发放状态，未发放再补充发放权益。在权益发放成功后，向IAP确认发货，完成购买。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "建议单机应用将用户权益和订阅状态关联。如果订阅处于生效状态，始终为用户发放权益。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "业务流程",
      children: "业务流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(561637)/* ["default"] */.A) + "",
        width: "600",
        height: "555"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["应用客户端向IAP Kit发起", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-iap/iap-iap#iapquerypurchases",
            children: "queryPurchases"
          }), "请求，查询用户生效中的订阅列表。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["IAP Kit返回", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-data-model/iap-data-model#purchasedata",
            children: "PurchaseData"
          }), "列表。", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-data-model/iap-data-model#purchasedata",
            children: "PurchaseData"
          }), "为JWS格式的字符串，承载了相关的订阅信息。"]
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
          }), ".jwsSubscriptionStatus进行", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-rest/iap-verifying-signature/iap-verifying-signature#jws%E8%A7%A3%E7%A0%81%E5%92%8C%E9%AA%8C%E7%AD%BE",
            children: "解码验签"
          }), "，验证成功可得到对应的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-data-model/iap-data-model#subgroupstatuspayload",
            children: "SubGroupStatusPayload"
          }), "的JSON字符串。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["处理权益发放。检查", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-data-model/iap-data-model#subgroupstatuspayload",
            children: "SubGroupStatusPayload"
          }), ".lastSubscriptionStatus.lastPurchaseOrder是否已发放权益，未发放则需发放相关权益，并记录对应的订单信息（", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-data-model/iap-data-model#purchaseorderpayload",
            children: "PurchaseOrderPayload"
          }), "）。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(811812)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "建议单机应用将用户权益和订阅状态关联。如果订阅处于生效状态，始终为用户发放权益。"
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
          children: ["发放权益后应用客户端向IAP Kit发送", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-iap/iap-iap#iapfinishpurchase",
            children: "finishPurchase"
          }), "请求，以此通知IAP服务器更新商品的发货状态，完成购买流程。应用成功执行", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-iap/iap-iap#iapfinishpurchase",
            children: "finishPurchase"
          }), "之后，IAP服务器会将相应商品标记为已发货状态。此步骤也可放到应用服务器处理。应用服务器可通过请求服务端", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-rest/iap-confirm-purchase-for-sub/iap-confirm-purchase-for-sub",
            children: "订阅确认发货"
          }), "接口来确认发货，完成购买流程。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(434505)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "对于自动续期订阅商品，如果不执行此步骤，会导致后续自动续期无法扣费 ，以及同一个订阅组不同自动续期订阅商品无法切换等问题。"
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
          }), "请求，获取生效中的订阅列表。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在请求参数", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-iap/iap-iap#querypurchasesparameter",
            children: "QueryPurchasesParameter"
          }), "中指定productType为", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-iap/iap-iap#producttype",
            children: "iap.ProductType.AUTORENEWABLE"
          }), "，同时指定queryType为", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-iap/iap-iap#purchasequerytype",
            children: "iap.PurchaseQueryType.CURRENT_ENTITLEMENT"
          }), "。当接口请求成功时，IAP Kit将返回一个", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-iap/iap-iap#querypurchaseresult",
            children: "QueryPurchaseResult"
          }), "对象，该对象包含承载了订阅信息的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-data-model/iap-data-model#purchasedata",
            children: "PurchaseData"
          }), "的列表。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["验证订单信息。对每个", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-data-model/iap-data-model#purchasedata",
            children: "purchaseData"
          }), ".jwsSubscriptionStatus进行", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-rest/iap-verifying-signature/iap-verifying-signature#jws%E8%A7%A3%E7%A0%81%E5%92%8C%E9%AA%8C%E7%AD%BE",
            children: "解码验签"
          }), "，验证成功可得到", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-data-model/iap-data-model#subgroupstatuspayload",
            children: "SubGroupStatusPayload"
          }), "的JSON字符串。建议应用客户端将", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-data-model/iap-data-model#purchasedata",
            children: "purchaseData"
          }), "发送至应用服务器，在应用服务器执行此操作。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["为了提高安全性，可从", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-data-model/iap-data-model#subgroupstatuspayload",
            children: "SubGroupStatusPayload"
          }), ".lastSubscriptionStatus.lastPurchaseOrder中解析出purchaseToken和purchaseOrderId信息，并通过服务端", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-rest/iap-query-subscription-status/iap-query-subscription-status",
            children: "订阅状态查询"
          }), "接口向IAP服务器查询最新的订阅状态信息，进一步确认订阅信息的准确性。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "展示订阅状态。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["如果", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/iap-api/iap-arkts/iap-data-model/iap-data-model#subgroupstatuspayload",
              children: "SubGroupStatusPayload"
            }), ".lastSubscriptionStatus.status=1，表示订阅处于生效状态。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["如果", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/iap-api/iap-arkts/iap-data-model/iap-data-model#subgroupstatuspayload",
              children: "SubGroupStatusPayload"
            }), ".lastSubscriptionStatus.status=1且", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/iap-api/iap-arkts/iap-data-model/iap-data-model#subgroupstatuspayload",
              children: "SubGroupStatusPayload"
            }), ".lastSubscriptionStatus.renewalInfo.autoRenewStatusCode值为1时，表示订阅处于自动续期状态。此状态的商品无法再次购买，需要屏蔽相关的购买入口。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["权益发放。获取", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-data-model/iap-data-model#subgroupstatuspayload",
            children: "SubGroupStatusPayload"
          }), ".lastSubscriptionStatus.lastPurchaseOrder（下文标记为", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-data-model/iap-data-model#purchaseorderpayload",
            children: "PurchaseOrderPayload"
          }), "），处理权益发放。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["可先检查此笔订单权益的发放状态，未发放则补充发放权益，成功后记录", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-data-model/iap-data-model#purchaseorderpayload",
            children: "PurchaseOrderPayload"
          }), "等信息，用于后续检查权益发放状态。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(454743)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "建议单机应用将用户权益和订阅状态关联。如果订阅处于生效状态，始终为用户发放权益。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在发放权益后，如果", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-data-model/iap-data-model#purchaseorderpayload",
            children: "PurchaseOrderPayload"
          }), ".finishStatus不为1，应用需调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-iap/iap-iap#iapfinishpurchase",
            children: "finishPurchase"
          }), "接口确认发货，完成购买流程。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["发起请求时，需在请求参数", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-iap/iap-iap#finishpurchaseparameter",
            children: "FinishPurchaseParameter"
          }), "中携带", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-data-model/iap-data-model#purchaseorderpayload",
            children: "PurchaseOrderPayload"
          }), "中的productType、purchaseToken、purchaseOrderId。请求成功后，IAP服务器会将相应商品标记为已发货。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(369070)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["此步骤也可放到应用服务器处理。应用服务器可通过请求服务端", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-rest/iap-confirm-purchase-for-sub/iap-confirm-purchase-for-sub",
            children: "订阅确认发货"
          }), "接口来确认发货，完成购买流程。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(370894)/* ["default"] */.A) + "",
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
        children: "import { iap } from '@kit.IAPKit';\nimport { common } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n// JWSUtil为自定义类\nimport { JWSUtil } from '../common/JWSUtil';\n\n@Entry\n@Component\nstruct Index {\n\n  queryPurchases(context: common.UIAbilityContext) {\n    const param: iap.QueryPurchasesParameter = {\n      productType: iap.ProductType.AUTORENEWABLE,\n      queryType: iap.PurchaseQueryType.CURRENT_ENTITLEMENT\n    };\n    iap.queryPurchases(context, param).then((res: iap.QueryPurchaseResult) => {\n      console.info('Succeeded in querying purchases.');\n      const purchaseDataList: string[] = res.purchaseDataList;\n      if (purchaseDataList === undefined || purchaseDataList.length <= 0) {\n        return;\n      }\n      for (let i = 0; i < purchaseDataList.length; i++) {\n        const jwsSubscriptionStatus: string = JSON.parse(purchaseDataList[i]).jwsSubscriptionStatus;\n        if (!jwsSubscriptionStatus) {\n          continue;\n        }\n        // 对jwsSubscriptionStatus进行解码验签\n        const subscriptionStatus: string = JWSUtil.decodeJwsObj(jwsSubscriptionStatus);\n        // 需自定义SubGroupStatusPayload类，包含的信息请参见SubGroupStatusPayload\n        const subGroupStatusPayload: SubGroupStatusPayload = JSON.parse(subscriptionStatus);\n        const lastSubscriptionStatus = subGroupStatusPayload.lastSubscriptionStatus;\n        if (!lastSubscriptionStatus) {\n          continue;\n        }\n\n        // 根据status判断订阅的状态\n        const status = lastSubscriptionStatus.status;\n        // 更新商品的订阅状态\n        // ...\n\n        // 处理权益发放\n        const purchaseOrderPayload = lastSubscriptionStatus.lastPurchaseOrder;\n        if (purchaseOrderPayload === undefined) {\n          continue;\n        }\n        if (status === '1') {\n          // 订阅处于生效状态\n          // 处理权益发放。检查此笔订单权益的发放状态，未发放则补充发放权益\n          // ...\n        }\n        // 发放权益后向IAP Kit发送finishPurchase请求，确认发货，完成购买\n        if (purchaseOrderPayload && purchaseOrderPayload.finishStatus !== '1') {\n          this.finishPurchase(context, purchaseOrderPayload);\n        }\n      }\n    }).catch((err: BusinessError) => {\n      // 请求失败\n      console.error(`Failed to query purchases. Code is ${err.code}, message is ${err.message}`);\n    })\n  }\n\n  finishPurchase(context: common.UIAbilityContext, purchaseOrder: PurchaseOrderPayload) {\n    const finishPurchaseParam: iap.FinishPurchaseParameter = {\n      productType: Number(purchaseOrder.productType),\n      purchaseToken: purchaseOrder.purchaseToken,\n      purchaseOrderId: purchaseOrder.purchaseOrderId\n    };\n    iap.finishPurchase(context, finishPurchaseParam).then(() => {\n      // 请求成功\n      console.info('Succeeded in finishing purchase.');\n    }).catch((err: BusinessError) => {\n      // 请求失败\n      console.error(`Failed to finish purchase. Code is ${err.code}, message is ${err.message}`);\n    });\n  }\n\n  build() {}\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "确保权益发放",
      children: "确保权益发放"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户购买自动续期订阅成功或者自动续期成功后，开发者需要及时给用户发放相关权益。但实际应用场景中，若出现异常（网络错误等）将导致应用无法知道用户实际是否支付成功，从而无法及时发放权益，即出现掉单情况。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为了确保权益发放，需要在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/iap-api/iap-arkts/iap-iap/iap-iap#iapcreatepurchase",
        children: "createPurchase"
      }), "请求返回", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/iap-api/iap-arkts/iap-iap/iap-iap#iaperrorcode",
        children: "iap.IAPErrorCode.PRODUCT_OWNED"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/iap-api/iap-arkts/iap-iap/iap-iap#iaperrorcode",
        children: "iap.IAPErrorCode.SYSTEM_ERROR"
      }), "时检查用户是否存在已购但未确认发货的商品，如果存在则发放相关权益，然后向IAP Kit确认发货，完成购买。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "业务流程-1",
      children: "业务流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(959305)/* ["default"] */.A) + "",
        width: "600",
        height: "555"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["应用客户端向IAP Kit发起", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-iap/iap-iap#iapquerypurchases",
            children: "queryPurchases"
          }), "请求，查询用户已购买但未确认发货的订阅列表。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["IAP Kit返回", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-data-model/iap-data-model#purchasedata",
            children: "PurchaseData"
          }), "列表。", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-data-model/iap-data-model#purchasedata",
            children: "PurchaseData"
          }), "为JWS格式的字符串，承载了相关的订阅信息。"]
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
          }), ".jwsSubscriptionStatus进行", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-rest/iap-verifying-signature/iap-verifying-signature#jws%E8%A7%A3%E7%A0%81%E5%92%8C%E9%AA%8C%E7%AD%BE",
            children: "解码验签"
          }), "，验证成功可得到对应的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-data-model/iap-data-model#subgroupstatuspayload",
            children: "SubGroupStatusPayload"
          }), "的JSON字符串。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["处理权益发放。检查", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-data-model/iap-data-model#subgroupstatuspayload",
            children: "SubGroupStatusPayload"
          }), ".lastSubscriptionStatus.lastPurchaseOrder是否已发放权益，未发放则需发放相关权益，并记录对应的订单信息（", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-data-model/iap-data-model#purchaseorderpayload",
            children: "PurchaseOrderPayload"
          }), "）。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(848197)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "建议单机应用将用户权益和订阅状态关联。如果订阅处于生效状态，始终为用户发放权益。"
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
          children: ["发放权益后应用客户端向IAP Kit发送", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-iap/iap-iap#iapfinishpurchase",
            children: "finishPurchase"
          }), "请求，以此通知IAP服务器更新商品的发货状态，完成购买流程。应用成功执行", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-iap/iap-iap#iapfinishpurchase",
            children: "finishPurchase"
          }), "之后，IAP服务器会将相应商品标记为已发货状态。此步骤也可放到应用服务器处理。应用服务器可通过请求服务端", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-rest/iap-confirm-purchase-for-sub/iap-confirm-purchase-for-sub",
            children: "订阅确认发货"
          }), "接口来确认发货，完成购买流程。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(573484)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "对于自动续期订阅商品，如果不执行此步骤，会导致后续自动续期无法扣费 ，以及同一个订阅组不同自动续期订阅商品无法切换等问题。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发步骤-1",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["应用客户端向IAP Kit发起", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-iap/iap-iap#iapquerypurchases",
            children: "queryPurchases"
          }), "请求，获取用户已购但未确认发货的订阅列表。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在请求参数", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-iap/iap-iap#querypurchasesparameter",
            children: "QueryPurchasesParameter"
          }), "中指定productType为", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-iap/iap-iap#producttype",
            children: "iap.ProductType.AUTORENEWABLE"
          }), "，同时指定queryType为", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-iap/iap-iap#purchasequerytype",
            children: "iap.PurchaseQueryType.UNFINISHED"
          }), "。当接口请求成功时，IAP Kit将返回一个", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-iap/iap-iap#querypurchaseresult",
            children: "QueryPurchaseResult"
          }), "对象，该对象包含承载了订阅信息的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-data-model/iap-data-model#purchasedata",
            children: "PurchaseData"
          }), "的列表。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["验证订单信息。对每个", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-data-model/iap-data-model#purchasedata",
            children: "purchaseData"
          }), ".jwsSubscriptionStatus进行", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-rest/iap-verifying-signature/iap-verifying-signature#jws%E8%A7%A3%E7%A0%81%E5%92%8C%E9%AA%8C%E7%AD%BE",
            children: "解码验签"
          }), "，验证成功可得到", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-data-model/iap-data-model#subgroupstatuspayload",
            children: "SubGroupStatusPayload"
          }), "的JSON字符串。建议应用客户端将", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-data-model/iap-data-model#purchasedata",
            children: "purchaseData"
          }), "发送至应用服务器，在应用服务器执行此操作。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["为了提高安全性，可从", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-data-model/iap-data-model#subgroupstatuspayload",
            children: "SubGroupStatusPayload"
          }), ".lastSubscriptionStatus.lastPurchaseOrder中解析出purchaseToken和purchaseOrderId信息，并通过服务端", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-rest/iap-query-subscription-status/iap-query-subscription-status",
            children: "订阅状态查询"
          }), "接口向IAP服务器查询最新的订阅状态信息，进一步确认订阅信息的准确性。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "处理权益发放。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如果SubGroupStatusPayload.lastSubscriptionStatus.status=1，表示订阅处于生效状态。需要对生效状态的订阅处理权益发放。建议先检查此笔订单权益的发放状态，未发放则补充发放权益，成功后记录", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-data-model/iap-data-model#purchaseorderpayload",
            children: "PurchaseOrderPayload"
          }), "等信息，用于后续检查权益发放状态。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "建议单机应用将用户权益和订阅状态关联。如果订阅处于生效状态，始终为用户发放权益。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在发放权益后，如果PurchaseOrderPayload.finishStatus不为1，应用需调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-iap/iap-iap#iapfinishpurchase",
            children: "finishPurchase"
          }), "接口确认发货，完成购买流程。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["发起请求时，需在请求参数", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-iap/iap-iap#finishpurchaseparameter",
            children: "FinishPurchaseParameter"
          }), "中携带", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-data-model/iap-data-model#purchaseorderpayload",
            children: "PurchaseOrderPayload"
          }), "中的productType、purchaseToken、purchaseOrderId。请求成功后，IAP服务器会将相应商品标记为已发货。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(556311)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["此步骤也可放到应用服务器处理。应用服务器可通过请求服务端", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-rest/iap-confirm-purchase-for-sub/iap-confirm-purchase-for-sub",
            children: "订阅确认发货"
          }), "接口来确认发货，完成购买流程。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(329562)/* ["default"] */.A) + "",
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
        children: "import { iap } from '@kit.IAPKit';\nimport { common } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n// JWSUtil为自定义类\nimport { JWSUtil } from '../common/JWSUtil';\n\n@Entry\n@Component\nstruct Index {\n\n  queryPurchases(context: common.UIAbilityContext) {\n    const param: iap.QueryPurchasesParameter = {\n      productType: iap.ProductType.AUTORENEWABLE,\n      queryType: iap.PurchaseQueryType.UNFINISHED\n    };\n    iap.queryPurchases(context, param).then((res: iap.QueryPurchaseResult) => {\n      console.info('Succeeded in querying purchases.');\n      const purchaseDataList: string[] = res.purchaseDataList;\n      if (purchaseDataList === undefined || purchaseDataList.length <= 0) {\n        return;\n      }\n      for (let i = 0; i < purchaseDataList.length; i++) {\n        const jwsSubscriptionStatus: string = JSON.parse(purchaseDataList[i]).jwsSubscriptionStatus;\n        if (!jwsSubscriptionStatus) {\n          continue;\n        }\n        // 对jwsSubscriptionStatus进行解码验签\n        const subscriptionStatus: string = JWSUtil.decodeJwsObj(jwsSubscriptionStatus);\n        // 需自定义SubGroupStatusPayload类，包含的信息请参见SubGroupStatusPayload\n        const subGroupStatusPayload: SubGroupStatusPayload = JSON.parse(subscriptionStatus);\n        const lastSubscriptionStatus = subGroupStatusPayload.lastSubscriptionStatus;\n        if (!lastSubscriptionStatus) {\n          continue;\n        }\n\n        // 根据status判断订阅的状态\n        const status = lastSubscriptionStatus.status;\n        // 更新商品的订阅状态\n        // ...\n\n        // 处理权益发放\n        const purchaseOrderPayload = lastSubscriptionStatus.lastPurchaseOrder;\n        if (purchaseOrderPayload === undefined) {\n          continue;\n        }\n        if (status === '1') {\n          // 订阅处于生效状态\n          // 处理权益发放。检查此笔订单权益的发放状态，未发放则补充发放权益\n          // ...\n        }\n        // 发放权益后向IAP Kit发送finishPurchase请求，确认发货，完成购买\n        if (purchaseOrderPayload && purchaseOrderPayload.finishStatus !== '1') {\n          this.finishPurchase(context, purchaseOrderPayload);\n        }\n      }\n    }).catch((err: BusinessError) => {\n      // 请求失败\n      console.error(`Failed to query purchases. Code is ${err.code}, message is ${err.message}`);\n    })\n  }\n\n  finishPurchase(context: common.UIAbilityContext, purchaseOrder: PurchaseOrderPayload) {\n    const finishPurchaseParam: iap.FinishPurchaseParameter = {\n      productType: Number(purchaseOrder.productType),\n      purchaseToken: purchaseOrder.purchaseToken,\n      purchaseOrderId: purchaseOrder.purchaseOrderId\n    };\n    iap.finishPurchase(context, finishPurchaseParam).then(() => {\n      // 请求成功\n      console.info('Succeeded in finishing purchase.');\n    }).catch((err: BusinessError) => {\n      // 请求失败\n      console.error(`Failed to finish purchase. Code is ${err.code}, message is ${err.message}`);\n    });\n  }\n\n  build() {}\n}\n"
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
434505(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
848197(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
573484(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
561637(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799280-9b45b864d9317caacde7addb34c2bf2d.png");

},
959305(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438975-c6b8580a678e447df11125eca154e0e6.png");

},
811812(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
329562(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
556311(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
369070(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
370894(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
454743(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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