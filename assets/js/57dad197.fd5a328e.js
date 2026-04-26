"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["442584"], {
832136(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_basic_data_structure_and_apis_cannkit_ge_namespace_cannkit_opregistrationdata_cannkit_automappingbyopfn_cannkit_automappingbyopfn_md_57d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-ascendc-operator-interface-cannkit-basic-data-structure-and-apis-cannkit-ge-namespace-cannkit-opregistrationdata-cannkit-automappingbyopfn-cannkit-automappingbyopfn-md-57d.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_basic_data_structure_and_apis_cannkit_ge_namespace_cannkit_opregistrationdata_cannkit_automappingbyopfn_cannkit_automappingbyopfn_md_57d_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-opregistrationdata/cannkit-automappingbyopfn/cannkit-automappingbyopfn","title":"AutoMappingByOpFn","description":"函数功能","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-opregistrationdata/cannkit-automappingbyopfn/cannkit-automappingbyopfn.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-opregistrationdata/cannkit-automappingbyopfn","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-opregistrationdata/cannkit-automappingbyopfn/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-opregistrationdata/cannkit-automappingbyopfn/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":26,"frontMatter":{"title":"AutoMappingByOpFn","sidebar_position":26,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-automappingbyopfn","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"AutoMappingFn","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-opregistrationdata/cannkit-automappingfn/"},"next":{"title":"AutoMappingFnDynamic","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-opregistrationdata/cannkit-automappingfndynamic/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-opregistrationdata/cannkit-automappingbyopfn/cannkit-automappingbyopfn.md


const frontMatter = {
	title: 'AutoMappingByOpFn',
	sidebar_position: 26,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-automappingbyopfn',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = 'AutoMappingByOpFn';

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
  "value": "调用示例",
  "id": "调用示例",
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
        id: "automappingbyopfn",
        children: "AutoMappingByOpFn"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数功能",
      children: "函数功能"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自动映射回调函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数原型",
      children: "函数原型"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Status AutoMappingByOpFn(const ge::Operator &op_src, ge::Operator &op);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "参数说明",
      children: "参数说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "op_src"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "转换前原始模型中的算子，包含原始模型中算子的属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "op"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "适配AI处理器的算子。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["关于Operator类，请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-ge-operator/cannkit-operator-construction-and-destructor",
        children: "Operator"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "调用示例",
      children: "调用示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "原始TensorFlow算子与适配AI处理器的算子属性一一映射的场景："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "REGISTER_CUSTOM_OP(\"SoftplusGrad\")\n.FrameworkType(TENSORFLOW)\n.OriginOpType(\"SoftplusGrad\")\n.ParseParamsByOperatorFn(AutoMappingByOpFn)\n.ImplyType(ImplyType::TVM);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "原始TensorFlow算子与适配AI处理器的算子属性无法一一映射的场景："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Status ParseResizeArea(const ge::Operator &op_src, ge::Operator& op)\n  {\n    AutoMappingByOpFn(op_src, op);\n \n    ge::TensorDesc input_tensor = op.GetInputDesc(\"images\");\n    input_tensor.SetOriginFormat(ge::FORMAT_NHWC);\n    input_tensor.SetFormat(ge::FORMAT_NHWC);\n    auto ret = op.UpdateInputDesc(\"images\", input_tensor);\n    if(ret != ge::GRAPH_SUCCESS){\n        return FAILED;\n    }\n    ge::TensorDesc output_tensor = op.GetOutputDesc(\"y\");\n    output_tensor.SetOriginFormat(ge::FORMAT_NHWC);\n    output_tensor.SetFormat(ge::FORMAT_NHWC);\n    auto ret_output = op.UpdateOutputDesc(\"y\", output_tensor);\n    if(ret_output != ge::GRAPH_SUCCESS){\n        return FAILED;\n    }\n    return SUCCESS;\n  }\n// register ResizeArea op to GE\nREGISTER_CUSTOM_OP(\"ResizeArea\")\n  .FrameworkType(TENSORFLOW)\n  .OriginOpType(\"ResizeArea\")\n  .ParseParamsByOperatorFn(ParseResizeArea)\n  .ImplyType(ImplyType::AI_CPU);\n"
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