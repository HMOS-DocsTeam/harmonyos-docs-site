"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["98013"], {
596680(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_online_authentication_kit_guide_onlineauthentication_passkey_onlineauthentication_passkey_cpp_onlineauthentication_passkey_cpp_md_666_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-online-authentication-kit-guide-onlineauthentication-passkey-onlineauthentication-passkey-cpp-onlineauthentication-passkey-cpp-md-666.json
var site_docs_system_security_online_authentication_kit_guide_onlineauthentication_passkey_onlineauthentication_passkey_cpp_onlineauthentication_passkey_cpp_md_666_namespaceObject = JSON.parse('{"id":"system-security/online-authentication-kit-guide/onlineauthentication-passkey/onlineauthentication-passkey-cpp/onlineauthentication-passkey-cpp","title":"通行密钥身份认证（C/C++）","description":"接口说明","source":"@site/docs/system-security/online-authentication-kit-guide/onlineauthentication-passkey/onlineauthentication-passkey-cpp/onlineauthentication-passkey-cpp.md","sourceDirName":"system-security/online-authentication-kit-guide/onlineauthentication-passkey/onlineauthentication-passkey-cpp","slug":"/system-security/online-authentication-kit-guide/onlineauthentication-passkey/onlineauthentication-passkey-cpp/","permalink":"/harmonyos-docs-site/system-security/online-authentication-kit-guide/onlineauthentication-passkey/onlineauthentication-passkey-cpp/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"通行密钥身份认证（C/C++）","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/onlineauthentication-passkey-cpp","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"通行密钥身份认证（ArkTS）","permalink":"/harmonyos-docs-site/system-security/online-authentication-kit-guide/onlineauthentication-passkey/onlineauthentication-passkey-arkts/"},"next":{"title":"网站链接免责声明","permalink":"/harmonyos-docs-site/system-security/online-authentication-kit-guide/onlineauthentication-website-disclaimer/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/online-authentication-kit-guide/onlineauthentication-passkey/onlineauthentication-passkey-cpp/onlineauthentication-passkey-cpp.md


const frontMatter = {
	title: '通行密钥身份认证（C/C++）',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/onlineauthentication-passkey-cpp',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '通行密钥身份认证（C/C++）';

const assets = {

};



const toc = [{
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
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
        id: "通行密钥身份认证cc",
        children: "通行密钥身份认证（C/C++）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通行密钥服务主要接口如下表。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["FIDO2_ErrorCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#hms_fido2_getclientcapability",
              children: "HMS_FIDO2_getClientCapability"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___capability_array/x_f_i_d_o2___capability_array",
              children: "FIDO2_CapabilityArray"
            }), " ** capability)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询当前设备支持的客户端能力列表。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["FIDO2_ErrorCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#hms_fido2_getplatformauthenticator",
              children: "HMS_FIDO2_getPlatformAuthenticator"
            }), "(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___authenticator_metadata_array/x_f_i_d_o2___authenticator_metadata_array",
              children: "FIDO2_AuthenticatorMetadataArray"
            }), " **authenticators)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询当前设备支持的平台认证器能力列表（人脸、指纹、PIN码）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["FIDO2_ErrorCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#hms_fido2_register",
              children: "HMS_FIDO2_register"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___credential_creation_options/x_f_i_d_o2___credential_creation_options",
              children: "FIDO2_CredentialCreationOptions"
            }), " options, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___token_binding/x_f_i_d_o2___token_binding",
              children: "FIDO2_TokenBinding"
            }), " tokenBinding, const char * origin, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_struct/x_f_i_d_o2___public_key_attestation_credential/x_f_i_d_o2___public_key_attestation_credential",
              children: "FIDO2_PublicKeyAttestationCredential"
            }), " ** publicKeyAttestationCredential )"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "进行通行密钥的注册。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["FIDO2_ErrorCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/online-authentication-c/onlineauthentication_capi_module/passkey/passkey#hms_fido2_authenticate",
              children: "HMS_FIDO2_authenticate"
            }), "(const ", (0,jsx_runtime.jsx)(_components.a, {
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
            children: "进行通行密钥的认证。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通行密钥服务提供基于FIDO2标准协议的FIDO客户端实现，这里仅演示FIDO客户端相关API的使用，涉及FIDO服务器的相关处理由开发者自行实现，这里不做介绍，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fidoalliance.org/passkeys/",
        children: "FIDO2标准协议"
      }), "（见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/online-authentication-kit-guide/onlineauthentication-website-disclaimer",
        children: "网站链接免责声明"
      }), "）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在CMake脚本中链接相关动态库。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "target_link_libraries(projectName libfido2_ndk.z.so)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "需要业务方自行根据FIDO2标准协议部署FIDO服务器。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "注册通行密钥。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "获取能力信息，调用HMS_FIDO2_getClientCapability接口获取客户端能力列表，并且调用HMS_FIDO2_getPlatformAuthenticator接口获取平台认证器能力信息。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "#include \"OnlineAuthenticationKit/fido2_api.h\"\n\nFIDO2_ErrorCode TestGetClientCapability()\n{\n    // 获取客户端能力列表\n    FIDO2_CapabilityArray *capability = NULL;\n    FIDO2_ErrorCode ret = HMS_FIDO2_getClientCapability(&capability);\n\n    // 业务根据错误码判断异常类型，进行相应处理，详见错误码参考\n    if (ret != FIDO2_SUCCESS) {\n        HMS_FIDO2_CapabilityArray_Destroy(capability);\n        return ret;\n    }\n    return FIDO2_SUCCESS;\n}\n\nFIDO2_ErrorCode GetPlatformAuthenticator()\n{\n    // 获取平台认证器能力\n    FIDO2_AuthenticatorMetadataArray *authenticators = NULL;\n    FIDO2_ErrorCode ret = HMS_FIDO2_getPlatformAuthenticator(&authenticators);\n\n    // 业务根据错误码判断异常类型，进行相应处理，详见错误码参考\n    if (ret != FIDO2_SUCCESS) {\n        HMS_FIDO2_AuthenticatorMetadataArray_Destroy(authenticators);\n        return ret;\n    }\n    return FIDO2_SUCCESS;\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "访问FIDO服务器，获取注册报文，调用HMS_FIDO2_register接口进行注册。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "FIDO2_ErrorCode TestReg()\n{\n    // 初始化注册参数，init方法必须调用\n    FIDO2_CredentialCreationOptions options;\n    HMS_FIDO2_initCreationOptions(&options);\n\n    // FIDO服务器返回的注册报文，具体报文内容由业务方传入\n    FIDO2_PublicKeyCredentialCreationOptions publicKey;\n\n    // 业务方组装注册信息，包含是否需要用户介入以及注册报文\n    options.mediation = FIDO2_CONDITIONAL;\n    options.publicKey = publicKey;\n\n    // 初始化tokenBinding参数，业务方可不赋值，但init方法必须调用\n    FIDO2_TokenBinding tokenBinding;\n    HMS_FIDO2_initTokenBinding(&tokenBinding);\n\n    // 测试origin，具体内容由业务方设置\n    char *origin = \"http://www.fidotest.com\";\n\n    // 调用HMS_FIDO2_register进行通行密钥注册\n    FIDO2_PublicKeyAttestationCredential* publicKeyAttestationCredential = NULL;\n    FIDO2_ErrorCode ret = HMS_FIDO2_register(options, tokenBinding, origin, &publicKeyAttestationCredential);\n\n    // 业务根据错误码判断异常类型，进行相应处理，详见错误码参考\n    if (ret != FIDO2_SUCCESS) {\n        HMS_FIDO2_PublicKeyAttestationCredential_Destroy(publicKeyAttestationCredential);\n        return ret;\n    }\n    return FIDO2_SUCCESS;\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "应用使用注册结果（publicKeyAttestationCredential）组装注册响应报文，发送至FIDO服务端进行验证，获取注册结果报文。"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用通行密钥进行身份认证。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "获取能力信息，调用HMS_FIDO2_getClientCapability接口获取客户端能力列表，并且调用HMS_FIDO2_getPlatformAuthenticator接口获取平台认证器能力信息。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "#include \"OnlineAuthenticationKit/fido2_api.h\"\n\nFIDO2_ErrorCode TestGetClientCapability()\n{\n    // 获取客户端能力列表\n    FIDO2_CapabilityArray *capability = NULL;\n    FIDO2_ErrorCode ret = HMS_FIDO2_getClientCapability(&capability);\n\n    // 业务根据错误码判断异常类型，进行相应处理，详见错误码参考\n    if (ret != FIDO2_SUCCESS) {\n        HMS_FIDO2_CapabilityArray_Destroy(capability);\n        return ret;\n    }\n    return FIDO2_SUCCESS;\n}\n\nFIDO2_ErrorCode GetPlatformAuthenticator()\n{\n    // 获取平台认证器能力\n    FIDO2_AuthenticatorMetadataArray *authenticators = NULL;\n    FIDO2_ErrorCode ret = HMS_FIDO2_getPlatformAuthenticator(&authenticators);\n\n    // 业务根据错误码判断异常类型，进行相应处理，详见错误码参考\n    if (ret != FIDO2_SUCCESS) {\n        HMS_FIDO2_AuthenticatorMetadataArray_Destroy(authenticators);\n        return ret;\n    }\n    return FIDO2_SUCCESS;\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "访问FIDO服务器，获取认证报文，调用HMS_FIDO2_authenticate接口进行认证。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "FIDO2_ErrorCode TestAuth()\n{\n    // 初始化认证参数，init方法必须调用\n    FIDO2_CredentialRequestOptions options;\n    HMS_FIDO2_initRequestOptions(&options);\n\n    // FIDO服务器返回的认证报文，具体报文内容由业务方传入\n    FIDO2_PublicKeyCredentialRequestOptions publicKey;\n\n    // 业务方组装认证信息，包含是否需要用户介入以及认证报文\n    options.mediation = FIDO2_CONDITIONAL;\n    options.publicKey = publicKey;\n\n    // 初始化tokenBinding参数，业务方可不赋值，但init方法必须调用\n    FIDO2_TokenBinding tokenBinding;\n    HMS_FIDO2_initTokenBinding(&tokenBinding);\n\n    // 测试origin，具体内容由业务方设置\n    char *origin = \"http://www.fidotest.com\";\n\n    // 调用HMS_FIDO2_authenticate进行通行密钥认证\n    FIDO2_PublicKeyAssertionCredential *assertionCredential = NULL;\n    FIDO2_ErrorCode ret = HMS_FIDO2_authenticate(options, tokenBinding, origin, &assertionCredential);\n\n    // 业务根据错误码判断异常类型，进行相应处理，详见错误码参考\n    if (ret != FIDO2_SUCCESS) {\n        HMS_FIDO2_PublicKeyAssertionCredential_Destroy(assertionCredential);\n        return ret;\n    }\n    return FIDO2_SUCCESS;\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "应用使用认证结果（assertionCredential）组装认证响应报文，发送至FIDO服务端进行验证，获取认证结果报文。"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
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