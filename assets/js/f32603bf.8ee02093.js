"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["293806"], {
315221(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_basicfun_api_kernel_api_kernel_c_kernel_struct_capi_qos_oh_qos_gewucreatesessionresult_capi_qos_oh_qos_gewucreatesessionresult_md_f32_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-basicfun-api-kernel-api-kernel-c-kernel-struct-capi-qos-oh-qos-gewucreatesessionresult-capi-qos-oh-qos-gewucreatesessionresult-md-f32.json
var site_docs_ref_system_basicfun_api_kernel_api_kernel_c_kernel_struct_capi_qos_oh_qos_gewucreatesessionresult_capi_qos_oh_qos_gewucreatesessionresult_md_f32_namespaceObject = JSON.parse('{"id":"system-basicfun-api/kernel-api/kernel-c/kernel-struct/capi-qos-oh-qos-gewucreatesessionresult/capi-qos-oh-qos-gewucreatesessionresult","title":"OH_QoS_GewuCreateSessionResult","description":"概述","source":"@site/docs-ref/system-basicfun-api/kernel-api/kernel-c/kernel-struct/capi-qos-oh-qos-gewucreatesessionresult/capi-qos-oh-qos-gewucreatesessionresult.md","sourceDirName":"system-basicfun-api/kernel-api/kernel-c/kernel-struct/capi-qos-oh-qos-gewucreatesessionresult","slug":"/system-basicfun-api/kernel-api/kernel-c/kernel-struct/capi-qos-oh-qos-gewucreatesessionresult/capi-qos-oh-qos-gewucreatesessionresult","permalink":"/harmonyos-docs-site/ref/system-basicfun-api/kernel-api/kernel-c/kernel-struct/capi-qos-oh-qos-gewucreatesessionresult/capi-qos-oh-qos-gewucreatesessionresult","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"OH_QoS_GewuCreateSessionResult","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-qos-oh-qos-gewucreatesessionresult","kit":"系统","last_updated":"2026-04-22","slug":"capi-qos-oh-qos-gewucreatesessionresult"},"sidebar":"ref","previous":{"title":"qos.h","permalink":"/harmonyos-docs-site/ref/system-basicfun-api/kernel-api/kernel-c/kernel-headerfile/capi-qos-h/capi-qos-h"},"next":{"title":"OH_QoS_GewuSubmitRequestResult","permalink":"/harmonyos-docs-site/ref/system-basicfun-api/kernel-api/kernel-c/kernel-struct/capi-qos-oh-qos-gewusubmitrequestresult/capi-qos-oh-qos-gewusubmitrequestresult"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-basicfun-api/kernel-api/kernel-c/kernel-struct/capi-qos-oh-qos-gewucreatesessionresult/capi-qos-oh-qos-gewucreatesessionresult.md


const frontMatter = {
	title: 'OH_QoS_GewuCreateSessionResult',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-qos-oh-qos-gewucreatesessionresult',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'capi-qos-oh-qos-gewucreatesessionresult'
};
const contentTitle = 'OH_QoS_GewuCreateSessionResult';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "汇总",
  "id": "汇总",
  "level": 2
}, {
  "value": "成员变量",
  "id": "成员变量",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
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
        id: "oh_qos_gewucreatesessionresult",
        children: "OH_QoS_GewuCreateSessionResult"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct { ... } OH_QoS_GewuCreateSessionResult\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OH_QoS_GewuCreateSession()接口的返回结果，成功时返回创建的 session，失败时 error 会置为对应的错误码 。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/kernel-api/kernel-c/kernel-module/capi-qos/capi-qos",
        children: "QoS"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "所在头文件："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/kernel-api/kernel-c/kernel-headerfile/capi-qos-h/capi-qos-h",
        children: "qos.h"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "成员变量",
      children: "成员变量"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/kernel-api/kernel-c/kernel-headerfile/capi-qos-h/capi-qos-h#%E5%8F%98%E9%87%8F",
              children: "OH_QoS_GewuSession"
            }), " session"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建出来的会话句柄"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/kernel-api/kernel-c/kernel-headerfile/capi-qos-h/capi-qos-h#oh_qos_gewuerrorcode",
              children: "OH_QoS_GewuErrorCode"
            }), " error"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "错误码- 创建会话成功返回OH_QOS_GEWU_OK。- 由于没有足够的内存而创建会话失败返回OH_QOS_GEWU_NOMEM。"
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