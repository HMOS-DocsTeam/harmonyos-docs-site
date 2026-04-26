"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["901538"], {
153959(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_iap_api_iap_rest_iap_query_subscription_status_iap_query_subscription_status_md_979_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-iap-api-iap-rest-iap-query-subscription-status-iap-query-subscription-status-md-979.json
var site_docs_ref_iap_api_iap_rest_iap_query_subscription_status_iap_query_subscription_status_md_979_namespaceObject = JSON.parse('{"id":"iap-api/iap-rest/iap-query-subscription-status/iap-query-subscription-status","title":"订阅状态查询","description":"功能介绍","source":"@site/docs-ref/iap-api/iap-rest/iap-query-subscription-status/iap-query-subscription-status.md","sourceDirName":"iap-api/iap-rest/iap-query-subscription-status","slug":"/iap-api/iap-rest/iap-query-subscription-status/iap-query-subscription-status","permalink":"/harmonyos-docs-site/ref/iap-api/iap-rest/iap-query-subscription-status/iap-query-subscription-status","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"订阅状态查询","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/iap-query-subscription-status","kit":"应用服务","last_updated":"2026-04-22","slug":"iap-query-subscription-status"},"sidebar":"ref","previous":{"title":"应用购买记录相关支付订单查询","permalink":"/harmonyos-docs-site/ref/iap-api/iap-rest/iap-order-query/iap-order-query"},"next":{"title":"订阅确认发货","permalink":"/harmonyos-docs-site/ref/iap-api/iap-rest/iap-confirm-purchase-for-sub/iap-confirm-purchase-for-sub"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/iap-api/iap-rest/iap-query-subscription-status/iap-query-subscription-status.md


const frontMatter = {
	title: '订阅状态查询',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/iap-query-subscription-status',
	kit: '应用服务',
	last_updated: '2026-04-22',
	slug: 'iap-query-subscription-status'
};
const contentTitle = '订阅状态查询';

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
  "value": "Request Header",
  "id": "request-header",
  "level": 3
}, {
  "value": "Request Body",
  "id": "request-body",
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
  "value": "Response Header",
  "id": "response-header",
  "level": 3
}, {
  "value": "Response Body",
  "id": "response-body",
  "level": 3
}, {
  "value": "SubGroupStatusPayload",
  "id": "subgroupstatuspayload",
  "level": 3
}, {
  "value": "SubscriptionStatus",
  "id": "subscriptionstatus",
  "level": 3
}, {
  "value": "SubRenewalInfo",
  "id": "subrenewalinfo",
  "level": 3
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
        id: "订阅状态查询",
        children: "订阅状态查询"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能介绍",
      children: "功能介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此接口用于查询自动续期订阅商品的最新状态。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景描述",
      children: "场景描述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者服务器收到IAP服务端关键事件通知后，调用该接口获取订阅最新状态。"
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
          }), " 开发者服务器 -> IAP服务器"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "接口URL："
            })
          }), " {rootUrl}/subscription/harmony/v1/application/subscription/status/query"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["说明：rootUrl具体请参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-rest/iap-rest-common-statement/iap-rest-common-statement#%E7%AB%99%E7%82%B9%E4%BF%A1%E6%81%AF",
            children: "站点信息"
          }), "。"]
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
      id: "request-header",
      children: "Request Header"
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
            children: "取值为：application/json;charset=UTF-8"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Authorization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["认证信息，使用JWT进行鉴权，具体请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/iap-api/iap-rest/iap-jwt-description/iap-jwt-description#authorization%E8%AF%B4%E6%98%8E",
              children: "Authorization说明"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "request-body",
      children: "Request Body"
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
            children: "purchaseOrderId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "具体一笔订单中对应的购买订单号ID。最大长度256。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "purchaseToken"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "商品的购买Token，发起购买和查询订单信息均会返回。最大长度256。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "请求示例",
      children: "请求示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["更多语言及详细的代码示例，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/HarmonyOS_Samples/iapkit-sample-serverdemo",
        children: "IAP Kit-Sample-ServerDemo"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "POST /subscription/harmony/v1/application/subscription/status/query\nContent-Type: application/json;charset=UTF-8\nAuthorization: Bearer ***.***.***\nAccept: application/json\n{\n  \"purchaseToken\": \"***.*.***\",\n  \"purchaseOrderId\": \"***.***\"\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "响应参数",
      children: "响应参数"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "response-header",
      children: "Response Header"
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
            children: "取值为：application/json;charset=UTF-8"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "response-body",
      children: "Response Body"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "responseCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回码。  0：成功。  其他：失败，具体请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/iap-api/iap-rest/iap-server-error-code/iap-server-error-code",
              children: "错误码"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "responseMessage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "响应描述。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "jwsSubGroupStatus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["包含已购订阅相关状态信息的JWS格式数据。可参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/iap-api/iap-rest/iap-verifying-signature/iap-verifying-signature",
              children: "对返回结果验签"
            }), "解码验签获取相关订阅状态信息的JSON字符串，其包含的参数请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#subgroupstatuspayload",
              children: "SubGroupStatusPayload"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "subgroupstatuspayload",
      children: "SubGroupStatusPayload"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
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
            children: "环境类型。  - NORMAL：生产环境  - SANDBOX：沙盒环境"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "applicationId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用ID。"
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
            children: "subGroupId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "订阅组ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "lastSubscriptionStatus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["订阅组中最后生效的订阅状态", (0,jsx_runtime.jsx)(_components.a, {
              href: "#subscriptionstatus",
              children: "SubscriptionStatus"
            }), "，比如A切换B，B切换C，此处是C的订阅状态。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "historySubscriptionStatusList"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "List<Object>"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["订阅组最近生效的历史订阅状态", (0,jsx_runtime.jsx)(_components.a, {
              href: "#subscriptionstatus",
              children: "SubscriptionStatus"
            }), "的列表，按订阅切换时间升序 ，最多包含10条有效订阅状态信息的记录 。  比如A切换B，B切换C，这里包含A，B，C三个订阅状态信息。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "subscriptionstatus",
      children: "SubscriptionStatus"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "subGroupGenerationId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
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
            children: "是"
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
            children: "购买token，在购买消耗型/非消耗型/非续期订阅商品场景中与具体购买订单一一对应，在订阅型商品场景中与订阅ID一一对应。最大长度256。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "status"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "订阅状态。  1：生效状态  2：已到期  3：尝试扣费  5：撤销"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "expiresTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Long"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自动续期订阅商品的过期时间，UTC时间戳，以毫秒为单位。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "lastPurchaseOrder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["当前订阅最新的一笔购买订单。包含的参数请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/iap-api/iap-rest/iap-server-data-model/iap-server-data-model#purchaseorderpayload",
              children: "PurchaseOrderPayload"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "recentPurchaseOrderList"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "List<Object>"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["当前订阅最新的购买订单列表，包含续期、折算、延期等产生的购买订单。购买订单包含的参数请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/iap-api/iap-rest/iap-server-data-model/iap-server-data-model#purchaseorderpayload",
              children: "PurchaseOrderPayload"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "renewalInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["当前订阅最新的未来扣费计划，包含的参数请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#subrenewalinfo",
              children: "SubRenewalInfo"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "subrenewalinfo",
      children: "SubRenewalInfo"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
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
            children: "环境类型。  - NORMAL：生产环境  - SANDBOX：沙盒环境"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "subGroupGenerationId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
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
            children: "nextRenewPeriodProductId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下一个计费周期续订的商品ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "productId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前生效的商品ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "autoRenewStatusCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自动续期状态。  0：关闭  1：打开"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hasInBillingRetryPeriod"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统是否还在尝试扣费。  - true：是  - false：否"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "priceIncreaseStatusCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "目前涨价状态码。  1：用户暂未同意涨价  2：用户已同意涨价"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "offerTypeCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "优惠类型。  1：推介促销  2：优惠促销  4：挽留促销"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "offerId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "优惠ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "renewalPrice"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Long"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下期续费价格，单位：分，取消订阅场景下不返回。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "currency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["币种，请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://www.iso.org/iso-4217-currency-codes.html",
              children: "ISO 4217"
            }), "标准。例如CNY、USD、MYR。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "renewalTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Long"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "续期时间，UTC时间戳，以毫秒为单位。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "expirationIntent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "订阅续期失败的原因。  1：用户取消  2：商品无效  3：签约无效  4：扣费异常  5：用户不同意涨价  6：未知  7：存在未发货的订阅"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "响应示例",
      children: "响应示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "HTTP/1.2 200 OK\nContent-Type: application/json;charset=UTF-8\n{\n  \"responseCode\": \"0\",\n  \"jwsSubGroupStatus\": \"***\"\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "#subgroupstatuspayload",
        children: "SubGroupStatusPayload"
      }), "结构体示例："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n    \"environment\": \"NORMAL\",\n    \"applicationId\": \"10***58\",\n    \"packageName\": \"demoApp\",\n    \"subGroupId\": \"demoSubGroup\",\n    \"lastSubscriptionStatus\": {\n        \"subGroupGenerationId\": \"c0e5f80732852b92f7111b8b9ed4fbb************c842ea854dfa2da67ab9e\",\n        \"subscriptionId\": \"*************.********.****\",\n        \"purchaseToken\": \"***.*.***\",\n        \"status\": \"5\",\n        \"expiresTime\": 1721716039363,\n        \"lastPurchaseOrder\": {\n            \"subGroupGenerationId\": \"c0e5f80732852b92f7111b8b9ed4fbb************c842ea854dfa2da67ab9e\",\n            \"purchaseOrderId\": \"*************.********.****\",\n            \"subscriptionId\": \"*************.********.****\",\n            \"purchaseToken\": \"***.*.***\",\n            \"applicationId\": \"10***58\",\n            \"productId\": \"demoProduct\",\n            \"subGroupId\": \"demoSubGroup\",\n            \"purchaseTime\": 1721082441000,\n            \"duration\": \"P1W\",\n            \"durationTypeCode\": \"0\",\n            \"productType\": \"2\",\n            \"developerPayload\": \"demoPayload\",\n            \"signedTime\": 1721111398533,\n            \"purchaseOrderRevocationReasonCode\": \"1\",\n            \"revocationTime\": 1721111240720,\n            \"offerTypeCode\": \"1\",\n            \"offerId\": \"12**56\",\n            \"environment\": \"NORMAL\",\n            \"countryCode\": \"CN\",\n            \"price\": 880,\n            \"currency\": \"SGD\",\n            \"finishStatus\": \"1\"\n        },\n        \"recentPurchaseOrderList\": [\n            {\n                \"subGroupGenerationId\": \"c0e5f80732852b92f7111b8b9ed4fbb************c842ea854dfa2da67ab9e\",\n                \"purchaseOrderId\": \"*************.********.****\",\n                \"subscriptionId\": \"*************.********.****\",\n                \"purchaseToken\": \"***.*.***\",\n                \"applicationId\": \"10***58\",\n                \"productId\": \"demoProduct\",\n                \"subGroupId\": \"demoSubGroup\",\n                \"purchaseTime\": 1721082441000,\n                \"duration\": \"P1W\",\n                \"durationTypeCode\": \"0\",\n                \"productType\": \"2\",\n                \"developerPayload\": \"demoPayload\",\n                \"signedTime\": 1721111398533,\n                \"purchaseOrderRevocationReasonCode\": \"1\",\n                \"revocationTime\": 1721111240720,\n                \"offerTypeCode\": \"1\",\n                \"offerId\": \"12**56\",\n                \"environment\": \"NORMAL\",\n                \"countryCode\": \"CN\",\n                \"price\": 880,\n                \"currency\": \"SGD\",\n                \"finishStatus\": \"1\"\n            }\n        ],\n        \"renewalInfo\": {\n            \"subGroupGenerationId\": \"c0e5f80732852b92f7111b8b9ed4fbb************c842ea854dfa2da67ab9e\",\n            \"productId\": \"demoProduct\",\n            \"autoRenewStatusCode\": \"0\",\n            \"hasInBillingRetryPeriod\": false,\n            \"environment\": \"NORMAL\"\n        }\n    },\n    \"historySubscriptionStatusList\": [\n        {\n            \"subGroupGenerationId\": \"c0e5f80732852b92f7111b8b9ed4fbb************c842ea854dfa2da67ab9e\",\n            \"subscriptionId\": \"*************.********.****\",\n            \"purchaseToken\": \"***.*.***\",\n            \"status\": \"5\",\n            \"expiresTime\": 1721716039363,\n            \"lastPurchaseOrder\": {\n                \"subGroupGenerationId\": \"c0e5f80732852b92f7111b8b9ed4fbb************c842ea854dfa2da67ab9e\",\n                \"purchaseOrderId\": \"*************.********.****\",\n                \"subscriptionId\": \"*************.********.****\",\n                \"purchaseToken\": \"***.*.***\",\n                \"applicationId\": \"10***58\",\n                \"productId\": \"demoProduct\",\n                \"subGroupId\": \"demoSubGroup\",\n                \"purchaseTime\": 1721082441000,\n                \"duration\": \"P1W\",\n                \"durationTypeCode\": \"0\",\n                \"productType\": \"2\",\n                \"developerPayload\": \"demoPayload\",\n                \"signedTime\": 1721111398533,\n                \"purchaseOrderRevocationReasonCode\": \"1\",\n                \"revocationTime\": 1721111240720,\n                \"offerTypeCode\": \"1\",\n                \"offerId\": \"12**56\",\n                \"environment\": \"NORMAL\",\n                \"countryCode\": \"CN\",\n                \"price\": 880,\n                \"currency\": \"SGD\",\n                \"finishStatus\": \"1\"\n            },\n            \"recentPurchaseOrderList\": [\n                {\n                    \"subGroupGenerationId\": \"c0e5f80732852b92f7111b8b9ed4fbb************c842ea854dfa2da67ab9e\",\n                    \"purchaseOrderId\": \"*************.********.****\",\n                    \"subscriptionId\": \"*************.********.****\",\n                    \"purchaseToken\": \"***.*.***\",\n                    \"applicationId\": \"10***58\",\n                    \"productId\": \"demoProduct\",\n                    \"subGroupId\": \"demoSubGroup\",\n                    \"purchaseTime\": 1721082441000,\n                    \"duration\": \"P1W\",\n                    \"durationTypeCode\": \"0\",\n                    \"productType\": \"2\",\n                    \"developerPayload\": \"demoPayload\",\n                    \"signedTime\": 1721111398533,\n                    \"purchaseOrderRevocationReasonCode\": \"1\",\n                    \"revocationTime\": 1721111240720,\n                    \"offerTypeCode\": \"1\",\n                    \"offerId\": \"12**56\",\n                    \"environment\": \"NORMAL\",\n                    \"countryCode\": \"CN\",\n                    \"price\": 880,\n                    \"currency\": \"SGD\",\n                    \"finishStatus\": \"1\"\n                }\n            ],\n            \"renewalInfo\": {\n                \"subGroupGenerationId\": \"c0e5f80732852b92f7111b8b9ed4fbb************c842ea854dfa2da67ab9e\",\n                \"productId\": \"demoProduct\",\n                \"autoRenewStatusCode\": \"0\",\n                \"hasInBillingRetryPeriod\": false,\n                \"environment\": \"NORMAL\"\n            }\n        }\n    ]\n}\n"
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