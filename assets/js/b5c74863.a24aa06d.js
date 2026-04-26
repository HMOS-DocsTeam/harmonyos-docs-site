"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["757960"], {
676799(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_ui_debug_optimize_arkts_wrong_uicontext_debug_arkts_wrong_uicontext_debug_md_b5c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-ui-debug-optimize-arkts-wrong-uicontext-debug-arkts-wrong-uicontext-debug-md-b5c.json
var site_docs_arkui_ui_debug_optimize_arkts_wrong_uicontext_debug_arkts_wrong_uicontext_debug_md_b5c_namespaceObject = JSON.parse('{"id":"arkui/ui-debug-optimize/arkts-wrong-uicontext-debug/arkts-wrong-uicontext-debug","title":"UI上下文异常调试","description":"本指导主要介绍如何解决因使用无效的UIContext导致文本显示异常的问题。当开发者使用了已失效的UIContext对象（通常是因为对应的UI实例已被销毁），可能导致后续UI操作无效。此类问题常见于多窗口场景。从API version 12开始，该问题也见于调用setSupportedProcessCache打开进程缓存后快速启动的情形。","source":"@site/docs/arkui/ui-debug-optimize/arkts-wrong-uicontext-debug/arkts-wrong-uicontext-debug.md","sourceDirName":"arkui/ui-debug-optimize/arkts-wrong-uicontext-debug","slug":"/arkui/ui-debug-optimize/arkts-wrong-uicontext-debug/","permalink":"/harmonyos-docs-site/arkui/ui-debug-optimize/arkts-wrong-uicontext-debug/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"UI上下文异常调试","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-wrong-uicontext-debug","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"UI显示异常调试","permalink":"/harmonyos-docs-site/arkui/ui-debug-optimize/arkts-layout-debug/"},"next":{"title":"UI预览","permalink":"/harmonyos-docs-site/arkui/ui-debug-optimize/ui-ide-previewer/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/ui-debug-optimize/arkts-wrong-uicontext-debug/arkts-wrong-uicontext-debug.md


const frontMatter = {
	title: 'UI上下文异常调试',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-wrong-uicontext-debug',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'UI上下文异常调试';

const assets = {

};



const toc = [{
  "value": "定位UIContext错误问题",
  "id": "定位uicontext错误问题",
  "level": 2
}, {
  "value": "解决UIContext错误导致的显示异常问题",
  "id": "解决uicontext错误导致的显示异常问题",
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
        id: "ui上下文异常调试",
        children: "UI上下文异常调试"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本指导主要介绍如何解决因使用无效的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
        children: "UIContext"
      }), "导致文本显示异常的问题。当开发者使用了已失效的UIContext对象（通常是因为对应的UI实例已被销毁），可能导致后续UI操作无效。此类问题常见于多窗口场景。从API version 12开始，该问题也见于调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-applicationcontext/js-apis-inner-application-applicationcontext#applicationcontextsetsupportedprocesscache12",
        children: "setSupportedProcessCache"
      }), "打开进程缓存后快速启动的情形。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "定位uicontext错误问题",
      children: "定位UIContext错误问题"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "出现以下异常或系统日志时，可能存在UIContext无效的问题："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "存在JS异常：\"Node Constructor error, param uiContext error\"。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["产生该异常的原因通常是在", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-node",
            children: "自定义节点"
          }), "中使用了无效的UIContext，这可能导致后续UI操作被错误关联到该无效UIContext。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "存在实例状态更新时，上下文实例ID大于等于100000且小于1000000的日志："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "实例状态更新的日志格式为："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "({currentId}:{trackedId}:{trackedReason})][{bundleName}][{moduleName}][{thisInstanceId}]: window {status}"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "各字段含义为："
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "字段名"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "类型"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "典型值"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "{currentId}"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "整数"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-1"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "上下文实例ID，应用正常的情况下，该字段应该为负数。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "{trackedId}"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "整数"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "100000"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "当前可间接跟踪的实例ID，通常为正数，开发者可忽略。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "{trackedReason}"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "字符串"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "singleton"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "间接跟踪的原因，开发者可不关注该字段。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "{bundleName}"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "字符串"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "com.example.helloworld"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "应用的bundleName。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "{moduleName}"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "字符串"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "entry"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "当前模块的moduleName。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "{thisInstanceId}"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "正数"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "100000"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "被通知UI实例的ID。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "{status}"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "实例被通知的状态"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "focus"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "可选值为:  - focus：获焦  - unfocus：失焦  - foreground：前台  - background：后台  - destroy：销毁"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "可使用如下正则表达式匹配相关日志："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "(-?\\d+:-?\\d+:(scope|active|default|singleton|foreground|undefined))] [[a-z0-9.]+][[a-zA-Z][0-9a-zA-Z_.]*][\\d+]: window (focus|unfocus|foreground|background|destroy)"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "示例说明"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "正确日志示例："
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "(-2:100000:singleton)] [com.example.helloworld][entry][100000]: window foreground"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "异常日志示例："
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "(100000:100000:scoped)] [com.example.helloworld][entry][100001]: window background"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "该异常日志说明存在错误跟踪ID为100000的UI实例。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "若前文出现以下特定格式的日志："
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "(-2:100000:singleton)] [com.example.helloworld][entry][100000]: window destroy"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "表示ID为100000的UI实例已销毁，后续UI操作可能受其上下文影响。"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "解决uicontext错误导致的显示异常问题",
      children: "解决UIContext错误导致的显示异常问题"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当发生以下问题时，可根据上文的关键日志或异常进行判断："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text#setstyledstring12",
          children: "setStyledString"
        }), "方法设置字体大小时，字体大小未发生预期变化。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用UIContext成员方法时，界面没有响应或显示异常。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决措施"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "重新获取有效的UIContext对象。可通过以下方式获取："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["使用自定义组件的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-api/ts-custom-component-api#getuicontext",
          children: "getUIContext"
        }), "方法获取。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过窗口的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#getuicontext10",
          children: "getUIContext"
        }), "方法获取。"]
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