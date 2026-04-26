"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["257165"], {
501062(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_payment_kit_guide_payment_introduction_payment_introduction_md_f10_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-payment-kit-guide-payment-introduction-payment-introduction-md-f10.json
var site_docs_payment_kit_guide_payment_introduction_payment_introduction_md_f10_namespaceObject = JSON.parse('{"id":"payment-kit-guide/payment-introduction/payment-introduction","title":"Payment Kit简介","description":"Payment Kit（鸿蒙支付服务）提供了方便、安全和快捷的支付方式，开发者在开发的商户应用/元服务中接入支付服务便捷且快速。","source":"@site/docs/payment-kit-guide/payment-introduction/payment-introduction.md","sourceDirName":"payment-kit-guide/payment-introduction","slug":"/payment-kit-guide/payment-introduction/","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-introduction/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Payment Kit简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-introduction","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"应用内通知设置快捷入口开发指导","permalink":"/harmonyos-docs-site/notification-kit/notification-shortcut-settings/"},"next":{"title":"接入规范学习","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-access-specifications/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/payment-kit-guide/payment-introduction/payment-introduction.md


const frontMatter = {
	title: 'Payment Kit简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-introduction',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = 'Payment Kit简介';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "基本概念",
  "id": "基本概念",
  "level": 2
}, {
  "value": "商户模型与支付能力",
  "id": "商户模型与支付能力",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "支持的设备",
  "id": "支持的设备",
  "level": 3
}, {
  "value": "支持的国家/地区",
  "id": "支持的国家地区",
  "level": 3
}, {
  "value": "模拟器支持情况",
  "id": "模拟器支持情况",
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
        id: "payment-kit简介",
        children: "Payment Kit简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Payment Kit（鸿蒙支付服务）提供了方便、安全和快捷的支付方式，开发者在开发的商户应用/元服务中接入支付服务便捷且快速。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["商户应用/元服务接入Payment Kit后，可在商户的应用/元服务内通过拉起华为支付收银台来完成订单的支付并展示支付结果以及完成用户对", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "实体商品或服务"
        })
      }), "（例如酒店服务、出行服务、充值缴费服务等）的购买。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Payment Kit还提供了用户身份验证服务，包括实名信息验证、实名信息授权和人脸核身实人验证以及数字人民币支付能力，商户通过接入数字人民币支付能力，可在商户的应用/元服务调用开放API接口，拉起数字人民币收银台来完成订单支付。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "除此之外，Payment Kit也提供了营销服务。通过集成营销服务组件，用户可以在组件内领取平台券，在支付时可选择使用平台券。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "商城购物"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "用户在商户的应用/元服务选购完不同的商品后，可以直接在商户的应用/元服务里完成下单和支付。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["接入场景：", (0,jsx_runtime.jsx)(_components.a, {
            href: "/payment-kit-guide/payment-payment-process",
            children: "商户基础支付场景"
          }), "、", (0,jsx_runtime.jsx)(_components.a, {
            href: "/payment-kit-guide/payment-partner-combined",
            children: "平台类商户合单支付场景"
          }), "、", (0,jsx_runtime.jsx)(_components.a, {
            href: "/payment-kit-guide/payment-common-pay-connect/payment-common-pay-introduction",
            children: "通用收银台支付相关场景"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "免密代扣"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "用户在商户APP应用/元服务选购完商品或主动点击商户提供的签约选项后，商户的应用/元服务可拉起华为支付签约收银台，用户完成签约后，后续再次购买商品时，商户可以直接发起代扣，减少用户拉起收银台、输入支付密码等相关操作。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["接入场景：", (0,jsx_runtime.jsx)(_components.a, {
            href: "/payment-kit-guide/payment-password-free-pay/payment-pay-and-sign",
            children: "支付并签约场景"
          }), "、", (0,jsx_runtime.jsx)(_components.a, {
            href: "/payment-kit-guide/payment-password-free-pay/payment-withhold-process",
            children: "签约代扣场景"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "数字人民币支付"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "用户在商户APP应用/元服务进行话费充值，选好充值金额后发起支付，商户的应用/元服务通过拉起数字人民币收银台完成订单支付以及话费充值的操作。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["接入场景：", (0,jsx_runtime.jsx)(_components.a, {
            href: "/payment-kit-guide/payment-digital-cny-pay",
            children: "数字人民币支付场景"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "用户身份验证服务"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "政务、金融、医疗等类型应用/元服务在用户进行登录、预约等操作时需要核对用户信息，或核对用户是否本人。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["接入场景：", (0,jsx_runtime.jsx)(_components.a, {
            href: "/payment-kit-guide/payment-real-name-service/payment-real-name-verification",
            children: "实名信息验证/授权场景"
          }), "、", (0,jsx_runtime.jsx)(_components.a, {
            href: "/payment-kit-guide/payment-real-name-service/payment-real-name-face-verification",
            children: "人脸核身实人验证场景"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "营销服务"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "针对平台券，营销服务提供领券和选券组件。当元服务集成此组件后，用户可以在组件内查看可参加的平台券活动，在下单时可以选择已经领取的可用平台券。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["接入场景：", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-promotion-claim-coupon",
            children: "领券场景"
          }), "、", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-promotion-select-coupon",
            children: "选券场景"
          }), "。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "数字人民币"
        })
      }), "：数字人民币是中国人民银行提供的通用账户型法定数字货币，由指定合格的运营机构参与运营，具有账户和价值模式。以广义账户体系为基础，与传统银行账户体系融合互通，支持可控匿名，具有法偿性。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "通用收银台"
        })
      }), "： 为鸿蒙生态下的应用和元服务提供收款能力的收银台。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "用户身份验证服务"
        })
      }), "：是鸿蒙支付服务针对元服务和应用开发提供的开放能力。实名信息验证/授权场景，是基于用户授权同意，验证输入的姓名及证件号是否与鸿蒙支付服务预留的信息一致或快速获取用户在鸿蒙支付服务预留且认证过的姓名及证件号。人脸核身实人验证场景，是基于用户授权同意，通过人脸识别比对等，验证用户所提供的信息是否准确且为本人操作。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "商户模型与支付能力",
      children: "商户模型与支付能力"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如接入数字人民币支付场景，需在运营机构或受理服务机构完成商户入网（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/payment-kit-guide/payment-preparations/payment-digital-cny-pay-preparations",
        children: "参见这里"
      }), "）。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Payment Kit当前提供三种接入商户模型：", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "商户"
        })
      }), "（下文统称为直连商户）、", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "平台类商户"
        })
      }), "、", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "服务商"
        })
      }), "。开发者需要根据实际业务模式选择适用的合作身份。商户模型详细内容请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/pay-docs/hwzf-hezuoshenfen-0000001725918617",
        children: "接入模式"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "商户模型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "直连商户"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "直接与华为支付对接，使用鸿蒙支付服务的经营主体。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "平台类商户"
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为商户交易场景提供支付、结算解决方案，主要面向对商品交易或服务进行线上撮合和管理的平台。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "子商户"
              })
            }), "：平台上入驻华为支付开展交易的商家，与平台类商户关联。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "服务商"
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为商户提供开户申请、支付接入、技术开发等综合解决方案机构。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "特约商户"
              })
            }), "：服务商推荐在华为支付入网的商户，与服务商关联。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Payment Kit支持的支付能力如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "支付能力"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "支持的商户"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "接入场景"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "基础支付"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "直连商户、平台类商户、服务商"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/payment-kit-guide/payment-payment-process",
              children: "商户基础支付场景"
            }), "  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/payment-kit-guide/payment-common-pay-connect/payment-common-pay-introduction",
              children: "通用收银台支付相关场景"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户选购商品后，商户通过接入基础支付完成用户订单的创建与支付。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "合单支付"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "平台类商户"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/payment-kit-guide/payment-partner-combined",
              children: "平台类商户合单支付场景"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过合单支付，商户可将不同商户的一个或多个订单合并到同一个订单完成支付。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "支付并签约"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "直连商户、服务商"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/payment-kit-guide/payment-password-free-pay/payment-pay-and-sign",
              children: "支付并签约场景"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户支付完成后可与商户签订协议，完成后续相关业务自动扣款。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "签约代扣"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "直连商户、服务商"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/payment-kit-guide/payment-password-free-pay/payment-withhold-process",
              children: "签约代扣场景"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "商户可主动发起与用户签订相关协议，完成相关业务自动扣款（如水电费预缴，自动充值代扣等），简化用户操作流程。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "数字人民币支付"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "运营机构或受理服务机构入网的商户"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/payment-kit-guide/payment-digital-cny-pay",
              children: "数字人民币支付场景"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在运营机构或受理服务机构入网的商户可通过接入数字人民币来完成如用户话费充值缴费等相关支付操作。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支付能力之间的差异："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "基础支付与合单支付主要差异在于基础支付一次支付仅支持支付单个订单，合单支付一次支付可以支持平台类商户多个不同子商户的订单。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "基础支付及合单支付不涉及签约、支付并签约及签约代扣涉及用户及商户协议签订场景。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支付并签约与签约代扣差异在于签约时是否需要完成支付操作。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["数字人民币支付开发准备与其它支付能力有所差异，完成", (0,jsx_runtime.jsx)(_components.a, {
          href: "/payment-kit-guide/payment-preparations/payment-digital-cny-pay-preparations",
          children: "数字人民币接入准备"
        }), "即可根据接入场景接入开发。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "华为支付接入顺序如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(741035)/* ["default"] */.A) + "",
        width: "960",
        height: "175"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/payment-kit-guide/payment-digital-cny-pay",
        children: "数字人民币支付"
      }), "接入顺序如下："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(562962)/* ["default"] */.A) + "",
        width: "667",
        height: "105"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通用收银台", (0,jsx_runtime.jsx)(_components.a, {
        href: "/payment-kit-guide/payment-common-pay-connect/payment-common-pay-mix",
        children: "混合支付场景"
      }), "接入顺序如下："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(962901)/* ["default"] */.A) + "",
        width: "932",
        height: "169"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通用收银台", (0,jsx_runtime.jsx)(_components.a, {
        href: "/payment-kit-guide/payment-common-pay-connect/payment-common-pay-external",
        children: "纯外部支付场景"
      }), "接入顺序如下："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(111487)/* ["default"] */.A) + "",
        width: "644",
        height: "91"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户身份验证服务、人脸核身实人验证接入顺序如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(559330)/* ["default"] */.A) + "",
        width: "416",
        height: "85"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Payment Kit的能力只支持实物商品和服务（酒店服务、出行服务、充值缴费服务）的支付，暂不支持如电子虚拟人物形象，游戏中的关卡、货币及道具等虚拟商品的支付。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["虚拟商品的支付可接入", (0,jsx_runtime.jsx)(_components.a, {
        href: "/iap-kit-guide/iap-introduction",
        children: "IAP应用内支付服务"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "支持的设备",
      children: "支持的设备"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "能力/服务"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "支持设备"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "基础支付"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phone、Tablet、PC/2in1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "平台类商户合单支付"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phone、Tablet、PC/2in1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "免密支付"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phone、Tablet、PC/2in1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "数字人民币支付"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phone、Tablet、PC/2in1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "通用收银台"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phone、Tablet、PC/2in1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "引导用户绑卡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phone、Tablet、PC/2in1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "用户身份验证服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phone、Tablet"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "营销组件"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phone、Tablet、PC/2in1"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "支持的国家地区",
      children: "支持的国家/地区"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前Payment Kit的能力仅支持中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "模拟器支持情况",
      children: "模拟器支持情况"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本Kit暂不支持模拟器。"
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
559330(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
111487(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAoQAAABbCAIAAABlIgPLAAAYjklEQVR4Ae1dvW5kSRltAuBNVvAC1trBPAehA9MBEtIiViRIREiOLFki5QmwECMH1gYEy6RIDocVIzbfzDDBSJMYfVX1/dRvV7e7b03dOdZoXL73dv2c833nVNW93b35gB8gAASAABAAAkBgKAKboa2jcSAABIAAEAACQOADzBhBAASAABAAAkBgMAIw48EEoHkgAASAABAAAjBjxAAQAAJAAAgAgcEIwIwHE4DmgQAQAAJAAAjAjBEDQAAIAAEgAAQGIwAzHkwAmgcCQAAIAAEgADNGDAABIAAEgAAQGIwAzHgwAWgeCAABIAAEgADMGDEABIAAEAACQGAwAjDjwQSgeSAABIAAEAACMGPEABAAAkAACACBwQjAjAcTgOaBABAAAkAACMCMEQNAAAgAASAABAYjADMeTACaBwJAAAgAASAAM0YMAAEgAASAABAYjADMeDABaB4IAAEgAASAAMwYMQAEgAAQAAJAYDACMOPBBKB5IAAEgAAQAAKfnBm/evN+8/oJ/w5G4NWb98uHNVg7mC//woVZA19z8SUZDeImJU4YbBQ+OTPevH56+viMfwcjsHn91OD7RKfA2sF8+RcuzBr4mosvSVsQNylxwmCjADNem/EvLOs+tqARc2kE+JqLL1FwEDcpccJgowAzhhk3wqP3FDRiLo0AX3PxJXkI4iYlThhsFGDGMONGePSegkbMpRHgay6+JA9B3KTECYONAswYZtwIj95T0Ii5NAJ8zcWX5CGIm5Q4YbBRgBnDjBvh0XsKGjGXRoCvufiSPARxkxInDDYKMGOYcSM8ek9BI+bSCPA1F1+ShyBuUuKEwUYBZgwzboRH7yloxFwaAb7m4kvyEMRNSpww2CjAjGHGjfDoPQWNmEsjwNdcfEkegrhJiRMGGwWYMcy4ER69p6ARc2kE+JqLL8lDEDcpccJgowAzhhk3wqP3FDRiLo0AX3PxJXkI4iYlThhsFGDGMONGePSeOkgj3l2fb3b8XD08vb0921xcv3U0vb09u3p4+vju+nx7t/dnprabK1R4d7U5u3nXSP7Hm4vL+0r83G831FV79uHy/PYxOqJnF/7ctAZfMigp2FE83lzwuLpYKFYSKmxDJLxTIf8JfFF/qj/CqXb17opjyRDxeHMRiL7fppWlJAbKFuZL8rBMXILk29uzPNL4YAExf3E+dsZCgzwkoMZtLUdMnOjFGkhSz/3WpFjIUN9coZ+hP0Krrfnd9XmBWW2R6R5FnDDYKMCMLaNrKA+JtrJGcAKkKSE627ggUpOHS+fHd1csD/o7ZGBNFNKmay2Wj4d2uZK2nbs+sXbfXW1UwkLlM5ixqOTHZ/VR1vGAQ5B+dTjG59nNk5SbcmkPiBR/R/32mqw30lz10Y/PNG/jyuMZG3c1GYjwEjp6cX0TT6GiCiNxGJJlHz58KCdaYsYfnwvpUBq7RzXMayNf1MFqGBiES5mYzlwjapL8EmDjGYAxZgo/+yfHGFOZVPjx+SkDgV+iY3n6+DyKuIYHyymYcURVkb+5Dg6JtrJG5AlDRx4uN8W5rSGiJBwm2YoJ2Ts1brBZlJjIUVTrqbeRTkWDLfpu8WAY9cKsVfh6uNzoHCKMjuQy8j8GsMiCIdEBcgyIqFfZj66MVbJF4qlp171wJHS1wO/Vw+PNNuy7eEFPWooZ57EP0/QycexDhQFuyCPNcabS7TcodMWxMxR+WplUYpmtGyc3Z7LD1LO5vLIrYxc8nPu7V8axkXNn9Xc2G6b6F040MdqeAsw4lQ/Jt0kLQ6KtrBEmAwXMJG/TlPPaxwkpK61INWrb1CxJ0tbBhaSTtXqsHtlraFDnt3eVHdR4LCH8FmatxFe0SeinGiRs1o12yF9BeY8BkczepKDzgDR+VIo3m832zpqx67wINO9XG6c/v31MQihy90goFuZLpDwnznjb9jLbhNdI1pyidfMm2nlyQ9tnZeyinVlIQNOsd9ja+JFTCqzBn7nzHGnP5VVUcI36Fisd9plYC7xRxAmDjQLMOMoxK6mTlodEW64RFfQ4gTnBopSTFDXCQfW4rDOiw1nrf2u2i1i/lNNaJsvkIO6B+0vVzbma/imd+aRXxn5fnXfXU2OOd4DdiGhpFe1wsL3VN/MVk50QhUrcxKWg12S0LoTK8SOqbcyYjOpG1mHxPorIej7b0OgSHqkwJMs6t6kLe9R+h9nhX5y+EM752DnKZQYTwqB8Fz8zeLLM2/KtXMl01oFcLiJm48v0VK0nZoMnqXkUcQ0PllMw4yjHEuZm/HNItPWaceKybqdXV4qSosllopW6M1w0ttTpU/p65Malfcn4zbLP9Mc3QQLHqu2WxRf+CRr2Nh9jxT6H8FuYtRpf1OGb8MScnZGo/LEs2iE7ECr2Vrq+F6KAs8yxpKBE207GMwZ3jTFjZ94Pl4GmmAshtGPJ5RlfmC/V6+LXvfvAJudj/7S//RwoyilG0g28SK5mJTNIA/fmZ0Odyx4W8z9Np8jFi+vmYKJu68J2lco8w6sbrV5j+9ZXHkWcMNgowIxhxo3w6D1VE3eTnA7nSBHoSCQEHWbM9sZiGqV67Ad9yZn2kF6V18PiFepUM6CXk2qwgtCzM05iwirQVsV9LnVsYY2o8cXwMlkqlGYuEiAiqTWLsBiT5FbCYRCpGWs/uKQrYz6S/463qR3sYfku7ktPMMiPPMAlTFn6IqFYmC/Jw4w43ocIphixkLIpOxM8fH8BkfjLXwgKxcLZzd+D0189VNfQ1pjvt7wTnmAYd1hSvphZWabYEdGUrvlTnE+MIk4YbBRgxlGOlaR5sguGRFumERXQSmYcJZTP5+Qy1g5SgSAoLJdyKjiEmuLhVNI6I6knMWNnwLLgyJ9vsv1XueE+ZxKz/LbnTr6iSVLWYbe0DW/T4iXyCSAK5ErNUlDLsepcWRlvnd0yoUTH1j+crxEiUcRzO1pwX/kn1949+rfVxSAMybKd29SWF0JD3FcWtRSrAmMoMIbl+OSzLqM1mCOL5TsUkvU0xdHNbUZVAZd6Csvf7R3N5CJVKPxhhyb1S7UxWdruuPsLDQ+WUysyY0uJUsW7JUSPnQVn/Mq0LmPUTP8l2mhJJzuTlmwui17kgcW64CLG7rO1FZBr1j4UjwyRiZ3izl0VIQijKA851hF/TSQ0mq52xVZWE256B258GfGVzqnj/oQrg45EbOopjUBpt9W9hVnL+SrtzMc5YhOkPf8QKXwhRCUzvvRvbwvwSpY5kKPMpVN/osWTF3ehyYmAjMV3NTPj0u6I8EiFhflSva5tU8uI1N5kyO6JreCOapPislyoyqPaqiD89uHS+aV/VDvJl1ww0yNaj303Gj+fZeLnMn6jP3c14kIPSrX+4fBCDg4jThhsFFZkxp4AH5RBPaPpG6ttRGQ4KEbup5CukqI82bArG0mIJJGJpA/ejXKHjoUveYpVorOjMEQmcnGvoa2Z0xhLklSbizN//6nxEst++7LWWcdLnsO6IvfBE2TL79Nu7CLAV14z77xm7szCrO3kqxrbtG1gJ0Ahm+Kpkk58D4co3OAvtKWhlfBiwybaJw/JSJ30nU9GQWb8QPc4r9z7jIMaqG9pi4P4EgUvE2flKyw5/HuyzfLU9Vyyj8Qt+LcVKBoySZyfnTgKrOLFew/ufnDQLTF+l0EyM2C4/JOPWpUwpVMHEUCp6vnx/uE6fvBb+s+MxM1JtXU1WDjRhLiewlrMOKSuMJoWZHLnLVb+DKRyNBsDJhXYtWy1cawe73KeO3C+vXQfDcPqVlgaSmf4Gq2KY26PIwtE239++O+v/vIvG15ljdBUtP1vLBB1jiJ5yztgeoqR5d8FTbHNhbJhll+Y/L56MArlJ+lyhbcE6YPqhSdIK/edic1Y4kEGldN6UtYO4KscipRl0dh14GFGcjSImPfqcm3j+JLcIUi9Fou+69SHzJiW1JFJuK66I24URHEYjrmMjpg/hbiT8iWZ1UOc7/PZzTsOs5SgPOroShoUY+vf00XBvr3jg/IqX628Wdk0ZJEJLp6ugCMFIMBtPUqZXiZrmDiFhVMTfsKakKIjcokbxQY3sQxxwuBehfWYsUSP4SYwaj3Vn5UIDhezGdOfdnol82t7AfMauC/lqpsJ+qwIhs3qZsw4mddrtXEg7nl8gWj74zff/+Trf2y++vbrv/3bR9s+Zuwn1JFk5JTte6SpAi/Cc9+eHHb9SVl7KV97RuBhCMz1qpPyJQoO4o4eFcsQJwzuVViLGTu94LmhLGioUJwfpRxbr03m11Fl8Xvp6FWVN9KJi1PBLrKNGXvjP7991HlfaKyrzxWJXCDa/vjN9z/+LZnxT9mS9zPjSs9TUj6ny07KGvg6emidlC9RcBA3KXHC4F6FVZlxxJx3uPKyVZdK5N9ul0YX1vELeUtHX8Kt0K4LuaY1cucfftnNJn5xVjLjaCWX7Wq+yIxvv9t89e2p/3kz9q2QJf/hnwxLDhSO7EZgc2LWwNdx4/PUfEn+grgjE/f6aS+DXPLilZrx7h3gcL8keHB4nJLvePW8l06bKN45lhVwOOsc2t+SCTu0vHFt3icTvNzfodyt4MUwXWDObibsbza/oc1qrIyLXPQfPClr4KufiM4rT8qXGACI66Sj/7JliBMG9yqsxIzjxSgvSu3vsERmuzUPAlQ/eoJ3mD3T/ESJ90jycl2/ZotjuvFMrbOt0tp3e1n74j+/MpbNan3w5BA/XiDa/K2sH3317e9eH3TP+HPaf+6UiZOyBr46Wei/7KR8iYKDuH5GOq9chjhhcK/CSsw4ZSJ3R3+D1jqosQRdpNoHuOrvpYs2mXlrWje69SvM/HfA+cUxPyhoNqXDk2XmSBhI9BDZfpa8QLR9/8P/fv3X72ycYWWcRqCJrp5TJ2UNfPVQsNc1J+VLMgvE7UVKz8XLECcM7lX4nMy4qo9899dfkBihvmlKno62z/SLU1IlwY9pjStPC8txY8Zuma53o3Mzlk8hqPZZ2k0LQ6LtQDOWzQC7h2HKuvcg1OzeNhDAU2RMrhbvLOj1Sk2KP78bxHTSFIV0rco02jq4MGs7+MoDMsWBxhJNYaMLaigxPppTBjxTJN4pNtzGUjlIuCo7e476QD0sbJhFH+DsN64oYKo/lXhbmC/R9B3EZQh0hh9d5hcw9t1riRLqGiON5Hq+2PcilzH2Oa6xJI3anrxkXPFrRxEnDDYKazNjCgv3Y9ep5Yi0isDPefnsbbyX7osv2XFjjl0TwQbshrZdQ4s0UPxFa/dcvHh/u9BKmgnJ6IZE23E0oj0FiaY4FoSmmPpoyCVVb/nbqrSs6hBR0H6TtHGI6FVabUKW/Lkway2+qji7T50rK6oc9QgUUeLJqEHGZgq9UTClyW8sEXoud/wHWWSp0Q4b99rL+7zyZ25dOiYFeeCj8CpP2cJ8iYK3iDPASlztURAXzAoiXELzxn82iGmxki8a+Yy2P5ICq2cjNjUA9hiI6VX+qlHECYONwtrMOEf/czsyJNoO1gg3eWIPM3loJzHEYOoQzoB5CsUUh8mQ/5NqTsTdTr+srmzid6yFZC6unh8u6eMj3Mcy2+UjTa1ur2vPBDTVwfd2YdaqfHXhnEhkDlQqtW6MYnW9As205lNV890+boGekKl//jz9LgE7R2cDaE7mkhBiKhfmSxS8Shx3jEFTkGtHZN2icNnSz+QPmv3Yj2qo+G4eBlEfGO2iGWvA2IZqPX/J8VHECYONAsw4ipiX0PyJvHZItL1MI0ht/W4BaaWzTL955SGNbTWRTm/kyUHREVcQPTVmH5OlWmCOOw9I/d5d6eoh1bgJn6zrPqWvYDamth1htjBrRb46cJZRyHcR0prVkuWGXLTPyEE9Mk2BNm2Fmz6yYI2gLnWAX+v2n1wrRNzdzUXJjPli52edZrAwX6LgReL6w8xemY5UFsTi69ERxjza0rPQFfNFL2hxTVPA5o+ksPTt0MIo4oTBRgFmrOFiI3Xe8pBoO45GFM0yXc7Gu5RhecpKQXuS7gKVDGO0xfopq801kuRhsRs3x1f6XdO7cN/01u2vah8OCJ6FWSvw1YVz6S6sVdF07lJMrubMydd2/vuv+XsIks845NZ4N0UYF+JsQUkUM6bPoOafsObjPyu/S4NamC9R8AJxdrz7lFMz5th2gDt4vRnXnDIxSIXakt7Ddfj6L5c1pUzcZ1A7U28UccJgowAztqGzhvKQaDtMI4r3oiJFTBK+mpbeCCnzZZVGldPLTXqnfmOaShviqtTUfWxwbXrLma50663JzbiKbZQUrWWoryHWbr/hYYCOJjet1ZJ7pMgBKwtiKVio63IvH7nsw8B1wn0hRDBy0zrTGoPQGOyQLKt+hWLc7Z2G5C+ItqlNpugutKeS5yJ0PZezJmr5osFj0K5Mfyt3HCSjs0a18v5To4hreLCcghkfwmg/98tfOSTaDjPjFJzayjXWd6PsYr2kztfhO2j1vPsSnq08FqQqk4pXpsWR11r/8FeSK1Bz9/z1RCRS1iH2DqqFWSvztRtn3nhIATTjNXubwczMhCZW5OQuY4EFNmPllEu6Mk6jyPfNb5mYpvnx74fSrf3avroEmBmgq39hvlSvi1+h2KCjfkqnGnZ7iWLAfKNwz8cf+Sexw3Q24VRwS45nXFM/fRZvr/ULpJOnE6S2wwujiBMGGwWY8eG8llWgHv3LXD8k2srivi8UDTMuTclVTcQITQ28C6dpz0d2Mk7SrPPxSNCptusrvxQOZfctgRfXb1dhxjtwPq4Zy0rXM6JMhUwJbMplUvBQN9fEYsbs3v63XRmb2xNZ0y50TYClMTMky466MjbuGMw43IPQyNd5lbm4cF+gkS+Cm3BX4VrfKadcpE9x7qsnpetHEdfwYDkFM5ZwWUlhSLR9OmZstTesXHXOvms5xRJsH/Px76vhI34JxfWI95Oc1T9hrSQKycxsYdbKfKn4RrlgPKljwmEqCS80sxm7Ms62PVWFG2ZM34RYfvo96rO+a9ZML9zWiFkZswlVbktTO+pMMYkL86V6fbSVsXFHJoju7AS4HBdCZf3jj+LsCBTkJrqb67AidzXwDg0nXcxsTESSRzv/HEWcMNgowIyPyfTOUFjggiHRVhb3fdNGvC15ISenNVpfZq1kk8hrEMFlxWlS4BZbRr75YjoetkyDtedhw31IOt/358KslfnaiXMPhnElRFB0qz7s+ZM6p0jGZhxeZe8R5JhXj4RbElHTFDJuZcx16nDippkyMwtJG1qYL1HwMnHcYQ7XtLeF437sjI/b3dlsaELp5h/ehsWMff18sflO6535Qj3ZzTV9iTKTEr5Q+eKMnrOTgx0j6gNhFHHCYKMAMz4azYWI74uP475wSLQdRyNyK/UAJqLAqBqtLBkha4efX9s1WQ3wfEZvrvR+/Ge5A62nuKHMXfYIrYVZK/O1C+ceDO3XgddWxiV1Th/q4baqd3N5Dacgx88Dut0LtVu6zDs0tc4/l/fOTvjP8u900kBVLcyXKHiZOM4IjcldRxjegJ5ZEwdAvviSwGh8/NHZzbuOfHnXx/XGEMHbTjQEZqcwP1be+0c9kDhhsFGAGR9I6l4RsOTFQ2TiWBqxJFCfVFsLswa+Xsj+wnyJgoO4SYkTBhsFmDHMuBEevaegEXNpBPiaiy/JQxA3KXHCYKMAM4YZN8Kj9xQ0Yi6NAF9z8SV5COImJU4YbBRgxjDjRnj0noJGzKUR4GsuviQPQdykxAmDjQLMGGbcCI/eU9CIuTQCfM3Fl+QhiJuUOGGwUYAZw4wb4dF7Choxl0aAr7n4kjwEcZMSJww2CjBjmHEjPHpPQSPm0gjwNRdfkocgblLihMFGAWYMM26ER+8paMRcGgG+5uJL8hDETUqcMNgowIxhxo3w6D0FjZhLI8DXXHxJHoK4SYkTBhuFT86MX715v3n9hH8HI/DqzfsG3yc6BdYO5su/cGHWwNdcfEnagrhJiRMGG4VPzowbfcUpIAAEgAAQAAKrRABmvEpaMSggAASAABCYCQGY8Uxsoa9AAAgAASCwSgRgxqukFYMCAkAACACBmRCAGc/EFvoKBIAAEAACq0QAZrxKWjEoIAAEgAAQmAkBmPFMbKGvQAAIAAEgsEoEYMarpBWDAgJAAAgAgZkQgBnPxBb6CgSAABAAAqtEAGa8SloxKCAABIAAEJgJAZjxTGyhr0AACAABILBKBGDGq6QVgwICQAAIAIGZEIAZz8QW+goEgAAQAAKrRABmvEpaMSggAASAABCYCQGY8Uxsoa9AAAgAASCwSgRgxqukFYMCAkAACACBmRCAGc/EFvoKBIAAEAACq0QAZrxKWjEoIAAEgAAQmAkBmPFMbKGvQAAIAAEgsEoEYMarpBWDAgJAAAgAgZkQgBnPxBb6CgSAABAAAqtE4P/OBXAdPvReqAAAAABJRU5ErkJggg==");

},
962901(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959070-aff60cc07d11e14d5928280edfbdf693.png");

},
741035(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799420-50a21b7aa66ac955893e87918b4c39d6.png");

},
562962(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439115-8d67cb011b6b8ebd2d1b1e2f010b9eab.png");

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