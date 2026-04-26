"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["367921"], {
854392(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_mindspore_lite_kit_deployment_mindspore_lite_train_guidelines_mindspore_lite_train_guidelines_md_8c0_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-mindspore-lite-kit-deployment-mindspore-lite-train-guidelines-mindspore-lite-train-guidelines-md-8c0.json
var site_docs_mindspore_lite_kit_deployment_mindspore_lite_train_guidelines_mindspore_lite_train_guidelines_md_8c0_namespaceObject = JSON.parse('{"id":"mindspore-lite-kit/deployment/mindspore-lite-train-guidelines/mindspore-lite-train-guidelines","title":"使用MindSpore Lite进行端侧训练 (C/C++)","description":"场景介绍","source":"@site/docs/mindspore-lite-kit/deployment/mindspore-lite-train-guidelines/mindspore-lite-train-guidelines.md","sourceDirName":"mindspore-lite-kit/deployment/mindspore-lite-train-guidelines","slug":"/mindspore-lite-kit/deployment/mindspore-lite-train-guidelines/","permalink":"/harmonyos-docs-site/mindspore-lite-kit/deployment/mindspore-lite-train-guidelines/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"使用MindSpore Lite进行端侧训练 (C/C++)","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/mindspore-lite-train-guidelines","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用MindSpore Lite进行模型推理 (C/C++)","permalink":"/harmonyos-docs-site/mindspore-lite-kit/deployment/mindspore-lite-guidelines/"},"next":{"title":"使用MindSpore Lite实现图像分类（ArkTS）","permalink":"/harmonyos-docs-site/mindspore-lite-kit/mindspore-guidelines-based-js/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/mindspore-lite-kit/deployment/mindspore-lite-train-guidelines/mindspore-lite-train-guidelines.md


const frontMatter = {
	title: '使用MindSpore Lite进行端侧训练 (C/C++)',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/mindspore-lite-train-guidelines',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '使用MindSpore Lite进行端侧训练 (C/C++)';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "调测验证",
  "id": "调测验证",
  "level": 2
}, {
  "value": "完整示例",
  "id": "完整示例",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
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
        id: "使用mindspore-lite进行端侧训练-cc",
        children: "使用MindSpore Lite进行端侧训练 (C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MindSpore Lite是一款AI引擎，它提供了面向不同硬件设备AI模型推理的功能，目前已经在图像分类、目标识别、人脸识别、文字识别等应用中广泛使用，同时支持在端侧设备上进行部署训练，让模型在实际业务场景中自适应用户的行为。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文介绍使用MindSpore Lite端侧AI引擎进行模型训练的通用开发流程。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此处给出使用MindSpore Lite进行模型训练相关的部分接口，具体请见下方表格。更多接口及详细内容，请见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-module/capi-mindspore/capi-mindspore",
        children: "MindSpore"
      }), "。"]
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
            children: "OH_AI_ContextHandle OH_AI_ContextCreate()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个上下文的对象。注意：此接口需跟OH_AI_ContextDestroy配套使用。"
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
            children: "void OH_AI_ContextAddDeviceInfo(OH_AI_ContextHandle context, OH_AI_DeviceInfoHandle device_info)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "添加运行时设备信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_TrainCfgHandle OH_AI_TrainCfgCreate()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建训练配置对象指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_AI_TrainCfgDestroy(OH_AI_TrainCfgHandle *train_cfg)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁训练配置对象指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_ModelHandle OH_AI_ModelCreate()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个模型对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_Status OH_AI_TrainModelBuildFromFile(OH_AI_ModelHandle model, const char *model_path, OH_AI_ModelType model_type, const OH_AI_ContextHandle model_context, const OH_AI_TrainCfgHandle train_cfg)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过模型文件加载并编译MindSpore Lite训练模型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_Status OH_AI_RunStep(OH_AI_ModelHandle model, const OH_AI_KernelCallBack before, const OH_AI_KernelCallBack after)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "单步训练模型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_Status OH_AI_ModelSetTrainMode(OH_AI_ModelHandle model, bool train)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置训练模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_Status OH_AI_ExportModel(OH_AI_ModelHandle model, OH_AI_ModelType model_type, const char *model_file, OH_AI_QuantizationType quantization_type, bool export_inference_only, char **output_tensor_name, size_t num)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "导出训练后的ms模型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_AI_ModelDestroy(OH_AI_ModelHandle *model)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放一个模型对象。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用MindSpore Lite进行模型训练的开发流程如下图所示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图 1"
        })
      }), " 使用MindSpore Lite进行模型训练的开发流程"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(180281)/* ["default"] */.A) + "",
        width: "620",
        height: "316"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "进入主要流程之前需要先引用相关的头文件，并编写函数生成随机的输入，具体如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <stdlib.h>\n#include <stdio.h>\n#include <string.h>\n#include \"mindspore/model.h\"\n\nint GenerateInputDataWithRandom(OH_AI_TensorHandleArray inputs) {\n  for (size_t i = 0; i < inputs.handle_num; ++i) {\n    float *input_data = (float *)OH_AI_TensorGetMutableData(inputs.handle_list[i]);\n    if (input_data == NULL) {\n      printf(\"OH_AI_TensorGetMutableData failed.\\n\");\n      return  OH_AI_STATUS_LITE_ERROR;\n    }\n    int64_t num = OH_AI_TensorGetElementNum(inputs.handle_list[i]);\n    const int divisor = 10;\n    for (size_t j = 0; j < num; j++) {\n      input_data[j] = (float)(rand() % divisor) / divisor;  // 0--0.9f\n    }\n  }\n  return OH_AI_STATUS_SUCCESS;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "然后进入主要的开发步骤，包括模型的准备、读取、编译、训练、模型导出和释放，具体开发过程及细节请见下文的开发步骤及示例。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "模型准备。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "准备的模型格式为.ms，本文以lenet_train.ms为例（此模型是提前准备的ms模型，本文相关效果仅以此模型文件为例）。开发者请自行准备所需的模型，可以按如下步骤操作："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["首先基于MindSpore架构使用Python创建网络模型，并导出为.mindir文件，详细指南参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://www.mindspore.cn/tutorials/zh-CN/r2.1/beginner/quick_start.html",
              children: "这里"
            }), "。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["然后将.mindir模型文件转换成.ms文件，转换操作步骤可以参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://www.mindspore.cn/lite/docs/zh-CN/r2.1/use/converter_train.html",
              children: "训练模型转换"
            }), "，.ms文件可以导入端侧设备并基于MindSpore Lite端侧框架进行训练。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建上下文，设置设备类型、训练配置等参数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// Create and init context, add CPU device info\nOH_AI_ContextHandle context = OH_AI_ContextCreate();\nif (context == NULL) {\n    printf(\"OH_AI_ContextCreate failed.\\n\");\n    return OH_AI_STATUS_LITE_ERROR;\n}\n\nOH_AI_DeviceInfoHandle cpu_device_info = OH_AI_DeviceInfoCreate(OH_AI_DEVICETYPE_CPU);\nif (cpu_device_info == NULL) {\n    printf(\"OH_AI_DeviceInfoCreate failed.\\n\");\n    OH_AI_ContextDestroy(&context);\n    return OH_AI_STATUS_LITE_ERROR;\n}\nOH_AI_ContextAddDeviceInfo(context, cpu_device_info);\n\n// Create trainCfg\nOH_AI_TrainCfgHandle trainCfg = OH_AI_TrainCfgCreate();\nif (trainCfg == NULL) {\n    printf(\"OH_AI_TrainCfgCreate failed.\\n\");\n    OH_AI_ContextDestroy(&context);\n    return OH_AI_STATUS_LITE_ERROR;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建、加载与编译模型。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_AI_TrainModelBuildFromFile加载并编译模型。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// Create model\nOH_AI_ModelHandle model = OH_AI_ModelCreate();\nif (model == NULL) {\n    printf(\"OH_AI_ModelCreate failed.\\n\");\n    OH_AI_TrainCfgDestroy(&trainCfg);\n    OH_AI_ContextDestroy(&context);\n    return OH_AI_STATUS_LITE_ERROR;\n}\n\n// Build model\nint ret = OH_AI_TrainModelBuildFromFile(model, model_file, OH_AI_MODELTYPE_MINDIR, context, trainCfg);\nif (ret != OH_AI_STATUS_SUCCESS) {\n    printf(\"OH_AI_TrainModelBuildFromFile failed, ret: %d.\\n\", ret);\n    OH_AI_ModelDestroy(&model);\n    OH_AI_ContextDestroy(&context);\n    return ret;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "输入数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "模型执行之前需要向输入的张量中填充数据。本例使用随机的数据对模型进行填充。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// Get Inputs\nOH_AI_TensorHandleArray inputs = OH_AI_ModelGetInputs(model);\nif (inputs.handle_list == NULL) {\n    printf(\"OH_AI_ModelGetInputs failed, ret: %d.\\n\", ret);\n    OH_AI_ModelDestroy(&model);\n    OH_AI_ContextDestroy(&context);\n    return ret;\n}\n\n// Generate random data as input data.\nret = GenerateInputDataWithRandom(inputs);\nif (ret != OH_AI_STATUS_SUCCESS) {\n    printf(\"GenerateInputDataWithRandom failed, ret: %d.\\n\", ret);\n    OH_AI_ModelDestroy(&model);\n    OH_AI_ContextDestroy(&context);\n    return ret;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "执行训练。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用OH_AI_ModelSetTrainMode接口设置训练模式，使用OH_AI_RunStep接口进行模型训练。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// Set Train Mode\nret = OH_AI_ModelSetTrainMode(model, true);\nif (ret != OH_AI_STATUS_SUCCESS) {\n    printf(\"OH_AI_ModelSetTrainMode failed, ret: %d.\\n\", ret);\n    OH_AI_ModelDestroy(&model);\n    OH_AI_ContextDestroy(&context);\n    return ret;\n}\n\n// Model Train Step\nret = OH_AI_RunStep(model, NULL, NULL);\nif (ret != OH_AI_STATUS_SUCCESS) {\n    printf(\"OH_AI_RunStep failed, ret: %d.\\n\", ret);\n    OH_AI_ModelDestroy(&model);\n    OH_AI_ContextDestroy(&context);\n    return ret;\n}\nprintf(\"Train Step Success.\\n\");\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导出训练后模型。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用OH_AI_ExportModel接口导出训练后模型。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// Export Train Model\nret = OH_AI_ExportModel(model, OH_AI_MODELTYPE_MINDIR, export_train_model, OH_AI_NO_QUANT, false, NULL, 0);\nif (ret != OH_AI_STATUS_SUCCESS) {\n    printf(\"OH_AI_ExportModel train failed, ret: %d.\\n\", ret);\n    OH_AI_ModelDestroy(&model);\n    OH_AI_ContextDestroy(&context);\n    return ret;\n}\nprintf(\"Export Train Model Success.\\n\");\n\n// Export Inference Model\nret = OH_AI_ExportModel(model, OH_AI_MODELTYPE_MINDIR, export_infer_model, OH_AI_NO_QUANT, true, NULL, 0);\nif (ret != OH_AI_STATUS_SUCCESS) {\n    printf(\"OH_AI_ExportModel inference failed, ret: %d.\\n\", ret);\n    OH_AI_ModelDestroy(&model);\n    OH_AI_ContextDestroy(&context);\n    return ret;\n}\nprintf(\"Export Inference Model Success.\\n\");\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "释放模型。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "不再使用MindSpore Lite推理框架时，需要释放已经创建的模型。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// Delete model and context.\nOH_AI_ModelDestroy(&model);\nOH_AI_ContextDestroy(&context);\n"
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
            children: "cmake_minimum_required(VERSION 3.14)\nproject(TrainDemo)\n\nadd_executable(train_demo main.c)\n\ntarget_link_libraries(\n        train_demo\n        mindspore_lite_ndk\n)\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "使用ohos-sdk交叉编译，需要对CMake设置native工具链路径，即：-DCMAKE_TOOLCHAIN_FILE=\"/xxx/native/build/cmake/ohos.toolchain.cmake\"。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "编译命令如下，其中OHOS_NDK需要设置为native工具链路径："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "  mkdir -p build\n\n  cd ./build || exit\n  OHOS_NDK=\"\"\n  cmake -G \"Unix Makefiles\" \\\n        -S ../ \\\n        -DCMAKE_TOOLCHAIN_FILE=\"$OHOS_NDK/build/cmake/ohos.toolchain.cmake\" \\\n        -DOHOS_ARCH=arm64-v8a \\\n        -DCMAKE_BUILD_TYPE=Release\n\n  make\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "运行编译的可执行程序。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "使用hdc连接设备，并将train_demo和lenet_train.ms推送到设备中的相同目录。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "使用hdc shell进入设备，并进入train_demo所在的目录执行如下命令，即可得到结果。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "./train_demo ./lenet_train.ms export_train_model export_infer_model\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "得到如下输出："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Train Step Success.\nExport Train Model Success.\nExport Inference Model Success.\nTensor name: Default/network-WithLossCell/_backbone-LeNet5/fc3-Dense/BiasAdd-op121, tensor size is 80, elements num: 20.\noutput data is:\n0.000265 0.000231 0.000254 0.000269 0.000238 0.000228\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在train_demo所在目录可以看到导出的两个模型文件：export_train_model.ms和export_infer_model.ms。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "完整示例",
      children: "完整示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <stdlib.h>\n#include <stdio.h>\n#include <string>\n#include \"mindspore/model.h\"\n\nint GenerateInputDataWithRandom(OH_AI_TensorHandleArray inputs) {\n  for (size_t i = 0; i < inputs.handle_num; ++i) {\n    float *input_data = (float *)OH_AI_TensorGetMutableData(inputs.handle_list[i]);\n    if (input_data == NULL) {\n      printf(\"OH_AI_TensorGetMutableData failed.\\n\");\n      return  OH_AI_STATUS_LITE_ERROR;\n    }\n    int64_t num = OH_AI_TensorGetElementNum(inputs.handle_list[i]);\n    const int divisor = 10;\n    for (size_t j = 0; j < num; j++) {\n      input_data[j] = (float)(rand() % divisor) / divisor;  // 0--0.9f\n    }\n  }\n  return OH_AI_STATUS_SUCCESS;\n}\n\nint ModelPredict(char* model_file) {\n  // Create and init context, add CPU device info\n  OH_AI_ContextHandle context = OH_AI_ContextCreate();\n  if (context == NULL) {\n    printf(\"OH_AI_ContextCreate failed.\\n\");\n    return OH_AI_STATUS_LITE_ERROR;\n  }\n\n  OH_AI_DeviceInfoHandle cpu_device_info = OH_AI_DeviceInfoCreate(OH_AI_DEVICETYPE_CPU);\n  if (cpu_device_info == NULL) {\n    printf(\"OH_AI_DeviceInfoCreate failed.\\n\");\n    OH_AI_ContextDestroy(&context);\n    return OH_AI_STATUS_LITE_ERROR;\n  }\n  OH_AI_ContextAddDeviceInfo(context, cpu_device_info);\n\n  // Create model\n  OH_AI_ModelHandle model = OH_AI_ModelCreate();\n  if (model == NULL) {\n    printf(\"OH_AI_ModelCreate failed.\\n\");\n    OH_AI_ContextDestroy(&context);\n    return OH_AI_STATUS_LITE_ERROR;\n  }\n\n  // Build model\n  int ret = OH_AI_ModelBuildFromFile(model, model_file, OH_AI_MODELTYPE_MINDIR, context);\n  if (ret != OH_AI_STATUS_SUCCESS) {\n    printf(\"OH_AI_ModelBuildFromFile failed, ret: %d.\\n\", ret);\n    OH_AI_ModelDestroy(&model);\n    OH_AI_ContextDestroy(&context);\n    return ret;\n  }\n\n  // Get Inputs\n  OH_AI_TensorHandleArray inputs = OH_AI_ModelGetInputs(model);\n  if (inputs.handle_list == NULL) {\n    printf(\"OH_AI_ModelGetInputs failed, ret: %d.\\n\", ret);\n    OH_AI_ModelDestroy(&model);\n    OH_AI_ContextDestroy(&context);\n    return ret;\n  }\n\n  // Generate random data as input data.\n  ret = GenerateInputDataWithRandom(inputs);\n  if (ret != OH_AI_STATUS_SUCCESS) {\n    printf(\"GenerateInputDataWithRandom failed, ret: %d.\\n\", ret);\n    OH_AI_ModelDestroy(&model);\n    OH_AI_ContextDestroy(&context);\n    return ret;\n  }\n\n  // Model Predict\n  OH_AI_TensorHandleArray outputs;\n  ret = OH_AI_ModelPredict(model, inputs, &outputs, NULL, NULL);\n  if (ret != OH_AI_STATUS_SUCCESS) {\n    printf(\"MSModelPredict failed, ret: %d.\\n\", ret);\n    OH_AI_ModelDestroy(&model);\n    OH_AI_ContextDestroy(&context);\n    return ret;\n  }\n\n  // Print Output Tensor Data.\n  for (size_t i = 0; i < outputs.handle_num; ++i) {\n    OH_AI_TensorHandle tensor = outputs.handle_list[i];\n    int64_t element_num = OH_AI_TensorGetElementNum(tensor);\n    printf(\"Tensor name: %s, tensor size is %ld ,elements num: %ld.\\n\", OH_AI_TensorGetName(tensor),\n           OH_AI_TensorGetDataSize(tensor), element_num);\n    const float *data = (const float *)OH_AI_TensorGetData(tensor);\n    printf(\"output data is:\\n\");\n    const int max_print_num = 50;\n    for (int j = 0; j < element_num && j <= max_print_num; ++j) {\n      printf(\"%f \", data[j]);\n    }\n    printf(\"\\n\");\n  }\n\n  OH_AI_ModelDestroy(&model);\n  OH_AI_ContextDestroy(&context);\n  return OH_AI_STATUS_SUCCESS;\n}\n\nint TrainDemo(int argc, const char **argv) {\n  if (argc < 4) {\n    printf(\"Model file must be provided.\\n\");\n    printf(\"Export Train Model path must be provided.\\n\");\n    printf(\"Export Inference Model path must be provided.\\n\");\n    return OH_AI_STATUS_LITE_ERROR;\n  }\n  const char *model_file = argv[1];\n  const char *export_train_model = argv[2];\n  const char *export_infer_model = argv[3];\n\n  // Create and init context, add CPU device info\n  OH_AI_ContextHandle context = OH_AI_ContextCreate();\n  if (context == NULL) {\n    printf(\"OH_AI_ContextCreate failed.\\n\");\n    return OH_AI_STATUS_LITE_ERROR;\n  }\n\n  OH_AI_DeviceInfoHandle cpu_device_info = OH_AI_DeviceInfoCreate(OH_AI_DEVICETYPE_CPU);\n  if (cpu_device_info == NULL) {\n    printf(\"OH_AI_DeviceInfoCreate failed.\\n\");\n    OH_AI_ContextDestroy(&context);\n    return OH_AI_STATUS_LITE_ERROR;\n  }\n  OH_AI_ContextAddDeviceInfo(context, cpu_device_info);\n\n  // Create trainCfg\n  OH_AI_TrainCfgHandle trainCfg = OH_AI_TrainCfgCreate();\n  if (trainCfg == NULL) {\n    printf(\"OH_AI_TrainCfgCreate failed.\\n\");\n    OH_AI_ContextDestroy(&context);\n    return OH_AI_STATUS_LITE_ERROR;\n  }\n\n  // Create model\n  OH_AI_ModelHandle model = OH_AI_ModelCreate();\n  if (model == NULL) {\n    printf(\"OH_AI_ModelCreate failed.\\n\");\n    OH_AI_TrainCfgDestroy(&trainCfg);\n    OH_AI_ContextDestroy(&context);\n    return OH_AI_STATUS_LITE_ERROR;\n  }\n\n  // Build model\n  int ret = OH_AI_TrainModelBuildFromFile(model, model_file, OH_AI_MODELTYPE_MINDIR, context, trainCfg);\n  if (ret != OH_AI_STATUS_SUCCESS) {\n    printf(\"OH_AI_TrainModelBuildFromFile failed, ret: %d.\\n\", ret);\n    OH_AI_ModelDestroy(&model);\n    OH_AI_ContextDestroy(&context);\n    return ret;\n  }\n\n  // Get Inputs\n  OH_AI_TensorHandleArray inputs = OH_AI_ModelGetInputs(model);\n  if (inputs.handle_list == NULL) {\n    printf(\"OH_AI_ModelGetInputs failed, ret: %d.\\n\", ret);\n    OH_AI_ModelDestroy(&model);\n    OH_AI_ContextDestroy(&context);\n    return ret;\n  }\n\n  // Generate random data as input data.\n  ret = GenerateInputDataWithRandom(inputs);\n  if (ret != OH_AI_STATUS_SUCCESS) {\n    printf(\"GenerateInputDataWithRandom failed, ret: %d.\\n\", ret);\n    OH_AI_ModelDestroy(&model);\n    OH_AI_ContextDestroy(&context);\n    return ret;\n  }\n\n  // Set Train Mode\n  ret = OH_AI_ModelSetTrainMode(model, true);\n  if (ret != OH_AI_STATUS_SUCCESS) {\n    printf(\"OH_AI_ModelSetTrainMode failed, ret: %d.\\n\", ret);\n    OH_AI_ModelDestroy(&model);\n    OH_AI_ContextDestroy(&context);\n    return ret;\n  }\n\n  // Model Train Step\n  ret = OH_AI_RunStep(model, NULL, NULL);\n  if (ret != OH_AI_STATUS_SUCCESS) {\n    printf(\"OH_AI_RunStep failed, ret: %d.\\n\", ret);\n    OH_AI_ModelDestroy(&model);\n    OH_AI_ContextDestroy(&context);\n    return ret;\n  }\n  printf(\"Train Step Success.\\n\");\n\n  // Export Train Model\n  ret = OH_AI_ExportModel(model, OH_AI_MODELTYPE_MINDIR, export_train_model, OH_AI_NO_QUANT, false, NULL, 0);\n  if (ret != OH_AI_STATUS_SUCCESS) {\n    printf(\"OH_AI_ExportModel train failed, ret: %d.\\n\", ret);\n    OH_AI_ModelDestroy(&model);\n    OH_AI_ContextDestroy(&context);\n    return ret;\n  }\n  printf(\"Export Train Model Success.\\n\");\n\n  // Export Inference Model\n  ret = OH_AI_ExportModel(model, OH_AI_MODELTYPE_MINDIR, export_infer_model, OH_AI_NO_QUANT, true, NULL, 0);\n  if (ret != OH_AI_STATUS_SUCCESS) {\n    printf(\"OH_AI_ExportModel inference failed, ret: %d.\\n\", ret);\n    OH_AI_ModelDestroy(&model);\n    OH_AI_ContextDestroy(&context);\n    return ret;\n  }\n  printf(\"Export Inference Model Success.\\n\");\n\n  // Delete model and context.\n  OH_AI_ModelDestroy(&model);\n  OH_AI_ContextDestroy(&context);\n\n  // Use The Exported Model to predict\n  std::string temp_path = std::string(export_infer_model) + \".ms\";\n  const char *exported_model = temp_path.c_str();\n  ret = ModelPredict(exported_model);\n  if (ret != OH_AI_STATUS_SUCCESS) {\n    printf(\"Exported Model to predict failed, ret: %d.\\n\", ret);\n    return ret;\n  }\n  return OH_AI_STATUS_SUCCESS;\n}\n\nint main(int argc, const char **argv) { return TrainDemo(argc, argv); }\n"
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
180281(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439391-be4007e10a72b76150b913ebd58242f7.png");

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