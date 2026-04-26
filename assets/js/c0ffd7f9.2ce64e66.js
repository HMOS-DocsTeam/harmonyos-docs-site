"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["274479"], {
539137(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_avsession_api_avsession_c_avsession_module_capi_ohavsession_capi_ohavsession_md_c0f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-avsession-api-avsession-c-avsession-module-capi-ohavsession-capi-ohavsession-md-c0f.json
var site_docs_ref_avsession_api_avsession_c_avsession_module_capi_ohavsession_capi_ohavsession_md_c0f_namespaceObject = JSON.parse('{"id":"avsession-api/avsession-c/avsession-module/capi-ohavsession/capi-ohavsession","title":"OHAVSession","description":"概述","source":"@site/docs-ref/avsession-api/avsession-c/avsession-module/capi-ohavsession/capi-ohavsession.md","sourceDirName":"avsession-api/avsession-c/avsession-module/capi-ohavsession","slug":"/avsession-api/avsession-c/avsession-module/capi-ohavsession/capi-ohavsession","permalink":"/harmonyos-docs-site/ref/avsession-api/avsession-c/avsession-module/capi-ohavsession/capi-ohavsession","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"OHAVSession","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession","kit":"媒体","last_updated":"2026-04-22","slug":"capi-ohavsession"},"sidebar":"ref","previous":{"title":"@ohos.multimedia.avInputCastPicker (录音设备选择组件)","permalink":"/harmonyos-docs-site/ref/avsession-api/avsession-comp/ohos-multimedia-avinputcastpicker/ohos-multimedia-avinputcastpicker"},"next":{"title":"native_avmetadata.h","permalink":"/harmonyos-docs-site/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avmetadata-h/capi-native-avmetadata-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/avsession-api/avsession-c/avsession-module/capi-ohavsession/capi-ohavsession.md


const frontMatter = {
	title: 'OHAVSession',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession',
	kit: '媒体',
	last_updated: '2026-04-22',
	slug: 'capi-ohavsession'
};
const contentTitle = 'OHAVSession';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "文件汇总",
  "id": "文件汇总",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
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
        id: "ohavsession",
        children: "OHAVSession"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供播控模块C接口定义。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可使用OHAVSession，作为媒体会话提供方接入AVSession服务，对应的开发指南及样例可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/avsession-kit/local-avsession/using-ohavsession-developer",
        children: "媒体会话提供方"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.AVSession.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "文件汇总",
      children: "文件汇总"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avmetadata-h/capi-native-avmetadata-h",
              children: "native_avmetadata.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供播控元数据的定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-h/capi-native-avsession-h",
              children: "native_avsession.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体会话定义，可用于设置元数据、播放状态信息等操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-errors-h/capi-native-avsession-errors-h",
              children: "native_avsession_errors.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供播控错误码的定义。"
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