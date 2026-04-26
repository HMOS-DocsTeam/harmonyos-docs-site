"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["844236"], {
387508(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_basic_apis_cannkit_vector_computation_cannkit_vector_calculation_binocular_cannkit_vector_calculation_binocular_min_ca_022_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-ascendc-operator-interface-cannkit-ascend-c-api-cannkit-basic-apis-cannkit-vector-computation-cannkit-vector-calculation-binocular-cannkit-vector-calculation-binocular-min-ca-022.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_basic_apis_cannkit_vector_computation_cannkit_vector_calculation_binocular_cannkit_vector_calculation_binocular_min_ca_022_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-binocular/cannkit-vector-calculation-binocular-min/cannkit-vector-calculation-binocular-min","title":"Min","description":"功能说明","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-binocular/cannkit-vector-calculation-binocular-min/cannkit-vector-calculation-binocular-min.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-binocular/cannkit-vector-calculation-binocular-min","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-binocular/cannkit-vector-calculation-binocular-min/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-binocular/cannkit-vector-calculation-binocular-min/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"Min","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-vector-calculation-binocular-min","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Max","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-binocular/cannkit-vector-calculation-binocular-max/"},"next":{"title":"And","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-binocular/cannkit-vector-calculation-binocular-and/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-binocular/cannkit-vector-calculation-binocular-min/cannkit-vector-calculation-binocular-min.md


const frontMatter = {
	title: 'Min',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-vector-calculation-binocular-min',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = 'Min';

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
        id: "min",
        children: "Min"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能说明",
      children: "功能说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "按元素求最小值，公式表达如下，其中PAR表示矢量计算单元一个迭代能够处理的元素个数："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(454804)/* ["default"] */.A) + "",
        width: "525",
        height: "37"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数原型",
      children: "函数原型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "tensor前n个数据计算："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "template <typename T> \n__aicore__ inline void Min(const LocalTensor<T>& dstLocal, const LocalTensor<T>& src0Local, const LocalTensor<T>& src1Local, const int32_t& calCount)\n"
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
            }), "，支持的TPosition为VECIN/VECCALC/VECOUT。  LocalTensor的起始地址需要32字节对齐。  两个源操作数的数据类型需要与目的操作数保持一致。  Kirin9020系列处理器，支持的数据类型为：half/float/int16/int32  KirinX90系列处理器，支持的数据类型为：half/float/int16/int32"]
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
        children: "AscendC::Min(dstLocal, src0Local, src1Local, 512);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "结果示例如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "输入数据(src0Local): [1 2 3 ... 512]\n输入数据(src1Local): [513 512 511 ... 2]\n输出数据(dstLocal): [1 2 3 ... 2]\n"
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
454804(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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