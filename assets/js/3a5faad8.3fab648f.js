"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["175017"], {
764610(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_huks_kit_huks_local_key_management_huks_key_attestation_huks_key_anon_attestation_arkts_huks_key_anon_attestation_arkts_md_3a5_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-huks-kit-huks-local-key-management-huks-key-attestation-huks-key-anon-attestation-arkts-huks-key-anon-attestation-arkts-md-3a5.json
var site_docs_system_security_huks_kit_huks_local_key_management_huks_key_attestation_huks_key_anon_attestation_arkts_huks_key_anon_attestation_arkts_md_3a5_namespaceObject = JSON.parse('{"id":"system-security/huks-kit/huks-local-key-management/huks-key-attestation/huks-key-anon-attestation-arkts/huks-key-anon-attestation-arkts","title":"匿名密钥证明(ArkTS)","description":"在使用本功能时，需确保网络通畅。","source":"@site/docs/system-security/huks-kit/huks-local-key-management/huks-key-attestation/huks-key-anon-attestation-arkts/huks-key-anon-attestation-arkts.md","sourceDirName":"system-security/huks-kit/huks-local-key-management/huks-key-attestation/huks-key-anon-attestation-arkts","slug":"/system-security/huks-kit/huks-local-key-management/huks-key-attestation/huks-key-anon-attestation-arkts/","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/huks-key-attestation/huks-key-anon-attestation-arkts/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"匿名密钥证明(ArkTS)","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-key-anon-attestation-arkts","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"密钥证明介绍及算法规格","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/huks-key-attestation/huks-key-attestation-overview/"},"next":{"title":"匿名密钥证明(C/C++)","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/huks-key-attestation/huks-key-anon-attestation-ndk/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/huks-kit/huks-local-key-management/huks-key-attestation/huks-key-anon-attestation-arkts/huks-key-anon-attestation-arkts.md


const frontMatter = {
	title: '匿名密钥证明(ArkTS)',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-key-anon-attestation-arkts',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '匿名密钥证明(ArkTS)';

const assets = {

};



const toc = [{
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "开发案例",
  "id": "开发案例",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "匿名密钥证明arkts",
        children: "匿名密钥证明(ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在使用本功能时，需确保网络通畅。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["指定密钥别名，密钥别名命名规范参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/huks-kit/huks-local-key-management/huks-key-generation-import/huks-key-generation/huks-key-generation-overview",
            children: "密钥生成介绍及算法规格"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "初始化参数集。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huks/js-apis-huks#huksoptions",
            children: "HuksOptions"
          }), "中的properties字段中的参数必须包含", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huks/js-apis-huks#hukstag",
            children: "HUKS_TAG_ATTESTATION_CHALLENGE"
          }), "属性,可选参数包含", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huks/js-apis-huks#hukstag",
            children: "HUKS_TAG_ATTESTATION_ID_VERSION_INFO"
          }), "，", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huks/js-apis-huks#hukstag",
            children: "HUKS_TAG_ATTESTATION_ID_ALIAS"
          }), "属性。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["生成非对称密钥，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/huks-kit/huks-local-key-management/huks-key-generation-import/huks-key-generation/huks-key-generation-overview",
            children: "密钥生成"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["将密钥别名与参数集作为参数传入", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huks/js-apis-huks#huksanonattestkeyitem11",
            children: "anonAttestKeyItem"
          }), "方法中，即可证明密钥。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发案例",
      children: "开发案例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/*\n * 以下以anonAttestKey的Promise接口操作验证为例\n */\nimport { huks } from '@kit.UniversalKeystoreKit';\n\n/* 1.确定密钥别名 */\nlet keyAliasString = 'key anon attest';\nlet aliasString = keyAliasString;\nlet aliasUint8 = stringToUint8Array(keyAliasString);\nlet securityLevel = stringToUint8Array('sec_level');\nlet challenge = stringToUint8Array('challenge_data');\nlet versionInfo = stringToUint8Array('version_info');\nlet anonAttestCertChain: string[];\n\nclass ThrowObject {\n  public isThrow: boolean = false;\n}\n\n/* 封装生成时的密钥参数集 */\nlet genKeyProperties: huks.HuksParam[] = [\n  {\n    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,\n    value: huks.HuksKeyAlg.HUKS_ALG_RSA\n  },\n  {\n    tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,\n    value: huks.HuksKeySize.HUKS_RSA_KEY_SIZE_2048\n  },\n  {\n    tag: huks.HuksTag.HUKS_TAG_PURPOSE,\n    value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_VERIFY\n  },\n  {\n    tag: huks.HuksTag.HUKS_TAG_DIGEST,\n    value: huks.HuksKeyDigest.HUKS_DIGEST_SHA256\n  },\n  {\n    tag: huks.HuksTag.HUKS_TAG_PADDING,\n    value: huks.HuksKeyPadding.HUKS_PADDING_PSS\n  },\n  {\n    tag: huks.HuksTag.HUKS_TAG_KEY_GENERATE_TYPE,\n    value: huks.HuksKeyGenerateType.HUKS_KEY_GENERATE_TYPE_DEFAULT\n  },\n  {\n    tag: huks.HuksTag.HUKS_TAG_BLOCK_MODE,\n    value: huks.HuksCipherMode.HUKS_MODE_ECB\n  }\n]\nlet genOptions: huks.HuksOptions = {\n  properties: genKeyProperties\n};\n\n/* 2.封装证明密钥的参数集 */\nlet anonAttestKeyProperties: huks.HuksParam[] = [\n  {\n    tag: huks.HuksTag.HUKS_TAG_ATTESTATION_ID_SEC_LEVEL_INFO,\n    value: securityLevel\n  },\n  {\n    tag: huks.HuksTag.HUKS_TAG_ATTESTATION_CHALLENGE,\n    value: challenge\n  },\n  {\n    tag: huks.HuksTag.HUKS_TAG_ATTESTATION_ID_VERSION_INFO,\n    value: versionInfo\n  },\n  {\n    tag: huks.HuksTag.HUKS_TAG_ATTESTATION_ID_ALIAS,\n    value: aliasUint8\n  }\n]\nlet huksOptions: huks.HuksOptions = {\n  properties: anonAttestKeyProperties\n};\n\nfunction stringToUint8Array(str: string) {\n  let arr: number[] = [];\n  for (let i = 0, j = str.length; i < j; ++i) {\n    arr.push(str.charCodeAt(i));\n  }\n  return new Uint8Array(arr);\n}\n\nfunction generateKeyItem(keyAlias: string, huksOptions: huks.HuksOptions, throwObject: ThrowObject) {\n  return new Promise<void>((resolve, reject) => {\n    try {\n      huks.generateKeyItem(keyAlias, huksOptions, (error, data) => {\n        if (error) {\n          reject(error);\n        } else {\n          resolve(data);\n        }\n      });\n    } catch (error) {\n      throwObject.isThrow = true;\n      throw (error as Error);\n    }\n  });\n}\n\n/* 3.生成密钥 */\nasync function publicGenKeyFunc(keyAlias: string, huksOptions: huks.HuksOptions) {\n  console.info(`enter promise generateKeyItem`);\n  let throwObject: ThrowObject = { isThrow: false };\n  try {\n    await generateKeyItem(keyAlias, huksOptions, throwObject)\n      .then((data) => {\n        console.info(`promise: generateKeyItem success, data = ${JSON.stringify(data)}`);\n      })\n      .catch((error: Error) => {\n        if (throwObject.isThrow) {\n          throw (error as Error);\n        } else {\n          console.error(`promise: generateKeyItem failed, ${JSON.stringify(error)}`);\n        }\n      });\n  } catch (error) {\n    console.error(`promise: generateKeyItem input arg invalid, ${JSON.stringify(error)}`);\n  }\n}\n\n/* 4.证明密钥 */\nfunction anonAttestKeyItem(keyAlias: string, huksOptions: huks.HuksOptions, throwObject: ThrowObject) {\n  return new Promise<huks.HuksReturnResult>((resolve, reject) => {\n    try {\n      huks.anonAttestKeyItem(keyAlias, huksOptions, (error, data) => {\n        if (error) {\n          reject(error);\n        } else {\n          resolve(data);\n        }\n      });\n    } catch (error) {\n      throwObject.isThrow = true;\n      throw (error as Error);\n    }\n  });\n}\n\nasync function publicAnonAttestKey(keyAlias: string, huksOptions: huks.HuksOptions): Promise<string> {\n  console.info(`enter promise anonAttestKeyItem`);\n  let throwObject: ThrowObject = { isThrow: false };\n  try {\n    await anonAttestKeyItem(keyAlias, huksOptions, throwObject)\n      .then((data) => {\n        console.info(`promise: anonAttestKeyItem success, data = ${JSON.stringify(data)}`);\n        if (data !== null && data.certChains !== null) {\n          anonAttestCertChain = data.certChains as string[];\n        }\n      })\n      .catch((error: Error) => {\n        if (throwObject.isThrow) {\n          throw (error as Error);\n        } else {\n          console.error(`promise: anonAttestKeyItem failed, ${JSON.stringify(error)}`);\n        }\n      });\n    return 'Success';\n  } catch (error) {\n    console.error(`promise: anonAttestKeyItem input arg invalid, ${JSON.stringify(error)}`);\n    return 'Failed';\n  }\n}\n\nasync function anonAttestKeyTest(): Promise<string> {\n  await publicGenKeyFunc(aliasString, genOptions);\n  let ret = await publicAnonAttestKey(aliasString, huksOptions);\n  console.info('anon attest certChain data: ' + anonAttestCertChain)\n  return ret;\n}\n"
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