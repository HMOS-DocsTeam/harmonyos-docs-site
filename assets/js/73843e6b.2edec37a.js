"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["651082"], {
65445(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_basic_apis_cannkit_vector_computation_cannkit_vector_calculation_monocular_cannkit_vector_calculation_sqrt_cannkit_vec_738_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-ascendc-operator-interface-cannkit-ascend-c-api-cannkit-basic-apis-cannkit-vector-computation-cannkit-vector-calculation-monocular-cannkit-vector-calculation-sqrt-cannkit-vec-738.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_basic_apis_cannkit_vector_computation_cannkit_vector_calculation_monocular_cannkit_vector_calculation_sqrt_cannkit_vec_738_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-monocular/cannkit-vector-calculation-sqrt/cannkit-vector-calculation-sqrt","title":"Sqrt","description":"函数功能","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-monocular/cannkit-vector-calculation-sqrt/cannkit-vector-calculation-sqrt.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-monocular/cannkit-vector-calculation-sqrt","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-monocular/cannkit-vector-calculation-sqrt/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-monocular/cannkit-vector-calculation-sqrt/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"Sqrt","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-vector-calculation-sqrt","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Reciprocal","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-monocular/cannkit-reciprocal/"},"next":{"title":"Rsqrt","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-monocular/cannkit-rsqrt/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-monocular/cannkit-vector-calculation-sqrt/cannkit-vector-calculation-sqrt.md


const frontMatter = {
	title: 'Sqrt',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-vector-calculation-sqrt',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = 'Sqrt';

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
        id: "sqrt",
        children: "Sqrt"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数功能",
      children: "函数功能"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "按元素做开方，计算公式如下，其中PAR表示矢量计算单元一个迭代能够处理的元素个数："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(752512)/* ["default"] */.A) + "",
        width: "367",
        height: "41"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数原型",
      children: "函数原型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "tensor前n个数据计算："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "template <typename T>\n__aicore__ inline void Sqrt(const LocalTensor<T>& dstLocal, const LocalTensor<T>& srcLocal, const int32_t& calCount)\n"
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
            }), "，支持的TPosition为VECIN/VECCALC/VECOUT。  LocalTensor的起始地址需要32字节对齐。  Kirin9020系列处理器支持的数据类型为：half/float  KirinX90系列处理器支持的数据类型为：half/float"]
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
            }), "，支持的TPosition为VECIN/VECCALC/VECOUT。  LocalTensor的起始地址需要32字节对齐。  源操作数的数据类型需要与目的操作数保持一致。  Kirin9020系列处理器支持的数据类型为：half/float  KirinX90系列处理器支持的数据类型为：half/float"]
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
        children: "AscendC::Sqrt(dstLocal, srcLocal, 512);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "结果示例如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "输入数据(srcLocal): [1.0 2.0 3.0 4.0 ...]\n输出数据(dstLocal):\n[1.0 1.414 1.732 2.0...]\n"
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
752512(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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