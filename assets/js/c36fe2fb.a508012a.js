"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["723313"], {
409922(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_iap_kit_guide_iap_purchases_iap_subscription_iap_subscription_functions_iap_subscription_functions_md_c36_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-iap-kit-guide-iap-purchases-iap-subscription-iap-subscription-functions-iap-subscription-functions-md-c36.json
var site_docs_iap_kit_guide_iap_purchases_iap_subscription_iap_subscription_functions_iap_subscription_functions_md_c36_namespaceObject = JSON.parse('{"id":"iap-kit-guide/iap-purchases/iap-subscription/iap-subscription-functions/iap-subscription-functions","title":"自动续期订阅说明","description":"订阅是指用户在购买自动续期订阅商品后，可以在一段时间访问App的增值功能或内容，并且会在订阅周期结束后自动续期（自动购买下一期服务）的能力。如果期间用户取消订阅，则订阅在当期结束后将不再自动续期。","source":"@site/docs/iap-kit-guide/iap-purchases/iap-subscription/iap-subscription-functions/iap-subscription-functions.md","sourceDirName":"iap-kit-guide/iap-purchases/iap-subscription/iap-subscription-functions","slug":"/iap-kit-guide/iap-purchases/iap-subscription/iap-subscription-functions/","permalink":"/harmonyos-docs-site/iap-kit-guide/iap-purchases/iap-subscription/iap-subscription-functions/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"自动续期订阅说明","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/iap-subscription-functions","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"权益发放","permalink":"/harmonyos-docs-site/iap-kit-guide/iap-purchases/iap-purchase/iap-delivering-products/"},"next":{"title":"接入自动续期订阅","permalink":"/harmonyos-docs-site/iap-kit-guide/iap-purchases/iap-subscription/iap-integrate-subscription/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/iap-kit-guide/iap-purchases/iap-subscription/iap-subscription-functions/iap-subscription-functions.md


const frontMatter = {
	title: '自动续期订阅说明',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/iap-subscription-functions',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '自动续期订阅说明';

const assets = {

};



const toc = [{
  "value": "配置自动续期订阅商品",
  "id": "配置自动续期订阅商品",
  "level": 2
}, {
  "value": "订阅组",
  "id": "订阅组",
  "level": 3
}, {
  "value": "续费周期",
  "id": "续费周期",
  "level": 3
}, {
  "value": "保留期",
  "id": "保留期",
  "level": 3
}, {
  "value": "订阅状态及变更",
  "id": "订阅状态及变更",
  "level": 2
}, {
  "value": "订阅状态",
  "id": "订阅状态",
  "level": 3
}, {
  "value": "订阅状态变更",
  "id": "订阅状态变更",
  "level": 3
}, {
  "value": "让用户管理订阅",
  "id": "让用户管理订阅",
  "level": 2
}, {
  "value": "订阅续期处理",
  "id": "订阅续期处理",
  "level": 2
}, {
  "value": "提供优惠",
  "id": "提供优惠",
  "level": 2
}, {
  "value": "修改自动续期订阅商品",
  "id": "修改自动续期订阅商品",
  "level": 2
}, {
  "value": "调整自动续期订阅商品价格",
  "id": "调整自动续期订阅商品价格",
  "level": 3
}, {
  "value": "处理自动续期订阅商品下架",
  "id": "处理自动续期订阅商品下架",
  "level": 3
}, {
  "value": "接收订阅关键事件的通知",
  "id": "接收订阅关键事件的通知",
  "level": 2
}, {
  "value": "多角色应用接入订阅专项说明",
  "id": "多角色应用接入订阅专项说明",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
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
        id: "自动续期订阅说明",
        children: "自动续期订阅说明"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "订阅是指用户在购买自动续期订阅商品后，可以在一段时间访问App的增值功能或内容，并且会在订阅周期结束后自动续期（自动购买下一期服务）的能力。如果期间用户取消订阅，则订阅在当期结束后将不再自动续期。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(499279)/* ["default"] */.A) + "",
        width: "267",
        height: "566"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "配置自动续期订阅商品",
      children: "配置自动续期订阅商品"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "订阅组",
      children: "订阅组"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["自动续期订阅商品由", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "订阅组"
        })
      }), "来管理维护，所以在创建自动续期订阅商品前，需要先创建订阅组，并在创建自动续期订阅商品时指定商品所在的订阅组。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "订阅组用于承载同类型商品的管理，一个订阅组可以包含多个自动续期订阅商品。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "同一个订阅组只有一个商品是处于生效状态。当商品处于生效状态时，开发者需要为用户发放权益。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "订阅组机制为开发者提供了便捷方式，让商品服务大致相同但有细微差别的需求得以快速实现。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "续费周期",
      children: "续费周期"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当前自动续期订阅商品的续费周期可选值有1周、30天、31天、1个月、2个月、3个月、6个月和12个月，具体配置方法请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/iap-kit-guide/iap-preparations/iap-config-product#%E9%85%8D%E7%BD%AE%E8%87%AA%E5%8A%A8%E7%BB%AD%E6%9C%9F%E8%AE%A2%E9%98%85%E5%95%86%E5%93%81",
        children: "配置自动续期订阅商品"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "保留期",
      children: "保留期"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当用户的订阅因取消、续期扣费失败等原因而失效时，该订阅将进入最长180天的保留期。在此期间，用户无法使用订阅服务。不过，如果用户在保留期内恢复订阅，即可立即恢复使用该订阅的所有权益。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "订阅状态及变更",
      children: "订阅状态及变更"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "订阅状态",
      children: "订阅状态"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "订阅状态"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否生效"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "待生效"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "订阅还未开始生效，用户暂时还无法享受该自动续期订阅商品的服务（该状态订阅不支持查询）。  当用户在订阅组内进行切换订阅时，如果切换到一个下周期生效的订阅，则原订阅会变为将到期状态，而新切换的商品为待生效状态。用户可在原商品的订阅详情页内查看新切换商品的开始时间。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "生效中"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "续期"
              })
            }), "：将在当前订阅周期结束后自动续期。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "将到期"
              })
            }), "：在当前订阅周期结束后", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "不会"
              })
            }), "自动续期。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "已到期"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["最近一次的续期扣费没有成功、用户取消订阅、用户不同意涨价或者是扣款账户发生了异常等均可导致订阅进入该状态。此外，该订阅会进入", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E4%BF%9D%E7%95%99%E6%9C%9F",
              children: "保留期"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "尝试扣费"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "订阅快要到期或到期一段时间内系统会自动按一定周期尝试扣费续期。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "撤销"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "撤销订阅成功，订阅权益会立即取消（用户及开发者无权限操作）。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "订阅状态变更",
      children: "订阅状态变更"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户在成功购买自动续期订阅商品后，订阅会变为续期状态。当发生如下操作时，订阅的状态会随之改变。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "状态变更"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "取消订阅"
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["对已购自动续期订阅商品进行取消操作。取消成功，则订阅将不会进行下一周期的续费，但不影响当期订阅的使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 此场景下开发者服务器会收到", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/iap-api/iap-rest/iap-key-event-notifications/iap-key-event-notifications#notificationsubtype",
              children: "AUTO_RENEW_DISABLED"
            }), "的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/iap-api/iap-rest/iap-key-event-notifications/iap-key-event-notifications",
              children: "服务端关键事件通知"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "恢复订阅"
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["对于处于到期、已到期的订阅，用户可以恢复订阅，以再次享受订阅对应的服务。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 此场景下开发者服务器会收到", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/iap-api/iap-rest/iap-key-event-notifications/iap-key-event-notifications#notificationsubtype",
              children: "AUTO_RENEW_ENABLED"
            }), "或者", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/iap-api/iap-rest/iap-key-event-notifications/iap-key-event-notifications#notificationsubtype",
              children: "RESTORE"
            }), "的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/iap-api/iap-rest/iap-key-event-notifications/iap-key-event-notifications",
              children: "服务端关键事件通知"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "切换订阅"
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["对已购自动续期订阅商品，进行同一个订阅组不同自动续期订阅商品的切换操作，有如下两种切换效果：  - 立即生效的切换订阅（原订阅无", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E4%BF%9D%E7%95%99%E6%9C%9F",
              children: "保留期"
            }), "）：用户原订阅的剩余金额将折算成新订阅的天数，延长新订阅的有效期。目前这种切换效果的触发场景为：  1. 订阅升级：新订阅的订阅等级高于原订阅  2. 新订阅与原订阅的订阅等级相同，且原订阅的续费周期和新订阅的续费周期相同  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  此场景下开发者服务器会收到", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/iap-api/iap-rest/iap-key-event-notifications/iap-key-event-notifications#notificationsubtype",
              children: "UPGRADE"
            }), "的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/iap-api/iap-rest/iap-key-event-notifications/iap-key-event-notifications",
              children: "服务端关键事件通知"
            }), "。  订阅折算计算过程可参考IAP kit常见问题-", (0,jsx_runtime.jsx)(_components.a, {
              href: "/iap-kit-guide/iap-faq/iap-faq-23",
              children: "自动续期订阅商品，A切换B且立即生效时，新订阅有效期的组成"
            }), "。  - 下周期生效的切换订阅：原订阅设置为将到期状态，新订阅为待生效状态，新订阅会在原订阅的失效日期开始扣费并生效。目前这种切换效果的触发场景为：  1. 订阅降级：新订阅的订阅等级低于原订阅  2. 新订阅与原订阅的订阅等级相同，且原订阅的续费周期和新订阅的续费周期不同  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 此场景下开发者服务器会收到", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/iap-api/iap-rest/iap-key-event-notifications/iap-key-event-notifications#notificationsubtype",
              children: "DOWNGRADE"
            }), "的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/iap-api/iap-rest/iap-key-event-notifications/iap-key-event-notifications",
              children: "服务端关键事件通知"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "具体订阅状态的变化如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(577526)/* ["default"] */.A) + "",
        width: "871",
        height: "307"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "让用户管理订阅",
      children: "让用户管理订阅"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/iap-api/iap-arkts/iap-iap/iap-iap#iapshowmanagedsubscriptions",
        children: "iap.showManagedSubscriptions"
      }), "接口跳转到订阅页或订阅详情页，让用户管理订阅。用户亦可通过\"设置\">\"华为账号\">\"付款与账单\">\"订阅\"路径进入订阅页管理订阅。包括查看订阅、取消订阅、切换订阅、恢复订阅等。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(231936)/* ["default"] */.A) + "",
        width: "264",
        height: "559"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(59123)/* ["default"] */.A) + "",
        width: "264",
        height: "559"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "订阅续期处理",
      children: "订阅续期处理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "订阅的下一个续期价格（包括原价、涨价和降价）是在续期前10天确定的。对于订阅周期为1周的自动续期订阅商品，在当期续期成功后即开始确认下一次续期的价格，如果在确认价格后调整价格，那么下一次续期时仍然按照原价格进行，再下一期则按新的价格进行续期。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在订阅周期结束前24小时，IAP服务器会尝试向用户发起扣款以完成自动续期订阅商品的续期。若扣费失败，IAP服务器会在一定期限内重新尝试扣费，从而恢复订阅。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(10169)/* ["default"] */.A) + "",
        width: "991",
        height: "409"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(189220)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "因扣费失败而失效的订阅，系统将进入为期60天的自动扣费重试。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "提供优惠",
      children: "提供优惠"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了提供更有吸引力的自动续期订阅商品购买和挽留，自动续期订阅商品提供了三种促销类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "推介促销（新用户促销）"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "适用于自动续期订阅商品的促销价格。开发者可以指定优惠持续时间和类型（免费试用、按周期扣费），可用于吸引新用户。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "推介促销规则："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "用户对每个订阅组至多享受一次推介促销。如果一个订阅组里的多个商品均配置了推介促销活动，在用户尝试切换该订阅组的其他商品时，用户只能享受在该订阅组第一次遇到的推介促销。当切换订阅时在该订阅组再次遇到推介促销，将不再享有推介促销资格。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "推介促销价享受的触发方式是新订阅、恢复订阅、切换订阅三种情况。推介促销的享受资格不受订阅方式影响，无论是新发起的订阅，恢复订阅，还是切换订阅等，均遵从“用户对每个订阅组至多享受一次推介促销”的原则，只要没有享受过该订阅组的推介促销，就可以享受推介促销。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "优惠促销（自定义人群促销）"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "可以针对用户群体、优惠地域进行自定义选择，支持开发者进行个性化的优惠活动配置。开发者可以在发起购买前，查询该商品的优惠活动信息，在最终发起购买时，将优惠活动信息传递到华为应用内支付，最终将优惠活动信息展示给用户。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "优惠促销规则："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "当用户同时符合优惠促销和推介促销时，优惠促销的优先级高于推介促销。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "当用户历史上享受过优惠促销，仍具备享受推介促销的资格。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "优惠促销无使用次数限制。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(372797)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["当前优惠促销涉及", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/iap-api/iap-rest/iap-server-subscribe-offer-sign/iap-server-subscribe-offer-sign",
            children: "生成优惠签名购买参数"
          }), "处理，推荐具备服务器的开发者接入使用。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "挽留促销（退订挽留促销，即将开放）"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "适用于自动续期订阅商品的促销价格。开发者可以指定优惠持续时间、类型（免费试用、按周期扣费）和多次享受优惠的间隔（从优惠结束时间起算），可用于挽留即将取消订阅的用户。开发者配置自动续期订阅商品的挽留促销后，用户在订阅管理界面取消订阅且满足挽留促销使用条件时，会弹出挽留弹框，用户可以选择享受挽留促销并继续订阅或者仍要取消订阅。当用户选择享受挽留促销则下周期续期时挽留促销生效，享受挽留促销价。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "挽留促销规则："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "用户使用了挽留促销，在续期前取消订阅，则挽留促销未生效。若该场景下用户恢复订阅，当前订阅周期内无法再次使用挽留促销，需完成续期后才可使用挽留促销。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "开发者设置了挽留促销的使用间隔，当前时间与用户最近一次已享受挽留促销周期结束时间的间隔达到要求后，挽留促销才可再次使用。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["挽留促销无使用次数限制，但以下场景不可使用。\n", (0,jsx_runtime.jsxs)(_components.ol, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "用户正在享受或者下周期即将享受推介促销、优惠促销时，挽留促销不可使用。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "用户正在享受或者下周期即将享受挽留促销时，挽留促销不可再次使用。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "开发者设置了商品涨价且用户尚未同意涨价时，挽留促销不可使用。"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(723405)/* ["default"] */.A) + "",
            width: "960",
            height: "427"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置促销时，除了要选择促销类型，还需为每项促销选择以下任一一种付费模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "免费试用："
          })
        }), " 设置一个免费时间段，让用户在购买初期免费享受一段时间的商品服务。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "按周期扣费："
          })
        }), " 设置一个低于商品原价的价格，让用户在购买初期每个周期以低价享受商品权益。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "提前支付："
          })
        }), " 设置一个一次性支付特定时限的价格，让用户购买后在该特定的优惠期内以低价享受商品权益，优惠期结束后按商品原价续订。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体配置方法请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/iap-kit-guide/iap-preparations/iap-config-product",
        children: "配置商品信息"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(208506)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["用户是否享受优惠促销，取决于开发者传入的优惠ID（详细参数参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/iap-api/iap-rest/iap-server-subscribe-offer-sign/iap-server-subscribe-offer-sign",
          children: "生成优惠签名购买参数"
        }), "）。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["推介促销由IAP服务器判断用户是否可享受并自动使用，开发者可通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/iap-api/iap-arkts/iap-iap/iap-iap#iapqueryproducts",
          children: "iap.queryProducts"
        }), "返回值中SubscriptionInfo的hasEligibilityForIntroOffer字段判断用户是否享受过推介促销。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "修改自动续期订阅商品",
      children: "修改自动续期订阅商品"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "调整自动续期订阅商品价格",
      children: "调整自动续期订阅商品价格"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可以为每个自动续期订阅商品降低或提高价格，具体配置可参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-modify-product-0000001146814541#section0980104712159",
        children: "修改订阅类商品"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "降低价格：对所有用户生效，包括已经订阅的用户和新订阅的用户。如果在距离下个续期日10天内调整价格， 则下次续期将按照现有价格再续订一个周期，然后再往后一个周期以新的价格续期。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "提高价格：当提高自动续期订阅商品价格时，有两种策略可选。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "为已订阅的用户保留原价，对新订阅的用户使用新的价格。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["对已订阅的用户生效。IAP服务器会在下一个续期日提前10天通知已订阅的用户商品价格上涨以及新价格的收费日期。如果在距离下个续期日10天内调整价格， 则下次续期将按照现有价格再续订一个周期，然后在下个周期结束提前10天通知已订阅的用户。其他的限制还包括：\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "自动续期订阅商品新的价格需要已订阅用户的同意，如果用户未同意，其订阅不会自动续期，直到用户同意涨价。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "在价格调整生效后将无法撤销。可以计划新的价格调整从而实现降价，但此前因价格提高而选择停止续订的用户需要重新订阅。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "如果用户支付了促销价格的自动续期订阅商品且当前周期为以促销价格购买自动续期订阅商品的周期，则用户下一周期将按照原价进行订阅，再在下一个续费周期按照上述规则执行。"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "处理自动续期订阅商品下架",
      children: "处理自动续期订阅商品下架"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在处理自动续期订阅商品的下架时，需要考虑对用户的影响。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["允许存量用户续期，防止新用户订阅：开发者可以通过商品管理", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/app/set-digital-products-off-shelf-0000002107836877",
          children: "下架商品"
        }), "来防止新用户订阅，开发者仍需对存量用户提供订阅权益。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["新/存量用户均不可用：开发者可以通过提前在商品管理中", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/app/delete-0000001959074905",
          children: "删除数字商品"
        }), "来防止新用户订阅以及存量用户续期。建议删除数字商品一段时间后再正式停止提供订阅权益，该时间需与其续费周期一致，保障存量用户体验到完整时限的商品服务。例如，对于周期为1个月的自动续期订阅商品，应该提前1个月将该商品删除，确保新用户在此期间无法订阅，且存量用户在停止提供订阅权益之前体验到完整时限权益，不会自动续期（自动购买下一期服务）。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接收订阅关键事件的通知",
      children: "接收订阅关键事件的通知"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果开发者提前配置了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/iap-kit-guide/iap-preparations/iap-basic-preparation/iap-set-necessary-parameters#%E9%85%8D%E7%BD%AE%E8%AE%A2%E5%8D%95%E8%AE%A2%E9%98%85%E9%80%9A%E7%9F%A5%E6%8E%A5%E6%94%B6%E5%9C%B0%E5%9D%80",
        children: "通知接收地址"
      }), "，用户购买自动续期订阅商品后，IAP服务器会在订阅场景的某些关键事件发生时调用此接口通知配置的服务器，具体请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/iap-api/iap-rest/iap-key-event-notifications/iap-key-event-notifications",
        children: "服务端关键事件通知"
      }), "。主要涉及的场景如下："]
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
        children: "用户主动取消或App取消一个自动续期订阅商品，已经收费的服务仍然有效，但是后续续期会停止。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "一个自动续期订阅商品成功续期。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["一个到期的自动续期订阅商品进入", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E4%BF%9D%E7%95%99%E6%9C%9F",
          children: "保留期"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若开发者服务器返回结果为非成功响应（请求返回的HTTP状态码不为200），将对本次关键事件的通知进行周期性重发。建议在服务器收到通知后立即返回成功响应，避免通知消息堆积。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "多角色应用接入订阅专项说明",
      children: "多角色应用接入订阅专项说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户购买订阅型商品时使用的账号是华为账号，一个华为账号在同一订阅商品上只能同时存在一笔订阅。如果应用存在多角色，可能会存在权益发放错乱的现象。针对这个场景建议的处理方案如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当用户为角色A购买自动续期订阅商品后，该用户的其他角色只允许购买普通固定周期商品服务（开发者可以通过华为消耗型商品自行实现）。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当用户为角色A购买自动续期订阅商品后，再为角色B购买自动续期订阅商品时，开发者可以自行设计将角色A的剩余权益转移给角色B。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "开发者可以配置多个自动续期订阅商品。如游戏不同区服对应不同角色，每个区服创建独立的自动续期订阅商品。"
      }), "\n"]
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
10169(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438973-38d2734722c53cc42471c67c791f1bf6.png");

},
499279(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438971-fb5d14fe50f49a08340d5db53f557dc1.png");

},
723405(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958928-acfcb147b7e0068905b182a095530e4e.png");

},
208506(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
189220(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
59123(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799278-42216c5a552a10ac3f0ae1dce4998322.png");

},
372797(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
577526(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958926-89ce4151f3575b853b4d2e1933a2f20a.png");

},
231936(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478927-99b80d9ae6f0118e6001488a9307ec3e.png");

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