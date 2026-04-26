"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["67920"], {
33485(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_basic_apis_cannkit_vector_computation_cannkit_data_conversion_cannkit_transpose_cannkit_transpose_md_127_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-ascendc-operator-interface-cannkit-ascend-c-api-cannkit-basic-apis-cannkit-vector-computation-cannkit-data-conversion-cannkit-transpose-cannkit-transpose-md-127.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_basic_apis_cannkit_vector_computation_cannkit_data_conversion_cannkit_transpose_cannkit_transpose_md_127_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-data-conversion/cannkit-transpose/cannkit-transpose","title":"Transpose","description":"功能说明","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-data-conversion/cannkit-transpose/cannkit-transpose.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-data-conversion/cannkit-transpose","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-data-conversion/cannkit-transpose/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-data-conversion/cannkit-transpose/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Transpose","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-transpose","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"精度转换指令","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-precision-conversion-instruction/"},"next":{"title":"TransDataTo5HD","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-data-conversion/cannkit-transdatato5hd/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-data-conversion/cannkit-transpose/cannkit-transpose.md


const frontMatter = {
	title: 'Transpose',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-transpose',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = 'Transpose';

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
        id: "transpose",
        children: "Transpose"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能说明",
      children: "功能说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "可实现16*16的二维矩阵数据块的转置。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "可实现[N, C, H, W]与[N, H, W, C]互相转换。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数原型",
      children: "函数原型"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "普通转置，支持16*16的二维矩阵数据块进行转置"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "template <typename T> \nvoid Transpose(const LocalTensor<T>& dstLocal, const LocalTensor<T>& srcLocal)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "增强转置，支持16*16的二维矩阵数据块转置，支持[N, C, H, W]与[N, H, W, C]互相转换"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "template <typename T> \nvoid Transpose(const LocalTensor<T> &dstLocal, const LocalTensor<T> &srcLocal, const LocalTensor<uint8_t> &sharedTmpBuffer, const TransposeParamsExt &transposeParams)\n"
          })
        }), "\n"]
      }), "\n"]
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
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["操作数的数据类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "普通转置接口:"
              })
            }), "  Kirin9020系列处理器，支持的数据类型为：half/int16/uint16  KirinX90系列处理器，支持的数据类型为：half/int16/uint16  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "增强转置接口:"
              })
            }), "  参考表4。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表2"
        })
      }), " 接口参数说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            }), "，支持的TPosition为VECIN/VECCALC/VECOUT。  LocalTensor的起始地址需要32字节对齐。"]
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
            }), "，支持的TPosition为VECIN/VECCALC/VECOUT。  LocalTensor的起始地址需要32字节对齐。  数据类型需要与dstLocal保持一致。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sharedTmpBuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "共享的临时Buffer Tensor，sharedTmpBuffer的大小参考表5。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "transposeParams"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "控制Transpose的数据结构。结构体内包含：输入的shape信息和transposeType参数。该数据结构的定义请参考表3。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表3"
        })
      }), " VtransposeParams结构体内参数说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "nSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n轴长度，取值范围：m∈[0, 65535]。默认值为0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "c轴长度，取值范围：m∈[0, 65535]。默认值为0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "h轴长度，取值范围：m∈[0, 65535]。默认值为0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "wSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "w轴长度，取值范围：m∈[0, 65535]。默认值为0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "transposeType"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["数据排布及reshape的类型，类型为TransposeType枚举类。具体取值为：TRANSPOSE_TYPE_NONE、TRANSPOSE_ND2ND_B16、TRANSPOSE_NCHW2NHWC、TRANSPOSE_NHWC2NCHW；  当前预留参数，暂不支持：TRANSPOSE_NZ2ND_0213、TRANSPOSE_NZ2NZ_0213、TRANSPOSE_NZ2NZ_012_WITH_N、TRANSPOSE_NZ2ND_012_WITH_N、TRANSPOSE_NZ2ND_012_WITHOUT_N、TRANSPOSE_NZ2NZ_012_WITHOUT_N、TRANSPOSE_ND2ND_ONLY、TRANSPOSE_ND_UB_GM、TRANSPOSE_GRAD_ND_UB_GM。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 当transposeType为TRANSPOSE_ND2ND_B16时，hSize和wSize必须传入16，nSize和cSize传入无效。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表4"
        })
      }), " 增强转置接口支持的数据类型"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "transposeType"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "支持的数据类型"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPOSE_ND2ND_B16"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Kirin9020系列处理器  KirinX90系列处理器  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 如果要实现int16_t/half类型，shape为[16, 16]二维矩阵的转置，可使用普通转置接口。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPOSE_NCHW2NHWC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kirin9020系列处理器  KirinX90系列处理器"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPOSE_NHWC2NCHW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kirin9020系列处理器  KirinX90系列处理器"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表5"
        })
      }), " 增强转置接口sharedTmpBuffer所需的大小"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "transposeType"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "支持的数据类型"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPOSE_ND2ND_B16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kirin9020系列处理器  KirinX90系列处理器"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPOSE_NCHW2NHWC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kirin9020系列处理器  KirinX90系列处理器"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSPOSE_NHWC2NCHW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kirin9020系列处理器  KirinX90系列处理器"
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
        children: "该指令不可迭代（即不能通过repeatTimes重复）。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[N, C, H, W]与[N, H, W, C]互相转换，H * W需要32B对齐。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "普通转置接口支持srcLocal和dstLocal复用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "增强转置接口，transposeType为TRANSPOSE_ND2ND_B16时支持srcLocal和dstLocal复用，transposeType为TRANSPOSE_NCHW2NHWC、TRANSPOSE_NHWC2NCHW时不支持srcLocal和dstLocal复用。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "返回值",
      children: "返回值"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "无"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "调用示例",
      children: "调用示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "普通接口调用示例，该示例对[16, 16]的half类型矩阵进行转置。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include \"kernel_operator.h\"\n  \n class KernelTranspose {\n public:\n     __aicore__ inline KernelTranspose() {}\n     __aicore__ inline void Init(__gm__ uint8_t* src, __gm__ uint8_t* dstGm)\n     {\n         srcGlobal.SetGlobalBuffer((__gm__ half*)src);\n         dstGlobal.SetGlobalBuffer((__gm__ half*)dstGm);\n  \n         pipe.InitBuffer(inQueueSrc, 1, srcDataSize * sizeof(half));\n         pipe.InitBuffer(outQueueDst, 1, dstDataSize * sizeof(half));\n     }\n     __aicore__ inline void Process()\n     {\n         CopyIn();\n         Compute();\n         CopyOut();\n     }\n private:\n     __aicore__ inline void CopyIn()\n     {\n         AscendC::LocalTensor<half> srcLocal = inQueueSrc.AllocTensor<half>();\n         AscendC::DataCopy(srcLocal, srcGlobal, srcDataSize);\n         inQueueSrc.EnQue(srcLocal);\n     }\n     __aicore__ inline void Compute()\n     {\n         AscendC::LocalTensor<half> srcLocal = inQueueSrc.DeQue<half>();\n         AscendC::LocalTensor<half> dstLocal = outQueueDst.AllocTensor<half>();\n  \n         AscendC::Transpose<half>(dstLocal, srcLocal);\n  \n         outQueueDst.EnQue<half>(dstLocal);\n         inQueueSrc.FreeTensor(srcLocal);\n     }\n     __aicore__ inline void CopyOut()\n     {\n         AscendC::LocalTensor<half> dstLocal = outQueueDst.DeQue<half>();\n         AscendC::DataCopy(dstGlobal, dstLocal, dstDataSize);\n         outQueueDst.FreeTensor(dstLocal);\n     }\n private:\n     AscendC::TPipe pipe;\n     AscendC::TQue<AscendC::QuePosition::VECIN, 1> inQueueSrc;\n     AscendC::TQue<AscendC::QuePosition::VECOUT, 1> outQueueDst;\n  \n     AscendC::GlobalTensor<half> srcGlobal, dstGlobal;\n     int srcDataSize = 256;\n     int dstDataSize = 256;\n };\n  \n extern \"C\" __global__ __aicore__ void transpose_kernel(__gm__ uint8_t* src, __gm__ uint8_t* dstGm)\n {\n     KernelTranspose op;\n     op.Init(src, dstGm);\n     op.Process();\n }\n输入数据(src_gm):\n [[  0.   1.   2.   3.   4.   5.   6.   7.   8.   9.  10.  11.  12.  13.\n    14.  15.]\n  [ 16.  17.  18.  19.  20.  21.  22.  23.  24.  25.  26.  27.  28.  29.\n    30.  31.]\n  [ 32.  33.  34.  35.  36.  37.  38.  39.  40.  41.  42.  43.  44.  45.\n    46.  47.]\n  [ 48.  49.  50.  51.  52.  53.  54.  55.  56.  57.  58.  59.  60.  61.\n    62.  63.]\n  [ 64.  65.  66.  67.  68.  69.  70.  71.  72.  73.  74.  75.  76.  77.\n    78.  79.]\n  [ 80.  81.  82.  83.  84.  85.  86.  87.  88.  89.  90.  91.  92.  93.\n    94.  95.]\n  [ 96.  97.  98.  99. 100. 101. 102. 103. 104. 105. 106. 107. 108. 109.\n   110. 111.]\n  [112. 113. 114. 115. 116. 117. 118. 119. 120. 121. 122. 123. 124. 125.\n   126. 127.]\n  [128. 129. 130. 131. 132. 133. 134. 135. 136. 137. 138. 139. 140. 141.\n   142. 143.]\n  [144. 145. 146. 147. 148. 149. 150. 151. 152. 153. 154. 155. 156. 157.\n   158. 159.]\n  [160. 161. 162. 163. 164. 165. 166. 167. 168. 169. 170. 171. 172. 173.\n   174. 175.]\n  [176. 177. 178. 179. 180. 181. 182. 183. 184. 185. 186. 187. 188. 189.\n   190. 191.]\n  [192. 193. 194. 195. 196. 197. 198. 199. 200. 201. 202. 203. 204. 205.\n   206. 207.]\n  [208. 209. 210. 211. 212. 213. 214. 215. 216. 217. 218. 219. 220. 221.\n   222. 223.]\n  [224. 225. 226. 227. 228. 229. 230. 231. 232. 233. 234. 235. 236. 237.\n   238. 239.]\n  [240. 241. 242. 243. 244. 245. 246. 247. 248. 249. 250. 251. 252. 253.\n   254. 255.]]\n  \n输出数据(dst_gm):\n [[  0.  16.  32.  48.  64.  80.  96. 112. 128. 144. 160. 176. 192. 208.\n   224. 240.]\n  [  1.  17.  33.  49.  65.  81.  97. 113. 129. 145. 161. 177. 193. 209.\n   225. 241.]\n  [  2.  18.  34.  50.  66.  82.  98. 114. 130. 146. 162. 178. 194. 210.\n   226. 242.]\n  [  3.  19.  35.  51.  67.  83.  99. 115. 131. 147. 163. 179. 195. 211.\n   227. 243.]\n  [  4.  20.  36.  52.  68.  84. 100. 116. 132. 148. 164. 180. 196. 212.\n   228. 244.]\n  [  5.  21.  37.  53.  69.  85. 101. 117. 133. 149. 165. 181. 197. 213.\n   229. 245.]\n  [  6.  22.  38.  54.  70.  86. 102. 118. 134. 150. 166. 182. 198. 214.\n   230. 246.]\n  [  7.  23.  39.  55.  71.  87. 103. 119. 135. 151. 167. 183. 199. 215.\n   231. 247.]\n  [  8.  24.  40.  56.  72.  88. 104. 120. 136. 152. 168. 184. 200. 216.\n   232. 248.]\n  [  9.  25.  41.  57.  73.  89. 105. 121. 137. 153. 169. 185. 201. 217.\n   233. 249.]\n  [ 10.  26.  42.  58.  74.  90. 106. 122. 138. 154. 170. 186. 202. 218.\n   234. 250.]\n  [ 11.  27.  43.  59.  75.  91. 107. 123. 139. 155. 171. 187. 203. 219.\n   235. 251.]\n  [ 12.  28.  44.  60.  76.  92. 108. 124. 140. 156. 172. 188. 204. 220.\n   236. 252.]\n  [ 13.  29.  45.  61.  77.  93. 109. 125. 141. 157. 173. 189. 205. 221.\n   237. 253.]\n  [ 14.  30.  46.  62.  78.  94. 110. 126. 142. 158. 174. 190. 206. 222.\n   238. 254.]\n  [ 15.  31.  47.  63.  79.  95. 111. 127. 143. 159. 175. 191. 207. 223.\n   239. 255.]]\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "增强接口调用示例，完成half类型的[N, C, H, W]->[N, H, W, C]转置。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include \"kernel_operator.h\"\n  \n template <typename T> \n class Kernel4dTrans {\n public:\n     __aicore__ inline Kernel4dTrans() {}\n     __aicore__ inline void Init(__gm__ uint8_t *srcGm, __gm__ uint8_t *dstGm)\n     {\n         inputSize = N * C * H * W;\n         tmpBufferSize = (C + 2) * 16 * 16;\n         srcGlobal.SetGlobalBuffer((__gm__ T *)srcGm);\n         dstGlobal.SetGlobalBuffer((__gm__ T *)dstGm);\n         pipe.InitBuffer(inQueueSrcVecIn, 1, inputSize*sizeof(T));\n         pipe.InitBuffer(inQueueSrcVecOut, 1, inputSize*sizeof(T));\n         pipe.InitBuffer(tmpQueue, 1, tmpBufferSize * sizeof(T));\n     }\n     __aicore__ inline void Process()\n     {\n         CopyIn();\n         Compute();\n         CopyOut();\n     }\n private:\n     __aicore__ inline void CopyIn()\n     {\n         AscendC::LocalTensor<T> srcLocal = inQueueSrcVecIn.AllocTensor<T>();\n         AscendC::DataCopy(srcLocal, srcGlobal, inputSize);\n         inQueueSrcVecIn.EnQue(srcLocal);\n     }\n     __aicore__ inline void Compute()\n     {\n         AscendC::LocalTensor<T> srcLocal = inQueueSrcVecIn.DeQue<T>();\n         AscendC::LocalTensor<T> dstLocal = inQueueSrcVecOut.AllocTensor<T>();\n         AscendC::LocalTensor<uint8_t> stackBuffer = tmpQueue.AllocTensor<uint8_t>();\n  \n         AscendC::TransposeParamsExt transposeParams;\n         transposeParams.nSize = N;\n         transposeParams.cSize = C;\n         transposeParams.hSize = H;\n         transposeParams.wSize = W;\n         transposeParams.transposeType = transposetype;\n         AscendC::Transpose(dstLocal, srcLocal, stackBuffer, transposeParams);\n         inQueueSrcVecOut.EnQue<T>(dstLocal);\n         inQueueSrcVecIn.FreeTensor(srcLocal);\n         tmpQueue.FreeTensor(stackBuffer);\n     }\n     __aicore__ inline void CopyOut()\n     {\n         AscendC::LocalTensor<T> dstLocal = inQueueSrcVecOut.DeQue<T>();\n         AscendC::DataCopy(dstGlobal, dstLocal, inputSize);\n         inQueueSrcVecOut.FreeTensor(dstLocal);\n     }\n private:\n     AscendC::TPipe pipe;\n     AscendC::TQue<AscendC::QuePosition::VECIN, 1> inQueueSrcVecIn;\n     AscendC::TQue<AscendC::QuePosition::VECOUT, 1> inQueueSrcVecOut;\n     AscendC::TQue<AscendC::QuePosition::VECCALC, 1> tmpQueue;\n  \n     AscendC::GlobalTensor<T> srcGlobal;\n     AscendC::GlobalTensor<T> dstGlobal;\n     uint32_t N = 3;\n     uint32_t C = 3;\n     uint32_t H = 2;\n     uint32_t W = 8;\n     uint32_t inputSize, tmpBufferSize;\n     AscendC::TransposeType transposetype = AscendC::TransposeType::TRANSPOSE_NCHW2NHWC;\n };\n  \n extern \"C\" __global__ __aicore__ void transpose_kernel(__gm__ uint8_t* srcGm, __gm__ uint8_t* dstGm)\n {\n     Kernel4dTrans<half>op;\n     op.Init(srcGm, dstGm);\n     op.Process();\n }\n"
          })
        }), "\n"]
      }), "\n"]
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