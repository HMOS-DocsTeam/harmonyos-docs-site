"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["8732"], {
743803(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_cann_api_hiai_foundation_c_cannkit_total_cannkit_files_cannkit_hiai_single_op_8_h_cannkit_hiai_single_op_8_h_md_58e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-cann-api-hiai-foundation-c-cannkit-total-cannkit-files-cannkit-hiai-single-op-8-h-cannkit-hiai-single-op-8-h-md-58e.json
var site_docs_ref_cann_api_hiai_foundation_c_cannkit_total_cannkit_files_cannkit_hiai_single_op_8_h_cannkit_hiai_single_op_8_h_md_58e_namespaceObject = JSON.parse('{"id":"cann-api/hiai-foundation-c/cannkit-total/cannkit-files/cannkit-hiai-single-op-8h/cannkit-hiai-single-op-8h","title":"hiai_single_op.h","description":"概述","source":"@site/docs-ref/cann-api/hiai-foundation-c/cannkit-total/cannkit-files/cannkit-hiai-single-op-8h/cannkit-hiai-single-op-8h.md","sourceDirName":"cann-api/hiai-foundation-c/cannkit-total/cannkit-files/cannkit-hiai-single-op-8h","slug":"/cann-api/hiai-foundation-c/cannkit-total/cannkit-files/cannkit-hiai-single-op-8h/cannkit-hiai-single-op-8h","permalink":"/harmonyos-docs-site/ref/cann-api/hiai-foundation-c/cannkit-total/cannkit-files/cannkit-hiai-single-op-8h/cannkit-hiai-single-op-8h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"hiai_single_op.h","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit-hiai-single-op-8h","kit":"AI","last_updated":"2026-04-22","slug":"cannkit-hiai-single-op-8h"},"sidebar":"ref","previous":{"title":"hiai_options.h","permalink":"/harmonyos-docs-site/ref/cann-api/hiai-foundation-c/cannkit-total/cannkit-files/cannkit-hiai-options-8h/cannkit-hiai-options-8h"},"next":{"title":"hiai_tensor.h","permalink":"/harmonyos-docs-site/ref/cann-api/hiai-foundation-c/cannkit-total/cannkit-files/cannkit-hiai-tensor-8h/cannkit-hiai-tensor-8h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/cann-api/hiai-foundation-c/cannkit-total/cannkit-files/cannkit-hiai-single-op-8h/cannkit-hiai-single-op-8h.md


const frontMatter = {
	title: 'hiai_single_op.h',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit-hiai-single-op-8h',
	kit: 'AI',
	last_updated: '2026-04-22',
	slug: 'cannkit-hiai-single-op-8h'
};
const contentTitle = 'hiai_single_op.h';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "汇总",
  "id": "汇总",
  "level": 2
}, {
  "value": "结构体",
  "id": "结构体",
  "level": 3
}, {
  "value": "类型定义",
  "id": "类型定义",
  "level": 3
}, {
  "value": "枚举",
  "id": "枚举",
  "level": 3
}, {
  "value": "函数",
  "id": "函数",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    p: "p",
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
        id: "hiai_single_oph",
        children: "hiai_single_op.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义CANN Kit单算子接口，用于单算子的创建、计算以及Tensor和Buffer的管理。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <CANNKit/hiai_single_op.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libhiai_foundation.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.HiAIFoundation"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit",
        children: "CANN"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "结构体",
      children: "结构体"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-total/cannkit-structs/cannkit-sopdesc-convparam/cannkit-sopdesc-convparam",
              children: "HiAISingleOpDescriptor_ConvolutionParam"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaisingleopdescriptor_createconvolution",
              children: "HMS_HiAISingleOpDescriptor_CreateConvolution"
            }), "输入参数。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-total/cannkit-structs/cannkit-sopexec-convparam/cannkit-sopexec-convparam",
              children: "HiAI_SingleOpExecutorConvolutionParam"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaisingleopexecutor_createconvolution",
              children: "HMS_HiAISingleOpExecutor_CreateConvolution"
            }), "输入参数。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-total/cannkit-structs/cannkit-sopexec-fusedconv-actparam/cannkit-sopexec-fusedconv-actparam",
              children: "HiAI_SingleOpExecutorFusedConvolutionActivationParam"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaisingleopexecutor_createfusedconvolutionactivation",
              children: "HMS_HiAISingleOpExecutor_CreateFusedConvolutionActivation"
            }), "输入参数。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "类型定义",
      children: "类型定义"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleoptensordesc",
              children: "HiAI_SingleOpTensorDesc"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleoptensordesc",
              children: "HiAI_SingleOpTensorDesc"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "单算子Tensor描述的句柄。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleopbuffer",
              children: "HiAI_SingleOpBuffer"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleopbuffer",
              children: "HiAI_SingleOpBuffer"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "单算子Buffer句柄。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleoptensor",
              children: "HiAI_SingleOpTensor"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleoptensor",
              children: "HiAI_SingleOpTensor"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "单算子Tensor句柄。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleopoptions",
              children: "HiAI_SingleOpOptions"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleopoptions",
              children: "HiAI_SingleOpOptions"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "单算子选项句柄。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleopdescriptor",
              children: "HiAI_SingleOpDescriptor"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleopdescriptor",
              children: "HiAI_SingleOpDescriptor"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "单算子的算子描述句柄。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-total/cannkit-structs/cannkit-sopdesc-convparam/cannkit-sopdesc-convparam",
              children: "HiAISingleOpDescriptor_ConvolutionParam"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaisingleopdescriptor_createconvolution",
              children: "HMS_HiAISingleOpDescriptor_CreateConvolution"
            }), "输入参数。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-total/cannkit-structs/cannkit-sopexec-convparam/cannkit-sopexec-convparam",
              children: "HiAI_SingleOpExecutorConvolutionParam"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaisingleopexecutor_createconvolution",
              children: "HMS_HiAISingleOpExecutor_CreateConvolution"
            }), "输入参数。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-total/cannkit-structs/cannkit-sopexec-fusedconv-actparam/cannkit-sopexec-fusedconv-actparam",
              children: "HiAI_SingleOpExecutorFusedConvolutionActivationParam"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaisingleopexecutor_createfusedconvolutionactivation",
              children: "HMS_HiAISingleOpExecutor_CreateFusedConvolutionActivation"
            }), "输入参数。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleopexecutor",
              children: "HiAI_SingleOpExecutor"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleopexecutor",
              children: "HiAI_SingleOpExecutor"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "单算子执行器句柄。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleopdatatype",
              children: "HiAI_SingleOpDataType"
            }), " {  HIAI_SINGLEOP_DT_FLOAT = 0,  HIAI_SINGLEOP_DT_FLOAT16 = 1,  HIAI_SINGLEOP_DT_UNDEFINED = 17  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "单算子张量数据类型枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleopformat",
              children: "HiAI_SingleOpFormat"
            }), " {  HIAI_SINGLEOP_FORMAT_NCHW = 0,  HIAI_SINGLEOP_FORMAT_NHWC = 1,  HIAI_SINGLEOP_FORMAT_ND = 2,  HIAI_SINGLEOP_FORMAT_NC1HWC0 = 3,  HIAI_SINGLEOP_FORMAT_NC4HW4 = 28,  HIAI_SINGLEOP_FORMAT_NC8HW8 = 31,  HIAI_SINGLEOP_FORMAT_RESERVED = 255  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "单算子张量排布格式枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleopconvmode",
              children: "HiAI_SingleOpConvMode"
            }), " {  HIAI_SINGLEOP_CONV_MODE_COMMON = 0,  HIAI_SINGLEOP_CONV_MODE_TRANSPOSED = 1,  HIAI_SINGLEOP_CONV_MODE_DEPTHWISE = 2  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "单算子卷积模式枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleoppadmode",
              children: "HiAI_SingleOpPadMode"
            }), " {  HIAI_SINGLEOP_PAD_MODE_SPECIFIC = 0,  HIAI_SINGLEOP_PAD_MODE_SAME = 1,  HIAI_SINGLEOP_PAD_MODE_SAME_UPPER = 2,  HIAI_SINGLEOP_PAD_MODE_SAME_LOWER = 3,  HIAI_SINGLEOP_PAD_MODE_VALID = 4  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "单算子填充模式枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleopactivationtype",
              children: "HiAI_SingleOpActivationType"
            }), " {  HIAI_SINGLEOP_ACTIVATION_TYPE_RELU = 0,  HIAI_SINGLEOP_ACTIVATION_TYPE_RELU6 = 1  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "单算子激活模式枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleopsupportstatus",
              children: "HiAI_SingleOpSupportStatus"
            }), " {  HIAI_SINGLEOP_OPTIMIZED = 0,  HIAI_SINGLEOP_COMMON = 1,  HIAI_SINGLEOP_UNSUPPORTED = 2  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "单算子支持状态枚举。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleoptensordesc",
              children: "HiAI_SingleOpTensorDesc"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaisingleoptensordesc_create",
              children: "HMS_HiAISingleOpTensorDesc_Create"
            }), " (const int64_t *dims, size_t dimNum, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleopdatatype",
              children: "HiAI_SingleOpDataType"
            }), " dataType, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleopformat",
              children: "HiAI_SingleOpFormat"
            }), " format, bool isVirtual)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleoptensordesc",
              children: "HiAI_SingleOpTensorDesc"
            }), "对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["size_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaisingleoptensordesc_getdimensioncount",
              children: "HMS_HiAISingleOpTensorDesc_GetDimensionCount"
            }), " (const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleoptensordesc",
              children: "HiAI_SingleOpTensorDesc"
            }), " *tensorDesc)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["查询", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleoptensordesc",
              children: "HiAI_SingleOpTensorDesc"
            }), "的维度数量。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int64_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaisingleoptensordesc_getdimension",
              children: "HMS_HiAISingleOpTensorDesc_GetDimension"
            }), " (const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleoptensordesc",
              children: "HiAI_SingleOpTensorDesc"
            }), " *tensorDesc, size_t index)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["查询", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleoptensordesc",
              children: "HiAI_SingleOpTensorDesc"
            }), "指定索引的维度长度。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleopdatatype",
              children: "HiAI_SingleOpDataType"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaisingleoptensordesc_getdatatype",
              children: "HMS_HiAISingleOpTensorDesc_GetDataType"
            }), " (const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleoptensordesc",
              children: "HiAI_SingleOpTensorDesc"
            }), " *tensorDesc)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["查询", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleoptensordesc",
              children: "HiAI_SingleOpTensorDesc"
            }), "的数据类型。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleopformat",
              children: "HiAI_SingleOpFormat"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaisingleoptensordesc_getformat",
              children: "HMS_HiAISingleOpTensorDesc_GetFormat"
            }), " (const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleoptensordesc",
              children: "HiAI_SingleOpTensorDesc"
            }), " *tensorDesc)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["查询", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleoptensordesc",
              children: "HiAI_SingleOpTensorDesc"
            }), "的排布格式。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["bool ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaisingleoptensordesc_isvirtual",
              children: "HMS_HiAISingleOpTensorDesc_IsVirtual"
            }), " (const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleoptensordesc",
              children: "HiAI_SingleOpTensorDesc"
            }), " *tensorDesc)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["查询", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleoptensordesc",
              children: "HiAI_SingleOpTensorDesc"
            }), "是否为虚拟张量。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["size_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaisingleoptensordesc_getbytesize",
              children: "HMS_HiAISingleOpTensorDesc_GetByteSize"
            }), " (const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleoptensordesc",
              children: "HiAI_SingleOpTensorDesc"
            }), " *tensorDesc)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["查询基于", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleoptensordesc",
              children: "HiAI_SingleOpTensorDesc"
            }), "的维度和数据类型计算的数据占用字节数。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["void ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaisingleoptensordesc_destroy",
              children: "HMS_HiAISingleOpTensorDesc_Destroy"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleoptensordesc",
              children: "HiAI_SingleOpTensorDesc"
            }), " **tensorDesc)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["释放", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleoptensordesc",
              children: "HiAI_SingleOpTensorDesc"
            }), "对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleopbuffer",
              children: "HiAI_SingleOpBuffer"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaisingleopbuffer_create",
              children: "HMS_HiAISingleOpBuffer_Create"
            }), " (size_t dataSize)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["按照指定的内存大小创建", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleopbuffer",
              children: "HiAI_SingleOpBuffer"
            }), "对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["size_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaisingleopbuffer_getsize",
              children: "HMS_HiAISingleOpBuffer_GetSize"
            }), " (const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleopbuffer",
              children: "HiAI_SingleOpBuffer"
            }), " *buffer)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["查询", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleopbuffer",
              children: "HiAI_SingleOpBuffer"
            }), "的字节大小。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["void * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaisingleopbuffer_getdata",
              children: "HMS_HiAISingleOpBuffer_GetData"
            }), " (const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleopbuffer",
              children: "HiAI_SingleOpBuffer"
            }), " *buffer)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["查询", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleopbuffer",
              children: "HiAI_SingleOpBuffer"
            }), "的内存地址。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaisingleopbuffer_destroy",
              children: "HMS_HiAISingleOpBuffer_Destroy"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleopbuffer",
              children: "HiAI_SingleOpBuffer"
            }), " **buffer)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["释放", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleopbuffer",
              children: "HiAI_SingleOpBuffer"
            }), "对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleoptensor",
              children: "HiAI_SingleOpTensor"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaisingleoptensor_createfromtensordesc",
              children: "HMS_HiAISingleOpTensor_CreateFromTensorDesc"
            }), " (const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleoptensordesc",
              children: "HiAI_SingleOpTensorDesc"
            }), " *desc)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["根据", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleoptensordesc",
              children: "HiAI_SingleOpTensorDesc"
            }), "创建", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleoptensor",
              children: "HiAI_SingleOpTensor"
            }), "对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleoptensor",
              children: "HiAI_SingleOpTensor"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaisingleoptensor_createfromsingleopbuffer",
              children: "HMS_HiAISingleOpTensor_CreateFromSingleOpBuffer"
            }), " (const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleoptensordesc",
              children: "HiAI_SingleOpTensorDesc"
            }), " *desc, void *data, size_t dataSize)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["根据", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleoptensordesc",
              children: "HiAI_SingleOpTensorDesc"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleopbuffer",
              children: "HiAI_SingleOpBuffer"
            }), "的内存地址和数据大小创建", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleoptensor",
              children: "HiAI_SingleOpTensor"
            }), "对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleoptensor",
              children: "HiAI_SingleOpTensor"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaisingleoptensor_createfromconst",
              children: "HMS_HiAISingleOpTensor_CreateFromConst"
            }), " (const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleoptensordesc",
              children: "HiAI_SingleOpTensorDesc"
            }), " *desc, void *data, size_t dataSize)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["根据", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleoptensordesc",
              children: "HiAI_SingleOpTensorDesc"
            }), "、常量数据（如卷积权重、偏置等）的内存地址和数据大小创建", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleoptensor",
              children: "HiAI_SingleOpTensor"
            }), "对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleoptensordesc",
              children: "HiAI_SingleOpTensorDesc"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaisingleoptensor_gettensordesc",
              children: "HMS_HiAISingleOpTensor_GetTensorDesc"
            }), " (const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleoptensor",
              children: "HiAI_SingleOpTensor"
            }), " *tensor)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleoptensor",
              children: "HiAI_SingleOpTensor"
            }), "的Tensor描述。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleopbuffer",
              children: "HiAI_SingleOpBuffer"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaisingleoptensor_getbuffer",
              children: "HMS_HiAISingleOpTensor_GetBuffer"
            }), " (const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleoptensor",
              children: "HiAI_SingleOpTensor"
            }), " *tensor)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleoptensor",
              children: "HiAI_SingleOpTensor"
            }), "的Buffer。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaisingleoptensor_destroy",
              children: "HMS_HiAISingleOpTensor_Destroy"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleoptensor",
              children: "HiAI_SingleOpTensor"
            }), " **tensor)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["释放", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleoptensor",
              children: "HiAI_SingleOpTensor"
            }), "对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleopoptions",
              children: "HiAI_SingleOpOptions"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaisingleopoptions_create",
              children: "HMS_HiAISingleOpOptions_Create"
            }), " (void)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleopoptions",
              children: "HiAI_SingleOpOptions"
            }), "对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["void ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaisingleopoptions_destroy",
              children: "HMS_HiAISingleOpOptions_Destroy"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleopoptions",
              children: "HiAI_SingleOpOptions"
            }), " **options)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["释放", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleopoptions",
              children: "HiAI_SingleOpOptions"
            }), "对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleopdescriptor",
              children: "HiAI_SingleOpDescriptor"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaisingleopdescriptor_createconvolution",
              children: "HMS_HiAISingleOpDescriptor_CreateConvolution"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-total/cannkit-structs/cannkit-sopdesc-convparam/cannkit-sopdesc-convparam",
              children: "HiAISingleOpDescriptor_ConvolutionParam"
            }), " param)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建卷积类（普通卷积、转置卷积、深度卷积）的描述符对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleopdescriptor",
              children: "HiAI_SingleOpDescriptor"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaisingleopdescriptor_createactivation",
              children: "HMS_HiAISingleOpDescriptor_CreateActivation"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleopactivationtype",
              children: "HiAI_SingleOpActivationType"
            }), " activationType, float coef)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建激活函数类的描述符对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["void ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaisingleopdescriptor_destroy",
              children: "HMS_HiAISingleOpDescriptor_Destroy"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleopdescriptor",
              children: "HiAI_SingleOpDescriptor"
            }), " **opDesc)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["释放", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleopdescriptor",
              children: "HiAI_SingleOpDescriptor"
            }), "对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleopsupportstatus",
              children: "HiAI_SingleOpSupportStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaisingleopexecutor_precheckconvolution",
              children: "HMS_HiAISingleOpExecutor_PreCheckConvolution"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-total/cannkit-structs/cannkit-sopexec-convparam/cannkit-sopexec-convparam",
              children: "HiAI_SingleOpExecutorConvolutionParam"
            }), " param)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "预查询卷积算子的支持状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleopsupportstatus",
              children: "HiAI_SingleOpSupportStatus"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaisingleopexecutor_precheckfusedconvolutionactivation",
              children: "HMS_HiAISingleOpExecutor_PreCheckFusedConvolutionActivation"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-total/cannkit-structs/cannkit-sopexec-fusedconv-actparam/cannkit-sopexec-fusedconv-actparam",
              children: "HiAI_SingleOpExecutorFusedConvolutionActivationParam"
            }), " param)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "预查询卷积和激活融合算子的支持状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleopexecutor",
              children: "HiAI_SingleOpExecutor"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaisingleopexecutor_createconvolution",
              children: "HMS_HiAISingleOpExecutor_CreateConvolution"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-total/cannkit-structs/cannkit-sopexec-convparam/cannkit-sopexec-convparam",
              children: "HiAI_SingleOpExecutorConvolutionParam"
            }), " param)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建卷积类算子对应的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleopexecutor",
              children: "HiAI_SingleOpExecutor"
            }), "对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleopexecutor",
              children: "HiAI_SingleOpExecutor"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaisingleopexecutor_createfusedconvolutionactivation",
              children: "HMS_HiAISingleOpExecutor_CreateFusedConvolutionActivation"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-total/cannkit-structs/cannkit-sopexec-fusedconv-actparam/cannkit-sopexec-fusedconv-actparam",
              children: "HiAI_SingleOpExecutorFusedConvolutionActivationParam"
            }), " param)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建卷积和激活融合算子对应的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleopexecutor",
              children: "HiAI_SingleOpExecutor"
            }), "对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaisingleopexecutor_updateoutputtensordesc",
              children: "HMS_HiAISingleOpExecutor_UpdateOutputTensorDesc"
            }), " (const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleopexecutor",
              children: "HiAI_SingleOpExecutor"
            }), " *executor, uint32_t index, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleoptensordesc",
              children: "HiAI_SingleOpTensorDesc"
            }), " *output)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["更新", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleopexecutor",
              children: "HiAI_SingleOpExecutor"
            }), "的输出tensor描述。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["size_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaisingleopexecutor_getworkspacesize",
              children: "HMS_HiAISingleOpExecutor_GetWorkspaceSize"
            }), " (const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleopexecutor",
              children: "HiAI_SingleOpExecutor"
            }), " *executor)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["查询", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleopexecutor",
              children: "HiAI_SingleOpExecutor"
            }), "所需的ION内存工作空间的字节大小。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaisingleopexecutor_init",
              children: "HMS_HiAISingleOpExecutor_Init"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleopexecutor",
              children: "HiAI_SingleOpExecutor"
            }), " *executor, void *workspace, size_t workspaceSize)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["加载", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleopexecutor",
              children: "HiAI_SingleOpExecutor"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaisingleopexecutor_execute",
              children: "HMS_HiAISingleOpExecutor_Execute"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleopexecutor",
              children: "HiAI_SingleOpExecutor"
            }), " *executor, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleoptensor",
              children: "HiAI_SingleOpTensor"
            }), " *input[], int32_t inputNum, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleoptensor",
              children: "HiAI_SingleOpTensor"
            }), " *output[], int32_t outputNum)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "执行同步运算推理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaisingleopexecutor_destroy",
              children: "HMS_HiAISingleOpExecutor_Destroy"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleopexecutor",
              children: "HiAI_SingleOpExecutor"
            }), " **executor)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["销毁", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_singleopexecutor",
              children: "HiAI_SingleOpExecutor"
            }), "对象，释放执行器占用的内存。"]
          })]
        })]
      })]
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