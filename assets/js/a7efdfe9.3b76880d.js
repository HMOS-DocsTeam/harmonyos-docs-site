"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["269523"], {
379152(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_debug_optimize_api_performance_analysis_api_performance_analysis_c_performance_analysis_struct_capi_hiappevent_hiappevent_appeventinfo_capi_hiappevent_hiappevent_appeventinfo_md_a7e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-debug-optimize-api-performance-analysis-api-performance-analysis-c-performance-analysis-struct-capi-hiappevent-hiappevent-appeventinfo-capi-hiappevent-hiappevent-appeventinfo-md-a7e.json
var site_docs_ref_system_debug_optimize_api_performance_analysis_api_performance_analysis_c_performance_analysis_struct_capi_hiappevent_hiappevent_appeventinfo_capi_hiappevent_hiappevent_appeventinfo_md_a7e_namespaceObject = JSON.parse('{"id":"system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hiappevent-hiappevent-appeventinfo/capi-hiappevent-hiappevent-appeventinfo","title":"HiAppEvent_AppEventInfo","description":"概述","source":"@site/docs-ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hiappevent-hiappevent-appeventinfo/capi-hiappevent-hiappevent-appeventinfo.md","sourceDirName":"system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hiappevent-hiappevent-appeventinfo","slug":"/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hiappevent-hiappevent-appeventinfo/capi-hiappevent-hiappevent-appeventinfo","permalink":"/harmonyos-docs-site/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hiappevent-hiappevent-appeventinfo/capi-hiappevent-hiappevent-appeventinfo","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"HiAppEvent_AppEventInfo","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hiappevent-hiappevent-appeventinfo","kit":"系统","last_updated":"2026-04-22","slug":"capi-hiappevent-hiappevent-appeventinfo"},"sidebar":"ref","previous":{"title":"trace.h","permalink":"/harmonyos-docs-site/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-trace-h/capi-trace-h"},"next":{"title":"HiAppEvent_AppEventGroup","permalink":"/harmonyos-docs-site/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hiappevent-hiappevent-appeventgroup/capi-hiappevent-hiappevent-appeventgroup"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-struct/capi-hiappevent-hiappevent-appeventinfo/capi-hiappevent-hiappevent-appeventinfo.md


const frontMatter = {
	title: 'HiAppEvent_AppEventInfo',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hiappevent-hiappevent-appeventinfo',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'capi-hiappevent-hiappevent-appeventinfo'
};
const contentTitle = 'HiAppEvent_AppEventInfo';

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
        id: "hiappevent_appeventinfo",
        children: "HiAppEvent_AppEventInfo"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct HiAppEvent_AppEventInfo {...} HiAppEvent_AppEventInfo\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "单个事件信息，包含事件领域、事件名称、事件类型和事件携带的用json格式字符串表示的自定义参数列表。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-module/capi-hiappevent/capi-hiappevent",
        children: "HiAppEvent"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "所在头文件："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h/capi-hiappevent-h",
        children: "hiappevent.h"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "成员变量",
      children: "成员变量"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "const char* domain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "事件领域。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "事件名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hiappevent-h/capi-hiappevent-h#eventtype",
              children: "EventType"
            }), " type"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "事件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* params"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "json格式字符串类型的事件参数列表。"
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