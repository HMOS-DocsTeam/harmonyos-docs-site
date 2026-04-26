"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["2207"], {
524312(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_ability_api_ability_arkts_stage_model_js_apis_app_ability_insightintententryexecutor_js_apis_app_ability_insightintententryexecutor_md_8be_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-ability-api-ability-arkts-stage-model-js-apis-app-ability-insightintententryexecutor-js-apis-app-ability-insightintententryexecutor-md-8be.json
var site_docs_ref_ability_api_ability_arkts_stage_model_js_apis_app_ability_insightintententryexecutor_js_apis_app_ability_insightintententryexecutor_md_8be_namespaceObject = JSON.parse('{"id":"ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintententryexecutor/js-apis-app-ability-insightintententryexecutor","title":"@ohos.app.ability.InsightIntentEntryExecutor (@InsightIntentEntry的意图执行基类)","description":"本模块提供@InsightIntentEntry装饰器的意图执行基类，必须与@InsightIntentEntry装饰器联合使用。","source":"@site/docs-ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintententryexecutor/js-apis-app-ability-insightintententryexecutor.md","sourceDirName":"ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintententryexecutor","slug":"/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintententryexecutor/js-apis-app-ability-insightintententryexecutor","permalink":"/harmonyos-docs-site/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintententryexecutor/js-apis-app-ability-insightintententryexecutor","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":27,"frontMatter":{"title":"@ohos.app.ability.InsightIntentEntryExecutor (@InsightIntentEntry的意图执行基类)","sidebar_position":27,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-insightintententryexecutor","kit":"应用框架","last_updated":"2026-04-22","slug":"js-apis-app-ability-insightintententryexecutor"},"sidebar":"ref","previous":{"title":"@ohos.app.ability.InsightIntentDecorator (意图装饰器定义)","permalink":"/harmonyos-docs-site/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintentdecorator/js-apis-app-ability-insightintentdecorator"},"next":{"title":"@ohos.app.ability.InsightIntentExecutor (意图执行基类)","permalink":"/harmonyos-docs-site/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintentexecutor/js-apis-app-ability-insightintentexecutor"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintententryexecutor/js-apis-app-ability-insightintententryexecutor.md


const frontMatter = {
	title: '@ohos.app.ability.InsightIntentEntryExecutor (@InsightIntentEntry的意图执行基类)',
	sidebar_position: 27,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-insightintententryexecutor',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'js-apis-app-ability-insightintententryexecutor'
};
const contentTitle = '@ohos.app.ability.InsightIntentEntryExecutor (@InsightIntentEntry的意图执行基类)';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "InsightIntentEntryExecutor&lt;T&gt;",
  "id": "insightintententryexecutort",
  "level": 2
}, {
  "value": "属性",
  "id": "属性",
  "level": 3
}, {
  "value": "onExecute",
  "id": "onexecute",
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
        id: "ohosappabilityinsightintententryexecutor-insightintententry的意图执行基类",
        children: "@ohos.app.ability.InsightIntentEntryExecutor (@InsightIntentEntry的意图执行基类)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本模块提供", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintentdecorator/js-apis-app-ability-insightintentdecorator#insightintententry",
        children: "@InsightIntentEntry"
      }), "装饰器的意图执行基类，必须与@InsightIntentEntry装饰器联合使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者需要在继承该基类的子类中，实现", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onexecute",
        children: "onExecute()"
      }), "意图执行回调，并使用@InsightIntentEntry装饰器来装饰子类。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(242194)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块首批接口从API version 20开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块接口仅可在Stage模型下使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { InsightIntentEntryExecutor } from '@kit.AbilityKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "insightintententryexecutort",
      children: "InsightIntentEntryExecutor<T>"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "属性",
      children: "属性"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Ability.AbilityRuntime.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 20开始，该接口支持在元服务中使用。"]
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
            children: "executeMode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintent/js-apis-app-ability-insightintent#executemode",
              children: "insightIntent.ExecuteMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示意图执行模式。即拉起绑定的Ability组件时支持的执行模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
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
            children: "表示意图执行上下文。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "windowStage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-windowstage/arkts-apis-window-windowstage",
              children: "window.WindowStage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示windowStage实例对象，和", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#onwindowstagecreate",
              children: "onWindowStageCreate"
            }), "接口的windowStage实例是同一个，可用于加载意图执行的页面。仅当executeMode字段取值为UI_ABILITY_FOREGROUND（即意图执行需要将UIAbility显示在前台时），该属性生效。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uiExtensionSession"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiextensioncontentsession/js-apis-app-ability-uiextensioncontentsession",
              children: "UIExtensionContentSession"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示UIExtensionContentSession实例对象，和", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiextensionability/js-apis-app-ability-uiextensionability#onsessioncreate",
              children: "onSessionCreate"
            }), "接口的UIExtensionContentSession实例是同一个，可用于加载意图执行的页面。仅当executeMode字段取值为UI_EXTENSION_ABILITY（即意图执行需要拉起UIExtensionAbility时），该属性生效。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onexecute",
      children: "onExecute"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onExecute(): Promise<insightIntent.IntentResult<T>>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当AI入口触发意图执行时，系统将会拉起该类绑定的Ability组件，并触发该回调，开发者可以在该回调中实现需要执行的意图操作。使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该接口的调用时机与意图执行模式的对应关系如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "意图执行模式"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "接口调用时机和顺序"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintent/js-apis-app-ability-insightintent#executemode",
              children: "UI_ABILITY_FOREGROUND"
            }), "  UIAbility前台模式"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["- 若UIAbility冷启动，意图执行时UIAbility生命周期触发顺序：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#oncreate",
              children: "onCreate"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#onwindowstagecreate",
              children: "onWindowStageCreate"
            }), "、onExecute、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#onforeground",
              children: "onForeground"
            }), "。  - 若UIAbility热启动，且启动时UIAbility处于后台，意图执行时UIAbility生命周期触发顺序：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#onnewwant",
              children: "onNewWant"
            }), "、onExecute、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#onforeground",
              children: "onForeground"
            }), "。  - 若UIAbility热启动，且启动时UIAbility处于前台，意图执行时UIAbility生命周期触发顺序：onExecute。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintent/js-apis-app-ability-insightintent#executemode",
              children: "UI_ABILITY_BACKGROUND"
            }), "  UIAbility后台模式"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["- 若UIAbility冷启动，意图执行时UIAbility生命周期触发顺序：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#oncreate",
              children: "onCreate"
            }), "、onExecute、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#onbackground",
              children: "onBackground"
            }), "。  - 若UIAbility热启动，意图执行时UIAbility生命周期触发顺序：onExecute。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintent/js-apis-app-ability-insightintent#executemode",
              children: "UI_EXTENSION_ABILITY"
            }), "  UIExtension模式"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["意图执行时UIExtensionAbility生命周期触发顺序：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiextensionability/js-apis-app-ability-uiextensionability#oncreate",
              children: "onCreate"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiextensionability/js-apis-app-ability-uiextensionability#onsessioncreate",
              children: "onSessionCreate"
            }), "、onExecute、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiextensionability/js-apis-app-ability-uiextensionability#onforeground",
              children: "onForeground"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Ability.AbilityRuntime.AbilityCore"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 20开始，该接口支持在元服务中使用。"]
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
            children: "Promise<insightIntent.IntentResult<T>>"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Promise对象。返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintent/js-apis-app-ability-insightintent#intentresultt20",
              children: "insightIntent.IntentResult<T>"
            }), "对象，表示意图执行结果。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { insightIntent, InsightIntentEntry, InsightIntentEntryExecutor } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst LOG_TAG: string = 'testTag-EntryIntent';\n\n// 使用@InsightIntentEntry装饰器定义意图\n@InsightIntentEntry({\n  intentName: 'PlayMusic',\n  domain: 'MusicDomain',\n  intentVersion: '1.0.1',\n  displayName: '播放歌曲',\n  displayDescription: '播放音乐意图',\n  icon: $r('app.media.app_icon'), // $r表示本地图标，需要在资源目录中定义\n  llmDescription: '支持传递歌曲名称，播放音乐',\n  keywords: ['音乐播放', '播放歌曲', 'PlayMusic'],\n  abilityName: 'EntryAbility',\n  executeMode: [insightIntent.ExecuteMode.UI_ABILITY_FOREGROUND],\n  parameters: {\n    'schema': 'http://json-schema.org/draft-07/schema#',\n    'type': 'object',\n    'title': 'Song Schema',\n    'description': 'A schema for describing songs and their artists',\n    'properties': {\n      'songName': {\n        'type': 'string',\n        'description': 'The name of the song',\n        'minLength': 1\n      }\n    },\n    'required': ['songName']\n  }\n})\nexport default class PlayMusicDemo extends InsightIntentEntryExecutor<string> {\n  songName: string = '';\n\n  onExecute(): Promise<insightIntent.IntentResult<string>> {\n    hilog.info(0x0000, LOG_TAG, 'PlayMusicDemo executeMode %{public}s', JSON.stringify(this.executeMode));\n    hilog.info(0x0000, LOG_TAG, '%{public}s', JSON.stringify(this));\n    let storage = new LocalStorage();\n    storage.setOrCreate('songName', this.songName);\n    // 根据executeMode参数的不同情况，提供不同拉起PlayMusicPage页面的方式。\n    if (this.executeMode == insightIntent.ExecuteMode.UI_ABILITY_FOREGROUND) {\n      this.windowStage?.loadContent('pages/PlayMusicPage', storage);\n    } else if (this.executeMode == insightIntent.ExecuteMode.UI_EXTENSION_ABILITY) {\n      this.uiExtensionSession?.loadContent('pages/PlayMusicPage', storage);\n    }\n    // 定义意图的执行结果\n    let result: insightIntent.IntentResult<string> = {\n      code: 123,\n      result: 'result'\n    }\n    hilog.info(0x0000, LOG_TAG, 'PlayMusicDemo return %{public}s', JSON.stringify(result));\n    // 以Promise的方式返回意图执行结果\n    return Promise.reject(result);\n  }\n}\n"
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
242194(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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