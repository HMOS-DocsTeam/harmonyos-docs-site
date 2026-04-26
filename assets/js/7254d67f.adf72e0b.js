"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["514635"], {
693932(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_security_api_online_authentication_api_online_authentication_c_onlineauthentication_capi_header_onlineauthentication_capi_header_fido_2_onlineauthentication_capi_header_fido_2_md_725_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-security-api-online-authentication-api-online-authentication-c-onlineauthentication-capi-header-onlineauthentication-capi-header-fido-2-onlineauthentication-capi-header-fido-2-md-725.json
var site_docs_ref_system_security_api_online_authentication_api_online_authentication_c_onlineauthentication_capi_header_onlineauthentication_capi_header_fido_2_onlineauthentication_capi_header_fido_2_md_725_namespaceObject = JSON.parse('{"id":"system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_header/onlineauthentication_capi_header_fido2/onlineauthentication_capi_header_fido2","title":"fido2_api.h","description":"概述","source":"@site/docs-ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_header/onlineauthentication_capi_header_fido2/onlineauthentication_capi_header_fido2.md","sourceDirName":"system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_header/onlineauthentication_capi_header_fido2","slug":"/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_header/onlineauthentication_capi_header_fido2/onlineauthentication_capi_header_fido2","permalink":"/harmonyos-docs-site/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_header/onlineauthentication_capi_header_fido2/onlineauthentication_capi_header_fido2","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"fido2_api.h","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/onlineauthentication_capi_header_fido2","kit":"系统","last_updated":"2026-04-22","slug":"onlineauthentication_capi_header_fido2"},"sidebar":"ref","previous":{"title":"通行密钥","permalink":"/harmonyos-docs-site/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey"},"next":{"title":"AuthenticationExtensionsClientOutputs","permalink":"/harmonyos-docs-site/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_authentication_extensions_client_outputs/x_authentication_extensions_client_outputs"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_header/onlineauthentication_capi_header_fido2/onlineauthentication_capi_header_fido2.md


const frontMatter = {
	title: 'fido2_api.h',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/onlineauthentication_capi_header_fido2',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'onlineauthentication_capi_header_fido2'
};
const contentTitle = 'fido2_api.h';

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
  "value": "结构体",
  "id": "结构体",
  "level": 3
}, {
  "value": "类型定义",
  "id": "类型定义",
  "level": 3
}, {
  "value": "枚举",
  "id": "枚举",
  "level": 3
}, {
  "value": "函数",
  "id": "函数",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
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
        id: "fido2_apih",
        children: "fido2_api.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义身份认证扩展的接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libfido2_ndk.z.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <OnlineAuthenticationKit/fido2_api.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Security.FIDO2"]
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
        children: "Passkey"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "结构体",
      children: "结构体"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_uint8_buff/x_uint8_buff",
              children: "Uint8Buff"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义uint8_t字节流。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_authentication_extensions_client_outputs/x_authentication_extensions_client_outputs",
              children: "AuthenticationExtensionsClientOutputs"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "身份认证扩展。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___authenticator_response/x_f_i_d_o2___authenticator_response",
              children: "FIDO2_AuthenticatorResponse"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义获取认证器断言响应的结构体。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___public_key_assertion_credential/x_f_i_d_o2___public_key_assertion_credential",
              children: "FIDO2_PublicKeyAssertionCredential"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义获取认证结果结构体。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___authenticator_transport_array/x_f_i_d_o2___authenticator_transport_array",
              children: "FIDO2_AuthenticatorTransportArray"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "认证器传输方式数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___authenticator_attestation_response/x_f_i_d_o2___authenticator_attestation_response",
              children: "FIDO2_AuthenticatorAttestationResponse"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "认证器声明响应。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___public_key_attestation_credential/x_f_i_d_o2___public_key_attestation_credential",
              children: "FIDO2_PublicKeyAttestationCredential"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义获取注册结果结构体。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___authenticator_selection_criteria/x_f_i_d_o2___authenticator_selection_criteria",
              children: "FIDO2_AuthenticatorSelectionCriteria"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "由webAuthn依赖方（即接入协议的应用或网页）指定，与认证器有关。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___public_key_credential_descriptor/x_f_i_d_o2___public_key_credential_descriptor",
              children: "FIDO2_PublicKeyCredentialDescriptor"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于注册或认证凭据的参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___public_key_credential_parameters/x_f_i_d_o2___public_key_credential_parameters",
              children: "FIDO2_PublicKeyCredentialParameters"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "认证凭据的附加参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___public_key_credential_user_entity/x_f_i_d_o2___public_key_credential_user_entity",
              children: "FIDO2_PublicKeyCredentialUserEntity"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建新凭据时用户的属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___public_key_credential_rp_entity/x_f_i_d_o2___public_key_credential_rp_entity",
              children: "FIDO2_PublicKeyCredentialRpEntity"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建新凭据时依赖方的属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___public_key_credential_descriptor_array/x_f_i_d_o2___public_key_credential_descriptor_array",
              children: "FIDO2_PublicKeyCredentialDescriptorArray"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PublicKey凭证描述符数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___public_key_credential_hint_array/x_f_i_d_o2___public_key_credential_hint_array",
              children: "FIDO2_PublicKeyCredentialHintArray"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "认证方式指示数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___public_key_credential_request_options/x_f_i_d_o2___public_key_credential_request_options",
              children: "FIDO2_PublicKeyCredentialRequestOptions"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义通行密钥认证请求参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___credential_creation_option_array/x_f_i_d_o2___credential_creation_option_array",
              children: "FIDO2_CredentialCreationOptionArray"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "认证凭据的附加参数数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___attestation_formats_array/x_f_i_d_o2___attestation_formats_array",
              children: "FIDO2_AttestationFormatsArray"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "依赖方的数组可以使用此成员指定一个关于认证方使用的证明语句格式的首选项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___public_key_credential_creation_options/x_f_i_d_o2___public_key_credential_creation_options",
              children: "FIDO2_PublicKeyCredentialCreationOptions"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建新的认证凭据的选项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___credential_creation_options/x_f_i_d_o2___credential_creation_options",
              children: "FIDO2_CredentialCreationOptions"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "凭据请求的选项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___authenticator_metadata/x_f_i_d_o2___authenticator_metadata",
              children: "FIDO2_AuthenticatorMetadata"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "认证器元数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___credential_request_options/x_f_i_d_o2___credential_request_options",
              children: "FIDO2_CredentialRequestOptions"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "认证信息字典对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___authenticator_metadata_array/x_f_i_d_o2___authenticator_metadata_array",
              children: "FIDO2_AuthenticatorMetadataArray"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "描述支持的认证器数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___capability/x_f_i_d_o2___capability",
              children: "FIDO2_Capability"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通行密钥能力的结构体。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___capability_array/x_f_i_d_o2___capability_array",
              children: "FIDO2_CapabilityArray"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "描述能力数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___token_binding/x_f_i_d_o2___token_binding",
              children: "FIDO2_TokenBinding"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Token binding协议，用于客户端与依赖方通信。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "类型定义",
      children: "类型定义"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_uint8_buff/x_uint8_buff",
              children: "Uint8Buff"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#uint8buff",
              children: "Uint8Buff"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义uint8_t字节流。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#fido2_tokenbindingstatus-1",
              children: "FIDO2_TokenBindingStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#fido2_tokenbindingstatus",
              children: "FIDO2_TokenBindingStatus"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TokenBinding协议的状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#fido2_attestationconveyancepreference-1",
              children: "FIDO2_AttestationConveyancePreference"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#fido2_attestationconveyancepreference",
              children: "FIDO2_AttestationConveyancePreference"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "供WebAuthn依赖方在生成凭据时参考，以指定凭据传递的首选项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#fido2_userverificationrequirement-1",
              children: "FIDO2_UserVerificationRequirement"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#fido2_userverificationrequirement",
              children: "FIDO2_UserVerificationRequirement"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "依赖方可能需要对某些操作进行用户鉴权（认证当前用户是否为用户）， 但不需要对其他操作进行认证。定义枚举类型是为了区分不同的需求级别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#fido2_authenticatorattachment-1",
              children: "FIDO2_AuthenticatorAttachment"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#fido2_authenticatorattachment",
              children: "FIDO2_AuthenticatorAttachment"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "认证器信息（平台、漫游）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#fido2_authenticatortransport-1",
              children: "FIDO2_AuthenticatorTransport"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#fido2_authenticatortransport",
              children: "FIDO2_AuthenticatorTransport"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "认证器传输方式的枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#fido2_algorithm-1",
              children: "FIDO2_Algorithm"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#fido2_algorithm",
              children: "FIDO2_Algorithm"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "加密算法的枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#fido2_publickeycredentialhint-1",
              children: "FIDO2_PublicKeyCredentialHint"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#fido2_publickeycredentialhint",
              children: "FIDO2_PublicKeyCredentialHint"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "认证方式指示的枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#fido2_publickeycredentialtype-1",
              children: "FIDO2_PublicKeyCredentialType"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#fido2_publickeycredentialtype",
              children: "FIDO2_PublicKeyCredentialType"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "公钥凭据类型的枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#fido2_uvm-1",
              children: "FIDO2_Uvm"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#fido2_uvm",
              children: "FIDO2_Uvm"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UVM的枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#fido2_clientcapability-1",
              children: "FIDO2_ClientCapability"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#fido2_clientcapability",
              children: "FIDO2_ClientCapability"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "客户端能力的枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#fido2_credentialmediationrequirement-1",
              children: "FIDO2_CredentialMediationRequirement"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#fido2_credentialmediationrequirement",
              children: "FIDO2_CredentialMediationRequirement"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户介入要求的枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#fido2_errorcode-1",
              children: "FIDO2_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#fido2_errorcode",
              children: "FIDO2_ErrorCode"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "错误码定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_authentication_extensions_client_outputs/x_authentication_extensions_client_outputs",
              children: "AuthenticationExtensionsClientOutputs"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#authenticationextensionsclientoutputs",
              children: "AuthenticationExtensionsClientOutputs"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "身份认证扩展。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___authenticator_response/x_f_i_d_o2___authenticator_response",
              children: "FIDO2_AuthenticatorResponse"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#fido2_authenticatorresponse",
              children: "FIDO2_AuthenticatorResponse"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义获取认证器断言响应的结构体。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___public_key_assertion_credential/x_f_i_d_o2___public_key_assertion_credential",
              children: "FIDO2_PublicKeyAssertionCredential"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#fido2_publickeyassertioncredential",
              children: "FIDO2_PublicKeyAssertionCredential"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义获取认证结果结构体。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___authenticator_transport_array/x_f_i_d_o2___authenticator_transport_array",
              children: "FIDO2_AuthenticatorTransportArray"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#fido2_authenticatortransportarray",
              children: "FIDO2_AuthenticatorTransportArray"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "认证器传输方式数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___authenticator_attestation_response/x_f_i_d_o2___authenticator_attestation_response",
              children: "FIDO2_AuthenticatorAttestationResponse"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#fido2_authenticatorattestationresponse",
              children: "FIDO2_AuthenticatorAttestationResponse"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "认证器声明响应。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___public_key_attestation_credential/x_f_i_d_o2___public_key_attestation_credential",
              children: "FIDO2_PublicKeyAttestationCredential"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#fido2_publickeyattestationcredential",
              children: "FIDO2_PublicKeyAttestationCredential"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义获取注册结果结构体。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___authenticator_selection_criteria/x_f_i_d_o2___authenticator_selection_criteria",
              children: "FIDO2_AuthenticatorSelectionCriteria"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#fido2_authenticatorselectioncriteria",
              children: "FIDO2_AuthenticatorSelectionCriteria"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "由webAuthn依赖方指定，与认证器有关。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___public_key_credential_descriptor/x_f_i_d_o2___public_key_credential_descriptor",
              children: "FIDO2_PublicKeyCredentialDescriptor"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#fido2_publickeycredentialdescriptor",
              children: "FIDO2_PublicKeyCredentialDescriptor"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于注册或认证凭据的参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___public_key_credential_parameters/x_f_i_d_o2___public_key_credential_parameters",
              children: "FIDO2_PublicKeyCredentialParameters"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#fido2_publickeycredentialparameters",
              children: "FIDO2_PublicKeyCredentialParameters"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "认证凭据的附加参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___public_key_credential_user_entity/x_f_i_d_o2___public_key_credential_user_entity",
              children: "FIDO2_PublicKeyCredentialUserEntity"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#fido2_publickeycredentialuserentity",
              children: "FIDO2_PublicKeyCredentialUserEntity"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建新凭据时用户的属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___public_key_credential_rp_entity/x_f_i_d_o2___public_key_credential_rp_entity",
              children: "FIDO2_PublicKeyCredentialRpEntity"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#fido2_publickeycredentialrpentity",
              children: "FIDO2_PublicKeyCredentialRpEntity"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建新凭据时依赖方的属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___public_key_credential_descriptor_array/x_f_i_d_o2___public_key_credential_descriptor_array",
              children: "FIDO2_PublicKeyCredentialDescriptorArray"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#fido2_publickeycredentialdescriptorarray",
              children: "FIDO2_PublicKeyCredentialDescriptorArray"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PublicKey凭证描述符数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___public_key_credential_hint_array/x_f_i_d_o2___public_key_credential_hint_array",
              children: "FIDO2_PublicKeyCredentialHintArray"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#fido2_publickeycredentialhintarray",
              children: "FIDO2_PublicKeyCredentialHintArray"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "认证方式指示数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___public_key_credential_request_options/x_f_i_d_o2___public_key_credential_request_options",
              children: "FIDO2_PublicKeyCredentialRequestOptions"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#fido2_publickeycredentialrequestoptions",
              children: "FIDO2_PublicKeyCredentialRequestOptions"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义通行密钥认证请求参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___credential_creation_option_array/x_f_i_d_o2___credential_creation_option_array",
              children: "FIDO2_CredentialCreationOptionArray"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#fido2_credentialcreationoptionarray",
              children: "FIDO2_CredentialCreationOptionArray"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "认证凭据的附加参数数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___attestation_formats_array/x_f_i_d_o2___attestation_formats_array",
              children: "FIDO2_AttestationFormatsArray"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#fido2_attestationformatsarray",
              children: "FIDO2_AttestationFormatsArray"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "依赖方的数组可以使用此成员指定一个关于认证方使用的证明语句格式的首选项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___public_key_credential_creation_options/x_f_i_d_o2___public_key_credential_creation_options",
              children: "FIDO2_PublicKeyCredentialCreationOptions"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#fido2_publickeycredentialcreationoptions",
              children: "FIDO2_PublicKeyCredentialCreationOptions"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建新的认证凭据的选项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___credential_creation_options/x_f_i_d_o2___credential_creation_options",
              children: "FIDO2_CredentialCreationOptions"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#fido2_credentialcreationoptions",
              children: "FIDO2_CredentialCreationOptions"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "凭据请求的选项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___authenticator_metadata/x_f_i_d_o2___authenticator_metadata",
              children: "FIDO2_AuthenticatorMetadata"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#fido2_authenticatormetadata",
              children: "FIDO2_AuthenticatorMetadata"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "认证器元数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___credential_request_options/x_f_i_d_o2___credential_request_options",
              children: "FIDO2_CredentialRequestOptions"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#fido2_credentialrequestoptions",
              children: "FIDO2_CredentialRequestOptions"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "认证信息字典对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___authenticator_metadata_array/x_f_i_d_o2___authenticator_metadata_array",
              children: "FIDO2_AuthenticatorMetadataArray"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#fido2_authenticatormetadataarray",
              children: "FIDO2_AuthenticatorMetadataArray"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "描述支持的认证器数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___capability/x_f_i_d_o2___capability",
              children: "FIDO2_Capability"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#fido2_capability",
              children: "FIDO2_Capability"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通行密钥能力的结构体。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___capability_array/x_f_i_d_o2___capability_array",
              children: "FIDO2_CapabilityArray"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#fido2_capabilityarray",
              children: "FIDO2_CapabilityArray"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "描述能力数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___token_binding/x_f_i_d_o2___token_binding",
              children: "FIDO2_TokenBinding"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#fido2_tokenbinding",
              children: "FIDO2_TokenBinding"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Token binding（协议），用于客户端与依赖方通信。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#fido2_tokenbindingstatus-1",
              children: "FIDO2_TokenBindingStatus"
            }), " { FIDO2_PRESENT = 0, FIDO2_SUPPORTED = 1 }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TokenBinding协议的状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#fido2_attestationconveyancepreference-1",
              children: "FIDO2_AttestationConveyancePreference"
            }), " { FIDO2_NONE = 0, FIDO2_INDIRECT = 1, FIDO2_DIRECT = 2, FIDO2_ENTERPRISE = 3 }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "供WebAuthn依赖方在生成凭据时参考，以指定凭据传递的首选项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#fido2_userverificationrequirement-1",
              children: "FIDO2_UserVerificationRequirement"
            }), " { FIDO2_REQUIRED = 0, FIDO2_PREFERRED = 1, FIDO2_DISCOURAGED = 2 }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "依赖方可能需要对某些操作进行用户鉴权（认证当前用户是否为用户）， 但不需要对其他操作进行认证。定义枚举类型是为了区分不同的需求级别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#fido2_authenticatorattachment-1",
              children: "FIDO2_AuthenticatorAttachment"
            }), " { FIDO2_PLATFORM = 0, FIDO2_CROSS_PLATFORM = 1 }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "认证器信息（平台、漫游）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#fido2_authenticatortransport-1",
              children: "FIDO2_AuthenticatorTransport"
            }), " {  FIDO2_USB = 0, FIDO2_NFC = 1, FIDO2_BLE = 2, FIDO2_SMART_CARD = 3,  FIDO2_HYBRID = 4, FIDO2_INTERNAL = 5  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "认证器传输方式的枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#fido2_algorithm-1",
              children: "FIDO2_Algorithm"
            }), " {  FIDO2_ES256 = -7, FIDO2_ES384 = -35, FIDO2_ES512 = -36, FIDO2_RS256 = -257,  FIDO2_RS384 = -258, FIDO2_RS512 = -259, FIDO2_PS256 = -37, FIDO2_PS384 = -38,  FIDO2_PS512 = -39  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "算法的枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#fido2_publickeycredentialhint-1",
              children: "FIDO2_PublicKeyCredentialHint"
            }), " { FIDO2_SECURITY_KEY = 0, FIDO2_CLIENT_DEVICE = 1, FIDO2_HINT_HYBRID = 2 }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "认证方式指示的枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#fido2_publickeycredentialtype-1",
              children: "FIDO2_PublicKeyCredentialType"
            }), " { FIDO2_PUBLIC_KEY = 0 }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "公钥凭据类型的枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#fido2_uvm-1",
              children: "FIDO2_Uvm"
            }), " { FIDO2_UVM_FINGERPRINT = 2, FIDO2_UVM_PIN = 4, FIDO2_UVM_FACEPRINT = 16 }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UVM的枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#fido2_clientcapability-1",
              children: "FIDO2_ClientCapability"
            }), " {  FIDO2_CONDITIONAL_CREATE = 0, FIDO2_CONDITIONAL_GET = 1, FIDO2_HYBRID_TRANSPORT = 2, FIDO2_PASSKEY_PLATFORM_AUTHENTICATOR = 3,  FIDO2_USER_VERIFYING_PLATFORM_AUTHENTICATOR = 4, FIDO2_RELATED_ORIGINS = 5, FIDO2_SIGNAL_ALL_ACCEPTED_CREDENTIALS = 6, FIDO2_SIGNAL_CURRENT_USER_DETAILS = 7,  FIDO2_SIGNAL_UNKNOWN_CREDENTIAL = 8, FIDO2_EXTENSION_UVI = 9  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "客户端能力的枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#fido2_credentialmediationrequirement-1",
              children: "FIDO2_CredentialMediationRequirement"
            }), " { FIDO2_SILENT = 0, FIDO2_OPTIONAL = 1, FIDO2_CONDITIONAL = 2, FIDO2_MEDIATION_REQUIRED = 3 }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户介入要求的枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#fido2_errorcode-1",
              children: "FIDO2_ErrorCode"
            }), " {  FIDO2_SUCCESS = 0, FIDO2_PERMISSION_DENIED = 201, FIDO2_DEVICE_NOT_SUPPORT = 801, FIDO2_NOT_SUPPORT = 1021300001, FIDO2_INVALID_STATE = 1021300002,  FIDO2_INTEGRITY_CHECK_FAILED = 1021300003, FIDO2_USER_ABORT = 1021300004, FIDO2_TIMEOUT = 1021300005, FIDO2_ENCODING_ERROR = 1021300006,  FIDO2_UNKNOWN_ERROR = 1021300007, FIDO2_CONSTRAINT_ERROR = 1021300008, FIDO2_DATA_ERROR = 1021300009, FIDO2_USER_REJECTS = 1021300010,  FIDO2_CONNECT_SERVICE_FAILED = 1021300011, FIDO2_MAX_CRED_NUM_REACHED = 1021300012, FIDO2_INVALID_CTAP_COMMAND = 1021310001, FIDO2_INVALID_PARAMETERS = 1021310002, FIDO2_INVALID_MESSAGE_OR_ATTRIBUTE_LENGTH = 1021310003,  FIDO2_INVALID_CBOR_OR_UNPREDICTABLE = 1021310004, FIDO2_PARSE_CBOR_FAILED = 1021310005, FIDO2_INVALID_CREDENTIALS = 1021310006, FIDO2_NOT_ALLOWED = 1021310007,  FIDO2_USER_VERIFICATION_FAILED = 1021310008, FIDO2_OTHER_ERROR = 1021310009  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "错误码定义。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: ["void ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#hms_fido2_initcreationoptions",
              children: "HMS_FIDO2_initCreationOptions"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___credential_creation_options/x_f_i_d_o2___credential_creation_options",
              children: "FIDO2_CredentialCreationOptions"
            }), " *options)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "初始化FIDO2_CredentialCreationOptions结构。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["void ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#hms_fido2_inittokenbinding",
              children: "HMS_FIDO2_initTokenBinding"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___token_binding/x_f_i_d_o2___token_binding",
              children: "FIDO2_TokenBinding"
            }), " *tokenBinding)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "初始化FIDO2_TokenBinding结构体。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["void ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#hms_fido2_initrequestoptions",
              children: "HMS_FIDO2_initRequestOptions"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___credential_request_options/x_f_i_d_o2___credential_request_options",
              children: "FIDO2_CredentialRequestOptions"
            }), " *options)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "初始化FIDO2_CredentialRequestOptions结构。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#fido2_errorcode-1",
              children: "FIDO2_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#hms_fido2_getclientcapability",
              children: "HMS_FIDO2_getClientCapability"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___capability_array/x_f_i_d_o2___capability_array",
              children: "FIDO2_CapabilityArray"
            }), " **capability)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询当前设备支持的客户端能力列表。当给定功能的值为true时，表示通行密钥客户端当前支持该能力。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#fido2_errorcode-1",
              children: "FIDO2_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#hms_fido2_getplatformauthenticator",
              children: "HMS_FIDO2_getPlatformAuthenticator"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___authenticator_metadata_array/x_f_i_d_o2___authenticator_metadata_array",
              children: "FIDO2_AuthenticatorMetadataArray"
            }), " **authenticators)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取支持的平台身份认证器列表。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#fido2_errorcode-1",
              children: "FIDO2_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#hms_fido2_register",
              children: "HMS_FIDO2_register"
            }), " (const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___credential_creation_options/x_f_i_d_o2___credential_creation_options",
              children: "FIDO2_CredentialCreationOptions"
            }), " options, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___token_binding/x_f_i_d_o2___token_binding",
              children: "FIDO2_TokenBinding"
            }), " tokenBinding, const char *origin, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___public_key_attestation_credential/x_f_i_d_o2___public_key_attestation_credential",
              children: "FIDO2_PublicKeyAttestationCredential"
            }), " **publicKeyAttestationCredential)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通行密钥注册。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#fido2_errorcode-1",
              children: "FIDO2_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#hms_fido2_authenticate",
              children: "HMS_FIDO2_authenticate"
            }), " (const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___credential_request_options/x_f_i_d_o2___credential_request_options",
              children: "FIDO2_CredentialRequestOptions"
            }), " options, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___token_binding/x_f_i_d_o2___token_binding",
              children: "FIDO2_TokenBinding"
            }), " tokenBinding, const char *origin, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___public_key_assertion_credential/x_f_i_d_o2___public_key_assertion_credential",
              children: "FIDO2_PublicKeyAssertionCredential"
            }), " **publicKeyAssertionCredential)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "基于fido2的认证。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["void ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#hms_fido2_capabilityarray_destroy",
              children: "HMS_FIDO2_CapabilityArray_Destroy"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___capability_array/x_f_i_d_o2___capability_array",
              children: "FIDO2_CapabilityArray"
            }), " *capability)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放能力的数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["void ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#hms_fido2_authenticatormetadataarray_destroy",
              children: "HMS_FIDO2_AuthenticatorMetadataArray_Destroy"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___authenticator_metadata_array/x_f_i_d_o2___authenticator_metadata_array",
              children: "FIDO2_AuthenticatorMetadataArray"
            }), " *authenticators)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放认证者元数据数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["void ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#hms_fido2_publickeyattestationcredential_destroy",
              children: "HMS_FIDO2_PublicKeyAttestationCredential_Destroy"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___public_key_attestation_credential/x_f_i_d_o2___public_key_attestation_credential",
              children: "FIDO2_PublicKeyAttestationCredential"
            }), " *publicKeyAttestationCredential)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放PublicKeyAttestationCredential的结构体。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["void ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#hms_fido2_publickeyassertioncredential_destroy",
              children: "HMS_FIDO2_PublicKeyAssertionCredential_Destroy"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___public_key_assertion_credential/x_f_i_d_o2___public_key_assertion_credential",
              children: "FIDO2_PublicKeyAssertionCredential"
            }), " *publicKeyAssertionCredential)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放PublicKeyAssertionCredential的结构体。"
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