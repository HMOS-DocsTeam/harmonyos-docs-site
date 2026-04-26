"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["829183"], {
847834(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_ability_api_ability_arkts_stage_model_js_apis_app_ability_insightintentprovider_js_apis_app_ability_insightintentprovider_md_adb_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-ability-api-ability-arkts-stage-model-js-apis-app-ability-insightintentprovider-js-apis-app-ability-insightintentprovider-md-adb.json
var site_docs_ref_ability_api_ability_arkts_stage_model_js_apis_app_ability_insightintentprovider_js_apis_app_ability_insightintentprovider_md_adb_namespaceObject = JSON.parse('{"id":"ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintentprovider/js-apis-app-ability-insightintentprovider","title":"@ohos.app.ability.insightIntentProvider (意图提供方管理能力)","description":"本模块为意图提供方提供管理能力，如主动发送指定意图的执行结果。","source":"@site/docs-ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintentprovider/js-apis-app-ability-insightintentprovider.md","sourceDirName":"ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintentprovider","slug":"/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintentprovider/js-apis-app-ability-insightintentprovider","permalink":"/harmonyos-docs-site/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintentprovider/js-apis-app-ability-insightintentprovider","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":29,"frontMatter":{"title":"@ohos.app.ability.insightIntentProvider (意图提供方管理能力)","sidebar_position":29,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-insightintentprovider","kit":"应用框架","last_updated":"2026-04-22","slug":"js-apis-app-ability-insightintentprovider"},"sidebar":"ref","previous":{"title":"@ohos.app.ability.InsightIntentExecutor (意图执行基类)","permalink":"/harmonyos-docs-site/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintentexecutor/js-apis-app-ability-insightintentexecutor"},"next":{"title":"@ohos.app.ability.PhotoEditorExtensionAbility (支持图片编辑能力的ExtensionAbility组件)","permalink":"/harmonyos-docs-site/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-photoeditorextensionability/js-apis-app-ability-photoeditorextensionability"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintentprovider/js-apis-app-ability-insightintentprovider.md


const frontMatter = {
	title: '@ohos.app.ability.insightIntentProvider (意图提供方管理能力)',
	sidebar_position: 29,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-insightintentprovider',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'js-apis-app-ability-insightintentprovider'
};
const contentTitle = '@ohos.app.ability.insightIntentProvider (意图提供方管理能力)';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "insightIntentProvider.sendExecuteResult",
  "id": "insightintentprovidersendexecuteresult",
  "level": 2
}, {
  "value": "insightIntentProvider.sendIntentResult",
  "id": "insightintentprovidersendintentresult",
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
        id: "ohosappabilityinsightintentprovider-意图提供方管理能力",
        children: "@ohos.app.ability.insightIntentProvider (意图提供方管理能力)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块为意图提供方提供管理能力，如主动发送指定意图的执行结果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(179532)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块首批接口从API version 23开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块接口仅可在Stage模型下使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { insightIntentProvider } from '@kit.AbilityKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "insightintentprovidersendexecuteresult",
      children: "insightIntentProvider.sendExecuteResult"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "sendExecuteResult(instanceId: number, result: insightIntent.ExecuteResult): Promise<void>"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果意图提供方需要在业务处理的特定流程中主动发送意图执行结果，可以先通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintentcontext/js-apis-app-ability-insightintentcontext#insightintentcontextsetreturnmodeforuiabilityforeground23",
        children: "setReturnModeForUIAbilityForeground接口"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintentcontext/js-apis-app-ability-insightintentcontext#insightintentcontextsetreturnmodeforuiextensionability23",
        children: "setReturnModeForUIExtensionAbility接口"
      }), "将意图执行结果返回形式", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintent/js-apis-app-ability-insightintent#returnmode23",
        children: "ReturnMode"
      }), "设置为FUNCTION，然后调用该接口发送意图执行结果，适用于", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/stage-model-development/insight-intent/insight-intent-development/insight-intent-config-development",
        children: "配置类意图"
      }), "。使用Promise异步回调。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["意图执行结果返回形式", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintent/js-apis-app-ability-insightintent#returnmode23",
        children: "ReturnMode"
      }), "设置为FUNCTION后，应用将无需再通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintentexecutor/js-apis-app-ability-insightintentexecutor#onexecuteinuiabilityforegroundmode",
        children: "onExecuteInUIAbilityForegroundMode接口"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintentexecutor/js-apis-app-ability-insightintentexecutor#onexecuteinuiextensionability",
        children: "onExecuteInUIExtensionAbility接口"
      }), "的返回值返回意图执行结果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束"
        })
      }), "：此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 23开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Ability.AbilityRuntime.Core"]
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintentcontext/js-apis-app-ability-insightintentcontext#%E5%B1%9E%E6%80%A7",
              children: "instanceId"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "意图实例唯一ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "result"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintent/js-apis-app-ability-insightintent#executeresult",
              children: "insightIntent.ExecuteResult"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回意图执行结果，表示本次意图执行返回给系统入口的数据。"
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，无返回结果。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts-errcode/errorcode-ability/errorcode-ability",
        children: "元能力子系统错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "16000003"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The specified ID does not exist."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16000050"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal error. Possible causes: 1. Connect to system service failed; 2.Send restart message to system service failed; 3.System service failed to communicate with dependency module."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置意图执行结果延迟返回示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { InsightIntentExecutor, insightIntent } from '@kit.AbilityKit';\nimport { window } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nexport default class InsightIntentExecutorUI extends InsightIntentExecutor {\n  onExecuteInUIAbilityForegroundMode(name: string, param: Record<string, Object>,\n    pageLoader: window.WindowStage): insightIntent.ExecuteResult {\n    hilog.info(0x0000, 'testTag', 'onExecuteInUIAbilityForegroundMode %{public}s', name);\n    let result: insightIntent.ExecuteResult;\n    result = {\n      code: 0,\n      result: {\n        message: 'Unsupported insight intent.',\n      },\n    };\n    try {\n      // 设置意图执行结果的返回形式为延迟返回\n      this.context.setReturnModeForUIAbilityForeground(insightIntent.ReturnMode.FUNCTION);\n    } catch (error) {\n      let code = (error as BusinessError).code;\n      let msg = (error as BusinessError).message;\n      console.error(`testTag setReturnModeForUIExtensionAbility fail, error code: ${code}, error msg: ${msg}.`);\n    }\n    // 将意图实例的id通过localStorage传入目标页面中\n    let localStorageData: Record<string, number> = {\n      'insightId': this.context.instanceId,\n    };\n    let storage: LocalStorage = new LocalStorage(localStorageData);\n    // 通过pageLoader加载页面\n    pageLoader.loadContent('pages/UIAbilityIndex', storage, (err, data) => {\n      if (err.code) {\n        hilog.error(0x0000, 'testTag', 'Failed to load the content. Cause: %{public}s', JSON.stringify(err));\n      } else {\n        hilog.info(0x0000, 'testTag', '%{public}s', 'Succeeded in loading the content');\n      }\n    });\n    return result;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "主动发送意图执行结果示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\nimport { insightIntent, insightIntentProvider } from '@kit.AbilityKit';\n\n@Entry\n@Component\nstruct Index {\n  storage: LocalStorage | undefined = this.getUIContext().getSharedLocalStorage();\n  insightId: number | undefined = this.storage?.get<number>('insightId');\n\n  build() {\n    Column() {\n      // 通过sendExecuteResult接口主动返回意图执行结果\n      Button('insightIntentProvider sendExecuteResult')\n        .onClick(() => {\n          try {\n            let result: insightIntent.ExecuteResult;\n            result = {\n              code: 0,\n              result: {\n                message: 'Unsupported insight intent.',\n              },\n            };\n            insightIntentProvider.sendExecuteResult(this.insightId, result)\n              .then(() => {\n                console.info('testTag setExecuteResult success');\n              })\n              .catch((error: BusinessError) => {\n                console.error(`testTag setExecuteResult fail1, error code: ${error.code}, error msg: ${error.message}.`);\n              });\n          } catch (e) {\n            let code = (e as BusinessError).code;\n            let msg = (e as BusinessError).message;\n            console.error(`testTag setExecuteResult fail2, error code: ${code}, error msg: ${msg}`);\n          }\n        })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "insightintentprovidersendintentresult",
      children: "insightIntentProvider.sendIntentResult"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "sendIntentResult(instanceId: number, result: insightIntent.IntentResult<T>): Promise<void>"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果意图提供方需要在业务处理的特定流程中主动发送意图执行结果，可以先通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintentcontext/js-apis-app-ability-insightintentcontext#insightintentcontextsetreturnmodeforuiabilityforeground23",
        children: "setReturnModeForUIAbilityForeground接口"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintentcontext/js-apis-app-ability-insightintentcontext#insightintentcontextsetreturnmodeforuiextensionability23",
        children: "setReturnModeForUIExtensionAbility接口"
      }), "将意图执行结果返回形式", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintent/js-apis-app-ability-insightintent#returnmode23",
        children: "ReturnMode"
      }), "设置为FUNCTION，然后调用该接口发送意图执行结果。适用于", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintentdecorator/js-apis-app-ability-insightintentdecorator#insightintententry",
        children: "@InsightIntentEntry"
      }), "修饰的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/stage-model-development/insight-intent/insight-intent-development/insight-intent-decorator-development",
        children: "装饰器类意图"
      }), "。使用Promise异步回调。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["意图执行结果返回形式", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintent/js-apis-app-ability-insightintent#returnmode23",
        children: "ReturnMode"
      }), "设置为FUNCTION后，应用将无需再通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintententryexecutor/js-apis-app-ability-insightintententryexecutor#onexecute",
        children: "onExecute接口"
      }), "的返回值返回意图执行结果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束"
        })
      }), "：此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 23开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Ability.AbilityRuntime.Core"]
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintentcontext/js-apis-app-ability-insightintentcontext#%E5%B1%9E%E6%80%A7",
              children: "instanceId"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "意图实例唯一ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "result"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintent/js-apis-app-ability-insightintent#intentresultt20",
              children: "insightIntent.IntentResult<T>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回意图执行结果，表示本次意图执行返回给系统入口的数据。"
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，无返回结果。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts-errcode/errorcode-ability/errorcode-ability",
        children: "元能力子系统错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "16000003"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The specified ID does not exist."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16000050"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal error. Possible causes: 1. Connect to system service failed; 2.Send restart message to system service failed; 3.System service failed to communicate with dependency module."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置意图执行结果延迟返回示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { insightIntent, InsightIntentEntry, InsightIntentEntryExecutor } from '@kit.AbilityKit';\n\nclass PlayVideoResultDef {\n  resultCode: number = 0;\n  resultMsg: string = '';\n  someInvalid1: string | undefined = undefined;\n  someInvalid2: string | null = null;\n}\n\n// 播放视频\n@InsightIntentEntry({\n  intentName: 'PlayVideo',\n  domain: 'VideosDomain',\n  intentVersion: '1.0.2',\n  displayName: '播放视频',\n  displayDescription: '播放视频意图',\n  schema: 'PlayVideo',\n  icon: $r('app.media.background'),\n  llmDescription: '播放视频意图',\n  keywords: ['视频播放', '播放视频', 'PlayVideo'],\n  abilityName: 'EntryAbility1',\n  executeMode: [insightIntent.ExecuteMode.UI_ABILITY_FOREGROUND],\n})\nexport default class PlayVideo extends InsightIntentEntryExecutor<PlayVideoResultDef> {\n  entityId: string = 'zhz';\n  episodeId: string = '50';\n  episodeNumber: number = 12;\n\n  onExecute(): Promise<insightIntent.IntentResult<PlayVideoResultDef>> {\n    console.info('testTag', 'PlayVideo onExecute success')\n    let result: insightIntent.IntentResult<PlayVideoResultDef> = {\n      code: 0,\n      result: {\n        resultCode: 0x0000,\n        resultMsg: 'Callback PlayVideo Success',\n        someInvalid1: undefined,\n        someInvalid2: null\n      }\n    }\n    let instanceId: number = this.context.instanceId;\n    try {\n      // 设置意图执行结果的返回形式为延迟返回\n      this.context.setReturnModeForUIAbilityForeground(insightIntent.ReturnMode.FUNCTION);\n      console.info('testTag: setReturnModeForUIAbilityForeground success');\n    } catch (error) {\n      let code = (error as BusinessError).code;\n      let msg = (error as BusinessError).message;\n      console.error(`testTag: setReturnModeForUIAbilityForeground failed，error code: ${code}, error msg: ${msg}.`);\n    }\n\n    try {\n      // 将意图实例的id通过localStorage传入目标页面中\n      let localStorageData: Record<string, number> = {\n        'insightId': instanceId,\n      };\n      let storage: LocalStorage = new LocalStorage(localStorageData);\n      // 通过pageLoader加载页面\n      this.windowStage?.loadContent('pages/Index', storage);\n      console.info('testTag', 'Succeeded in loading the content1')\n    } catch (err) {\n      let code = (err as BusinessError).code;\n      let msg = (err as BusinessError).message;\n      console.error(`testTag loadContent error code: ${code}, error msg: ${msg}.`);\n    }\n    return Promise.resolve(result);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "主动发送意图执行结果示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\nimport { insightIntent, insightIntentProvider } from '@kit.AbilityKit';\n\nclass PlayVideoResultDef {\n  resultCode: number = 0;\n  resultMsg: string = '';\n  someInvalid1: string | undefined = undefined;\n  someInvalid2: string | null = null;\n}\n\n@Entry\n@Component\nstruct Index {\n  storage: LocalStorage | undefined = this.getUIContext().getSharedLocalStorage();\n  insightId: number | undefined = this.storage?.get<number>('insightId');\n\n  build() {\n    Column() {\n      // 通过sendExecuteResult接口主动返回意图执行结果\n      Button('insightIntentProvider sendIntentResult')\n        .onClick(() => {\n          try {\n            let result: insightIntent.IntentResult<PlayVideoResultDef> = {\n              code: 0,\n              result: {\n                resultCode: 123,\n                resultMsg: 'Function PlayVideo Success',\n                someInvalid1: undefined,\n                someInvalid2: null\n              }\n            }\n            insightIntentProvider.sendIntentResult(this.insightId, result)\n              .then(() => {\n                console.info('testTag sendIntentResult success');\n              })\n              .catch((error: BusinessError) => {\n                console.error(`testTag sendIntentResult error, error code: ${error.code}, error msg: ${error.message}.`);\n              });\n          } catch (error) {\n            let code = (error as BusinessError).code;\n            let msg = (error as BusinessError).message;\n            console.error(`testTag sendIntentResult fail, error code: ${code}, error msg: ${msg}.`);\n          }\n        })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
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
179532(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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