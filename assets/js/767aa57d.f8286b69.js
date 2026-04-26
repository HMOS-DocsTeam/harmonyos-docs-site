"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["529556"], {
21017(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_device_certificate_kit_certificate_framework_create_parse_verify_certextension_object_create_parse_verify_certextension_object_md_767_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-device-certificate-kit-certificate-framework-create-parse-verify-certextension-object-create-parse-verify-certextension-object-md-767.json
var site_docs_system_security_device_certificate_kit_certificate_framework_create_parse_verify_certextension_object_create_parse_verify_certextension_object_md_767_namespaceObject = JSON.parse('{"id":"system-security/device-certificate-kit/certificate-framework/create-parse-verify-certextension-object/create-parse-verify-certextension-object","title":"证书扩展信息对象的创建、解析和校验","description":"以获取证书指定OID域段，并判断是否为CA证书为例，完成证书扩展信息对象的创建、解析和校验。","source":"@site/docs/system-security/device-certificate-kit/certificate-framework/create-parse-verify-certextension-object/create-parse-verify-certextension-object.md","sourceDirName":"system-security/device-certificate-kit/certificate-framework/create-parse-verify-certextension-object","slug":"/system-security/device-certificate-kit/certificate-framework/create-parse-verify-certextension-object/","permalink":"/harmonyos-docs-site/system-security/device-certificate-kit/certificate-framework/create-parse-verify-certextension-object/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"证书扩展信息对象的创建、解析和校验","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/create-parse-verify-certextension-object","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"证书对象的创建、解析和校验","permalink":"/harmonyos-docs-site/system-security/device-certificate-kit/certificate-framework/create-parse-verify-cert-object/"},"next":{"title":"证书吊销列表对象的创建、解析和校验","permalink":"/harmonyos-docs-site/system-security/device-certificate-kit/certificate-framework/create-parse-verify-crl-object/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/device-certificate-kit/certificate-framework/create-parse-verify-certextension-object/create-parse-verify-certextension-object.md


const frontMatter = {
	title: '证书扩展信息对象的创建、解析和校验',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/create-parse-verify-certextension-object',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '证书扩展信息对象的创建、解析和校验';

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
        id: "证书扩展信息对象的创建解析和校验",
        children: "证书扩展信息对象的创建、解析和校验"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以获取证书指定OID域段，并判断是否为CA证书为例，完成证书扩展信息对象的创建、解析和校验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["导入", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-cert/js-apis-cert",
            children: "证书算法库框架模块"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { cert } from '@kit.DeviceCertificateKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["解析证书扩展域段数据，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-cert/js-apis-cert#certcreatecertextension10",
            children: "cert.createCertExtension"
          }), "创建证书扩展域段对象。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-cert/js-apis-cert#getentry10",
            children: "CertExtension.getEntry"
          }), "获取指定OID证书扩展域段信息。比如，证书扩展域段对象标识符列表，根据对象标识符获取具体数据等。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-cert/js-apis-cert#checkca10",
            children: "CertExtension.checkCA"
          }), "判断证书是否为CA证书。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { cert } from '@kit.DeviceCertificateKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { util } from '@kit.ArkTS';\n\n// 证书扩展数据，以下只是一个示例。需要根据具体业务来赋值。\nlet extData = new Uint8Array([\n  0x30, 0x40, 0x30, 0x0F, 0x06, 0x03, 0x55, 0x1D,\n  0x13, 0x01, 0x01, 0xFF, 0x04, 0x05, 0x30, 0x03,\n  0x01, 0x01, 0xFF, 0x30, 0x0E, 0x06, 0x03, 0x55,\n  0x1D, 0x0F, 0x01, 0x01, 0xFF, 0x04, 0x04, 0x03,\n  0x02, 0x01, 0xC6, 0x30, 0x1D, 0x06, 0x03, 0x55,\n  0x1D, 0x0E, 0x04, 0x16, 0x04, 0x14, 0xE0, 0x8C,\n  0x9B, 0xDB, 0x25, 0x49, 0xB3, 0xF1, 0x7C, 0x86,\n  0xD6, 0xB2, 0x42, 0x87, 0x0B, 0xD0, 0x6B, 0xA0,\n  0xD9, 0xE4\n]);\n\n// 证书扩展示例\nfunction certExtensionSample(): void {\n  let textEncoder = new util.TextEncoder();\n  let encodingBlob: cert.EncodingBlob = {\n    data: extData,\n    // 证书扩展格式，目前仅支持DER格式。\n    encodingFormat: cert.EncodingFormat.FORMAT_DER\n  };\n\n  // 创建一个证书扩展实例。\n  cert.createCertExtension(encodingBlob, (err, certExtension) => {\n    if (err != null) {\n      // 证书扩展实例创建失败。\n      console.error(`createCertExtension failed, errCode:${err.code}, errMsg:${err.message}`);\n      return;\n    }\n    // 证书扩展实例创建成功。\n    console.info('createCertExtension result: success.');\n\n    try {\n      // 根据OID获取证书扩展信息。\n      let oidData = '2.5.29.14';\n      let oid: cert.DataBlob = {\n        data: textEncoder.encodeInto(oidData),\n      }\n      let entry = certExtension.getEntry(cert.ExtensionEntryType.EXTENSION_ENTRY_TYPE_ENTRY, oid);\n\n      // 检查证书是否为CA证书。\n      let pathLen = certExtension.checkCA();\n      console.info('checkCA result: success.');\n    } catch (err) {\n      let e: BusinessError = err as BusinessError;\n      console.error(`operation failed, errCode:${e.code}, errMsg:${e.message}`);\n    }\n  });\n}\n"
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