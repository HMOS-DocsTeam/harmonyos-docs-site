"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["225226"], {
306317(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_basic_apis_cannkit_memory_management_and_synchronization_cannkit_tque_cannkit_tque_overview_cannkit_tque_overview_md_0e2_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-ascendc-operator-interface-cannkit-ascend-c-api-cannkit-basic-apis-cannkit-memory-management-and-synchronization-cannkit-tque-cannkit-tque-overview-cannkit-tque-overview-md-0e2.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_basic_apis_cannkit_memory_management_and_synchronization_cannkit_tque_cannkit_tque_overview_cannkit_tque_overview_md_0e2_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-memory-management-and-synchronization/cannkit-tque/cannkit-tque-overview/cannkit-tque-overview","title":"简介","description":"模板参数","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-memory-management-and-synchronization/cannkit-tque/cannkit-tque-overview/cannkit-tque-overview.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-memory-management-and-synchronization/cannkit-tque/cannkit-tque-overview","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-memory-management-and-synchronization/cannkit-tque/cannkit-tque-overview/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-memory-management-and-synchronization/cannkit-tque/cannkit-tque-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-tque-overview","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Reset","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-memory-management-and-synchronization/cannkit-tbufpool/cannkit-reset/"},"next":{"title":"AllocTensor","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-memory-management-and-synchronization/cannkit-tque/cannkit-tque-alloctensor/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-memory-management-and-synchronization/cannkit-tque/cannkit-tque-overview/cannkit-tque-overview.md


const frontMatter = {
	title: '简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-tque-overview',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '简介';

const assets = {

};



const toc = [{
  "value": "模板参数",
  "id": "模板参数",
  "level": 2
}, {
  "value": "TQue Buffer限制",
  "id": "tque-buffer限制",
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
        id: "简介",
        children: "简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "模板参数",
      children: "模板参数"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "template <TPosition pos, int32_t depth, auto mask = 0> class TQue{...};\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " TQue模板参数介绍"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pos"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["队列逻辑位置，可以为VECIN、VECOUT、A1、A2、B1、B2、CO1、CO2。关于TPosition的具体介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-memory-management-and-synchronization/cannkit-tposition",
              children: "TPosition"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "depth"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["队列的深度表示该队列可以连续入队/出队操作的最大次数，在代码运行时，对同一个队列有n次连续的EnQue（中间没有DeQue），那么该队列的深度就需要设置为n。  注意，这里的队列深度和double buffer无关，队列机制用于实现流水线并行，double buffer在此基础上进一步提高流水线的利用率。即使队列的深度为1，仍可以开启double buffer。  队列的深度设置为1时，编译器对这种场景做了特殊优化，性能通常更好，", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "推荐设置为1"
              })
            }), "。  - 如队列没有连续入队，队列的深度设置为1。  - 如队列连续2次入队，队列的深度应设置为2，仅在极少数preload场景（比如连续搬入两份数据，计算处理一份，完成后再搬入一份，然后计算处理提前搬入的一份...）可能会使用。其他情况下均不推荐depth >= 2 。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mask"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "保留参数，当前不支持：  Kirin9020系列处理器  KirinX90系列处理器"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tque-buffer限制",
      children: "TQue Buffer限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于TQue分配的Buffer存储着同步事件eventID，故同一个TPosition上QUE Buffer的数量与硬件的同步事件eventID有关。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kirin9020与KirinX90系列处理器，eventID的数量均为8。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "QUE的Buffer数量最大也分别为8个或4个，即能插入的同步事件的个数为8个或4个。当用TPipe的InitBuffer申请TQue时，会受到Buffer数量的限制，TQue能申请到的最大个数分别为8个或4个。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果同时使用的QUE Buffer超出限制，则无法再申请TQue。如果想要继续申请，可以调用FreeAllEvent接口来释放一些暂时不用的TQue。在使用完对应TQue后，用该接口释放对应队列中的所有事件，之后便可再次申请TQue。样例如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 能申请的VECIN position上的buffer数量最大为8。如果超出该限制，在后续使用AllocTensor/FreeTensor可能会出现分配资源失败。故当不开启double buffer时，此时最多能申请8个TQue。\nAscendC::TPipe pipe;\nint len = 1024;\nAscendC::TQue<AscendC::TPosition::VECIN, 1> que0;\nAscendC::TQue<AscendC::TPosition::VECIN, 1> que1;\nAscendC::TQue<AscendC::TPosition::VECIN, 1> que2;\nAscendC::TQue<AscendC::TPosition::VECIN, 1> que3;\nAscendC::TQue<AscendC::TPosition::VECIN, 1> que4;\nAscendC::TQue<AscendC::TPosition::VECIN, 1> que5;\nAscendC::TQue<AscendC::TPosition::VECIN, 1> que6;\nAscendC::TQue<AscendC::TPosition::VECIN, 1> que7;\n  \npipe.InitBuffer(que0, 1, len);\npipe.InitBuffer(que1, 1, len);\npipe.InitBuffer(que2, 1, len);\npipe.InitBuffer(que3, 1, len);\npipe.InitBuffer(que4, 1, len);\npipe.InitBuffer(que5, 1, len);\npipe.InitBuffer(que6, 1, len);\npipe.InitBuffer(que7, 1, len);\n  \n// 如果开启double buffer，此时每一个TQue分配的内存块个数为2，故最多只能申请4个TQue。\nTPipe pipe;\nint len = 1024;\nAscendC::TQue<AscendC::TPosition::VECIN, 1> que0;\nAscendC::TQue<AscendC::TPosition::VECIN, 1> que1;\nAscendC::TQue<AscendC::TPosition::VECIN, 1> que2;\nAscendC::TQue<AscendC::TPosition::VECIN, 1> que3;\n  \npipe.InitBuffer(que0, 2, len);\npipe.InitBuffer(que1, 2, len);\npipe.InitBuffer(que2, 2, len);\npipe.InitBuffer(que3, 2, len);\n  \n// 如果TQue个数已达最大值，可以调用FreeAllEvent接口来继续申请TQue。\nAscendC::TPipe pipe;\nint len = 1024;\nAscendC::TQue<AscendC::TPosition::VECIN, 1> que0;\npipe.InitBuffer(que0, 1, len);\nAscendC::LocalTensor<half> tensor1 = que0.AllocTensor<half>();\nque0.EnQue(tensor1);\ntensor1 = que0.DeQue<half>(); // 将tensor从VECOUT的Queue中搬出\nque0.FreeTensor<half>(tensor1);\nque0.FreeAllEvent(); // 释放que0的所有同步事件，之后可继续申请TQue\nAscendC::TQue<AscendC::TPosition::VECIN, 1> que1;\npipe.InitBuffer(que1, 1, len);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "调用示例",
      children: "调用示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下用例通过传入TQueConfig使能bufferNumber的编译期计算。vector算子不涉及数据格式的转换，所以nd2nz和nz2nd是false。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 开发者自定义的构造TQueConfig的元函数\n__aicore__ constexpr AscendC::TQueConfig GetMyTQueConfig(bool nd2nzIn, bool nz2ndIn, bool scmBlockGroupIn,\n    uint32_t bufferLenIn, uint32_t bufferNumberIn, uint32_t consumerSizeIn, const AscendC::TPosition consumerIn[])\n{\n    return {\n        .nd2nz = nd2nzIn,\n        .nz2nd = nz2ndIn,\n        .scmBlockGroup = scmBlockGroupIn,\n        .bufferLen = bufferLenIn,\n        .bufferNumber = bufferNumberIn,\n        .consumerSize = consumerSizeIn,\n        .consumer = {consumerIn[0], consumerIn[1], consumerIn[2], consumerIn[3],\n            consumerIn[4], consumerIn[5], consumerIn[6], consumerIn[7]}\n    };\n}\nstatic constexpr AscendC::TPosition tp[8] = {AscendC::TPosition::MAX, AscendC::TPosition::MAX, AscendC::TPosition::MAX, AscendC::TPosition::MAX,\n            AscendC::TPosition::MAX, AscendC::TPosition::MAX, AscendC::TPosition::MAX, AscendC::TPosition::MAX};\nstatic constexpr AscendC::TQueConfig conf = GetMyTQueConfig(false, false, false, 0, 1, 0, tp);\ntemplate <typename srcType> class KernelAscendQuant {\npublic:\n    __aicore__ inline KernelAscendQuant() {}\n    __aicore__ inline void Init(GM_ADDR src_gm, GM_ADDR dst_gm, uint32_t inputSize)\n    {\n        dataSize = inputSize;\n        src_global.SetGlobalBuffer(reinterpret_cast<__gm__ srcType*>(src_gm), dataSize);\n        dst_global.SetGlobalBuffer(reinterpret_cast<__gm__ int8_t*>(dst_gm), dataSize);\n        pipe.InitBuffer(inQueueX, 1, dataSize * sizeof(srcType));\n        pipe.InitBuffer(outQueue, 1, dataSize * sizeof(int8_t));\n    }\n    __aicore__ inline void Process()\n    {\n        CopyIn();\n        Compute();\n        CopyOut();\n    }\nprivate:\n    __aicore__ inline void CopyIn()\n    {\n        // ...\n    }\n    __aicore__ inline void Compute()\n    {\n        // ...\n    }\n    __aicore__ inline void CopyOut()\n    {\n        // ...\n    }\nprivate:\n    AscendC::GlobalTensor<srcType> src_global;\n    AscendC::GlobalTensor<int8_t> dst_global;\n    AscendC::TPipe pipe;\n    AscendC::TQue<AscendC::QuePosition::VECIN, 1, &conf> inQueueX;\n    AscendC::TQue<AscendC::QuePosition::VECOUT, 1, &conf> outQueue;\n    uint32_t dataSize = 0;\n};\ntemplate <typename dataType> __aicore__ void kernel_ascend_quant_operator(GM_ADDR src_gm, GM_ADDR dst_gm, uint32_t dataSize)\n{\n    KernelAscendQuant<dataType> op;\n    op.Init(src_gm, dst_gm, dataSize);\n    op.Process();\n}\n"
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