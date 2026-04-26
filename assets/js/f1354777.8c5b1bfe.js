"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["134442"], {
118823(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_push_api_push_rest_api_push_api_service_timeline_push_api_service_timeline_param_push_api_service_timeline_param_md_f13_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-push-api-push-rest-api-push-api-service-timeline-push-api-service-timeline-param-push-api-service-timeline-param-md-f13.json
var site_docs_ref_push_api_push_rest_api_push_api_service_timeline_push_api_service_timeline_param_push_api_service_timeline_param_md_f13_namespaceObject = JSON.parse('{"id":"push-api/push-rest-api/push-api-service-timeline/push-api-service-timeline-param/push-api-service-timeline-param","title":"服务动态参数说明","description":"服务动态发送场景说明","source":"@site/docs-ref/push-api/push-rest-api/push-api-service-timeline/push-api-service-timeline-param/push-api-service-timeline-param.md","sourceDirName":"push-api/push-rest-api/push-api-service-timeline/push-api-service-timeline-param","slug":"/push-api/push-rest-api/push-api-service-timeline/push-api-service-timeline-param/push-api-service-timeline-param","permalink":"/harmonyos-docs-site/ref/push-api/push-rest-api/push-api-service-timeline/push-api-service-timeline-param/push-api-service-timeline-param","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"服务动态参数说明","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/push-api-service-timeline-param","kit":"应用服务","last_updated":"2026-04-22","slug":"push-api-service-timeline-param"},"sidebar":"ref","previous":{"title":"服务动态推送接口","permalink":"/harmonyos-docs-site/ref/push-api/push-rest-api/push-api-service-timeline/push-api-service-timeline-send/push-api-service-timeline-send"},"next":{"title":"bookParser（书籍解析能力）","permalink":"/harmonyos-docs-site/ref/reader-api/reader-arkts/reader-book-parser/reader-book-parser"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/push-api/push-rest-api/push-api-service-timeline/push-api-service-timeline-param/push-api-service-timeline-param.md


const frontMatter = {
	title: '服务动态参数说明',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/push-api-service-timeline-param',
	kit: '应用服务',
	last_updated: '2026-04-22',
	slug: 'push-api-service-timeline-param'
};
const contentTitle = '服务动态参数说明';

const assets = {

};



const toc = [{
  "value": "服务动态发送场景说明",
  "id": "服务动态发送场景说明",
  "level": 2
}, {
  "value": "外卖自取结构体说明",
  "id": "外卖自取结构体说明",
  "level": 2
}, {
  "value": "TimelineStatusContent全量参数定义",
  "id": "timelinestatuscontent全量参数定义",
  "level": 3
}, {
  "value": "指定状态下发送服务动态参数要求",
  "id": "指定状态下发送服务动态参数要求",
  "level": 3
}, {
  "value": "外卖配送结构体说明",
  "id": "外卖配送结构体说明",
  "level": 2
}, {
  "value": "TimelineStatusContent全量参数定义",
  "id": "timelinestatuscontent全量参数定义-1",
  "level": 3
}, {
  "value": "指定状态下发送服务动态参数要求",
  "id": "指定状态下发送服务动态参数要求-1",
  "level": 3
}, {
  "value": "公共参数结构体说明",
  "id": "公共参数结构体说明",
  "level": 2
}, {
  "value": "ClickAction",
  "id": "clickaction",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
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
        id: "服务动态参数说明",
        children: "服务动态参数说明"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "服务动态发送场景说明",
      children: "服务动态发送场景说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "场景名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "场景标识（sceneId）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "子场景名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "子场景标识（subSceneId）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "备注"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "外卖"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "外卖自取"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100010001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "外卖自取场景、子场景。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "外卖"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "外卖配送"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100010002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "外卖配送场景、子场景。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "外卖自取结构体说明",
      children: "外卖自取结构体说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "timelinestatuscontent全量参数定义",
      children: "TimelineStatusContent全量参数定义"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "status"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["服务动态指定场景下指定子场景状态。例如：发送", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "外卖"
              })
            }), "场景下", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "外卖自取"
              })
            }), "子场景“待支付”状态，则status=1。详细参数取值参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E6%8C%87%E5%AE%9A%E7%8A%B6%E6%80%81%E4%B8%8B%E5%8F%91%E9%80%81%E6%9C%8D%E5%8A%A1%E5%8A%A8%E6%80%81%E5%8F%82%E6%95%B0%E8%A6%81%E6%B1%82",
              children: "指定状态下发送服务动态参数要求"
            }), "。  取值如下：  1：待支付  2：下单成功  3：制作中  4：制作完成  5：订单完成  6：订单已取消  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  根据不同状态必传参数、选填参数发送请求。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "orderTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Long"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下单时间，精确到s级时间戳。示例：1716867321"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "amount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "金额，商家提供含货币单位金额。最大长度16。示例：￥20.00"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "productCount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "商品数量。范围为[0, 2147483647]，即非负值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "productName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "商品名称。最大长度256。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "productImg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["图片SKUId，商家图片托管分配的资源唯一标识。需要通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/atomic-guides/push-as-timeline#section592010820304",
              children: "申请权益"
            }), "提供图片获取SKUId。最大长度128。示例：Image_001  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  如需更换或者新增图片，需要通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/atomic-guides/push-as-timeline#section19921168203013",
              children: "申请图片资源托管"
            }), "提供图片重新获取SKUId。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "merchantName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "商家名称。最大长度256。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "paymentEndTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支付截止时间。最大长度32。示例：请在17:15前支付"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "remainOrders"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "待制作订单数。最大长度16。示例：3单/共5杯"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pickupNumber"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取餐号。最大长度16。示例：1234"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pickupTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "预计取餐时间。最大长度32。示例：14:00"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "waitTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "预计等待时间。最大长度16。示例：20-30分钟"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cancelTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Long"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消时间，精确到s级时间戳。示例：1716867321"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cancelReason"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消原因，最大长度256。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "clickAction"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#clickaction",
              children: "ClickAction"
            }), " Object"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["卡片点击事件，详情请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#clickaction",
              children: "ClickAction"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "button"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#clickaction",
              children: "ClickAction"
            }), " Object"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["卡片按钮点击事件，详情请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#clickaction",
              children: "ClickAction"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "appendButtons"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array [", (0,jsx_runtime.jsx)(_components.a, {
              href: "#clickaction",
              children: "ClickAction"
            }), "]"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["留存页按钮点击事件列表，详情请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#clickaction",
              children: "ClickAction"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "指定状态下发送服务动态参数要求",
      children: "指定状态下发送服务动态参数要求"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "状态"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "状态描述"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "状态节点类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填字段"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选字段"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "备注"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "待支付"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "起始节点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "status  paymentEndTime  amount  productImg  productCount  productName  merchantName  orderTime  clickAction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "button  appendButtons"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "服务动态消息推送必须以状态节点类型为“起始节点”状态开始推送。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下单成功"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "起始节点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "status  pickupTime  amount  productName  merchantName  productImg  productCount  orderTime  clickAction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pickupNumber  button  appendButtons"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "服务动态消息推送必须以状态节点类型为“起始节点”状态开始推送。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "制作中"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "过程节点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "status  pickupNumber  amount  productName  merchantName  productImg  productCount  orderTime  clickAction  remainOrders"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "button  appendButtons  waitTime  pickupTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "制作完成"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "过程节点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "status  pickupNumber  amount  productName  merchantName  productImg  productCount  orderTime  clickAction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "button  appendButtons"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "订单完成"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "结束节点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "status  amount  productName  merchantName  productImg  productCount  orderTime  clickAction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pickupNumber  button  appendButtons"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "服务动态结束态，订单完成后必须推送该结束状态信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "订单已取消"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "结束节点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "status  amount  productName  merchantName  productImg  productCount  orderTime  cancelReason  cancelTime  clickAction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "button  appendButtons"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "服务动态结束态，订单取消后必须推送该结束状态信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "外卖配送结构体说明",
      children: "外卖配送结构体说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "timelinestatuscontent全量参数定义-1",
      children: "TimelineStatusContent全量参数定义"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "status"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["服务动态指定场景下指定子场景状态。例如：发送", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "外卖"
              })
            }), "场景下", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "外卖配送"
              })
            }), "子场景“制作中”状态，则status=3。详细参数取值参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E6%8C%87%E5%AE%9A%E7%8A%B6%E6%80%81%E4%B8%8B%E5%8F%91%E9%80%81%E6%9C%8D%E5%8A%A1%E5%8A%A8%E6%80%81%E5%8F%82%E6%95%B0%E8%A6%81%E6%B1%82-1",
              children: "指定状态下发送服务动态参数要求"
            }), "。  取值如下：  1：待支付  2：下单成功  3：制作中  4：制作完成  5：骑手已接单  6：骑手正在赶往商家  7：骑手已到店  8：正在配送  9：已送达  10：订单完成  11：订单已取消  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  根据不同状态必传参数、选填参数发送请求。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "amount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "金额。最大长度16。示例：￥20.00"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "paymentEndTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支付截止时间。最大长度32。示例：请在17:15前支付"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "productImg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["图片SKUId，商家图片托管分配的资源唯一标识。需要通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/atomic-guides/push-as-timeline#section592010820304",
              children: "申请权益"
            }), "提供图片获取SKUId。最大长度128。示例：Image_001  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  如需更换或者新增图片，需要通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/atomic-guides/push-as-timeline#section19921168203013",
              children: "申请图片资源托管"
            }), "提供图片重新获取SKUId。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "productCount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "商品数量。范围为[0, 2147483647]，即非负值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "productName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "商品名称。最大长度256。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "merchantName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "商家名称。最大长度256。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "customerAddress"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配送地址。最大长度256。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "orderTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Long"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下单时间，精确到s级时间戳。示例：1716867321"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "deliveryTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "预计送达时间。最大长度32。示例：18:10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "waitTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "预计等待时间。最大长度16。示例：20-30分钟"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "realDeliveryTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Long"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "实际送达时间，精确到s级时间戳。示例：1716867321"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "remainOrders"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "待制作订单数。最大长度16。示例：3单/共5杯"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cancelReason"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消原因。最大长度256。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cancelTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Long"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消时间，精确到s级时间戳。示例：1716867321"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "riderName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "骑手名称。最大长度16。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "riderReceiveTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Long"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "骑手接单时间，精确到s级时间戳。示例：1716867321"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "riderPickupTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Long"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "骑手取货时间，精确到s级时间戳。示例：1716867321"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "takeawayCabinet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "外卖柜。最大长度256。示例：1号外卖柜2号格子"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pickupNumber"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取餐号。最大长度16。示例：1234"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "clickAction"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#clickaction",
              children: "ClickAction"
            }), " Object"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["卡片点击事件，详情请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#clickaction",
              children: "ClickAction"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "button"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#clickaction",
              children: "ClickAction"
            }), " Object"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["卡片按钮点击事件，详情请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#clickaction",
              children: "ClickAction"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "appendButtons"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array [", (0,jsx_runtime.jsx)(_components.a, {
              href: "#clickaction",
              children: "ClickAction"
            }), "]"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["留存页按钮点击事件列表，详情请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#clickaction",
              children: "ClickAction"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "指定状态下发送服务动态参数要求-1",
      children: "指定状态下发送服务动态参数要求"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "状态"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "状态描述"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "状态节点类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填字段"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选字段"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "备注"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "待支付"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "起始节点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "status  paymentEndTime  amount  productImg  productCount  productName  merchantName  orderTime  customerAddress  clickAction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "button  appendButtons"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "服务动态消息推送必须以状态节点类型为“起始节点”状态开始推送。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下单成功"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "起始节点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "status  amount  productImg  productCount  productName  merchantName  orderTime  customerAddress  clickAction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "deliveryTime  pickupNumber  button  appendButtons"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "服务动态消息推送必须以状态节点类型为“起始节点”状态开始推送。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "制作中"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "过程节点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "status  deliveryTime  amount  productImg  productCount  productName  merchantName  orderTime  customerAddress  remainOrders  clickAction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pickupNumber  button  appendButtons  waitTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "制作完成"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "过程节点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "status  deliveryTime  amount  productImg  productCount  productName  merchantName  orderTime  customerAddress  clickAction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pickupNumber  button  appendButtons"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "骑手已接单"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "过程节点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "status  deliveryTime  amount  productImg  productCount  productName  merchantName  orderTime  customerAddress  clickAction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pickupNumber  button  appendButtons"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "骑手正在赶往商家"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "过程节点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "status  deliveryTime  amount  productImg  productCount  productName  merchantName  orderTime  customerAddress  clickAction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pickupNumber  button  appendButtons"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "骑手已到店"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "过程节点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "status  deliveryTime  amount  productImg  productCount  productName  merchantName  orderTime  customerAddress  clickAction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pickupNumber  button  appendButtons"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "正在配送"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "过程节点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "status  deliveryTime  amount  productImg  productCount  productName  merchantName  orderTime  customerAddress  clickAction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pickupNumber  button  appendButtons"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "已送达"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "过程节点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "status  realDeliveryTime  amount  productImg  productCount  productName  merchantName  orderTime  customerAddress  clickAction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pickupNumber  button  appendButtons"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "订单完成"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "结束节点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "status  realDeliveryTime  amount  productImg  productCount  productName  merchantName  orderTime  customerAddress  clickAction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "button  appendButtons"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "服务动态结束态，订单完成后必须推送该结束状态信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "订单已取消"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "结束节点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "status  cancelReason  amount  productImg  productCount  productName  merchantName  orderTime  customerAddress  cancelTime  clickAction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "button  appendButtons"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "服务动态结束态，订单取消后必须推送该结束状态信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "公共参数结构体说明",
      children: "公共参数结构体说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "clickaction",
      children: "ClickAction"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "字段名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "字段类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "消息点击后的跳转行为。  0：打开本元服务首页  1：打开本元服务自定义页"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按钮文本。如果是按钮点击场景，该字段必填（不能超过4个字符）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "action"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用内置页面ability对应的action。当type为1时，字段action和uri至少填写一个；当action和uri都填写时，优先使用uri查找应用内置页面。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uri"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用内置页面ability对应的uri。当type为1时，字段action和uri至少填写一个。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当type为0或1时，该字段用于在点击按钮后将数据传递给元服务。格式必须为key-value形式，最大长度1024字节。示例：{\"key1\": \"value1\", \"key2\": \"value2\"}"
          })]
        })]
      })]
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