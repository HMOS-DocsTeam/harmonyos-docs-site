"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["81172"], {
135242(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ability_kit_stage_model_development_inter_app_redirection_specified_type_app_redirection_start_flight_apps_start_flight_apps_md_36a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ability-kit-stage-model-development-inter-app-redirection-specified-type-app-redirection-start-flight-apps-start-flight-apps-md-36a.json
var site_docs_ability_kit_stage_model_development_inter_app_redirection_specified_type_app_redirection_start_flight_apps_start_flight_apps_md_36a_namespaceObject = JSON.parse('{"id":"ability-kit/stage-model-development/inter-app-redirection/specified-type-app-redirection/start-flight-apps/start-flight-apps","title":"拉起航班类应用（startAbilityByType）","description":"本章节介绍如何拉起航班类应用扩展面板。","source":"@site/docs/ability-kit/stage-model-development/inter-app-redirection/specified-type-app-redirection/start-flight-apps/start-flight-apps.md","sourceDirName":"ability-kit/stage-model-development/inter-app-redirection/specified-type-app-redirection/start-flight-apps","slug":"/ability-kit/stage-model-development/inter-app-redirection/specified-type-app-redirection/start-flight-apps/","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/inter-app-redirection/specified-type-app-redirection/start-flight-apps/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"拉起航班类应用（startAbilityByType）","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/start-flight-apps","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"拉起金融类应用（startAbilityByType）","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/inter-app-redirection/specified-type-app-redirection/start-finance-apps/"},"next":{"title":"拉起快递类应用（startAbilityByType）","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/inter-app-redirection/specified-type-app-redirection/start-express-apps/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ability-kit/stage-model-development/inter-app-redirection/specified-type-app-redirection/start-flight-apps/start-flight-apps.md


const frontMatter = {
	title: '拉起航班类应用（startAbilityByType）',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/start-flight-apps',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '拉起航班类应用（startAbilityByType）';

const assets = {

};



const toc = [{
  "value": "航班类应用扩展面板参数说明",
  "id": "航班类应用扩展面板参数说明",
  "level": 2
}, {
  "value": "拉起方开发步骤",
  "id": "拉起方开发步骤",
  "level": 2
}, {
  "value": "目标方开发步骤",
  "id": "目标方开发步骤",
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
    ol: "ol",
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
        id: "拉起航班类应用startabilitybytype",
        children: "拉起航班类应用（startAbilityByType）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本章节介绍如何拉起航班类应用扩展面板。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["例如，在行程安排类App中，当用户记录了某次行程的航班号，应用能够识别航班号信息并提供航班动态查询的链接。用户点击链接后，应用将通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#startabilitybytype11",
        children: "UIAbilityContext.startAbilityByType"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiextensioncontentsession/js-apis-app-ability-uiextensioncontentsession#startabilitybytype11",
        children: "UIExtensionContentSession.startAbilityByType"
      }), "接口，拉起航班类应用的扩展面板。面板上将展示设备上所有支持航班查询的应用，供用户选择并跳转至所需应用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "航班类应用扩展面板参数说明",
      children: "航班类应用扩展面板参数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "startAbilityByType接口中type字段为flight，支持按航班号查询、按起降地查询两种意图场景，对应的wantParam参数如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "按航班号查询场景"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
                children: "sceneType"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "number"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "意图场景，表明本次请求对应的操作意图。默认为1，按航班号查询场景填1或不填。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "flightNo"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "航班号，航司二位代码+数字。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "departureDate"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "航班出发时间：YYYY-MM-DD。"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "按起降地查询场景"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
                children: "sceneType"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "number"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "意图场景，表明本次请求对应的操作意图。按起降地查询场景填2。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "originLocation"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "出发地。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "destinationLocation"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "目的地。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "departureDate"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "航班出发时间：YYYY-MM-DD。"
              })]
            })]
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "拉起方开发步骤",
      children: "拉起方开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入相关模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { common } from '@kit.AbilityKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "构造接口参数并调用startAbilityByType接口。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct Index {\n    @State hideAbility: string = 'hideAbility'\n\n    build() {\n        Row() {\n            Column() {\n                Text(this.hideAbility)\n                    .fontSize(30)\n                    .fontWeight(FontWeight.Bold)\n                    .onClick(() => {\n                        let context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n                        let wantParam: Record<string, Object> = {\n                            'sceneType': 1,\n                            'flightNo': 'ZH1509',\n                            'departureDate': '2024-10-01'\n                        };\n                        let abilityStartCallback: common.AbilityStartCallback = {\n                            onError: (code: number, name: string, message: string) => {\n                                console.error(`onError code ${code} name: ${name} message: ${message}`);\n                            },\n                            onResult: (result) => {\n                                console.info(`onResult result: ${JSON.stringify(result)}`);\n                            }\n                        }\n\n                        context.startAbilityByType(\"flight\", wantParam, abilityStartCallback,\n                            (err) => {\n                                if (err) {\n                                    console.error(`startAbilityByType fail, err: ${JSON.stringify(err)}`);\n                                } else {\n                                    console.info(`success`);\n                                }\n                            });\n                    });\n            }\n            .width('100%')\n        }\n        .height('100%')\n    }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "效果示例图："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(69010)/* ["default"] */.A) + "",
            width: "328",
            height: "729"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "目标方开发步骤",
      children: "目标方开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在module.json5中配置", (0,jsx_runtime.jsx)(_components.a, {
            href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#skills%E6%A0%87%E7%AD%BE",
            children: "uris"
          }), "："]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "设置linkFeature属性以声明当前应用支持的特性功能，从而系统可以从设备已安装应用中找到当前支持该特性的应用，取值范围如下："
            }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
              children: [(0,jsx_runtime.jsx)(_components.thead, {
                children: (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.th, {
                    children: "取值"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "含义"
                  })]
                })
              }), (0,jsx_runtime.jsxs)(_components.tbody, {
                children: [(0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "QueryByFlightNo"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "声明应用支持按航班号查询航班。"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "QueryByLocation"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "声明应用支持按起降地查询航班。"
                  })]
                })]
              })]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "设置scheme、host、port、path/pathStartWith属性，与Want中URI相匹配，以便区分不同功能。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{\n    \"abilities\": [\n        {\n            \"skills\": [\n                {\n                    \"uris\": [\n                        {\n                            \"scheme\": \"flight\",\n                            \"host\": \"queryByFlightNo\",\n                            \"path\": \"\",\n                            \"linkFeature\": \"QueryByFlightNo\"\n                        },\n                        {\n                            \"scheme\": \"flight\",\n                            \"host\": \"queryByLocation\",\n                            \"path\": \"\",\n                            \"linkFeature\": \"QueryByLocation\"\n                        }\n                    ]\n                }\n            ]\n        }\n    ]\n}\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "解析参数并做对应处理。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "UIAbility.onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在参数", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "want.uri"
            })
          }), "中会携带目标方配置的linkFeature对应的uri。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在参数", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "want.parameters"
            })
          }), "中会携带Caller方传入的参数，不同场景参数如下所示"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "按航班号查询场景"
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
                    children: "flightNo"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "string"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "是"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "航班号，航司二位代码+数字。"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "departureDate"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "string"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "否"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "航班出发时间：YYYY-MM-DD。不填时，Target可按当天处理。"
                  })]
                })]
              })]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "按起降地查询场景"
            }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
                    children: "originLocation"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "string"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "是"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "出发地。"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "destinationLocation"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "string"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "是"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "目的地。"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "departureDate"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "string"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "否"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "航班出发时间：YYYY-MM-DD。不填时，Target可按当天处理。"
                  })]
                })]
              })]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["应用可根据", (0,jsx_runtime.jsx)(_components.a, {
            href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#skills%E6%A0%87%E7%AD%BE",
            children: "linkFeature"
          }), "中定义的特性功能，比如按航班号查询和按起降地查询，结合接收到的uri和参数开发不同的样式页面。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "完整示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { window } from '@kit.ArkUI';\n\nconst TAG = 'EntryAbility';\n\nexport default class EntryAbility extends UIAbility {\n    windowStage: window.WindowStage | null = null;\n\n    uri?: string;\n    flightNo?: string;\n    departureDate?: string;\n    originLocation?: string;\n    destinationLocation?: string;\n\n    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {\n        hilog.info(0x0000, TAG, `onCreate, want=${JSON.stringify(want)}`);\n        super.onCreate(want, launchParam);\n        this.parseWant(want);\n    }\n\n    onNewWant(want: Want, launchParam: AbilityConstant.LaunchParam): void {\n        hilog.info(0x0000, TAG, `onNewWant, want=${JSON.stringify(want)}`);\n        super.onNewWant(want, launchParam);\n        this.parseWant(want);\n        if (!this.windowStage) {\n            hilog.error(0x0000, TAG, 'windowStage is null');\n            this.context.terminateSelf();\n            return;\n        }\n        this.loadPage(this.windowStage);\n    }\n\n    private parseWant(want: Want): void {\n        this.uri = want.uri as string | undefined;\n        this.flightNo = want.parameters?.flightNo as string | undefined;\n        this.departureDate = want.parameters?.departureDate as string | undefined;\n        this.originLocation = want.parameters?.originLocation as string | undefined;\n        this.destinationLocation = want.parameters?.destinationLocation as string | undefined;\n    }\n\n    private loadPage(windowStage: window.WindowStage): void {\n        hilog.info(0x0000, TAG, `loadPage, uri=${this.uri}`);\n        if (this.uri === 'flight://queryByFlightNo') {\n            // 构建按航班号查询场景参数\n            const storage: LocalStorage = new LocalStorage({\n                \"flightNo\": this.flightNo,\n                \"departureDate\": this.departureDate\n            } as Record<string, Object>);\n            // 拉起按航班号查询页面\n            windowStage.loadContent('pages/QueryByFlightNoPage', storage)\n        } else if (this.uri === 'flight://queryByLocation') {\n            // 构建按起降地查询场景参数\n            const storage: LocalStorage = new LocalStorage({\n                \"originLocation\": this.originLocation,\n                \"destinationLocation\": this.destinationLocation,\n                \"departureDate\": this.departureDate\n            } as Record<string, Object>);\n            // 拉起按起降地查询页面\n            windowStage.loadContent('pages/QueryByLocationPage', storage)\n        } else {\n            // 默认拉起首页\n            windowStage.loadContent('pages/Index', (err) => {\n                if (err.code) {\n                    hilog.error(0x0000, TAG, 'Failed to load the content. Cause: %{public}s',\n                        JSON.stringify(err) ?? '');\n                    return;\n                }\n                hilog.info(0x0000, TAG, 'Succeeded in loading the content.');\n            });\n        }\n    }\n\n    onDestroy(): void {\n        hilog.info(0x0000, TAG, `onDestroy`);\n    }\n\n    onWindowStageCreate(windowStage: window.WindowStage): void {\n        hilog.info(0x0000, TAG, `onWindowStageCreate`);\n        this.windowStage = windowStage;\n        this.loadPage(this.windowStage);\n    }\n\n    onWindowStageDestroy(): void {\n        hilog.info(0x0000, TAG, '%{public}s', 'Ability onWindowStageDestroy');\n    }\n\n    onForeground(): void {\n        hilog.info(0x0000, TAG, '%{public}s', 'Ability onForeground');\n    }\n\n    onBackground(): void {\n        hilog.info(0x0000, TAG, '%{public}s', 'Ability onBackground');\n    }\n}\n"
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
69010(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437553-ea0e565857878add5ef3db640d26af9b.png");

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