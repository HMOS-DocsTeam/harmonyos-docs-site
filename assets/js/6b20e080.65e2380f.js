"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["253679"], {
804033(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_online_authentication_kit_guide_onlineauthentication_soter_onlineauthentication_soter_md_6b2_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-online-authentication-kit-guide-onlineauthentication-soter-onlineauthentication-soter-md-6b2.json
var site_docs_system_security_online_authentication_kit_guide_onlineauthentication_soter_onlineauthentication_soter_md_6b2_namespaceObject = JSON.parse('{"id":"system-security/online-authentication-kit-guide/onlineauthentication-soter/onlineauthentication-soter","title":"SOTER免密身份认证","description":"场景介绍","source":"@site/docs/system-security/online-authentication-kit-guide/onlineauthentication-soter/onlineauthentication-soter.md","sourceDirName":"system-security/online-authentication-kit-guide/onlineauthentication-soter","slug":"/system-security/online-authentication-kit-guide/onlineauthentication-soter/","permalink":"/harmonyos-docs-site/system-security/online-authentication-kit-guide/onlineauthentication-soter/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"SOTER免密身份认证","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/onlineauthentication-soter","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"IFAA免密身份认证","permalink":"/harmonyos-docs-site/system-security/online-authentication-kit-guide/onlineauthentication-ifaa/"},"next":{"title":"概述","permalink":"/harmonyos-docs-site/system-security/online-authentication-kit-guide/onlineauthentication-passkey/onlineauthentication-passkey-intro/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/online-authentication-kit-guide/onlineauthentication-soter/onlineauthentication-soter.md


const frontMatter = {
	title: 'SOTER免密身份认证',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/onlineauthentication-soter',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = 'SOTER免密身份认证';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "基本概念",
  "id": "基本概念",
  "level": 2
}, {
  "value": "相关权限",
  "id": "相关权限",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "业务流程",
  "id": "业务流程",
  "level": 2
}, {
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
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "soter免密身份认证",
        children: "SOTER免密身份认证"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户可以利用生物特征来代替传统的密码验证，实现免密身份认证。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "开通：提供移动端开通SOTER生物特征（指纹/3D人脸）免密身份认证的能力。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "认证：提供移动端采用生物特征（指纹/3D人脸）进行SOTER免密身份认证的能力。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "注销：提供移动端注销SOTER生物特征（指纹/3D人脸）免密身份认证的能力。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SOTER旨在提供一套生物认证平台和标准，使得业务可以采用设备上的传感器（如人脸传感器/指纹传感器）进行安全、高效的免密登录、免密支付等操作，当前已广泛应用于微信小程序/公众号、指纹支付等业务场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "相关权限",
      children: "相关权限"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "获取网络权限：ohos.permission.INTERNET。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "获取振动权限：ohos.permission.VIBRATE。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "获取生物识别权限：ohos.permission.ACCESS_BIOMETRIC。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开发者应用需要部署SOTER服务器。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "移动端设备需要支持生物特征（指纹/3D人脸），查询当前移动端设备是否支持ATL4级别的认证可信等级。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { BusinessError } from '@kit.BasicServicesKit';\nimport { userAuth } from '@kit.UserAuthenticationKit';\n\ntry {\n  // 示例，查询设备人脸识别是否支持ATL4级别的认证可信等级\n  userAuth.getAvailableStatus(userAuth.UserAuthType.FACE, userAuth.AuthTrustLevel.ATL4);\n  console.info('current auth trust level is supported');\n} catch (error) {\n  const err: BusinessError = error as BusinessError;\n  console.error(`current auth trust level is not supported. Code is ${err?.code}, message is ${err?.message}`);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "移动端设备使用此服务时需要处于联网状态。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "业务流程",
      children: "业务流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(626356)/* ["default"] */.A) + "",
        width: "1869",
        height: "2475"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " 开通、认证、注销的所需要的接口"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/system-security-api/online-authentication-api/onlineauthentication_arkts/onlineauthentication-soter-api/onlineauthentication-soter-api#generateappsecurekey",
              children: "generateAppSecureKey"
            }), "(keyType: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/onlineauthentication_arkts/onlineauthentication-soter-api/onlineauthentication-soter-api#keytype",
              children: "KeyType"
            }), "): Promise<Uint8Array>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "生成应用密钥。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/onlineauthentication_arkts/onlineauthentication-soter-api/onlineauthentication-soter-api#generateauthkey",
              children: "generateAuthKey"
            }), "(keyAlias: string, keyType: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/onlineauthentication_arkts/onlineauthentication-soter-api/onlineauthentication-soter-api#keytype",
              children: "KeyType"
            }), "): Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/onlineauthentication_arkts/onlineauthentication-soter-api/onlineauthentication-soter-api#signedresult",
              children: "SignedResult"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "生成认证密钥。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/onlineauthentication_arkts/onlineauthentication-soter-api/onlineauthentication-soter-api#generatechallengesync",
              children: "generateChallengeSync"
            }), "(keyAlias: string): Uint8Array"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "生成Challenge。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/onlineauthentication_arkts/onlineauthentication-soter-api/onlineauthentication-soter-api#signwithauthkeysync",
              children: "signWithAuthKeySync"
            }), "(keyAlias: string, authToken: Uint8Array, info: string): ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/onlineauthentication_arkts/onlineauthentication-soter-api/onlineauthentication-soter-api#signedresult",
              children: "SignedResult"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用认证密钥对业务数据签名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/onlineauthentication_arkts/onlineauthentication-soter-api/onlineauthentication-soter-api#deleteauthkey",
              children: "deleteAuthKey"
            }), "(keyAlias: string): Promise<void>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除认证密钥。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入SOTER模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { soter } from '@kit.OnlineAuthenticationKit';\nimport { userAuth } from '@kit.UserAuthenticationKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "生成应用密钥和认证密钥用于后续的开通、认证流程。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let keyType: soter.KeyType = soter.KeyType.ECC_P256; // 加密类型，只支持ECC_P256\nlet keyAlias: string = 'keyAlias'; // 开发者自定义密钥别名\n\n// 生成应用密钥\nlet appSecureKey: Promise<Uint8Array> = soter.generateAppSecureKey(keyType);\n// 生成AuthKey\nlet authKey: Promise<soter.SignedResult> = soter.generateAuthKey(keyAlias, keyType);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用认证密钥签名，实现SOTER免密认证。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let keyType: soter.KeyType = soter.KeyType.ECC_P256; // 加密类型，只支持ECC_P256\nlet keyAlias: string = 'keyAlias'; // 开发者自定义密钥别名\nlet info: string = 'Message to be signed.'; // info需要开发者的三方应用服务器下发，SOTER服务完成签名后需要重新上传给三方应用服务器\n\n// 获取此次免密支付的challenge\nlet soterChallenge: Uint8Array = soter.generateChallengeSync(keyAlias);\nlet authParam: userAuth.AuthParam = {\n  challenge: soterChallenge,\n  authType: [userAuth.UserAuthType.FINGERPRINT],\n  authTrustLevel: userAuth.AuthTrustLevel.ATL4,\n};\n// 使用preAuthResult请求身份认证\nlet userAuthInstance = userAuth.getUserAuthInstance(authParam,  {title: ' '});\n// 未获取到authToken则会返回错误码1。\nuserAuthInstance.on('result', {\n  async onResult (result) {\n    let authToken = result.token;\n    try {\n      // 生物特征认证成功后，调用soter认证\n      console.info('soter auth start');\n      // 使用soter.signWithAuthKeySync接口为待认证数据签名。开发者根据业务需求选择同步/异步接口。\n      let authResult: soter.SignedResult = soter.signWithAuthKeySync(keyAlias, authToken, info);\n      console.info('Succeeded in doing authSyn authResult');\n      // 开发者处理authResult\n    } catch (err) {\n      console.error(`Failed to signWithAuthKeySync. Code: ${err.code}, message: ${err.message}`);\n    }\n  }\n});\nuserAuthInstance.start();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "关闭免密认证时，删除认证密钥。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 删除AuthKey\nsoter.deleteAuthKey(keyAlias);\n"
          })
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
626356(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438453-cebb8858be71def5bf7c009aedf0b232.png");

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