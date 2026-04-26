"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["923117"], {
753880(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_huks_kit_huks_local_key_management_huks_other_operations_huks_check_key_huks_check_key_arkts_huks_check_key_arkts_md_4cd_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-huks-kit-huks-local-key-management-huks-other-operations-huks-check-key-huks-check-key-arkts-huks-check-key-arkts-md-4cd.json
var site_docs_system_security_huks_kit_huks_local_key_management_huks_other_operations_huks_check_key_huks_check_key_arkts_huks_check_key_arkts_md_4cd_namespaceObject = JSON.parse('{"id":"system-security/huks-kit/huks-local-key-management/huks-other-operations/huks-check-key/huks-check-key-arkts/huks-check-key-arkts","title":"查询密钥是否存在(ArkTS)","description":"HUKS提供了接口供应用查询指定密钥是否存在。","source":"@site/docs/system-security/huks-kit/huks-local-key-management/huks-other-operations/huks-check-key/huks-check-key-arkts/huks-check-key-arkts.md","sourceDirName":"system-security/huks-kit/huks-local-key-management/huks-other-operations/huks-check-key/huks-check-key-arkts","slug":"/system-security/huks-kit/huks-local-key-management/huks-other-operations/huks-check-key/huks-check-key-arkts/","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/huks-other-operations/huks-check-key/huks-check-key-arkts/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"查询密钥是否存在(ArkTS)","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-check-key-arkts","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"验证应用请求真实性集成设计实践","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/device-attestation/device-attestation-practice/"},"next":{"title":"查询密钥是否存在(C/C++)","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/huks-other-operations/huks-check-key/huks-check-key-ndk/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/huks-kit/huks-local-key-management/huks-other-operations/huks-check-key/huks-check-key-arkts/huks-check-key-arkts.md


const frontMatter = {
	title: '查询密钥是否存在(ArkTS)',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-check-key-arkts',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '查询密钥是否存在(ArkTS)';

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
        id: "查询密钥是否存在arkts",
        children: "查询密钥是否存在(ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HUKS提供了接口供应用查询指定密钥是否存在。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API 23开始支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-group-key-overview",
        children: "群组密钥"
      }), "特性。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["指定密钥别名，密钥别名命名规范参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/huks-kit/huks-local-key-management/huks-key-generation-import/huks-key-generation/huks-key-generation-overview",
          children: "密钥生成介绍及算法规格"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "初始化密钥属性集。用于查询时指定密钥的属性，查询单个密钥或者非群组密钥，可传空。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用接口", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huks/js-apis-huks#hukshaskeyitem11",
          children: "hasKeyItem"
        }), "，查询密钥是否存在。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { huks } from '@kit.UniversalKeystoreKit';\n\nlet keyAlias = 'test_key';\nlet isKeyExist: Boolean;\n\nlet generateProperties: huks.HuksParam[] = [\n  {\n    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,\n    value: huks.HuksKeyAlg.HUKS_ALG_DH\n  },\n  {\n    tag: huks.HuksTag.HUKS_TAG_PURPOSE,\n    value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_AGREE\n  },\n  {\n    tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,\n    value: huks.HuksKeySize.HUKS_DH_KEY_SIZE_2048\n  }\n];\n\nlet generateHuksOptions: huks.HuksOptions = {\n  properties: generateProperties,\n  inData: new Uint8Array([])\n}\n\n/* 1.生成密钥 */\nfunction generateKeyItem(keyAlias: string, huksOptions: huks.HuksOptions) {\n  return new Promise<void>((resolve, reject) => {\n    try {\n      huks.generateKeyItem(keyAlias, huksOptions, (error, data) => {\n        if (error) {\n          reject(error);\n        } else {\n          resolve(data);\n        }\n      });\n    } catch (error) {\n      throw (error as Error);\n    }\n  });\n}\n\nasync function generateKey(keyAlias: string, huksOptions: huks.HuksOptions): Promise<void> {\n  console.info(`enter promise generateKeyItem`);\n  await generateKeyItem(keyAlias, huksOptions);\n  console.info(`promise: generateKeyItem success`);\n}\n\n/* 2.检查密钥是否存在 */\nlet huksOptions: huks.HuksOptions = {\n  properties: []\n}\n\nfunction hasKeyItem(keyAlias: string, huksOptions: huks.HuksOptions) {\n  return new Promise<boolean>((resolve, reject) => {\n    try {\n      huks.hasKeyItem(keyAlias, huksOptions, (error, data) => {\n        if (error) {\n          reject(error);\n        } else {\n          resolve(data.valueOf());\n        }\n      });\n    } catch (error) {\n      throw (error as Error);\n    }\n  });\n}\n\nasync function checkKeyExistence(keyAlias: string, huksOptions: huks.HuksOptions): Promise<boolean> {\n  console.info(`enter promise hasKeyItem`);\n  const exists = await hasKeyItem(keyAlias, huksOptions);\n  console.info(`promise: hasKeyItem success, isKeyExist = ${exists}`);\n  return exists;\n}\n\nasync function executeCheckKey(): Promise<string> {\n  try {\n    /* 1.生成密钥 */\n    await generateKey(keyAlias, generateHuksOptions);\n\n    /* 2.检查密钥是否存在 */\n    isKeyExist = await checkKeyExistence(keyAlias, huksOptions);\n\n    console.info(`Key check completed, isKeyExist = ${isKeyExist}`);\n    return 'Success';\n  } catch (error) {\n    console.error(`Key check failed: ${JSON.stringify(error)}`);\n    return 'Failed';\n  }\n}\n"
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