"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["178813"], {
972684(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_mindspore_lite_kit_deployment_mindspore_lite_guidelines_mindspore_lite_guidelines_md_ae7_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-mindspore-lite-kit-deployment-mindspore-lite-guidelines-mindspore-lite-guidelines-md-ae7.json
var site_docs_mindspore_lite_kit_deployment_mindspore_lite_guidelines_mindspore_lite_guidelines_md_ae7_namespaceObject = JSON.parse('{"id":"mindspore-lite-kit/deployment/mindspore-lite-guidelines/mindspore-lite-guidelines","title":"使用MindSpore Lite进行模型推理 (C/C++)","description":"场景介绍","source":"@site/docs/mindspore-lite-kit/deployment/mindspore-lite-guidelines/mindspore-lite-guidelines.md","sourceDirName":"mindspore-lite-kit/deployment/mindspore-lite-guidelines","slug":"/mindspore-lite-kit/deployment/mindspore-lite-guidelines/","permalink":"/harmonyos-docs-site/mindspore-lite-kit/deployment/mindspore-lite-guidelines/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"使用MindSpore Lite进行模型推理 (C/C++)","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/mindspore-lite-guidelines","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用MindSpore Lite进行模型转换","permalink":"/harmonyos-docs-site/mindspore-lite-kit/mindspore-lite-converter-guidelines/"},"next":{"title":"使用MindSpore Lite进行端侧训练 (C/C++)","permalink":"/harmonyos-docs-site/mindspore-lite-kit/deployment/mindspore-lite-train-guidelines/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/mindspore-lite-kit/deployment/mindspore-lite-guidelines/mindspore-lite-guidelines.md


const frontMatter = {
	title: '使用MindSpore Lite进行模型推理 (C/C++)',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/mindspore-lite-guidelines',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '使用MindSpore Lite进行模型推理 (C/C++)';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "基本概念",
  "id": "基本概念",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "Context 相关接口",
  "id": "context-相关接口",
  "level": 3
}, {
  "value": "Model 相关接口",
  "id": "model-相关接口",
  "level": 3
}, {
  "value": "Tensor 相关接口",
  "id": "tensor-相关接口",
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
        id: "使用mindspore-lite进行模型推理-cc",
        children: "使用MindSpore Lite进行模型推理 (C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MindSpore Lite是一款AI引擎，它提供了面向不同硬件设备AI模型推理的功能，目前已经在图像分类、目标识别、人脸识别、文字识别等应用中广泛使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文介绍使用MindSpore Lite推理引擎进行模型推理的通用开发流程。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在进行开发前，请先了解以下概念。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "张量"
        })
      }), "：它与数组和矩阵非常相似，是MindSpore Lite网络运算中的基本数据结构。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Float16推理模式"
        })
      }), "： Float16又称半精度，它使用16比特表示一个数。Float16推理模式表示推理的时候用半精度进行推理。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["这里给出MindSpore Lite推理的通用开发流程中涉及的一些接口，具体请见下列表格。更多接口及详细内容，请见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-module/capi-mindspore/capi-mindspore",
        children: "MindSpore"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "context-相关接口",
      children: "Context 相关接口"
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
            children: "OH_AI_ContextHandle OH_AI_ContextCreate()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个上下文的对象。注意：此接口需跟OH_AI_ContextDestroy配套使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_AI_ContextSetThreadNum(OH_AI_ContextHandle context, int32_t thread_num)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置运行时的线程数量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_AI_ContextSetThreadAffinityMode(OH_AI_ContextHandle context, int mode)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置运行时线程绑定CPU核心的策略，按照CPU物理核频率分为大、中、小三种类型的核心，并且仅需绑大核或者绑中核，不需要绑小核。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_DeviceInfoHandle OH_AI_DeviceInfoCreate(OH_AI_DeviceType device_type)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个运行时设备信息对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_AI_ContextDestroy(OH_AI_ContextHandle *context)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放上下文对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_AI_DeviceInfoSetEnableFP16(OH_AI_DeviceInfoHandle device_info, bool is_fp16)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置是否开启Float16推理模式，仅CPU/GPU设备可用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_AI_ContextAddDeviceInfo(OH_AI_ContextHandle context, OH_AI_DeviceInfoHandle device_info)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "添加运行时设备信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "model-相关接口",
      children: "Model 相关接口"
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
            children: "OH_AI_ModelHandle OH_AI_ModelCreate()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个模型对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_Status OH_AI_ModelBuildFromFile(OH_AI_ModelHandle model, const char *model_path,OH_AI_ModelType model_type, const OH_AI_ContextHandle model_context)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过模型文件加载并编译MindSpore Lite模型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_AI_ModelDestroy(OH_AI_ModelHandle *model)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放一个模型对象。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tensor-相关接口",
      children: "Tensor 相关接口"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "OH_AI_TensorHandleArray OH_AI_ModelGetInputs(const OH_AI_ModelHandle model)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取模型的输入张量数组结构体。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int64_t OH_AI_TensorGetElementNum(const OH_AI_TensorHandle tensor)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取张量元素数量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char *OH_AI_TensorGetName(const OH_AI_TensorHandle tensor)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取张量的名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_DataType OH_AI_TensorGetDataType(const OH_AI_TensorHandle tensor)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取张量数据类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void *OH_AI_TensorGetMutableData(const OH_AI_TensorHandle tensor)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取可变的张量数据指针。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用MindSpore Lite进行模型推理的开发流程如下图所示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图 1"
        })
      }), " 使用MindSpore Lite进行模型推理的开发流程"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(27491)/* ["default"] */.A) + "",
        width: "1306",
        height: "538"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "进入主要流程之前需要先引用相关的头文件，并编写函数生成随机的输入，具体如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <stdlib.h>\n#include <stdio.h>\n#include <unistd.h>\n#include \"mindspore/model.h\"\n\n//生成随机的输入\nint GenerateInputDataWithRandom(OH_AI_TensorHandleArray inputs) {\n  for (size_t i = 0; i < inputs.handle_num; ++i) {\n    float *input_data = (float *)OH_AI_TensorGetMutableData(inputs.handle_list[i]);\n    if (input_data == NULL) {\n      printf(\"MSTensorGetMutableData failed.\\n\");\n      return OH_AI_STATUS_LITE_ERROR;\n    }\n    int64_t num = OH_AI_TensorGetElementNum(inputs.handle_list[i]);\n    const int divisor = 10;\n    for (size_t j = 0; j < num; j++) {\n      input_data[j] = (float)(rand() % divisor) / divisor;  // 0--0.9f\n    }\n  }\n  return OH_AI_STATUS_SUCCESS;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "然后进入主要的开发步骤，具体包括模型的准备、读取、编译、推理和释放，具体开发过程及细节请见下文的开发步骤及示例。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "模型准备。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "需要的模型可以直接下载，也可以通过模型转换工具获得。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "下载模型的格式若为.ms，则可以直接使用。本文以mobilenetv2.ms为例。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["如果是第三方框架的模型，比如 TensorFlow、TensorFlow Lite、Caffe、ONNX等，可以使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://www.mindspore.cn/lite/docs/zh-CN/master/use/downloads.html#2-3-0",
              children: "模型转换工具"
            }), "转换为.ms格式的模型文件。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建上下文，设置线程数、设备类型等参数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "以下介绍两种典型情形。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "情形1：仅创建CPU推理上下文。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 创建并配置上下文，设置运行时的线程数量为2，绑核策略为大核优先\nOH_AI_ContextHandle context = OH_AI_ContextCreate();\nif (context == NULL) {\n  printf(\"OH_AI_ContextCreate failed.\\n\");\n  return OH_AI_STATUS_LITE_ERROR;\n}\nconst int thread_num = 2;\nOH_AI_ContextSetThreadNum(context, thread_num);\nOH_AI_ContextSetThreadAffinityMode(context, 1);\n//设置运行设备为CPU，不使用Float16推理\nOH_AI_DeviceInfoHandle cpu_device_info = OH_AI_DeviceInfoCreate(OH_AI_DEVICETYPE_CPU);\nif (cpu_device_info == NULL) {\n  printf(\"OH_AI_DeviceInfoCreate failed.\\n\");\n  OH_AI_ContextDestroy(&context);\n  return OH_AI_STATUS_LITE_ERROR;\n}\nOH_AI_DeviceInfoSetEnableFP16(cpu_device_info, false);\nOH_AI_ContextAddDeviceInfo(context, cpu_device_info);\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "情形2：创建NNRT（Neural Network Runtime）和CPU异构推理上下文。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "NNRT是面向AI领域的跨芯片推理计算运行时，一般来说，NNRT对接的加速硬件如NPU，推理能力较强，但支持的算子规格少；而通用CPU推理能力较弱，但支持算子规格更全面。MindSpore Lite支持配置NNRT硬件和CPU异构推理：优先将模型算子调度到NNRT推理，若某些算子NNRT不支持，将其调度到CPU进行推理。通过下面的操作即可配置NNRT/CPU异构推理。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 创建并配置上下文，设置运行时的线程数量为2，绑核策略为大核优先\nOH_AI_ContextHandle context = OH_AI_ContextCreate();\nif (context == NULL) {\n  printf(\"OH_AI_ContextCreate failed.\\n\");\n  return OH_AI_STATUS_LITE_ERROR;\n}\n// 优先使用NNRT推理。\n// 这里利用查找到的第一个ACCELERATORS类别的NNRT硬件，来创建nnrt设备信息，并设置硬件使用高性能模式推理。还可以通过如：OH_AI_GetAllNNRTDeviceDescs()接口获取当前环境中所有NNRT硬件的描述信息，按设备名、类型等信息查找，找到某一具体设备作为NNRT推理硬件。\nOH_AI_DeviceInfoHandle nnrt_device_info = OH_AI_CreateNNRTDeviceInfoByType(OH_AI_NNRTDEVICE_ACCELERATOR);\nif (nnrt_device_info == NULL) {\n  printf(\"OH_AI_DeviceInfoCreate failed.\\n\");\n  OH_AI_ContextDestroy(&context);\n  return OH_AI_STATUS_LITE_ERROR;\n}\nOH_AI_DeviceInfoSetPerformanceMode(nnrt_device_info, OH_AI_PERFORMANCE_HIGH);\nOH_AI_ContextAddDeviceInfo(context, nnrt_device_info);\n\n// 其次设置CPU推理。\nOH_AI_DeviceInfoHandle cpu_device_info = OH_AI_DeviceInfoCreate(OH_AI_DEVICETYPE_CPU);\nif (cpu_device_info == NULL) {\n  printf(\"OH_AI_DeviceInfoCreate failed.\\n\");\n  OH_AI_ContextDestroy(&context);\n  return OH_AI_STATUS_LITE_ERROR;\n}\nOH_AI_ContextAddDeviceInfo(context, cpu_device_info);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建、加载与编译模型。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_AI_ModelBuildFromFile加载并编译模型。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "本例中传入OH_AI_ModelBuildFromFile的argv[1]参数是从控制台中输入的模型文件路径。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 创建模型\nOH_AI_ModelHandle model = OH_AI_ModelCreate();\nif (model == NULL) {\n  printf(\"OH_AI_ModelCreate failed.\\n\");\n  OH_AI_ContextDestroy(&context);\n  return OH_AI_STATUS_LITE_ERROR;\n}\n\n// 加载与编译模型，模型的类型为OH_AI_MODELTYPE_MINDIR\nif (access(argv[1], F_OK) != 0) {\n    printf(\"model file not exists.\\n\");\n    OH_AI_ModelDestroy(&model);\n    OH_AI_ContextDestroy(&context);\n    return OH_AI_STATUS_LITE_ERROR;\n}\nint ret = OH_AI_ModelBuildFromFile(model, argv[1], OH_AI_MODELTYPE_MINDIR, context);\nif (ret != OH_AI_STATUS_SUCCESS) {\n  printf(\"OH_AI_ModelBuildFromFile failed, ret: %d.\\n\", ret);\n  OH_AI_ModelDestroy(&model);\n  OH_AI_ContextDestroy(&context);\n  return ret;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "输入数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "模型执行之前需要向输入的张量中填充数据。本例使用随机的数据对模型进行填充。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 获得输入张量\nOH_AI_TensorHandleArray inputs = OH_AI_ModelGetInputs(model);\nif (inputs.handle_list == NULL) {\n  printf(\"OH_AI_ModelGetInputs failed, ret: %d.\\n\", ret);\n  OH_AI_ModelDestroy(&model);\n  OH_AI_ContextDestroy(&context);\n  return ret;\n}\n// 使用随机数据填充张量\nret = GenerateInputDataWithRandom(inputs);\nif (ret != OH_AI_STATUS_SUCCESS) {\n  printf(\"GenerateInputDataWithRandom failed, ret: %d.\\n\", ret);\n  OH_AI_ModelDestroy(&model);\n  OH_AI_ContextDestroy(&context);\n  return ret;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "执行推理。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用OH_AI_ModelPredict接口进行模型推理。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 执行模型推理\nOH_AI_TensorHandleArray outputs;\nret = OH_AI_ModelPredict(model, inputs, &outputs, NULL, NULL);\nif (ret != OH_AI_STATUS_SUCCESS) {\n  printf(\"OH_AI_ModelPredict failed, ret: %d.\\n\", ret);\n  OH_AI_ModelDestroy(&model);\n  OH_AI_ContextDestroy(&context);\n  return ret;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取输出。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "模型推理结束之后，可以通过输出张量得到推理结果。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 获取模型的输出张量，并打印\nfor (size_t i = 0; i < outputs.handle_num; ++i) {\n  OH_AI_TensorHandle tensor = outputs.handle_list[i];\n  long long element_num = OH_AI_TensorGetElementNum(tensor);\n  printf(\"Tensor name: %s, tensor size is %zu ,elements num: %lld.\\n\", OH_AI_TensorGetName(tensor),\n        OH_AI_TensorGetDataSize(tensor), element_num);\n  const float *data = (const float *)OH_AI_TensorGetData(tensor);\n  if (data == NULL) {\n    printf(\"OH_AI_TensorGetData failed.\\n\");\n    OH_AI_ModelDestroy(&model);\n    OH_AI_ContextDestroy(&context);\n    return OH_AI_STATUS_LITE_ERROR;\n  }\n  printf(\"output data is:\\n\");\n  const int max_print_num = 50;\n  for (int j = 0; j < element_num && j <= max_print_num; ++j) {\n    printf(\"%f \", data[j]);\n  }\n  printf(\"\\n\");\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "释放模型。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "不再使用MindSpore Lite推理框架时，需要释放已经创建的模型。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 释放模型和上下文\nOH_AI_ModelDestroy(&model);\nOH_AI_ContextDestroy(&context);\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "调测验证",
      children: "调测验证"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编写CMakeLists.txt。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "cmake_minimum_required(VERSION 3.14)\nproject(Demo)\n\nadd_executable(demo main.c)\n\ntarget_link_libraries(\n        demo\n        mindspore_lite_ndk\n        pthread\n        dl\n)\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "使用ohos-sdk交叉编译，需要指定CMake的工具链路径，即：-DCMAKE_TOOLCHAIN_FILE=\"/{sdkPath}/native/build/cmake/ohos.toolchain.cmake\"。"
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["其中，sdkPath为DevEco Studio安装目录下的SDK路径，可在DevEco Studio工程界面，点击", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "File"
                })
              }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Settings..."
                })
              }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "HarmonyOS SDK"
                })
              }), "，查看", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Location"
                })
              }), "获取。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "工具链默认编译64位的程序，如果要编译32位，需要添加：-DOHOS_ARCH=\"armeabi-v7a\"。"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "运行。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "使用hdc_std连接设备，并将demo和mobilenetv2.ms推送到设备中的相同目录。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "使用hdc_std shell进入设备，并进入demo所在的目录执行如下命令，即可得到结果。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "./demo mobilenetv2.ms\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "得到如下输出:"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "# ./demo ./mobilenetv2.ms\nTensor name: Softmax-65, tensor size is 4004 ,elements num: 1001.\noutput data is:\n0.000018 0.000012 0.000026 0.000194 0.000156 0.001501 0.000240 0.000825 0.000016 0.000006 0.000007 0.000004 0.000004 0.000004 0.000015 0.000099 0.000011 0.000013 0.000005 0.000023 0.000004 0.000008 0.000003 0.000003 0.000008 0.000014 0.000012 0.000006 0.000019 0.000006 0.000018 0.000024 0.000010 0.000002 0.000028 0.000372 0.000010 0.000017 0.000008 0.000004 0.000007 0.000010 0.000007 0.000012 0.000005 0.000015 0.000007 0.000040 0.000004 0.000085 0.000023\n"
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
27491(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799696-11139ccc5fd34560b426aa8572b60856.png");

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