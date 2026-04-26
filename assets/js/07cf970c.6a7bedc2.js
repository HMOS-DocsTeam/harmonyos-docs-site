"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["976625"], {
9662(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_store_kit_guide_store_iap_store_iap_config_product_store_iap_product_store_iap_product_md_07c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-store-kit-guide-store-iap-store-iap-config-product-store-iap-product-store-iap-product-md-07c.json
var site_docs_store_kit_guide_store_iap_store_iap_config_product_store_iap_product_store_iap_product_md_07c_namespaceObject = JSON.parse('{"id":"store-kit-guide/store-iap/store-iap-config-product/store-iap-product/store-iap-product","title":"数字商品介绍","description":"数字商品服务为接入应用内购买的应用提供了展示数字商品、购买数字商品、发放数字商品权益的功能。","source":"@site/docs/store-kit-guide/store-iap/store-iap-config-product/store-iap-product/store-iap-product.md","sourceDirName":"store-kit-guide/store-iap/store-iap-config-product/store-iap-product","slug":"/store-kit-guide/store-iap/store-iap-config-product/store-iap-product/","permalink":"/harmonyos-docs-site/store-kit-guide/store-iap/store-iap-config-product/store-iap-product/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"数字商品介绍","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/store-iap-product","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"配置应用","permalink":"/harmonyos-docs-site/store-kit-guide/store-iap/store-iap-enabling/store-iap-config-app/"},"next":{"title":"通过AppGallery Connect配置数字商品","permalink":"/harmonyos-docs-site/store-kit-guide/store-iap/store-iap-config-product/store-iap-product-agc/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/store-kit-guide/store-iap/store-iap-config-product/store-iap-product/store-iap-product.md


const frontMatter = {
	title: '数字商品介绍',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/store-iap-product',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '数字商品介绍';

const assets = {

};



const toc = [{
  "value": "数字商品类型介绍",
  "id": "数字商品类型介绍",
  "level": 2
}, {
  "value": "数字商品购买场景",
  "id": "数字商品购买场景",
  "level": 2
}, {
  "value": "配置自动续期订阅商品",
  "id": "配置自动续期订阅商品",
  "level": 2
}, {
  "value": "订阅状态及变更",
  "id": "订阅状态及变更",
  "level": 2
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
        id: "数字商品介绍",
        children: "数字商品介绍"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["数字商品服务为接入应用内购买的应用提供了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/store-kit-guide/store-iap/store-iap-distribute/store-iap-distribute-query",
        children: "展示数字商品"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/store-kit-guide/store-iap/store-iap-distribute/store-iap-distribute-purchase",
        children: "购买数字商品"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/store-kit-guide/store-iap/store-iap-distribute/store-iap-distribute-delivering",
        children: "发放数字商品权益"
      }), "的功能。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "数字商品类型介绍",
      children: "数字商品类型介绍"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "商品类型"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "描述"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "示例"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "消耗型商品"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "只可使用一次的产品，使用之后即失效，需要再次购买的商品。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "游戏内货币、游戏内道具、应用内点券等。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "非消耗型商品"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "只需购买一次，不会过期或随着使用而减少的商品。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "游戏中额外的游戏关卡、应用中无时限的高级会员等。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "自动续期订阅商品"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户购买后在一段时间内允许访问增值功能或内容，周期结束后自动续期购买下一期的服务。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用中有时限的高级会员，如视频月度会员。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "非续期订阅商品"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户在有限时间内允许访问增值功能或内容。此类订阅不会自动续期购买。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "订阅可观看现场游戏内容，时限为一年。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "数字商品购买场景",
      children: "数字商品购买场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在应用购买场景中，用户会以一次性付款方式购买消耗型商品或非消耗型商品。请结合实际业务场景选择对应的商品类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "订阅是指用户在购买自动续期订阅商品后，可以在一段时间访问应用的增值功能或内容，并且会在订阅周期结束后自动续期购买下一期服务的能力。如果期间用户取消订阅，则订阅在当期结束后将不再自动续期。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(486820)/* ["default"] */.A) + "",
        width: "693",
        height: "627"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "配置自动续期订阅商品",
      children: "配置自动续期订阅商品"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自动续期订阅商品由订阅组来管理维护，所以在创建自动续期订阅商品前，需要先创建订阅组，并在创建自动续期订阅商品时指定商品所在的订阅组。订阅组用于承载同类型商品的管理，一个订阅组可以包含多个自动续期订阅商品，且同一个订阅组只有一个商品是处于生效状态。当商品处于生效状态时，开发者需要为用户发放权益。订阅组机制为开发者提供了便捷方式，让商品服务大致相同但有细微差别的需求得以快速实现。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当前自动续期订阅商品的续费周期可选值有1周、30天、31天、1个月、2个月、3个月、6个月和12个月，具体配置方法请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/store-kit-guide/store-iap/store-iap-config-product/store-iap-product-agc",
        children: "配置数字商品"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "订阅状态及变更",
      children: "订阅状态及变更"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "订阅有如下几个状态："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "订阅状态"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "续期"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "订阅处于生效状态，即用户可以享受商品对应的服务，其下一次续期也将按期进行扣费以续期。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "到期"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "订阅处于生效状态，用户仍可以享受商品对应的服务，但订阅续期已被用户取消，将不会进行下一次的续期扣费。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "已到期"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "订阅处于失效状态，用户无法享受商品的服务。最近一次的续期扣费没有成功、用户取消订阅、用户不同意涨价或者是扣款账户发生了异常等均可导致订阅进入该状态。  失效的订阅最长有180天的保留期，在保留期内，用户无法享受自动续期订阅商品的服务，但可以在恢复订阅后再次享受应用提供的服务。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "待生效"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "订阅还未开始生效，用户暂时还无法享受该自动续期订阅商品的服务。  当用户在订阅组内进行切换订阅时，如果切换到一个下周期生效的订阅时，则新切换的商品处于待生效状态，需要等原订阅到期后才生效。在用户的切换操作完成后，原订阅会变为到期状态，而新切换的商品为待生效状态，并且会在原自动续期订阅商品的编辑订阅页内显示新切换商品的开始时间。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(667816)/* ["default"] */.A) + "",
        width: "605",
        height: "381"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户在成功购买自动续期订阅商品后，订阅会变为续期状态。当发生如下操作时，订阅的状态会随之改变："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "取消订阅：对已购自动续期订阅商品进行取消操作。取消成功，则订阅将不会进行下一周期的续费，但不影响当期订阅的使用。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "恢复订阅：对于处于到期、已到期的订阅，用户可以恢复订阅，以再次享受订阅对应的服务。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "切换订阅：对已购自动续期订阅商品，进行同一个订阅组不同自动续期订阅商品的切换操作，有如下两种切换效果："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["立即生效的切换订阅（原订阅无保留期）：用户原订阅的剩余金额将折算成新订阅的天数，延长新订阅的有效期。 目前这种切换效果的触发场景为：\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "订阅升级：新订阅的订阅等级高于原订阅。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "新订阅与原订阅的订阅等级相同，且原订阅的续费周期和新订阅的续费周期相同。"
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["下周期生效的切换订阅：原订阅设置为到期状态，新订阅为待生效状态，新订阅会在原订阅的失效日期开始扣费并生效。目前这种切换效果的触发场景为：\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "订阅降级：新订阅的订阅等级低于原订阅。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "新订阅与原订阅的订阅等级相同，且原订阅的续费周期和新订阅的续费周期不同。"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "让用户管理订阅",
      children: "让用户管理订阅"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["数字商品服务为接入订阅型商品购买能力的应用提供", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/iap-api/iap-arkts/iap-iap/iap-iap#iapshowmanagedsubscriptions",
        children: "跳转到订阅页或订阅详情页"
      }), "的能力，让用户管理订阅，包括查看订阅、取消订阅、切换订阅、恢复订阅等。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(585670)/* ["default"] */.A) + "",
        width: "664",
        height: "572"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "订阅续期处理",
      children: "订阅续期处理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "订阅的下一个续期价格（包括原价、涨价和降价）是在续期前10天确定的。对于订阅周期为1周的自动续期订阅商品，在当期续期成功后即开始确认下一次续期的价格，如果在确认价格后调整价格，那么下一次续期时仍然按照原价格进行，再下一期则按新的价格进行续期。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在订阅周期结束前24小时，数字商品服务器会尝试向用户发起扣款以完成自动续期订阅商品的续期。若扣费失败，数字商品服务器会在一定期限内重新尝试扣费，从而恢复订阅。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(23767)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "因扣费失败而失效的订阅，系统将进入为期60天的自动扣费重试。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "提供优惠",
      children: "提供优惠"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了提供购买的自动续期订阅商品更有吸引力，自动续期订阅商品提供了两种促销模式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "推介促销（新用户促销）："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "折扣价格：设置一个低于商品原价的价格，让用户在购买初期以低价享受一段时间的商品服务。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "免费试用：设置一个免费时间段，让用户在购买初期免费享受一段时间的商品服务。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "推介促销规则："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户对每个订阅组至多享受一次推介促销。如果一个订阅组里的多个商品均配置了推介促销活动，在用户尝试切换该订阅组的其他商品时，用户只能享受在该订阅组第一次遇到的推介促销。当切换订阅时在该订阅组再次遇到推介促销，将不再享有推介促销资格。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "推介促销价享受的触发方式是新订阅、恢复订阅、切换订阅三种情况。推介促销的享受资格不受订阅方式影响，无论是新发起的订阅，恢复订阅，还是切换订阅等，均遵从“用户对每个订阅组至多享受一次推介促销”的原则，只要没有享受过该订阅组的推介促销，就可以享受推介促销。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "优惠促销（自定义人群促销）"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以针对用户群体、优惠地域进行自定义选择，支持开发者进行个性化的优惠活动配置。开发者可以在发起购买前，查询该商品的优惠活动信息，在最终发起购买时，将优惠活动信息传递到华为应用内支付，最终将优惠活动信息展示给用户。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "优惠促销规则："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当用户同时符合优惠促销和推介促销时，优惠促销的优先级高于推介促销。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当用户历史上享受过优惠促销，仍具备享受推介促销的资格。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "优惠促销无使用次数限制。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["促销具体配置方法请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/store-kit-guide/store-iap/store-iap-config-product/store-iap-product-agc",
        children: "配置数字商品"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "修改自动续期订阅商品",
      children: "修改自动续期订阅商品"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "调整自动续期订阅商品价格",
      children: "调整自动续期订阅商品价格"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可以为每个自动续期订阅商品降低或提高价格，具体配置可参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/app/revise-renewal-0000001959074893",
        children: "修改自动续期订阅商品"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "降低价格：对所有用户生效，包括已经订阅的用户和新订阅的用户，在订阅的下一次续费起生效。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "提高价格：当提高自动续期订阅商品价格时，有两种策略可选。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "为已订阅的用户保留原价，对新订阅的用户使用新的价格。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["对已订阅的用户生效。数字商品服务器会在下一个续期日提前10天通知已订阅的用户商品价格上涨以及新价格的收费日期。如果在距离下个续期日10天内调整价格， 则下次续期将按照现有价格再续订一个周期，然后在下个周期结束提前10天通知已订阅的用户。其他的限制还包括：\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "自动续期订阅商品新的价格需要已订阅用户的同意，如果用户不同意，其订阅不会自动续期，直到用户同意涨价。"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在停止提供订阅服务前，开发者应该通过下架该商品来防止新用户订阅。建议将自动续期订阅商品的下架时间与其续费周期相对应。例如，在自动续期订阅商品续费周期为1个月的情况下，应该提前1个月将自动续期订阅商品下架，这可以在停止提供订阅的商品服务之前让用户体验到完整时限的商品服务，并且将不会在下一个订阅续期日期被收取费用。以此类推，对于续费周期为1周的订阅需要提前7天，对于续费周期为6个月的订阅需要提前6个月。当开发者将某个自动续期订阅商品下架时，用户将收到有关订阅终止通知。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接收订阅关键事件的通知",
      children: "接收订阅关键事件的通知"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果开发者在", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/service/josp/agc/index.html",
        children: "AppGallery Connect"
      }), "申请支付服务时提前配置了通知接收地址，用户购买自动续期订阅商品后，数字商品服务器会在订阅场景的某些关键事件发生时调用此接口通知配置的服务器，具体请参见", (0,jsx_runtime.jsx)(_components.a, {
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
        children: "用户调整自动续期订阅商品降级或跨级且在下个续订生效。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户调整自动续期订阅商品升级/跨级立即生效。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户主动或者App取消一个自动续期订阅商品，已经收费的服务仍然有效，但是后续续期会停止。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "一个自动续期订阅商品成功续期。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "一个到期的自动续期订阅商品进入账号保留期。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "订阅的续期时间已往后调整。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "订阅的续期时间已往前调整。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若开发者服务器返回结果为非成功响应（返回的http status code值为200之外的值），将对本次关键事件的通知进行周期性重发。建议在服务器收到通知后立即返回成功响应，避免通知消息堆积。"
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
667816(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478771-b062ae6d6b328d7337ea56bbbdcf7bd4.png");

},
585670(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799122-c0f38fe55bf1f14252876d62c93b5533.png");

},
486820(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958770-6ae8fbf1152eced4b685f7badca4cc13.png");

},
23767(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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