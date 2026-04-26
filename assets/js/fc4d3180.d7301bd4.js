"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["744675"], {
212378(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ads_kit_guide_ads_publisher_service_dev_ads_publisher_service_reward_ads_publisher_service_reward_md_fc4_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ads-kit-guide-ads-publisher-service-dev-ads-publisher-service-reward-ads-publisher-service-reward-md-fc4.json
var site_docs_ads_kit_guide_ads_publisher_service_dev_ads_publisher_service_reward_ads_publisher_service_reward_md_fc4_namespaceObject = JSON.parse('{"id":"ads-kit-guide/ads-publisher-service-dev/ads-publisher-service-reward/ads-publisher-service-reward","title":"激励广告","description":"场景介绍","source":"@site/docs/ads-kit-guide/ads-publisher-service-dev/ads-publisher-service-reward/ads-publisher-service-reward.md","sourceDirName":"ads-kit-guide/ads-publisher-service-dev/ads-publisher-service-reward","slug":"/ads-kit-guide/ads-publisher-service-dev/ads-publisher-service-reward/","permalink":"/harmonyos-docs-site/ads-kit-guide/ads-publisher-service-dev/ads-publisher-service-reward/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"激励广告","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ads-publisher-service-reward","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"原生广告","permalink":"/harmonyos-docs-site/ads-kit-guide/ads-publisher-service-dev/ads-publisher-service-native/"},"next":{"title":"插屏广告","permalink":"/harmonyos-docs-site/ads-kit-guide/ads-publisher-service-dev/ads-publisher-service-interstitial/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ads-kit-guide/ads-publisher-service-dev/ads-publisher-service-reward/ads-publisher-service-reward.md


const frontMatter = {
	title: '激励广告',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ads-publisher-service-reward',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '激励广告';

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
  "value": "校验激励广告服务端验证回调",
  "id": "校验激励广告服务端验证回调",
  "level": 2
}, {
  "value": "奖励用户",
  "id": "奖励用户",
  "level": 3
}, {
  "value": "校验服务端验证回调",
  "id": "校验服务端验证回调",
  "level": 3
}, {
  "value": "测试激励广告",
  "id": "测试激励广告",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "激励广告",
        children: "激励广告"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "激励广告是一种全屏幕的视频广告，用户可以选择点击观看，以换取相应奖励。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(118145)/* ["default"] */.A) + "",
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
            src: (__webpack_require__(359342)/* ["default"] */.A) + "",
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
          }), "，来监听广告的加载状态。"]
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
                children: "请求广告类型，激励广告类型为7。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "adId"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["广告位ID。  - 如果仅调测广告，可使用测试广告位ID：j14rx3xtac。  - 如果要接入正式广告，则需要申请正式的广告位ID。可在应用发布前进入", (0,jsx_runtime.jsx)(_components.a, {
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
            children: "@Entry\n@Component\nstruct Index {\n  private context: common.UIAbilityContext = this.getUIContext().getHostContext() as common.UIAbilityContext;\n\n  build() {\n    Column() {\n      Button('LoadAd')\n        .onClick(async () => {\n          await this.loadAd();\n        })\n    }\n    .width('100%')\n    .height('100%')\n    .justifyContent(FlexAlign.Center)\n  }\n\n  private async loadAd(): Promise<void> {\n    // 广告请求回调监听\n    const adLoadListener: advertising.AdLoadListener = {\n      // 广告请求失败回调\n      onAdLoadFailure: (errorCode: number, errorMsg: string) => {\n        hilog.error(0x0000, 'testTag', `Failed to load ad. Code is ${errorCode}, message is ${errorMsg}`);\n      },\n      // 广告请求成功回调\n      onAdLoadSuccess: (ads: Array<advertising.Advertisement>) => {\n        hilog.info(0x0000, 'testTag', 'Succeeded in loading ad');\n        // ...\n      }\n    };\n    // 广告请求参数\n    const adRequestParams: advertising.AdRequestParams = {\n      // 'j14rx3xtac'为测试专用的广告位ID，App正式发布时需要改为正式的广告位ID\n      adId: 'j14rx3xtac',\n      // 激励广告类型\n      adType: 7,\n      // 开放匿名设备标识符\n      oaid: await requestOAID(this.context)\n    };\n    // 广告配置参数，开发者可根据项目实际情况设置\n    const adOptions: advertising.AdOptions = {};\n    // 创建AdLoader广告对象\n    const adLoader: advertising.AdLoader = new advertising.AdLoader(this.context);\n    try {\n      // 调用广告请求接口\n      adLoader.loadAd(adRequestParams, adOptions, adLoadListener);\n    } catch (e) {\n      hilog.error(0x0000, 'testTag', `Failed to load ad. Code is ${e.code}, message is ${e.message}`);\n    }\n  }\n}\n\nasync function requestOAID(context: Context): Promise<string | undefined> {\n  // 向用户请求授权广告跨应用关联访问权限\n  let isPermissionGranted: boolean = false;\n  try {\n    const atManager: abilityAccessCtrl.AtManager = abilityAccessCtrl.createAtManager();\n    const result: PermissionRequestResult =\n      await atManager.requestPermissionsFromUser(context, ['ohos.permission.APP_TRACKING_CONSENT']);\n    isPermissionGranted = result.authResults[0] === abilityAccessCtrl.GrantStatus.PERMISSION_GRANTED;\n  } catch (err) {\n    hilog.error(0x0000, 'testTag', `Failed to request permission. Code is ${err.code}, message is ${err.message}`);\n  }\n  if (isPermissionGranted) {\n    hilog.info(0x0000, 'testTag', 'Succeeded in requesting permission');\n    try {\n      const oaid = await identifier.getOAID();\n      hilog.info(0x0000, 'testTag', 'Succeeded in getting OAID');\n      return oaid;\n    } catch (err) {\n      hilog.error(0x0000, 'testTag', `Failed to get OAID. Code is ${err.code}, message is ${err.message}`);\n    }\n  } else {\n    hilog.error(0x0000, 'testTag', 'Failed to request permission. User rejected');\n  }\n  return undefined;\n}\n"
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
          children: "开发者需要在应用中订阅com.huawei.hms.pps.action.PPS_REWARD_STATUS_CHANGED事件来监听激励广告页面变化并接收奖励信息。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在订阅到公共事件后，可以从", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commonevent/js-apis-inner-commonevent-commoneventdata/js-apis-inner-commonevent-commoneventdata",
            children: "CommonEventData"
          }), "的parameters参数中获取激励广告页面变化状态和奖励信息。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "使用reward_ad_status作为key值获取激励广告页面变化状态，涉及的页面变化状态如下所示："
            }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
                    children: "onAdReward"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "广告获得奖励。"
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
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "使用reward_ad_data作为key值获取奖励信息，其中："
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "属性rewardType用来获取奖励物品的名称。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "属性rewardAmount用来获取奖励物品的数量。"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "示例代码如下所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const KEY_REWARD_DATA = 'reward_ad_data';\nconst KEY_REWARD_STATUS = 'reward_ad_status';\n\nexport class RewardAdStatusHandler {\n  // 用于保存创建成功的订阅者对象，后续使用其完成订阅及退订的动作\n  private subscriber: commonEventManager.CommonEventSubscriber | null = null;\n\n  // 订阅方法，需要在每次展示广告前调用\n  public registerPPSReceiver(): void {\n    if (this.subscriber) {\n      this.unRegisterPPSReceiver();\n    }\n    // 订阅者信息\n    const subscribeInfo: commonEventManager.CommonEventSubscribeInfo = {\n      events: ['com.huawei.hms.pps.action.PPS_REWARD_STATUS_CHANGED'],\n      // publisherBundleName被设置为\"com.huawei.hms.adsservice\"，表示只有来自该包名的事件才会被订阅者接收和处理。\n      // 如果没有明确声明publisherBundleName，那么订阅者可能会收到来自其它包名的伪造事件，从而导致安全性问题或误导。\n      publisherBundleName: 'com.huawei.hms.adsservice'\n    };\n    // 创建订阅者回调\n    commonEventManager.createSubscriber(subscribeInfo, (err: BusinessError, commonEventSubscriber:\n      commonEventManager.CommonEventSubscriber) => {\n      if (err) {\n        hilog.error(0x0000, 'testTag', `Failed to create subscriber. Code is ${err.code}, message is ${err.message}`);\n        return;\n      }\n      hilog.info(0x0000, 'testTag', 'Succeeded in creating subscriber');\n      this.subscriber = commonEventSubscriber;\n      // 订阅公共事件回调\n      commonEventManager.subscribe(this.subscriber, (err: BusinessError, commonEventSubscriber:\n        commonEventManager.CommonEventData) => {\n        if (err) {\n          hilog.error(0x0000, 'testTag', `Failed to subscribe. Code is ${err.code}, message is ${err.message}`);\n        } else {\n          hilog.info(0x0000, 'testTag', 'Succeeded in subscribing data');\n          const status: string = commonEventSubscriber?.parameters?.[KEY_REWARD_STATUS];\n          switch (status) {\n            case 'onAdOpen':\n              hilog.info(0x0000, 'testTag', 'Status is onAdOpen');\n              break;\n            case 'onAdClick':\n              hilog.info(0x0000, 'testTag', 'Status is onAdClick');\n              break;\n            case 'onAdClose':\n              hilog.info(0x0000, 'testTag', 'Status is onAdClose');\n              this.unRegisterPPSReceiver();\n              break;\n            case 'onAdReward':\n              const rewardData: Record<string, string | number> = commonEventSubscriber?.parameters?.[KEY_REWARD_DATA];\n              const rewardType: string = rewardData?.rewardType as string;\n              const rewardAmount: number = rewardData?.rewardAmount as number;\n              hilog.info(0x0000, 'testTag', `Status is onAdReward. Type is ${rewardType}, Amount is ${rewardAmount}`);\n              break;\n            case 'onVideoPlayBegin':\n              hilog.info(0x0000, 'testTag', 'Status is onVideoPlayBegin');\n              break;\n            case 'onVideoPlayEnd':\n              hilog.info(0x0000, 'testTag', 'Status is onVideoPlayEnd');\n              break;\n            default:\n              break;\n          }\n        }\n      });\n    });\n  }\n\n  // 取消订阅\n  public unRegisterPPSReceiver(): void {\n    commonEventManager.unsubscribe(this.subscriber, (err: BusinessError) => {\n      if (err) {\n        hilog.error(0x0000, 'testTag', `Failed to unsubscribe. Code is ${err.code}, message is ${err.message}`);\n      } else {\n        hilog.info(0x0000, 'testTag', 'Succeeded in unsubscribing');\n        this.subscriber = null;\n      }\n    });\n  }\n}\n"
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
            children: "import { common } from '@kit.AbilityKit';\nimport { advertising } from '@kit.AdsKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n// 事件订阅步骤中创建的文件\nimport { RewardAdStatusHandler } from './RewardAdStatusHandler';\n"
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
            children: "@Entry\n@Component\nstruct Index {\n  private context: common.UIAbilityContext = this.getUIContext().getHostContext() as common.UIAbilityContext;\n\n  build() {\n    // ...\n  }\n\n  private async loadAd(): Promise<void> {\n    // 广告请求回调监听\n    const adLoadListener: advertising.AdLoadListener = {\n      // 广告请求失败回调\n      onAdLoadFailure: (errorCode: number, errorMsg: string) => {\n        hilog.error(0x0000, 'testTag', `Failed to load ad. Code is ${errorCode}, message is ${errorMsg}`);\n      },\n      // 广告请求成功回调\n      onAdLoadSuccess: (ads: Array<advertising.Advertisement>) => {\n        hilog.info(0x0000, 'testTag', 'Succeeded in loading ad');\n        try {\n          // 注册激励广告状态监听器\n          new RewardAdStatusHandler().registerPPSReceiver();\n          // 广告展示参数，开发者可根据项目实际情况设置\n          const adDisplayOptions: advertising.AdDisplayOptions = {\n            // 是否静音\n            mute: true,\n            // ...\n          };\n          // 此处ads[0]表示请求到的第一个广告，开发者可根据项目实际情况选择\n          advertising.showAd(ads[0], adDisplayOptions, this.context);\n        } catch (e) {\n          hilog.error(0x0000, 'testTag', `Failed to show ad. Code is ${e.code}, message is ${e.message}`);\n        }\n      }\n    };\n    // ...\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "校验激励广告服务端验证回调",
      children: "校验激励广告服务端验证回调"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "服务端验证回调是指鲸鸿动能平台发送给媒体服务器的网址请求，其中带有特定的查询参数，用来通知媒体服务器某位用户因为与激励视频广告互动而应予以奖励，从而规避欺骗的行为。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(555855)/* ["default"] */.A) + "",
        width: "979",
        height: "708"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "奖励用户",
      children: "奖励用户"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在给用户发奖励时，要把握好用户体验和奖励验证之间的平衡。由于服务器端回调会存在延迟的情况，因此我们建议客户端立即奖励用户，同时在收到服务器端回调时对所有奖励进行验证。这种做法可确保奖励符合发放条件，同时提供良好的用户体验。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对于某些应用而言，奖励是否达到发放条件非常重要，用户可适当接受延迟。这时，推荐做法是等待服务器端回调完成验证，再向用户发放奖励。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "校验服务端验证回调",
      children: "校验服务端验证回调"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(736251)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "App上架至华为应用市场（AppGallery）时间超过12小时才可以收到回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置激励广告的奖励配置。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["您在", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/service/ads/publisher/html/index.html?lang=zh",
            children: "鲸鸿动能媒体服务平台"
          }), "上申请激励视频广告位时选择“媒体管理（点击媒体名）> 新增展示位 > 选择激励视频（点击下一步，进入编辑页面）”，设置奖励类型和奖励数量，并点击“高级设置”，设置服务器端验证的URL。如下图："]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(7674)/* ["default"] */.A) + "",
            width: "1006",
            height: "359"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）设置自定义数据customData和userId。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["您在", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ads-kit-guide/ads-publisher-service-dev/ads-publisher-service-reward#%E5%B1%95%E7%A4%BA%E5%B9%BF%E5%91%8A",
            children: "展示广告第2点"
          }), "之前可以设置自定义数据customData和userId。示例代码如下所示："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { advertising } from '@kit.AdsKit';\n\n// 广告展示参数，开发者可根据项目实际情况设置\nconst adDisplayOptions: advertising.AdDisplayOptions = {\n  // 是否静音\n  mute: true,\n  // 设置自定义数据\n  customData: 'CUSTOM_DATA',\n  // 设置自定义用户id\n  userId: '1234567'\n};\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(102889)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果没有设置customData和userId，不影响发放奖励事件上报但是服务端验证的参数中没有这两个字段。如果设置customData和userId，必须在展示广告之前设置并且URLEncode之后，长度不超过1024个字符，否则影响服务端验证。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取要验证的内容。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["用户观看完激励广告时，鲸鸿动能平台服务端会把需要验证的参数以及keyId和sign传给媒体提供的URL：", (0,jsx_runtime.jsx)(_components.code, {
            children: "https://www.example.com/feedback（[即第1点中配置的验证URL](ads-publisher-service-reward.md#校验服务端验证回调)）。请求体样例："
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n    \"adId\" : \"tj14rx3xtac\",\n    \"data\" : \"CUSTOM_DATA\",\n    \"keyId\" : \"12345678\",\n    \"rewardAmount\" : \"10\",\n    \"rewardName\" : \"金币\",\n    \"newSign\" : \"OA33u6mypnhE4hbmF32N/ibYi1uXt72nDDyYMwjDI6JXVVFKePZYo4F7Fuk2MaG......\",\n    \"uniqueId\" : \"3361626337333932313435313430373438383561376265636130393939313166\",\n    \"userId\" : \"1234567\"\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "服务器端验证回调查询参数说明："
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "参数名称"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "类型"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "是否必选"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "描述"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "adId"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "String"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "激励视频广告位ID"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "data"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "String"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "自定义数据字符串"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "keyId"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "String"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "验证回调的密钥"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "rewardAmount"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "String"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "奖励数量"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "rewardName"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "String"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "奖励奖品"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "sign"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "String"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "回调的签名"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "newSign"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "String"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "新版本回调签名"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "uniqueId"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "String"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "获奖事件生成的十六进制的标识符"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "userId"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "String"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "用户ID"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "eventType"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "String"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "事件类型"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "组装验证参数"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "验证内容（除sign、keyId）格式顺序如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "adId={adId}&data={data}&rewardAmount={rewardAmount}&rewardName={rewardName}&uniqueId={uniqueId}&userId={userId}"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "其中‘{}’里面表示参数的值，且参数顺序不能变。如果参数为null或者空字符串，则URL中不拼接该参数。然后用SHA256计算散列值，得到paramContentData。示例代码如下所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "String adId = request.getParameter(\"adId\");\nString data = request.getParameter(\"data\");\n// ...\nString userId = request.getParameter(\"userId\");\nString param = \"adId=\" + adId + \"&data=\" + data + \"&rewardAmount=\" + rewardAmount + \"&rewardName=\" + rewardName + \"&uniqueId=\" + uniqueId + \"&userId=\" + userId;\n// sha256Value为全小写数据\nString sha256Value = Sha256Util.digest(param);\nbyte[] paramContentData = sha256Value.getBytes(Charset.forName(\"UTF-8\"));\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "可参考以下工具类计算散列值："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { advertising } from '@kit.AdsKit';\npublic static String digest(String message) {\n  if (TextUtils.isEmpty(message)) {\n    return \"\";\n  }\n  byte[] content = message.getBytes(StandardCharsets.UTF_8);\n  return bytesToHexString(digest(content));\n}\n\npublic static byte[] digest(byte[] data) {\n  try {\n    MessageDigest md = MessageDigest.getInstance(\"SHA-256\");\n    return md.digest(data);\n  } catch (NoSuchAlgorithmException e) {\n    LOGGER.error(\"sha256 NoSuchAlgorithmException\");\n  }\n  return new byte[]{};\n}\n\npublic static String bytesToHexString(byte[] bytes) {\n  if (null == bytes) {\n    return \"\";\n  }\n  StringBuilder sb = new StringBuilder();\n  for (int i = 0; i < bytes.length; i++) {\n    String hex = Integer.toHexString(0xFF & bytes[i]);\n    if (hex.length() == 1) {\n      sb.append('0');\n    }\n    sb.append(hex);\n  }\n  return sb.toString();\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取公钥列表。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["a. 在", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/service/ads/publisher/html/index.html?lang=zh",
            children: "鲸鸿动能媒体服务平台"
          }), "上查看对应的账户信息时选择“账户”。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(759978)/* ["default"] */.A) + "",
            width: "1227",
            height: "561"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过点击上图所示的“获取密钥”按钮弹出如下所示的弹框，获取“开发者ID”和“密钥”。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(730295)/* ["default"] */.A) + "",
            width: "421",
            height: "59"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "b. 您根据应用分发区域不同，需要使用对应站点的接口URL去获取公钥列表，不同站点对应的接口URL如下所示："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）：<", (0,jsx_runtime.jsx)(_components.code, {
              children: "https://ppscrowd-drcn.op.hicloud.com/action-lib-track/publickeys&gt;"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "将body通过密钥进行HMAC-SHA256加密得到签名，替换到Authorization中，并设置“开发者ID”和Authorization到Header中。示例代码如下所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "String data = \"\";\nString url = \"https://ppscrowd-dre.op.dbankcloud.com/action-lib-track/publickeys\";\nString authorization = \"Digest validTime=\\\"{0}\\\", response=\\\"{1}\\\"\";\n// 开发者ID\nString userId = \"YOUR_PUBLISHER_ID\";\n// 密钥\nString key = \"YOUR_KEY\";\n\nHttpClient httpclient = HttpClients.createDefault();\nHttpGet request = new HttpGet();\ntry {\n    // 将body通过密钥进行HMAC-SHA256加密得到签名，替换到Authorization中\n    String validTime = String.valueOf(System.currentTimeMillis());\n    String body = validTime + \":/publickeys\";\n    byte[] keyBytes = Base64.decodeBase64(key);\n    byte[] bodyBytes = body.getBytes(Charsets.UTF_8);\n\n    Mac mac = Mac.getInstance(\"HmacSHA256\");\n    SecretKey secretKey = new SecretKeySpec(keyBytes, \"HmacSHA256\");\n    mac.init(secretKey);\n    byte[] signatureBytes = mac.doFinal(bodyBytes);\n\n    String signature = (signatureBytes == null) ? null : Hex.encodeHexString(signatureBytes);\n    authorization = MessageFormat.format(authorization, validTime, signature);\n    // 设置开发者ID和Authorization到Header中\n    request.setURI(new URI(url));\n    request.setHeader(\"userId\", userId);\n    request.setHeader(\"Authorization\", authorization);\n    HttpResponse response = httpclient.execute(request);\n    data = EntityUtils.toString(response.getEntity());\n} catch (Exception e) {\n    System.out.println(e.getMessage());\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "返回data消息体（publicKey已匿名化）："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n    \"keys\": [\n        {\n            \"keyId\":\"12345678\",\n            \"publicKey\":\"LS0tLS1*******************************************************\"\n        },\n        {\n            \"keyId\": \"22345678\",\n            \"publicKey\":\"LS0tLS1*******************************************************\"\n        }\n    ]\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "返回消息结构体："
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "参数名称"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "类型"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "是否必选"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "描述"
              })]
            })
          }), (0,jsx_runtime.jsx)(_components.tbody, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "keys"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "List<key>"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "返回公钥列表"
              })]
            })
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "key结构体："
          }), "\n"]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "参数名称"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "类型"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "是否必选"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "描述"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "keyId"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "String"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "密钥ID"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "publicKey"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "String"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "公钥"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "执行验证。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "a. 根据keyId从公钥列表中找到对应的base64编码后的publicKey。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "b. 将paramContentData、publicKey、newSign和SHA256withRSA/PSS数字签名算法的入参，执行验证。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "示例代码如下所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "public static boolean verify(byte[] data, String publicKey, String newSign, String signatureAlgorithm) {\n    try {\n        byte[] keyBytes = base64Decode(publicKey);\n        X509EncodedKeySpec keySpec = new X509EncodedKeySpec(keyBytes);\n        KeyFactory keyFactory = KeyFactory.getInstance(\"RSA\");\n        PublicKey publicK = keyFactory.generatePublic(keySpec);\n        Signature signature = Signature.getInstance(signatureAlgorithm);\n        signature.initVerify(publicK);\n        signature.update(data);\n        return signature.verify(base64Decode(newSign));\n    } catch (InvalidKeyException | SignatureException | UnsupportedEncodingException | InvalidKeySpecException | NoSuchAlgorithmException e) {\n        return false;\n    }\n}\n\nprivate static byte[] base64Decode(String encoded) throws UnsupportedEncodingException {\n    return Base64.decodeBase64(encoded.getBytes(\"UTF-8\"));\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "测试激励广告",
      children: "测试激励广告"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["激励广告测试广告位ID，仅可用于调测激励广告功能，不可用于广告变现，在应用正式发布前需替换为正式的激励广告位ID。您应在应用发布前先进入", (0,jsx_runtime.jsx)(_components.a, {
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
      children: "激励广告测试广告位ID列表如下："
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
            children: "激励"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "j14rx3xtac"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图片"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16:9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用下载"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "激励"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "j2mh81xmqs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9:16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网页推广"
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
730295(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
736251(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
102889(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
359342(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
118145(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438811-c913cf9fbb3e9a4158618f4c4bc9e3e4.png");

},
555855(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958766-7bfd7f270fe2c9c4324583aea775fb7c.png");

},
7674(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478767-fe0b79d1fb0b22ef49f14e46a46f13b3.png");

},
759978(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799118-3118e6c5aa09afa1d6b03fc08ef5d9c7.png");

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