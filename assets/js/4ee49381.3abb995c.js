"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["409645"], {
331685(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_device_certificate_kit_certificate_framework_create_cms_enveloped_object_create_cms_enveloped_object_md_4ee_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-device-certificate-kit-certificate-framework-create-cms-enveloped-object-create-cms-enveloped-object-md-4ee.json
var site_docs_system_security_device_certificate_kit_certificate_framework_create_cms_enveloped_object_create_cms_enveloped_object_md_4ee_namespaceObject = JSON.parse('{"id":"system-security/device-certificate-kit/certificate-framework/create-cms-enveloped-object/create-cms-enveloped-object","title":"证书CMS封装","description":"从API 22开始，支持证书CMS封装。","source":"@site/docs/system-security/device-certificate-kit/certificate-framework/create-cms-enveloped-object/create-cms-enveloped-object.md","sourceDirName":"system-security/device-certificate-kit/certificate-framework/create-cms-enveloped-object","slug":"/system-security/device-certificate-kit/certificate-framework/create-cms-enveloped-object/","permalink":"/harmonyos-docs-site/system-security/device-certificate-kit/certificate-framework/create-cms-enveloped-object/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"title":"证书CMS封装","sidebar_position":11,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/create-cms-enveloped-object","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"证书CMS签名","permalink":"/harmonyos-docs-site/system-security/device-certificate-kit/certificate-framework/create-cms-sign-object/"},"next":{"title":"证书CMS验签","permalink":"/harmonyos-docs-site/system-security/device-certificate-kit/certificate-framework/create-cms-verify-object/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/device-certificate-kit/certificate-framework/create-cms-enveloped-object/create-cms-enveloped-object.md


const frontMatter = {
	title: '证书CMS封装',
	sidebar_position: 11,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/create-cms-enveloped-object',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '证书CMS封装';

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
        id: "证书cms封装",
        children: "证书CMS封装"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API 22开始，支持证书CMS封装。"
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
            href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-cert/js-apis-cert#certcreatecmsgenerator18",
            children: "cert.createCmsGenerator"
          }), "创建cmsGenerator对象。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-cert/js-apis-cert#setrecipientencryptionalgorithm22",
            children: "cmsGenerator.setRecipientEncryptionAlgorithm"
          }), "设置加密算法。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-cert/js-apis-cert#addrecipientinfo22",
            children: "cmsGenerator.addRecipientInfo"
          }), "添加接收者信息。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-cert/js-apis-cert#dofinal18",
            children: "cmsGenerator.doFinal"
          }), "获取CMS最终封装数据。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-cert/js-apis-cert#getencryptedcontentdata22",
            children: "cmsGenerator.getEncryptedContentData"
          }), "获取CMS封装密文数据。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { cert } from '@kit.DeviceCertificateKit';\n\nlet eccCertData = '-----BEGIN CERTIFICATE-----\\n' +\n  'MIICOjCCAd+gAwIBAgIGAXKnJjrAMAoGCCqGSM49BAMCMHkxCzAJBgNVBAYTAmNo\\n' +\n  'MQ8wDQYDVQQIDAZodWF3ZWkxDTALBgNVBAcMBHhpYW4xDzANBgNVBAoMBmh1YXdl\\n' +\n  'aTENMAsGA1UECwwEdGVzdDENMAsGA1UEAwwEYW5uZTEbMBkGCSqGSIb3DQEJARYM\\n' +\n  'dGVzdEAxMjMuY29tMB4XDTI0MTEyNzAzMjQ1MFoXDTM0MTEyNTAzMjQ1MFoweTEL\\n' +\n  'MAkGA1UEBhMCY2gxDzANBgNVBAgMBmh1YXdlaTENMAsGA1UEBwwEeGlhbjEPMA0G\\n' +\n  'A1UECgwGaHVhd2VpMQ0wCwYDVQQLDAR0ZXN0MQ0wCwYDVQQDDARhbm5lMRswGQYJ\\n' +\n  'KoZIhvcNAQkBFgx0ZXN0QDEyMy5jb20wWTATBgcqhkjOPQIBBggqhkjOPQMBBwNC\\n' +\n  'AARzg16D6tsNHZa7w0tLHFprXg5kUQgXv/vv3KIM21hY+WDYMz1OST4tmTeQWQF8\\n' +\n  'kARtjjbHBxtOPufWxMfxf51Wo1MwUTAdBgNVHQ4EFgQUU/P31GCBwyrj3yXkoNaX\\n' +\n  'xvPp8uIwHwYDVR0jBBgwFoAUU/P31GCBwyrj3yXkoNaXxvPp8uIwDwYDVR0TAQH/\\n' +\n  'BAUwAwEB/zAKBggqhkjOPQQDAgNJADBGAiEA/wCfbTorAWEEZcgd0CgfXI+EzXu2\\n' +\n  'Y88BmDD5LFlj3N0CIQDB34h77Li0CSpYpS4+7Mug237zbkFjHR3Q4/VWOT1G1A==\\n' +\n  '-----END CERTIFICATE-----\\n';\n\nlet rsaCertData = '-----BEGIN CERTIFICATE-----\\n' +\n  'MIICXjCCAcegAwIBAgIGAXKnJjrAMA0GCSqGSIb3DQEBCwUAMEgxCzAJBgNVBAYT\\n' +\n  'AkNOMQwwCgYDVQQIDANzaGExDTALBgNVBAcMBHhpYW4xDTALBgNVBAoMBHRlc3Qx\\n' +\n  'DTALBgNVBAMMBHRlc3QwHhcNMjQxMTIyMDkwNTIyWhcNMzQxMTIwMDkwNTIyWjBI\\n' +\n  'MQswCQYDVQQGEwJDTjEMMAoGA1UECAwDc2hhMQ0wCwYDVQQHDAR4aWFuMQ0wCwYD\\n' +\n  'VQQKDAR0ZXN0MQ0wCwYDVQQDDAR0ZXN0MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCB\\n' +\n  'iQKBgQC6nCZTM16Rk2c4P/hwfVm++jqe6GCA/PXXGe4YL218q1dTKMHBGEw8kXi0\\n' +\n  'XLDcyyC2yUn8ywN2QSyly6ke9EE6PGfZywStLp4g2PTTWB04sS3aXT2y+fToiTXQ\\n' +\n  '3AxfFYRpB+EgSdSCkJs6jKXVwbzu54kEtQTfs8UdBQ9nVKaJLwIDAQABo1MwUTAd\\n' +\n  'BgNVHQ4EFgQU6QXnt1smb2HRSO/2zuRQnz/SDxowHwYDVR0jBBgwFoAU6QXnt1sm\\n' +\n  'b2HRSO/2zuRQnz/SDxowDwYDVR0TAQH/BAUwAwEB/zANBgkqhkiG9w0BAQsFAAOB\\n' +\n  'gQBPR/+5xzFG1XlTdgwWVvqVxvhGUkbMTGW0IviJ+jbKsi57vnVsOtFzEA6y+bYx\\n' +\n  'xG/kEOcwLtzeVHOQA+ZU5SVcc+qc0dfFiWjL2PSAG4bpqSTjujpuUk+g8ugixbG1\\n' +\n  'a26pkDJhNeB/E3eBIbeydSY0A/dIGb6vbGo6BSq2KvnWAA==\\n' +\n  '-----END CERTIFICATE-----\\n';\n\n// string转Uint8Array。\nfunction stringToUint8Array(str: string): Uint8Array {\n  let arr: number[] = [];\n  for (let i = 0, j = str.length; i < j; i++) {\n    arr.push(str.charCodeAt(i));\n  }\n  return new Uint8Array(arr);\n}\n\nasync function testGetEncryptedContentData() {\n  try {\n    let ecccertEncodingBlob: cert.EncodingBlob = {\n      data: stringToUint8Array(eccCertData),\n      // 根据encodingData的格式进行赋值，支持FORMAT_PEM和FORMAT_DER。\n      encodingFormat: cert.EncodingFormat.FORMAT_PEM\n    };\n\n    let rsacertEncodingBlob: cert.EncodingBlob = {\n      data: stringToUint8Array(rsaCertData),\n      // 根据encodingData的格式进行赋值，支持FORMAT_PEM和FORMAT_DER。\n      encodingFormat: cert.EncodingFormat.FORMAT_PEM\n    };\n\n    let eccx509Certcert = await cert.createX509Cert(ecccertEncodingBlob);\n    let rsax509Certcert = await cert.createX509Cert(rsacertEncodingBlob);\n\n    let cmsContentType = cert.CmsContentType.ENVELOPED_DATA;\n    let cmsGenerator = cert.createCmsGenerator(cmsContentType);\n    console.info(`createCmsGenerator result: success.`);\n    let algorithm = cert.CmsRecipientEncryptionAlgorithm.AES_256_GCM;\n    cmsGenerator.setRecipientEncryptionAlgorithm(algorithm);\n    console.info(`setRecipientEncryptionAlgorithm result: success.`);\n    let eccCert: cert.CmsKeyAgreeRecipientInfo = {\n      cert: eccx509Certcert,\n      digestAlgorithm: cert.CmsKeyAgreeRecipientDigestAlgorithm.SHA256,\n    };\n    let rsaCert: cert.CmsKeyTransRecipientInfo = {\n      cert: rsax509Certcert,\n    };\n    let recipientInfo: cert.CmsRecipientInfo = {\n      keyTransInfo: rsaCert,\n      keyAgreeInfo: eccCert,\n    };\n    await cmsGenerator.addRecipientInfo(recipientInfo);\n    console.info(`addRecipientInfo result: success.`);\n    let content = new Uint8Array([1, 2, 3, 4]);\n    let optionsFinal: cert.CmsGeneratorOptions = {\n      contentDataFormat: cert.CmsContentDataFormat.BINARY,\n      outFormat: cert.CmsFormat.PEM,\n      isDetached: true\n    };\n    let cms = await cmsGenerator.doFinal(content, optionsFinal);\n    console.info(`doFinal result: success, cms = %s`, cms);\n    let data = await cmsGenerator.getEncryptedContentData();\n    console.info(`getEncryptedContentData result: success, data = %s`, data);\n  } catch (err) {\n    console.error(`testGetEncryptedContentData failed: errCode: ${err.code}, message: ${err.message}`);\n  }\n}\n"
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