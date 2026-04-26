"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["313019"], {
839039(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_basic_apis_cannkit_vector_computation_cannkit_vector_calculation_monocular_cannkit_vector_calculation_relu_cannkit_vec_de9_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-ascendc-operator-interface-cannkit-ascend-c-api-cannkit-basic-apis-cannkit-vector-computation-cannkit-vector-calculation-monocular-cannkit-vector-calculation-relu-cannkit-vec-de9.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_basic_apis_cannkit_vector_computation_cannkit_vector_calculation_monocular_cannkit_vector_calculation_relu_cannkit_vec_de9_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-monocular/cannkit-vector-calculation-relu/cannkit-vector-calculation-relu","title":"Relu","description":"函数功能","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-monocular/cannkit-vector-calculation-relu/cannkit-vector-calculation-relu.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-monocular/cannkit-vector-calculation-relu","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-monocular/cannkit-vector-calculation-relu/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-monocular/cannkit-vector-calculation-relu/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"title":"Relu","sidebar_position":8,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-vector-calculation-relu","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Not","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-monocular/cannkit-vector-calculation-not/"},"next":{"title":"更多样例","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-monocular/cannkit-vector-calculation-binocular-more/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-monocular/cannkit-vector-calculation-relu/cannkit-vector-calculation-relu.md


const frontMatter = {
	title: 'Relu',
	sidebar_position: 8,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-vector-calculation-relu',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = 'Relu';

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
  "value": "返回值",
  "id": "返回值",
  "level": 2
}, {
  "value": "支持的型号",
  "id": "支持的型号",
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
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
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
        id: "relu",
        children: "Relu"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数功能",
      children: "函数功能"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "按元素做线性整流Relu，计算公式如下，其中PAR表示矢量计算单元一个迭代能够处理的元素个数 ："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(608655)/* ["default"] */.A) + "",
        width: "408",
        height: "37"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数原型",
      children: "函数原型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "tensor前n个数据计算："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "template <typename T>\n__aicore__ inline void Relu(const LocalTensor<T>& dstLocal, const LocalTensor<T>& srcLocal, const int32_t& calCount)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "参数说明",
      children: "参数说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " 模板参数说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "操作数数据类型。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表2"
        })
      }), " 参数说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "输入/输出"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dstLocal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["目的操作数。  类型为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-data-type-definition/cannkit-localtensor",
              children: "LocalTensor"
            }), "，支持的TPosition为VECIN/VECCALC/VECOUT。  LocalTensor的起始地址需要32字节对齐。  Kirin9020系列处理器，支持的数据类型为：half、float、int32_t  KirinX90系列处理器，支持的数据类型为：half、float、int32_t"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "srcLocal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["源操作数。  类型为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-data-type-definition/cannkit-localtensor",
              children: "LocalTensor"
            }), "，支持的TPosition为VECIN/VECCALC/VECOUT。  LocalTensor的起始地址需要32字节对齐。  源操作数的数据类型需要与目的操作数保持一致。  Kirin9020系列处理器，支持的数据类型为：half、float、int32_t  KirinX90系列处理器，支持的数据类型为：half、float、int32_t"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "calCount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入数据元素个数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "返回值",
      children: "返回值"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "无"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "支持的型号",
      children: "支持的型号"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kirin9020系列处理器"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束说明",
      children: "约束说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["操作数地址偏移对齐要求请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-general-constraints",
        children: "通用约束"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "调用示例",
      children: "调用示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本样例中只展示Compute流程中的部分代码。本样例的srcLocal和dstLocal均为half类型，占16位bit。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果开发者需要运行样例代码，请将该代码段拷贝并替换", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-monocular/cannkit-vector-calculation-binocular-more#%E6%A0%B7%E4%BE%8B%E6%A8%A1%E6%9D%BF",
        children: "样例模板"
      }), "中Compute函数的部分代码即可。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "tensor前n个数据计算样例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AscendC::Relu(dstLocal, srcLocal, 512);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "结果示例如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "输入数据(srcLocal): [6.938 -8.86 -0.2263 ... 1.971 1.778]\n输出数据(dstLocal):\n[6.938 0 0 ... 1.971 1.778]\n"
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
608655(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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