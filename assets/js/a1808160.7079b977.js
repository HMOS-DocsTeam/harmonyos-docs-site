"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["294139"], {
131966(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkdata_data_faq_data_faq_md_a18_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkdata-data-faq-data-faq-md-a18.json
var site_docs_arkdata_data_faq_data_faq_md_a18_namespaceObject = JSON.parse('{"id":"arkdata/data-faq/data-faq","title":"ArkData常见问题","description":"如何查看关系型数据库详细的SQL执行异常信息","source":"@site/docs/arkdata/data-faq/data-faq.md","sourceDirName":"arkdata/data-faq","slug":"/arkdata/data-faq/","permalink":"/harmonyos-docs-site/arkdata/data-faq/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"title":"ArkData常见问题","sidebar_position":11,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/data-faq","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"ArkData术语","permalink":"/harmonyos-docs-site/arkdata/data-terminology/"},"next":{"title":"ArkTS简介","permalink":"/harmonyos-docs-site/arkts/arkts-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkdata/data-faq/data-faq.md


const frontMatter = {
	title: 'ArkData常见问题',
	sidebar_position: 11,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/data-faq',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'ArkData常见问题';

const assets = {

};



const toc = [{
  "value": "如何查看关系型数据库详细的SQL执行异常信息",
  "id": "如何查看关系型数据库详细的sql执行异常信息",
  "level": 2
}, {
  "value": "如何查看关系型数据库生成的SQL语句",
  "id": "如何查看关系型数据库生成的sql语句",
  "level": 2
}, {
  "value": "关系型数据库不同文件说明",
  "id": "关系型数据库不同文件说明",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
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
        id: "arkdata常见问题",
        children: "ArkData常见问题"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "如何查看关系型数据库详细的sql执行异常信息",
      children: "如何查看关系型数据库详细的SQL执行异常信息"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可以调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-rdbstore/arkts-apis-data-relationalstore-rdbstore#onsqliteerroroccurred20",
        children: "on('sqliteErrorOccurred')"
      }), "获取SQL执行时出现的异常信息。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "如何查看关系型数据库生成的sql语句",
      children: "如何查看关系型数据库生成的SQL语句"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可以调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-f/arkts-apis-data-relationalstore-f#relationalstoregetinsertsqlinfo20",
        children: "relationalStore.getInsertSqlInfo"
      }), "获取用于插入数据的SQL语句。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可以调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-f/arkts-apis-data-relationalstore-f#relationalstoregetupdatesqlinfo20",
        children: "relationalStore.getUpdateSqlInfo"
      }), "获取用于更新数据的SQL语句。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可以调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-f/arkts-apis-data-relationalstore-f#relationalstoregetdeletesqlinfo20",
        children: "relationalStore.getDeleteSqlInfo"
      }), "获取用于删除数据的SQL语句。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可以调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-f/arkts-apis-data-relationalstore-f#relationalstoregetquerysqlinfo20",
        children: "relationalStore.getQuerySqlInfo"
      }), "获取用于查询数据的SQL语句。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "关系型数据库不同文件说明",
      children: "关系型数据库不同文件说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当使用关系型数据时，可能会生成不同的文件产物，不同的文件对应作用具体可见下表。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "文件类型"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: ".db"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据库持久化文件，用于存储数据库数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: ".db-wal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于保存操作日志，可以在事务失败时回滚更改，确保数据一致性。  该文件仅在数据库采用WAL模式时存在（系统默认日志方式即为WAL（Write Ahead Log）模式）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: ".db-shm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "共享内存文件，用于协调多个数据库连接对同一db文件的更改，防止数据冲突。  该文件仅在数据库采用WAL模式时存在（系统默认日志方式即为WAL（Write Ahead Log）模式）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: ".key_lock"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于保存文件锁信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: ".pub_key"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于保存数据库密钥信息。  该文件仅在配置了数据库加密且未配置自定义加密参数时（即通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-i/arkts-apis-data-relationalstore-i#storeconfig",
              children: "StoreConfig"
            }), "配置encrypt为true且未配置cryptoParam）存在。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: ".db-dwr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于保存文件头信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: ".db-compare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于保存所有DDL语句。"
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