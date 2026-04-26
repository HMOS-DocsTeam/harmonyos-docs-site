"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["37764"], {
524620(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_use_dialog_arkts_use_menu_arkts_menu_overview_arkts_menu_overview_md_ef5_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-use-dialog-arkts-use-menu-arkts-menu-overview-arkts-menu-overview-md-ef5.json
var site_docs_arkui_arkts_ui_development_arkts_use_dialog_arkts_use_menu_arkts_menu_overview_arkts_menu_overview_md_ef5_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-use-dialog/arkts-use-menu/arkts-menu-overview/arkts-menu-overview","title":"菜单概述","description":"菜单是一种用于给用户提供可执行的操作的弹窗，一般用于鼠标右键弹窗、点击弹窗等。","source":"@site/docs/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-menu/arkts-menu-overview/arkts-menu-overview.md","sourceDirName":"arkui/arkts-ui-development/arkts-use-dialog/arkts-use-menu/arkts-menu-overview","slug":"/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-menu/arkts-menu-overview/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-menu/arkts-menu-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"菜单概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-menu-overview","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"弹出框蒙层控制","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-dialog-mask/"},"next":{"title":"菜单控制（Menu）","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-menu/arkts-popup-and-menu-components-menu/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-menu/arkts-menu-overview/arkts-menu-overview.md


const frontMatter = {
	title: '菜单概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-menu-overview',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '菜单概述';

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
}, {
  "value": "生命周期",
  "id": "生命周期",
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
        id: "菜单概述",
        children: "菜单概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "菜单是一种用于给用户提供可执行的操作的弹窗，一般用于鼠标右键弹窗、点击弹窗等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用场景",
      children: "使用场景"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "使用场景"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-menu/arkts-popup-and-menu-components-menu",
              children: "菜单控制 (Menu)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于需要给指定的组件绑定用户可执行的操作时，例如长按图标展示操作选项等。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-menu/arkts-popup-and-menu-components-uicontext-menu",
              children: "不依赖UI组件的全局菜单 (openMenu)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于在无法直接访问UI组件的场景向用户提供可执行操作，例如在事件回调中展示操作选项等。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "规格约束",
      children: "规格约束"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/popup-property/ts-universal-attributes-menu/ts-universal-attributes-menu#bindmenu11",
          children: "bindMenu"
        }), "通过调用isShow参数或", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/popup-property/ts-universal-attributes-menu/ts-universal-attributes-menu#bindcontextmenu12",
          children: "bindContextMenu"
        }), "调用isShown参数弹出时，需要等待页面全部构建完成才能展示。因此isShow或isShown不能在页面构建中设置为true，否则会导致menu弹窗显示位置及形状错误。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["openMenu的弹出需要传入有效的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-i/arkts-apis-uicontext-i#targetinfo18",
          children: "TargetInfo"
        }), "，否则无法弹出气泡。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["其他规格约束，具体可参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/popup-property/ts-universal-attributes-menu/ts-universal-attributes-menu",
          children: "菜单控制"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-promptaction/arkts-apis-uicontext-promptaction#openmenu18",
          children: "openMenu"
        }), "说明。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "生命周期",
      children: "生命周期"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "正常时序依次为：aboutToAppear>>onWillAppear>>onAppear>>onDidAppear>>aboutToDisappear>>onWillDisappear>>onDisappear>>onDidDisappear。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "aboutToAppear"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "() => void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "菜单显示动效前的事件回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onAppear"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "() => void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "菜单弹出后的事件回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "aboutToDisappear"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "() => void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "菜单退出动效前的事件回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onDisappear"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "() => void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "菜单消失后的事件回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onWillAppear"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#callback12",
              children: "Callback<void>"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["菜单显示动效前的事件回调。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " aboutToAppear是初始化时触发调用，onWillAppear是在动画执行前触发调用，onWillAppear在aboutToAppear之后执行。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onDidAppear"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#callback12",
              children: "Callback<void>"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["菜单弹出后的事件回调。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  1. 快速点击按钮时，菜单会快速弹出、消失，此时onWillDisappear可能会在onDidAppear前生效。  2. 当菜单入场动效未完成时关闭菜单，该回调不会触发。  3. onAppear和onDidAppear触发时机相同，onDidAppear在onAppear后生效。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onWillDisappear"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#callback12",
              children: "Callback<void>"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["菜单退出动效前的事件回调。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  1. 快速点击按钮时，菜单会快速弹出、消失，此时onWillDisappear可能会在onDidAppear前生效。  2. aboutToDisappear和onWillDisappear触发时机相同，onWillDisappear在aboutToDisappear后生效。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onDidDisappear"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#callback12",
              children: "Callback<void>"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["菜单消失后的事件回调。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " onDisappear和onDidDisappear触发时机相同，onDidDisappear在onDisappear后生效。"]
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