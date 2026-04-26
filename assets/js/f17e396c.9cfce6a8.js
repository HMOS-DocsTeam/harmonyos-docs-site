"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["237738"], {
653382(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_iap_api_iap_rest_iap_key_event_notifications_iap_key_event_notifications_md_f17_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-iap-api-iap-rest-iap-key-event-notifications-iap-key-event-notifications-md-f17.json
var site_docs_ref_iap_api_iap_rest_iap_key_event_notifications_iap_key_event_notifications_md_f17_namespaceObject = JSON.parse('{"id":"iap-api/iap-rest/iap-key-event-notifications/iap-key-event-notifications","title":"服务端关键事件通知","description":"如果接入了IAP Kit订单/订阅功能，建议在AppGallery Connect网站配置通知接收地址，用于接收IAP服务器发送的关键事件通知。IAP关键事件通知版本只支持v3。","source":"@site/docs-ref/iap-api/iap-rest/iap-key-event-notifications/iap-key-event-notifications.md","sourceDirName":"iap-api/iap-rest/iap-key-event-notifications","slug":"/iap-api/iap-rest/iap-key-event-notifications/iap-key-event-notifications","permalink":"/harmonyos-docs-site/ref/iap-api/iap-rest/iap-key-event-notifications/iap-key-event-notifications","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":15,"frontMatter":{"title":"服务端关键事件通知","sidebar_position":15,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/iap-key-event-notifications","kit":"应用服务","last_updated":"2026-04-22","slug":"iap-key-event-notifications"},"sidebar":"ref","previous":{"title":"生成优惠签名购买参数","permalink":"/harmonyos-docs-site/ref/iap-api/iap-rest/iap-server-subscribe-offer-sign/iap-server-subscribe-offer-sign"},"next":{"title":"接收退款申请事件通知","permalink":"/harmonyos-docs-site/ref/iap-api/iap-rest/iap-server-refund-notify-and-handle/iap-server-refund-receive-notify/iap-server-refund-receive-notify"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/iap-api/iap-rest/iap-key-event-notifications/iap-key-event-notifications.md


const frontMatter = {
	title: '服务端关键事件通知',
	sidebar_position: 15,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/iap-key-event-notifications',
	kit: '应用服务',
	last_updated: '2026-04-22',
	slug: 'iap-key-event-notifications'
};
const contentTitle = '服务端关键事件通知';

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
  "value": "关键事件通知处理建议",
  "id": "关键事件通知处理建议",
  "level": 2
}, {
  "value": "接口约束",
  "id": "接口约束",
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
  "value": "Request Body",
  "id": "request-body",
  "level": 3
}, {
  "value": "NotificationPayload",
  "id": "notificationpayload",
  "level": 3
}, {
  "value": "NotificationType",
  "id": "notificationtype",
  "level": 3
}, {
  "value": "NotificationSubtype",
  "id": "notificationsubtype",
  "level": 3
}, {
  "value": "NotificationMetaData",
  "id": "notificationmetadata",
  "level": 3
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
        id: "服务端关键事件通知",
        children: "服务端关键事件通知"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果接入了IAP Kit订单/订阅功能，建议在", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/service/josp/agc/index.html",
        children: "AppGallery Connect"
      }), "网站", (0,jsx_runtime.jsx)(_components.a, {
        href: "/iap-kit-guide/iap-preparations/iap-basic-preparation/iap-set-necessary-parameters#%E9%85%8D%E7%BD%AE%E8%AE%A2%E5%8D%95%E8%AE%A2%E9%98%85%E9%80%9A%E7%9F%A5%E6%8E%A5%E6%94%B6%E5%9C%B0%E5%9D%80",
        children: "配置通知接收地址"
      }), "，用于接收IAP服务器发送的关键事件通知。IAP关键事件通知版本只支持v3。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(905994)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "建议所有提供消耗型/非消耗型/自动续期订阅/非续期订阅商品的App均配置该通知接收地址，以便接收关键事件通知，为用户提供更好、更及时的服务。另外，通知接收地址必须基于HTTPS并且配置有商业域名机构颁发的证书。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能介绍",
      children: "功能介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["用户", (0,jsx_runtime.jsx)(_components.a, {
        href: "/iap-kit-guide/iap-purchases/iap-purchase/iap-integrate-purchase",
        children: "购买消耗型/非消耗型"
      }), "/", (0,jsx_runtime.jsx)(_components.a, {
        href: "/iap-kit-guide/iap-purchases/iap-subscription/iap-subscription-functions",
        children: "自动续期订阅"
      }), "/", (0,jsx_runtime.jsx)(_components.a, {
        href: "/iap-kit-guide/iap-purchases/iap-nonrenewable/iap-integrate-nonrenewable",
        children: "非续期订阅"
      }), "商品后，IAP服务器调用此接口向开发者服务器发送关键事件通知。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景描述",
      children: "场景描述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果在", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/service/josp/agc/index.html",
        children: "AppGallery Connect"
      }), "申请支付服务时提前", (0,jsx_runtime.jsx)(_components.a, {
        href: "/iap-kit-guide/iap-preparations/iap-basic-preparation/iap-set-necessary-parameters#%E9%85%8D%E7%BD%AE%E8%AE%A2%E5%8D%95%E8%AE%A2%E9%98%85%E9%80%9A%E7%9F%A5%E6%8E%A5%E6%94%B6%E5%9C%B0%E5%9D%80",
        children: "配置通知接收地址"
      }), "，并且通知版本设置为v3，用户购买消耗型/非消耗型/自动续期订阅/非续期订阅商品后，IAP服务器会在某些关键事件发生时调用此接口通知已配置的服务器。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "消耗型/非消耗型/非续期订阅商品主要涉及的场景如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支付成功。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "退款成功。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自动续期订阅商品主要涉及的场景如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户第一次订阅成功。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "已过期的订阅自动续期成功。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户主动恢复一个已过期的自动续期订阅商品。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户调整为相同等级的自动续期订阅商品，如果订阅商品的周期相同，则新订阅立即生效。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户调整为相同等级的自动续期订阅商品，如果订阅商品的周期不相同，则新订阅在下个续期日生效。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户调整为更高等级的自动续期订阅商品，则新订阅立即生效，原订阅的剩余金额将折算成新订阅的天数，延长新订阅的有效期。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户调整为更低等级的自动续期订阅商品，则新订阅在下个续期日生效"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户主动或者App取消一个自动续期订阅商品，已经收费的服务仍然有效，但是后续续期会停止。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "一个自动续期订阅商品成功续期。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "一个到期的自动续期订阅商品进入账号保留期。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "订阅的续期时间已延期。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若开发者服务器返回结果为非成功响应（请求返回的HTTP状态码不为200），IAP服务器将对本次关键事件的通知进行周期性重发。建议在收到通知后立即返回成功响应，避免通知消息堆积。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(520842)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为保证可靠性，系统具备补偿机制，所以可能出现重发的通知比预期的多。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "沙盒测试场景下通知失败不会进行重发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "关键事件通知处理建议",
      children: "关键事件通知处理建议"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "开发者服务器收到IAP服务器的关键事件通知（下文简称事件通知）时，建议根据通知内容中的购买Token，请求IAP服务器校验购买Token获取当前购买Token关联订单/订阅的最新状态，并根据订单/订阅最新状态决定是否需要提供商品服务。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "事件通知仅作为订单/订阅状态发生变化的一个事件通知，由于网络延迟等导致服务器收到通知事件有延迟，通知中携带的信息可能与IAP服务器的最新的状态不一致，建议不要根据事件通知来决定是否提供商品服务。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "收到DID_NEW_TRANSACTION通知类型后，建议根据如下通知处理流程进行业务逻辑处理，提供商品服务。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "关键事件通知处理流程建议如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(211206)/* ["default"] */.A) + "",
        width: "459",
        height: "483"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "IAP服务器发送订单/订阅关键事件通知。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用服务器收到通知请求后，从通知中获取购买Token。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用IAP服务器提供的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/iap-api/iap-rest/iap-query-order-status/iap-query-order-status",
          children: "订单状态查询"
        }), "/", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/iap-api/iap-rest/iap-query-subscription-status/iap-query-subscription-status",
          children: "订阅状态查询"
        }), "接口，查询购买数据及其签名数据。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "IAP服务器返回购买数据及其签名数据。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["校验订单/订阅状态提供商品服务。消耗型/非消耗型/非续期订阅商品请根据", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/iap-api/iap-rest/iap-query-order-status/iap-query-order-status",
          children: "订单状态查询"
        }), "接口获取消耗型/非消耗型/非续期订阅的订单最新状态，再根据订单状态调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/iap-api/iap-rest/iap-confirm-purchase-for-order/iap-confirm-purchase-for-order",
          children: "订单确认发货"
        }), "接口执行发货操作。自动续期订阅商品请根据", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/iap-api/iap-rest/iap-query-subscription-status/iap-query-subscription-status",
          children: "订阅状态查询"
        }), "接口响应经JWS解码之后SubGroupStatusPayload中的status字段决定是否发货。若status为1，则调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/iap-api/iap-rest/iap-confirm-purchase-for-sub/iap-confirm-purchase-for-sub",
          children: "订阅确认发货"
        }), "接口执行发货操作。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用服务器返回通知响应给IAP服务器。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口约束",
      children: "接口约束"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不允许开发者服务器设置IP允许清单用于限制华为侧的出口IP地址。IP允许清单本身并不能提高安全性且会给业务发展带来约束，在消息层面已有更安全的JWS签名机制条件下，没有存在价值。不遵守该约定而导致的后果将由开发者自行承担。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["必须在开发前在", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/service/josp/agc/index.html",
        children: "AppGallery Connect"
      }), "中配置开发者服务器的回调地址，地址必须支持HTTPS协议且具有合法商用证书，出于安全考虑，cipher需要支持ECDHE-RSA-AES128-GCM-SHA256、ECDHE-ECDSA-AES128-GCM-SHA256、ECDHE-RSA-AES256-GCM-SHA384或ECDHE-ECDSA-AES256-GCM-SHA384中至少一种，否则无法正常接收通知消息。"]
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
          }), " HTTPS POST"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "接口方向："
            })
          }), " IAP服务器 -> 开发者服务器"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "接口URL："
            })
          }), " URL由开发者在申请支付服务时配置"]
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "request-body",
      children: "Request Body"
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
            children: "jwsNotification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通知内容信息，对通知内容NotificationPayload签名后的字符串。具体请参见表", (0,jsx_runtime.jsx)(_components.a, {
              href: "#notificationpayload",
              children: "NotificationPayload"
            }), "。  需要参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/iap-api/iap-rest/iap-verifying-signature/iap-verifying-signature",
              children: "对返回结果验签"
            }), "使用JWS签名方式对NotificationPayload消息体进行验签。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "notificationpayload",
      children: "NotificationPayload"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "notificationType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通知主类型，具体请参见表", (0,jsx_runtime.jsx)(_components.a, {
              href: "#notificationtype",
              children: "NotificationType"
            }), "说明。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "notificationSubtype"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通知子类型，具体请参见表", (0,jsx_runtime.jsx)(_components.a, {
              href: "#notificationsubtype",
              children: "NotificationSubtype"
            }), "说明。后续子类型会增加，开发者需要设计相应的处理机制。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "notificationRequestId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通知唯一请求ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "notificationMetaData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通知元数据，具体请参见表", (0,jsx_runtime.jsx)(_components.a, {
              href: "#notificationmetadata",
              children: "NotificationMetaData"
            }), "说明。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "notificationVersion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通知版本：v3。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "signedTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Long"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通知签名时间，UTC时间戳，以毫秒为单位。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "notificationtype",
      children: "NotificationType"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "取值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "取值说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DID_NEW_TRANSACTION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "订单已购买/订阅已购买/订阅续订成功。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DID_CHANGE_RENEWAL_STATUS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "订阅状态发生改变。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "REVOKE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "订单退款/撤销订阅。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RENEWAL_TIME_MODIFIED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "订阅过期时间调整。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EXPIRE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "订阅已过期。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TEST"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["测试服务端通知，仅开发者调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/iap-api/iap-rest/iap-server-notifications-test/iap-server-notifications-test",
              children: "测试服务端通知"
            }), "接口才会发送此类型通知。  此场景下无notificationSubtype。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "notificationsubtype",
      children: "NotificationSubtype"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "取值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "取值说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INITIAL_BUY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "消耗型/非消耗型/非续期订阅商品购买成功。  自动续期订阅商品的第一次购买成功。  使用主类型：DID_NEW_TRANSACTION"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DID_RENEW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "续期成功。  使用主类型：DID_NEW_TRANSACTION"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RESTORE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户主动恢复了一个订阅型商品，续期恢复正常。  使用主类型：DID_NEW_TRANSACTION"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUTO_RENEW_ENABLED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自动续期功能开启。  使用主类型：DID_CHANGE_RENEWAL_STATUS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUTO_RENEW_DISABLED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自动续期功能关闭。  使用主类型：DID_CHANGE_RENEWAL_STATUS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DOWNGRADE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户调整自动续期订阅商品降级或跨级且在下个续订生效。  使用主类型：DID_CHANGE_RENEWAL_STATUS或DID_NEW_TRANSACTION"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UPGRADE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户调整自动续期订阅商品升级或跨级且立即生效。  使用主类型：DID_NEW_TRANSACTION"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "REFUND_TRANSACTION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "消耗型/非消耗型/非续期订阅商品订单退款成功。  自动续期订阅商品订单退款成功。  使用主类型：REVOKE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BILLING_RETRY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个到期的自动续期订阅商品进入账号保留期。  使用主类型：EXPIRE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PRICE_INCREASE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户同意了涨价。  使用主类型：DID_CHANGE_RENEWAL_STATUS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BILLING_RECOVERY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "订阅重试扣费成功。  使用主类型：DID_NEW_TRANSACTION"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VOLUNTARY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "主动退订后订阅过期。  使用主类型：EXPIRE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PRODUCT_NOT_FOR_SALE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "商品不存在。  使用主类型：EXPIRE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "APPLICATION_DELETE_SUBSCRIPTION_HOSTING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "撤销订阅成功，订阅权益会立即取消。  使用主类型：REVOKE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RENEWAL_EXTENDED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "延迟订阅续订日期成功，订阅的下一个续订日期将推迟。  使用主类型：RENEWAL_TIME_MODIFIED"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "notificationmetadata",
      children: "NotificationMetaData"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "environment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "环境类型。  - NORMAL：正式环境  - SANDBOX：沙盒环境"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "applicationId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用Id。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "packageName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用包名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "商品类型。  0：消耗型商品  1：非消耗型商品  2：自动续期订阅商品  3：非续期订阅商品"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "currentProductId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "最近一个有效订阅的商品ID。仅自动续期订阅商品场景下存在值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "subGroupId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "订阅组ID。仅自动续期订阅商品场景下存在值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "subGroupGenerationId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["订阅组的代ID。  - 用户切换订阅商品时，此ID不会改变。  - 订阅失效且超出", (0,jsx_runtime.jsx)(_components.a, {
              href: "/iap-kit-guide/iap-purchases/iap-subscription/iap-subscription-functions#%E4%BF%9D%E7%95%99%E6%9C%9F",
              children: "保留期"
            }), "后，用户重新购买商品时，此ID会改变。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "subscriptionId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["商品的订阅ID。以下场景，此ID会发生改变：  - 用户切换订阅商品时。  - 订阅失效且超出", (0,jsx_runtime.jsx)(_components.a, {
              href: "/iap-kit-guide/iap-purchases/iap-subscription/iap-subscription-functions#%E4%BF%9D%E7%95%99%E6%9C%9F",
              children: "保留期"
            }), "后，用户重新购买商品时。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "purchaseToken"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "商品的购买Token，发起购买和查询订阅信息均会返回。最大长度256。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "purchaseOrderId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "具体一笔订单中对应的购买订单号。当NotificationType为DID_CHANGE_RENEWAL_STATUS且NotificationSubtype为DOWNGRADE时不返回purchaseOrderId。  最大长度256。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "请求示例",
      children: "请求示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "POST /notify/address\nContent-Type: application/json;charset=UTF-8\nAccept: application/json\n{\n  \"jwsNotification\": \"***\"\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NotificationPayload样例（消耗型/非消耗型）"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"notificationType\": \"DID_NEW_TRANSACTION\",\n  \"notificationSubtype\": \"INITIAL_BUY\",\n  \"notificationRequestId\": \"7f67e39aa72d1a55f36293047f9769c0aa47a467ffb110eaeeeb888def9f9713\",\n  \"notificationMetaData\": {\n    \"environment\": \"NORMAL\",\n    \"applicationId\": \"***\",\n    \"packageName\": \"***\",\n    \"type\": 0,\n    \"purchaseToken\": \"***.*.***\",\n    \"purchaseOrderId\": \"***.***\"\n  },\n  \"notificationVersion\": \"v3\",\n  \"signedTime\": 1702607152698\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NotificationPayload样例（非续期订阅商品）"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"notificationType\": \"DID_NEW_TRANSACTION\",\n  \"notificationSubtype\": \"INITIAL_BUY\",\n  \"notificationRequestId\": \"7f67e39aa72d1a55f36293047f9769c0aa47a467ffb110eaeeeb888def9f9713\",\n  \"notificationMetaData\": {\n    \"environment\": \"NORMAL\",\n    \"applicationId\": \"***\",\n    \"packageName\": \"***\",\n    \"type\": 3,\n    \"purchaseToken\": \"***.*.***\",\n    \"purchaseOrderId\": \"***.***\"\n  },\n  \"notificationVersion\": \"v3\",\n  \"signedTime\": 1702607152698\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NotificationPayload样例（自动续期订阅商品）"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"notificationType\": \"DID_NEW_TRANSACTION\",\n  \"notificationSubtype\": \"INITIAL_BUY\",\n  \"notificationRequestId\": \"6d5882d55c8e5136f2348b8e13b4aaad6d0938898b7e5efdc13f7c7130286f8c\",\n  \"notificationMetaData\": {\n    \"environment\": \"NORMAL\",\n    \"applicationId\": \"***\",\n    \"packageName\": \"***\",\n    \"type\": 2,\n    \"currentProductId\": \"1701072721154732\",\n    \"subGroupId\": \"1701072721154732\",\n    \"subGroupGenerationId\": \"f7967e2439769fbb3c155a50d2cdd6a8cc8f7750cac7bf78b6f5d65c97c34deb\",\n    \"subscriptionId\": \"1701072722814.ADE66B39.4732\",\n    \"purchaseToken\": \"***.*.***\",\n    \"purchaseOrderId\": \"***.***\"\n  },\n  \"notificationVersion\": \"v3\",\n  \"signedTime\": 1701072726860\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "响应参数",
      children: "响应参数"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过HTTP状态码来标识IAP服务器通知开发者服务器是否发送成功："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果通知发送成功，则发送HTTP 200，不需要返回响应体。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果通知发送失败，则通过发送HTTP 40X或者HTTP 50X，告知IAP服务器进行重试，IAP服务器会在一段时间内重试多次。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "响应示例",
      children: "响应示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "HTTP/1.2 200 OK\n"
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
211206(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552801250-64a8da5b9a731c220bfb7da0d77e7dcc.png");

},
520842(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
905994(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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