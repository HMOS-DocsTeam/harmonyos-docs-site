"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["244874"], {
48363(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_core_file_kit_user_files_native_fileuri_guidelines_native_fileuri_guidelines_md_e3d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-core-file-kit-user-files-native-fileuri-guidelines-native-fileuri-guidelines-md-e3d.json
var site_docs_core_file_kit_user_files_native_fileuri_guidelines_native_fileuri_guidelines_md_e3d_namespaceObject = JSON.parse('{"id":"core-file-kit/user-files/native-fileuri-guidelines/native-fileuri-guidelines","title":"FileUri开发指导(C/C++)","description":"场景介绍","source":"@site/docs/core-file-kit/user-files/native-fileuri-guidelines/native-fileuri-guidelines.md","sourceDirName":"core-file-kit/user-files/native-fileuri-guidelines","slug":"/core-file-kit/user-files/native-fileuri-guidelines/","permalink":"/harmonyos-docs-site/core-file-kit/user-files/native-fileuri-guidelines/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"FileUri开发指导(C/C++)","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/native-fileuri-guidelines","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"用户文件URI介绍","permalink":"/harmonyos-docs-site/core-file-kit/user-files/user-file-uri-intro/"},"next":{"title":"获取用户目录环境(C/C++)","permalink":"/harmonyos-docs-site/core-file-kit/user-files/native-environment-guidelines/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/core-file-kit/user-files/native-fileuri-guidelines/native-fileuri-guidelines.md


const frontMatter = {
	title: 'FileUri开发指导(C/C++)',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/native-fileuri-guidelines',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'FileUri开发指导(C/C++)';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "基本概念",
  "id": "基本概念",
  "level": 2
}, {
  "value": "约束限制",
  "id": "约束限制",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
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
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "fileuri开发指导cc",
        children: "FileUri开发指导(C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FileUri提供了关于文件URI的基本操作，将URI转换成对应的沙箱路径、将应用沙箱路径转换成对应应用自己的URI、获取URI所在目录路径的URI等接口能力，方便应用对文件分享业务中URI的访问。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "结果集"
        })
      }), "：满足使用场景的路径或URI。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束限制",
      children: "约束限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "URI转路径时，URI来源建议使用系统能力获取，例如：picker、剪切板、拖拽、及系统提供的路径转URI接口等系统能力返回的URI；如果转换应用或用户拼接的URI，则转换后的路径可能无法访问。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "为保证数据的准确性，在转换或判断过程中应保持单对象处理，避免资源竞争导致数据异常。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["接口的详细说明，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/core-file-api/core-file-c/core-file-headerfile/capi-oh-file-uri-h/capi-oh-file-uri-h",
        children: "oh_file_uri.h"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FileManagement_ErrCode OH_FileUri_GetUriFromPath(const char *path, unsigned int length, char **result)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过传入的path生成应用自己的URI。将path转URI时，path中的中文及非数字字母的特殊字符会被编码为对应的ASCII码，并拼接在URI中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FileManagement_ErrCode OH_FileUri_GetPathFromUri(const char *uri, unsigned int length, char **result)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将uri转换成对应的沙箱路径。  1. uri转路径过程中会将uri中存在的ASCII码进行解码后拼接在原处，非系统接口生成的uri中可能存在ASCII码解析范围之外的字符，导致字符串无法正常拼接。  2. 转换处理遵循系统约定的字符串替换规则（规则可能随系统演进而变化），转换过程中不进行路径校验操作，无法保证转换结果的可访问性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FileManagement_ErrCode OH_FileUri_GetFullDirectoryUri(const char *uri, unsigned int length, char **result)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取所在路径uri。  1. uri指向文件则返回所在路径的uri。  2. uri指向目录则不处理直接返回原串。  3. uri指向的文件不存在或属性获取失败则返回空串。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool OH_FileUri_IsValidUri(const char *uri, unsigned int length)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断传入的uri的格式是否正确。仅校验uri是否满足系统定义的格式规范，不校验uri的有效性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FileManagement_ErrCode OH_FileUri_GetFileName(const char *uri, unsigned int length, char **result)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过传入的uri获取到对应的文件名称（如果文件名中存在ASCII码将会被解码处理后拼接在原处）。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "在CMake脚本中链接动态库"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CMakeLists.txt中添加以下lib。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "target_link_libraries(sample PUBLIC libohfileuri.so)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "添加头文件"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <filemanagement/file_uri/oh_file_uri.h>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_FileUri_GetUriFromPath接口，在接口中malloc的内存需要在使用完后释放，因此需要free对应的内存，避免内存泄漏。示例代码如下所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "static napi_value NAPI_Global_OH_FileUri_GetUriFromPathExample(napi_env env, napi_callback_info info)\n{\n    // ...\n    // 为 char* uri 分配内存\n    char *path = new char[strLength + 1]; // +1 for null terminator\n    // 将 JavaScript 字符串复制到 uri\n    // ...\n    unsigned int length = strlen(path);\n    // 输出传入路径字符串\n    // ...\n    char *uriResult = nullptr;\n    FileManagement_ErrCode ret = OH_FileUri_GetUriFromPath(path, length, &uriResult);\n    // 输出结果uri字符串\n    // ...\n    if (ret == 0 && uriResult != nullptr) {\n        // 将C字符串转换为napi_value\n        napi_status status = napi_create_string_utf8(env, uriResult, NAPI_AUTO_LENGTH, &result);\n        if (status != napi_ok) {\n            free(uriResult);\n            return nullptr;\n        }\n        free(uriResult); // 释放临时字符串\n    } else {\n        // 将C字符串转换为napi_value\n        napi_status status = napi_create_string_utf8(env, \"Hello World\", NAPI_AUTO_LENGTH, &result);\n        if (status != napi_ok) {\n            return nullptr;\n        }\n    }\n    return result;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_FileUri_GetPathFromUri通过URI转成对应的路径，在接口中malloc的内存需要在使用完后释放，因此需要free对应的内存，避免内存泄漏。示例代码如下所示。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "static napi_value NAPI_Global_OH_FileUri_GetPathFromUriExample(napi_env env, napi_callback_info info)\n{\n    // ...\n    char *uri = new char[strLength + 1]; // +1 for null terminator\n    // 将 JavaScript 字符串复制到 uri\n    napi_get_value_string_utf8(env, args[0], uri, strLength + 1, &strLength);\n\n    unsigned int length = strlen(uri);\n    // 输出传入uri字符串\n    OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.WatcherType=OnTrigger: %{public}s\", uri);\n    char *pathResult = nullptr;\n    FileManagement_ErrCode ret = OH_FileUri_GetPathFromUri(uri, length, &pathResult);\n    // 输出获取路径结果字符串\n    // ...\n    if (ret == 0 && pathResult != nullptr) {\n        // 将C字符串转换为napi_value\n        napi_status status = napi_create_string_utf8(env, pathResult, NAPI_AUTO_LENGTH, &result);\n        if (status != napi_ok) {\n            free(pathResult);\n            return nullptr;\n        }\n        free(pathResult); // 释放临时字符串\n    } else {\n        // 将空字符串转换为napi_value\n        napi_status status = napi_create_string_utf8(env, \"\", NAPI_AUTO_LENGTH, &result);\n        if (status != napi_ok) {\n            return nullptr;\n        }\n    }\n    return result;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_FileUri_GetFullDirectoryUri获取URI所在路径的URI，在接口中malloc的内存需要在使用完后释放，因此需要free对应的内存，避免内存泄漏。示例代码如下所示。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "static napi_value NAPI_Global_OH_FileUri_GetFullDirectoryUriExample(napi_env env, napi_callback_info info)\n{\n    // ...\n    char *uri = new char[strLength + 1]; // +1 for null terminator\n    // 将 JavaScript 字符串复制到 uri\n    napi_get_value_string_utf8(env, args[0], uri, strLength + 1, &strLength);\n\n    unsigned int length = strlen(uri);\n    // 输出传入uri字符串\n    OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.WatcherType=OnTrigger: %{public}s\", uri);\n    char *uriResult = nullptr;\n    FileManagement_ErrCode ret = OH_FileUri_GetFullDirectoryUri(uri, length, &uriResult);\n    // 输出所在路径uri字符串\n    // ...\n    if (ret == 0 && uriResult != nullptr) {\n        // 使用napi接口创建一个字符串类型的napi_value来返回正确结果\n        napi_create_string_utf8(env, uriResult, NAPI_AUTO_LENGTH, &result);\n    } else {\n        // 使用napi接口创建一个表示null值的napi_value来返回错误或空值情况\n        napi_get_null(env, &result);\n    }\n    if (uriResult != nullptr) {\n        free(uriResult);\n    }\n    return result;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "可以调用OH_FileUri_IsValidUri接口进行URI格式验证。 示例代码如下所示。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "static napi_value NAPI_Global_OH_FileUri_IsValidUriExample(napi_env env, napi_callback_info info)\n{\n    // ...\n    char *uri = new char[strLength + 1]; // +1 for null terminator\n    // 将 JavaScript 字符串复制到 uri\n    napi_get_value_string_utf8(env, args[0], uri, strLength + 1, &strLength);\n    unsigned int length = strlen(uri);\n    // 输出传入uri字符串\n    OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.WatcherType=OnTrigger: %{public}s\", uri);\n    bool flags = OH_FileUri_IsValidUri(uri, length);\n    // ...\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_FileUri_GetFileName获取URI中的文件名称，在接口中malloc的内存需要在使用完后释放，因此需要free对应的内存，避免内存泄漏。示例代码如下所示。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "static napi_value NAPI_Global_OH_FileUri_GetFileNameExample(napi_env env, napi_callback_info info)\n{\n    // ...\n    char *uri = new char[strLength + 1]; // +1 for null terminator\n    // 将 JavaScript 字符串复制到 uri\n    napi_get_value_string_utf8(env, args[0], uri, strLength + 1, &strLength);\n\n    unsigned int length = strlen(uri);\n    // 输出传入uri字符串\n    OH_LOG_INFO(LogType::LOG_APP, \"HiAppEvent eventInfo.WatcherType=OnTrigger: %{public}s\", uri);\n    char *uriResult = nullptr;\n    FileManagement_ErrCode ret = OH_FileUri_GetFileName(uri, length, &uriResult);\n    // 输出获取到的文件名称\n    // ...\n    if (ret == 0 && uriResult != nullptr) {\n        // 将C字符串转换为napi_value\n        napi_status status = napi_create_string_utf8(env, uriResult, NAPI_AUTO_LENGTH, &result);\n        if (status != napi_ok) {\n            free(uriResult);\n            return NULL;\n        }\n        free(uriResult); // 释放临时字符串\n    } else {\n        // 将空字符串转换为napi_value\n        napi_status status = napi_create_string_utf8(env, \"\", NAPI_AUTO_LENGTH, &result);\n        if (status != napi_ok) {\n            return nullptr;\n        }\n    }\n    return result;\n}\n"
          })
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