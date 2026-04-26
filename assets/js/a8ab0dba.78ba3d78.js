"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["340167"], {
61234(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_advanced_apis_cannkit_high_data_filling_cannkit_high_data_filling_md_a8a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-ascendc-operator-interface-cannkit-ascend-c-api-cannkit-advanced-apis-cannkit-high-data-filling-cannkit-high-data-filling-md-a8a.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_advanced_apis_cannkit_high_data_filling_cannkit_high_data_filling_md_a8a_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-advanced-apis/cannkit-high-data-filling/cannkit-high-data-filling","title":"数据填充","description":"Broadcast","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-advanced-apis/cannkit-high-data-filling/cannkit-high-data-filling.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-advanced-apis/cannkit-high-data-filling","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-advanced-apis/cannkit-high-data-filling/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-advanced-apis/cannkit-high-data-filling/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"数据填充","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-high-data-filling","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Sigmoid","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-advanced-apis/cannkit-activation/cannkit-activation-sigmoid/"},"next":{"title":"原型注册接口(OP_ADD)","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-host-api/cannkit-prototype-registration-and-management/cannkit-prototype-api-registration/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-advanced-apis/cannkit-high-data-filling/cannkit-high-data-filling.md


const frontMatter = {
	title: '数据填充',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-high-data-filling',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '数据填充';

const assets = {

};



const toc = [{
  "value": "Broadcast",
  "id": "broadcast",
  "level": 2
}, {
  "value": "功能说明",
  "id": "功能说明",
  "level": 3
}, {
  "value": "实现原理",
  "id": "实现原理",
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
  "value": "返回值",
  "id": "返回值",
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
    img: "img",
    li: "li",
    ol: "ol",
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
        id: "数据填充",
        children: "数据填充"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "broadcast",
      children: "Broadcast"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "功能说明",
      children: "功能说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将输入按照输出shape进行广播。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "比如A的shape为(2,1)，广播的目标shape为(2,16)，则会将原来的一列扩展为相同的16列。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "输入数据：  [[ 1] [ 2]]\n输出数据：  [[ 1  1  1  1  1  1  1  1  1  1  1  1  1  1  1  1] [ 2  2  2  2  2  2  2  2  2  2  2  2  2  2  2  2]]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "实现原理",
      children: "实现原理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以float类型，ND格式，[m, 1]广播到[m, k]为例，描述Broadcast高阶API内部算法框图，如下图所示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " Broadcast算法框图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(956770)/* ["default"] */.A) + "",
        width: "525",
        height: "234"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "计算过程分为如下几步，均在Vector上进行："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Brcb步骤：将每个元素广播为一个datablock；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Copy步骤：将每个datablock均复制为多个datablock，k对齐场景下即为结果y；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对于k非对齐的场景，再使用GatherMask截取[m, k]个元素， 其中k'表示k向上对齐32B的大小。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数原型",
      children: "函数原型"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过sharedTmpBuffer入参传入临时空间"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "template <typename T, int32_t dim, int32_t axis, bool isReuseSource = false>\n__aicore__ inline void Broadcast(const LocalTensor<T> &dstLocal, const LocalTensor<T> &srcLocal, const uint32_t dstShape[dim], const uint32_t srcShape[dim], LocalTensor<uint8_t> &sharedTmpBuffer)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "接口框架申请临时空间"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "template <typename T, int32_t dim, int32_t axis, bool isReuseSource = false>\n__aicore__ inline void Broadcast(const LocalTensor<T> &dstLocal, const LocalTensor<T> &srcLocal, const uint32_t dstShape[dim], const uint32_t srcShape[dim])\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该接口需要额外的临时空间来存储计算过程中的中间变量。临时空间支持开发者通过sharedTmpBuffer入参传入和接口框架申请两种方式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通过sharedTmpBuffer入参传入，使用该tensor作为临时空间进行处理，接口框架不再申请。该方式开发者可以自行管理sharedTmpBuffer内存空间，并在接口调用完成后，复用该部分内存，内存不会反复申请释放，灵活性较高，内存利用率也较高。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "接口框架申请临时空间，开发者无需申请，但是需要预留临时空间的大小。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过sharedTmpBuffer传入的情况，开发者需要为tensor申请空间；接口框架申请的方式，开发者需要预留临时空间。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "参数说明",
      children: "参数说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " 模板参数说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "功能"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "操作数的数据类型。支持的数据类型为：uint8_t/int8_t/half/float。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dim"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入/输出tensor的维度，目前仅支持1维和2维。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "axis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要广播的维度，目前仅支持0和1。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名称"
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
            }), "，支持的TPosition为VECIN/VECCALC/VECOUT。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "srcLocal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["源操作数。  源操作数的数据类型需要与目的操作数保持一致。  类型为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-data-type-definition/cannkit-localtensor",
              children: "LocalTensor"
            }), "，支持的TPosition为VECIN/VECCALC/VECOUT。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dstShape"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出tensor的shape：uint32_t类型的数组，长度为1或者2， 输入/输出的shape维度数目必须一致。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "srcShape"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入tensor的shape：uint32_t类型的数组，长度为1或者2， 输入/输出的shape维度数目必须一致。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sharedTmpBuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["临时缓存。  类型为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-data-type-definition/cannkit-localtensor",
              children: "LocalTensor"
            }), "，支持的TPosition为VECIN/VECCALC/VECOUT。  用于Broadcast内部复杂计算时存储中间变量，由开发者提供。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "返回值",
      children: "返回值"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "无"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "支持的型号",
      children: "支持的型号"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "KirinX90系列处理器"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "约束说明",
      children: "约束说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["操作数地址偏移对齐要求请参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-general-constraints",
          children: "通用约束"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不支持源操作数与目的操作数地址重叠。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当前仅支持ND格式的输入，不支持其他格式。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "dim目前仅支持1或者2， axis目前仅支持0或者1。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对于Atlas推理系列产品AI Core，在dim=2，axis=1时，srcShape[0]必须为32B对齐。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在dim=2，axis=0时，要求srcShape[1]必须32B对齐。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "调用示例",
      children: "调用示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"kernel_operator.h\"\n\ntemplate <typename T, int32_t dim, int32_t axis>\nclass KernelBroadcast {\npublic:\n    __aicore__ inline KernelBroadcast()\n    {}\n    __aicore__ inline void Init(\n        GM_ADDR srcGm, GM_ADDR dstGm, const uint32_t dstShape[dim], const uint32_t srcShape[dim])\n    {\n        for (uint32_t i = 0; i < dim; i++) {\n            srcSize *= srcShape[i];\n            dstSize *= dstShape[i];\n        }\n        srcGlobal.SetGlobalBuffer(reinterpret_cast<__gm__ T *>(srcGm), srcSize);\n        dstGlobal.SetGlobalBuffer(reinterpret_cast<__gm__ T *>(dstGm), dstSize);\n\n        pipe.InitBuffer(inQueueX, 1, srcSize * sizeof(T));\n        pipe.InitBuffer(outQueue, 1, dstSize * sizeof(T));\n        dstShape_ = dstShape;\n        srcShape_ = srcShape;\n    }\n    __aicore__ inline void Process()\n    {\n        CopyIn();\n        Compute();\n        CopyOut();\n    }\n\nprivate:\n    __aicore__ inline void CopyIn()\n    {\n        AscendC::LocalTensor<T> srcLocal = inQueueX.AllocTensor<T>();\n        AscendC::DataCopy(srcLocal, srcGlobal, srcSize);\n        inQueueX.EnQue(srcLocal);\n    }\n    __aicore__ inline void Compute()\n    {\n        AscendC::LocalTensor<T> dstLocal = outQueue.AllocTensor<T>();\n        AscendC::LocalTensor<T> srcLocal = inQueueX.DeQue<T>();\n        AscendC::Broadcast<T, dim, axis>(dstLocal, srcLocal, dstShape_, srcShape_);\n\n        outQueue.EnQue<T>(dstLocal);\n        inQueueX.FreeTensor(srcLocal);\n    }\n    __aicore__ inline void CopyOut()\n    {\n        AscendC::LocalTensor<T> dstLocal = outQueue.DeQue<T>();\n        AscendC::DataCopy(dstGlobal, dstLocal, dstSize);\n        outQueue.FreeTensor(dstLocal);\n    }\n\nprivate:\n    AscendC::GlobalTensor<T> srcGlobal;\n    AscendC::GlobalTensor<T> dstGlobal;\n\n    AscendC::TPipe pipe;\n    AscendC::TQue<AscendC::TPosition::VECIN, 1> inQueueX;\n    AscendC::TQue<AscendC::TPosition::VECOUT, 1> outQueue;\n    const uint32_t *dstShape_{nullptr};\n    const uint32_t *srcShape_{nullptr};\n    int32_t srcSize{1};\n    int32_t dstSize{1};\n};\n\ntemplate <typename T, int32_t dim, int32_t axis>\n__aicore__ void kernel_broadcast_operator(\n    GM_ADDR srcGm, GM_ADDR dstGm, const uint32_t dstShape[dim], const uint32_t srcShape[dim])\n{\n    KernelBroadcast<T, dim, axis> op;\n    op.Init(srcGm, dstGm, dstShape, srcShape);\n    op.Process();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "结果示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "输入数据（srcLocal）:\n[[ 1] [ 2] [ 3] [ 4] [ 5] [ 6] [ 7] [ 8] [ 9] [10] [11] [12] [13] [14] [15] [16]]\ndim：2\naxis：1\n输出数据（dstLocal）:\n[[ 1  1  1  1  1  1  1  1  1  1  1  1  1  1  1  1]\n[ 2  2  2  2  2  2  2  2  2  2  2  2  2  2  2  2]\n[ 3  3  3  3  3  3  3  3  3  3  3  3  3  3  3  3]\n[ 4  4  4  4  4  4  4  4  4  4  4  4  4  4  4  4]\n[ 5  5  5  5  5  5  5  5  5  5  5  5  5  5  5  5]\n[ 6  6  6  6  6  6  6  6  6  6  6  6  6  6  6  6]\n[ 7  7  7  7  7  7  7  7  7  7  7  7  7  7  7  7]\n[ 8  8  8  8  8  8  8  8  8  8  8  8  8  8  8  8]\n[ 9  9  9  9  9  9  9  9  9  9  9  9  9  9  9  9]\n[10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10]\n[11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11]\n[12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12]\n[13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13]\n[14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14]\n[15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15]\n[16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16]]\n"
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
956770(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799642-16c5ba1bf5f7fef691f7b1b316bc3509.png");

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