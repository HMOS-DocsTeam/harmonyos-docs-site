"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["900687"], {
692539(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ads_kit_guide_ads_publisher_service_dev_ads_publisher_service_interstitial_ads_publisher_service_interstitial_md_dbb_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ads-kit-guide-ads-publisher-service-dev-ads-publisher-service-interstitial-ads-publisher-service-interstitial-md-dbb.json
var site_docs_ads_kit_guide_ads_publisher_service_dev_ads_publisher_service_interstitial_ads_publisher_service_interstitial_md_dbb_namespaceObject = JSON.parse('{"id":"ads-kit-guide/ads-publisher-service-dev/ads-publisher-service-interstitial/ads-publisher-service-interstitial","title":"插屏广告","description":"场景介绍","source":"@site/docs/ads-kit-guide/ads-publisher-service-dev/ads-publisher-service-interstitial/ads-publisher-service-interstitial.md","sourceDirName":"ads-kit-guide/ads-publisher-service-dev/ads-publisher-service-interstitial","slug":"/ads-kit-guide/ads-publisher-service-dev/ads-publisher-service-interstitial/","permalink":"/harmonyos-docs-site/ads-kit-guide/ads-publisher-service-dev/ads-publisher-service-interstitial/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"插屏广告","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ads-publisher-service-interstitial","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"激励广告","permalink":"/harmonyos-docs-site/ads-kit-guide/ads-publisher-service-dev/ads-publisher-service-reward/"},"next":{"title":"开屏广告","permalink":"/harmonyos-docs-site/ads-kit-guide/ads-publisher-service-dev/ads-publisher-service-splash/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ads-kit-guide/ads-publisher-service-dev/ads-publisher-service-interstitial/ads-publisher-service-interstitial.md


const frontMatter = {
	title: '插屏广告',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ads-publisher-service-interstitial',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '插屏广告';

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
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "请求广告",
  "id": "请求广告",
  "level": 3
}, {
  "value": "事件订阅",
  "id": "事件订阅",
  "level": 3
}, {
  "value": "展示广告",
  "id": "展示广告",
  "level": 3
}, {
  "value": "测试插屏广告",
  "id": "测试插屏广告",
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
        id: "插屏广告",
        children: "插屏广告"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "插屏广告是一种在应用开启、暂停或退出时以全屏或半屏的形式弹出的广告形式，展示时机巧妙避开用户对应用的正常体验，尺寸大，曝光效果好。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(45656)/* ["default"] */.A) + "",
        width: "320",
        height: "640"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持Phone、Tablet、PC/2in1设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用PC/2in1设备时，需要确保设备上智慧营销服务或广告服务的版本在8.4.80.300及以上，版本号可通过选择“设置> 应用和元服务 > 更多应用”查看。"
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
              href: "/ref/ads-api/ads-arkts/js-apis-advertising/js-apis-advertising#advertisingshowad",
              children: "showAd"
            }), "(ad: Advertisement, options: AdDisplayOptions, context?: common.UIAbilityContext): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "展示广告，通过AdDisplayOptions进行广告展示参数设置。  说明：为了保证广告能正确展示，该接口必须和请求广告接口配套使用。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "请求广告",
      children: "请求广告"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入相关模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { abilityAccessCtrl, common, PermissionRequestResult } from '@kit.AbilityKit';\nimport { advertising, identifier } from '@kit.AdsKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取OAID。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["若需提升广告推送精准度，可以在请求参数", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ads-api/ads-arkts/js-apis-advertising/js-apis-advertising#adrequestparams",
            children: "AdRequestParams"
          }), "中添加oaid属性。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如何获取OAID参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ads-kit-guide/oaid-service",
            children: "获取OAID信息"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(773683)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用以下示例中提供的测试广告位时，必须先获取OAID信息。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "请求单广告位广告。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["需要先创建一个AdLoader对象，通过AdLoader的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ads-api/ads-arkts/js-apis-advertising/js-apis-advertising#loadad",
            children: "loadAd"
          }), "方法请求广告，最后通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ads-api/ads-arkts/js-apis-advertising/js-apis-advertising#adloadlistener",
            children: "AdLoadListener"
          }), "来监听广告的加载状态。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "请求广告关键参数如下所示："
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "请求广告参数名"
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
                children: "adType"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "number"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "请求广告类型，插屏广告类型为12。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "adId"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["广告位ID。  - 如果仅调测广告，可使用测试广告位ID：p540739a8w。  - 如果要接入正式广告，则需要申请正式的广告位ID。可在应用发布前进入", (0,jsx_runtime.jsx)(_components.a, {
                  href: "https://developer.huawei.com/consumer/cn/monetize",
                  children: "流量变现官网"
                }), "，点击“开始变现”，登录", (0,jsx_runtime.jsx)(_components.a, {
                  href: "https://developer.huawei.com/consumer/cn/service/ads/publisher/html/index.html?lang=zh",
                  children: "鲸鸿动能媒体服务平台"
                }), "进行申请，具体操作详情请参见", (0,jsx_runtime.jsx)(_components.a, {
                  href: "https://developer.huawei.com/consumer/cn/doc/monetize/zhanshiweichuangjian-0000001132700049",
                  children: "展示位创建"
                }), "。"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "oaid"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "开放匿名设备标识符，用于精准推送广告。不填无法获取到个性化广告。"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "示例代码如下所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct Index {\n  private context: common.UIAbilityContext = this.getUIContext().getHostContext() as common.UIAbilityContext;\n\n  build() {\n    Column() {\n      Button('LoadAd')\n        .onClick(async () => {\n          await this.loadAd();\n        })\n    }\n    .width('100%')\n    .height('100%')\n    .justifyContent(FlexAlign.Center)\n  }\n\n  private async loadAd(): Promise<void> {\n    // 广告请求回调监听\n    const adLoadListener: advertising.AdLoadListener = {\n      onAdLoadFailure: (errorCode: number, errorMsg: string) => {\n        hilog.error(0x0000, 'testTag', `Failed to load ad. Code is ${errorCode}, message is ${errorMsg}`);\n      },\n      onAdLoadSuccess: (ads: Array<advertising.Advertisement>) => {\n        hilog.info(0x0000, 'testTag', 'Succeeded in loading ad');\n        // ...\n      }\n    };\n    // 广告请求参数\n    const adRequestParams: advertising.AdRequestParams = {\n      // 'p540739a8w'为测试专用的广告位ID，App正式发布时需要改为正式的广告位ID\n      adId: 'p540739a8w',\n      // 插屏广告类型\n      adType: 12,\n      // 开放匿名设备标识符\n      oaid: await requestOAID(this.context)\n    };\n    // 广告配置参数，开发者可根据项目实际情况设置\n    const adOptions: advertising.AdOptions = {};\n    // 创建AdLoader广告对象\n    const adLoader: advertising.AdLoader = new advertising.AdLoader(this.context);\n    try {\n      // 调用广告请求接口\n      adLoader.loadAd(adRequestParams, adOptions, adLoadListener);\n    } catch (e) {\n      hilog.error(0x0000, 'testTag', `Failed to load ad. Code is ${e.code}, message is ${e.message}`);\n    }\n  }\n}\n\nasync function requestOAID(context: Context): Promise<string | undefined> {\n  // 向用户请求授权广告跨应用关联访问权限\n  let isPermissionGranted: boolean = false;\n  try {\n    const atManager: abilityAccessCtrl.AtManager = abilityAccessCtrl.createAtManager();\n    const result: PermissionRequestResult =\n      await atManager.requestPermissionsFromUser(context, ['ohos.permission.APP_TRACKING_CONSENT']);\n    isPermissionGranted = result.authResults[0] === abilityAccessCtrl.GrantStatus.PERMISSION_GRANTED;\n  } catch (err) {\n    hilog.error(0x0000, 'testTag', `Failed to request permission. Code is ${err.code}, message is ${err.message}`);\n  }\n  if (isPermissionGranted) {\n    hilog.info(0x0000, 'testTag', 'Succeeded in requesting permission');\n    try {\n      const oaid = await identifier.getOAID();\n      hilog.info(0x0000, 'testTag', 'Succeeded in getting OAID');\n      return oaid;\n    } catch (err) {\n      hilog.error(0x0000, 'testTag', `Failed to get OAID. Code is ${err.code}, message is ${err.message}`);\n    }\n  } else {\n    hilog.error(0x0000, 'testTag', 'Failed to request permission. User rejected');\n  }\n  return undefined;\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "事件订阅",
      children: "事件订阅"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入相关模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { BusinessError, commonEventManager } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "事件订阅。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开发者需要在应用中订阅com.huawei.hms.pps.action.PPS_INTERSTITIAL_STATUS_CHANGED事件来监听插屏广告页面变化。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在订阅到公共事件后，可以从", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commonevent/js-apis-inner-commonevent-commoneventdata/js-apis-inner-commonevent-commoneventdata",
            children: "CommonEventData"
          }), "的parameters参数中使用interstitial_ad_status作为key值获取插屏广告页面变化状态。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "涉及的页面变化状态如下所示："
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "页面变化状态"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "onAdOpen"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "打开广告。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "onAdClick"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "点击广告。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "onAdClose"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "关闭广告。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "onVideoPlayBegin"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "广告视频开始播放。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "onVideoPlayEnd"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "广告视频播放结束。"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "示例代码如下所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const KEY_INTERSTITIAL_STATUS = 'interstitial_ad_status';\n\nexport class InterstitialAdStatusHandler {\n  // 用于保存创建成功的订阅者对象，后续使用其完成订阅及退订的动作\n  private subscriber: commonEventManager.CommonEventSubscriber | null = null;\n\n  // 订阅方法，需要在每次展示广告前调用\n  public registerPPSReceiver(): void {\n    if (this.subscriber) {\n      this.unRegisterPPSReceiver();\n    }\n    // 订阅者信息\n    const subscribeInfo: commonEventManager.CommonEventSubscribeInfo = {\n      events: ['com.huawei.hms.pps.action.PPS_INTERSTITIAL_STATUS_CHANGED'],\n      // publisherBundleName被设置为\"com.huawei.hms.adsservice\"，这意味着只有来自该包名的事件才会被订阅者接收和处理。\n      // 如果没有明确声明publisherBundleName，那么订阅者可能会收到来自其它包名的伪造事件，从而导致安全性问题或误导。\n      publisherBundleName: 'com.huawei.hms.adsservice'\n    };\n    // 创建订阅者回调\n    commonEventManager.createSubscriber(subscribeInfo,\n      (err: BusinessError, commonEventSubscriber: commonEventManager.CommonEventSubscriber) => {\n        if (err) {\n          hilog.error(0x0000, 'testTag', `Failed to create subscriber. Code is ${err.code}, message is ${err.message}`);\n          return;\n        }\n        hilog.info(0x0000, 'testTag', 'Succeeded in creating subscriber');\n        this.subscriber = commonEventSubscriber;\n        // 订阅公共事件回调\n        commonEventManager.subscribe(this.subscriber,\n          (err: BusinessError, commonEventData: commonEventManager.CommonEventData) => {\n            if (err) {\n              hilog.error(0x0000, 'testTag', `Failed to subscribe. Code is ${err.code}, message is ${err.message}`);\n            } else {\n              // 订阅者成功接收到公共事件\n              hilog.info(0x0000, 'testTag', 'Succeeded in subscribing data');\n              // 获取插屏广告页面变化状态\n              const status: string = commonEventData?.parameters?.[KEY_INTERSTITIAL_STATUS];\n              switch (status) {\n                case 'onAdOpen':\n                  hilog.info(0x0000, 'testTag', 'Status is onAdOpen');\n                  break;\n                case 'onAdClick':\n                  hilog.info(0x0000, 'testTag', 'Status is onAdClick');\n                  break;\n                case 'onAdClose':\n                  hilog.info(0x0000, 'testTag', 'Status is onAdClose');\n                  this.unRegisterPPSReceiver();\n                  break;\n                case 'onVideoPlayBegin':\n                  hilog.info(0x0000, 'testTag', 'Status is onVideoPlayBegin');\n                  break;\n                case 'onVideoPlayEnd':\n                  hilog.info(0x0000, 'testTag', 'Status is onVideoPlayEnd');\n                  break;\n                default:\n                  break;\n              }\n            }\n          });\n      });\n  }\n\n  // 取消订阅\n  public unRegisterPPSReceiver(): void {\n    commonEventManager.unsubscribe(this.subscriber, (err: BusinessError) => {\n      if (err) {\n        hilog.error(0x0000, 'testTag', `Failed to unsubscribe. Code is ${err.code}, message is ${err.message}`);\n      } else {\n        hilog.info(0x0000, 'testTag', 'Succeeded in unsubscribing');\n        this.subscriber = null;\n      }\n    });\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "展示广告",
      children: "展示广告"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入相关模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { common } from '@kit.AbilityKit';\nimport { advertising } from '@kit.AdsKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n// 事件订阅步骤中创建的文件\nimport { InterstitialAdStatusHandler } from './InterstitialAdStatusHandler';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "展示广告。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["开发者需要调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ads-api/ads-arkts/js-apis-advertising/js-apis-advertising#advertisingshowad",
            children: "showAd"
          }), "方法来展示广告，ads为", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E8%AF%B7%E6%B1%82%E5%B9%BF%E5%91%8A",
            children: "请求广告"
          }), "返回的广告信息，在每次展示广告前需要注册", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E4%BA%8B%E4%BB%B6%E8%AE%A2%E9%98%85",
            children: "事件订阅"
          }), "中定义的监听器。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "示例代码如下所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct Index {\n  private context: common.UIAbilityContext = this.getUIContext().getHostContext() as common.UIAbilityContext;\n\n  build() {\n    // ...\n  }\n\n  private async loadAd(): Promise<void> {\n    // 广告请求回调监听\n    const adLoadListener: advertising.AdLoadListener = {\n      onAdLoadFailure: (errorCode: number, errorMsg: string) => {\n        hilog.error(0x0000, 'testTag', `Failed to load ad. Code is ${errorCode}, message is ${errorMsg}`);\n      },\n      onAdLoadSuccess: (ads: Array<advertising.Advertisement>) => {\n        hilog.info(0x0000, 'testTag', 'Succeeded in loading ad');\n        try {\n          // 注册插屏广告状态监听器\n          new InterstitialAdStatusHandler().registerPPSReceiver();\n          // 广告展示参数，开发者可根据项目实际情况设置\n          const adDisplayOptions: advertising.AdDisplayOptions = {\n            // 是否静音\n            mute: true\n          };\n          // 此处ads[0]表示请求到的第一个广告，开发者可根据项目实际情况选择\n          advertising.showAd(ads[0], adDisplayOptions, this.context);\n        } catch (e) {\n          hilog.error(0x0000, 'testTag', `Failed to show ad. Code is ${e.code}, message is ${e.message}`);\n        }\n      }\n    };\n    // ...\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "测试插屏广告",
      children: "测试插屏广告"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["测试插屏广告时，需要使用专门的测试广告位ID来获取测试广告，以避免在测试过程中产生无效的广告点击量。测试广告位ID仅作为功能调试使用，不可用于广告变现。您应在应用发布前先进入", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/monetize",
        children: "流量变现官网"
      }), "，点击“开始变现”，登录", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/service/ads/publisher/html/index.html?lang=zh",
        children: "鲸鸿动能媒体服务平台"
      }), "，申请正式的广告位ID并替换测试广告位ID，具体操作详情请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/distribution/monetize/zhanshiweichuangjian-0000001132700049",
        children: "展示位创建"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下表格中提供了插屏广告的专用测试广告位ID："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "广告位类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "测试广告位ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "展示形式"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "比例"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "推广类型"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "插屏"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "p540739a8w"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图片"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16:9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网页推广"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "插屏"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "v1rknehtfa"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9:16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "推广元服务"
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
773683(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
45656(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958768-bc0a685cc418891c29de6ea4bb60ddf5.png");

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