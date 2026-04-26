"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["306959"], {
564851(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_mindspore_lite_api_mindspore_lite_c_mindspore_lite_headerfile_capi_model_h_capi_model_h_md_92c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-mindspore-lite-api-mindspore-lite-c-mindspore-lite-headerfile-capi-model-h-capi-model-h-md-92c.json
var site_docs_ref_mindspore_lite_api_mindspore_lite_c_mindspore_lite_headerfile_capi_model_h_capi_model_h_md_92c_namespaceObject = JSON.parse('{"id":"mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-model-h/capi-model-h","title":"model.h","description":"概述","source":"@site/docs-ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-model-h/capi-model-h.md","sourceDirName":"mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-model-h","slug":"/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-model-h/capi-model-h","permalink":"/harmonyos-docs-site/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-model-h/capi-model-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"model.h","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-model-h","kit":"AI","last_updated":"2026-04-22","slug":"capi-model-h"},"sidebar":"ref","previous":{"title":"format.h","permalink":"/harmonyos-docs-site/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-format-h/capi-format-h"},"next":{"title":"status.h","permalink":"/harmonyos-docs-site/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-status-h/capi-status-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-model-h/capi-model-h.md


const frontMatter = {
	title: 'model.h',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-model-h',
	kit: 'AI',
	last_updated: '2026-04-22',
	slug: 'capi-model-h'
};
const contentTitle = 'model.h';

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
  "value": "函数",
  "id": "函数",
  "level": 3
}, {
  "value": "函数说明",
  "id": "函数说明",
  "level": 2
}, {
  "value": "OH_AI_KernelCallBack()",
  "id": "oh_ai_kernelcallback",
  "level": 3
}, {
  "value": "OH_AI_ModelCreate()",
  "id": "oh_ai_modelcreate",
  "level": 3
}, {
  "value": "OH_AI_ModelDestroy()",
  "id": "oh_ai_modeldestroy",
  "level": 3
}, {
  "value": "OH_AI_ModelBuild()",
  "id": "oh_ai_modelbuild",
  "level": 3
}, {
  "value": "OH_AI_ModelBuildFromFile()",
  "id": "oh_ai_modelbuildfromfile",
  "level": 3
}, {
  "value": "OH_AI_ModelResize()",
  "id": "oh_ai_modelresize",
  "level": 3
}, {
  "value": "OH_AI_ModelPredict()",
  "id": "oh_ai_modelpredict",
  "level": 3
}, {
  "value": "OH_AI_ModelGetInputs()",
  "id": "oh_ai_modelgetinputs",
  "level": 3
}, {
  "value": "OH_AI_ModelGetOutputs()",
  "id": "oh_ai_modelgetoutputs",
  "level": 3
}, {
  "value": "OH_AI_ModelGetInputByTensorName()",
  "id": "oh_ai_modelgetinputbytensorname",
  "level": 3
}, {
  "value": "OH_AI_ModelGetOutputByTensorName()",
  "id": "oh_ai_modelgetoutputbytensorname",
  "level": 3
}, {
  "value": "OH_AI_TrainCfgCreate()",
  "id": "oh_ai_traincfgcreate",
  "level": 3
}, {
  "value": "OH_AI_TrainCfgDestroy()",
  "id": "oh_ai_traincfgdestroy",
  "level": 3
}, {
  "value": "OH_AI_TrainCfgGetLossName()",
  "id": "oh_ai_traincfggetlossname",
  "level": 3
}, {
  "value": "OH_AI_TrainCfgSetLossName()",
  "id": "oh_ai_traincfgsetlossname",
  "level": 3
}, {
  "value": "OH_AI_TrainCfgGetOptimizationLevel()",
  "id": "oh_ai_traincfggetoptimizationlevel",
  "level": 3
}, {
  "value": "OH_AI_TrainCfgSetOptimizationLevel()",
  "id": "oh_ai_traincfgsetoptimizationlevel",
  "level": 3
}, {
  "value": "OH_AI_TrainModelBuild()",
  "id": "oh_ai_trainmodelbuild",
  "level": 3
}, {
  "value": "OH_AI_TrainModelBuildFromFile()",
  "id": "oh_ai_trainmodelbuildfromfile",
  "level": 3
}, {
  "value": "OH_AI_RunStep()",
  "id": "oh_ai_runstep",
  "level": 3
}, {
  "value": "OH_AI_ModelSetLearningRate()",
  "id": "oh_ai_modelsetlearningrate",
  "level": 3
}, {
  "value": "OH_AI_ModelGetLearningRate()",
  "id": "oh_ai_modelgetlearningrate",
  "level": 3
}, {
  "value": "OH_AI_ModelGetWeights()",
  "id": "oh_ai_modelgetweights",
  "level": 3
}, {
  "value": "OH_AI_ModelUpdateWeights()",
  "id": "oh_ai_modelupdateweights",
  "level": 3
}, {
  "value": "OH_AI_ModelGetTrainMode()",
  "id": "oh_ai_modelgettrainmode",
  "level": 3
}, {
  "value": "OH_AI_ModelSetTrainMode()",
  "id": "oh_ai_modelsettrainmode",
  "level": 3
}, {
  "value": "OH_AI_ModelSetupVirtualBatch()",
  "id": "oh_ai_modelsetupvirtualbatch",
  "level": 3
}, {
  "value": "OH_AI_ExportModel()",
  "id": "oh_ai_exportmodel",
  "level": 3
}, {
  "value": "OH_AI_ExportModelBuffer()",
  "id": "oh_ai_exportmodelbuffer",
  "level": 3
}, {
  "value": "OH_AI_ExportWeightsCollaborateWithMicro()",
  "id": "oh_ai_exportweightscollaboratewithmicro",
  "level": 3
}, {
  "value": "OH_AI_ModelLoadConfig()",
  "id": "oh_ai_modelloadconfig",
  "level": 3
}, {
  "value": "OH_AI_ModelPredictWithConfig()",
  "id": "oh_ai_modelpredictwithconfig",
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
        id: "modelh",
        children: "model.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供了模型相关接口，可以用于模型创建、模型推理等，该接口是非线程安全的。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <mindspore/model.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libmindspore_lite_ndk.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Ai.MindSpore"]
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
        href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-module/capi-mindspore/capi-mindspore",
        children: "MindSpore"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "结构体",
      children: "结构体"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "typedef关键字"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_TensorHandleArray"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-tensorhandlearray/capi-mindspore-oh-ai-tensorhandlearray",
              children: "OH_AI_TensorHandleArray"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "张量数组结构体，用于存储张量数组指针和张量数组长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_ShapeInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-shapeinfo/capi-mindspore-oh-ai-shapeinfo",
              children: "OH_AI_ShapeInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "形状维度大小，预留最大维度是32，当前实际支持的最大维度是8。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_CallBackParam"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-callbackparam/capi-mindspore-oh-ai-callbackparam",
              children: "OH_AI_CallBackParam"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数中传入的算子信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void *"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-modelhandle/capi-mindspore-oh-ai-modelhandle",
              children: "OH_AI_ModelHandle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向模型对象的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void *"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-traincfghandle/capi-mindspore-oh-ai-traincfghandle",
              children: "OH_AI_TrainCfgHandle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向训练配置对象的指针。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "typedef关键字"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ai_kernelcallback",
              children: "typedef bool (*OH_AI_KernelCallBack)(const OH_AI_TensorHandleArray inputs, const OH_AI_TensorHandleArray outputs,const OH_AI_CallBackParam kernel_Info)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_KernelCallBack"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["回调函数指针。  该函数指针是用于设置", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-model-h/capi-model-h#oh_ai_modelpredict",
              children: "OH_AI_ModelPredict"
            }), "函数参数中的两个回调函数。  该指针指向的函数需要包含三个参数，其中inputs和outputs对应了算子的输入和输出张量，kernel_Info表示当前算子的信息。  可以通过回调函数监控算子执行的情况，例如统计算子的执行时间，校验算子的正确性等等。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ai_modelcreate",
              children: "OH_AI_API OH_AI_ModelHandle OH_AI_ModelCreate(void)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个模型对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ai_modeldestroy",
              children: "OH_AI_API void OH_AI_ModelDestroy(OH_AI_ModelHandle *model)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放一个模型对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ai_modelbuild",
              children: "OH_AI_API OH_AI_Status OH_AI_ModelBuild(OH_AI_ModelHandle model, const void *model_data, size_t data_size,OH_AI_ModelType model_type, const OH_AI_ContextHandle model_context)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从内存缓冲区加载并编译MindSpore Lite模型。  注意，同一个", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-contexthandle/capi-mindspore-oh-ai-contexthandle",
              children: "OH_AI_ContextHandle"
            }), "对象仅能传递给", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-model-h/capi-model-h#oh_ai_modelbuild",
              children: "OH_AI_ModelBuild"
            }), "或者", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-model-h/capi-model-h#oh_ai_modelbuildfromfile",
              children: "OH_AI_ModelBuildFromFile"
            }), "一次，如果多次调用该函数需要创建多个不同的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-contexthandle/capi-mindspore-oh-ai-contexthandle",
              children: "OH_AI_ContextHandle"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ai_modelbuildfromfile",
              children: "OH_AI_API OH_AI_Status OH_AI_ModelBuildFromFile(OH_AI_ModelHandle model, const char *model_path,OH_AI_ModelType model_type, const OH_AI_ContextHandle model_context)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通过模型文件加载并编译MindSpore Lite模型。  注意，同一个", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-contexthandle/capi-mindspore-oh-ai-contexthandle",
              children: "OH_AI_ContextHandle"
            }), "对象仅能传递给", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-model-h/capi-model-h#oh_ai_modelbuild",
              children: "OH_AI_ModelBuild"
            }), "或者", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-model-h/capi-model-h#oh_ai_modelbuildfromfile",
              children: "OH_AI_ModelBuildFromFile"
            }), "一次，如果多次调用该函数需要创建多个不同的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-contexthandle/capi-mindspore-oh-ai-contexthandle",
              children: "OH_AI_ContextHandle"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ai_modelresize",
              children: "OH_AI_API OH_AI_Status OH_AI_ModelResize(OH_AI_ModelHandle model, const OH_AI_TensorHandleArray inputs,OH_AI_ShapeInfo *shape_infos, size_t shape_info_num)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调整已编译模型的输入形状。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ai_modelpredict",
              children: "OH_AI_API OH_AI_Status OH_AI_ModelPredict(OH_AI_ModelHandle model, const OH_AI_TensorHandleArray inputs,OH_AI_TensorHandleArray *outputs, const OH_AI_KernelCallBack before,const OH_AI_KernelCallBack after)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "执行模型推理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ai_modelgetinputs",
              children: "OH_AI_API OH_AI_TensorHandleArray OH_AI_ModelGetInputs(const OH_AI_ModelHandle model)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取模型的输入张量数组结构体。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ai_modelgetoutputs",
              children: "OH_AI_API OH_AI_TensorHandleArray OH_AI_ModelGetOutputs(const OH_AI_ModelHandle model)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取模型的输出张量数组结构体。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ai_modelgetinputbytensorname",
              children: "OH_AI_API OH_AI_TensorHandle OH_AI_ModelGetInputByTensorName(const OH_AI_ModelHandle model, const char *tensor_name)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过张量名获取模型的输入张量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ai_modelgetoutputbytensorname",
              children: "OH_AI_API OH_AI_TensorHandle OH_AI_ModelGetOutputByTensorName(const OH_AI_ModelHandle model, const char *tensor_name)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过张量名获取模型的输出张量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ai_traincfgcreate",
              children: "OH_AI_API OH_AI_TrainCfgHandle OH_AI_TrainCfgCreate()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建训练配置对象指针，仅用于端侧训练。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ai_traincfgdestroy",
              children: "OH_AI_API void OH_AI_TrainCfgDestroy(OH_AI_TrainCfgHandle *train_cfg)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁训练配置对象指针，仅用于端侧训练。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ai_traincfggetlossname",
              children: "OH_AI_API char **OH_AI_TrainCfgGetLossName(OH_AI_TrainCfgHandle train_cfg, size_t *num)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取损失函数的名称列表，仅用于端侧训练。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ai_traincfgsetlossname",
              children: "OH_AI_API void OH_AI_TrainCfgSetLossName(OH_AI_TrainCfgHandle train_cfg, const char **loss_name, size_t num)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置损失函数的名称列表，仅用于端侧训练。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ai_traincfggetoptimizationlevel",
              children: "OH_AI_API OH_AI_OptimizationLevel OH_AI_TrainCfgGetOptimizationLevel(OH_AI_TrainCfgHandle train_cfg)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取训练配置的优化等级，仅用于端侧训练。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ai_traincfgsetoptimizationlevel",
              children: "OH_AI_API void OH_AI_TrainCfgSetOptimizationLevel(OH_AI_TrainCfgHandle train_cfg, OH_AI_OptimizationLevel level)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置训练配置的优化等级，仅用于端侧训练。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ai_trainmodelbuild",
              children: "OH_AI_API OH_AI_Status OH_AI_TrainModelBuild(OH_AI_ModelHandle model, const void *model_data, size_t data_size,OH_AI_ModelType model_type, const OH_AI_ContextHandle model_context,const OH_AI_TrainCfgHandle train_cfg)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从内存缓冲区加载训练模型，并将模型编译至可在Device上运行的状态，仅用于端侧训练。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ai_trainmodelbuildfromfile",
              children: "OH_AI_API OH_AI_Status OH_AI_TrainModelBuildFromFile(OH_AI_ModelHandle model, const char *model_path,OH_AI_ModelType model_type,const OH_AI_ContextHandle model_context,const OH_AI_TrainCfgHandle train_cfg)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据路径读取加载训练模型，并将模型编译至可在Device上运行的状态，仅用于端侧训练。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ai_runstep",
              children: "OH_AI_API OH_AI_Status OH_AI_RunStep(OH_AI_ModelHandle model, const OH_AI_KernelCallBack before,const OH_AI_KernelCallBack after)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "单步训练模型，仅用于端侧训练。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ai_modelsetlearningrate",
              children: "OH_AI_API OH_AI_Status OH_AI_ModelSetLearningRate(OH_AI_ModelHandle model, float learning_rate)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置训练的学习率，仅用于端侧训练。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ai_modelgetlearningrate",
              children: "OH_AI_API float OH_AI_ModelGetLearningRate(OH_AI_ModelHandle model)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取训练的学习率，仅用于端侧训练。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ai_modelgetweights",
              children: "OH_AI_API OH_AI_TensorHandleArray OH_AI_ModelGetWeights(OH_AI_ModelHandle model)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取模型的所有权重Tensors，仅用于端侧训练。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ai_modelupdateweights",
              children: "OH_AI_API OH_AI_Status OH_AI_ModelUpdateWeights(OH_AI_ModelHandle model, const OH_AI_TensorHandleArray new_weights)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "更新模型的权重Tensor内容，仅用于端侧训练。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ai_modelgettrainmode",
              children: "OH_AI_API bool OH_AI_ModelGetTrainMode(OH_AI_ModelHandle model)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取训练模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ai_modelsettrainmode",
              children: "OH_AI_API OH_AI_Status OH_AI_ModelSetTrainMode(OH_AI_ModelHandle model, bool train)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置训练模式，仅用于端侧训练。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ai_modelsetupvirtualbatch",
              children: "OH_AI_API OH_AI_Status OH_AI_ModelSetupVirtualBatch(OH_AI_ModelHandle model, int virtual_batch_multiplier, float lr,float momentum)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置虚拟batch用于训练，仅用于端侧训练。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ai_exportmodel",
              children: "OH_AI_API OH_AI_Status OH_AI_ExportModel(OH_AI_ModelHandle model, OH_AI_ModelType model_type, const char *model_file,OH_AI_QuantizationType quantization_type, bool export_inference_only,char **output_tensor_name, size_t num)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "导出训练模型，仅用于端侧训练。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ai_exportmodelbuffer",
              children: "OH_AI_API OH_AI_Status OH_AI_ExportModelBuffer(OH_AI_ModelHandle model, OH_AI_ModelType model_type, void *model_data,size_t *data_size, OH_AI_QuantizationType quantization_type,bool export_inference_only, char **output_tensor_name, size_t num)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "导出训练模型内存缓存，仅用于端侧训练。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ai_exportweightscollaboratewithmicro",
              children: "OH_AI_API OH_AI_Status OH_AI_ExportWeightsCollaborateWithMicro(OH_AI_ModelHandle model, OH_AI_ModelType model_type,const char *weight_file, bool is_inference,bool enable_fp16, char **changeable_weights_name,size_t num)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "导出模型权重，只能用于micro推理，仅用于端侧训练。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ai_modelloadconfig",
              children: "OH_AI_API OH_AI_Status OH_AI_ModelLoadConfig(OH_AI_ModelHandle model, const char *config_path)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "加载模型配置文件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ai_modelpredictwithconfig",
              children: "OH_AI_API OH_AI_Status OH_AI_ModelPredictWithConfig(OH_AI_ModelHandle model, const OH_AI_TensorHandleArray inputs, OH_AI_TensorHandleArray *outputs, const char *config, const OH_AI_KernelCallBack before, const OH_AI_KernelCallBack after)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "执行模型推理，支持每次推理设置不同推理参数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ai_kernelcallback",
      children: "OH_AI_KernelCallBack()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef bool (*OH_AI_KernelCallBack)(const OH_AI_TensorHandleArray inputs, const OH_AI_TensorHandleArray outputs,const OH_AI_CallBackParam kernel_Info)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "回调函数指针。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该函数指针是用于设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-model-h/capi-model-h#oh_ai_modelpredict",
        children: "OH_AI_ModelPredict"
      }), "函数参数中的两个回调函数。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该指针指向的函数需要包含三个参数，其中inputs和outputs对应了算子的输入和输出张量，kernel_Info表示当前算子的信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以通过回调函数监控算子执行的情况，例如统计算子的执行时间，校验算子的正确性等等。"
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
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-tensorhandlearray/capi-mindspore-oh-ai-tensorhandlearray",
              children: "OH_AI_TensorHandleArray"
            }), " inputs"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模型输入对应的张量数组结构体。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-tensorhandlearray/capi-mindspore-oh-ai-tensorhandlearray",
              children: "OH_AI_TensorHandleArray"
            }), " outputs"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模型输出对应的张量数组结构体。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-callbackparam/capi-mindspore-oh-ai-callbackparam",
              children: "OH_AI_CallBackParam"
            }), " kernel_Info"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前算子的信息。"
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
            children: "bool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调执行是否成功，若成功返回true，失败则返回false。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ai_modelcreate",
      children: "OH_AI_ModelCreate()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AI_API OH_AI_ModelHandle OH_AI_ModelCreate(void)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建一个模型对象。"
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
            children: ["OH_AI_API ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-modelhandle/capi-mindspore-oh-ai-modelhandle",
              children: "OH_AI_ModelHandle"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模型对象指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ai_modeldestroy",
      children: "OH_AI_ModelDestroy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AI_API void OH_AI_ModelDestroy(OH_AI_ModelHandle *model)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "释放一个模型对象。"
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
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-modelhandle/capi-mindspore-oh-ai-modelhandle",
              children: "OH_AI_ModelHandle"
            }), " *model"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模型对象指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ai_modelbuild",
      children: "OH_AI_ModelBuild()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AI_API OH_AI_Status OH_AI_ModelBuild(OH_AI_ModelHandle model, const void *model_data, size_t data_size,OH_AI_ModelType model_type, const OH_AI_ContextHandle model_context)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从内存缓冲区加载并编译MindSpore Lite模型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["注意，同一个", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-contexthandle/capi-mindspore-oh-ai-contexthandle",
        children: "OH_AI_ContextHandle"
      }), "对象仅能传递给", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-model-h/capi-model-h#oh_ai_modelbuild",
        children: "OH_AI_ModelBuild"
      }), "或者", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-model-h/capi-model-h#oh_ai_modelbuildfromfile",
        children: "OH_AI_ModelBuildFromFile"
      }), "一次，如果多次调用该函数需要创建多个不同的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-contexthandle/capi-mindspore-oh-ai-contexthandle",
        children: "OH_AI_ContextHandle"
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
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-modelhandle/capi-mindspore-oh-ai-modelhandle",
              children: "OH_AI_ModelHandle"
            }), " model"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模型对象指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const void *model_data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内存中已经加载的模型数据地址。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t data_size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模型数据的长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-types-h/capi-types-h#oh_ai_modeltype",
              children: "OH_AI_ModelType"
            }), " model_type"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["模型文件类型，具体见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-types-h/capi-types-h#oh_ai_modeltype",
              children: "OH_AI_ModelType"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-contexthandle/capi-mindspore-oh-ai-contexthandle",
              children: "OH_AI_ContextHandle"
            }), " model_context"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["模型运行时的上下文环境，具体见 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-contexthandle/capi-mindspore-oh-ai-contexthandle",
              children: "OH_AI_ContextHandle"
            }), "。"]
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
            children: ["OH_AI_API ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-status-h/capi-status-h#oh_ai_status",
              children: "OH_AI_Status"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["枚举类型的状态码", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-status-h/capi-status-h#oh_ai_status",
              children: "OH_AI_Status"
            }), "，若成功返回OH_AI_STATUS_SUCCESS，失败则返回具体错误码。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ai_modelbuildfromfile",
      children: "OH_AI_ModelBuildFromFile()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AI_API OH_AI_Status OH_AI_ModelBuildFromFile(OH_AI_ModelHandle model, const char *model_path,OH_AI_ModelType model_type, const OH_AI_ContextHandle model_context)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过模型文件加载并编译MindSpore Lite模型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["注意，同一个", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-contexthandle/capi-mindspore-oh-ai-contexthandle",
        children: "OH_AI_ContextHandle"
      }), "对象仅能传递给", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-model-h/capi-model-h#oh_ai_modelbuild",
        children: "OH_AI_ModelBuild"
      }), "或者", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-model-h/capi-model-h#oh_ai_modelbuildfromfile",
        children: "OH_AI_ModelBuildFromFile"
      }), "一次，如果多次调用该函数需要创建多个不同的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-contexthandle/capi-mindspore-oh-ai-contexthandle",
        children: "OH_AI_ContextHandle"
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
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-modelhandle/capi-mindspore-oh-ai-modelhandle",
              children: "OH_AI_ModelHandle"
            }), " model"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模型对象指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char *model_path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模型文件路径。字符串长度限制跟随文件系统。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-types-h/capi-types-h#oh_ai_modeltype",
              children: "OH_AI_ModelType"
            }), " model_type"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["模型文件类型，具体见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-types-h/capi-types-h#oh_ai_modeltype",
              children: "OH_AI_ModelType"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-contexthandle/capi-mindspore-oh-ai-contexthandle",
              children: "OH_AI_ContextHandle"
            }), " model_context"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["模型运行时的上下文环境，具体见 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-contexthandle/capi-mindspore-oh-ai-contexthandle",
              children: "OH_AI_ContextHandle"
            }), "。"]
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
            children: ["OH_AI_API ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-status-h/capi-status-h#oh_ai_status",
              children: "OH_AI_Status"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["枚举类型的状态码", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-status-h/capi-status-h#oh_ai_status",
              children: "OH_AI_Status"
            }), "，若成功返回OH_AI_STATUS_SUCCESS，失败则返回具体错误码。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ai_modelresize",
      children: "OH_AI_ModelResize()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AI_API OH_AI_Status OH_AI_ModelResize(OH_AI_ModelHandle model, const OH_AI_TensorHandleArray inputs,OH_AI_ShapeInfo *shape_infos, size_t shape_info_num)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调整已编译模型的输入形状。"
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
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-modelhandle/capi-mindspore-oh-ai-modelhandle",
              children: "OH_AI_ModelHandle"
            }), " model"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模型对象指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-tensorhandlearray/capi-mindspore-oh-ai-tensorhandlearray",
              children: "const OH_AI_TensorHandleArray"
            }), " inputs"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模型输入对应的张量数组结构体。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-shapeinfo/capi-mindspore-oh-ai-shapeinfo",
              children: "OH_AI_ShapeInfo"
            }), " *shape_infos"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入形状信息数组，按模型输入顺序排列的由形状信息组成的数组，模型会按顺序依次调整张量形状。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t shape_info_num"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "形状信息数组的长度。"
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
            children: ["OH_AI_API ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-status-h/capi-status-h#oh_ai_status",
              children: "OH_AI_Status"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["枚举类型的状态码", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-status-h/capi-status-h#oh_ai_status",
              children: "OH_AI_Status"
            }), "，若成功返回OH_AI_STATUS_SUCCESS，失败则返回具体错误码。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ai_modelpredict",
      children: "OH_AI_ModelPredict()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AI_API OH_AI_Status OH_AI_ModelPredict(OH_AI_ModelHandle model, const OH_AI_TensorHandleArray inputs,OH_AI_TensorHandleArray *outputs, const OH_AI_KernelCallBack before,const OH_AI_KernelCallBack after)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行模型推理。"
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
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-modelhandle/capi-mindspore-oh-ai-modelhandle",
              children: "OH_AI_ModelHandle"
            }), " model"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模型对象指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-tensorhandlearray/capi-mindspore-oh-ai-tensorhandlearray",
              children: "const OH_AI_TensorHandleArray"
            }), " inputs"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模型输入对应的张量数组结构体。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-tensorhandlearray/capi-mindspore-oh-ai-tensorhandlearray",
              children: "OH_AI_TensorHandleArray"
            }), " *outputs"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模型输出对应的张量数组结构体的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-model-h/capi-model-h#oh_ai_kernelcallback",
              children: "const OH_AI_KernelCallBack"
            }), " before"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模型推理前执行的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-model-h/capi-model-h#oh_ai_kernelcallback",
              children: "const OH_AI_KernelCallBack"
            }), " after"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模型推理后执行的回调函数。"
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
            children: ["OH_AI_API ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-status-h/capi-status-h#oh_ai_status",
              children: "OH_AI_Status"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["枚举类型的状态码", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-status-h/capi-status-h#oh_ai_status",
              children: "OH_AI_Status"
            }), "，若成功返回OH_AI_STATUS_SUCCESS，失败则返回具体错误码。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ai_modelgetinputs",
      children: "OH_AI_ModelGetInputs()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AI_API OH_AI_TensorHandleArray OH_AI_ModelGetInputs(const OH_AI_ModelHandle model)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取模型的输入张量数组结构体。"
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
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-modelhandle/capi-mindspore-oh-ai-modelhandle",
              children: "OH_AI_ModelHandle"
            }), " model"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模型对象指针。"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_AI_API ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-tensorhandlearray/capi-mindspore-oh-ai-tensorhandlearray",
              children: "OH_AI_TensorHandleArray"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模型输入对应的张量数组结构体。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ai_modelgetoutputs",
      children: "OH_AI_ModelGetOutputs()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AI_API OH_AI_TensorHandleArray OH_AI_ModelGetOutputs(const OH_AI_ModelHandle model)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取模型的输出张量数组结构体。"
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
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-modelhandle/capi-mindspore-oh-ai-modelhandle",
              children: "OH_AI_ModelHandle"
            }), " model"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模型对象指针。"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_AI_API ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-tensorhandlearray/capi-mindspore-oh-ai-tensorhandlearray",
              children: "OH_AI_TensorHandleArray"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模型输出对应的张量数组结构体。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ai_modelgetinputbytensorname",
      children: "OH_AI_ModelGetInputByTensorName()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AI_API OH_AI_TensorHandle OH_AI_ModelGetInputByTensorName(const OH_AI_ModelHandle model, const char *tensor_name)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过张量名获取模型的输入张量。"
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
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-modelhandle/capi-mindspore-oh-ai-modelhandle",
              children: "OH_AI_ModelHandle"
            }), " model"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模型对象指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char *tensor_name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "张量名称。字符串长度跟随系统限制。"
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
            children: ["OH_AI_API ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-tensorhandle/capi-mindspore-oh-ai-tensorhandle",
              children: "OH_AI_TensorHandle"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "tensor_name所对应的输入张量的张量指针，如果输入中没有该张量则返回空。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ai_modelgetoutputbytensorname",
      children: "OH_AI_ModelGetOutputByTensorName()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AI_API OH_AI_TensorHandle OH_AI_ModelGetOutputByTensorName(const OH_AI_ModelHandle model, const char *tensor_name)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过张量名获取模型的输出张量。"
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
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-modelhandle/capi-mindspore-oh-ai-modelhandle",
              children: "OH_AI_ModelHandle"
            }), " model"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模型对象指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char *tensor_name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "张量名称。字符串长度跟随系统限制。"
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
            children: ["OH_AI_API ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-tensorhandle/capi-mindspore-oh-ai-tensorhandle",
              children: "OH_AI_TensorHandle"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "tensor_name所对应的输出张量的张量指针，如果输出中没有该张量则返回空。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ai_traincfgcreate",
      children: "OH_AI_TrainCfgCreate()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AI_API OH_AI_TrainCfgHandle OH_AI_TrainCfgCreate()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建训练配置对象指针，仅用于端侧训练。"
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
            children: ["OH_AI_API ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-traincfghandle/capi-mindspore-oh-ai-traincfghandle",
              children: "OH_AI_TrainCfgHandle"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "训练配置对象指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ai_traincfgdestroy",
      children: "OH_AI_TrainCfgDestroy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AI_API void OH_AI_TrainCfgDestroy(OH_AI_TrainCfgHandle *train_cfg)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "销毁训练配置对象指针，仅用于端侧训练。"
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
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-traincfghandle/capi-mindspore-oh-ai-traincfghandle",
              children: "OH_AI_TrainCfgHandle"
            }), " *train_cfg"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "训练配置对象指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ai_traincfggetlossname",
      children: "OH_AI_TrainCfgGetLossName()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AI_API char **OH_AI_TrainCfgGetLossName(OH_AI_TrainCfgHandle train_cfg, size_t *num)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取损失函数的名称列表，仅用于端侧训练。"
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
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-traincfghandle/capi-mindspore-oh-ai-traincfghandle",
              children: "OH_AI_TrainCfgHandle"
            }), " train_cfg"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "训练配置对象指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t *num"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "损失函数数量。"
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
            children: "OH_AI_API char **"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "损失函数的名称列表。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ai_traincfgsetlossname",
      children: "OH_AI_TrainCfgSetLossName()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AI_API void OH_AI_TrainCfgSetLossName(OH_AI_TrainCfgHandle train_cfg, const char **loss_name, size_t num)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置损失函数的名称列表，仅用于端侧训练。"
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
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-traincfghandle/capi-mindspore-oh-ai-traincfghandle",
              children: "OH_AI_TrainCfgHandle"
            }), " train_cfg"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "训练配置对象指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char **loss_name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "损失函数的名称列表。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t num"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "损失函数数量。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ai_traincfggetoptimizationlevel",
      children: "OH_AI_TrainCfgGetOptimizationLevel()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AI_API OH_AI_OptimizationLevel OH_AI_TrainCfgGetOptimizationLevel(OH_AI_TrainCfgHandle train_cfg)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取训练配置的优化等级，仅用于端侧训练。"
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
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-traincfghandle/capi-mindspore-oh-ai-traincfghandle",
              children: "OH_AI_TrainCfgHandle"
            }), " train_cfg"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "训练配置对象指针。"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_AI_API ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-types-h/capi-types-h#oh_ai_optimizationlevel",
              children: "OH_AI_OptimizationLevel"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "优化等级。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ai_traincfgsetoptimizationlevel",
      children: "OH_AI_TrainCfgSetOptimizationLevel()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AI_API void OH_AI_TrainCfgSetOptimizationLevel(OH_AI_TrainCfgHandle train_cfg, OH_AI_OptimizationLevel level)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置训练配置的优化等级，仅用于端侧训练。"
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
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-traincfghandle/capi-mindspore-oh-ai-traincfghandle",
              children: "OH_AI_TrainCfgHandle"
            }), " train_cfg"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "训练配置对象指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-types-h/capi-types-h#oh_ai_optimizationlevel",
              children: "OH_AI_OptimizationLevel"
            }), " level"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "优化等级。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ai_trainmodelbuild",
      children: "OH_AI_TrainModelBuild()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AI_API OH_AI_Status OH_AI_TrainModelBuild(OH_AI_ModelHandle model, const void *model_data, size_t data_size,OH_AI_ModelType model_type, const OH_AI_ContextHandle model_context,const OH_AI_TrainCfgHandle train_cfg)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从内存缓冲区加载训练模型，并将模型编译至可在Device上运行的状态，仅用于端侧训练。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-modelhandle/capi-mindspore-oh-ai-modelhandle",
              children: "OH_AI_ModelHandle"
            }), " model"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模型对象指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const void *model_data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向存储读入模型文件缓冲区的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t data_size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缓冲区大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-types-h/capi-types-h#oh_ai_modeltype",
              children: "OH_AI_ModelType"
            }), " model_type"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["模型文件类型，具体见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-types-h/capi-types-h#oh_ai_modeltype",
              children: "OH_AI_ModelType"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-contexthandle/capi-mindspore-oh-ai-contexthandle",
              children: "OH_AI_ContextHandle"
            }), " model_context"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["模型运行时的上下文环境，具体见 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-contexthandle/capi-mindspore-oh-ai-contexthandle",
              children: "OH_AI_ContextHandle"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-traincfghandle/capi-mindspore-oh-ai-traincfghandle",
              children: "OH_AI_TrainCfgHandle"
            }), " train_cfg"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "训练配置对象指针。"
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
            children: ["OH_AI_API ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-status-h/capi-status-h#oh_ai_status",
              children: "OH_AI_Status"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["枚举类型的状态码", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-status-h/capi-status-h#oh_ai_status",
              children: "OH_AI_Status"
            }), "，若成功返回OH_AI_STATUS_SUCCESS，失败则返回具体错误码。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ai_trainmodelbuildfromfile",
      children: "OH_AI_TrainModelBuildFromFile()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AI_API OH_AI_Status OH_AI_TrainModelBuildFromFile(OH_AI_ModelHandle model, const char *model_path,OH_AI_ModelType model_type,const OH_AI_ContextHandle model_context,const OH_AI_TrainCfgHandle train_cfg)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据路径读取加载训练模型，并将模型编译至可在Device上运行的状态，仅用于端侧训练。"
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
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-modelhandle/capi-mindspore-oh-ai-modelhandle",
              children: "OH_AI_ModelHandle"
            }), " model"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模型对象指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char *model_path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模型文件路径。字符串长度限制跟随文件系统。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-types-h/capi-types-h#oh_ai_modeltype",
              children: "OH_AI_ModelType"
            }), " model_type"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["模型文件类型，具体见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-types-h/capi-types-h#oh_ai_modeltype",
              children: "OH_AI_ModelType"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-contexthandle/capi-mindspore-oh-ai-contexthandle",
              children: "OH_AI_ContextHandle"
            }), " model_context"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["模型运行时的上下文环境，具体见 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-contexthandle/capi-mindspore-oh-ai-contexthandle",
              children: "OH_AI_ContextHandle"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-traincfghandle/capi-mindspore-oh-ai-traincfghandle",
              children: "OH_AI_TrainCfgHandle"
            }), " train_cfg"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "训练配置对象指针。"
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
            children: ["OH_AI_API ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-status-h/capi-status-h#oh_ai_status",
              children: "OH_AI_Status"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["枚举类型的状态码", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-status-h/capi-status-h#oh_ai_status",
              children: "OH_AI_Status"
            }), "，若成功返回OH_AI_STATUS_SUCCESS，失败则返回具体错误码。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ai_runstep",
      children: "OH_AI_RunStep()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AI_API OH_AI_Status OH_AI_RunStep(OH_AI_ModelHandle model, const OH_AI_KernelCallBack before,const OH_AI_KernelCallBack after)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "单步训练模型，仅用于端侧训练。"
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
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-modelhandle/capi-mindspore-oh-ai-modelhandle",
              children: "OH_AI_ModelHandle"
            }), " model"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模型对象指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-model-h/capi-model-h#oh_ai_kernelcallback",
              children: "const OH_AI_KernelCallBack"
            }), " before"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模型推理前执行的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-model-h/capi-model-h#oh_ai_kernelcallback",
              children: "const OH_AI_KernelCallBack"
            }), " after"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模型推理后执行的回调函数。"
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
            children: ["OH_AI_API ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-status-h/capi-status-h#oh_ai_status",
              children: "OH_AI_Status"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["枚举类型的状态码", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-status-h/capi-status-h#oh_ai_status",
              children: "OH_AI_Status"
            }), "，若成功返回OH_AI_STATUS_SUCCESS，失败则返回具体错误码。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ai_modelsetlearningrate",
      children: "OH_AI_ModelSetLearningRate()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AI_API OH_AI_Status OH_AI_ModelSetLearningRate(OH_AI_ModelHandle model, float learning_rate)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置训练的学习率，仅用于端侧训练。"
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
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-modelhandle/capi-mindspore-oh-ai-modelhandle",
              children: "OH_AI_ModelHandle"
            }), " model"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模型对象指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float learning_rate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "学习率。"
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
            children: ["OH_AI_API ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-status-h/capi-status-h#oh_ai_status",
              children: "OH_AI_Status"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["枚举类型的状态码", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-status-h/capi-status-h#oh_ai_status",
              children: "OH_AI_Status"
            }), "，若成功返回OH_AI_STATUS_SUCCESS，失败则返回具体错误码。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ai_modelgetlearningrate",
      children: "OH_AI_ModelGetLearningRate()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AI_API float OH_AI_ModelGetLearningRate(OH_AI_ModelHandle model)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取训练的学习率，仅用于端侧训练。"
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
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-modelhandle/capi-mindspore-oh-ai-modelhandle",
              children: "OH_AI_ModelHandle"
            }), " model"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模型对象指针。"
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
            children: "OH_AI_API float"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "学习率，没有设置优化器时为0.0。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ai_modelgetweights",
      children: "OH_AI_ModelGetWeights()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AI_API OH_AI_TensorHandleArray OH_AI_ModelGetWeights(OH_AI_ModelHandle model)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取模型的所有权重Tensors，仅用于端侧训练。"
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
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-modelhandle/capi-mindspore-oh-ai-modelhandle",
              children: "OH_AI_ModelHandle"
            }), " model"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模型对象指针。"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_AI_API ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-tensorhandlearray/capi-mindspore-oh-ai-tensorhandlearray",
              children: "OH_AI_TensorHandleArray"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模型的所有权重Tensor。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ai_modelupdateweights",
      children: "OH_AI_ModelUpdateWeights()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AI_API OH_AI_Status OH_AI_ModelUpdateWeights(OH_AI_ModelHandle model, const OH_AI_TensorHandleArray new_weights)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "更新模型的权重Tensor内容，仅用于端侧训练。"
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
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-modelhandle/capi-mindspore-oh-ai-modelhandle",
              children: "OH_AI_ModelHandle"
            }), " model"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模型对象指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-tensorhandlearray/capi-mindspore-oh-ai-tensorhandlearray",
              children: "const OH_AI_TensorHandleArray"
            }), " new_weights"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要更新的权重Tensor。"
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
            children: ["OH_AI_API ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-status-h/capi-status-h#oh_ai_status",
              children: "OH_AI_Status"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["枚举类型的状态码", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-status-h/capi-status-h#oh_ai_status",
              children: "OH_AI_Status"
            }), "，若成功返回OH_AI_STATUS_SUCCESS，失败则返回具体错误码。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ai_modelgettrainmode",
      children: "OH_AI_ModelGetTrainMode()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AI_API bool OH_AI_ModelGetTrainMode(OH_AI_ModelHandle model)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取训练模式。"
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
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-modelhandle/capi-mindspore-oh-ai-modelhandle",
              children: "OH_AI_ModelHandle"
            }), " model"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模型对象指针。"
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
            children: "OH_AI_API bool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示是否是训练模式。true表示是训练模式，false表示不是训练模式。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ai_modelsettrainmode",
      children: "OH_AI_ModelSetTrainMode()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AI_API OH_AI_Status OH_AI_ModelSetTrainMode(OH_AI_ModelHandle model, bool train)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置训练模式，仅用于端侧训练。"
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
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-modelhandle/capi-mindspore-oh-ai-modelhandle",
              children: "OH_AI_ModelHandle"
            }), " model"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模型对象指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool train"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否为训练模式。true表示是训练模式，false表示不是训练模式。"
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
            children: ["OH_AI_API ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-status-h/capi-status-h#oh_ai_status",
              children: "OH_AI_Status"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["枚举类型的状态码", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-status-h/capi-status-h#oh_ai_status",
              children: "OH_AI_Status"
            }), "，若成功返回OH_AI_STATUS_SUCCESS，失败则返回具体错误码。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ai_modelsetupvirtualbatch",
      children: "OH_AI_ModelSetupVirtualBatch()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AI_API OH_AI_Status OH_AI_ModelSetupVirtualBatch(OH_AI_ModelHandle model, int virtual_batch_multiplier, float lr,float momentum)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置虚拟batch用于训练，仅用于端侧训练。"
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
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-modelhandle/capi-mindspore-oh-ai-modelhandle",
              children: "OH_AI_ModelHandle"
            }), " model"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模型对象指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int virtual_batch_multiplier"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "虚拟batch乘法器，当设置值小于1时，表示禁用虚拟batch。长度跟随系统限制。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float lr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "学习率，默认为-1.0f。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float momentum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "动量，默认为-1.0f。"
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
            children: ["OH_AI_API ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-status-h/capi-status-h#oh_ai_status",
              children: "OH_AI_Status"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["枚举类型的状态码", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-status-h/capi-status-h#oh_ai_status",
              children: "OH_AI_Status"
            }), "，若成功返回OH_AI_STATUS_SUCCESS，失败则返回具体错误码。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ai_exportmodel",
      children: "OH_AI_ExportModel()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AI_API OH_AI_Status OH_AI_ExportModel(OH_AI_ModelHandle model, OH_AI_ModelType model_type, const char *model_file,OH_AI_QuantizationType quantization_type, bool export_inference_only,char **output_tensor_name, size_t num)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "导出训练模型，仅用于端侧训练。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-modelhandle/capi-mindspore-oh-ai-modelhandle",
              children: "OH_AI_ModelHandle"
            }), " model"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模型对象指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-types-h/capi-types-h#oh_ai_modeltype",
              children: "OH_AI_ModelType"
            }), " model_type"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["模型文件类型，具体见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-types-h/capi-types-h#oh_ai_modeltype",
              children: "OH_AI_ModelType"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char *model_file"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "导出的模型文件路径。字符串长度限制跟随文件系统。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-types-h/capi-types-h#oh_ai_quantizationtype",
              children: "OH_AI_QuantizationType"
            }), " quantization_type"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "量化类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool export_inference_only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否导出推理模型。true表示导出推理模型，false表示不导出推理模型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "char **output_tensor_name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置导出模型的输出Tensor，默认为空表示全量导出。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t num"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出Tensor的数量。"
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
            children: ["OH_AI_API ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-status-h/capi-status-h#oh_ai_status",
              children: "OH_AI_Status"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["枚举类型的状态码", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-status-h/capi-status-h#oh_ai_status",
              children: "OH_AI_Status"
            }), "，若成功返回OH_AI_STATUS_SUCCESS，失败则返回具体错误码。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ai_exportmodelbuffer",
      children: "OH_AI_ExportModelBuffer()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AI_API OH_AI_Status OH_AI_ExportModelBuffer(OH_AI_ModelHandle model, OH_AI_ModelType model_type, void *model_data,size_t *data_size, OH_AI_QuantizationType quantization_type,bool export_inference_only, char **output_tensor_name, size_t num)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "导出训练模型内存缓存，仅用于端侧训练。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-modelhandle/capi-mindspore-oh-ai-modelhandle",
              children: "OH_AI_ModelHandle"
            }), " model"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模型对象指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-types-h/capi-types-h#oh_ai_modeltype",
              children: "OH_AI_ModelType"
            }), " model_type"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["模型文件类型，具体见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-types-h/capi-types-h#oh_ai_modeltype",
              children: "OH_AI_ModelType"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void *model_data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向导出模型文件缓冲区的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t *data_size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缓冲区大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-types-h/capi-types-h#oh_ai_quantizationtype",
              children: "OH_AI_QuantizationType"
            }), " quantization_type"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "量化类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool export_inference_only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否导出推理模型。true表示导出推理模型，false表示不导出推理模型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "char **output_tensor_name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置导出模型的输出Tensor，默认为空表示全量导出。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t num"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出Tensor的数量。"
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
            children: ["OH_AI_API ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-status-h/capi-status-h#oh_ai_status",
              children: "OH_AI_Status"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["枚举类型的状态码", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-status-h/capi-status-h#oh_ai_status",
              children: "OH_AI_Status"
            }), "，若成功返回OH_AI_STATUS_SUCCESS，失败则返回具体错误码。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ai_exportweightscollaboratewithmicro",
      children: "OH_AI_ExportWeightsCollaborateWithMicro()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AI_API OH_AI_Status OH_AI_ExportWeightsCollaborateWithMicro(OH_AI_ModelHandle model, OH_AI_ModelType model_type,const char *weight_file, bool is_inference,bool enable_fp16, char **changeable_weights_name,size_t num)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "导出模型权重，只能用于micro推理，仅用于端侧训练。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-modelhandle/capi-mindspore-oh-ai-modelhandle",
              children: "OH_AI_ModelHandle"
            }), " model"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模型对象指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-types-h/capi-types-h#oh_ai_modeltype",
              children: "OH_AI_ModelType"
            }), " model_type"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["模型文件类型，具体见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-types-h/capi-types-h#oh_ai_modeltype",
              children: "OH_AI_ModelType"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char *weight_file"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "导出的权重文件路径。字符串长度限制跟随文件系统。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool is_inference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否导出推理模型，当前只支持设置为true。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool enable_fp16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "浮点权重是否保存为float16格式。true表示保存为float16格式，false表示不保存为float16格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "char **changeable_weights_name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "shape可变的权重Tensor名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t num"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "shape可变的权重Tensor名称的数量。"
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
            children: ["OH_AI_API ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-status-h/capi-status-h#oh_ai_status",
              children: "OH_AI_Status"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["枚举类型的状态码", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-status-h/capi-status-h#oh_ai_status",
              children: "OH_AI_Status"
            }), "，若成功返回OH_AI_STATUS_SUCCESS，失败则返回具体错误码。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ai_modelloadconfig",
      children: "OH_AI_ModelLoadConfig()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AI_API OH_AI_Status OH_AI_ModelLoadConfig(OH_AI_ModelHandle model, const char *config_path);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "加载模型配置文件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
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
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-modelhandle/capi-mindspore-oh-ai-modelhandle",
              children: "OH_AI_ModelHandle"
            }), " model"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模型对象指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char *config_path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置文件路径。字符串长度限制跟随文件系统。"
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
            children: ["OH_AI_API ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-status-h/capi-status-h#oh_ai_status",
              children: "OH_AI_Status"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["枚举类型的状态码", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-status-h/capi-status-h#oh_ai_status",
              children: "OH_AI_Status"
            }), "，若成功返回OH_AI_STATUS_SUCCESS，失败则返回具体错误码。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ai_modelpredictwithconfig",
      children: "OH_AI_ModelPredictWithConfig()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AI_API OH_AI_Status OH_AI_ModelPredictWithConfig(OH_AI_ModelHandle model, const OH_AI_TensorHandleArray inputs, OH_AI_TensorHandleArray *outputs, const char *config, const OH_AI_KernelCallBack before, const OH_AI_KernelCallBack after)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行模型推理，支持每次推理设置不同推理参数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 23"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-modelhandle/capi-mindspore-oh-ai-modelhandle",
              children: "OH_AI_ModelHandle"
            }), " model"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模型对象指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-tensorhandlearray/capi-mindspore-oh-ai-tensorhandlearray",
              children: "const OH_AI_TensorHandleArray"
            }), " inputs"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模型输入对应的张量数组结构体。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-struct/capi-mindspore-oh-ai-tensorhandlearray/capi-mindspore-oh-ai-tensorhandlearray",
              children: "OH_AI_TensorHandleArray"
            }), " *outputs"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模型输出对应的张量数组结构体的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char *config"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模型配置文件。字符串长度限制跟随文件系统。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-model-h/capi-model-h#oh_ai_kernelcallback",
              children: "const OH_AI_KernelCallBack"
            }), " before"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模型推理前执行的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-model-h/capi-model-h#oh_ai_kernelcallback",
              children: "const OH_AI_KernelCallBack"
            }), " after"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模型推理后执行的回调函数。"
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
            children: ["OH_AI_API ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-status-h/capi-status-h#oh_ai_status",
              children: "OH_AI_Status"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["枚举类型的状态码", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-status-h/capi-status-h#oh_ai_status",
              children: "OH_AI_Status"
            }), "，若成功返回OH_AI_STATUS_SUCCESS，失败则返回具体错误码。"]
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