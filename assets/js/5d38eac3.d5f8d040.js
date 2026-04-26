"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["166138"], {
954908(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_huks_kit_huks_local_key_management_huks_key_attestation_huks_key_anon_attestation_ndk_huks_key_anon_attestation_ndk_md_5d3_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-huks-kit-huks-local-key-management-huks-key-attestation-huks-key-anon-attestation-ndk-huks-key-anon-attestation-ndk-md-5d3.json
var site_docs_system_security_huks_kit_huks_local_key_management_huks_key_attestation_huks_key_anon_attestation_ndk_huks_key_anon_attestation_ndk_md_5d3_namespaceObject = JSON.parse('{"id":"system-security/huks-kit/huks-local-key-management/huks-key-attestation/huks-key-anon-attestation-ndk/huks-key-anon-attestation-ndk","title":"匿名密钥证明(C/C++)","description":"在使用本功能时，需确保网络通畅。","source":"@site/docs/system-security/huks-kit/huks-local-key-management/huks-key-attestation/huks-key-anon-attestation-ndk/huks-key-anon-attestation-ndk.md","sourceDirName":"system-security/huks-kit/huks-local-key-management/huks-key-attestation/huks-key-anon-attestation-ndk","slug":"/system-security/huks-kit/huks-local-key-management/huks-key-attestation/huks-key-anon-attestation-ndk/","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/huks-key-attestation/huks-key-anon-attestation-ndk/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"匿名密钥证明(C/C++)","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-key-anon-attestation-ndk","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"匿名密钥证明(ArkTS)","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/huks-key-attestation/huks-key-anon-attestation-arkts/"},"next":{"title":"应用真实性证明简介","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/device-attestation/device-attestation-intro/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/huks-kit/huks-local-key-management/huks-key-attestation/huks-key-anon-attestation-ndk/huks-key-anon-attestation-ndk.md


const frontMatter = {
	title: '匿名密钥证明(C/C++)',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-key-anon-attestation-ndk',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '匿名密钥证明(C/C++)';

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
        id: "匿名密钥证明cc",
        children: "匿名密钥证明(C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在使用本功能时，需确保网络通畅。"
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
        children: ["指定密钥别名，密钥别名命名规范参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/huks-kit/huks-local-key-management/huks-key-generation-import/huks-key-generation/huks-key-generation-overview",
          children: "密钥生成介绍及算法规格"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["初始化参数集：通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-param-h/capi-native-huks-param-h#oh_huks_initparamset",
          children: "OH_Huks_InitParamSet"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-param-h/capi-native-huks-param-h#oh_huks_addparams",
          children: "OH_Huks_AddParams"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-param-h/capi-native-huks-param-h#oh_huks_buildparamset",
          children: "OH_Huks_BuildParamSet"
        }), "构造参数集paramSet，参数集中必须包含", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-type-h/capi-native-huks-type-h#oh_huks_keyalg",
          children: "OH_Huks_KeyAlg"
        }), "，", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-type-h/capi-native-huks-type-h#oh_huks_keysize",
          children: "OH_Huks_KeySize"
        }), "，", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-type-h/capi-native-huks-type-h#oh_huks_keypurpose",
          children: "OH_Huks_KeyPurpose"
        }), "属性。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["将密钥别名与参数集作为参数传入", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-api-h/capi-native-huks-api-h#oh_huks_anonattestkeyitem",
          children: "OH_Huks_AnonAttestKeyItem"
        }), "方法中，即可证明密钥。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发案例",
      children: "开发案例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"huks/native_huks_api.h\"\n#include \"huks/native_huks_param.h\"\n#include \"napi/native_api.h\"\n#include <cstring>\n\nOH_Huks_Result InitParamSet(struct OH_Huks_ParamSet **paramSet, const struct OH_Huks_Param *params,\n                            uint32_t paramCount)\n{\n    OH_Huks_Result ret = OH_Huks_InitParamSet(paramSet);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        return ret;\n    }\n    ret = OH_Huks_AddParams(*paramSet, params, paramCount);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        OH_Huks_FreeParamSet(paramSet);\n        return ret;\n    }\n    ret = OH_Huks_BuildParamSet(paramSet);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        OH_Huks_FreeParamSet(paramSet);\n        return ret;\n    }\n    return ret;\n}\n\nstatic uint32_t g_size = 4096;\nstatic uint32_t CERT_COUNT = 4;\nvoid FreeCertChain(struct OH_Huks_CertChain *certChain, const uint32_t pos)\n{\n    if (certChain == nullptr || certChain->certs == nullptr) {\n        return;\n    }\n    for (uint32_t j = 0; j < pos; j++) {\n        if (certChain->certs[j].data != nullptr) {\n            free(certChain->certs[j].data);\n            certChain->certs[j].data = nullptr;\n        }\n    }\n    if (certChain->certs != nullptr) {\n        free(certChain->certs);\n        certChain->certs = nullptr;\n    }\n}\n\nint32_t ConstructDataToCertChain(struct OH_Huks_CertChain *certChain)\n{\n    if (certChain == nullptr) {\n        return OH_HUKS_ERR_CODE_ILLEGAL_ARGUMENT;\n    }\n    certChain->certsCount = CERT_COUNT;\n\n    certChain->certs = (struct OH_Huks_Blob *)malloc(sizeof(struct OH_Huks_Blob) * (certChain->certsCount));\n    if (certChain->certs == nullptr) {\n        return OH_HUKS_ERR_CODE_INTERNAL_ERROR;\n    }\n    for (uint32_t i = 0; i < certChain->certsCount; i++) {\n        certChain->certs[i].size = g_size;\n        certChain->certs[i].data = (uint8_t *)malloc(certChain->certs[i].size);\n        if (certChain->certs[i].data == nullptr) {\n            FreeCertChain(certChain, i);\n            return OH_HUKS_ERR_CODE_ILLEGAL_ARGUMENT;\n        }\n    }\n    return 0;\n}\n\nstatic struct OH_Huks_Param g_genAnonAttestParams[] = {\n    {.tag = OH_HUKS_TAG_ALGORITHM, .uint32Param = OH_HUKS_ALG_RSA},\n    {.tag = OH_HUKS_TAG_KEY_SIZE, .uint32Param = OH_HUKS_RSA_KEY_SIZE_2048},\n    {.tag = OH_HUKS_TAG_PURPOSE, .uint32Param = OH_HUKS_KEY_PURPOSE_VERIFY},\n    {.tag = OH_HUKS_TAG_DIGEST, .uint32Param = OH_HUKS_DIGEST_SHA256},\n    {.tag = OH_HUKS_TAG_PADDING, .uint32Param = OH_HUKS_PADDING_PSS},\n    {.tag = OH_HUKS_TAG_BLOCK_MODE, .uint32Param = OH_HUKS_MODE_ECB},\n};\n\n#define CHALLENGE_DATA \"hi_challenge_data\"\nstatic struct OH_Huks_Blob g_challenge = {sizeof(CHALLENGE_DATA), (uint8_t *)CHALLENGE_DATA};\nstatic napi_value AnonAttestKey(napi_env env, napi_callback_info info)\n{\n    /* 1.确定密钥别名 */\n    struct OH_Huks_Blob genAlias = {(uint32_t)strlen(\"test_anon_attest\"), (uint8_t *)\"test_anon_attest\"};\n    static struct OH_Huks_Param g_anonAttestParams[] = {\n        {.tag = OH_HUKS_TAG_ATTESTATION_CHALLENGE, .blob = g_challenge},\n        {.tag = OH_HUKS_TAG_ATTESTATION_ID_ALIAS, .blob = genAlias},\n    };\n    struct OH_Huks_ParamSet *genParamSet = nullptr;\n    struct OH_Huks_ParamSet *anonAttestParamSet = nullptr;\n    OH_Huks_Result ohResult;\n    OH_Huks_Blob certs = {0};\n    OH_Huks_CertChain certChain = {&certs, 0};\n    do {\n        /* 2.初始化密钥参数集 */\n        ohResult =\n            InitParamSet(&genParamSet, g_genAnonAttestParams, sizeof(g_genAnonAttestParams) / sizeof(OH_Huks_Param));\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n        ohResult =\n            InitParamSet(&anonAttestParamSet, g_anonAttestParams, sizeof(g_anonAttestParams) / sizeof(OH_Huks_Param));\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n        ohResult = OH_Huks_GenerateKeyItem(&genAlias, genParamSet, nullptr);\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n\n        (void)ConstructDataToCertChain(&certChain);\n        /* 3.证明密钥 */\n        ohResult = OH_Huks_AnonAttestKeyItem(&genAlias, anonAttestParamSet, &certChain);\n    } while (0);\n    FreeCertChain(&certChain, CERT_COUNT);\n    OH_Huks_FreeParamSet(&genParamSet);\n    OH_Huks_FreeParamSet(&anonAttestParamSet);\n    (void)OH_Huks_DeleteKeyItem(&genAlias, NULL);\n\n    napi_value ret;\n    napi_create_int32(env, ohResult.errorCode, &ret);\n    return ret;\n}\n"
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