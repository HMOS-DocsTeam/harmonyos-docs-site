"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["137978"], {
783643(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_basic_apis_cannkit_kernel_tiling_cannkit_tiling_key_is_cannkit_tiling_key_is_md_e74_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-ascendc-operator-interface-cannkit-ascend-c-api-cannkit-basic-apis-cannkit-kernel-tiling-cannkit-tiling-key-is-cannkit-tiling-key-is-md-e74.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_basic_apis_cannkit_kernel_tiling_cannkit_tiling_key_is_cannkit_tiling_key_is_md_e74_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-kernel-tiling/cannkit-tiling-key-is/cannkit-tiling-key-is","title":"TILING_KEY_IS","description":"函数功能","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-kernel-tiling/cannkit-tiling-key-is/cannkit-tiling-key-is.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-kernel-tiling/cannkit-tiling-key-is","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-kernel-tiling/cannkit-tiling-key-is/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-kernel-tiling/cannkit-tiling-key-is/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"TILING_KEY_IS","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-tiling-key-is","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"GET_TILING_DATA_WITH_STRUCT","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-kernel-tiling/cannkit-get-tiling-data-with-struct/"},"next":{"title":"使用说明","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-advanced-apis/cannkit-matmul/cannkit-matmul1/cannkit-matmul-usage-description/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-kernel-tiling/cannkit-tiling-key-is/cannkit-tiling-key-is.md


const frontMatter = {
	title: 'TILING_KEY_IS',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-tiling-key-is',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = 'TILING_KEY_IS';

const assets = {

};



const toc = [{
  "value": "函数功能",
  "id": "函数功能",
  "level": 2
}, {
  "value": "函数原型",
  "id": "函数原型",
  "level": 2
}, {
  "value": "参数说明",
  "id": "参数说明",
  "level": 2
}, {
  "value": "约束说明",
  "id": "约束说明",
  "level": 2
}, {
  "value": "调用示例",
  "id": "调用示例",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    p: "p",
    pre: "pre",
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
        id: "tiling_key_is",
        children: "TILING_KEY_IS"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数功能",
      children: "函数功能"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在核函数中判断本次执行时的tiling_key是否等于某个key，从而标识tiling_key==key的一条kernel分支。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数原型",
      children: "函数原型"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "TILING_KEY_IS(key)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "参数说明",
      children: "参数说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "输入/输出"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此参数是正数，表示某个核函数的分支。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束说明",
      children: "约束说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "key必须是非负整数。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TILING_KEY_IS运用于if和else if分支，不支持else分支，即用TILING_KEY_IS函数来表征N个分支，必须用N个TILING_KEY_IS(key)来分别表示。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "暂不支持kernel直调工程。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "调用示例",
      children: "调用示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "extern \"C\" __global__ __aicore__ void add_custom(__gm__ uint8_t *x, __gm__ uint8_t *y, __gm__ uint8_t *z, __gm__ uint8_t *workspace, __gm__ uint8_t *tiling)\n{\n    GET_TILING_DATA(tilingData, tiling);\n    if (workspace == nullptr) {\n        return;\n    }\n    KernelAdd op;\n    op.Init(x, y, z, tilingData.blockDim, tilingData.totalLength, tilingData.tileNum);\n    // 当TilingKey为1时，执行Process1；为2时，执行Process2；为3时，执行Process3\n    if (TILING_KEY_IS(1)) {\n        op.Process1();\n    } else if (TILING_KEY_IS(2)) {\n        op.Process2();\n    } else if (TILING_KEY_IS(3)) {\n        op.Process3();\n    }\n    // 其他代码逻辑\n    // ...\n    // 此处示例当TilingKey为3时，会执行ProcessOther\n    if (TILING_KEY_IS(3)) {\n        op.ProcessOther();\n    }\n}\n// 配套的host侧tiling函数示例：\nge::graphStatus TilingFunc(gert::TilingContext* context)\n{\n    // 其他代码逻辑\n    // ...\n    if (context->GetInputShape(0) > 10) {\n        context->SetTilingKey(1);\n    } else if (some condition) {\n        context->SetTilingKey(2);\n    } else if (some condition) {\n        context->SetTilingKey(3);\n    }\n}\n"
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