"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["672509"], {
807291(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_huks_kit_huks_local_key_management_huks_key_generation_import_huks_key_import_huks_import_wrapped_key_arkts_huks_import_wrapped_key_arkts_md_925_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-huks-kit-huks-local-key-management-huks-key-generation-import-huks-key-import-huks-import-wrapped-key-arkts-huks-import-wrapped-key-arkts-md-925.json
var site_docs_system_security_huks_kit_huks_local_key_management_huks_key_generation_import_huks_key_import_huks_import_wrapped_key_arkts_huks_import_wrapped_key_arkts_md_925_namespaceObject = JSON.parse('{"id":"system-security/huks-kit/huks-local-key-management/huks-key-generation-import/huks-key-import/huks-import-wrapped-key-arkts/huks-import-wrapped-key-arkts","title":"安全导入密钥(ArkTS)","description":"以安全导入ECDH密钥对为例，涉及业务侧加密密钥的密钥生成、协商等操作不在本示例中体现。","source":"@site/docs/system-security/huks-kit/huks-local-key-management/huks-key-generation-import/huks-key-import/huks-import-wrapped-key-arkts/huks-import-wrapped-key-arkts.md","sourceDirName":"system-security/huks-kit/huks-local-key-management/huks-key-generation-import/huks-key-import/huks-import-wrapped-key-arkts","slug":"/system-security/huks-kit/huks-local-key-management/huks-key-generation-import/huks-key-import/huks-import-wrapped-key-arkts/","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/huks-key-generation-import/huks-key-import/huks-import-wrapped-key-arkts/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"安全导入密钥(ArkTS)","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-import-wrapped-key-arkts","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"明文导入密钥(C/C++)","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/huks-key-generation-import/huks-key-import/huks-import-key-in-plaintext-ndk/"},"next":{"title":"安全导入密钥(C/C++)","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/huks-key-generation-import/huks-key-import/huks-import-wrapped-key-ndk/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/huks-kit/huks-local-key-management/huks-key-generation-import/huks-key-import/huks-import-wrapped-key-arkts/huks-import-wrapped-key-arkts.md


const frontMatter = {
	title: '安全导入密钥(ArkTS)',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-import-wrapped-key-arkts',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '安全导入密钥(ArkTS)';

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
  "value": "调测验证",
  "id": "调测验证",
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
        id: "安全导入密钥arkts",
        children: "安全导入密钥(ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以安全导入ECDH密钥对为例，涉及业务侧加密密钥的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/huks-kit/huks-local-key-management/huks-key-generation-import/huks-key-generation/huks-key-generation-overview",
        children: "密钥生成"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-key-agreement/huks-key-agreement-overview",
        children: "协商"
      }), "等操作不在本示例中体现。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体的场景介绍及支持的算法规格，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/huks-kit/huks-local-key-management/huks-key-generation-import/huks-key-import/huks-key-import-overview#%E6%94%AF%E6%8C%81%E7%9A%84%E7%AE%97%E6%B3%95",
        children: "密钥导入支持的算法"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["设备A（导入设备）将待导入密钥转换成", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/huks-kit/huks-local-key-management/huks-concepts#%E5%AF%86%E9%92%A5%E6%9D%90%E6%96%99%E6%A0%BC%E5%BC%8F",
          children: "HUKS密钥材料格式"
        }), "To_Import_Key（仅针对非对称密钥，若待导入密钥是对称密钥则可省略此步骤）。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设备B（被导入设备）生成一个安全导入用途的非对称密钥对Wrapping_Key（公钥Wrapping_Pk，私钥Wrapping_Sk），导出Wrapping_Key的公钥材料Wrapping_Pk发送给设备A。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设备A使用和设备B同样的算法，生成一个用于协商的非对称密钥对Caller_Key（公钥Caller_Pk，私钥Caller_Sk），导出Caller_Key的公钥材料Caller_Pk并保存。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设备A生成一个对称密钥Caller_Kek，该密钥用于加密To_Import_Key生成To_Import_Key_Enc。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设备A基于Caller_Key的私钥Caller_Sk和设备B Wrapping_Key的公钥Wrapping_Pk，协商出Shared_Key，使用Shared_Key加密Caller_Kek，生成Caller_Kek_Enc。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["设备A封装Caller_Pk、Caller_Kek_Enc、To_Import_Key_Enc等安全导入的密钥材料并发送给设备B，安全导入密钥材料格式见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/huks-kit/huks-local-key-management/huks-key-generation-import/huks-key-import/huks-key-import-overview#%E5%AE%89%E5%85%A8%E5%AF%BC%E5%85%A5%E5%AF%86%E9%92%A5%E6%9D%90%E6%96%99%E6%A0%BC%E5%BC%8F",
          children: "安全导入密钥材料格式"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设备B导入封装的加密密钥材料。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设备A、B删除用于安全导入的密钥。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发案例",
      children: "开发案例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "构造用于ECDH密钥协商、AES-GCM加密和包装密钥导入的参数集"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { huks } from '@kit.UniversalKeystoreKit';\n\nlet IV = '0000000000000000';\nlet AAD = 'abababababababab';\nlet NONCE = 'hahahahahaha';\nlet TAG_SIZE = 16;\nlet FILED_LENGTH = 4;\nlet importedAes192PlainKey = 'The aes192 key to import';\nlet callerAes256Kek = 'The is kek to encrypt aes192 key';\nlet callerKeyAlias = 'test_caller_key_ecdh_aes192';\nlet callerKekAliasAes256 = 'test_caller_kek_ecdh_aes256';\nlet callerAgreeKeyAliasAes256 = 'test_caller_agree_key_ecdh_aes256';\nlet importedKeyAliasAes192 = 'test_import_key_ecdh_aes192';\nlet huksPubKey: Uint8Array;\nlet callerSelfPublicKey: Uint8Array;\nlet outSharedKey: Uint8Array;\nlet outPlainKeyEncData: Uint8Array;\nlet outKekEncData: Uint8Array;\nlet outKekEncTag: Uint8Array;\nlet outAgreeKeyEncTag: Uint8Array;\nlet mask = [0x000000FF, 0x0000FF00, 0x00FF0000, 0xFF000000];\n\nfunction subUint8ArrayOf(arrayBuf: Uint8Array, start: number, end: number) {\n  let arr: number[] = [];\n  for (let i = start; i < end && i < arrayBuf.length; ++i) {\n    arr.push(arrayBuf[i]);\n  }\n  return new Uint8Array(arr);\n}\n\nfunction stringToUint8Array(str: string) {\n  let arr: number[] = [];\n  for (let i = 0, j = str.length; i < j; ++i) {\n    arr.push(str.charCodeAt(i));\n  }\n  return new Uint8Array(arr);\n}\n\nfunction assignLength(length: number, arrayBuf: Uint8Array, startIndex: number) {\n  let index = startIndex;\n  for (let i = 0; i < 4; i++) {\n    arrayBuf[index++] = (length & mask[i]) >> (i * 8);\n  }\n  return 4;\n}\n\nfunction assignData(data: Uint8Array, arrayBuf: Uint8Array, startIndex: number) {\n  let index = startIndex;\n  for (let i = 0; i < data.length; i++) {\n    arrayBuf[index++] = data[i];\n  }\n  return data.length;\n}\n\nlet genWrappingKeyParams: huks.HuksOptions = {\n  properties: [\n    {\n      tag: huks.HuksTag.HUKS_TAG_ALGORITHM,\n      value: huks.HuksKeyAlg.HUKS_ALG_ECC\n    },\n    {\n      tag: huks.HuksTag.HUKS_TAG_PURPOSE,\n      value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_UNWRAP\n    },\n    {\n      tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,\n      value: huks.HuksKeySize.HUKS_CURVE25519_KEY_SIZE_256\n    },\n    {\n      tag: huks.HuksTag.HUKS_TAG_PADDING,\n      value: huks.HuksKeyPadding.HUKS_PADDING_NONE\n    }\n  ]\n}\n\nlet genCallerEcdhParams: huks.HuksOptions = {\n  properties: [\n    {\n      tag: huks.HuksTag.HUKS_TAG_ALGORITHM,\n      value: huks.HuksKeyAlg.HUKS_ALG_ECC\n    },\n    {\n      tag: huks.HuksTag.HUKS_TAG_PURPOSE,\n      value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_AGREE\n    },\n    {\n      tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,\n      value: huks.HuksKeySize.HUKS_CURVE25519_KEY_SIZE_256\n    }\n  ]\n}\n\nlet importParamsCallerKek: huks.HuksOptions = {\n  properties: [\n    {\n      tag: huks.HuksTag.HUKS_TAG_ALGORITHM,\n      value: huks.HuksKeyAlg.HUKS_ALG_AES\n    },\n    {\n      tag: huks.HuksTag.HUKS_TAG_PURPOSE,\n      value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_ENCRYPT\n    },\n    {\n      tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,\n      value: huks.HuksKeySize.HUKS_AES_KEY_SIZE_256\n    },\n    {\n      tag: huks.HuksTag.HUKS_TAG_PADDING,\n      value: huks.HuksKeyPadding.HUKS_PADDING_NONE\n    },\n    {\n      tag: huks.HuksTag.HUKS_TAG_BLOCK_MODE,\n      value: huks.HuksCipherMode.HUKS_MODE_GCM\n    },\n    {\n      tag: huks.HuksTag.HUKS_TAG_DIGEST,\n      value: huks.HuksKeyDigest.HUKS_DIGEST_NONE\n    },\n    {\n      tag: huks.HuksTag.HUKS_TAG_IV,\n      value: stringToUint8Array(IV)\n    }\n  ],\n  inData: stringToUint8Array(callerAes256Kek)\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "构造用于生成ECC解包装密钥、ECDH协商密钥和导入AES-GCM密钥加密密钥的参数集"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let importParamsAgreeKey: huks.HuksOptions = {\n  properties: [\n    {\n      tag: huks.HuksTag.HUKS_TAG_ALGORITHM,\n      value: huks.HuksKeyAlg.HUKS_ALG_AES\n    },\n    {\n      tag: huks.HuksTag.HUKS_TAG_PURPOSE,\n      value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_ENCRYPT\n    },\n    {\n      tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,\n      value: huks.HuksKeySize.HUKS_AES_KEY_SIZE_256\n    },\n    {\n      tag: huks.HuksTag.HUKS_TAG_PADDING,\n      value: huks.HuksKeyPadding.HUKS_PADDING_NONE\n    },\n    {\n      tag: huks.HuksTag.HUKS_TAG_BLOCK_MODE,\n      value: huks.HuksCipherMode.HUKS_MODE_GCM\n    },\n    {\n      tag: huks.HuksTag.HUKS_TAG_DIGEST,\n      value: huks.HuksKeyDigest.HUKS_DIGEST_NONE\n    },\n    {\n      tag: huks.HuksTag.HUKS_TAG_IV,\n      value: stringToUint8Array(IV)\n    }\n  ],\n}\n\nlet callerAgreeParams: huks.HuksOptions = {\n  properties: [\n    {\n      tag: huks.HuksTag.HUKS_TAG_ALGORITHM,\n      value: huks.HuksKeyAlg.HUKS_ALG_ECDH\n    },\n    {\n      tag: huks.HuksTag.HUKS_TAG_PURPOSE,\n      value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_AGREE\n    },\n    {\n      tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,\n      value: huks.HuksKeySize.HUKS_CURVE25519_KEY_SIZE_256\n    }\n  ]\n}\n\nlet encryptKeyCommonParams: huks.HuksOptions = {\n  properties: [\n    {\n      tag: huks.HuksTag.HUKS_TAG_ALGORITHM,\n      value: huks.HuksKeyAlg.HUKS_ALG_AES\n    },\n    {\n      tag: huks.HuksTag.HUKS_TAG_PURPOSE,\n      value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_ENCRYPT\n    },\n    {\n      tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,\n      value: huks.HuksKeySize.HUKS_AES_KEY_SIZE_256\n    },\n    {\n      tag: huks.HuksTag.HUKS_TAG_PADDING,\n      value: huks.HuksKeyPadding.HUKS_PADDING_NONE\n    },\n    {\n      tag: huks.HuksTag.HUKS_TAG_BLOCK_MODE,\n      value: huks.HuksCipherMode.HUKS_MODE_GCM\n    },\n    {\n      tag: huks.HuksTag.HUKS_TAG_NONCE,\n      value: stringToUint8Array(NONCE)\n    },\n    {\n      tag: huks.HuksTag.HUKS_TAG_ASSOCIATED_DATA,\n      value: stringToUint8Array(AAD)\n    }\n  ],\n}\n\nlet importWrappedAes192Params: huks.HuksOptions = {\n  properties: [\n    {\n      tag: huks.HuksTag.HUKS_TAG_ALGORITHM,\n      value: huks.HuksKeyAlg.HUKS_ALG_AES\n    },\n    {\n      tag: huks.HuksTag.HUKS_TAG_PURPOSE,\n      value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_ENCRYPT |\n      huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_DECRYPT\n    },\n    {\n      tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,\n      value: huks.HuksKeySize.HUKS_AES_KEY_SIZE_192\n    },\n    {\n      tag: huks.HuksTag.HUKS_TAG_PADDING,\n      value: huks.HuksKeyPadding.HUKS_PADDING_NONE\n    },\n    {\n      tag: huks.HuksTag.HUKS_TAG_BLOCK_MODE,\n      value: huks.HuksCipherMode.HUKS_MODE_CBC\n    },\n    {\n      tag: huks.HuksTag.HUKS_TAG_DIGEST,\n      value: huks.HuksKeyDigest.HUKS_DIGEST_NONE\n    },\n    {\n      tag: huks.HuksTag.HUKS_TAG_UNWRAP_ALGORITHM_SUITE,\n      value: huks.HuksUnwrapSuite.HUKS_UNWRAP_SUITE_ECDH_AES_256_GCM_NOPADDING\n    },\n    {\n      tag: huks.HuksTag.HUKS_TAG_IV,\n      value: stringToUint8Array(IV)\n    }\n  ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "生成密钥、导入密钥、删除密钥、导入包装密钥以及会话操作"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "async function publicGenerateItemFunc(keyAlias: string, huksOptions: huks.HuksOptions) {\n  console.info(`enter promise generateKeyItem`);\n  try {\n    await huks.generateKeyItem(keyAlias, huksOptions)\n      .then(data => {\n        console.info(`promise: generateKeyItem success, data = ${JSON.stringify(data)}`);\n      })\n      .catch((err: Error) => {\n        console.error(`promise: generateKeyItem failed, ${JSON.stringify(err)}`);\n        throw (err as Error);\n      })\n  } catch (err) {\n    console.error(`promise: generateKeyItem invalid, ${JSON.stringify(err)}`);\n    throw (err as Error);\n  }\n}\n\nasync function publicImportKeyItemFunc(keyAlias: string, huksOptions: huks.HuksOptions) {\n  console.info(`enter promise importKeyItem`);\n  try {\n    await huks.importKeyItem(keyAlias, huksOptions)\n      .then(data => {\n        console.info(`promise: importKeyItem success, data = ${JSON.stringify(data)}`);\n      }).catch((err: Error) => {\n        console.error(`promise: importKeyItem failed, ${JSON.stringify(err)}`);\n        throw (err as Error);\n      })\n  } catch (err) {\n    console.error(`promise: importKeyItem input arg invalid, ${JSON.stringify(err)}`);\n    throw (err as Error);\n  }\n}\n\nasync function publicDeleteKeyItemFunc(keyAlias: string, huksOptions: huks.HuksOptions) {\n  console.info(`enter promise deleteKeyItem`);\n  try {\n    await huks.deleteKeyItem(keyAlias, huksOptions)\n      .then(data => {\n        console.info(`promise: deleteKeyItem key success, data = ${JSON.stringify(data)}`);\n      })\n      .catch((err: Error) => {\n        console.error(`promise: deleteKeyItem failed, ${JSON.stringify(err)}`);\n        throw (err as Error);\n      })\n  } catch (err) {\n    console.error(`promise: deleteKeyItem input arg invalid, ${JSON.stringify(err)}`);\n    throw (err as Error);\n  }\n}\n\nfunction importWrappedKeyItem(keyAlias: string, wrappingKeyAlias: string, huksOptions: huks.HuksOptions) {\n  return new Promise<void>((resolve, reject) => {\n    try {\n      huks.importWrappedKeyItem(keyAlias, wrappingKeyAlias, huksOptions, (error, data) => {\n        if (error) {\n          reject(error);\n        } else {\n          resolve(data);\n        }\n      });\n    } catch (error) {\n      throw (error as Error);\n    }\n  });\n}\n\nasync function publicImportWrappedKeyFunc(keyAlias: string, wrappingKeyAlias: string, huksOptions: huks.HuksOptions) {\n  console.info(`enter promise importWrappedKeyItem`);\n  for (let i = 0; i < huksOptions.inData!.length; i++) {\n    console.error(`${i}: ${huksOptions.inData![i]}`);\n  }\n  try {\n    await importWrappedKeyItem(keyAlias, wrappingKeyAlias, huksOptions)\n      .then((data) => {\n        console.info(`promise: importWrappedKeyItem success, data = ${JSON.stringify(data)}`);\n      })\n      .catch((error: Error) => {\n        console.error(`promise: importWrappedKeyItem failed, ${JSON.stringify(error)}`);\n        throw (error as Error);\n      });\n  } catch (error) {\n    console.error(`promise: importWrappedKeyItem input arg invalid, ${JSON.stringify(error)}`);\n    throw (error as Error);\n  }\n}\n\nasync function publicImportWrappedKeyPromise(keyAlias: string, wrappingKeyAlias: string,\n  huksOptions: huks.HuksOptions) {\n  console.info(`enter promise importWrappedKeyItem`);\n  try {\n    await huks.importWrappedKeyItem(keyAlias, wrappingKeyAlias, huksOptions)\n      .then((data) => {\n        console.info(`promise: importWrappedKeyItem success, data = ${JSON.stringify(data)}`);\n      })\n      .catch((error: Error) => {\n        console.error(`promise: importWrappedKeyItem failed, ${JSON.stringify(error)}`);\n        throw (error as Error);\n      });\n  } catch (error) {\n    console.error(`promise: importWrappedKeyItem input arg invalid, ${JSON.stringify(error)}`);\n    throw (error as Error);\n  }\n}\n\nasync function publicInitFunc(srcKeyAlias: string, huksOptions: huks.HuksOptions) {\n  let handle: number = 0;\n  console.info(`enter promise doInit`);\n  try {\n    await huks.initSession(srcKeyAlias, huksOptions)\n      .then((data) => {\n        console.info(`promise: doInit success, data = ${JSON.stringify(data)}`);\n        handle = data.handle;\n      })\n      .catch((error: Error) => {\n        console.error(`promise: doInit key failed, ${JSON.stringify(error)}`);\n        throw (error as Error);\n      });\n  } catch (error) {\n    console.error(`promise: doInit input arg invalid, ${JSON.stringify(error)}`);\n    throw (error as Error);\n  }\n  return handle;\n}\n\nasync function publicUpdateSessionFunction(handle: number, huksOptions: huks.HuksOptions) {\n  const maxUpdateSize = 64;\n  const inData = huksOptions.inData!;\n  const lastInDataPosition = inData.length - 1;\n  let inDataSegSize = maxUpdateSize;\n  let inDataSegPosition = 0;\n  let isFinished = false;\n  let outData: number[] = [];\n\n  while (inDataSegPosition <= lastInDataPosition) {\n    if (inDataSegPosition + maxUpdateSize > lastInDataPosition) {\n      isFinished = true;\n      inDataSegSize = lastInDataPosition - inDataSegPosition + 1;\n      console.info(`enter promise doUpdate`);\n      break;\n    }\n    huksOptions.inData = new Uint8Array(\n      Array.from(inData).slice(inDataSegPosition, inDataSegPosition + inDataSegSize)\n    );\n    console.info(`enter promise doUpdate`);\n    try {\n      await huks.updateSession(handle, huksOptions)\n        .then((data) => {\n          console.info(`promise: doUpdate success, data = ${JSON.stringify(data)}`);\n          outData = outData.concat(Array.from(data.outData!));\n        })\n        .catch((error: Error) => {\n          console.error(`promise: doUpdate failed, ${JSON.stringify(error)}`);\n          throw (error as Error);\n        });\n    } catch (error) {\n      console.error(`promise: doUpdate input arg invalid, ${JSON.stringify(error)}`);\n      throw (error as Error);\n    }\n    if ((!isFinished) && (inDataSegPosition + maxUpdateSize > lastInDataPosition)) {\n      console.error(`update size invalid isFinished = ${isFinished}`);\n      console.error(`inDataSegPosition = ${inDataSegPosition}`);\n      console.error(`lastInDataPosition = ${lastInDataPosition}`);\n      return;\n    }\n    inDataSegPosition += maxUpdateSize;\n  }\n  return outData;\n}\n\nasync function publicFinishSession(handle: number, huksOptions: huks.HuksOptions, inData: number[]) {\n  let outData: number[] = [];\n  console.info(`enter promise doFinish`);\n  try {\n    await huks.finishSession(handle, huksOptions)\n      .then((data) => {\n        console.info(`promise: doFinish success, data = ${JSON.stringify(data)}`);\n        outData = inData.concat(Array.from(data.outData!));\n      })\n      .catch((error: Error) => {\n        console.error(`promise: doFinish key failed, ${JSON.stringify(error)}`);\n        throw (error as Error);\n      });\n  } catch (error) {\n    console.error(`promise: doFinish input arg invalid, ${JSON.stringify(error)}`);\n    throw (error as Error);\n  }\n  return new Uint8Array(outData);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "密钥协商、加密、数据封装等核心功能函数实现"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "async function cipherFunction(keyAlias: string, huksOptions: huks.HuksOptions) {\n  let handle = await publicInitFunc(keyAlias, huksOptions);\n  let tmpData = await publicUpdateSessionFunction(handle, huksOptions);\n  let outData = await publicFinishSession(handle, huksOptions, tmpData!);\n  return outData;\n}\n\nasync function agreeFunction(keyAlias: string, huksOptions: huks.HuksOptions, huksPublicKey: Uint8Array) {\n  let handle = await publicInitFunc(keyAlias, huksOptions);\n  let outSharedKey: Uint8Array = new Uint8Array;\n  huksOptions.inData = huksPublicKey;\n  console.info(`enter promise doUpdate`);\n  try {\n    await huks.updateSession(handle, huksOptions)\n      .then((data) => {\n        console.error(`promise: doUpdate success, data = ${JSON.stringify(data)}`);\n      })\n      .catch((error: Error) => {\n        console.error(`promise: doUpdate failed, ${JSON.stringify(error)}`);\n        throw (error as Error);\n      });\n  } catch (error) {\n    console.error(`promise: doUpdate input arg invalid, ${JSON.stringify(error)}`);\n    throw (error as Error);\n  }\n  console.info(`enter promise doInit`);\n  try {\n    await huks.finishSession(handle, huksOptions)\n      .then((data) => {\n        console.info(`promise: doInit success, data = ${JSON.stringify(data)}`);\n        outSharedKey = data.outData as Uint8Array;\n      })\n      .catch((error: Error) => {\n        console.error(`promise: doInit key failed, ${JSON.stringify(error)}`);\n        throw (error as Error);\n      });\n  } catch (error) {\n    console.error(`promise: doInit input arg invalid, ${JSON.stringify(error)}`);\n    throw (error as Error);\n  }\n  return outSharedKey;\n}\n\nasync function importKekAndAgreeSharedSecret(callerKekAlias: string, importKekParams: huks.HuksOptions,\n  callerKeyAlias: string, huksPublicKey: Uint8Array, agreeParams: huks.HuksOptions) {\n  await publicImportKeyItemFunc(callerKekAlias, importKekParams);\n  outSharedKey = await agreeFunction(callerKeyAlias, agreeParams, huksPublicKey);\n  importParamsAgreeKey.inData = outSharedKey;\n  await publicImportKeyItemFunc(callerAgreeKeyAliasAes256, importParamsAgreeKey);\n}\n\nasync function generateAndExportPublicKey(keyAlias: string, huksOptions: huks.HuksOptions, caller: Boolean) {\n  await publicGenerateItemFunc(keyAlias, huksOptions);\n  try {\n    await huks.exportKeyItem(keyAlias, huksOptions)\n      .then((data) => {\n        console.info(`promise: exportKeyItem success, data = ${JSON.stringify(data)}`);\n        if (caller) {\n          callerSelfPublicKey = data.outData as Uint8Array;\n        } else {\n          huksPubKey = data.outData as Uint8Array;\n        }\n      })\n      .catch((error: Error) => {\n        console.error(`promise: exportKeyItem failed, ${JSON.stringify(error)}`);\n        throw (error as Error);\n      });\n  } catch (error) {\n    console.error(`promise: generate pubKey failed, ${JSON.stringify(error)}`);\n    throw (error as Error);\n  }\n}\n\nasync function encryptImportedPlainKeyAndKek(keyAlias: string) {\n  encryptKeyCommonParams.inData = stringToUint8Array(keyAlias)\n  let plainKeyEncData = await cipherFunction(callerKekAliasAes256, encryptKeyCommonParams);\n  outKekEncTag = subUint8ArrayOf(plainKeyEncData, plainKeyEncData.length - TAG_SIZE, plainKeyEncData.length)\n  outPlainKeyEncData = subUint8ArrayOf(plainKeyEncData, 0, plainKeyEncData.length - TAG_SIZE)\n  encryptKeyCommonParams.inData = stringToUint8Array(callerAes256Kek)\n  let kekEncData = await cipherFunction(callerAgreeKeyAliasAes256, encryptKeyCommonParams)\n  outAgreeKeyEncTag = subUint8ArrayOf(kekEncData, kekEncData.length - TAG_SIZE, kekEncData.length)\n  outKekEncData = subUint8ArrayOf(kekEncData, 0, kekEncData.length - TAG_SIZE)\n}\n\nasync function buildWrappedDataAndImportWrappedKey(plainKey: string) {\n  let plainKeySizeBuff = new Uint8Array(4);\n  assignLength(plainKey.length, plainKeySizeBuff, 0);\n  let wrappedData = new Uint8Array(\n    FILED_LENGTH + huksPubKey.length +\n      FILED_LENGTH + AAD.length +\n      FILED_LENGTH + NONCE.length +\n      FILED_LENGTH + TAG_SIZE +\n      FILED_LENGTH + outKekEncData.length +\n      FILED_LENGTH + AAD.length +\n      FILED_LENGTH + NONCE.length +\n      FILED_LENGTH + TAG_SIZE +\n      FILED_LENGTH + plainKeySizeBuff.length +\n      FILED_LENGTH + outPlainKeyEncData.length\n  );\n  let index = 0;\n  let aadUint8Array = stringToUint8Array(AAD);\n  let nonceArray = stringToUint8Array(NONCE);\n  index += assignLength(callerSelfPublicKey.length, wrappedData, index); // 4\n  index += assignData(callerSelfPublicKey, wrappedData, index); // 91\n  index += assignLength(aadUint8Array.length, wrappedData, index); // 4\n  index += assignData(aadUint8Array, wrappedData, index); // 16\n  index += assignLength(nonceArray.length, wrappedData, index); // 4\n  index += assignData(nonceArray, wrappedData, index); // 12\n  index += assignLength(outAgreeKeyEncTag.length, wrappedData, index); // 4\n  index += assignData(outAgreeKeyEncTag, wrappedData, index); // 16\n  index += assignLength(outKekEncData.length, wrappedData, index); // 4\n  index += assignData(outKekEncData, wrappedData, index); // 32\n  index += assignLength(aadUint8Array.length, wrappedData, index); // 4\n  index += assignData(aadUint8Array, wrappedData, index); // 16\n  index += assignLength(nonceArray.length, wrappedData, index); // 4\n  index += assignData(nonceArray, wrappedData, index); // 12\n  index += assignLength(outKekEncTag.length, wrappedData, index); // 4\n  index += assignData(outKekEncTag, wrappedData, index); // 16\n  index += assignLength(plainKeySizeBuff.length, wrappedData, index); // 4\n  index += assignData(plainKeySizeBuff, wrappedData, index); // 4\n  index += assignLength(outPlainKeyEncData.length, wrappedData, index); // 4\n  index += assignData(outPlainKeyEncData, wrappedData, index); // 24\n  return wrappedData;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "安全导入密钥的完整流程实现"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* 模拟安全导入密钥场景，设备A为远端设备（导入设备），设备B为本端设备（被导入设备） */\nasync function ImportWrappedKey() {\n  /**\n   * 1. 设备A将待导入密钥转换成HUKS密钥材料格式To_Import_Key（仅针对非对称密钥，若待导入密钥是对称密钥则可省略此步骤），\n   *   本示例使用importedAes256PlainKey（对称密钥）作为模拟\n   */\n  /**\n   * 2. 设备B生成一个加密导入用途的、用于协商的非对称密钥对Wrapping_Key（公钥Wrapping_Pk，私钥Wrapping_Sk），\n   * 导出Wrapping_Key公钥Wrapping_Pk存放在变量huksPubKey中\n   */\n  const srcKeyAliasWrap = 'HUKS_Basic_Capability_Import_0200';\n  await generateAndExportPublicKey(srcKeyAliasWrap, genWrappingKeyParams, false);\n\n  /**\n   * 3. 设备A使用和设备B同样的算法，生成一个用于协商的非对称密钥对Caller_Key（公钥Caller_Pk，私钥Caller_Sk），\n   * 导出Caller_Key公钥Caller_Pk存放在变量callerSelfPublicKey中\n   */\n  await generateAndExportPublicKey(callerKeyAlias, genCallerEcdhParams, true);\n\n  /**\n   * 4. 设备A生成一个对称密钥Caller_Kek，该密钥后续将用于加密To_Import_Key\n   * 设备A基于Caller_Key的私钥Caller_Sk和设备B Wrapping_Key的公钥Wrapping_Pk，协商出Shared_Key\n   */\n  await importKekAndAgreeSharedSecret(callerKekAliasAes256, importParamsCallerKek, callerKeyAlias, huksPubKey,\n    callerAgreeParams);\n\n  /**\n   * 5. 设备A使用Caller_Kek加密To_Import_Key，生成To_Import_Key_Enc\n   * 设备A使用Shared_Key加密Caller_Kek，生成Caller_Kek_Enc\n   */\n  await encryptImportedPlainKeyAndKek(importedAes192PlainKey);\n\n  /**\n   * 6. 设备A封装Caller_Pk、To_Import_Key_Enc、Caller_Kek_Enc等安全导入的材料并发送给设备B。\n   * 本示例作为变量存放在callerSelfPublicKey，PlainKeyEncData，KekEncData\n   */\n  let wrappedData = await buildWrappedDataAndImportWrappedKey(importedAes192PlainKey);\n  importWrappedAes192Params.inData = wrappedData;\n\n  /* 7. 设备B导入封装的加密密钥材料 */\n  await publicImportWrappedKeyFunc(importedKeyAliasAes192, srcKeyAliasWrap, importWrappedAes192Params);\n\n  /* 8. 设备A、B删除用于安全导入的密钥 */\n  await publicDeleteKeyItemFunc(srcKeyAliasWrap, genWrappingKeyParams);\n  await publicDeleteKeyItemFunc(callerKeyAlias, genCallerEcdhParams);\n  await publicDeleteKeyItemFunc(importedKeyAliasAes192, importWrappedAes192Params);\n  await publicDeleteKeyItemFunc(callerKekAliasAes256, callerAgreeParams);\n}\n\n\n/*\n * 确定密钥别名和封装密钥属性参数集\n */\nlet keyAlias = 'test_import_key_ecdh_aes192';\nlet isKeyExist: Boolean;\nlet keyProperties: huks.HuksParam[] = [{\n  tag: huks.HuksTag.HUKS_TAG_ALGORITHM,\n  value: huks.HuksKeyAlg.HUKS_ALG_AES,\n}];\nlet huksOptions: huks.HuksOptions = {\n  properties: keyProperties, // 非空填充\n  inData: new Uint8Array([]) // 非空填充\n}\n\nfunction Check() {\n  try {\n    huks.isKeyItemExist(keyAlias, huksOptions, (error, data) => {\n      if (error) {\n        console.error(`callback: isKeyItemExist failed, ${JSON.stringify(error)}`);\n      } else {\n        if (data !== null && data.valueOf() !== null) {\n          isKeyExist = data.valueOf();\n          console.info(`callback: isKeyItemExist success, isKeyExist = ${isKeyExist}`);\n        }\n      }\n    });\n  } catch (error) {\n    console.error(`callback: isKeyItemExist input arg invalid, ${JSON.stringify(error)}`);\n    throw (error as Error);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "调测验证",
      children: "调测验证"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huks/js-apis-huks#huksiskeyitemexist9",
        children: "huks.isKeyItemExist"
      }), "验证密钥是否存在，如密钥存在即表示密钥导入成功。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { huks } from '@kit.UniversalKeystoreKit';\nimport { BusinessError } from \"@kit.BasicServicesKit\";\n\n/*\n * 确定密钥别名和封装密钥属性参数集\n */\nlet keyAlias = 'test_import_key_ecdh_aes192';\nlet isKeyExist: Boolean;\nlet keyProperties: Array<huks.HuksParam> = [{\n  tag: huks.HuksTag.HUKS_TAG_ALGORITHM,\n  value: huks.HuksKeyAlg.HUKS_ALG_AES,\n}];\nlet huksOptions: huks.HuksOptions = {\n  properties: keyProperties, // 非空填充。\n  inData: new Uint8Array(new Array()) // 非空填充。\n}\n\nasync function isKeyItemExist(keyAlias: string, options: huks.HuksOptions): Promise<boolean> {\n  console.info(`promise: enter isKeyItemExist`);\n  let ret: boolean = false;\n  try {\n    await huks.isKeyItemExist(keyAlias, options)\n      .then((data) => {\n        console.info(`promise: isKeyItemExist success, data = ${data}`);\n        ret = true;\n      }).catch((error: BusinessError) => {\n        console.error(`promise: isKeyItemExist failed, errCode : ${error.code}, errMsg : ${error.message}`);\n      })\n  } catch (error) {\n    console.error(`promise: isKeyItemExist input arg invalid`);\n  }\n  return ret;\n}\n\nasync function importWrappedKeyExistTest() {\n  let retImp = await isKeyItemExist(keyAlias, huksOptions);\n  if (retImp == false) {\n    console.error(\"importWrappedKeyExistTest failed\");\n    return;\n  }\n  console.error(\"importWrappedKeyExistTest success\");\n}\n"
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