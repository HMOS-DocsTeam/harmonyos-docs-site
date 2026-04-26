"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["24007"], {
744598(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_basic_apis_cannkit_vector_computation_cannkit_vector_calculation_binocular_cannkit_vector_calculation_binocular_max_ca_bd3_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-ascendc-operator-interface-cannkit-ascend-c-api-cannkit-basic-apis-cannkit-vector-computation-cannkit-vector-calculation-binocular-cannkit-vector-calculation-binocular-max-ca-bd3.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_basic_apis_cannkit_vector_computation_cannkit_vector_calculation_binocular_cannkit_vector_calculation_binocular_max_ca_bd3_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-binocular/cannkit-vector-calculation-binocular-max/cannkit-vector-calculation-binocular-max","title":"Max","description":"功能说明","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-binocular/cannkit-vector-calculation-binocular-max/cannkit-vector-calculation-binocular-max.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-binocular/cannkit-vector-calculation-binocular-max","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-binocular/cannkit-vector-calculation-binocular-max/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-binocular/cannkit-vector-calculation-binocular-max/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"Max","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-vector-calculation-binocular-max","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Div","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-binocular/cannkit-vector-calculation-binocular-div/"},"next":{"title":"Min","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-binocular/cannkit-vector-calculation-binocular-min/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-binocular/cannkit-vector-calculation-binocular-max/cannkit-vector-calculation-binocular-max.md


const frontMatter = {
	title: 'Max',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-vector-calculation-binocular-max',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = 'Max';

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
        id: "max",
        children: "Max"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能说明",
      children: "功能说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "按元素求最大值，公式表达如下，其中PAR表示矢量计算单元一个迭代能够处理的元素个数："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(4703)/* ["default"] */.A) + "",
        width: "528",
        height: "36"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数原型",
      children: "函数原型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "tensor前n个数据计算："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "template <typename T> \n__aicore__ inline void Max(const LocalTensor<T>& dstLocal, const LocalTensor<T>& src0Local, const LocalTensor<T>& src1Local, const int32_t& calCount)\n"
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
            }), "，支持的TPosition为VECIN/VECCALC/VECOUT。  LocalTensor的起始地址需要32字节对齐。  Kirin9020系列处理器，支持的数据类型为：half/float/int16/int32  KirinX90系列处理器，支持的数据类型为：half/float/int16/int32/"]
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
            }), "，支持的TPosition为VECIN/VECCALC/VECOUT。  LocalTensor的起始地址需要32字节对齐。  两个源操作数的数据类型需要与目的操作数保持一致。  half/float/int16/int32/"]
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
        children: "AscendC::Max(dstLocal, src0Local, src1Local, 512);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "结果示例如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "输入数据(src0Local): [1 2 3 ... 512]\n输入数据(src1Local): [513 512 511 ... 2]\n输出数据(dstLocal): [513 512 511 ... 512]\n"
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
4703(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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