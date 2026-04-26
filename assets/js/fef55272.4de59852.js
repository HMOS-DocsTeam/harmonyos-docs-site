"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["706646"], {
619283(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_online_authentication_kit_guide_onlineauthentication_ifaa_onlineauthentication_ifaa_md_fef_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-online-authentication-kit-guide-onlineauthentication-ifaa-onlineauthentication-ifaa-md-fef.json
var site_docs_system_security_online_authentication_kit_guide_onlineauthentication_ifaa_onlineauthentication_ifaa_md_fef_namespaceObject = JSON.parse('{"id":"system-security/online-authentication-kit-guide/onlineauthentication-ifaa/onlineauthentication-ifaa","title":"IFAA免密身份认证","description":"场景介绍","source":"@site/docs/system-security/online-authentication-kit-guide/onlineauthentication-ifaa/onlineauthentication-ifaa.md","sourceDirName":"system-security/online-authentication-kit-guide/onlineauthentication-ifaa","slug":"/system-security/online-authentication-kit-guide/onlineauthentication-ifaa/","permalink":"/harmonyos-docs-site/system-security/online-authentication-kit-guide/onlineauthentication-ifaa/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"IFAA免密身份认证","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/onlineauthentication-ifaa","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"FIDO免密身份认证","permalink":"/harmonyos-docs-site/system-security/online-authentication-kit-guide/onlineauthentication-fido/"},"next":{"title":"SOTER免密身份认证","permalink":"/harmonyos-docs-site/system-security/online-authentication-kit-guide/onlineauthentication-soter/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/online-authentication-kit-guide/onlineauthentication-ifaa/onlineauthentication-ifaa.md


const frontMatter = {
	title: 'IFAA免密身份认证',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/onlineauthentication-ifaa',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = 'IFAA免密身份认证';

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
}, {
  "value": "常见问题",
  "id": "常见问题",
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
        id: "ifaa免密身份认证",
        children: "IFAA免密身份认证"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "开通：提供移动端开通生物特征（指纹/3D人脸）IFAA免密身份认证的能力。使用用户已有的生物特征类型进行开通，会开通移动端对应生物特征类型的IFAA免密身份认证能力。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "认证：提供移动端认证生物特征（指纹/3D人脸）IFAA免密身份认证的能力。使用用户已开通的生物特征进行认证，认证成功；使用未开通的生物特征进行认证，认证失败。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "注销：提供移动端注销生物特征（指纹/3D人脸）IFAA免密身份认证的能力。使用用户已开通的生物特征类型进行注销，会注销移动端对应生物特征类型的IFAA免密身份认证能力。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "互联网金融身份认证联盟（IIFAA），全称为International Internet Finance Authentication Alliance，是一个生物识别框架，它由IIFAA联盟推出并持续维护。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "相关权限",
      children: "相关权限"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取生物识别权限：ohos.permission.ACCESS_BIOMETRIC。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开发者应用已接入IIFAA联盟，可以从IIFAA中心服务器获取签名数据。"
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
        src: (__webpack_require__(972936)/* ["default"] */.A) + "",
        width: "5100",
        height: "6600"
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
              href: "/ref/system-security-api/online-authentication-api/onlineauthentication_arkts/onlineauthentication-ifaa-api/onlineauthentication-ifaa-api#register",
              children: "register"
            }), "(registerData: Uint8Array): Promise<Uint8Array>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开通指定用户的指定生物信息类型（指纹/3D人脸）的IFAA免密身份认证能力。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/onlineauthentication_arkts/onlineauthentication-ifaa-api/onlineauthentication-ifaa-api#auth",
              children: "auth"
            }), "(authToken: Uint8Array, authData: Uint8Array): Promise<Uint8Array>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用指定用户的生物信息类型进行IFAA免密身份认证。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/onlineauthentication_arkts/onlineauthentication-ifaa-api/onlineauthentication-ifaa-api#deregistersync",
              children: "deregisterSync"
            }), "(deregisterData: Uint8Array): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注销指定用户指定生物信息类型（指纹/3D人脸）的IFAA免密身份认证能力。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/online-authentication-api/onlineauthentication_arkts/onlineauthentication-ifaa-api/onlineauthentication-ifaa-api#getanonymousidsync",
              children: "getAnonymousIdSync"
            }), "(userToken: Uint8Array): Uint8Array"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取移动端设备标识ID。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "注册IFAA免密身份认证。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { ifaa } from '@kit.OnlineAuthenticationKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n// 开发者根据IIFAA协议构造TLV入参，转换为Uint8Array, 再使用ifaa.getAnonymousIdSync接口。此处new Uint8Array([0])需要替换为开发者定义的用户标识。\nlet arg = new Uint8Array([0]);\nlet getAnonIdResult: Uint8Array = ifaa.getAnonymousIdSync(arg);\n\n// 开发者需使用getAnonIdResult从服务端获取签名后的开通数据\n// 开发者将开通数据（IIFAA协议的TLV格式）转换为Uint8Array, 再使用ifaa.register接口。此处new Uint8Array([0])需要替换为有效数据。\nlet TLV_Register_fp = new Uint8Array([0]);\nlet registerPromise: Promise<Uint8Array> = ifaa.register(TLV_Register_fp);\nregisterPromise.then(registerResult => {\n  console.info(\"Succeeded in doing register.\");\n  // 开通成功，开发者获取ifaa.register结果并处理。\n}).catch((err: BusinessError) =>{\n  console.error(`Failed to call register. Code: ${err.code}, message: ${err.message}`);\n  // 开通失败，开发者获取ifaa.register错误并处理。\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用IFAA免密身份认证进行认证。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { ifaa } from '@kit.OnlineAuthenticationKit';\nimport { userAuth } from '@kit.UserAuthenticationKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n// 开发者根据IIFAA协议构造TLV入参，转换为Uint8Array, 再使用ifaa.getAnonymousIdSync接口。arg需要替换开发者自定义数据。\nlet arg = new Uint8Array([0]);\nlet getAnonIdResult: Uint8Array = ifaa.getAnonymousIdSync(arg);\n\n// 开发者需使用getAnonIdResult从服务端获取签名后的认证数据\n\n// 获取此次免密支付的challenge\nlet ifaaChallenge: Uint8Array = ifaa.preAuthSync();\nlet authParam: userAuth.AuthParam = {\n  challenge: ifaaChallenge,\n  authType: [userAuth.UserAuthType.FINGERPRINT],\n  authTrustLevel: userAuth.AuthTrustLevel.ATL4,\n};\n// 使用preAuthResult请求身份认证\nlet userAuthInstance = userAuth.getUserAuthInstance(authParam,  {title: ' '});\nuserAuthInstance.on('result', {\n  async onResult (result) {\n    let authToken = result.token;\n    try {\n      // 生物特征认证成功后，调用IFAA认证\n      console.info(\"IFAA auth start\");\n      // 开发者将认证数据（IIFAA协议的TLV格式）转换为Uint8Array, 再使用ifaa.auth接口。此处new Uint8Array([0])需要替换为有效数据。\n      let TLV_Auth_fp = new Uint8Array([0]);\n      // 开发者根据业务需求选择同步/异步接口\n      let authResult: Uint8Array = ifaa.authSync(authToken, TLV_Auth_fp);\n      console.info(\"authSyn authResult\" + authResult);\n      // 开发者处理authResult\n    } catch (error) {\n      const err: BusinessError = error as BusinessError;\n      console.error(`Failed to call auth. Code is ${err.code}, message is ${err.message}`);\n    }\n  }\n});\nuserAuthInstance.start();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "注销IFAA免密身份认证。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { ifaa } from '@kit.OnlineAuthenticationKit'\n\n// 开发者根据IIFAA协议构造TLV入参，转换为Uint8Array, 再使用ifaa.getAnonymousIdSync接口。此处new Uint8Array([0])需要替换为开发者定义的用户标识。\nlet arg = new Uint8Array([0]);\nlet getAnonIdResult: Uint8Array = ifaa.getAnonymousIdSync(arg);\n\n// 开发者需使用getAnonymousId的结果从服务端获取签名后的注销数据\n// 开发者将注销数据（IIFAA协议的TLV格式）转换为Uint8Array, 再使用ifaa.deregisterSync接口。此处new Uint8Array([0])需要替换为有效数据。\nlet TLV_deregister_fp = new Uint8Array([0]);\nifaa.deregisterSync(TLV_deregister_fp);\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "常见问题",
      children: "常见问题"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "现象描述：开通IFAA免密身份认证失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可能原因：移动端设备没有联网。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "处理步骤：移动端设备连接WIFI或热点，再次尝试。"
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
972936(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798758-ab0e829b33d1f919db6987abf3cb534b.png");

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