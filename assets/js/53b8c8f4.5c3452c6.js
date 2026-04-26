"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["212040"], {
438372(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_basic_apis_cannkit_vector_computation_cannkit_vector_calculation_monocular_cannkit_rsqrt_cannkit_rsqrt_md_53b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-ascendc-operator-interface-cannkit-ascend-c-api-cannkit-basic-apis-cannkit-vector-computation-cannkit-vector-calculation-monocular-cannkit-rsqrt-cannkit-rsqrt-md-53b.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_basic_apis_cannkit_vector_computation_cannkit_vector_calculation_monocular_cannkit_rsqrt_cannkit_rsqrt_md_53b_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-monocular/cannkit-rsqrt/cannkit-rsqrt","title":"Rsqrt","description":"函数功能","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-monocular/cannkit-rsqrt/cannkit-rsqrt.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-monocular/cannkit-rsqrt","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-monocular/cannkit-rsqrt/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-monocular/cannkit-rsqrt/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"Rsqrt","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-rsqrt","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Sqrt","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-monocular/cannkit-vector-calculation-sqrt/"},"next":{"title":"Not","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-monocular/cannkit-vector-calculation-not/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-monocular/cannkit-rsqrt/cannkit-rsqrt.md


const frontMatter = {
	title: 'Rsqrt',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-rsqrt',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = 'Rsqrt';

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
        id: "rsqrt",
        children: "Rsqrt"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数功能",
      children: "函数功能"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "按元素做开方后取倒数，计算公式如下，其中PAR表示矢量计算单元一个迭代能够处理的元素个数："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(809568)/* ["default"] */.A) + "",
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
        children: "template <typename T>\n__aicore__ inline void Rsqrt(const LocalTensor<T>& dstLocal, const LocalTensor<T>& srcLocal, const int32_t& calCount)\n"
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
            children: "srcLocal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["源操作数。  类型为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-data-type-definition/cannkit-localtensor",
              children: "LocalTensor"
            }), "，支持的TPosition为VECIN/VECCALC/VECOUT。  LocalTensor的起始地址需要32字节对齐。  源操作数的数据类型需要与目的操作数保持一致。  Kirin9020系列处理器，支持的数据类型为：half/float  KirinX90系列处理器，支持的数据类型为：half/float"]
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
        children: "如果srcLocal中的数值为非正数，可能会产生未知结果。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用Rsqrt时，half的算子结果对比误差不满足双千分之一的要求，float的算子结果对比误差不满足双万分之一的要求，如果需要高精度，建议使用Div和Sqrt替代实现。"
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
        children: "AscendC::Rsqrt(dstLocal, srcLocal, 512);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "结果示例如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "输入数据(srcLocal): [0.8335 2.2 2.672 ... 2.312 5.36]\n输出数据(dstLocal):\n[1.094 0.676 0.6113 ... 0.6562 0.4316]\n"
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
809568(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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