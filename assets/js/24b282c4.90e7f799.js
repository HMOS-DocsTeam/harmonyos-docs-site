"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["657335"], {
23275(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_device_security_kit_guide_devicesecurity_trustedauth_service_devicesecurity_trustedauth_pwdmng_devicesecurity_trustedauth_modifypwd_devicesecurity_trustedauth_modifypwd_md_24b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-device-security-kit-guide-devicesecurity-trustedauth-service-devicesecurity-trustedauth-pwdmng-devicesecurity-trustedauth-modifypwd-devicesecurity-trustedauth-modifypwd-md-24b.json
var site_docs_system_security_device_security_kit_guide_devicesecurity_trustedauth_service_devicesecurity_trustedauth_pwdmng_devicesecurity_trustedauth_modifypwd_devicesecurity_trustedauth_modifypwd_md_24b_namespaceObject = JSON.parse('{"id":"system-security/device-security-kit-guide/devicesecurity-trustedauth-service/devicesecurity-trustedauth-pwdmng/devicesecurity-trustedauth-modifypwd/devicesecurity-trustedauth-modifypwd","title":"修改数字盾密码","description":"场景介绍","source":"@site/docs/system-security/device-security-kit-guide/devicesecurity-trustedauth-service/devicesecurity-trustedauth-pwdmng/devicesecurity-trustedauth-modifypwd/devicesecurity-trustedauth-modifypwd.md","sourceDirName":"system-security/device-security-kit-guide/devicesecurity-trustedauth-service/devicesecurity-trustedauth-pwdmng/devicesecurity-trustedauth-modifypwd","slug":"/system-security/device-security-kit-guide/devicesecurity-trustedauth-service/devicesecurity-trustedauth-pwdmng/devicesecurity-trustedauth-modifypwd/","permalink":"/harmonyos-docs-site/system-security/device-security-kit-guide/devicesecurity-trustedauth-service/devicesecurity-trustedauth-pwdmng/devicesecurity-trustedauth-modifypwd/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"修改数字盾密码","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/devicesecurity-trustedauth-modifypwd","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"设置数字盾密码","permalink":"/harmonyos-docs-site/system-security/device-security-kit-guide/devicesecurity-trustedauth-service/devicesecurity-trustedauth-pwdmng/devicesecurity-trustedauth-setpwd/"},"next":{"title":"关闭数字盾服务","permalink":"/harmonyos-docs-site/system-security/device-security-kit-guide/devicesecurity-trustedauth-service/devicesecurity-trustedauth-pwdmng/devicesecurity-trustedauth-disablepwd/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/device-security-kit-guide/devicesecurity-trustedauth-service/devicesecurity-trustedauth-pwdmng/devicesecurity-trustedauth-modifypwd/devicesecurity-trustedauth-modifypwd.md


const frontMatter = {
	title: '修改数字盾密码',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/devicesecurity-trustedauth-modifypwd',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '修改数字盾密码';

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
  "value": "修改数字盾密码界面介绍",
  "id": "修改数字盾密码界面介绍",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "修改数字盾密码",
        children: "修改数字盾密码"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "激活数字盾后，用户可在完成旧密码认证后，修改数字盾密码信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本功能目前仅在手机设备支持。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "业务流程",
      children: "业务流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(508156)/* ["default"] */.A) + "",
        width: "832",
        height: "446"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["接口及使用方法请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/device-security-api/devicesecurity-arktsapi/devicesecurity-trusted-auth-api/devicesecurity-trusted-auth-api",
        children: "API参考"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-security-api/devicesecurity-arktsapi/devicesecurity-trusted-auth-api/devicesecurity-trusted-auth-api#modifytrustedauthenticationpwd",
              children: "modifyTrustedAuthenticationPwd"
            }), "(challenge: Uint8Array, pwdInfo: PasswordInfo, authID: bigint, label: TUILable): Promise<AuthToken>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "修改数字盾密码"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "修改数字盾密码界面介绍",
      children: "修改数字盾密码界面介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如图1、图2为修改数字盾密码时对应的TUI界面示例，用户需使用旧密码认证通过后，方可设置新密码。密码认证失败时，剩余认证次数减1，当剩余认证次数为0时，则锁定数字盾服务。新密码长度、对应TUI应用图标以及当前应用场景说明均由开发者调用接口时传入。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 旧密码认证"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(500433)/* ["default"] */.A) + "",
        width: "373",
        height: "825"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图2"
        })
      }), " 新密码设置"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(449954)/* ["default"] */.A) + "",
        width: "377",
        height: "833"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入huks 、trustedAuthentication 和相关依赖模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { resourceManager } from '@kit.LocalizationKit'\nimport { huks } from '@kit.UniversalKeystoreKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { trustedAuthentication } from '@kit.DeviceSecurityKit';\nimport { cryptoFramework } from '@kit.CryptoArchitectureKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { common } from '@kit.AbilityKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["修改密码前，需从服务器获取当前账号在", (0,jsx_runtime.jsx)(_components.a, {
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
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用数字盾服务修改密码接口，发起数字盾密码修改申请。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 修改数字盾密码\nasync function ModifyPwd(challenge: Uint8Array, context: common.UIAbilityContext):Promise<trustedAuthentication.AuthToken> {\n try {\n   const passwordInfo: trustedAuthentication.PasswordInfo = {\n     pwdType: trustedAuthentication.PasswordType.PASSWORD_TYPE_DIGITAL,\n     pwdMaxLength: 10,\n     pwdMinLength: 6,\n     maxAuthFailCount: 6,\n   };\n   const authID: bigint = 1687413472599354502n;//实际填充为从服务器获取到的账号对应的authID值\n   const resourceMgr: resourceManager.ResourceManager = context.resourceManager;\n   const fileData : Uint8Array = await resourceMgr.getRawFileContent('test_logo_rgba.png'); //实际使用时请替换为应用要在TUI界面展示的logo图片名称\n   const buffer = fileData.buffer;\n   const label:trustedAuthentication.TUILable = {\n     image: buffer as ArrayBuffer,\n     title: \"修改密码\",\n   }\n   const authToken = await trustedAuthentication.modifyTrustedAuthenticationPwd(challenge, passwordInfo, authID, label);\n   return authToken;\n } catch (err) {\n   hilog.error(0x0000, 'testTag', `Failed to modifyTrustedAuthenticationPwd, code:${err.code}, message:${err.message}`);\n   throw new Error('Modify password failed:' + (err as BusinessError).message);\n }\n}\nconst rand = cryptoFramework.createRandom();\nconst len: number = 32;\nconst challenge: Uint8Array = rand?.generateRandomSync(len)?.data;//实际使用时请替换为通过UniversalKeystoreKit初始化会话获取的challenge\nlet context = this.getUIContext().getHostContext() as common.UIAbilityContext;\nconst authToken: trustedAuthentication.AuthToken = await ModifyPwd(challenge, context);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["参考密钥管理服务提供的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-signing-signature-verification/huks-signing-signature-verification-arkts",
            children: "签名/验签指导"
          }), ", 对通过修改密码获取到的authToken数据进行签名，并结束会话。"]
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
449954(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438437-39737006a76c6b4951012186991bd60b.png");

},
500433(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798742-657946640cf319ffbed1435a2c7feb32.png");

},
508156(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478391-2d3d1cee23cb5c56b2c82ebb4663f221.jpg");

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