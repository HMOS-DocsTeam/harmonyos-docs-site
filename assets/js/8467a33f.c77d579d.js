"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["454518"], {
500897(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ads_kit_guide_ads_publisher_service_dev_ads_publisher_service_native_ads_publisher_service_native_md_846_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ads-kit-guide-ads-publisher-service-dev-ads-publisher-service-native-ads-publisher-service-native-md-846.json
var site_docs_ads_kit_guide_ads_publisher_service_dev_ads_publisher_service_native_ads_publisher_service_native_md_846_namespaceObject = JSON.parse('{"id":"ads-kit-guide/ads-publisher-service-dev/ads-publisher-service-native/ads-publisher-service-native","title":"原生广告","description":"场景介绍","source":"@site/docs/ads-kit-guide/ads-publisher-service-dev/ads-publisher-service-native/ads-publisher-service-native.md","sourceDirName":"ads-kit-guide/ads-publisher-service-dev/ads-publisher-service-native","slug":"/ads-kit-guide/ads-publisher-service-dev/ads-publisher-service-native/","permalink":"/harmonyos-docs-site/ads-kit-guide/ads-publisher-service-dev/ads-publisher-service-native/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"原生广告","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ads-publisher-service-native","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"横幅广告","permalink":"/harmonyos-docs-site/ads-kit-guide/ads-publisher-service-dev/ads-publisher-service-banner/"},"next":{"title":"激励广告","permalink":"/harmonyos-docs-site/ads-kit-guide/ads-publisher-service-dev/ads-publisher-service-reward/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ads-kit-guide/ads-publisher-service-dev/ads-publisher-service-native/ads-publisher-service-native.md


const frontMatter = {
	title: '原生广告',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ads-publisher-service-native',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '原生广告';

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
  "value": "AdComponent组件建议宽高",
  "id": "adcomponent组件建议宽高",
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
  "value": "测试原生广告",
  "id": "测试原生广告",
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
        id: "原生广告",
        children: "原生广告"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "原生广告是与应用内容融于一体的广告，通过“和谐”的内容呈现广告信息，在不破坏用户体验的前提下，为用户提供有价值的信息，展示形式包含图片和视频，支持您自由定制界面。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(816791)/* ["default"] */.A) + "",
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
      id: "adcomponent组件建议宽高",
      children: "AdComponent组件建议宽高"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "样式"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "建议宽高"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "原生信息流/原生瀑布流"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "width：与信息流内容保持一致。  height：无需设置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "原生插图"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "width：312vp。  height：284vp。"
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
            src: (__webpack_require__(148278)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用以下示例中提供的测试广告位时，必须先获取OAID信息。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "请求广告。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "请求广告需要创建一个AdLoader对象。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["如果要请求单广告位广告，通过AdLoader的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ads-api/ads-arkts/js-apis-advertising/js-apis-advertising#loadad",
              children: "loadAd"
            }), "方法请求广告，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ads-api/ads-arkts/js-apis-advertising/js-apis-advertising#adloadlistener",
              children: "AdLoadListener"
            }), "来监听广告的加载状态。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["如果要请求多广告位广告，通过AdLoader的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ads-api/ads-arkts/js-apis-advertising/js-apis-advertising#loadadwithmultislots",
              children: "loadAdWithMultiSlots"
            }), "方法请求广告，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ads-api/ads-arkts/js-apis-advertising/js-apis-advertising#multislotsadloadlistener",
              children: "MultiSlotsAdLoadListener"
            }), "来监听广告的加载状态。"]
          }), "\n"]
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
                children: "请求广告类型，原生广告类型为3。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "adId"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["广告位ID。  - 如果仅调测广告，可使用测试广告位ID：s7moc0jc6m（原生视频），h8asowxwhq（原生大图），k94abyn2z4（原生小图），o7dj7qsbvy（原生三图）。  - 如果要接入正式广告，则需要申请正式的广告位ID。可在应用发布前进入", (0,jsx_runtime.jsx)(_components.a, {
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
          children: "以请求多广告位广告为例，示例代码如下所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct Index {\n  @State ads: advertising.Advertisement[] = [];\n  // ...\n  private context: common.UIAbilityContext = this.getUIContext().getHostContext() as common.UIAbilityContext;\n\n  aboutToAppear(): void {\n    // 调用loadAd加载广告\n    // ...\n  }\n\n  private async loadAd(...adIds: string[]): Promise<void> {\n    // 广告请求参数\n    const adRequestParamsArray: advertising.AdRequestParams[] = [];\n    const oaid: string | undefined = await requestOAID(this.context);\n    for (const adId of adIds) {\n      adRequestParamsArray.push({\n        // 广告位ID\n        adId: adId,\n        // 原生广告类型\n        adType: 3,\n        // 原生广告扩展参数，是否直接返回广告，不用等待所有广告素材下载完成\n        enableDirectReturnVideoAd: true,\n        // 开放匿名设备标识符\n        oaid: oaid\n      });\n    }\n    // 广告配置参数，开发者可根据项目实际情况设置\n    const adOptions: advertising.AdOptions = {};\n    // 广告请求回调监听\n    const multiSlotsAdLoaderListener: advertising.MultiSlotsAdLoadListener = {\n      onAdLoadFailure: (errorCode: number, errorMsg: string) => {\n        hilog.error(0x0000, 'testTag', `Failed to load multiSlots ad. Code is ${errorCode}, message is ${errorMsg}`);\n      },\n      onAdLoadSuccess: (ads: Map<string, Array<advertising.Advertisement>>) => {\n        hilog.info(0x0000, 'testTag', 'Succeeded in loading multiSlots ad');\n        const returnAds: advertising.Advertisement[] = [];\n        ads.forEach((adsArray) => returnAds.push(...adsArray));\n        this.ads = returnAds;\n      }\n    };\n    // 创建AdLoader广告对象\n    const adLoader: advertising.AdLoader = new advertising.AdLoader(this.context);\n    try {\n      // 调用广告请求接口\n      adLoader.loadAdWithMultiSlots(adRequestParamsArray, adOptions, multiSlotsAdLoaderListener);\n    } catch (e) {\n      hilog.error(0x0000, 'testTag', `Failed to load multiSlots ad. Code is ${e.code}, message is ${e.message}`);\n    }\n  }\n\n  build() {\n    // ...\n  }\n\n  // ...\n}\n\nasync function requestOAID(context: Context): Promise<string | undefined> {\n  // 向用户请求授权广告跨应用关联访问权限\n  let isPermissionGranted: boolean = false;\n  try {\n    const atManager: abilityAccessCtrl.AtManager = abilityAccessCtrl.createAtManager();\n    const result: PermissionRequestResult =\n      await atManager.requestPermissionsFromUser(context, ['ohos.permission.APP_TRACKING_CONSENT']);\n    isPermissionGranted = result.authResults[0] === abilityAccessCtrl.GrantStatus.PERMISSION_GRANTED;\n  } catch (err) {\n    hilog.error(0x0000, 'testTag', `Failed to request permission. Code is ${err.code}, message is ${err.message}`);\n  }\n  if (isPermissionGranted) {\n    hilog.info(0x0000, 'testTag', 'Succeeded in requesting permission');\n    try {\n      const oaid = await identifier.getOAID();\n      hilog.info(0x0000, 'testTag', 'Succeeded in getting OAID');\n      return oaid;\n    } catch (err) {\n      hilog.error(0x0000, 'testTag', `Failed to get OAID. Code is ${err.code}, message is ${err.message}`);\n    }\n  } else {\n    hilog.error(0x0000, 'testTag', 'Failed to request permission. User rejected');\n  }\n  return undefined;\n}\n"
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
            children: "import { AdComponent, advertising } from '@kit.AdsKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n"
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
                children: ["用户点击负反馈或关闭广告时触发，需要将广告组件隐藏。回调状态包含了具体的关闭原因，详情见：", (0,jsx_runtime.jsx)(_components.a, {
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
                children: "广告展示失败时触发，需要将广告组件隐藏。"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["原生信息流广告通常不需要显式设置广告展示组件", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ads-api/ads-comp/js-apis-adcomponent/js-apis-adcomponent",
            children: "AdComponent"
          }), "的高度，组件会自动调整高度以适应需要展示的内容。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "示例代码如下所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct Index {\n  @State ads: advertising.Advertisement[] = [];\n  @State visibilityState: Visibility = Visibility.Visible;\n  // ...\n\n  build() {\n    Column() {\n      if (this.ads.length > 0) {\n        this.inFeedNativeAd(this.ads[0])\n        // ...\n      }\n    }\n    .width('100%')\n    .height('100%')\n  }\n\n  @Builder\n  inFeedNativeAd(ad: advertising.Advertisement): void {\n    Row() {\n      AdComponent({\n        ads: [ad],\n        // 广告展示参数，开发者可根据项目实际情况设置\n        displayOptions: {\n          // 是否静音\n          mute: true\n        },\n        interactionListener: {\n          onStatusChanged: (status: string, ad: advertising.Advertisement, data: string) => {\n            switch (status) {\n              case 'onAdOpen':\n                hilog.info(0x0000, 'testTag', 'Status is onAdOpen');\n                break;\n              case 'onAdClick':\n                hilog.info(0x0000, 'testTag', 'Status is onAdClick');\n                break;\n              case 'onAdClose':\n                hilog.info(0x0000, 'testTag', 'Status is onAdClose');\n                this.visibilityState = Visibility.None;\n                break;\n              case 'onAdFail':\n                hilog.error(0x0000, 'testTag', 'Status is onAdFail');\n                this.visibilityState = Visibility.None;\n                break;\n            }\n          }\n        }\n      })\n      // 原生信息流样式，不建议设置高度，宽度建议设置为100%，撑满父容器\n        .width('100%')\n    }\n    .width('100%')\n    .padding({ left: 16, right: 16 })\n    .visibility(this.visibilityState)\n  }\n\n  // ...\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["原生插图广告宽高为固定值312vp*284vp，开发者可以将广告展示组件", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ads-api/ads-comp/js-apis-adcomponent/js-apis-adcomponent",
            children: "AdComponent"
          }), "居中展示。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "示例代码如下所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct Index {\n  @State ads: advertising.Advertisement[] = [];\n  @State visibilityState: Visibility = Visibility.Visible;\n  // ...\n\n  build() {\n    Column() {\n      if (this.ads.length > 0) {\n        // ...\n        this.nativeCardAd(this.ads[0])\n      }\n    }\n    .width('100%')\n    .height('100%')\n  }\n\n  // ...\n\n  @Builder\n  nativeCardAd(ad: advertising.Advertisement): void {\n    Row() {\n      AdComponent({\n        ads: [ad],\n        // 广告展示参数，开发者可根据项目实际情况设置\n        displayOptions: {\n          // 是否静音\n          mute: true\n        },\n        interactionListener: {\n          onStatusChanged: (status: string, ad: advertising.Advertisement, data: string) => {\n            switch (status) {\n              case 'onAdOpen':\n                hilog.info(0x0000, 'testTag', 'Status is onAdOpen');\n                break;\n              case 'onAdClick':\n                hilog.info(0x0000, 'testTag', 'Status is onAdClick');\n                break;\n              case 'onAdClose':\n                hilog.info(0x0000, 'testTag', 'Status is onAdClose');\n                this.visibilityState = Visibility.None;\n                break;\n              case 'onAdFail':\n                hilog.error(0x0000, 'testTag', 'Status is onAdFail');\n                this.visibilityState = Visibility.None;\n                break;\n            }\n          }\n        }\n      })\n      // 原生插图样式，宽高为固定值，为312vp*284vp\n        .width(312)\n        .height(284)\n    }\n    .width('100%')\n    // 宽高固定无法撑满父容器，将广告居中展示\n    .justifyContent(FlexAlign.Center)\n    .visibility(this.visibilityState)\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "测试原生广告",
      children: "测试原生广告"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["原生广告测试广告位ID，仅可用于调测原生广告功能，不可用于广告变现，在应用正式发布前需替换为正式的原生广告位ID。您应在应用发布前先进入", (0,jsx_runtime.jsx)(_components.a, {
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
      children: "原生广告测试广告位ID列表如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "原生"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "h8asowxwhq"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "大图"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16:9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网页推广"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "原生"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "k94abyn2z4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小图"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4:3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用下载"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "原生"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "o7dj7qsbvy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "三图"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4:3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用促活"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "原生"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "s7moc0jc6m"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16:9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用下载"
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
148278(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
816791(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799116-8e364e409033f7bd8697ffce13f9b8ee.png");

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