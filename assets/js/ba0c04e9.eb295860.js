"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["462894"], {
301150(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_basic_apis_cannkit_vector_computation_cannkit_vector_calculation_monocular_cannkit_reciprocal_cannkit_reciprocal_md_ba0_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-ascendc-operator-interface-cannkit-ascend-c-api-cannkit-basic-apis-cannkit-vector-computation-cannkit-vector-calculation-monocular-cannkit-reciprocal-cannkit-reciprocal-md-ba0.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_basic_apis_cannkit_vector_computation_cannkit_vector_calculation_monocular_cannkit_reciprocal_cannkit_reciprocal_md_ba0_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-monocular/cannkit-reciprocal/cannkit-reciprocal","title":"Reciprocal","description":"函数功能","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-monocular/cannkit-reciprocal/cannkit-reciprocal.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-monocular/cannkit-reciprocal","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-monocular/cannkit-reciprocal/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-monocular/cannkit-reciprocal/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"Reciprocal","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-reciprocal","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Abs","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-monocular/cannkit-vector-calculation-abs/"},"next":{"title":"Sqrt","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-monocular/cannkit-vector-calculation-sqrt/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-monocular/cannkit-reciprocal/cannkit-reciprocal.md


const frontMatter = {
	title: 'Reciprocal',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-reciprocal',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = 'Reciprocal';

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
        id: "reciprocal",
        children: "Reciprocal"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数功能",
      children: "函数功能"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "按元素取倒数，计算公式如下，其中PAR表示矢量计算单元一个迭代能够处理的元素个数："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(870516)/* ["default"] */.A) + "",
        width: "352",
        height: "70"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数原型",
      children: "函数原型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "tensor前n个数据计算："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "template <typename T> \n__aicore__ inline void Reciprocal(const LocalTensor<T>& dstLocal, const LocalTensor<T>& srcLocal, const int32_t& calCount)\n"
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["操作数地址偏移对齐要求请参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-general-constraints",
          children: "通用约束"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果srcLocal中的数值为0，可能会产生未知结果。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用Reciprocal时，half的算子结果对比误差不满足双千分之一的要求，float的算子结果对比误差不满足双万分之一的要求，如果需要高精度，建议使用Div替代实现。"
      }), "\n"]
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
        children: "AscendC::Reciprocal(dstLocal, srcLocal, 512);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "结果示例如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "输入数据(srcLocal): [-7.152 -7.24 1.771 ... -1.339 4.473]\n输出数据(dstLocal):\n[-0.1396 -0.1382 0.5645 ... -0.748 0.2231]\n"
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
870516(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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