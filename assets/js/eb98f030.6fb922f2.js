"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["400875"], {
792203(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_huks_kit_huks_local_key_management_huks_delete_key_huks_delete_key_arkts_huks_delete_key_arkts_md_eb9_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-huks-kit-huks-local-key-management-huks-delete-key-huks-delete-key-arkts-huks-delete-key-arkts-md-eb9.json
var site_docs_system_security_huks_kit_huks_local_key_management_huks_delete_key_huks_delete_key_arkts_huks_delete_key_arkts_md_eb9_namespaceObject = JSON.parse('{"id":"system-security/huks-kit/huks-local-key-management/huks-delete-key/huks-delete-key-arkts/huks-delete-key-arkts","title":"密钥删除(ArkTS)","description":"为保证数据安全性，当不需要使用该密钥时，应该删除密钥。","source":"@site/docs/system-security/huks-kit/huks-local-key-management/huks-delete-key/huks-delete-key-arkts/huks-delete-key-arkts.md","sourceDirName":"system-security/huks-kit/huks-local-key-management/huks-delete-key/huks-delete-key-arkts","slug":"/system-security/huks-kit/huks-local-key-management/huks-delete-key/huks-delete-key-arkts/","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/huks-delete-key/huks-delete-key-arkts/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"密钥删除(ArkTS)","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-delete-key-arkts","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"CMAC(C/C++)","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-cmac/huks-cmac-native/"},"next":{"title":"密钥删除(C/C++)","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/huks-delete-key/huks-delete-key-ndk/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/huks-kit/huks-local-key-management/huks-delete-key/huks-delete-key-arkts/huks-delete-key-arkts.md


const frontMatter = {
	title: '密钥删除(ArkTS)',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-delete-key-arkts',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '密钥删除(ArkTS)';

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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "密钥删除arkts",
        children: "密钥删除(ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为保证数据安全性，当不需要使用该密钥时，应该删除密钥。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API 23开始支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-group-key-overview",
        children: "群组密钥"
      }), "特性。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以删除DH密钥为例。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["指定密钥别名，密钥别名命名规范参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/huks-kit/huks-local-key-management/huks-key-generation-import/huks-key-generation/huks-key-generation-overview",
          children: "密钥生成介绍及算法规格"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "初始化密钥属性集。用于删除时指定密钥的属性，删除单个密钥或者非群组密钥，可传空。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用接口", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huks/js-apis-huks#huksdeletekeyitem9",
          children: "deleteKeyItem"
        }), "，删除密钥。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/*\n * 以下以DH密钥的Promise操作使用为例\n */\nimport { huks } from '@kit.UniversalKeystoreKit';\n\nlet keyAlias = 'test_Key';\n\nlet generateProperties: huks.HuksParam[] = [\n  {\n    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,\n    value: huks.HuksKeyAlg.HUKS_ALG_DH\n  },\n  {\n    tag: huks.HuksTag.HUKS_TAG_PURPOSE,\n    value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_AGREE\n  },\n  {\n    tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,\n    value: huks.HuksKeySize.HUKS_DH_KEY_SIZE_2048\n  }\n];\n\nlet generateHuksOptions: huks.HuksOptions = {\n  properties: generateProperties,\n  inData: new Uint8Array([])\n}\n\n/* 1.生成密钥 */\nfunction generateKeyItem(keyAlias: string, huksOptions: huks.HuksOptions) {\n  return new Promise<void>((resolve, reject) => {\n    try {\n      huks.generateKeyItem(keyAlias, huksOptions, (error, data) => {\n        if (error) {\n          reject(error);\n        } else {\n          resolve(data);\n        }\n      });\n    } catch (error) {\n      throw (error as Error);\n    }\n  });\n}\n\nasync function generateKey(keyAlias: string, huksOptions: huks.HuksOptions): Promise<void> {\n  console.info(`enter promise generateKeyItem`);\n  try {\n    await generateKeyItem(keyAlias, huksOptions);\n    console.info(`promise: generateKeyItem success`);\n  } catch (error) {\n    console.error(`promise: generateKeyItem failed, ${JSON.stringify(error)}`);\n  }\n}\n\n/* 2.删除密钥 */\nlet deleteHuksOptions: huks.HuksOptions = {\n  properties: []\n}\n\nfunction deleteKeyItem(keyAlias: string, huksOptions: huks.HuksOptions) {\n  return new Promise<void>((resolve, reject) => {\n    try {\n      huks.deleteKeyItem(keyAlias, huksOptions, (error, data) => {\n        if (error) {\n          reject(error);\n        } else {\n          resolve(data);\n        }\n      });\n    } catch (error) {\n      throw (error as Error);\n    }\n  });\n}\n\nasync function deleteKey(keyAlias: string, huksOptions: huks.HuksOptions): Promise<void> {\n  console.info(`enter promise deleteKeyItem`);\n  try {\n    await deleteKeyItem(keyAlias, huksOptions);\n    console.info(`promise: deleteKeyItem success`);\n  } catch (error) {\n    console.error(`promise: deleteKeyItem failed, ${JSON.stringify(error)}`);\n  }\n}\n\nasync function executeKeyLifecycle(): Promise<string> {\n  try {\n    /* 1.生成密钥 */\n    console.info('start generateKey...');\n    await generateKey(keyAlias, generateHuksOptions);\n    console.info('end generateKey...');\n\n    /* 2.删除密钥 */\n    console.info('start deleteKey...');\n    await deleteKey(keyAlias, deleteHuksOptions);\n    console.info('end deleteKey...');\n\n    console.info('Key lifecycle completed successfully');\n    return 'Success';\n  } catch (error) {\n    console.error(`Key lifecycle failed: ${JSON.stringify(error)}`);\n    return 'Failed';\n  }\n}\n"
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