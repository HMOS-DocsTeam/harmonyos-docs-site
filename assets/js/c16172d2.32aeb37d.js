"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["101542"], {
311171(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_huks_kit_huks_local_key_management_huks_key_generation_import_huks_key_import_huks_import_wrapped_key_ndk_huks_import_wrapped_key_ndk_md_c16_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-huks-kit-huks-local-key-management-huks-key-generation-import-huks-key-import-huks-import-wrapped-key-ndk-huks-import-wrapped-key-ndk-md-c16.json
var site_docs_system_security_huks_kit_huks_local_key_management_huks_key_generation_import_huks_key_import_huks_import_wrapped_key_ndk_huks_import_wrapped_key_ndk_md_c16_namespaceObject = JSON.parse('{"id":"system-security/huks-kit/huks-local-key-management/huks-key-generation-import/huks-key-import/huks-import-wrapped-key-ndk/huks-import-wrapped-key-ndk","title":"安全导入密钥(C/C++)","description":"以安全导入ECDH密钥对为例，涉及业务侧加密密钥的密钥生成、协商等操作不在本示例中体现。","source":"@site/docs/system-security/huks-kit/huks-local-key-management/huks-key-generation-import/huks-key-import/huks-import-wrapped-key-ndk/huks-import-wrapped-key-ndk.md","sourceDirName":"system-security/huks-kit/huks-local-key-management/huks-key-generation-import/huks-key-import/huks-import-wrapped-key-ndk","slug":"/system-security/huks-kit/huks-local-key-management/huks-key-generation-import/huks-key-import/huks-import-wrapped-key-ndk/","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/huks-key-generation-import/huks-key-import/huks-import-wrapped-key-ndk/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"安全导入密钥(C/C++)","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-import-wrapped-key-ndk","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"安全导入密钥(ArkTS)","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/huks-key-generation-import/huks-key-import/huks-import-wrapped-key-arkts/"},"next":{"title":"密钥使用介绍及通用流程","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-key-use-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/huks-kit/huks-local-key-management/huks-key-generation-import/huks-key-import/huks-import-wrapped-key-ndk/huks-import-wrapped-key-ndk.md


const frontMatter = {
	title: '安全导入密钥(C/C++)',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-import-wrapped-key-ndk',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '安全导入密钥(C/C++)';

const assets = {

};



const toc = [{
  "value": "在CMake脚本中链接相关动态库",
  "id": "在cmake脚本中链接相关动态库",
  "level": 2
}, {
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
        id: "安全导入密钥cc",
        children: "安全导入密钥(C/C++)"
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
      id: "在cmake脚本中链接相关动态库",
      children: "在CMake脚本中链接相关动态库"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "target_link_libraries(entry PUBLIC libhuks_ndk.z.so)\n"
      })
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
      children: "构造安全导入密钥的参数集"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"huks/native_huks_api.h\"\n#include \"huks/native_huks_param.h\"\n#include \"napi/native_api.h\"\n#include <algorithm>\n\n#define MAX_MALLOC_SIZE 0x800000\n\nOH_Huks_Result InitParamSet(struct OH_Huks_ParamSet **paramSet, const struct OH_Huks_Param *params,\n                            uint32_t paramCount)\n{\n    OH_Huks_Result ret = OH_Huks_InitParamSet(paramSet);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        return ret;\n    }\n    ret = OH_Huks_AddParams(*paramSet, params, paramCount);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        OH_Huks_FreeParamSet(paramSet);\n        return ret;\n    }\n    ret = OH_Huks_BuildParamSet(paramSet);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        OH_Huks_FreeParamSet(paramSet);\n        return ret;\n    }\n    return ret;\n}\nstruct HksImportWrappedKeyTestParams {\n    // server key, for real.\n    struct OH_Huks_Blob *wrappingKeyAlias;\n    struct OH_Huks_ParamSet *genWrappingKeyParamSet;\n    uint32_t publicKeySize;\n    struct OH_Huks_Blob *callerKeyAlias;\n    struct OH_Huks_ParamSet *genCallerKeyParamSet;\n    struct OH_Huks_Blob *callerKekAlias;\n    struct OH_Huks_Blob *callerKek;\n    struct OH_Huks_ParamSet *importCallerKekParamSet;\n    struct OH_Huks_Blob *callerAgreeKeyAlias;\n    struct OH_Huks_ParamSet *agreeParamSet;\n    struct OH_Huks_ParamSet *importWrappedKeyParamSet;\n    struct OH_Huks_Blob *importedKeyAlias;\n    struct OH_Huks_Blob *importedPlainKey;\n    uint32_t keyMaterialLen;\n};\nstatic const uint32_t IV_SIZE = 16;\nstatic uint8_t IV[IV_SIZE] = \"bababababababab\"; // 此处仅为测试数据，实际使用时该值每次应该不同。\nstatic const uint32_t WRAPPED_KEY_IV_SIZE = 16;\nstatic uint8_t WRAPPED_KEY_IV[IV_SIZE] = \"bababababababab\"; // 此处仅为测试数据，实际使用时该值每次应该不同。\nstatic const uint32_t AAD_SIZE = 16;\nstatic uint8_t AAD[AAD_SIZE] = \"abababababababa\"; // 此处仅为测试数据，实际使用时该值每次应该不同。\nstatic const uint32_t NONCE_SIZE = 12;\nstatic uint8_t NONCE[NONCE_SIZE] = \"hahahahahah\"; // 此处仅为测试数据，实际使用时该值每次应该不同。\nstatic const uint32_t AEAD_TAG_SIZE = 16;\nstatic const uint32_t X25519_256_SIZE = 256;\nstatic struct OH_Huks_Blob g_wrappingKeyAliasAes256 = {.size = (uint32_t)strlen(\"test_wrappingKey_x25519_aes256\"),\n                                                       .data = (uint8_t *)\"test_wrappingKey_x25519_aes256\"};\nstatic struct OH_Huks_Blob g_callerKeyAliasAes256 = {.size = (uint32_t)strlen(\"test_caller_key_x25519_aes256\"),\n                                                     .data = (uint8_t *)\"test_caller_key_x25519_aes256\"};\nstatic struct OH_Huks_Blob g_callerKekAliasAes256 = {.size = (uint32_t)strlen(\"test_caller_kek_x25519_aes256\"),\n                                                     .data = (uint8_t *)\"test_caller_kek_x25519_aes256\"};\nstatic struct OH_Huks_Blob g_callerAes256Kek = {.size = (uint32_t)strlen(\"This is kek to encrypt plain key\"),\n                                                .data = (uint8_t *)\"This is kek to encrypt plain key\"};\nstatic struct OH_Huks_Blob g_callerAgreeKeyAliasAes256 = {.size =\n                                                              (uint32_t)strlen(\"test_caller_agree_key_x25519_aes256\"),\n                                                          .data = (uint8_t *)\"test_caller_agree_key_x25519_aes256\"};\nstatic struct OH_Huks_Blob g_importedKeyAliasAes256 = {.size = (uint32_t)strlen(\"test_import_key_x25519_aes256\"),\n                                                       .data = (uint8_t *)\"test_import_key_x25519_aes256\"};\nstatic struct OH_Huks_Blob g_importedAes256PlainKey = {.size = (uint32_t)strlen(\"This is plain key to be imported\"),\n                                                       .data = (uint8_t *)\"This is plain key to be imported\"};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "static struct OH_Huks_Param g_importWrappedAes256Params[] = {\n    {.tag = OH_HUKS_TAG_ALGORITHM, .uint32Param = OH_HUKS_ALG_AES},\n    {.tag = OH_HUKS_TAG_PURPOSE, .uint32Param = OH_HUKS_KEY_PURPOSE_ENCRYPT | OH_HUKS_KEY_PURPOSE_DECRYPT},\n    {.tag = OH_HUKS_TAG_KEY_SIZE, .uint32Param = OH_HUKS_AES_KEY_SIZE_256},\n    {.tag = OH_HUKS_TAG_PADDING, .uint32Param = OH_HUKS_PADDING_NONE},\n    {.tag = OH_HUKS_TAG_BLOCK_MODE, .uint32Param = OH_HUKS_MODE_GCM},\n    {.tag = OH_HUKS_TAG_DIGEST, .uint32Param = OH_HUKS_DIGEST_NONE},\n    {.tag = OH_HUKS_TAG_UNWRAP_ALGORITHM_SUITE, .uint32Param = OH_HUKS_UNWRAP_SUITE_X25519_AES_256_GCM_NOPADDING},\n    {.tag = OH_HUKS_TAG_ASSOCIATED_DATA,\n     .blob = {.size = AAD_SIZE, .data = (uint8_t *)AAD}}, // 此处仅为测试数据，实际使用时该值应与调用者信息相关。\n    {.tag = OH_HUKS_TAG_NONCE,\n     .blob = {.size = NONCE_SIZE, .data = (uint8_t *)NONCE}}}; // 此处仅为测试数据，实际使用时该值每次应该不同。\nstatic const uint32_t g_x25519PubKeySize = 32;\nstatic struct OH_Huks_Param g_genWrappingKeyParams[] = {\n    {.tag = OH_HUKS_TAG_ALGORITHM, .uint32Param = OH_HUKS_ALG_X25519},\n    {.tag = OH_HUKS_TAG_PURPOSE, .uint32Param = OH_HUKS_KEY_PURPOSE_UNWRAP},\n    {.tag = OH_HUKS_TAG_KEY_SIZE, .uint32Param = OH_HUKS_CURVE25519_KEY_SIZE_256}};\nstatic struct OH_Huks_Param g_genCallerX25519Params[] = {\n    {.tag = OH_HUKS_TAG_ALGORITHM, .uint32Param = OH_HUKS_ALG_X25519},\n    {.tag = OH_HUKS_TAG_PURPOSE, .uint32Param = OH_HUKS_KEY_PURPOSE_AGREE},\n    {.tag = OH_HUKS_TAG_KEY_SIZE, .uint32Param = OH_HUKS_CURVE25519_KEY_SIZE_256}};\nstatic struct OH_Huks_Param g_importParamsCallerKek[] = {\n    {.tag = OH_HUKS_TAG_ALGORITHM, .uint32Param = OH_HUKS_ALG_AES},\n    {.tag = OH_HUKS_TAG_PURPOSE, .uint32Param = OH_HUKS_KEY_PURPOSE_ENCRYPT},\n    {.tag = OH_HUKS_TAG_KEY_SIZE, .uint32Param = OH_HUKS_AES_KEY_SIZE_256},\n    {.tag = OH_HUKS_TAG_PADDING, .uint32Param = OH_HUKS_PADDING_NONE},\n    {.tag = OH_HUKS_TAG_BLOCK_MODE, .uint32Param = OH_HUKS_MODE_GCM},\n    {.tag = OH_HUKS_TAG_DIGEST, .uint32Param = OH_HUKS_DIGEST_NONE},\n    {.tag = OH_HUKS_TAG_IV,\n     .blob = {.size = WRAPPED_KEY_IV_SIZE,\n              .data = (uint8_t *)WRAPPED_KEY_IV}}}; // 此处仅为测试数据，实际使用时该值每次应该不同。\nstatic struct OH_Huks_Param g_callerAgreeParams[] = {\n    {.tag = OH_HUKS_TAG_ALGORITHM, .uint32Param = OH_HUKS_ALG_X25519},\n    {.tag = OH_HUKS_TAG_PURPOSE, .uint32Param = OH_HUKS_KEY_PURPOSE_AGREE},\n    {.tag = OH_HUKS_TAG_KEY_SIZE, .uint32Param = OH_HUKS_CURVE25519_KEY_SIZE_256}};\nstatic struct OH_Huks_Param g_aesKekEncryptParams[] = {\n    {.tag = OH_HUKS_TAG_ALGORITHM, .uint32Param = OH_HUKS_ALG_AES},\n    {.tag = OH_HUKS_TAG_PURPOSE, .uint32Param = OH_HUKS_KEY_PURPOSE_ENCRYPT},\n    {.tag = OH_HUKS_TAG_KEY_SIZE, .uint32Param = OH_HUKS_AES_KEY_SIZE_256},\n    {.tag = OH_HUKS_TAG_PADDING, .uint32Param = OH_HUKS_PADDING_NONE},\n    {.tag = OH_HUKS_TAG_BLOCK_MODE, .uint32Param = OH_HUKS_MODE_GCM},\n    {.tag = OH_HUKS_TAG_DIGEST, .uint32Param = OH_HUKS_DIGEST_NONE},\n    {.tag = OH_HUKS_TAG_ASSOCIATED_DATA,\n     .blob = {.size = AAD_SIZE, .data = (uint8_t *)AAD}}, // 此处仅为测试数据，实际使用时该值应与调用者信息相关。\n    {.tag = OH_HUKS_TAG_NONCE,\n     .blob = {.size = NONCE_SIZE, .data = (uint8_t *)NONCE}}}; // 此处仅为测试数据，实际使用时该值每次应该不同。\nstatic struct OH_Huks_Param g_importAgreeKeyParams[] = {\n    {.tag = OH_HUKS_TAG_ALGORITHM, .uint32Param = OH_HUKS_ALG_AES},\n    {.tag = OH_HUKS_TAG_PURPOSE, .uint32Param = OH_HUKS_KEY_PURPOSE_ENCRYPT},\n    {.tag = OH_HUKS_TAG_KEY_SIZE, .uint32Param = OH_HUKS_AES_KEY_SIZE_256},\n    {.tag = OH_HUKS_TAG_PADDING, .uint32Param = OH_HUKS_PADDING_NONE},\n    {.tag = OH_HUKS_TAG_BLOCK_MODE, .uint32Param = OH_HUKS_MODE_GCM},\n    {.tag = OH_HUKS_TAG_DIGEST, .uint32Param = OH_HUKS_DIGEST_NONE},\n    {.tag = OH_HUKS_TAG_IV,\n     .blob = {.size = IV_SIZE, .data = (uint8_t *)IV}}}; // 此处仅为测试数据，实际使用时该值每次应该不同。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "安全导入密钥的核心函数实现"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_Huks_Result HuksAgreeKey(const struct OH_Huks_ParamSet *paramSet, const struct OH_Huks_Blob *keyAlias,\n                            const struct OH_Huks_Blob *peerPublicKey, struct OH_Huks_Blob *agreedKey)\n{\n    uint8_t temp[10] = {0};\n    struct OH_Huks_Blob inData = {sizeof(temp), temp};\n    uint8_t handleU[sizeof(uint64_t)] = {0};\n    struct OH_Huks_Blob handle = {sizeof(uint64_t), handleU};\n    OH_Huks_Result ret = OH_Huks_InitSession(keyAlias, paramSet, &handle, nullptr);\n    if (ret.errorCode != (int32_t)OH_HUKS_SUCCESS) {\n        return ret;\n    }\n    uint8_t outDataU[1024] = {0};\n    struct OH_Huks_Blob outDataUpdate = {1024, outDataU};\n    ret = OH_Huks_UpdateSession(&handle, paramSet, peerPublicKey, &outDataUpdate);\n    if (ret.errorCode != (int32_t)OH_HUKS_SUCCESS) {\n        return ret;\n    }\n    ret = OH_Huks_FinishSession(&handle, paramSet, &inData, agreedKey);\n    if (ret.errorCode != (int32_t)OH_HUKS_SUCCESS) {\n        return ret;\n    }\n    return ret;\n}\n\nOH_Huks_Result MallocAndCheckBlobData(struct OH_Huks_Blob *blob, const uint32_t blobSize)\n{\n    struct OH_Huks_Result ret;\n    ret.errorCode = OH_HUKS_SUCCESS;\n    if (blobSize == 0 || blobSize > MAX_MALLOC_SIZE) {\n        ret.errorCode = OH_HUKS_ERR_CODE_INTERNAL_ERROR;\n    }\n    blob->data = (uint8_t *)malloc(blobSize);\n    if (blob->data == NULL) {\n        ret.errorCode = OH_HUKS_ERR_CODE_INTERNAL_ERROR;\n    }\n    return ret;\n}\n\nstatic const uint32_t TIMES = 4;\nstatic const uint32_t MAX_UPDATE_SIZE = 64;\nstatic const uint32_t MAX_OUTDATA_SIZE = MAX_UPDATE_SIZE * TIMES;\n#define HUKS_FREE_BLOB(blob)                                                                                           \\\n    do {                                                                                                               \\\n        if ((blob).data != nullptr) {                                                                                  \\\n            free((blob).data);                                                                                         \\\n            (blob).data = nullptr;                                                                                     \\\n        }                                                                                                              \\\n        (blob).size = 0;                                                                                               \\\n    } while (0)\n#define OH_HUKS_KEY_BYTES(keySize) (((keySize) + 7) / 8)\nstatic OH_Huks_Result HksEncryptLoopUpdate(const struct OH_Huks_Blob *handle, const struct OH_Huks_ParamSet *paramSet,\n                                           const struct OH_Huks_Blob *inData, struct OH_Huks_Blob *outData)\n{\n    struct OH_Huks_Result ret;\n    ret.errorCode = OH_HUKS_SUCCESS;\n    struct OH_Huks_Blob inDataSeg = *inData;\n    uint8_t *lastPtr = inData->data + inData->size - 1;\n    struct OH_Huks_Blob outDataSeg = {MAX_OUTDATA_SIZE, NULL};\n    uint8_t *cur = outData->data;\n    outData->size = 0;\n    inDataSeg.size = MAX_UPDATE_SIZE;\n    bool isFinished = false;\n    while (inDataSeg.data <= lastPtr) {\n        if (inDataSeg.data + MAX_UPDATE_SIZE <= lastPtr) {\n            outDataSeg.size = MAX_OUTDATA_SIZE;\n        } else {\n            isFinished = true;\n            inDataSeg.size = lastPtr - inDataSeg.data + 1;\n            break;\n        }\n        if (MallocAndCheckBlobData(&outDataSeg, outDataSeg.size).errorCode != (int32_t)OH_HUKS_SUCCESS) {\n            ret.errorCode = OH_HUKS_ERR_CODE_INTERNAL_ERROR;\n            return ret;\n        }\n        ret = OH_Huks_UpdateSession(handle, paramSet, &inDataSeg, &outDataSeg);\n        if (ret.errorCode != (int32_t)OH_HUKS_SUCCESS) {\n            free(outDataSeg.data);\n            return ret;\n        }\n        std::copy(outDataSeg.data, outDataSeg.data + outDataSeg.size, cur);\n        cur += outDataSeg.size;\n        outData->size += outDataSeg.size;\n        free(outDataSeg.data);\n        if ((isFinished == false) && (inDataSeg.data + MAX_UPDATE_SIZE > lastPtr)) {\n            ret.errorCode = OH_HUKS_ERR_CODE_INTERNAL_ERROR;\n            return ret;\n        }\n        inDataSeg.data += MAX_UPDATE_SIZE;\n    }\n    struct OH_Huks_Blob outDataFinish = {inDataSeg.size * TIMES, NULL};\n    if (MallocAndCheckBlobData(&outDataFinish, outDataFinish.size).errorCode != (int32_t)OH_HUKS_SUCCESS) {\n        ret.errorCode = OH_HUKS_ERR_CODE_INTERNAL_ERROR;\n        return ret;\n    }\n    ret = OH_Huks_FinishSession(handle, paramSet, &inDataSeg, &outDataFinish);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        free(outDataFinish.data);\n        return ret;\n    }\n    std::copy(outDataFinish.data, outDataFinish.data + outDataFinish.size, cur);\n    outData->size += outDataFinish.size;\n    free(outDataFinish.data);\n    return ret;\n}\nOH_Huks_Result HuksEncrypt(const struct OH_Huks_Blob *key, const struct OH_Huks_ParamSet *paramSet,\n                           const struct OH_Huks_Blob *plainText, struct OH_Huks_Blob *cipherText)\n{\n    uint8_t handle[sizeof(uint64_t)] = {0};\n    struct OH_Huks_Blob handleBlob = {sizeof(uint64_t), handle};\n    OH_Huks_Result ret = OH_Huks_InitSession(key, paramSet, &handleBlob, nullptr);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        return ret;\n    }\n    ret = HksEncryptLoopUpdate(&handleBlob, paramSet, plainText, cipherText);\n    return ret;\n}\nstatic OH_Huks_Result BuildWrappedKeyData(struct OH_Huks_Blob **blobArray, uint32_t size,\n                                          struct OH_Huks_Blob *outData)\n{\n    uint32_t totalLength = size * sizeof(uint32_t);\n    struct OH_Huks_Result ret;\n    ret.errorCode = OH_HUKS_SUCCESS;\n    /* 计算大小 */\n    for (uint32_t i = 0; i < size; ++i) {\n        totalLength += blobArray[i]->size;\n    }\n    struct OH_Huks_Blob outBlob = {0, nullptr};\n    outBlob.size = totalLength;\n    ret = MallocAndCheckBlobData(&outBlob, outBlob.size);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        return ret;\n    }\n    uint32_t offset = 0;\n    /* 拷贝数据 */\n    for (uint32_t i = 0; i < size; ++i) {\n        if (totalLength - offset >= sizeof(blobArray[i]->size)) {\n            std::copy(reinterpret_cast<uint8_t *>(&blobArray[i]->size),\n                      reinterpret_cast<uint8_t *>(&blobArray[i]->size) + sizeof(blobArray[i]->size),\n                      outBlob.data + offset);\n        } else {\n            ret.errorCode = OH_HUKS_ERR_CODE_INTERNAL_ERROR;\n            return ret;\n        }\n        offset += sizeof(blobArray[i]->size);\n        if (totalLength - offset >= blobArray[i]->size) {\n            std::copy(blobArray[i]->data, blobArray[i]->data + blobArray[i]->size, outBlob.data + offset);\n        } else {\n            ret.errorCode = OH_HUKS_ERR_CODE_INTERNAL_ERROR;\n            return ret;\n        }\n        offset += blobArray[i]->size;\n    }\n    outData->size = outBlob.size;\n    outData->data = outBlob.data;\n    return ret;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "static OH_Huks_Result CheckParamsValid(const struct HksImportWrappedKeyTestParams *params)\n{\n    struct OH_Huks_Result ret;\n    ret.errorCode = OH_HUKS_SUCCESS;\n    if (params == nullptr) {\n        ret.errorCode = OH_HUKS_ERR_CODE_ILLEGAL_ARGUMENT;\n        return ret;\n    }\n    if (params->wrappingKeyAlias == nullptr || params->genWrappingKeyParamSet == nullptr ||\n        params->callerKeyAlias == nullptr || params->genCallerKeyParamSet == nullptr ||\n        params->callerKekAlias == nullptr || params->callerKek == nullptr ||\n        params->importCallerKekParamSet == nullptr || params->callerAgreeKeyAlias == nullptr ||\n        params->agreeParamSet == nullptr || params->importWrappedKeyParamSet == nullptr ||\n        params->importedKeyAlias == nullptr || params->importedPlainKey == nullptr) {\n        ret.errorCode = OH_HUKS_ERR_CODE_ILLEGAL_ARGUMENT;\n        return ret;\n    }\n    return ret;\n}\n\nstatic OH_Huks_Result GenerateAndExportHuksPublicKey(const struct HksImportWrappedKeyTestParams *params,\n                                                     struct OH_Huks_Blob *huksPublicKey)\n{\n    OH_Huks_Result ret = OH_Huks_GenerateKeyItem(params->wrappingKeyAlias, params->genWrappingKeyParamSet, nullptr);\n    if (ret.errorCode != (int32_t)OH_HUKS_SUCCESS) {\n        return ret;\n    }\n    huksPublicKey->size = params->publicKeySize;\n    ret = MallocAndCheckBlobData(huksPublicKey, huksPublicKey->size);\n    if (ret.errorCode != (int32_t)OH_HUKS_SUCCESS) {\n        return ret;\n    }\n    ret = OH_Huks_ExportPublicKeyItem(params->wrappingKeyAlias, nullptr, huksPublicKey);\n    return ret;\n}\nstatic OH_Huks_Result GenerateAndExportCallerPublicKey(const struct HksImportWrappedKeyTestParams *params,\n                                                       struct OH_Huks_Blob *callerSelfPublicKey)\n{\n    OH_Huks_Result ret = OH_Huks_GenerateKeyItem(params->callerKeyAlias, params->genCallerKeyParamSet, nullptr);\n    if (ret.errorCode != (int32_t)OH_HUKS_SUCCESS) {\n        return ret;\n    }\n    callerSelfPublicKey->size = params->publicKeySize;\n    ret = MallocAndCheckBlobData(callerSelfPublicKey, callerSelfPublicKey->size);\n    if (ret.errorCode != (int32_t)OH_HUKS_SUCCESS) {\n        return ret;\n    }\n    ret = OH_Huks_ExportPublicKeyItem(params->callerKeyAlias, params->genWrappingKeyParamSet, callerSelfPublicKey);\n    return ret;\n}\n\nstatic OH_Huks_Result ImportKekAndAgreeSharedSecret(const struct HksImportWrappedKeyTestParams *params,\n                                                    const struct OH_Huks_Blob *huksPublicKey,\n                                                    struct OH_Huks_Blob *outSharedKey)\n{\n    OH_Huks_Result ret =\n        OH_Huks_ImportKeyItem(params->callerKekAlias, params->importCallerKekParamSet, params->callerKek);\n    if (ret.errorCode != (int32_t)OH_HUKS_SUCCESS) {\n        return ret;\n    }\n    ret = MallocAndCheckBlobData(outSharedKey, outSharedKey->size);\n    if (ret.errorCode != (int32_t)OH_HUKS_SUCCESS) {\n        return ret;\n    }\n    ret = HuksAgreeKey(params->agreeParamSet, params->callerKeyAlias, huksPublicKey, outSharedKey);\n    if (ret.errorCode != (int32_t)OH_HUKS_SUCCESS) {\n        return ret;\n    }\n    struct OH_Huks_ParamSet *importAgreeKeyParams = nullptr;\n    ret = InitParamSet(&importAgreeKeyParams, g_importAgreeKeyParams,\n                       sizeof(g_importAgreeKeyParams) / sizeof(OH_Huks_Param));\n    if (ret.errorCode != (int32_t)OH_HUKS_SUCCESS) {\n        return ret;\n    }\n    ret = OH_Huks_ImportKeyItem(params->callerAgreeKeyAlias, importAgreeKeyParams, outSharedKey);\n    OH_Huks_FreeParamSet(&importAgreeKeyParams);\n    return ret;\n}\nstatic OH_Huks_Result EncryptImportedPlainKeyAndKek(const struct HksImportWrappedKeyTestParams *params,\n                                                    struct OH_Huks_Blob *plainCipherText,\n                                                    struct OH_Huks_Blob *kekCipherText)\n{\n    struct OH_Huks_ParamSet *encryptParamSet = nullptr;\n    OH_Huks_Result ret =\n        InitParamSet(&encryptParamSet, g_aesKekEncryptParams, sizeof(g_aesKekEncryptParams) / sizeof(OH_Huks_Param));\n    if (ret.errorCode != (int32_t)OH_HUKS_SUCCESS) {\n        return ret;\n    }\n    ret = HuksEncrypt(params->callerKekAlias, encryptParamSet, params->importedPlainKey, plainCipherText);\n    if (ret.errorCode != (int32_t)OH_HUKS_SUCCESS) {\n        return ret;\n    }\n    ret = HuksEncrypt(params->callerAgreeKeyAlias, encryptParamSet, params->callerKek, kekCipherText);\n    OH_Huks_FreeParamSet(&encryptParamSet);\n    return ret;\n}\nstatic OH_Huks_Result ImportWrappedKey(const struct HksImportWrappedKeyTestParams *params,\n                                       struct OH_Huks_Blob *plainCipher, struct OH_Huks_Blob *kekCipherText,\n                                       struct OH_Huks_Blob *peerPublicKey, struct OH_Huks_Blob *wrappedKeyData)\n{\n    struct OH_Huks_Blob commonAad = {.size = AAD_SIZE, .data = reinterpret_cast<uint8_t *>(AAD)};\n    struct OH_Huks_Blob commonNonce = {.size = NONCE_SIZE, .data = reinterpret_cast<uint8_t *>(NONCE)};\n    struct OH_Huks_Blob keyMaterialLen = {.size = sizeof(uint32_t), .data = (uint8_t *)&params->keyMaterialLen};\n    /* 从密文中拷贝AEAD的tag并缩小其大小 */\n    const uint32_t tagSize = AEAD_TAG_SIZE;\n    uint8_t kekTagBuf[tagSize] = {0};\n    struct OH_Huks_Blob kekTag = {.size = tagSize, .data = kekTagBuf};\n    std::copy(plainCipher->data + (plainCipher->size - tagSize),\n              plainCipher->data + (plainCipher->size - tagSize) + tagSize, kekTag.data);\n    plainCipher->size -= tagSize;\n    /* 从密钥加密密钥的密文中拷贝AEAD的tag并缩小其大小 */\n    uint8_t agreeKeyTagBuf[tagSize] = {0};\n    struct OH_Huks_Blob agreeKeyTag = {.size = tagSize, .data = agreeKeyTagBuf};\n    std::copy(kekCipherText->data + (kekCipherText->size - tagSize),\n              kekCipherText->data + (kekCipherText->size - tagSize) + tagSize, agreeKeyTagBuf);\n    kekCipherText->size -= tagSize;\n    struct OH_Huks_Blob *blobArray[] = {peerPublicKey, &commonAad,   &commonNonce, &agreeKeyTag,    kekCipherText,\n                                        &commonAad,    &commonNonce, &kekTag,      &keyMaterialLen, plainCipher};\n    OH_Huks_Result ret = BuildWrappedKeyData(blobArray, OH_HUKS_IMPORT_WRAPPED_KEY_TOTAL_BLOBS, wrappedKeyData);\n    if (ret.errorCode != (int32_t)OH_HUKS_SUCCESS) {\n        return ret;\n    }\n    struct OH_Huks_Param *purpose = nullptr;\n    ret = OH_Huks_GetParam(params->importWrappedKeyParamSet, OH_HUKS_TAG_PURPOSE, &purpose);\n    if (ret.errorCode != (int32_t)OH_HUKS_SUCCESS) {\n        return ret;\n    }\n    ret = OH_Huks_ImportWrappedKeyItem(params->importedKeyAlias, params->wrappingKeyAlias,\n                                       params->importWrappedKeyParamSet, wrappedKeyData);\n    return ret;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "安全导入密钥的完整流程实现"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_Huks_Result HksImportWrappedKeyTestCommonCase(const struct HksImportWrappedKeyTestParams *params)\n{\n    OH_Huks_Result ret = CheckParamsValid(params);\n    if (ret.errorCode != (int32_t)OH_HUKS_SUCCESS) {\n        return ret;\n    }\n    struct OH_Huks_Blob huksPublicKey = {0, nullptr};\n    struct OH_Huks_Blob callerSelfPublicKey = {0, nullptr};\n    struct OH_Huks_Blob outSharedKey = {.size = OH_HUKS_KEY_BYTES(OH_HUKS_AES_KEY_SIZE_256), .data = nullptr};\n    struct OH_Huks_Blob wrappedKeyData = {0, nullptr};\n    uint8_t plainKeyCipherBuffer[OH_HUKS_MAX_KEY_SIZE] = {0};\n    struct OH_Huks_Blob plainCipherText = {OH_HUKS_MAX_KEY_SIZE, plainKeyCipherBuffer};\n    uint8_t kekCipherTextBuffer[OH_HUKS_MAX_KEY_SIZE] = {0};\n    struct OH_Huks_Blob kekCipherText = {OH_HUKS_MAX_KEY_SIZE, kekCipherTextBuffer};\n    /* 模拟安全导入密钥场景，设备A为远端设备（导入设备），设备B为本端设备（被导入设备） */\n    do {\n        /**\n         * 1. 设备A将待导入密钥转换成HUKS密钥材料格式To_Import_Key（仅针对非对称密钥，若待导入密钥是对称密钥则可省略此步骤），\n         *   本示例使用g_importedAes256PlainKey（对称密钥）作为模拟\n         */\n        /**\n         * 2. 设备B生成一个加密导入用途的、用于协商的非对称密钥对Wrapping_Key（公钥Wrapping_Pk，私钥Wrapping_Sk），\n         * 导出Wrapping_Key公钥Wrapping_Pk存放在变量huksPublicKey中\n         */\n        ret = GenerateAndExportHuksPublicKey(params, &huksPublicKey);\n        if (ret.errorCode != (int32_t)OH_HUKS_SUCCESS) {\n            break;\n        }\n        /**\n         * 3. 设备A使用和设备B同样的算法，生成一个用于协商的非对称密钥对Caller_Key（公钥Caller_Pk，私钥Caller_Sk），\n         * 导出Caller_Key公钥Caller_Pk存放在变量callerSelfPublicKey中\n         */\n        ret = GenerateAndExportCallerPublicKey(params, &callerSelfPublicKey);\n        if (ret.errorCode != (int32_t)OH_HUKS_SUCCESS) {\n            break;\n        }\n        /**\n         * 4. 设备A生成一个对称密钥Caller_Kek，该密钥后续将用于加密To_Import_Key\n         * 设备A基于Caller_Key的私钥Caller_Sk和设备B Wrapping_Key的公钥Wrapping_Pk，协商出Shared_Key\n         */\n        ret = ImportKekAndAgreeSharedSecret(params, &huksPublicKey, &outSharedKey);\n        if (ret.errorCode != (int32_t)OH_HUKS_SUCCESS) {\n            break;\n        }\n        /**\n         * 5. 设备A使用Caller_Kek加密To_Import_Key，生成To_Import_Key_Enc\n         * 设备A使用Shared_Key加密Caller_Kek，生成Caller_Kek_Enc\n         */\n        ret = EncryptImportedPlainKeyAndKek(params, &plainCipherText, &kekCipherText);\n        if (ret.errorCode != (int32_t)OH_HUKS_SUCCESS) {\n            break;\n        }\n        /**\n         * 6. 设备A封装Caller_Pk、To_Import_Key_Enc、Caller_Kek_Enc等安全导入的材料并发送给设备B。\n         * 本示例作为变量存放在callerSelfPublicKey，plainCipherText，kekCipherText\n         * 7. 设备B导入封装的加密密钥材料\n         */\n        ret = ImportWrappedKey(params, &plainCipherText, &kekCipherText, &callerSelfPublicKey, &wrappedKeyData);\n    } while (0);\n    /* 8. 设备A、B删除用于安全导入的密钥 */\n    HUKS_FREE_BLOB(huksPublicKey);\n    HUKS_FREE_BLOB(callerSelfPublicKey);\n    HUKS_FREE_BLOB(outSharedKey);\n    HUKS_FREE_BLOB(wrappedKeyData);\n    return ret;\n}\n\nvoid HksClearKeysForWrappedKeyTest(const struct HksImportWrappedKeyTestParams *params)\n{\n    OH_Huks_Result ret = CheckParamsValid(params);\n    if (ret.errorCode != (int32_t)OH_HUKS_SUCCESS) {\n        return;\n    }\n    (void)OH_Huks_DeleteKeyItem(params->wrappingKeyAlias, nullptr);\n    (void)OH_Huks_DeleteKeyItem(params->callerKeyAlias, nullptr);\n    (void)OH_Huks_DeleteKeyItem(params->callerKekAlias, nullptr);\n    (void)OH_Huks_DeleteKeyItem(params->callerAgreeKeyAlias, nullptr);\n    (void)OH_Huks_DeleteKeyItem(params->importedKeyAlias, nullptr);\n}\n\nstatic OH_Huks_Result InitCommonTestParamsAndDoImport(struct HksImportWrappedKeyTestParams *importWrappedKeyTestParams,\n                                                      const struct OH_Huks_Param *importedKeyParamSetArray,\n                                                      uint32_t arraySize)\n{\n    struct OH_Huks_ParamSet *genX25519KeyParamSet = nullptr;\n    struct OH_Huks_ParamSet *genCallerKeyParamSet = nullptr;\n    struct OH_Huks_ParamSet *callerImportParamsKek = nullptr;\n    struct OH_Huks_ParamSet *agreeParamSet = nullptr;\n    struct OH_Huks_ParamSet *importPlainKeyParams = nullptr;\n    OH_Huks_Result ret;\n    do {\n        ret = InitParamSet(&genX25519KeyParamSet, g_genWrappingKeyParams,\n                           sizeof(g_genWrappingKeyParams) / sizeof(OH_Huks_Param));\n        if (ret.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n        importWrappedKeyTestParams->genWrappingKeyParamSet = genX25519KeyParamSet;\n        importWrappedKeyTestParams->publicKeySize = g_x25519PubKeySize;\n        ret = InitParamSet(&genCallerKeyParamSet, g_genCallerX25519Params,\n                           sizeof(g_genCallerX25519Params) / sizeof(OH_Huks_Param));\n        if (ret.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n        importWrappedKeyTestParams->genCallerKeyParamSet = genCallerKeyParamSet;\n        ret = InitParamSet(&callerImportParamsKek, g_importParamsCallerKek,\n                           sizeof(g_importParamsCallerKek) / sizeof(OH_Huks_Param));\n        if (ret.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n        importWrappedKeyTestParams->importCallerKekParamSet = callerImportParamsKek;\n        ret = InitParamSet(&agreeParamSet, g_callerAgreeParams, sizeof(g_callerAgreeParams) / sizeof(OH_Huks_Param));\n        if (ret.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n        importWrappedKeyTestParams->agreeParamSet = agreeParamSet;\n        ret = InitParamSet(&importPlainKeyParams, importedKeyParamSetArray, arraySize);\n        if (ret.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n        importWrappedKeyTestParams->importWrappedKeyParamSet = importPlainKeyParams;\n        ret = HksImportWrappedKeyTestCommonCase(importWrappedKeyTestParams);\n    } while (0);\n    OH_Huks_FreeParamSet(&genX25519KeyParamSet);\n    OH_Huks_FreeParamSet(&genCallerKeyParamSet);\n    OH_Huks_FreeParamSet(&callerImportParamsKek);\n    OH_Huks_FreeParamSet(&agreeParamSet);\n    OH_Huks_FreeParamSet(&importPlainKeyParams);\n    return ret;\n}\nstatic napi_value NAPI_Global_importWrappedKey(napi_env env, napi_callback_info info)\n{\n    struct HksImportWrappedKeyTestParams importWrappedKeyTestParams001 = {0};\n    importWrappedKeyTestParams001.wrappingKeyAlias = &g_wrappingKeyAliasAes256;\n    importWrappedKeyTestParams001.keyMaterialLen = g_importedAes256PlainKey.size;\n    importWrappedKeyTestParams001.callerKeyAlias = &g_callerKeyAliasAes256;\n    importWrappedKeyTestParams001.callerKekAlias = &g_callerKekAliasAes256;\n    importWrappedKeyTestParams001.callerKek = &g_callerAes256Kek;\n    importWrappedKeyTestParams001.callerAgreeKeyAlias = &g_callerAgreeKeyAliasAes256;\n    importWrappedKeyTestParams001.importedKeyAlias = &g_importedKeyAliasAes256;\n    importWrappedKeyTestParams001.importedPlainKey = &g_importedAes256PlainKey;\n    OH_Huks_Result ohResult =\n        InitCommonTestParamsAndDoImport(&importWrappedKeyTestParams001, g_importWrappedAes256Params,\n                                        sizeof(g_importWrappedAes256Params) / sizeof(struct OH_Huks_Param));\n    HksClearKeysForWrappedKeyTest(&importWrappedKeyTestParams001);\n    napi_value ret;\n    napi_create_int32(env, ohResult.errorCode, &ret);\n    return ret;\n}\n\nstatic napi_value IsKeyExist(napi_env env, napi_callback_info info)\n{\n    /* 1.指定密钥别名 */\n    struct OH_Huks_Blob keyAlias = {\n        (uint32_t)strlen(\"test_key\"),\n        (uint8_t *)\"test_key\"\n    };\n\n    /* 2.调用OH_Huks_IsKeyItemExist判断密钥是否存在 */\n    struct OH_Huks_Result ohResult = OH_Huks_IsKeyItemExist(&keyAlias, NULL);\n    napi_value ret;\n    napi_create_int32(env, ohResult.errorCode, &ret);\n    return ret;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "调测验证",
      children: "调测验证"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-api-h/capi-native-huks-api-h#oh_huks_iskeyitemexist",
        children: "OH_Huks_IsKeyItemExist"
      }), "验证密钥是否存在，如密钥存在即表示密钥导入成功。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"huks/native_huks_api.h\"\n#include \"huks/native_huks_param.h\"\n#include \"napi/native_api.h\"\n#include <string.h>\nstatic napi_value IsKeyExist(napi_env env, napi_callback_info info)\n{\n    /* 1.指定密钥别名 */\n    struct OH_Huks_Blob keyAlias = {\n        (uint32_t)strlen(\"test_key\"),\n        (uint8_t *)\"test_key\"\n    };\n    \n    /* 2.调用OH_Huks_IsKeyItemExist判断密钥是否存在 */\n    struct OH_Huks_Result ohResult = OH_Huks_IsKeyItemExist(&keyAlias, NULL);\n    if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n        // 失败。\n    } else {\n        // 成功。\n    }\n    napi_value ret;\n    napi_create_int32(env, ohResult.errorCode, &ret);\n    return ret;\n}\n"
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