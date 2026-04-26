"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["26797"], {
959287(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_online_authentication_kit_guide_onlineauthentication_passkey_onlineauthentication_passkey_intro_onlineauthentication_passkey_intro_md_138_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-online-authentication-kit-guide-onlineauthentication-passkey-onlineauthentication-passkey-intro-onlineauthentication-passkey-intro-md-138.json
var site_docs_system_security_online_authentication_kit_guide_onlineauthentication_passkey_onlineauthentication_passkey_intro_onlineauthentication_passkey_intro_md_138_namespaceObject = JSON.parse('{"id":"system-security/online-authentication-kit-guide/onlineauthentication-passkey/onlineauthentication-passkey-intro/onlineauthentication-passkey-intro","title":"概述","description":"从HarmonyOS 6.0.0(20)开始，在线认证服务提供了通行密钥特性。通行密钥主要提供了以下能力：","source":"@site/docs/system-security/online-authentication-kit-guide/onlineauthentication-passkey/onlineauthentication-passkey-intro/onlineauthentication-passkey-intro.md","sourceDirName":"system-security/online-authentication-kit-guide/onlineauthentication-passkey/onlineauthentication-passkey-intro","slug":"/system-security/online-authentication-kit-guide/onlineauthentication-passkey/onlineauthentication-passkey-intro/","permalink":"/harmonyos-docs-site/system-security/online-authentication-kit-guide/onlineauthentication-passkey/onlineauthentication-passkey-intro/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/onlineauthentication-passkey-intro","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"SOTER免密身份认证","permalink":"/harmonyos-docs-site/system-security/online-authentication-kit-guide/onlineauthentication-soter/"},"next":{"title":"通行密钥身份认证（ArkTS）","permalink":"/harmonyos-docs-site/system-security/online-authentication-kit-guide/onlineauthentication-passkey/onlineauthentication-passkey-arkts/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/online-authentication-kit-guide/onlineauthentication-passkey/onlineauthentication-passkey-intro/onlineauthentication-passkey-intro.md


const frontMatter = {
	title: '概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/onlineauthentication-passkey-intro',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '概述';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "注册通行密钥",
  "id": "注册通行密钥",
  "level": 3
}, {
  "value": "使用通行密钥登录本设备的应用或网页账号",
  "id": "使用通行密钥登录本设备的应用或网页账号",
  "level": 3
}, {
  "value": "使用跨设备扫码登录其他设备的应用或网页账号",
  "id": "使用跨设备扫码登录其他设备的应用或网页账号",
  "level": 3
}, {
  "value": "基本概念",
  "id": "基本概念",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "业务流程",
  "id": "业务流程",
  "level": 2
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
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "概述",
        children: "概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从HarmonyOS 6.0.0(20)开始，在线认证服务提供了通行密钥特性。通行密钥主要提供了以下能力："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通行密钥注册：支持使用用户身份认证特征（如人脸、指纹、PIN码）作为平台认证器，在本设备上创建应用或网页的通行密钥。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "本地免密认证：支持使用用户身份认证特征（如人脸、指纹、PIN码）作为平台认证器，使用通行密钥在本设备上进行应用或网页的免密认证。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "跨设备扫码认证：支持使用已注册通行密钥的移动设备作为漫游认证器，使用跨设备扫码的方式，在其他设备上进行应用或网页的免密认证。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "具体应用场景如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "注册通行密钥",
      children: "注册通行密钥"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "需要提供方便、快速、安全的本地应用或网页登录方式时，可以使用通行密钥服务的通行密钥注册能力为用户创建通行密钥。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(427664)/* ["default"] */.A) + "",
        width: "2466",
        height: "2538"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用通行密钥登录本设备的应用或网页账号",
      children: "使用通行密钥登录本设备的应用或网页账号"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户在登录应用或者网页时，需要验证用户的身份，可以使用通行密钥服务的本地免密认证能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(984469)/* ["default"] */.A) + "",
        width: "3691",
        height: "2537"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用跨设备扫码登录其他设备的应用或网页账号",
      children: "使用跨设备扫码登录其他设备的应用或网页账号"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户在其他设备上登录应用或网页时，需要验证用户的身份，可以使用通行密钥服务的跨设备扫码认证能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(761528)/* ["default"] */.A) + "",
        width: "4934",
        height: "2538"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(480628)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以上使用场景均需要开发者部署符合FIDO2标准协议的FIDO服务器。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通行密钥（Passkey）是基于", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fidoalliance.org/passkeys/",
        children: "FIDO2标准协议"
      }), "（见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/online-authentication-kit-guide/onlineauthentication-website-disclaimer",
        children: "网站链接免责声明"
      }), "）实现的一种简单又安全的登录方式。借用通行密钥，用户可使用指纹、人脸或手机解锁PIN码登录应用或网页。相较于传统密码，通行密钥具有更便捷、安全的优势。更多关于FIDO的背景知识，可以参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fidoalliance.org/specifications-overview/",
        children: "FIDO规范介绍"
      }), "（见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/online-authentication-kit-guide/onlineauthentication-website-disclaimer",
        children: "网站链接免责声明"
      }), "）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "需满足以下条件，才能使用该功能。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开发者的业务需要接入符合FIDO2标准的协议，并部署符合FIDO2标准协议的FIDO服务器。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "移动端设备需要支持生物特征（指纹或3D人脸），查询当前移动端设备是否支持ATL4级别的认证可信等级。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { BusinessError } from '@kit.BasicServicesKit';\nimport { userAuth } from '@kit.UserAuthenticationKit';\n\ntry {\n  // 示例，查询设备人脸识别是否支持ATL4级别的认证可信等级\n  userAuth.getAvailableStatus(userAuth.UserAuthType.FACE, userAuth.AuthTrustLevel.ATL4);\n  console.info('current auth trust level is supported');\n} catch (error) {\n  const err: BusinessError = error as BusinessError;\n  console.error(`current auth trust level is not supported. Code is ${err?.code}, message is ${err?.message}`);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通行密钥服务需要联网以及蓝牙能力，以便提供完整的在线身份校验服务。应用在调用本服务API前，需将通行密钥服务联网、使用蓝牙行为向用户明示，并且取得用户同意。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["根据", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://fidoalliance.org/specifications-overview/",
            children: "FIDO规范"
          }), "（见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/online-authentication-kit-guide/onlineauthentication-website-disclaimer",
            children: "网站链接免责声明"
          }), "），通行密钥服务需要将三方应用中的用户昵称及标识符信息上传至网络中继服务器，用于跨设备扫码认证场景，以便实现两台设备的认证数据通信。应用在调用本服务API前，需将收集的个人数据信息向用户明示，并且取得用户同意。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "业务流程",
      children: "业务流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "注册流程介绍"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用程序或浏览器集成Online Authentication Kit中的通行密钥模块，向FIDO服务器发起注册请求。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "FIDO服务器将注册信息（如挑战值等）返回给应用程序，应用程序组装注册报文，使用通行密钥服务进行注册。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通行密钥服务使用认证器验证通过后，会生成一对凭据密钥对，然后用其预置的私钥对生成的公钥及注册信息（如挑战值等）进行签名。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通行密钥服务返回签名给应用程序。应用程序发给FIDO服务器进行注册。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "FIDO服务器验证签名，保存公钥，并将处理结果返回给应用程序。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "认证流程介绍"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用程序或浏览器集成Online Authentication Kit中的通行密钥模块，并向FIDO服务器发起认证请求。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "FIDO服务器将认证信息（如挑战值等）返回给应用程序，应用程序组装认证报文，使用通行密钥服务进行认证。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通行密钥服务使用认证器验证通过后，用其保存的私钥对认证信息（如挑战值等）进行签名。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通行密钥服务返回签名给应用程序。应用程序发给FIDO服务器进行认证。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "FIDO服务器验证签名，并将处理结果返回给应用程序。"
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
427664(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958408-0ec3ee467f535e01d75ffe6d8c64bbdf.png");

},
480628(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
984469(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478409-17d8522823b01ac5027acc022a6b2818.png");

},
761528(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798760-8fece84b3e72f24b6663c083608f1849.png");

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