"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["850375"], {
593826(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_basic_apis_cannkit_vector_computation_cannkit_scalar_binocular_instruction_cannkit_scalar_binocular_adds_cannkit_scala_718_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-ascendc-operator-interface-cannkit-ascend-c-api-cannkit-basic-apis-cannkit-vector-computation-cannkit-scalar-binocular-instruction-cannkit-scalar-binocular-adds-cannkit-scala-718.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_basic_apis_cannkit_vector_computation_cannkit_scalar_binocular_instruction_cannkit_scalar_binocular_adds_cannkit_scala_718_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-scalar-binocular-instruction/cannkit-scalar-binocular-adds/cannkit-scalar-binocular-adds","title":"Adds","description":"功能说明","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-scalar-binocular-instruction/cannkit-scalar-binocular-adds/cannkit-scalar-binocular-adds.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-scalar-binocular-instruction/cannkit-scalar-binocular-adds","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-scalar-binocular-instruction/cannkit-scalar-binocular-adds/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-scalar-binocular-instruction/cannkit-scalar-binocular-adds/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Adds","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-scalar-binocular-adds","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"更多样例","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-binocular/cannkitvectorcalculation-binocularinstructions/"},"next":{"title":"Muls","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-scalar-binocular-instruction/cannkit-scalar-binocular-muls/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-scalar-binocular-instruction/cannkit-scalar-binocular-adds/cannkit-scalar-binocular-adds.md


const frontMatter = {
	title: 'Adds',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-scalar-binocular-adds',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = 'Adds';

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
        id: "adds",
        children: "Adds"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能说明",
      children: "功能说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "矢量内每个元素与标量求和，计算公式如下，其中PAR表示矢量计算单元一个迭代能够处理的元素个数："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(890545)/* ["default"] */.A) + "",
        width: "432",
        height: "37"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数原型",
      children: "函数原型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "tensor前n个数据计算："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "template <typename T, bool isSetMask = true> \n__aicore__ inline void Adds(const LocalTensor<T>& dstLocal, const LocalTensor<T>& srcLocal, const T& scalarValue, const int32_t& calCount)\n"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "操作数数据类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "U"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "scalarValue数据类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isSetMask"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否在接口内部设置mask模式和mask值。  - true，表示在接口内部设置。  - false，表示在接口外部设置。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表2"
        })
      }), " 参数说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "参数名称"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "类型"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            })
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
            }), "，支持的TPosition为VECIN/VECCALC/VECOUT。  LocalTensor的起始地址需要32字节对齐。  Kirin9020训练系列产品，支持的数据类型为：Tensor（int16_t/int32_t/half/float）  KirinX90系列处理器,支持的数据类型为：Tensor（int16_t/int32_t/half/float）"]
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
            }), "，支持的TPosition为VECIN/VECCALC/VECOUT。  LocalTensor的起始地址需要32字节对齐。  数据类型需要与目的操作数保持一致。  Kirin9020训练系列产品，支持的数据类型为：Tensor（int16_t/int32_t/half/float）  KirinX90系列处理器，支持的数据类型为：Tensor（int16_t/int32_t/half/float）"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "scalarValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "源操作数，数据类型需要与目的操作数中的元素类型保持一致  Kirin9020训练系列产品，支持的数据类型为：Tensor（int16_t/int32_t/half/float）  KirinX90系列处理器，支持的数据类型为：Tensor（int16_t/int32_t/half/float）"
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
      children: ["本样例中只展示Compute流程中的部分代码。如果开发者需要运行样例代码，请将该代码段拷贝并替换标量双目指令样例模板", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-scalar-binocular-instruction/cannkit-scalar-binocularinstructions",
        children: "更多样例"
      }), "中的Compute函数即可。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "tensor前n个数据计算样例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int16_t scalar = 2;\nAscendC::Adds(dstLocal, srcLocal, scalar, 512);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "结果示例如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "输入数据(src0Local): [1 2 3 ... 512]\n输入数据(scalar): 2\n输出数据(dstLocal): [3 4 5 ... 514]\n"
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
890545(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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