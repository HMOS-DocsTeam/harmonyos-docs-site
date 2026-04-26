"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["570184"], {
950280(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_neural_network_runtime_kit_neural_network_runtime_guidelines_neural_network_runtime_guidelines_md_c66_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-neural-network-runtime-kit-neural-network-runtime-guidelines-neural-network-runtime-guidelines-md-c66.json
var site_docs_neural_network_runtime_kit_neural_network_runtime_guidelines_neural_network_runtime_guidelines_md_c66_namespaceObject = JSON.parse('{"id":"neural-network-runtime-kit/neural-network-runtime-guidelines/neural-network-runtime-guidelines","title":"Neural Network Runtime对接AI推理框架开发指导","description":"场景介绍","source":"@site/docs/neural-network-runtime-kit/neural-network-runtime-guidelines/neural-network-runtime-guidelines.md","sourceDirName":"neural-network-runtime-kit/neural-network-runtime-guidelines","slug":"/neural-network-runtime-kit/neural-network-runtime-guidelines/","permalink":"/harmonyos-docs-site/neural-network-runtime-kit/neural-network-runtime-guidelines/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Neural Network Runtime对接AI推理框架开发指导","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/neural-network-runtime-guidelines","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Neural Network Runtime Kit简介","permalink":"/harmonyos-docs-site/neural-network-runtime-kit/neural-network-runtime-kit-introduction/"},"next":{"title":"Speech Kit简介","permalink":"/harmonyos-docs-site/speech-kit-guide/speech-production/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/neural-network-runtime-kit/neural-network-runtime-guidelines/neural-network-runtime-guidelines.md


const frontMatter = {
	title: 'Neural Network Runtime对接AI推理框架开发指导',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/neural-network-runtime-guidelines',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = 'Neural Network Runtime对接AI推理框架开发指导';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "环境准备",
  "id": "环境准备",
  "level": 2
}, {
  "value": "环境要求",
  "id": "环境要求",
  "level": 3
}, {
  "value": "环境搭建",
  "id": "环境搭建",
  "level": 3
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "结构体",
  "id": "结构体",
  "level": 3
}, {
  "value": "模型构造接口",
  "id": "模型构造接口",
  "level": 3
}, {
  "value": "模型编译接口",
  "id": "模型编译接口",
  "level": 3
}, {
  "value": "张量描述接口",
  "id": "张量描述接口",
  "level": 3
}, {
  "value": "张量接口",
  "id": "张量接口",
  "level": 3
}, {
  "value": "执行推理接口",
  "id": "执行推理接口",
  "level": 3
}, {
  "value": "设备管理接口",
  "id": "设备管理接口",
  "level": 3
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "调测验证",
  "id": "调测验证",
  "level": 2
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
        id: "neural-network-runtime对接ai推理框架开发指导",
        children: "Neural Network Runtime对接AI推理框架开发指导"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Neural Network Runtime作为AI推理引擎和加速芯片的桥梁，为AI推理引擎提供精简的Native接口，满足推理引擎通过加速芯片执行端到端推理的需求。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文以图1展示的Add单算子模型为例，介绍Neural Network Runtime的开发流程。Add算子包含两个输入、一个参数和一个输出，其中的activation参数用于指定Add算子中激活函数的类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " Add单算子网络示意图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(819923)/* ["default"] */.A) + "",
        width: "1242",
        height: "482"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "环境准备",
      children: "环境准备"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "环境要求",
      children: "环境要求"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Neural Network Runtime部件的环境要求如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "开发环境：Ubuntu 18.04及以上。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "接入设备：系统定义的标准设备，系统中内置AI硬件驱动并已接入Neural Network Runtime。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于Neural Network Runtime通过Native API对外开放，需要下载对应的SDK并通过Native开发套件编译Neural Network Runtime应用。可以使用DevEco Studio来搭建环境和编译代码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "环境搭建",
      children: "环境搭建"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用Ubuntu编译服务器的终端。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "指定native工具链路径来编译代码，可以使用DevEco Studio来下载对应的SDK来进行编译。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DevEco Studio安装目录下的SDK路径可以在DevEco Studio工程界面，点击File > Settings... > 在settings中搜索SDK，下载对应的SDK即可。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下为Neural Network Runtime开发流程中的常用接口，具体可见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-module/capi-neuralnetworkruntime/capi-neuralnetworkruntime",
        children: "NeuralNetworkRuntime"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "结构体",
      children: "结构体"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "结构体名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "typedef struct OH_NNModel OH_NNModel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Neural Network Runtime的模型句柄，用于构造模型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "typedef struct OH_NNCompilation OH_NNCompilation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Neural Network Runtime的编译器句柄，用于编译AI模型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "typedef struct OH_NNExecutor OH_NNExecutor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Neural Network Runtime的执行器句柄，用于在指定设备上执行推理计算。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "typedef struct NN_QuantParam NN_QuantParam"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Neural Network Runtime的量化参数句柄，用于在构造模型时指定张量的量化参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "typedef struct NN_TensorDesc NN_TensorDesc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Neural Network Runtime的张量描述句柄，用于描述张量的各类属性，例如数据布局、数据类型、形状等。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "typedef struct NN_Tensor NN_Tensor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Neural Network Runtime的张量句柄，用于设置执行器的推理输入和输出张量。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "模型构造接口",
      children: "模型构造接口"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NNModel_Construct()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建OH_NNModel类型的模型实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NN_ReturnCode OH_NNModel_AddTensorToModel(OH_NNModel *model, const NN_TensorDesc *tensorDesc)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向模型实例中添加张量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NN_ReturnCode OH_NNModel_SetTensorData(OH_NNModel *model, uint32_t index, const void *dataBuffer, size_t length)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置张量的数值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NN_ReturnCode OH_NNModel_AddOperation(OH_NNModel *model, OH_NN_OperationType op, const OH_NN_UInt32Array *paramIndices, const OH_NN_UInt32Array *inputIndices, const OH_NN_UInt32Array *outputIndices)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向模型实例中添加算子。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NN_ReturnCode OH_NNModel_SpecifyInputsAndOutputs(OH_NNModel *model, const OH_NN_UInt32Array *inputIndices, const OH_NN_UInt32Array *outputIndices)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定模型的输入和输出张量的索引值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NN_ReturnCode OH_NNModel_Finish(OH_NNModel *model)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "完成模型构图。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_NNModel_Destroy(OH_NNModel **model)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁模型实例。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "模型编译接口",
      children: "模型编译接口"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NNCompilation *OH_NNCompilation_Construct(const OH_NNModel *model)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "基于模型实例创建OH_NNCompilation类型的编译实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NNCompilation *OH_NNCompilation_ConstructWithOfflineModelFile(const char *modelPath)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "基于离线模型文件路径创建OH_NNCompilation类型的编译实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NNCompilation *OH_NNCompilation_ConstructWithOfflineModelBuffer(const void *modelBuffer, size_t modelSize)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "基于离线模型文件内存创建OH_NNCompilation类型的编译实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NNCompilation *OH_NNCompilation_ConstructForCache()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个空的编译实例，以便稍后从模型缓存中恢复。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NN_ReturnCode OH_NNCompilation_ExportCacheToBuffer(OH_NNCompilation *compilation, const void *buffer, size_t length, size_t *modelSize)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将模型缓存写入到指定内存区域。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NN_ReturnCode OH_NNCompilation_ImportCacheFromBuffer(OH_NNCompilation *compilation, const void *buffer, size_t modelSize)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从指定内存区域读取模型缓存。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NN_ReturnCode OH_NNCompilation_AddExtensionConfig(OH_NNCompilation *compilation, const char *configName, const void *configValue, const size_t configValueSize)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为自定义硬件属性添加扩展配置，具体硬件的扩展属性名称和属性值需要从硬件厂商的文档中获取。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NN_ReturnCode OH_NNCompilation_SetDevice(OH_NNCompilation *compilation, size_t deviceID)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定模型编译和计算的硬件，可通过设备管理接口获取。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NN_ReturnCode OH_NNCompilation_SetCache(OH_NNCompilation *compilation, const char *cachePath, uint32_t version)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置编译模型的缓存目录和版本。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NN_ReturnCode OH_NNCompilation_SetPerformanceMode(OH_NNCompilation *compilation, OH_NN_PerformanceMode performanceMode)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置模型计算的性能模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NN_ReturnCode OH_NNCompilation_SetPriority(OH_NNCompilation *compilation, OH_NN_Priority priority)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置模型计算的优先级。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NN_ReturnCode OH_NNCompilation_EnableFloat16(OH_NNCompilation *compilation, bool enableFloat16)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否以float16的浮点数精度计算。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NN_ReturnCode OH_NNCompilation_Build(OH_NNCompilation *compilation)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "执行模型编译。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_NNCompilation_Destroy(OH_NNCompilation **compilation)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁编译实例。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "张量描述接口",
      children: "张量描述接口"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NN_TensorDesc *OH_NNTensorDesc_Create()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个张量描述实例，用于后续创建张量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NN_ReturnCode OH_NNTensorDesc_SetName(NN_TensorDesc *tensorDesc, const char *name)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置张量描述的名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NN_ReturnCode OH_NNTensorDesc_GetName(const NN_TensorDesc *tensorDesc, const char **name)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取张量描述的名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NN_ReturnCode OH_NNTensorDesc_SetDataType(NN_TensorDesc *tensorDesc, OH_NN_DataType dataType)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置张量描述的数据类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NN_ReturnCode OH_NNTensorDesc_GetDataType(const NN_TensorDesc *tensorDesc, OH_NN_DataType *dataType)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取张量描述的数据类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NN_ReturnCode OH_NNTensorDesc_SetShape(NN_TensorDesc *tensorDesc, const int32_t *shape, size_t shapeLength)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置张量描述的形状。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NN_ReturnCode OH_NNTensorDesc_GetShape(const NN_TensorDesc *tensorDesc, int32_t **shape, size_t *shapeLength)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取张量描述的形状。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NN_ReturnCode OH_NNTensorDesc_SetFormat(NN_TensorDesc *tensorDesc, OH_NN_Format format)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置张量描述的数据布局。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NN_ReturnCode OH_NNTensorDesc_GetFormat(const NN_TensorDesc *tensorDesc, OH_NN_Format *format)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取张量描述的数据布局。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NN_ReturnCode OH_NNTensorDesc_GetElementCount(const NN_TensorDesc *tensorDesc, size_t *elementCount)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取张量描述的元素个数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NN_ReturnCode OH_NNTensorDesc_GetByteSize(const NN_TensorDesc *tensorDesc, size_t *byteSize)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取基于张量描述的形状和数据类型计算的数据占用字节数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NN_ReturnCode OH_NNTensorDesc_Destroy(NN_TensorDesc **tensorDesc)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁张量描述实例。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "张量接口",
      children: "张量接口"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NN_Tensor* OH_NNTensor_Create(size_t deviceID, NN_TensorDesc *tensorDesc)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从张量描述创建张量实例，会申请设备共享内存。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NN_Tensor* OH_NNTensor_CreateWithSize(size_t deviceID, NN_TensorDesc *tensorDesc, size_t size)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按照指定内存大小和张量描述创建张量实例，会申请设备共享内存。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NN_Tensor* OH_NNTensor_CreateWithFd(size_t deviceID, NN_TensorDesc *tensorDesc, int fd, size_t size, size_t offset)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按照指定共享内存的文件描述符和张量描述创建张量实例，从而可以复用其他张量的设备共享内存。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NN_TensorDesc* OH_NNTensor_GetTensorDesc(const NN_Tensor *tensor)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取张量内部的张量描述实例指针，从而可读取张量的属性，例如数据类型、形状等。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* OH_NNTensor_GetDataBuffer(const NN_Tensor *tensor)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取张量数据的内存地址，可以读写张量数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NN_ReturnCode OH_NNTensor_GetFd(const NN_Tensor *tensor, int *fd)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取张量数据所在共享内存的文件描述符，文件描述符fd对应了一块设备共享内存。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NN_ReturnCode OH_NNTensor_GetSize(const NN_Tensor *tensor, size_t *size)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取张量数据所在共享内存的大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NN_ReturnCode OH_NNTensor_GetOffset(const NN_Tensor *tensor, size_t *offset)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取张量数据所在共享内存上的偏移量，张量数据可使用的大小为所在共享内存的大小减去偏移量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NN_ReturnCode OH_NNTensor_Destroy(NN_Tensor **tensor)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁张量实例。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "执行推理接口",
      children: "执行推理接口"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NNExecutor *OH_NNExecutor_Construct(OH_NNCompilation *compilation)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建OH_NNExecutor类型的执行器实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NN_ReturnCode OH_NNExecutor_GetOutputShape(OH_NNExecutor *executor, uint32_t outputIndex, int32_t **shape, uint32_t *shapeLength)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取输出张量的维度信息，用于输出张量具有动态形状的情况。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NN_ReturnCode OH_NNExecutor_GetInputCount(const OH_NNExecutor *executor, size_t *inputCount)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取输入张量的数量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NN_ReturnCode OH_NNExecutor_GetOutputCount(const OH_NNExecutor *executor, size_t *outputCount)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取输出张量的数量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NN_TensorDesc* OH_NNExecutor_CreateInputTensorDesc(const OH_NNExecutor *executor, size_t index)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "由指定索引值创建一个输入张量的描述，用于读取张量的属性或创建张量实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NN_TensorDesc* OH_NNExecutor_CreateOutputTensorDesc(const OH_NNExecutor *executor, size_t index)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "由指定索引值创建一个输出张量的描述，用于读取张量的属性或创建张量实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NN_ReturnCode OH_NNExecutor_GetInputDimRange(const OH_NNExecutor *executor, size_t index, size_t **minInputDims, size_t **maxInputDims, size_t *shapeLength)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取所有输入张量的维度范围。当输入张量具有动态形状时，不同设备可能支持不同的维度范围。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NN_ReturnCode OH_NNExecutor_SetOnRunDone(OH_NNExecutor *executor, NN_OnRunDone onRunDone)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置异步推理结束后的回调处理函数，回调函数定义详见接口文档。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NN_ReturnCode OH_NNExecutor_SetOnServiceDied(OH_NNExecutor *executor, NN_OnServiceDied onServiceDied)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置异步推理执行期间设备驱动服务突然死亡时的回调处理函数，回调函数定义详见接口文档。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NN_ReturnCode OH_NNExecutor_RunSync(OH_NNExecutor *executor, NN_Tensor *inputTensor[], size_t inputCount, NN_Tensor *outputTensor[], size_t outputCount)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "执行同步推理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NN_ReturnCode OH_NNExecutor_RunAsync(OH_NNExecutor *executor, NN_Tensor *inputTensor[], size_t inputCount, NN_Tensor *outputTensor[], size_t outputCount, int32_t timeout, void *userData)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "执行异步推理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_NNExecutor_Destroy(OH_NNExecutor **executor)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁执行器实例。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设备管理接口",
      children: "设备管理接口"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NN_ReturnCode OH_NNDevice_GetAllDevicesID(const size_t **allDevicesID, uint32_t *deviceCount)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取对接到Neural Network Runtime的所有硬件ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NN_ReturnCode OH_NNDevice_GetName(size_t deviceID, const char **name)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取指定硬件的名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NN_ReturnCode OH_NNDevice_GetType(size_t deviceID, OH_NN_DeviceType *deviceType)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取指定硬件的类别信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Neural Network Runtime的开发流程主要包含", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型构造"
        })
      }), "、", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型编译"
        })
      }), "和", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "推理执行"
        })
      }), "三个阶段。以下开发步骤以Add单算子模型为例，介绍调用Neural Network Runtime接口，开发应用的过程。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建应用样例文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "首先，创建Neural Network Runtime应用样例的源文件。在项目目录下执行以下命令，创建nnrt_example/目录，并在目录下创建 nnrt_example.cpp 源文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "mkdir ~/nnrt_example && cd ~/nnrt_example\ntouch nnrt_example.cpp\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入Neural Network Runtime。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在 nnrt_example.cpp 文件的开头添加以下代码，引入Neural Network Runtime。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <iostream>\n#include <cstdarg>\n#include \"neural_network_runtime/neural_network_runtime.h\"\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "定义日志打印、设置输入数据、数据打印等辅助函数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 返回值检查宏\n#define CHECKNEQ(realRet, expectRet, retValue, ...) \\\n    do { \\\n        if ((realRet) != (expectRet)) { \\\n            printf(__VA_ARGS__); \\\n            return (retValue); \\\n        } \\\n    } while (0)\n\n#define CHECKEQ(realRet, expectRet, retValue, ...) \\\n    do { \\\n        if ((realRet) == (expectRet)) { \\\n            printf(__VA_ARGS__); \\\n            return (retValue); \\\n        } \\\n    } while (0)\n\n// 设置输入数据用于推理\nOH_NN_ReturnCode SetInputData(NN_Tensor* inputTensor[], size_t inputSize)\n{\n    OH_NN_DataType dataType(OH_NN_FLOAT32);\n    OH_NN_ReturnCode ret{OH_NN_FAILED};\n    size_t elementCount = 0;\n    for (size_t i = 0; i < inputSize; ++i) {\n        // 获取张量的数据内存\n        auto data = OH_NNTensor_GetDataBuffer(inputTensor[i]);\n        CHECKEQ(data, nullptr, OH_NN_FAILED, \"Failed to get data buffer.\");\n        // 获取张量的描述\n        auto desc = OH_NNTensor_GetTensorDesc(inputTensor[i]);\n        CHECKEQ(desc, nullptr, OH_NN_FAILED, \"Failed to get desc.\");\n        // 获取张量的数据类型\n        ret = OH_NNTensorDesc_GetDataType(desc, &dataType);\n        CHECKNEQ(ret, OH_NN_SUCCESS, OH_NN_FAILED, \"Failed to get data type.\");\n        // 获取张量的元素个数\n        ret = OH_NNTensorDesc_GetElementCount(desc, &elementCount);\n        CHECKNEQ(ret, OH_NN_SUCCESS, OH_NN_FAILED, \"Failed to get element count.\");\n        switch(dataType) {\n            case OH_NN_FLOAT32: {\n                float* floatValue = reinterpret_cast<float*>(data);\n                for (size_t j = 0; j < elementCount; ++j) {\n                    floatValue[j] = static_cast<float>(j);\n                }\n                break;\n            }\n            case OH_NN_INT32: {\n                int* intValue = reinterpret_cast<int*>(data);\n                for (size_t j = 0; j < elementCount; ++j) {\n                    intValue[j] = static_cast<int>(j);\n                }\n                break;\n            }\n            default:\n                return OH_NN_FAILED;\n        }\n    }\n    return OH_NN_SUCCESS;\n}\n\nOH_NN_ReturnCode Print(NN_Tensor* outputTensor[], size_t outputSize)\n{\n    OH_NN_DataType dataType(OH_NN_FLOAT32);\n    OH_NN_ReturnCode ret{OH_NN_FAILED};\n    size_t elementCount = 0;\n    for (size_t i = 0; i < outputSize; ++i) {\n        auto data = OH_NNTensor_GetDataBuffer(outputTensor[i]);\n        CHECKEQ(data, nullptr, OH_NN_FAILED, \"Failed to get data buffer.\");\n        auto desc = OH_NNTensor_GetTensorDesc(outputTensor[i]);\n        CHECKEQ(desc, nullptr, OH_NN_FAILED, \"Failed to get desc.\");\n        ret = OH_NNTensorDesc_GetDataType(desc, &dataType);\n        CHECKNEQ(ret, OH_NN_SUCCESS, OH_NN_FAILED, \"Failed to get data type.\");\n        ret = OH_NNTensorDesc_GetElementCount(desc, &elementCount);\n        CHECKNEQ(ret, OH_NN_SUCCESS, OH_NN_FAILED, \"Failed to get element count.\");\n        switch(dataType) {\n            case OH_NN_FLOAT32: {\n                float* floatValue = reinterpret_cast<float*>(data);\n                for (size_t j = 0; j < elementCount; ++j) {\n                    std::cout << \"Output index: \" << j << \", value is: \" << floatValue[j] << \".\" << std::endl;\n                }\n                break;\n            }\n            case OH_NN_INT32: {\n                int* intValue = reinterpret_cast<int*>(data);\n                for (size_t j = 0; j < elementCount; ++j) {\n                    std::cout << \"Output index: \" << j << \", value is: \" << intValue[j] << \".\" << std::endl;\n                }\n                break;\n            }\n            default:\n                return OH_NN_FAILED;\n        }\n    }\n\n    return OH_NN_SUCCESS;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "构造模型。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用Neural Network Runtime的模型构造接口，构造Add单算子样例模型。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_NN_ReturnCode BuildModel(OH_NNModel** pmodel)\n{\n    // 创建模型实例model，进行模型构造\n    OH_NNModel* model = OH_NNModel_Construct();\n    CHECKEQ(model, nullptr, OH_NN_FAILED, \"Create model failed.\");\n\n    // 添加Add算子的第一个输入张量，类型为float32，张量形状为[1, 2, 2, 3]\n    NN_TensorDesc* tensorDesc = OH_NNTensorDesc_Create();\n    CHECKEQ(tensorDesc, nullptr, OH_NN_FAILED, \"Create TensorDesc failed.\");\n\n    int32_t inputDims[4] = {1, 2, 2, 3};\n    auto returnCode = OH_NNTensorDesc_SetShape(tensorDesc, inputDims, 4);\n    CHECKNEQ(returnCode, OH_NN_SUCCESS, OH_NN_FAILED, \"Set TensorDesc shape failed.\");\n\n    returnCode = OH_NNTensorDesc_SetDataType(tensorDesc, OH_NN_FLOAT32);\n    CHECKNEQ(returnCode, OH_NN_SUCCESS, OH_NN_FAILED, \"Set TensorDesc data type failed.\");\n\n    returnCode = OH_NNTensorDesc_SetFormat(tensorDesc, OH_NN_FORMAT_NONE);\n    CHECKNEQ(returnCode, OH_NN_SUCCESS, OH_NN_FAILED, \"Set TensorDesc format failed.\");\n\n    returnCode = OH_NNModel_AddTensorToModel(model, tensorDesc);\n    CHECKNEQ(returnCode, OH_NN_SUCCESS, OH_NN_FAILED, \"Add first TensorDesc to model failed.\");\n\n    returnCode = OH_NNModel_SetTensorType(model, 0, OH_NN_TENSOR);\n    CHECKNEQ(returnCode, OH_NN_SUCCESS, OH_NN_FAILED, \"Set model tensor type failed.\");\n\n    // 添加Add算子的第二个输入张量，类型为float32，张量形状为[1, 2, 2, 3]\n    tensorDesc = OH_NNTensorDesc_Create();\n    CHECKEQ(tensorDesc, nullptr, OH_NN_FAILED, \"Create TensorDesc failed.\");\n\n    returnCode = OH_NNTensorDesc_SetShape(tensorDesc, inputDims, 4);\n    CHECKNEQ(returnCode, OH_NN_SUCCESS, OH_NN_FAILED, \"Set TensorDesc shape failed.\");\n\n    returnCode = OH_NNTensorDesc_SetDataType(tensorDesc, OH_NN_FLOAT32);\n    CHECKNEQ(returnCode, OH_NN_SUCCESS, OH_NN_FAILED, \"Set TensorDesc data type failed.\");\n\n    returnCode = OH_NNTensorDesc_SetFormat(tensorDesc, OH_NN_FORMAT_NONE);\n    CHECKNEQ(returnCode, OH_NN_SUCCESS, OH_NN_FAILED, \"Set TensorDesc format failed.\");\n\n    returnCode = OH_NNModel_AddTensorToModel(model, tensorDesc);\n    CHECKNEQ(returnCode, OH_NN_SUCCESS, OH_NN_FAILED, \"Add second TensorDesc to model failed.\");\n\n    returnCode = OH_NNModel_SetTensorType(model, 1, OH_NN_TENSOR);\n    CHECKNEQ(returnCode, OH_NN_SUCCESS, OH_NN_FAILED, \"Set model tensor type failed.\");\n\n    // 添加Add算子的参数张量，该参数张量用于指定激活函数的类型，张量的数据类型为int8。\n    tensorDesc = OH_NNTensorDesc_Create();\n    CHECKEQ(tensorDesc, nullptr, OH_NN_FAILED, \"Create TensorDesc failed.\");\n\n    int32_t activationDims = 1;\n    returnCode = OH_NNTensorDesc_SetShape(tensorDesc, &activationDims, 1);\n    CHECKNEQ(returnCode, OH_NN_SUCCESS, OH_NN_FAILED, \"Set TensorDesc shape failed.\");\n\n    returnCode = OH_NNTensorDesc_SetDataType(tensorDesc, OH_NN_INT8);\n    CHECKNEQ(returnCode, OH_NN_SUCCESS, OH_NN_FAILED, \"Set TensorDesc data type failed.\");\n\n    returnCode = OH_NNTensorDesc_SetFormat(tensorDesc, OH_NN_FORMAT_NONE);\n    CHECKNEQ(returnCode, OH_NN_SUCCESS, OH_NN_FAILED, \"Set TensorDesc format failed.\");\n\n    returnCode = OH_NNModel_AddTensorToModel(model, tensorDesc);\n    CHECKNEQ(returnCode, OH_NN_SUCCESS, OH_NN_FAILED, \"Add second TensorDesc to model failed.\");\n\n    returnCode = OH_NNModel_SetTensorType(model, 2, OH_NN_ADD_ACTIVATIONTYPE);\n    CHECKNEQ(returnCode, OH_NN_SUCCESS, OH_NN_FAILED, \"Set model tensor type failed.\");\n\n    // 将激活函数类型设置为OH_NN_FUSED_NONE，表示该算子不添加激活函数。\n    int8_t activationValue = OH_NN_FUSED_NONE;\n    returnCode = OH_NNModel_SetTensorData(model, 2, &activationValue, sizeof(int8_t));\n    CHECKNEQ(returnCode, OH_NN_SUCCESS, OH_NN_FAILED, \"Set model tensor data failed.\");\n\n    // 设置Add算子的输出张量，类型为float32，张量形状为[1, 2, 2, 3]\n    tensorDesc = OH_NNTensorDesc_Create();\n    CHECKEQ(tensorDesc, nullptr, OH_NN_FAILED, \"Create TensorDesc failed.\");\n\n    returnCode = OH_NNTensorDesc_SetShape(tensorDesc, inputDims, 4);\n    CHECKNEQ(returnCode, OH_NN_SUCCESS, OH_NN_FAILED, \"Set TensorDesc shape failed.\");\n\n    returnCode = OH_NNTensorDesc_SetDataType(tensorDesc, OH_NN_FLOAT32);\n    CHECKNEQ(returnCode, OH_NN_SUCCESS, OH_NN_FAILED, \"Set TensorDesc data type failed.\");\n\n    returnCode = OH_NNTensorDesc_SetFormat(tensorDesc, OH_NN_FORMAT_NONE);\n    CHECKNEQ(returnCode, OH_NN_SUCCESS, OH_NN_FAILED, \"Set TensorDesc format failed.\");\n\n    returnCode = OH_NNModel_AddTensorToModel(model, tensorDesc);\n    CHECKNEQ(returnCode, OH_NN_SUCCESS, OH_NN_FAILED, \"Add forth TensorDesc to model failed.\");\n\n    returnCode = OH_NNModel_SetTensorType(model, 3, OH_NN_TENSOR);\n    CHECKNEQ(returnCode, OH_NN_SUCCESS, OH_NN_FAILED, \"Set model tensor type failed.\");\n\n    // 指定Add算子的输入张量、参数张量和输出张量的索引\n    uint32_t inputIndicesValues[2] = {0, 1};\n    uint32_t paramIndicesValues = 2;\n    uint32_t outputIndicesValues = 3;\n    OH_NN_UInt32Array paramIndices = {&paramIndicesValues, 1};\n    OH_NN_UInt32Array inputIndices = {inputIndicesValues, 2};\n    OH_NN_UInt32Array outputIndices = {&outputIndicesValues, 1};\n\n    // 向模型实例添加Add算子\n    returnCode = OH_NNModel_AddOperation(model, OH_NN_OPS_ADD, &paramIndices, &inputIndices, &outputIndices);\n    CHECKNEQ(returnCode, OH_NN_SUCCESS, OH_NN_FAILED, \"Add operation to model failed.\");\n\n    // 设置模型实例的输入张量、输出张量的索引\n    returnCode = OH_NNModel_SpecifyInputsAndOutputs(model, &inputIndices, &outputIndices);\n    CHECKNEQ(returnCode, OH_NN_SUCCESS, OH_NN_FAILED, \"Specify model inputs and outputs failed.\");\n\n    // 完成模型实例的构建\n    returnCode = OH_NNModel_Finish(model);\n    CHECKNEQ(returnCode, OH_NN_SUCCESS, OH_NN_FAILED, \"Build model failed.\");\n\n    // 返回模型实例\n    *pmodel = model;\n    return OH_NN_SUCCESS;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "查询Neural Network Runtime已经对接的AI加速芯片。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Neural Network Runtime支持通过HDI接口，对接多种AI加速芯片。在执行模型编译前，需要查询当前设备下，Neural Network Runtime已经对接的AI加速芯片。每个AI加速芯片对应唯一的ID值，在编译阶段需要通过设备ID，指定模型编译的芯片。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "void GetAvailableDevices(std::vector<size_t>& availableDevice)\n{\n    availableDevice.clear();\n\n    // 获取可用的硬件ID\n    const size_t* devices = nullptr;\n    uint32_t deviceCount = 0;\n    OH_NN_ReturnCode ret = OH_NNDevice_GetAllDevicesID(&devices, &deviceCount);\n    if (ret != OH_NN_SUCCESS) {\n        std::cout << \"GetAllDevicesID failed, get no available device.\" << std::endl;\n        return;\n    }\n\n    for (uint32_t i = 0; i < deviceCount; i++) {\n        availableDevice.emplace_back(devices[i]);\n    }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在指定的设备上编译模型。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Neural Network Runtime使用抽象的模型表达描述AI模型的拓扑结构。在AI加速芯片上执行前，需要通过Neural Network Runtime提供的编译模块来创建编译实例，并由编译实例将抽象的模型表达下发至芯片驱动层，转换成可以直接推理计算的格式，即模型编译。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_NN_ReturnCode CreateCompilation(OH_NNModel* model, const std::vector<size_t>& availableDevice,\n                                   OH_NNCompilation** pCompilation)\n{\n    // 创建编译实例compilation，将构图的模型实例或MSLite传下来的模型实例传入\n    OH_NNCompilation* compilation = OH_NNCompilation_Construct(model);\n    CHECKEQ(compilation, nullptr, OH_NN_FAILED, \"OH_NNCore_ConstructCompilationWithNNModel failed.\");\n\n    // 设置编译的硬件、缓存路径、性能模式、计算优先级、是否开启float16低精度计算等选项\n    // 选择在第一个设备上编译模型\n    auto returnCode = OH_NNCompilation_SetDevice(compilation, availableDevice[0]);\n    CHECKNEQ(returnCode, OH_NN_SUCCESS, OH_NN_FAILED, \"OH_NNCompilation_SetDevice failed.\");\n\n    // 将模型编译结果缓存在/data/local/tmp目录下，版本号指定为1\n    returnCode = OH_NNCompilation_SetCache(compilation, \"/data/local/tmp\", 1);\n    CHECKNEQ(returnCode, OH_NN_SUCCESS, OH_NN_FAILED, \"OH_NNCompilation_SetCache failed.\");\n\n    // 设置硬件性能模式\n    returnCode = OH_NNCompilation_SetPerformanceMode(compilation, OH_NN_PERFORMANCE_EXTREME);\n    CHECKNEQ(returnCode, OH_NN_SUCCESS, OH_NN_FAILED, \"OH_NNCompilation_SetPerformanceMode failed.\");\n\n    // 设置推理执行优先级\n    returnCode = OH_NNCompilation_SetPriority(compilation, OH_NN_PRIORITY_HIGH);\n    CHECKNEQ(returnCode, OH_NN_SUCCESS, OH_NN_FAILED, \"OH_NNCompilation_SetPriority failed.\");\n\n    // 是否开启FP16计算模式\n    returnCode = OH_NNCompilation_EnableFloat16(compilation, false);\n    CHECKNEQ(returnCode, OH_NN_SUCCESS, OH_NN_FAILED, \"OH_NNCompilation_EnableFloat16 failed.\");\n\n    // 执行模型编译\n    returnCode = OH_NNCompilation_Build(compilation);\n    CHECKNEQ(returnCode, OH_NN_SUCCESS, OH_NN_FAILED, \"OH_NNCompilation_Build failed.\");\n\n    *pCompilation = compilation;\n    return OH_NN_SUCCESS;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建执行器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "完成模型编译后，需要调用Neural Network Runtime的执行模块，通过编译实例创建执行器。模型推理阶段中的设置模型输入、触发推理计算以及获取模型输出等操作均需要围绕执行器完成。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_NNExecutor* CreateExecutor(OH_NNCompilation* compilation)\n{\n    // 通过编译实例compilation创建执行器executor\n    OH_NNExecutor *executor = OH_NNExecutor_Construct(compilation);\n    CHECKEQ(executor, nullptr, nullptr, \"OH_NNExecutor_Construct failed.\");\n    return executor;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "执行推理计算，并打印推理结果。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过执行模块提供的接口，将推理计算所需要的输入数据传递给执行器，触发执行器完成一次推理计算，获取模型的推理结果并打印。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_NN_ReturnCode Run(OH_NNExecutor* executor, const std::vector<size_t>& availableDevice)\n{\n    // 从executor获取输入输出信息\n    // 获取输入张量的个数\n    size_t inputCount = 0;\n    auto returnCode = OH_NNExecutor_GetInputCount(executor, &inputCount);\n    CHECKNEQ(returnCode, OH_NN_SUCCESS, OH_NN_FAILED, \"OH_NNExecutor_GetInputCount failed.\");\n    std::vector<NN_TensorDesc*> inputTensorDescs;\n    NN_TensorDesc* tensorDescTmp = nullptr;\n    for (size_t i = 0; i < inputCount; ++i) {\n        // 创建输入张量的描述\n        tensorDescTmp = OH_NNExecutor_CreateInputTensorDesc(executor, i);\n        CHECKEQ(tensorDescTmp, nullptr, OH_NN_FAILED, \"OH_NNExecutor_CreateInputTensorDesc failed.\");\n        inputTensorDescs.emplace_back(tensorDescTmp);\n    }\n    // 获取输出张量的个数\n    size_t outputCount = 0;\n    returnCode = OH_NNExecutor_GetOutputCount(executor, &outputCount);\n    CHECKNEQ(returnCode, OH_NN_SUCCESS, OH_NN_FAILED, \"OH_NNExecutor_GetOutputCount failed.\");\n    std::vector<NN_TensorDesc*> outputTensorDescs;\n    for (size_t i = 0; i < outputCount; ++i) {\n        // 创建输出张量的描述\n        tensorDescTmp = OH_NNExecutor_CreateOutputTensorDesc(executor, i);\n        CHECKEQ(tensorDescTmp, nullptr, OH_NN_FAILED, \"OH_NNExecutor_CreateOutputTensorDesc failed.\");\n        outputTensorDescs.emplace_back(tensorDescTmp);\n    }\n\n    // 创建输入和输出张量\n    NN_Tensor* inputTensors[inputCount];\n    NN_Tensor* tensor = nullptr;\n    for (size_t i = 0; i < inputCount; ++i) {\n        tensor = nullptr;\n        tensor = OH_NNTensor_Create(availableDevice[0], inputTensorDescs[i]);\n        CHECKEQ(tensor, nullptr, OH_NN_FAILED, \"OH_NNTensor_Create failed.\");\n        inputTensors[i] = tensor;\n    }\n    NN_Tensor* outputTensors[outputCount];\n    for (size_t i = 0; i < outputCount; ++i) {\n        tensor = nullptr;\n        tensor = OH_NNTensor_Create(availableDevice[0], outputTensorDescs[i]);\n        CHECKEQ(tensor, nullptr, OH_NN_FAILED, \"OH_NNTensor_Create failed.\");\n        outputTensors[i] = tensor;\n    }\n\n    // 设置输入张量的数据\n    returnCode = SetInputData(inputTensors, inputCount);\n    CHECKNEQ(returnCode, OH_NN_SUCCESS, OH_NN_FAILED, \"SetInputData failed.\");\n\n    // 执行推理\n    returnCode = OH_NNExecutor_RunSync(executor, inputTensors, inputCount, outputTensors, outputCount);\n    CHECKNEQ(returnCode, OH_NN_SUCCESS, OH_NN_FAILED, \"OH_NNExecutor_RunSync failed.\");\n\n    // 打印输出张量的数据\n    Print(outputTensors, outputCount);\n\n    // 清理输入和输出张量以及张量描述\n    for (size_t i = 0; i < inputCount; ++i) {\n        returnCode = OH_NNTensor_Destroy(&inputTensors[i]);\n        CHECKNEQ(returnCode, OH_NN_SUCCESS, OH_NN_FAILED, \"OH_NNTensor_Destroy failed.\");\n        returnCode = OH_NNTensorDesc_Destroy(&inputTensorDescs[i]);\n        CHECKNEQ(returnCode, OH_NN_SUCCESS, OH_NN_FAILED, \"OH_NNTensorDesc_Destroy failed.\");\n    }\n    for (size_t i = 0; i < outputCount; ++i) {\n        returnCode = OH_NNTensor_Destroy(&outputTensors[i]);\n        CHECKNEQ(returnCode, OH_NN_SUCCESS, OH_NN_FAILED, \"OH_NNTensor_Destroy failed.\");\n        returnCode = OH_NNTensorDesc_Destroy(&outputTensorDescs[i]);\n        CHECKNEQ(returnCode, OH_NN_SUCCESS, OH_NN_FAILED, \"OH_NNTensorDesc_Destroy failed.\");\n    }\n\n    return OH_NN_SUCCESS;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "构建端到端模型构造-编译-执行流程。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "步骤4-步骤8实现了模型的模型构造、编译和执行流程，并封装成多个函数，便于模块化开发。以下示例代码将串联这些函数， 形成一个完整的Neural Network Runtime使用流程。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "int main(int argc, char** argv)\n{\n    OH_NNModel* model = nullptr;\n    OH_NNCompilation* compilation = nullptr;\n    OH_NNExecutor* executor = nullptr;\n    std::vector<size_t> availableDevices;\n\n    // 模型构造\n    OH_NN_ReturnCode ret = BuildModel(&model);\n    if (ret != OH_NN_SUCCESS) {\n        std::cout << \"BuildModel failed.\" << std::endl;\n        OH_NNModel_Destroy(&model);\n        return -1;\n    }\n\n    // 获取可执行的设备\n    GetAvailableDevices(availableDevices);\n    if (availableDevices.empty()) {\n        std::cout << \"No available device.\" << std::endl;\n        OH_NNModel_Destroy(&model);\n        return -1;\n    }\n\n    // 模型编译\n    ret = CreateCompilation(model, availableDevices, &compilation);\n    if (ret != OH_NN_SUCCESS) {\n        std::cout << \"CreateCompilation failed.\" << std::endl;\n        OH_NNModel_Destroy(&model);\n        OH_NNCompilation_Destroy(&compilation);\n        return -1;\n    }\n\n    // 销毁模型实例\n    OH_NNModel_Destroy(&model);\n\n    // 创建模型的推理执行器\n    executor = CreateExecutor(compilation);\n    if (executor == nullptr) {\n        std::cout << \"CreateExecutor failed, no executor is created.\" << std::endl;\n        OH_NNCompilation_Destroy(&compilation);\n        return -1;\n    }\n\n    // 销毁编译实例\n    OH_NNCompilation_Destroy(&compilation);\n\n    // 使用上一步创建的执行器，执行推理计算\n    ret = Run(executor, availableDevices);\n    if (ret != OH_NN_SUCCESS) {\n        std::cout << \"Run failed.\" << std::endl;\n        OH_NNExecutor_Destroy(&executor);\n        return -1;\n    }\n\n    // 销毁执行器实例\n    OH_NNExecutor_Destroy(&executor);\n\n    return 0;\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "调测验证",
      children: "调测验证"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "准备应用样例的编译配置文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "新建一个 CMakeLists.txt 文件，为开发步骤中的应用样例文件 nnrt_example.cpp 添加编译配置。以下提供简单的 CMakeLists.txt 示例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "cmake_minimum_required(VERSION 3.16)\nproject(nnrt_example C CXX)\n\nadd_executable(nnrt_example\n    ./nnrt_example.cpp\n)\n\ntarget_link_libraries(nnrt_example\n    neural_network_runtime\n    neural_network_core\n)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编译应用样例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "执行以下命令，在当前目录下新建build/目录，在build/目录下编译 nnrt_example.cpp，得到二进制文件 nnrt_example。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "mkdir build && cd build\ncmake -DCMAKE_TOOLCHAIN_FILE={交叉编译工具链的路径}/build/cmake/ohos.toolchain.cmake -DOHOS_ARCH=arm64-v8a -DOHOS_PLATFORM=OHOS -DOHOS_STL=c++_static ..\nmake\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "执行以下代码，将样例推送到设备上执行。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "# 将编译得到的 `nnrt_example` 推送到设备上，执行样例。\nhdc_std file send ./nnrt_example /data/local/tmp/.\n\n# 给测试用例可执行文件加上权限。\nhdc_std shell \"chmod +x /data/local/tmp/nnrt_example\"\n\n# 执行测试用例\nhdc_std shell \"/data/local/tmp/nnrt_example\"\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果样例执行正常，应该得到以下输出。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Output index: 0, value is: 0.000000.\nOutput index: 1, value is: 2.000000.\nOutput index: 2, value is: 4.000000.\nOutput index: 3, value is: 6.000000.\nOutput index: 4, value is: 8.000000.\nOutput index: 5, value is: 10.000000.\nOutput index: 6, value is: 12.000000.\nOutput index: 7, value is: 14.000000.\nOutput index: 8, value is: 16.000000.\nOutput index: 9, value is: 18.000000.\nOutput index: 10, value is: 20.000000.\nOutput index: 11, value is: 22.000000.\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "检查模型缓存（可选）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果在调测环境下，Neural Network Runtime对接的HDI服务支持模型缓存功能，执行完 nnrt_example, 可以在 /data/local/tmp 目录下找到生成的缓存文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(730717)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "模型的IR需要传递到硬件驱动层，由HDI服务将统一的IR图，编译成硬件专用的计算图，编译的过程非常耗时。Neural Network Runtime支持计算图缓存的特性，可以将HDI服务编译生成的计算图，缓存到设备存储中。当下一次在同一个加速芯片上编译同一个模型时，通过指定缓存的路径，Neural Network Runtime可以直接加载缓存文件中的计算图，减少编译消耗的时间。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "检查缓存目录下的缓存文件："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ls /data/local/tmp\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "以下为打印结果："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "# 0.nncache 1.nncache 2.nncache cache_info.nncache\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果缓存不再使用，需要手动删除缓存，可以参考以下命令，删除缓存文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "rm /data/local/tmp/*nncache\n"
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
819923(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479351-3525985271fc5a40eecddd1e102375f9.png");

},
730717(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

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