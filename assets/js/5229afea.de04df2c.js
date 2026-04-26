"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["513183"], {
655668(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_iap_kit_guide_iap_purchases_iap_subscription_iap_integrate_subscription_iap_integrate_subscription_md_522_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-iap-kit-guide-iap-purchases-iap-subscription-iap-integrate-subscription-iap-integrate-subscription-md-522.json
var site_docs_iap_kit_guide_iap_purchases_iap_subscription_iap_integrate_subscription_iap_integrate_subscription_md_522_namespaceObject = JSON.parse('{"id":"iap-kit-guide/iap-purchases/iap-subscription/iap-integrate-subscription/iap-integrate-subscription","title":"接入自动续期订阅","description":"约束与限制","source":"@site/docs/iap-kit-guide/iap-purchases/iap-subscription/iap-integrate-subscription/iap-integrate-subscription.md","sourceDirName":"iap-kit-guide/iap-purchases/iap-subscription/iap-integrate-subscription","slug":"/iap-kit-guide/iap-purchases/iap-subscription/iap-integrate-subscription/","permalink":"/harmonyos-docs-site/iap-kit-guide/iap-purchases/iap-subscription/iap-integrate-subscription/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"接入自动续期订阅","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/iap-integrate-subscription","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"自动续期订阅说明","permalink":"/harmonyos-docs-site/iap-kit-guide/iap-purchases/iap-subscription/iap-subscription-functions/"},"next":{"title":"权益发放","permalink":"/harmonyos-docs-site/iap-kit-guide/iap-purchases/iap-subscription/iap-delivering-subscriptions/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/iap-kit-guide/iap-purchases/iap-subscription/iap-integrate-subscription/iap-integrate-subscription.md


const frontMatter = {
	title: '接入自动续期订阅',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/iap-integrate-subscription',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '接入自动续期订阅';

const assets = {

};



const toc = [{
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "业务流程",
  "id": "业务流程",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "展示商品",
  "id": "展示商品",
  "level": 3
}, {
  "value": "展示订阅状态、发放权益",
  "id": "展示订阅状态发放权益",
  "level": 3
}, {
  "value": "发起购买",
  "id": "发起购买",
  "level": 3
}, {
  "value": "购买结果处理",
  "id": "购买结果处理",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "接入自动续期订阅",
        children: "接入自动续期订阅"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自动续期订阅能力支持Phone、Tablet、PC/2in1设备，并且从5.1.1(19）版本开始，新增支持TV设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "业务流程",
      children: "业务流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(60865)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如下业务流程对于单机应用同样适用。在单机应用中，应用服务器和应用客户端的交互放在应用客户端完成，应用服务器和IAP服务器交互的部分可不处理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(152117)/* ["default"] */.A) + "",
        width: "800",
        height: "1112"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "展示商品"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["应用客户端向IAP Kit发起", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/iap-api/iap-arkts/iap-iap/iap-iap#iapqueryenvironmentstatus",
          children: "queryEnvironmentStatus"
        }), "请求，检查当前用户登录的华为账号所在的服务地是否在IAP Kit支持结算的国家/地区中。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["应用客户端向IAP Kit发起", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/iap-api/iap-arkts/iap-iap/iap-iap#iapqueryproducts",
          children: "queryProducts"
        }), "请求来获取在", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/service/josp/agc/index.html",
          children: "AppGallery Connect"
        }), "上配置的商品信息。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用客户端根据返回的商品信息展示可供购买的商品列表，包含商品名称、价格等信息。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "检查权益发放状态"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["应用客户端向IAP Kit发起", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-iap/iap-iap#iapquerypurchases",
            children: "queryPurchases"
          }), "请求，获取当前生效中的订阅列表。IAP Kit返回", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-data-model/iap-data-model#purchasedata",
            children: "PurchaseData"
          }), "列表。", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-data-model/iap-data-model#purchasedata",
            children: "PurchaseData"
          }), "为JWS格式的字符串，承载了相关的订阅信息。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用客户端展示商品的订阅状态，需要屏蔽处于自动续期状态的商品的购买入口。同时处理商品的权益发放。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["若商品未确认发货，需要在权益发放后，向IAP Kit发送", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-iap/iap-iap#iapfinishpurchase",
            children: "finishPurchase"
          }), "请求，以此通知IAP服务器更新商品的发货状态，完成购买流程。应用成功执行", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-iap/iap-iap#iapfinishpurchase",
            children: "finishPurchase"
          }), "之后，IAP服务器会将相应商品标记为已发货状态。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["此步骤也可放到应用服务器处理。应用服务器可通过请求服务端", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-rest/iap-confirm-purchase-for-sub/iap-confirm-purchase-for-sub",
            children: "订阅确认发货"
          }), "接口来确认发货，完成购买流程。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/iap-kit-guide/iap-purchases/iap-subscription/iap-delivering-subscriptions#%E5%AF%B9%E7%94%9F%E6%95%88%E4%B8%AD%E7%9A%84%E8%AE%A2%E9%98%85%E5%8F%91%E6%94%BE%E6%9D%83%E7%9B%8A",
        children: "对生效中的订阅发放权益"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "购买及结果确认"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["用户发起购买后，应用客户端向IAP Kit发起", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-iap/iap-iap#iapcreatepurchase",
            children: "createPurchase"
          }), "购买请求或通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts-component/iap-cashier-component/iap-cashier-component",
            children: "IAP嵌入式收银台组件"
          }), "发起购买请求（只支持TV），请求中携带商品ID、商品类型等信息。IAP Kit创建订单并展示收银台。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "购买结果确认。如购买成功，可通过应用客户端或应用服务器接收购买结果，建议通过应用服务器接收购买结果。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "方式一：通过客户端接收购买结果"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["用户购买成功时，IAP Kit返回包含订阅状态信息的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/iap-api/iap-arkts/iap-data-model/iap-data-model#purchasedata",
              children: "PurchaseData"
            }), "数据。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["应用客户端向应用服务器上报", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/iap-api/iap-arkts/iap-data-model/iap-data-model#purchasedata",
              children: "PurchaseData"
            }), "数据。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["应用服务器对", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/iap-api/iap-arkts/iap-data-model/iap-data-model#purchasedata",
              children: "PurchaseData.jwsSubscriptionStatus"
            }), "进行", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/iap-api/iap-rest/iap-verifying-signature/iap-verifying-signature#jws%E8%A7%A3%E7%A0%81%E5%92%8C%E9%AA%8C%E7%AD%BE",
              children: "解码验签"
            }), "，成功后可得到", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/iap-api/iap-arkts/iap-data-model/iap-data-model#subgroupstatuspayload",
              children: "SubGroupStatusPayload"
            }), "的JSON字符串。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "（建议）方式二：通过服务器接收购买结果"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["为了提高安全性，开发者可以接入", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/iap-api/iap-rest/iap-key-event-notifications/iap-key-event-notifications",
              children: "服务端关键事件通知"
            }), "，在用户购买成功时，IAP服务器将发送订单关键事件通知。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["应用服务器可从NotificationPayload.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/iap-api/iap-rest/iap-key-event-notifications/iap-key-event-notifications#notificationmetadata",
              children: "NotificationMetaData"
            }), "中解析出purchaseToken和purchaseOrderId信息，并通过服务端", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/iap-api/iap-rest/iap-query-subscription-status/iap-query-subscription-status",
              children: "订阅状态查询"
            }), "接口向IAP服务器查询最新的订阅状态信息，进一步确认订阅信息的准确性。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["IAP服务器返回订阅组相关订阅状态数据", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/iap-api/iap-rest/iap-query-subscription-status/iap-query-subscription-status#response-body",
              children: "jwsSubGroupStatus"
            }), "。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["应用服务器对", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/iap-api/iap-rest/iap-query-subscription-status/iap-query-subscription-status#response-body",
              children: "jwsSubGroupStatus"
            }), "进行", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/iap-api/iap-rest/iap-verifying-signature/iap-verifying-signature#jws%E8%A7%A3%E7%A0%81%E5%92%8C%E9%AA%8C%E7%AD%BE",
              children: "解码验签"
            }), "，成功后可得到", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/iap-api/iap-arkts/iap-data-model/iap-data-model#subgroupstatuspayload",
              children: "SubGroupStatusPayload"
            }), "的JSON字符串。"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(567510)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果购买失败，请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/iap-kit-guide/iap-purchases/iap-subscription/iap-delivering-subscriptions#%E7%A1%AE%E4%BF%9D%E6%9D%83%E7%9B%8A%E5%8F%91%E6%94%BE",
        children: "确保权益发放"
      }), "处理，及时发放权益。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "发放权益"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["确认购买成功后，需要处理权益发放。检查", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-data-model/iap-data-model#subgroupstatuspayload",
            children: "SubGroupStatusPayload"
          }), ".lastSubscriptionStatus.lastPurchaseOrder是否已发放权益，未发放则需发放相关权益，并记录对应的订单信息（", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-data-model/iap-data-model#purchaseorderpayload",
            children: "PurchaseOrderPayload"
          }), "），用于后续检查权益发放状态。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(472603)/* ["default"] */.A) + "",
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
          children: ["发货成功后应用客户端向IAP Kit发送", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-iap/iap-iap#iapfinishpurchase",
            children: "finishPurchase"
          }), "请求，以此通知IAP服务器更新商品的发货状态，完成购买流程。应用成功执行", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-iap/iap-iap#iapfinishpurchase",
            children: "finishPurchase"
          }), "之后，IAP服务器会将相应商品标记为已发货状态，后续该商品即可正常续期。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["此步骤也可放到应用服务器处理。应用服务器可通过请求服务端", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-rest/iap-confirm-purchase-for-sub/iap-confirm-purchase-for-sub",
            children: "订阅确认发货"
          }), "接口来确认发货，完成购买流程。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(651360)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "对于自动续期订阅商品，如果不执行此步骤，会导致后续自动续期无法扣费，以及同一个订阅组不同自动续期订阅商品无法切换等问题。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "展示商品",
      children: "展示商品"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "检查应用引入IAP Kit的可用性。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在使用应用内支付之前，应用客户端需要向IAP Kit发送", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-iap/iap-iap#iapqueryenvironmentstatus",
            children: "queryEnvironmentStatus"
          }), "请求，以此判断用户当前登录的华为账号所在的服务地是否在IAP Kit支持结算的国家/地区中。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(267683)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当前IAP Kit支持结算的国家/地区仅有中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { iap } from '@kit.IAPKit';\nimport { common } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct Index {\n  queryEnvironmentStatus(context: common.UIAbilityContext) {\n    iap.queryEnvironmentStatus(context).then(() => {\n      // 请求成功\n      console.info('Succeeded in querying environment status.');\n    }).catch((err: BusinessError) => {\n      // 请求失败\n      // 如果接口返回错误码“1001860054 用户账号所在服务地不在IAP Kit支持结算的国家/地区中”，应用需隐藏相关IAP功能入口\n      console.error(`Failed to query environment status. Code is ${err.code}, message is ${err.message}`);\n    });\n  }\n\n  build() {}\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "展示商品列表。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["应用客户端通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-iap/iap-iap#iapqueryproducts",
            children: "queryProducts"
          }), "来获取在", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/service/josp/agc/index.html",
            children: "AppGallery Connect"
          }), "上配置的商品信息。发起请求时，需在请求参数", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-iap/iap-iap#queryproductsparameter",
            children: "QueryProductsParameter"
          }), "中携带相关的商品ID，并指定其productType为", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-iap/iap-iap#producttype",
            children: "iap.ProductType.AUTORENEWABLE"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["当接口请求成功时，IAP Kit将返回商品信息", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-iap/iap-iap#product",
            children: "Product"
          }), "的列表。 应用可以使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-iap/iap-iap#product",
            children: "Product"
          }), "包含的商品价格、名称和描述等信息，向用户展示可供购买的商品列表。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(384656)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-iap/iap-iap#iapqueryproducts",
            children: "queryProducts"
          }), "每次只能查询一种商品类型的商品，每次最多查询200个商品，否则请求将报错。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { iap } from '@kit.IAPKit';\nimport { common } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct Index {\n\n  queryProducts(context: common.UIAbilityContext) {\n    const queryProductParam: iap.QueryProductsParameter = {\n      productType: iap.ProductType.AUTORENEWABLE,\n      // productIds中的商品需要替换成开发者在AppGallery Connect网站配置的商品\n      productIds: ['product1', 'product2', 'product3']\n    };\n    iap.queryProducts(context, queryProductParam).then((result) => {\n      // 请求成功\n      console.info('Succeeded in querying products.');\n      // 展示商品信息\n      // ...\n    }).catch((err: BusinessError) => {\n      // 请求失败\n      console.error(`Failed to query products. Code is ${err.code}, message is ${err.message}`);\n    });\n  }\n\n  build() {}\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "展示订阅状态发放权益",
      children: "展示订阅状态、发放权益"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用获取用户当前生效中的订阅列表。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用客户端展示对应商品的订阅状态。此处需要屏蔽处于自动续期状态的商品的购买入口。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "处理生效中的订阅的权益发放。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体可参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/iap-kit-guide/iap-purchases/iap-subscription/iap-delivering-subscriptions#%E5%AF%B9%E7%94%9F%E6%95%88%E4%B8%AD%E7%9A%84%E8%AE%A2%E9%98%85%E5%8F%91%E6%94%BE%E6%9D%83%E7%9B%8A",
        children: "对生效中的订阅发放权益"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "发起购买",
      children: "发起购买"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["用户发起购买时，应用可通过向IAP Kit发送", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/iap-api/iap-arkts/iap-iap/iap-iap#iapcreatepurchase",
        children: "createPurchase"
      }), "请求来拉起IAP Kit收银台或通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/iap-api/iap-arkts-component/iap-cashier-component/iap-cashier-component",
        children: "IAP嵌入式收银台组件"
      }), "发起购买请求（只支持TV）。发起请求时，应用需在请求参数", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/iap-api/iap-arkts/iap-iap/iap-iap#purchaseparameter",
        children: "PurchaseParameter"
      }), "中携带此前已在华为", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/service/josp/agc/index.html",
        children: "AppGallery Connect"
      }), "网站上配置并生效的自动续期订阅的商品ID，并指定其productType为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/iap-api/iap-arkts/iap-iap/iap-iap#producttype",
        children: "iap.ProductType.AUTORENEWABLE"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(710045)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发过程中易出现频繁调用接口的现象，建议控制接口调用频度，具体可参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/iap-api/iap-arkts/iap-error-code/iap-error-code#section1001860004-%E6%8E%A5%E5%8F%A3%E8%AE%BF%E9%97%AE%E8%BF%87%E9%A2%91",
        children: "1001860004 接口访问过频"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { iap } from '@kit.IAPKit';\nimport { common } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct Index {\n\n  subscribe(context: common.UIAbilityContext) {\n    const createPurchaseParam: iap.PurchaseParameter = {\n      productType: iap.ProductType.AUTORENEWABLE,\n      // productId需要替换成开发者在AppGallery Connect网站配置商品信息时设置的“商品ID”\n      productId: 'test001'\n    };\n    iap.createPurchase(context, createPurchaseParam).then((result) => {\n      console.info('Succeeded in creating purchase.');\n      // 购买成功，处理购买结果\n      // dealPurchaseResult实现请参见下一步\n      this.dealPurchaseResult(result);\n    }).catch((err: BusinessError) => {\n      // 购买失败\n      console.error(`Failed to create purchase. Code is ${err.code}, message is ${err.message}`);\n      // dealPurchaseError实现请参见下一步\n      this.dealPurchaseError(err);\n    })\n  }\n\n  build() {}\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "购买结果处理",
      children: "购买结果处理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【结果1：购买成功】"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(195217)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["为了提高安全性，建议应用服务器接入", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/iap-api/iap-rest/iap-key-event-notifications/iap-key-event-notifications",
          children: "服务端关键事件通知"
        }), "以接收购买成功结果并通过应用服务器来处理", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/iap-api/iap-rest/iap-verifying-signature/iap-verifying-signature#jws%E8%A7%A3%E7%A0%81%E5%92%8C%E9%AA%8C%E7%AD%BE",
          children: "解码验签"
        }), "、完成购买等操作。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["请务必确保发货成功后再执行完成购买步骤，本步骤可通过请求服务端", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/iap-api/iap-rest/iap-confirm-purchase-for-sub/iap-confirm-purchase-for-sub",
          children: "订阅确认发货"
        }), "接口来确认发货，完成购买流程。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下内容为", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "通过客户端接收购买结果"
        })
      }), "及处理的步骤说明。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["当用户购买成功时，应用将接收到一个", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-iap/iap-iap#createpurchaseresult",
            children: "CreatePurchaseResult"
          }), "对象，其", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-data-model/iap-data-model#purchasedata",
            children: "purchaseData"
          }), "字段包括了此次购买的结果信息。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["对", (0,jsx_runtime.jsx)(_components.a, {
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
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["验签成功后，检查", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-data-model/iap-data-model#subgroupstatuspayload",
            children: "SubGroupStatusPayload"
          }), ".lastSubscriptionStatus.status是否为1（生效中），是则发放相关权益。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["建议先检查此笔订单权益的发放状态，未发放则发放权益，成功后记录", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-data-model/iap-data-model#subgroupstatuspayload",
            children: "SubGroupStatusPayload"
          }), ".lastSubscriptionStatus.lastPurchaseOrder等信息，用于后续检查权益发放状态。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "完成购买。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["发放权益后，应用需发送", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-iap/iap-iap#iapfinishpurchase",
            children: "finishPurchase"
          }), "请求确认发货，以此通知IAP服务器更新商品的发货状态，完成购买流程。发送", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-iap/iap-iap#iapfinishpurchase",
            children: "finishPurchase"
          }), "请求时，需在请求参数", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-iap/iap-iap#finishpurchaseparameter",
            children: "FinishPurchaseParameter"
          }), "中携带", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-data-model/iap-data-model#purchaseorderpayload",
            children: "PurchaseOrderPayload"
          }), "中的productType、purchaseToken、purchaseOrderId，其中", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-data-model/iap-data-model#purchaseorderpayload",
            children: "PurchaseOrderPayload"
          }), "为", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-arkts/iap-data-model/iap-data-model#subgroupstatuspayload",
            children: "SubGroupStatusPayload"
          }), ".lastSubscriptionStatus.lastPurchaseOrder。请求成功后，IAP服务器会将相应商品标记为已发货。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(730099)/* ["default"] */.A) + "",
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
        children: "import { iap } from '@kit.IAPKit';\nimport { common } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n// JWSUtil为自定义类\nimport { JWSUtil } from '../common/JWSUtil';\n\n@Entry\n@Component\nstruct Index {\n\n  /**\n   * 购买结果处理\n   *\n   * @param result 商品购买结果\n   */\n  dealPurchaseResult(context: common.UIAbilityContext, result: iap.CreatePurchaseResult) {\n    const jwsSubscriptionStatus: string = JSON.parse(result.purchaseData).jwsSubscriptionStatus;\n    if (!jwsSubscriptionStatus) {\n      return;\n    }\n    const subscriptionStatus: string = JWSUtil.decodeJwsObj(jwsSubscriptionStatus);\n    if (!subscriptionStatus) {\n      return;\n    }\n    // 需自定义SubGroupStatusPayload类，包含的信息请参见SubGroupStatusPayload\n    const subGroupStatusPayload: SubGroupStatusPayload = JSON.parse(subscriptionStatus);\n    const lastSubscriptionStatus = subGroupStatusPayload.lastSubscriptionStatus;\n    if (!lastSubscriptionStatus || lastSubscriptionStatus.status !== '1') {\n      return;\n    }\n    const purchaseOrderPayload = lastSubscriptionStatus.lastPurchaseOrder;\n    if (purchaseOrderPayload === undefined) {\n      return;\n    }\n    // 处理发货\n    // ...\n    // 发货成功后向IAP Kit发送finishPurchase请求，确认发货，完成购买\n    this.finishPurchase(context, purchaseOrderPayload);\n  }\n\n  /**\n   * 确认发货，完成购买\n   *\n   * @param purchaseOrder 订单信息，来源于购买请求\n   */\n  finishPurchase(context: common.UIAbilityContext, purchaseOrder: PurchaseOrderPayload) {\n    const finishPurchaseParam: iap.FinishPurchaseParameter = {\n      productType: Number(purchaseOrder.productType),\n      purchaseToken: purchaseOrder.purchaseToken,\n      purchaseOrderId: purchaseOrder.purchaseOrderId\n    };\n    iap.finishPurchase(context, finishPurchaseParam).then(() => {\n      // 请求成功\n      console.info('Succeeded in finishing purchase.');\n    }).catch((err: BusinessError) => {\n      // 请求失败\n      console.error(`Failed to finish purchase. Code is ${err.code}, message is ${err.message}`);\n    });\n  }\n\n  build() {}\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【结果2：购买失败】"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当用户购买失败时，需要针对code为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/iap-api/iap-arkts/iap-iap/iap-iap#iaperrorcode",
        children: "iap.IAPErrorCode.PRODUCT_OWNED"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/iap-api/iap-arkts/iap-iap/iap-iap#iaperrorcode",
        children: "iap.IAPErrorCode.SYSTEM_ERROR"
      }), "的场景，检查是否需要补发货，确保权益发放，具体请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/iap-kit-guide/iap-purchases/iap-subscription/iap-delivering-subscriptions#%E7%A1%AE%E4%BF%9D%E6%9D%83%E7%9B%8A%E5%8F%91%E6%94%BE",
        children: "确保权益发放"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { iap } from '@kit.IAPKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\ndealPurchaseError(err: BusinessError) {\n  if (err.code === iap.IAPErrorCode.PRODUCT_OWNED || err.code === iap.IAPErrorCode.SYSTEM_ERROR) {\n    // 参见确保权益发放检查是否需要补发货，确保权益发放\n    // ...\n  }\n}\n"
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
472603(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
152117(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478929-5ba8562974c8fae8a90aaa1a467ceb9d.png");

},
195217(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
267683(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
651360(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
730099(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
710045(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
384656(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
567510(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
60865(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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