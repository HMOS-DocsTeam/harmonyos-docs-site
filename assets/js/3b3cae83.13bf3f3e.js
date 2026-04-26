"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["381384"], {
782045(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_huks_kit_huks_local_key_management_huks_key_use_huks_hmac_huks_hmac_arkts_huks_hmac_arkts_md_3b3_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-huks-kit-huks-local-key-management-huks-key-use-huks-hmac-huks-hmac-arkts-huks-hmac-arkts-md-3b3.json
var site_docs_system_security_huks_kit_huks_local_key_management_huks_key_use_huks_hmac_huks_hmac_arkts_huks_hmac_arkts_md_3b3_namespaceObject = JSON.parse('{"id":"system-security/huks-kit/huks-local-key-management/huks-key-use/huks-hmac/huks-hmac-arkts/huks-hmac-arkts","title":"HMAC(ArkTS)","description":"HMAC是密钥相关的哈希运算消息认证码（Hash-based Message Authentication Code）。具体的场景介绍及支持的算法规格，请参考HMAC介绍及算法规格。","source":"@site/docs/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-hmac/huks-hmac-arkts/huks-hmac-arkts.md","sourceDirName":"system-security/huks-kit/huks-local-key-management/huks-key-use/huks-hmac/huks-hmac-arkts","slug":"/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-hmac/huks-hmac-arkts/","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-hmac/huks-hmac-arkts/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"HMAC(ArkTS)","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-hmac-arkts","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"HMAC介绍及算法规格","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-hmac/huks-hmac-overview/"},"next":{"title":"HMAC(C/C++)","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-hmac/huks-hmac-ndk/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-hmac/huks-hmac-arkts/huks-hmac-arkts.md


const frontMatter = {
	title: 'HMAC(ArkTS)',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-hmac-arkts',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = 'HMAC(ArkTS)';

const assets = {

};



const toc = [{
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
        id: "hmacarkts",
        children: "HMAC(ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["HMAC是密钥相关的哈希运算消息认证码（Hash-based Message Authentication Code）。具体的场景介绍及支持的算法规格，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-hmac/huks-hmac-overview",
        children: "HMAC介绍及算法规格"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "生成密钥"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["指定密钥别名，密钥别名命名规范参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/huks-kit/huks-local-key-management/huks-key-generation-import/huks-key-generation/huks-key-generation-overview",
          children: "密钥生成介绍及算法规格"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "初始化密钥属性集。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huks/js-apis-huks#huksgeneratekeyitem9",
          children: "generateKeyItem"
        }), "生成密钥，HMAC支持的规格请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/huks-kit/huks-local-key-management/huks-key-generation-import/huks-key-generation/huks-key-generation-overview#%E6%94%AF%E6%8C%81%E7%9A%84%E7%AE%97%E6%B3%95",
          children: "密钥生成支持的算法"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["除此之外，开发者也可以参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/huks-kit/huks-local-key-management/huks-key-generation-import/huks-key-import/huks-key-import-overview#%E6%94%AF%E6%8C%81%E7%9A%84%E7%AE%97%E6%B3%95",
        children: "密钥导入"
      }), "的规格介绍，导入已有的密钥。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "执行HMAC"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "获取密钥别名。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "获取待运算的数据。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huks/js-apis-huks#huksinitsession9",
          children: "initSession"
        }), "初始化密钥会话，并获取会话的句柄handle。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huks/js-apis-huks#huksfinishsession9",
          children: "finishSession"
        }), "结束密钥会话，获取哈希后的数据。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/*\n * 以下以HMAC密钥的Promise操作使用为例\n */\nimport { huks } from '@kit.UniversalKeystoreKit';\n\nlet hmacKeyAlias = 'test_HMAC';\nlet handle: number;\nlet plainText = '123456';\nlet hashData: Uint8Array;\n\nfunction stringToUint8Array(str: String) {\n  let arr: number[] = [];\n  for (let i = 0, j = str.length; i < j; ++i) {\n    arr.push(str.charCodeAt(i));\n  }\n  return new Uint8Array(arr);\n}\n\nfunction uint8ArrayToString(fileData: Uint8Array) {\n  let dataString = '';\n  for (let i = 0; i < fileData.length; i++) {\n    dataString += String.fromCharCode(fileData[i]);\n  }\n  return dataString;\n}\n\nfunction getHMACProperties() {\n  const properties: huks.HuksParam[] = [{\n    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,\n    value: huks.HuksKeyAlg.HUKS_ALG_HMAC\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,\n    value: huks.HuksKeySize.HUKS_AES_KEY_SIZE_256\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_PURPOSE,\n    value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_MAC\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_DIGEST,\n    value: huks.HuksKeyDigest.HUKS_DIGEST_SHA384,\n  }];\n  return properties;\n}\n\n/* 1.生成 HMAC 密钥 */\nasync function generateHMACKey() {\n  let options: huks.HuksOptions = {\n    properties: getHMACProperties()\n  };\n\n  await huks.generateKeyItem(hmacKeyAlias, options)\n    .then((data) => {\n      console.info(`promise: generate HMAC Key success`);\n    }).catch((error: Error) => {\n      console.error(`promise: generate HMAC Key failed, ${JSON.stringify(error)}`);\n      throw (error as Error);\n    })\n}\n/* 2.执行 HMAC 计算 */\nasync function hMACData() {\n  let options: huks.HuksOptions = {\n    properties: getHMACProperties(),\n    inData: stringToUint8Array(plainText)\n  }\n\n  await huks.initSession(hmacKeyAlias, options)\n    .then((data) => {\n      handle = data.handle;\n    }).catch((error: Error) => {\n      console.error(`promise: init session failed, ${JSON.stringify(error)}`);\n      throw (error as Error);\n    })\n\n  await huks.finishSession(handle, options)\n    .then((data) => {\n      console.info(`promise: HMAC data success, data is ` + uint8ArrayToString(data.outData as Uint8Array));\n      hashData = data.outData as Uint8Array;\n    }).catch((error: Error) => {\n      console.error(`promise: HMAC data failed, ${JSON.stringify(error)}`);\n      throw (error as Error);\n    })\n}\n\nasync function executeHMAC() {\n  await generateHMACKey();\n  await hMACData();\n}\n"
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