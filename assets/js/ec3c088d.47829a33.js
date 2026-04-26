"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["493450"], {
9613(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_core_file_api_core_file_c_core_file_struct_capi_clouddisk_clouddisk_changedata_capi_clouddisk_clouddisk_changedata_md_ec3_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-core-file-api-core-file-c-core-file-struct-capi-clouddisk-clouddisk-changedata-capi-clouddisk-clouddisk-changedata-md-ec3.json
var site_docs_ref_core_file_api_core_file_c_core_file_struct_capi_clouddisk_clouddisk_changedata_capi_clouddisk_clouddisk_changedata_md_ec3_namespaceObject = JSON.parse('{"id":"core-file-api/core-file-c/core-file-struct/capi-clouddisk-clouddisk-changedata/capi-clouddisk-clouddisk-changedata","title":"CloudDisk_ChangeData","description":"概述","source":"@site/docs-ref/core-file-api/core-file-c/core-file-struct/capi-clouddisk-clouddisk-changedata/capi-clouddisk-clouddisk-changedata.md","sourceDirName":"core-file-api/core-file-c/core-file-struct/capi-clouddisk-clouddisk-changedata","slug":"/core-file-api/core-file-c/core-file-struct/capi-clouddisk-clouddisk-changedata/capi-clouddisk-clouddisk-changedata","permalink":"/harmonyos-docs-site/ref/core-file-api/core-file-c/core-file-struct/capi-clouddisk-clouddisk-changedata/capi-clouddisk-clouddisk-changedata","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"CloudDisk_ChangeData","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-clouddisk-clouddisk-changedata","kit":"应用框架","last_updated":"2026-04-22","slug":"capi-clouddisk-clouddisk-changedata"},"sidebar":"ref","previous":{"title":"FileShare_PolicyInfo","permalink":"/harmonyos-docs-site/ref/core-file-api/core-file-c/core-file-struct/capi-fileshare-fileshare-policyinfo/capi-fileshare-fileshare-policyinfo"},"next":{"title":"CloudDisk_ChangesResult","permalink":"/harmonyos-docs-site/ref/core-file-api/core-file-c/core-file-struct/capi-clouddisk-clouddisk-changesresult/capi-clouddisk-clouddisk-changesresult"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/core-file-api/core-file-c/core-file-struct/capi-clouddisk-clouddisk-changedata/capi-clouddisk-clouddisk-changedata.md


const frontMatter = {
	title: 'CloudDisk_ChangeData',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-clouddisk-clouddisk-changedata',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'capi-clouddisk-clouddisk-changedata'
};
const contentTitle = 'CloudDisk_ChangeData';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "汇总",
  "id": "汇总",
  "level": 2
}, {
  "value": "成员变量",
  "id": "成员变量",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
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
        id: "clouddisk_changedata",
        children: "CloudDisk_ChangeData"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct CloudDisk_ChangeData  {...} CloudDisk_ChangeData\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义了同步根路径下单个文件变更事件的数据结构。该结构包含有关文件变更的详细信息，包括唯一ID、父目录的唯一ID、相对路径、变更类型、文件大小和时间戳。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/core-file-api/core-file-c/core-file-module/capi-clouddisk/capi-clouddisk",
        children: "CloudDisk"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "所在头文件："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/core-file-api/core-file-c/core-file-headerfile/capi-oh-cloud-disk-manager-h/capi-oh-cloud-disk-manager-h",
        children: "oh_cloud_disk_manager.h"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "成员变量",
      children: "成员变量"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint64_t updateSequenceNumber{0}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "变更事件的更新序列号。每次文件更改时单调递增加1，用于增量变更查询。范围：[0, 2^64 - 1]。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CloudDisk_FileIdInfo fileId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "全局唯一的文件ID。在文件的生命周期内保持不变。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CloudDisk_FileIdInfo parentFileId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件或目录所属父目录的唯一ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-file-api/core-file-c/core-file-struct/capi-clouddisk-clouddisk-pathinfo/capi-clouddisk-clouddisk-pathinfo",
              children: "CloudDisk_PathInfo"
            }), " relativePathInfo"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "同步根路径下的文件，相对于同步根路径的相对路径。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-file-api/core-file-c/core-file-headerfile/capi-oh-cloud-disk-manager-h/capi-oh-cloud-disk-manager-h#clouddisk_operationtype",
              children: "CloudDisk_OperationType"
            }), " operationType"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此文件的变更操作类型（如：创建、删除、移动等）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint64_t size{0}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件大小，单位：Byte。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint64_t mtime{0}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件修改时间，单位：ms。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint64_t timeStamp{0}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "变更事件发生时间，单位：ms。"
          })]
        })]
      })]
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