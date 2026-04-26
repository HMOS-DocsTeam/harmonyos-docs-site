"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["524809"], {
594750(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkdata_data_reliability_security_native_data_encryption_native_data_encryption_md_f63_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkdata-data-reliability-security-native-data-encryption-native-data-encryption-md-f63.json
var site_docs_arkdata_data_reliability_security_native_data_encryption_native_data_encryption_md_f63_namespaceObject = JSON.parse('{"id":"arkdata/data-reliability-security/native-data-encryption/native-data-encryption","title":"数据库加密 (C/C++)","description":"场景介绍","source":"@site/docs/arkdata/data-reliability-security/native-data-encryption/native-data-encryption.md","sourceDirName":"arkdata/data-reliability-security/native-data-encryption","slug":"/arkdata/data-reliability-security/native-data-encryption/","permalink":"/harmonyos-docs-site/arkdata/data-reliability-security/native-data-encryption/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"数据库加密 (C/C++)","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/native-data-encryption","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"数据库加密 (ArkTS)","permalink":"/harmonyos-docs-site/arkdata/data-reliability-security/data-encryption/"},"next":{"title":"基于设备分类和数据分级的访问控制 (ArkTS)","permalink":"/harmonyos-docs-site/arkdata/data-reliability-security/access-control-by-device-and-data-level/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkdata/data-reliability-security/native-data-encryption/native-data-encryption.md


const frontMatter = {
	title: '数据库加密 (C/C++)',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/native-data-encryption',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '数据库加密 (C/C++)';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "数据库加密-cc",
        children: "数据库加密 (C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了增强数据库的安全性，数据库提供了安全的加密功能，以有效保护存储的内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过数据库加密，实现了数据库数据存储的保密性和完整性要求，使得数据库以密文方式存储并在密态方式下工作，确保了数据安全。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["加密后的数据库只能通过接口进行访问，无法通过其它方式打开数据库文件。数据库的加密属性在创建数据库时确认，无法变更；关系型数据库从API version 22开始，支持通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-relational-store-h/capi-relational-store-h#oh_rdb_rekeyex",
        children: "OH_Rdb_RekeyEx"
      }), "接口调整其加密属性。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前仅支持使用关系型数据库（C/C++）进行数据库加密。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "关系型数据库通过调用OH_Rdb_SetEncrypted方法来设置是否加密。isEncrypted参数为true时表示加密，为false时表示不加密，默认不加密。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当isEncrypted为true时，可调用OH_Rdb_SetCryptoParam方法设置自定义的加密/解密密钥和算法等参数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "CMakeLists.txt中添加以下lib。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "libnative_rdb_ndk.z.so\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入头文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <cstring>\n#include \"database/rdb/relational_store.h\"\n#include \"hilog/log.h\"\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "针对是否配置自定义加密/解密参数，有如下两种场景："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "场景1：不配置自定义加密/解密参数，此时会使用默认的配置进行数据库的加密/解密。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "OH_Rdb_ConfigV2 *config = OH_Rdb_CreateConfig();\nOH_Rdb_SetDatabaseDir(config, \"/data/storage/el2/database\");\nOH_Rdb_SetArea(config, RDB_SECURITY_AREA_EL2);\nOH_Rdb_SetBundleName(config, \"com.example.nativedemo\");\nOH_Rdb_SetStoreName(config, \"RdbTest.db\");\nOH_Rdb_SetSecurityLevel(config, OH_Rdb_SecurityLevel::S3);\n// 设置为使用加密方式创建或打开数据库\nOH_Rdb_SetEncrypted(config, true);\nint errCode = 0;\n// 获取OH_Rdb_Store实例\nOH_Rdb_Store *store = OH_Rdb_CreateOrOpen(config, &errCode);\nOH_Rdb_CloseStore(store);\nstore = nullptr;\nOH_Rdb_DestroyConfig(config);\nconfig = nullptr;\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "场景2：使用OH_Rdb_SetCryptoParam接口配置加密参数，此时会使用开发者自定义的密钥和算法参数进行数据库的加密/解密。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "如果开发者不关心加密算法及参数，使用默认加密配置即可，无需创建和配置自定义加密参数。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "OH_Rdb_ConfigV2 *config = OH_Rdb_CreateConfig();\nOH_Rdb_SetDatabaseDir(config, \"/data/storage/el2/database\");\nOH_Rdb_SetArea(config, RDB_SECURITY_AREA_EL2);\nOH_Rdb_SetStoreName(config, \"RdbTestConfigEncryptParam.db\");\nOH_Rdb_SetSecurityLevel(config, OH_Rdb_SecurityLevel::S3);\nOH_Rdb_SetBundleName(config, \"com.example.nativedemo\");\n// 设置为使用加密方式创建或打开数据库\nOH_Rdb_SetEncrypted(config, true);\n// 创建自定义加密参数对象\nOH_Rdb_CryptoParam *cryptoParam = OH_Rdb_CreateCryptoParam();\n    \n// 示例中使用硬编码密钥仅用于演示目的， 实际应用中应使用安全的密钥管理服务\nuint8_t key[6] = {0x31, 0x32, 0x33, 0x34, 0x35, 0x36};\n// 使用指定的密钥打开加密数据库。不指定则由数据库负责生成并保存密钥，并使用生成的密钥。\nconst int32_t length = 6;\nOH_Crypto_SetEncryptionKey(cryptoParam, key, length);\n// 秘钥信息使用完之后要清空\nfor (size_t i = 0; i < sizeof(key); i++) {\n    key[i] = 0;\n}\n// 设置KDF算法迭代次数。迭代次数必须大于零。不指定或等于零则使用默认值10000和默认加密算法。\nconst int64_t iteration = 64000;\nOH_Crypto_SetIteration(cryptoParam, iteration);\n// 设置加密算法，如不设置默认为AES_256_GCM\nOH_Crypto_SetEncryptionAlgo(cryptoParam, Rdb_EncryptionAlgo::RDB_AES_256_CBC);\n// 设置HMAC算法，如不设置默认为SHA256\nOH_Crypto_SetHmacAlgo(cryptoParam, RDB_HMAC_SHA512);\n// 设置KDF算法，如不设置默认为SHA256\nOH_Crypto_SetKdfAlgo(cryptoParam, RDB_KDF_SHA512);\n// 设置打开加密数据库时使用的页大小，须为1024到65536之间的整数且为2的幂，如不设置默认为1024\nconst int64_t pageSize = 4096;\nOH_Crypto_SetCryptoPageSize(cryptoParam, pageSize);\n// 设置自定义加密参数\nOH_Rdb_SetCryptoParam(config, cryptoParam);\n    \nint errCode = 0;\nOH_Rdb_Store *store = OH_Rdb_CreateOrOpen(config, &errCode);\n// 销毁自定义加密参数对象\nOH_Rdb_DestroyCryptoParam(cryptoParam);\ncryptoParam = nullptr;\nOH_Rdb_CloseStore(store);\nstore = nullptr;\nOH_Rdb_DestroyConfig(config);\nconfig = nullptr;\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "从API version 22开始，支持更换数据库密钥和加密参数，如果开发者需要更换已创建的加密数据库的密钥或者加密参数，可以使用OH_Rdb_RekeyEx进行更换。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "针对更换数据库密钥和加密参数，有如下场景："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(569758)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "加密参数变更需谨慎，在完成OH_Rdb_RekeyEx操作后，必须使用新的参数来打开数据库，否则可能会导致开库失败。如果rekey过程因设备断电等原因中断，操作可能成功也可能失败。因此，建议业务方做好兜底保障（使用OH_Rdb_RekeyEx前后的参数进行冗余重试），确保不会错误地判断数据库的状态，从而避免出现数据库无法打开的问题。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "场景1：原数据库为默认参数加密数据库，更换密钥和加密参数。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "OH_Rdb_ConfigV2 *config = OH_Rdb_CreateConfig();\nOH_Rdb_SetDatabaseDir(config, \"/data/storage/el3/database\");\nOH_Rdb_SetArea(config, RDB_SECURITY_AREA_EL3);\nOH_Rdb_SetStoreName(config, \"RdbTest.db\");\nOH_Rdb_SetBundleName(config, \"com.example.nativedemo\");\nOH_Rdb_SetModuleName(config, \"entry\");\nOH_Rdb_SetSecurityLevel(config, OH_Rdb_SecurityLevel::S3);\nOH_Rdb_SetEncrypted(config, true);\nint errCode = 0;\nOH_Rdb_Store *store = OH_Rdb_CreateOrOpen(config, &errCode);\nif (store == NULL) {\n    OH_LOG_ERROR(LOG_APP, \"Create store failed, errCode: %{public}d\", errCode);\n    OH_Rdb_DestroyConfig(config);\n    config = NULL;\n    return;\n}\nOH_Rdb_CryptoParam *crypto = OH_Rdb_CreateCryptoParam();\nif (crypto == NULL) {\n    OH_LOG_ERROR(LOG_APP, \"Create crypto failed.\");\n    OH_Rdb_DestroyConfig(config);\n    OH_Rdb_CloseStore(store);\n    config = NULL;\n    store = NULL;\n    return;\n}\nOH_Crypto_SetEncryptionAlgo(crypto, RDB_AES_256_CBC);\nOH_Crypto_SetHmacAlgo(crypto, RDB_HMAC_SHA512);\nOH_Crypto_SetKdfAlgo(crypto, RDB_KDF_SHA512);\nOH_Crypto_SetCryptoPageSize(crypto, 2048);\nerrCode = OH_Rdb_RekeyEx(store, crypto);\n\nif (errCode != 0) {\n    OH_LOG_ERROR(LOG_APP, \"RekeyEx failed, errCode: %{public}d\", errCode);\n}\n// 在完成OH_Rdb_RekeyEx操作后，如果后续需要重新开库时必须使用新的参数来打开数据库\nOH_Rdb_DestroyConfig(config);\nOH_Rdb_CloseStore(store);\nOH_Rdb_DestroyCryptoParam(crypto);\nconfig = NULL;\nstore = NULL;\ncrypto = NULL;\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "场景2：原数据库为自定义参数加密数据库，更换自定义密钥和加密参数。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "OH_Rdb_ConfigV2 *config = OH_Rdb_CreateConfig();\nOH_Rdb_SetDatabaseDir(config, \"/data/storage/el3/database\");\nOH_Rdb_SetArea(config, RDB_SECURITY_AREA_EL3);\nOH_Rdb_SetStoreName(config, \"RdbTest.db\");\nOH_Rdb_SetBundleName(config, \"com.example.nativedemo\");\nOH_Rdb_SetModuleName(config, \"entry\");\nOH_Rdb_SetSecurityLevel(config, OH_Rdb_SecurityLevel::S3);\nOH_Rdb_SetEncrypted(config, true);\nOH_Rdb_CryptoParam *crypto = OH_Rdb_CreateCryptoParam();\nif (crypto == NULL) {\n    OH_LOG_ERROR(LOG_APP, \"Create crypto failed.\");\n    OH_Rdb_DestroyConfig(config);\n    config = NULL;\n    return;\n}\nuint8_t encryptionKey[] = \"12345678\";\nOH_Crypto_SetEncryptionKey(crypto, encryptionKey, sizeof(encryptionKey));\nmemset(encryptionKey, 0, sizeof(encryptionKey));\nOH_Rdb_SetCryptoParam(config, crypto);\n\nint errCode = 0;\nOH_Rdb_Store *store = OH_Rdb_CreateOrOpen(config, &errCode);\nif (store == NULL) {\n    OH_LOG_ERROR(LOG_APP, \"Create store failed, errCode: %{public}d\", errCode);\n    OH_Rdb_DestroyConfig(config);\n    config = NULL;\n    return;\n}\nOH_Rdb_CryptoParam *newCryptoParam = OH_Rdb_CreateCryptoParam();\nif (newCryptoParam == NULL) {\n    OH_LOG_ERROR(LOG_APP, \"Create newCryptoParam failed.\");\n    OH_Rdb_DestroyConfig(config);\n    OH_Rdb_CloseStore(store);\n    OH_Rdb_DestroyCryptoParam(crypto);\n    config = NULL;\n    store = NULL;\n    crypto = NULL;\n    return;\n}\n// 注意：示例中使用硬编码密钥仅用于演示目的，实际应用中应使用安全的密钥管理服务，使用后应该及时清零\nuint8_t key[] = \"87654321\";\nOH_Crypto_SetEncryptionKey(newCryptoParam, key, sizeof(key));\nmemset(key, 0, sizeof(key));\nOH_Crypto_SetEncryptionAlgo(newCryptoParam, RDB_AES_256_CBC);\nOH_Crypto_SetHmacAlgo(newCryptoParam, RDB_HMAC_SHA512);\nOH_Crypto_SetKdfAlgo(newCryptoParam, RDB_KDF_SHA512);\nOH_Crypto_SetCryptoPageSize(newCryptoParam, 4096);\nerrCode = OH_Rdb_RekeyEx(store, newCryptoParam);\n\nif (errCode != 0) {\n    OH_LOG_ERROR(LOG_APP, \"RekeyEx failed, errCode: %{public}d\", errCode);\n}\n// 在完成OH_Rdb_RekeyEx操作后，如果后续需要重新开库时必须使用新的参数来打开数据库\nOH_Rdb_DestroyConfig(config);\nOH_Rdb_CloseStore(store);\nOH_Rdb_DestroyCryptoParam(crypto);\nOH_Rdb_DestroyCryptoParam(newCryptoParam);\nconfig = NULL;\nstore = NULL;\ncrypto = NULL;\nnewCryptoParam = NULL;\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "场景3：原数据库为默认参数加密库，更换自定义密钥和加密参数。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "OH_Rdb_ConfigV2 *config = OH_Rdb_CreateConfig();\nOH_Rdb_SetDatabaseDir(config, \"/data/storage/el3/database\");\nOH_Rdb_SetArea(config, RDB_SECURITY_AREA_EL3);\nOH_Rdb_SetStoreName(config, \"RdbTest.db\");\nOH_Rdb_SetBundleName(config, \"com.example.nativedemo\");\nOH_Rdb_SetModuleName(config, \"entry\");\nOH_Rdb_SetSecurityLevel(config, OH_Rdb_SecurityLevel::S3);\nOH_Rdb_SetEncrypted(config, true);\nint errCode = 0;\nOH_Rdb_Store *store = OH_Rdb_CreateOrOpen(config, &errCode);\nif (store == NULL) {\n    OH_LOG_ERROR(LOG_APP, \"Create store failed, errCode: %{public}d\", errCode);\n    OH_Rdb_DestroyConfig(config);\n    config = NULL;\n    return;\n}\nOH_Rdb_CryptoParam *crypto = OH_Rdb_CreateCryptoParam();\nif (crypto == NULL) {\n    OH_LOG_ERROR(LOG_APP, \"Create crypto failed.\");\n    OH_Rdb_CloseStore(store);\n    OH_Rdb_DestroyConfig(config);\n    config = NULL;\n    store = NULL;\n    return;\n}\n// 注意：示例中使用硬编码密钥仅用于演示目的，实际应用中应使用安全的密钥管理服务，使用后应该及时清零\nuint8_t key[] = \"12345678\";\nerrCode = OH_Crypto_SetEncryptionKey(crypto, key, sizeof(key));\nmemset(key, 0, sizeof(key));\nOH_Crypto_SetEncryptionAlgo(crypto, RDB_AES_256_CBC);\nOH_Crypto_SetHmacAlgo(crypto, RDB_HMAC_SHA512);\nOH_Crypto_SetKdfAlgo(crypto, RDB_KDF_SHA512);\nOH_Crypto_SetCryptoPageSize(crypto, 2048);\nerrCode = OH_Rdb_RekeyEx(store, crypto);\n\nif (errCode != 0) {\n    OH_LOG_ERROR(LOG_APP, \"RekeyEx failed, errCode: %{public}d\", errCode);\n}\n// 在完成OH_Rdb_RekeyEx操作后，如果后续需要重新开库时必须使用新的参数来打开数据库\nOH_Rdb_DestroyConfig(config);\nOH_Rdb_CloseStore(store);\nOH_Rdb_DestroyCryptoParam(crypto);\nconfig = NULL;\nstore = NULL;\ncrypto = NULL;\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "场景4：原数据库为自定义参数加密数据库，更换数据库生成密钥和自定义加密参数。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "OH_Rdb_ConfigV2 *config = OH_Rdb_CreateConfig();\nOH_Rdb_SetDatabaseDir(config, \"/data/storage/el3/database\");\nOH_Rdb_SetArea(config, RDB_SECURITY_AREA_EL3);\nOH_Rdb_SetStoreName(config, \"RdbTest.db\");\nOH_Rdb_SetBundleName(config, \"com.example.nativedemo\");\nOH_Rdb_SetModuleName(config, \"entry\");\nOH_Rdb_SetSecurityLevel(config, OH_Rdb_SecurityLevel::S3);\nOH_Rdb_SetEncrypted(config, true);\nOH_Rdb_CryptoParam *crypto = OH_Rdb_CreateCryptoParam();\nif (crypto == NULL) {\n    OH_LOG_ERROR(LOG_APP, \"Create crypto failed.\");\n    OH_Rdb_DestroyConfig(config);\n    config = NULL;\n    return;\n}\n// 注意：示例中使用硬编码密钥仅用于演示目的，实际应用中应使用安全的密钥管理服务，使用后应该及时清零\nuint8_t encryptionKey[] = \"12345678\";\nOH_Crypto_SetEncryptionKey(crypto, encryptionKey, sizeof(encryptionKey));\nmemset(encryptionKey, 0, sizeof(encryptionKey));\nOH_Rdb_SetCryptoParam(config, crypto);\n\nint errCode = 0;\nOH_Rdb_Store *store = OH_Rdb_CreateOrOpen(config, &errCode);\nif (store == NULL) {\n    OH_LOG_ERROR(LOG_APP, \"Create store failed, errCode: %{public}d\", errCode);\n    OH_Rdb_DestroyConfig(config);\n    config = NULL;\n    return;\n}\nOH_Rdb_CryptoParam *newCryptoParam = OH_Rdb_CreateCryptoParam();\nif (newCryptoParam == NULL) {\n    OH_LOG_ERROR(LOG_APP, \"Create newCryptoParam failed.\");\n    OH_Rdb_DestroyConfig(config);\n    OH_Rdb_CloseStore(store);\n    OH_Rdb_DestroyCryptoParam(crypto);\n    config = NULL;\n    store = NULL;\n    crypto = NULL;\n    return;\n}\nOH_Crypto_SetEncryptionAlgo(newCryptoParam, RDB_AES_256_CBC);\nOH_Crypto_SetHmacAlgo(newCryptoParam, RDB_HMAC_SHA512);\nOH_Crypto_SetKdfAlgo(newCryptoParam, RDB_KDF_SHA512);\nOH_Crypto_SetCryptoPageSize(newCryptoParam, 4096);\nerrCode = OH_Rdb_RekeyEx(store, newCryptoParam);\n\nif (errCode != 0) {\n    OH_LOG_ERROR(LOG_APP, \"RekeyEx failed, errCode: %{public}d\", errCode);\n}\n// 在完成OH_Rdb_RekeyEx操作后，如果后续需要重新开库时必须使用新的参数来打开数据库\nOH_Rdb_DestroyConfig(config);\nOH_Rdb_CloseStore(store);\nOH_Rdb_DestroyCryptoParam(crypto);\nOH_Rdb_DestroyCryptoParam(newCryptoParam);\nconfig = NULL;\nstore = NULL;\ncrypto = NULL;\nnewCryptoParam = NULL;\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "场景5：原数据库为加密数据库，更换为非加密数据库。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "OH_Rdb_ConfigV2 *config = OH_Rdb_CreateConfig();\nOH_Rdb_SetDatabaseDir(config, \"/data/storage/el3/database\");\nOH_Rdb_SetArea(config, RDB_SECURITY_AREA_EL3);\nOH_Rdb_SetStoreName(config, \"RdbTest.db\");\nOH_Rdb_SetBundleName(config, \"com.example.nativedemo\");\nOH_Rdb_SetModuleName(config, \"entry\");\nOH_Rdb_SetSecurityLevel(config, OH_Rdb_SecurityLevel::S3);\nOH_Rdb_SetEncrypted(config, true);\n\nint errCode = 0;\nOH_Rdb_Store *store = OH_Rdb_CreateOrOpen(config, &errCode);\nif (store == NULL) {\n    OH_LOG_ERROR(LOG_APP, \"Create store failed, errCode: %{public}d\", errCode);\n    OH_Rdb_DestroyConfig(config);\n    config = NULL;\n    return;\n}\nOH_Rdb_CryptoParam *crypto = OH_Rdb_CreateCryptoParam();\nif (crypto == NULL) {\n    OH_LOG_ERROR(LOG_APP, \"Create crypto failed.\");\n    OH_Rdb_DestroyConfig(config);\n    OH_Rdb_CloseStore(store);\n    config = NULL;\n    store = NULL;\n    return;\n}\nOH_Crypto_SetEncryptionAlgo(crypto, RDB_PLAIN_TEXT);\nerrCode = OH_Rdb_RekeyEx(store, crypto);\n\nif (errCode != 0) {\n    OH_LOG_ERROR(LOG_APP, \"RekeyEx failed, errCode: %{public}d\", errCode);\n}\n// 在完成OH_Rdb_RekeyEx操作后，如果后续需要重新开库时必须使用新的参数来打开数据库\nOH_Rdb_DestroyConfig(config);\nOH_Rdb_CloseStore(store);\nOH_Rdb_DestroyCryptoParam(crypto);\nconfig = NULL;\nstore = NULL;\ncrypto = NULL;\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "场景6：原数据库为非加密数据库，更换为加密数据库。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "OH_Rdb_ConfigV2 *config = OH_Rdb_CreateConfig();\nOH_Rdb_SetDatabaseDir(config, \"/data/storage/el3/database\");\nOH_Rdb_SetArea(config, RDB_SECURITY_AREA_EL3);\nOH_Rdb_SetStoreName(config, \"RdbTest.db\");\nOH_Rdb_SetBundleName(config, \"com.example.nativedemo\");\nOH_Rdb_SetModuleName(config, \"entry\");\nOH_Rdb_SetSecurityLevel(config, OH_Rdb_SecurityLevel::S3);\nOH_Rdb_SetEncrypted(config, false);\n\nint errCode = 0;\nOH_Rdb_Store *store = OH_Rdb_CreateOrOpen(config, &errCode);\nif (store == NULL) {\n    OH_LOG_ERROR(LOG_APP, \"Create store failed, errCode: %{public}d\", errCode);\n    OH_Rdb_DestroyConfig(config);\n    config = NULL;\n    return;\n}\nOH_Rdb_CryptoParam *crypto = OH_Rdb_CreateCryptoParam();\nif (crypto == NULL) {\n    OH_LOG_ERROR(LOG_APP, \"Create crypto failed.\");\n    OH_Rdb_DestroyConfig(config);\n    OH_Rdb_CloseStore(store);\n    config = NULL;\n    store = NULL;\n    return;\n}\nOH_Crypto_SetEncryptionAlgo(crypto, RDB_AES_256_CBC);\nOH_Crypto_SetHmacAlgo(crypto, RDB_HMAC_SHA512);\nOH_Crypto_SetKdfAlgo(crypto, RDB_KDF_SHA512);\nOH_Crypto_SetCryptoPageSize(crypto, 2048);\nerrCode = OH_Rdb_RekeyEx(store, crypto);\n\nif (errCode != 0) {\n    OH_LOG_ERROR(LOG_APP, \"RekeyEx failed, errCode: %{public}d\", errCode);\n}\n// 在完成OH_Rdb_RekeyEx操作后，如果后续需要重新开库时必须使用新的参数来打开数据库\nOH_Rdb_DestroyConfig(config);\nOH_Rdb_CloseStore(store);\nOH_Rdb_DestroyCryptoParam(crypto);\nconfig = NULL;\nstore = NULL;\ncrypto = NULL;\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
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
569758(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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