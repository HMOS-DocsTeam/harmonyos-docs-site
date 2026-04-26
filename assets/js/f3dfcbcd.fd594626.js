"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["124471"], {
659143(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_core_file_kit_user_files_select_save_user_file_native_fileshare_guidelines_native_fileshare_guidelines_md_f3d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-core-file-kit-user-files-select-save-user-file-native-fileshare-guidelines-native-fileshare-guidelines-md-f3d.json
var site_docs_core_file_kit_user_files_select_save_user_file_native_fileshare_guidelines_native_fileshare_guidelines_md_f3d_namespaceObject = JSON.parse('{"id":"core-file-kit/user-files/select-save-user-file/native-fileshare-guidelines/native-fileshare-guidelines","title":"授权持久化(C/C++)","description":"场景介绍","source":"@site/docs/core-file-kit/user-files/select-save-user-file/native-fileshare-guidelines/native-fileshare-guidelines.md","sourceDirName":"core-file-kit/user-files/select-save-user-file/native-fileshare-guidelines","slug":"/core-file-kit/user-files/select-save-user-file/native-fileshare-guidelines/","permalink":"/harmonyos-docs-site/core-file-kit/user-files/select-save-user-file/native-fileshare-guidelines/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"授权持久化(C/C++)","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/native-fileshare-guidelines","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"授权持久化","permalink":"/harmonyos-docs-site/core-file-kit/user-files/select-save-user-file/file-persistpermission/"},"next":{"title":"获取并使用公共目录","permalink":"/harmonyos-docs-site/core-file-kit/user-files/request-dir-permission/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/core-file-kit/user-files/select-save-user-file/native-fileshare-guidelines/native-fileshare-guidelines.md


const frontMatter = {
	title: '授权持久化(C/C++)',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/native-fileshare-guidelines',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '授权持久化(C/C++)';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
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
        id: "授权持久化cc",
        children: "授权持久化(C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用通过Picker获取临时授权，临时授权在应用退出后或者设备重启后会清除。如果应用重启或者设备重启后需要直接访问之前已访问过的文件，则对文件进行", (0,jsx_runtime.jsx)(_components.a, {
        href: "/core-file-kit/user-files/select-save-user-file/file-persistpermission#%E5%9C%BA%E6%99%AF%E4%BB%8B%E7%BB%8D",
        children: "持久化授权"
      }), "。FileShare提供了支持基于uri的文件及目录授予持久化权限、权限激活、权限查询等方法。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["接口的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/core-file-api/core-file-c/core-file-headerfile/capi-oh-file-share-h/capi-oh-file-share-h",
        children: "oh_file_uri.h"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "OH_FileShare_PersistPermission(const FileShare_PolicyInfo *policies, unsigned int policyNum, FileShare_PolicyErrorResult **result, unsigned int *resultNum)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对所选择的多个文件或目录uri持久化授权。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_FileShare_RevokePermission(const FileShare_PolicyInfo *policies, unsigned int policyNum, FileShare_PolicyErrorResult **result, unsigned int *resultNum)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对所选择的多个文件或目录uri取消持久化授权。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_FileShare_ActivatePermission(const FileShare_PolicyInfo *policies, unsigned int policyNum, FileShare_PolicyErrorResult **result, unsigned int *resultNum)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使能多个已经持久化授权过的文件或目录uri。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_FileShare_DeactivatePermission(const FileShare_PolicyInfo *policies, unsigned int policyNum, FileShare_PolicyErrorResult **result, unsigned int *resultNum)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消使能授权过的多个文件或目录uri。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_FileShare_CheckPersistentPermission(const FileShare_PolicyInfo *policies, unsigned int policyNum, bool **result, unsigned int *resultNum)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "校验所选择的多个文件或目录uri的持久化权限结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_FileShare_ReleasePolicyErrorResult(FileShare_PolicyErrorResult *errorResult, unsigned int resultNum)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放FileShare_PolicyErrorResult内存。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用文件分享的相关接口，需确认设备具有以下系统能力：SystemCapability.FileManagement.AppFileService.FolderAuthorization。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在调用文件分享的相关接口前，需要申请权限：\"", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/access-control/app-permission-mgmt/app-permissions/restricted-permissions#ohospermissionfile_access_persist",
          children: "ohos.permission.FILE_ACCESS_PERSIST"
        }), "\"，申请方式请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/determine-application-mode",
          children: "选择申请权限的方式"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下步骤描述了如何使用FileShare提供的Native API接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "添加动态链接库"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CMakeLists.txt中添加以下lib。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "target_link_libraries(sample PUBLIC libohfileshare.so)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "头文件"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <filemanagement/fileshare/oh_file_share.h>\n#include <iostream>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建FileShare_PolicyInfo实例,调用OH_FileShare_PersistPermission接口，设置uri的持久化授权，接口入参policyNum最大上限为500。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "static const uint32_t policyNum = 2;\nchar strTestPath1[] = \"file://com.example.fileshare/data/storage/el2/base/files/test1.txt\";\nchar strTestPath2[] = \"file://com.example.fileshare/data/storage/el2/base/files/test2.txt\";\nFileShare_PolicyInfo policy[policyNum] = {\n    {strTestPath1, static_cast<unsigned int>(strlen(strTestPath1)), FileShare_OperationMode::READ_MODE},\n    {strTestPath2, static_cast<unsigned int>(strlen(strTestPath2)), FileShare_OperationMode::WRITE_MODE}};\nFileShare_PolicyErrorResult* result = nullptr;\nuint32_t resultNum = 0;\nnapi_value napiResult;\nstd::string resultStr;\nauto ret = OH_FileShare_PersistPermission(policy, policyNum, &result, &resultNum);\nif (ret != ERR_OK) {\n    if (ret == ERR_EPERM && result != nullptr) {\n        for (uint32_t i = 0; i < resultNum; i++) {\n            std::cout << \"error uri: \" <<  result[i].uri << std::endl;\n            std::cout << \"error code: \" <<  result[i].code << std::endl;\n            std::cout << \"error message: \" << result[i].message << std::endl;\n            // ...\n        }\n    }\n}\nOH_FileShare_ReleasePolicyErrorResult(result, resultNum);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_FileShare_ActivatePermission接口，激活已授权过的uri，接口入参policyNum最大上限为500。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "auto ret = OH_FileShare_ActivatePermission(policy, policyNum, &result, &resultNum);\nif (ret != ERR_OK) {\n    if (ret == ERR_EPERM && result != nullptr) {\n        for (uint32_t i = 0; i < resultNum; i++) {\n            std::cout << \"error uri: \" <<  result[i].uri << std::endl;\n            std::cout << \"error code: \" <<  result[i].code << std::endl;\n            std::cout << \"error message: \" << result[i].message << std::endl;\n            // ...\n        }\n    }\n}\nOH_FileShare_ReleasePolicyErrorResult(result, resultNum);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_FileShare_DeactivatePermission接口，停止已启用授权过uri的访问权限，接口入参policyNum最大上限为500。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "auto ret = OH_FileShare_DeactivatePermission(policy, policyNum, &result, &resultNum);\nif (ret != ERR_OK) {\n    if (ret == ERR_EPERM && result != nullptr) {\n        for (uint32_t i = 0; i < resultNum; i++) {\n            std::cout << \"error uri: \" <<  result[i].uri << std::endl;\n            std::cout << \"error code: \" <<  result[i].code << std::endl;\n            std::cout << \"error message: \" << result[i].message << std::endl;\n            // ...\n        }\n    }\n}\nOH_FileShare_ReleasePolicyErrorResult(result, resultNum);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_FileShare_RevokePermission接口，撤销已经授权的uri持久化权限，接口入参policyNum最大上限为500。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "auto ret = OH_FileShare_RevokePermission(policy, policyNum, &result, &resultNum);\nif (ret != ERR_OK) {\n    if (ret == ERR_EPERM && result != nullptr) {\n        for (uint32_t i = 0; i < resultNum; i++) {\n            std::cout << \"error uri: \" <<  result[i].uri << std::endl;\n            std::cout << \"error code: \" <<  result[i].code << std::endl;\n            std::cout << \"error message: \" << result[i].message << std::endl;\n            // ...\n        }\n    }\n}\nOH_FileShare_ReleasePolicyErrorResult(result, resultNum);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_FileShare_CheckPersistentPermission接口，检查uri持久化权限，接口入参policyNum最大上限为500。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "bool *result = nullptr;\nauto ret = OH_FileShare_CheckPersistentPermission(policy, policyNum, &result, &resultNum);\nif (ret != ERR_OK) {\n    if (ret == ERR_EPERM && result != nullptr) {\n        for (uint32_t i = 0; i < resultNum && resultNum <= policyNum; i++) {\n            std::cout << \"uri: \" <<  policy[i].uri << std::endl;\n            std::cout << \"result: \" <<  result[i] << std::endl;\n            // ...\n        }\n    }\n}\nstd::cout << \"retCode: \" <<  ret << std::endl;\nfree(result);\n"
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