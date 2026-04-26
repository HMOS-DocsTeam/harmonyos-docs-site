"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["626534"], {
671099(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_advanced_apis_cannkit_math_cannkit_math_tanh_cannkit_math_tanh_md_0e2_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-ascendc-operator-interface-cannkit-ascend-c-api-cannkit-advanced-apis-cannkit-math-cannkit-math-tanh-cannkit-math-tanh-md-0e2.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_advanced_apis_cannkit_math_cannkit_math_tanh_cannkit_math_tanh_md_0e2_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-advanced-apis/cannkit-math/cannkit-math-tanh/cannkit-math-tanh","title":"Tanh","description":"功能说明","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-advanced-apis/cannkit-math/cannkit-math-tanh/cannkit-math-tanh.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-advanced-apis/cannkit-math/cannkit-math-tanh","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-advanced-apis/cannkit-math/cannkit-math-tanh/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-advanced-apis/cannkit-math/cannkit-math-tanh/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Tanh","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-math-tanh","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"TCubeTiling结构体","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-advanced-apis/cannkit-matmul/cannkit-matmul-tiling-class/cannkit-tcubetiling-structure/"},"next":{"title":"SoftmaxFlashV2","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-advanced-apis/cannkit-activation/cannkit-activation-softmaxflashv2/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-advanced-apis/cannkit-math/cannkit-math-tanh/cannkit-math-tanh.md


const frontMatter = {
	title: 'Tanh',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-math-tanh',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = 'Tanh';

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
        id: "tanh",
        children: "Tanh"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能说明",
      children: "功能说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "按元素做逻辑回归Tanh，计算公式如下，其中PAR表示矢量计算单元一个迭代能够处理的元素个数 ："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(124308)/* ["default"] */.A) + "",
        width: "594",
        height: "53"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(932464)/* ["default"] */.A) + "",
        width: "384",
        height: "55"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数原型",
      children: "函数原型"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "template <typename T, bool isReuseSource = false>\n__aicore__ inline void Tanh(const LocalTensor<T>& dstTensor, const LocalTensor<T>& srcTensor, const uint32_t calCount)\n"
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
            children: "操作数的数据类型。支持的数据类型为：half/float。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isReuseSource"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否允许修改源操作数。该参数预留，传入默认值false即可。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表2"
        })
      }), " 接口参数说明"]
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
            children: "dstTensor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["目的操作数。  类型为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-data-type-definition/cannkit-localtensor",
              children: "LocalTensor"
            }), "，支持的TPosition为VECIN/VECCALC/VECOUT。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "srcTensor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["源操作数。  类型为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-data-type-definition/cannkit-localtensor",
              children: "LocalTensor"
            }), "，支持的TPosition为VECIN/VECCALC/VECOUT。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "calCount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "实际计算数据元素个数。"
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
        children: "输入输出操作数参与计算的数据长度要求32B对齐。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "调用示例",
      children: "调用示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AscendC::TPipe pipe;\n// calCount为实际计算数据元素个数\n// 其它处理省略\nAscendC::Tanh<T, false>(yLocal, xLocal, calCount);\n"
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
932464(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
124308(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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