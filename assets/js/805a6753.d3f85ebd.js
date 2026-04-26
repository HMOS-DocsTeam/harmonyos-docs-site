"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["936693"], {
159614(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_intents_kit_guide_intents_skill_all_rec_intents_skill_all_rec_access_programme_intents_skill_all_rec_one_step_intents_skill_all_rec_one_step_md_805_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-intents-kit-guide-intents-skill-all-rec-intents-skill-all-rec-access-programme-intents-skill-all-rec-one-step-intents-skill-all-rec-one-step-md-805.json
var site_docs_intents_kit_guide_intents_skill_all_rec_intents_skill_all_rec_access_programme_intents_skill_all_rec_one_step_intents_skill_all_rec_one_step_md_805_namespaceObject = JSON.parse('{"id":"intents-kit-guide/intents-skill-all-rec/intents-skill-all-rec-access-programme/intents-skill-all-rec-one-step/intents-skill-all-rec-one-step","title":"功能一步达场景方案","description":"方案概述","source":"@site/docs/intents-kit-guide/intents-skill-all-rec/intents-skill-all-rec-access-programme/intents-skill-all-rec-one-step/intents-skill-all-rec-one-step.md","sourceDirName":"intents-kit-guide/intents-skill-all-rec/intents-skill-all-rec-access-programme/intents-skill-all-rec-one-step","slug":"/intents-kit-guide/intents-skill-all-rec/intents-skill-all-rec-access-programme/intents-skill-all-rec-one-step/","permalink":"/harmonyos-docs-site/intents-kit-guide/intents-skill-all-rec/intents-skill-all-rec-access-programme/intents-skill-all-rec-one-step/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"功能一步达场景方案","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/intents-skill-all-rec-one-step","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"自定义意图相关信息定义规范","permalink":"/harmonyos-docs-site/intents-kit-guide/intents-skill-all-rec/intents-skill-all-rec-access-programme/intents-skill-all-rec-decorator/intents-skill-all-rec-specification/"},"next":{"title":"配置文件接入方式自测试方案","permalink":"/harmonyos-docs-site/intents-kit-guide/intents-skill-all-rec/intents-skill-all-rec-dp-self-validation/intents-skill-all-rec-dp-self-validation-con/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/intents-kit-guide/intents-skill-all-rec/intents-skill-all-rec-access-programme/intents-skill-all-rec-one-step/intents-skill-all-rec-one-step.md


const frontMatter = {
	title: '功能一步达场景方案',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/intents-skill-all-rec-one-step',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '功能一步达场景方案';

const assets = {

};



const toc = [{
  "value": "方案概述",
  "id": "方案概述",
  "level": 2
}, {
  "value": "意图声明",
  "id": "意图声明",
  "level": 2
}, {
  "value": "端侧前台意图调用",
  "id": "端侧前台意图调用",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "功能一步达场景方案",
        children: "功能一步达场景方案"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "方案概述",
      children: "方案概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从5.1.0(18)开始，新增功能一步达接入方案，可通过该方案实现快速打开应用内功能页面。若应用中有“查找路线”和“扫一扫”两个功能需要注册到意图框架中，让用户通过小艺快速打开对应功能页面，比如“帮我打开XXX的查找路线”、“帮我打开XXX的扫一扫”或“帮我打开XXX的扫码”，则需要在意图声明文件中声明JumpFunctionPage意图，以及上述两个功能，并实现对应意图调用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "意图名称：跳转App功能页 JumpFunctionPage（端侧前台意图调用）"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "参数类别"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "参数（中文）"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "参数（英文）"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "描述"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "数据样例"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Input"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "功能页面标识"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pageId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "具体功能的标识，开发者自定义。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1、2、3…"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Output"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "结果码"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "意图调用的结果码。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0：成功  其他：失败（需提前与华为侧协商，不支持自定义）"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Output"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "结果体"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "result"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "意图调用返回的数据，如果无数据则返回空。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Record<string, Object>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "详见意图调用示例代码。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "意图声明",
      children: "意图声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者需要编辑对应的意图配置insight_intent.json文件实现意图注册。insight_intent.json文件需要放置在module下面的指定目录：src/main/resources/base/profile/insight_intent.json，并且整个工程中只能出现一个insight_intent.json文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n    \"insightIntents\": [\n       {\n            \"intentName\": \"JumpFunctionPage\",    // 意图名称\n            \"domain\": \"ToolsDomain\",\n            \"intentVersion\": \"1.0.1\", // 意图本身的版本号\n            // 意图调用逻辑入口\n            \"srcEntry\": \"./ets/entryability/InsightIntentExecutorImpl.ets\",\n            \"uiAbility\": {\n            // 意图所在ability\n            \"ability\": \"EntryAbility\",\n            // UIAbility支持前后台两种执行模式\n            \"executeMode\": [\n                \"foreground\"\n            ]\n            },\n            \"inputParams\": [{ // 部分意图开放意图参数定义，格式整体参考JSON-Schema。\n                \"properties\": { // 描述参数列表，后续可以同级别增加其他描述节点\n                    \"pageId\": { // 具体功能的标识的key值\n                        \"type\": \"string\", // 参数类型\n                        \"enum\": [\n                            {\n                                \"value\": \"1\", // 具体功能的标识的value值\n                                \"displayName\": \"查找路线\", // 功能名，用于匹配用户query\n                                \"keywords\": [\n                                    \"查路线\",\"查询路线\",\"路线查询\",\"找路线\"\n                                ], // 参数枚举值别名，可以用于索引、过滤，最多不超过5个\n                                \"displayDescription\": \"查找到达目的地的路线\", // 功能描述\n                                \"icon\": \"https://abc.xx\" // 功能图标\n                            },\n                            {\n                                \"value\": \"2\", // 具体功能的标识的value值\n                                \"displayName\": \"扫一扫\", // 功能名，用于匹配用户query\n                                \"keywords\": [\n                                    \"扫码\"\n                                ], // 参数枚举值别名，可以用于索引、过滤\n                                \"displayDescription\": \"用于扫码\", // 功能描述\n                                \"icon\": \"https://abc.xx\" // 功能图标\n                            }\n                        ]\n                    }\n                }\n            }]\n        }\n    ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若intentName报错Intent 'xxxxxx' is not included in domain 'xxxxxx'. Select an intent from the list of suggestions.该报错不影响正常编译及运行，请忽略。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "端侧前台意图调用",
      children: "端侧前台意图调用"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者需自己实现InsightIntentExecutor，并在对应回调实现打开落地页的能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "步骤如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "继承InsightIntentExecutor。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "重写对应方法，例如目标拉起前台页面，则可重写onExecuteInUIAbilityForegroundMode方法。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通过意图名称，识别跳转功能页面意图(JumpFunctionPage)，在对应的方法中传递意图参数（param），并拉起对应落地页。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { insightIntent, InsightIntentExecutor } from '@kit.AbilityKit';\nimport { window } from '@kit.ArkUI';\nimport { BusinessError } from '@kit.BasicServicesKit';\n/**\n * 意图调用样例 */\nexport default class InsightIntentExecutorImpl extends InsightIntentExecutor {\n  private static readonly JUMP_FUNCTION_PAGE = 'JumpFunctionPage';\n  /**\n   * override 执行前台UIAbility意图\n   *\n   * @param name 意图名称\n   * @param param 意图参数\n   * @param pageLoader 窗口\n   * @returns 意图调用结果\n   */\n  onExecuteInUIAbilityForegroundMode(name: string, param: Record<string, Object>, pageLoader: window.WindowStage):\n    Promise<insightIntent.ExecuteResult> {\n    // 根据意图名称分发处理逻辑。接入方可根据实际业务实现页面跳转\n    switch (name) {\n      case InsightIntentExecutorImpl.JUMP_FUNCTION_PAGE:\n        return this.jumpFunctionPage(param, pageLoader);\n      default:\n        break;\n    }\n    return Promise.resolve({\n      code: -1,\n      result: {\n        message: 'unknown intent'\n      }\n    } as insightIntent.ExecuteResult)\n  }\n  /**\n   * 实现跳转目标页面的功能\n   *\n   * @param param 意图参数\n   * @param pageLoader 窗口\n   */\n  private jumpFunctionPage(param: Record<string, Object>, pageLoader: window.WindowStage): Promise<insightIntent.ExecuteResult> {\n    return new Promise((resolve, reject) => {\n      let pageId: string = param?.pageId as string;\n      pageLoader.loadContent('pages/'+ pageId)\n        .then(() => {\n        resolve({\n            code: 0,\n            result: {\n              message: 'Intent execute success'\n            }\n          });\n        })\n        .catch((err: BusinessError) => {\n          // TODO 调用失败的情况\n          resolve({\n            code: -1,\n            result: {\n              message: 'Intent execute failed'\n            }\n          })\n        });\n    })\n  }\n}\n"
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