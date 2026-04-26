"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["895728"], {
739818(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_data_augmentation_api_dataaugmentation_capi_dataaugmentation_capi_header_struct_dataaugmentation_aip_error_code_dataaugmentation_aip_error_code_md_760_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-data-augmentation-api-dataaugmentation-capi-dataaugmentation-capi-header-struct-dataaugmentation-aip-error-code-dataaugmentation-aip-error-code-md-760.json
var site_docs_ref_data_augmentation_api_dataaugmentation_capi_dataaugmentation_capi_header_struct_dataaugmentation_aip_error_code_dataaugmentation_aip_error_code_md_760_namespaceObject = JSON.parse('{"id":"data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-header-struct/dataaugmentation-aip-error-code/dataaugmentation-aip-error-code","title":"aip_error_code.h","description":"概述","source":"@site/docs-ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-header-struct/dataaugmentation-aip-error-code/dataaugmentation-aip-error-code.md","sourceDirName":"data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-header-struct/dataaugmentation-aip-error-code","slug":"/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-header-struct/dataaugmentation-aip-error-code/dataaugmentation-aip-error-code","permalink":"/harmonyos-docs-site/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-header-struct/dataaugmentation-aip-error-code/dataaugmentation-aip-error-code","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"aip_error_code.h","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataaugmentation-aip-error-code","kit":"应用框架","last_updated":"2026-04-22","slug":"dataaugmentation-aip-error-code"},"sidebar":"ref","previous":{"title":"Retrieval","permalink":"/harmonyos-docs-site/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-retrieval/dataaugmentation-capi-retrieval"},"next":{"title":"aip_retrieval.h","permalink":"/harmonyos-docs-site/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-header-struct/dataaugmentation-aip-retrieval/dataaugmentation-aip-retrieval"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-header-struct/dataaugmentation-aip-error-code/dataaugmentation-aip-error-code.md


const frontMatter = {
	title: 'aip_error_code.h',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataaugmentation-aip-error-code',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'dataaugmentation-aip-error-code'
};
const contentTitle = 'aip_error_code.h';

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
  "value": "枚举",
  "id": "枚举",
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
        id: "aip_error_codeh",
        children: "aip_error_code.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供与错误代码相关的接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " #include \"dataaugmentation/aip_error_code.h\""]
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
        href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-aip/dataaugmentation-capi-aip",
        children: "AIP"
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
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-aip/dataaugmentation-capi-aip#oh_aip_errcode-1",
              children: "OH_Aip_ErrCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/data-augmentation-api/dataaugmentation-capi/dataaugmentation-capi-module/dataaugmentation-capi-aip/dataaugmentation-capi-aip#oh_aip_errcode-1",
              children: "OH_Aip_ErrCode"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "错误码信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Aip_ErrCode {  AIP_OK = 0,  AIP_E_EXEC_ERR = 1021200005,  AIP_E_OUT_OF_RANGE = 1021200006,  AIP_E_NO_SUCH_FIELD = 1021200007,  AIP_E_OVER_LIMIT = 1021200008,  AIP_E_CONDITION_OVER_LIMIT = 1021200009,  AIP_E_INVALID_ARGS = 1021200010,  AIP_E_EMBEDDING_ERR = 1021200012  }"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "错误码信息。"
          })]
        })
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