"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["543216"], {
257460(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_basic_apis_cannkit_vector_computation_cannkit_vector_calculation_binocular_cannkit_cannkit_sub_cannkit_cannkit_sub_md_70d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-ascendc-operator-interface-cannkit-ascend-c-api-cannkit-basic-apis-cannkit-vector-computation-cannkit-vector-calculation-binocular-cannkit-cannkit-sub-cannkit-cannkit-sub-md-70d.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_basic_apis_cannkit_vector_computation_cannkit_vector_calculation_binocular_cannkit_cannkit_sub_cannkit_cannkit_sub_md_70d_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-binocular/cannkit-cannkit-sub/cannkit-cannkit-sub","title":"Sub","description":"功能说明","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-binocular/cannkit-cannkit-sub/cannkit-cannkit-sub.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-binocular/cannkit-cannkit-sub","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-binocular/cannkit-cannkit-sub/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-binocular/cannkit-cannkit-sub/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Sub","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-cannkit-sub","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Add","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-binocular/cannkit-add/"},"next":{"title":"Mul","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-binocular/cannkit-vector-calculation-binocular-mul/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-binocular/cannkit-cannkit-sub/cannkit-cannkit-sub.md


const frontMatter = {
	title: 'Sub',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-cannkit-sub',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = 'Sub';

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
        id: "sub",
        children: "Sub"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能说明",
      children: "功能说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "按元素求差，计算公式如下，其中PAR表示矢量计算单元一个迭代能够处理的元素个数："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(8713)/* ["default"] */.A) + "",
        width: "484",
        height: "37"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数原型",
      children: "函数原型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "tensor前n个数据计算："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "template <typename T>\n__aicore__ inline void Sub(const LocalTensor<T>& dstLocal, const LocalTensor<T>& src0Local, const LocalTensor<T>& src1Local, const int32_t& calCount)\n"
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
            }), "，支持的TPosition为VECIN/VECCALC/VECOUT。  LocalTensor的起始地址需要32字节对齐。  Kirin9020系列处理器支持的数据类型为：half/int16_t/float/int32_t  KirinX90系列处理器支持的数据类型为：half/int16_t/float/int32_t"]
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
            }), "，支持的TPosition为VECIN/VECCALC/VECOUT。  LocalTensor的起始地址需要32字节对齐。  两个源操作数的数据类型需要与目的操作数保持一致。  Kirin9020系列处理器支持的数据类型为：half/int16_t/float/int32_t  KirinX90系列处理器支持的数据类型为：half/int16_t/float/int32_t"]
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
        children: "AscendC::Sub(dstLocal, src0Local, src1Local, 512);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "结果示例如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "输入数据(src0Local): [1 2 3 ... 512]\n输入数据(src1Local): [513 514 515 ... 1024]\n输出数据(dstLocal): [-512 -512 -512 ... -512]\n"
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
8713(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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