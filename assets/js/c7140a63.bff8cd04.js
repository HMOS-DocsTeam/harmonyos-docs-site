"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["533551"], {
464267(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_device_security_kit_guide_devicesecurity_trustedauth_service_devicesecurity_trustedauth_bio_devicesecurity_trustedauth_verifybybio_devicesecurity_trustedauth_verifybybio_md_c71_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-device-security-kit-guide-devicesecurity-trustedauth-service-devicesecurity-trustedauth-bio-devicesecurity-trustedauth-verifybybio-devicesecurity-trustedauth-verifybybio-md-c71.json
var site_docs_system_security_device_security_kit_guide_devicesecurity_trustedauth_service_devicesecurity_trustedauth_bio_devicesecurity_trustedauth_verifybybio_devicesecurity_trustedauth_verifybybio_md_c71_namespaceObject = JSON.parse('{"id":"system-security/device-security-kit-guide/devicesecurity-trustedauth-service/devicesecurity-trustedauth-bio/devicesecurity-trustedauth-verifybybio/devicesecurity-trustedauth-verifybybio","title":"生物特征认证交易","description":"场景介绍","source":"@site/docs/system-security/device-security-kit-guide/devicesecurity-trustedauth-service/devicesecurity-trustedauth-bio/devicesecurity-trustedauth-verifybybio/devicesecurity-trustedauth-verifybybio.md","sourceDirName":"system-security/device-security-kit-guide/devicesecurity-trustedauth-service/devicesecurity-trustedauth-bio/devicesecurity-trustedauth-verifybybio","slug":"/system-security/device-security-kit-guide/devicesecurity-trustedauth-service/devicesecurity-trustedauth-bio/devicesecurity-trustedauth-verifybybio/","permalink":"/harmonyos-docs-site/system-security/device-security-kit-guide/devicesecurity-trustedauth-service/devicesecurity-trustedauth-bio/devicesecurity-trustedauth-verifybybio/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"生物特征认证交易","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/devicesecurity-trustedauth-verifybybio","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"开通生物特征认证能力","permalink":"/harmonyos-docs-site/system-security/device-security-kit-guide/devicesecurity-trustedauth-service/devicesecurity-trustedauth-bio/devicesecurity-trustedauth-enablebio/"},"next":{"title":"关闭指定生物类型认证能力","permalink":"/harmonyos-docs-site/system-security/device-security-kit-guide/devicesecurity-trustedauth-service/devicesecurity-trustedauth-bio/devicesecurity-trustedauth-del-bio/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/device-security-kit-guide/devicesecurity-trustedauth-service/devicesecurity-trustedauth-bio/devicesecurity-trustedauth-verifybybio/devicesecurity-trustedauth-verifybybio.md


const frontMatter = {
	title: '生物特征认证交易',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/devicesecurity-trustedauth-verifybybio',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '生物特征认证交易';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
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
  "value": "生物特征认证交易界面介绍",
  "id": "生物特征认证交易界面介绍",
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
        id: "生物特征认证交易",
        children: "生物特征认证交易"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在完成对应生物特征认证能力开通后，用户即可通过已绑定的生物特征（人脸或指纹）完成认证交易。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本功能目前仅在手机设备支持，目前仅支持绑定一个指纹/人脸用于支付认证，且需应用服务器端同步接入配合端云协同认证。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "业务流程",
      children: "业务流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(308872)/* ["default"] */.A) + "",
        width: "1068",
        height: "817"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["接口及使用方法请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/device-security-api/devicesecurity-arktsapi/devicesecurity-arktsapi-errcode/devicesecurity-arktsapi-errcode-trusted-auth/devicesecurity-arktsapi-errcode-trusted-auth",
        children: "API参考"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/system-security-api/device-security-api/devicesecurity-arktsapi/devicesecurity-trusted-auth-api/devicesecurity-trusted-auth-api#proccontentauthentication",
              children: "procContentAuthentication"
            }), "(challenge: Uint8Array, authID: bigint, authMsg: AuthReqParams, label: TUILable): Promise<AuthToken>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "交易信息处理接口"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-security-api/devicesecurity-arktsapi/devicesecurity-trusted-auth-api/devicesecurity-trusted-auth-api#getbiometricauthtoken",
              children: "getBiometricAuthToken"
            }), "(operType: OperateType, tuiAuthToken: Uint8Array, bioAuthToken: Uint8Array): Promise<AuthToken>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取生物特征交易认证的authToken信息"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "生物特征认证交易界面介绍",
      children: "生物特征认证交易界面介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如图表示使用人脸进行交易认证对应的UI界面示例，当用户确认交易信息内容后，则会拉起系统人脸认证界面完成对应生物特征认证交易。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(703028)/* ["default"] */.A) + "",
        width: "525",
        height: "476"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入huks 、userAuth 、trustedAuthentication 和相关依赖模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { resourceManager } from '@kit.LocalizationKit'\nimport { huks } from '@kit.UniversalKeystoreKit';\nimport { userAuth } from '@kit.UserAuthenticationKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { trustedAuthentication } from '@kit.DeviceSecurityKit';\nimport { cryptoFramework } from '@kit.CryptoArchitectureKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { common } from '@kit.AbilityKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "首先开发者需要在服务器查询对应账户是否已开通对应生物特征认证能力，在确认开通后方可发起生物特征认证交易。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["发起生物特征认证交易前，需从服务器获取当前账号在", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/device-security-kit-guide/devicesecurity-trustedauth-service/devicesecurity-trustedauth-pwdmng/devicesecurity-trustedauth-setpwd",
            children: "设置数字盾密码"
          }), "时获取的authID。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["参考密钥管理服务提供的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-signing-signature-verification/huks-signing-signature-verification-arkts",
            children: "签名/验签指导"
          }), "，初始化签名会话。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用数字盾交易信息处理接口", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/device-security-api/devicesecurity-arktsapi/devicesecurity-trusted-auth-api/devicesecurity-trusted-auth-api#proccontentauthentication",
            children: "procContentAuthentication"
          }), "发起生物特征认证前的交易信息确认申请。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "async function FaceAuthContent(challenge: Uint8Array, context: common.UIAbilityContext):Promise<trustedAuthentication.AuthToken> {\n  try {\n    const authID: bigint = 11842183505170721246n; //实际填充为从服务器获取到的账号对应的authID值\n    const resourceMgr: resourceManager.ResourceManager = context.resourceManager;\n    const fileData : Uint8Array = await resourceMgr.getRawFileContent('test_logo_rgba.png'); //实际使用时请替换为应用要在TUI界面展示的logo图片名称\n    const reqParams:trustedAuthentication.AuthReqParams = {\n      reqType: trustedAuthentication.AuthType.AUTH_TYPE_FACE,\n      authContent: [\"用户：王xx\", \"账号：95588180804408xxxx\", \"交易金额：1000000000\"], //实际使用时填充为交易信息，每一行交易信息为其中的一个字符串成员\n    }\n    const buffer = fileData.buffer;\n    const label:trustedAuthentication.TUILable = {\n      image: buffer as ArrayBuffer,\n      title: \"人脸交易认证\",\n    }\n    const result = await trustedAuthentication.procContentAuthentication(challenge, authID, reqParams, label);\n    return result;\n  } catch (err) {\n    hilog.error(0x0000, 'testTag', `Failed to procContentAuthentication, code:${err.code}, message:${err.message}`);\n    throw new Error('Content verify by face failed:' + (err as BusinessError).message);\n  }\n}\nconst rand = cryptoFramework.createRandom();\nconst len: number = 32;\nconst challenge: Uint8Array = rand?.generateRandomSync(len)?.data; //实际使用时请替换为通过UniversalKeystoreKit初始化会话获取的challenge\nlet context = this.getUIContext().getHostContext() as common.UIAbilityContext;\nconst authToken: trustedAuthentication.AuthToken = await FaceAuthContent(challenge, context);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过用户认证服务提供的接口，拉起生物特征认证控件并", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/user-authentication-kit/user-authentication-dev/start-authentication",
            children: "发起认证"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当订阅的生物认证结果获取到后，将数字盾交易信息确认结果和生物特征认证结果统一整合，发起生物特征认证交易请求。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let tuiAuthToken = new Uint8Array(1024);//实际使用时请替换为步骤5获取的交易信息确认authToken\nlet bioAuthToken = new Uint8Array(1024);//实际使用时请替换为步骤6获取的生物特征认证authToken\nlet operType = trustedAuthentication.OperateType.OPERATE_TYPE_CONTENT_AUTH;\ntrustedAuthentication.getBiometricAuthToken(operType, tuiAuthToken, bioAuthToken).then((newBioAuthToken) => {\n  let authToken = newBioAuthToken.authToken as Uint8Array;\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["参考密钥管理服务提供的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-signing-signature-verification/huks-signing-signature-verification-arkts",
            children: "签名/验签指导"
          }), ", 对返回的authToken数据和交易信息明文进行签名，并结束签名会话。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用在交易信息验签通过后，可在应用对应服务器比对已绑定的生物特征凭证（credential）与当前交易认证采集的生物特征标识符（credential ID），确保账号绑定的生物特征信息与交易请求认证使用的生物特征信息的一致性。"
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
308872(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958396-d585a626856c729765b13d3e30a1c4a0.jpg");

},
703028(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478397-af2124df8fa18e9c35a2489053f9c2e8.png");

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