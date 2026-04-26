"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["87398"], {
638317(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_core_file_api_core_file_c_core_file_struct_capi_clouddisk_clouddisk_resultlist_capi_clouddisk_clouddisk_resultlist_md_b3b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-core-file-api-core-file-c-core-file-struct-capi-clouddisk-clouddisk-resultlist-capi-clouddisk-clouddisk-resultlist-md-b3b.json
var site_docs_ref_core_file_api_core_file_c_core_file_struct_capi_clouddisk_clouddisk_resultlist_capi_clouddisk_clouddisk_resultlist_md_b3b_namespaceObject = JSON.parse('{"id":"core-file-api/core-file-c/core-file-struct/capi-clouddisk-clouddisk-resultlist/capi-clouddisk-clouddisk-resultlist","title":"CloudDisk_ResultList","description":"概述","source":"@site/docs-ref/core-file-api/core-file-c/core-file-struct/capi-clouddisk-clouddisk-resultlist/capi-clouddisk-clouddisk-resultlist.md","sourceDirName":"core-file-api/core-file-c/core-file-struct/capi-clouddisk-clouddisk-resultlist","slug":"/core-file-api/core-file-c/core-file-struct/capi-clouddisk-clouddisk-resultlist/capi-clouddisk-clouddisk-resultlist","permalink":"/harmonyos-docs-site/ref/core-file-api/core-file-c/core-file-struct/capi-clouddisk-clouddisk-resultlist/capi-clouddisk-clouddisk-resultlist","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"title":"CloudDisk_ResultList","sidebar_position":9,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-clouddisk-clouddisk-resultlist","kit":"应用框架","last_updated":"2026-04-22","slug":"capi-clouddisk-clouddisk-resultlist"},"sidebar":"ref","previous":{"title":"CloudDisk_PathInfo","permalink":"/harmonyos-docs-site/ref/core-file-api/core-file-c/core-file-struct/capi-clouddisk-clouddisk-pathinfo/capi-clouddisk-clouddisk-pathinfo"},"next":{"title":"CloudDisk_SyncFolder","permalink":"/harmonyos-docs-site/ref/core-file-api/core-file-c/core-file-struct/capi-clouddisk-clouddisk-syncfolder/capi-clouddisk-clouddisk-syncfolder"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/core-file-api/core-file-c/core-file-struct/capi-clouddisk-clouddisk-resultlist/capi-clouddisk-clouddisk-resultlist.md


const frontMatter = {
	title: 'CloudDisk_ResultList',
	sidebar_position: 9,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-clouddisk-clouddisk-resultlist',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'capi-clouddisk-clouddisk-resultlist'
};
const contentTitle = 'CloudDisk_ResultList';

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
        id: "clouddisk_resultlist",
        children: "CloudDisk_ResultList"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct CloudDisk_ResultList {...} CloudDisk_ResultList\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "表示一个文件同步操作的结果。该结构体包含文件的绝对路径、同步结果，以及同步状态或失败原因。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-file-api/core-file-c/core-file-struct/capi-clouddisk-clouddisk-pathinfo/capi-clouddisk-clouddisk-pathinfo",
              children: "CloudDisk_PathInfo"
            }), " pathInfo"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件的绝对路径信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool isSuccess{false}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示操作是否成功。true：表示操作成功；false：表示操作失败。默认值为false。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-file-api/core-file-c/core-file-headerfile/capi-oh-cloud-disk-manager-h/capi-oh-cloud-disk-manager-h#clouddisk_syncstate",
              children: "CloudDisk_SyncState"
            }), " syncState"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件的同步状态。当isSuccess为true时才生效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-file-api/core-file-c/core-file-headerfile/capi-oh-cloud-disk-manager-h/capi-oh-cloud-disk-manager-h#clouddisk_errorreason",
              children: "CloudDisk_ErrorReason"
            }), " errorReason"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件同步状态获取失败的原因。当isSuccess为false时才生效。"
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