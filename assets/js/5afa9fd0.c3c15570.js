"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["882656"], {
763289(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_device_certificate_kit_certificate_framework_verify_certchain_by_systemca_verify_certchain_by_systemca_md_5af_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-device-certificate-kit-certificate-framework-verify-certchain-by-systemca-verify-certchain-by-systemca-md-5af.json
var site_docs_system_security_device_certificate_kit_certificate_framework_verify_certchain_by_systemca_verify_certchain_by_systemca_md_5af_namespaceObject = JSON.parse('{"id":"system-security/device-certificate-kit/certificate-framework/verify-certchain-by-systemca/verify-certchain-by-systemca","title":"使用系统预置CA证书校验证书链","description":"从API 20开始，支持使用系统预置CA证书校验证书链。","source":"@site/docs/system-security/device-certificate-kit/certificate-framework/verify-certchain-by-systemca/verify-certchain-by-systemca.md","sourceDirName":"system-security/device-certificate-kit/certificate-framework/verify-certchain-by-systemca","slug":"/system-security/device-certificate-kit/certificate-framework/verify-certchain-by-systemca/","permalink":"/harmonyos-docs-site/system-security/device-certificate-kit/certificate-framework/verify-certchain-by-systemca/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"title":"使用系统预置CA证书校验证书链","sidebar_position":9,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/verify-certchain-by-systemca","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"证书链对象的创建和校验","permalink":"/harmonyos-docs-site/system-security/device-certificate-kit/certificate-framework/create-verify-certchain-object/"},"next":{"title":"证书CMS签名","permalink":"/harmonyos-docs-site/system-security/device-certificate-kit/certificate-framework/create-cms-sign-object/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/device-certificate-kit/certificate-framework/verify-certchain-by-systemca/verify-certchain-by-systemca.md


const frontMatter = {
	title: '使用系统预置CA证书校验证书链',
	sidebar_position: 9,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/verify-certchain-by-systemca',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '使用系统预置CA证书校验证书链';

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
        id: "使用系统预置ca证书校验证书链",
        children: "使用系统预置CA证书校验证书链"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API 20开始，支持使用系统预置CA证书校验证书链。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以校验证书链为例，完成证书链对象的创建，使用系统预置CA证书对证书链进行校验。"
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
            href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-cert/js-apis-cert#certcreatex509certchain11",
            children: "cert.createX509CertChain"
          }), "创建X509证书链对象，并返回结果。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-cert/js-apis-cert#validate11",
            children: "x509CertChain.validate"
          }), "设置校验参数trustSystemCa为true，使用系统预置CA证书校验证书链并返回结果。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { cert } from '@kit.DeviceCertificateKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { util } from '@kit.ArkTS';\n// ...\nasync function sample() {\n  let textEncoder = new util.TextEncoder();\n  // 证书链二进制数据，需业务自行赋值。\n  const encodingBlob: cert.EncodingBlob = {\n    data: textEncoder.encodeInto(certChainData),\n    // 根据encodingData的格式进行赋值，支持FORMAT_PEM、FORMAT_DER和FORMAT_PKCS7。\n    encodingFormat: cert.EncodingFormat.FORMAT_PEM\n  };\n  let x509CertChain: cert.X509CertChain = {} as cert.X509CertChain;\n  try {\n    x509CertChain = await cert.createX509CertChain(encodingBlob);\n  } catch (err) {\n    let e: BusinessError = err as BusinessError;\n    console.error(`createX509CertChain failed, errCode: ${e.code}, errMsg: ${e.message}`);\n  }\n\n  // 证书链校验数据，需业务自行赋值。\n  const param: cert.CertChainValidationParameters = {\n    date: '20250623163000Z',\n    trustAnchors: [{}],\n    trustSystemCa: true,\n  };\n  try {\n    const validationRes = await x509CertChain.validate(param);\n    console.info('X509CertChain validate result: success.');\n  } catch (err) {\n    let e: BusinessError = err as BusinessError;\n    console.error(`X509CertChain validate failed, errCode: ${e.code}, errMsg: ${e.message}`);\n  }\n}\n"
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