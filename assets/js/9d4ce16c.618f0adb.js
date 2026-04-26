"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["222213"], {
85181(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_live_view_api_liveview_arkts_liveview_liveviewmanager_liveview_liveviewmanager_md_9d4_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-live-view-api-liveview-arkts-liveview-liveviewmanager-liveview-liveviewmanager-md-9d4.json
var site_docs_ref_live_view_api_liveview_arkts_liveview_liveviewmanager_liveview_liveviewmanager_md_9d4_namespaceObject = JSON.parse('{"id":"live-view-api/liveview-arkts/liveview-liveviewmanager/liveview-liveviewmanager","title":"liveViewManager","description":"本模块提供Live View Kit的基础能力，包括创建、更新和结束实况窗、获取实况窗和检查实况窗开关的功能。","source":"@site/docs-ref/live-view-api/liveview-arkts/liveview-liveviewmanager/liveview-liveviewmanager.md","sourceDirName":"live-view-api/liveview-arkts/liveview-liveviewmanager","slug":"/live-view-api/liveview-arkts/liveview-liveviewmanager/liveview-liveviewmanager","permalink":"/harmonyos-docs-site/ref/live-view-api/liveview-arkts/liveview-liveviewmanager/liveview-liveviewmanager","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"liveViewManager","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/liveview-liveviewmanager","kit":"应用服务","last_updated":"2026-04-22","slug":"liveview-liveviewmanager"},"sidebar":"ref","previous":{"title":"REST API错误码","permalink":"/harmonyos-docs-site/ref/iap-api/iap-rest/iap-server-error-code/iap-server-error-code"},"next":{"title":"LiveViewLockScreenExtensionAbility","permalink":"/harmonyos-docs-site/ref/live-view-api/liveview-arkts/liveview-lock-screen-ability/liveview-lock-screen-ability"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/live-view-api/liveview-arkts/liveview-liveviewmanager/liveview-liveviewmanager.md


const frontMatter = {
	title: 'liveViewManager',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/liveview-liveviewmanager',
	kit: '应用服务',
	last_updated: '2026-04-22',
	slug: 'liveview-liveviewmanager'
};
const contentTitle = 'liveViewManager';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "liveViewManager.isLiveViewEnabled",
  "id": "liveviewmanagerisliveviewenabled",
  "level": 2
}, {
  "value": "liveViewManager.startLiveView",
  "id": "liveviewmanagerstartliveview",
  "level": 2
}, {
  "value": "liveViewManager.updateLiveView",
  "id": "liveviewmanagerupdateliveview",
  "level": 2
}, {
  "value": "liveViewManager.stopLiveView",
  "id": "liveviewmanagerstopliveview",
  "level": 2
}, {
  "value": "liveViewManager.getActiveLiveView",
  "id": "liveviewmanagergetactiveliveview",
  "level": 2
}, {
  "value": "liveViewManager.isGeofenceTriggerEnabled",
  "id": "liveviewmanagerisgeofencetriggerenabled",
  "level": 2
}, {
  "value": "liveViewManager.startLiveViewByTrigger",
  "id": "liveviewmanagerstartliveviewbytrigger",
  "level": 2
}, {
  "value": "liveViewManager.stopLiveViewByTrigger",
  "id": "liveviewmanagerstopliveviewbytrigger",
  "level": 2
}, {
  "value": "Trigger",
  "id": "trigger",
  "level": 2
}, {
  "value": "Geofence",
  "id": "geofence",
  "level": 2
}, {
  "value": "TriggerType",
  "id": "triggertype",
  "level": 2
}, {
  "value": "CoordinateSystemType",
  "id": "coordinatesystemtype",
  "level": 2
}, {
  "value": "MonitorEvent",
  "id": "monitorevent",
  "level": 2
}, {
  "value": "LiveView",
  "id": "liveview",
  "level": 2
}, {
  "value": "LiveViewTimer",
  "id": "liveviewtimer",
  "level": 2
}, {
  "value": "CountdownPreset",
  "id": "countdownpreset",
  "level": 2
}, {
  "value": "LiveViewData",
  "id": "liveviewdata",
  "level": 2
}, {
  "value": "PrimaryData",
  "id": "primarydata",
  "level": 2
}, {
  "value": "BackgroundType",
  "id": "backgroundtype",
  "level": 2
}, {
  "value": "ExtensionData",
  "id": "extensiondata",
  "level": 2
}, {
  "value": "LayoutData",
  "id": "layoutdata",
  "level": 2
}, {
  "value": "WeatherInfo",
  "id": "weatherinfo",
  "level": 2
}, {
  "value": "WeatherType",
  "id": "weathertype",
  "level": 2
}, {
  "value": "WeatherLocationType",
  "id": "weatherlocationtype",
  "level": 2
}, {
  "value": "ServiceButton",
  "id": "servicebutton",
  "level": 2
}, {
  "value": "ProgressLayout",
  "id": "progresslayout",
  "level": 2
}, {
  "value": "PickupLayout",
  "id": "pickuplayout",
  "level": 2
}, {
  "value": "FlightLayout",
  "id": "flightlayout",
  "level": 2
}, {
  "value": "ScoreLayout",
  "id": "scorelayout",
  "level": 2
}, {
  "value": "NavigationLayout",
  "id": "navigationlayout",
  "level": 2
}, {
  "value": "CapsuleData",
  "id": "capsuledata",
  "level": 2
}, {
  "value": "TextCapsule",
  "id": "textcapsule",
  "level": 2
}, {
  "value": "TimerCapsule",
  "id": "timercapsule",
  "level": 2
}, {
  "value": "ProgressCapsule",
  "id": "progresscapsule",
  "level": 2
}, {
  "value": "ExternalData",
  "id": "externaldata",
  "level": 2
}, {
  "value": "RichText",
  "id": "richtext",
  "level": 2
}, {
  "value": "LiveViewResult",
  "id": "liveviewresult",
  "level": 2
}, {
  "value": "LayoutType",
  "id": "layouttype",
  "level": 2
}, {
  "value": "ExtensionType",
  "id": "extensiontype",
  "level": 2
}, {
  "value": "IndicatorType",
  "id": "indicatortype",
  "level": 2
}, {
  "value": "LineType",
  "id": "linetype",
  "level": 2
}, {
  "value": "CapsuleType",
  "id": "capsuletype",
  "level": 2
}, {
  "value": "ExternalType",
  "id": "externaltype",
  "level": 2
}, {
  "value": "FlightLayoutStyle",
  "id": "flightlayoutstyle",
  "level": 2
}, {
  "value": "SpaceType",
  "id": "spacetype",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
    pre: "pre",
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
        id: "liveviewmanager",
        children: "liveViewManager"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块提供Live View Kit的基础能力，包括创建、更新和结束实况窗、获取实况窗和检查实况窗开关的功能。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { liveViewManager } from '@kit.LiveViewKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该模块在Phone、Tablet中可正常调用，在其他设备类型中无效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "liveviewmanagerisliveviewenabled",
      children: "liveViewManager.isLiveViewEnabled"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "isLiveViewEnabled(): Promise<boolean>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查看应用实况窗开关，使用Promise异步返回结果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.LiveView.LiveViewService"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Phone、Tablet中可正常调用，在其他设备类型中无效果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Promise<boolean>"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["以Promise形式返回当前应用实况窗的开关状态。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "●"
              })
            }), " true表示实况窗开关开启。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "●"
              })
            }), " false表示实况窗开关关闭。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/live-view-api/liveview-arkts/liveview-error-code/liveview-error-code",
        children: "ArkTS API错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/live-view-api/liveview-arkts/liveview-error-code/liveview-error-code#section1003500001-%E7%B3%BB%E7%BB%9F%E9%94%99%E8%AF%AF",
              children: "1003500001"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/live-view-api/liveview-arkts/liveview-error-code/liveview-error-code#section1003500002-%E5%BA%8F%E5%88%97%E5%8C%96%E6%88%96%E5%8F%8D%E5%BA%8F%E5%88%97%E5%8C%96%E5%A4%B1%E8%B4%A5",
              children: "1003500002"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Marshalling or unmarshalling error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/live-view-api/liveview-arkts/liveview-error-code/liveview-error-code#section1003500003-%E8%BF%9E%E6%8E%A5%E6%9C%8D%E5%8A%A1%E5%A4%B1%E8%B4%A5",
              children: "1003500003"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to connect service."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { liveViewManager } from '@kit.LiveViewKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\ntry {\n  liveViewManager.isLiveViewEnabled().then((isEnabled: boolean) => {\n    hilog.info(0x0000, 'testTag', 'Succeeded in checking whether liveView is enabled, liveView is : %{public}s', isEnabled);\n  }).catch((err: BusinessError) => {\n    hilog.error(0x0000, 'testTag', 'Failed to check whether liveView is enabled: %{public}d %{public}s', err.code, err.message);\n  });\n} catch (err) {\n  let e: BusinessError = err as BusinessError;\n  hilog.error(0x0000, 'testTag', 'Failed to check whether liveView is enabled: %{public}d %{public}s', e.code, e.message);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "liveviewmanagerstartliveview",
      children: "liveViewManager.startLiveView"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "startLiveView(liveView: LiveView): Promise<LiveViewResult>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建实况窗，使用Promise异步返回结果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.LiveView.LiveViewService"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Phone、Tablet中可正常调用，在其他设备类型中无效果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "liveView"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#liveview",
              children: "LiveView"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个实况窗实例。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#liveviewresult",
              children: "LiveViewResult"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，返回创建实况窗的结果。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/live-view-api/liveview-arkts/liveview-error-code/liveview-error-code",
        children: "ArkTS API错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/errorcode-universal/errorcode-universal#section401-%E5%8F%82%E6%95%B0%E6%A3%80%E6%9F%A5%E5%A4%B1%E8%B4%A5",
              children: "401"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/live-view-api/liveview-arkts/liveview-error-code/liveview-error-code#section1003500001-%E7%B3%BB%E7%BB%9F%E9%94%99%E8%AF%AF",
              children: "1003500001"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/live-view-api/liveview-arkts/liveview-error-code/liveview-error-code#section1003500002-%E5%BA%8F%E5%88%97%E5%8C%96%E6%88%96%E5%8F%8D%E5%BA%8F%E5%88%97%E5%8C%96%E5%A4%B1%E8%B4%A5",
              children: "1003500002"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Marshalling or unmarshalling error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/live-view-api/liveview-arkts/liveview-error-code/liveview-error-code#section1003500003-%E8%BF%9E%E6%8E%A5%E6%9C%8D%E5%8A%A1%E5%A4%B1%E8%B4%A5",
              children: "1003500003"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to connect service."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/live-view-api/liveview-arkts/liveview-error-code/liveview-error-code#section1003500004-%E5%AE%9E%E5%86%B5%E7%AA%97%E5%BC%80%E5%85%B3%E5%85%B3%E9%97%AD",
              children: "1003500004"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LiveView is not enabled."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/live-view-api/liveview-arkts/liveview-error-code/liveview-error-code#section1003500005-%E5%AE%9E%E5%86%B5%E7%AA%97%E6%9D%83%E7%9B%8A%E6%9C%AA%E7%94%B3%E8%AF%B7",
              children: "1003500005"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The right of liveView is not enabled."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/live-view-api/liveview-arkts/liveview-error-code/liveview-error-code#section1003500006-%E5%AE%9E%E5%86%B5%E7%AA%97%E5%B7%B2%E5%AD%98%E5%9C%A8",
              children: "1003500006"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The liveView already exists."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/live-view-api/liveview-arkts/liveview-error-code/liveview-error-code#section1003500007-%E6%97%A0%E6%B3%95%E8%BF%9E%E6%8E%A5%E6%9C%8D%E5%8A%A1%E5%99%A8",
              children: "1003500007"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Couldn't connect to server."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/live-view-api/liveview-arkts/liveview-error-code/liveview-error-code#section1003500008-%E5%AE%9E%E5%86%B5%E7%AA%97%E9%A2%91%E5%BA%A6%E8%B6%85%E8%BF%87%E9%99%90%E5%88%B6",
              children: "1003500008"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Over max number liveViews per second."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { liveViewManager } from '@kit.LiveViewKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { Want, wantAgent } from '@kit.AbilityKit';\n\nasync function startLiveView(): Promise<void> {\n  try {\n    // 定义创建的liveView\n    let liveView: liveViewManager.LiveView = {\n      id: 123,\n      event: \"PICK_UP\",\n      sequence: 1,\n      isMute: false,\n      liveViewData: {\n        primary: {\n          title: \"餐品已备好\",\n          content: [\n            { text: \"请前往\" },\n            { text: \"一号窗口\", textColor: \"#FFFF0000\" }\n          ],\n          keepTime: 1,\n          clickAction: await buildWantAgent(),\n          extensionData: {\n            text: \"待取餐\",\n            type: liveViewManager.ExtensionType.EXTENSION_TYPE_COMMON_TEXT\n          },\n          layoutData: {\n            layoutType: liveViewManager.LayoutType.LAYOUT_TYPE_PICKUP,\n            title: \"取餐码\",\n            content: \"72988\",\n            underlineColor: \"#FFFF0000\",\n            descPic: \"coffee.jpg\"\n          }\n        },\n        capsule: {\n          type: liveViewManager.CapsuleType.CAPSULE_TYPE_TEXT,\n          status: 1,\n          icon: \"coffee.jpg\",\n          title: \"待取餐\",\n          content: \"取餐码：72988\",\n          backgroundColor: \"#FF308977\"\n        }\n      }\n    };\n\n    liveViewManager.startLiveView(liveView).then((liveViewResult: liveViewManager.LiveViewResult) => {\n      hilog.info(0x0000, 'testTag', 'Succeeded in starting liveView, result: %{public}s', JSON.stringify(liveViewResult));\n    }).catch((err: BusinessError) => {\n      hilog.error(0x0000, 'testTag', 'Failed to start liveView: %{public}d %{public}s', err.code, err.message);\n    });\n  } catch (err) {\n    let e: BusinessError = err as BusinessError;\n    hilog.error(0x0000, 'testTag', 'Failed to start liveView: %{public}d %{public}s', e.code, e.message);\n  }\n}\n\nasync function buildWantAgent(): Promise<Want> {\n  const wantAgentInfo: wantAgent.WantAgentInfo = {\n    wants: [\n      {\n        bundleName: 'xxx.xxx.xxx',\n        abilityName: 'EntryAbility'\n      } as Want\n    ],\n    actionType: wantAgent.OperationType.START_ABILITIES,\n    requestCode: 0,\n    actionFlags: [wantAgent.WantAgentFlags.UPDATE_PRESENT_FLAG]\n  };\n  try {\n    const agent = await wantAgent.getWantAgent(wantAgentInfo);\n    return agent;\n  } catch (e) {\n    const err: BusinessError = e as BusinessError;\n    hilog.error(0x0000, 'testTag', 'Failed to get wantAgent: %{public}s', err.message);\n    throw e as Error;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "liveviewmanagerupdateliveview",
      children: "liveViewManager.updateLiveView"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "updateLiveView(liveView: LiveView): Promise<LiveViewResult>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "更新实况窗，使用Promise异步返回结果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.LiveView.LiveViewService"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Phone、Tablet中可正常调用，在其他设备类型中无效果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "liveView"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#liveview",
              children: "LiveView"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个实况窗实例。对于非必填字段，若无特殊说明，则不携带时默认继承上一次的状态。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#liveviewresult",
              children: "LiveViewResult"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，返回更新实况窗的结果。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/live-view-api/liveview-arkts/liveview-error-code/liveview-error-code",
        children: "ArkTS API错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/errorcode-universal/errorcode-universal#section401-%E5%8F%82%E6%95%B0%E6%A3%80%E6%9F%A5%E5%A4%B1%E8%B4%A5",
              children: "401"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/live-view-api/liveview-arkts/liveview-error-code/liveview-error-code#section1003500001-%E7%B3%BB%E7%BB%9F%E9%94%99%E8%AF%AF",
              children: "1003500001"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/live-view-api/liveview-arkts/liveview-error-code/liveview-error-code#section1003500002-%E5%BA%8F%E5%88%97%E5%8C%96%E6%88%96%E5%8F%8D%E5%BA%8F%E5%88%97%E5%8C%96%E5%A4%B1%E8%B4%A5",
              children: "1003500002"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Marshalling or unmarshalling error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/live-view-api/liveview-arkts/liveview-error-code/liveview-error-code#section1003500003-%E8%BF%9E%E6%8E%A5%E6%9C%8D%E5%8A%A1%E5%A4%B1%E8%B4%A5",
              children: "1003500003"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to connect service."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/live-view-api/liveview-arkts/liveview-error-code/liveview-error-code#section1003500004-%E5%AE%9E%E5%86%B5%E7%AA%97%E5%BC%80%E5%85%B3%E5%85%B3%E9%97%AD",
              children: "1003500004"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LiveView is not enabled."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/live-view-api/liveview-arkts/liveview-error-code/liveview-error-code#section1003500008-%E5%AE%9E%E5%86%B5%E7%AA%97%E9%A2%91%E5%BA%A6%E8%B6%85%E8%BF%87%E9%99%90%E5%88%B6",
              children: "1003500008"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Over max number liveViews per second."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/live-view-api/liveview-arkts/liveview-error-code/liveview-error-code#section1003500009-%E5%AE%9E%E5%86%B5%E7%AA%97id%E4%B8%8D%E5%AD%98%E5%9C%A8",
              children: "1003500009"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The liveView does not exist."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/live-view-api/liveview-arkts/liveview-error-code/liveview-error-code#section1003500010-%E5%AE%9E%E5%86%B5%E7%AA%97%E5%B7%B2%E7%BB%93%E6%9D%9F",
              children: "1003500010"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The liveView has ended."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/live-view-api/liveview-arkts/liveview-error-code/liveview-error-code#section1003500011-%E5%AE%9E%E5%86%B5%E7%AA%97%E9%A1%BA%E5%BA%8F%E4%B8%8D%E6%AD%A3%E7%A1%AE",
              children: "1003500011"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The liveView sequence is incorrect."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { liveViewManager } from '@kit.LiveViewKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { Want, wantAgent } from '@kit.AbilityKit';\n\nasync function updateLiveView(): Promise<void> {\n  try {\n    // 定义更新的liveView\n    let liveView: liveViewManager.LiveView = {\n      id: 123,\n      event: \"PICK_UP\",\n      sequence: 2,\n      isMute: false,\n      liveViewData: {\n        primary: {\n          title: \"餐品已备好\",\n          content: [\n            { text: \"请前往\" },\n            { text: \"一号窗口\", textColor: \"#FFFF0000\" }\n          ],\n          keepTime: 1,\n          clickAction: await buildWantAgent(),\n          extensionData: {\n            text: \"待取餐\",\n            type: liveViewManager.ExtensionType.EXTENSION_TYPE_COMMON_TEXT\n          },\n          layoutData: {\n            layoutType: liveViewManager.LayoutType.LAYOUT_TYPE_PICKUP,\n            title: \"取餐码\",\n            content: \"72988\",\n            underlineColor: \"#FFFF0000\",\n            descPic: \"coffee.jpg\"\n          }\n        },\n        capsule: {\n          type: liveViewManager.CapsuleType.CAPSULE_TYPE_TEXT,\n          status: 1,\n          icon: \"coffee.jpg\",\n          title: \"待取餐\",\n          content: \"取餐码：72988\",\n          backgroundColor: \"#FF308977\"\n        }\n      }\n    };\n\n    liveViewManager.updateLiveView(liveView).then((liveViewResult: liveViewManager.LiveViewResult) => {\n      hilog.info(0x0000, 'testTag', 'Succeeded in updating liveView, result: %{public}s', JSON.stringify(liveViewResult));\n    }).catch((err: BusinessError) => {\n      hilog.error(0x0000, 'testTag', 'Failed to update liveView: %{public}d %{public}s', err.code, err.message);\n    });\n  } catch (err) {\n    let e: BusinessError = err as BusinessError;\n    hilog.error(0x0000, 'testTag', 'Failed to update liveView: %{public}d %{public}s', e.code, e.message);\n  }\n}\n\nasync function buildWantAgent(): Promise<Want> {\n  const wantAgentInfo: wantAgent.WantAgentInfo = {\n    wants: [\n      {\n        bundleName: 'xxx.xxx.xxx',\n        abilityName: 'EntryAbility'\n      } as Want\n    ],\n    actionType: wantAgent.OperationType.START_ABILITIES,\n    requestCode: 0,\n    actionFlags: [wantAgent.WantAgentFlags.UPDATE_PRESENT_FLAG]\n  };\n  try {\n    const agent = await wantAgent.getWantAgent(wantAgentInfo);\n    return agent;\n  } catch (e) {\n    const err: BusinessError = e as BusinessError;\n    hilog.error(0x0000, 'testTag', 'Failed to get wantAgent: %{public}s', err.message);\n    throw e as Error;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "liveviewmanagerstopliveview",
      children: "liveViewManager.stopLiveView"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "stopLiveView(liveView: LiveView): Promise<LiveViewResult>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "结束实况窗，使用Promise异步返回结果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.LiveView.LiveViewService"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Phone、Tablet中可正常调用，在其他设备类型中无效果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "liveView"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#liveview",
              children: "LiveView"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个实况窗实例。对于非必填字段，若无特殊说明，则不携带时默认继承上一次的状态。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#liveviewresult",
              children: "LiveViewResult"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，返回结束实况窗的结果。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/live-view-api/liveview-arkts/liveview-error-code/liveview-error-code",
        children: "ArkTS API错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/errorcode-universal/errorcode-universal#section401-%E5%8F%82%E6%95%B0%E6%A3%80%E6%9F%A5%E5%A4%B1%E8%B4%A5",
              children: "401"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/live-view-api/liveview-arkts/liveview-error-code/liveview-error-code#section1003500001-%E7%B3%BB%E7%BB%9F%E9%94%99%E8%AF%AF",
              children: "1003500001"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/live-view-api/liveview-arkts/liveview-error-code/liveview-error-code#section1003500002-%E5%BA%8F%E5%88%97%E5%8C%96%E6%88%96%E5%8F%8D%E5%BA%8F%E5%88%97%E5%8C%96%E5%A4%B1%E8%B4%A5",
              children: "1003500002"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Marshalling or unmarshalling error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/live-view-api/liveview-arkts/liveview-error-code/liveview-error-code#section1003500003-%E8%BF%9E%E6%8E%A5%E6%9C%8D%E5%8A%A1%E5%A4%B1%E8%B4%A5",
              children: "1003500003"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to connect service."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/live-view-api/liveview-arkts/liveview-error-code/liveview-error-code#section1003500004-%E5%AE%9E%E5%86%B5%E7%AA%97%E5%BC%80%E5%85%B3%E5%85%B3%E9%97%AD",
              children: "1003500004"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LiveView is not enabled."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/live-view-api/liveview-arkts/liveview-error-code/liveview-error-code#section1003500008-%E5%AE%9E%E5%86%B5%E7%AA%97%E9%A2%91%E5%BA%A6%E8%B6%85%E8%BF%87%E9%99%90%E5%88%B6",
              children: "1003500008"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Over max number liveViews per second."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/live-view-api/liveview-arkts/liveview-error-code/liveview-error-code#section1003500009-%E5%AE%9E%E5%86%B5%E7%AA%97id%E4%B8%8D%E5%AD%98%E5%9C%A8",
              children: "1003500009"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The liveView does not exist."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/live-view-api/liveview-arkts/liveview-error-code/liveview-error-code#section1003500010-%E5%AE%9E%E5%86%B5%E7%AA%97%E5%B7%B2%E7%BB%93%E6%9D%9F",
              children: "1003500010"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The liveView has ended."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/live-view-api/liveview-arkts/liveview-error-code/liveview-error-code#section1003500011-%E5%AE%9E%E5%86%B5%E7%AA%97%E9%A1%BA%E5%BA%8F%E4%B8%8D%E6%AD%A3%E7%A1%AE",
              children: "1003500011"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The liveView sequence is incorrect."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { liveViewManager } from '@kit.LiveViewKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { Want, wantAgent } from '@kit.AbilityKit';\n\nasync function stopLiveView(): Promise<void> {\n  try {\n    // 定义要结束的liveView\n    let liveView: liveViewManager.LiveView = {\n      id: 123,\n      event: \"PICK_UP\",\n      sequence: 3,\n      isMute: false,\n      liveViewData: {\n        primary: {\n          title: \"餐品已备好\",\n          content: [\n            { text: \"请前往\" },\n            { text: \"一号窗口\", textColor: \"#FFFF0000\" }\n          ],\n          keepTime: 1,\n          clickAction: await buildWantAgent(),\n          extensionData: {\n            text: \"待取餐\",\n            type: liveViewManager.ExtensionType.EXTENSION_TYPE_COMMON_TEXT\n          },\n          layoutData: {\n            layoutType: liveViewManager.LayoutType.LAYOUT_TYPE_PICKUP,\n            title: \"取餐码\",\n            content: \"72988\",\n            underlineColor: \"#FFFF0000\",\n            descPic: \"coffee.jpg\"\n          }\n        },\n        capsule: {\n          type: liveViewManager.CapsuleType.CAPSULE_TYPE_TEXT,\n          status: 1,\n          icon: \"coffee.jpg\",\n          title: \"待取餐\",\n          content: \"取餐码：72988\",\n          backgroundColor: \"#FF308977\"\n        }\n      }\n    };\n\n    liveViewManager.stopLiveView(liveView).then((liveViewResult: liveViewManager.LiveViewResult) => {\n      hilog.info(0x0000, 'testTag', 'Succeeded in stopping liveView, result: %{public}s', JSON.stringify(liveViewResult));\n    }).catch((err: BusinessError) => {\n      hilog.error(0x0000, 'testTag', 'Failed to stop liveView: %{public}d %{public}s', err.code, err.message);\n    });\n  } catch (err) {\n    let e: BusinessError = err as BusinessError;\n    hilog.error(0x0000, 'testTag', 'Failed to stop liveView: %{public}d %{public}s', e.code, e.message);\n  }\n}\n\nasync function buildWantAgent(): Promise<Want> {\n  const wantAgentInfo: wantAgent.WantAgentInfo = {\n    wants: [\n      {\n        bundleName: 'xxx.xxx.xxx',\n        abilityName: 'EntryAbility'\n      } as Want\n    ],\n    actionType: wantAgent.OperationType.START_ABILITIES,\n    requestCode: 0,\n    actionFlags: [wantAgent.WantAgentFlags.UPDATE_PRESENT_FLAG]\n  };\n  try {\n    const agent = await wantAgent.getWantAgent(wantAgentInfo);\n    return agent;\n  } catch (e) {\n    const err: BusinessError = e as BusinessError;\n    hilog.error(0x0000, 'testTag', 'Failed to get wantAgent: %{public}s', err.message);\n    throw e as Error;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "liveviewmanagergetactiveliveview",
      children: "liveViewManager.getActiveLiveView"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getActiveLiveView(id: number): Promise<LiveView>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取活动的liveView，使用Promise异步返回结果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.LiveView.LiveViewService"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Phone、Tablet中可正常调用，在其他设备类型中无效果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "实况窗的id，取值范围为[-2147483648, 2147483647]。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#liveview",
              children: "LiveView"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，返回活动的实况窗实例。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/live-view-api/liveview-arkts/liveview-error-code/liveview-error-code",
        children: "ArkTS API错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/errorcode-universal/errorcode-universal#section401-%E5%8F%82%E6%95%B0%E6%A3%80%E6%9F%A5%E5%A4%B1%E8%B4%A5",
              children: "401"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/live-view-api/liveview-arkts/liveview-error-code/liveview-error-code#section1003500001-%E7%B3%BB%E7%BB%9F%E9%94%99%E8%AF%AF",
              children: "1003500001"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/live-view-api/liveview-arkts/liveview-error-code/liveview-error-code#section1003500002-%E5%BA%8F%E5%88%97%E5%8C%96%E6%88%96%E5%8F%8D%E5%BA%8F%E5%88%97%E5%8C%96%E5%A4%B1%E8%B4%A5",
              children: "1003500002"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Marshalling or unmarshalling error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/live-view-api/liveview-arkts/liveview-error-code/liveview-error-code#section1003500003-%E8%BF%9E%E6%8E%A5%E6%9C%8D%E5%8A%A1%E5%A4%B1%E8%B4%A5",
              children: "1003500003"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to connect service."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/live-view-api/liveview-arkts/liveview-error-code/liveview-error-code#section1003500009-%E5%AE%9E%E5%86%B5%E7%AA%97id%E4%B8%8D%E5%AD%98%E5%9C%A8",
              children: "1003500009"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The liveView does not exist."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { liveViewManager } from '@kit.LiveViewKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n// 定义需要查询的实况窗id\nconst id = 1;\ntry {\n  liveViewManager.getActiveLiveView(id).then((liveView: liveViewManager.LiveView) => {\n    hilog.info(0x0000, 'testTag', 'Succeeded in getting active liveView, liveView is : %{public}s', JSON.stringify(liveView));\n  }).catch((err: BusinessError) => {\n    hilog.error(0x0000, 'testTag', 'Failed to get active liveView: %{public}d %{public}s', err.code, err.message);\n  });\n} catch (err) {\n  let e: BusinessError = err as BusinessError;\n  hilog.error(0x0000, 'testTag', 'Failed to get active liveView: %{public}d %{public}s', e.code, e.message);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "liveviewmanagerisgeofencetriggerenabled",
      children: "liveViewManager.isGeofenceTriggerEnabled"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "isGeofenceTriggerEnabled(): Promise<boolean>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询基于地理位置的实况窗提醒开关，使用Promise异步返回结果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.LiveView.LiveViewService"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Phone、Tablet中可正常调用，在其他设备类型中无效果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.1.0(23)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Promise<boolean>"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["以Promise形式返回当前基于地理位置的实况窗提醒的开关状态。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "●"
              })
            }), " true表示基于地理位置的实况窗提醒开关开启。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "●"
              })
            }), " false表示基于地理位置的实况窗提醒开关关闭。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/live-view-api/liveview-arkts/liveview-error-code/liveview-error-code",
        children: "ArkTS API错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/live-view-api/liveview-arkts/liveview-error-code/liveview-error-code#section1003500001-%E7%B3%BB%E7%BB%9F%E9%94%99%E8%AF%AF",
              children: "1003500001"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/live-view-api/liveview-arkts/liveview-error-code/liveview-error-code#section1003500002-%E5%BA%8F%E5%88%97%E5%8C%96%E6%88%96%E5%8F%8D%E5%BA%8F%E5%88%97%E5%8C%96%E5%A4%B1%E8%B4%A5",
              children: "1003500002"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Marshalling or unmarshalling error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/live-view-api/liveview-arkts/liveview-error-code/liveview-error-code#section1003500003-%E8%BF%9E%E6%8E%A5%E6%9C%8D%E5%8A%A1%E5%A4%B1%E8%B4%A5",
              children: "1003500003"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to connect service."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { liveViewManager } from '@kit.LiveViewKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\ntry {\n  liveViewManager.isGeofenceTriggerEnabled().then((isEnabled: boolean) => {\n    hilog.info(0x0000, 'testTag', 'Succeeded in checking whether geofence trigger is enabled, geofence trigger is : %{public}s', isEnabled);\n  }).catch((err: BusinessError) => {\n    hilog.error(0x0000, 'testTag', 'Failed to check whether geofence trigger is enabled: %{public}d %{public}s', err.code, err.message);\n  });\n} catch (err) {\n  let e: BusinessError = err as BusinessError;\n  hilog.error(0x0000, 'testTag', 'Failed to check whether geofence trigger is enabled: %{public}d %{public}s', e.code, e.message);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "liveviewmanagerstartliveviewbytrigger",
      children: "liveViewManager.startLiveViewByTrigger"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "startLiveViewByTrigger(liveView: LiveView, trigger:Trigger): Promise<LiveViewResult>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "增加由条件触发创建实况的消息，使用Promise异步返回结果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.LiveView.LiveViewService"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Phone、Tablet中可正常调用，在其他设备类型中无效果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.1.0(23)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
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
            children: "liveView"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#liveview",
              children: "LiveView"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个实况窗实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "trigger"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#trigger",
              children: "Trigger"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "触发实况窗的条件对象。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#liveviewresult",
              children: "LiveViewResult"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，返回添加基于地理位置触发创建实况窗的结果。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/live-view-api/liveview-arkts/liveview-error-code/liveview-error-code",
        children: "ArkTS API错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/errorcode-universal/errorcode-universal#section401-%E5%8F%82%E6%95%B0%E6%A3%80%E6%9F%A5%E5%A4%B1%E8%B4%A5",
              children: "401"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/errorcode-universal/errorcode-universal#section801-%E8%AF%A5%E8%AE%BE%E5%A4%87%E4%B8%8D%E6%94%AF%E6%8C%81%E6%AD%A4api",
              children: "801"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Capability not supported. The device model does not support geofencing."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/live-view-api/liveview-arkts/liveview-error-code/liveview-error-code#section1003500001-%E7%B3%BB%E7%BB%9F%E9%94%99%E8%AF%AF",
              children: "1003500001"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/live-view-api/liveview-arkts/liveview-error-code/liveview-error-code#section1003500002-%E5%BA%8F%E5%88%97%E5%8C%96%E6%88%96%E5%8F%8D%E5%BA%8F%E5%88%97%E5%8C%96%E5%A4%B1%E8%B4%A5",
              children: "1003500002"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Marshalling or unmarshalling error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/live-view-api/liveview-arkts/liveview-error-code/liveview-error-code#section1003500003-%E8%BF%9E%E6%8E%A5%E6%9C%8D%E5%8A%A1%E5%A4%B1%E8%B4%A5",
              children: "1003500003"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to connect service."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/live-view-api/liveview-arkts/liveview-error-code/liveview-error-code#section1003500004-%E5%AE%9E%E5%86%B5%E7%AA%97%E5%BC%80%E5%85%B3%E5%85%B3%E9%97%AD",
              children: "1003500004"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LiveView is not enabled."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/live-view-api/liveview-arkts/liveview-error-code/liveview-error-code#section1003500005-%E5%AE%9E%E5%86%B5%E7%AA%97%E6%9D%83%E7%9B%8A%E6%9C%AA%E7%94%B3%E8%AF%B7",
              children: "1003500005"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The right of liveView is not enabled."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/live-view-api/liveview-arkts/liveview-error-code/liveview-error-code#section1003500006-%E5%AE%9E%E5%86%B5%E7%AA%97%E5%B7%B2%E5%AD%98%E5%9C%A8",
              children: "1003500006"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The liveView already exists."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/live-view-api/liveview-arkts/liveview-error-code/liveview-error-code#section1003500007-%E6%97%A0%E6%B3%95%E8%BF%9E%E6%8E%A5%E6%9C%8D%E5%8A%A1%E5%99%A8",
              children: "1003500007"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Couldn't connect to server."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/live-view-api/liveview-arkts/liveview-error-code/liveview-error-code#section1003500008-%E5%AE%9E%E5%86%B5%E7%AA%97%E9%A2%91%E5%BA%A6%E8%B6%85%E8%BF%87%E9%99%90%E5%88%B6",
              children: "1003500008"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Over max number liveViews per second."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/live-view-api/liveview-arkts/liveview-error-code/liveview-error-code#section1003500017-%E8%B6%85%E8%BF%87%E6%9D%A1%E4%BB%B6%E5%AE%9E%E5%86%B5%E7%AA%97%E6%AC%A1%E6%95%B0%E9%99%90%E5%88%B6",
              children: "1003500017"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Over max number liveViews by trigger."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/live-view-api/liveview-arkts/liveview-error-code/liveview-error-code#section1003500018-%E5%9F%BA%E4%BA%8E%E5%9C%B0%E7%90%86%E4%BD%8D%E7%BD%AE%E7%9A%84%E5%AE%9E%E5%86%B5%E7%AA%97%E6%8F%90%E9%86%92%E5%BC%80%E5%85%B3%E5%85%B3%E9%97%AD",
              children: "1003500018"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Geofencing-based liveView is not enabled."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/live-view-api/liveview-arkts/liveview-error-code/liveview-error-code#section1003500019-%E4%BD%8D%E7%BD%AE%E5%8A%9F%E8%83%BD%E7%9A%84%E5%BC%80%E5%85%B3%E5%85%B3%E9%97%AD",
              children: "1003500019"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The location switch is off."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/live-view-api/liveview-arkts/liveview-error-code/liveview-error-code#section1003500020-%E6%84%9F%E7%9F%A5%E4%B8%8E%E6%8F%90%E9%86%92%E7%9A%84%E5%BC%80%E5%85%B3%E5%85%B3%E9%97%AD",
              children: "1003500020"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The \"Awareness & suggestions\" switch of the location-based service is turned off."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { liveViewManager } from '@kit.LiveViewKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { Want, wantAgent } from '@kit.AbilityKit';\n\nasync function startLiveViewByTrigger(): Promise<void> {\n  try {\n    // 定义创建的liveView\n    let liveView: liveViewManager.LiveView = {\n      id: 0, // 实况窗ID，开发者生成。\n      event: \"EXPRESS\", // 实况窗的应用场景。EXPRESS：快递。\n      liveViewData: {\n        primary: {\n          title: \"快递已送达\",\n          content: [\n            { text: \"请前往\" },\n            { text: \" XXX店 \", textColor: \"#FF0A59F7\" },\n            { text: \"取快递\" },\n          ],\n          keepTime: 15,\n          clickAction: await buildWantAgent(),\n          layoutData: {\n            layoutType: liveViewManager.LayoutType.LAYOUT_TYPE_PICKUP,\n            title: \"快递码\",\n            content: \"72988\",\n            underlineColor: \"#FF0A59F7\",\n            descPic: \"express.png\" // 扩展区右侧产品描述图，取值为“/resources/rawfile”路径下的文件名或image.PixelMap\n          }\n        },\n        capsule: {\n          type: liveViewManager.CapsuleType.CAPSULE_TYPE_TEXT,\n          status: 1,\n          icon: \"express.jpg\",\n          title: \"快递码\",\n          content: \"快递码：72988\",\n          backgroundColor: \"#FF308977\"\n        }\n      }\n    };\n    let trigger: liveViewManager.Trigger = {\n      type: liveViewManager.TriggerType.TRIGGER_TYPE_GEOFENCE,\n      displayTime: 15,\n      condition: {\n        longitude: 116.3971356415625,\n        latitude: 39.91800603311188,\n        coordinateSystemType: liveViewManager.CoordinateSystemType.COORDINATE_TYPE_GCJ02,\n        monitorEvent: liveViewManager.MonitorEvent.MONITOR_TYPE_ENTRY,\n        radius: 2000,\n        delayTime: 0\n      }\n    };\n\n    liveViewManager.startLiveViewByTrigger(liveView, trigger).then((liveViewResult: liveViewManager.LiveViewResult) => {\n      hilog.info(0x0000, 'testTag', 'Succeeded in starting liveView by trigger, result: %{public}s', JSON.stringify(liveViewResult));\n    }).catch((err: BusinessError) => {\n      hilog.error(0x0000, 'testTag', 'Failed to start liveView by trigger: %{public}d %{public}s', err.code, err.message);\n    });\n  } catch (err) {\n    let e: BusinessError = err as BusinessError;\n    hilog.error(0x0000, 'testTag', 'Failed to start liveView by trigger: %{public}d %{public}s', e.code, e.message);\n  }\n}\n\nasync function buildWantAgent(): Promise<Want> {\n  const wantAgentInfo: wantAgent.WantAgentInfo = {\n    wants: [\n      {\n        bundleName: 'xxx.xxx.xxx',\n        abilityName: 'EntryAbility'\n      } as Want\n    ],\n    actionType: wantAgent.OperationType.START_ABILITIES,\n    requestCode: 0,\n    actionFlags: [wantAgent.WantAgentFlags.UPDATE_PRESENT_FLAG]\n  };\n  try {\n    const agent = await wantAgent.getWantAgent(wantAgentInfo);\n    return agent;\n  } catch (e) {\n    const err: BusinessError = e as BusinessError;\n    hilog.error(0x0000, 'testTag', 'Failed to get wantAgent: %{public}s', err.message);\n    throw e as Error;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "liveviewmanagerstopliveviewbytrigger",
      children: "liveViewManager.stopLiveViewByTrigger"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "stopLiveViewByTrigger(liveView: LiveView, trigger:Trigger): Promise<LiveViewResult>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "增加由条件触发结束实况的消息，使用Promise异步返回结果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.LiveView.LiveViewService"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Phone、Tablet中可正常调用，在其他设备类型中无效果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.1.0(23)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
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
            children: "liveView"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#liveview",
              children: "LiveView"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个实况窗实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "trigger"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#trigger",
              children: "Trigger"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "触发实况窗的条件对象。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#liveviewresult",
              children: "LiveViewResult"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，返回添加基于地理位置触发结束实况窗的结果。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/live-view-api/liveview-arkts/liveview-error-code/liveview-error-code",
        children: "ArkTS API错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/errorcode-universal/errorcode-universal#section401-%E5%8F%82%E6%95%B0%E6%A3%80%E6%9F%A5%E5%A4%B1%E8%B4%A5",
              children: "401"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/errorcode-universal/errorcode-universal#section801-%E8%AF%A5%E8%AE%BE%E5%A4%87%E4%B8%8D%E6%94%AF%E6%8C%81%E6%AD%A4api",
              children: "801"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Capability not supported. The device model does not support geofencing."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/live-view-api/liveview-arkts/liveview-error-code/liveview-error-code#section1003500001-%E7%B3%BB%E7%BB%9F%E9%94%99%E8%AF%AF",
              children: "1003500001"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/live-view-api/liveview-arkts/liveview-error-code/liveview-error-code#section1003500002-%E5%BA%8F%E5%88%97%E5%8C%96%E6%88%96%E5%8F%8D%E5%BA%8F%E5%88%97%E5%8C%96%E5%A4%B1%E8%B4%A5",
              children: "1003500002"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Marshalling or unmarshalling error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/live-view-api/liveview-arkts/liveview-error-code/liveview-error-code#section1003500003-%E8%BF%9E%E6%8E%A5%E6%9C%8D%E5%8A%A1%E5%A4%B1%E8%B4%A5",
              children: "1003500003"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to connect service."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/live-view-api/liveview-arkts/liveview-error-code/liveview-error-code#section1003500004-%E5%AE%9E%E5%86%B5%E7%AA%97%E5%BC%80%E5%85%B3%E5%85%B3%E9%97%AD",
              children: "1003500004"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LiveView is not enabled."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/live-view-api/liveview-arkts/liveview-error-code/liveview-error-code#section1003500008-%E5%AE%9E%E5%86%B5%E7%AA%97%E9%A2%91%E5%BA%A6%E8%B6%85%E8%BF%87%E9%99%90%E5%88%B6",
              children: "1003500008"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Over max number liveViews per second."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/live-view-api/liveview-arkts/liveview-error-code/liveview-error-code#section1003500009-%E5%AE%9E%E5%86%B5%E7%AA%97id%E4%B8%8D%E5%AD%98%E5%9C%A8",
              children: "1003500009"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The liveView does not exist."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/live-view-api/liveview-arkts/liveview-error-code/liveview-error-code#section1003500010-%E5%AE%9E%E5%86%B5%E7%AA%97%E5%B7%B2%E7%BB%93%E6%9D%9F",
              children: "1003500010"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The liveView has ended."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/live-view-api/liveview-arkts/liveview-error-code/liveview-error-code#section1003500011-%E5%AE%9E%E5%86%B5%E7%AA%97%E9%A1%BA%E5%BA%8F%E4%B8%8D%E6%AD%A3%E7%A1%AE",
              children: "1003500011"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The liveView sequence is incorrect."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/live-view-api/liveview-arkts/liveview-error-code/liveview-error-code#section1003500017-%E8%B6%85%E8%BF%87%E6%9D%A1%E4%BB%B6%E5%AE%9E%E5%86%B5%E7%AA%97%E6%AC%A1%E6%95%B0%E9%99%90%E5%88%B6",
              children: "1003500017"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Over max number liveViews by trigger."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/live-view-api/liveview-arkts/liveview-error-code/liveview-error-code#section1003500018-%E5%9F%BA%E4%BA%8E%E5%9C%B0%E7%90%86%E4%BD%8D%E7%BD%AE%E7%9A%84%E5%AE%9E%E5%86%B5%E7%AA%97%E6%8F%90%E9%86%92%E5%BC%80%E5%85%B3%E5%85%B3%E9%97%AD",
              children: "1003500018"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Geofencing-based liveView is not enabled."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/live-view-api/liveview-arkts/liveview-error-code/liveview-error-code#section1003500019-%E4%BD%8D%E7%BD%AE%E5%8A%9F%E8%83%BD%E7%9A%84%E5%BC%80%E5%85%B3%E5%85%B3%E9%97%AD",
              children: "1003500019"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The location switch is off."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/live-view-api/liveview-arkts/liveview-error-code/liveview-error-code#section1003500020-%E6%84%9F%E7%9F%A5%E4%B8%8E%E6%8F%90%E9%86%92%E7%9A%84%E5%BC%80%E5%85%B3%E5%85%B3%E9%97%AD",
              children: "1003500020"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The \"Awareness & suggestions\" switch of the location-based service is turned off."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { liveViewManager } from '@kit.LiveViewKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { Want, wantAgent } from '@kit.AbilityKit';\n\nasync function stopLiveViewByTrigger(): Promise<void> {\n  try {\n    // 定义要结束的liveView\n    let liveView: liveViewManager.LiveView = {\n      id: 0, // 实况窗ID，开发者生成。\n      event: \"EXPRESS\", // 实况窗的应用场景。EXPRESS：快递。\n      liveViewData: {\n        primary: {\n          title: \"快递已送达\",\n          content: [\n            { text: \"请前往\" },\n            { text: \" XXX店 \", textColor: \"#FF0A59F7\" },\n            { text: \"取快递\" },\n          ],\n          keepTime: 15,\n          clickAction: await buildWantAgent(),\n          layoutData: {\n            layoutType: liveViewManager.LayoutType.LAYOUT_TYPE_PICKUP,\n            title: \"快递码\",\n            content: \"72988\",\n            underlineColor: \"#FF0A59F7\",\n            descPic: \"express.png\" // 扩展区右侧产品描述图，取值为“/resources/rawfile”路径下的文件名或image.PixelMap\n          }\n        },\n        capsule: {\n          type: liveViewManager.CapsuleType.CAPSULE_TYPE_TEXT,\n          status: 1,\n          icon: \"express.jpg\",\n          title: \"快递码\",\n          content: \"快递码：72988\",\n          backgroundColor: \"#FF308977\"\n        }\n      }\n    };\n    let trigger: liveViewManager.Trigger = {\n      type: liveViewManager.TriggerType.TRIGGER_TYPE_GEOFENCE,\n      displayTime: 15,\n      condition: {\n        longitude: 116.3971356415625,\n        latitude: 39.91800603311188,\n        coordinateSystemType: liveViewManager.CoordinateSystemType.COORDINATE_TYPE_GCJ02,\n        monitorEvent: liveViewManager.MonitorEvent.MONITOR_TYPE_LEAVE,\n        radius: 2000,\n        delayTime: 0\n      }\n    };\n\n    liveViewManager.stopLiveViewByTrigger(liveView, trigger).then((liveViewResult: liveViewManager.LiveViewResult) => {\n      hilog.info(0x0000, 'testTag', 'Succeeded in stopping liveView by trigger, result: %{public}s', JSON.stringify(liveViewResult));\n    }).catch((err: BusinessError) => {\n      hilog.error(0x0000, 'testTag', 'Failed to stop liveView by trigger: %{public}d %{public}s', err.code, err.message);\n    });\n  } catch (err) {\n    let e: BusinessError = err as BusinessError;\n    hilog.error(0x0000, 'testTag', 'Failed to stop liveView by trigger: %{public}d %{public}s', e.code, e.message);\n  }\n}\n\nasync function buildWantAgent(): Promise<Want> {\n  const wantAgentInfo: wantAgent.WantAgentInfo = {\n    wants: [\n      {\n        bundleName: 'xxx.xxx.xxx',\n        abilityName: 'EntryAbility'\n      } as Want\n    ],\n    actionType: wantAgent.OperationType.START_ABILITIES,\n    requestCode: 0,\n    actionFlags: [wantAgent.WantAgentFlags.UPDATE_PRESENT_FLAG]\n  };\n  try {\n    const agent = await wantAgent.getWantAgent(wantAgentInfo);\n    return agent;\n  } catch (e) {\n    const err: BusinessError = e as BusinessError;\n    hilog.error(0x0000, 'testTag', 'Failed to get wantAgent: %{public}s', err.message);\n    throw e as Error;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "trigger",
      children: "Trigger"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "触发创建或结束实况窗的条件对象参数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.LiveView.LiveViewService"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Phone、Tablet中可正常调用，在其他设备类型中无效果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.1.0(23)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#triggertype",
              children: "TriggerType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "触发创建或结束实况窗的条件类型"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "condition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#geofence",
              children: "Geofence"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "触发创建或结束实况窗的条件具体描述"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "displayTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "条件触发实况的展示持续时间，取值范围为[15，1800]，默认值为900，单位：s"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "geofence",
      children: "Geofence"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "地理围栏对象参数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.LiveView.LiveViewService"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Phone、Tablet中可正常调用，在其他设备类型中无效果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.1.0(23)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "longitude"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "地理围栏中心点经度，取值范围为[-180，180]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "latitude"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "地理围栏中心点纬度，取值范围为[-90，90]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "coordinateSystemType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#coordinatesystemtype",
              children: "CoordinateSystemType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "地理围栏中心点的坐标系类型"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "radius"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "地理围栏半径，取值范围为[200，2000] ，单位：m"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "monitorEvent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#monitorevent",
              children: "MonitorEvent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "触发地理围栏的事件类型"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "delayTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "延迟触发时间，即：进入/离开围栏后持续多长时间触发围栏，取值范围为[0，300]，默认值为0，单位：s"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(624133)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "经、纬度传入值不允许同时为0。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当", (0,jsx_runtime.jsx)(_components.a, {
          href: "#coordinatesystemtype",
          children: "coordinateSystemType"
        }), "为COORDINATE_TYPE_GCJ02时，经度传入值不允许为-180或180，纬度传入值不允许为-90或90。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "triggertype",
      children: "TriggerType"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "触发创建或结束实况窗的条件类型，为枚举值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.LiveView.LiveViewService"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Phone、Tablet中可正常调用，在其他设备类型中无效果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.1.0(23)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRIGGER_TYPE_GEOFENCE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "地理围栏条件类型"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "coordinatesystemtype",
      children: "CoordinateSystemType"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "地理围栏中心点坐标系类型，为枚举值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.LiveView.LiveViewService"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Phone、Tablet中可正常调用，在其他设备类型中无效果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.1.0(23)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "COORDINATE_TYPE_WGS84"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WGS84坐标系"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "COORDINATE_TYPE_GCJ02"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GCJ02坐标系"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "monitorevent",
      children: "MonitorEvent"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "触发地理围栏的事件类型，为枚举值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.LiveView.LiveViewService"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Phone、Tablet中可正常调用，在其他设备类型中无效果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.1.0(23)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MONITOR_TYPE_ENTRY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "进入围栏"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MONITOR_TYPE_LEAVE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "退出围栏"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "liveview",
      children: "LiveView"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["实况窗对象参数，具体示例请见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/live-view-kit-guide/liveview-scenes/liveview-create-locally#%E5%88%9B%E5%BB%BA%E5%AE%9E%E5%86%B5%E7%AA%97",
        children: "构建本地实况窗"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.LiveView.LiveViewService"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Phone、Tablet中可正常调用，在其他设备类型中无效果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["实况窗唯一标识，取值范围为[-2147483648, 2147483647]，由开发者自行生成。对应Push Kit中LiveViewPayload的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-param/push-scenariozed-api-request-param#section66881469306",
              children: "activityId"
            }), "字段。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "event"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["实况窗的应用场景。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "●"
              })
            }), " TAXI：出行打车。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "●"
              })
            }), " DELIVERY：即时配送（外卖、生鲜）。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "●"
              })
            }), " FLIGHT：航班。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "●"
              })
            }), " TRAIN：高铁/火车。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "●"
              })
            }), " QUEUE：排队。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "●"
              })
            }), " PICK_UP：取餐。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "●"
              })
            }), " SCORE：赛事比分。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "●"
              })
            }), " RENT：共享租赁。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "●"
              })
            }), " TIMER：计时。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "●"
              })
            }), " WORKOUT：运动锻炼。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "●"
              })
            }), " NAVIGATION：导航。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "●"
              })
            }), " CHECK_IN：打卡。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "●"
              })
            }), " EXPRESS：快递。  使用对应场景需要申请权益，详情请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/live-view-kit-guide/liveview-preparations/liveview-rights",
              children: "实况窗权益说明"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sequence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["支持实况窗消息更新和结束保序能力，取值范围为[0, 2147483647]，新的实况窗版本号需大于当前展示实况窗版本号，否则更新和结束会失败。若不传入参数值，Live View Kit不会自动生成（此时，调用getActiveLiveView接口查询实况信息，返回结果中sequence：4294967295为无效值，该无效值不允许用来更新实况），也不会校验实况窗版本号。对应Push Kit中的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-param/push-scenariozed-api-request-param#section66881469306",
              children: "version"
            }), "字段。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isMute"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["消息提醒方式。若您在创建或更改实况窗状态时不传入此字段，则始终默认静默提醒。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "●"
              })
            }), " true：静默提醒。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "●"
              })
            }), " false：铃声震动提醒。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "timer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#liveviewtimer",
              children: "LiveViewTimer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["实况窗计时器，展示时每秒刷新一次。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 5.0.0(12)。  配置了计时器后，可以在部分字段中使用占位符：", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "${placeholder.timer}"
              })
            }), "，系统会将占位符替换为计时器。  当前支持使用占位符的字段：  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "●"
              })
            }), " liveViewData.primary.", (0,jsx_runtime.jsx)(_components.a, {
              href: "#primarydata",
              children: "title"
            }), "  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "●"
              })
            }), " liveViewData.primary.", (0,jsx_runtime.jsx)(_components.a, {
              href: "#primarydata",
              children: "content"
            }), "  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "●"
              })
            }), " liveViewData.primary.layoutData.", (0,jsx_runtime.jsx)(_components.a, {
              href: "#pickuplayout",
              children: "content"
            }), "  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "●"
              })
            }), " liveViewData.primary.layoutData.", (0,jsx_runtime.jsx)(_components.a, {
              href: "#scorelayout",
              children: "competitionTime"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "liveViewData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#liveviewdata",
              children: "LiveViewData"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "实况窗详细信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "liveviewtimer",
      children: "LiveViewTimer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "实况窗计时器参数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.LiveView.LiveViewService"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Phone、Tablet中可正常调用，在其他设备类型中无效果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计时器初始值，单位为毫秒，默认为0，取值范围为[0,9223372036854775807]。每秒刷新一次。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isCountdown"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["计时器是否为倒计时，默认为false。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "●"
              })
            }), " true：计时器为倒计时类型  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "●"
              })
            }), " false：计时器为正计时类型"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isPaused"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["计时器是否暂停，默认false。计时器暂停时，会显示暂停的那一秒。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "●"
              })
            }), " true：暂停。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "●"
              })
            }), " false：不暂停（默认值）。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "countdownPreset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#countdownpreset",
              children: "CountdownPreset"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["当倒计时到0时，系统将自动更新实况窗卡片模板扩展区标题（title）和扩展区内容（content）字段为卡片预置结构体（countdownPreset）中的标题（presetTitle）和内容（presetContent）。  仅当满足以下条件时，上述功能生效：  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "●"
              })
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#layouttype",
              children: "layoutType"
            }), "为LAYOUT_TYPE_PICKUP强调文本模板；  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "●"
              })
            }), " liveViewData.primary.layoutData.", (0,jsx_runtime.jsx)(_components.a, {
              href: "#pickuplayout",
              children: "content"
            }), "中使用占位符${placeholder.timer}。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 6.0.0(20)。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "capsuleCountdownPreset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#countdownpreset",
              children: "CountdownPreset"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["当倒计时到0时，系统将自动更新计时器类型实况胶囊主文本（time）和实况胶囊副文本（content）为实况胶囊预设结构体（capsuleCountdownPreset）中的主文本（presetTitle）和副文本（presetContent）。仅当满足以下条件时，上述功能生效：  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "●"
              })
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#capsuletype",
              children: "capsuleType"
            }), "为CAPSULE_TYPE_TIMER计时器类型实况胶囊。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 6.0.0(20)。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "countdownpreset",
      children: "CountdownPreset"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "实况窗计时器预置参数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.LiveView.LiveViewService"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Phone、Tablet中可正常调用，在其他设备类型中无效果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "presetTitle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自动更新扩展区标题或实况胶囊主文本为预设主文本。不支持时间占位符，若填值时不能为空，长度小于128。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "presetContent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自动更新扩展区文本内容或实况胶囊副文本为预设副文本，若填值时不能为空，长度小于128。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "liveviewdata",
      children: "LiveViewData"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "实况窗详细信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.LiveView.LiveViewService"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Phone、Tablet中可正常调用，在其他设备类型中无效果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "primary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#primarydata",
              children: "PrimaryData"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "卡片形态内容。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "capsule"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#textcapsule",
              children: "TextCapsule"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#timercapsule",
              children: "TimerCapsule"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#progresscapsule",
              children: "ProgressCapsule"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "external"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#externaldata",
              children: "ExternalData"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小折叠外屏形态内容。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "primarydata",
      children: "PrimaryData"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "卡片形态参数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.LiveView.LiveViewService"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Phone、Tablet中可正常调用，在其他设备类型中无效果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "title"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建：否  更新或结束：是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "固定区标题，若填值时不能为空，长度小于1024。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "content"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#richtext",
              children: "RichText"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建：否  更新或结束：是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["固定区内容，若填值时不能为空。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "●"
              })
            }), " 数组中所有对象的text字段字符串长度总和需小于1024。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "●"
              })
            }), " 数组中对象不设置textColor字段时，文本颜色默认为#99000000；设置textColor字段时，所有拥有textColor字段的对象仅能设置同一种颜色。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "keepTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["实况窗存档时间，在结束实况窗后，通知仍保留在通知中心的时长，", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "默认0不保留"
              })
            }), "，范围[0,3600]秒(s)。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "clickAction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-wantagent/js-apis-app-ability-wantagent",
              children: "WantAgent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建：否  更新或结束：是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["点击实况窗默认动作，请调用wantAgent.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-wantagent/js-apis-app-ability-wantagent#wantagentgetwantagent-1",
              children: "getWantAgent()"
            }), "来构造。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "extensionData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#extensiondata",
              children: "ExtensionData"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "辅助区内容。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#layoutdata",
              children: "layoutData"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#progresslayout",
              children: "ProgressLayout"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#pickuplayout",
              children: "PickupLayout"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#flightlayout",
              children: "FlightLayout"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#scorelayout",
              children: "ScoreLayout"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "liveViewLockScreenPicture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["image.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap",
              children: "PixelMap"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "liveViewLockScreenAbilityName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/live-view-api/liveview-arkts/liveview-lock-screen-ability/liveview-lock-screen-ability",
              children: "LiveViewLockScreenExtensionAbility"
            }), "（锁屏沉浸实况窗扩展Ability）的名称，仅创建实况窗时生效，传入时值不可为空，长度最大为128。若在创建实况窗时与liveViewLockScreenPicture同时传入，则仅本字段生效。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 5.0.0(12)。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "liveViewLockScreenAbilityParameters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Record<string, string>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用户自定义向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/live-view-api/liveview-arkts/liveview-lock-screen-ability/liveview-lock-screen-ability",
              children: "LiveViewLockScreenExtensionAbility"
            }), "（锁屏沉浸实况窗扩展Ability）传入的参数，填值时不能为空，key-value键值对最多50个，传入后可在ability的onSessionCreate()中，通过want.parameters获取。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 5.0.0(12)。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "backgroundType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#backgroundtype",
              children: "BackgroundType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示实况窗卡片的背景氛围类型，仅支持左右文本模板(即", (0,jsx_runtime.jsx)(_components.a, {
              href: "#layouttype",
              children: "layoutType"
            }), "为LAYOUT_TYPE_FLIGHT)展示背景。  当传入实况窗卡片的背景氛围类型参数backgroundType值为赏月航班或夕阳航班时，且同时传入天气类型（", (0,jsx_runtime.jsx)(_components.a, {
              href: "#weatherinfo",
              children: "WeatherInfo"
            }), "）为雨、雪特殊天气，卡片上优先展示天气背景，其余非特殊天气在卡片上展示赏月航班或夕阳航班背景氛围。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 6.0.0(20)。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "backgroundtype",
      children: "BackgroundType"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "航班场景下卡片背景类型，为枚举值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.LiveView.LiveViewService"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Phone、Tablet中可正常调用，在其他设备类型中无效果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SYS_BACKGROUND_UNDEFINED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "未定义，表示在卡片上不展示背景氛围。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SYS_BACKGROUND_FLIGHT_MOON"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "赏月航班，表示在卡片上展示赏月的背景氛围。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SYS_BACKGROUND_FLIGHT_SUNSET"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "101"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "夕阳航班，表示在卡片上展示夕阳的背景氛围。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "extensiondata",
      children: "ExtensionData"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "辅助区参数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.LiveView.LiveViewService"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Phone、Tablet中可正常调用，在其他设备类型中无效果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#extensiontype",
              children: "ExtensionType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["辅助区显示类型，默认为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#extensiontype",
              children: "EXTENSION_TYPE_DEFAULT"
            }), "不显示辅助区。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建：否（仅当type值为ExtensionType.EXTENSION_TYPE_COMMON_TEXT或ExtensionType.EXTENSION_TYPE_CAPSULE_TEXT时）  更新或结束：是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "辅助区显示的文本信息，若填值时不能为空，长度小于128。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["image.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap",
              children: "PixelMap"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建：否（仅当type值为ExtensionType.EXTENSION_TYPE_PIC或ExtensionType.EXTENSION_TYPE_ICON时）  更新或结束：是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "clickAction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-wantagent/js-apis-app-ability-wantagent",
              children: "WantAgent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["点击辅助区的跳转动作，请调用wantAgent.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-wantagent/js-apis-app-ability-wantagent#wantagentgetwantagent-1",
              children: "getWantAgent()"
            }), "来构造。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "layoutdata",
      children: "LayoutData"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["定义扩展区模板类型及公共参数。当", (0,jsx_runtime.jsx)(_components.a, {
        href: "#layouttype",
        children: "layoutType"
      }), "为LayoutType.LAYOUT_TYPE_DEFAULT时，使用此类型。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.LiveView.LiveViewService"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Phone、Tablet中可正常调用，在其他设备类型中无效果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "layoutType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#layouttype",
              children: "LayoutType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模板类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "serviceButtons"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#servicebutton",
              children: "ServiceButton"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["传入连续服务按钮结构体数组。 更新连续服务按钮时，需要同时更新辅助区", (0,jsx_runtime.jsx)(_components.a, {
              href: "#extensiondata",
              children: "ExtensionData"
            }), "的clickAction字段和连续服务按钮。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 5.1.1(19)。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isServiceButtonsDisplayed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["是否显示连续服务按钮，默认false。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "●"
              })
            }), " true：显示按钮  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "●"
              })
            }), " false：不显示按钮  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 5.1.1(19)。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "weatherInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#weatherinfo",
              children: "WeatherInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["传入天气信息结构体。  目的地天气类型仅支持左右文本模板（即", (0,jsx_runtime.jsx)(_components.a, {
              href: "#layouttype",
              children: "layoutType"
            }), "为LAYOUT_TYPE_FLIGHT）；  本地天气类型仅支持基础模板、进度可视化模板和强调文本模板（即", (0,jsx_runtime.jsx)(_components.a, {
              href: "#layouttype",
              children: "layoutType"
            }), "为LAYOUT_TYPE_DEFAULT/LAYOUT_TYPE_PROGRESS/LAYOUT_TYPE_PICKUP）。  当传入天气信息，且同时传入实况窗卡片的背景氛围类型参数", (0,jsx_runtime.jsx)(_components.a, {
              href: "#backgroundtype",
              children: "backgroundType"
            }), "值为赏月航班（SYS_BACKGROUND_FLIGHT_MOON）或夕阳航班（SYS_BACKGROUND_FLIGHT_SUNSET）时，若天气类型为雨、雪特殊天气，卡片上优先展示天气背景，其余非特殊天气在卡片上优先展示赏月航班或夕阳航班背景氛围。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  从6.0.0(20)开始支持展示目的地天气效果；  从6.0.2(22)开始支持展示本地天气效果。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "weatherinfo",
      children: "WeatherInfo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用传入天气信息的基类。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.LiveView.LiveViewService"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Phone、Tablet中可正常调用，在其他设备类型中无效果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "weatherType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#weathertype",
              children: "WeatherType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "天气类型。创建实况窗时，若weatherType不传入或传入非法值，则不展示天气效果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "locationType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#weatherlocationtype",
              children: "WeatherLocationType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "天气位置类型。创建实况窗时，若locationType不传入或传入非法值，则不展示天气效果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "highTemperature"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "天气最高温度，当前仅支持摄氏度，需小于等于58℃且大于传入的最低温度值（lowTemperature）。创建实况窗时，若不传入或传入非法值，则不展示温度信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "lowTemperature"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "天气最低温度，当前仅支持摄氏度，需大于等于-95℃且小于传入的最高温度值（highTemperature）。创建实况窗时，若不传入或传入非法值，则不展示温度信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "weathertype",
      children: "WeatherType"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "天气类型，为枚举值，雨、雪天气支持在实况卡片上展示天气动效背景，其余天气类型（WEATHER_TYPE_UNDEFINED除外）仅支持在实况卡片上展示天气图标和温度，不支持在实况卡片上展示天气动效背景。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.LiveView.LiveViewService"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Phone、Tablet中可正常调用，在其他设备类型中无效果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WEATHER_TYPE_UNDEFINED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示不展示天气效果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WEATHER_TYPE_SUNNY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "晴天气类型，展示天晴天气效果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WEATHER_TYPE_HAZY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "霾天气类型，展示霾天气效果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WEATHER_TYPE_CLOUDY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多云天气类型，展示多云天气效果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WEATHER_TYPE_OVERCAST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "阴天气类型，展示阴天气效果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WEATHER_TYPE_FOG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "雾天气类型，展示雾天气效果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WEATHER_TYPE_SHOWERS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["阵雨天气类型，展示阵雨天气效果。实况卡片支持雨动效背景。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 从6.0.2(22)开始支持展示天气动效背景"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WEATHER_TYPE_T_STORMS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["雷阵雨天气类型，展示雷阵雨天气效果。实况卡片支持雨动效背景。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 从6.0.2(22)开始支持展示天气动效背景"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WEATHER_TYPE_RAIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "18"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["雨天气类型，展示雨天气效果。实况卡片支持雨动效背景。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 从6.0.2(22)开始支持展示天气动效背景"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WEATHER_TYPE_SNOW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "22"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["雪天气类型，展示雪天气效果。实况卡片支持雪动效背景。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 从6.0.2(22)开始支持展示天气动效背景"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WEATHER_TYPE_RAIN_AND_SNOW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "29"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["雨夹雪天气类型，展示雨夹雪天气效果。实况卡片支持雨动效背景。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 从6.0.2(22)开始支持展示天气动效背景"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WEATHER_TYPE_HOT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "高温天气类型，展示高温天气效果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WEATHER_TYPE_COLD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "31"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "低温天气类型，展示低温天气效果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WEATHER_TYPE_WINDY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "大风天气类型，展示大风天气效果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WEATHER_TYPE_THUNDERSHOWER_WITH_HAIL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "45"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "冰雹天气类型，展示冰雹天气效果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WEATHER_TYPE_LIGHT_RAIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "46"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["小雨天气类型，展示小雨天气效果。实况卡片支持雨动效背景。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 从6.0.0(20)开始支持展示天气动效背景"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WEATHER_TYPE_MODERATE_RAIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "47"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["中雨天气类型，展示中雨天气效果。实况卡片支持雨动效背景。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 从6.0.0(20)开始支持展示天气动效背景"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WEATHER_TYPE_HEAVY_RAIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "48"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["大雨天气类型，展示大雨天气效果。实况卡片支持雨动效背景。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 从6.0.0(20)开始支持展示天气动效背景"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WEATHER_TYPE_STORM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "49"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["暴雨天气类型，展示暴雨天气效果。实况卡片支持雨动效背景。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 从6.0.2(22)开始支持展示天气动效背景"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WEATHER_TYPE_SEVERE_STORM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "51"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["特大暴雨天气类型，展示特大暴雨天气效果。实况卡片支持雨动效背景。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 从6.0.2(22)开始支持展示天气动效背景"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WEATHER_TYPE_LIGHT_SNOW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "52"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["小雪天气类型，展示小雪天气效果。实况卡片支持雪动效背景。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 从6.0.0(20)开始支持展示天气动效背景"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WEATHER_TYPE_MODERATE_SNOW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "53"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["中雪天气类型，展示中雪天气效果。实况卡片支持雪动效背景。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 从6.0.0(20)开始支持展示天气动效背景"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WEATHER_TYPE_HEAVY_SNOW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "54"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["大雪天气类型，展示大雪天气效果。实况卡片支持雪动效背景。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 从6.0.0(20)开始支持展示天气动效背景"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WEATHER_TYPE_SNOW_STORM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "55"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["暴雪天气类型，展示暴雪天气效果。实况卡片支持雪动效背景。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 从6.0.2(22)开始支持展示天气动效背景"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WEATHER_TYPE_DUST_STORM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "56"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "沙尘暴天气类型，展示沙尘暴天气效果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WEATHER_TYPE_DUST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "65"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "浮尘天气类型，展示浮尘天气效果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WEATHER_TYPE_SAND"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "66"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "扬沙天气类型，展示扬沙天气效果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WEATHER_TYPE_SAND_STORM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "67"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "强沙尘暴天气类型，展示强沙尘暴天气效果。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "weatherlocationtype",
      children: "WeatherLocationType"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "天气位置类型，为枚举值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.LiveView.LiveViewService"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Phone、Tablet中可正常调用，在其他设备类型中无效果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LOCATION_TYPE_LOCAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示展示本地天气效果，仅支持基础模板、进度可视化模板和强调文本模板（即", (0,jsx_runtime.jsx)(_components.a, {
              href: "#layouttype",
              children: "layoutType"
            }), "为LAYOUT_TYPE_DEFAULT/LAYOUT_TYPE_PROGRESS/LAYOUT_TYPE_PICKUP）。天气图标将展示在固定区标题右侧，不支持显示温度。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 从6.0.2(22)开始支持展示本地天气效果。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LOCATION_TYPE_DESTINATION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示展示目的地天气效果，仅支持左右文本模板（即", (0,jsx_runtime.jsx)(_components.a, {
              href: "#layouttype",
              children: "layoutType"
            }), "为LAYOUT_TYPE_FLIGHT）。天气图标及温度信息将展示在左右文本模板扩展区右侧，扩展区右侧标题及右侧内容的左侧。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 从6.0.0(20)开始支持展示目的地天气效果；"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "servicebutton",
      children: "ServiceButton"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用传入连续服务按钮的基类。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.LiveView.LiveViewService"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Phone、Tablet中可正常调用，在其他设备类型中无效果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.1(19)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "连续服务按钮名字，长度小于128，超过该长度的字符将被截断。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "clickAction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-wantagent/js-apis-app-ability-wantagent",
              children: "WantAgent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["点击连续服务按钮时触发的跳转动作，请调用wantAgent.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-wantagent/js-apis-app-ability-wantagent#wantagentgetwantagent-1",
              children: "getWantAgent()"
            }), "来构造。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "progresslayout",
      children: "ProgressLayout"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["进度可视化模板扩展区参数，继承", (0,jsx_runtime.jsx)(_components.a, {
        href: "#layoutdata",
        children: "LayoutData"
      }), "。当", (0,jsx_runtime.jsx)(_components.a, {
        href: "#layouttype",
        children: "layoutType"
      }), "为LayoutType.LAYOUT_TYPE_PROGRESS时，使用此类型。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.LiveView.LiveViewService"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Phone、Tablet中可正常调用，在其他设备类型中无效果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "progress"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "进度百分比，决定指示器在进度条中的位置，值范围：[0,100]。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "color"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "进度条颜色，\"#ARGB\"16进制格式，长度为9。默认颜色为#FF317AF7。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "backgroundColor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "进度条背景颜色，\"#ARGB\"16进制格式，长度为9。默认颜色为#19000000，深色模式默认颜色#19FFFFFF。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "indicatorType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#indicatortype",
              children: "IndicatorType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "扩展区指示器小图标显示类型，默认不显示指示器小图标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "indicatorIcon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["image.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap",
              children: "PixelMap"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建或模板切换：否（仅当indicatorType值为IndicatorType.INDICATOR_TYPE_UP或IndicatorType.INDICATOR_TYPE_OVERLAY时）  更新或结束：是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "lineType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#linetype",
              children: "LineType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "扩展区进度条显示类型，默认为虚线进度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nodeIcons"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array<string"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["image.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap",
              children: "PixelMap"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建或模板切换：否  更新或结束：是"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pickuplayout",
      children: "PickupLayout"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["强调文本模板扩展区参数，继承", (0,jsx_runtime.jsx)(_components.a, {
        href: "#layoutdata",
        children: "LayoutData"
      }), "。当", (0,jsx_runtime.jsx)(_components.a, {
        href: "#layouttype",
        children: "layoutType"
      }), "为LayoutType.LAYOUT_TYPE_PICKUP时，使用此类型。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.LiveView.LiveViewService"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Phone、Tablet中可正常调用，在其他设备类型中无效果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "title"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建或模板切换：否  更新或结束：是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "扩展区标题，若填值时不能为空，长度小于128。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "content"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建或模板切换：否  更新或结束：是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "扩展区内容，若填值时不能为空，长度小于128。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "underlineColor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "扩展区内容下划线颜色，\"#ARGB\"16进制格式，长度为9，默认不显示下划线。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "descPic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["image.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap",
              children: "PixelMap"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建或模板切换：否  更新或结束：是"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flightlayout",
      children: "FlightLayout"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["左右文本模板扩展区参数，继承", (0,jsx_runtime.jsx)(_components.a, {
        href: "#layoutdata",
        children: "LayoutData"
      }), "。当", (0,jsx_runtime.jsx)(_components.a, {
        href: "#layouttype",
        children: "layoutType"
      }), "为LayoutType.LAYOUT_TYPE_FLIGHT时，使用此类型。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.LiveView.LiveViewService"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Phone、Tablet中可正常调用，在其他设备类型中无效果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "style"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#flightlayoutstyle",
              children: "FlightLayoutStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["左右文本子样式类型，若未填默认为强调型子样式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "●"
              })
            }), " 0：强调型子样式类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "●"
              })
            }), " 1：均衡型子样式类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 5.0.2(14)。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "firstTitle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建或模板切换：否  更新或结束：是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "扩展区左侧标题，若填值时不能为空，长度小于128。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "firstContent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建或模板切换：否  更新或结束：是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "扩展区左侧内容，若填值时不能为空，长度小于128。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "lastTitle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建或模板切换：否  更新或结束：是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "扩展区右侧标题，若填值时不能为空，长度小于128。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "lastContent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建或模板切换：否  更新或结束：是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "扩展区右侧内容，若填值时不能为空，长度小于128。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "lastTitleSuperscript"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["扩展区右侧标题的右上角展示内容，若填值时不能为空，长度小于128。若用于表示到达时间跨天，传入值长度等于2，格式为\"+X\", 其中X为数字，例如\"+1\", \"+2\"等。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 5.0.2(14)。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "lastContentSuperscript"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["扩展区右侧内容的右上角展示内容，若填值时不能为空，长度小于128。若用于表示到达时间跨天，传入值长度等于2，格式为\"+X\", 其中X为数字，例如\"+1\", \"+2\"等。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 5.0.2(14)。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "spaceType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#spacetype",
              children: "SpaceType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["左右文本模板扩展区中间的显示类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "●"
              })
            }), " 未携带该字段或0：显示spaceIcon指定的中间间隔图标。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "●"
              })
            }), " 1：显示由spaceText指定的中间间隔文本。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 5.0.2(14)。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "spaceIcon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["image.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap",
              children: "PixelMap"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建或模板切换：未填spaceType或spaceType为SpaceType.SPACE_TYPE_ICON时必填"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "spaceText"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建或模板切换：spaceType为SpaceType.SPACE_TYPE_TEXT时必填"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["扩展区中间间隔文本，用于展示日期，例如10/28 周六、2025/09/15等。  限制为6个中文字符长度或12个英文字符长度，若超长则截断展示。  更新或结束不携带时显示上次的文本。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 起始版本：5.0.2(14)。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isHorizontalLineDisplayed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["是否显示扩展区分割线，默认显示分割线。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "●"
              })
            }), " true：显示。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "●"
              })
            }), " false：不显示。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "additionalText"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["扩展区底部内容，长度小于1024。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 5.0.0(12)。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scorelayout",
      children: "ScoreLayout"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["赛事比分模板扩展区参数，继承", (0,jsx_runtime.jsx)(_components.a, {
        href: "#layoutdata",
        children: "LayoutData"
      }), "。当", (0,jsx_runtime.jsx)(_components.a, {
        href: "#layouttype",
        children: "layoutType"
      }), "为LayoutType.LAYOUT_TYPE_SCORE时，使用此类型。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.LiveView.LiveViewService"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Phone、Tablet中可正常调用，在其他设备类型中无效果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hostName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建或模板切换：否  更新或结束：是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "扩展区左侧名称，若填值时不能为空，长度小于128。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hostIcon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["image.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap",
              children: "PixelMap"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建或模板切换：否  更新或结束：是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hostScore"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建或模板切换：否  更新或结束：是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "扩展区左侧比分，若填值时不能为空，长度小于128。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "guestName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建或模板切换：否  更新或结束：是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "扩展区右侧名称，若填值时不能为空，长度小于128。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "guestIcon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["image.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap",
              children: "PixelMap"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建或模板切换：否  更新或结束：是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "guestScore"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建或模板切换：否  更新或结束：是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "扩展区右侧比分，若填值时不能为空，长度小于128。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "competitionDesc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#richtext",
              children: "RichText"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建或模板切换：否  更新或结束：是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "competitionTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建或模板切换：否  更新或结束：是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "扩展区中间下方比赛时间，若填值时不能为空，长度小于128。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isHorizontalLineDisplayed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["是否显示扩展区分割线，默认显示分割线。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "●"
              })
            }), " true：显示。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "●"
              })
            }), " false：不显示。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "navigationlayout",
      children: "NavigationLayout"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["导航模板扩展区参数，继承", (0,jsx_runtime.jsx)(_components.a, {
        href: "#layoutdata",
        children: "LayoutData"
      }), "。当", (0,jsx_runtime.jsx)(_components.a, {
        href: "#layouttype",
        children: "layoutType"
      }), "为LayoutType.LAYOUT_TYPE_NAVIGATION时，使用此类型。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.LiveView.LiveViewService"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Phone、Tablet中可正常调用，在其他设备类型中无效果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "currentNavigationIcon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["image.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap",
              children: "PixelMap"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建或模板切换：否  更新或结束：是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "navigationIcons"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array<string"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["image.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap",
              children: "PixelMap"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isNavigationIconsDisplayed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["控制导航方向的箭头集合图片是否展示。更新或结束未填时，继承上一次状态变更时的值。其他情况不传值时默认为展示。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "●"
              })
            }), " true：展示  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "●"
              })
            }), " false：不展示  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本"
              })
            }), "：5.0.3(15)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "capsuledata",
      children: "CapsuleData"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义实况胶囊基本属性的基类。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.LiveView.LiveViewService"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Phone、Tablet中可正常调用，在其他设备类型中无效果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#capsuletype",
              children: "CapsuleType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "实况胶囊的类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "status"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["实况胶囊的显示状态。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "●"
              })
            }), " 1：显示实况胶囊。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "●"
              })
            }), " -1：结束显示实况胶囊。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "icon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["image.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap",
              children: "PixelMap"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建：否  更新或结束：是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "tailIcon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["image.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap",
              children: "PixelMap"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "backgroundColor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建：否  更新或结束：是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["实况胶囊的背景颜色，\"#ARGB\"16进制格式，长度为9。更新或结束未填时，继承上一次状态变更时的颜色。  不建议使用以下颜色：  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "●"
              })
            }), " #FF000000  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "●"
              })
            }), " #FFFFFFFF  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "●"
              })
            }), " #FFF1F3F5"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isContentDisplayed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["实况胶囊的副文本是否展示。该参数未填时，继承上一次创建或更新实况窗时传入的值。其他情况不传值时默认为展示。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "●"
              })
            }), " true：展示  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "●"
              })
            }), " false：不展示  isContentDisplayed与isTailIconDisplayed均为false时，实况胶囊的副文本及尾部图标区域不展示。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 5.0.3(15)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isTailIconDisplayed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["实况胶囊的尾部图标是否展示。该参数未填时，继承上一次创建或更新实况窗时传入的值。其他情况不传值时默认不展示。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "●"
              })
            }), " true：展示  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "●"
              })
            }), " false：不展示  isContentDisplayed与isTailIconDisplayed均为false时，实况胶囊的副文本及尾部图标区域不展示。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 6.0.0(20)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "textcapsule",
      children: "TextCapsule"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["文本实况胶囊参数，继承", (0,jsx_runtime.jsx)(_components.a, {
        href: "#capsuledata",
        children: "CapsuleData"
      }), "。当", (0,jsx_runtime.jsx)(_components.a, {
        href: "#capsuledata",
        children: "type"
      }), "为CapsuleType.CAPSULE_TYPE_TEXT时，使用此类型。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.LiveView.LiveViewService"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Phone、Tablet中可正常调用，在其他设备类型中无效果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "title"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建或模板切换：否  更新或结束：是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["实况胶囊的主文本，长度小于128，若传入该参数，其值不能为以下值：null/undefined/空字符串/全为空格的字符串。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 从6.0.0(20)版本开始，支持当传入值为\"数值:数值\"，且", (0,jsx_runtime.jsx)(_components.a, {
              href: "#layouttype",
              children: "layoutType"
            }), "为赛事类型LAYOUT_TYPE_SCORE时，系统将自动提取实况卡片扩展区两侧图片和比分，更新实况胶囊样式，显示为赛事队伍图标及比分情况。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "content"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "实况胶囊的副文本，长度小于128，若传入该参数，其值不能为以下值：null/undefined/空字符串/全为空格的字符串。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "timercapsule",
      children: "TimerCapsule"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["计时器实况胶囊参数，继承", (0,jsx_runtime.jsx)(_components.a, {
        href: "#capsuledata",
        children: "CapsuleData"
      }), "。当", (0,jsx_runtime.jsx)(_components.a, {
        href: "#capsuledata",
        children: "type"
      }), "为CapsuleType.CAPSULE_TYPE_TIMER时，使用此类型。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.LiveView.LiveViewService"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Phone、Tablet中可正常调用，在其他设备类型中无效果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "content"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "实况胶囊的副文本，长度小于128，若传入该参数，其值不能为以下值：null/undefined/空字符串/全为空格的字符串。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "实况胶囊计时器初始值，每秒刷新一次，单位：ms，默认为0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isCountdown"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["是否显示倒计时器。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "●"
              })
            }), " true：倒计时。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "●"
              })
            }), " false：正计时（默认值）。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isPaused"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["实况胶囊计时器是否暂停，计时器暂停时，实况胶囊会显示暂停的那一秒。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "●"
              })
            }), " true：暂停。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "●"
              })
            }), " false：不暂停（默认值）。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "progresscapsule",
      children: "ProgressCapsule"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["进度实况胶囊参数，继承", (0,jsx_runtime.jsx)(_components.a, {
        href: "#capsuledata",
        children: "CapsuleData"
      }), "。当", (0,jsx_runtime.jsx)(_components.a, {
        href: "#capsuledata",
        children: "type"
      }), "为CapsuleType.CAPSULE_TYPE_PROGRESS时，使用此类型。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.LiveView.LiveViewService"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Phone、Tablet中可正常调用，在其他设备类型中无效果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "max"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "进度条最大进度值，默认为1，范围为[1, 2147483647]。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "progress"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "进度条当前进度值，默认为0，范围为[0, 2147483647]。进度的值为progress/max的比值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "indeterminate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["进度显示类型，默认显示为数值占比。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "●"
              })
            }), " true：百分比。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "●"
              })
            }), " false：数值占比（默认）。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "content"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["实况胶囊的副文本，长度小于128，若传入该参数，其值不能为以下值：null/undefined/空字符串/全为空格的字符串。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 6.0.0(20)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "externaldata",
      children: "ExternalData"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "外屏形态模板参数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.LiveView.LiveViewService"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Phone、Tablet中可正常调用，在其他设备类型中无效果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "title"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建：否  更新或结束：是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "外屏标题，若填值时不能为空，长度小于128。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "content"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#richtext",
              children: "RichText"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建：否  更新或结束：是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["外屏内容，应用可以设置字符串中部分文本的颜色，若填值时不能为空。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "●"
              })
            }), " 数组中所有对象的text字段字符串长度总和需小于128。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "●"
              })
            }), " 数组中对象不设置textColor字段时，文本颜色默认为#99000000；设置textColor字段时，所有拥有textColor字段的对象仅能设置同一种颜色。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#externaltype",
              children: "ExternalType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["外屏背景样式类型，默认为背景色。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 5.0.0(12)。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "backgroundColor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "外屏背景颜色，\"#RGB\"16进制格式， 长度为7，默认颜色为#F1F3F5。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "backgroundPicture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["image.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap",
              children: "PixelMap"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建：否（仅当type为ExternalType.BACKGROUND_PICTURE时）  更新或结束：是（当type为ExternalType.BACKGROUND_PICTURE时，此参数生效）"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "richtext",
      children: "RichText"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "富文本参数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.LiveView.LiveViewService"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Phone、Tablet中可正常调用，在其他设备类型中无效果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本内容，长度小于128。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "textColor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本颜色，\"#ARGB\"16进制格式，长度为9。不设置textColor时，文本颜色默认为#99000000；设置textColor时，数组中的所有对象仅能设置一种颜色。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "liveviewresult",
      children: "LiveViewResult"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "实况窗结果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.LiveView.LiveViewService"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Phone、Tablet中可正常调用，在其他设备类型中无效果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "resultCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["实况窗结果码。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "●"
              })
            }), " 0：成功。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "●"
              })
            }), " 1：固定区更新或结束失败。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "●"
              })
            }), " 2：辅助区更新或结束失败。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "●"
              })
            }), " 3：扩展区更新或结束失败。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "●"
              })
            }), " 4：实况胶囊更新或结束失败。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "●"
              })
            }), " 5：外屏更新或结束失败。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "message"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "实况窗结果信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "layouttype",
      children: "LayoutType"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "扩展区类型，为枚举值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.LiveView.LiveViewService"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Phone、Tablet中可正常调用，在其他设备类型中无效果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LAYOUT_TYPE_DEFAULT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不显示扩展区。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LAYOUT_TYPE_PROGRESS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "进度可视化类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LAYOUT_TYPE_PICKUP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "强调文本类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LAYOUT_TYPE_FLIGHT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "左右文本类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LAYOUT_TYPE_SCORE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "赛事类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LAYOUT_TYPE_NAVIGATION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["导航类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 5.0.0(12)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "extensiontype",
      children: "ExtensionType"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "辅助区类型，为枚举值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.LiveView.LiveViewService"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Phone、Tablet中可正常调用，在其他设备类型中无效果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EXTENSION_TYPE_DEFAULT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不显示辅助区。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EXTENSION_TYPE_COMMON_TEXT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "普通文本。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EXTENSION_TYPE_CAPSULE_TEXT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "实况胶囊文本。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EXTENSION_TYPE_PIC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示图片。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EXTENSION_TYPE_ICON"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示图标。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "indicatortype",
      children: "IndicatorType"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "指示器类型，为枚举值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.LiveView.LiveViewService"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Phone、Tablet中可正常调用，在其他设备类型中无效果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INDICATOR_TYPE_UNDISPLAYED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不显示指示器小图标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INDICATOR_TYPE_UP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示在进度线上方。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INDICATOR_TYPE_OVERLAY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示覆盖在进度线上。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "linetype",
      children: "LineType"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "扩展区进度条类型，为枚举值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.LiveView.LiveViewService"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Phone、Tablet中可正常调用，在其他设备类型中无效果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LINE_TYPE_DOTTED_LINE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "虚线进度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LINE_TYPE_NORMAL_SOLID_LINE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "实线进度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LINE_TYPE_THICK_SOLID_LINE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "粗实线进度。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "capsuletype",
      children: "CapsuleType"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "实况胶囊类型，为枚举值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.LiveView.LiveViewService"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Phone、Tablet中可正常调用，在其他设备类型中无效果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CAPSULE_TYPE_TEXT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本实况胶囊。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CAPSULE_TYPE_TIMER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计时器实况胶囊。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CAPSULE_TYPE_PROGRESS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "进度实况胶囊。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "externaltype",
      children: "ExternalType"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "外屏背景样式类型，为枚举值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.LiveView.LiveViewService"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Phone、Tablet中可正常调用，在其他设备类型中无效果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BACKGROUND_COLOR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示背景色。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BACKGROUND_PICTURE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示背景图片。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flightlayoutstyle",
      children: "FlightLayoutStyle"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "左右文本子样式类型，为枚举值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.LiveView.LiveViewService"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Phone、Tablet中可正常调用，在其他设备类型中无效果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "STYLE_FLIGHT_EMPHASIS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "强调型子样式类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "STYLE_FLIGHT_BALANCE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "均衡型子样式类型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(428922)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["扩展区支持强调型和均衡型两种子样式，两种子样式区别在于左右文本标题和内容字号大小不同，均衡型左右文本标题字号缩小，内容字号增大，展示效果更均衡。详细模板设计样式请参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/design-guides/system-features-live-view-0000001955186861#section1511241615274",
        children: "实况窗设计指南>通用卡片模板>模板类型>左右文本模板"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "spacetype",
      children: "SpaceType"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "左右文本模板扩展区中间的显示类型，为枚举值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.LiveView.LiveViewService"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Phone、Tablet中可正常调用，在其他设备类型中无效果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SPACE_TYPE_ICON"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "扩展区中间显示图标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SPACE_TYPE_TEXT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "扩展区中间显示文本。"
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
624133(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
428922(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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