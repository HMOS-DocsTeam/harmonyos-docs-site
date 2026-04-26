"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["769897"], {
131621(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_huks_kit_huks_local_key_management_huks_key_generation_import_huks_key_import_huks_import_key_in_plaintext_arkts_huks_import_key_in_plaintext_arkts_md_10c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-huks-kit-huks-local-key-management-huks-key-generation-import-huks-key-import-huks-import-key-in-plaintext-arkts-huks-import-key-in-plaintext-arkts-md-10c.json
var site_docs_system_security_huks_kit_huks_local_key_management_huks_key_generation_import_huks_key_import_huks_import_key_in_plaintext_arkts_huks_import_key_in_plaintext_arkts_md_10c_namespaceObject = JSON.parse('{"id":"system-security/huks-kit/huks-local-key-management/huks-key-generation-import/huks-key-import/huks-import-key-in-plaintext-arkts/huks-import-key-in-plaintext-arkts","title":"明文导入密钥(ArkTS)","description":"分别以导入AES256、RSA2048和X25519密钥为例。具体的场景介绍及支持的算法规格，请参考密钥导入支持的算法。","source":"@site/docs/system-security/huks-kit/huks-local-key-management/huks-key-generation-import/huks-key-import/huks-import-key-in-plaintext-arkts/huks-import-key-in-plaintext-arkts.md","sourceDirName":"system-security/huks-kit/huks-local-key-management/huks-key-generation-import/huks-key-import/huks-import-key-in-plaintext-arkts","slug":"/system-security/huks-kit/huks-local-key-management/huks-key-generation-import/huks-key-import/huks-import-key-in-plaintext-arkts/","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/huks-key-generation-import/huks-key-import/huks-import-key-in-plaintext-arkts/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"明文导入密钥(ArkTS)","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-import-key-in-plaintext-arkts","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"密钥导入介绍及算法规格","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/huks-key-generation-import/huks-key-import/huks-key-import-overview/"},"next":{"title":"明文导入密钥(C/C++)","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/huks-key-generation-import/huks-key-import/huks-import-key-in-plaintext-ndk/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/huks-kit/huks-local-key-management/huks-key-generation-import/huks-key-import/huks-import-key-in-plaintext-arkts/huks-import-key-in-plaintext-arkts.md


const frontMatter = {
	title: '明文导入密钥(ArkTS)',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-import-key-in-plaintext-arkts',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '明文导入密钥(ArkTS)';

const assets = {

};



const toc = [{
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "导入AES256密钥",
  "id": "导入aes256密钥",
  "level": 3
}, {
  "value": "导入RSA2048密钥对",
  "id": "导入rsa2048密钥对",
  "level": 3
}, {
  "value": "导入X25519密钥公钥",
  "id": "导入x25519密钥公钥",
  "level": 3
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
    h3: "h3",
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
        id: "明文导入密钥arkts",
        children: "明文导入密钥(ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["分别以导入AES256、RSA2048和X25519密钥为例。具体的场景介绍及支持的算法规格，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/huks-kit/huks-local-key-management/huks-key-generation-import/huks-key-import/huks-key-import-overview#%E6%94%AF%E6%8C%81%E7%9A%84%E7%AE%97%E6%B3%95",
        children: "密钥导入支持的算法"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["指定密钥别名，密钥别名命名规范参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/huks-kit/huks-local-key-management/huks-key-generation-import/huks-key-generation/huks-key-generation-overview",
            children: "密钥生成介绍及算法规格"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "封装密钥属性集和密钥材料。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["密钥属性集同样与密钥生成中指定的密钥属性一致，须包含", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huks/js-apis-huks#hukskeyalg",
              children: "HuksKeyAlg"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huks/js-apis-huks#hukskeysize",
              children: "HuksKeySize"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huks/js-apis-huks#hukskeypurpose",
              children: "HuksKeyPurpose"
            }), "属性。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["密钥材料须符合", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-security/huks-kit/huks-local-key-management/huks-concepts#%E5%AF%86%E9%92%A5%E6%9D%90%E6%96%99%E6%A0%BC%E5%BC%8F",
              children: "HUKS密钥材料格式"
            }), "，并以Uint8Array形式赋值给", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huks/js-apis-huks#huksoptions",
              children: "HuksOptions"
            }), "的inData字段。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huks/js-apis-huks#huksimportkeyitem9",
            children: "huks.importKeyItem"
          }), "，传入密钥别名和密钥属性集，即可导入密钥。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["HuksParam和HuksOptions的含义参考：", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huks/js-apis-huks#huksparam",
            children: "HuksParam"
          }), " 和 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huks/js-apis-huks#huksoptions",
            children: "HuksOptions"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "导入aes256密钥",
      children: "导入AES256密钥"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* 以下以导入AES256密钥的Callback操作使用为例。 */\nimport { huks } from '@kit.UniversalKeystoreKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n/* 密钥材料。 */\nlet plainTextSize32 = new Uint8Array([\n  0xfb, 0x8b, 0x9f, 0x12, 0xa0, 0x83, 0x19, 0xbe, 0x6a, 0x6f, 0x63, 0x2a, 0x7c, 0x86, 0xba, 0xca,\n  0x64, 0x0b, 0x88, 0x96, 0xe2, 0xfa, 0x77, 0xbc, 0x71, 0xe3, 0x0f, 0x0f, 0x9e, 0x3c, 0xe5, 0xf9\n]);\n/* 1.确定密钥别名。 */\nlet keyAlias = 'AES256Alias_sample';\n\n/* 2.封装密钥属性集和密钥材料。 */\nlet properties: huks.HuksParam[] = [{\n  tag: huks.HuksTag.HUKS_TAG_ALGORITHM,\n  value: huks.HuksKeyAlg.HUKS_ALG_AES\n}, {\n  tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,\n  value: huks.HuksKeySize.HUKS_AES_KEY_SIZE_256\n}, {\n  tag: huks.HuksTag.HUKS_TAG_PURPOSE,\n  value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_ENCRYPT | huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_DECRYPT\n},\n]\nlet options: huks.HuksOptions = {\n  properties: properties,\n  inData: plainTextSize32\n};\n\n/* 3.明文导入密钥。 */\nasync function importKeyItem(keyAlias: string, huksOptions: huks.HuksOptions): Promise<boolean> {\n  console.info('promise: enter importKeyItem');\n  let ret: boolean = false;\n  try {\n    await huks.importKeyItem(keyAlias, huksOptions)\n      .then(() => {\n        console.info(`promise: importKeyItem success`);\n        ret = true;\n      }).catch((error: BusinessError) => {\n        console.error(`promise: importKeyItem failed errCode : ${error.code}, errMsg : ${error.message}`);\n      })\n  } catch (error) {\n    console.error(`promise: importKeyItem input arg invalid`);\n  }\n  return ret;\n}\n\nasync function testImport() {\n  let retImp = await importKeyItem(keyAlias, options);\n  if (retImp == false) {\n    console.error(`testImport failed`);\n    return;\n  }\n  console.info(`testImport success`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "导入rsa2048密钥对",
      children: "导入RSA2048密钥对"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* 以下以导入RSA2048密钥的Callback操作使用为例。 */\nimport { huks } from '@kit.UniversalKeystoreKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nlet rsa2048KeyPairMaterial = new Uint8Array([\n  0x01, 0x00, 0x00, 0x00, // 密钥算法(小端表示)huks.HuksKeyAlg.HUKS_ALG_RSA = 1。\n  0x00, 0x08, 0x00, 0x00, // 密钥大小（比特）：2048。\n  0x00, 0x01, 0x00, 0x00, // 模数n长度（字节）：256。\n  0x03, 0x00, 0x00, 0x00, // 公钥指数e长度（字节）：3。\n  0x00, 0x01, 0x00, 0x00, // 私钥指数d长度（字节）：256。\n  // 模数n。\n  0xc5, 0x35, 0x62, 0x48, 0xc4, 0x92, 0x87, 0x73, 0x0d, 0x42, 0x96, 0xfc, 0x7b, 0x11, 0x05, 0x06,\n  0x0f, 0x8d, 0x66, 0xc1, 0x0e, 0xad, 0x37, 0x44, 0x92, 0x95, 0x2f, 0x6a, 0x55, 0xba, 0xec, 0x1d,\n  0x54, 0x62, 0x0a, 0x4b, 0xd3, 0xc7, 0x05, 0xe4, 0x07, 0x40, 0xd9, 0xb7, 0xc2, 0x12, 0xcb, 0x9a,\n  0x90, 0xad, 0xe3, 0x24, 0xe8, 0x5e, 0xa6, 0xf8, 0xd0, 0x6e, 0xbc, 0xd1, 0x69, 0x7f, 0x6b, 0xe4,\n  0x2b, 0x4e, 0x1a, 0x65, 0xbb, 0x73, 0x88, 0x6b, 0x7c, 0xaf, 0x7e, 0xd0, 0x47, 0x26, 0xeb, 0xa5,\n  0xbe, 0xd6, 0xe8, 0xee, 0x9c, 0xa5, 0x66, 0xa5, 0xc9, 0xd3, 0x25, 0x13, 0xc4, 0x0e, 0x6c, 0xab,\n  0x50, 0xb6, 0x50, 0xc9, 0xce, 0x8f, 0x0a, 0x0b, 0xc6, 0x28, 0x69, 0xe9, 0x83, 0x69, 0xde, 0x42,\n  0x56, 0x79, 0x7f, 0xde, 0x86, 0x24, 0xca, 0xfc, 0xaa, 0xc0, 0xf3, 0xf3, 0x7f, 0x92, 0x8e, 0x8a,\n  0x12, 0x52, 0xfe, 0x50, 0xb1, 0x5e, 0x8c, 0x01, 0xce, 0xfc, 0x7e, 0xf2, 0x4f, 0x5f, 0x03, 0xfe,\n  0xa7, 0xcd, 0xa1, 0xfc, 0x94, 0x52, 0x00, 0x8b, 0x9b, 0x7f, 0x09, 0xab, 0xa8, 0xa4, 0xf5, 0xb4,\n  0xa5, 0xaa, 0xfc, 0x72, 0xeb, 0x17, 0x40, 0xa9, 0xee, 0xbe, 0x8f, 0xc2, 0xd1, 0x80, 0xc2, 0x0d,\n  0x44, 0xa9, 0x59, 0x44, 0x59, 0x81, 0x3b, 0x5d, 0x4a, 0xde, 0xfb, 0xae, 0x24, 0xfc, 0xa3, 0xd9,\n  0xbc, 0x57, 0x55, 0xc2, 0x26, 0xbc, 0x19, 0xa7, 0x9a, 0xc5, 0x59, 0xa3, 0xee, 0x5a, 0xef, 0x41,\n  0x80, 0x7d, 0xf8, 0x5e, 0xc1, 0x1d, 0x32, 0x38, 0x41, 0x5b, 0xb6, 0x92, 0xb8, 0xb7, 0x03, 0x0d,\n  0x3e, 0x59, 0x0f, 0x1c, 0xb3, 0xe1, 0x2a, 0x95, 0x1a, 0x3b, 0x50, 0x4f, 0xc4, 0x1d, 0xcf, 0x73,\n  0x7c, 0x14, 0xca, 0xe3, 0x0b, 0xa7, 0xc7, 0x1a, 0x41, 0x4a, 0xee, 0xbe, 0x1f, 0x43, 0xdd, 0xf9,\n  // 公钥指数e。\n  0x01, 0x00, 0x01,\n  // 私钥指数d。\n  0x88, 0x4b, 0x82, 0xe7, 0xe3, 0xe3, 0x99, 0x75, 0x6c, 0x9e, 0xaf, 0x17, 0x44, 0x3e, 0xd9, 0x07,\n  0xfd, 0x4b, 0xae, 0xce, 0x92, 0xc4, 0x28, 0x44, 0x5e, 0x42, 0x79, 0x08, 0xb6, 0xc3, 0x7f, 0x58,\n  0x2d, 0xef, 0xac, 0x4a, 0x07, 0xcd, 0xaf, 0x46, 0x8f, 0xb4, 0xc4, 0x43, 0xf9, 0xff, 0x5f, 0x74,\n  0x2d, 0xb5, 0xe0, 0x1c, 0xab, 0xf4, 0x6e, 0xd5, 0xdb, 0xc8, 0x0c, 0xfb, 0x76, 0x3c, 0x38, 0x66,\n  0xf3, 0x7f, 0x01, 0x43, 0x7a, 0x30, 0x39, 0x02, 0x80, 0xa4, 0x11, 0xb3, 0x04, 0xd9, 0xe3, 0x57,\n  0x23, 0xf4, 0x07, 0xfc, 0x91, 0x8a, 0xc6, 0xcc, 0xa2, 0x16, 0x29, 0xb3, 0xe5, 0x76, 0x4a, 0xa8,\n  0x84, 0x19, 0xdc, 0xef, 0xfc, 0xb0, 0x63, 0x33, 0x0b, 0xfa, 0xf6, 0x68, 0x0b, 0x08, 0xea, 0x31,\n  0x52, 0xee, 0x99, 0xef, 0x43, 0x2a, 0xbe, 0x97, 0xad, 0xb3, 0xb9, 0x66, 0x7a, 0xae, 0xe1, 0x8f,\n  0x57, 0x86, 0xe5, 0xfe, 0x14, 0x3c, 0x81, 0xd0, 0x64, 0xf8, 0x86, 0x1a, 0x0b, 0x40, 0x58, 0xc9,\n  0x33, 0x49, 0xb8, 0x99, 0xc6, 0x2e, 0x94, 0x70, 0xee, 0x09, 0x88, 0xe1, 0x5c, 0x4e, 0x6c, 0x22,\n  0x72, 0xa7, 0x2a, 0x21, 0xdd, 0xd7, 0x1d, 0xfc, 0x63, 0x15, 0x0b, 0xde, 0x06, 0x9c, 0xf3, 0x28,\n  0xf3, 0xac, 0x4a, 0xa8, 0xb5, 0x50, 0xca, 0x9b, 0xcc, 0x0a, 0x04, 0xfe, 0x3f, 0x98, 0x68, 0x81,\n  0xac, 0x24, 0x53, 0xea, 0x1f, 0x1c, 0x6e, 0x5e, 0xca, 0xe8, 0x31, 0x0d, 0x08, 0x12, 0xf3, 0x26,\n  0xf8, 0x5e, 0xeb, 0x10, 0x27, 0xae, 0xaa, 0xc3, 0xad, 0x6c, 0xc1, 0x89, 0xdb, 0x7d, 0x5a, 0x12,\n  0x55, 0xad, 0x11, 0x19, 0xa1, 0xa9, 0x8f, 0x0b, 0x6d, 0x78, 0x8d, 0x1c, 0xdf, 0xe5, 0x63, 0x82,\n  0x0b, 0x7d, 0x23, 0x04, 0xb4, 0x75, 0x8c, 0xed, 0x77, 0xfc, 0x1a, 0x85, 0x29, 0x11, 0xe0, 0x61,\n]);\n\n/* 1.确定密钥别名。 */\nlet keyAlias = 'RSA_sample';\n/* 2.封装密钥属性集和密钥材料。 */\nlet properties: huks.HuksParam[] = [{\n  tag: huks.HuksTag.HUKS_TAG_ALGORITHM,\n  value: huks.HuksKeyAlg.HUKS_ALG_RSA\n}, {\n  tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,\n  value: huks.HuksKeySize.HUKS_RSA_KEY_SIZE_2048\n}, {\n  // 此tag表示密钥导入后的用途，导入后将不可更改。\n  tag: huks.HuksTag.HUKS_TAG_PURPOSE,\n  value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_ENCRYPT | huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_DECRYPT\n}, {\n  // 此tag表示需导入的密钥类型。\n  tag: huks.HuksTag.HUKS_TAG_IMPORT_KEY_TYPE,\n  // 此value表示导入密钥对，若改为HUKS_KEY_TYPE_PUBLIC_KEY时表示仅导入公钥。\n  value: huks.HuksImportKeyType.HUKS_KEY_TYPE_KEY_PAIR\n}\n]\nlet options: huks.HuksOptions = {\n  properties: properties,\n  inData: rsa2048KeyPairMaterial\n};\n\n/* 3.明文导入密钥。 */\nasync function importKeyItem(keyAlias: string, huksOptions: huks.HuksOptions): Promise<boolean> {\n  console.info('promise: enter importKeyItem');\n  let ret: boolean = false;\n  try {\n    await huks.importKeyItem(keyAlias, huksOptions)\n      .then(() => {\n        console.info(`promise: importKeyItem success`);\n        ret = true;\n      }).catch((error: BusinessError) => {\n        console.error(`promise: importKeyItem failed errCode : ${error.code}, errMsg : ${error.message}`);\n      })\n  } catch (error) {\n    console.error(`promise: importKeyItem input arg invalid`);\n  }\n  return ret;\n}\n\nasync function testImport() {\n  let retImp = await importKeyItem(keyAlias, options);\n  if (retImp == false) {\n    console.error(`testImport failed`);\n    return;\n  }\n  console.info(`testImport success`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "导入x25519密钥公钥",
      children: "导入X25519密钥公钥"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* 以下以导入X25519密钥的Callback操作使用为例。 */\nimport { huks } from '@kit.UniversalKeystoreKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n// X25519的公钥数据。X25519密钥对中的私钥和公钥都是32字节（256位），关于算法原理请自行参考相关密码学资料。\nlet x25519KeyPubMaterial = new Uint8Array([\n  0x30, 0x2A, 0x30, 0x05, 0x06, 0x03, 0x2B, 0x65, 0x6E, 0x03, 0x21, 0x00, 0xD2, 0x36, 0x9E, 0xCF,\n  0xF0, 0x61, 0x5B, 0x73, 0xCE, 0x4F, 0xF0, 0x40, 0x2B, 0x89, 0x18, 0x3E, 0x06, 0x33, 0x60, 0xC6\n]);\n\n/* 1.确定密钥别名。 */\nlet keyAlias = 'X25519_Pub_import_sample';\n/* 2.封装密钥属性集和密钥材料。 */\nlet properties: huks.HuksParam[] = [{\n  tag: huks.HuksTag.HUKS_TAG_ALGORITHM,\n  value: huks.HuksKeyAlg.HUKS_ALG_X25519\n}, {\n  tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,\n  value: huks.HuksKeySize.HUKS_CURVE25519_KEY_SIZE_256\n}, {\n  // 此tag表示密钥导入后的用途，导入后将不可更改。\n  tag: huks.HuksTag.HUKS_TAG_PURPOSE,\n  value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_VERIFY\n}, {\n  // 此tag表示需导入的密钥类型。\n  tag: huks.HuksTag.HUKS_TAG_IMPORT_KEY_TYPE,\n  // 此value表示导入密钥的公钥，若改为HUKS_KEY_TYPE_KEY_PAIR时表示导入密钥对。\n  value: huks.HuksImportKeyType.HUKS_KEY_TYPE_PUBLIC_KEY\n},\n]\nlet options: huks.HuksOptions = {\n  properties: properties,\n  inData: x25519KeyPubMaterial\n};\n\n/* 3.明文导入密钥。 */\nasync function importKeyItem(keyAlias: string, huksOptions: huks.HuksOptions): Promise<boolean> {\n  console.info('promise: enter importKeyItem');\n  let ret: boolean = false;\n  try {\n    await huks.importKeyItem(keyAlias, huksOptions)\n      .then(() => {\n        console.info(`promise: importKeyItem success`);\n        ret = true;\n      }).catch((error: BusinessError) => {\n        console.error(`promise: importKeyItem failed errCode : ${error.code}, errMsg : ${error.message}`);\n      })\n  } catch (error) {\n    console.error(`promise: importKeyItem input arg invalid`);\n  }\n  return ret;\n}\n\nasync function testImport() {\n  let retImp = await importKeyItem(keyAlias, options);\n  if (retImp == false) {\n    console.error(`testImport failed`);\n    return;\n  }\n  console.info(`testImport success`);\n}\n"
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
        children: "import { huks } from '@kit.UniversalKeystoreKit';\nimport { BusinessError } from \"@kit.BasicServicesKit\";\n\nlet keyAlias = 'AES256Alias_sample';\nlet keyProperties: Array<huks.HuksParam> = [{\n    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,\n    value: huks.HuksKeyAlg.HUKS_ALG_AES\n  }\n]\nlet huksOptions: huks.HuksOptions = {\n  properties: keyProperties, // 非空填充。\n  inData: new Uint8Array(new Array()) // 非空填充。\n}\n\nasync function isKeyItemExist(keyAlias: string, options: huks.HuksOptions): Promise<boolean> {\n  console.info(`promise: enter isKeyItemExist success`);\n  let ret: boolean = false;\n  try {\n    await huks.isKeyItemExist(keyAlias, options)\n      .then((data) => {\n        console.info(`promise: isKeyItemExist success, data = ${data}`);\n        ret = true;\n      }).catch((error: BusinessError) => {\n        console.error(`promise: isKeyItemExist success, errCode : ${error.code}, errMsg : ${error.message}`);\n      })\n  } catch (error) {\n    console.error(`promise: isKeyItemExist input arg invalid`);\n  }\n  return ret;\n}\n\nasync function testImportKeyExist() {\n  let retExist = await isKeyItemExist(keyAlias, huksOptions);\n  if (retExist == false) {\n    console.error(`testImportKeyExist failed`);\n    return;\n  }\n  console.info(`testImportKeyExist success`);\n}\n"
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