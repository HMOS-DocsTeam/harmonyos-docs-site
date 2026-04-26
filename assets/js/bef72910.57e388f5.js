"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["441842"], {
311013(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_neural_network_runtime_api_neural_network_runtime_c_neural_network_runtime_struct_capi_neuralnetworkruntime_oh_nn_quantparam_capi_neuralnetworkruntime_oh_nn_quantparam_md_bef_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-neural-network-runtime-api-neural-network-runtime-c-neural-network-runtime-struct-capi-neuralnetworkruntime-oh-nn-quantparam-capi-neuralnetworkruntime-oh-nn-quantparam-md-bef.json
var site_docs_ref_neural_network_runtime_api_neural_network_runtime_c_neural_network_runtime_struct_capi_neuralnetworkruntime_oh_nn_quantparam_capi_neuralnetworkruntime_oh_nn_quantparam_md_bef_namespaceObject = JSON.parse('{"id":"neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nn-quantparam/capi-neuralnetworkruntime-oh-nn-quantparam","title":"OH_NN_QuantParam","description":"概述","source":"@site/docs-ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nn-quantparam/capi-neuralnetworkruntime-oh-nn-quantparam.md","sourceDirName":"neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nn-quantparam","slug":"/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nn-quantparam/capi-neuralnetworkruntime-oh-nn-quantparam","permalink":"/harmonyos-docs-site/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nn-quantparam/capi-neuralnetworkruntime-oh-nn-quantparam","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"OH_NN_QuantParam","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-neuralnetworkruntime-oh-nn-quantparam","kit":"AI","last_updated":"2026-04-22","slug":"capi-neuralnetworkruntime-oh-nn-quantparam"},"sidebar":"ref","previous":{"title":"OH_NN_UInt32Array","permalink":"/harmonyos-docs-site/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nn-uint32array/capi-neuralnetworkruntime-oh-nn-uint32array"},"next":{"title":"OH_NN_Tensor","permalink":"/harmonyos-docs-site/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nn-tensor/capi-neuralnetworkruntime-oh-nn-tensor"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nn-quantparam/capi-neuralnetworkruntime-oh-nn-quantparam.md


const frontMatter = {
	title: 'OH_NN_QuantParam',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-neuralnetworkruntime-oh-nn-quantparam',
	kit: 'AI',
	last_updated: '2026-04-22',
	slug: 'capi-neuralnetworkruntime-oh-nn-quantparam'
};
const contentTitle = 'OH_NN_QuantParam';

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
    img: "img",
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
        id: "oh_nn_quantparam",
        children: "OH_NN_QuantParam"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct OH_NN_QuantParam {...} OH_NN_QuantParam\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "量化信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在量化的场景中，32位浮点型数据根据以下公式量化为定点数据："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(35091)/* ["default"] */.A) + "",
        width: "412",
        height: "68"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其中s和z是量化参数，在OH_NN_QuantParam中通过scale和zeroPoint保存，r是浮点数，q是量化后的结果，q_min是量化后下界，q_max是量化后的上界，计算方式如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(510734)/* ["default"] */.A) + "",
        width: "267",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(147881)/* ["default"] */.A) + "",
        width: "259",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "clamp函数定义如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(451557)/* ["default"] */.A) + "",
        width: "435",
        height: "114"
      })
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
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-nn-quantparam/capi-neuralnetworkruntime-nn-quantparam",
        children: "NN_QuantParam"
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t quantCount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定numBits、scale和zeroPoint数组的长度。在per-layer量化的场景下，quantCount通常指定为1，即一个张量所有通道共享一套量化参数；在per-channel量化场景下，quantCount通常和张量通道数一致，每个通道使用自己的量化参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const uint32_t *numBits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "量化位数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const double *scale"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向量化公式中scale数据的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const int32_t *zeroPoint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向量化公式中zero point数据的指针。"
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
147881(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
510734(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
451557(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583480913-09f8337306f8ae522a6f4382b9ddbcd2.png");

},
35091(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

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