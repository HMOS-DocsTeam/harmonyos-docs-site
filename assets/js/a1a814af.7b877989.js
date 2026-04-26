"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["785201"], {
795999(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_push_kit_guide_push_get_aaid_push_get_aaid_md_a1a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-push-kit-guide-push-get-aaid-push-get-aaid-md-a1a.json
var site_docs_push_kit_guide_push_get_aaid_push_get_aaid_md_a1a_namespaceObject = JSON.parse('{"id":"push-kit-guide/push-get-aaid/push-get-aaid","title":"获取AAID","description":"AAID（Anonymous Application Identifier）：应用匿名标识符，标识运行在移动智能终端设备上的应用实例，只有该应用实例才能访问该标识符，它只存在于应用的安装期，总长度36位。与无法重置的设备级硬件ID相比，AAID具有更好的隐私权属性。","source":"@site/docs/push-kit-guide/push-get-aaid/push-get-aaid.md","sourceDirName":"push-kit-guide/push-get-aaid","slug":"/push-kit-guide/push-get-aaid/","permalink":"/harmonyos-docs-site/push-kit-guide/push-get-aaid/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"获取AAID","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/push-get-aaid","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"（可选）推送报告","permalink":"/harmonyos-docs-site/push-kit-guide/push-server/push-delivery-report/"},"next":{"title":"如何处理推送消息时遇到的问题","permalink":"/harmonyos-docs-site/push-kit-guide/push-faq/push-faq-1/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/push-kit-guide/push-get-aaid/push-get-aaid.md


const frontMatter = {
	title: '获取AAID',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/push-get-aaid',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '获取AAID';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "获取AAID",
  "id": "获取aaid-1",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "获取aaid",
        children: "获取AAID"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AAID（Anonymous Application Identifier）：应用匿名标识符，标识运行在移动智能终端设备上的应用实例，只有该应用实例才能访问该标识符，它只存在于应用的安装期，总长度36位。与无法重置的设备级硬件ID相比，AAID具有更好的隐私权属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AAID具有以下特性："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "匿名化、无隐私风险：AAID和已有的任何标识符都不关联，并且每个应用只能访问自己的AAID。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "同一个设备上，同一个开发者的多个应用，AAID取值不同。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "同一个设备上，不同开发者的应用，AAID取值不同。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不同设备上，同一个开发者的应用，AAID取值不同。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不同设备上，不同开发者的应用，AAID取值不同。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AAID会在包括但不限于下述场景中发生变化："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用卸载重装。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用调用删除AAID接口。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户恢复出厂设置。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户清除应用数据。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取AAID能力支持Phone、Tablet、PC/2in1设备。并且从5.1.0(18)版本开始，新增支持Wearable设备；从5.1.1(19)版本开始，新增支持TV设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口返回值有两种返回形式：Callback和Promise回调。下表中仅展示Promise回调形式的接口，Promise和Callback只是返回值方式不一样，功能相同。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/push-api/push-arkts/push-aaid-api/push-aaid-api#aaidgetaaid-1",
              children: "getAAID"
            }), "(): Promise<string>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取AAID，使用Promise异步返回结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/push-api/push-arkts/push-aaid-api/push-aaid-api#aaiddeleteaaid-1",
              children: "deleteAAID"
            }), "(): Promise<void>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除AAID，使用Promise异步返回结果。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "获取aaid-1",
      children: "获取AAID"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入AAID模块及相关公共模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { AAID } from '@kit.PushKit';\nimport { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用AAID.", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/push-api/push-arkts/push-aaid-api/push-aaid-api#aaidgetaaid-1",
            children: "getAAID"
          }), "()方法获取AAID信息。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 文件路径: src/main/ets/entryability/EntryAbility.ets\nexport default class EntryAbility extends UIAbility {\n  // 入参want与launchParam并未使用，为初始化项目时自带参数\n  async onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): Promise<void> {\n    // 获取AAID\n    try {\n      const aaid: string = await AAID.getAAID();\n      hilog.info(0x0000, 'testTag', 'Succeeded in getting AAID.');\n    } catch (err) {\n      let e: BusinessError = err as BusinessError;\n      hilog.error(0x0000, 'testTag', 'Failed to get AAID: %{public}d %{public}s', e.code, e.message);\n    }\n  }\n}\n"
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