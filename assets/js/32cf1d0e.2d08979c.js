"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["154494"], {
805837(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_network_api_network_api_network_c_network_struct_capi_netconnection_netconn_tracerouteinfo_capi_netconnection_netconn_tracerouteinfo_md_32c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-network-api-network-api-network-c-network-struct-capi-netconnection-netconn-tracerouteinfo-capi-netconnection-netconn-tracerouteinfo-md-32c.json
var site_docs_ref_system_network_api_network_api_network_c_network_struct_capi_netconnection_netconn_tracerouteinfo_capi_netconnection_netconn_tracerouteinfo_md_32c_namespaceObject = JSON.parse('{"id":"system-network-api/network-api/network-c/network-struct/capi-netconnection-netconn-tracerouteinfo/capi-netconnection-netconn-tracerouteinfo","title":"NetConn_TraceRouteInfo","description":"概述","source":"@site/docs-ref/system-network-api/network-api/network-c/network-struct/capi-netconnection-netconn-tracerouteinfo/capi-netconnection-netconn-tracerouteinfo.md","sourceDirName":"system-network-api/network-api/network-c/network-struct/capi-netconnection-netconn-tracerouteinfo","slug":"/system-network-api/network-api/network-c/network-struct/capi-netconnection-netconn-tracerouteinfo/capi-netconnection-netconn-tracerouteinfo","permalink":"/harmonyos-docs-site/ref/system-network-api/network-api/network-c/network-struct/capi-netconnection-netconn-tracerouteinfo/capi-netconnection-netconn-tracerouteinfo","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"title":"NetConn_TraceRouteInfo","sidebar_position":11,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netconnection-netconn-tracerouteinfo","kit":"系统","last_updated":"2026-04-22","slug":"capi-netconnection-netconn-tracerouteinfo"},"sidebar":"ref","previous":{"title":"NetConn_ProbeResultInfo","permalink":"/harmonyos-docs-site/ref/system-network-api/network-api/network-c/network-struct/capi-netconnection-netconn-proberesultinfo/capi-netconnection-netconn-proberesultinfo"},"next":{"title":"NetConn_TraceRouteOption","permalink":"/harmonyos-docs-site/ref/system-network-api/network-api/network-c/network-struct/capi-netconnection-netconn-tracerouteoption/capi-netconnection-netconn-tracerouteoption"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-network-api/network-api/network-c/network-struct/capi-netconnection-netconn-tracerouteinfo/capi-netconnection-netconn-tracerouteinfo.md


const frontMatter = {
	title: 'NetConn_TraceRouteInfo',
	sidebar_position: 11,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netconnection-netconn-tracerouteinfo',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'capi-netconnection-netconn-tracerouteinfo'
};
const contentTitle = 'NetConn_TraceRouteInfo';

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
        id: "netconn_tracerouteinfo",
        children: "NetConn_TraceRouteInfo"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct NetConn_TraceRouteInfo {...} NetConn_TraceRouteInfo\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义跟踪路由信息。"
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
        href: "/ref/system-network-api/network-api/network-c/network-module/capi-netconnection/capi-netconnection",
        children: "NetConnection"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "所在头文件："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/network-api/network-c/network-headerfile/capi-net-connection-type-h/capi-net-connection-type-h",
        children: "net_connection_type.h"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "成员变量",
      children: "成员变量"
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
            children: "uint8_t jumpNo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "跳数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["char address", (0,jsx_runtime.jsx)(_components.a, {
              href: "%60https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-connection-type-h#%E5%AE%8F%E5%AE%9A%E4%B9%89%60",
              children: "[NETCONN_MAX_STR_LEN]"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "主机名或地址。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["uint32_t rtt", (0,jsx_runtime.jsx)(_components.a, {
              href: "%60https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-connection-type-h#%E5%AE%8F%E5%AE%9A%E4%B9%89%60",
              children: "[NETCONN_MAX_RTT_NUM]"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "往返时间（单位：毫秒)，包含最大、最小、平均、标准差。"
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