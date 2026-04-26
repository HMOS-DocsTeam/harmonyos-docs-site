"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["899961"], {
818374(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ads_kit_guide_ads_publisher_service_dev_ads_publisher_service_roll_ads_publisher_service_roll_md_9f6_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ads-kit-guide-ads-publisher-service-dev-ads-publisher-service-roll-ads-publisher-service-roll-md-9f6.json
var site_docs_ads_kit_guide_ads_publisher_service_dev_ads_publisher_service_roll_ads_publisher_service_roll_md_9f6_namespaceObject = JSON.parse('{"id":"ads-kit-guide/ads-publisher-service-dev/ads-publisher-service-roll/ads-publisher-service-roll","title":"贴片广告","description":"场景介绍","source":"@site/docs/ads-kit-guide/ads-publisher-service-dev/ads-publisher-service-roll/ads-publisher-service-roll.md","sourceDirName":"ads-kit-guide/ads-publisher-service-dev/ads-publisher-service-roll","slug":"/ads-kit-guide/ads-publisher-service-dev/ads-publisher-service-roll/","permalink":"/harmonyos-docs-site/ads-kit-guide/ads-publisher-service-dev/ads-publisher-service-roll/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"贴片广告","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ads-publisher-service-roll","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"开屏广告","permalink":"/harmonyos-docs-site/ads-kit-guide/ads-publisher-service-dev/ads-publisher-service-splash/"},"next":{"title":"实时竞价","permalink":"/harmonyos-docs-site/ads-kit-guide/ads-publisher-service-dev/ads-real-time-bidding/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ads-kit-guide/ads-publisher-service-dev/ads-publisher-service-roll/ads-publisher-service-roll.md


const frontMatter = {
	title: '贴片广告',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ads-publisher-service-roll',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '贴片广告';

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
  "value": "展示广告",
  "id": "展示广告",
  "level": 3
}, {
  "value": "测试贴片广告",
  "id": "测试贴片广告",
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
        id: "贴片广告",
        children: "贴片广告"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "贴片广告是一种在视频播放前、视频播放中或视频播放结束后插入的视频或图片广告。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(835785)/* ["default"] */.A) + "",
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
              href: "/ref/ads-api/ads-comp/js-apis-adcomponent/js-apis-adcomponent",
              children: "AdComponent"
            }), "({ads: advertising.Advertisement[], displayOptions: advertising.AdDisplayOptions, interactionListener: advertising.AdInteractionListener, @BuilderParam adRenderer?: () => void, @Prop rollPlayState?: number})"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "展示广告，通过AdDisplayOptions进行广告展示参数设置，通过AdInteractionListener监听广告状态回调。  说明：为了保证广告能正确展示，该接口必须和请求广告接口配套使用。"
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
            src: (__webpack_require__(705903)/* ["default"] */.A) + "",
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
          children: ["需要创建一个AdLoader对象，通过AdLoader的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ads-api/ads-arkts/js-apis-advertising/js-apis-advertising#loadad",
            children: "loadAd"
          }), "方法请求广告，最后通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ads-api/ads-arkts/js-apis-advertising/js-apis-advertising#adloadlistener",
            children: "AdLoadListener"
          }), "来监听广告的加载状态。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在请求贴片广告时，需要在", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ads-api/ads-arkts/js-apis-advertising/js-apis-advertising#adoptions",
            children: "AdOptions"
          }), "中设置参数：totalDuration。"]
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
                children: "请求广告类型，贴片广告类型为60。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "adId"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["广告位ID。  - 如果仅调测广告，可使用测试广告位ID：o2e960bnfz。  - 如果要接入正式广告，则需要申请正式的广告位ID。可在应用发布前进入", (0,jsx_runtime.jsx)(_components.a, {
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
            children: "@Entry\n@Component\nstruct Index {\n  // 请求到的广告内容\n  @State ads: advertising.Advertisement[] = [];\n  // ...\n  private context: common.UIAbilityContext = this.getUIContext().getHostContext() as common.UIAbilityContext;\n\n  aboutToAppear(): void {\n    // 调用loadAd加载广告\n    void this.loadAd().catch((error: BusinessError) => {\n      hilog.error(0x0000, 'testTag', `Failed to loadAd. Code is ${error.code}, message is ${error.message}`);\n    });\n  }\n\n  // ...\n\n  build() {\n    // ...\n  }\n\n  // ...\n\n  private async loadAd(): Promise<void> {\n    // 广告请求回调监听\n    const adLoadListener: advertising.AdLoadListener = {\n      onAdLoadFailure: (errorCode: number, errorMsg: string) => {\n        hilog.error(0x0000, 'testTag', `Failed to load ad. Code is ${errorCode}, message is ${errorMsg}`);\n      },\n      onAdLoadSuccess: (ads: Array<advertising.Advertisement>) => {\n        hilog.info(0x0000, 'testTag', 'Succeeded in loading ad');\n        this.ads = ads;\n      }\n    };\n    // 广告请求参数\n    const adRequestParams: advertising.AdRequestParams = {\n      // 'o2e960bnfz'为测试专用的广告位ID，App正式发布时需要改为正式的广告位ID\n      adId: 'o2e960bnfz',\n      // 贴片广告类型\n      adType: 60,\n      // 用于区分普通在线请求和素材预加载请求 true: 素材预加载请求 false: 普通在线请求\n      isPreload: false,\n      // 开放匿名设备标识符\n      oaid: await requestOAID(this.context)\n    };\n    // 广告配置参数，开发者可根据项目实际情况设置\n    const adOptions: advertising.AdOptions = {\n      // 设置贴片广告展示时长（贴片广告必填）\n      totalDuration: 30\n    };\n    // 创建AdLoader广告对象\n    const adLoader: advertising.AdLoader = new advertising.AdLoader(this.context);\n    try {\n      // 调用广告请求接口\n      adLoader.loadAd(adRequestParams, adOptions, adLoadListener);\n    } catch (e) {\n      hilog.error(0x0000, 'testTag', `Failed to load ad. Code is ${e.code}, message is ${e.message}`);\n    }\n  }\n}\n\nasync function requestOAID(context: Context): Promise<string | undefined> {\n  // 向用户请求授权广告跨应用关联访问权限\n  let isPermissionGranted: boolean = false;\n  try {\n    const atManager: abilityAccessCtrl.AtManager = abilityAccessCtrl.createAtManager();\n    const result: PermissionRequestResult =\n      await atManager.requestPermissionsFromUser(context, ['ohos.permission.APP_TRACKING_CONSENT']);\n    isPermissionGranted = result.authResults[0] === abilityAccessCtrl.GrantStatus.PERMISSION_GRANTED;\n  } catch (err) {\n    hilog.error(0x0000, 'testTag', `Failed to request permission. Code is ${err.code}, message is ${err.message}`);\n  }\n  if (isPermissionGranted) {\n    hilog.info(0x0000, 'testTag', 'Succeeded in requesting permission');\n    try {\n      const oaid = await identifier.getOAID();\n      hilog.info(0x0000, 'testTag', 'Succeeded in getting OAID');\n      return oaid;\n    } catch (err) {\n      hilog.error(0x0000, 'testTag', `Failed to get OAID. Code is ${err.code}, message is ${err.message}`);\n    }\n  } else {\n    hilog.error(0x0000, 'testTag', 'Failed to request permission. User rejected');\n  }\n  return undefined;\n}\n"
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
            children: "import { common } from '@kit.AbilityKit';\nimport { AdComponent, advertising } from '@kit.AdsKit';\nimport { window } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "展示广告。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["展示广告通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ads-api/ads-arkts/js-apis-advertising/js-apis-advertising#adinteractionlistener",
            children: "AdInteractionListener"
          }), "监听广告状态回调，涉及的回调状态如下所示："]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "回调状态"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "扩展信息"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "使用建议"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "onAdFail"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "广告加载失败。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "广告展示失败时触发，需要将广告组件隐藏，播放正片。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "onPortrait"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "全屏状态下点击返回按钮。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "用户在全屏状态下点击返回按钮时触发，需要设置屏幕方向为竖屏，按需显示导航栏、状态栏、底部导航条和设置广告组件宽高。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "onLandscape"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "竖屏状态下点击全屏按钮。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "用户在竖屏状态下点击全屏按钮时触发，需要设置屏幕方向为横屏，按需隐藏导航栏、状态栏、底部导航条和设置广告组件宽高。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "onMediaProgress"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "广告播放进度。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "- playTime：类型number，单位ms，广告播放时长。  - percentage：类型number，单位百分比，广告播放进度。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "onMediaStart"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "广告开始播放。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "- playTime：类型number，单位ms，广告播放时长。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "onMediaPause"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "广告暂停播放。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "- playTime：类型number，单位ms，广告播放时长。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "onMediaStop"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "广告停止播放。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "- playTime：类型number，单位ms，广告播放时长。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "onMediaComplete"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "广告播放完成。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "- playTime：类型number，单位ms，广告播放时长。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "单个广告播放完成时触发，当所有广告播放完成后，需要将广告组件隐藏，播放正片。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "onMediaError"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "广告播放失败。"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["- playTime：类型number，单位ms，广告播放时长，-1为异常值。  - errorCode：类型number，错误码ID。  - errorMsg：类型string，错误信息。  错误码的详细介绍请参见AVPlayer.", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-avplayer/arkts-apis-media-avplayer#onerror9",
                  children: "on('error')"
                }), "错误码。"]
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "onMediaCountdown"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "广告倒计时。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "- countdownTime：类型number，单位s，倒计时时长。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "广告倒计时时触发，需要根据扩展信息的倒计时时长绘制倒计时控件。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "onBackClicked"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "点击返回按钮。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "用户在非全屏状态下或系统锁定全屏状态下点击返回按钮时触发，需要返回上一页面。"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在您的页面中使用AdComponent组件展示贴片广告。以前贴广告为例，前贴广告播放完成后进入正片播放。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "示例代码如下所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct Index {\n  // 请求到的广告内容\n  @State ads: advertising.Advertisement[] = [];\n  // 倒计时文案\n  @State countDownText: string = '';\n  // 贴片广告播放状态\n  @State rollPlayState: number = 1;\n  // 是否播放正片\n  @State isPlayVideo: boolean = false;\n  // 视频宽高比\n  @State ratio: number = 16 / 9;\n  // 广告展示参数，开发者可根据项目实际情况设置\n  private adDisplayOptions: advertising.AdDisplayOptions = {\n    // 是否静音\n    mute: true\n  };\n  // 已经播放的贴片广告数量\n  private playedAdSize: number = 0;\n  // 用于渲染右上角倒计时\n  private countDownTxtPlaceholder: string = '%d | VIP免广告';\n  private context: common.UIAbilityContext = this.getUIContext().getHostContext() as common.UIAbilityContext;\n\n  // ...\n\n  aboutToDisappear(): void {\n    // 设置屏幕方向为默认值，开发者可根据项目实际情况修改\n    void this.setWindowPreferredOrientation(window.Orientation.UNSPECIFIED).catch((error: BusinessError) => {\n      hilog.error(0x0000, 'testTag',\n        `Failed to setWindowPreferredOrientation. Code is ${error.code}, message is ${error.message}`);\n    });\n    // 显示导航栏、状态栏、底部导航条，开发者可根据项目实际情况修改\n    void this.setWindowSystemBar(['status', 'navigation']).catch((error: BusinessError) => {\n      hilog.error(0x0000, 'testTag',\n        `Failed to setWindowSystemBar. Code is ${error.code}, message is ${error.message}`);\n    });\n  }\n\n  build() {\n    Stack({ alignContent: Alignment.TopEnd }) {\n      if (!this.isPlayVideo && this.ads.length > 0) {\n        AdComponent({\n          ads: [...this.ads],\n          rollPlayState: this.rollPlayState,\n          displayOptions: this.adDisplayOptions,\n          interactionListener: {\n            // 广告状态变化回调\n            onStatusChanged: (status: string, ad: advertising.Advertisement, data: string) => {\n              switch (status) {\n                case 'onAdFail':\n                  hilog.error(0x0000, 'testTag', 'Status is onAdFail');\n                  this.isPlayVideo = true;\n                  break;\n                case 'onPortrait':\n                  hilog.info(0x0000, 'testTag', 'Status is onPortrait');\n                  // 设置屏幕方向为竖屏\n                   void this.setWindowPreferredOrientation(window.Orientation.PORTRAIT).catch((error: BusinessError) => {\n                     hilog.error(0x0000, 'testTag',\n                       `Failed to setWindowPreferredOrientation. Code is ${error.code}, message is ${error.message}`);\n                   });\n                  // 显示导航栏、状态栏、底部导航条\n                  void this.setWindowSystemBar(['status', 'navigation']).catch((error: BusinessError) => {\n                    hilog.error(0x0000, 'testTag',\n                      `Failed to setWindowSystemBar. Code is ${error.code}, message is ${error.message}`);\n                  });\n                  // 竖屏时还原宽高比\n                  this.ratio = 16 / 9;\n                  break;\n                case 'onLandscape':\n                  hilog.info(0x0000, 'testTag', 'Status is onLandscape');\n                  // 设置屏幕方向为横屏\n                  void this.setWindowPreferredOrientation(window.Orientation.LANDSCAPE).catch((error: BusinessError) => {\n                    hilog.error(0x0000, 'testTag',\n                      `Failed to setWindowPreferredOrientation. Code is ${error.code}, message is ${error.message}`);\n                  });\n                  // 隐藏导航栏、状态栏、底部导航条\n                  void this.setWindowSystemBar([]).catch((error: BusinessError) => {\n                    hilog.error(0x0000, 'testTag',\n                      `Failed to setWindowSystemBar. Code is ${error.code}, message is ${error.message}`);\n                  });\n                  // 横屏时忽略宽高比\n                  this.ratio = -1;\n                  break;\n                case 'onMediaProgress':\n                  hilog.info(0x0000, 'testTag', 'Status is onMediaProgress');\n                  break;\n                case 'onMediaStart':\n                  hilog.info(0x0000, 'testTag', 'Status is onMediaStart');\n                  break;\n                case 'onMediaPause':\n                  hilog.info(0x0000, 'testTag', 'Status is onMediaPause');\n                  break;\n                case 'onMediaStop':\n                  hilog.info(0x0000, 'testTag', 'Status is onMediaStop');\n                  break;\n                case 'onMediaComplete':\n                  hilog.info(0x0000, 'testTag', 'Status is onMediaComplete');\n                  // 所有广告都播放完毕后，开始播放正片\n                  this.playedAdSize++;\n                  if (this.playedAdSize === this.ads.length) {\n                    this.isPlayVideo = true;\n                  }\n                  break;\n                case 'onMediaError':\n                  hilog.error(0x0000, 'testTag', 'Status is onMediaError');\n                  break;\n                case 'onMediaCountdown':\n                  hilog.info(0x0000, 'testTag', 'Status is onMediaCountdown');\n                  const parseData: Record<string, Object> = this.safeParseData(data);\n                  this.countDownText = this.countDownTxtPlaceholder.replace('%d', String(parseData.countdownTime));\n                  break;\n                case 'onBackClicked':\n                  hilog.info(0x0000, 'testTag', 'Status is onBackClicked');\n                  this.getUIContext().getRouter().back();\n                  break;\n              }\n            }\n          }\n        })\n          .visibility(!this.isPlayVideo ? Visibility.Visible : Visibility.None)\n          .width('100%')\n          .height('100%')\n\n        Text(this.countDownText)\n          .fontSize(12)\n          .lineHeight(12)\n          .maxLines(1)\n          .textAlign(TextAlign.Center)\n          .fontColor(Color.White)\n          .textOverflow({ overflow: TextOverflow.Ellipsis })\n          .backgroundColor('#66000000')\n          .border({ radius: 25 })\n          .padding(8)\n          .margin(16)\n          .height(24)\n          .onClick(() => {\n            hilog.info(0x0000, 'testTag', 'OnVipClicked, do something...');\n            this.isPlayVideo = true;\n          })\n          .visibility(this.countDownText ? Visibility.Visible : Visibility.None)\n      }\n\n      Video({\n        // 广告后播放的视频，开发者需根据项目实际情况设置\n        src: $rawfile('videoTest.mp4'),\n        // 播放视频的预览图，开发者需根据项目实际情况设置\n        previewUri: $r('app.media.video_preview'),\n        controller: new VideoController()\n      })\n        .visibility(this.isPlayVideo ? Visibility.Visible : Visibility.None)\n        .autoPlay(this.isPlayVideo)\n        .controls(false)\n        .width('100%')\n        .height('100%')\n    }\n    .width('100%')\n    .height('100%')\n    .aspectRatio(this.ratio)\n  }\n\n  private async setWindowPreferredOrientation(orientation: Orientation): Promise<void> {\n    try {\n      const win: window.Window = await window.getLastWindow(this.context);\n      await win.setPreferredOrientation(orientation);\n    } catch (e) {\n      hilog.error(0x0000, 'testTag', `Failed to set preferred orientation. Code is ${e.code}, message is ${e.message}`);\n    }\n  }\n\n  private async setWindowSystemBar(names: Array<'status' | 'navigation'>): Promise<void> {\n    try {\n      const win: window.Window = await window.getLastWindow(this.context);\n      await win.setWindowSystemBarEnable(names);\n    } catch (e) {\n      hilog.error(0x0000, 'testTag', `Failed to set window system bar. Code is ${e.code}, message is ${e.message}`);\n    }\n  }\n\n  private safeParseData(data: string): Record<string, Object> {\n    try {\n      if (typeof data === 'string') {\n        return JSON.parse(data);\n      }\n      return JSON.parse(JSON.stringify(data));\n    } catch (e) {\n      hilog.error(0x0000, 'testTag', `Failed to parse data. Code is ${e.code}, message is ${e.message}`);\n    }\n    return {};\n  }\n\n  // ...\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "测试贴片广告",
      children: "测试贴片广告"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "测试贴片广告时，需要使用专门的测试广告位ID来获取测试广告，以避免在测试过程中产生无效的广告点击量。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["测试广告位ID仅作为功能调试使用，不可用于广告变现。您应在应用发布前先进入", (0,jsx_runtime.jsx)(_components.a, {
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
      children: "以下表格中提供了贴片广告的专用测试广告位ID："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "贴片"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "o2e960bnfz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16:9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用下载"
          })]
        })
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
835785(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799120-bee963a68005b6973dc048dbe8997ea4.png");

},
705903(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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