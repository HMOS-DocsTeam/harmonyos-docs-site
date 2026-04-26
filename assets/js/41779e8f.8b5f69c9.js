"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["181829"], {
831334(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_live_view_api_liveview_arkts_liveview_lock_screen_ability_liveview_lock_screen_ability_md_417_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-live-view-api-liveview-arkts-liveview-lock-screen-ability-liveview-lock-screen-ability-md-417.json
var site_docs_ref_live_view_api_liveview_arkts_liveview_lock_screen_ability_liveview_lock_screen_ability_md_417_namespaceObject = JSON.parse('{"id":"live-view-api/liveview-arkts/liveview-lock-screen-ability/liveview-lock-screen-ability","title":"LiveViewLockScreenExtensionAbility","description":"LiveViewLockScreenExtensionAbility为锁屏沉浸实况窗扩展Ability，继承自UIExtensionAbility。有如下约束：","source":"@site/docs-ref/live-view-api/liveview-arkts/liveview-lock-screen-ability/liveview-lock-screen-ability.md","sourceDirName":"live-view-api/liveview-arkts/liveview-lock-screen-ability","slug":"/live-view-api/liveview-arkts/liveview-lock-screen-ability/liveview-lock-screen-ability","permalink":"/harmonyos-docs-site/ref/live-view-api/liveview-arkts/liveview-lock-screen-ability/liveview-lock-screen-ability","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"LiveViewLockScreenExtensionAbility","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/liveview-lock-screen-ability","kit":"应用服务","last_updated":"2026-04-22","slug":"liveview-lock-screen-ability"},"sidebar":"ref","previous":{"title":"liveViewManager","permalink":"/harmonyos-docs-site/ref/live-view-api/liveview-arkts/liveview-liveviewmanager/liveview-liveviewmanager"},"next":{"title":"LiveViewLockScreenExtensionContext","permalink":"/harmonyos-docs-site/ref/live-view-api/liveview-arkts/liveview-lock-screen-context/liveview-lock-screen-context"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/live-view-api/liveview-arkts/liveview-lock-screen-ability/liveview-lock-screen-ability.md


const frontMatter = {
	title: 'LiveViewLockScreenExtensionAbility',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/liveview-lock-screen-ability',
	kit: '应用服务',
	last_updated: '2026-04-22',
	slug: 'liveview-lock-screen-ability'
};
const contentTitle = 'LiveViewLockScreenExtensionAbility';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "属性",
  "id": "属性",
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
        id: "liveviewlockscreenextensionability",
        children: "LiveViewLockScreenExtensionAbility"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["LiveViewLockScreenExtensionAbility为锁屏沉浸实况窗扩展Ability，继承自", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiextensionability/js-apis-app-ability-uiextensionability",
        children: "UIExtensionAbility"
      }), "。有如下约束："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LiveViewLockScreenExtensionAbility为独立子进程，不能跨进程拉起其他Ability。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不允许调用通知API、窗口API、卡片API、后台任务API、联系人API、分布式数据管理API、相机API、NFC API、上传下载API、蜂窝通信API。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { LiveViewLockScreenExtensionAbility } from '@kit.LiveViewKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该模块在Phone、Tablet中可正常调用，在其他设备类型中无效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "属性",
      children: "属性"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 属性仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.LiveView.LiveViewService"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Phone、Tablet中可正常调用，在其他设备类型中无效果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
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
              href: "/ref/live-view-api/liveview-arkts/liveview-lock-screen-context/liveview-lock-screen-context",
              children: "LiveViewLockScreenExtensionContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["LiveViewLockScreenExtensionAbility的上下文环境，继承自", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-extensioncontext/js-apis-inner-application-extensioncontext",
              children: "ExtensionContext"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { LiveViewLockScreenExtensionAbility } from '@kit.LiveViewKit';\nimport { UIExtensionContentSession, Want } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nexport default class LiveViewLockScreenExtAbility extends LiveViewLockScreenExtensionAbility {\n  onCreate(): void {\n    hilog.info(0x0000, 'LiveViewLockScreenTag', 'LiveViewLockScreenExtAbility onCreate begin.');\n  }\n\n  onSessionCreate(want: Want, session: UIExtensionContentSession): void {\n    hilog.info(0x0000, 'LiveViewLockScreenTag', 'LiveViewLockScreenExtAbility onSessionCreate begin.');\n    let param: Record<string, UIExtensionContentSession> = {\n      'session': session\n    };\n    let storage: LocalStorage = new LocalStorage(param);\n\n    // 解析从liveViewLocalScreenAbilityParameters中传入的参数\n    const parameters = want?.parameters;\n    let words: string = parameters?.['words'] ? parameters?.['words'] as string : 'Hello World!';\n    storage.setOrCreate('words', words);\n\n    // 加载锁屏沉浸实况窗页面\n    session.loadContent('pages/LiveViewLockScreenPage', storage);\n  }\n}\n"
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