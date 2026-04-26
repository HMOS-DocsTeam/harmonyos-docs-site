"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["198599"], {
835287(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_data_augmentation_api_dataaugmentation_capi_dataaugmentation_capi_header_struct_dataaugmentation_aip_retrieval_condition_vector_dataaugmentation_aip_retrieval_condition_vector_md_1ed_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-data-augmentation-api-dataaugmentation-capi-dataaugmentation-capi-header-struct-dataaugmentation-aip-retrieval-condition-vector-dataaugmentation-aip-retrieval-condition-vector-md-1ed.json
var site_docs_ref_data_augmentation_api_dataaugmentation_capi_dataaugmentation_capi_header_struct_dataaugmentation_aip_retrieval_condition_vector_dataaugmentation_aip_retrieval_condition_vector_md_1ed_namespaceObject = JSON.parse('{"id":"data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-header-struct/dataaugmentation-aip-retrieval-condition-vector/dataaugmentation-aip-retrieval-condition-vector","title":"aip_retrieval_condition_vector.h","description":"概述","source":"@site/docs-ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-header-struct/dataaugmentation-aip-retrieval-condition-vector/dataaugmentation-aip-retrieval-condition-vector.md","sourceDirName":"data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-header-struct/dataaugmentation-aip-retrieval-condition-vector","slug":"/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-header-struct/dataaugmentation-aip-retrieval-condition-vector/dataaugmentation-aip-retrieval-condition-vector","permalink":"/harmonyos-docs-site/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-header-struct/dataaugmentation-aip-retrieval-condition-vector/dataaugmentation-aip-retrieval-condition-vector","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"aip_retrieval_condition_vector.h","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataaugmentation-aip-retrieval-condition-vector","kit":"应用框架","last_updated":"2026-04-22","slug":"dataaugmentation-aip-retrieval-condition-vector"},"sidebar":"ref","previous":{"title":"aip_retrieval_condition.h","permalink":"/harmonyos-docs-site/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-header-struct/dataaugmentation-aip-retrieval-condition/dataaugmentation-aip-retrieval-condition"},"next":{"title":"aip_retrieval_query.h","permalink":"/harmonyos-docs-site/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-header-struct/dataaugmentation-aip-retrieval-query/dataaugmentation-aip-retrieval-query"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-header-struct/dataaugmentation-aip-retrieval-condition-vector/dataaugmentation-aip-retrieval-condition-vector.md


const frontMatter = {
	title: 'aip_retrieval_condition_vector.h',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataaugmentation-aip-retrieval-condition-vector',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'dataaugmentation-aip-retrieval-condition-vector'
};
const contentTitle = 'aip_retrieval_condition_vector.h';

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
  "value": "类型定义",
  "id": "类型定义",
  "level": 3
}, {
  "value": "函数",
  "id": "函数",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
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
        id: "aip_retrieval_condition_vectorh",
        children: "aip_retrieval_condition_vector.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供与向量条件相关的接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " #include \"dataaugmentation/retrieval/aip_retrieval_condition_vector.h\""]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libretrieval_ndk.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DataAugmentation.Retrieval"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval",
        children: "Retrieval"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "类型定义",
      children: "类型定义"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_subcondition",
              children: "OH_Retrieval_SubCondition"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_vectorcondition",
              children: "OH_Retrieval_VectorCondition"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义向量检索条件，包含检索的字段、检索参数、过滤条件等。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
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
              href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_vectorcondition",
              children: "OH_Retrieval_VectorCondition"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_createvectorcondition",
              children: "OH_Retrieval_CreateVectorCondition"
            }), " ()"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建向量检索条件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_destroyvectorcondition",
              children: "OH_Retrieval_DestroyVectorCondition"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_vectorcondition",
              children: "OH_Retrieval_VectorCondition"
            }), " *condition)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["销毁通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_createvectorcondition",
              children: "OH_Retrieval_CreateVectorCondition"
            }), "获得的检索条件。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_setvectorrecalllimit",
              children: "OH_Retrieval_SetVectorRecallLimit"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_vectorcondition",
              children: "OH_Retrieval_VectorCondition"
            }), " *condition, uint32_t limit)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在检索条件中，设置向量检索结果数量上限。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_setsimilaritythreshold",
              children: "OH_Retrieval_SetSimilarityThreshold"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval#oh_retrieval_vectorcondition",
              children: "OH_Retrieval_VectorCondition"
            }), " *condition, double threshold)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在检索条件中，设置向量检索的相似度阈值。"
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