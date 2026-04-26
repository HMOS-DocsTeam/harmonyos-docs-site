"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["687652"], {
351799(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_data_guard_kit_guide_dataguard_enterprise_recoverykey_recoverykey_signature_recoverykey_signature_md_ba7_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-data-guard-kit-guide-dataguard-enterprise-recoverykey-recoverykey-signature-recoverykey-signature-md-ba7.json
var site_docs_system_security_data_guard_kit_guide_dataguard_enterprise_recoverykey_recoverykey_signature_recoverykey_signature_md_ba7_namespaceObject = JSON.parse('{"id":"system-security/data-guard-kit-guide/dataguard-enterprise-recoverykey/recoverykey-signature/recoverykey-signature","title":"挑战值签名","description":"背景","source":"@site/docs/system-security/data-guard-kit-guide/dataguard-enterprise-recoverykey/recoverykey-signature/recoverykey-signature.md","sourceDirName":"system-security/data-guard-kit-guide/dataguard-enterprise-recoverykey/recoverykey-signature","slug":"/system-security/data-guard-kit-guide/dataguard-enterprise-recoverykey/recoverykey-signature/","permalink":"/harmonyos-docs-site/system-security/data-guard-kit-guide/dataguard-enterprise-recoverykey/recoverykey-signature/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"挑战值签名","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/recoverykey-signature","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"获取挑战值","permalink":"/harmonyos-docs-site/system-security/data-guard-kit-guide/dataguard-enterprise-recoverykey/recoverykey-get-authchallenge/"},"next":{"title":"更新企业公钥证书","permalink":"/harmonyos-docs-site/system-security/data-guard-kit-guide/dataguard-enterprise-recoverykey/recoverykey-update/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/data-guard-kit-guide/dataguard-enterprise-recoverykey/recoverykey-signature/recoverykey-signature.md


const frontMatter = {
	title: '挑战值签名',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/recoverykey-signature',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '挑战值签名';

const assets = {

};



const toc = [{
  "value": "背景",
  "id": "背景",
  "level": 2
}, {
  "value": "自定义签名工具类SignUtil生成挑战值的签名",
  "id": "自定义签名工具类signutil生成挑战值的签名",
  "level": 2
}, {
  "value": "生成挑战值的签名（更新企业公钥）",
  "id": "生成挑战值的签名更新企业公钥",
  "level": 2
}, {
  "value": "生成挑战值的签名（删除企业恢复密钥）",
  "id": "生成挑战值的签名删除企业恢复密钥",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "挑战值签名",
        children: "挑战值签名"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "背景",
      children: "背景"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["挑战值是一个32字节的随机数，用于防止签名重放攻击。在企业恢复密钥提供", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/data-guard-kit-guide/dataguard-enterprise-recoverykey/recoverykey-update",
        children: "更新企业公钥证书"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/data-guard-kit-guide/dataguard-enterprise-recoverykey/recoverykey-delete",
        children: "删除企业恢复密钥"
      }), "场景下，均会使用挑战值来确保签名是企业对当前操作进行授权。签名使用ECC算法，是企业利用企业证书对应的私钥，对挑战值进行签名的。接口传入的挑战值签名必须是只包含原始ECDSA签名值的64字节内容，不能包含任何格式前缀。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "自定义签名工具类signutil生成挑战值的签名",
      children: "自定义签名工具类SignUtil生成挑战值的签名"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/data-guard-api/data-guard-arkts/dataguard-recoverykey/dataguard-recoverykey#updateenterprisecertificate",
        children: "updateEnterpriseCertificate"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/data-guard-api/data-guard-arkts/dataguard-recoverykey/dataguard-recoverykey#deleteenterpriserecoverykey",
        children: "deleteEnterpriseRecoveryKey"
      }), "在生成挑战值的签名时可使用自定义签名工具类。使用时，请将SignUtil里的privateKey、publicKey，替换为企业的公私钥对。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { cryptoFramework } from \"@kit.CryptoArchitectureKit\";\n\nexport class SignUtil {\n  public static async signInner(data: Uint8Array) : Promise<Uint8Array> {\n    // 替换成企业的私钥\n    let privateKey: string = \"-----BEGIN EC PARAMETERS-----\\n\" +\n      \"************\\n\" +\n      \"-----END EC PARAMETERS-----\\n\" +\n      \"-----BEGIN EC PRIVATE KEY-----\\n\" +\n      \"**********************************************************************\"  +\n      \"-----END EC PRIVATE KEY-----\";\n    // 替换成企业的公钥\n    let publicKey: string = \"-----BEGIN PUBLIC KEY-----\\n\" +\n      \"****************************************************************\\n\" +\n      \"************************************************************\\n\" +\n      \"-----END PUBLIC KEY-----\\n\" +\n      \"-----BEGIN CERTIFICATE-----\\n\" +\n      \"****************************************************************\\n\" +\n      \"*******\\n\" +\n      \"-----END CERTIFICATE-----\\n\";\n    let input1: cryptoFramework.DataBlob = { data };\n    let signAlg = \"ECC_BrainPoolP256r1|SHA256\";\n    let signer = cryptoFramework.createSign(signAlg);\n    let asyKeyGenerator = cryptoFramework.createAsyKeyGenerator(\"ECC_BrainPoolP256r1\");\n    let keyPair = await asyKeyGenerator.convertPemKey(publicKey, privateKey);\n    await signer.init(keyPair.priKey);\n    let signData = await signer.sign(input1);\n    // 对签名的数据进行验签\n    let verifier = cryptoFramework.createVerify(signAlg);\n    verifier.initSync(keyPair.pubKey);\n    let res = verifier.verifySync(input1, signData);\n    console.info(`signature verify result: ${res}.`);\n    return signData.data;\n  }\n\n  public static async sign(data: Uint8Array) : Promise<Uint8Array> {\n    let signInnerResult = await SignUtil.signInner(data);\n    let result: Uint8Array = new Uint8Array(64);\n\n    let index = 0;\n    let length = 0;\n    let offset = 0;\n    while (index < signInnerResult.length) {\n      if (signInnerResult[index] === 0x02) {\n        length = index + 1 < signInnerResult.length ? signInnerResult[index + 1] : 0;\n        let end = index + 2 + length;\n        if (end <= signInnerResult.length) {\n          let copyArr = signInnerResult.subarray(end - 32, end);\n          result.set(copyArr, offset);\n          offset += 32;\n        }\n        index += 34;\n      } else {\n        index++;\n      }\n    }\n    return result;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "生成挑战值的签名更新企业公钥",
      children: "生成挑战值的签名（更新企业公钥）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在更新企业公钥证书场景下，先获取挑战值，将下面方法中的certificate和ecPubNewStrBase64替换为企业的新证书和新公钥，然后调用自定义工具类SignUtil的sign签名方法生成挑战值的签名。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { util } from '@kit.ArkTS';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { recoveryKey } from '@kit.EnterpriseDataGuardKit';\nimport { SignUtil } from './SignUtil';\n\nasync function updateEnterpriseCertificate() {\n  // 替换成企业的新证书\n  const certificate =\n    \"-----BEGIN CERTIFICATE-----\\n\" +\n      \"****************************************************************\\n\" +\n      \"*******\\n\" +\n      \"-----END CERTIFICATE-----\\n\";\n\n  const challenge: Uint8Array = await recoveryKey.getAuthChallenge();\n  const buffer = new ArrayBuffer(4);\n  const view = new DataView(buffer);\n  view.setUint32(0, 0x98010000);\n  const command: Uint8Array = new Uint8Array(buffer);\n  // 替换成企业的新公钥\n  const ecPubNewStrBase64 =\n    \"****************************************************************\\n\";\n  let publicKey: Uint8Array = base64ToStringUint8Array(ecPubNewStrBase64);\n  publicKey = publicKey.subarray(publicKey.length - 65, publicKey.length);\n  let signData: Uint8Array = new Uint8Array(challenge.length + command.length + publicKey.length);\n  signData.set(challenge, 0);\n  signData.set(command, challenge.length);\n  signData.set(publicKey, challenge.length + command.length);\n  let signature: Uint8Array = await SignUtil.sign(signData);\n\n  const cert: Uint8Array = stringToUint8(certificate!);\n  recoveryKey.updateEnterpriseCertificate(signature, cert).then((ret: number) => {\n    console.info(`Succeeded in updating certificate.`);\n  }).catch((error: BusinessError) => {\n    console.error(`Failed to update certificate. Code: ${error.code}, message: ${error.message}.`);\n  });\n}\n\nfunction stringToUint8(str: string): Uint8Array {\n  let result: Uint8Array = new Uint8Array([]);\n  try {\n    result = new util.TextEncoder('utf-8').encodeInto(str);\n  } catch (error) {\n    console.error(`Failed to encode to uint8. Code: ${error.code}, message: ${error.message}`);\n  }\n  return result;\n}\n\nfunction base64ToStringUint8Array(base64String: string): Uint8Array {\n  let base64 = new util.Base64Helper();\n  let uint8Array = base64.decodeSync(base64String, util.Type.BASIC);\n  return uint8Array;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "生成挑战值的签名删除企业恢复密钥",
      children: "生成挑战值的签名（删除企业恢复密钥）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在删除企业恢复密钥场景下，先获取挑战，然后调用自定义工具类SignUtil的sign签名方法生成挑战值的签名。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError, osAccount } from '@kit.BasicServicesKit';\nimport { recoveryKey } from '@kit.EnterpriseDataGuardKit';\nimport { SignUtil } from './SignUtil';\n\nasync function deleteEnterpriseRecoveryKey() {\n  const challenge: Uint8Array = await recoveryKey.getAuthChallenge();\n  let signResult = await SignUtil.sign(challenge);\n  let accountManager: osAccount.AccountManager = osAccount.getAccountManager();\n  let userId = await accountManager.getOsAccountLocalId();\n  recoveryKey.deleteEnterpriseRecoveryKey(userId, signResult).then((ret: number) => {\n    console.info(`Succeeded in deleting enterprise recovery key.`);\n  }).catch((err: BusinessError) => {\n    console.error(`Failed to delete enterprise recovery key. Code: ${err.code}, message: ${err.message}.`);\n  });\n}\n"
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