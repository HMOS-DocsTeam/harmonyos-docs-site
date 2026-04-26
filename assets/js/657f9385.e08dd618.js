"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["838263"], {
98089(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_neural_network_runtime_api_neural_network_runtime_c_neural_network_runtime_headerfile_capi_neural_network_runtime_h_capi_neural_network_runtime_h_md_657_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-neural-network-runtime-api-neural-network-runtime-c-neural-network-runtime-headerfile-capi-neural-network-runtime-h-capi-neural-network-runtime-h-md-657.json
var site_docs_ref_neural_network_runtime_api_neural_network_runtime_c_neural_network_runtime_headerfile_capi_neural_network_runtime_h_capi_neural_network_runtime_h_md_657_namespaceObject = JSON.parse('{"id":"neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-h/capi-neural-network-runtime-h","title":"neural_network_runtime.h","description":"概述","source":"@site/docs-ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-h/capi-neural-network-runtime-h.md","sourceDirName":"neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-h","slug":"/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-h/capi-neural-network-runtime-h","permalink":"/harmonyos-docs-site/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-h/capi-neural-network-runtime-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"neural_network_runtime.h","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-neural-network-runtime-h","kit":"AI","last_updated":"2026-04-22","slug":"capi-neural-network-runtime-h"},"sidebar":"ref","previous":{"title":"neural_network_core.h","permalink":"/harmonyos-docs-site/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-core-h/capi-neural-network-core-h"},"next":{"title":"neural_network_runtime_type.h","permalink":"/harmonyos-docs-site/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-h/capi-neural-network-runtime-h.md


const frontMatter = {
	title: 'neural_network_runtime.h',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-neural-network-runtime-h',
	kit: 'AI',
	last_updated: '2026-04-22',
	slug: 'capi-neural-network-runtime-h'
};
const contentTitle = 'neural_network_runtime.h';

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
  "value": "函数",
  "id": "函数",
  "level": 3
}, {
  "value": "函数说明",
  "id": "函数说明",
  "level": 2
}, {
  "value": "OH_NNQuantParam_Create()",
  "id": "oh_nnquantparam_create",
  "level": 3
}, {
  "value": "OH_NNQuantParam_SetScales()",
  "id": "oh_nnquantparam_setscales",
  "level": 3
}, {
  "value": "OH_NNQuantParam_SetZeroPoints()",
  "id": "oh_nnquantparam_setzeropoints",
  "level": 3
}, {
  "value": "OH_NNQuantParam_SetNumBits()",
  "id": "oh_nnquantparam_setnumbits",
  "level": 3
}, {
  "value": "OH_NNQuantParam_Destroy()",
  "id": "oh_nnquantparam_destroy",
  "level": 3
}, {
  "value": "OH_NNModel_Construct()",
  "id": "oh_nnmodel_construct",
  "level": 3
}, {
  "value": "OH_NNModel_AddTensorToModel()",
  "id": "oh_nnmodel_addtensortomodel",
  "level": 3
}, {
  "value": "OH_NNModel_SetTensorData()",
  "id": "oh_nnmodel_settensordata",
  "level": 3
}, {
  "value": "OH_NNModel_SetTensorQuantParams()",
  "id": "oh_nnmodel_settensorquantparams",
  "level": 3
}, {
  "value": "OH_NNModel_SetTensorType()",
  "id": "oh_nnmodel_settensortype",
  "level": 3
}, {
  "value": "OH_NNModel_AddOperation()",
  "id": "oh_nnmodel_addoperation",
  "level": 3
}, {
  "value": "OH_NNModel_SpecifyInputsAndOutputs()",
  "id": "oh_nnmodel_specifyinputsandoutputs",
  "level": 3
}, {
  "value": "OH_NNModel_Finish()",
  "id": "oh_nnmodel_finish",
  "level": 3
}, {
  "value": "OH_NNModel_Destroy()",
  "id": "oh_nnmodel_destroy",
  "level": 3
}, {
  "value": "OH_NNModel_GetAvailableOperations()",
  "id": "oh_nnmodel_getavailableoperations",
  "level": 3
}, {
  "value": "OH_NNModel_AddTensor()",
  "id": "oh_nnmodel_addtensor",
  "level": 3
}, {
  "value": "OH_NNExecutor_SetInput()",
  "id": "oh_nnexecutor_setinput",
  "level": 3
}, {
  "value": "OH_NNExecutor_SetOutput()",
  "id": "oh_nnexecutor_setoutput",
  "level": 3
}, {
  "value": "OH_NNExecutor_Run()",
  "id": "oh_nnexecutor_run",
  "level": 3
}, {
  "value": "OH_NNExecutor_AllocateInputMemory()",
  "id": "oh_nnexecutor_allocateinputmemory",
  "level": 3
}, {
  "value": "OH_NNExecutor_AllocateOutputMemory()",
  "id": "oh_nnexecutor_allocateoutputmemory",
  "level": 3
}, {
  "value": "OH_NNExecutor_DestroyInputMemory()",
  "id": "oh_nnexecutor_destroyinputmemory",
  "level": 3
}, {
  "value": "OH_NNExecutor_DestroyOutputMemory()",
  "id": "oh_nnexecutor_destroyoutputmemory",
  "level": 3
}, {
  "value": "OH_NNExecutor_SetInputWithMemory()",
  "id": "oh_nnexecutor_setinputwithmemory",
  "level": 3
}, {
  "value": "OH_NNExecutor_SetOutputWithMemory()",
  "id": "oh_nnexecutor_setoutputwithmemory",
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
        id: "neural_network_runtimeh",
        children: "neural_network_runtime.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Neural Network Runtime模块接口定义，AI推理框架使用Neural Network Runtime提供的Native接口，完成模型构建。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Neural Network Runtime的接口目前均不支持多线程并发调用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <neural_network_runtime/neural_network_runtime.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libneural_network_runtime.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.NeuralNetworkRuntime"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-module/capi-neuralnetworkruntime/capi-neuralnetworkruntime",
        children: "NeuralNetworkRuntime"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nnquantparam_create",
              children: "NN_QuantParam *OH_NNQuantParam_Create()"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建一个", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-nn-quantparam/capi-neuralnetworkruntime-nn-quantparam",
              children: "NN_QuantParam"
            }), "量化参数实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nnquantparam_setscales",
              children: "OH_NN_ReturnCode OH_NNQuantParam_SetScales(NN_QuantParam *quantParams, const double *scales, size_t quantCount)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-nn-quantparam/capi-neuralnetworkruntime-nn-quantparam",
              children: "NN_QuantParam"
            }), "的缩放系数。  参数", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "quantCount"
              })
            }), "是张量中量化参数的数量，例如对于per-channel量化，", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "quantCount"
              })
            }), "就是通道数量。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nnquantparam_setzeropoints",
              children: "OH_NN_ReturnCode OH_NNQuantParam_SetZeroPoints(NN_QuantParam *quantParams, const int32_t *zeroPoints, size_t quantCount)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-nn-quantparam/capi-neuralnetworkruntime-nn-quantparam",
              children: "NN_QuantParam"
            }), "的零点。  参数", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "quantCount"
              })
            }), "是张量中量化参数的数量，例如对于per-channel量化，", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "quantCount"
              })
            }), "就是通道数量。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nnquantparam_setnumbits",
              children: "OH_NN_ReturnCode OH_NNQuantParam_SetNumBits(NN_QuantParam *quantParams, const uint32_t *numBits, size_t quantCount)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-nn-quantparam/capi-neuralnetworkruntime-nn-quantparam",
              children: "NN_QuantParam"
            }), "的量化位数。  参数", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "quantCount"
              })
            }), "是张量中量化参数的数量，例如对于per-channel量化，", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "quantCount"
              })
            }), "就是通道数量。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nnquantparam_destroy",
              children: "OH_NN_ReturnCode OH_NNQuantParam_Destroy(NN_QuantParam **quantParams)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["销毁", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-nn-quantparam/capi-neuralnetworkruntime-nn-quantparam",
              children: "NN_QuantParam"
            }), "实例。  当设置", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-nn-quantparam/capi-neuralnetworkruntime-nn-quantparam",
              children: "NN_QuantParam"
            }), "实例到一个", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-nn-tensor/capi-neuralnetworkruntime-nn-tensor",
              children: "NN_Tensor"
            }), "中后，如果不再使用该实例，需要销毁它以避免内存泄漏。  如果", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "quantParams"
              })
            }), "或*****quantParams****是空指针，那么该接口仅打印警告日志，不会执行销毁操作。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nnmodel_construct",
              children: "OH_NNModel *OH_NNModel_Construct(void)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nnmodel/capi-neuralnetworkruntime-oh-nnmodel",
              children: "OH_NNModel"
            }), "类型的模型实例，搭配OH_NNModel模块提供的其他接口，完成模型实例的构造。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nnmodel_addtensortomodel",
              children: "OH_NN_ReturnCode OH_NNModel_AddTensorToModel(OH_NNModel *model, const NN_TensorDesc *tensorDesc)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向模型实例中添加张量。  Neural Network Runtime模型中的数据节点和算子参数均由模型的张量构成。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nnmodel_settensordata",
              children: "OH_NN_ReturnCode OH_NNModel_SetTensorData(OH_NNModel *model, uint32_t index, const void *dataBuffer, size_t length)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置张量的数值。 对于具有常量值的张量（如模型的权重），需要在构图阶段使用该接口设置数值。张量的索引值根据张量添加进模型的顺序决定，张量的添加参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-h/capi-neural-network-runtime-h#oh_nnmodel_addtensortomodel",
              children: "OH_NNModel_AddTensorToModel"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nnmodel_settensorquantparams",
              children: "OH_NN_ReturnCode OH_NNModel_SetTensorQuantParams(OH_NNModel *model, uint32_t index, NN_QuantParam *quantParam)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置张量的量化参数，参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-nn-quantparam/capi-neuralnetworkruntime-nn-quantparam",
              children: "NN_QuantParam"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nnmodel_settensortype",
              children: "OH_NN_ReturnCode OH_NNModel_SetTensorType(OH_NNModel *model, uint32_t index, OH_NN_TensorType tensorType)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置张量的类型，参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_tensortype",
              children: "OH_NN_TensorType"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nnmodel_addoperation",
              children: "OH_NN_ReturnCode OH_NNModel_AddOperation(OH_NNModel *model,OH_NN_OperationType op,const OH_NN_UInt32Array *paramIndices,const OH_NN_UInt32Array *inputIndices,const OH_NN_UInt32Array *outputIndices)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向模型实例中添加算子。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nnmodel_specifyinputsandoutputs",
              children: "OH_NN_ReturnCode OH_NNModel_SpecifyInputsAndOutputs(OH_NNModel *model,const OH_NN_UInt32Array *inputIndices,const OH_NN_UInt32Array *outputIndices)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定模型的输入和输出张量的索引值。模型实例需要指定张量作为端到端的输入和输出张量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nnmodel_finish",
              children: "OH_NN_ReturnCode OH_NNModel_Finish(OH_NNModel *model)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "完成模型构图。完成模型拓扑结构的搭建后，调用该接口指示构图已完成。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nnmodel_destroy",
              children: "void OH_NNModel_Destroy(OH_NNModel **model)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["销毁模型实例。调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-h/capi-neural-network-runtime-h#oh_nnmodel_construct",
              children: "OH_NNModel_Construct"
            }), "创建的模型实例需要调用该接口主动销毁，否则将造成内存泄漏。 如果model为空指针或者*model为空指针，该接口仅打印警告日志，不执行销毁操作。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nnmodel_getavailableoperations",
              children: "OH_NN_ReturnCode OH_NNModel_GetAvailableOperations(OH_NNModel *model,size_t deviceID,const bool **isSupported,uint32_t *opCount)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询硬件对模型内所有算子的支持情况，通过布尔值序列指示支持情况。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nnmodel_addtensor",
              children: "OH_NN_ReturnCode OH_NNModel_AddTensor(OH_NNModel *model, const OH_NN_Tensor *tensor)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向模型实例中添加张量。  Neural Network Runtime模型中的数据节点和算子参数均由模型的张量构成，该接口根据tensor，向model实例中添加张量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nnexecutor_setinput",
              children: "OH_NN_ReturnCode OH_NNExecutor_SetInput(OH_NNExecutor *executor,uint32_t inputIndex,const OH_NN_Tensor *tensor,const void *dataBuffer,size_t length)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置模型单个输入的数据。该接口将dataBuffer中，长度为length个字节的数据，拷贝到底层硬件的共享内存。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nnexecutor_setoutput",
              children: "OH_NN_ReturnCode OH_NNExecutor_SetOutput(OH_NNExecutor *executor,uint32_t outputIndex,void *dataBuffer,size_t length)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置模型单个输出的内存。  该接口将dataBuffer指向的内存与outputIndex指定的输出绑定，内存的长度由length指定。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nnexecutor_run",
              children: "OH_NN_ReturnCode OH_NNExecutor_Run(OH_NNExecutor *executor)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "执行推理。 在执行器关联的硬件上，执行模型的端到端推理计算。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nnexecutor_allocateinputmemory",
              children: "OH_NN_Memory *OH_NNExecutor_AllocateInputMemory(OH_NNExecutor *executor, uint32_t inputIndex, size_t length)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在硬件上为单个输入申请共享内存。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nnexecutor_allocateoutputmemory",
              children: "OH_NN_Memory *OH_NNExecutor_AllocateOutputMemory(OH_NNExecutor *executor, uint32_t outputIndex, size_t length)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在硬件上为单个输出申请共享内存。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nnexecutor_destroyinputmemory",
              children: "void OH_NNExecutor_DestroyInputMemory(OH_NNExecutor *executor, uint32_t inputIndex, OH_NN_Memory **memory)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["释放", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nn-memory/capi-neuralnetworkruntime-oh-nn-memory",
              children: "OH_NN_Memory"
            }), "实例指向的输入内存。 调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-h/capi-neural-network-runtime-h#oh_nnexecutor_allocateinputmemory",
              children: "OH_NNExecutor_AllocateInputMemory"
            }), "创建的内存实例，需要主动调用该接口进行释放，否则将造成内存泄漏。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nnexecutor_destroyoutputmemory",
              children: "void OH_NNExecutor_DestroyOutputMemory(OH_NNExecutor *executor, uint32_t outputIndex, OH_NN_Memory **memory)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["释放", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nn-memory/capi-neuralnetworkruntime-oh-nn-memory",
              children: "OH_NN_Memory"
            }), "实例指向的输出内存。 调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-h/capi-neural-network-runtime-h#oh_nnexecutor_allocateoutputmemory",
              children: "OH_NNExecutor_AllocateOutputMemory"
            }), "创建的内存实例，需要主动调用该接口进行释放，否则将造成内存泄漏。outputIndex和memory的对应关系需要和创建内存实例时保持一致。 如果memory或*memory为空指针，该接口仅打印警告日志，不执行释放操作。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nnexecutor_setinputwithmemory",
              children: "OH_NN_ReturnCode OH_NNExecutor_SetInputWithMemory(OH_NNExecutor *executor,uint32_t inputIndex,const OH_NN_Tensor *tensor,const OH_NN_Memory *memory)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["将", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nn-memory/capi-neuralnetworkruntime-oh-nn-memory",
              children: "OH_NN_Memory"
            }), "实例指向的硬件共享内存，并指定为单个输入使用的内存。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_nnexecutor_setoutputwithmemory",
              children: "OH_NN_ReturnCode OH_NNExecutor_SetOutputWithMemory(OH_NNExecutor *executor,uint32_t outputIndex,const OH_NN_Memory *memory)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["将", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nn-memory/capi-neuralnetworkruntime-oh-nn-memory",
              children: "OH_NN_Memory"
            }), "实例指向的硬件共享内存，并指定为单个输出使用的内存。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nnquantparam_create",
      children: "OH_NNQuantParam_Create()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "NN_QuantParam *OH_NNQuantParam_Create()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建一个", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-nn-quantparam/capi-neuralnetworkruntime-nn-quantparam",
        children: "NN_QuantParam"
      }), "量化参数实例。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-nn-quantparam/capi-neuralnetworkruntime-nn-quantparam",
        children: "NN_QuantParam"
      }), "量化参数实例后，调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-h/capi-neural-network-runtime-h#oh_nnquantparam_setscales",
        children: "OH_NNQuantParam_SetScales"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-h/capi-neural-network-runtime-h#oh_nnquantparam_setzeropoints",
        children: "OH_NNQuantParam_SetZeroPoints"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-h/capi-neural-network-runtime-h#oh_nnquantparam_setnumbits",
        children: "OH_NNQuantParam_SetNumBits"
      }), "设置它的属性值，并调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-h/capi-neural-network-runtime-h#oh_nnmodel_settensorquantparams",
        children: "OH_NNModel_SetTensorQuantParams"
      }), "将它设置到", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-nn-tensor/capi-neuralnetworkruntime-nn-tensor",
        children: "NN_Tensor"
      }), "中。最后再调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-h/capi-neural-network-runtime-h#oh_nnquantparam_destroy",
        children: "OH_NNQuantParam_Destroy"
      }), "销毁它，以避免内存泄露。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-nn-quantparam/capi-neuralnetworkruntime-nn-quantparam",
              children: "NN_QuantParam"
            }), " *"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-nn-quantparam/capi-neuralnetworkruntime-nn-quantparam",
              children: "NN_QuantParam"
            }), "实例的指针，如果创建失败就返回NULL。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nnquantparam_setscales",
      children: "OH_NNQuantParam_SetScales()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_NN_ReturnCode OH_NNQuantParam_SetScales(NN_QuantParam *quantParams, const double *scales, size_t quantCount)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-nn-quantparam/capi-neuralnetworkruntime-nn-quantparam",
        children: "NN_QuantParam"
      }), "的缩放系数。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参数", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "quantCount"
        })
      }), "是张量中量化参数的数量，例如对于per-channel量化，", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "quantCount"
        })
      }), "就是通道数量。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-nn-quantparam/capi-neuralnetworkruntime-nn-quantparam",
              children: "NN_QuantParam"
            }), " *quantParams"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-nn-quantparam/capi-neuralnetworkruntime-nn-quantparam",
              children: "NN_QuantParam"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const double *scales"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "张量中所有量化参数的缩放系数构成的数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t quantCount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "张量中量化参数的数量。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
              children: "OH_NN_ReturnCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["函数执行的结果状态。执行成功返回OH_NN_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
              children: "OH_NN_ReturnCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nnquantparam_setzeropoints",
      children: "OH_NNQuantParam_SetZeroPoints()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_NN_ReturnCode OH_NNQuantParam_SetZeroPoints(NN_QuantParam *quantParams, const int32_t *zeroPoints, size_t quantCount)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-nn-quantparam/capi-neuralnetworkruntime-nn-quantparam",
        children: "NN_QuantParam"
      }), "的零点。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参数", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "quantCount"
        })
      }), "是张量中量化参数的数量，例如对于per-channel量化，", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "quantCount"
        })
      }), "就是通道数量。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-nn-quantparam/capi-neuralnetworkruntime-nn-quantparam",
              children: "NN_QuantParam"
            }), " *quantParams"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-nn-quantparam/capi-neuralnetworkruntime-nn-quantparam",
              children: "NN_QuantParam"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const int32_t *zeroPoints"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "张量中所有量化参数的零点构成的数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t quantCount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "张量中量化参数的数量。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
              children: "OH_NN_ReturnCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["函数执行的结果状态。执行成功返回OH_NN_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
              children: "OH_NN_ReturnCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nnquantparam_setnumbits",
      children: "OH_NNQuantParam_SetNumBits()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_NN_ReturnCode OH_NNQuantParam_SetNumBits(NN_QuantParam *quantParams, const uint32_t *numBits, size_t quantCount)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-nn-quantparam/capi-neuralnetworkruntime-nn-quantparam",
        children: "NN_QuantParam"
      }), "的量化位数。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参数", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "quantCount"
        })
      }), "是张量中量化参数的数量，例如对于per-channel量化，", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "quantCount"
        })
      }), "就是通道数量。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-nn-quantparam/capi-neuralnetworkruntime-nn-quantparam",
              children: "NN_QuantParam"
            }), " *quantParams"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-nn-quantparam/capi-neuralnetworkruntime-nn-quantparam",
              children: "NN_QuantParam"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const uint32_t *numBits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "张量中所有量化参数的量化位数构成的数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t quantCount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "张量中量化参数的数量。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
              children: "OH_NN_ReturnCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["函数执行的结果状态。执行成功返回OH_NN_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
              children: "OH_NN_ReturnCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nnquantparam_destroy",
      children: "OH_NNQuantParam_Destroy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_NN_ReturnCode OH_NNQuantParam_Destroy(NN_QuantParam **quantParams)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["销毁", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-nn-quantparam/capi-neuralnetworkruntime-nn-quantparam",
        children: "NN_QuantParam"
      }), "实例。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-nn-quantparam/capi-neuralnetworkruntime-nn-quantparam",
        children: "NN_QuantParam"
      }), "实例到一个", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-nn-tensor/capi-neuralnetworkruntime-nn-tensor",
        children: "NN_Tensor"
      }), "中后，如果不再使用该实例，需要销毁它以避免内存泄漏。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "quantParams"
        })
      }), "或*****quantParams****是空指针，那么该接口仅打印警告日志，不会执行销毁操作。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-nn-quantparam/capi-neuralnetworkruntime-nn-quantparam",
              children: "NN_QuantParam"
            }), " **quantParams"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-nn-quantparam/capi-neuralnetworkruntime-nn-quantparam",
              children: "NN_QuantParam"
            }), "实例的二级指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
              children: "OH_NN_ReturnCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["函数执行的结果状态。执行成功返回OH_NN_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
              children: "OH_NN_ReturnCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nnmodel_construct",
      children: "OH_NNModel_Construct()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_NNModel *OH_NNModel_Construct(void)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nnmodel/capi-neuralnetworkruntime-oh-nnmodel",
        children: "OH_NNModel"
      }), "类型的模型实例，搭配OH_NNModel模块提供的其他接口，完成模型实例的构造。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在开始构图前，先调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-h/capi-neural-network-runtime-h#oh_nnmodel_construct",
        children: "OH_NNModel_Construct"
      }), "创建模型实例，根据模型的拓扑结构，调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-h/capi-neural-network-runtime-h#oh_nnmodel_addtensortomodel",
        children: "OH_NNModel_AddTensorToModel"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-h/capi-neural-network-runtime-h#oh_nnmodel_addoperation",
        children: "OH_NNModel_AddOperation"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-h/capi-neural-network-runtime-h#oh_nnmodel_settensordata",
        children: "OH_NNModel_SetTensorData"
      }), "方法，填充模型的数据节点和算子节点；然后调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-h/capi-neural-network-runtime-h#oh_nnmodel_specifyinputsandoutputs",
        children: "OH_NNModel_SpecifyInputsAndOutputs"
      }), "指定模型的输入和输出；当构造完模型的拓扑结构，调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-h/capi-neural-network-runtime-h#oh_nnmodel_finish",
        children: "OH_NNModel_Finish"
      }), "完成模型的构建。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["模型实例使用完毕后，需要调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-h/capi-neural-network-runtime-h#oh_nnmodel_destroy",
        children: "OH_NNModel_Destroy"
      }), "销毁模型实例，避免内存泄漏。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nnmodel/capi-neuralnetworkruntime-oh-nnmodel",
              children: "OH_NNModel"
            }), " *"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回一个指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nnmodel/capi-neuralnetworkruntime-oh-nnmodel",
              children: "OH_NNModel"
            }), "实例的指针，如果创建失败就返回NULL。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nnmodel_addtensortomodel",
      children: "OH_NNModel_AddTensorToModel()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_NN_ReturnCode OH_NNModel_AddTensorToModel(OH_NNModel *model, const NN_TensorDesc *tensorDesc)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "向模型实例中添加张量。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Neural Network Runtime模型中的数据节点和算子参数均由模型的张量构成。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该接口根据", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-nn-tensordesc/capi-neuralnetworkruntime-nn-tensordesc",
        children: "NN_TensorDesc"
      }), "向model实例中添加张量，张量添加的顺序是模型中记录张量的索引值。", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-h/capi-neural-network-runtime-h#oh_nnmodel_settensordata",
        children: "OH_NNModel_SetTensorData"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-h/capi-neural-network-runtime-h#oh_nnmodel_addoperation",
        children: "OH_NNModel_AddOperation"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-h/capi-neural-network-runtime-h#oh_nnmodel_specifyinputsandoutputs",
        children: "OH_NNModel_SpecifyInputsAndOutputs"
      }), "接口根据该索引值，指定不同的张量。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Neural Network Runtime支持动态形状的输入和输出张量。在添加动态形状的数据节点时，需要将tensor.dimensions中支持动态变化的维度设置为-1。例如可将一个四维tensor的dimensions设置为[1, -1, 2, 2]，表示其第二个维度支持动态变化。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nnmodel/capi-neuralnetworkruntime-oh-nnmodel",
              children: "OH_NNModel"
            }), " *model"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nnmodel/capi-neuralnetworkruntime-oh-nnmodel",
              children: "OH_NNModel"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-nn-tensordesc/capi-neuralnetworkruntime-nn-tensordesc",
              children: "const NN_TensorDesc"
            }), " *tensorDesc"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-nn-tensordesc/capi-neuralnetworkruntime-nn-tensordesc",
              children: "NN_TensorDesc"
            }), "张量的指针，", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-nn-tensordesc/capi-neuralnetworkruntime-nn-tensordesc",
              children: "NN_TensorDesc"
            }), "指定了添加到模型实例中张量的属性。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
              children: "OH_NN_ReturnCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["函数执行的结果状态。执行成功返回OH_NN_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
              children: "OH_NN_ReturnCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nnmodel_settensordata",
      children: "OH_NNModel_SetTensorData()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_NN_ReturnCode OH_NNModel_SetTensorData(OH_NNModel *model, uint32_t index, const void *dataBuffer, size_t length)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置张量的数值。 对于具有常量值的张量（如模型的权重），需要在构图阶段使用该接口设置数值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["张量的索引值根据张量添加进模型的顺序决定，张量的添加参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-h/capi-neural-network-runtime-h#oh_nnmodel_addtensortomodel",
        children: "OH_NNModel_AddTensorToModel"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nnmodel/capi-neuralnetworkruntime-oh-nnmodel",
              children: "OH_NNModel"
            }), " *model"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nnmodel/capi-neuralnetworkruntime-oh-nnmodel",
              children: "OH_NNModel"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "张量的索引值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const void *dataBuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向真实数据内存的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据内存的长度。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
              children: "OH_NN_ReturnCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["函数执行的结果状态。执行成功返回OH_NN_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
              children: "OH_NN_ReturnCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nnmodel_settensorquantparams",
      children: "OH_NNModel_SetTensorQuantParams()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_NN_ReturnCode OH_NNModel_SetTensorQuantParams(OH_NNModel *model, uint32_t index, NN_QuantParam *quantParam)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置张量的量化参数，参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-nn-quantparam/capi-neuralnetworkruntime-nn-quantparam",
        children: "NN_QuantParam"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nnmodel/capi-neuralnetworkruntime-oh-nnmodel",
              children: "OH_NNModel"
            }), " *model"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nnmodel/capi-neuralnetworkruntime-oh-nnmodel",
              children: "OH_NNModel"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "张量的索引值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-nn-quantparam/capi-neuralnetworkruntime-nn-quantparam",
              children: "NN_QuantParam"
            }), " *quantParam"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-nn-quantparam/capi-neuralnetworkruntime-nn-quantparam",
              children: "NN_QuantParam"
            }), "的指针。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
              children: "OH_NN_ReturnCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["函数执行的结果状态。执行成功返回OH_NN_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
              children: "OH_NN_ReturnCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nnmodel_settensortype",
      children: "OH_NNModel_SetTensorType()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_NN_ReturnCode OH_NNModel_SetTensorType(OH_NNModel *model, uint32_t index, OH_NN_TensorType tensorType)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置张量的类型，参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_tensortype",
        children: "OH_NN_TensorType"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nnmodel/capi-neuralnetworkruntime-oh-nnmodel",
              children: "OH_NNModel"
            }), " *model"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nnmodel/capi-neuralnetworkruntime-oh-nnmodel",
              children: "OH_NNModel"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "张量的索引值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_tensortype",
              children: "OH_NN_TensorType"
            }), " tensorType"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "张量类型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
              children: "OH_NN_ReturnCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["函数执行的结果状态。执行成功返回OH_NN_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
              children: "OH_NN_ReturnCode"
            })]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nnmodel_addoperation",
      children: "OH_NNModel_AddOperation()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_NN_ReturnCode OH_NNModel_AddOperation(OH_NNModel *model,OH_NN_OperationType op,const OH_NN_UInt32Array *paramIndices,const OH_NN_UInt32Array *inputIndices,const OH_NN_UInt32Array *outputIndices)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "向模型实例中添加算子。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该接口向模型实例中添加算子，算子类型由op指定，算子的参数、输入和输出由paramIndices、inputIndices和outputIndices指定。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该接口将对算子参数的属性和输入、输出张量的数量进行校验，这些属性需要在调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-h/capi-neural-network-runtime-h#oh_nnmodel_addtensortomodel",
        children: "OH_NNModel_AddTensorToModel"
      }), "添加张量时正确设置。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["每个算子期望的参数、输入和输出属性请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_operationtype",
        children: "OH_NN_OperationType"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "paramIndices、inputIndices和outputIndices中存储的是张量的索引值，每个索引值根据张量添加进模型的顺序决定，正确设置并添加算子要求准确设置每个张量的索引值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["张量的添加参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-h/capi-neural-network-runtime-h#oh_nnmodel_addtensortomodel",
        children: "OH_NNModel_AddTensorToModel"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果添加算子时，添加了额外的参数（非算子需要的参数），该接口返回", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
        children: "OH_NN_INVALID_PARAMETER"
      }), "；如果没有设置算子参数，则算子按默认值设置缺省的参数，默认值请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_operationtype",
        children: "OH_NN_OperationType"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nnmodel/capi-neuralnetworkruntime-oh-nnmodel",
              children: "OH_NNModel"
            }), " *model"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nnmodel/capi-neuralnetworkruntime-oh-nnmodel",
              children: "OH_NNModel"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_operationtype",
              children: "OH_NN_OperationType"
            }), " op"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指定添加的算子类型，取值请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_operationtype",
              children: "OH_NN_OperationType"
            }), "的枚举值。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nn-uint32array/capi-neuralnetworkruntime-oh-nn-uint32array",
              children: "const OH_NN_UInt32Array"
            }), " *paramIndices"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NN_UInt32Array实例的指针，设置算子的参数张量索引。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nn-uint32array/capi-neuralnetworkruntime-oh-nn-uint32array",
              children: "const OH_NN_UInt32Array"
            }), " *inputIndices"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NN_UInt32Array实例的指针，指定算子的输入张量索引。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nn-uint32array/capi-neuralnetworkruntime-oh-nn-uint32array",
              children: "const OH_NN_UInt32Array"
            }), " *outputIndices"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NN_UInt32Array实例的指针，设置算子的输出张量索引。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
              children: "OH_NN_ReturnCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["函数执行的结果状态。执行成功返回OH_NN_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
              children: "OH_NN_ReturnCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nnmodel_specifyinputsandoutputs",
      children: "OH_NNModel_SpecifyInputsAndOutputs()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_NN_ReturnCode OH_NNModel_SpecifyInputsAndOutputs(OH_NNModel *model,const OH_NN_UInt32Array *inputIndices,const OH_NN_UInt32Array *outputIndices)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "指定模型的输入和输出张量的索引值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["模型实例需要指定张量作为端到端的输入和输出张量。设置一个张量为输入或输出张量后，就不能再通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-h/capi-neural-network-runtime-h#oh_nnmodel_settensordata",
        children: "OH_NNModel_SetTensorData"
      }), "设置张量数据，而需要在执行阶段调用OH_NNExecutor的方法设置输入或输出张量数据。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["张量的索引值根据张量添加进模型的顺序决定，张量的添加参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-h/capi-neural-network-runtime-h#oh_nnmodel_addtensortomodel",
        children: "OH_NNModel_AddTensorToModel"
      }), "。 暂时不支持异步设置模型输入和输出张量。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nnmodel/capi-neuralnetworkruntime-oh-nnmodel",
              children: "OH_NNModel"
            }), " *model"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nnmodel/capi-neuralnetworkruntime-oh-nnmodel",
              children: "OH_NNModel"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nn-uint32array/capi-neuralnetworkruntime-oh-nn-uint32array",
              children: "const OH_NN_UInt32Array"
            }), " *inputIndices"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NN_UInt32Array实例的指针，指定算子的输入张量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nn-uint32array/capi-neuralnetworkruntime-oh-nn-uint32array",
              children: "const OH_NN_UInt32Array"
            }), " *outputIndices"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NN_UInt32Array实例的指针，指定算子的输出张量。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
              children: "OH_NN_ReturnCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["函数执行的结果状态。执行成功返回OH_NN_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
              children: "OH_NN_ReturnCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nnmodel_finish",
      children: "OH_NNModel_Finish()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_NN_ReturnCode OH_NNModel_Finish(OH_NNModel *model)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "完成模型构图。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "完成模型拓扑结构的搭建后，调用该接口指示构图已完成。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在调用该接口后，无法进行额外的构图操作，调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-h/capi-neural-network-runtime-h#oh_nnmodel_addtensortomodel",
        children: "OH_NNModel_AddTensorToModel"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-h/capi-neural-network-runtime-h#oh_nnmodel_addoperation",
        children: "OH_NNModel_AddOperation"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-h/capi-neural-network-runtime-h#oh_nnmodel_settensordata",
        children: "OH_NNModel_SetTensorData"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-h/capi-neural-network-runtime-h#oh_nnmodel_specifyinputsandoutputs",
        children: "OH_NNModel_SpecifyInputsAndOutputs"
      }), "将返回", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
        children: "OH_NN_OPERATION_FORBIDDEN"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-h/capi-neural-network-runtime-h#oh_nnmodel_getavailableoperations",
        children: "OH_NNModel_GetAvailableOperations"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-core-h/capi-neural-network-core-h#oh_nncompilation_construct",
        children: "OH_NNCompilation_Construct"
      }), "之前，必须先调用该接口完成构图。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nnmodel/capi-neuralnetworkruntime-oh-nnmodel",
              children: "OH_NNModel"
            }), " *model"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nnmodel/capi-neuralnetworkruntime-oh-nnmodel",
              children: "OH_NNModel"
            }), "实例的指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
              children: "OH_NN_ReturnCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["函数执行的结果状态。执行成功返回OH_NN_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
              children: "OH_NN_ReturnCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nnmodel_destroy",
      children: "OH_NNModel_Destroy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_NNModel_Destroy(OH_NNModel **model)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "销毁模型实例。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-h/capi-neural-network-runtime-h#oh_nnmodel_construct",
        children: "OH_NNModel_Construct"
      }), "创建的模型实例需要调用该接口主动销毁，否则将造成内存泄漏。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果model为空指针或者*model为空指针，该接口仅打印警告日志，不执行销毁操作。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nnmodel/capi-neuralnetworkruntime-oh-nnmodel",
              children: "OH_NNModel"
            }), " **model"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nnmodel/capi-neuralnetworkruntime-oh-nnmodel",
              children: "OH_NNModel"
            }), "实例的二级指针。模型实例销毁后，该接口会将*model主动设置为空指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nnmodel_getavailableoperations",
      children: "OH_NNModel_GetAvailableOperations()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_NN_ReturnCode OH_NNModel_GetAvailableOperations(OH_NNModel *model,size_t deviceID,const bool **isSupported,uint32_t *opCount)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询硬件对模型内所有算子的支持情况，通过布尔值序列指示支持情况。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询底层硬件对模型实例内每个算子的支持情况，硬件由deviceID指定，结果将通过isSupported指向的数组表示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果支持第i个算子，则(*isSupported)[i] == true，否则为false。 该接口成功执行后，(*isSupported)将指向记录算子支持情况的bool数组，数组长度和模型实例的算子数量相等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该数组对应的内存由Neural Network Runtime管理，在模型实例销毁或再次调用该接口后自动销毁。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nnmodel/capi-neuralnetworkruntime-oh-nnmodel",
              children: "OH_NNModel"
            }), " *model"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nnmodel/capi-neuralnetworkruntime-oh-nnmodel",
              children: "OH_NNModel"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t deviceID"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指定查询的硬件ID，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-core-h/capi-neural-network-core-h#oh_nndevice_getalldevicesid",
              children: "OH_NNDevice_GetAllDevicesID"
            }), "获取。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const bool **isSupported"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向bool数组的指针。调用该接口时，要求(*isSupported)为空指针，否则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
              children: "OH_NN_INVALID_PARAMETER"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t *opCount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模型实例中算子的数量，对应(*isSupported)数组的长度。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
              children: "OH_NN_ReturnCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["函数执行的结果状态。执行成功返回OH_NN_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
              children: "OH_NN_ReturnCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nnmodel_addtensor",
      children: "OH_NNModel_AddTensor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_NN_ReturnCode OH_NNModel_AddTensor(OH_NNModel *model, const OH_NN_Tensor *tensor)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "向模型实例中添加张量。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Neural Network Runtime模型中的数据节点和算子参数均由模型的张量构成，该接口根据tensor，向model实例中添加张量。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["张量添加的顺序由模型中记录张量的索引值来确定，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-h/capi-neural-network-runtime-h#oh_nnmodel_settensordata",
        children: "OH_NNModel_SetTensorData"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-h/capi-neural-network-runtime-h#oh_nnmodel_addoperation",
        children: "OH_NNModel_AddOperation"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-h/capi-neural-network-runtime-h#oh_nnmodel_specifyinputsandoutputs",
        children: "OH_NNModel_SpecifyInputsAndOutputs"
      }), "接口根据该索引值，指定不同的张量。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Neural Network Runtime支持动态形状输入和输出。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在添加动态形状的数据节点时，需要将tensor.dimensions中支持动态变化的维度设置为-1。例如可将一个四维tensor的dimensions设置为[1, -1, 2, 2]，表示其第二个维度支持动态变化。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "废弃版本："
        })
      }), " 11"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "替代接口："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-h/capi-neural-network-runtime-h#oh_nnmodel_addtensortomodel",
        children: "OH_NNModel_AddTensorToModel"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nnmodel/capi-neuralnetworkruntime-oh-nnmodel",
              children: "OH_NNModel"
            }), " *model"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nnmodel/capi-neuralnetworkruntime-oh-nnmodel",
              children: "OH_NNModel"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nn-tensor/capi-neuralnetworkruntime-oh-nn-tensor",
              children: "const OH_NN_Tensor"
            }), " *tensor"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nn-tensor/capi-neuralnetworkruntime-oh-nn-tensor",
              children: "OH_NN_Tensor"
            }), "张量的指针，tensor指定了添加到模型实例中张量的属性。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
              children: "OH_NN_ReturnCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["函数执行的结果状态。执行成功返回OH_NN_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
              children: "OH_NN_ReturnCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nnexecutor_setinput",
      children: "OH_NNExecutor_SetInput()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_NN_ReturnCode OH_NNExecutor_SetInput(OH_NNExecutor *executor,uint32_t inputIndex,const OH_NN_Tensor *tensor,const void *dataBuffer,size_t length)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置模型单个输入的数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该接口将dataBuffer中，长度为length个字节的数据，拷贝到底层硬件的共享内存。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "inputIndex指定设置的输入，tensor用于设置输入张量的形状、数据类型、量化参数等信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于Neural Network Runtime支持动态输入形状的模型，在固定形状输入和动态形状输入的场景下，该接口采取不同的处理策略："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["固定形状输入的场景：tensor各属性必须和构图阶段调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-h/capi-neural-network-runtime-h#oh_nnmodel_addtensor",
            children: "OH_NNModel_AddTensor"
          }), "添加的张量保持一致；"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "动态形状输入的场景：在构图阶段，由于动态输入的形状不确定，调用该接口时，要求tensor.dimensions中的每个值必须大于0，以确定执行计算阶段输入的形状。设置形状时，只允许调整数值为-1的维度。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["假设在构图阶段，输入A的维度为[-1, 224, 224, 3]，调用该接口时，只能调整第一个维度的尺寸，如：[3, 224, 224, 3]。调整其他维度将返回", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
            children: "OH_NN_INVALID_PARAMETER"
          }), "。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "废弃版本："
        })
      }), " 11"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "替代接口："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-core-h/capi-neural-network-core-h#oh_nnexecutor_runsync",
        children: "OH_NNExecutor_RunSync"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nnexecutor/capi-neuralnetworkruntime-oh-nnexecutor",
              children: "OH_NNExecutor"
            }), " *executor"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nnexecutor/capi-neuralnetworkruntime-oh-nnexecutor",
              children: "OH_NNExecutor"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t inputIndex"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["输入的索引值，与调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-h/capi-neural-network-runtime-h#oh_nnmodel_specifyinputsandoutputs",
              children: "OH_NNModel_SpecifyInputsAndOutputs"
            }), "时输入数据的顺序一致。  假设调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-h/capi-neural-network-runtime-h#oh_nnmodel_specifyinputsandoutputs",
              children: "OH_NNModel_SpecifyInputsAndOutputs"
            }), "时，inputIndices为{1, 5, 9}，则在设置输入的阶段，三个输入的索引值分别为{0, 1, 2}。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nn-tensor/capi-neuralnetworkruntime-oh-nn-tensor",
              children: "const OH_NN_Tensor"
            }), " *tensor"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置输入数据对应的张量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const void *dataBuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向输入数据的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据内存的字节长度。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
              children: "OH_NN_ReturnCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["函数执行的结果状态。执行成功返回OH_NN_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
              children: "OH_NN_ReturnCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nnexecutor_setoutput",
      children: "OH_NNExecutor_SetOutput()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_NN_ReturnCode OH_NNExecutor_SetOutput(OH_NNExecutor *executor,uint32_t outputIndex,void *dataBuffer,size_t length)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置模型单个输出的内存。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该接口将dataBuffer指向的内存与outputIndex指定的输出绑定，内存的长度由length指定。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-h/capi-neural-network-runtime-h#oh_nnexecutor_run",
        children: "OH_NNExecutor_Run"
      }), "完成单次模型推理后，Neural Network Runtime将比对dataBuffer指向的内存与输出数据的长度，根据不同情况，返回不同结果："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["如果内存大小大于或等于数据长度：则推理后的结果将拷贝至内存，并返回", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
          children: "OH_NN_SUCCESS"
        }), "，可以通过访问dataBuffer读取推理结果。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["如果内存大小小于数据长度：则", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-h/capi-neural-network-runtime-h#oh_nnexecutor_run",
          children: "OH_NNExecutor_Run"
        }), "将返回", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
          children: "OH_NN_INVALID_PARAMETER"
        }), "，并输出日志告知内存太小的信息。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "废弃版本："
        })
      }), " 11"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "替代接口："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-core-h/capi-neural-network-core-h#oh_nnexecutor_runsync",
        children: "OH_NNExecutor_RunSync"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nnexecutor/capi-neuralnetworkruntime-oh-nnexecutor",
              children: "OH_NNExecutor"
            }), " *executor"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nnexecutor/capi-neuralnetworkruntime-oh-nnexecutor",
              children: "OH_NNExecutor"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t outputIndex"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["输出的索引值，与调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-h/capi-neural-network-runtime-h#oh_nnmodel_specifyinputsandoutputs",
              children: "OH_NNModel_SpecifyInputsAndOutputs"
            }), "时输出数据的顺序一致。  假设调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-h/capi-neural-network-runtime-h#oh_nnmodel_specifyinputsandoutputs",
              children: "OH_NNModel_SpecifyInputsAndOutputs"
            }), "时，outputIndices为{4, 6, 8}，则在设置输出内存时，三个输出的索引值分别为{0, 1, 2}。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void *dataBuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向输出数据的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据内存的字节长度。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
              children: "OH_NN_ReturnCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["函数执行的结果状态。执行成功返回OH_NN_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
              children: "OH_NN_ReturnCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nnexecutor_run",
      children: "OH_NNExecutor_Run()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_NN_ReturnCode OH_NNExecutor_Run(OH_NNExecutor *executor)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行推理。 在执行器关联的硬件上，执行模型的端到端推理计算。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "废弃版本："
        })
      }), " 11"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "替代接口："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-core-h/capi-neural-network-core-h#oh_nnexecutor_runsync",
        children: "OH_NNExecutor_RunSync"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nnexecutor/capi-neuralnetworkruntime-oh-nnexecutor",
              children: "OH_NNExecutor"
            }), " *executor"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nnexecutor/capi-neuralnetworkruntime-oh-nnexecutor",
              children: "OH_NNExecutor"
            }), "实例的指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
              children: "OH_NN_ReturnCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["函数执行的结果状态。执行成功返回OH_NN_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
              children: "OH_NN_ReturnCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nnexecutor_allocateinputmemory",
      children: "OH_NNExecutor_AllocateInputMemory()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_NN_Memory *OH_NNExecutor_AllocateInputMemory(OH_NNExecutor *executor, uint32_t inputIndex, size_t length)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在硬件上为单个输入申请共享内存。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Neural Network Runtime 提供主动申请硬件共享内存的方法。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过指定执行器和输入索引值，该接口在单个输入关联的硬件上，申请大小为length的共享内存，通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nn-memory/capi-neuralnetworkruntime-oh-nn-memory",
        children: "OH_NN_Memory"
      }), "实例返回。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "废弃版本："
        })
      }), " 11"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "替代接口："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-core-h/capi-neural-network-core-h#oh_nntensor_createwithsize",
        children: "OH_NNTensor_CreateWithSize"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nnexecutor/capi-neuralnetworkruntime-oh-nnexecutor",
              children: "OH_NNExecutor"
            }), " *executor"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nnexecutor/capi-neuralnetworkruntime-oh-nnexecutor",
              children: "OH_NNExecutor"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t inputIndex"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["输入的索引值，与调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-h/capi-neural-network-runtime-h#oh_nnmodel_specifyinputsandoutputs",
              children: "OH_NNModel_SpecifyInputsAndOutputs"
            }), "时输入数据的顺序一致。  假设调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-h/capi-neural-network-runtime-h#oh_nnmodel_specifyinputsandoutputs",
              children: "OH_NNModel_SpecifyInputsAndOutputs"
            }), "时，inputIndices为{1, 5, 9}，则在申请输入内存时，三个输入的索引值分别为{0, 1, 2}。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "申请的内存字节。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nn-memory/capi-neuralnetworkruntime-oh-nn-memory",
              children: "OH_NN_Memory"
            }), " *"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nn-memory/capi-neuralnetworkruntime-oh-nn-memory",
              children: "OH_NN_Memory"
            }), "实例的指针，如果创建失败就返回NULL。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nnexecutor_allocateoutputmemory",
      children: "OH_NNExecutor_AllocateOutputMemory()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_NN_Memory *OH_NNExecutor_AllocateOutputMemory(OH_NNExecutor *executor, uint32_t outputIndex, size_t length)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在硬件上为单个输出申请共享内存。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Neural Network Runtime 提供主动申请硬件共享内存的方法。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过指定执行器和输出索引值，该接口在单个输出关联的硬件上，申请大小为length的共享内存，通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nn-memory/capi-neuralnetworkruntime-oh-nn-memory",
        children: "OH_NN_Memory"
      }), "实例返回。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "废弃版本："
        })
      }), " 11"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "替代接口："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-core-h/capi-neural-network-core-h#oh_nntensor_createwithsize",
        children: "OH_NNTensor_CreateWithSize"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nnexecutor/capi-neuralnetworkruntime-oh-nnexecutor",
              children: "OH_NNExecutor"
            }), " *executor"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nnexecutor/capi-neuralnetworkruntime-oh-nnexecutor",
              children: "OH_NNExecutor"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t outputIndex"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["输出的索引值，与调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-h/capi-neural-network-runtime-h#oh_nnmodel_specifyinputsandoutputs",
              children: "OH_NNModel_SpecifyInputsAndOutputs"
            }), "时输出数据的顺序一致。  假设调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-h/capi-neural-network-runtime-h#oh_nnmodel_specifyinputsandoutputs",
              children: "OH_NNModel_SpecifyInputsAndOutputs"
            }), "时，outputIndices为{4, 6, 8}，则在申请输出内存时，三个输出的索引值分别为{0, 1, 2}。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "申请的内存字节。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nn-memory/capi-neuralnetworkruntime-oh-nn-memory",
              children: "OH_NN_Memory"
            }), " *"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nn-memory/capi-neuralnetworkruntime-oh-nn-memory",
              children: "OH_NN_Memory"
            }), "实例的指针，如果创建失败就返回NULL。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nnexecutor_destroyinputmemory",
      children: "OH_NNExecutor_DestroyInputMemory()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_NNExecutor_DestroyInputMemory(OH_NNExecutor *executor, uint32_t inputIndex, OH_NN_Memory **memory)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["释放", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nn-memory/capi-neuralnetworkruntime-oh-nn-memory",
        children: "OH_NN_Memory"
      }), "实例指向的输入内存。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-h/capi-neural-network-runtime-h#oh_nnexecutor_allocateinputmemory",
        children: "OH_NNExecutor_AllocateInputMemory"
      }), "创建的内存实例，需要主动调用该接口进行释放，否则将造成内存泄漏。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "inputIndex和memory的对应关系需要和创建内存实例时保持一致。 如果memory或*memory为空指针，该接口仅打印警告日志，不执行释放操作。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "废弃版本："
        })
      }), " 11"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "替代接口："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-core-h/capi-neural-network-core-h#oh_nntensor_destroy",
        children: "OH_NNTensor_Destroy"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nnexecutor/capi-neuralnetworkruntime-oh-nnexecutor",
              children: "OH_NNExecutor"
            }), " *executor"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nnexecutor/capi-neuralnetworkruntime-oh-nnexecutor",
              children: "OH_NNExecutor"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t inputIndex"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["输入的索引值，与调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-h/capi-neural-network-runtime-h#oh_nnmodel_specifyinputsandoutputs",
              children: "OH_NNModel_SpecifyInputsAndOutputs"
            }), "时输入数据的顺序一致。  假设调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-h/capi-neural-network-runtime-h#oh_nnmodel_specifyinputsandoutputs",
              children: "OH_NNModel_SpecifyInputsAndOutputs"
            }), "时，inputIndices为{1, 5, 9}，则在释放输入内存时，三个输入的索引值分别为{0, 1, 2}。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nn-memory/capi-neuralnetworkruntime-oh-nn-memory",
              children: "OH_NN_Memory"
            }), " **memory"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nn-memory/capi-neuralnetworkruntime-oh-nn-memory",
              children: "OH_NN_Memory"
            }), "实例的二级指针。共享内存释放后，该接口将*memory主动设置为空指针。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nnexecutor_destroyoutputmemory",
      children: "OH_NNExecutor_DestroyOutputMemory()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_NNExecutor_DestroyOutputMemory(OH_NNExecutor *executor, uint32_t outputIndex, OH_NN_Memory **memory)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["释放", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nn-memory/capi-neuralnetworkruntime-oh-nn-memory",
        children: "OH_NN_Memory"
      }), "实例指向的输出内存。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-h/capi-neural-network-runtime-h#oh_nnexecutor_allocateoutputmemory",
        children: "OH_NNExecutor_AllocateOutputMemory"
      }), "创建的内存实例，需要主动调用该接口进行释放，否则将造成内存泄漏。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "outputIndex和memory的对应关系需要和创建内存实例时保持一致。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果memory或*memory为空指针，该接口仅打印警告日志，不执行释放操作。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "废弃版本："
        })
      }), " 11"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "替代接口："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-core-h/capi-neural-network-core-h#oh_nntensor_destroy",
        children: "OH_NNTensor_Destroy"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nnexecutor/capi-neuralnetworkruntime-oh-nnexecutor",
              children: "OH_NNExecutor"
            }), " *executor"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nnexecutor/capi-neuralnetworkruntime-oh-nnexecutor",
              children: "OH_NNExecutor"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t outputIndex"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["输出的索引值，与调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-h/capi-neural-network-runtime-h#oh_nnmodel_specifyinputsandoutputs",
              children: "OH_NNModel_SpecifyInputsAndOutputs"
            }), "时输出数据的顺序一致。  假设调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-h/capi-neural-network-runtime-h#oh_nnmodel_specifyinputsandoutputs",
              children: "OH_NNModel_SpecifyInputsAndOutputs"
            }), "时，outputIndices为{4, 6, 8}，则在释放输出内存时，三个输出的索引值分别为{0, 1, 2}。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nn-memory/capi-neuralnetworkruntime-oh-nn-memory",
              children: "OH_NN_Memory"
            }), " **memory"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nn-memory/capi-neuralnetworkruntime-oh-nn-memory",
              children: "OH_NN_Memory"
            }), "实例的二级指针。共享内存释放后，该接口将*memory主动设置为空指针。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nnexecutor_setinputwithmemory",
      children: "OH_NNExecutor_SetInputWithMemory()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_NN_ReturnCode OH_NNExecutor_SetInputWithMemory(OH_NNExecutor *executor,uint32_t inputIndex,const OH_NN_Tensor *tensor,const OH_NN_Memory *memory)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["将", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nn-memory/capi-neuralnetworkruntime-oh-nn-memory",
        children: "OH_NN_Memory"
      }), "实例指向的硬件共享内存，并指定为单个输入使用的内存。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在需要自行管理内存的场景下，该接口将执行输入和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nn-memory/capi-neuralnetworkruntime-oh-nn-memory",
        children: "OH_NN_Memory"
      }), "内存实例绑定。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行计算时，底层硬件从内存实例指向的共享内存中读取输入数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过该接口，可以实现设置输入、执行计算、读取输出的并发执行，提升数据流的推理效率。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "废弃版本："
        })
      }), " 11"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "替代接口："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-core-h/capi-neural-network-core-h#oh_nnexecutor_runsync",
        children: "OH_NNExecutor_RunSync"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nnexecutor/capi-neuralnetworkruntime-oh-nnexecutor",
              children: "OH_NNExecutor"
            }), " *executor"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nnexecutor/capi-neuralnetworkruntime-oh-nnexecutor",
              children: "OH_NNExecutor"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t inputIndex"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["输入的索引值，与调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-h/capi-neural-network-runtime-h#oh_nnmodel_specifyinputsandoutputs",
              children: "OH_NNModel_SpecifyInputsAndOutputs"
            }), "时输入数据的顺序一致。  假设调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-h/capi-neural-network-runtime-h#oh_nnmodel_specifyinputsandoutputs",
              children: "OH_NNModel_SpecifyInputsAndOutputs"
            }), "时，inputIndices为{1, 5, 9}，则在指定输入的共享内存时，三个输入的索引值分别为{0, 1, 2}。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nn-tensor/capi-neuralnetworkruntime-oh-nn-tensor",
              children: "const OH_NN_Tensor"
            }), " *tensor"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nn-tensor/capi-neuralnetworkruntime-oh-nn-tensor",
              children: "OH_NN_Tensor"
            }), "的指针，设置单个输入所对应的张量。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nn-memory/capi-neuralnetworkruntime-oh-nn-memory",
              children: "const OH_NN_Memory"
            }), " *memory"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nn-memory/capi-neuralnetworkruntime-oh-nn-memory",
              children: "OH_NN_Memory"
            }), "的指针。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
              children: "OH_NN_ReturnCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["函数执行的结果状态。执行成功返回OH_NN_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
              children: "OH_NN_ReturnCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_nnexecutor_setoutputwithmemory",
      children: "OH_NNExecutor_SetOutputWithMemory()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_NN_ReturnCode OH_NNExecutor_SetOutputWithMemory(OH_NNExecutor *executor,uint32_t outputIndex,const OH_NN_Memory *memory)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["将", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nn-memory/capi-neuralnetworkruntime-oh-nn-memory",
        children: "OH_NN_Memory"
      }), "实例指向的硬件共享内存，并指定为单个输出使用的内存。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在需要自行管理内存的场景下，该接口将执行输出和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nn-memory/capi-neuralnetworkruntime-oh-nn-memory",
        children: "OH_NN_Memory"
      }), "内存实例绑定。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行计算时，底层硬件将计算结果直接写入内存实例指向的共享内存。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过该接口，可以实现设置输入、执行计算、读取输出的并发执行，提升数据流的推理效率。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "废弃版本："
        })
      }), " 11"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "替代接口："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-core-h/capi-neural-network-core-h#oh_nnexecutor_runsync",
        children: "OH_NNExecutor_RunSync"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nnexecutor/capi-neuralnetworkruntime-oh-nnexecutor",
              children: "OH_NNExecutor"
            }), " *executor"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "执行器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t outputIndex"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["输出的索引值，与调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-h/capi-neural-network-runtime-h#oh_nnmodel_specifyinputsandoutputs",
              children: "OH_NNModel_SpecifyInputsAndOutputs"
            }), "时输出数据的顺序一致。  假设调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-h/capi-neural-network-runtime-h#oh_nnmodel_specifyinputsandoutputs",
              children: "OH_NNModel_SpecifyInputsAndOutputs"
            }), "时，outputIndices为{4, 6, 8}，则在指定输出的共享内存时，三个输出的索引值分别为{0, 1, 2}。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nn-memory/capi-neuralnetworkruntime-oh-nn-memory",
              children: "const OH_NN_Memory"
            }), " *memory"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-struct/capi-neuralnetworkruntime-oh-nn-memory/capi-neuralnetworkruntime-oh-nn-memory",
              children: "OH_NN_Memory"
            }), "的指针。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
              children: "OH_NN_ReturnCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["函数执行的结果状态。执行成功返回OH_NN_SUCCESS；失败返回具体错误码，具体失败错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-runtime-type-h/capi-neural-network-runtime-type-h#oh_nn_returncode",
              children: "OH_NN_ReturnCode"
            }), "。"]
          })]
        })
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