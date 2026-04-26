"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["404928"], {
696878(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_huks_kit_huks_external_key_management_huks_ukey_signing_signature_verification_huks_ukey_signing_signature_verification_arkts_huks_ukey_signing_signature_verification_arkts_md_453_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-huks-kit-huks-external-key-management-huks-ukey-signing-signature-verification-huks-ukey-signing-signature-verification-arkts-huks-ukey-signing-signature-verification-arkts-md-453.json
var site_docs_system_security_huks_kit_huks_external_key_management_huks_ukey_signing_signature_verification_huks_ukey_signing_signature_verification_arkts_huks_ukey_signing_signature_verification_arkts_md_453_namespaceObject = JSON.parse('{"id":"system-security/huks-kit/huks-external-key-management/huks-ukey-signing-signature-verification/huks-ukey-signing-signature-verification-arkts/huks-ukey-signing-signature-verification-arkts","title":"签名/验签(ArkTS)","description":"当前指导提供以下示例，供开发者参考完成签名、验签开发：","source":"@site/docs/system-security/huks-kit/huks-external-key-management/huks-ukey-signing-signature-verification/huks-ukey-signing-signature-verification-arkts/huks-ukey-signing-signature-verification-arkts.md","sourceDirName":"system-security/huks-kit/huks-external-key-management/huks-ukey-signing-signature-verification/huks-ukey-signing-signature-verification-arkts","slug":"/system-security/huks-kit/huks-external-key-management/huks-ukey-signing-signature-verification/huks-ukey-signing-signature-verification-arkts/","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-external-key-management/huks-ukey-signing-signature-verification/huks-ukey-signing-signature-verification-arkts/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"签名/验签(ArkTS)","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-ukey-signing-signature-verification-arkts","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"签名/验签介绍及算法规格","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-external-key-management/huks-ukey-signing-signature-verification/huks-ukey-signing-signature-verification-overview/"},"next":{"title":"签名/验签(C/C++)","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-external-key-management/huks-ukey-signing-signature-verification/huks-ukey-signing-signature-verification-ndk/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/huks-kit/huks-external-key-management/huks-ukey-signing-signature-verification/huks-ukey-signing-signature-verification-arkts/huks-ukey-signing-signature-verification-arkts.md


const frontMatter = {
	title: '签名/验签(ArkTS)',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-ukey-signing-signature-verification-arkts',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '签名/验签(ArkTS)';

const assets = {

};



const toc = [{
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "开发案例",
  "id": "开发案例",
  "level": 2
}, {
  "value": "RSA/SHA256/PSS",
  "id": "rsasha256pss",
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
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "签名验签arkts",
        children: "签名/验签(ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前指导提供以下示例，供开发者参考完成签名、验签开发："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#rsasha256pss",
          children: "密钥算法为RSA、摘要算法为SHA256、填充模式为PSS"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体的场景介绍及支持的算法规格，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/huks-kit/huks-external-key-management/huks-ukey-signing-signature-verification/huks-ukey-signing-signature-verification-overview",
        children: "签名/验签介绍及算法规格"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "签名"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过证书管理系统能力提供的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-certmanagerdialog/js-apis-certmanagerdialog#certificatemanagerdialogopenauthorizedialog22",
          children: "证书选择接口"
        }), "获取", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-certmanagerdialog/js-apis-certmanagerdialog#certreference22",
          children: "keyUri"
        }), "作为resourceId，并作为密钥别名，", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/huks-kit/huks-external-key-management/huks-resource-management/huks-open-close-resource-ndk#%E6%89%93%E5%BC%80%E8%B5%84%E6%BA%90",
          children: "打开资源"
        }), "后完成PIN码认证。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "指定待签名的明文数据。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["获取属性参数", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huks/js-apis-huks#huksoptions",
          children: "HuksOptions"
        }), "，包括两个字段properties和inData。inData传入明文数据，properties传入算法参数配置。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huks/js-apis-huks#huksinitsession9",
          children: "initSession"
        }), "初始化密钥会话，并获取会话的句柄handle。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huks/js-apis-huks#huksfinishsession9",
          children: "finishSession"
        }), "结束密钥会话，获取签名signature。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "验签"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过证书管理系统能力提供的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-certmanagerdialog/js-apis-certmanagerdialog#certificatemanagerdialogopenauthorizedialog22",
          children: "证书选择接口"
        }), "获取", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-certmanagerdialog/js-apis-certmanagerdialog#certreference22",
          children: "keyUri"
        }), "作为resourceId，并作为密钥别名，然后", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/huks-kit/huks-external-key-management/huks-resource-management/huks-open-close-resource-ndk#%E6%89%93%E5%BC%80%E8%B5%84%E6%BA%90",
          children: "打开资源"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "获取待验证的签名。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["获取属性参数", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huks/js-apis-huks#huksoptions",
          children: "HuksOptions"
        }), "，包括两个字段properties和inData。inData传入签名signature，properties传入算法参数配置。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huks/js-apis-huks#huksinitsession9",
          children: "initSession"
        }), "初始化密钥会话，并获取会话的句柄handle。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huks/js-apis-huks#huksupdatesession9",
          children: "updateSession"
        }), "更新密钥会话。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huks/js-apis-huks#huksfinishsession9",
          children: "finishSession"
        }), "结束密钥会话，验证签名。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发案例",
      children: "开发案例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rsasha256pss",
      children: "RSA/SHA256/PSS"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/*\n * 密钥算法为RSA，摘要算法为SHA256，填充模式为PSS\n */\nimport { huks } from '@kit.UniversalKeystoreKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nlet handle: number;\nlet plaintext = '123456';\nlet signature: Uint8Array;\n\nfunction StringToUint8Array(str: string) {\n  let arr: number[] = [];\n  for (let i = 0, j = str.length; i < j; ++i) {\n    arr.push(str.charCodeAt(i));\n  }\n  return new Uint8Array(arr);\n}\n\nfunction Uint8ArrayToString(fileData: Uint8Array) {\n  let dataString = '';\n  for (let i = 0; i < fileData.length; i++) {\n    dataString += String.fromCharCode(fileData[i]);\n  }\n  return dataString;\n}\n\nfunction GetRsaSignProperties() {\n  let properties: Array<huks.HuksParam> = [{\n    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,\n    value: huks.HuksKeyAlg.HUKS_ALG_RSA\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,\n    value: huks.HuksKeySize.HUKS_RSA_KEY_SIZE_2048\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_PADDING,\n    value: huks.HuksKeyPadding.HUKS_PADDING_PSS\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_DIGEST,\n    value: huks.HuksKeyDigest.HUKS_DIGEST_SHA256\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_PURPOSE,\n    value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_SIGN\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_KEY_CLASS,\n    value: huks.HuksKeyClassType.HUKS_KEY_CLASS_EXTENSION\n  }];\n  return properties;\n}\n\nfunction GetRsaVerifyProperties() {\n  let properties: Array<huks.HuksParam> = [{\n    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,\n    value: huks.HuksKeyAlg.HUKS_ALG_RSA\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,\n    value: huks.HuksKeySize.HUKS_RSA_KEY_SIZE_2048\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_PADDING,\n    value: huks.HuksKeyPadding.HUKS_PADDING_PSS\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_DIGEST,\n    value: huks.HuksKeyDigest.HUKS_DIGEST_SHA256\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_PURPOSE,\n    value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_VERIFY\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_KEY_CLASS,\n    value: huks.HuksKeyClassType.HUKS_KEY_CLASS_EXTENSION\n  }];\n  return properties;\n}\n\nasync function initSession(keyAlias: string, huksOptions: huks.HuksOptions) {\n  console.info(`promise: enter initSession`);\n  try {\n    await huks.initSession(keyAlias, huksOptions)\n      .then((data) => {\n        handle = data.handle;\n        console.info(`promise: initSession success`);\n      }).catch((error: BusinessError) => {\n        console.error(`promise: initSession failed, errCode : ${error.code}, errMsg : ${error.message}`);\n      })\n  } catch (error) {\n    console.error(`promise: initSession input arg invalid`);\n  }\n}\n\nasync function updateSession(handle: number, huksOptions: huks.HuksOptions) {\n  console.info(`promise: enter updateSession`);\n  try {\n    await huks.updateSession(handle, huksOptions)\n      .then((data) => {\n        let outData = data.outData as Uint8Array;\n        console.info(`promise: updateSession success, data = ${Uint8ArrayToString(outData)}`);\n      }).catch((error: BusinessError) => {\n        console.error(`promise: updateSession failed, errCode : ${error.code}, errMsg : ${error.message}`);\n      })\n  } catch (error) {\n    console.error(`promise: updateSession input arg invalid`);\n  }\n}\n\nasync function finishSession(handle: number, huksOptions: huks.HuksOptions) {\n  console.info(`promise: enter finishSession`);\n  try {\n    await huks.finishSession(handle, huksOptions)\n      .then((data) => {\n        signature = data.outData as Uint8Array;\n        console.info(`promise: finishSession success, data = ${Uint8ArrayToString(signature)}`);\n      }).catch((error: BusinessError) => {\n        console.error(`promise: finishSession failed, errCode : ${error.code}, errMsg : ${error.message}`);\n      })\n  } catch (error) {\n    console.error(`promise: finishSession input arg invalid`);\n  }\n}\n\nasync function Sign(keyAlias: string, plaintext: string) {\n  console.info(`enter Sign`);\n  let signProperties = GetRsaSignProperties();\n  let options: huks.HuksOptions = {\n    properties: signProperties,\n  }\n  await initSession(keyAlias, options);\n\n  if (handle !== undefined) {\n    options.inData = StringToUint8Array(plaintext);\n    await finishSession(handle, options);\n  }\n}\n\nasync function Verify(keyAlias: string, plaintext: string, signature: Uint8Array) {\n  console.info(`enter Verify`);\n  let verifyProperties = GetRsaVerifyProperties();\n  let options: huks.HuksOptions = {\n    properties: verifyProperties,\n  }\n\n  await initSession(keyAlias, options);\n\n  if (handle !== undefined) {\n    options.inData = StringToUint8Array(plaintext);\n    await updateSession(handle, options);\n    options.inData = signature;\n    await finishSession(handle, options);\n  }\n}\n\nasync function testSignVerify() {\n  // 假设keyAlias是已获取的resourceId\n  let keyAlias = JSON.stringify({\n    providerName: \"testProviderName\",\n    bundleName: \"com.example.cryptoapplication\",\n    abilityName: \"CryptoExtension\",\n    index: {\n      key: \"testKey\"\n    } as ESObject\n  });\n  await Sign(keyAlias, plaintext);\n  await Verify(keyAlias, plaintext, signature);\n}\n"
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