"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["842975"], {
26049(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_basic_apis_cannkit_vector_computation_cannkit_scalar_ternary_instruction_cannkit_axpy_cannkit_axpy_md_378_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-ascendc-operator-interface-cannkit-ascend-c-api-cannkit-basic-apis-cannkit-vector-computation-cannkit-scalar-ternary-instruction-cannkit-axpy-cannkit-axpy-md-378.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_basic_apis_cannkit_vector_computation_cannkit_scalar_ternary_instruction_cannkit_axpy_cannkit_axpy_md_378_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-scalar-ternary-instruction/cannkit-axpy/cannkit-axpy","title":"Axpy","description":"函数功能","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-scalar-ternary-instruction/cannkit-axpy/cannkit-axpy.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-scalar-ternary-instruction/cannkit-axpy","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-scalar-ternary-instruction/cannkit-axpy/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-scalar-ternary-instruction/cannkit-axpy/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Axpy","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-axpy","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"更多样例","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-scalar-binocular-instruction/cannkit-scalar-binocularinstructions/"},"next":{"title":"更多样例","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-scalar-ternary-instruction/scalar-ternaryinstructions-more-examples/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-scalar-ternary-instruction/cannkit-axpy/cannkit-axpy.md


const frontMatter = {
	title: 'Axpy',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-axpy',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = 'Axpy';

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
        id: "axpy",
        children: "Axpy"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数功能",
      children: "函数功能"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "源操作数(srcLocal)中每个元素与标量求积后和目的操作数(dstLocal)中的对应元素相加，计算公式如下，其中PAR表示矢量计算单元一个迭代能够处理的元素个数："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(726747)/* ["default"] */.A) + "",
        width: "524",
        height: "34"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数原型",
      children: "函数原型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "tensor前n个数据计算："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "template <typename T, typename U> \n__aicore__ inline void Axpy(const LocalTensor<T>& dstLocal, const LocalTensor<U>& srcLocal, const U& scalarValue, const int32_t& calCount)\n"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "目的操作数数据类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "U"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "源操作数数据类型。"
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
            }), "，支持的TPosition为VECIN/VECCALC/VECOUT。  LocalTensor的起始地址需要32字节对齐。  Kirin9020训练系列产品，支持的数据类型为：half、float"]
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
            }), "，支持的TPosition为VECIN/VECCALC/VECOUT。  LocalTensor的起始地址需要32字节对齐。  Kirin9020训练系列产品，支持的数据类型为：half、float"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "scalarValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "源操作数，scalar标量。支持的数据类型为：half/float。scalarValue的数据类型需要和srcLocal保持一致。"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该接口支持的精度组合如下。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "half精度组合：srcLocal数据类型=half；scalar数据类型=half；dstLocal数据类型=half；PAR=128。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "float精度组合：srcLocal数据类型=float；scalar数据类型=float；dstLocal数据类型=float；PAR=64。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "mixed精度组合：srcLocal数据类型=half；scalar数据类型=half；dstLocal数据类型=float；PAR=64。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "调用示例",
      children: "调用示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本样例中只展示Compute流程中的部分代码。如果开发者需要运行样例代码，请将该代码段拷贝并替换", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-scalar-ternary-instruction/scalar-ternaryinstructions-more-examples",
        children: "更多样例"
      }), "完整样例模板中Compute函数的部分代码即可。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "tensor前n个数据计算样例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AscendC::Axpy(dstLocal, src0Local, (half)2.0, 512);// half精度组合\n"
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
726747(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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