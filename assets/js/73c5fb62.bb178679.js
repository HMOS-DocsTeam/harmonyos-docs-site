"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["214114"], {
388674(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ability_kit_stage_model_development_insight_intent_insight_intent_development_insight_intent_decorator_development_insight_intent_decorator_development_md_73c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ability-kit-stage-model-development-insight-intent-insight-intent-development-insight-intent-decorator-development-insight-intent-decorator-development-md-73c.json
var site_docs_ability_kit_stage_model_development_insight_intent_insight_intent_development_insight_intent_decorator_development_insight_intent_decorator_development_md_73c_namespaceObject = JSON.parse('{"id":"ability-kit/stage-model-development/insight-intent/insight-intent-development/insight-intent-decorator-development/insight-intent-decorator-development","title":"使用装饰器开发意图","description":"使用场景","source":"@site/docs/ability-kit/stage-model-development/insight-intent/insight-intent-development/insight-intent-decorator-development/insight-intent-decorator-development.md","sourceDirName":"ability-kit/stage-model-development/insight-intent/insight-intent-development/insight-intent-decorator-development","slug":"/ability-kit/stage-model-development/insight-intent/insight-intent-development/insight-intent-decorator-development/","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/insight-intent/insight-intent-development/insight-intent-decorator-development/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"使用装饰器开发意图","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/insight-intent-decorator-development","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用配置文件开发意图","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/insight-intent/insight-intent-development/insight-intent-config-development/"},"next":{"title":"附录：标准意图接入规范","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/insight-intent/insight-intent-development/insight-intent-access-specifications/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ability-kit/stage-model-development/insight-intent/insight-intent-development/insight-intent-decorator-development/insight-intent-decorator-development.md


const frontMatter = {
	title: '使用装饰器开发意图',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/insight-intent-decorator-development',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '使用装饰器开发意图';

const assets = {

};



const toc = [{
  "value": "使用场景",
  "id": "使用场景",
  "level": 2
}, {
  "value": "运行机制",
  "id": "运行机制",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "通过意图装饰器开发标准意图",
  "id": "通过意图装饰器开发标准意图",
  "level": 3
}, {
  "value": "通过意图装饰器开发自定义意图",
  "id": "通过意图装饰器开发自定义意图",
  "level": 3
}, {
  "value": "（可选）通过开发意图实体传递复杂参数",
  "id": "可选通过开发意图实体传递复杂参数",
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
        id: "使用装饰器开发意图",
        children: "使用装饰器开发意图"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用场景",
      children: "使用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从 API version 20开始，支持通过装饰器开发意图，支持将现有功能通过装饰器快速集成至系统入口。典型场景介绍如下。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "意图调用场景"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "常见意图举例"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "意图开发方式"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "拉起应用"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- 播放音乐。  - 打开购物软件直达商品详情页。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["- 通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintentdecorator/js-apis-app-ability-insightintentdecorator#insightintententry",
              children: "@InsightIntentEntry"
            }), "创建新的意图逻辑，绑定UIAbility组件或UIExtensionAbility组件。  - 通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintentdecorator/js-apis-app-ability-insightintentdecorator#insightintentlink",
              children: "@InsightIntentLink"
            }), "将uri链接转换为意图。  - 通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintentdecorator/js-apis-app-ability-insightintentdecorator#insightintentpage",
              children: "@InsightIntentPage"
            }), " 将页面路由转换为意图。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "查询或更新信息"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- 查询天气。  - 修改应用配置或更新。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["- 通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintentdecorator/js-apis-app-ability-insightintentdecorator#insightintentfunctionmethod",
              children: "@InsightIntentFunctionMethod"
            }), " 将函数调用转换为系统意图。  - 通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintentdecorator/js-apis-app-ability-insightintentdecorator#insightintententry",
              children: "@InsightIntentEntry"
            }), "创建新的意图逻辑，绑定UIAbility组件的后台执行模式或ServiceExtensionAbility组件。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "添加服务卡片"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- 添加天气卡片。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["- 通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintentdecorator/js-apis-app-ability-insightintentdecorator#insightintentform",
              children: "@InsightIntentForm"
            }), "开发意图。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "运行机制",
      children: "运行机制"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "功能"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "意图开发"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "意图执行"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintentdecorator/js-apis-app-ability-insightintentdecorator#insightintententry",
              children: "@InsightIntentEntry"
            }), "开发意图"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1. 开发者新增意图执行文件，若该执行文件未被其他文件导入，需要通过insight_intent.json文件的\"insightIntentsSrcEntry\"字段配置意图执行文件路径，使其参与编译。  2. 通过装饰器定义意图需要绑定Ability组件、定义意图执行模式。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统入口匹配意图，根据意图执行模式触发Ability组件的启动和意图执行。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintentdecorator/js-apis-app-ability-insightintentdecorator#insightintentlink",
              children: "@InsightIntentLink"
            }), "开发意图"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开发者定义Link跳转意图，支持已有的uri链接和新增uri链接。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["系统入口匹配意图，传递uri链接，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#openlink12",
              children: "openLink"
            }), "触发意图执行，意图执行时的入参处理见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintentdecorator/js-apis-app-ability-insightintentdecorator#linkintentparammapping",
              children: "LinkIntentParamMapping"
            }), "的paramCategory说明。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintentdecorator/js-apis-app-ability-insightintentdecorator#insightintentpage",
              children: "@InsightIntentPage"
            }), "开发意图"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["开发者定义页面跳转意图，配置意图对应的UIAbility组件、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-set-navigation-routing/arkts-routing",
              children: "页面路由"
            }), "的路径和", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-navigation-architecture",
              children: "Navigation"
            }), "路径。"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["1. 系统入口通过startAbility启动意图绑定的UIAbility组件。若意图未绑定UIAbility组件，则启动意图所在module的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E6%A0%87%E7%AD%BE",
              children: "mainElement"
            }), "对应的UIAbility组件。  2. 意图执行时，若应用未启动，在UIAbility的首页加载后跳转到意图对应的页面；若应用已启动，由当前页面跳转到意图对应的页面。  3. 意图执行时，参数会被传递给目标页面。  4. \"navigationId\"字段或\"navDestinationName\"字段匹配失败时，退化为\"pagePath\"字段对应的页面跳转。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintentdecorator/js-apis-app-ability-insightintentdecorator#insightintentfunctionmethod",
              children: "@InsightIntentFunctionMethod"
            }), "开发意图"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开发者为静态方法定义意图，静态方法可以是已有方法或新增方法。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["系统入口通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#%E5%90%8E%E5%8F%B0%E9%80%9A%E4%BF%A1%E8%83%BD%E5%8A%9B",
              children: "Call调用"
            }), "启动意图所在module的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E6%A0%87%E7%AD%BE",
              children: "mainElement"
            }), "对应的UIAbility组件。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintentdecorator/js-apis-app-ability-insightintentdecorator#insightintentform",
              children: "@InsightIntentForm"
            }), "开发意图"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开发者定义卡片意图，卡片可以是已有卡片或新增卡片。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统入口通过FormComponent组件创建意图卡片。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本章节以通过@InsightIntentEntry开发标准意图和自定义意图举例，其他装饰器开发标准意图和自定义意图与@InsightIntentEntry相似，可以结合API参考开发其他类型的意图。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "通过意图装饰器开发标准意图",
      children: "通过意图装饰器开发标准意图"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以通过@InsightIntentEntry装饰器开发", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/stage-model-development/insight-intent/insight-intent-development/insight-intent-access-specifications#%E6%9F%A5%E7%9C%8B%E5%BF%AB%E9%80%92",
        children: "查看快递"
      }), "标准意图举例。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在insight_intent.json配置文件中的\"insightIntentsSrcEntry\"字段声明意图执行文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"insightIntentsSrcEntry\": [\n    {\n      \"srcEntry\": \"./ets/insightintents/ViewLogisticsImpl.ets\"\n    }\n  ]\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "实现意图执行器。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["开发标准意图无需开发者自行定义意图的大语言模型描述、意图参数定义和意图执行结果定义，根据\"schema\"字段和\"intentVersion\"字段匹配", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ability-kit/stage-model-development/insight-intent/insight-intent-development/insight-intent-access-specifications",
            children: "附录：标准意图接入规范"
          }), "中的标准意图。意图执行器需要从InsightIntentEntryExecutor<T>类继承，实现onExecute()方法。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { InsightIntentEntryExecutor, insightIntent, InsightIntentEntry } from '@kit.AbilityKit';\n\nclass ViewLogisticsResultDef {\n  public msg?: string = '';\n}\n\n@InsightIntentEntry({\n  intentName: 'ViewLogistics',\n  domain: 'LocalDomain',\n  intentVersion: '1.0.1',\n  displayName: '查询快递',\n  displayDescription: '根据快递单号查询快递信息',\n  schema: 'ViewLogistics',\n  icon: $r('app.media.viewLogistics'), // 请将$r('app.media.viewLogistics')替换为实际资源文件\n  abilityName: 'EntryAbility',\n  executeMode: [insightIntent.ExecuteMode.UI_ABILITY_BACKGROUND]\n})\nexport default class ViewLogisticsImpl extends InsightIntentEntryExecutor<ViewLogisticsResultDef> {\n  public trackingNo?: string = '';\n  public entityId?: string = '';\n\n  onExecute(): Promise<insightIntent.IntentResult<ViewLogisticsResultDef>> {\n    // 执行查询快递逻辑\n    let result: insightIntent.IntentResult<ViewLogisticsResultDef> = {\n      code: 0,\n      result: {\n        msg: 'the logistics is being delivered'\n      }\n    };\n    return Promise.resolve(result);\n  };\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "意图执行过程："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "系统入口响应用户“查询单号为12345的快递”的请求，匹配到该应用的\"ViewLogistics\"意图，通过意图框架触发该应用的\"ViewLogistics\"意图执行。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["由于意图绑定了\"EntryAbility\"组件、配置了insightIntent.ExecuteMode.UI_ABILITY_BACKGROUND执行模式，在意图执行过程中，\"ViewLogistics\"意图绑定的\"EntryAbility\"组件会通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#%E5%90%8E%E5%8F%B0%E9%80%9A%E4%BF%A1%E8%83%BD%E5%8A%9B",
          children: "Call调用"
        }), "启动，意图执行过程中，ViewLogisticsImpl类的属性\"trackingNo\"会被赋值，进而执行onExecute()方法，将意图执行结果通过意图框架返回给系统入口。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "系统入口将意图执行结果转换为自然语言呈现给用户。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "通过意图装饰器开发自定义意图",
      children: "通过意图装饰器开发自定义意图"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以开发“播放音乐”自定义意图举例，需要定义意图的大语言模型描述、意图搜索关键字、意图参数定义和意图执行结果定义。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在insight_intent.json配置文件中的\"insightIntentsSrcEntry\"字段声明意图执行文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"insightIntentsSrcEntry\": [\n    {\n      \"srcEntry\": \"./ets/insightintents/PlayMusicImpl.ets\"\n    }\n  ]\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "实现意图执行器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开发自定义意图需要开发者定义意图的大语言模型描述、意图搜索关键字、意图参数定义和意图执行结果定义。意图执行器需要从InsightIntentEntryExecutor<T>类继承，实现onExecute()方法。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// `insight_intent.json`文件的\"insightIntentsSrcEntry\"字段的实现\nimport { InsightIntentEntryExecutor, insightIntent, InsightIntentEntry } from '@kit.AbilityKit';\n\n// 意图执行返回值数据格式定义\nclass PlayMusicResultDef {\n  public msg?: string = '';\n}\n\n// 意图定义\n@InsightIntentEntry({\n  intentName: 'PlayMusic',\n  domain: 'MusicDomain',\n  intentVersion: '1.0.1',\n  displayName: '播放歌曲',\n  displayDescription: '播放音乐意图',\n  icon: $r('app.media.playMusic'), // 请将$r('app.media.playMusic')替换为实际资源文件\n  llmDescription: '支持传递歌曲名称，播放音乐',\n  keywords: ['音乐播放', '播放歌曲', 'PlayMusic'],\n  abilityName: 'EntryAbility',\n  executeMode: [insightIntent.ExecuteMode.UI_ABILITY_FOREGROUND],\n  parameters: {\n    'type': 'object',\n    'description': 'A schema for describing songs and their artists',\n    'properties': {\n      'songName': {\n        'type': 'string',\n        'description': 'The name of the song',\n        'minLength': 1\n      },\n      'singer': {\n        'type': 'string',\n        'description': 'The name of the singer',\n        'minLength': 1\n      }\n    },\n    'required': ['songName']\n  }\n})\nexport default class PlayMusicImpl extends InsightIntentEntryExecutor<PlayMusicResultDef> {\n  public songName: string = '';\n  public singer?: string = '';\n\n  onExecute(): Promise<insightIntent.IntentResult<PlayMusicResultDef>> {\n    // 执行音乐播放逻辑\n    let result: insightIntent.IntentResult<PlayMusicResultDef> = {\n      code: 123,\n      result: {\n        msg: 'play music succeed'\n      }\n    };\n    return Promise.resolve(result);\n  };\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "意图执行过程："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "系统入口响应用户“播放歌手A的歌曲B”的请求，匹配到该应用的\"PlayMusic\"意图，通过意图框架触发该应用的\"PlayMusic\"意图执行。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "意图绑定了\"EntryAbility\"组件、配置了insightIntent.ExecuteMode.UI_ABILITY_FOREGROUND执行模式，在意图执行过程中，\"PlayMusic\"意图绑定的\"EntryAbility\"组件会通过startAbility启动，PlayMusicImpl类的属性\"songName\"和\"singer\"会被赋值，进而执行onExecute()方法，将意图执行结果通过意图框架返回给系统入口。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "系统入口将意图执行结果转换为自然语言呈现给用户。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "可选通过开发意图实体传递复杂参数",
      children: "（可选）通过开发意图实体传递复杂参数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["由系统入口传递给应用的数据默认为基础类型。如果需要复杂数据（例如，播放音乐时需要传入的歌手信息包括歌手姓名、国籍等多个字段），需要采用对象类型，并使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintentdecorator/js-apis-app-ability-insightintentdecorator#insightintententity",
        children: "@InsightIntentEntity"
      }), "装饰器装饰。被装饰的对象称为意图实体。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以播放音乐为例，用户告诉小艺希望播放的音乐名称与歌手信息，小艺根据音乐名称和歌手信息拉起对应音乐界面，播放该音乐。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了实现该场景，开发者可以将歌手信息定义为意图实体，并开发意图实体。具体步骤如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "定义意图实体。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开发者将歌手信息（包括名称、国家、城市）定义为类，并使用@InsightIntentEntity装饰器将该类定义为意图实体。装饰器的parameters属性列出了类的数据成员、数据格式及每个成员的必选性。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { insightIntent, InsightIntentEntity } from '@kit.AbilityKit';\n\n@InsightIntentEntity({\n  entityCategory: 'artist entity category',\n  parameters: {\n    '$id': '/schemas/ArtistClassDef',\n    'type': 'object',\n    'description': 'Information about the artist',\n    'properties': {\n      'country': {\n        'type': 'string',\n        'description': 'The artist\\'s country of origin',\n        'default': 'zh'\n      },\n      'city': {\n        'type': 'string',\n        'description': 'The artist\\'s city of origin'\n      },\n      'name': {\n        'type': 'string',\n        'description': 'The name of the artist',\n        'minLength': 1\n      }\n    },\n    // name为必选参数\n    'required': ['name']\n  }\n})\nexport class ArtistClassDef implements insightIntent.IntentEntity {\n  public entityId: string = '0x11';\n  public country?: string = '';\n  public city?: string = '';\n  public name: string = '';\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用意图实体。添加", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintentdecorator/js-apis-app-ability-insightintentdecorator#insightintententry",
            children: "@InsightIntentEntry"
          }), "装饰器的意图使用音乐名称和歌手信息（ArtistClassDef意图实体）作为播放音乐的入参。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { insightIntent, InsightIntentEntry, InsightIntentEntryExecutor, InsightIntentEntity } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst LOG_TAG: string = 'testTag-EntryIntent';\n\n@InsightIntentEntity({\n  entityCategory: 'artist entity category',\n  // @InsightIntentEntry装饰器中parameters中已描述ArtistClassDef意图实体信息，此处parameters可不写\n})\nexport class ArtistClassDef implements insightIntent.IntentEntity {\n  public entityId: string = '0x11';\n  public country?: string = '';\n  public city?: string = '';\n  public name: string = '';\n}\n\n// 使用@InsightIntentEntry装饰器定义意图\n@InsightIntentEntry({\n  intentName: 'PlayMusic',\n  domain: 'MusicDomain',\n  intentVersion: '1.0.1',\n  displayName: '播放歌曲',\n  displayDescription: '播放音乐意图',\n  icon: $r('app.media.app_icon'), // 请将$r('app.media.app_icon')替换为实际资源文件\n  llmDescription: '支持传递歌曲名称，播放音乐',\n  keywords: ['音乐播放', '播放歌曲', 'PlayMusic'],\n  abilityName: 'EntryAbility',\n  executeMode: [insightIntent.ExecuteMode.UI_ABILITY_FOREGROUND],\n  parameters: {\n    'schema': 'http://json-schema.org/draft-07/schema#',\n    'type': 'object',\n    'title': 'Song Schema',\n    'description': 'A schema for describing songs and their artists',\n    'properties': {\n      'songName': {\n        'type': 'string',\n        'description': 'The name of the song',\n        'minLength': 1\n      },\n      'artist': {\n        'type': 'object',\n        'description': 'Information about the artist',\n        'properties': {\n          'country': {\n            'type': 'string',\n            'description': 'The artist\\'s country of origin',\n            'default': 'zh'\n          },\n          'city': {\n            'type': 'string',\n            'description': 'The artist\\'s city of origin'\n          },\n          'name': {\n            'type': 'string',\n            'description': 'The name of the artist',\n            'minLength': 1\n          }\n        },\n        'required': ['name']\n      }\n    },\n    'required': ['songName']\n  }\n})\nexport default class PlayMusicDemo extends InsightIntentEntryExecutor<string> {\n  public songName: string = '';\n  // 使用意图实体\n  public artist?: ArtistClassDef;\n\n  onExecute(): Promise<insightIntent.IntentResult<string>> {\n    hilog.info(0x0000, LOG_TAG, 'PlayMusicDemo executeMode %{public}s', JSON.stringify(this.executeMode));\n    hilog.info(0x0000, LOG_TAG, 'PlayMusicDemo artist %{public}s', JSON.stringify(this.artist));\n    let storage = new LocalStorage();\n    storage.setOrCreate('songName', this.songName);\n    storage.setOrCreate('artist', this.artist);\n    // 根据 `executeMode` 参数的不同情况，提供不同的方式拉起 `PlayMusicPage` 页面。\n    if (this.executeMode == insightIntent.ExecuteMode.UI_ABILITY_FOREGROUND) {\n      this.windowStage?.loadContent('pages/PlayMusicPage', storage);\n    } else if (this.executeMode == insightIntent.ExecuteMode.UI_EXTENSION_ABILITY) {\n      this.uiExtensionSession?.loadContent('pages/PlayMusicPage', storage);\n    }\n    // 定义意图的执行结果\n    let result: insightIntent.IntentResult<string> = {\n      code: 123,\n      result: 'execute success'\n    }\n    hilog.info(0x0000, LOG_TAG, 'PlayMusicDemo return %{public}s', JSON.stringify(result));\n    return Promise.resolve(result);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
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