"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["876157"], {
747269(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_device_certificate_kit_certificate_framework_create_parse_verify_cert_object_create_parse_verify_cert_object_md_52f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-device-certificate-kit-certificate-framework-create-parse-verify-cert-object-create-parse-verify-cert-object-md-52f.json
var site_docs_system_security_device_certificate_kit_certificate_framework_create_parse_verify_cert_object_create_parse_verify_cert_object_md_52f_namespaceObject = JSON.parse('{"id":"system-security/device-certificate-kit/certificate-framework/create-parse-verify-cert-object/create-parse-verify-cert-object","title":"证书对象的创建、解析和校验","description":"以校验证书有效性为例，完成证书对象的创建、解析和校验。","source":"@site/docs/system-security/device-certificate-kit/certificate-framework/create-parse-verify-cert-object/create-parse-verify-cert-object.md","sourceDirName":"system-security/device-certificate-kit/certificate-framework/create-parse-verify-cert-object","slug":"/system-security/device-certificate-kit/certificate-framework/create-parse-verify-cert-object/","permalink":"/harmonyos-docs-site/system-security/device-certificate-kit/certificate-framework/create-parse-verify-cert-object/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"证书对象的创建、解析和校验","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/create-parse-verify-cert-object","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"证书算法库框架概述","permalink":"/harmonyos-docs-site/system-security/device-certificate-kit/certificate-framework/certificate-framework-overview/"},"next":{"title":"证书扩展信息对象的创建、解析和校验","permalink":"/harmonyos-docs-site/system-security/device-certificate-kit/certificate-framework/create-parse-verify-certextension-object/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/device-certificate-kit/certificate-framework/create-parse-verify-cert-object/create-parse-verify-cert-object.md


const frontMatter = {
	title: '证书对象的创建、解析和校验',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/create-parse-verify-cert-object',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '证书对象的创建、解析和校验';

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
        id: "证书对象的创建解析和校验",
        children: "证书对象的创建、解析和校验"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以校验证书有效性为例，完成证书对象的创建、解析和校验。"
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
          children: ["基于已有的X509证书数据，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-cert/js-apis-cert#certcreatex509cert",
            children: "cert.createX509Cert"
          }), "创建证书对象。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "解析证书的字段信息。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["此处以获取证书版本、证书序列号、证书颁发者名称、证书主体名称、证书对象的字符串类型数据为例，更多字段信息获取接口请查看", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-cert/js-apis-cert#x509cert",
            children: "API参考文档"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-cert/js-apis-cert#getpublickey",
            children: "X509Cert.getPublicKey"
          }), "获取证书中的公钥，并调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-cert/js-apis-cert#verify",
            children: "X509Cert.verify"
          }), "校验签名。示例为自验签场景，因此获取的是本证书中的公钥。应用须结合自身场景获取用于验签的公钥。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-cert/js-apis-cert#checkvaliditywithdate",
            children: "X509Cert.checkValidityWithDate"
          }), "校验证书有效期。入参date用于确认此日期是否在X509证书有效期内。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { cert } from '@kit.DeviceCertificateKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { util } from '@kit.ArkTS';\n\n// 此处仅为示例的证书二进制数据，需根据业务的不同对证书数据进行赋值。\nlet certData = '-----BEGIN CERTIFICATE-----\\n' +\n  'MIIBLzCB1QIUO/QDVJwZLIpeJyPjyTvE43xvE5cwCgYIKoZIzj0EAwIwGjEYMBYG\\n' +\n  'A1UEAwwPRXhhbXBsZSBSb290IENBMB4XDTIzMDkwNDExMjAxOVoXDTI2MDUzMDEx\\n' +\n  'MjAxOVowGjEYMBYGA1UEAwwPRXhhbXBsZSBSb290IENBMFkwEwYHKoZIzj0CAQYI\\n' +\n  'KoZIzj0DAQcDQgAEHjG74yMIueO7z3T+dyuEIrhxTg2fqgeNB3SGfsIXlsiUfLTa\\n' +\n  'tUsU0i/sePnrKglj2H8Abbx9PK0tsW/VgqwDIDAKBggqhkjOPQQDAgNJADBGAiEA\\n' +\n  '0ce/fvA4tckNZeB865aOApKXKlBjiRlaiuq5mEEqvNACIQDPD9WyC21MXqPBuRUf\\n' +\n  'BetUokslUfjT6+s/X4ByaxycAA==\\n' +\n  '-----END CERTIFICATE-----\\n';\n\n// 证书示例\nfunction certSample(): void {\n  let textEncoder = new util.TextEncoder();\n  let encodingBlob: cert.EncodingBlob = {\n    // 将证书数据从string类型转换成Uint8Array。\n    data: textEncoder.encodeInto(certData),\n    // 证书格式，仅支持PEM和DER。在此示例中，证书为PEM格式。\n    encodingFormat: cert.EncodingFormat.FORMAT_PEM\n  };\n\n  // 创建X509Cert实例。\n  cert.createX509Cert(encodingBlob, (err, x509Cert) => {\n    if (err != null) {\n      // 创建X509Cert实例失败。\n      console.error(`createX509Cert failed, errCode:${err.code}, errMsg:${err.message}`);\n      return;\n    }\n    // X509Cert实例创建成功。\n    console.info('createX509Cert result: success.');\n\n    // 获取证书版本。\n    let version = x509Cert.getVersion();\n    // 获取证书序列号。\n    let serial = x509Cert.getCertSerialNumber();\n    console.info(`X509 version: ${version} , X509 serial:${serial}`);\n\n    // 获取证书颁发者名称。\n    let issuerName = x509Cert.getIssuerName(cert.EncodingType.ENCODING_UTF8);\n    console.info(`X509 issuerName: ${issuerName}`);\n\n    // 获取证书主体名称。\n    let subjectNameBin = x509Cert.getSubjectName(cert.EncodingType.ENCODING_UTF8);\n    let encoder = util.TextDecoder.create();\n    let subjectName = encoder.decodeToString(subjectNameBin.data);\n    console.info(`X509 subjectName: ${subjectName}`);\n\n    // 获取证书对象的字符串类型数据。\n    let certString = x509Cert.toString(cert.EncodingType.ENCODING_UTF8);\n    console.info(`X509 certString: ${certString}`);\n\n    // 使用上级证书对象的getPublicKey()方法或本（自签名）证书对象获取公钥对象。\n    try {\n      let pubKey = x509Cert.getPublicKey();\n      // 验证证书签名。\n      x509Cert.verify(pubKey, (err, data) => {\n        if (err == null) {\n          // 签名验证成功。\n          console.info('verify result: success.');\n        } else {\n          // 签名验证失败。\n          console.error(`verify failed, errCode: ${err.code} , errMsg:${err.message}`);\n        }\n      });\n    } catch (error) {\n      let e: BusinessError = error as BusinessError;\n      console.error(`getPublicKey failed, errCode: ${e.code} , errMsg:${e.message}`);\n    }\n\n    // 用一个字符串代表时间。\n    let date = '20230930000001Z';\n\n    // 验证证书的有效期。\n    try {\n      x509Cert.checkValidityWithDate(date);\n    } catch (error) {\n      let e: BusinessError = error as BusinessError;\n      console.error(`checkValidityWithDate failed, errCode: ${e.code}, errMsg:${e.message}`);\n    }\n  });\n}\n"
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