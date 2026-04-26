"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["85041"], {
346631(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_huks_kit_huks_local_key_management_huks_other_operations_huks_obtain_key_properties_huks_obtain_key_properties_ndk_huks_obtain_key_properties_ndk_md_81a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-huks-kit-huks-local-key-management-huks-other-operations-huks-obtain-key-properties-huks-obtain-key-properties-ndk-huks-obtain-key-properties-ndk-md-81a.json
var site_docs_system_security_huks_kit_huks_local_key_management_huks_other_operations_huks_obtain_key_properties_huks_obtain_key_properties_ndk_huks_obtain_key_properties_ndk_md_81a_namespaceObject = JSON.parse('{"id":"system-security/huks-kit/huks-local-key-management/huks-other-operations/huks-obtain-key-properties/huks-obtain-key-properties-ndk/huks-obtain-key-properties-ndk","title":"获取密钥属性(C/C++)","description":"HUKS提供了接口供业务获取指定密钥的相关属性。在获取指定密钥属性前，需要确保已在HUKS中生成或导入持久化存储的密钥。","source":"@site/docs/system-security/huks-kit/huks-local-key-management/huks-other-operations/huks-obtain-key-properties/huks-obtain-key-properties-ndk/huks-obtain-key-properties-ndk.md","sourceDirName":"system-security/huks-kit/huks-local-key-management/huks-other-operations/huks-obtain-key-properties/huks-obtain-key-properties-ndk","slug":"/system-security/huks-kit/huks-local-key-management/huks-other-operations/huks-obtain-key-properties/huks-obtain-key-properties-ndk/","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/huks-other-operations/huks-obtain-key-properties/huks-obtain-key-properties-ndk/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"获取密钥属性(C/C++)","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-obtain-key-properties-ndk","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"获取密钥属性(ArkTS)","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/huks-other-operations/huks-obtain-key-properties/huks-obtain-key-properties-arkts/"},"next":{"title":"密钥导出(ArkTS)","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/huks-other-operations/huks-export-key/huks-export-key-arkts/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/huks-kit/huks-local-key-management/huks-other-operations/huks-obtain-key-properties/huks-obtain-key-properties-ndk/huks-obtain-key-properties-ndk.md


const frontMatter = {
	title: '获取密钥属性(C/C++)',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-obtain-key-properties-ndk',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '获取密钥属性(C/C++)';

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
        id: "获取密钥属性cc",
        children: "获取密钥属性(C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HUKS提供了接口供业务获取指定密钥的相关属性。在获取指定密钥属性前，需要确保已在HUKS中生成或导入持久化存储的密钥。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(371052)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "轻量级智能穿戴不支持获取密钥属性功能。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API 23开始支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-group-key-overview",
        children: "群组密钥"
      }), "特性。"]
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
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "构造对应参数。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["keyAlias：密钥别名，封装成", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/capi-hukstypeapi-oh-huks-blob/capi-hukstypeapi-oh-huks-blob",
              children: "OH_Huks_Blob"
            }), "结构，密钥别名最大长度为128字节。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "paramSetIn：预留参数，暂不需要处理，传空即可。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["paramSetOut：用于放置获取到的参数集结果，为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-struct/capi-hukstypeapi-oh-huks-paramset/capi-hukstypeapi-oh-huks-paramset",
              children: "OH_Huks_ParamSet"
            }), "类型对象，需要业务提前申请好内存，需申请足够容纳获取到的密钥属性集的内存大小。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用接口", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-api-h/capi-native-huks-api-h#oh_huks_getkeyitemparamset",
            children: "OH_Huks_GetKeyItemParamSet"
          }), "，传入上述参数。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "返回值为成功码/错误码，获取成功后，从参数集中读取需要的参数。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"huks/native_huks_api.h\"\n#include \"huks/native_huks_param.h\"\n#include \"napi/native_api.h\"\n#include <cstring>\n\nOH_Huks_Result InitParamSet(struct OH_Huks_ParamSet **paramSet, const struct OH_Huks_Param *params,\n                            uint32_t paramCount)\n{\n    OH_Huks_Result ret = OH_Huks_InitParamSet(paramSet);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        return ret;\n    }\n    ret = OH_Huks_AddParams(*paramSet, params, paramCount);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        OH_Huks_FreeParamSet(paramSet);\n        return ret;\n    }\n    ret = OH_Huks_BuildParamSet(paramSet);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        OH_Huks_FreeParamSet(paramSet);\n        return ret;\n    }\n    return ret;\n}\n\nstruct OH_Huks_Param g_testGenerateKeyParam[] = {{.tag = OH_HUKS_TAG_ALGORITHM, .uint32Param = OH_HUKS_ALG_ECC},\n                                                 {.tag = OH_HUKS_TAG_PURPOSE, .uint32Param = OH_HUKS_KEY_PURPOSE_AGREE},\n                                                 {.tag = OH_HUKS_TAG_KEY_SIZE, .uint32Param = OH_HUKS_ECC_KEY_SIZE_256},\n                                                 {.tag = OH_HUKS_TAG_DIGEST, .uint32Param = OH_HUKS_DIGEST_NONE}};\n\nstatic OH_Huks_Result GenerateKeyHelper(const char *alias)\n{\n    struct OH_Huks_Blob aliasBlob = {.size = (uint32_t)strlen(alias), .data = (uint8_t *)alias};\n    struct OH_Huks_ParamSet *testGenerateKeyParamSet = nullptr;\n    struct OH_Huks_Result ohResult;\n    do {\n        /* 1.初始化密钥属性集 */\n        ohResult = InitParamSet(&testGenerateKeyParamSet, g_testGenerateKeyParam,\n                                sizeof(g_testGenerateKeyParam) / sizeof(OH_Huks_Param));\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n        /* 1.生成密钥 */\n        ohResult = OH_Huks_GenerateKeyItem(&aliasBlob, testGenerateKeyParamSet, nullptr);\n    } while (0);\n    OH_Huks_FreeParamSet(&testGenerateKeyParamSet);\n    return ohResult;\n}\n\nstatic napi_value GetKeyParamSet(napi_env env, napi_callback_info info)\n{\n    /* 1. 参数构造：确定密钥别名 */\n    const char *alias = \"test_key\";\n    struct OH_Huks_Blob aliasBlob = { .size = (uint32_t)strlen(alias), .data = (uint8_t *)alias };\n    /* 生成密钥 */\n    OH_Huks_Result genResult = GenerateKeyHelper(alias);\n    if (genResult.errorCode != OH_HUKS_SUCCESS) {\n        napi_value ret;\n        napi_create_int32(env, genResult.errorCode, &ret);\n        return ret;\n    }\n    const size_t paramSetSize = 512;\n    /* 构造参数：为参数集申请内存\n     * 请业务按实际情况评估大小进行申请\n     */\n    struct OH_Huks_ParamSet *outParamSet = static_cast<struct OH_Huks_ParamSet *>(malloc(paramSetSize));\n    if (outParamSet == nullptr) {\n        return nullptr;\n    }\n    outParamSet->paramSetSize = paramSetSize;\n    struct OH_Huks_Result ohResult;\n    do {\n        /* 2. 获取密钥属性集 */\n        ohResult = OH_Huks_GetKeyItemParamSet(&aliasBlob, nullptr, outParamSet);\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n        /* 3. 从参数集中读取参数，以OH_HUKS_TAG_PURPOSE为例 */\n        OH_Huks_Param *purposeParam = nullptr; // 无需申请内存，获取后指针指向该参数在参数集中所处内存地址\n        ohResult = OH_Huks_GetParam(outParamSet, OH_HUKS_TAG_PURPOSE, &purposeParam);\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n    } while (0);\n    OH_Huks_FreeParamSet(&outParamSet);\n    napi_value ret;\n    napi_create_int32(env, ohResult.errorCode, &ret);\n    return ret;\n}\n"
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
371052(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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