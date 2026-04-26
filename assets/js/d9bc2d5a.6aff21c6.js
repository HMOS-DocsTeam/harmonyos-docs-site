"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["805320"], {
404339(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_security_api_online_authentication_api_online_authentication_c_onlineauthentication_capi_module_passkey_passkey_md_d9b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-security-api-online-authentication-api-online-authentication-c-onlineauthentication-capi-module-passkey-passkey-md-d9b.json
var site_docs_ref_system_security_api_online_authentication_api_online_authentication_c_onlineauthentication_capi_module_passkey_passkey_md_d9b_namespaceObject = JSON.parse('{"id":"system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey","title":"通行密钥","description":"概述","source":"@site/docs-ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey.md","sourceDirName":"system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey","slug":"/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey","permalink":"/harmonyos-docs-site/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"通行密钥","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/passkey","kit":"系统","last_updated":"2026-04-22","slug":"passkey"},"sidebar":"ref","previous":{"title":"通行密钥","permalink":"/harmonyos-docs-site/ref/system-security-api/online-authentication-api/onlineauthentication_arkts/onlineauthentication-error-code/onlineauthentication-error-code-passkey/onlineauthentication-error-code-passkey"},"next":{"title":"fido2_api.h","permalink":"/harmonyos-docs-site/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_header/onlineauthentication_capi_header_fido2/onlineauthentication_capi_header_fido2"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey.md


const frontMatter = {
	title: '通行密钥',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/passkey',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'passkey'
};
const contentTitle = '通行密钥';

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
  "value": "文件",
  "id": "文件",
  "level": 3
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
}, {
  "value": "类型定义说明",
  "id": "类型定义说明",
  "level": 2
}, {
  "value": "AuthenticationExtensionsClientOutputs",
  "id": "authenticationextensionsclientoutputs",
  "level": 3
}, {
  "value": "FIDO2_Algorithm",
  "id": "fido2_algorithm",
  "level": 3
}, {
  "value": "FIDO2_AttestationConveyancePreference",
  "id": "fido2_attestationconveyancepreference",
  "level": 3
}, {
  "value": "FIDO2_AttestationFormatsArray",
  "id": "fido2_attestationformatsarray",
  "level": 3
}, {
  "value": "FIDO2_AuthenticatorAttachment",
  "id": "fido2_authenticatorattachment",
  "level": 3
}, {
  "value": "FIDO2_AuthenticatorAttestationResponse",
  "id": "fido2_authenticatorattestationresponse",
  "level": 3
}, {
  "value": "FIDO2_AuthenticatorMetadata",
  "id": "fido2_authenticatormetadata",
  "level": 3
}, {
  "value": "FIDO2_AuthenticatorMetadataArray",
  "id": "fido2_authenticatormetadataarray",
  "level": 3
}, {
  "value": "FIDO2_AuthenticatorResponse",
  "id": "fido2_authenticatorresponse",
  "level": 3
}, {
  "value": "FIDO2_AuthenticatorSelectionCriteria",
  "id": "fido2_authenticatorselectioncriteria",
  "level": 3
}, {
  "value": "FIDO2_AuthenticatorTransport",
  "id": "fido2_authenticatortransport",
  "level": 3
}, {
  "value": "FIDO2_AuthenticatorTransportArray",
  "id": "fido2_authenticatortransportarray",
  "level": 3
}, {
  "value": "FIDO2_Capability",
  "id": "fido2_capability",
  "level": 3
}, {
  "value": "FIDO2_CapabilityArray",
  "id": "fido2_capabilityarray",
  "level": 3
}, {
  "value": "FIDO2_ClientCapability",
  "id": "fido2_clientcapability",
  "level": 3
}, {
  "value": "FIDO2_CredentialCreationOptionArray",
  "id": "fido2_credentialcreationoptionarray",
  "level": 3
}, {
  "value": "FIDO2_CredentialCreationOptions",
  "id": "fido2_credentialcreationoptions",
  "level": 3
}, {
  "value": "FIDO2_CredentialMediationRequirement",
  "id": "fido2_credentialmediationrequirement",
  "level": 3
}, {
  "value": "FIDO2_CredentialRequestOptions",
  "id": "fido2_credentialrequestoptions",
  "level": 3
}, {
  "value": "FIDO2_ErrorCode",
  "id": "fido2_errorcode",
  "level": 3
}, {
  "value": "FIDO2_PublicKeyAssertionCredential",
  "id": "fido2_publickeyassertioncredential",
  "level": 3
}, {
  "value": "FIDO2_PublicKeyAttestationCredential",
  "id": "fido2_publickeyattestationcredential",
  "level": 3
}, {
  "value": "FIDO2_PublicKeyCredentialCreationOptions",
  "id": "fido2_publickeycredentialcreationoptions",
  "level": 3
}, {
  "value": "FIDO2_PublicKeyCredentialDescriptor",
  "id": "fido2_publickeycredentialdescriptor",
  "level": 3
}, {
  "value": "FIDO2_PublicKeyCredentialDescriptorArray",
  "id": "fido2_publickeycredentialdescriptorarray",
  "level": 3
}, {
  "value": "FIDO2_PublicKeyCredentialHint",
  "id": "fido2_publickeycredentialhint",
  "level": 3
}, {
  "value": "FIDO2_PublicKeyCredentialHintArray",
  "id": "fido2_publickeycredentialhintarray",
  "level": 3
}, {
  "value": "FIDO2_PublicKeyCredentialParameters",
  "id": "fido2_publickeycredentialparameters",
  "level": 3
}, {
  "value": "FIDO2_PublicKeyCredentialRequestOptions",
  "id": "fido2_publickeycredentialrequestoptions",
  "level": 3
}, {
  "value": "FIDO2_PublicKeyCredentialRpEntity",
  "id": "fido2_publickeycredentialrpentity",
  "level": 3
}, {
  "value": "FIDO2_PublicKeyCredentialType",
  "id": "fido2_publickeycredentialtype",
  "level": 3
}, {
  "value": "FIDO2_PublicKeyCredentialUserEntity",
  "id": "fido2_publickeycredentialuserentity",
  "level": 3
}, {
  "value": "FIDO2_TokenBinding",
  "id": "fido2_tokenbinding",
  "level": 3
}, {
  "value": "FIDO2_TokenBindingStatus",
  "id": "fido2_tokenbindingstatus",
  "level": 3
}, {
  "value": "FIDO2_UserVerificationRequirement",
  "id": "fido2_userverificationrequirement",
  "level": 3
}, {
  "value": "FIDO2_Uvm",
  "id": "fido2_uvm",
  "level": 3
}, {
  "value": "Uint8Buff",
  "id": "uint8buff",
  "level": 3
}, {
  "value": "枚举类型说明",
  "id": "枚举类型说明",
  "level": 2
}, {
  "value": "FIDO2_Algorithm",
  "id": "fido2_algorithm-1",
  "level": 3
}, {
  "value": "FIDO2_AttestationConveyancePreference",
  "id": "fido2_attestationconveyancepreference-1",
  "level": 3
}, {
  "value": "FIDO2_AuthenticatorAttachment",
  "id": "fido2_authenticatorattachment-1",
  "level": 3
}, {
  "value": "FIDO2_AuthenticatorTransport",
  "id": "fido2_authenticatortransport-1",
  "level": 3
}, {
  "value": "FIDO2_ClientCapability",
  "id": "fido2_clientcapability-1",
  "level": 3
}, {
  "value": "FIDO2_CredentialMediationRequirement",
  "id": "fido2_credentialmediationrequirement-1",
  "level": 3
}, {
  "value": "FIDO2_ErrorCode",
  "id": "fido2_errorcode-1",
  "level": 3
}, {
  "value": "FIDO2_PublicKeyCredentialHint",
  "id": "fido2_publickeycredentialhint-1",
  "level": 3
}, {
  "value": "FIDO2_PublicKeyCredentialType",
  "id": "fido2_publickeycredentialtype-1",
  "level": 3
}, {
  "value": "FIDO2_TokenBindingStatus",
  "id": "fido2_tokenbindingstatus-1",
  "level": 3
}, {
  "value": "FIDO2_UserVerificationRequirement",
  "id": "fido2_userverificationrequirement-1",
  "level": 3
}, {
  "value": "FIDO2_Uvm",
  "id": "fido2_uvm-1",
  "level": 3
}, {
  "value": "函数说明",
  "id": "函数说明",
  "level": 2
}, {
  "value": "HMS_FIDO2_authenticate()",
  "id": "hms_fido2_authenticate",
  "level": 3
}, {
  "value": "HMS_FIDO2_AuthenticatorMetadataArray_Destroy()",
  "id": "hms_fido2_authenticatormetadataarray_destroy",
  "level": 3
}, {
  "value": "HMS_FIDO2_CapabilityArray_Destroy()",
  "id": "hms_fido2_capabilityarray_destroy",
  "level": 3
}, {
  "value": "HMS_FIDO2_getClientCapability()",
  "id": "hms_fido2_getclientcapability",
  "level": 3
}, {
  "value": "HMS_FIDO2_getPlatformAuthenticator()",
  "id": "hms_fido2_getplatformauthenticator",
  "level": 3
}, {
  "value": "HMS_FIDO2_initCreationOptions()",
  "id": "hms_fido2_initcreationoptions",
  "level": 3
}, {
  "value": "HMS_FIDO2_initRequestOptions()",
  "id": "hms_fido2_initrequestoptions",
  "level": 3
}, {
  "value": "HMS_FIDO2_initTokenBinding()",
  "id": "hms_fido2_inittokenbinding",
  "level": 3
}, {
  "value": "HMS_FIDO2_PublicKeyAssertionCredential_Destroy()",
  "id": "hms_fido2_publickeyassertioncredential_destroy",
  "level": 3
}, {
  "value": "HMS_FIDO2_PublicKeyAttestationCredential_Destroy()",
  "id": "hms_fido2_publickeyattestationcredential_destroy",
  "level": 3
}, {
  "value": "HMS_FIDO2_register()",
  "id": "hms_fido2_register",
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
        id: "通行密钥",
        children: "通行密钥"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供通行密钥能力。"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "文件",
      children: "文件"
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
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_header/onlineauthentication_capi_header_fido2/onlineauthentication_capi_header_fido2",
              children: "fido2_api.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "本声明用于访问FIDO2的API。提供FIDO2（通行密钥）能力的相关接口。FIDO2的基础核心能力，包含：获取支持的FIDO2能力、获取平台认证器能力、注册通行密钥能力和使用通行密钥认证能力。"
          })]
        })
      })]
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
              href: "#uint8buff",
              children: "Uint8Buff"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义uint8_t字节流。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fido2_tokenbindingstatus-1",
              children: "FIDO2_TokenBindingStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fido2_tokenbindingstatus",
              children: "FIDO2_TokenBindingStatus"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TokenBinding协议的状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fido2_attestationconveyancepreference-1",
              children: "FIDO2_AttestationConveyancePreference"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fido2_attestationconveyancepreference",
              children: "FIDO2_AttestationConveyancePreference"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "供WebAuthn依赖方在生成凭据时参考，以指定凭据传递的首选项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fido2_userverificationrequirement-1",
              children: "FIDO2_UserVerificationRequirement"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fido2_userverificationrequirement",
              children: "FIDO2_UserVerificationRequirement"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "依赖方可能需要对某些操作进行用户鉴权（认证当前用户是否为用户）， 但不需要对其他操作进行认证。定义枚举类型是为了区分不同的需求级别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fido2_authenticatorattachment-1",
              children: "FIDO2_AuthenticatorAttachment"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fido2_authenticatorattachment",
              children: "FIDO2_AuthenticatorAttachment"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "认证器信息（平台、漫游）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fido2_authenticatortransport-1",
              children: "FIDO2_AuthenticatorTransport"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fido2_authenticatortransport",
              children: "FIDO2_AuthenticatorTransport"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "认证器传输方式的枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fido2_algorithm-1",
              children: "FIDO2_Algorithm"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fido2_algorithm",
              children: "FIDO2_Algorithm"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "加密算法的枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fido2_publickeycredentialhint-1",
              children: "FIDO2_PublicKeyCredentialHint"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fido2_publickeycredentialhint",
              children: "FIDO2_PublicKeyCredentialHint"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "认证方式指示的枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fido2_publickeycredentialtype-1",
              children: "FIDO2_PublicKeyCredentialType"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fido2_publickeycredentialtype",
              children: "FIDO2_PublicKeyCredentialType"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "公钥凭据类型的枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fido2_uvm-1",
              children: "FIDO2_Uvm"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fido2_uvm",
              children: "FIDO2_Uvm"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UVM的枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fido2_clientcapability-1",
              children: "FIDO2_ClientCapability"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fido2_clientcapability",
              children: "FIDO2_ClientCapability"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "客户端能力的枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fido2_credentialmediationrequirement-1",
              children: "FIDO2_CredentialMediationRequirement"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fido2_credentialmediationrequirement",
              children: "FIDO2_CredentialMediationRequirement"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户介入要求的枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fido2_errorcode-1",
              children: "FIDO2_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fido2_errorcode",
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
              href: "#authenticationextensionsclientoutputs",
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
              href: "#fido2_authenticatorresponse",
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
              href: "#fido2_publickeyassertioncredential",
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
              href: "#fido2_authenticatortransportarray",
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
              href: "#fido2_authenticatorattestationresponse",
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
              href: "#fido2_publickeyattestationcredential",
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
              href: "#fido2_authenticatorselectioncriteria",
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
              href: "#fido2_publickeycredentialdescriptor",
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
              href: "#fido2_publickeycredentialparameters",
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
              href: "#fido2_publickeycredentialuserentity",
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
              href: "#fido2_publickeycredentialrpentity",
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
              href: "#fido2_publickeycredentialdescriptorarray",
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
              href: "#fido2_publickeycredentialhintarray",
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
              href: "#fido2_publickeycredentialrequestoptions",
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
              href: "#fido2_credentialcreationoptionarray",
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
              href: "#fido2_attestationformatsarray",
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
              href: "#fido2_publickeycredentialcreationoptions",
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
              href: "#fido2_credentialcreationoptions",
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
              href: "#fido2_authenticatormetadata",
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
              href: "#fido2_credentialrequestoptions",
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
              href: "#fido2_authenticatormetadataarray",
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
              href: "#fido2_capability",
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
              href: "#fido2_capabilityarray",
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
              href: "#fido2_tokenbinding",
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
              href: "#fido2_tokenbindingstatus-1",
              children: "FIDO2_TokenBindingStatus"
            }), " { FIDO2_PRESENT = 0, FIDO2_SUPPORTED = 1 }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TokenBinding协议的状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#fido2_attestationconveyancepreference-1",
              children: "FIDO2_AttestationConveyancePreference"
            }), " { FIDO2_NONE = 0, FIDO2_INDIRECT = 1, FIDO2_DIRECT = 2, FIDO2_ENTERPRISE = 3 }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "供WebAuthn依赖方在生成凭据时参考，以指定凭据传递的首选项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#fido2_userverificationrequirement-1",
              children: "FIDO2_UserVerificationRequirement"
            }), " { FIDO2_REQUIRED = 0, FIDO2_PREFERRED = 1, FIDO2_DISCOURAGED = 2 }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "依赖方可能需要对某些操作进行用户鉴权（认证当前用户是否为用户）， 但不需要对其他操作进行认证。定义枚举类型是为了区分不同的需求级别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#fido2_authenticatorattachment-1",
              children: "FIDO2_AuthenticatorAttachment"
            }), " { FIDO2_PLATFORM = 0, FIDO2_CROSS_PLATFORM = 1 }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "认证器信息（平台、漫游）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#fido2_authenticatortransport-1",
              children: "FIDO2_AuthenticatorTransport"
            }), " {  FIDO2_USB = 0, FIDO2_NFC = 1, FIDO2_BLE = 2, FIDO2_SMART_CARD = 3,  FIDO2_HYBRID = 4, FIDO2_INTERNAL = 5  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "认证器传输方式的枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#fido2_algorithm-1",
              children: "FIDO2_Algorithm"
            }), " {  FIDO2_ES256 = -7, FIDO2_ES384 = -35, FIDO2_ES512 = -36, FIDO2_RS256 = -257,  FIDO2_RS384 = -258, FIDO2_RS512 = -259, FIDO2_PS256 = -37, FIDO2_PS384 = -38,  FIDO2_PS512 = -39  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "算法的枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#fido2_publickeycredentialhint-1",
              children: "FIDO2_PublicKeyCredentialHint"
            }), " { FIDO2_SECURITY_KEY = 0, FIDO2_CLIENT_DEVICE = 1, FIDO2_HINT_HYBRID = 2 }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "认证方式指示的枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#fido2_publickeycredentialtype-1",
              children: "FIDO2_PublicKeyCredentialType"
            }), " { FIDO2_PUBLIC_KEY = 0 }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "公钥凭据类型的枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#fido2_uvm-1",
              children: "FIDO2_Uvm"
            }), " { FIDO2_UVM_FINGERPRINT = 2, FIDO2_UVM_PIN = 4, FIDO2_UVM_FACEPRINT = 16 }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UVM的枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#fido2_clientcapability-1",
              children: "FIDO2_ClientCapability"
            }), " {  FIDO2_CONDITIONAL_CREATE = 0, FIDO2_CONDITIONAL_GET = 1, FIDO2_HYBRID_TRANSPORT = 2, FIDO2_PASSKEY_PLATFORM_AUTHENTICATOR = 3,  FIDO2_USER_VERIFYING_PLATFORM_AUTHENTICATOR = 4, FIDO2_RELATED_ORIGINS = 5, FIDO2_SIGNAL_ALL_ACCEPTED_CREDENTIALS = 6, FIDO2_SIGNAL_CURRENT_USER_DETAILS = 7,  FIDO2_SIGNAL_UNKNOWN_CREDENTIAL = 8, FIDO2_EXTENSION_UVI = 9  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "客户端能力的枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#fido2_credentialmediationrequirement-1",
              children: "FIDO2_CredentialMediationRequirement"
            }), " { FIDO2_SILENT = 0, FIDO2_OPTIONAL = 1, FIDO2_CONDITIONAL = 2, FIDO2_MEDIATION_REQUIRED = 3 }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户介入要求的枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#fido2_errorcode-1",
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
              href: "#hms_fido2_initcreationoptions",
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
              href: "#hms_fido2_inittokenbinding",
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
              href: "#hms_fido2_initrequestoptions",
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
              href: "#fido2_errorcode-1",
              children: "FIDO2_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_fido2_getclientcapability",
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
              href: "#fido2_errorcode-1",
              children: "FIDO2_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_fido2_getplatformauthenticator",
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
              href: "#fido2_errorcode-1",
              children: "FIDO2_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_fido2_register",
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
              href: "#fido2_errorcode-1",
              children: "FIDO2_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_fido2_authenticate",
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
              href: "#hms_fido2_capabilityarray_destroy",
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
              href: "#hms_fido2_authenticatormetadataarray_destroy",
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
              href: "#hms_fido2_publickeyattestationcredential_destroy",
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
              href: "#hms_fido2_publickeyassertioncredential_destroy",
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "类型定义说明",
      children: "类型定义说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "authenticationextensionsclientoutputs",
      children: "AuthenticationExtensionsClientOutputs"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct AuthenticationExtensionsClientOutputs AuthenticationExtensionsClientOutputs\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "身份认证扩展。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fido2_algorithm",
      children: "FIDO2_Algorithm"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum FIDO2_Algorithm FIDO2_Algorithm\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "算法的枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fido2_attestationconveyancepreference",
      children: "FIDO2_AttestationConveyancePreference"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum FIDO2_AttestationConveyancePreference FIDO2_AttestationConveyancePreference\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "供WebAuthn依赖方在生成凭据时参考，以指定凭据传递的首选项。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fido2_attestationformatsarray",
      children: "FIDO2_AttestationFormatsArray"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct FIDO2_AttestationFormatsArray FIDO2_AttestationFormatsArray\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "依赖方的数组可以使用此成员指定一个关于认证方使用的证明语句格式的首选项。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fido2_authenticatorattachment",
      children: "FIDO2_AuthenticatorAttachment"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum FIDO2_AuthenticatorAttachment FIDO2_AuthenticatorAttachment\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "认证器信息（平台、漫游）。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fido2_authenticatorattestationresponse",
      children: "FIDO2_AuthenticatorAttestationResponse"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct FIDO2_AuthenticatorAttestationResponse FIDO2_AuthenticatorAttestationResponse\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "认证器声明响应。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fido2_authenticatormetadata",
      children: "FIDO2_AuthenticatorMetadata"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct FIDO2_AuthenticatorMetadata FIDO2_AuthenticatorMetadata\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "认证器元数据。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fido2_authenticatormetadataarray",
      children: "FIDO2_AuthenticatorMetadataArray"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct FIDO2_AuthenticatorMetadataArray FIDO2_AuthenticatorMetadataArray\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述支持的认证器数组。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fido2_authenticatorresponse",
      children: "FIDO2_AuthenticatorResponse"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct FIDO2_AuthenticatorResponse FIDO2_AuthenticatorResponse\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义获取认证器断言响应的结构体。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fido2_authenticatorselectioncriteria",
      children: "FIDO2_AuthenticatorSelectionCriteria"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct FIDO2_AuthenticatorSelectionCriteria FIDO2_AuthenticatorSelectionCriteria\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由webAuthn依赖方指定，与认证器有关。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fido2_authenticatortransport",
      children: "FIDO2_AuthenticatorTransport"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum FIDO2_AuthenticatorTransport FIDO2_AuthenticatorTransport\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "认证器传输方式的枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fido2_authenticatortransportarray",
      children: "FIDO2_AuthenticatorTransportArray"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct FIDO2_AuthenticatorTransportArray FIDO2_AuthenticatorTransportArray\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "认证器传输方式数组。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fido2_capability",
      children: "FIDO2_Capability"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct FIDO2_Capability FIDO2_Capability\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通行密钥能力的结构体。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fido2_capabilityarray",
      children: "FIDO2_CapabilityArray"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct FIDO2_CapabilityArray FIDO2_CapabilityArray\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述能力数组。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fido2_clientcapability",
      children: "FIDO2_ClientCapability"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum FIDO2_ClientCapability FIDO2_ClientCapability\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "客户端能力的枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fido2_credentialcreationoptionarray",
      children: "FIDO2_CredentialCreationOptionArray"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct FIDO2_CredentialCreationOptionArray FIDO2_CredentialCreationOptionArray\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "认证凭据的附加参数数组。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fido2_credentialcreationoptions",
      children: "FIDO2_CredentialCreationOptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct FIDO2_CredentialCreationOptions FIDO2_CredentialCreationOptions\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "凭据请求的选项。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fido2_credentialmediationrequirement",
      children: "FIDO2_CredentialMediationRequirement"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum FIDO2_CredentialMediationRequirement FIDO2_CredentialMediationRequirement\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户介入要求的枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fido2_credentialrequestoptions",
      children: "FIDO2_CredentialRequestOptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct FIDO2_CredentialRequestOptions FIDO2_CredentialRequestOptions\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "认证信息字典对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fido2_errorcode",
      children: "FIDO2_ErrorCode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum FIDO2_ErrorCode FIDO2_ErrorCode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "错误码定义。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fido2_publickeyassertioncredential",
      children: "FIDO2_PublicKeyAssertionCredential"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct FIDO2_PublicKeyAssertionCredential FIDO2_PublicKeyAssertionCredential\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义获取认证结果结构体。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fido2_publickeyattestationcredential",
      children: "FIDO2_PublicKeyAttestationCredential"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct FIDO2_PublicKeyAttestationCredential FIDO2_PublicKeyAttestationCredential\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义获取注册结果结构体。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fido2_publickeycredentialcreationoptions",
      children: "FIDO2_PublicKeyCredentialCreationOptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct FIDO2_PublicKeyCredentialCreationOptions FIDO2_PublicKeyCredentialCreationOptions\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建新的认证凭据的选项。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fido2_publickeycredentialdescriptor",
      children: "FIDO2_PublicKeyCredentialDescriptor"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct FIDO2_PublicKeyCredentialDescriptor FIDO2_PublicKeyCredentialDescriptor\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于注册或认证凭据的参数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fido2_publickeycredentialdescriptorarray",
      children: "FIDO2_PublicKeyCredentialDescriptorArray"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct FIDO2_PublicKeyCredentialDescriptorArray FIDO2_PublicKeyCredentialDescriptorArray\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PublicKey凭证描述符数组。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fido2_publickeycredentialhint",
      children: "FIDO2_PublicKeyCredentialHint"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum FIDO2_PublicKeyCredentialHint FIDO2_PublicKeyCredentialHint\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "认证方式指示的枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fido2_publickeycredentialhintarray",
      children: "FIDO2_PublicKeyCredentialHintArray"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct FIDO2_PublicKeyCredentialHintArray FIDO2_PublicKeyCredentialHintArray\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "认证方式指示数组。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fido2_publickeycredentialparameters",
      children: "FIDO2_PublicKeyCredentialParameters"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct FIDO2_PublicKeyCredentialParameters FIDO2_PublicKeyCredentialParameters\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "认证凭据的附加参数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fido2_publickeycredentialrequestoptions",
      children: "FIDO2_PublicKeyCredentialRequestOptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct FIDO2_PublicKeyCredentialRequestOptions FIDO2_PublicKeyCredentialRequestOptions\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义通行密钥认证请求参数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fido2_publickeycredentialrpentity",
      children: "FIDO2_PublicKeyCredentialRpEntity"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct FIDO2_PublicKeyCredentialRpEntity FIDO2_PublicKeyCredentialRpEntity\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建新凭据时依赖方的属性。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fido2_publickeycredentialtype",
      children: "FIDO2_PublicKeyCredentialType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum FIDO2_PublicKeyCredentialType FIDO2_PublicKeyCredentialType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "公钥凭据类型的枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fido2_publickeycredentialuserentity",
      children: "FIDO2_PublicKeyCredentialUserEntity"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct FIDO2_PublicKeyCredentialUserEntity FIDO2_PublicKeyCredentialUserEntity\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建新凭据时用户的属性。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fido2_tokenbinding",
      children: "FIDO2_TokenBinding"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct FIDO2_TokenBinding FIDO2_TokenBinding\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Token binding协议，用于客户端与依赖方通信。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fido2_tokenbindingstatus",
      children: "FIDO2_TokenBindingStatus"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum FIDO2_TokenBindingStatus FIDO2_TokenBindingStatus\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TokenBinding协议的状态。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fido2_userverificationrequirement",
      children: "FIDO2_UserVerificationRequirement"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum FIDO2_UserVerificationRequirement FIDO2_UserVerificationRequirement\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "依赖方可能需要对某些操作进行用户鉴权（认证当前用户是否为用户）， 但不需要对其他操作进行认证。定义枚举类型是为了区分不同的需求级别。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fido2_uvm",
      children: "FIDO2_Uvm"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum FIDO2_Uvm FIDO2_Uvm\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "UVM的枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "uint8buff",
      children: "Uint8Buff"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct Uint8Buff Uint8Buff\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义uint8_t字节流。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fido2_algorithm-1",
      children: "FIDO2_Algorithm"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum FIDO2_Algorithm\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "加密算法的枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIDO2_ES256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ES256算法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIDO2_ES384"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ES384算法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIDO2_ES512"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ES512算法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIDO2_RS256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RS256算法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIDO2_RS384"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RS384算法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIDO2_RS512"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RS512算法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIDO2_PS256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PS256算法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIDO2_PS384"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PS384算法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIDO2_PS512"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PS512算法。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fido2_attestationconveyancepreference-1",
      children: "FIDO2_AttestationConveyancePreference"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum FIDO2_AttestationConveyancePreference\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "供WebAuthn依赖方在生成凭据时参考，以指定凭据传递的首选项。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIDO2_NONE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "依赖方对认证者证明不感兴趣，默认值为none。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIDO2_INDIRECT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "间接依赖方倾向于提供可认证的证明声明文档，但允许用户决定如何获得这种证明声明。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIDO2_DIRECT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "直接依赖方希望接收认证者生成的证明声明。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIDO2_ENTERPRISE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "依赖方希望接收企业证明。企业证明是一个证明声明， 其中可能包括唯一标识认证者的信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fido2_authenticatorattachment-1",
      children: "FIDO2_AuthenticatorAttachment"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum FIDO2_AuthenticatorAttachment\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "认证器信息（平台、漫游）。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIDO2_PLATFORM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "平台认证器，例如PIN码、指纹、人脸等。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIDO2_CROSS_PLATFORM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "跨平台认证器，即漫游认证器，包括蓝牙、NFC、USB等。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fido2_authenticatortransport-1",
      children: "FIDO2_AuthenticatorTransport"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum FIDO2_AuthenticatorTransport\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "认证器传输方式的枚举，表示认证器和客户端设备之间传递认证数据的方式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIDO2_USB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USB方式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIDO2_NFC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NFC方式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIDO2_BLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BLE方式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIDO2_SMART_CARD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "智能卡方式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIDO2_HYBRID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "混合方式。即支持多种传输方式"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIDO2_INTERNAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内部方式。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fido2_clientcapability-1",
      children: "FIDO2_ClientCapability"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum FIDO2_ClientCapability\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "客户端能力的枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIDO2_CONDITIONAL_CREATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通行密钥注册。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIDO2_CONDITIONAL_GET"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通行密钥认证。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIDO2_HYBRID_TRANSPORT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "混合传输，表示支持多种传输方式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIDO2_PASSKEY_PLATFORM_AUTHENTICATOR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Passkey平台认证器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIDO2_USER_VERIFYING_PLATFORM_AUTHENTICATOR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户认证平台认证器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIDO2_RELATED_ORIGINS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持相关源/域的凭据操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIDO2_SIGNAL_ALL_ACCEPTED_CREDENTIALS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发送所有接受的凭据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIDO2_SIGNAL_CURRENT_USER_DETAILS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发送当前用户详细信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIDO2_SIGNAL_UNKNOWN_CREDENTIAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发送未知凭据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIDO2_EXTENSION_UVI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uvi的扩展参数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fido2_credentialmediationrequirement-1",
      children: "FIDO2_CredentialMediationRequirement"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum FIDO2_CredentialMediationRequirement\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户介入要求的枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIDO2_SILENT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "禁止用户介入指定的操作。如果可以在不需要用户介入的情况下进行操作，则正常。 如果需要用户介入，则操作将返回null。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIDO2_OPTIONAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果在没有用户介入的情况下，可以为给定的操作传递凭据，则正常传递。 如果需要用户介入，那么用户代理将让用户介入决策。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIDO2_CONDITIONAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "有条件的需要用户介入。对于认证场景，如果设备有凭据，则需要用户介入以选择凭据。对于注册场景，如果用户之前已同意创建凭据，可在无用户介入的情况下创建凭据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIDO2_MEDIATION_REQUIRED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在没有用户介入的情况下，用户代理将不会移交凭证。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fido2_errorcode-1",
      children: "FIDO2_ErrorCode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum FIDO2_ErrorCode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "错误码定义。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIDO2_SUCCESS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "成功。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIDO2_PERMISSION_DENIED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "权限被拒绝。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIDO2_DEVICE_NOT_SUPPORT"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设备类型错误。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本"
              })
            }), "：6.0.1(21)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIDO2_NOT_SUPPORT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统不支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIDO2_INVALID_STATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无效的状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIDO2_INTEGRITY_CHECK_FAILED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统完整性校验失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIDO2_USER_ABORT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户中止。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIDO2_TIMEOUT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "超时。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIDO2_ENCODING_ERROR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "编码错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIDO2_UNKNOWN_ERROR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "未知错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIDO2_CONSTRAINT_ERROR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "约束条件错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIDO2_DATA_ERROR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIDO2_USER_REJECTS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户拒绝。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIDO2_CONNECT_SERVICE_FAILED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "连接服务失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIDO2_MAX_CRED_NUM_REACHED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "凭据达到上限。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIDO2_INVALID_CTAP_COMMAND"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无效的CTAP命令。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIDO2_INVALID_PARAMETERS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "命令包含无效参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIDO2_INVALID_MESSAGE_OR_ATTRIBUTE_LENGTH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无效的消息或属性长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIDO2_INVALID_CBOR_OR_UNPREDICTABLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无效的CBOR或不可预知的错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIDO2_PARSE_CBOR_FAILED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "解析CBOR失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIDO2_INVALID_CREDENTIALS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "未提供有效凭据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIDO2_NOT_ALLOWED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不允许。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIDO2_USER_VERIFICATION_FAILED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户认证失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIDO2_OTHER_ERROR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "其他错误。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fido2_publickeycredentialhint-1",
      children: "FIDO2_PublicKeyCredentialHint"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum FIDO2_PublicKeyCredentialHint\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "认证方式指示的枚举，用于指示用户选用哪种认证方式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIDO2_SECURITY_KEY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "安全密钥。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIDO2_CLIENT_DEVICE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "客户端设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIDO2_HINT_HYBRID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "混合。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fido2_publickeycredentialtype-1",
      children: "FIDO2_PublicKeyCredentialType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum FIDO2_PublicKeyCredentialType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "公钥凭据类型的枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIDO2_PUBLIC_KEY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "公钥。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fido2_tokenbindingstatus-1",
      children: "FIDO2_TokenBindingStatus"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum FIDO2_TokenBindingStatus\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TokenBinding协议的状态。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIDO2_PRESENT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "正常通信时的状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIDO2_SUPPORTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持令牌绑定，但是在与依赖方通信时未进行协商。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fido2_userverificationrequirement-1",
      children: "FIDO2_UserVerificationRequirement"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum FIDO2_UserVerificationRequirement\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "依赖方可能需要对某些操作进行用户鉴权（认证当前用户是否为用户）， 但不需要对其他操作进行认证。定义枚举类型是为了区分不同的需求级别。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIDO2_REQUIRED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要进行用户认证。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIDO2_PREFERRED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在可能的情况下，依赖方优先处理操作的用户认证， 但如果响应没有设置用户认证标志，则不会失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIDO2_DISCOURAGED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "依赖方在操作过程中不希望使用用户鉴权。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fido2_uvm-1",
      children: "FIDO2_Uvm"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum FIDO2_Uvm\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "UVM的枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIDO2_UVM_FINGERPRINT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指纹认证器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIDO2_UVM_PIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PIN认证器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIDO2_UVM_FACEPRINT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3D人脸认证器。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_fido2_authenticate",
      children: "HMS_FIDO2_authenticate()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FIDO2_ErrorCode HMS_FIDO2_authenticate (const FIDO2_CredentialRequestOptions options, const FIDO2_TokenBinding tokenBinding, const char * origin, FIDO2_PublicKeyAssertionCredential ** publicKeyAssertionCredential)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通行密钥认证。仅支持非UI线程调用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "申请权限："
        })
      }), " ohos.permission.ACCESS_FIDO2_ONLINEAUTH"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "认证请求选项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "tokenBinding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "认证令牌绑定。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "origin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用该方法时的安全来源。长度限制0到256。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "publicKeyAssertionCredential"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "认证响应。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果函数执行成功，则返回FIDO2_SUCCESS；如果函数执行失败，则返回特定的错误代码。详细信息请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#fido2_errorcode",
        children: "FIDO2_ErrorCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_fido2_authenticatormetadataarray_destroy",
      children: "HMS_FIDO2_AuthenticatorMetadataArray_Destroy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void HMS_FIDO2_AuthenticatorMetadataArray_Destroy (FIDO2_AuthenticatorMetadataArray * authenticators)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "释放认证者元数据数组。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
            children: "authenticators"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要释放的鉴权字元数据数组。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_fido2_capabilityarray_destroy",
      children: "HMS_FIDO2_CapabilityArray_Destroy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void HMS_FIDO2_CapabilityArray_Destroy (FIDO2_CapabilityArray * capability)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "释放能力的数组。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
            children: "capability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要释放的能力的数组。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_fido2_getclientcapability",
      children: "HMS_FIDO2_getClientCapability()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FIDO2_ErrorCode HMS_FIDO2_getClientCapability (FIDO2_CapabilityArray ** capability)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询当前设备支持的客户端能力列表。当给定功能的值为true时，表示通行密钥客户端当前支持该能力。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
            children: "capability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "客户端是否支持此特性。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果函数执行成功，则返回FIDO2_SUCCESS； 如果函数执行失败，则返回错误代码。详细信息请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#fido2_errorcode",
        children: "FIDO2_ErrorCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_fido2_getplatformauthenticator",
      children: "HMS_FIDO2_getPlatformAuthenticator()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FIDO2_ErrorCode HMS_FIDO2_getPlatformAuthenticator (FIDO2_AuthenticatorMetadataArray ** authenticators)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取支持的平台身份认证器列表。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
            children: "authenticators"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持的平台认证器列表。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果函数执行成功，则返回FIDO2_SUCCESS；如果函数执行失败，则返回错误代码。详细信息请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#fido2_errorcode",
        children: "FIDO2_ErrorCode"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_fido2_initcreationoptions",
      children: "HMS_FIDO2_initCreationOptions()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void HMS_FIDO2_initCreationOptions (FIDO2_CredentialCreationOptions * options)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "初始化FIDO2_CredentialCreationOptions结构。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向要初始化的FIDO2_CredentialCreationOptions结构体的指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_fido2_initrequestoptions",
      children: "HMS_FIDO2_initRequestOptions()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void HMS_FIDO2_initRequestOptions (FIDO2_CredentialRequestOptions * options)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "初始化FIDO2_CredentialRequestOptions结构。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向要初始化的FIDO2_CredentialRequestOptions结构体的指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_fido2_inittokenbinding",
      children: "HMS_FIDO2_initTokenBinding()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void HMS_FIDO2_initTokenBinding (FIDO2_TokenBinding * tokenBinding)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "初始化FIDO2_TokenBinding结构体。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
            children: "tokenBinding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向要初始化的FIDO2_TokenBinding结构体的指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_fido2_publickeyassertioncredential_destroy",
      children: "HMS_FIDO2_PublicKeyAssertionCredential_Destroy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void HMS_FIDO2_PublicKeyAssertionCredential_Destroy (FIDO2_PublicKeyAssertionCredential * publicKeyAssertionCredential)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "释放PublicKeyAssertionCredential的结构体。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
            children: "publicKeyAssertionCredential"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要释放的PublicKeyAssertionCredential的结构体。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_fido2_publickeyattestationcredential_destroy",
      children: "HMS_FIDO2_PublicKeyAttestationCredential_Destroy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void HMS_FIDO2_PublicKeyAttestationCredential_Destroy (FIDO2_PublicKeyAttestationCredential * publicKeyAttestationCredential)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "释放PublicKeyAttestationCredential的结构体。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
            children: "publicKeyAttestationCredential"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要释放的PublicKeyAttestationCredential的结构体。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_fido2_register",
      children: "HMS_FIDO2_register()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FIDO2_ErrorCode HMS_FIDO2_register (const FIDO2_CredentialCreationOptions options, const FIDO2_TokenBinding tokenBinding, const char * origin, FIDO2_PublicKeyAttestationCredential ** publicKeyAttestationCredential)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通行密钥注册。仅支持非UI线程调用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "申请权限："
        })
      }), " ohos.permission.ACCESS_FIDO2_ONLINEAUTH"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册请求选项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "tokenBinding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册令牌绑定。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "origin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用该方法时的来源。长度限制0到256。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "publicKeyAttestationCredential"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册响应。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果函数执行成功，则返回FIDO2_SUCCESS；如果函数执行失败，则返回错误代码。详细信息请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#fido2_errorcode",
        children: "FIDO2_ErrorCode"
      }), "。"]
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