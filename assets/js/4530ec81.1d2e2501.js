"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["194395"], {
836200(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ability_kit_stage_model_development_insight_intent_insight_intent_development_insight_intent_config_development_insight_intent_config_development_md_453_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ability-kit-stage-model-development-insight-intent-insight-intent-development-insight-intent-config-development-insight-intent-config-development-md-453.json
var site_docs_ability_kit_stage_model_development_insight_intent_insight_intent_development_insight_intent_config_development_insight_intent_config_development_md_453_namespaceObject = JSON.parse('{"id":"ability-kit/stage-model-development/insight-intent/insight-intent-development/insight-intent-config-development/insight-intent-config-development","title":"使用配置文件开发意图","description":"简介","source":"@site/docs/ability-kit/stage-model-development/insight-intent/insight-intent-development/insight-intent-config-development/insight-intent-config-development.md","sourceDirName":"ability-kit/stage-model-development/insight-intent/insight-intent-development/insight-intent-config-development","slug":"/ability-kit/stage-model-development/insight-intent/insight-intent-development/insight-intent-config-development/","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/insight-intent/insight-intent-development/insight-intent-config-development/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"使用配置文件开发意图","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/insight-intent-config-development","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"意图开发概述","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/insight-intent/insight-intent-development/insight-intent-definition/"},"next":{"title":"使用装饰器开发意图","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/insight-intent/insight-intent-development/insight-intent-decorator-development/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ability-kit/stage-model-development/insight-intent/insight-intent-development/insight-intent-config-development/insight-intent-config-development.md


const frontMatter = {
	title: '使用配置文件开发意图',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/insight-intent-config-development',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '使用配置文件开发意图';

const assets = {

};



const toc = [{
  "value": "简介",
  "id": "简介",
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
  "value": "意图绑定UIAbility组件",
  "id": "意图绑定uiability组件",
  "level": 3
}, {
  "value": "意图绑定UIExtensionAbility组件",
  "id": "意图绑定uiextensionability组件",
  "level": 3
}, {
  "value": "意图绑定卡片",
  "id": "意图绑定卡片",
  "level": 3
}, {
  "value": "insight_intent.json配置文件说明",
  "id": "insight_intentjson配置文件说明",
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
        id: "使用配置文件开发意图",
        children: "使用配置文件开发意图"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 11及以上版本，支持通过配置文件开发意图。主要包含两个环节："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "#insight_intentjson%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E8%AF%B4%E6%98%8E",
          children: "insight_intent.json配置文件"
        }), "定义意图，声明意图执行器的代码路径、绑定的Ability组件等意图信息。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintentexecutor/js-apis-app-ability-insightintentexecutor#insightintentexecutor",
          children: "InsightIntentExecutor"
        }), "实现意图执行逻辑。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不同Ability组件类型需要配置的字段与需要实现的意图执行器，如下所示："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "组件类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "意图配置"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "意图执行器"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UIAbility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要在insight_intent.json文件中配置\"uiAbility\"字段。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["当\"executeMode\"字段为\"foreground\"时，实现onExecuteInUIAbilityForegroundMode，通过startAbility启动意图绑定的UIAbility组件。  当\"executeMode\"字段为\"background\"时，实现onExecuteInUIAbilityBackgroundMode，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#%E5%90%8E%E5%8F%B0%E9%80%9A%E4%BF%A1%E8%83%BD%E5%8A%9B",
              children: "Call调用"
            }), "启动意图绑定的UIAbility组件。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UIExtensionAbility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要在insight_intent.json文件中配置\"uiExtension\"字段。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "实现onExecuteInUIExtensionAbility。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "卡片(FormExtensionAbility)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要在insight_intent.json文件中配置\"form\"字段。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无需单独执行器。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["意图执行器实现需要继承", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintentexecutor/js-apis-app-ability-insightintentexecutor#insightintentexecutor",
        children: "InsightIntentExecutor"
      }), "，实现", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintentexecutor/js-apis-app-ability-insightintentexecutor#onexecuteinuiabilityforegroundmode",
        children: "onExecuteInUIAbilityForegroundMode"
      }), "等方法。开发者响应意图执行通过onExecuteInUIAbilityForegroundMode等接口实现，在不同的意图执行模式下，接口的触发时机也不同。针对不同意图执行模式的意图回调执行时机见各个回调的API说明。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "意图绑定uiability组件",
      children: "意图绑定UIAbility组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过DevEco Studio工具可视化创建意图，操作及开发步骤如下。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "选中模块或模块下的文件，右键单击New > Insight Intent，进入意图框架配置界面。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "选择意图垂域、意图框架入口代码文件名以及意图配置。意图配置包含意图名称和绑定的Ability组件。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击Finish，完成意图框架创建。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "此时将在module目录 > src > main > resources > base > profile中，生成insight_intent.json文件，可在该文件查看当前意图框架配置的相关信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"insightIntents\": [\n    {\n      \"domain\": \"MusicDomain\",\n      \"intentName\": \"PlayMusic\",\n      \"intentVersion\": \"1.0.1\",\n      \"srcEntry\": \"./ets/insightintents/PlayMusicExecutor.ets\",\n      \"uiAbility\": {\n        \"ability\": \"MusicPlayerAbility\",\n        \"executeMode\": [\n          \"foreground\",\n          \"background\"\n        ]\n      }\n    }\n  ]\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在module目录 > src > main > ets > insightintents目录下生成入口代码文件。开发者在意图执行函数中实现意图的功能代码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 本示例对应意图配置中的'srcEntry'字段对应的文件\nimport { InsightIntentExecutor, insightIntent } from '@kit.AbilityKit';\nimport { window } from '@kit.ArkUI';\n// ···\n\nexport default class PlayMusicExecutor extends InsightIntentExecutor {\n  // 由于意图配置中'executeMode'配置了'foreground'前台模式执行，故需要实现该接口\n  async onExecuteInUIAbilityForegroundMode(intentName: string, params: Record<string, Object>,\n    windowStage: window.WindowStage): Promise<insightIntent.ExecuteResult> {\n    // 实现播放逻辑\n    // ···\n    const result: insightIntent.ExecuteResult = {\n      code: 0\n    };\n    return Promise.resolve(result);\n  }\n\n  // 由于意图配置中'executeMode'配置了'background'后台模式执行，故需要实现该接口\n  async onExecuteInUIAbilityBackgroundMode(intentName: string,\n    params: Record<string, Object>): Promise<insightIntent.ExecuteResult> {\n    // 后台控制逻辑\n    const result: insightIntent.ExecuteResult = {\n      code: 0\n    };\n    return Promise.resolve(result);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(166918)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "配置文件范式仅提供基础执行能力，参数格式需开发者与系统入口协商。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者也可以选择按规范手动创建意图配置文件和意图执行器。需要关注如下注意点："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "必须声明绑定的Ability组件和支持的意图执行模式。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "配置文件必须命名为\"insight_intent.json\"。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "配置文件存放路径为\"resources/base/profile\"。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "配置文件关键字段遵循相应的约束。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "意图绑定uiextensionability组件",
      children: "意图绑定UIExtensionAbility组件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%84%8F%E5%9B%BE%E7%BB%91%E5%AE%9Auiability%E7%BB%84%E4%BB%B6",
        children: "意图绑定UIAbility组件"
      }), "完成工程创建。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "意图配置示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"insightIntents\": [\n    {\n      \"domain\": \"MusicDomain\",\n      \"intentName\": \"PlayMusic\",\n      \"intentVersion\": \"1.0.1\",\n      \"srcEntry\": \"./ets/insightintents/ExtensionExecutor.ets\",\n      \"uiExtension\": {\n        \"ability\": \"MusicExtensionAbility\"\n      }\n    }\n  ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "意图执行器实现："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { InsightIntentExecutor, insightIntent, UIExtensionContentSession } from '@kit.AbilityKit';\n\nexport default class ExtensionExecutor extends InsightIntentExecutor {\n  // 由于意图配置了uiExtension，故需要实现该接口\n  async onExecuteInUIExtensionAbility(name: string, param: Record<string, Object>,\n    pageLoader: UIExtensionContentSession): Promise<insightIntent.ExecuteResult> {\n    const result: insightIntent.ExecuteResult = {\n      code: 0\n    };\n    return Promise.resolve(result);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统入口通过UIExtensionComponent组件执行该意图。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "意图绑定卡片",
      children: "意图绑定卡片"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%84%8F%E5%9B%BE%E7%BB%91%E5%AE%9Auiability%E7%BB%84%E4%BB%B6",
        children: "意图绑定UIAbility组件"
      }), "完成工程创建。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "意图配置示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"insightIntents\": [\n    {\n      \"domain\": \"MusicDomain\",\n      \"intentName\": \"PlayMusic\",\n      \"intentVersion\": \"1.0.1\",\n      \"srcEntry\": \"./ets/insightintents/WidgetExecutor.ets\",\n      \"form\": {\n        \"ability\": \"PlayerWidgetAbility\",\n        \"formName\": \"mini_player\"\n      }\n    }\n  ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统入口通过FormComponent组件展示卡片内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "insight_intentjson配置文件说明",
      children: "insight_intent.json配置文件说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "意图配置文件insight_intent.json位于工程的\"resources/base/profile\"目录，用于声明意图配置信息。其中，\"insightIntents\"数组包含通过配置文件开发的所有意图配置信息，数组中的属性如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "属性名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "数据类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否可缺省"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "intentName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示意图名称，是意图的唯一标识。取值为首字母大写、包含字母和数字的字符串。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "domain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示意图垂域名称，用于将意图按具体领域分类（例如：视频、音乐、游戏）。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "intentVersion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示意图版本号。当意图能力演进时，可通过版本号进行区分和管理。支持用点分隔开的三段数据序列，例如\"1.0.1\"。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "srcEntry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示意图执行文件相对路径。取值为长度不超过127字节的字符串。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uiAbility"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示意图绑定的UIAbility组件信息。包含\"ability\"字段和\"executeMode\"字段。  - ability：必选字段，表示UIAbility组件名称，取值与module.json5配置文件", (0,jsx_runtime.jsx)(_components.a, {
              href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#abilities%E6%A0%87%E7%AD%BE",
              children: "abilities标签"
            }), "的\"name\"字段保持一致。  - executeMode：必选字段，表示执行模式，取值范围是\"foreground\"和\"background\"。  - 取值为\"foreground\"，表示支持在UIAbility组件前台启动时执行意图逻辑。  - 取值为\"background\"，表示支持在UIAbility组件后台启动时执行意图逻辑。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uiExtension"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示意图绑定的UIExtensionAbility组件信息。仅包含\"ability\"必选字段，表示UIExtensionAbility组件名称，取值与module.json5配置文件", (0,jsx_runtime.jsx)(_components.a, {
              href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#extensionabilities%E6%A0%87%E7%AD%BE",
              children: "extensionAbilities标签"
            }), "的\"name\"字段保持一致。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "form"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示意图绑定的卡片信息。包含\"ability\"字段和\"formName\"字段。  - ability：必选字段，表示FormExtensionAbility组件名称，取值与module.json5配置文件", (0,jsx_runtime.jsx)(_components.a, {
              href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#extensionabilities%E6%A0%87%E7%AD%BE",
              children: "extensionAbilities标签"
            }), " 的\"name\"字段保持一致。  - formName：必选字段，表示卡片名称，取值与", (0,jsx_runtime.jsx)(_components.a, {
              href: "/form-kit/arkts-ui/arkts-ui-widget-configuration#%E5%8D%A1%E7%89%87%E9%85%8D%E7%BD%AE",
              children: "卡片配置"
            }), "的\"name\"字段保持一致。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "displayName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示意图显示名称。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "displayDescription"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示意图显示描述。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "icon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示意图图标。支持网络资源和本地资源。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "keywords"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示意图的搜索关键字。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "inputParams"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示意图参数的数据格式声明，用于意图调用时定义入参的数据格式。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "outputParams"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示意图调用返回结果的数据格式声明，用于定义意图调用返回结果的数据格式。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "entities"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示意图实体定义，用于数据传递。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
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
166918(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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