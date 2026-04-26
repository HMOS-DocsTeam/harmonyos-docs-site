"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["10891"], {
846497(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_neural_network_runtime_api_neural_network_runtime_c_neural_network_runtime_module_capi_neuralnetworkruntime_capi_neuralnetworkruntime_md_952_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-neural-network-runtime-api-neural-network-runtime-c-neural-network-runtime-module-capi-neuralnetworkruntime-capi-neuralnetworkruntime-md-952.json
var site_docs_ref_neural_network_runtime_api_neural_network_runtime_c_neural_network_runtime_module_capi_neuralnetworkruntime_capi_neuralnetworkruntime_md_952_namespaceObject = JSON.parse('{"id":"neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-module/capi-neuralnetworkruntime/capi-neuralnetworkruntime","title":"NeuralNetworkRuntime","description":"概述","source":"@site/docs-ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-module/capi-neuralnetworkruntime/capi-neuralnetworkruntime.md","sourceDirName":"neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-module/capi-neuralnetworkruntime","slug":"/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-module/capi-neuralnetworkruntime/capi-neuralnetworkruntime","permalink":"/harmonyos-docs-site/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-module/capi-neuralnetworkruntime/capi-neuralnetworkruntime","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"NeuralNetworkRuntime","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-neuralnetworkruntime","kit":"AI","last_updated":"2026-04-22","slug":"capi-neuralnetworkruntime"},"sidebar":"ref","previous":{"title":"OH_AI_TrainCfgHandle","permalink":"/harmonyos-docs-site/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-traincfghandle/capi-mindspore-oh-ai-traincfghandle"},"next":{"title":"neural_network_core.h","permalink":"/harmonyos-docs-site/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-core-h/capi-neural-network-core-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-module/capi-neuralnetworkruntime/capi-neuralnetworkruntime.md


const frontMatter = {
	title: 'NeuralNetworkRuntime',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-neuralnetworkruntime',
	kit: 'AI',
	last_updated: '2026-04-22',
	slug: 'capi-neuralnetworkruntime'
};
const contentTitle = 'NeuralNetworkRuntime';

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
        id: "neuralnetworkruntime",
        children: "NeuralNetworkRuntime"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供Neural Network Runtime加速模型推理的相关接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "文件汇总",
      children: "文件汇总"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-core-h/capi-neural-network-core-h",
              children: "neural_network_core.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Neural Network Core模块接口定义，AI推理框架使用Neural Network Core提供的Native接口，完成模型编译，并在加速硬件上执行推理和计算。  部分接口定义从neural_network_runtime.h移动至此头文件统一呈现，对于此类接口，API version 11 版本之前即支持使用，各版本均可正常使用。  Neural Network Core的接口目前均不支持多线程并发调用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-h/capi-neural-network-runtime-h",
              children: "neural_network_runtime.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Neural Network Runtime模块接口定义，AI推理框架使用Neural Network Runtime提供的Native接口，完成模型构建。  Neural Network Runtime的接口目前均不支持多线程并发调用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h",
              children: "neural_network_runtime_type.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Neural Network Runtime定义的结构体和枚举值。"
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