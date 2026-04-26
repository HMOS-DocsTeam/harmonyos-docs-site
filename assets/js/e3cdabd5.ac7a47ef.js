"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["427763"], {
812832(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_device_certificate_kit_certificate_framework_create_parse_verify_crl_object_create_parse_verify_crl_object_md_e3c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-device-certificate-kit-certificate-framework-create-parse-verify-crl-object-create-parse-verify-crl-object-md-e3c.json
var site_docs_system_security_device_certificate_kit_certificate_framework_create_parse_verify_crl_object_create_parse_verify_crl_object_md_e3c_namespaceObject = JSON.parse('{"id":"system-security/device-certificate-kit/certificate-framework/create-parse-verify-crl-object/create-parse-verify-crl-object","title":"证书吊销列表对象的创建、解析和校验","description":"以校验证书是否已吊销为例，完成证书吊销列表对象的创建、解析和校验。若证书已被吊销，将打印被吊销日期。","source":"@site/docs/system-security/device-certificate-kit/certificate-framework/create-parse-verify-crl-object/create-parse-verify-crl-object.md","sourceDirName":"system-security/device-certificate-kit/certificate-framework/create-parse-verify-crl-object","slug":"/system-security/device-certificate-kit/certificate-framework/create-parse-verify-crl-object/","permalink":"/harmonyos-docs-site/system-security/device-certificate-kit/certificate-framework/create-parse-verify-crl-object/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"证书吊销列表对象的创建、解析和校验","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/create-parse-verify-crl-object","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"证书扩展信息对象的创建、解析和校验","permalink":"/harmonyos-docs-site/system-security/device-certificate-kit/certificate-framework/create-parse-verify-certextension-object/"},"next":{"title":"证书链校验时从p12文件构造TrustAnchor对象数组","permalink":"/harmonyos-docs-site/system-security/device-certificate-kit/certificate-framework/create-trustanchor-from-p12/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/device-certificate-kit/certificate-framework/create-parse-verify-crl-object/create-parse-verify-crl-object.md


const frontMatter = {
	title: '证书吊销列表对象的创建、解析和校验',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/create-parse-verify-crl-object',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '证书吊销列表对象的创建、解析和校验';

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
        id: "证书吊销列表对象的创建解析和校验",
        children: "证书吊销列表对象的创建、解析和校验"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以校验证书是否已吊销为例，完成证书吊销列表对象的创建、解析和校验。若证书已被吊销，将打印被吊销日期。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["导入", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-cert/js-apis-cert",
            children: "证书算法库框架模块"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework",
            children: "加解密算法库模块"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { cert } from '@kit.DeviceCertificateKit';\nimport { cryptoFramework } from '@kit.CryptoArchitectureKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["基于已有的CRL数据，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-cert/js-apis-cert#certcreatex509crl11",
            children: "cert.createX509CRL"
          }), "创建X509证书吊销列表的对象。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "解析证书吊销列表信息。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["此处以获取证书吊销列表版本、证书吊销列表类型、证书吊销列表颁发者名称、证书吊销列表对象的字符串类型数据为例，更多字段信息获取接口请查看", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-cert/js-apis-cert#x509crl11",
            children: "API参考文档"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "基于已有公钥信息，创建PublicKey公钥对象。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["具体可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#convertkey-3",
            children: "加解密算法库框架-指定二进制数据生成非对称密钥对"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-cert/js-apis-cert#verify11",
            children: "X509CRL.verify"
          }), "校验签名合法性。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["基于已有的X509证书数据，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-cert/js-apis-cert#certcreatex509cert",
            children: "cert.createX509Cert"
          }), "创建证书对象。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-cert/js-apis-cert#isrevoked11",
            children: "X509CRL.isRevoked"
          }), "判断X509证书是否已被吊销。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-cert/js-apis-cert#getrevokedcert11",
            children: "X509CRL.getRevokedCert"
          }), "获取被吊销证书对象。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-cert/js-apis-cert#getrevocationdate11",
            children: "X509CRLEntry.getRevocationDate"
          }), "获取被吊销日期。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { cert } from '@kit.DeviceCertificateKit';\nimport { cryptoFramework } from '@kit.CryptoArchitectureKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { util } from '@kit.ArkTS';\n\n// ...\n// CRL示例\nfunction crlSample(): void {\n  let textEncoder = new util.TextEncoder();\n  let encodingBlob: cert.EncodingBlob = {\n    // 将CRL数据从string转为Uint8Array。\n    data: textEncoder.encodeInto(crlData),\n    // CRL格式，仅支持PEM和DER格式。在这个例子中，CRL用的是PEM格式。\n    encodingFormat: cert.EncodingFormat.FORMAT_PEM\n  };\n\n  // 创建X509CRL实例。\n  cert.createX509CRL(encodingBlob, (err, x509Crl) => {\n    if (err != null) {\n      // 创建X509CRL实例失败。\n      console.error(`createX509Crl failed, errCode: ${err.code}, errMsg:${err.message} `);\n      return;\n    }\n    // 创建X509CRL实例成功。\n    console.info('createX509CRL result: success.');\n\n    // 获取CRL的版本。\n    let version = x509Crl.getVersion();\n    // 获取证书吊销列表类型。\n    let revokedType = x509Crl.getType();\n    console.info(`X509 CRL version: ${version}, type :${revokedType}`);\n\n    // 获取证书吊销列表颁发者名称。\n    let issuerName = x509Crl.getIssuerName(cert.EncodingType.ENCODING_UTF8);\n    console.info(`X509 CRL issuerName: ${issuerName}`);\n\n    // 获取证书吊销列表对象的字符串类型数据。\n    let crlString = x509Crl.toString(cert.EncodingType.ENCODING_UTF8);\n    console.info(`X509 CRL crlString: ${crlString}`);\n\n\n    // 公钥的二进制数据需要传入@ohos.security.cryptoFramework的convertKey()方法去获取公钥对象。\n    try {\n      let keyGenerator = cryptoFramework.createAsyKeyGenerator('RSA1024|PRIMES_3');\n      console.info('createAsyKeyGenerator result: success.');\n      let pubEncodingBlob: cryptoFramework.DataBlob = {\n        data: pubKeyData,\n      };\n      keyGenerator.convertKey(pubEncodingBlob, null, (e, keyPair) => {\n        if (e == null) {\n          console.info('convertKey result: success.');\n          x509Crl.verify(keyPair.pubKey, (err, data) => {\n            if (err == null) {\n              // 签名验证成功。\n              console.info('verify result: success.');\n            } else {\n              // 签名验证失败。\n              console.error(`verify failed, errCode: ${err.code}, errMsg: ${err.message}`);\n            }\n          });\n        } else {\n          console.error(`convert key failed, errCode: ${e.code}, errMsg: ${e.message}`);\n        }\n      })\n    } catch (error) {\n      let e: BusinessError = error as BusinessError;\n      console.error(`get pubKey failed, errCode: ${e.code}, errMsg: ${e.message}`);\n    }\n\n    // 使用certFramework的createX509Cert()方法创建一个X509Cert实例。\n    let certBlob: cert.EncodingBlob = {\n      data: textEncoder.encodeInto(certData),\n      encodingFormat: cert.EncodingFormat.FORMAT_PEM\n    };\n    let revokedFlag = true;\n    let serial: bigint = BigInt('0');\n    cert.createX509Cert(certBlob, (err, cert) => {\n      serial = cert.getCertSerialNumber();\n      if (err == null) {\n        try {\n          // 检查证书是否被吊销。\n          revokedFlag = x509Crl.isRevoked(cert);\n          console.info(`revokedFlag is: ${revokedFlag}`);\n          if (!revokedFlag) {\n            console.info('the given cert is not revoked.');\n            return;\n          }\n          // 根据序列号来获取被吊销的证书。\n          try {\n            let crlEntry = x509Crl.getRevokedCert(serial);\n            console.info('getRevokedCert result: success.');\n            let serialNumber = crlEntry.getSerialNumber();\n            console.info(`crlEntry serialNumber is: ${serialNumber}`);\n\n            // 获取被吊销证书的吊销日期。\n            let date = crlEntry.getRevocationDate();\n            console.info(`revocation date is: ${date}`);\n          } catch (error) {\n            let e: BusinessError = error as BusinessError;\n            console.error(`getRevokedCert failed, errCode: ${e.code}, errMsg: ${e.message}`);\n          }\n        } catch (error) {\n          let e: BusinessError = error as BusinessError;\n          console.error(`isRevoked failed, errCode: ${e.code}, errMsg:${e.message}`);\n        }\n      } else {\n        console.error(`create x509 cert failed, errCode: ${err.code}, errMsg: ${err.message}`);\n      }\n    })\n\n  });\n}\n"
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