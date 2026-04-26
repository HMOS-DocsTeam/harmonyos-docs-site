"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["301363"], {
566026(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_device_certificate_kit_certificate_framework_create_verify_cerchainvalidator_object_create_verify_cerchainvalidator_object_md_88d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-device-certificate-kit-certificate-framework-create-verify-cerchainvalidator-object-create-verify-cerchainvalidator-object-md-88d.json
var site_docs_system_security_device_certificate_kit_certificate_framework_create_verify_cerchainvalidator_object_create_verify_cerchainvalidator_object_md_88d_namespaceObject = JSON.parse('{"id":"system-security/device-certificate-kit/certificate-framework/create-verify-cerchainvalidator-object/create-verify-cerchainvalidator-object","title":"证书链校验器对象的创建和校验","description":"证书链是由一组证书组成的证书集合，以图中样例证书文件为例，即可放在一个证书链中。","source":"@site/docs/system-security/device-certificate-kit/certificate-framework/create-verify-cerchainvalidator-object/create-verify-cerchainvalidator-object.md","sourceDirName":"system-security/device-certificate-kit/certificate-framework/create-verify-cerchainvalidator-object","slug":"/system-security/device-certificate-kit/certificate-framework/create-verify-cerchainvalidator-object/","permalink":"/harmonyos-docs-site/system-security/device-certificate-kit/certificate-framework/create-verify-cerchainvalidator-object/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"证书链校验器对象的创建和校验","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/create-verify-cerchainvalidator-object","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"证书链校验时从p12文件构造TrustAnchor对象数组","permalink":"/harmonyos-docs-site/system-security/device-certificate-kit/certificate-framework/create-trustanchor-from-p12/"},"next":{"title":"证书集合及证书吊销列表集合对象的创建和获取","permalink":"/harmonyos-docs-site/system-security/device-certificate-kit/certificate-framework/create-get-cert-crl-object/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/device-certificate-kit/certificate-framework/create-verify-cerchainvalidator-object/create-verify-cerchainvalidator-object.md


const frontMatter = {
	title: '证书链校验器对象的创建和校验',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/create-verify-cerchainvalidator-object',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '证书链校验器对象的创建和校验';

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
        id: "证书链校验器对象的创建和校验",
        children: "证书链校验器对象的创建和校验"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "证书链是由一组证书组成的证书集合，以图中样例证书文件为例，即可放在一个证书链中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "样例中可以看到GlobalSign自签名了证书，GlobalSign也签发了GlobalSign RSA OV SSL CA 2018的证书，GlobalSign RSA OV SSL CA 2018又签发了第三级证书。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(494681)/* ["default"] */.A) + "",
        width: "1397",
        height: "721"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以参考示例将已有的多个证书构建出证书链数据。"
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
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-cert/js-apis-cert#certcreatecertchainvalidator",
            children: "cert.createCertChainValidator"
          }), "创建证书链校验器对象。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["基于已有的证书数据，创建证书链数据对象", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-cert/js-apis-cert#certchaindata",
            children: "CertChainData"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["证书算法库框架提供了证书链校验器对象可用于校验证书链，以验证信任链根源，但待校验的证书链数据对象应符合证书链数据对象的数据结构定义", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-cert/js-apis-cert#certchaindata",
            children: "CertChainData"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-cert/js-apis-cert#validate",
            children: "CertChainValidator.validate"
          }), "校验证书链数据。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { cert } from '@kit.DeviceCertificateKit';\nimport { util } from '@kit.ArkTS';\n\n// CA数据，这只是一个示例，需要根据具体业务来赋值。\nlet caCertData = '-----BEGIN CERTIFICATE-----\\n' +\n  'MIIDgTCCAmmgAwIBAgIGAXKnJjrAMA0GCSqGSIb3DQEBCwUAMFcxCzAJBgNVBAYT\\n' +\n  'AkNOMQ8wDQYDVQQIDAbpmZXopb8xDzANBgNVBAcMBuilv+WuiTEPMA0GA1UECgwG\\n' +\n  '5rWL6K+VMRUwEwYDVQQDDAzkuK3mlofmtYvor5UwHhcNMjUwMjIwMDI1NjMxWhcN\\n' +\n  'MzUwMjE4MDI1NjMxWjBXMQswCQYDVQQGEwJDTjEPMA0GA1UECAwG6ZmV6KW/MQ8w\\n' +\n  'DQYDVQQHDAbopb/lrokxDzANBgNVBAoMBua1i+ivlTEVMBMGA1UEAwwM5Lit5paH\\n' +\n  '5rWL6K+VMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAyY30ubE33Zmc\\n' +\n  'BBM4OIpD1UuDVKynC4xNBK4v79vnlc4ElmRZD4RjkS612DtpaUzt/yHMZXmJTdqg\\n' +\n  '2jq7UG4sQc0G3uNGIXdUpRZpnUYGVftuZMxHaNOb+IgDkZzaO3Dk33piOpH/X/Ke\\n' +\n  'OosCbm7eBL+y+wRhUsLSCEasEsIvW3edHuYLrfz3MzwY/9AmnwqDGdRJ5rPayODD\\n' +\n  'HH0yw9JuRkdMacN8omVX8jBfJeI8KafcQW8MJz+Y0qyQyiZ6A81AQSVfT+6Sk2U3\\n' +\n  'UqeSTmtdIL1u29HfYLwYGHey+1Ro2wxqnMsFKIdKu2dDMDQZx61pER/dFtPYFlS7\\n' +\n  '/uh3mi9HUQIDAQABo1MwUTAdBgNVHQ4EFgQUGDykmR825RPNFIEQaFzUqkr+CIow\\n' +\n  'HwYDVR0jBBgwFoAUGDykmR825RPNFIEQaFzUqkr+CIowDwYDVR0TAQH/BAUwAwEB\\n' +\n  '/zANBgkqhkiG9w0BAQsFAAOCAQEAXjlmYKjBz1ajWywZNlN+LVRXNx7bS4TYtOc2\\n' +\n  'ME4N1ls6yjWSLtBe4DdkBqZ2HwrVW4dg5xZdAS/T0v/rRiGbX6iUFRV9WCTdtLZB\\n' +\n  'HKNh7vU39F7mgTaaWXQK/+6NeLKMzwJENRRaESI/sXeKE6irfJgYuq3NH8GGFd+w\\n' +\n  'HnvVBHRb6WSlY2s5Li7t6lj40UbwOljnqzRQvBeX57rOnzJgVKND3oY9pex/05Oe\\n' +\n  '96x+qc2iqZbu54A6NYCTj/65EEKoj5rYxPXMV4FegV42ouaLJJoS+cEEY7w+ixcl\\n' +\n  '04TjtjEdhTZiJCmI0RK50H2SWC0t9qkFewM3CCWTHY5ygPtMGA==\\n' +\n  '-----END CERTIFICATE-----\\n';\n\n// 二级CA证书数据，这只是一个示例，需要根据具体业务来赋值。\nlet secondCaCertData = '-----BEGIN CERTIFICATE-----\\n' +\n  'MIIDgTCCAmmgAwIBAgIGAXKnJjrBMA0GCSqGSIb3DQEBCwUAMFcxCzAJBgNVBAYT\\n' +\n  'AkNOMQ8wDQYDVQQIDAbpmZXopb8xDzANBgNVBAcMBuilv+WuiTEPMA0GA1UECgwG\\n' +\n  '5rWL6K+VMRUwEwYDVQQDDAzkuK3mlofmtYvor5UwHhcNMjUwMjIwMDI1NjU3WhcN\\n' +\n  'MzUwMjE4MDI1NjU3WjBXMQswCQYDVQQGEwJDTjEPMA0GA1UECAwG6ZmV6KW/MQ8w\\n' +\n  'DQYDVQQHDAbopb/lrokxDzANBgNVBAoMBua1i+ivlTEVMBMGA1UEAwwM5Lit5paH\\n' +\n  '5rWL6K+VMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAxSL5L7fwMaRF\\n' +\n  'RiT1l7kpzaAqZe33/3lgexoMfGiIFarIhYyYJsmOJKes2uLSnPeqEtscrXmFQiIG\\n' +\n  '0srmwrriGgo3oxDp4/5i1FhCf3FqZUwD/RJhtVmkHT0HoYl4cpt/dJSF/e5vxt/J\\n' +\n  '2Z1eRIQOj9DzyqET6+ONQmfVOyzEH6xlpXHZLvykSZ7ytPp25LxULPWjTmpDOPRq\\n' +\n  'vkSMaH4H3mPw/Z9r0MVKP7DgAZMl2yVudHp785AMTVD0L9zWGHf3sek25ek5nv2r\\n' +\n  'SlB21MTBpvd8GC/iGns4V3Bvf75WAMgpGghAkRRyADeqt5Hw+x9BIb9FcfE+h6n+\\n' +\n  '6EF6FPa8GQIDAQABo1MwUTAdBgNVHQ4EFgQUjt2Crk/j6W8WCdHWyz4H+Q2/3PYw\\n' +\n  'HwYDVR0jBBgwFoAUGDykmR825RPNFIEQaFzUqkr+CIowDwYDVR0TAQH/BAUwAwEB\\n' +\n  '/zANBgkqhkiG9w0BAQsFAAOCAQEAksPHMuVF9e2GMVlaSe1Ao9D1KrJvKNaFZPCI\\n' +\n  'lQe2CDsX+Qu7sQj4SML5vvWFLtcAp6ZovqUyEM0PtZWVSjPCRTMJ3ofBPwnXvQ2N\\n' +\n  '7J7NCDA227MQabXeN3jMhkcAzlpdO5poTnobPF4xRqb39jM7otnNJsujvzdDab2l\\n' +\n  'LiP4eU5TrEaF2lwidBWJX0VoLrRpqzQhiWXGMpCBBugP5U+bFs20wezJBG19WYyc\\n' +\n  '2xKKfvyIcxrpmvjLZl8HddS7Ot1CKXyc8U9QZBGAlPwOXu8juppcEtjJyl36EnvF\\n' +\n  'YAcwrXOAtCiNpX3UnLUbG8GtpOOWQWCt+x1gKmA6V0jbqQmqcw==\\n' +\n  '-----END CERTIFICATE-----\\n';\n\n// 证书链校验器示例。在这个示例中，验证了一个二级证书链。\nfunction certChainValidatorSample(): void {\n  let textEncoder = new util.TextEncoder();\n  // 证书链校验器算法。目前仅支持PKIX。\n  let algorithm = 'PKIX';\n\n  // 创建一个证书链校验器实例。\n  let validator = cert.createCertChainValidator(algorithm);\n\n  // CA证书数据。\n  let uint8ArrayOfCaCertData = textEncoder.encodeInto(caCertData);\n\n  // CA证书数据的长度。\n  let uint8ArrayOfCaCertDataLen = new Uint8Array(new Uint16Array([uint8ArrayOfCaCertData.byteLength]).buffer);\n\n  // 二级CA证书数据。\n  let uint8ArrayOf2ndCaCertData = textEncoder.encodeInto(secondCaCertData);\n\n  // 二级CA证书数据的长度。\n  let uint8ArrayOf2ndCaCertDataLen = new Uint8Array(new Uint16Array([uint8ArrayOf2ndCaCertData.byteLength]).buffer);\n\n  // 证书链二进制数据：二级CA证书数据长度+二级CA证书数据+CA证书数据长度+CA证书数据（L-V格式）。\n  let encodingData = new Uint8Array(uint8ArrayOf2ndCaCertDataLen.length + uint8ArrayOf2ndCaCertData.length +\n  uint8ArrayOfCaCertDataLen.length + uint8ArrayOfCaCertData.length);\n  for (let i = 0; i < uint8ArrayOf2ndCaCertDataLen.length; i++) {\n    encodingData[i] = uint8ArrayOf2ndCaCertDataLen[i];\n  }\n  for (let i = 0; i < uint8ArrayOf2ndCaCertData.length; i++) {\n    encodingData[uint8ArrayOf2ndCaCertDataLen.length + i] = uint8ArrayOf2ndCaCertData[i];\n  }\n  for (let i = 0; i < uint8ArrayOfCaCertDataLen.length; i++) {\n    encodingData[uint8ArrayOf2ndCaCertDataLen.length + uint8ArrayOf2ndCaCertData.length + i] =\n      uint8ArrayOfCaCertDataLen[i];\n  }\n  for (let i = 0; i < uint8ArrayOfCaCertData.length; i++) {\n    encodingData[uint8ArrayOf2ndCaCertDataLen.length + uint8ArrayOf2ndCaCertData.length +\n    uint8ArrayOfCaCertDataLen.length + i] = uint8ArrayOfCaCertData[i];\n  }\n\n  let certChainData: cert.CertChainData = {\n    // Uint8Array类型：L-V格式（证书数据长度-证书数据）。\n    data: encodingData,\n    // 证书的数量。本例中为2。\n    count: 2,\n    // 证书格式。仅支持 PEM 和 DER。在此示例中，证书为 PEM 格式。\n    encodingFormat: cert.EncodingFormat.FORMAT_PEM\n  };\n\n  // 验证证书链。\n  validator.validate(certChainData, (err, data) => {\n    if (err != null) {\n      // 校验失败。\n      console.error(`validate failed, errCode: ${err.code}, errMsg: ${err.message}`);\n    } else {\n      // 校验成功。\n      console.info('validate result: success.');\n    }\n  });\n}\n"
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
494681(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798730-edacbfd8c293da0615996b849ef4bbe1.png");

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