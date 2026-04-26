"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["641913"], {
316769(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_device_security_kit_guide_devicesecurity_trustedauth_service_devicesecurity_trustedauth_pwdmng_devicesecurity_trustedauth_disablepwd_devicesecurity_trustedauth_disablepwd_md_9c6_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-device-security-kit-guide-devicesecurity-trustedauth-service-devicesecurity-trustedauth-pwdmng-devicesecurity-trustedauth-disablepwd-devicesecurity-trustedauth-disablepwd-md-9c6.json
var site_docs_system_security_device_security_kit_guide_devicesecurity_trustedauth_service_devicesecurity_trustedauth_pwdmng_devicesecurity_trustedauth_disablepwd_devicesecurity_trustedauth_disablepwd_md_9c6_namespaceObject = JSON.parse('{"id":"system-security/device-security-kit-guide/devicesecurity-trustedauth-service/devicesecurity-trustedauth-pwdmng/devicesecurity-trustedauth-disablepwd/devicesecurity-trustedauth-disablepwd","title":"关闭数字盾服务","description":"场景介绍","source":"@site/docs/system-security/device-security-kit-guide/devicesecurity-trustedauth-service/devicesecurity-trustedauth-pwdmng/devicesecurity-trustedauth-disablepwd/devicesecurity-trustedauth-disablepwd.md","sourceDirName":"system-security/device-security-kit-guide/devicesecurity-trustedauth-service/devicesecurity-trustedauth-pwdmng/devicesecurity-trustedauth-disablepwd","slug":"/system-security/device-security-kit-guide/devicesecurity-trustedauth-service/devicesecurity-trustedauth-pwdmng/devicesecurity-trustedauth-disablepwd/","permalink":"/harmonyos-docs-site/system-security/device-security-kit-guide/devicesecurity-trustedauth-service/devicesecurity-trustedauth-pwdmng/devicesecurity-trustedauth-disablepwd/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"关闭数字盾服务","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/devicesecurity-trustedauth-disablepwd","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"修改数字盾密码","permalink":"/harmonyos-docs-site/system-security/device-security-kit-guide/devicesecurity-trustedauth-service/devicesecurity-trustedauth-pwdmng/devicesecurity-trustedauth-modifypwd/"},"next":{"title":"交易信息密码认证","permalink":"/harmonyos-docs-site/system-security/device-security-kit-guide/devicesecurity-trustedauth-service/devicesecurity-trustedauth-verifybypwd/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/device-security-kit-guide/devicesecurity-trustedauth-service/devicesecurity-trustedauth-pwdmng/devicesecurity-trustedauth-disablepwd/devicesecurity-trustedauth-disablepwd.md


const frontMatter = {
	title: '关闭数字盾服务',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/devicesecurity-trustedauth-disablepwd',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '关闭数字盾服务';

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
  "value": "关闭数字盾服务界面介绍",
  "id": "关闭数字盾服务界面介绍",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "密码认证方式关闭数字盾服务",
  "id": "密码认证方式关闭数字盾服务",
  "level": 3
}, {
  "value": "无需密码认证方式关闭数字盾服务",
  "id": "无需密码认证方式关闭数字盾服务",
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
        id: "关闭数字盾服务",
        children: "关闭数字盾服务"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当用户不再使用数字盾时，可以通过密码认证主动发起关闭数字盾的操作；若用户忘记密码或连续密码认证失败次数达到最大限制导致数字盾密码锁定，盾应用将在重新激活数字盾时，无需进行密码认证直接关闭最初激活的数字盾，并通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/device-security-kit-guide/devicesecurity-trustedauth-service/devicesecurity-trustedauth-pwdmng/devicesecurity-trustedauth-setpwd",
        children: "设置数字盾密码"
      }), "重新创建新的数字盾密码。"]
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
        src: (__webpack_require__(952983)/* ["default"] */.A) + "",
        width: "831",
        height: "453"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当不需要密码认证进行关闭数字盾申请时，则无需和Universal Keystore Kit交互，使用随机生成的challenge完成关闭数字盾操作。"
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
              href: "/ref/system-security-api/device-security-api/devicesecurity-arktsapi/devicesecurity-trusted-auth-api/devicesecurity-trusted-auth-api#disabletrustedauthentication",
              children: "disableTrustedAuthentication"
            }), "(challenge: Uint8Array, needAuth: boolean, authID: bigint, label: TUILable): Promise<AuthToken>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关闭数字盾服务"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "关闭数字盾服务界面介绍",
      children: "关闭数字盾服务界面介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如图为需要进行密码认证的方式关闭数字盾服务时对应的TUI界面示例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(650591)/* ["default"] */.A) + "",
        width: "375",
        height: "828"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "密码认证方式关闭数字盾服务",
      children: "密码认证方式关闭数字盾服务"
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
          children: ["关闭数字盾前，需从服务器获取当前账号在", (0,jsx_runtime.jsx)(_components.a, {
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
          children: "调用关闭数字盾服务接口，发起数字盾服务关闭申请。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 关闭数字盾服务\nasync function DisablePwd(challenge: Uint8Array, context: common.UIAbilityContext):Promise<trustedAuthentication.AuthToken> {\n try {\n   const authID: bigint = 1687413472599354502n;//实际填充为从服务器获取到的账号对应的authID值\n   const resourceMgr: resourceManager.ResourceManager = context.resourceManager;\n   const fileData : Uint8Array = await resourceMgr.getRawFileContent('test_logo_rgba.png'); //实际使用时请替换为应用要在TUI界面展示的logo图片名称\n   const buffer = fileData.buffer;\n   const label:trustedAuthentication.TUILable = {\n     image: buffer as ArrayBuffer,\n     title: \"关闭数字盾\",\n   }\n   const authToken = await trustedAuthentication.disableTrustedAuthentication(challenge, true, authID, label);\n   return authToken;\n } catch (err) {\n   hilog.error(0x0000, 'testTag', `Failed to disableTrustedAuthentication, code:${err.code}, message:${err.message}`);\n   throw new Error('Close trusted authentication failed:' + (err as BusinessError).message);\n }\n}\nconst rand = cryptoFramework.createRandom();\nconst len: number = 32;\nconst challenge: Uint8Array = rand?.generateRandomSync(len)?.data;//实际使用时请替换为通过UniversalKeystoreKit初始化会话获取的challenge\nlet context = this.getUIContext().getHostContext() as common.UIAbilityContext;\nconst authToken: trustedAuthentication.AuthToken = await DisablePwd(challenge, context);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["参考密钥管理服务提供的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-signing-signature-verification/huks-signing-signature-verification-arkts",
            children: "签名/验签指导"
          }), ", 对通过关闭数字盾获取到的authToken数据进行签名，并结束会话。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "无需密码认证方式关闭数字盾服务",
      children: "无需密码认证方式关闭数字盾服务"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用cryptoFramework生成的32字节随机数作为challenge，直接调用关闭数字盾服务接口即可，生成的authToken信息未经过密码认证，不可进行签名校验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 关闭数字盾服务\nasync function DisablePwd(challenge: Uint8Array):Promise<trustedAuthentication.AuthToken> {\n try {\n   const authID: bigint = 1687413472599354502n;//实际填充为从服务器获取到的账号对应的authID值\n   let emptyBuffer = new ArrayBuffer(0);\n   const label:trustedAuthentication.TUILable = {\n     image: emptyBuffer,\n     title: \"\",\n   }\n   const authToken = await trustedAuthentication.disableTrustedAuthentication(challenge, false, authID, label);\n   return authToken;\n } catch (err) {\n   hilog.error(0x0000, 'testTag', `Failed to disableTrustedAuthentication, code:${err.code}, message:${err.message}`);\n   throw new Error('Close trusted authentication failed:' + (err as BusinessError).message);\n }\n}\nconst rand = cryptoFramework.createRandom();\nconst len: number = 32;\nconst challenge: Uint8Array = rand?.generateRandomSync(len)?.data;//此处使用的challenge为通过cryptoFramework生成的32字节随机数即可\nconst authToken: trustedAuthentication.AuthToken = await DisablePwd(challenge);\n"
      })
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
650591(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478393-da9768ce209629dc4b36e27c2036b6d6.png");

},
952983(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958392-78f8b1cd1e892f705cdc789e2c535c4b.jpg");

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