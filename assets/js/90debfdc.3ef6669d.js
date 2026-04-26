"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["102115"], {
28581(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_basic_apis_cannkit_vector_computation_cannkit_data_distribution_collection_cannkit_data_distribution_collection_md_90d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-ascendc-operator-interface-cannkit-ascend-c-api-cannkit-basic-apis-cannkit-vector-computation-cannkit-data-distribution-collection-cannkit-data-distribution-collection-md-90d.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_basic_apis_cannkit_vector_computation_cannkit_data_distribution_collection_cannkit_data_distribution_collection_md_90d_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-data-distribution-collection/cannkit-data-distribution-collection","title":"数据分散/数据收集","description":"Gather","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-data-distribution-collection/cannkit-data-distribution-collection.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-data-distribution-collection","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-data-distribution-collection/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-data-distribution-collection/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"title":"数据分散/数据收集","sidebar_position":8,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-data-distribution-collection","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"CreateVecIndex","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-data-filling/cannkit-data-createvecindex/"},"next":{"title":"普通数据搬运","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vectorcalculation-data-movement/cannkit-datacopy/cannkit-common-data-movement/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-data-distribution-collection/cannkit-data-distribution-collection.md


const frontMatter = {
	title: '数据分散/数据收集',
	sidebar_position: 8,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-data-distribution-collection',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '数据分散/数据收集';

const assets = {

};



const toc = [{
  "value": "Gather",
  "id": "gather",
  "level": 2
}, {
  "value": "功能说明",
  "id": "功能说明",
  "level": 3
}, {
  "value": "函数原型",
  "id": "函数原型",
  "level": 3
}, {
  "value": "参数说明",
  "id": "参数说明",
  "level": 3
}, {
  "value": "支持的型号",
  "id": "支持的型号",
  "level": 3
}, {
  "value": "约束说明",
  "id": "约束说明",
  "level": 3
}, {
  "value": "调用示例",
  "id": "调用示例",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
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
        id: "数据分散数据收集",
        children: "数据分散/数据收集"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "gather",
      children: "Gather"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "功能说明",
      children: "功能说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "给定输入的张量和一个地址偏移张量，Gather指令根据偏移地址将输入张量按元素收集到结果张量中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数原型",
      children: "函数原型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "tensor前n个数据计算："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "template <typename T> \n__aicore__ inline void Gather(const LocalTensor<T>& dstLocal, const LocalTensor<T>& srcLocal, const LocalTensor<uint32_t>& srcOffsetLocal, const uint32_t srcBaseAddr, const uint32_t count)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "参数说明",
      children: "参数说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " 参数说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            }), "，支持的TPosition为VECIN/VECCALC/VECOUT。  LocalTensor的起始地址需要32字节对齐。  Kirin9020系列处理器，支持的数据类型为：  前n个tensor：uint16_t、int16_t、uint32_t、int32_t、half、float32_t  KirinX90系列处理器，支持的数据类型为：  前n个tensor：uint16_t、int16_t、uint32_t、int32_t、half、float32_t"]
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
            }), "，支持的TPosition为VECIN/VECCALC/VECOUT。  LocalTensor的起始地址需要32字节对齐。  数据类型和dstLocal保持一致。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "srcOffsetLocal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["每个元素在src中对应的地址偏移。  类型为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-data-type-definition/cannkit-localtensor",
              children: "LocalTensor"
            }), "，支持的TPosition为VECIN/VECCALC/VECOUT。  LocalTensor的起始地址需要32字节对齐。  该偏移量相对于src的起始基地址而言。单位为Bytes。地址偏移要大于等于0，取值应保证src元素类型位宽对齐，否则会导致非预期行为，同时需要保证偏移地址后不能超出UB大小数据的范围。  每个元素在src中对应的地址偏移，地址偏移要大于等于0。该偏移量是相对于src的基地址而言，每个数值的单位为Bytes，数据类型根据srcLocal数据类型决定，支持情况如下。  srcOffsetLocal支持数据类型：u32。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "srcBaseAddr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "srcLocal的起始基地址，单位为Bytes。取值应保证src元素类型位宽对齐，否则会导致非预期行为。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "执行处理的数据个数，不得超过srcLocal和srcOffsetLocal的元素个数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "支持的型号",
      children: "支持的型号"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kirin9020系列处理器"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "KirinX90系列处理器"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "约束说明",
      children: "约束说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["操作数地址偏移对齐要求请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-general-constraints",
        children: "通用约束"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "调用示例",
      children: "调用示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"kernel_operator.h\"\ntemplate <typename T>\nclass GatherTest {\npublic:\n    __aicore__ inline GatherTest() {}\n    __aicore__ inline void Init(__gm__ uint8_t* dstGm, __gm__ uint8_t* srcGm,\n        __gm__ uint8_t* srcOffsetGm, const uint32_t count)\n    {\n        m_elementCount = count;\n        m_dstGlobal.SetGlobalBuffer((__gm__ T*)dstGm);\n        m_srcGlobal.SetGlobalBuffer((__gm__ T*)srcGm);\n        m_srcOffsetGlobal.SetGlobalBuffer((__gm__ uint32_t*)srcOffsetGm);\n        m_pipe.InitBuffer(m_queIn, 2, m_elementCount * sizeof(uint32_t));\n        m_pipe.InitBuffer(m_queOut, 2, m_elementCount * sizeof(uint32_t));\n    }\n    __aicore__ inline void Process()\n    {\n        CopyIn();\n        Compute();\n        CopyOut();\n    }\nprivate:\n    __aicore__ inline void CopyIn()\n    {\n        AscendC::LocalTensor<T> srcLocal = m_queIn.AllocTensor<T>();\n        AscendC::DataCopy(srcLocal, m_srcGlobal, m_elementCount);\n        m_queIn.EnQue(srcLocal);\n        AscendC::LocalTensor<uint32_t> srcOffsetLocal = m_queIn.AllocTensor<uint32_t>();\n        AscendC::DataCopy(srcOffsetLocal, m_srcOffsetGlobal, m_elementCount);\n        m_queIn.EnQue(srcOffsetLocal);\n    }\n    __aicore__ inline void Compute()\n    {\n        AscendC::LocalTensor<T> srcLocal = m_queIn.DeQue<T>();\n        AscendC::LocalTensor<uint32_t> srcOffsetLocal = m_queIn.DeQue<uint32_t>();\n        AscendC::LocalTensor<T> dstLocal = m_queOut.AllocTensor<T>();\n        srcLocal.SetSize(m_elementCount);\n        AscendC::Gather(dstLocal, srcLocal, srcOffsetLocal, (uint32_t)0, m_elementCount);\n        m_queIn.FreeTensor(srcLocal);\n        m_queIn.FreeTensor(srcOffsetLocal);\n        m_queOut.EnQue(dstLocal);\n    }\n    __aicore__ inline void CopyOut()\n    {\n        AscendC::LocalTensor<T> dstLocal = m_queOut.DeQue<T>();\n        AscendC::DataCopy(m_dstGlobal, dstLocal, m_elementCount);\n        m_queOut.FreeTensor(dstLocal);\n    }\nprivate:\n    AscendC::TPipe m_pipe;\n    AscendC::TQue<AscendC::TPosition::VECIN, 1> m_queCalc;\n    AscendC::GlobalTensor<T> m_valueGlobal;\n    uint32_t m_concatRepeatTimes;\n    uint32_t m_sortRepeatTimes;\n    uint32_t m_extractRepeatTimes;\n    uint32_t m_elementCount;\n    AscendC::GlobalTensor<uint32_t> m_srcOffsetGlobal;\n    AscendC::GlobalTensor<T> m_srcGlobal;\n    AscendC::GlobalTensor<T> m_dstGlobal;\n    AscendC::TQue<AscendC::TPosition::VECIN, 2> m_queIn;\n    AscendC::TQue<AscendC::TPosition::VECOUT, 2> m_queOut;\n}; // class GatherTest\n\nextern \"C\" __global__ __aicore__ void kernel_gather(GM_ADDR dstGm, GM_ADDR srcGm, GM_ADDR srcOffsetGm)\n{\n    GatherTest<half> op;\n    op.Init(dstGm, srcGm, srcOffsetGm, 128);\n    op.Process();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "结果示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "输入数据srcOffsetLocal:\n[254 252 250 ... 4 2 0]\n输入数据srcLocal（128个half类型数据）:\n[0 1 2 ... 125 126 127]\n输出数据dstGlobal:\n[127 126 125 ... 2 1 0]\n"
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