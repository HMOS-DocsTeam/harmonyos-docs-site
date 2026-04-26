"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["52972"], {
257937(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_basic_apis_cannkit_vector_computation_cannkit_vector_calculation_monocular_cannkit_vector_calculation_exp_cannkit_vect_b9e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-ascendc-operator-interface-cannkit-ascend-c-api-cannkit-basic-apis-cannkit-vector-computation-cannkit-vector-calculation-monocular-cannkit-vector-calculation-exp-cannkit-vect-b9e.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_basic_apis_cannkit_vector_computation_cannkit_vector_calculation_monocular_cannkit_vector_calculation_exp_cannkit_vect_b9e_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-monocular/cannkit-vector-calculation-exp/cannkit-vector-calculation-exp","title":"Exp","description":"函数功能","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-monocular/cannkit-vector-calculation-exp/cannkit-vector-calculation-exp.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-monocular/cannkit-vector-calculation-exp","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-monocular/cannkit-vector-calculation-exp/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-monocular/cannkit-vector-calculation-exp/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Exp","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-vector-calculation-exp","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"ScalarGetSFFValue","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-scalar-computation/cannkit-scalargetsffvalue/"},"next":{"title":"Ln","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-monocular/cannkit-vector-calculation-lnln/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-monocular/cannkit-vector-calculation-exp/cannkit-vector-calculation-exp.md


const frontMatter = {
	title: 'Exp',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-vector-calculation-exp',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = 'Exp';

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
        id: "exp",
        children: "Exp"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数功能",
      children: "函数功能"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "按元素取自然指数，计算公式如下，其中PAR表示矢量计算单元一个迭代能够处理的元素个数："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(790984)/* ["default"] */.A) + "",
        width: "305",
        height: "39"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数原型",
      children: "函数原型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "tensor前n个数据计算："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "template <typename T> \n __aicore__ inline void Exp(const LocalTensor<T>& dstLocal, const LocalTensor<T>& srcLocal, const int32_t& calCount)\n"
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
            }), "，支持的TPosition为VECIN/VECCALC/VECOUT。  LocalTensor的起始地址需要32字节对齐。  Kirin9020系列处理器，支持的数据类型为：half/float。  KirinX90系列处理器，支持的数据类型为：half/float。"]
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
            }), "，支持的TPosition为VECIN/VECCALC/VECOUT。  LocalTensor的起始地址需要32字节对齐。  源操作数的数据类型需要与目的操作数保持一致。  Kirin9020系列处理器，支持的数据类型为：half/float。  KirinX90系列处理器，支持的数据类型为：half/float。"]
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
      children: "tensor前n个数据计算接口样例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AscendC::Exp(dstLocal, srcLocal, 512);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "结果示例如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "输入数据(srcLocal): [0.0 1.0 2.0 3.0 ...]\n输出数据(dstLocal):\n[1.0 2.719 7.391 20.08 ...]\n"
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
790984(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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