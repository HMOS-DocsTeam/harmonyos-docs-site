"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["196475"], {
322792(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_huks_kit_huks_external_key_management_huks_provider_management_ks_extension_registration_and_unregistration_arkts_ks_extension_registration_and_unregistration_arkts_md_da4_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-huks-kit-huks-external-key-management-huks-provider-management-ks-extension-registration-and-unregistration-arkts-ks-extension-registration-and-unregistration-arkts-md-da4.json
var site_docs_system_security_huks_kit_huks_external_key_management_huks_provider_management_ks_extension_registration_and_unregistration_arkts_ks_extension_registration_and_unregistration_arkts_md_da4_namespaceObject = JSON.parse('{"id":"system-security/huks-kit/huks-external-key-management/huks-provider-management/ks-extension-registration-and-unregistration-arkts/ks-extension-registration-and-unregistration-arkts","title":"注册/注销Provider(ArkTS)","description":"从API 22开始，huksExternalCrypto提供Provider注册和注销功能接口。","source":"@site/docs/system-security/huks-kit/huks-external-key-management/huks-provider-management/ks-extension-registration-and-unregistration-arkts/ks-extension-registration-and-unregistration-arkts.md","sourceDirName":"system-security/huks-kit/huks-external-key-management/huks-provider-management/ks-extension-registration-and-unregistration-arkts","slug":"/system-security/huks-kit/huks-external-key-management/huks-provider-management/ks-extension-registration-and-unregistration-arkts/","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-external-key-management/huks-provider-management/ks-extension-registration-and-unregistration-arkts/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"注册/注销Provider(ArkTS)","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ks-extension-registration-and-unregistration-arkts","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Provider管理介绍及规格","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-external-key-management/huks-provider-management/huks-provider-management-overview/"},"next":{"title":"注册/注销Provider(C/C++)","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-external-key-management/huks-provider-management/huks-extension-registration-and-unregistration-ndk/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/huks-kit/huks-external-key-management/huks-provider-management/ks-extension-registration-and-unregistration-arkts/ks-extension-registration-and-unregistration-arkts.md


const frontMatter = {
	title: '注册/注销Provider(ArkTS)',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ks-extension-registration-and-unregistration-arkts',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '注册/注销Provider(ArkTS)';

const assets = {

};



const toc = [{
  "value": "注册Provider",
  "id": "注册provider",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 3
}, {
  "value": "开发案例",
  "id": "开发案例",
  "level": 2
}, {
  "value": "注销Provider",
  "id": "注销provider",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤-1",
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
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "注册注销providerarkts",
        children: "注册/注销Provider(ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API 22开始，huksExternalCrypto提供Provider注册和注销功能接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "注册provider",
      children: "注册Provider"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["构造注册参数，需要传入", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huksexternalcrypto/js-apis-huksexternalcrypto#huksexternalcryptotag",
          children: "HUKS_EXT_CRYPTO_TAG_ABILITY_NAME"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用注册接口", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huksexternalcrypto/js-apis-huksexternalcrypto#huksexternalcryptoregisterprovider",
          children: "registerProvider"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发案例",
      children: "开发案例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { huksExternalCrypto } from '@kit.UniversalKeystoreKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nfunction StringToUint8Array(str: string) {\n  let arr: number[] = [];\n  for (let i = 0, j = str.length; i < j; ++i) {\n    arr.push(str.charCodeAt(i));\n  }\n  return new Uint8Array(arr);\n}\n\nasync function registerProvider(): Promise<void> {\n  try {\n    /* 1.构造注册参数 */\n    const providerName = \"testProvider\";\n    const extProperties: Array<huksExternalCrypto.HuksExternalCryptoParam> = [\n      {\n        tag: huksExternalCrypto.HuksExternalCryptoTag.HUKS_EXT_CRYPTO_TAG_ABILITY_NAME,\n        value: StringToUint8Array(\"CryptoExtension\")\n      }\n    ];\n\n    /* 2.调用registerProvider */\n    await huksExternalCrypto.registerProvider(providerName, extProperties)\n      .then(() => {\n        console.info(`promise: registerProvider success`);\n      }).catch((error: BusinessError) => {\n        console.error(`promise: registerProvider failed, errCode : ${error.code}, errMsg : ${error.message}`);\n      });\n  } catch (error) {\n    console.error(`promise: registerProvider input arg invalid`);\n  }\n}\n\nasync function TestRegisterProvider() {\n  await registerProvider();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "注销provider",
      children: "注销Provider"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发步骤-1",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["构造注销参数，注销单个ability需要传入", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huksexternalcrypto/js-apis-huksexternalcrypto#huksexternalcryptotag",
          children: "HUKS_EXT_CRYPTO_TAG_ABILITY_NAME"
        }), "参数。批量注销不需要传入", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huksexternalcrypto/js-apis-huksexternalcrypto#huksexternalcryptotag",
          children: "HUKS_EXT_CRYPTO_TAG_ABILITY_NAME"
        }), "参数。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用注销接口", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huksexternalcrypto/js-apis-huksexternalcrypto#huksexternalcryptounregisterprovider",
          children: "unregisterProvider"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "注销单个ability"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { huksExternalCrypto } from '@kit.UniversalKeystoreKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nfunction StringToUint8Array(str: string) {\n  let arr: number[] = [];\n  for (let i = 0, j = str.length; i < j; ++i) {\n    arr.push(str.charCodeAt(i));\n  }\n  return new Uint8Array(arr);\n}\n\nasync function unregisterProvider(): Promise<void> {\n  try {\n    /* 1.构造注销参数 */\n    const providerName = \"testProvider\";\n    const extProperties: Array<huksExternalCrypto.HuksExternalCryptoParam> = [\n      {\n        tag: huksExternalCrypto.HuksExternalCryptoTag.HUKS_EXT_CRYPTO_TAG_ABILITY_NAME,\n        value: StringToUint8Array(\"CryptoExtension\")\n      }\n    ];\n\n    /* 2.调用unregisterProvider */\n    await huksExternalCrypto.unregisterProvider(providerName, extProperties)\n      .then(() => {\n        console.info(`promise: unregisterProvider success`);\n      }).catch((error: BusinessError) => {\n        console.error(`promise: unregisterProvider failed, errCode : ${error.code}, errMsg : ${error.message}`);\n      });\n  } catch (error) {\n    console.error(`promise: unregisterProvider input arg invalid`);\n  }\n}\n\nasync function TestRegisterProvider() {\n  await unregisterProvider();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "批量注销"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { huksExternalCrypto } from '@kit.UniversalKeystoreKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nasync function unregisterProvider(): Promise<void> {\n  try {\n    /* 1.构造注销参数 */\n    const providerName = \"testProvider\";\n    const extProperties: Array<huksExternalCrypto.HuksExternalCryptoParam> = [];\n\n    /* 2.调用unregisterProvider */\n    await huksExternalCrypto.unregisterProvider(providerName, extProperties)\n      .then(() => {\n        console.info(`promise: unregisterProvider success`);\n      }).catch((error: BusinessError) => {\n        console.error(`promise: unregisterProvider failed, errCode : ${error.code}, errMsg : ${error.message}`);\n      });\n  } catch (error) {\n    console.error(`promise: unregisterProvider input arg invalid`);\n  }\n}\n\nasync function TestRegisterProvider() {\n  await unregisterProvider();\n}\n"
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