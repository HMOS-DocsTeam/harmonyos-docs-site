"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["283265"], {
210346(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_online_authentication_kit_guide_onlineauthentication_passkey_onlineauthentication_passkey_arkts_onlineauthentication_passkey_arkts_md_d72_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-online-authentication-kit-guide-onlineauthentication-passkey-onlineauthentication-passkey-arkts-onlineauthentication-passkey-arkts-md-d72.json
var site_docs_system_security_online_authentication_kit_guide_onlineauthentication_passkey_onlineauthentication_passkey_arkts_onlineauthentication_passkey_arkts_md_d72_namespaceObject = JSON.parse('{"id":"system-security/online-authentication-kit-guide/onlineauthentication-passkey/onlineauthentication-passkey-arkts/onlineauthentication-passkey-arkts","title":"通行密钥身份认证（ArkTS）","description":"接口说明","source":"@site/docs/system-security/online-authentication-kit-guide/onlineauthentication-passkey/onlineauthentication-passkey-arkts/onlineauthentication-passkey-arkts.md","sourceDirName":"system-security/online-authentication-kit-guide/onlineauthentication-passkey/onlineauthentication-passkey-arkts","slug":"/system-security/online-authentication-kit-guide/onlineauthentication-passkey/onlineauthentication-passkey-arkts/","permalink":"/harmonyos-docs-site/system-security/online-authentication-kit-guide/onlineauthentication-passkey/onlineauthentication-passkey-arkts/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"通行密钥身份认证（ArkTS）","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/onlineauthentication-passkey-arkts","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"概述","permalink":"/harmonyos-docs-site/system-security/online-authentication-kit-guide/onlineauthentication-passkey/onlineauthentication-passkey-intro/"},"next":{"title":"通行密钥身份认证（C/C++）","permalink":"/harmonyos-docs-site/system-security/online-authentication-kit-guide/onlineauthentication-passkey/onlineauthentication-passkey-cpp/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/online-authentication-kit-guide/onlineauthentication-passkey/onlineauthentication-passkey-arkts/onlineauthentication-passkey-arkts.md


const frontMatter = {
	title: '通行密钥身份认证（ArkTS）',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/onlineauthentication-passkey-arkts',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '通行密钥身份认证（ArkTS）';

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
        id: "通行密钥身份认证arkts",
        children: "通行密钥身份认证（ArkTS）"
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/onlineauthentication_arkts/onlineauthentication-passkey-api/onlineauthentication-passkey-api#getclientcapabilities",
              children: "getClientCapabilities"
            }), "(context: common.Context): Promise<Map<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/onlineauthentication_arkts/onlineauthentication-passkey-api/onlineauthentication-passkey-api#clientcapability",
              children: "ClientCapability"
            }), ", boolean>>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询当前设备支持的客户端能力列表。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/onlineauthentication_arkts/onlineauthentication-passkey-api/onlineauthentication-passkey-api#getplatformauthenticators",
              children: "getPlatformAuthenticators"
            }), "(context: common.Context): Promise<Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/onlineauthentication_arkts/onlineauthentication-passkey-api/onlineauthentication-passkey-api#authenticatormetadata",
              children: "AuthenticatorMetadata"
            }), ">>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询当前设备支持的平台认证器能力列表（人脸、指纹、PIN码）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/onlineauthentication_arkts/onlineauthentication-passkey-api/onlineauthentication-passkey-api#register",
              children: "register"
            }), "(context: common.Context, options: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/onlineauthentication_arkts/onlineauthentication-passkey-api/onlineauthentication-passkey-api#credentialcreationoptions",
              children: "CredentialCreationOptions"
            }), ", tokenBinding?: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/onlineauthentication_arkts/onlineauthentication-passkey-api/onlineauthentication-passkey-api#tokenbinding",
              children: "TokenBinding"
            }), "): Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/onlineauthentication_arkts/onlineauthentication-passkey-api/onlineauthentication-passkey-api#publickeyattestationcredential",
              children: "PublicKeyAttestationCredential"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "进行通行密钥的注册。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/onlineauthentication_arkts/onlineauthentication-passkey-api/onlineauthentication-passkey-api#authenticate",
              children: "authenticate"
            }), "(context: common.Context, options: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/onlineauthentication_arkts/onlineauthentication-passkey-api/onlineauthentication-passkey-api#credentialrequestoptions",
              children: "CredentialRequestOptions"
            }), ", tokenBinding?: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/onlineauthentication_arkts/onlineauthentication-passkey-api/onlineauthentication-passkey-api#tokenbinding",
              children: "TokenBinding"
            }), "): Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/onlineauthentication_arkts/onlineauthentication-passkey-api/onlineauthentication-passkey-api#publickeyassertioncredential",
              children: "PublicKeyAssertionCredential"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "进行通行密钥的认证。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通行密钥服务提供基于FIDO2标准协议的FIDO客户端实现，这里仅演示FIDO客户端相关API的使用，涉及FIDO服务器的相关处理由开发者自行实现，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fidoalliance.org/passkeys/",
        children: "FIDO2标准协议"
      }), "（见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/online-authentication-kit-guide/onlineauthentication-website-disclaimer",
        children: "网站链接免责声明"
      }), "）。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "需要业务方自行根据FIDO2标准协议部署FIDO服务器。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入相关模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { common } from '@kit.AbilityKit';\nimport { fido2 } from '@kit.OnlineAuthenticationKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "注册通行密钥。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "获取能力信息，调用getClientCapabilities接口获取客户端能力列表，并且调用getPlatformAuthenticators接口获取平台认证器能力信息。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "@Entry\n@Component\nstruct PasskeyInvokePage {\n  private uiContext = this.getUIContext().getHostContext();\n\n  private async invokeGetClientCapabilities() {\n    try {\n      // 获取客户端能力列表\n      let clientCapabilities: Map<fido2.ClientCapability, boolean> = await fido2.getClientCapabilities(this.uiContext);\n      console.info(\"Succeeded in doing getClientCapabilities.\");\n      // 业务处理clientCapabilities\n    } catch (error) {\n      const err: BusinessError = error as BusinessError;\n      console.error(`Failed to call getClientCapabilities. Code is ${err.code}, message is ${err.message}`);\n      // 业务根据错误码判断异常类型，进行相应处理，详见错误码参考\n    }\n  }\n\n  private async invokeGetPlatformAuthenticators() {\n    try {\n      // 获取平台认证器能力\n      let platformAuthenticators: Array<fido2.AuthenticatorMetadata> = await fido2.getPlatformAuthenticators(this.uiContext);\n      console.info(\"Succeeded in doing getPlatformAuthenticators.\");\n      // 业务处理platformAuthenticators\n    } catch (error) {\n      const err: BusinessError = error as BusinessError;\n      console.error(`Failed to call getPlatformAuthenticators. Code is ${err.code}, message is ${err.message}`);\n      // 业务根据错误码判断异常类型，进行相应处理，详见错误码参考\n    }\n  }\n\n  build() {\n    // 业务UI界面\n  }\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "访问FIDO服务器，获取注册报文，调用register接口进行注册。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "// pkOptions为应用从FIDO服务端获取的注册报文, credentialCreationOp为应用组装注册信息\nlet credentialCreationOp: fido2.CredentialCreationOptions = {\n  publicKey: pkOptions\n};\n\ntry {\n  // 调用register进行通行密钥注册\n  let publicKeyAttestationCredential: fido2.PublicKeyAttestationCredential =\n    await fido2.register(this.uiContext, credentialCreationOp);\n} catch (error) {\n  let message = (error as BusinessError).message;\n  let code = (error as BusinessError).code;\n  console.error(`Failed to call register error code is ${code}, message is ${message}`);\n  // 业务根据错误码判断异常类型，进行相应处理，详见错误码参考\n}\n"
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
              children: "获取能力信息，调用getClientCapabilities接口获取客户端能力列表，并且调用getPlatformAuthenticators接口获取平台认证器能力信息。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "// 使用uiContext需要获取页面UIAbility的Context，一个页面获取一次即可\nlet uiContext: common.UIAbilityContext = getContext(this) as common.UIAbilityContext;\n\ntry {\n  // 获取客户端能力列表\n  let clientCapabilities: Map<fido2.ClientCapability, boolean> = await fido2.getClientCapabilities(this.uiContext);\n  console.info(\"Succeeded in doing getClientCapabilities.\");\n} catch (error) {\n  let message = (error as BusinessError).message;\n  let code = (error as BusinessError).code;\n  console.error(`Failed to call getClientCapabilities error code is ${code}, message is ${message}`);\n  // 业务根据错误码判断异常类型，进行相应处理，详见错误码参考\n}\n\ntry {\n  // 获取平台认证器能力\n  let platformAuthenticators: Array<fido2.AuthenticatorMetadata> =\n    await fido2.getPlatformAuthenticators(this.uiContext);\n  console.info(\"Succeeded in doing getPlatformAuthenticators.\");\n} catch (error) {\n  let message = (error as BusinessError).message;\n  let code = (error as BusinessError).code;\n  console.error(`Failed to call getPlatformAuthenticators error code is ${code}, message is ${message}`);\n  // 业务根据错误码判断异常类型，进行相应处理，详见错误码参考\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "访问FIDO服务器，获取认证报文，调用authenticate接口进行认证。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "// authPub为应用从FIDO服务端获取的认证报文，authCredentialRequestOptions为应用组装的认证信息\nlet authCredentialRequestOptions: fido2.CredentialRequestOptions = {\n  publicKey: authPub,\n  mediation: \"optional\" as fido2.CredentialMediationRequirement\n}\n\ntry {\n  // 调用authenticate接口进行认证\n  let pkAssertionCredential: fido2.PublicKeyAssertionCredential =\n    await fido2.authenticate(this.uiContext, authCredentialRequestOptions);\n} catch (error) {\n  let message = (error as BusinessError).message;\n  let code = (error as BusinessError).code;\n  console.error(`Failed to call authenticateerror code is ${code}, message is ${message}`);\n  // 业务根据错误码判断异常类型，进行相应处理，详见错误码参考\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "应用使用认证结果（pkAssertionCredential）组装认证响应报文，发送至FIDO服务端进行验证，获取认证结果报文。"
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