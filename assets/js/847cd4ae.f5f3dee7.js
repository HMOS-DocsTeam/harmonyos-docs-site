"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["213168"], {
781684(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_device_certificate_kit_certificate_framework_create_get_cert_crl_object_create_get_cert_crl_object_md_847_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-device-certificate-kit-certificate-framework-create-get-cert-crl-object-create-get-cert-crl-object-md-847.json
var site_docs_system_security_device_certificate_kit_certificate_framework_create_get_cert_crl_object_create_get_cert_crl_object_md_847_namespaceObject = JSON.parse('{"id":"system-security/device-certificate-kit/certificate-framework/create-get-cert-crl-object/create-get-cert-crl-object","title":"证书集合及证书吊销列表集合对象的创建和获取","description":"从输入的证书集合和证书吊销列表集合中选择满足条件的证书或者证书吊销列表。","source":"@site/docs/system-security/device-certificate-kit/certificate-framework/create-get-cert-crl-object/create-get-cert-crl-object.md","sourceDirName":"system-security/device-certificate-kit/certificate-framework/create-get-cert-crl-object","slug":"/system-security/device-certificate-kit/certificate-framework/create-get-cert-crl-object/","permalink":"/harmonyos-docs-site/system-security/device-certificate-kit/certificate-framework/create-get-cert-crl-object/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"证书集合及证书吊销列表集合对象的创建和获取","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/create-get-cert-crl-object","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"证书链校验器对象的创建和校验","permalink":"/harmonyos-docs-site/system-security/device-certificate-kit/certificate-framework/create-verify-cerchainvalidator-object/"},"next":{"title":"证书链对象的创建和校验","permalink":"/harmonyos-docs-site/system-security/device-certificate-kit/certificate-framework/create-verify-certchain-object/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/device-certificate-kit/certificate-framework/create-get-cert-crl-object/create-get-cert-crl-object.md


const frontMatter = {
	title: '证书集合及证书吊销列表集合对象的创建和获取',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/create-get-cert-crl-object',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '证书集合及证书吊销列表集合对象的创建和获取';

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
        id: "证书集合及证书吊销列表集合对象的创建和获取",
        children: "证书集合及证书吊销列表集合对象的创建和获取"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从输入的证书集合和证书吊销列表集合中选择满足条件的证书或者证书吊销列表。"
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
          children: ["基于已有的证书数据，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-cert/js-apis-cert#certcreatex509cert-1",
            children: "cert.createX509Cert"
          }), "创建X509证书的对象。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["基于已有的CRL数据，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-cert/js-apis-cert#certcreatex509crl11-1",
            children: "cert.createX509CRL"
          }), "创建X509证书吊销列表的对象。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-cert/js-apis-cert#certcreatecertcrlcollection11",
            children: "cert.createCertCRLCollection"
          }), "创建", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-cert/js-apis-cert#certcrlcollection11",
            children: "CertCRLCollection"
          }), "的对象，并返回相应的结果。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-cert/js-apis-cert#selectcerts11",
            children: "CertCRLCollection.selectCerts"
          }), "查找所有与", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-cert/js-apis-cert#x509certmatchparameters11",
            children: "X509CertMatchParameters"
          }), "匹配的证书对象数组，并返回结果。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-cert/js-apis-cert#selectcrls11",
            children: "CertCRLCollection.selectCRLs"
          }), "查找所有与", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-cert/js-apis-cert#x509crlmatchparameters11",
            children: "X509CRLMatchParameters"
          }), "匹配的证书吊销列表数组，并返回结果。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { cert } from '@kit.DeviceCertificateKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { util } from '@kit.ArkTS';\n\nasync function createX509CRL(): Promise<cert.X509CRL> {\n  let crlData = '-----BEGIN X509 CRL-----\\n' +\n    'MIHzMF4CAQMwDQYJKoZIhvcNAQEEBQAwFTETMBEGA1UEAxMKQ1JMIGlzc3VlchcN\\n' +\n    'MTcwODA3MTExOTU1WhcNMzIxMjE0MDA1MzIwWjAVMBMCAgPoFw0zMjEyMTQwMDUz\\n' +\n    'MjBaMA0GCSqGSIb3DQEBBAUAA4GBACEPHhlaCTWA42ykeaOyR0SGQIHIOUR3gcDH\\n' +\n    'J1LaNwiL+gDxI9rMQmlhsUGJmPIPdRs9uYyI+f854lsWYisD2PUEpn3DbEvzwYeQ\\n' +\n    '5SqQoPDoM+YfZZa23hoTLsu52toXobP74sf/9K501p/+8hm4ROMLBoRT86GQKY6g\\n' +\n    'eavsH0Q3\\n' +\n    '-----END X509 CRL-----\\n';\n\n  // 证书吊销列表二进制数据，需业务自行赋值。\n  let textEncoder = new util.TextEncoder();\n  let encodingBlob: cert.EncodingBlob = {\n    data: textEncoder.encodeInto(crlData),\n    // 根据encodingData的格式进行赋值，支持FORMAT_PEM和FORMAT_DER。\n    encodingFormat: cert.EncodingFormat.FORMAT_PEM\n  };\n  let x509CRL: cert.X509CRL = {} as cert.X509CRL;\n  try {\n    x509CRL = await cert.createX509CRL(encodingBlob);\n  } catch (err) {\n    let e: BusinessError = err as BusinessError;\n    console.error(`createX509CRL failed, errCode: ${e.code}, errMsg: ${e.message}`);\n  }\n  return x509CRL;\n}\n\nasync function createX509Cert(): Promise<cert.X509Cert> {\n  let certData = '-----BEGIN CERTIFICATE-----\\n' +\n    'MIIBHTCBwwICA+gwCgYIKoZIzj0EAwIwGjEYMBYGA1UEAwwPRXhhbXBsZSBSb290\\n' +\n    'IENBMB4XDTIzMDkwNTAyNDgyMloXDTI2MDUzMTAyNDgyMlowGjEYMBYGA1UEAwwP\\n' +\n    'RXhhbXBsZSBSb290IENBMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEHjG74yMI\\n' +\n    'ueO7z3T+dyuEIrhxTg2fqgeNB3SGfsIXlsiUfLTatUsU0i/sePnrKglj2H8Abbx9\\n' +\n    'PK0tsW/VgqwDIDAKBggqhkjOPQQDAgNJADBGAiEApVZno/Z7WyDc/muRN1y57uaY\\n' +\n    'Mjrgnvp/AMdE8qmFiDwCIQCrIYdHVO1awaPgcdALZY+uLQi6mEs/oMJLUcmaag3E\\n' +\n    'Qw==\\n' +\n    '-----END CERTIFICATE-----\\n';\n\n  let textEncoder = new util.TextEncoder();\n  let encodingBlob: cert.EncodingBlob = {\n    data: textEncoder.encodeInto(certData),\n    // 根据encodingData的格式进行赋值，支持FORMAT_PEM和FORMAT_DER。\n    encodingFormat: cert.EncodingFormat.FORMAT_PEM\n  };\n\n  let x509Cert: cert.X509Cert = {} as cert.X509Cert;\n  try {\n    x509Cert = await cert.createX509Cert(encodingBlob);\n  } catch (err) {\n    let e: BusinessError = err as BusinessError;\n    console.error(`createX509Cert failed, errCode: ${e.code}, errMsg: ${e.message}`);\n  }\n  return x509Cert;\n}\n\nasync function sample() {\n  const x509Cert = await createX509Cert();\n  const x509CRL = await createX509CRL();\n  let collection: cert.CertCRLCollection = {} as cert.CertCRLCollection;\n  try {\n    collection = cert.createCertCRLCollection([x509Cert], [x509CRL]);\n    console.info('createCertCRLCollection result: success.');\n  } catch (err) {\n    console.error(`createCertCRLCollection failed: errCode: ${err.code}, message: ${err.message}`);\n  }\n\n  const certParam: cert.X509CertMatchParameters = {\n    validDate: '231128000000Z'\n  }\n  try {\n    let certs: cert.X509Cert[] = await collection.selectCerts(certParam);\n  } catch (err) {\n    console.error(`selectCerts failed: errCode: ${err.code}, message: ${err.message}`);\n  }\n\n  const crlParam: cert.X509CRLMatchParameters = {\n    x509Cert: x509Cert\n  }\n  try {\n    let crls: cert.X509CRL[] = await collection.selectCRLs(crlParam);\n    console.info('selectCRLs result: success.');\n  } catch (err) {\n    console.error(`selectCRLs failed: errCode: ${err.code}, message: ${err.message}`);\n  }\n}\n"
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