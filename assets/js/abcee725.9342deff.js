"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["573650"], {
532407(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_device_certificate_kit_certificate_framework_create_verify_cerchainvalidator_revocation_object_create_verify_cerchainvalidator_revocation_object_md_abc_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-device-certificate-kit-certificate-framework-create-verify-cerchainvalidator-revocation-object-create-verify-cerchainvalidator-revocation-object-md-abc.json
var site_docs_system_security_device_certificate_kit_certificate_framework_create_verify_cerchainvalidator_revocation_object_create_verify_cerchainvalidator_revocation_object_md_abc_namespaceObject = JSON.parse('{"id":"system-security/device-certificate-kit/certificate-framework/create-verify-cerchainvalidator-revocation-object/create-verify-cerchainvalidator-revocation-object","title":"证书链在线校验证书吊销状态","description":"本地证书链吊销状态校验时仅校验终端实体证书","source":"@site/docs/system-security/device-certificate-kit/certificate-framework/create-verify-cerchainvalidator-revocation-object/create-verify-cerchainvalidator-revocation-object.md","sourceDirName":"system-security/device-certificate-kit/certificate-framework/create-verify-cerchainvalidator-revocation-object","slug":"/system-security/device-certificate-kit/certificate-framework/create-verify-cerchainvalidator-revocation-object/","permalink":"/harmonyos-docs-site/system-security/device-certificate-kit/certificate-framework/create-verify-cerchainvalidator-revocation-object/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":15,"frontMatter":{"title":"证书链在线校验证书吊销状态","sidebar_position":15,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/create-verify-cerchainvalidator-revocation-object","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"证书PKCS12的创建和解析","permalink":"/harmonyos-docs-site/system-security/device-certificate-kit/certificate-framework/create-parse-pkcs12/"},"next":{"title":"证书管理概述","permalink":"/harmonyos-docs-site/system-security/device-certificate-kit/certmanager/certmanager-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/device-certificate-kit/certificate-framework/create-verify-cerchainvalidator-revocation-object/create-verify-cerchainvalidator-revocation-object.md


const frontMatter = {
	title: '证书链在线校验证书吊销状态',
	sidebar_position: 15,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/create-verify-cerchainvalidator-revocation-object',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '证书链在线校验证书吊销状态';

const assets = {

};



const toc = [{
  "value": "本地证书链吊销状态校验时仅校验终端实体证书",
  "id": "本地证书链吊销状态校验时仅校验终端实体证书",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 3
}, {
  "value": "在线校验证书链中的中间CA证书的吊销状态",
  "id": "在线校验证书链中的中间ca证书的吊销状态",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤-1",
  "level": 3
}, {
  "value": "证书链校验时忽略在线证书吊销检查的网络不可达异常",
  "id": "证书链校验时忽略在线证书吊销检查的网络不可达异常",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤-2",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
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
        id: "证书链在线校验证书吊销状态",
        children: "证书链在线校验证书吊销状态"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "本地证书链吊销状态校验时仅校验终端实体证书",
      children: "本地证书链吊销状态校验时仅校验终端实体证书"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "API 22开始支持本地证书链吊销状态校验时仅校验终端实体证书。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
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
            href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-cert/js-apis-cert#certcreatex509certchain11",
            children: "cert.createX509CertChain"
          }), "创建证书链对象。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-cert/js-apis-cert#certcreatex509cert",
            children: "cert.createX509Cert"
          }), "创建X509证书对象。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-cert/js-apis-cert#certcreatex509crl11",
            children: "cert.createX509CRL"
          }), "创建X509证书吊销列表对象。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["构造", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-cert/js-apis-cert#certchainvalidationparameters11",
            children: "cert.CertChainValidationParameters"
          }), "证书链校验参数对象。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-cert/js-apis-cert#validate11",
            children: "cert.validate"
          }), "，传入证书链校验参数，进行证书链校验。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本地仅校验终端实体证书的吊销状态示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { cert } from '@kit.DeviceCertificateKit';\n\n// string转Uint8Array。\nfunction stringToUint8Array(str: string): Uint8Array {\n  let arr: number[] = [];\n  for (let i = 0, j = str.length; i < j; i++) {\n    arr.push(str.charCodeAt(i));\n  }\n  return new Uint8Array(arr);\n}\n\nasync function createCertChain(certData: string): Promise<cert.X509CertChain> {\n  // 证书二进制数据，需业务自行赋值。\n  let encodingBlob: cert.EncodingBlob = {\n    data: stringToUint8Array(certData),\n    // 根据encodingData的格式进行赋值，支持FORMAT_PEM和FORMAT_DER。\n    encodingFormat: cert.EncodingFormat.FORMAT_PEM\n  };\n\n  let x509CertChain: cert.X509CertChain = {} as cert.X509CertChain;\n  try {\n    x509CertChain = await cert.createX509CertChain(encodingBlob);\n  } catch (err) {\n    console.error(`createCertChain failed: errCode: ${err.code}, message: ${err.message}`);\n  }\n  return x509CertChain;\n}\n\nasync function createCert(certData: string): Promise<cert.X509Cert> {\n  // 证书二进制数据，需业务自行赋值。\n  let encodingBlob: cert.EncodingBlob = {\n    data: stringToUint8Array(certData),\n    // 根据encodingData的格式进行赋值，支持FORMAT_PEM和FORMAT_DER。\n    encodingFormat: cert.EncodingFormat.FORMAT_PEM\n  };\n\n  let x509Cert: cert.X509Cert = {} as cert.X509Cert;\n  try {\n    x509Cert = await cert.createX509Cert(encodingBlob);\n  } catch (err) {\n    console.error(`createCert failed: errCode: ${err.code}, message: ${err.message}`);\n  }\n  return x509Cert;\n}\n\nexport async function createCRL(crmPem: string): Promise<cert.CertCRLCollection> {\n  try {\n    let crlEncodingBlob: cert.EncodingBlob = {\n      data: stringToUint8Array(crmPem),\n      encodingFormat: cert.EncodingFormat.FORMAT_PEM\n    }\n    let crl: cert.X509CRL = await cert.createX509CRL(crlEncodingBlob);\n    let collection: cert.CertCRLCollection = cert.createCertCRLCollection([], [crl]);\n    return collection;\n  } catch (error) {\n    throw error as Error;\n  }\n}\n// ...\nasync function doTestLeafCertCrlCheck() {\n  try {\n    let x509CertChain: cert.X509CertChain = await createCertChain(certChainData);\n    let x509Cert: cert.X509Cert = await createCert(trustRootCertPem);\n    let caCollection: cert.CertCRLCollection = await createCRL(crl);\n    const param: cert.CertChainValidationParameters = {\n      date: '20250926080000Z',\n      trustAnchors: [{\n        CACert: x509Cert\n      }],\n      certCRLs: [caCollection],\n      revocationCheckParam: {\n        options: [\n          cert.RevocationCheckOptions.REVOCATION_CHECK_OPTION_LOCAL_CRL_ONLY_CHECK_END_ENTITY_CERT\n        ],\n      }\n    };\n    await x509CertChain.validate(param);\n    console.info(`validate result: success.`);\n  } catch (error) {\n    console.error(`x509CertChain validate failed: errCode: ${error.code}, message: ${error.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "在线校验证书链中的中间ca证书的吊销状态",
      children: "在线校验证书链中的中间CA证书的吊销状态"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API 22开始，支持在线校验证书链中的中间CA证书的吊销状态。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发步骤-1",
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
            href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-cert/js-apis-cert#certcreatex509certchain11",
            children: "cert.createX509CertChain"
          }), "创建证书链对象。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-cert/js-apis-cert#certcreatex509cert",
            children: "cert.createX509Cert"
          }), "创建X509证书对象。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["构造", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-cert/js-apis-cert#certchainvalidationparameters11",
            children: "cert.CertChainValidationParameters"
          }), "证书链校验参数。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-cert/js-apis-cert#validate11",
            children: "cert.validate"
          }), "，传入证书链校验参数，进行证书链校验。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(219490)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本开发指导中提供的示例代码需要在配置网络的前提下执行。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在线校验中间证书的吊销状态示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { cert } from '@kit.DeviceCertificateKit';\n\n// string转Uint8Array。\nfunction stringToUint8Array(str: string): Uint8Array {\n  let arr: number[] = [];\n  for (let i = 0, j = str.length; i < j; i++) {\n    arr.push(str.charCodeAt(i));\n  }\n  return new Uint8Array(arr);\n}\n\nasync function createCertChain(certData: string): Promise<cert.X509CertChain> {\n  // 证书二进制数据，需业务自行赋值。\n  let encodingBlob: cert.EncodingBlob = {\n    data: stringToUint8Array(certData),\n    // 根据encodingData的格式进行赋值，支持FORMAT_PEM和FORMAT_DER。\n    encodingFormat: cert.EncodingFormat.FORMAT_PEM\n  };\n\n  let x509CertChain: cert.X509CertChain = {} as cert.X509CertChain;\n  try {\n    x509CertChain = await cert.createX509CertChain(encodingBlob);\n  } catch (err) {\n    console.error(`createCertChain failed: errCode: ${err.code}, message: ${err.message}`);\n  }\n  return x509CertChain;\n}\n\nasync function createCert(certData: string): Promise<cert.X509Cert> {\n  // 证书二进制数据，需业务自行赋值。\n  let encodingBlob: cert.EncodingBlob = {\n    data: stringToUint8Array(certData),\n    // 根据encodingData的格式进行赋值，支持FORMAT_PEM和FORMAT_DER。\n    encodingFormat: cert.EncodingFormat.FORMAT_PEM\n  };\n\n  let x509Cert: cert.X509Cert = {} as cert.X509Cert;\n  try {\n    x509Cert = await cert.createX509Cert(encodingBlob);\n  } catch (err) {\n    console.error(`createCert failed: errCode: ${err.code}, message: ${err.message}`);\n  }\n  return x509Cert;\n}\n\n// ...\nasync function doTestCaCheck() {\n  try {\n    let x509CertChain: cert.X509CertChain = await createCertChain(caChain);\n    let x509Cert: cert.X509Cert = await createCert(caTrustCert);\n    const param: cert.CertChainValidationParameters = {\n      trustAnchors: [{\n        CACert: x509Cert\n      }],\n      revocationCheckParam: {\n        options: [\n          cert.RevocationCheckOptions.REVOCATION_CHECK_OPTION_ACCESS_NETWORK,\n          cert.RevocationCheckOptions.REVOCATION_CHECK_OPTION_CHECK_INTERMEDIATE_CA_ONLINE\n        ],\n      }\n    };\n    await x509CertChain.validate(param);\n    console.info(`validate result: success.`);\n  } catch (error) {\n    console.error(`x509CertChain validate failed: errCode: ${error.code}, message: ${error.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "证书链校验时忽略在线证书吊销检查的网络不可达异常",
      children: "证书链校验时忽略在线证书吊销检查的网络不可达异常"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API 23开始，支持证书链校验时忽略网络不可达的在线证书吊销检查异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发步骤-2",
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
            href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-cert/js-apis-cert#certcreatex509certchain11-2",
            children: "cert.createX509CertChain"
          }), "创建证书链对象。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-cert/js-apis-cert#certcreatex509cert",
            children: "cert.createX509Cert"
          }), "创建X509证书对象。构造 cert.CertChainValidationParameters 证书链校验参数，配置 revocationCheckParam 为 RevocationCheckOptions.REVOCATION_CHECK_OPTION_IGNORE_NETWORK_ERROR，以忽略网络不可达的情况。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-cert/js-apis-cert#validate11",
            children: "cert.validate"
          }), "，传入证书链校验参数，进行证书链校验。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在线CRL检查忽略网络不可达异常示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { cert } from '@kit.DeviceCertificateKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { util } from '@kit.ArkTS';\n\n// string转Uint8Array。\nfunction stringToUint8Array(str: string): Uint8Array {\n  const encoder = new util.TextEncoder();\n  return encoder.encodeInto(str);\n}\n// ...\nasync function createX509Cert(certData: string): Promise<cert.X509Cert> {\n  // 证书二进制数据，需业务自行赋值。\n  let encodingBlob: cert.EncodingBlob = {\n    data: stringToUint8Array(certData),\n    // 根据encodingData的格式进行赋值，支持FORMAT_PEM和FORMAT_DER。\n    encodingFormat: cert.EncodingFormat.FORMAT_PEM\n  };\n\n  let x509Cert: cert.X509Cert = {} as cert.X509Cert;\n  try {\n    x509Cert = await cert.createX509Cert(encodingBlob);\n  } catch (error) {\n    let e: BusinessError = error as BusinessError;\n    console.error(`createX509Cert failed: errCode: ${e.code}, message: ${e.message}`);\n  }\n  return x509Cert;\n}\n\nasync function createX509CertChain(): Promise<cert.X509CertChain> {\n  const root = await createX509Cert(rootCert);\n  const intermediate = await createX509Cert(intermediateCert);\n  const leaf = await createX509Cert(leafCert);\n  let x509CertChain: cert.X509CertChain = {} as cert.X509CertChain;\n  try {\n    x509CertChain = cert.createX509CertChain([leaf, intermediate, root]);\n  } catch (error) {\n    let e: BusinessError = error as BusinessError;\n    console.error(`createX509CertChain failed: errCode: ${e.code}, message: ${e.message}`);\n  }\n  return x509CertChain;\n}\n\nasync function validateCRL() {\n  const certChain = await createX509CertChain();\n  console.info('createX509CertChain result: success.');\n  const root = await createX509Cert(rootCert);\n  // 证书链校验数据，需业务自行赋值。\n  const param: cert.CertChainValidationParameters = {\n    trustAnchors: [{ CACert: root }],\n    revocationCheckParam: {\n      options: [\n        cert.RevocationCheckOptions.REVOCATION_CHECK_OPTION_IGNORE_NETWORK_ERROR,\n        cert.RevocationCheckOptions.REVOCATION_CHECK_OPTION_ACCESS_NETWORK\n      ],\n    }\n  }\n  try {\n    await certChain.validate(param);\n    console.info('validateCRL result: success.');\n  } catch (err) {\n    console.error(`X509CertChain validate failed: errCode: ${err.code}, message: ${err.message}`);\n  }\n}\n"
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
219490(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

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