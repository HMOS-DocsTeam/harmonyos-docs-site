"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["629403"], {
561746(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_huks_kit_huks_local_key_management_device_attestation_attestation_signature_verification_attestation_signature_verification_apps_attestation_signature_verification_apps_md_a72_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-huks-kit-huks-local-key-management-device-attestation-attestation-signature-verification-attestation-signature-verification-apps-attestation-signature-verification-apps-md-a72.json
var site_docs_system_security_huks_kit_huks_local_key_management_device_attestation_attestation_signature_verification_attestation_signature_verification_apps_attestation_signature_verification_apps_md_a72_namespaceObject = JSON.parse('{"id":"system-security/huks-kit/huks-local-key-management/device-attestation/attestation-signature-verification/attestation-signature-verification-apps/attestation-signature-verification-apps","title":"应用端开发","description":"接口说明","source":"@site/docs/system-security/huks-kit/huks-local-key-management/device-attestation/attestation-signature-verification/attestation-signature-verification-apps/attestation-signature-verification-apps.md","sourceDirName":"system-security/huks-kit/huks-local-key-management/device-attestation/attestation-signature-verification/attestation-signature-verification-apps","slug":"/system-security/huks-kit/huks-local-key-management/device-attestation/attestation-signature-verification/attestation-signature-verification-apps/","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/device-attestation/attestation-signature-verification/attestation-signature-verification-apps/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"应用端开发","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/attestation-signature-verification-apps","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"服务器端开发","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/device-attestation/device-attestation-guidelines/device-attestation-servers/"},"next":{"title":"服务器端开发","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/device-attestation/attestation-signature-verification/attestation-signature-verification-servers/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/huks-kit/huks-local-key-management/device-attestation/attestation-signature-verification/attestation-signature-verification-apps/attestation-signature-verification-apps.md


const frontMatter = {
	title: '应用端开发',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/attestation-signature-verification-apps',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '应用端开发';

const assets = {

};



const toc = [{
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "使用前提",
  "id": "使用前提",
  "level": 2
}, {
  "value": "使用应用私钥对业务请求进行签名",
  "id": "使用应用私钥对业务请求进行签名",
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
        id: "应用端开发",
        children: "应用端开发"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["接口能力由", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/huks-kit/huks-overview",
        children: "Universal Keystore Kit"
      }), "提供，涉及的功能指导请参考："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/huks-kit/huks-overview",
          children: "Universal Keystore Kit简介"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/huks-kit/huks-local-key-management/huks-other-operations/huks-check-key/huks-check-key-arkts",
          children: "查询密钥是否存在(ArkTS)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/huks-kit/huks-local-key-management/huks-other-operations/huks-check-key/huks-check-key-ndk",
          children: "查询密钥是否存在(C/C++)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/huks-kit/huks-local-key-management/huks-key-generation-import/huks-key-generation/huks-key-generation-arkts",
          children: "生成密钥(ArkTS)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/huks-kit/huks-local-key-management/huks-key-generation-import/huks-key-generation/huks-key-generation-ndk",
          children: "生成密钥(C/C++)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/huks-kit/huks-local-key-management/huks-key-attestation/huks-key-anon-attestation-arkts",
          children: "匿名密钥证明(ArkTS)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/huks-kit/huks-local-key-management/huks-key-attestation/huks-key-anon-attestation-ndk",
          children: "匿名密钥证明(C/C++)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-signing-signature-verification/huks-signing-signature-verification-arkts",
          children: "签名/验签(ArkTS)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-signing-signature-verification/huks-signing-signature-verification-ndk",
          children: "签名/验签(C/C++)"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用前提",
      children: "使用前提"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用应用的私钥对业务请求进行签名的前提是已经创建应用公私钥和在服务器保存了应用公钥，相关开发指南请参考："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/huks-kit/huks-local-key-management/device-attestation/device-attestation-guidelines/device-attestation-apps#%E6%9F%A5%E8%AF%A2%E5%BA%94%E7%94%A8%E5%85%AC%E7%A7%81%E9%92%A5%E5%AF%B9%E6%98%AF%E5%90%A6%E5%AD%98%E5%9C%A8",
          children: "查询应用公私钥对是否存在"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/huks-kit/huks-local-key-management/device-attestation/device-attestation-guidelines/device-attestation-apps#%E5%88%9B%E5%BB%BA%E5%BA%94%E7%94%A8%E5%85%AC%E7%A7%81%E9%92%A5%E5%AF%B9",
          children: "创建应用公私钥对"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/huks-kit/huks-local-key-management/device-attestation/device-attestation-guidelines/device-attestation-apps#%E5%AF%B9%E5%BA%94%E7%94%A8%E5%85%AC%E9%92%A5%E5%92%8C%E5%BA%94%E7%94%A8id%E8%BF%9B%E8%A1%8C%E8%AF%81%E6%98%8E",
          children: "对应用公钥和应用ID进行证明"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用应用私钥对业务请求进行签名",
      children: "使用应用私钥对业务请求进行签名"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在密钥证明流程处理成功后，您的应用在进行一些安全敏感的端云业务时，可以使用已验证的密钥对业务请求进行安全保护。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用可以调用Universal Keystore Kit的签名接口，使用应用私钥对业务请求数据（如HTTP请求的Body）进行签名，然后把签名结果数据添加到请求消息中（如HTTP的Header字段）。为了方便应用服务器查找应用公钥用于验签，应用应该在业务请求中携带应用公钥ID。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(601294)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "安全建议：为了在发送业务请求时能够防重放攻击，建议应用先从应用服务器获取一次性的挑战值Challenge。应用服务器采用安全随机数生成挑战值Challenge，并缓存到服务器中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { huks } from '@kit.UniversalKeystoreKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { util } from '@kit.ArkTS';\n\nlet keyAlias = 'serviceKey_user01'; //业务密钥别名\nlet handle: number;\nlet plaintext = '123456'; //待签名的明文数据，建议包含服务器端返回的Challenge。\nlet signature: Uint8Array; //存储签名结果数据的变量\n\nfunction StringToUint8Array(str: String) {\n  let arr: number[] = new Array();\n  for (let i = 0, j = str.length; i < j; ++i) {\n    arr.push(str.charCodeAt(i));\n  }\n  return new Uint8Array(arr);\n}\n\nfunction GetSignProperties() {\n  let properties: Array<huks.HuksParam> = new Array();\n  let index = 0;\n  properties[index++] = {\n    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,\n    value: huks.HuksKeyAlg.HUKS_ALG_ECC\n  };\n  properties[index++] = {\n    tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,\n    value: huks.HuksKeySize.HUKS_AES_KEY_SIZE_256\n  };\n  properties[index++] = {\n    tag: huks.HuksTag.HUKS_TAG_PURPOSE,\n    value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_SIGN\n  };\n  properties[index++] = {\n    tag: huks.HuksTag.HUKS_TAG_DIGEST,\n    value: huks.HuksKeyDigest.HUKS_DIGEST_SHA256\n  }\n  return properties;\n}\n\nasync function Sign(keyAlias: string, plaintext: string) {\n  let signProperties = GetSignProperties();\n  let options: huks.HuksOptions = {\n    properties: signProperties,\n    inData: StringToUint8Array(plaintext)\n  }\n  await huks.initSession(keyAlias, options)\n    .then((data) => {\n      handle = data.handle;\n    }).catch((err: BusinessError) => {\n      console.error(`promise: init sign failed, error: ` + err.message);\n    })\n  await huks.finishSession(handle, options)\n    .then((data) => {\n      signature = data.outData as Uint8Array;\n\n      let base64 = new util.Base64Helper();\n      let signatureBase64 = base64.encodeToStringSync(signature);\n      //todo：把签名结果的Base64编码（signatureBase64变量）发送到云侧的服务器。如下示例代码把签名结果打印到日志中，供调测使用，商用代码不需要打印。\n      console.info(`sign success, result:` + signatureBase64);\n\n    }).catch((err: BusinessError) => {\n      console.error(`promise: sign failed, error: ` + err.message);\n    })\n}\n"
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
601294(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

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