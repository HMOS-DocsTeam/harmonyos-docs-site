"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["623142"], {
432211(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_basic_apis_cannkit_memory_management_and_synchronization_cannkit_tbufpool_cannkit_initbufpool_cannkit_initbufpool_md_cf6_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-ascendc-operator-interface-cannkit-ascend-c-api-cannkit-basic-apis-cannkit-memory-management-and-synchronization-cannkit-tbufpool-cannkit-initbufpool-cannkit-initbufpool-md-cf6.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_basic_apis_cannkit_memory_management_and_synchronization_cannkit_tbufpool_cannkit_initbufpool_cannkit_initbufpool_md_cf6_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-memory-management-and-synchronization/cannkit-tbufpool/cannkit-initbufpool/cannkit-initbufpool","title":"InitBufPool","description":"功能说明","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-memory-management-and-synchronization/cannkit-tbufpool/cannkit-initbufpool/cannkit-initbufpool.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-memory-management-and-synchronization/cannkit-tbufpool/cannkit-initbufpool","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-memory-management-and-synchronization/cannkit-tbufpool/cannkit-initbufpool/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-memory-management-and-synchronization/cannkit-tbufpool/cannkit-initbufpool/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"InitBufPool","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-initbufpool","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"构造函数","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-memory-management-and-synchronization/cannkit-tbufpool/cannkit-tbufpool-constructor/"},"next":{"title":"InitBuffer","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-memory-management-and-synchronization/cannkit-tbufpool/cannkit-initbuffer/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-memory-management-and-synchronization/cannkit-tbufpool/cannkit-initbufpool/cannkit-initbufpool.md


const frontMatter = {
	title: 'InitBufPool',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-initbufpool',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = 'InitBufPool';

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
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
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
        id: "initbufpool",
        children: "InitBufPool"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能说明",
      children: "功能说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过Tpipe::InitBufPool接口可划分出整块资源，整块TBufPool资源可以继续通过TBufPool::InitBufPool接口划分成小块资源。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数原型",
      children: "函数原型"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "template <class T> \n__aicore__ inline bool InitBufPool(T& bufPool, uint32_t len)\ntemplate <class T, class U> \n__aicore__ inline bool InitBufPool(T& bufPool, uint32_t len, U& shareBuf)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "参数说明",
      children: "参数说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " InitBufPool(T& bufPool, uint32_t len) 原型定义参数说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "bufPool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "新划分的资源池，类型为TBufPool。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "len"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "新划分资源池长度，单位为Byte，非32Bytes对齐会自动向上补齐至32Bytes对齐。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表2"
        })
      }), " InitBufPool(T& bufPool, uint32_t len, U& shareBuf) 原型定义参数说明"]
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
            children: "bufPool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "新划分的资源池，类型为TBufPool。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "len"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "新划分资源池长度，单位为Byte，非32Bytes对齐会自动向上补齐至32Bytes对齐。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "shareBuf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被复用资源池，类型为TBufPool，新划分资源池与被复用资源池共享起始地址及长度。"
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
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "新划分的资源池与被复用资源池的物理内存需要一致，两者共享起始地址及长度。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "输入长度需要小于等于被复用资源池长度。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["其他泛用约束参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-memory-management-and-synchronization/cannkit-tbufpool/cannkit-initbufpool",
          children: "InitBufPool"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "返回值",
      children: "返回值"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "无"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "调用示例",
      children: "调用示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "数据量较大且内存有限时，无法一次完成所有数据搬运，需要拆分成多个阶段计算，每次计算使用其中的一部分数据，可以通过TBufPool资源池进行内存地址复用。本例中，从Tpipe划分出资源池tbufPool0，tbufPool0为src0Gm分配空间后，继续分配了资源池tbufPool1，指定tbufPool1与tbufPool2复用并分别运用于第一、二轮计算，此时tbufPool1及tbufPool2共享起始地址及长度。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class ResetApi {\npublic:\n    __aicore__ inline ResetApi() {}\n    __aicore__ inline void Init(__gm__ uint8_t* src0Gm, __gm__ uint8_t* src1Gm, __gm__ uint8_t* dstGm)\n    {\n        src0Global.SetGlobalBuffer((__gm__ half*)src0Gm);\n        src1Global.SetGlobalBuffer((__gm__ half*)src1Gm);\n        dstGlobal.SetGlobalBuffer((__gm__ half*)dstGm);\n        pipe.InitBufPool(tbufPool0, 131072);\n        tbufPool0.InitBuffer(srcQue0, 1, 65536); // Total src0\n        tbufPool0.InitBufPool(tbufPool1, 65536);\n        tbufPool0.InitBufPool(tbufPool2, 65536, tbufPool1);\n    }\n    __aicore__ inline void Process()\n    {\n        tbufPool1.InitBuffer(srcQue1, 1, 32768);\n        tbufPool1.InitBuffer(dstQue0, 1, 32768);\n        CopyIn();\n        Compute();\n        CopyOut();\n        tbufPool1.Reset();\n        tbufPool2.InitBuffer(srcQue2, 1, 32768);\n        tbufPool2.InitBuffer(dstQue1, 1, 32768);\n        CopyIn1();\n        Compute1();\n        CopyOut1();\n        tbufPool2.Reset();\n        tbufPool0.Reset();\n        pipe.Reset();\n    }\nprivate:\n    __aicore__ inline void CopyIn()\n    {\n        AscendC::LocalTensor<half> src0Local = srcQue0.AllocTensor<half>();\n        AscendC::LocalTensor<half> src1Local = srcQue1.AllocTensor<half>();\n        AscendC::DataCopy(src0Local, src0Global, 16384);\n        AscendC::DataCopy(src1Local, src1Global, 16384);\n        srcQue0.EnQue(src0Local);\n        srcQue1.EnQue(src1Local);\n    }\n    __aicore__ inline void Compute()\n    {\n        AscendC::LocalTensor<half> src0Local = srcQue0.DeQue<half>();\n        AscendC::LocalTensor<half> src1Local = srcQue1.DeQue<half>();\n        AscendC::LocalTensor<half> dstLocal = dstQue0.AllocTensor<half>();\n        AscendC::Add(dstLocal, src0Local, src1Local, 16384);\n        dstQue0.EnQue<half>(dstLocal);\n        srcQue0.FreeTensor(src0Local);\n        srcQue1.FreeTensor(src1Local);\n    }\n    __aicore__ inline void CopyOut()\n    {\n        AscendC::LocalTensor<half> dstLocal = dstQue0.DeQue<half>();\n        AscendC::DataCopy(dstGlobal, dstLocal, 16384);\n        dstQue0.FreeTensor(dstLocal);\n    }\n    __aicore__ inline void CopyIn1()\n    {\n        AscendC::LocalTensor<half> src0Local = srcQue0.AllocTensor<half>();\n        AscendC::LocalTensor<half> src1Local = srcQue2.AllocTensor<half>();\n        AscendC::DataCopy(src0Local, src0Global[16384], 16384);\n        AscendC::DataCopy(src1Local, src1Global[16384], 16384);\n        srcQue0.EnQue(src0Local);\n        srcQue2.EnQue(src1Local);\n    }\n    __aicore__ inline void Compute1()\n    {\n        AscendC::LocalTensor<half> src0Local = srcQue0.DeQue<half>();\n        AscendC::LocalTensor<half> src1Local = srcQue2.DeQue<half>();\n        AscendC::LocalTensor<half> dstLocal = dstQue1.AllocTensor<half>();\n        AscendC::Add(dstLocal, src0Local, src1Local, 16384);\n        dstQue1.EnQue<half>(dstLocal);\n        srcQue0.FreeTensor(src0Local);\n        srcQue2.FreeTensor(src1Local);\n    }\n    __aicore__ inline void CopyOut1()\n    {\n        AscendC::LocalTensor<half> dstLocal = dstQue1.DeQue<half>();\n        AscendC::DataCopy(dstGlobal[16384], dstLocal, 16384);\n        dstQue1.FreeTensor(dstLocal);\n    }\nprivate:\n    AscendC::TPipe pipe;\n    AscendC::TBufPool<AscendC::TPosition::VECCALC> tbufPool0, tbufPool1, tbufPool2;\n    AscendC::TQue<AscendC::QuePosition::VECIN, 1> srcQue0, srcQue1, srcQue2;\n    AscendC::TQue<AscendC::QuePosition::VECOUT, 1> dstQue0, dstQue1;\n    AscendC::GlobalTensor<half> src0Global, src1Global, dstGlobal;\n};\nextern \"C\" __global__ __aicore__ void tbufpool_kernel(__gm__ uint8_t* src0Gm, __gm__ uint8_t* src1Gm, __gm__ uint8_t* dstGm)\n{\n    ResetApi op;\n    op.Init(src0Gm, src1Gm, dstGm);\n    op.Process();\n}\n"
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