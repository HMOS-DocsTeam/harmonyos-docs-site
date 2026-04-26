"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["589564"], {
652650(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_device_certificate_kit_certificate_framework_create_cms_verify_object_create_cms_verify_object_md_ae6_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-device-certificate-kit-certificate-framework-create-cms-verify-object-create-cms-verify-object-md-ae6.json
var site_docs_system_security_device_certificate_kit_certificate_framework_create_cms_verify_object_create_cms_verify_object_md_ae6_namespaceObject = JSON.parse('{"id":"system-security/device-certificate-kit/certificate-framework/create-cms-verify-object/create-cms-verify-object","title":"证书CMS验签","description":"从API 22开始，支持证书CMS验签。","source":"@site/docs/system-security/device-certificate-kit/certificate-framework/create-cms-verify-object/create-cms-verify-object.md","sourceDirName":"system-security/device-certificate-kit/certificate-framework/create-cms-verify-object","slug":"/system-security/device-certificate-kit/certificate-framework/create-cms-verify-object/","permalink":"/harmonyos-docs-site/system-security/device-certificate-kit/certificate-framework/create-cms-verify-object/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"title":"证书CMS验签","sidebar_position":12,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/create-cms-verify-object","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"证书CMS封装","permalink":"/harmonyos-docs-site/system-security/device-certificate-kit/certificate-framework/create-cms-enveloped-object/"},"next":{"title":"证书CMS解封装","permalink":"/harmonyos-docs-site/system-security/device-certificate-kit/certificate-framework/create-cms-decapsulation-object/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/device-certificate-kit/certificate-framework/create-cms-verify-object/create-cms-verify-object.md


const frontMatter = {
	title: '证书CMS验签',
	sidebar_position: 12,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/create-cms-verify-object',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '证书CMS验签';

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
        id: "证书cms验签",
        children: "证书CMS验签"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API 22开始，支持证书CMS验签。"
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
          children: ["签名的开发步骤查看", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/device-certificate-kit/certificate-framework/create-cms-sign-object",
            children: "CMS签名"
          }), "。"]
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
            href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-cert/js-apis-cert#verifysigneddata22",
            children: "cmsParser.verifySignedData"
          }), "进行验签。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "验签示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { cert } from '@kit.DeviceCertificateKit';\n\nlet ECC_256_PUB_ENTRY_CERT: string =\n  '-----BEGIN CERTIFICATE-----\\n' +\n    'MIICejCCAiCgAwIBAgIUGE371/LcCW79mzMm6UiJdyC4khcwCgYIKoZIzj0EAwIw\\n' +\n    'fjELMAkGA1UEBhMCQ04xEDAOBgNVBAgMB0JlaWppbmcxEDAOBgNVBAcMB0JlaWpp\\n' +\n    'bmcxHjAcBgNVBAoMFUVDRFNBIEludGVybWVkaWF0ZSBDQTELMAkGA1UECwwCSVQx\\n' +\n    'HjAcBgNVBAMMFUVDRFNBIEludGVybWVkaWF0ZSBDQTAeFw0yNTA5MjgxMDU0MDVa\\n' +\n    'Fw0zNTA5MjYxMDU0MDVaMHUxCzAJBgNVBAYTAkNOMRAwDgYDVQQIDAdCZWlqaW5n\\n' +\n    'MRAwDgYDVQQHDAdCZWlqaW5nMRswGQYDVQQKDBJFQ0RTQSBFeGFtcGxlIENvcnAx\\n' +\n    'CzAJBgNVBAsMAklUMRgwFgYDVQQDDA93d3cuZXhhbXBsZS5jb20wWTATBgcqhkjO\\n' +\n    'PQIBBggqhkjOPQMBBwNCAAQNKO5YXAsmdm/ShEU5VyQlQSdnV6hNQIofHhQ/GyeK\\n' +\n    '1W7t3KnMie4cv/wnA4Qmor2KeBBXUFUnYJqqWOHsivIuo4GEMIGBMAkGA1UdEwQC\\n' +\n    'MAAwCwYDVR0PBAQDAgK0MCcGA1UdEQQgMB6CD3d3dy5leGFtcGxlLmNvbYILZXhh\\n' +\n    'bXBsZS5jb20wHQYDVR0OBBYEFD7RUSUimy0SWShmPIus91tDS0u9MB8GA1UdIwQY\\n' +\n    'MBaAFFjgVG0DwmSwxzJWELNvxGtm3mxUMAoGCCqGSM49BAMCA0gAMEUCIQCTw7sx\\n' +\n    'X0tt1xiNvIQ9LD4bECzdgzIuBaU97GgYDusIUgIgTkc0wYZ3EUg0COHPly4cVsTj\\n' +\n    '1Cyy/+qufhBUJw5om7E=\\n' +\n    '-----END CERTIFICATE-----';\n\nlet ECC_256_PUB_INTER_CERT: string =\n  '-----BEGIN CERTIFICATE-----\\n' +\n    'MIICTDCCAfGgAwIBAgIUc1x0keEiLIcS1oKtSpeEiPoaepkwCgYIKoZIzj0EAwIw\\n' +\n    'bjELMAkGA1UEBhMCQ04xEDAOBgNVBAgMB0JlaWppbmcxEDAOBgNVBAcMB0JlaWpp\\n' +\n    'bmcxFjAUBgNVBAoMDUVDRFNBIFJvb3QgQ0ExCzAJBgNVBAsMAklUMRYwFAYDVQQD\\n' +\n    'DA1FQ0RTQSBSb290IENBMB4XDTI1MDkyODEwNTM0OVoXDTMwMDkyNzEwNTM0OVow\\n' +\n    'fjELMAkGA1UEBhMCQ04xEDAOBgNVBAgMB0JlaWppbmcxEDAOBgNVBAcMB0JlaWpp\\n' +\n    'bmcxHjAcBgNVBAoMFUVDRFNBIEludGVybWVkaWF0ZSBDQTELMAkGA1UECwwCSVQx\\n' +\n    'HjAcBgNVBAMMFUVDRFNBIEludGVybWVkaWF0ZSBDQTBZMBMGByqGSM49AgEGCCqG\\n' +\n    'SM49AwEHA0IABGoCqpHBV/glJeezsp693/hhflYOKpHvaNszVBLkTurkqrbhbaMo\\n' +\n    'hw1oO2Zro54rhZ8tom2UAGn1rzNmRVBCxTajXTBbMAwGA1UdEwQFMAMBAf8wCwYD\\n' +\n    'VR0PBAQDAgEGMB0GA1UdDgQWBBRY4FRtA8JksMcyVhCzb8RrZt5sVDAfBgNVHSME\\n' +\n    'GDAWgBTmNm24RfPnLf1HMNCocS90CGalJjAKBggqhkjOPQQDAgNJADBGAiEAstMv\\n' +\n    'puHi/dgAlvycicL3VQ5iITvUSG2fo286LYc01CQCIQCyw4+94ovyRtaT/WWoZh3u\\n' +\n    'ia4tt478nYeQgMChg+xtSw==\\n' +\n    '-----END CERTIFICATE-----';\n\nlet ECC_256_PUB_ROOT_CERT: string =\n  '-----BEGIN CERTIFICATE-----\\n' +\n    'MIICUzCCAfqgAwIBAgIUPma0DkC+ck+t/3eykmsKsy5D0egwCgYIKoZIzj0EAwIw\\n' +\n    'bjELMAkGA1UEBhMCQ04xEDAOBgNVBAgMB0JlaWppbmcxEDAOBgNVBAcMB0JlaWpp\\n' +\n    'bmcxFjAUBgNVBAoMDUVDRFNBIFJvb3QgQ0ExCzAJBgNVBAsMAklUMRYwFAYDVQQD\\n' +\n    'DA1FQ0RTQSBSb290IENBMB4XDTI1MDkyODEwNTMyN1oXDTM1MDkyNjEwNTMyN1ow\\n' +\n    'bjELMAkGA1UEBhMCQ04xEDAOBgNVBAgMB0JlaWppbmcxEDAOBgNVBAcMB0JlaWpp\\n' +\n    'bmcxFjAUBgNVBAoMDUVDRFNBIFJvb3QgQ0ExCzAJBgNVBAsMAklUMRYwFAYDVQQD\\n' +\n    'DA1FQ0RTQSBSb290IENBMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEA3KYWepl\\n' +\n    'wjHe/Htx2cAhrjaZpWPJOUyL6siUFRayVebaqOQejuUPypbj+u4ZHodsviUe12E1\\n' +\n    '50Q+R9Uayes+WKN2MHQwHQYDVR0OBBYEFOY2bbhF8+ct/Ucw0KhxL3QIZqUmMB8G\\n' +\n    'A1UdIwQYMBaAFOY2bbhF8+ct/Ucw0KhxL3QIZqUmMAsGA1UdDwQEAwIBBjAJBgNV\\n' +\n    'HREEAjAAMAkGA1UdEgQCMAAwDwYDVR0TAQH/BAUwAwEB/zAKBggqhkjOPQQDAgNH\\n' +\n    'ADBEAiAjo+sFDtGVhyc+NqdwxhepqSXOjRI5As6TSz3OYTvERwIgayLgfBn2uABH\\n' +\n    'wYQI60CEJkDF9Pn2fxsGuNEyyn0ks28=\\n' +\n    '-----END CERTIFICATE-----';\nlet ECC_256_PRI_ENTRY_KEY: string =\n  '-----BEGIN EC PRIVATE KEY-----\\n' +\n    'MHcCAQEEII8+yfaMTjUyWtjIopGgNxHUMPKhAYTnIVYbiTOVB4x5oAoGCCqGSM49\\n' +\n    'AwEHoUQDQgAEDSjuWFwLJnZv0oRFOVckJUEnZ1e oTUCKHx4UPxsnitVu7dypzInu\\n' +\n    'HL/8JwOEJqK9ingQV1BVJ2Caqljh7IryLg==\\n' +\n    '-----END EC PRIVATE KEY-----';\n\n// string转Uint8Array。\nfunction stringToUint8Array(str: string): Uint8Array {\n  let arr: number[] = [];\n  for (let i = 0, j = str.length; i < j; i++) {\n    arr.push(str.charCodeAt(i));\n  };\n  return new Uint8Array(arr);\n}\n\nasync function createX509Cert(inStream: string): Promise<cert.X509Cert> {\n  let encodingBlob: cert.EncodingBlob = {\n    data: stringToUint8Array(inStream),\n    encodingFormat: cert.EncodingFormat.FORMAT_PEM\n\n  };\n  let x509Cert: cert.X509Cert = await cert.createX509Cert(encodingBlob);\n\n  return x509Cert;\n}\n\nasync function testCmsVerifyTest() {\n  try {\n    let plainText: Uint8Array = new Uint8Array([0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07]);\n    let x509CertEntry: cert.X509Cert = await createX509Cert(ECC_256_PUB_ENTRY_CERT);\n    let x509CertInter: cert.X509Cert = await createX509Cert(ECC_256_PUB_INTER_CERT);\n    let x509CertRoot: cert.X509Cert = await createX509Cert(ECC_256_PUB_ROOT_CERT);\n    let cms: cert.CmsGenerator = cert.createCmsGenerator(cert.CmsContentType.SIGNED_DATA);\n    let signerConfig: cert.CmsSignerConfig = {\n      mdName: 'SHA256',\n    };\n    let keyInfo: cert.PrivateKeyInfo = {\n      key: ECC_256_PRI_ENTRY_KEY\n    };\n    let option: cert.CmsGeneratorOptions = {\n      outFormat: cert.CmsFormat.PEM\n    };\n    cms.addSigner(x509CertEntry, keyInfo, signerConfig);\n    let signData = cms.doFinalSync(plainText, option);\n    let config: cert.CmsVerificationConfig = {\n      trustCerts: [x509CertRoot, x509CertInter],\n    };\n    let verify: cert.CmsParser = cert.createCmsParser();\n    await verify.setRawData(signData, cert.CmsFormat.PEM);\n    await verify.verifySignedData(config);\n    console.info(`verifySignedData result: success.`);\n  } catch (error) {\n    console.error(`verifySignedData failed: errCode: ${error.code}, message: ${error.message}`);\n  }\n}\n"
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