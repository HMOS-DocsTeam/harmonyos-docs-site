"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["208552"], {
817253(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_neural_network_runtime_api_neural_network_runtime_c_neural_network_runtime_struct_capi_neuralnetworkruntime_oh_nn_tensor_capi_neuralnetworkruntime_oh_nn_tensor_md_45a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-neural-network-runtime-api-neural-network-runtime-c-neural-network-runtime-struct-capi-neuralnetworkruntime-oh-nn-tensor-capi-neuralnetworkruntime-oh-nn-tensor-md-45a.json
var site_docs_ref_neural_network_runtime_api_neural_network_runtime_c_neural_network_runtime_struct_capi_neuralnetworkruntime_oh_nn_tensor_capi_neuralnetworkruntime_oh_nn_tensor_md_45a_namespaceObject = JSON.parse('{"id":"neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nn-tensor/capi-neuralnetworkruntime-oh-nn-tensor","title":"OH_NN_Tensor","description":"概述","source":"@site/docs-ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nn-tensor/capi-neuralnetworkruntime-oh-nn-tensor.md","sourceDirName":"neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nn-tensor","slug":"/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nn-tensor/capi-neuralnetworkruntime-oh-nn-tensor","permalink":"/harmonyos-docs-site/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nn-tensor/capi-neuralnetworkruntime-oh-nn-tensor","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"OH_NN_Tensor","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-neuralnetworkruntime-oh-nn-tensor","kit":"AI","last_updated":"2026-04-22","slug":"capi-neuralnetworkruntime-oh-nn-tensor"},"sidebar":"ref","previous":{"title":"OH_NN_QuantParam","permalink":"/harmonyos-docs-site/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nn-quantparam/capi-neuralnetworkruntime-oh-nn-quantparam"},"next":{"title":"OH_NN_Memory","permalink":"/harmonyos-docs-site/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nn-memory/capi-neuralnetworkruntime-oh-nn-memory"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nn-tensor/capi-neuralnetworkruntime-oh-nn-tensor.md


const frontMatter = {
	title: 'OH_NN_Tensor',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-neuralnetworkruntime-oh-nn-tensor',
	kit: 'AI',
	last_updated: '2026-04-22',
	slug: 'capi-neuralnetworkruntime-oh-nn-tensor'
};
const contentTitle = 'OH_NN_Tensor';

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
        id: "oh_nn_tensor",
        children: "OH_NN_Tensor"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct OH_NN_Tensor {...} OH_NN_Tensor\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "张量结构体。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通常用于构造模型图中的数据节点和算子参数，在构造张量时需要明确数据类型、维数、维度信息和量化信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "废弃版本："
        })
      }), " 11"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "替代接口："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-nn-tensordesc/capi-neuralnetworkruntime-nn-tensordesc",
        children: "NN_TensorDesc"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-module/capi-neuralnetworkruntime/capi-neuralnetworkruntime",
        children: "NeuralNetworkRuntime"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "所在头文件："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h",
        children: "neural_network_runtime_type.h"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "成员变量",
      children: "成员变量"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_datatype",
              children: "OH_NN_DataType"
            }), " dataType"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指定张量的数据类型，要求从", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_datatype",
              children: "OH_NN_DataType"
            }), "枚举类型中取值。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t dimensionCount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定张量的维数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const int32_t *dimensions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定张量的维度信息（形状）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nn-quantparam/capi-neuralnetworkruntime-oh-nn-quantparam",
              children: "OH_NN_QuantParam"
            }), " *quantParam"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指定张量的量化信息，数据类型要求为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nn-quantparam/capi-neuralnetworkruntime-oh-nn-quantparam",
              children: "OH_NN_QuantParam"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_tensortype",
              children: "OH_NN_TensorType"
            }), " type"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指定张量的类型。type的取值和张量的用途相关，当张量用作模型的输入或输出，则要求将type设置为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_tensortype",
              children: "OH_NN_TENSOR"
            }), "；当张量用作算子参数，则要求从", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_tensortype",
              children: "OH_NN_TensorType"
            }), "中选择除", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_tensortype",
              children: "OH_NN_TENSOR"
            }), "以外的枚举值。"]
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