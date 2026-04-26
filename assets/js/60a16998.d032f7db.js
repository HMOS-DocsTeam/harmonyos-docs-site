"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["662304"], {
385010(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_device_certificate_kit_certificate_framework_create_trustanchor_from_p_12_create_trustanchor_from_p_12_md_60a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-device-certificate-kit-certificate-framework-create-trustanchor-from-p-12-create-trustanchor-from-p-12-md-60a.json
var site_docs_system_security_device_certificate_kit_certificate_framework_create_trustanchor_from_p_12_create_trustanchor_from_p_12_md_60a_namespaceObject = JSON.parse('{"id":"system-security/device-certificate-kit/certificate-framework/create-trustanchor-from-p12/create-trustanchor-from-p12","title":"证书链校验时从p12文件构造TrustAnchor对象数组","description":"证书链校验时从p12文件构造TrustAnchor对象数组。","source":"@site/docs/system-security/device-certificate-kit/certificate-framework/create-trustanchor-from-p12/create-trustanchor-from-p12.md","sourceDirName":"system-security/device-certificate-kit/certificate-framework/create-trustanchor-from-p12","slug":"/system-security/device-certificate-kit/certificate-framework/create-trustanchor-from-p12/","permalink":"/harmonyos-docs-site/system-security/device-certificate-kit/certificate-framework/create-trustanchor-from-p12/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"证书链校验时从p12文件构造TrustAnchor对象数组","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/create-trustanchor-from-p12","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"证书吊销列表对象的创建、解析和校验","permalink":"/harmonyos-docs-site/system-security/device-certificate-kit/certificate-framework/create-parse-verify-crl-object/"},"next":{"title":"证书链校验器对象的创建和校验","permalink":"/harmonyos-docs-site/system-security/device-certificate-kit/certificate-framework/create-verify-cerchainvalidator-object/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/device-certificate-kit/certificate-framework/create-trustanchor-from-p12/create-trustanchor-from-p12.md


const frontMatter = {
	title: '证书链校验时从p12文件构造TrustAnchor对象数组',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/create-trustanchor-from-p12',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '证书链校验时从p12文件构造TrustAnchor对象数组';

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
        id: "证书链校验时从p12文件构造trustanchor对象数组",
        children: "证书链校验时从p12文件构造TrustAnchor对象数组"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "证书链校验时从p12文件构造TrustAnchor对象数组。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["导入", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-cert/js-apis-cert",
          children: "证书算法库框架模块"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["基于现有的p12文件数据，调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-cert/js-apis-cert#certcreatetrustanchorswithkeystore12",
          children: "cert.createTrustAnchorsWithKeyStore"
        }), "创建", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-cert/js-apis-cert#x509trustanchor11",
          children: "X509TrustAnchor"
        }), "数组对象，并返回结果。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { cert } from '@kit.DeviceCertificateKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nfunction test() {\n  // ...\n  try {\n    cert.createTrustAnchorsWithKeyStore(p12Data, '123456').then((data) => {\n      console.info('createTrustAnchorsWithKeyStore result: success, the num of result is :' + data.length);\n    }).catch((err: BusinessError) => {\n      console.error(`createTrustAnchorsWithKeyStore failed, errCode: ${err.code}, message: ${err.message}`);\n    })\n  } catch (error) {\n    console.error(`createTrustAnchorsWithKeyStore failed, errCode: ${error.code}, message: ${error.message}`);\n  }\n}\n"
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