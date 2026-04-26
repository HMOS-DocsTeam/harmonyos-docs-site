"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["657771"], {
242707(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ads_kit_guide_ads_publisher_service_dev_ads_publisher_service_splash_ads_publisher_service_splash_md_f9a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ads-kit-guide-ads-publisher-service-dev-ads-publisher-service-splash-ads-publisher-service-splash-md-f9a.json
var site_docs_ads_kit_guide_ads_publisher_service_dev_ads_publisher_service_splash_ads_publisher_service_splash_md_f9a_namespaceObject = JSON.parse('{"id":"ads-kit-guide/ads-publisher-service-dev/ads-publisher-service-splash/ads-publisher-service-splash","title":"开屏广告","description":"场景介绍","source":"@site/docs/ads-kit-guide/ads-publisher-service-dev/ads-publisher-service-splash/ads-publisher-service-splash.md","sourceDirName":"ads-kit-guide/ads-publisher-service-dev/ads-publisher-service-splash","slug":"/ads-kit-guide/ads-publisher-service-dev/ads-publisher-service-splash/","permalink":"/harmonyos-docs-site/ads-kit-guide/ads-publisher-service-dev/ads-publisher-service-splash/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"开屏广告","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ads-publisher-service-splash","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"插屏广告","permalink":"/harmonyos-docs-site/ads-kit-guide/ads-publisher-service-dev/ads-publisher-service-interstitial/"},"next":{"title":"贴片广告","permalink":"/harmonyos-docs-site/ads-kit-guide/ads-publisher-service-dev/ads-publisher-service-roll/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ads-kit-guide/ads-publisher-service-dev/ads-publisher-service-splash/ads-publisher-service-splash.md


const frontMatter = {
	title: '开屏广告',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ads-publisher-service-splash',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '开屏广告';

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
  "value": "测试开屏广告",
  "id": "测试开屏广告",
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
        id: "开屏广告",
        children: "开屏广告"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开屏广告是一种在应用启动时且在应用主界面显示之前需要被展示的广告。您需要预先为App设计一张开屏默认的Slogan图片，确保在未获取到开屏广告之前展示默认的Slogan，提供良好的用户体验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开屏广告分为全屏开屏广告、半屏开屏广告，其中全屏开屏广告展示形式为广告铺满整个页面；半屏开屏广告展示形式会根据媒体页面自定义布局渲染广告、icon和版权信息，一般情况下建议将icon和版权信息展示在广告下方。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(392787)/* ["default"] */.A) + "",
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
            children: "import { abilityAccessCtrl, common, PermissionRequestResult } from '@kit.AbilityKit';\nimport { advertising, identifier } from '@kit.AdsKit';\nimport { router, window } from '@kit.ArkUI';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n"
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
            src: (__webpack_require__(765311)/* ["default"] */.A) + "",
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
          }), "来监听广告的加载状态。测试开屏广告时，需要使用专门的测试广告位来获取测试开屏广告，示例代码中提供了两种开屏广告类型对应的广告位：半屏开屏（图片）（g3tl51sqih）和全屏开屏（视频）（r145sz31dp），测试广告位ID仅作为调试使用，不可用于广告变现。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "请求广告关键参数如下所示："
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
                children: "请求广告类型，开屏广告类型为1。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "adId"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["广告位ID。  - 如果仅调测广告，可使用测试广告位ID：g3tl51sqih半屏开屏（图片）和r145sz31dp全屏开屏（视频）。  - 如果要接入正式广告，则需要申请正式的广告位ID。可在应用发布前进入", (0,jsx_runtime.jsx)(_components.a, {
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
                children: "adCount"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "number"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "广告数量。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "orientation"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "number"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "媒体请求广告的屏幕方向。1表示竖屏，0表示横屏，不设置则默认为1。当前未上架横屏开屏素材，若设置请求屏幕方向为横屏则不展示开屏广告。如果媒体设置应用固定横屏展示，但该参数未设置或者设置为1，则展示效果会受影响。"
              })]
            })]
          })]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "返回广告参数名"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "类型"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsx)(_components.tbody, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "isFullScreen"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "boolean"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "标识返回的广告是否为全屏，true为全屏广告，false为半屏广告。"
              })]
            })
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(574572)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "1、如果超时没有请求到广告，应用自行跳转到默认首页。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "2、为保证开屏展示效果，建议开发者在请求广告前，设置屏幕方向为竖屏。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct Index {\n  @State ad: advertising.Advertisement | undefined = undefined;\n  // ...\n  private context: common.UIAbilityContext = this.getUIContext().getHostContext() as common.UIAbilityContext;\n  // 是否超时\n  private isTimeOut: boolean = false;\n  // 超时时间(单位毫秒)，开发者可根据实际情况修改\n  private timeOutDuration: number = 1000;\n  // 超时index\n  private timeOutIndex: number = -1;\n\n  aboutToAppear(): void {\n    // 开启全屏模式沉浸页面\n    this.setWindowLayoutFullScreen(true);\n    // 设置屏幕方向为竖屏\n    this.setWindowPreferredOrientation(window.Orientation.PORTRAIT);\n    // 调用loadAd加载广告\n    // ...\n  }\n\n  aboutToDisappear(): void {\n    // 关闭全屏模式，开发者可根据实际情况修改\n    this.setWindowLayoutFullScreen(false);\n    // 设置屏幕方向为默认值，开发者可根据实际情况修改\n    this.setWindowPreferredOrientation(window.Orientation.UNSPECIFIED);\n  }\n\n  private async setWindowLayoutFullScreen(isLayoutFullScreen: boolean): Promise<void> {\n    try {\n      const win: window.Window = await window.getLastWindow(this.context);\n      await win.setWindowLayoutFullScreen(isLayoutFullScreen);\n    } catch (e) {\n      hilog.error(0x0000, 'testTag', `Failed to set window layout. Code is ${e.code}, message is ${e.message}`);\n    }\n  }\n\n  private async setWindowPreferredOrientation(orientation: Orientation): Promise<void> {\n    try {\n      const win: window.Window = await window.getLastWindow(this.context);\n      await win.setPreferredOrientation(orientation);\n    } catch (e) {\n      hilog.error(0x0000, 'testTag', `Failed to set preferred orientation. Code is ${e.code}, message is ${e.message}`);\n    }\n  }\n\n  build() {\n    // ...\n  }\n\n  // ...\n  private async loadAd(adId: string): Promise<void> {\n    // 广告请求参数\n    const adRequestParams: advertising.AdRequestParams = {\n      // 广告位ID\n      adId: adId,\n      // 开屏广告类型\n      adType: 1,\n      // 请求的广告数量\n      adCount: 1,\n      // 开放匿名设备标识符\n      oaid: await requestOAID(this.context)\n    };\n    // 广告请求回调监听\n    const adLoadListener: advertising.AdLoadListener = {\n      onAdLoadFailure: (errorCode: number, errorMsg: string) => {\n        hilog.error(0x0000, 'testTag', `Failed to load ad. Code is ${errorCode}, message is ${errorMsg}`);\n      },\n      onAdLoadSuccess: (ads: Array<advertising.Advertisement>) => {\n        clearTimeout(this.timeOutIndex);\n        if (this.isTimeOut) {\n          return;\n        }\n        hilog.info(0x0000, 'testTag', 'Succeeded in loading ad');\n        this.ad = ads[0];\n      }\n    };\n    // 广告配置参数，开发者可根据项目实际情况设置\n    const adOptions: advertising.AdOptions = {};\n    // 创建AdLoader广告对象\n    const adLoader: advertising.AdLoader = new advertising.AdLoader(this.context);\n    // 启动超时定时器\n    this.timeOutHandler();\n    try {\n      // 调用广告请求接口\n      adLoader.loadAd(adRequestParams, adOptions, adLoadListener);\n    } catch (e) {\n      hilog.error(0x0000, 'testTag', `Failed to load ad. Code is ${e.code}, message is ${e.message}`);\n    }\n  }\n\n  private timeOutHandler(): void {\n    this.isTimeOut = false;\n    // 超时处理\n    this.timeOutIndex = setTimeout(() => {\n      this.isTimeOut = true;\n      this.routeToHome();\n      hilog.error(0x0000, 'testTag', 'Load ad time out');\n    }, this.timeOutDuration);\n  }\n\n  private routeToHome(): void {\n    // 开发者可根据项目实际情况修改超时之后要跳转的目标页面\n    this.getUIContext().getRouter().replaceUrl({ url: 'pages/Index' }, router.RouterMode.Single)\n      .catch((e: BusinessError) => {\n        hilog.error(0x0000, 'testTag', `Failed to route to home. Code is ${e.code}, message is ${e.message}`);\n      });\n  }\n}\n\nasync function requestOAID(context: Context): Promise<string | undefined> {\n  // 向用户请求授权广告跨应用关联访问权限\n  let isPermissionGranted: boolean = false;\n  try {\n    const atManager: abilityAccessCtrl.AtManager = abilityAccessCtrl.createAtManager();\n    const result: PermissionRequestResult =\n      await atManager.requestPermissionsFromUser(context, ['ohos.permission.APP_TRACKING_CONSENT']);\n    isPermissionGranted = result.authResults[0] === abilityAccessCtrl.GrantStatus.PERMISSION_GRANTED;\n  } catch (err) {\n    hilog.error(0x0000, 'testTag', `Failed to request permission. Code is ${err.code}, message is ${err.message}`);\n  }\n  if (isPermissionGranted) {\n    hilog.info(0x0000, 'testTag', 'Succeeded in requesting permission');\n    try {\n      const oaid = await identifier.getOAID();\n      hilog.info(0x0000, 'testTag', 'Succeeded in getting OAID');\n      return oaid;\n    } catch (err) {\n      hilog.error(0x0000, 'testTag', `Failed to get OAID. Code is ${err.code}, message is ${err.message}`);\n    }\n  } else {\n    hilog.error(0x0000, 'testTag', 'Failed to request permission. User rejected');\n  }\n  return undefined;\n}\n"
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
            children: "import { AdComponent, advertising } from '@kit.AdsKit';\nimport { router } from '@kit.ArkUI';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n"
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
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "回调状态"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "使用建议"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "onAdOpen"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "打开广告。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "onAdClick"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "点击广告。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "onAdClose"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "关闭广告。"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["广告倒计时结束、用户点击跳过按钮或广告从后台返回时触发，需要跳转到应用首页。回调状态包含了具体的关闭原因，详情见：", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/ads-api/ads-arkts/js-apis-advertising/js-apis-advertising#onstatuschanged",
                  children: "data说明"
                }), "。"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "onAdFail"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "广告加载失败。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "广告展示失败时触发，需要跳转到应用首页。"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(903497)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "1、请求到广告之前需要展示默认的Slogan图片。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "2、由请求广告中获取的isFullScreen参数判断展示全屏或者半屏广告。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "3、目前只支持展示竖屏广告。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct Index {\n  @State ad: advertising.Advertisement | undefined = undefined;\n  // 广告展示参数\n  private adDisplayOptions: advertising.AdDisplayOptions = {\n    // 是否静音\n    mute: true\n  };\n  // ...\n\n  build() {\n    RelativeContainer() {\n      // 展示开发者自定义Slogan图片\n      Image($r('app.media.slogan'))\n        .width('100%')\n        .height('100%')\n        .zIndex(0)\n      // 展示开发者自定义icon、应用名称、版权信息\n      Column() {\n        Row() {\n          Image($r('app.media.video'))\n            .width(24)\n            .height(24)\n            .margin(8)\n          Text($r('app.string.video'))\n            .fontColor('#1A1A1A')\n            .fontSize(16)\n        }\n        .margin({ bottom: 8 })\n\n        Column() {\n          Text($r('app.string.copyright'))\n            .fontColor('#1A1A1A')\n            .fontSize(9)\n        }\n      }\n      .zIndex(1)\n      .alignRules({ bottom: { anchor: '__container__', align: VerticalAlign.Bottom } })\n      .width('100%')\n      .height('13%')\n\n      if (this.ad) {\n        if (this.ad.isFullScreen) {\n          // 全屏开屏广告\n          this.splashFullScreen()\n        } else {\n          // 半屏开屏广告\n          this.splashHalfScreen()\n        }\n      }\n    }\n    .width('100%')\n    .height('100%')\n  }\n\n  /**\n   * 半屏开屏广告\n   */\n  @Builder\n  private splashHalfScreen() {\n    AdComponent({\n      ads: [this.ad!],\n      displayOptions: this.adDisplayOptions,\n      interactionListener: {\n        onStatusChanged: (status: string, ad: advertising.Advertisement, data: string) => {\n          switch (status) {\n            case 'onAdOpen':\n              hilog.info(0x0000, 'testTag', 'Status is onAdOpen');\n              break;\n            case 'onAdClick':\n              hilog.info(0x0000, 'testTag', 'Status is onAdClick');\n              break;\n            case 'onAdClose':\n              hilog.info(0x0000, 'testTag', 'Status is onAdClose');\n              this.routeToHome();\n              break;\n            case 'onAdFail':\n              hilog.error(0x0000, 'testTag', 'Status is onAdFail');\n              this.routeToHome();\n              break;\n          }\n        }\n      }\n    })\n      .zIndex(1)\n      .width('100%')\n      .height('87%')\n      // 自定义组件动画\n      .transition(TransitionEffect.OPACITY.animation({ duration: 1000, curve: Curve.Friction}))\n      .alignRules({ top: { anchor: '__container__', align: VerticalAlign.Top } })\n  }\n\n  /**\n   * 全屏开屏广告\n   */\n  @Builder\n  private splashFullScreen() {\n    AdComponent({\n      ads: [this.ad!],\n      displayOptions: this.adDisplayOptions,\n      interactionListener: {\n        onStatusChanged: (status: string, ad: advertising.Advertisement, data: string) => {\n          switch (status) {\n            case 'onAdOpen':\n              hilog.info(0x0000, 'testTag', 'Status is onAdOpen');\n              break;\n            case 'onAdClick':\n              hilog.info(0x0000, 'testTag', 'Status is onAdClick');\n              break;\n            case 'onAdClose':\n              hilog.info(0x0000, 'testTag', 'Status is onAdClose');\n              this.routeToHome();\n              break;\n            case 'onAdFail':\n              hilog.error(0x0000, 'testTag', 'Status is onAdFail');\n              this.routeToHome();\n              break;\n          }\n        }\n      }\n    })\n      .zIndex(1)\n      .width('100%')\n      .height('100%')\n  }\n  // ...\n\n  private routeToHome(): void {\n    // 开发者可根据项目实际情况修改超时之后要跳转的目标页面\n    this.getUIContext().getRouter().replaceUrl({ url: 'pages/Index' }, router.RouterMode.Single)\n      .catch((e: BusinessError) => {\n        hilog.error(0x0000, 'testTag', `Failed to route to home. Code is ${e.code}, message is ${e.message}`);\n      });\n  }\n}\n\n// ...\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "测试开屏广告",
      children: "测试开屏广告"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["测试开屏广告时，需要使用专门的测试广告位ID来获取测试广告，以避免在测试过程中产生无效的广告点击量。测试广告位ID仅作为功能调试使用，不可用于广告变现。您应在应用发布前先进入", (0,jsx_runtime.jsx)(_components.a, {
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
      children: "以下表格中提供了开屏广告的专用测试广告位ID："
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
            children: "开屏"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "g3tl51sqih"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图片"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9:16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用促活"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "开屏"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "r145sz31dp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9:16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用促活"
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
392787(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478769-3ad4c08fa91f6e0fd6b1ad4ad5fc6218.png");

},
765311(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
574572(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
903497(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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