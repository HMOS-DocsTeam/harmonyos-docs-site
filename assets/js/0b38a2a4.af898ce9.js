"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["977683"], {
659363(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_huks_kit_huks_external_key_management_huks_ukey_general_operation_huks_ukey_general_query_arkts_huks_ukey_general_query_arkts_md_0b3_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-huks-kit-huks-external-key-management-huks-ukey-general-operation-huks-ukey-general-query-arkts-huks-ukey-general-query-arkts-md-0b3.json
var site_docs_system_security_huks_kit_huks_external_key_management_huks_ukey_general_operation_huks_ukey_general_query_arkts_huks_ukey_general_query_arkts_md_0b3_namespaceObject = JSON.parse('{"id":"system-security/huks-kit/huks-external-key-management/huks-ukey-general-operation/huks-ukey-general-query-arkts/huks-ukey-general-query-arkts","title":"通用查询(ArkTS)","description":"从API 22开始，huksExternalCrypto提供通用查询功能接口。该接口可以用于从UKey中获取设备标识、App标识以及其他通用属性信息，完成属性查询操作。具体的场景介绍请参考获取属性介绍及规格。","source":"@site/docs/system-security/huks-kit/huks-external-key-management/huks-ukey-general-operation/huks-ukey-general-query-arkts/huks-ukey-general-query-arkts.md","sourceDirName":"system-security/huks-kit/huks-external-key-management/huks-ukey-general-operation/huks-ukey-general-query-arkts","slug":"/system-security/huks-kit/huks-external-key-management/huks-ukey-general-operation/huks-ukey-general-query-arkts/","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-external-key-management/huks-ukey-general-operation/huks-ukey-general-query-arkts/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"通用查询(ArkTS)","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-ukey-general-query-arkts","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"通用查询介绍及规格","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-external-key-management/huks-ukey-general-operation/huks-ukey-general-query-overview/"},"next":{"title":"通用查询(C/C++)","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-external-key-management/huks-ukey-general-operation/huks-ukey-general-query-ndk/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/huks-kit/huks-external-key-management/huks-ukey-general-operation/huks-ukey-general-query-arkts/huks-ukey-general-query-arkts.md


const frontMatter = {
	title: '通用查询(ArkTS)',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-ukey-general-query-arkts',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '通用查询(ArkTS)';

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
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "通用查询arkts",
        children: "通用查询(ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API 22开始，huksExternalCrypto提供通用查询功能接口。该接口可以用于从UKey中获取设备标识、App标识以及其他通用属性信息，完成属性查询操作。具体的场景介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/huks-kit/huks-external-key-management/huks-ukey-general-operation/huks-ukey-general-query-overview",
        children: "获取属性介绍及规格"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "获取属性"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过证书管理系统能力提供的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-certmanagerdialog/js-apis-certmanagerdialog#certificatemanagerdialogopenauthorizedialog22",
          children: "证书选择接口"
        }), "获取", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-certmanagerdialog/js-apis-certmanagerdialog#certreference22",
          children: "keyUri"
        }), "作为resourceId，并", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/huks-kit/huks-external-key-management/huks-resource-management/huks-open-close-resource-ndk#%E6%89%93%E5%BC%80%E8%B5%84%E6%BA%90",
          children: "打开资源"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["构造输入参数propertyId和可选输入参数", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huksexternalcrypto/js-apis-huksexternalcrypto#huksexternalcryptoparam",
          children: "param"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huksexternalcrypto/js-apis-huksexternalcrypto#huksexternalcryptogetproperty",
          children: "getProperty"
        }), "获取属性信息。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发案例",
      children: "开发案例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { huksExternalCrypto } from '@kit.UniversalKeystoreKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nasync function getProperty(): Promise<Array<huksExternalCrypto.HuksExternalCryptoParam>> {\n  // 1. 获取resourceId, 假设获取的resourceId如下，并已经打开该资源\n  const testResourceId = JSON.stringify({\n    providerName: \"testProviderName\",\n    bundleName: \"com.example.cryptoapplication\",\n    abilityName: \"CryptoExtension\",\n    index: {\n      key: \"testKey\"\n    } as ESObject\n  });\n\n  // 2. 构造输入参数propertyId和可选参数param\n  let propertyId = \"SKF_EnumDev\";\n  const extProperties: Array<huksExternalCrypto.HuksExternalCryptoParam> = [];\n\n  // 3. 调用getProperty获取属性信息\n  console.info(`promise: await huksExternalCrypto getProperty`);\n  try {\n    await huksExternalCrypto.getProperty(testResourceId, propertyId, extProperties)\n      .then((data) => {\n        console.info(`promise: getProperty success, data: ` + JSON.stringify(data));\n      }).catch((error: BusinessError) => {\n        console.error(`promise: getProperty failed, errCode : ${error.code}, errMsg : ${error.message}`);\n      })\n  } catch (error) {\n    console.error(`promise: getProperty failed, errCode : ${error.code}, errMsg : ${error.message}`);\n  }\n  return extProperties;\n}\n"
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