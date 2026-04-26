"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["466321"], {
17846(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_network_api_network_api_network_c_network_struct_capi_netstack_http_eventshandler_capi_netstack_http_eventshandler_md_8c8_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-network-api-network-api-network-c-network-struct-capi-netstack-http-eventshandler-capi-netstack-http-eventshandler-md-8c8.json
var site_docs_ref_system_network_api_network_api_network_c_network_struct_capi_netstack_http_eventshandler_capi_netstack_http_eventshandler_md_8c8_namespaceObject = JSON.parse('{"id":"system-network-api/network-api/network-c/network-struct/capi-netstack-http-eventshandler/capi-netstack-http-eventshandler","title":"Http_EventsHandler","description":"概述","source":"@site/docs-ref/system-network-api/network-api/network-c/network-struct/capi-netstack-http-eventshandler/capi-netstack-http-eventshandler.md","sourceDirName":"system-network-api/network-api/network-c/network-struct/capi-netstack-http-eventshandler","slug":"/system-network-api/network-api/network-c/network-struct/capi-netstack-http-eventshandler/capi-netstack-http-eventshandler","permalink":"/harmonyos-docs-site/ref/system-network-api/network-api/network-c/network-struct/capi-netstack-http-eventshandler/capi-netstack-http-eventshandler","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":33,"frontMatter":{"title":"Http_EventsHandler","sidebar_position":33,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack-http-eventshandler","kit":"系统","last_updated":"2026-04-22","slug":"capi-netstack-http-eventshandler"},"sidebar":"ref","previous":{"title":"Http_Request","permalink":"/harmonyos-docs-site/ref/system-network-api/network-api/network-c/network-struct/capi-netstack-http-request/capi-netstack-http-request"},"next":{"title":"Http_Headers","permalink":"/harmonyos-docs-site/ref/system-network-api/network-api/network-c/network-struct/capi-netstack-http-headers/capi-netstack-http-headers"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-network-api/network-api/network-c/network-struct/capi-netstack-http-eventshandler/capi-netstack-http-eventshandler.md


const frontMatter = {
	title: 'Http_EventsHandler',
	sidebar_position: 33,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack-http-eventshandler',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'capi-netstack-http-eventshandler'
};
const contentTitle = 'Http_EventsHandler';

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
        id: "http_eventshandler",
        children: "Http_EventsHandler"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct Http_EventsHandler {...} Http_EventsHandler\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "监听不同HTTP事件的回调函数。"
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
        href: "/ref/system-network-api/network-api/network-c/network-module/capi-netstack/capi-netstack",
        children: "netstack"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "所在头文件："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/network-api/network-c/network-headerfile/capi-net-http-type-h/capi-net-http-type-h",
        children: "net_http_type.h"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "成员变量",
      children: "成员变量"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/system-network-api/network-api/network-c/network-headerfile/capi-net-http-type-h/capi-net-http-type-h#http_ondatareceivecallback",
              children: "Http_OnDataReceiveCallback"
            }), " onDataReceive"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["收到响应体时的回调函数，参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-api/network-c/network-headerfile/capi-net-http-type-h/capi-net-http-type-h#http_ondatareceivecallback",
              children: "Http_OnDataReceiveCallback"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-api/network-c/network-headerfile/capi-net-http-type-h/capi-net-http-type-h#http_onprogresscallback",
              children: "Http_OnProgressCallback"
            }), " onUploadProgress"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["上传时调用的回调函数，参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-api/network-c/network-headerfile/capi-net-http-type-h/capi-net-http-type-h#http_onprogresscallback",
              children: "Http_OnProgressCallback"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-api/network-c/network-headerfile/capi-net-http-type-h/capi-net-http-type-h#http_onprogresscallback",
              children: "Http_OnProgressCallback"
            }), " onDownloadProgress"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["下载时调用的回调函数，参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-api/network-c/network-headerfile/capi-net-http-type-h/capi-net-http-type-h#http_onprogresscallback",
              children: "Http_OnProgressCallback"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-api/network-c/network-headerfile/capi-net-http-type-h/capi-net-http-type-h#http_onheaderreceivecallback",
              children: "Http_OnHeaderReceiveCallback"
            }), " onHeadersReceive"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["收到header时的回调函数，参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-api/network-c/network-headerfile/capi-net-http-type-h/capi-net-http-type-h#http_onheaderreceivecallback",
              children: "Http_OnHeaderReceiveCallback"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-api/network-c/network-headerfile/capi-net-http-type-h/capi-net-http-type-h#http_onvoidcallback",
              children: "Http_OnVoidCallback"
            }), " onDataEnd"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["传输结束时的回调函数，参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-api/network-c/network-headerfile/capi-net-http-type-h/capi-net-http-type-h#http_onvoidcallback",
              children: "Http_OnVoidCallback"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-api/network-c/network-headerfile/capi-net-http-type-h/capi-net-http-type-h#http_onvoidcallback",
              children: "Http_OnVoidCallback"
            }), " onCanceled"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["请求被取消时的回调函数，参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-api/network-c/network-headerfile/capi-net-http-type-h/capi-net-http-type-h#http_onvoidcallback",
              children: "Http_OnVoidCallback"
            }), "。"]
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