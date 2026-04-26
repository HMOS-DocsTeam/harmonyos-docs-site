"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["484637"], {
627481(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_basic_apis_cannkit_vector_computation_cannkit_vector_calculation_binocular_cannkit_add_cannkit_add_md_695_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-ascendc-operator-interface-cannkit-ascend-c-api-cannkit-basic-apis-cannkit-vector-computation-cannkit-vector-calculation-binocular-cannkit-add-cannkit-add-md-695.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_basic_apis_cannkit_vector_computation_cannkit_vector_calculation_binocular_cannkit_add_cannkit_add_md_695_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-binocular/cannkit-add/cannkit-add","title":"Add","description":"功能说明","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-binocular/cannkit-add/cannkit-add.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-binocular/cannkit-add","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-binocular/cannkit-add/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-binocular/cannkit-add/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Add","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-add","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"更多样例","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-monocular/cannkit-vector-calculation-binocular-more/"},"next":{"title":"Sub","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-binocular/cannkit-cannkit-sub/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-binocular/cannkit-add/cannkit-add.md


const frontMatter = {
	title: 'Add',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-add',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = 'Add';

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
        id: "add",
        children: "Add"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能说明",
      children: "功能说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "按元素求和，计算公式如下，其中PAR表示矢量计算单元一个迭代能够处理的元素个数："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(210911)/* ["default"] */.A) + "",
        width: "499",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数原型",
      children: "函数原型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "tensor前n个数据计算："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "template <typename T> \n__aicore__ inline void Add(const LocalTensor<T>& dstLocal, const LocalTensor<T>& src0Local, const LocalTensor<T>& src1Local, const int32_t& calCount)\n"
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
            }), "，支持的TPosition为VECIN/VECCALC/VECOUT。  LocalTensor的起始地址需要32字节对齐。  Kirin9020系列处理器，支持的数据类型为：half/float/int16_t/int32_t  KirinX90系列处理器，支持的数据类型为：half/float/int16_t/int32_t"]
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
            }), "，支持的TPosition为VECIN/VECCALC/VECOUT。  LocalTensor的起始地址需要32字节对齐。  两个源操作数的数据类型需要与目的操作数保持一致。  Kirin9020系列处理器，支持的数据类型为：half/float/int16_t/int32_t  KirinX90系列处理器，支持的数据类型为：half/float/int16_t/int32_t"]
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本样例中只展示Compute流程中的部分代码。如果开发者需要运行样例代码，请将该代码段拷贝并替换双目指令样例模板", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-binocular/cannkitvectorcalculation-binocularinstructions",
        children: "更多样例"
      }), "中的Compute函数即可。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "tensor前n个数据计算样例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AscendC::Add(dstLocal, src0Local, src1Local, 512);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "结果示例如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "输入数据(src0Local): [1 2 3 ... 512]\n输入数据(src1Local): [513 514 515 ... 1024]\n输出数据(dstLocal): [514 516 518 ... 1536]\n"
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
210911(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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