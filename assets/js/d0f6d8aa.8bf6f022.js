"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["349254"], {
794093(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ads_kit_guide_ads_publisher_service_dev_ads_real_time_bidding_ads_real_time_bidding_md_d0f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ads-kit-guide-ads-publisher-service-dev-ads-real-time-bidding-ads-real-time-bidding-md-d0f.json
var site_docs_ads_kit_guide_ads_publisher_service_dev_ads_real_time_bidding_ads_real_time_bidding_md_d0f_namespaceObject = JSON.parse('{"id":"ads-kit-guide/ads-publisher-service-dev/ads-real-time-bidding/ads-real-time-bidding","title":"实时竞价","description":"场景介绍","source":"@site/docs/ads-kit-guide/ads-publisher-service-dev/ads-real-time-bidding/ads-real-time-bidding.md","sourceDirName":"ads-kit-guide/ads-publisher-service-dev/ads-real-time-bidding","slug":"/ads-kit-guide/ads-publisher-service-dev/ads-real-time-bidding/","permalink":"/harmonyos-docs-site/ads-kit-guide/ads-publisher-service-dev/ads-real-time-bidding/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"title":"实时竞价","sidebar_position":8,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ads-real-time-bidding","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"贴片广告","permalink":"/harmonyos-docs-site/ads-kit-guide/ads-publisher-service-dev/ads-publisher-service-roll/"},"next":{"title":"展示广告时显示白屏","permalink":"/harmonyos-docs-site/ads-kit-guide/ads-publisher-service-dev/ads-publisher-service-faq/ads-publisher-service-faq-4/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ads-kit-guide/ads-publisher-service-dev/ads-real-time-bidding/ads-real-time-bidding.md


const frontMatter = {
	title: '实时竞价',
	sidebar_position: 8,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ads-real-time-bidding',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '实时竞价';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "支持场景",
  "id": "支持场景",
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
  "value": "添加竞价参数",
  "id": "添加竞价参数",
  "level": 3
}, {
  "value": "处理竞价结果",
  "id": "处理竞价结果",
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
    p: "p",
    pre: "pre",
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
        id: "实时竞价",
        children: "实时竞价"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "实时竞价是指用户在访问媒体产生曝光机会时，众多家DSP（Demand Side Platform，需求方平台）根据曝光的上下文以及用户属性实时地评估曝光价值并给出报价，出价最高的DSP胜出，赢得此次曝光机会。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持Phone、Tablet、PC/2in1设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用PC/2in1设备时，需要确保设备上智慧营销服务或广告服务的版本在8.4.80.300及以上，版本号可通过选择“设置> 应用和元服务 > 更多应用”查看。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "支持场景",
      children: "支持场景"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "原生广告"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "激励广告"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "插屏广告"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "开屏广告"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "贴片广告"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ads-api/ads-arkts/js-apis-advertising/js-apis-advertising#loadad",
              children: "loadAd"
            }), "(adParam: AdRequestParams, adOptions: AdOptions, listener: AdLoadListener): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求单广告位广告，通过AdRequestParams、AdOptions进行广告请求参数设置，通过AdLoadListener监听广告请求回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ads-api/ads-arkts/js-apis-advertising/js-apis-advertising#loadadwithmultislots",
              children: "loadAdWithMultiSlots"
            }), "(adParams: AdRequestParams[], adOptions: AdOptions, listener: MultiSlotsAdLoadListener): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求多广告位广告，通过AdRequestParams[]、AdOptions进行广告请求参数设置，通过MultiSlotsAdLoadListener监听广告请求回调。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "添加竞价参数",
      children: "添加竞价参数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者需要在广告请求参数", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ads-api/ads-arkts/js-apis-advertising/js-apis-advertising#adrequestparams",
        children: "AdRequestParams"
      }), "中添加实时竞价相关参数。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "实时竞价关键参数如下所示："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "tMax"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "交易的最大超时时间（包含网络延迟），单位ms。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cur"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "竞价请求支持的币种，支持传多个，用英文逗号分隔。当前支持五种货币：  1. CNY（单位：元）。  2. USD（单位：美元）。  3. EUR（单位：欧元）。  4. GBP（单位：英镑）。  5. JPY（单位：日元）。  不填默认是CNY。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bidFloor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "竞价广告位的底价。当前支持五种货币：  1. CNY（单位：元）。  2. USD（单位：美元）。  3. EUR（单位：欧元）。  4. GBP（单位：英镑）。  5. JPY（单位：日元）。  不填默认是CNY。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bidFloorCur"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "竞价广告位底价使用的币种。如果bidFloor非空，则bidFloorCur也非空。当前只支持五种货币中的一种：  1. CNY（单位：元）。  2. USD（单位：美元）。  3. EUR（单位：欧元）。  4. GBP（单位：英镑）。  5. JPY（单位：日元）。  不填默认是CNY。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bpkgName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "广告位竞投的APP包名，支持传多个，用英文逗号分隔。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例代码如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { advertising } from '@kit.AdsKit';\n\nconst adRequestParams: advertising.AdRequestParams = {\n  // 'h8asowxwhq'为测试专用的广告位ID，暂无竞价信息，App正式发布时需要改为正式的广告位ID\n  adId: 'h8asowxwhq',\n  // 广告类型\n  adType: 3,\n  // 交易的最大超时时间\n  tMax: 100,\n  // 竞价请求支持的币种，多个用英文逗号分隔\n  cur: 'CNY',\n  // 竞价广告位的底价\n  bidFloor: 6.66,\n  // 竞价广告位底价使用的币种\n  bidFloorCur: 'CNY',\n  // 广告位竞投的APP包名，多个用英文逗号分隔\n  bpkgName: 'com.huawei.baidu,com.huawei.music'\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "处理竞价结果",
      children: "处理竞价结果"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者需要在广告请求成功后的回调AdLoadListener.", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ads-api/ads-arkts/js-apis-advertising/js-apis-advertising#onadloadsuccess",
        children: "onAdLoadSuccess"
      }), "或MultiSlotsAdLoadListener.", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ads-api/ads-arkts/js-apis-advertising/js-apis-advertising#onadloadsuccess",
        children: "onAdLoadSuccess"
      }), "中，处理广告返回的实时竞价结果", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ads-api/ads-arkts/js-apis-advertising/js-apis-advertising#advertisement",
        children: "Advertisement"
      }), ".biddingInfo。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "实时竞价结果信息如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(895724)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["回传竞价结果，需要申请使用Internet网络权限", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/app-permissions/permissions-for-all#ohospermissioninternet",
        children: "ohos.permission.INTERNET"
      }), "。详细申请权限流程请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ads-kit-guide/development-preparation",
        children: "开发准备"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "price"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "本条广告的eCPM（Effective Cost Per Mille，每一千次展示可以获得的广告收入）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cur"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "本条广告的价格币种。支持币种：CNY（单位：元）、USD（单位：美元）、EUR（单位：欧元）、GBP（单位：英镑）、JPY（单位：日元）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nurl"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体回传竞价成功结果的URL。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "lurl"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体回传竞价失败结果的URL。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "若广告竞胜，开发者需要替换nurl中的宏，并回传竞胜结果。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "宏说明如下："
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "宏"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "SECOND_PRICE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "竞胜时，其他DSP最高出价。样例：3.6。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "AUCTION_CURRENCY"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "价格币种。支持币种：CNY（单位：元）、USD（单位：美元）、EUR（单位：欧元）、GBP（单位：英镑）、JPY（单位：日元）。"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "若广告竞败，开发者需要替换lurl中的宏，并回传竞败结果。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "宏说明如下："
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "宏"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "AUCTION_PRICE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "竞败时，其他DSP最高出价。样例：3.6。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "AUCTION_LOSS"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "竞价结果，如果没有走到参竞环节也需要回调，并替换具体过滤结果码。  枚举：  102：竞价失败。  103：底价过滤。  104：包名过滤。  105：其他原因过滤。  4005：超时未返回。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "AUCTION_CURRENCY"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "价格币种。支持币种：CNY（单位：元）、USD（单位：美元）、EUR（单位：欧元）、GBP（单位：英镑）、JPY（单位：日元）。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "AUCTION_APP_PKG"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "竞败时，竞胜DSP推广的App包名。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "AUCTION_APP_NAME"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "竞败时，竞胜DSP推广的App名称。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "AUCTION_CP_ID"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "竞败时，竞胜DSP的编号：  1：广点通  2：穿山甲  3：百青藤  4：快手联盟  5：爱奇艺  6：阿里  7：VIVO  8：OPPO  9：小米  10：京东  11：拼多多  100：其他"
              })]
            })]
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例代码如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { advertising } from '@kit.AdsKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { rcp } from '@kit.RemoteCommunicationKit';\n\ninterface BiddingInfo {\n  // 本条广告的eCPM（每一千次展示可以获得的广告收入）\n  price: number;\n\n  // 本条广告的价格币种\n  cur: string;\n\n  // 媒体回传竞价成功结果的URL\n  nurl: string;\n\n  // 媒体回传竞价失败结果的URL\n  lurl: string;\n}\n\nconst adLoaderListener: advertising.AdLoadListener = {\n  // 广告请求失败回调\n  onAdLoadFailure: (errorCode: number, errorMsg: string) => {\n    hilog.error(0x0000, 'testTag', `Failed to load ad. Code is ${errorCode}, message is ${errorMsg}`);\n  },\n  // 广告请求成功回调\n  onAdLoadSuccess: (ads: Array<advertising.Advertisement>) => {\n    hilog.info(0x0000, 'testTag', 'Succeeded in loading ad');\n    // 期望的底价\n    const bidFloor: number = 6;\n    const biddingSuccessAds: Array<advertising.Advertisement> = [];\n    for (const ad of ads) {\n      const biddingInfo: BiddingInfo = ad.biddingInfo as BiddingInfo;\n      if (!biddingInfo) {\n        continue;\n      }\n      if (biddingInfo.cur === 'CNY' && biddingInfo.price >= bidFloor) {\n        hilog.info(0x0000, 'testTag', 'Petal Ads wins.');\n        if (biddingInfo.nurl) {\n          const url: string = biddingInfo.nurl\n            // 竞胜时，其他DSP最高出价\n            .replace('SECOND_PRICE', '3.6')\n            // 价格币种\n            .replace('AUCTION_CURRENCY', 'CNY');\n          void sendBiddingResult(url).catch((error: BusinessError) => {\n            hilog.error(0x0000, 'testTag',\n              `Failed to sendBiddingResult. Code is ${error.code}, message is ${error.message}`);\n          });\n        }\n        biddingSuccessAds.push(ad);\n      } else {\n        hilog.info(0x0000, 'testTag', 'Petal Ads loses.');\n        if (biddingInfo.lurl) {\n          const url: string = biddingInfo.lurl\n            // 竞败时，其他DSP最高出价\n            .replace('AUCTION_PRICE', '3.6')\n            // 竞价结果\n            .replace('AUCTION_LOSS', '102')\n            // 价格币种\n            .replace('AUCTION_CURRENCY', 'CNY')\n            // 竞败时，竞胜DSP推广的App包名\n            .replace('AUCTION_APP_PKG', 'com.huawei.music')\n            // 竞败时，竞胜DSP推广的App名称\n            .replace('AUCTION_APP_NAME', 'music')\n            // 竞败时，竞胜DSP的编号\n            .replace('AUCTION_CP_ID', '100')\n          void sendBiddingResult(url).catch((error: BusinessError) => {\n            hilog.error(0x0000, 'testTag',\n              `Failed to sendBiddingResult. Code is ${error.code}, message is ${error.message}`);\n          });\n        }\n      }\n    }\n    // ...此处省略展示广告的逻辑\n  }\n};\n\nasync function sendBiddingResult(url: string): Promise<void> {\n  let session: rcp.Session | undefined = undefined;\n  try {\n    session = rcp.createSession();\n    await session.get(url);\n  } catch (e) {\n    hilog.error(0x0000, 'testTag', `Failed to send bidding result. Code is ${e.code}, message is ${e.message}`);\n  } finally {\n    session?.close();\n  }\n}\n"
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
895724(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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