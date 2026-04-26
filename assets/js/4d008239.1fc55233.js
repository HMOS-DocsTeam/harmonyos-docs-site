"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["256110"], {
632575(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_ability_api_ability_arkts_stage_model_js_apis_app_ability_insightintentexecutor_js_apis_app_ability_insightintentexecutor_md_4d0_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-ability-api-ability-arkts-stage-model-js-apis-app-ability-insightintentexecutor-js-apis-app-ability-insightintentexecutor-md-4d0.json
var site_docs_ref_ability_api_ability_arkts_stage_model_js_apis_app_ability_insightintentexecutor_js_apis_app_ability_insightintentexecutor_md_4d0_namespaceObject = JSON.parse('{"id":"ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintentexecutor/js-apis-app-ability-insightintentexecutor","title":"@ohos.app.ability.InsightIntentExecutor (意图执行基类)","description":"本模块提供意图执行基类，开发者通过本模块对接端侧意图框架，通过配置文件开发意图实现意图的业务逻辑。","source":"@site/docs-ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintentexecutor/js-apis-app-ability-insightintentexecutor.md","sourceDirName":"ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintentexecutor","slug":"/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintentexecutor/js-apis-app-ability-insightintentexecutor","permalink":"/harmonyos-docs-site/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintentexecutor/js-apis-app-ability-insightintentexecutor","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":28,"frontMatter":{"title":"@ohos.app.ability.InsightIntentExecutor (意图执行基类)","sidebar_position":28,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-insightintentexecutor","kit":"应用框架","last_updated":"2026-04-22","slug":"js-apis-app-ability-insightintentexecutor"},"sidebar":"ref","previous":{"title":"@ohos.app.ability.InsightIntentEntryExecutor (@InsightIntentEntry的意图执行基类)","permalink":"/harmonyos-docs-site/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintententryexecutor/js-apis-app-ability-insightintententryexecutor"},"next":{"title":"@ohos.app.ability.insightIntentProvider (意图提供方管理能力)","permalink":"/harmonyos-docs-site/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintentprovider/js-apis-app-ability-insightintentprovider"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintentexecutor/js-apis-app-ability-insightintentexecutor.md


const frontMatter = {
	title: '@ohos.app.ability.InsightIntentExecutor (意图执行基类)',
	sidebar_position: 28,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-insightintentexecutor',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'js-apis-app-ability-insightintentexecutor'
};
const contentTitle = '@ohos.app.ability.InsightIntentExecutor (意图执行基类)';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "InsightIntentExecutor",
  "id": "insightintentexecutor",
  "level": 2
}, {
  "value": "属性",
  "id": "属性",
  "level": 3
}, {
  "value": "onExecuteInUIAbilityForegroundMode",
  "id": "onexecuteinuiabilityforegroundmode",
  "level": 3
}, {
  "value": "onExecuteInUIAbilityBackgroundMode",
  "id": "onexecuteinuiabilitybackgroundmode",
  "level": 3
}, {
  "value": "onExecuteInUIExtensionAbility",
  "id": "onexecuteinuiextensionability",
  "level": 3
}, {
  "value": "onExecuteInServiceExtensionAbility",
  "id": "onexecuteinserviceextensionability",
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
        id: "ohosappabilityinsightintentexecutor-意图执行基类",
        children: "@ohos.app.ability.InsightIntentExecutor (意图执行基类)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本模块提供意图执行基类，开发者通过本模块对接端侧", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/stage-model-development/insight-intent/insight-intent-overview",
        children: "意图框架"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/stage-model-development/insight-intent/insight-intent-development/insight-intent-config-development",
        children: "通过配置文件开发意图"
      }), "实现意图的业务逻辑。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["除了可以通过配置文件开发意图，还可以通过装饰器开发意图。对于API version 20及以后的版本，推荐使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/stage-model-development/insight-intent/insight-intent-development/insight-intent-decorator-development",
        children: "通过装饰器开发意图"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(695994)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块首批接口从API version 11开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块接口仅可在Stage模型下使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { InsightIntentExecutor } from '@kit.AbilityKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "insightintentexecutor",
      children: "InsightIntentExecutor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "表示意图执行基类。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "属性",
      children: "属性"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Ability.AbilityRuntime.Core"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintentcontext/js-apis-app-ability-insightintentcontext",
              children: "InsightIntentContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "意图执行上下文。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onexecuteinuiabilityforegroundmode",
      children: "onExecuteInUIAbilityForegroundMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onExecuteInUIAbilityForegroundMode(name: string, param: Record<string, Object>, pageLoader: window.WindowStage): insightIntent.ExecuteResult | Promise<insightIntent.ExecuteResult>"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当意图执行依赖", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability",
        children: "UIAbility"
      }), "组件前台启动时，会在UIAbility组件生命周期执行中触发本意图执行接口。支持同步返回和使用Promise异步返回。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["若UIAbility组件冷启动，意图执行时UIAbility组件生命周期触发顺序：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#oncreate",
          children: "onCreate"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#onwindowstagecreate",
          children: "onWindowStageCreate"
        }), "、onExecuteInUIAbilityForegroundMode、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#onforeground",
          children: "onForeground"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["若UIAbility组件热启动，且启动时UIAbility组件处于后台，意图执行时UIAbility组件生命周期触发顺序：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#onnewwant",
          children: "onNewWant"
        }), "、onExecuteInUIAbilityForegroundMode、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#onforeground",
          children: "onForeground"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "若UIAbility组件热启动，且启动时UIAbility组件处于前台，意图执行时UIAbility组件生命周期触发顺序：onExecuteInUIAbilityForegroundMode。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Ability.AbilityRuntime.AbilityCore"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
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
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "意图名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Record<string, Object>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "意图参数，表示本次意图执行由系统入口传递给应用的数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pageLoader"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-windowstage/arkts-apis-window-windowstage",
              children: "window.WindowStage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示windowStage实例对象，和", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#onwindowstagecreate",
              children: "onWindowStageCreate"
            }), "接口的windowStage实例是同一个，可用于加载意图执行的页面。"]
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintent/js-apis-app-ability-insightintent#executeresult",
              children: "insightIntent.ExecuteResult"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintent/js-apis-app-ability-insightintent#executeresult",
              children: "insightIntent.ExecuteResult"
            }), ">"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "同步返回意图执行结果的示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { InsightIntentExecutor, insightIntent } from '@kit.AbilityKit';\nimport { window } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nexport default class IntentExecutorImpl extends InsightIntentExecutor {\n  onExecuteInUIAbilityForegroundMode(name: string, param: Record<string, Object>,\n    pageLoader: window.WindowStage): insightIntent.ExecuteResult {\n    let result: insightIntent.ExecuteResult;\n    if (name !== 'SupportedInsightIntentName') {\n      hilog.warn(0x0000, 'testTag', 'Unsupported insight intent %{public}s', name);\n      result = {\n        // 由开发者定义\n        code: 404,\n        result: {\n          message: 'Unsupported insight intent.',\n        }\n      };\n      return result;\n    }\n\n    // 若开发者需要加载意图内容，pages/IntentPage即为意图页面\n    pageLoader.loadContent('pages/IntentPage', (err, data) => {\n      if (err.code) {\n        hilog.error(0x0000, 'testTag', 'Failed to load the content. Cause: %{public}s', JSON.stringify(err));\n      } else {\n        hilog.info(0x0000, 'testTag', '%{public}s', 'Succeeded in loading the content');\n      }\n    });\n\n    result = {\n      code: 0,\n      result: {\n        message: 'Execute insight intent succeed.',\n      }\n    };\n    return result;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用Promise异步返回意图执行结果的示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { InsightIntentExecutor, insightIntent } from '@kit.AbilityKit';\nimport { window } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nasync function executeInsightIntent(param: Record<string, Object>): Promise<insightIntent.ExecuteResult> {\n  return new Promise((resolve, reject) => {\n    let result: insightIntent.ExecuteResult = {\n      code: 0,\n      result: {\n        message: 'Execute insight intent succeed.',\n      }\n    };\n    resolve(result);\n  })\n}\n\nexport default class IntentExecutorImpl extends InsightIntentExecutor {\n  // 实现异步接口需要使用async/await语法糖，通过async声明该接口是一个异步函数\n  async onExecuteInUIAbilityForegroundMode(name: string, param: Record<string, Object>,\n    pageLoader: window.WindowStage): Promise<insightIntent.ExecuteResult> {\n    let result: insightIntent.ExecuteResult;\n    if (name !== 'SupportedInsightIntentName') {\n      hilog.warn(0x0000, 'testTag', 'Unsupported insight intent %{public}s', name);\n      result = {\n        // 由开发者定义\n        code: 404,\n        result: {\n          message: 'Unsupported insight intent.',\n        }\n      };\n      return result;\n    }\n\n    result = await executeInsightIntent(param);\n    return result;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onexecuteinuiabilitybackgroundmode",
      children: "onExecuteInUIAbilityBackgroundMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onExecuteInUIAbilityBackgroundMode(name: string, param: Record<string, Object>): insightIntent.ExecuteResult | Promise<insightIntent.ExecuteResult>"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当意图执行依赖", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability",
        children: "UIAbility"
      }), "组件后台启动时，会在UIAbility组件生命周期执行中触发本意图执行接口。支持同步返回和使用Promise异步返回。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["若UIAbility组件冷启动，意图执行时UIAbility组件生命周期触发顺序：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#oncreate",
          children: "onCreate"
        }), "、onExecuteInUIAbilityBackgroundMode、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#onbackground",
          children: "onBackground"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "若UIAbility组件热启动，意图执行时UIAbility组件生命周期触发顺序：onExecuteInUIAbilityBackgroundMode。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Ability.AbilityRuntime.AbilityCore"]
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
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "意图名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Record<string, Object>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "意图参数，表示本次意图执行由系统入口传递给应用的数据。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintent/js-apis-app-ability-insightintent#executeresult",
              children: "insightIntent.ExecuteResult"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintent/js-apis-app-ability-insightintent#executeresult",
              children: "insightIntent.ExecuteResult"
            }), ">"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "同步返回意图执行结果的示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { InsightIntentExecutor, insightIntent } from '@kit.AbilityKit';\n\nexport default class IntentExecutorImpl extends InsightIntentExecutor {\n  onExecuteInUIAbilityBackgroundMode(name: string, param: Record<string, Object>): insightIntent.ExecuteResult {\n    let result: insightIntent.ExecuteResult = {\n      code: 0,\n      result: {\n        message: 'Execute insight intent succeed.',\n      }\n    };\n    return result;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用Promise异步返回意图执行结果的示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { InsightIntentExecutor, insightIntent } from '@kit.AbilityKit';\n\nasync function executeInsightIntent(param: Record<string, Object>): Promise<insightIntent.ExecuteResult> {\n  return new Promise((resolve, reject) => {\n    let result: insightIntent.ExecuteResult = {\n      code: 0,\n      result: {\n        message: 'Execute insight intent succeed.',\n      }\n    };\n    resolve(result);\n  })\n}\n\nexport default class IntentExecutorImpl extends InsightIntentExecutor {\n  // 实现异步接口需要使用async/await语法糖，通过async声明该接口是一个异步函数\n  async onExecuteInUIAbilityBackgroundMode(name: string,\n    param: Record<string, Object>): Promise<insightIntent.ExecuteResult> {\n    let result: insightIntent.ExecuteResult = await executeInsightIntent(param);\n    return result;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onexecuteinuiextensionability",
      children: "onExecuteInUIExtensionAbility"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onExecuteInUIExtensionAbility(name: string, param: Record<string, Object>, pageLoader: UIExtensionContentSession): insightIntent.ExecuteResult | Promise<insightIntent.ExecuteResult>"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当意图执行依赖", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiextensionability/js-apis-app-ability-uiextensionability",
        children: "UIExtensionAbility"
      }), "启动时，会在UIExtensionAbility组件生命周期执行中触发本意图执行接口。支持同步返回和使用Promise异步返回。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["意图执行时UIExtensionAbility生命周期触发顺序：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiextensionability/js-apis-app-ability-uiextensionability#oncreate",
          children: "onCreate"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiextensionability/js-apis-app-ability-uiextensionability#onsessioncreate",
          children: "onSessionCreate"
        }), "、onExecuteInUIExtensionAbility、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiextensionability/js-apis-app-ability-uiextensionability#onforeground",
          children: "onForeground"
        }), "。"]
      }), "\n"]
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
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "意图名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Record<string, Object>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "意图参数，表示本次意图执行由系统入口传递给应用的数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pageLoader"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiextensioncontentsession/js-apis-app-ability-uiextensioncontentsession",
              children: "UIExtensionContentSession"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示UIExtensionContentSession实例对象，和", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiextensionability/js-apis-app-ability-uiextensionability#onsessioncreate",
              children: "onSessionCreate"
            }), "接口的UIExtensionContentSession实例是同一个，可用于加载意图执行的页面。"]
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintent/js-apis-app-ability-insightintent#executeresult",
              children: "insightIntent.ExecuteResult"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintent/js-apis-app-ability-insightintent#executeresult",
              children: "insightIntent.ExecuteResult"
            }), ">"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "同步返回意图执行结果的示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { InsightIntentExecutor, insightIntent, UIExtensionContentSession } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nexport default class IntentExecutorImpl extends InsightIntentExecutor {\n  onExecuteInUIExtensionAbility(name: string, param: Record<string, Object>,\n    pageLoader: UIExtensionContentSession): insightIntent.ExecuteResult {\n    let result: insightIntent.ExecuteResult;\n    if (name !== 'SupportedInsightIntentName') {\n      hilog.warn(0x0000, 'testTag', 'Unsupported insight intent %{public}s', name);\n      result = {\n        // 由开发者定义\n        code: 404,\n        result: {\n          message: 'Unsupported insight intent.',\n        }\n      };\n      return result;\n    }\n\n    // 若开发者需要加载意图内容，pages/Index即为意图页面\n    pageLoader.loadContent('pages/Index');\n\n    result = {\n      code: 0,\n      result: {\n        message: 'Execute insight intent succeed.',\n      }\n    };\n    return result;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用Promise异步返回意图执行结果的示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { InsightIntentExecutor, insightIntent, UIExtensionContentSession } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nasync function executeInsightIntent(param: Record<string, Object>): Promise<insightIntent.ExecuteResult> {\n  return new Promise((resolve, reject) => {\n    let result: insightIntent.ExecuteResult = {\n      code: 0,\n      result: {\n        message: 'Execute insight intent succeed.',\n      }\n    };\n    resolve(result);\n  })\n}\n\nexport default class IntentExecutorImpl extends InsightIntentExecutor {\n  // 实现异步接口需要使用async/await语法糖，通过async声明该接口是一个异步函数\n  async onExecuteInUIExtensionAbility(name: string, param: Record<string, Object>,\n    pageLoader: UIExtensionContentSession): Promise<insightIntent.ExecuteResult> {\n    let result: insightIntent.ExecuteResult;\n    if (name !== 'SupportedInsightIntentName') {\n      hilog.warn(0x0000, 'testTag', 'Unsupported insight intent %{public}s', name);\n      result = {\n        // 由开发者定义\n        code: 404,\n        result: {\n          message: 'Unsupported insight intent.',\n        }\n      };\n      return result;\n    }\n\n    result = await executeInsightIntent(param);\n    return result;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onexecuteinserviceextensionability",
      children: "onExecuteInServiceExtensionAbility"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onExecuteInServiceExtensionAbility(name: string, param: Record<string, Object>): insightIntent.ExecuteResult | Promise<insightIntent.ExecuteResult>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当意图执行依赖ServiceExtensionAbility组件启动时，会在ServiceExtensionAbility组件生命周期执行中触发本意图执行接口。支持同步返回和使用Promise异步返回。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "意图执行时ServiceExtensionAbility生命周期触发顺序：onCreate、onRequest、onExecuteInServiceExtensionAbility。"
      }), "\n"]
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
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "意图名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Record<string, Object>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "意图参数，表示本次意图执行由系统入口传递给应用的数据。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintent/js-apis-app-ability-insightintent#executeresult",
              children: "insightIntent.ExecuteResult"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintent/js-apis-app-ability-insightintent#executeresult",
              children: "insightIntent.ExecuteResult"
            }), ">"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "同步返回意图执行结果的示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { InsightIntentExecutor, insightIntent } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nexport default class IntentExecutorImpl extends InsightIntentExecutor {\n  onExecuteInServiceExtensionAbility(name: string, param: Record<string, Object>): insightIntent.ExecuteResult {\n    let result: insightIntent.ExecuteResult;\n    if (name !== 'SupportedInsightIntentName') {\n      hilog.warn(0x0000, 'testTag', 'Unsupported insight intent %{public}s', name);\n      result = {\n        // 由开发者定义\n        code: 404,\n        result: {\n          message: 'Unsupported insight intent.',\n        }\n      };\n      return result;\n    }\n\n    result = {\n      code: 0,\n      result: {\n        message: 'Execute insight intent succeed.',\n      }\n    };\n    return result;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用Promise异步返回意图执行结果的示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { InsightIntentExecutor, insightIntent } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nasync function executeInsightIntent(param: Record<string, Object>): Promise<insightIntent.ExecuteResult> {\n  return new Promise((resolve, reject) => {\n    let result: insightIntent.ExecuteResult = {\n      code: 0,\n      result: {\n        message: 'Execute insight intent succeed.',\n      }\n    };\n    resolve(result);\n  });\n}\n\nexport default class IntentExecutorImpl extends InsightIntentExecutor {\n  // 实现异步接口需要使用async/await语法糖，通过async声明该接口是一个异步函数\n  async onExecuteInServiceExtensionAbility(name: string,\n    param: Record<string, Object>): Promise<insightIntent.ExecuteResult> {\n    let result: insightIntent.ExecuteResult;\n    if (name !== 'SupportedInsightIntentName') {\n      hilog.warn(0x0000, 'testTag', 'Unsupported insight intent %{public}s', name);\n      result = {\n        // 由开发者定义\n        code: 404,\n        result: {\n          message: 'Unsupported insight intent.',\n        }\n      };\n      return result;\n    }\n\n    result = await executeInsightIntent(param);\n    return result;\n  }\n}\n"
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
695994(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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