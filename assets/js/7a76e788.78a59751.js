"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["582817"], {
635376(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_app_linking_api_applinking_arkts_api_applinking_deferredlink_api_applinking_deferredlink_api_md_7a7_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-app-linking-api-applinking-arkts-api-applinking-deferredlink-api-applinking-deferredlink-api-md-7a7.json
var site_docs_ref_app_linking_api_applinking_arkts_api_applinking_deferredlink_api_applinking_deferredlink_api_md_7a7_namespaceObject = JSON.parse('{"id":"app-linking-api/applinking-arkts-api/applinking-deferredlink-api/applinking-deferredlink-api","title":"deferredLink (延迟链接能力)","description":"本模块提供App Linking Kit的延迟链接能力。通过该能力，系统会对用户点击的应用链接保存十分钟，以便当用户下载安装并打开应用时，仍能获取之前点击的该应用相关链接。","source":"@site/docs-ref/app-linking-api/applinking-arkts-api/applinking-deferredlink-api/applinking-deferredlink-api.md","sourceDirName":"app-linking-api/applinking-arkts-api/applinking-deferredlink-api","slug":"/app-linking-api/applinking-arkts-api/applinking-deferredlink-api/applinking-deferredlink-api","permalink":"/harmonyos-docs-site/ref/app-linking-api/applinking-arkts-api/applinking-deferredlink-api/applinking-deferredlink-api","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"deferredLink (延迟链接能力)","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/applinking-deferredlink-api","kit":"应用服务","last_updated":"2026-04-22","slug":"applinking-deferredlink-api"},"sidebar":"ref","previous":{"title":"归因结果回传","permalink":"/harmonyos-docs-site/ref/store-api/store-rest/store-rest-receive/store-rest-receive"},"next":{"title":"@ohos.calendarManager (日程管理能力)","permalink":"/harmonyos-docs-site/ref/calendar-api/calendar-arkts/js-apis-calendarmanager/js-apis-calendarmanager"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/app-linking-api/applinking-arkts-api/applinking-deferredlink-api/applinking-deferredlink-api.md


const frontMatter = {
	title: 'deferredLink (延迟链接能力)',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/applinking-deferredlink-api',
	kit: '应用服务',
	last_updated: '2026-04-22',
	slug: 'applinking-deferredlink-api'
};
const contentTitle = 'deferredLink (延迟链接能力)';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "popDeferredLink",
  "id": "popdeferredlink",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
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
        id: "deferredlink-延迟链接能力",
        children: "deferredLink (延迟链接能力)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块提供App Linking Kit的延迟链接能力。通过该能力，系统会对用户点击的应用链接保存十分钟，以便当用户下载安装并打开应用时，仍能获取之前点击的该应用相关链接。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.3(15)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { deferredLink } from '@kit.AppLinkingKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "popdeferredlink",
      children: "popDeferredLink"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "popDeferredLink(): Promise<string>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用首次启动时从系统缓存中获取用户之前点击的该应用相关链接信息，链接仅能被获取一次。获取链接后，系统会从缓存中删除该链接。使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.BundleManager.AppLinking.DeferredLink"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.3(15)"]
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
            children: "Promise<string>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，返回延迟链接。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { deferredLink } from '@kit.AppLinkingKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\n// 应用首次启动时，获取用户之前点击的该应用相关链接\ndeferredLink.popDeferredLink().then((link: string) => {\n  hilog.info(0x0000, 'testTag', `Succeeded in getting deferred link, result: ${link}`);\n  // 若延迟链接不为空，开发者可根据自身业务逻辑配置链接，跳转至详情页面\n  if (link) {\n    // 根据业务逻辑配置链接，自行跳转至详情页面\n  }\n}).catch(() => {\n  // 发生未知错误\n  hilog.error(0x0000, 'testTag', `Failed to get deferred link.`);\n})\n"
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