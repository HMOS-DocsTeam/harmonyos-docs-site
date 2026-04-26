"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["30647"], {
477583(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_security_api_online_authentication_api_online_authentication_c_onlineauthentication_capi_headerandstruct_onlineauthentication_capi_struct_x_f_i_d_o_2_authenticator_response_x_f_i_d_o_2_authenticator_response_md_e6c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-security-api-online-authentication-api-online-authentication-c-onlineauthentication-capi-headerandstruct-onlineauthentication-capi-struct-x-f-i-d-o-2-authenticator-response-x-f-i-d-o-2-authenticator-response-md-e6c.json
var site_docs_ref_system_security_api_online_authentication_api_online_authentication_c_onlineauthentication_capi_headerandstruct_onlineauthentication_capi_struct_x_f_i_d_o_2_authenticator_response_x_f_i_d_o_2_authenticator_response_md_e6c_namespaceObject = JSON.parse('{"id":"system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_headerandstruct/onlineauthentication_capi_struct/x_f_i_d_o2___authenticator_response/x_f_i_d_o2___authenticator_response","title":"FIDO2_AuthenticatorResponse","description":"概述","source":"@site/docs-ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_headerandstruct/onlineauthentication_capi_struct/x_f_i_d_o2___authenticator_response/x_f_i_d_o2___authenticator_response.md","sourceDirName":"system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_headerandstruct/onlineauthentication_capi_struct/x_f_i_d_o2___authenticator_response","slug":"/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_headerandstruct/onlineauthentication_capi_struct/x_f_i_d_o2___authenticator_response/x_f_i_d_o2___authenticator_response","permalink":"/harmonyos-docs-site/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_headerandstruct/onlineauthentication_capi_struct/x_f_i_d_o2___authenticator_response/x_f_i_d_o2___authenticator_response","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"FIDO2_AuthenticatorResponse","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_i_d_o2___authenticator_response","kit":"系统","last_updated":"2026-04-20","slug":"x_f_i_d_o2___authenticator_response"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_headerandstruct/onlineauthentication_capi_struct/x_f_i_d_o2___authenticator_response/x_f_i_d_o2___authenticator_response.md


const frontMatter = {
	title: 'FIDO2_AuthenticatorResponse',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_i_d_o2___authenticator_response',
	kit: '系统',
	last_updated: '2026-04-20',
	slug: 'x_f_i_d_o2___authenticator_response'
};
const contentTitle = 'FIDO2_AuthenticatorResponse';

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
  "value": "authenticatorData",
  "id": "authenticatordata",
  "level": 3
}, {
  "value": "clientDataJson",
  "id": "clientdatajson",
  "level": 3
}, {
  "value": "signature",
  "id": "signature",
  "level": 3
}, {
  "value": "userHandle",
  "id": "userhandle",
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
        id: "fido2_authenticatorresponse",
        children: "FIDO2_AuthenticatorResponse"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义获取认证器断言响应的结构体。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey",
        children: "FIDO2"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_headerandstruct/onlineauthentication_capi_struct/x_uint8_buff/x_uint8_buff",
              children: "Uint8Buff"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#authenticatordata",
              children: "authenticatorData"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "身份认证器数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_headerandstruct/onlineauthentication_capi_struct/x_uint8_buff/x_uint8_buff",
              children: "Uint8Buff"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#signature",
              children: "signature"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "签名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_headerandstruct/onlineauthentication_capi_struct/x_uint8_buff/x_uint8_buff",
              children: "Uint8Buff"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#userhandle",
              children: "userHandle"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户句柄（用户ID）。可选。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_headerandstruct/onlineauthentication_capi_struct/x_uint8_buff/x_uint8_buff",
              children: "Uint8Buff"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#clientdatajson",
              children: "clientDataJson"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取客户端数据，表示WebAuthn依赖方和客户端的上下文绑定，包含类型、挑战值及源等数据。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "结构体成员变量说明",
      children: "结构体成员变量说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "authenticatordata",
      children: "authenticatorData"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Uint8Buff FIDO2_AuthenticatorResponse::authenticatorData\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "身份认证器数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "clientdatajson",
      children: "clientDataJson"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Uint8Buff FIDO2_AuthenticatorResponse::clientDataJson\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取客户端数据，表示WebAuthn依赖方和客户端的上下文绑定，包含类型、挑战值及源等数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "signature",
      children: "signature"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Uint8Buff FIDO2_AuthenticatorResponse::signature\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "签名。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "userhandle",
      children: "userHandle"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Uint8Buff FIDO2_AuthenticatorResponse::userHandle\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户句柄。可选。"
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