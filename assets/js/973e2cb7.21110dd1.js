"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["507128"], {
632527(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_basic_apis_cannkit_vector_computation_cannkit_scalar_binocular_instruction_cannkit_scalar_binocular_maxs_cannkit_scala_973_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-ascendc-operator-interface-cannkit-ascend-c-api-cannkit-basic-apis-cannkit-vector-computation-cannkit-scalar-binocular-instruction-cannkit-scalar-binocular-maxs-cannkit-scala-973.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_basic_apis_cannkit_vector_computation_cannkit_scalar_binocular_instruction_cannkit_scalar_binocular_maxs_cannkit_scala_973_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-scalar-binocular-instruction/cannkit-scalar-binocular-maxs/cannkit-scalar-binocular-maxs","title":"Maxs","description":"功能说明","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-scalar-binocular-instruction/cannkit-scalar-binocular-maxs/cannkit-scalar-binocular-maxs.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-scalar-binocular-instruction/cannkit-scalar-binocular-maxs","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-scalar-binocular-instruction/cannkit-scalar-binocular-maxs/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-scalar-binocular-instruction/cannkit-scalar-binocular-maxs/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Maxs","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-scalar-binocular-maxs","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Muls","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-scalar-binocular-instruction/cannkit-scalar-binocular-muls/"},"next":{"title":"Mins","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-scalar-binocular-instruction/cannkit-scalar-binocular-mins/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-scalar-binocular-instruction/cannkit-scalar-binocular-maxs/cannkit-scalar-binocular-maxs.md


const frontMatter = {
	title: 'Maxs',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-scalar-binocular-maxs',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = 'Maxs';

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
        id: "maxs",
        children: "Maxs"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能说明",
      children: "功能说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "源操作数矢量内每个元素与标量相比，如果比标量大，则取源操作数值，比标量的值小，则取标量值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(206233)/* ["default"] */.A) + "",
        width: "503",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数原型",
      children: "函数原型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "tensor前n个数据计算："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "template <typename T, bool isSetMask = true> \n__aicore__ inline void Maxs(const LocalTensor<T>& dstLocal, const LocalTensor<T>& srcLocal, const T& scalarValue, const int32_t& calCount)\n"
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
            }), "，支持的TPosition为VECIN/VECCALC/VECOUT。  LocalTensor的起始地址需要32字节对齐。  Kirin9020系列处理器，支持的数据类型为：Tensor（int16_t/int32_t/half/float）。  KirinX90系列处理器，支持的数据类型为：Tensor（int16_t/int32_t/half/float）。"]
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
            }), "，支持的TPosition为VECIN/VECCALC/VECOUT。  LocalTensor的起始地址需要32字节对齐。  数据类型需要与目的操作数保持一致。  Kirin9020系列处理器，支持的数据类型为：Tensor（int16_t/int32_t/half/float）。  KirinX90系列处理器，支持的数据类型为：Tensor（int16_t/int32_t/half/float）。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "scalarValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "源操作数，数据类型需要与目的操作数Tensor中元素的数据类型保持一致  Kirin9020系列处理器，支持的数据类型为：Tensor（int16_t/int32_t/half/float）。  KirinX90系列处理器，支持的数据类型为：Tensor（int16_t/int32_t/half/float）。"
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
        children: "int16_t scalar = 2;\nAscendC::Maxs(dstLocal, srcLocal, scalar, 512);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "结果示例如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "输入数据(src0Local): [1 2 3 ... 512]\n输入数据 scalar = 2\n输出数据(dstLocal): [2 2 3 ... 512]\n"
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
206233(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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