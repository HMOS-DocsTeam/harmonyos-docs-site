"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["156902"], {
626000(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_device_certificate_kit_certificate_framework_create_cms_sign_object_create_cms_sign_object_md_f9e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-device-certificate-kit-certificate-framework-create-cms-sign-object-create-cms-sign-object-md-f9e.json
var site_docs_system_security_device_certificate_kit_certificate_framework_create_cms_sign_object_create_cms_sign_object_md_f9e_namespaceObject = JSON.parse('{"id":"system-security/device-certificate-kit/certificate-framework/create-cms-sign-object/create-cms-sign-object","title":"证书CMS签名","description":"从API 18开始，支持证书CMS签名。","source":"@site/docs/system-security/device-certificate-kit/certificate-framework/create-cms-sign-object/create-cms-sign-object.md","sourceDirName":"system-security/device-certificate-kit/certificate-framework/create-cms-sign-object","slug":"/system-security/device-certificate-kit/certificate-framework/create-cms-sign-object/","permalink":"/harmonyos-docs-site/system-security/device-certificate-kit/certificate-framework/create-cms-sign-object/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"title":"证书CMS签名","sidebar_position":10,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/create-cms-sign-object","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用系统预置CA证书校验证书链","permalink":"/harmonyos-docs-site/system-security/device-certificate-kit/certificate-framework/verify-certchain-by-systemca/"},"next":{"title":"证书CMS封装","permalink":"/harmonyos-docs-site/system-security/device-certificate-kit/certificate-framework/create-cms-enveloped-object/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/device-certificate-kit/certificate-framework/create-cms-sign-object/create-cms-sign-object.md


const frontMatter = {
	title: '证书CMS签名',
	sidebar_position: 10,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/create-cms-sign-object',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '证书CMS签名';

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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "证书cms签名",
        children: "证书CMS签名"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API 18开始，支持证书CMS签名。"
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
            href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-cert/js-apis-cert#addsigner18",
            children: "cmsGenerator.addSigner"
          }), "添加签名者信息。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-cert/js-apis-cert#addcert18",
            children: "cmsGenerator.addCert"
          }), "添加证书。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-cert/js-apis-cert#dofinal18",
            children: "cmsGenerator.doFinal"
          }), "获取Cms最终签名数据。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "异步方法示例："
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { cert } from '@kit.DeviceCertificateKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nlet certData = '-----BEGIN CERTIFICATE-----\\n' +\n  'MIICXjCCAcegAwIBAgIGAXKnJjrAMA0GCSqGSIb3DQEBCwUAMEgxCzAJBgNVBAYT\\n' +\n  'AkNOMQwwCgYDVQQIDANzaGExDTALBgNVBAcMBHhpYW4xDTALBgNVBAoMBHRlc3Qx\\n' +\n  'DTALBgNVBAMMBHRlc3QwHhcNMjQxMTIyMDkwNTIyWhcNMzQxMTIwMDkwNTIyWjBI\\n' +\n  'MQswCQYDVQQGEwJDTjEMMAoGA1UECAwDc2hhMQ0wCwYDVQQHDAR4aWFuMQ0wCwYD\\n' +\n  'VQQKDAR0ZXN0MQ0wCwYDVQQDDAR0ZXN0MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCB\\n' +\n  'iQKBgQC6nCZTM16Rk2c4P/hwfVm++jqe6GCA/PXXGe4YL218q1dTKMHBGEw8kXi0\\n' +\n  'XLDcyyC2yUn8ywN2QSyly6ke9EE6PGfZywStLp4g2PTTWB04sS3aXT2y+fToiTXQ\\n' +\n  '3AxfFYRpB+EgSdSCkJs6jKXVwbzu54kEtQTfs8UdBQ9nVKaJLwIDAQABo1MwUTAd\\n' +\n  'BgNVHQ4EFgQU6QXnt1smb2HRSO/2zuRQnz/SDxowHwYDVR0jBBgwFoAU6QXnt1sm\\n' +\n  'b2HRSO/2zuRQnz/SDxowDwYDVR0TAQH/BAUwAwEB/zANBgkqhkiG9w0BAQsFAAOB\\n' +\n  'gQBPR/+5xzFG1XlTdgwWVvqVxvhGUkbMTGW0IviJ+jbKsi57vnVsOtFzEA6y+bYx\\n' +\n  'xG/kEOcwLtzeVHOQA+ZU5SVcc+qc0dfFiWjL2PSAG4bpqSTjujpuUk+g8ugixbG1\\n' +\n  'a26pkDJhNeB/E3eBIbeydSY0A/dIGb6vbGo6BSq2KvnWAA==\\n' +\n  '-----END CERTIFICATE-----\\n';\n\nlet rsaStr1024: string =\n  '-----BEGIN RSA PRIVATE KEY-----\\n' +\n    'Proc-Type: 4,ENCRYPTED\\n' +\n    'DEK-Info: DES-EDE3-CBC,DB0AC6E3BEE16420\\n\\n' +\n    '1N5xykdckthZnswMV7blxXm2RCqe/OByBfMwFI7JoXR8STtMiStd4xA3W405k1Ma\\n' +\n    'ExpsHgWwZaS23x+sQ1sL1dsqIPMrw1Vr+KrL20vQcCVjXPpGKauafVbtcWQ1r2PZ\\n' +\n    'QJ4KWP6FhUp+sGt2ItODW3dK+1GdqL22ZtANrgFzS42Wh8FSn0UMCf6RG62DK62J\\n' +\n    'z2jtf4XaorrGSjdTeY+fyyGfSyKidIMMBe+IXwlhCgAe7aHSaqXtMsv+BibB7PJ3\\n' +\n    'XmEp1D/0ptL3r46txyYcuy8jSNCkW8er93KKnlRN6KbuYZPvPNncWkzZBzV17t5d\\n' +\n    'QgtvVh32AKgqk5jm8YVnspOFiPrbrK9UN3IW15juFkfnhriM3IrKap4/kW+tfawZ\\n' +\n    'DmHkSyl8xqFK413Rv0UvYBTjOcGbs2BSJYEvp8CIjtA17SvLmNw70K2nXWuQYutY\\n' +\n    '+HyucPtHfEqUPQRzWTAMMntTru77u7dxo2WMMMxOtMJO5h7MAnZH9bAFiuO3ewcY\\n' +\n    'eEePg10d8Owcfh9G6kc0HIGT9MMLMi0mTXhpoQTuWPYuSx6uUZL1fsp1x2fuM0qn\\n' +\n    'bdf3+UnATYUu4tgvBHrMV7405Y6Y3PnqOFxVMeAHeOTo6UThtJ10mfeCPXGcUaHo\\n' +\n    'P5enw7h4145cha3+S4hNrUwj3skrtavld7tY74p4DvgZSlCMF3JAm3DhpnEMVcYP\\n' +\n    'Y6TkSevvxOpBvEHE41Y4VBCBwd9clcixI6cSBJKPUU4A/sc/kkNdGFcbzLQCg/zR\\n' +\n    '1m7YmBROb2qy4w3lv/uwVnPGLg/YV465irRaN3hgz7/1lm8STKQhmQ==\\n' +\n    '-----END RSA PRIVATE KEY-----\\n';\n\n// string转Uint8Array。\nfunction stringToUint8Array(str: string): Uint8Array {\n  let arr: number[] = [];\n  for (let i = 0, j = str.length; i < j; i++) {\n    arr.push(str.charCodeAt(i));\n  }\n  return new Uint8Array(arr);\n}\n\nasync function testPkcs7SignByPromise() {\n  let certEncodingBlob: cert.EncodingBlob = {\n    data: stringToUint8Array(certData),\n    // 根据encodingData的格式进行赋值，支持FORMAT_PEM和FORMAT_DER。\n    encodingFormat: cert.EncodingFormat.FORMAT_PEM\n  };\n  cert.createX509Cert(certEncodingBlob, (error, x509Cert) => {\n    if (error) {\n      console.error(`createX509Cert failed: errCode: ${error.code}, message: ${error.message}`);\n    } else {\n      try {\n        let cmsContentType = cert.CmsContentType.SIGNED_DATA;\n        let cmsGenerator = cert.createCmsGenerator(cmsContentType);\n        console.info('testPkcs7SignByPromise createCmsGenerator result: success.');\n        let privateKeyInfo: cert.PrivateKeyInfo = {\n          key: rsaStr1024,\n          password: '123456'\n        };\n        // addCert设置为true时，第二次addSigner或者addCert增加相同的证书，会报错。\n        let config: cert.CmsSignerConfig = {\n          mdName: 'SHA256',\n          addCert: false,\n          addAttr: true,\n          addSmimeCapAttr: true\n        }\n        cmsGenerator.addSigner(x509Cert, privateKeyInfo, config);\n        console.info('testPkcs7SignByPromise addSigner result: success.');\n        cmsGenerator.addCert(x509Cert);\n        console.info('testPkcs7SignByPromise addCert result: success.');\n        let content = new Uint8Array([1, 2, 3, 4]);\n        let optionsFinal: cert.CmsGeneratorOptions = {\n          contentDataFormat: cert.CmsContentDataFormat.BINARY,\n          outFormat: cert.CmsFormat.PEM,\n          isDetached: true\n        };\n        cmsGenerator.doFinal(content, optionsFinal).then(result => {\n          console.info('testPkcs7SignByPromise doFinal result: success, result = %s', result);\n        }).catch((error: BusinessError) => {\n          console.error(`testPkcs7SignByPromise failed: errCode: ${error.code}, message: ${error.message}`);\n        });\n      } catch (err) {\n        let e: BusinessError = err as BusinessError;\n        console.error(`testPkcs7SignByPromise failed: errCode: ${e.code}, message: ${e.message}`);\n      }\n    }\n  });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "同步方法示例："
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { cert } from '@kit.DeviceCertificateKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nlet certData = '-----BEGIN CERTIFICATE-----\\n' +\n  'MIICXjCCAcegAwIBAgIGAXKnJjrAMA0GCSqGSIb3DQEBCwUAMEgxCzAJBgNVBAYT\\n' +\n  'AkNOMQwwCgYDVQQIDANzaGExDTALBgNVBAcMBHhpYW4xDTALBgNVBAoMBHRlc3Qx\\n' +\n  'DTALBgNVBAMMBHRlc3QwHhcNMjQxMTIyMDkwNTIyWhcNMzQxMTIwMDkwNTIyWjBI\\n' +\n  'MQswCQYDVQQGEwJDTjEMMAoGA1UECAwDc2hhMQ0wCwYDVQQHDAR4aWFuMQ0wCwYD\\n' +\n  'VQQKDAR0ZXN0MQ0wCwYDVQQDDAR0ZXN0MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCB\\n' +\n  'iQKBgQC6nCZTM16Rk2c4P/hwfVm++jqe6GCA/PXXGe4YL218q1dTKMHBGEw8kXi0\\n' +\n  'XLDcyyC2yUn8ywN2QSyly6ke9EE6PGfZywStLp4g2PTTWB04sS3aXT2y+fToiTXQ\\n' +\n  '3AxfFYRpB+EgSdSCkJs6jKXVwbzu54kEtQTfs8UdBQ9nVKaJLwIDAQABo1MwUTAd\\n' +\n  'BgNVHQ4EFgQU6QXnt1smb2HRSO/2zuRQnz/SDxowHwYDVR0jBBgwFoAU6QXnt1sm\\n' +\n  'b2HRSO/2zuRQnz/SDxowDwYDVR0TAQH/BAUwAwEB/zANBgkqhkiG9w0BAQsFAAOB\\n' +\n  'gQBPR/+5xzFG1XlTdgwWVvqVxvhGUkbMTGW0IviJ+jbKsi57vnVsOtFzEA6y+bYx\\n' +\n  'xG/kEOcwLtzeVHOQA+ZU5SVcc+qc0dfFiWjL2PSAG4bpqSTjujpuUk+g8ugixbG1\\n' +\n  'a26pkDJhNeB/E3eBIbeydSY0A/dIGb6vbGo6BSq2KvnWAA==\\n' +\n  '-----END CERTIFICATE-----\\n';\n\nlet rsaStr1024: string  =\n  '-----BEGIN RSA PRIVATE KEY-----\\n' +\n    'Proc-Type: 4,ENCRYPTED\\n' +\n    'DEK-Info: DES-EDE3-CBC,DB0AC6E3BEE16420\\n\\n' +\n    '1N5xykdckthZnswMV7blxXm2RCqe/OByBfMwFI7JoXR8STtMiStd4xA3W405k1Ma\\n' +\n    'ExpsHgWwZaS23x+sQ1sL1dsqIPMrw1Vr+KrL20vQcCVjXPpGKauafVbtcWQ1r2PZ\\n' +\n    'QJ4KWP6FhUp+sGt2ItODW3dK+1GdqL22ZtANrgFzS42Wh8FSn0UMCf6RG62DK62J\\n' +\n    'z2jtf4XaorrGSjdTeY+fyyGfSyKidIMMBe+IXwlhCgAe7aHSaqXtMsv+BibB7PJ3\\n' +\n    'XmEp1D/0ptL3r46txyYcuy8jSNCkW8er93KKnlRN6KbuYZPvPNncWkzZBzV17t5d\\n' +\n    'QgtvVh32AKgqk5jm8YVnspOFiPrbrK9UN3IW15juFkfnhriM3IrKap4/kW+tfawZ\\n' +\n    'DmHkSyl8xqFK413Rv0UvYBTjOcGbs2BSJYEvp8CIjtA17SvLmNw70K2nXWuQYutY\\n' +\n    '+HyucPtHfEqUPQRzWTAMMntTru77u7dxo2WMMMxOtMJO5h7MAnZH9bAFiuO3ewcY\\n' +\n    'eEePg10d8Owcfh9G6kc0HIGT9MMLMi0mTXhpoQTuWPYuSx6uUZL1fsp1x2fuM0qn\\n' +\n    'bdf3+UnATYUu4tgvBHrMV7405Y6Y3PnqOFxVMeAHeOTo6UThtJ10mfeCPXGcUaHo\\n' +\n    'P5enw7h4145cha3+S4hNrUwj3skrtavld7tY74p4DvgZSlCMF3JAm3DhpnEMVcYP\\n' +\n    'Y6TkSevvxOpBvEHE41Y4VBCBwd9clcixI6cSBJKPUU4A/sc/kkNdGFcbzLQCg/zR\\n' +\n    '1m7YmBROb2qy4w3lv/uwVnPGLg/YV465irRaN3hgz7/1lm8STKQhmQ==\\n' +\n    '-----END RSA PRIVATE KEY-----\\n';\n\n// string转Uint8Array。\nfunction stringToUint8Array(str: string): Uint8Array {\n  let arr: number[] = [];\n  for (let i = 0, j = str.length; i < j; i++) {\n    arr.push(str.charCodeAt(i));\n  }\n  return new Uint8Array(arr);\n}\n\nfunction testPkcs7SignBySync() {\n  let certEncodingBlob: cert.EncodingBlob = {\n    data: stringToUint8Array(certData),\n    // 根据encodingData的格式进行赋值，支持FORMAT_PEM和FORMAT_DER。\n    encodingFormat: cert.EncodingFormat.FORMAT_PEM\n  };\n  cert.createX509Cert(certEncodingBlob, (error, x509Cert) => {\n    if (error) {\n      console.error(`createX509Cert failed: errCode: ${error.code}, message: ${error.message}`);\n    } else {\n      try {\n        let cmsContentType = cert.CmsContentType.SIGNED_DATA;\n        let cmsGenerator = cert.createCmsGenerator(cmsContentType);\n        console.info('testPkcs7SignBySync createCmsGenerator success.');\n        let privateKeyInfo: cert.PrivateKeyInfo = {\n          key: rsaStr1024,\n          password: '123456'\n        };\n        // addCert设置为true时，第二次addSigner或者addCert增加相同的证书，会报错。\n        let config: cert.CmsSignerConfig = {\n          mdName:'SHA256',\n          addCert:false,\n          addAttr:false,\n          addSmimeCapAttr:false\n        }\n        cmsGenerator.addSigner(x509Cert, privateKeyInfo, config);\n        console.info('testPkcs7SignBySync addSigner result: success.');\n        cmsGenerator.addCert(x509Cert);\n        console.info('testPkcs7SignBySync addCert result: success.');\n        let content = new Uint8Array([1,2,3,4]);\n        let optionsFinal: cert.CmsGeneratorOptions = {\n          contentDataFormat : cert.CmsContentDataFormat.BINARY,\n          outFormat : cert.CmsFormat.DER,\n          isDetached : false\n        };\n        let output = cmsGenerator.doFinalSync(content, optionsFinal);\n        console.info('testPkcs7SignBySync doFinalSync result: success, output = %s.', output);\n      } catch (err) {\n        let e: BusinessError = err as BusinessError;\n        console.error(`testPkcs7SignBySync failed: errCode: ${e.code}, message: ${e.message}`);\n      }\n    }\n  });\n}\n"
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