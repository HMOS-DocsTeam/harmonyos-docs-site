"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["56873"], {
281443(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_network_api_network_api_network_c_network_struct_capi_netstack_http_response_capi_netstack_http_response_md_ad7_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-network-api-network-api-network-c-network-struct-capi-netstack-http-response-capi-netstack-http-response-md-ad7.json
var site_docs_ref_system_network_api_network_api_network_c_network_struct_capi_netstack_http_response_capi_netstack_http_response_md_ad7_namespaceObject = JSON.parse('{"id":"system-network-api/network-api/network-c/network-struct/capi-netstack-http-response/capi-netstack-http-response","title":"Http_Response","description":"概述","source":"@site/docs-ref/system-network-api/network-api/network-c/network-struct/capi-netstack-http-response/capi-netstack-http-response.md","sourceDirName":"system-network-api/network-api/network-c/network-struct/capi-netstack-http-response","slug":"/system-network-api/network-api/network-c/network-struct/capi-netstack-http-response/capi-netstack-http-response","permalink":"/harmonyos-docs-site/ref/system-network-api/network-api/network-c/network-struct/capi-netstack-http-response/capi-netstack-http-response","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":31,"frontMatter":{"title":"Http_Response","sidebar_position":31,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack-http-response","kit":"系统","last_updated":"2026-04-22","slug":"capi-netstack-http-response"},"sidebar":"ref","previous":{"title":"Http_RequestOptions","permalink":"/harmonyos-docs-site/ref/system-network-api/network-api/network-c/network-struct/capi-netstack-http-requestoptions/capi-netstack-http-requestoptions"},"next":{"title":"Http_Request","permalink":"/harmonyos-docs-site/ref/system-network-api/network-api/network-c/network-struct/capi-netstack-http-request/capi-netstack-http-request"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-network-api/network-api/network-c/network-struct/capi-netstack-http-response/capi-netstack-http-response.md


const frontMatter = {
	title: 'Http_Response',
	sidebar_position: 31,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack-http-response',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'capi-netstack-http-response'
};
const contentTitle = 'Http_Response';

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
}, {
  "value": "成员函数",
  "id": "成员函数",
  "level": 3
}, {
  "value": "成员函数说明",
  "id": "成员函数说明",
  "level": 2
}, {
  "value": "destroyResponse()",
  "id": "destroyresponse",
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
        id: "http_response",
        children: "Http_Response"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct Http_Response {...} Http_Response\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义HTTP响应的结构体。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/system-network-api/network-api/network-c/network-struct/capi-netstack-http-buffer/capi-netstack-http-buffer",
              children: "Http_Buffer"
            }), " body"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["HTTP请求响应的数据，参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-api/network-c/network-struct/capi-netstack-http-buffer/capi-netstack-http-buffer",
              children: "Http_Buffer"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-api/network-c/network-headerfile/capi-net-http-type-h/capi-net-http-type-h#http_responsecode",
              children: "Http_ResponseCode"
            }), " responseCode"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["HTTP请求响应码，参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-api/network-c/network-headerfile/capi-net-http-type-h/capi-net-http-type-h#http_responsecode",
              children: "Http_ResponseCode"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-api/network-c/network-struct/capi-netstack-http-headers/capi-netstack-http-headers",
              children: "Http_Headers"
            }), " *headers"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["HTTP响应的头，指向Http_Headers的指针，参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-api/network-c/network-struct/capi-netstack-http-headers/capi-netstack-http-headers",
              children: "Http_Headers"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "char *cookies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP响应Cookies。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-api/network-c/network-struct/capi-netstack-http-performancetiming/capi-netstack-http-performancetiming",
              children: "Http_PerformanceTiming"
            }), " *performanceTiming"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["HTTP响应时间信息，指向Http_PerformanceTiming的指针，参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-api/network-c/network-struct/capi-netstack-http-performancetiming/capi-netstack-http-performancetiming",
              children: "Http_PerformanceTiming"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "成员函数",
      children: "成员函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#destroyresponse",
              children: "void (*destroyResponse)(struct Http_Response **response)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁HTTP响应的回调函数"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "成员函数说明",
      children: "成员函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "destroyresponse",
      children: "destroyResponse()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void (*destroyResponse)(struct Http_Response **response)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "销毁HTTP响应的回调函数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-api/network-c/network-struct/capi-netstack-http-response/capi-netstack-http-response",
              children: "Http_Response"
            }), " **response"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["要销毁的HTTP响应，指向Http_Response的指针，参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-api/network-c/network-struct/capi-netstack-http-response/capi-netstack-http-response",
              children: "Http_Response"
            }), "。"]
          })]
        })
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