"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["837452"], {
419585(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_basic_apis_cannkit_vector_computation_cannkit_vector_calculation_binocular_cannkit_vector_calculation_binocular_mul_ca_6b0_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-ascendc-operator-interface-cannkit-ascend-c-api-cannkit-basic-apis-cannkit-vector-computation-cannkit-vector-calculation-binocular-cannkit-vector-calculation-binocular-mul-ca-6b0.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_basic_apis_cannkit_vector_computation_cannkit_vector_calculation_binocular_cannkit_vector_calculation_binocular_mul_ca_6b0_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-binocular/cannkit-vector-calculation-binocular-mul/cannkit-vector-calculation-binocular-mul","title":"Mul","description":"功能说明","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-binocular/cannkit-vector-calculation-binocular-mul/cannkit-vector-calculation-binocular-mul.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-binocular/cannkit-vector-calculation-binocular-mul","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-binocular/cannkit-vector-calculation-binocular-mul/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-binocular/cannkit-vector-calculation-binocular-mul/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Mul","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-vector-calculation-binocular-mul","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Sub","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-binocular/cannkit-cannkit-sub/"},"next":{"title":"Div","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-binocular/cannkit-vector-calculation-binocular-div/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-binocular/cannkit-vector-calculation-binocular-mul/cannkit-vector-calculation-binocular-mul.md


const frontMatter = {
	title: 'Mul',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-vector-calculation-binocular-mul',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = 'Mul';

const assets = {

};



const toc = [{
  "value": "功能说明",
  "id": "功能说明",
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
  "value": "注意事项",
  "id": "注意事项",
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
        id: "mul",
        children: "Mul"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能说明",
      children: "功能说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "按元素求积，公式表达如下，其中PAR表示矢量计算单元一个迭代能够处理的元素个数："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(469292)/* ["default"] */.A) + "",
        width: "500",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数原型",
      children: "函数原型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "tensor前n个数据计算："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "template <typename T>\n__aicore__ inline void Mul(const LocalTensor<T>& dstLocal, const LocalTensor<T>& src0Local, const LocalTensor<T>& src1Local, const int32_t& calCount)\n"
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
            }), "，支持的TPosition为VECIN/VECCALC/VECOUT。  LocalTensor的起始地址需要32字节对齐。  Kirin9020系列处理器，支持的数据类型为：  前n个tensor：int16_t、int32_t、half、float32_t  KirinX90系列处理器，支持的数据类型为：  前n个tensor：int16_t、int32_t、half、float32_t"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "src0Local、src1Local"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["源操作数。  类型为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-data-type-definition/cannkit-localtensor",
              children: "LocalTensor"
            }), "，支持的TPosition为VECIN/VECCALC/VECOUT。  LocalTensor的起始地址需要32字节对齐。  两个源操作数的数据类型需要与目的操作数保持一致。  Kirin9020系列处理器，支持的数据类型为：  前n个tensor：int16_t、int32_t、half、float32_t  KirinX90系列处理器，支持的数据类型为：  前n个tensor：int16_t、int32_t、half、float32_t"]
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "KirinX90系列处理器"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "注意事项",
      children: "注意事项"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["操作数地址偏移对齐要求请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-general-constraints",
        children: "通用约束"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "调用示例",
      children: "调用示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本样例中只展示Compute流程中的部分代码。如果开发者需要运行样例代码，请将该代码段拷贝并替换双目指令样例模板", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-binocular/cannkitvectorcalculation-binocularinstructions",
        children: "更多样例"
      }), "中的Compute函数即可。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "tensor前n个数据计算样例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AscendC::Mul(dstLocal, src0Local, src1Local, 512);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "结果示例如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "输入数据(src0Local): [1 2 3 ... 512]\n输入数据(src1Local): [2 2 2 ... 2]\n输出数据(dstLocal): [2 4 6... 1024]\n"
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
469292(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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