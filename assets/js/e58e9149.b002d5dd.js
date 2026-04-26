"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["412692"], {
140972(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_core_file_kit_app_file_app_file_access_management_native_fileio_guidelines_native_fileio_guidelines_md_e58_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-core-file-kit-app-file-app-file-access-management-native-fileio-guidelines-native-fileio-guidelines-md-e58.json
var site_docs_core_file_kit_app_file_app_file_access_management_native_fileio_guidelines_native_fileio_guidelines_md_e58_namespaceObject = JSON.parse('{"id":"core-file-kit/app-file/app-file-access-management/native-fileio-guidelines/native-fileio-guidelines","title":"应用文件访问(C/C++)","description":"场景介绍","source":"@site/docs/core-file-kit/app-file/app-file-access-management/native-fileio-guidelines/native-fileio-guidelines.md","sourceDirName":"core-file-kit/app-file/app-file-access-management/native-fileio-guidelines","slug":"/core-file-kit/app-file/app-file-access-management/native-fileio-guidelines/","permalink":"/harmonyos-docs-site/core-file-kit/app-file/app-file-access-management/native-fileio-guidelines/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"应用文件访问(C/C++)","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/native-fileio-guidelines","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"应用文件访问(ArkTS)","permalink":"/harmonyos-docs-site/core-file-kit/app-file/app-file-access-management/app-file-access/"},"next":{"title":"应用及文件系统空间统计","permalink":"/harmonyos-docs-site/core-file-kit/app-file/app-file-access-management/app-fs-space-statistics/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/core-file-kit/app-file/app-file-access-management/native-fileio-guidelines/native-fileio-guidelines.md


const frontMatter = {
	title: '应用文件访问(C/C++)',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/native-fileio-guidelines',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '应用文件访问(C/C++)';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
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
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "应用文件访问cc",
        children: "应用文件访问(C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["FileIO模块提供了部分文件基础操作能力，其他能力请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/musl/musl",
        children: "libc标准库"
      }), "/", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/cpp/cpp",
        children: "c++标准库"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束限制",
      children: "约束限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "进行文件操作之前，必须保证传入正确有效的URI或path。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["接口的详细说明，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/core-file-api/core-file-c/core-file-headerfile/capi-oh-fileio-h/capi-oh-fileio-h",
        children: "FileIO"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "FileManagement_ErrCode OH_FileIO_GetFileLocation(char *uri, int uriLength, FileIO_FileLocation *location)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取文件存储位置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enum FileIO_FileLocation FileIO_FileLocation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件存储位置枚举值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enum FileManagement_ErrCode FileManagement_ErrCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件管理模块错误码。"
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
        children: "target_link_libraries(sample PUBLIC libohfileio.so)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "添加头文件"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <cstdio>\n#include <cstring>\n#include <filemanagement/fileio/oh_fileio.h>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调用OH_FileIO_GetFileLocation接口获取文件存储位置。示例代码如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void GetFileLocationExample(char *uri)\n{\n    FileIO_FileLocation location;\n    FileManagement_ErrCode ret = OH_FileIO_GetFileLocation(uri, strlen(uri), &location);\n    if (ret == 0) {\n        if (location == FileIO_FileLocation::LOCAL) {\n            printf(\"Succeeded in getting file location, this file is on local.\");\n        } else if (location == FileIO_FileLocation::CLOUD) {\n            printf(\"Succeeded in getting file location, this file is on cloud.\");\n        } else if (location == FileIO_FileLocation::LOCAL_AND_CLOUD) {\n            printf(\"Succeeded in getting file location, this file is on  local and cloud.\");\n        }\n    } else {\n        printf(\"Failed to get file location, error code is %d\", ret);\n    }\n}\n"
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