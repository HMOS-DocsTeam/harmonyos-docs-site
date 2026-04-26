"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["879874"], {
270918(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_device_security_kit_guide_devicesecurity_trustedauth_service_devicesecurity_trustedauth_pwdmng_devicesecurity_trustedauth_setpwd_devicesecurity_trustedauth_setpwd_md_46c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-device-security-kit-guide-devicesecurity-trustedauth-service-devicesecurity-trustedauth-pwdmng-devicesecurity-trustedauth-setpwd-devicesecurity-trustedauth-setpwd-md-46c.json
var site_docs_system_security_device_security_kit_guide_devicesecurity_trustedauth_service_devicesecurity_trustedauth_pwdmng_devicesecurity_trustedauth_setpwd_devicesecurity_trustedauth_setpwd_md_46c_namespaceObject = JSON.parse('{"id":"system-security/device-security-kit-guide/devicesecurity-trustedauth-service/devicesecurity-trustedauth-pwdmng/devicesecurity-trustedauth-setpwd/devicesecurity-trustedauth-setpwd","title":"设置数字盾密码","description":"场景介绍","source":"@site/docs/system-security/device-security-kit-guide/devicesecurity-trustedauth-service/devicesecurity-trustedauth-pwdmng/devicesecurity-trustedauth-setpwd/devicesecurity-trustedauth-setpwd.md","sourceDirName":"system-security/device-security-kit-guide/devicesecurity-trustedauth-service/devicesecurity-trustedauth-pwdmng/devicesecurity-trustedauth-setpwd","slug":"/system-security/device-security-kit-guide/devicesecurity-trustedauth-service/devicesecurity-trustedauth-pwdmng/devicesecurity-trustedauth-setpwd/","permalink":"/harmonyos-docs-site/system-security/device-security-kit-guide/devicesecurity-trustedauth-service/devicesecurity-trustedauth-pwdmng/devicesecurity-trustedauth-setpwd/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"设置数字盾密码","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/devicesecurity-trustedauth-setpwd","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"数字盾服务概述","permalink":"/harmonyos-docs-site/system-security/device-security-kit-guide/devicesecurity-trustedauth-service/devicesecurity-trustedauth-overview/"},"next":{"title":"修改数字盾密码","permalink":"/harmonyos-docs-site/system-security/device-security-kit-guide/devicesecurity-trustedauth-service/devicesecurity-trustedauth-pwdmng/devicesecurity-trustedauth-modifypwd/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/device-security-kit-guide/devicesecurity-trustedauth-service/devicesecurity-trustedauth-pwdmng/devicesecurity-trustedauth-setpwd/devicesecurity-trustedauth-setpwd.md


const frontMatter = {
	title: '设置数字盾密码',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/devicesecurity-trustedauth-setpwd',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '设置数字盾密码';

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
  "value": "开通数字盾界面介绍",
  "id": "开通数字盾界面介绍",
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
        id: "设置数字盾密码",
        children: "设置数字盾密码"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户首次激活数字盾时，需通过可信用户交互（全称Trusted User Interface，下文简称TUI）安全界面设置专用密码，后续进行交易认证时，将通过该密码完成安全验证。"
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
        src: (__webpack_require__(973419)/* ["default"] */.A) + "",
        width: "748",
        height: "520"
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
              href: "/ref/system-security-api/device-security-api/devicesecurity-arktsapi/devicesecurity-trusted-auth-api/devicesecurity-trusted-auth-api#enabletrustedauthentication",
              children: "enableTrustedAuthentication"
            }), "(challenge: Uint8Array, pwdInfo: PasswordInfo, label: TUILable): Promise<AuthInfo>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建数字盾密码"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开通数字盾界面介绍",
      children: "开通数字盾界面介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如图为开通数字盾服务时对应的TUI（Trusted User Interface）界面示例，其中密码长度、对应TUI应用图标以及当前应用场景说明均由开发者调用接口时传入，当设置盾密码长度不符合要求、密码强度低、两次密码设置不一致时，均会有对应失败报错提醒。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(860751)/* ["default"] */.A) + "",
        width: "383",
        height: "843"
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
          children: ["参考密钥管理服务提供的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/huks-kit/huks-local-key-management/huks-key-generation-import/huks-key-generation/huks-key-generation-arkts",
            children: "密钥生成开发指导"
          }), "，使用指定的会话密钥别名及指定密钥属性集合完成密钥生成。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(642561)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建密钥时指定密钥属性集合中身份认证类型tag: huks.HuksTag.HUKS_TAG_USER_AUTH_TYPE时，必须要包括huks.HuksUserAuthType.HUKS_USER_AUTH_TYPE_TUI_PIN认证方式，其余认证类型可以根据业务需要进行定制配置。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 密钥属性集示例\nlet properties: Array<huks.HuksParam> = [{\n  tag: huks.HuksTag.HUKS_TAG_ALGORITHM,\n  value: huks.HuksKeyAlg.HUKS_ALG_ECC\n}, {\n  tag: huks.HuksTag.HUKS_TAG_PURPOSE,\n  value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_SIGN | huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_VERIFY\n}, {\n  tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,\n  value: huks.HuksKeySize.HUKS_ECC_KEY_SIZE_256,\n}, {\n  tag: huks.HuksTag.HUKS_TAG_DIGEST,\n  value: huks.HuksKeyDigest.HUKS_DIGEST_SHA256\n},\n{\n  tag: huks.HuksTag.HUKS_TAG_KEY_AUTH_PURPOSE,\n  value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_SIGN\n},\n// 指定密钥身份认证的类型：TUI_PIN/指纹/人脸\n{\n  tag: huks.HuksTag.HUKS_TAG_USER_AUTH_TYPE,\n  value: huks.HuksUserAuthType.HUKS_USER_AUTH_TYPE_TUI_PIN | huks.HuksUserAuthType.HUKS_USER_AUTH_TYPE_FINGERPRINT | huks.HuksUserAuthType.HUKS_USER_AUTH_TYPE_FACE\n},\n// 指定密钥安全授权的类型（失效类型）：新录入生物特征（如指纹）后无效\n{\n  tag: huks.HuksTag.HUKS_TAG_KEY_AUTH_ACCESS_TYPE,\n  value: huks.HuksAuthAccessType.HUKS_AUTH_ACCESS_ALWAYS_VALID\n},\n// 指定挑战值的类型：默认类型\n{\n  tag: huks.HuksTag.HUKS_TAG_CHALLENGE_TYPE,\n  value: huks.HuksChallengeType.HUKS_CHALLENGE_TYPE_NORMAL\n}];\n"
          })
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
          children: "调用设置密码接口，发起数字盾密码创建申请。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 设置数字盾密码\nasync function SetPwd(challenge: Uint8Array, context: common.UIAbilityContext):Promise<trustedAuthentication.AuthInfo> {\n  try {\n   // 数字盾密码定制属性参数\n   const passwordInfo: trustedAuthentication.PasswordInfo = {\n     pwdType: trustedAuthentication.PasswordType.PASSWORD_TYPE_DIGITAL,\n     pwdMaxLength: 10,\n     pwdMinLength: 6,\n     maxAuthFailCount: 6\n   };\n\n   const resourceMgr: resourceManager.ResourceManager = context.resourceManager;\n   const fileData : Uint8Array = await resourceMgr.getRawFileContent('test_logo_rgba.png');//实际使用时请替换为应用要在TUI界面展示的logo图片名称\n   const buffer = fileData.buffer;\n   const label:trustedAuthentication.TUILable = {\n     image: buffer as ArrayBuffer,\n     title: \"开通数字盾\",\n   }\n   const authInfo = await trustedAuthentication.enableTrustedAuthentication(challenge, passwordInfo, label);\n   return authInfo;\n  } catch (err) {\n   hilog.error(0x0000, 'testTag', `Failed to enableTrustedAuthentication, code:${err.code}, message:${err.message}`);\n   throw new Error('Enable trusted authentication failed:' + (err as BusinessError).message);\n  }\n}\nconst rand = cryptoFramework.createRandom();\nconst len: number = 32;\nconst challenge: Uint8Array = rand?.generateRandomSync(len)?.data;//实际使用时请替换为通过UniversalKeystoreKit初始化会话获取的challenge\nlet context = this.getUIContext().getHostContext() as common.UIAbilityContext;\nlet authInfo: trustedAuthentication.AuthInfo = await SetPwd(challenge, context);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["参考密钥管理服务提供的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-signing-signature-verification/huks-signing-signature-verification-arkts",
            children: "签名/验签指导"
          }), ", 对通过密码设置获取到的authToken数据进行签名，并结束会话。"]
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
860751(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958390-b12b2e00ac046bab8ecfc99f0475846b.png");

},
642561(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
973419(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438435-78013cf1b492a2ae8a1a0e4fdc49c287.jpg");

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