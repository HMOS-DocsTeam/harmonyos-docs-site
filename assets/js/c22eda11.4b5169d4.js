"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["51697"], {
761461(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_basic_apis_cannkit_vector_computation_cannkit_vector_calculation_monocular_cannkit_vector_calculation_lnln_cannkit_vec_c22_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-ascendc-operator-interface-cannkit-ascend-c-api-cannkit-basic-apis-cannkit-vector-computation-cannkit-vector-calculation-monocular-cannkit-vector-calculation-lnln-cannkit-vec-c22.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_basic_apis_cannkit_vector_computation_cannkit_vector_calculation_monocular_cannkit_vector_calculation_lnln_cannkit_vec_c22_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-monocular/cannkit-vector-calculation-lnln/cannkit-vector-calculation-lnln","title":"Ln","description":"函数功能","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-monocular/cannkit-vector-calculation-lnln/cannkit-vector-calculation-lnln.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-monocular/cannkit-vector-calculation-lnln","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-monocular/cannkit-vector-calculation-lnln/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-monocular/cannkit-vector-calculation-lnln/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Ln","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-vector-calculation-lnln","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Exp","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-monocular/cannkit-vector-calculation-exp/"},"next":{"title":"Abs","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-monocular/cannkit-vector-calculation-abs/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-monocular/cannkit-vector-calculation-lnln/cannkit-vector-calculation-lnln.md


const frontMatter = {
	title: 'Ln',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-vector-calculation-lnln',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = 'Ln';

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
        id: "ln",
        children: "Ln"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数功能",
      children: "函数功能"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "按元素取自然对数，计算公式如下，其中PAR表示矢量计算单元一个迭代能够处理的元素个数："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(95492)/* ["default"] */.A) + "",
        width: "387",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数原型",
      children: "函数原型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "tensor前n个数据计算："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "template <typename T> \n __aicore__ inline void Ln(const LocalTensor<T>& dstLocal, const LocalTensor<T>& srcLocal, const int32_t& calCount)\n"
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
      children: "tensor前n个数据计算样例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AscendC::Ln(dstLocal, srcLocal, 512);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "结果示例如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "输入数据(srcLocal): [1 2 3 4 ...]\n输出数据(dstLocal):\n[0 0.6931 1.0986 1.3863 ...]\n"
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
95492(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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