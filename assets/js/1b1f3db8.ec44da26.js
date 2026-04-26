"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["916465"], {
786890(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkdata_api_arkdata_c_arkdata_module_capi_rdb_capi_rdb_md_1b1_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkdata-api-arkdata-c-arkdata-module-capi-rdb-capi-rdb-md-1b1.json
var site_docs_ref_arkdata_api_arkdata_c_arkdata_module_capi_rdb_capi_rdb_md_1b1_namespaceObject = JSON.parse('{"id":"arkdata-api/arkdata-c/arkdata-module/capi-rdb/capi-rdb","title":"RDB","description":"概述","source":"@site/docs-ref/arkdata-api/arkdata-c/arkdata-module/capi-rdb/capi-rdb.md","sourceDirName":"arkdata-api/arkdata-c/arkdata-module/capi-rdb","slug":"/arkdata-api/arkdata-c/arkdata-module/capi-rdb/capi-rdb","permalink":"/harmonyos-docs-site/ref/arkdata-api/arkdata-c/arkdata-module/capi-rdb/capi-rdb","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"RDB","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rdb","kit":"应用框架","last_updated":"2026-04-22","slug":"capi-rdb"},"sidebar":"ref","previous":{"title":"Preferences","permalink":"/harmonyos-docs-site/ref/arkdata-api/arkdata-c/arkdata-module/capi-preferences/capi-preferences"},"next":{"title":"UDMF","permalink":"/harmonyos-docs-site/ref/arkdata-api/arkdata-c/arkdata-module/capi-udmf/capi-udmf"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkdata-api/arkdata-c/arkdata-module/capi-rdb/capi-rdb.md


const frontMatter = {
	title: 'RDB',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rdb',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'capi-rdb'
};
const contentTitle = 'RDB';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "文件汇总",
  "id": "文件汇总",
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
        id: "rdb",
        children: "RDB"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "分布式数据管理（Distributed data manager，data）支持单设备的各种结构化数据的持久化，以及端云间的同步、共享功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "分布式数据管理定义了一系列数据类型，可以对数据进行增删改查。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "文件汇总",
      children: "文件汇总"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-data-asset-h/capi-data-asset-h",
              children: "data_asset.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供资产类型数据结构。  资产是指一种可以在数据管理中使用的数据结构，可以存储及查询一个文件的名称、绝对路径、相对路径、创建时间、修改时间、状态、占用空间等属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-oh-cursor-h/capi-oh-cursor-h",
              children: "oh_cursor.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供通过查询数据库生成的数据库结果集的访问方法。结果集是指用户调用关系型数据库查询接口之后返回的结果集合，提供了多种灵活的数据访问方式，以便用户获取各项数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-oh-data-value-h/capi-oh-data-value-h",
              children: "oh_data_value.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供与单条数据值相关的函数和枚举。  从API version 18开始，OH_ColumnType从oh_cursor.h移动至此头文件呈现，对于此类型，API version 18之前即支持使用，各版本均可正常使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-oh-data-values-h/capi-oh-data-values-h",
              children: "oh_data_values.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供与多条数据值相关的函数和枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-oh-data-values-buckets-h/capi-oh-data-values-buckets-h",
              children: "oh_data_values_buckets.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供与存储数据值相关的结构定义、函数和枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-oh-predicates-h/capi-oh-predicates-h",
              children: "oh_predicates.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示关系型数据库（RDB）的谓词。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-oh-rdb-crypto-param-h/capi-oh-rdb-crypto-param-h",
              children: "oh_rdb_crypto_param.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供与关系型数据库加密参数相关的函数和枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-oh-rdb-transaction-h/capi-oh-rdb-transaction-h",
              children: "oh_rdb_transaction.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供与数据库事务相关的函数和枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-oh-rdb-types-h/capi-oh-rdb-types-h",
              children: "oh_rdb_types.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供与数据值相关的类型定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-oh-value-object-h/capi-oh-value-object-h",
              children: "oh_value_object.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供类型转换方法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-oh-values-bucket-h/capi-oh-values-bucket-h",
              children: "oh_values_bucket.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于存储键值对的类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-relational-store-h/capi-relational-store-h",
              children: "relational_store.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供管理关系数据库（RDB）方法的接口，未标注支持向量数据库的接口仅支持关系型数据库。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-relational-store-error-code-h/capi-relational-store-error-code-h",
              children: "relational_store_error_code.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "声明关系型数据库（RDB）的错误码信息。"
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