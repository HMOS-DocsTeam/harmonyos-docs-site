"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["986723"], {
926560(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_basic_apis_cannkit_vector_computation_cannkit_vector_calculation_binocular_cannkit_vector_calculation_binocular_div_ca_0df_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-ascendc-operator-interface-cannkit-ascend-c-api-cannkit-basic-apis-cannkit-vector-computation-cannkit-vector-calculation-binocular-cannkit-vector-calculation-binocular-div-ca-0df.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_basic_apis_cannkit_vector_computation_cannkit_vector_calculation_binocular_cannkit_vector_calculation_binocular_div_ca_0df_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-binocular/cannkit-vector-calculation-binocular-div/cannkit-vector-calculation-binocular-div","title":"Div","description":"功能说明","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-binocular/cannkit-vector-calculation-binocular-div/cannkit-vector-calculation-binocular-div.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-binocular/cannkit-vector-calculation-binocular-div","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-binocular/cannkit-vector-calculation-binocular-div/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-binocular/cannkit-vector-calculation-binocular-div/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"Div","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-vector-calculation-binocular-div","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Mul","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-binocular/cannkit-vector-calculation-binocular-mul/"},"next":{"title":"Max","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-binocular/cannkit-vector-calculation-binocular-max/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-binocular/cannkit-vector-calculation-binocular-div/cannkit-vector-calculation-binocular-div.md


const frontMatter = {
	title: 'Div',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-vector-calculation-binocular-div',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = 'Div';

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
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
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
        id: "div",
        children: "Div"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能说明",
      children: "功能说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "按元素求商，公式表达如下，其中PAR表示矢量计算单元一个迭代能够处理的元素个数："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(100982)/* ["default"] */.A) + "",
        width: "508",
        height: "37"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数原型",
      children: "函数原型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "tensor前n个数据计算："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "template <typename T> \n__aicore__ inline void Div(const LocalTensor<T>& dstLocal, const LocalTensor<T>& src0Local, const LocalTensor<T>& src1Local, const int32_t& calCount)\n"
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
            }), "，支持的TPosition为VECIN/VECCALC/VECOUT。  LocalTensor的起始地址需要32字节对齐。  Kirin9020系列处理器，支持的数据类型为：half/float  KirinX90系列处理器，支持的数据类型为：half/float"]
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
            }), "，支持的TPosition为VECIN/VECCALC/VECOUT。  LocalTensor的起始地址需要32字节对齐。  两个源操作数的数据类型需要与目的操作数保持一致。  Kirin9020系列处理器，支持的数据类型为：half/float  KirinX90系列处理器，支持的数据类型为：half/float"]
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
      children: "Kirin9020 系列处理器"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "KirinX90系列处理器"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "注意事项",
      children: "注意事项"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "注意除零错误。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["操作数地址偏移对齐要求请参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-general-constraints",
          children: "通用约束"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "调用示例",
      children: "调用示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "tensor前n个数据计算样例（本样例中只展示Compute流程中的部分代码。如果开发者需要运行样例代码，请将该代码段拷贝并替换上方样例的Compute函数中粗体部分即可。）"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AscendC::Div(dstLocal, src0Local, src1Local, 512);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "结果示例如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "输入数据(src0Local): [1.0 2.0 3.0 ... 512.0]\n输入数据(src1Local): [2.0 2.0 2.0 ... 2.0]\n输出数据(dstLocal): [0.5 1.0 1.5 ... 256.0]\n"
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
100982(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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