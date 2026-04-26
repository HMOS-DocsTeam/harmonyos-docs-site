"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["498130"], {
252868(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_call_kit_guide_call_preparations_call_preparations_md_951_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-call-kit-guide-call-preparations-call-preparations-md-951.json
var site_docs_call_kit_guide_call_preparations_call_preparations_md_951_namespaceObject = JSON.parse('{"id":"call-kit-guide/call-preparations/call-preparations","title":"开发准备","description":"在开通应用内通话服务之前，请先参考“应用开发准备”完成基本准备工作，再继续进行以下开发活动。","source":"@site/docs/call-kit-guide/call-preparations/call-preparations.md","sourceDirName":"call-kit-guide/call-preparations","slug":"/call-kit-guide/call-preparations/","permalink":"/harmonyos-docs-site/call-kit-guide/call-preparations/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"开发准备","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/call-preparations","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Call Service Kit简介","permalink":"/harmonyos-docs-site/call-kit-guide/call-introduction/"},"next":{"title":"来电场景","permalink":"/harmonyos-docs-site/call-kit-guide/incoming-calls/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/call-kit-guide/call-preparations/call-preparations.md


const frontMatter = {
	title: '开发准备',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/call-preparations',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '开发准备';

const assets = {

};



const toc = [{
  "value": "开通Push Kit（推送服务）",
  "id": "开通push-kit推送服务",
  "level": 2
}, {
  "value": "申请权限",
  "id": "申请权限",
  "level": 2
}, {
  "value": "示例代码",
  "id": "示例代码",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
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
        id: "开发准备",
        children: "开发准备"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在开通应用内通话服务之前，请先参考“", (0,jsx_runtime.jsx)(_components.a, {
        href: "/application-dev-overview",
        children: "应用开发准备"
      }), "”完成基本准备工作，再继续进行以下开发活动。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开通push-kit推送服务",
      children: "开通Push Kit（推送服务）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如", (0,jsx_runtime.jsx)(_components.a, {
        href: "/call-kit-guide/call-introduction#%E4%B8%8E%E7%9B%B8%E5%85%B3kit%E7%9A%84%E5%85%B3%E7%B3%BB",
        children: "与相关Kit的关系"
      }), "所述，开发者在开通Call Service Kit之前，需要开通Push Kit（推送服务），开通方法详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/push-kit-guide/push-preparations/push-config-setting",
        children: "开通推送服务"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "申请权限",
      children: "申请权限"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者需要根据实际场景申请对应权限，具体申请方式请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions",
        children: "声明权限"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "权限"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "使用场景"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "备注"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-security/access-control/app-permission-mgmt/app-permissions/permissions-for-all-user#ohospermissionmicrophone",
              children: "ohos.permission.MICROPHONE"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于在语音通话中，使用麦克风。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须申请。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-security/access-control/app-permission-mgmt/app-permissions/permissions-for-all-user#ohospermissioncamera",
              children: "ohos.permission.CAMERA"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于在视频通话中，使用相机。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果应用支持视频通话业务，则需要申请。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该指南涉及到的示例代码均为片段，全量示例代码请参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/harmonyos_samples/callkit-samplecode-voipdemo-arkts",
        children: "Samplecode"
      }), "。"]
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