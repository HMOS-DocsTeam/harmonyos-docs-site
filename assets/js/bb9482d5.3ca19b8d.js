"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["433456"], {
549643(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_ability_api_ability_arkts_stage_model_js_apis_app_ability_contextconstant_js_apis_app_ability_contextconstant_md_bb9_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-ability-api-ability-arkts-stage-model-js-apis-app-ability-contextconstant-js-apis-app-ability-contextconstant-md-bb9.json
var site_docs_ref_ability_api_ability_arkts_stage_model_js_apis_app_ability_contextconstant_js_apis_app_ability_contextconstant_md_bb9_namespaceObject = JSON.parse('{"id":"ability-api/ability-arkts/stage-model/js-apis-app-ability-contextconstant/js-apis-app-ability-contextconstant","title":"@ohos.app.ability.contextConstant (Context相关常量)","description":"ContextConstant提供Context相关的枚举，包含文件加密分区等级、UIAbility启动后的进程模式等。","source":"@site/docs-ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-contextconstant/js-apis-app-ability-contextconstant.md","sourceDirName":"ability-api/ability-arkts/stage-model/js-apis-app-ability-contextconstant","slug":"/ability-api/ability-arkts/stage-model/js-apis-app-ability-contextconstant/js-apis-app-ability-contextconstant","permalink":"/harmonyos-docs-site/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-contextconstant/js-apis-app-ability-contextconstant","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":19,"frontMatter":{"title":"@ohos.app.ability.contextConstant (Context相关常量)","sidebar_position":19,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-contextconstant","kit":"应用框架","last_updated":"2026-04-22","slug":"js-apis-app-ability-contextconstant"},"sidebar":"ref","previous":{"title":"@ohos.app.ability.CompletionHandlerForAbilityStartCallback (拉起应用结果回调的操作类)","permalink":"/harmonyos-docs-site/ref/ability-api/ability-arkts/stage-model/p-ability-completionhandlerforabilitystartcallback/p-ability-completionhandlerforabilitystartcallback"},"next":{"title":"@ohos.app.ability.EmbeddableUIAbility (可嵌入式UIAbility组件)","permalink":"/harmonyos-docs-site/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-embeddableuiability/js-apis-app-ability-embeddableuiability"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-contextconstant/js-apis-app-ability-contextconstant.md


const frontMatter = {
	title: '@ohos.app.ability.contextConstant (Context相关常量)',
	sidebar_position: 19,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-contextconstant',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'js-apis-app-ability-contextconstant'
};
const contentTitle = '@ohos.app.ability.contextConstant (Context相关常量)';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "AreaMode",
  "id": "areamode",
  "level": 2
}, {
  "value": "ProcessMode12+",
  "id": "processmode12",
  "level": 2
}, {
  "value": "StartupVisibility12+",
  "id": "startupvisibility12",
  "level": 2
}, {
  "value": "Scenarios20+",
  "id": "scenarios20",
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
    p: "p",
    pre: "pre",
    strong: "strong",
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
        id: "ohosappabilitycontextconstant-context相关常量",
        children: "@ohos.app.ability.contextConstant (Context相关常量)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ContextConstant提供Context相关的枚举，包含文件加密分区等级、UIAbility启动后的进程模式等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(256762)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块首批接口从API version 9开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块接口仅可在Stage模型下使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { contextConstant } from '@kit.AbilityKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "areamode",
      children: "AreaMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "文件加密分区等级，保证应用在不同场景下的数据安全。开发者可以根据应用的具体需求选择合适的加密等级，以保护用户的数据安全。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Ability.AbilityRuntime.Core"]
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
            children: "EL1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设备级加密区，设备开机后可访问的数据区。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API"
              })
            }), "：从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EL2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用户级加密区，设备开机，首次输入密码后才能够访问的数据区。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API"
              })
            }), "：从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EL311+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用户级加密区，不同场景的文件权限如下：  已打开文件：锁屏时，可读写；解锁后，可读写。  未打开文件：锁屏时，不可打开、不可读写；解锁后，可打开、可读写。  创建新文件：锁屏时，可创建、可打开、可写不可读；解锁后，可创建、可打开、可读写。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API"
              })
            }), "：从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EL411+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用户级加密区，不同场景的文件权限如下：  已打开文件：锁屏时，不可读写；解锁后，可读写。  未打开文件：锁屏时，不可打开、不可读写；解锁后，可打开、可读写。  创建新文件：锁屏时，不可创建；解锁后，可创建、可打开、可读写。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API"
              })
            }), "：从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EL512+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["应用级加密区，不同场景的文件权限如下：  已打开文件：锁屏时，可读写；解锁后，可读写。  未打开文件：锁屏时，调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/both-models/js-apis-screenlockfilemanager/js-apis-screenlockfilemanager#screenlockfilemanageracquireaccess",
              children: "Access"
            }), "接口获取保留密钥后，可打开、可读写，否则不可打开、不可读写；解锁后，可打开、可读写。  创建新文件：锁屏时，可创建、可打开、可读写；解锁后，可创建、可打开、可读写。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API"
              })
            }), "：从API version 12开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "processmode12",
      children: "ProcessMode12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "UIAbility启动后的进程模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ProcessMode作为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-startoptions/js-apis-app-ability-startoptions",
        children: "StartOptions"
      }), "的一个属性，仅在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#startability-1",
        children: "UIAbilityContext.startAbility"
      }), "中生效，用来指定目标UIAbility的进程模式。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Ability.AbilityRuntime.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异"
        })
      }), "：该功能仅在2in1和Tablet设备上生效，在其他设备中返回801错误码。"]
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
            children: "NEW_PROCESS_ATTACH_TO_PARENT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建一个新进程，并在该进程上启动UIAbility。该进程会跟随父进程退出。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "约束："
              })
            }), "  使用此模式时，要求目标UIAbility跟调用方是在同一个应用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NEW_PROCESS_ATTACH_TO_STATUS_BAR_ITEM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建一个新进程，在该进程上启动UIAbility，并绑定该进程到状态栏图标上。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "约束："
              })
            }), "  使用此模式时，要求目标UIAbility跟调用方是在同一个应用，并且应用要在状态栏中有图标。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ATTACH_TO_STATUS_BAR_ITEM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["启动UIAbility，并绑定该UIAbility所在进程到状态栏图标上。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "约束："
              })
            }), "  使用此模式时，要求目标UIAbility跟调用方是在同一个应用，并且应用要在状态栏中有图标。"]
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
        children: "import { UIAbility, Want, StartOptions, contextConstant } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nexport default class EntryAbility extends UIAbility {\n  onForeground() {\n    let want: Want = {\n      deviceId: '',\n      bundleName: 'com.example.myapplication',\n      abilityName: 'MainAbility2'\n    };\n    let options: StartOptions = {\n      processMode: contextConstant.ProcessMode.NEW_PROCESS_ATTACH_TO_STATUS_BAR_ITEM,\n      startupVisibility: contextConstant.StartupVisibility.STARTUP_HIDE\n    };\n\n    try {\n      this.context.startAbility(want, options, (err: BusinessError) => {\n        if (err.code) {\n          // 处理业务逻辑错误\n          console.error(`startAbility failed, code is ${err.code}, message is ${err.message}`);\n          return;\n        }\n        // 执行正常业务\n        console.info('startAbility succeed');\n      });\n    } catch (err) {\n      // 处理入参错误异常\n      let code = (err as BusinessError).code;\n      let message = (err as BusinessError).message;\n      console.error(`startAbility failed, code is ${code}, message is ${message}`);\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "startupvisibility12",
      children: "StartupVisibility12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "UIAbility启动后是否可见。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当用户设置目标UIAbility为不可见时，目标UIAbility的窗口不会显示在前台，dock栏也不会有图标，同时目标UIAbility的onForeground生命周期不会被调用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["StartupVisibility作为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-startoptions/js-apis-app-ability-startoptions",
        children: "StartOptions"
      }), "的一个属性，仅在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#startability-1",
        children: "UIAbilityContext.startAbility"
      }), "中生效，用来指定目标UIAbility启动后的可见性。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Ability.AbilityRuntime.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异"
        })
      }), "：该功能仅在2in1和Tablet设备上生效，在其他设备中返回801错误码。"]
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
            children: "STARTUP_HIDE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "目标UIAbility启动后，进入隐藏状态。不会调用UIAbility的onForeground生命周期。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "STARTUP_SHOW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "目标UIAbility启动后，正常显示。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#processmode12",
        children: "ContextConstant.ProcessMode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenarios20",
      children: "Scenarios20+"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["表示不触发", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#onnewwant",
        children: "onNewWant"
      }), "生命周期回调场景的枚举，用于", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#setonnewwantskipscenarios20",
        children: "setOnNewWantSkipScenarios"
      }), "接口。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 20开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Ability.AbilityRuntime.Core"]
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
            children: "SCENARIO_MOVE_MISSION_TO_FRONT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x00000001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "共享屏幕时系统将用户选择的UIAbility拉起到前台场景。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SCENARIO_SHOW_ABILITY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x00000002"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#showability12",
              children: "showAbility"
            }), "接口触发的UIAbility到前台场景。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SCENARIO_BACK_TO_CALLER_ABILITY_WITH_RESULT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x00000004"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#backtocallerabilitywithresult12",
              children: "backToCallerAbilityWithResult"
            }), "接口触发的UIAbility到前台场景。"]
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
        children: "import { AbilityConstant, contextConstant, UIAbility, Want } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nexport default class EntryAbility extends UIAbility {\n  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam) {\n    let scenarios: number = contextConstant.Scenarios.SCENARIO_MOVE_MISSION_TO_FRONT |\n      contextConstant.Scenarios.SCENARIO_SHOW_ABILITY |\n      contextConstant.Scenarios.SCENARIO_BACK_TO_CALLER_ABILITY_WITH_RESULT;\n\n    try {\n      this.context.setOnNewWantSkipScenarios(scenarios).then(() => {\n        // 执行正常业务\n        console.info('setOnNewWantSkipScenarios succeed');\n      }).catch((err: BusinessError) => {\n        // 处理业务逻辑错误\n        console.error(`setOnNewWantSkipScenarios failed, code is ${err.code}, message is ${err.message}`);\n      });\n    } catch (err) {\n      // 处理入参错误异常\n      let code = (err as BusinessError).code;\n      let message = (err as BusinessError).message;\n      console.error(`setOnNewWantSkipScenarios failed, code is ${code}, message is ${message}`);\n    }\n  }\n}\n"
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
256762(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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