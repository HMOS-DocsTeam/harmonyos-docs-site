"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["784673"], {
632269(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_device_certificate_kit_certificate_framework_create_cms_decapsulation_object_create_cms_decapsulation_object_md_88d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-device-certificate-kit-certificate-framework-create-cms-decapsulation-object-create-cms-decapsulation-object-md-88d.json
var site_docs_system_security_device_certificate_kit_certificate_framework_create_cms_decapsulation_object_create_cms_decapsulation_object_md_88d_namespaceObject = JSON.parse('{"id":"system-security/device-certificate-kit/certificate-framework/create-cms-decapsulation-object/create-cms-decapsulation-object","title":"证书CMS解封装","description":"从API 22开始，支持证书CMS解封装。","source":"@site/docs/system-security/device-certificate-kit/certificate-framework/create-cms-decapsulation-object/create-cms-decapsulation-object.md","sourceDirName":"system-security/device-certificate-kit/certificate-framework/create-cms-decapsulation-object","slug":"/system-security/device-certificate-kit/certificate-framework/create-cms-decapsulation-object/","permalink":"/harmonyos-docs-site/system-security/device-certificate-kit/certificate-framework/create-cms-decapsulation-object/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":13,"frontMatter":{"title":"证书CMS解封装","sidebar_position":13,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/create-cms-decapsulation-object","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"证书CMS验签","permalink":"/harmonyos-docs-site/system-security/device-certificate-kit/certificate-framework/create-cms-verify-object/"},"next":{"title":"证书PKCS12的创建和解析","permalink":"/harmonyos-docs-site/system-security/device-certificate-kit/certificate-framework/create-parse-pkcs12/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/device-certificate-kit/certificate-framework/create-cms-decapsulation-object/create-cms-decapsulation-object.md


const frontMatter = {
	title: '证书CMS解封装',
	sidebar_position: 13,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/create-cms-decapsulation-object',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '证书CMS解封装';

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
        id: "证书cms解封装",
        children: "证书CMS解封装"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API 22开始，支持证书CMS解封装。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PKCS#7是用于存储签名或加密数据的标准语法。CMS作为PKCS#7的扩展，支持的数据类型包括数据、签名数据、封装数据、签名和封装数据、摘要数据以及加密数据。该标准常用于保护数据的完整性和机密性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "目前仅支持CMS签名数据和封装数据。"
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
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/device-certificate-kit/certificate-framework/create-cms-enveloped-object",
            children: "证书CMS封装"
          }), "进行CMS数据封装。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-cert/js-apis-cert#certcreatecmsparser22",
            children: "cert.createCmsParser"
          }), "创建CmsParser对象。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-cert/js-apis-cert#setrawdata22",
            children: "cmsParser.setRawData"
          }), "设置CMS数据。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-cert/js-apis-cert#decryptenvelopeddata22",
            children: "cmsParser.decryptEnvelopedData"
          }), "解密封装数据。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "解封装示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { cert } from '@kit.DeviceCertificateKit';\n\nlet ECC_256_PUBKEY: string =\n  '-----BEGIN CERTIFICATE-----\\n' +\n    'MIICGDCCAb6gAwIBAgIGAXKnJjrAMAoGCCqGSM49BAMCMFcxCzAJBgNVBAYTAkNO\\n' +\n    'MQ8wDQYDVQQIDAbpmZXopb8xDzANBgNVBAcMBuilv+WuiTEPMA0GA1UECgwG5rWL\\n' +\n    '6K+VMRUwEwYDVQQDDAzkuK3mlofmtYvor5UwHhcNMjUwOTE2MDY0MTMwWhcNMzUw\\n' +\n    'OTE0MDY0MTMwWjBXMQswCQYDVQQGEwJDTjEPMA0GA1UECAwG6ZmV6KW/MQ8wDQYD\\n' +\n    'VQQHDAbopb/lrokxDzANBgNVBAoMBua1i+ivlTEVMBMGA1UEAwwM5Lit5paH5rWL\\n' +\n    '6K+VMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEB06h4SzOryi3d7PW9yN2wACC\\n' +\n    'VxlduBQjVLWZlDKhFKkdZjve8mUyytSSbBj/rrzR2XmzUzofuNkUbAtje3DDJqN2\\n' +\n    'MHQwHQYDVR0OBBYEFNtUldgBESf31bwTnYtApIctaSdtMB8GA1UdIwQYMBaAFNtU\\n' +\n    'ldgBESf31bwTnYtApIctaSdtMAsGA1UdDwQEAwIBBjAJBgNVHREEAjAAMAkGA1Ud\\n' +\n    'EgQCMAAwDwYDVR0TAQH/BAUwAwEB/zAKBggqhkjOPQQDAgNIADBFAiEAzxzaG2vR\\n' +\n    'zUnFFL3X3lRQ0IOJrb6cvkSZuaFd4bW2lgUCIHW6QGGnECDFMbDNz7Og9kjkt+3k\\n' +\n    'FmEJWqEMYudBH3Ul\\n' +\n    '-----END CERTIFICATE-----';\nlet ECC_256_PRIVATE: string =\n  '-----BEGIN PRIVATE KEY-----\\n' +\n    'MIGHAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBG0wawIBAQQgOYwEyIw3ZNIAL4xO\\n' +\n    'pP6eVcQYcrL2sfnt6vB0z9tKmMmhRANCAAQHTqHhLM6vKLd3s9b3I3bAAIJXGV24\\n' +\n    'FCNUtZmUMqEUqR1mO97yZTLK1JJsGP+uvNHZebNTOh+42RRsC2N7cMMm\\n' +\n    '-----END PRIVATE KEY-----';\n\n// string转Uint8Array。\nfunction stringToUint8Array(str: string): Uint8Array {\n  let arr: number[] = [];\n  for (let i = 0, j = str.length; i < j; i++) {\n    arr.push(str.charCodeAt(i));\n  };\n  return new Uint8Array(arr);\n}\n\nasync function createX509Cert(inStream: string): Promise<cert.X509Cert> {\n  let encodingBlob: cert.EncodingBlob = {\n    data: stringToUint8Array(inStream),\n    encodingFormat: cert.EncodingFormat.FORMAT_PEM\n  };\n  let x509Cert: cert.X509Cert = await cert.createX509Cert(encodingBlob);\n  return x509Cert;\n}\n\nasync function testCmsDecryptTest() {\n  try {\n    let plainText: Uint8Array = new Uint8Array([0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07]);\n    let x509CertEc: cert.X509Cert = await createX509Cert(ECC_256_PUBKEY);\n    let cms: cert.CmsGenerator = cert.createCmsGenerator(cert.CmsContentType.ENVELOPED_DATA);\n    let option: cert.CmsGeneratorOptions = {\n      outFormat: cert.CmsFormat.PEM\n    };\n    cms.setRecipientEncryptionAlgorithm(cert.CmsRecipientEncryptionAlgorithm.AES_128_GCM);\n    let recipientInfo: cert.CmsRecipientInfo = {\n      keyAgreeInfo: {\n        cert: x509CertEc,\n        digestAlgorithm: cert.CmsKeyAgreeRecipientDigestAlgorithm.SHA256\n      }\n    };\n    await cms.addRecipientInfo(recipientInfo);\n    console.info('add recipient result: success, digestAlgorithm = ' + recipientInfo.keyAgreeInfo?.digestAlgorithm);\n    let envelopeData = await cms.doFinal(plainText, option);\n    console.info('doFinal result: success, envelopeData = ' + envelopeData);\n    let cipherText = await cms.getEncryptedContentData();\n    console.info('getEncryptedContentData result: success, cipherText = ' + cipherText);\n    let config: cert.CmsEnvelopedDecryptionConfig = {\n      keyInfo: {\n        key: ECC_256_PRIVATE\n      },\n    };\n    let cmsDecrypt: cert.CmsParser = cert.createCmsParser();\n    await cmsDecrypt.setRawData(envelopeData, cert.CmsFormat.PEM);\n    let decPlainText: Uint8Array = await cmsDecrypt.decryptEnvelopedData(config);\n    console.info('[XTS] decryptEnvelopedData result: success, decPlainText = ' + decPlainText);\n    console.info('decryptEnvelopedData result: success.');\n  } catch (error) {\n    console.error(`verifySignedData failed: errCode: ${error.code}, message: ${error.message}`);\n  }\n}\n"
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