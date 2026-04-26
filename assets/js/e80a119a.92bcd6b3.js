"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["189494"], {
857022(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_basic_apis_cannkit_vector_computation_cannkit_scalar_binocular_instruction_cannkit_scalar_binocular_mins_cannkit_scala_e80_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-ascendc-operator-interface-cannkit-ascend-c-api-cannkit-basic-apis-cannkit-vector-computation-cannkit-scalar-binocular-instruction-cannkit-scalar-binocular-mins-cannkit-scala-e80.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_basic_apis_cannkit_vector_computation_cannkit_scalar_binocular_instruction_cannkit_scalar_binocular_mins_cannkit_scala_e80_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-scalar-binocular-instruction/cannkit-scalar-binocular-mins/cannkit-scalar-binocular-mins","title":"Mins","description":"功能说明","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-scalar-binocular-instruction/cannkit-scalar-binocular-mins/cannkit-scalar-binocular-mins.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-scalar-binocular-instruction/cannkit-scalar-binocular-mins","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-scalar-binocular-instruction/cannkit-scalar-binocular-mins/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-scalar-binocular-instruction/cannkit-scalar-binocular-mins/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"Mins","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-scalar-binocular-mins","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Maxs","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-scalar-binocular-instruction/cannkit-scalar-binocular-maxs/"},"next":{"title":"ShiftLeft","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-scalar-binocular-instruction/cannkit-scalar-binocular-shiftleft/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-scalar-binocular-instruction/cannkit-scalar-binocular-mins/cannkit-scalar-binocular-mins.md


const frontMatter = {
	title: 'Mins',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-scalar-binocular-mins',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = 'Mins';

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
        id: "mins",
        children: "Mins"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能说明",
      children: "功能说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "源操作数矢量内每个元素与标量相比，如果比标量大，则取标量值，比标量的值小，则取源操作数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(859524)/* ["default"] */.A) + "",
        width: "504",
        height: "37"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数原型",
      children: "函数原型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "tensor前n个数据计算："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "template <typename T, bool isSetMask = true> \n__aicore__ inline void Mins(const LocalTensor<T>& dstLocal, const LocalTensor<T>& srcLocal, const T& scalarValue, const int32_t& calCount)\n"
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
            }), "，支持的TPosition为VECIN/VECCALC/VECOUT。  LocalTensor的起始地址需要32字节对齐。  Kirin9020系列处理器，支持的数据类型为：  前n个tensor：int16_t、int32_t、half、float32_t  KirinX90系列处理器，支持的数据类型为：  前n个tensor：int16_t、int32_t、half、float32_t"]
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
            }), "，支持的TPosition为VECIN/VECCALC/VECOUT。  LocalTensor的起始地址需要32字节对齐。  数据类型需要与目的操作数保持一致。  Kirin9020系列处理器，支持的数据类型为：  前n个tensor：int16_t、int32_t、half、float32_t  KirinX90系列处理器，支持的数据类型为：  前n个tensor：int16_t、int32_t、half、float32_t"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "scalarValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "源操作数，数据类型需要与目的操作数Tensor中元素的数据类型保持一致  Kirin9020系列处理器，支持的数据类型为：  前n个tensor：int16_t、int32_t、half、float32_t  KirinX90系列处理器，支持的数据类型为：  前n个tensor：int16_t、int32_t、half、float32_t"
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
        children: "int16_t scalar = 2;\nAscendC::Mins(dstLocal, srcLocal, scalar, 512);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "结果示例如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "输入数据(src0Local): [1 2 3 ... 512]\n输入数据 scalar = 2\n输出数据(dstLocal): [1 2 2 ... 2]\n"
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
859524(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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