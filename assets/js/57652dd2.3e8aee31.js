"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["438217"], {
154639(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_use_dialog_arkts_use_dialogs_arkts_base_dialog_overview_arkts_base_dialog_overview_md_576_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-use-dialog-arkts-use-dialogs-arkts-base-dialog-overview-arkts-base-dialog-overview-md-576.json
var site_docs_arkui_arkts_ui_development_arkts_use_dialog_arkts_use_dialogs_arkts_base_dialog_overview_arkts_base_dialog_overview_md_576_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-base-dialog-overview/arkts-base-dialog-overview","title":"弹出框概述","description":"弹出框是一种模态窗口，通常用于在保持当前上下文环境的同时，临时展示用户需关注的信息或待处理的操作。用户需在模态弹出框内完成相关交互任务之后，才能退出模态模式。弹出框可以不与任何组件绑定，其内容通常由多种组件组成，如文本、列表、输入框、图片等，以实现布局。ArkUI当前提供了*自定义和固定样式*两类弹出框组件。","source":"@site/docs/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-base-dialog-overview/arkts-base-dialog-overview.md","sourceDirName":"arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-base-dialog-overview","slug":"/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-base-dialog-overview/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-base-dialog-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"弹出框概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-base-dialog-overview","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"弹窗概述","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-dialog/arkts-dialog-overview/"},"next":{"title":"不依赖UI组件的全局自定义弹出框 (openCustomDialog)","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-uicontext-custom-dialog/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-base-dialog-overview/arkts-base-dialog-overview.md


const frontMatter = {
	title: '弹出框概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-base-dialog-overview',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '弹出框概述';

const assets = {

};



const toc = [{
  "value": "使用场景",
  "id": "使用场景",
  "level": 2
}, {
  "value": "规格约束",
  "id": "规格约束",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
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
        id: "弹出框概述",
        children: "弹出框概述"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["弹出框是一种模态窗口，通常用于在保持当前上下文环境的同时，临时展示用户需关注的信息或待处理的操作。用户需在模态弹出框内完成相关交互任务之后，才能退出模态模式。弹出框可以不与任何组件绑定，其内容通常由多种组件组成，如文本、列表、输入框、图片等，以实现布局。ArkUI当前提供了", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "自定义"
        })
      }), "和", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "固定样式"
        })
      }), "两类弹出框组件。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "自定义弹出框："
          })
        }), " 开发者需要根据使用场景，传入自定义组件填充在弹出框中实现自定义的弹出框内容。主要包括基础自定义弹出框 (CustomDialog)、不依赖UI组件的自定义弹出框 (openCustomDialog)。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "固定样式弹出框："
          })
        }), " 开发者可使用固定样式弹出框，指定需要显示的文本内容和按钮操作，完成简单的交互效果。主要包括警告弹窗 (AlertDialog)、列表选择弹窗 (ActionSheet)、选择器弹窗 (PickerDialog)、对话框 (showDialog)、操作菜单 (showActionMenu)。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用场景",
      children: "使用场景"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-uicontext-custom-dialog",
              children: "不依赖UI组件的全局自定义弹出框 (openCustomDialog)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当用户需要在自定义弹出框内动态更新弹出框属性时使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-common-components-custom-dialog",
              children: "基础自定义弹出框 (CustomDialog)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当用户需要自定义弹出框内的组件和内容时使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-fixes-style-dialog#%E8%AD%A6%E5%91%8A%E5%BC%B9%E7%AA%97-alertdialog",
              children: "警告弹窗 (AlertDialog)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "固定样式，通常用来展示用户当前需要或必须关注的信息或操作。如用户操作一个敏感行为时响应一个二次确认的弹出框。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-fixes-style-dialog#%E5%88%97%E8%A1%A8%E9%80%89%E6%8B%A9%E5%BC%B9%E7%AA%97-actionsheet",
              children: "列表选择弹窗 (ActionSheet)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "固定样式，当用户需要关注或确认的信息存在列表选择时使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-fixes-style-dialog#%E9%80%89%E6%8B%A9%E5%99%A8%E5%BC%B9%E7%AA%97-pickerdialog",
              children: "选择器弹窗 (PickerDialog)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "固定样式，当用户需要在弹出框内选择日期、时间和文本时使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-fixes-style-dialog#%E5%AF%B9%E8%AF%9D%E6%A1%86-showdialog",
              children: "对话框 (showDialog)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "固定样式，当用户需要处理弹出框响应后的异步返回结果时调用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-fixes-style-dialog#%E6%93%8D%E4%BD%9C%E8%8F%9C%E5%8D%95-showactionmenu",
              children: "操作菜单 (showActionMenu)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "固定样式，当用户需要处理操作菜单响应后的异步返回结果时调用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-embedded-dialog",
              children: "页面级弹出框"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "页面级弹出框，当用户期望弹出框跟随导航页面切换时使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-dialog-levelorder",
              children: "弹出框层级管理"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从API version 18开始，可以通过设置", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-promptaction/js-apis-promptaction#basedialogoptions11",
              children: "levelOrder"
            }), "参数来管理弹出框的显示顺序。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-dialog-controller",
              children: "弹出框控制器"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从API version 18开始，可设置controller参数以绑定", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-promptaction/js-apis-promptaction#dialogcontroller18",
              children: "DialogController"
            }), "控制器，通过控制器可以对弹出框进行操作。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-dialog-focusable",
              children: "弹出框焦点策略"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从API version 19开始，可以通过设置", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-promptaction/js-apis-promptaction#basedialogoptions11",
              children: "focusable"
            }), "参数来管理弹出框是否获取焦点。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-dialog-mask",
              children: "弹出框蒙层控制"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开发者可以通过设置maskColor、maskRect等参数来对弹出框蒙层进行定制。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "规格约束",
      children: "规格约束"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["建议使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
          children: "UIContext"
        }), "中的弹出框方法。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["可以通过使用UIContext中的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext#getpromptaction",
          children: "getPromptAction"
        }), "方法获取当前UI上下文关联的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-promptaction/arkts-apis-uicontext-promptaction",
          children: "PromptAction"
        }), "对象。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "由于系统安全管控原因，当弹出系统权限弹窗等场景时，弹出框在此状态下无法显示。"
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