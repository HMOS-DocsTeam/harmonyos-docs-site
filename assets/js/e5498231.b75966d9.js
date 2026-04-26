"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["411571"], {
609161(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_basic_apis_cannkit_vector_computation_cannkit_vector_calculation_monocular_cannkit_vector_calculation_abs_cannkit_vect_e54_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-ascendc-operator-interface-cannkit-ascend-c-api-cannkit-basic-apis-cannkit-vector-computation-cannkit-vector-calculation-monocular-cannkit-vector-calculation-abs-cannkit-vect-e54.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_basic_apis_cannkit_vector_computation_cannkit_vector_calculation_monocular_cannkit_vector_calculation_abs_cannkit_vect_e54_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-monocular/cannkit-vector-calculation-abs/cannkit-vector-calculation-abs","title":"Abs","description":"函数功能","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-monocular/cannkit-vector-calculation-abs/cannkit-vector-calculation-abs.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-monocular/cannkit-vector-calculation-abs","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-monocular/cannkit-vector-calculation-abs/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-monocular/cannkit-vector-calculation-abs/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Abs","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-vector-calculation-abs","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Ln","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-monocular/cannkit-vector-calculation-lnln/"},"next":{"title":"Reciprocal","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-monocular/cannkit-reciprocal/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-monocular/cannkit-vector-calculation-abs/cannkit-vector-calculation-abs.md


const frontMatter = {
	title: 'Abs',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-vector-calculation-abs',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = 'Abs';

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
        id: "abs",
        children: "Abs"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数功能",
      children: "函数功能"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "按元素取绝对值，计算公式如下，其中PAR表示矢量计算单元一个迭代能够处理的元素个数："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(180665)/* ["default"] */.A) + "",
        width: "403",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数原型",
      children: "函数原型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "tensor前n个数据计算："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "template <typename T> \n __aicore__ inline void Abs(const LocalTensor<T>& dstLocal, const LocalTensor<T>& srcLocal, const int32_t& calCount)\n"
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
        children: "AscendC::Abs(dstLocal, srcLocal, 512);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "结果示例如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "输入数据(srcLocal): [0.0 -1.0 2.0 -3.0 ...]\n输出数据(dstLocal):\n[0.0 1.0 2.0 3.0 ...]\n"
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
180665(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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