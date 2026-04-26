"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["288560"], {
742662(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_network_api_remote_communication_api_remote_communication_c_remote_communication_struct_x_rcp_response_cookies_x_rcp_response_cookies_md_722_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-network-api-remote-communication-api-remote-communication-c-remote-communication-struct-x-rcp-response-cookies-x-rcp-response-cookies-md-722.json
var site_docs_ref_system_network_api_remote_communication_api_remote_communication_c_remote_communication_struct_x_rcp_response_cookies_x_rcp_response_cookies_md_722_namespaceObject = JSON.parse('{"id":"system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___response_cookies/x_rcp___response_cookies","title":"Rcp_ResponseCookies","description":"概述","source":"@site/docs-ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___response_cookies/x_rcp___response_cookies.md","sourceDirName":"system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___response_cookies","slug":"/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___response_cookies/x_rcp___response_cookies","permalink":"/harmonyos-docs-site/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___response_cookies/x_rcp___response_cookies","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":36,"frontMatter":{"title":"Rcp_ResponseCookies","sidebar_position":36,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___response_cookies","kit":"系统","last_updated":"2026-04-22","slug":"x_rcp___response_cookies"},"sidebar":"ref","previous":{"title":"Rcp_ResponseCallbackObject","permalink":"/harmonyos-docs-site/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___response_callback_object/x_rcp___response_callback_object"},"next":{"title":"Rcp_SecurityConfiguration","permalink":"/harmonyos-docs-site/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___security_configuration/x_rcp___security_configuration"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___response_cookies/x_rcp___response_cookies.md


const frontMatter = {
	title: 'Rcp_ResponseCookies',
	sidebar_position: 36,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___response_cookies',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'x_rcp___response_cookies'
};
const contentTitle = 'Rcp_ResponseCookies';

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
  "value": "结构体成员变量说明",
  "id": "结构体成员变量说明",
  "level": 2
}, {
  "value": "cookieAttributes",
  "id": "cookieattributes",
  "level": 3
}, {
  "value": "domain",
  "id": "domain",
  "level": 3
}, {
  "value": "expires",
  "id": "expires",
  "level": 3
}, {
  "value": "httpOnly",
  "id": "httponly",
  "level": 3
}, {
  "value": "maxAge",
  "id": "maxage",
  "level": 3
}, {
  "value": "name",
  "id": "name",
  "level": 3
}, {
  "value": "next",
  "id": "next",
  "level": 3
}, {
  "value": "originString",
  "id": "originstring",
  "level": 3
}, {
  "value": "path",
  "id": "path",
  "level": 3
}, {
  "value": "rawSize",
  "id": "rawsize",
  "level": 3
}, {
  "value": "sameSite",
  "id": "samesite",
  "level": 3
}, {
  "value": "secure",
  "id": "secure",
  "level": 3
}, {
  "value": "value",
  "id": "value",
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
        id: "rcp_responsecookies",
        children: "Rcp_ResponseCookies"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "响应Cookie。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview",
        children: "RemoteCommunication"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "所在头文件："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-headerfile/rcp_8h/rcp_8h",
        children: "rcp.h"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "成员变量",
      children: "成员变量"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: ["char * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#name",
              children: "name"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "响应Cookie名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["char * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#value",
              children: "value"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "响应Cookie值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["char * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#domain",
              children: "domain"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "响应Cookie域属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["char * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#path",
              children: "path"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "响应Cookie路径属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["char * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#expires",
              children: "expires"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "响应Cookie过期属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["uint64_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#maxage",
              children: "maxAge"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "响应Cookie maxAge属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["bool ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#secure",
              children: "secure"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "响应Cookie安全属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["bool ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#httponly",
              children: "httpOnly"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "响应Cookie httpOnly属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["char * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#samesite",
              children: "sameSite"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "响应Cookie sameSite属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["uint64_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rawsize",
              children: "rawSize"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此响应Cookie的原始大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["char * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#originstring",
              children: "originString"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "原始字符串。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_cookieattributes",
              children: "Rcp_CookieAttributes"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#cookieattributes",
              children: "cookieAttributes"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "响应Cookie中的所有属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___response_cookies/x_rcp___response_cookies",
              children: "Rcp_ResponseCookies"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#next",
              children: "next"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["链式存储。指向下一个", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___response_cookies/x_rcp___response_cookies",
              children: "Rcp_ResponseCookies"
            }), "的指针。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "结构体成员变量说明",
      children: "结构体成员变量说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cookieattributes",
      children: "cookieAttributes"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Rcp_CookieAttributes* Rcp_ResponseCookies::cookieAttributes\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "响应Cookie中的所有属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "domain",
      children: "domain"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "char* Rcp_ResponseCookies::domain\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "响应Cookie域属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "expires",
      children: "expires"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "char* Rcp_ResponseCookies::expires\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "响应Cookie过期属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "httponly",
      children: "httpOnly"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "bool Rcp_ResponseCookies::httpOnly\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "响应Cookie httpOnly属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "maxage",
      children: "maxAge"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uint64_t Rcp_ResponseCookies::maxAge\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "响应Cookie maxAge属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "name",
      children: "name"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "char* Rcp_ResponseCookies::name\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "响应Cookie名称。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "next",
      children: "next"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "struct Rcp_ResponseCookies* Rcp_ResponseCookies::next\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["链式存储。指向下一个", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___response_cookies/x_rcp___response_cookies",
        children: "Rcp_ResponseCookies"
      }), "的指针。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "originstring",
      children: "originString"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "char* Rcp_ResponseCookies::originString\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "原始字符串。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "path",
      children: "path"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "char* Rcp_ResponseCookies::path\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "响应Cookie路径属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rawsize",
      children: "rawSize"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uint64_t Rcp_ResponseCookies::rawSize\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此响应Cookie的原始大小。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "samesite",
      children: "sameSite"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "char* Rcp_ResponseCookies::sameSite\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "响应Cookie sameSite属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "secure",
      children: "secure"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "bool Rcp_ResponseCookies::secure\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "响应Cookie安全属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "value",
      children: "value"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "char* Rcp_ResponseCookies::value\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "响应Cookie值。"
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