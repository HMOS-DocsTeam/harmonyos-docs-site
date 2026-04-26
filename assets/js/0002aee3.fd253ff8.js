"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["163904"], {
918613(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_basic_apis_cannkit_vector_computation_cannkit_vector_calculation_monocular_cannkit_vector_calculation_not_cannkit_vect_000_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-ascendc-operator-interface-cannkit-ascend-c-api-cannkit-basic-apis-cannkit-vector-computation-cannkit-vector-calculation-monocular-cannkit-vector-calculation-not-cannkit-vect-000.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_basic_apis_cannkit_vector_computation_cannkit_vector_calculation_monocular_cannkit_vector_calculation_not_cannkit_vect_000_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-monocular/cannkit-vector-calculation-not/cannkit-vector-calculation-not","title":"Not","description":"函数功能","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-monocular/cannkit-vector-calculation-not/cannkit-vector-calculation-not.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-monocular/cannkit-vector-calculation-not","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-monocular/cannkit-vector-calculation-not/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-monocular/cannkit-vector-calculation-not/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"Not","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-vector-calculation-not","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Rsqrt","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-monocular/cannkit-rsqrt/"},"next":{"title":"Relu","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-monocular/cannkit-vector-calculation-relu/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-monocular/cannkit-vector-calculation-not/cannkit-vector-calculation-not.md


const frontMatter = {
	title: 'Not',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-vector-calculation-not',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = 'Not';

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
        id: "not",
        children: "Not"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数功能",
      children: "函数功能"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "按元素做按位取反，计算公式如下，其中PAR表示矢量计算单元一个迭代能够处理的元素个数 :"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(170032)/* ["default"] */.A) + "",
        width: "368",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数原型",
      children: "函数原型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "tensor前n个数据计算："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "template <typename T>\n__aicore__ inline void Not(const LocalTensor<T>& dstLocal, const LocalTensor<T>& srcLocal, const int32_t& calCount)\n"
      })
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
            }), "，支持的TPosition为VECIN/VECCALC/VECOUT。  LocalTensor的起始地址需要32字节对齐。  Kirin9020系列处理器，支持的数据类型为：  前n个tensor：uint16_t、int16_t  不支持浮点类型（half/float）  KirinX90系列处理器，支持的数据类型为：  前n个tensor：uint16_t、int16_t  不支持浮点类型（half/float）"]
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
            }), "，支持的TPosition为VECIN/VECCALC/VECOUT。  LocalTensor的起始地址需要32字节对齐。  源操作数的数据类型需要与目的操作数保持一致。  Kirin9020系列处理器，支持的数据类型为：  前n个tensor支持：uint16_t、int16_t  不支持浮点类型（half/float）  KirinX90系列处理器，支持的数据类型为：  前n个tensor：uint16_t、int16_t  不支持浮点类型（half/float）"]
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
      children: "本样例中只展示Compute流程中的部分代码。本样例的srcLocal和dstLocal均为int16_t类型，占16位bit。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果开发者需要运行样例代码，请将该代码段拷贝并替换", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-monocular/cannkit-vector-calculation-binocular-more#%E6%A0%B7%E4%BE%8B%E6%A8%A1%E6%9D%BF",
        children: "样例模板"
      }), "中Compute函数的部分代码即可。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "tensor前n个数据计算样例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AscendC::Not(dstLocal, srcLocal, 512);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "结果示例如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "输入数据(srcLocal): [9 -2 8 ... 9 0]\n输出数据(dstLocal):\n[-10 1 -9 ... -10 -1]\n"
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
170032(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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