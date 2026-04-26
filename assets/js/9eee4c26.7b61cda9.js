"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["196121"], {
183340(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ability_kit_stage_model_development_insight_intent_insight_intent_debug_insight_intent_debug_md_9ee_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ability-kit-stage-model-development-insight-intent-insight-intent-debug-insight-intent-debug-md-9ee.json
var site_docs_ability_kit_stage_model_development_insight_intent_insight_intent_debug_insight_intent_debug_md_9ee_namespaceObject = JSON.parse('{"id":"ability-kit/stage-model-development/insight-intent/insight-intent-debug/insight-intent-debug","title":"调试意图","description":"概述","source":"@site/docs/ability-kit/stage-model-development/insight-intent/insight-intent-debug/insight-intent-debug.md","sourceDirName":"ability-kit/stage-model-development/insight-intent/insight-intent-debug","slug":"/ability-kit/stage-model-development/insight-intent/insight-intent-debug/","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/insight-intent/insight-intent-debug/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"调试意图","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/insight-intent-debug","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"附录：标准意图接入规范","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/insight-intent/insight-intent-development/insight-intent-access-specifications/"},"next":{"title":"FA模型开发概述","permalink":"/harmonyos-docs-site/ability-kit/fa-model-development/fa-model-development-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ability-kit/stage-model-development/insight-intent/insight-intent-debug/insight-intent-debug.md


const frontMatter = {
	title: '调试意图',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/insight-intent-debug',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '调试意图';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "约束限制",
  "id": "约束限制",
  "level": 2
}, {
  "value": "功能接入",
  "id": "功能接入",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
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
        id: "调试意图",
        children: "调试意图"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "意图框架提供了一个意图调试工具，便于接入意图框架后进行意图调试。该工具支持查询意图、执行意图。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束限制",
      children: "约束限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "仅支持在手机上进行意图调试，且对应的API版本不低于20。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能接入",
      children: "功能接入"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开启意图调试能力。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "打开设备的“设置”应用。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "选择“系统”菜单。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "选择“开发者选项”菜单。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "选择“意图框架调试”菜单，开启该功能开关。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "查看意图：在意图框架调试页面，点击“查看设备上所有意图”。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开发者可以在当前页面查看所有已注册的意图。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调试意图。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "配置意图参数。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "点击“执行意图”。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "如果开发者实现的意图正确，则执行成功。执行结果："
            }), "\n"]
          }), "\n"]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "装饰器类型"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "执行模式"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "意图调用结果"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintentdecorator/js-apis-app-ability-insightintentdecorator#insightintentlink",
                  children: "@InsightIntentLink"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "UI_ABILITY_FOREGROUND"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "页面跳转，下方出现半模态窗口展示意图调用返回结果。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintentdecorator/js-apis-app-ability-insightintentdecorator#insightintentpage",
                  children: "@InsightIntentPage"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "UI_ABILITY_FOREGROUND"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "页面跳转，下方出现半模态窗口展示意图调用返回结果。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintentdecorator/js-apis-app-ability-insightintentdecorator#insightintententry",
                  children: "@InsightIntentEntry"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "UI_ABILITY_FOREGROUND"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "页面跳转，下方出现半模态窗口展示意图调用返回结果。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintentdecorator/js-apis-app-ability-insightintentdecorator#insightintententry",
                  children: "@InsightIntentEntry"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "UI_ABILITY_BACKGROUND"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "下方出现半模态窗口展示意图调用返回结果。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintentdecorator/js-apis-app-ability-insightintentdecorator#insightintententry",
                  children: "@InsightIntentEntry"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "UI_EXTENSION_ABILITY"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["下方出现半模态窗口展示内嵌", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiextensionability/js-apis-app-ability-uiextensionability#uiextensionability",
                  children: "UIExtensionAbility"
                }), "页面。"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintentdecorator/js-apis-app-ability-insightintentdecorator#insightintentfunctionmethod",
                  children: "@InsightIntentFunctionMethod"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "UI_ABILITY_BACKGROUND"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "下方出现半模态窗口展示意图调用返回结果。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintentdecorator/js-apis-app-ability-insightintentdecorator#insightintentform",
                  children: "@InsightIntentForm"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "内嵌卡片页面，点击卡片可跳转至应用"
              })]
            })]
          })]
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