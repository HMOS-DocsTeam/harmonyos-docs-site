"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["401823"], {
390311(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_basic_apis_cannkit_vector_computation_cannkit_scalar_binocular_instruction_cannkit_scalar_binocular_leakyrelu_cannkit_75a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-ascendc-operator-interface-cannkit-ascend-c-api-cannkit-basic-apis-cannkit-vector-computation-cannkit-scalar-binocular-instruction-cannkit-scalar-binocular-leakyrelu-cannkit--75a.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_basic_apis_cannkit_vector_computation_cannkit_scalar_binocular_instruction_cannkit_scalar_binocular_leakyrelu_cannkit_75a_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-scalar-binocular-instruction/cannkit-scalar-binocular-leakyrelu/cannkit-scalar-binocular-leakyrelu","title":"LeakyRelu","description":"功能说明","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-scalar-binocular-instruction/cannkit-scalar-binocular-leakyrelu/cannkit-scalar-binocular-leakyrelu.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-scalar-binocular-instruction/cannkit-scalar-binocular-leakyrelu","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-scalar-binocular-instruction/cannkit-scalar-binocular-leakyrelu/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-scalar-binocular-instruction/cannkit-scalar-binocular-leakyrelu/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"LeakyRelu","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-scalar-binocular-leakyrelu","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"ShiftRight","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-scalar-binocular-instruction/cannkit-scalar-binocular-shiftright/"},"next":{"title":"更多样例","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-scalar-binocular-instruction/cannkit-scalar-binocularinstructions/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-scalar-binocular-instruction/cannkit-scalar-binocular-leakyrelu/cannkit-scalar-binocular-leakyrelu.md


const frontMatter = {
	title: 'LeakyRelu',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-scalar-binocular-leakyrelu',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = 'LeakyRelu';

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
        id: "leakyrelu",
        children: "LeakyRelu"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能说明",
      children: "功能说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["按元素做带泄露线性整流Leaky ReLU：", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(823269)/* ["default"] */.A) + "",
        width: "245",
        height: "16"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "带泄露线性整流函数（Leaky Rectified Linear Unit, Leaky ReLU激活函数），是一种人工神经网络中常用的激活函数，其数学表达式为："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(215712)/* ["default"] */.A) + "",
        width: "165",
        height: "54"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "和ReLU的区别是：ReLU是将所有的负值都设为零，而Leaky Relu 是给所有负值赋予一个斜率。下图表示了Relu和Leaky Relu的区别："
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(821543)/* ["default"] */.A) + "",
        width: "205",
        height: "212"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(497500)/* ["default"] */.A) + "",
        width: "196",
        height: "207"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于Leaky ReLU函数，如果src的值小于零，dst的值等于src的值乘以scalar的值。如果src大于等于零，则dst的值等于src的值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数原型",
      children: "函数原型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "tensor前n个数据计算："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "template <typename T, bool isSetMask = true> \n__aicore__ inline void LeakyRelu(const LocalTensor<T>& dstLocal, const LocalTensor<T>& srcLocal, const T& scalarValue, const int32_t& calCount)\n"
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
            }), "，支持的TPosition为VECIN/VECCALC/VECOUT。  LocalTensor的起始地址需要32字节对齐。  Kirin9020训练系列产品，支持的数据类型为：Tensor（half/float）  KirinX90系列处理器，支持的数据类型为：Tensor（half/float）"]
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
            }), "，支持的TPosition为VECIN/VECCALC/VECOUT。  LocalTensor的起始地址需要32字节对齐。  数据类型需要与目的操作数保持一致。  Kirin9020训练系列产品，支持的数据类型为：Tensor（half/float）  KirinX90系列处理器，支持的数据类型为：Tensor（half/float）"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "scalarValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "源操作数，数据类型需要与目的操作数Tensor中的元素保持一致。  Kirin9020训练系列产品，支持的数据类型为：half/float  KirinX90系列处理器，支持的数据类型为：Tensor（half/float）"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "tensor前n个数据计算样例（本样例中只展示Compute流程中的部分代码，如果开发者需要运行样例代码，请将该代码段拷贝并替换上方样例的Compute函数中粗体部分即可）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "half scalar = 2;\nAscendC::LeakyRelu(dstLocal, srcLocal, scalar, 512);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "结果示例如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "输入数据(srcLocal): [-1. -2. 3. ... 512.]\n输入数据 scalar = 2.\n输出数据(dstLocal): [-2. -4. 3. ... 512.]\n"
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
823269(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
821543(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799620-c92766a825b7f436f30f120a7a92262b.png");

},
215712(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
497500(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439315-61e574045a76fd56348eabf075915a80.png");

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