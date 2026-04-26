"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["216960"], {
24700(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_security_api_online_authentication_api_online_authentication_c_onlineauthentication_capi_struct_x_f_i_d_o_2_authenticator_attestation_response_x_f_i_d_o_2_authenticator_attestation_response_md_d3d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-security-api-online-authentication-api-online-authentication-c-onlineauthentication-capi-struct-x-f-i-d-o-2-authenticator-attestation-response-x-f-i-d-o-2-authenticator-attestation-response-md-d3d.json
var site_docs_ref_system_security_api_online_authentication_api_online_authentication_c_onlineauthentication_capi_struct_x_f_i_d_o_2_authenticator_attestation_response_x_f_i_d_o_2_authenticator_attestation_response_md_d3d_namespaceObject = JSON.parse('{"id":"system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___authenticator_attestation_response/x_f_i_d_o2___authenticator_attestation_response","title":"FIDO2_AuthenticatorAttestationResponse","description":"概述","source":"@site/docs-ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___authenticator_attestation_response/x_f_i_d_o2___authenticator_attestation_response.md","sourceDirName":"system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___authenticator_attestation_response","slug":"/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___authenticator_attestation_response/x_f_i_d_o2___authenticator_attestation_response","permalink":"/harmonyos-docs-site/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___authenticator_attestation_response/x_f_i_d_o2___authenticator_attestation_response","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"FIDO2_AuthenticatorAttestationResponse","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_i_d_o2___authenticator_attestation_response","kit":"系统","last_updated":"2026-04-22","slug":"x_f_i_d_o2___authenticator_attestation_response"},"sidebar":"ref","previous":{"title":"FIDO2_AttestationFormatsArray","permalink":"/harmonyos-docs-site/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___attestation_formats_array/x_f_i_d_o2___attestation_formats_array"},"next":{"title":"FIDO2_AuthenticatorMetadata","permalink":"/harmonyos-docs-site/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___authenticator_metadata/x_f_i_d_o2___authenticator_metadata"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___authenticator_attestation_response/x_f_i_d_o2___authenticator_attestation_response.md


const frontMatter = {
	title: 'FIDO2_AuthenticatorAttestationResponse',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_i_d_o2___authenticator_attestation_response',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'x_f_i_d_o2___authenticator_attestation_response'
};
const contentTitle = 'FIDO2_AuthenticatorAttestationResponse';

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
  "value": "attestationObject",
  "id": "attestationobject",
  "level": 3
}, {
  "value": "authenticatorData",
  "id": "authenticatordata",
  "level": 3
}, {
  "value": "clientDataJson",
  "id": "clientdatajson",
  "level": 3
}, {
  "value": "publicKey",
  "id": "publickey",
  "level": 3
}, {
  "value": "publicKeyAlgorithm",
  "id": "publickeyalgorithm",
  "level": 3
}, {
  "value": "transports",
  "id": "transports",
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
        id: "fido2_authenticatorattestationresponse",
        children: "FIDO2_AuthenticatorAttestationResponse"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "认证器声明响应。"
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
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_uint8_buff/x_uint8_buff",
              children: "Uint8Buff"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#attestationobject",
              children: "attestationObject"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "声明对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_uint8_buff/x_uint8_buff",
              children: "Uint8Buff"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#clientdatajson",
              children: "clientDataJson"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取客户端数据，表示WebAuthn依赖方和客户端的上下文绑定，包含类型、挑战值及源等数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_uint8_buff/x_uint8_buff",
              children: "Uint8Buff"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#publickey",
              children: "publicKey"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "publicKey凭证请求的选项，字节流。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_uint8_buff/x_uint8_buff",
              children: "Uint8Buff"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#authenticatordata",
              children: "authenticatorData"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "认证器数据，字节流。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#fido2_algorithm-1",
              children: "FIDO2_Algorithm"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#publickeyalgorithm",
              children: "publicKeyAlgorithm"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "密码算法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___authenticator_transport_array/x_f_i_d_o2___authenticator_transport_array",
              children: "FIDO2_AuthenticatorTransportArray"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#transports",
              children: "transports"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义身份认证器访问类型（USB、NFC、蓝牙）。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "结构体成员变量说明",
      children: "结构体成员变量说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "attestationobject",
      children: "attestationObject"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Uint8Buff FIDO2_AuthenticatorAttestationResponse::attestationObject\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "声明对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "authenticatordata",
      children: "authenticatorData"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Uint8Buff FIDO2_AuthenticatorAttestationResponse::authenticatorData\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "认证器数据，字节流。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "clientdatajson",
      children: "clientDataJson"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Uint8Buff FIDO2_AuthenticatorAttestationResponse::clientDataJson\n"
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
      id: "publickey",
      children: "publicKey"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Uint8Buff FIDO2_AuthenticatorAttestationResponse::publicKey\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "publicKey凭证请求的选项，字节流。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "publickeyalgorithm",
      children: "publicKeyAlgorithm"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FIDO2_Algorithm FIDO2_AuthenticatorAttestationResponse::publicKeyAlgorithm\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "密码算法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "transports",
      children: "transports"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FIDO2_AuthenticatorTransportArray FIDO2_AuthenticatorAttestationResponse::transports\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义身份认证器访问类型（USB、NFC、蓝牙）。"
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