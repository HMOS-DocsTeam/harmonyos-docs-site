"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["922920"], {
325354(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_basic_apis_cannkit_vector_computation_cannkit_data_filling_cannkit_data_duplicate_cannkit_data_duplicate_md_6c4_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-ascendc-operator-interface-cannkit-ascend-c-api-cannkit-basic-apis-cannkit-vector-computation-cannkit-data-filling-cannkit-data-duplicate-cannkit-data-duplicate-md-6c4.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_basic_apis_cannkit_vector_computation_cannkit_data_filling_cannkit_data_duplicate_cannkit_data_duplicate_md_6c4_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-data-filling/cannkit-data-duplicate/cannkit-data-duplicate","title":"Duplicate","description":"功能说明","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-data-filling/cannkit-data-duplicate/cannkit-data-duplicate.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-data-filling/cannkit-data-duplicate","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-data-filling/cannkit-data-duplicate/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-data-filling/cannkit-data-duplicate/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Duplicate","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-data-duplicate","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"TransDataTo5HD","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-data-conversion/cannkit-transdatato5hd/"},"next":{"title":"CreateVecIndex","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-data-filling/cannkit-data-createvecindex/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-data-filling/cannkit-data-duplicate/cannkit-data-duplicate.md


const frontMatter = {
	title: 'Duplicate',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-data-duplicate',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = 'Duplicate';

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
  "value": "支持的型号",
  "id": "支持的型号",
  "level": 2
}, {
  "value": "注意事项",
  "id": "注意事项",
  "level": 2
}, {
  "value": "返回值",
  "id": "返回值",
  "level": 2
}, {
  "value": "调用示例",
  "id": "调用示例",
  "level": 2
}, {
  "value": "样例模板",
  "id": "样例模板",
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
        id: "duplicate",
        children: "Duplicate"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能说明",
      children: "功能说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将一个变量或一个立即数，复制多次并填充到向量，其中PAR表示矢量计算单元一个迭代能够处理的元素个数："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(178330)/* ["default"] */.A) + "",
        width: "335",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数原型",
      children: "函数原型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "tensor前n个数据计算："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "template <typename T> \nvoid Duplicate(const LocalTensor<T>& dstLocal, const T& scalarValue, const int32_t& calCount)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "参数说明",
      children: "参数说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " 参数说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "输入/输出"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
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
            }), "，支持的TPosition为VECIN/VECCALC/VECOUT。  LocalTensor的起始地址需要32字节对齐。  Kirin9020系列处理器，支持的数据类型为：uint8/int8/uint16_t/int16_t/half/uint32_t/int32_t/float16/float  KirinX90系列处理器，支持的数据类型为：uint8/int8/uint16_t/int16_t/half/uint32_t/int32_t/float16/float"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "scalarValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被复制的源操作数，支持输入变量和立即数，数据类型需与dstLocal中元素的数据类型保持一致。"
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
      id: "支持的型号",
      children: "支持的型号"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kirin9020系列处理器"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "KirinX90系列处理器"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "注意事项",
      children: "注意事项"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["操作数地址偏移对齐要求请参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-general-constraints",
          children: "通用约束"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "开发者输入立即数需自行保证不超出dstLocal中元素数据类型对应的大小范围。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "返回值",
      children: "返回值"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "无"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "调用示例",
      children: "调用示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本样例中只展示Compute流程中的部分代码。如果开发者需要运行样例代码，请将该代码段拷贝并替换", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%A0%B7%E4%BE%8B%E6%A8%A1%E6%9D%BF",
        children: "样例模板"
      }), "中的Compute函数粗体部分即可。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "tensor前n个数据计算样例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "half inputVal(18.0);\nAscendC::Duplicate<half>(dstLocal, inputVal, srcDataSize);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "结果示例如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "输入数据：[0 1.0 2.0 ... 254.0 255.0]    // 不关心输入数据，会被Duplicate盖掉\n输出数据：[18.0 18.0 18.0 ... 18.0 18.0]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "样例模板",
      children: "样例模板"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"kernel_operator.h\"\n class KernelDuplicate {\n public:\n     __aicore__ inline KernelDuplicate() {}\n     __aicore__ inline void Init(__gm__ uint8_t* src, __gm__ uint8_t* dstGm)\n     {\n         srcGlobal.SetGlobalBuffer((__gm__ half*)src);\n         dstGlobal.SetGlobalBuffer((__gm__ half*)dstGm);\n         pipe.InitBuffer(inQueueSrc, 1, srcDataSize * sizeof(half));\n         pipe.InitBuffer(outQueueDst, 1, dstDataSize * sizeof(half));\n     }\n     __aicore__ inline void Process()\n     {\n         CopyIn();\n         Compute();\n         CopyOut();\n     }\n private:\n     __aicore__ inline void CopyIn()\n     {\n         AscendC::LocalTensor<half> srcLocal = inQueueSrc.AllocTensor<half>();\n         AscendC::DataCopy(srcLocal, srcGlobal, srcDataSize);\n         inQueueSrc.EnQue(srcLocal);\n     }\n     __aicore__ inline void Compute()\n     {\n         AscendC::LocalTensor<half> srcLocal = inQueueSrc.DeQue<half>();\n         AscendC::LocalTensor<half> dstLocal = outQueueDst.AllocTensor<half>();\n         half inputVal(18.0);\n         AscendC::Duplicate<half>(dstLocal, inputVal, srcDataSize);\n         outQueueDst.EnQue<half>(dstLocal);\n         inQueueSrc.FreeTensor(srcLocal);\n     }\n     __aicore__ inline void CopyOut()\n     {\n         AscendC::LocalTensor<half> dstLocal = outQueueDst.DeQue<half>();\n         AscendC::DataCopy(dstGlobal, dstLocal, dstDataSize);\n         outQueueDst.FreeTensor(dstLocal);\n     }\n private:\n     AscendC::TPipe pipe;\n     AscendC::TQue<AscendC::QuePosition::VECIN, 1> inQueueSrc;\n     AscendC::TQue<AscendC::QuePosition::VECOUT, 1> outQueueDst;\n     AscendC::GlobalTensor<half> srcGlobal, dstGlobal;\n     int srcDataSize = 256;\n     int dstDataSize = 256;\n };\n extern \"C\" __global__ __aicore__ void duplicate_kernel(__gm__ uint8_t* src, __gm__ uint8_t* dstGm)\n {\n     KernelDuplicate op;\n     op.Init(src, dstGm);\n     op.Process();\n }\n"
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
178330(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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