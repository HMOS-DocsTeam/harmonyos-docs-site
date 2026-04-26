"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["644591"], {
545881(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_on_device_deployment_cannkit_app_integration_cannkit_integration_model_cannkit_integration_model_md_b44_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-on-device-deployment-cannkit-app-integration-cannkit-integration-model-cannkit-integration-model-md-b44.json
var site_docs_cann_kit_guide_cannkit_on_device_deployment_cannkit_app_integration_cannkit_integration_model_cannkit_integration_model_md_b44_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-on-device-deployment/cannkit-app-integration/cannkit-integration-model/cannkit-integration-model","title":"集成模型","description":"模型的加载、编译和推理主要是在native层实现，应用层主要作为数据传递和展示作用。","source":"@site/docs/cann-kit-guide/cannkit-on-device-deployment/cannkit-app-integration/cannkit-integration-model/cannkit-integration-model.md","sourceDirName":"cann-kit-guide/cannkit-on-device-deployment/cannkit-app-integration/cannkit-integration-model","slug":"/cann-kit-guide/cannkit-on-device-deployment/cannkit-app-integration/cannkit-integration-model/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-on-device-deployment/cannkit-app-integration/cannkit-integration-model/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"集成模型","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-integration-model","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"配置项目NAPI","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-on-device-deployment/cannkit-app-integration/cannkit-compiling-the-napi/"},"next":{"title":"单算子应用","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-single-operator-application/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-on-device-deployment/cannkit-app-integration/cannkit-integration-model/cannkit-integration-model.md


const frontMatter = {
	title: '集成模型',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-integration-model',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '集成模型';

const assets = {

};



const toc = [{
  "value": "预置模型",
  "id": "预置模型",
  "level": 2
}, {
  "value": "加载离线模型",
  "id": "加载离线模型",
  "level": 2
}, {
  "value": "输入输出数据准备",
  "id": "输入输出数据准备",
  "level": 2
}, {
  "value": "同步推理离线模型",
  "id": "同步推理离线模型",
  "level": 2
}, {
  "value": "模型输出后处理",
  "id": "模型输出后处理",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "集成模型",
        children: "集成模型"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "模型的加载、编译和推理主要是在native层实现，应用层主要作为数据传递和展示作用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "模型推理之前需要对输入数据进行预处理以匹配模型的输入，同样对于模型的输出也需要做处理获取自己期望的结果。另外SDK中提供了设置模型编译和运行时的配置接口，开发者可根据实际需求选择使用接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本节阐述同步模式下单模型的使用，从流程上分别阐述每个步骤在应用层和native层的实现和调用。接口请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit",
        children: "API参考"
      }), "，示例请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/HarmonyOS_Samples/cannkit-samplecode-clientdemo-cpp",
        children: "SampleCode"
      }), "，本示例支持加载离线模型对图片中的物体进行分类，App运行效果图如下所示。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(406445)/* ["default"] */.A) + "",
        width: "525",
        height: "1129"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "预置模型",
      children: "预置模型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了让App运行时能够读取到模型文件和处理推理结果，需要先把离线模型和模型对应的结果标签文件预置到工程的“entry/src/main/resources/rawfile”目录中。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本示例所使用的离线模型的转换和生成请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cann-kit-guide/cannkit-model-conversion/cannkit-offline-model-conversion/cannkit-model-conversion-example#caffe%E6%A8%A1%E5%9E%8B%E8%BD%AC%E6%8D%A2",
        children: "Caffe模型转换"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "加载离线模型",
      children: "加载离线模型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在App应用创建时加载模型和读取结果标签文件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用NAPI层的LoadModel函数，读取模型的buffer。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["（可选）根据需要调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaioptions_setomoptions",
            children: "HMS_HiAIOptions_SetOmOptions"
          }), "接口，打开维测功能（如Profiling）。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["把模型buffer传递给HIAIModelManager类的HIAIModelManager::LoadModelFromBuffer接口，该接口调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-core-h/capi-neural-network-core-h#oh_nncompilation_constructwithofflinemodelbuffer",
            children: "OH_NNCompilation_ConstructWithOfflineModelBuffer"
          }), "创建模型的编译实例。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置模型的deviceID。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "size_t deviceID = 0;\nconst size_t *allDevicesID = nullptr;\nuint32_t deviceCount = 0;\n// 获取所有已连接设备的ID\nOH_NN_ReturnCode ret = OH_NNDevice_GetAllDevicesID(&allDevicesID, &deviceCount);\nif (ret != OH_NN_SUCCESS || allDevicesID == nullptr) {\n    OH_LOG_ERROR(LOG_APP, \"OH_NNDevice_GetAllDevicesID failed\");\n    return OH_NN_FAILED;\n}\n// 获取设备名为HIAI_F的设备ID\nfor (uint32_t i = 0; i < deviceCount; i++) {\n    const char *name = nullptr;\n    // 获取指定设备的名称\n    ret = OH_NNDevice_GetName(allDevicesID[i], &name);\n    if (ret != OH_NN_SUCCESS || name == nullptr) {\n        OH_LOG_ERROR(LOG_APP, \"OH_NNDevice_GetName failed\");\n        return OH_NN_FAILED;\n    }\n    if (std::string(name) == \"HIAI_F\") {\n        deviceID = allDevicesID[i];\n        break;\n    }\n}\n\n// modelData和modelSize为模型的内存地址和大小， compilation的创建可参考CANN Kit Codelab\nOH_NNCompilation *compilation = OH_NNCompilation_ConstructWithOfflineModelBuffer(modelData, modelSize);\n// 设置编译器的设备id为HIAI_F\nret = OH_NNCompilation_SetDevice(compilation, deviceID);\nif (ret != OH_NN_SUCCESS) {\n    OH_LOG_ERROR(LOG_APP, \"OH_NNCompilation_SetDevice failed\");\n    return OH_NN_FAILED;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-core-h/capi-neural-network-core-h#oh_nncompilation_build",
            children: "OH_NNCompilation_Build"
          }), "，执行模型编译。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-core-h/capi-neural-network-core-h#oh_nnexecutor_construct",
            children: "OH_NNExecutor_Construct"
          }), "，创建模型执行器。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-core-h/capi-neural-network-core-h#oh_nncompilation_destroy",
            children: "OH_NNCompilation_Destroy"
          }), "，释放模型编译实例。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["上述流程可参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/HarmonyOS_Samples/cannkit-samplecode-clientdemo-cpp",
        children: "SampleCode"
      }), "中entry/src/main/cpp/Classification.cpp文件中的LoadModel函数和entry/src/main/cpp/HIAIModelManager.cpp中的HIAIModelManager::LoadModelFromBuffer函数。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "输入输出数据准备",
      children: "输入输出数据准备"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "处理模型的输入，例如示例中模型的输入为1*3*227*227格式Float类型的数据，需要把输入的图片转成该格式后传递到NAPI层。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建模型的输入和输出Tensor，并把应用层传递的数据填充到输入的Tensor中。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 创建输入数据\nsize_t inputCount = 0;\nstd::vector<NN_Tensor*> inputTensors;\nOH_NN_ReturnCode ret = OH_NNExecutor_GetInputCount(executor, &inputCount); // 创建executor可参考CANN Kit Codelab\nif (ret != OH_NN_SUCCESS || inputCount != inputData.size()) { // inputData为开发者构造的输入数据\n    OH_LOG_ERROR(LOG_APP, \"OH_NNExecutor_GetInputCount failed, size mismatch\");\n    return OH_NN_FAILED;\n}\nfor (size_t i = 0; i < inputCount; ++i) {\n    NN_TensorDesc *tensorDesc = OH_NNExecutor_CreateInputTensorDesc(executor, i); // 创建executor可参考CANN Kit Codelab\n    NN_Tensor *tensor = OH_NNTensor_Create(deviceID, tensorDesc); // deviceID的获取方式可参考加载离线模型的步骤3或者CANN Kit Codelab\n    if (tensor != nullptr) {\n        inputTensors.push_back(tensor);\n    }\n    OH_NNTensorDesc_Destroy(&tensorDesc);\n}\nif (inputTensors.size() != inputCount) {\n    OH_LOG_ERROR(LOG_APP, \"input size mismatch\");\n    DestroyTensors(inputTensors); // DestroyTensors为释放tensor内存操作函数，具体实现可参考CANN Kit Codelab\n    return OH_NN_FAILED;\n}\n\n// 初始化输入数据\nfor (size_t i = 0; i < inputTensors.size(); ++i) {\n    void *data = OH_NNTensor_GetDataBuffer(inputTensors[i]);\n    size_t dataSize = 0;\n    OH_NNTensor_GetSize(inputTensors[i], &dataSize);\n    if (data == nullptr || dataSize != inputData[i].size()) { // inputData为模型的输入数据，使用方式可参考CANN Kit Codelab\n        OH_LOG_ERROR(LOG_APP, \"invalid data or dataSize\");\n        return OH_NN_FAILED;\n    }\n    memcpy(data, inputData[i].data(), inputData[i].size()); // inputData为模型的输入数据，使用方式可参考CANN Kit Codelab\n}\n\n// 创建输出数据，与输入数据的创建方式类似\nsize_t outputCount = 0;\nstd::vector<NN_Tensor*> outputTensors;\nret = OH_NNExecutor_GetOutputCount(executor, &outputCount); // 创建executor可参考CANN Kit Codelab\nif (ret != OH_NN_SUCCESS) {\n    OH_LOG_ERROR(LOG_APP, \"OH_NNExecutor_GetOutputCount failed\");\n    DestroyTensors(inputTensors); // DestroyTensors为释放tensor内存操作函数，具体实现可参考CANN Kit Codelab\n    return OH_NN_FAILED;\n}\nfor (size_t i = 0; i < outputCount; i++) {\n    NN_TensorDesc *tensorDesc = OH_NNExecutor_CreateOutputTensorDesc(executor, i); // 创建executor可参考CANN Kit Codelab\n    NN_Tensor *tensor = OH_NNTensor_Create(deviceID, tensorDesc); // deviceID的获取方式可参考加载离线模型的步骤3或者CANN Kit Codelab\n    if (tensor != nullptr) {\n        outputTensors.push_back(tensor);\n    }\n    OH_NNTensorDesc_Destroy(&tensorDesc);\n}\nif (outputTensors.size() != outputCount) {\n    DestroyTensors(inputTensors); // DestroyTensors为释放tensor内存操作函数，具体实现可参考CANN Kit Codelab\n    DestroyTensors(outputTensors); // DestroyTensors为释放tensor内存操作函数，具体实现可参考CANN Kit Codelab\n    OH_LOG_ERROR(LOG_APP, \"output size mismatch\");\n    return OH_NN_FAILED;\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["上述流程可参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/HarmonyOS_Samples/cannkit-samplecode-clientdemo-cpp",
        children: "SampleCode"
      }), "中\"entry/src/main/cpp/Classification.cpp\"文件中的InitIOTensors函数和\"entry/src/main/cpp/HIAIModelManager.cpp\"中的HIAIModelManager::InitIOTensors函数。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "同步推理离线模型",
      children: "同步推理离线模型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(289969)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果不更换模型，则首次编译加载完成后可多次推理，即一次编译加载，多次推理。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-core-h/capi-neural-network-core-h#oh_nnexecutor_runsync",
        children: "OH_NNExecutor_RunSync"
      }), "，完成模型的同步推理。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/HarmonyOS_Samples/cannkit-samplecode-clientdemo-cpp",
        children: "SampleCode"
      }), "中\"entry/src/main/cpp/Classification.cpp\"文件中的RunModel函数和\"entry/src/main/cpp/HIAIModelManager.cpp\"中的HIAIModelManager::RunModel函数。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "模型输出后处理",
      children: "模型输出后处理"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-core-h/capi-neural-network-core-h#oh_nntensor_getdatabuffer",
            children: "OH_NNTensor_GetDataBuffer"
          }), "，获取输出的Tensor，在输出Tensor中会得到模型的输出数据。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "对输出数据进行相应的处理可得到期望的结果。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "例如本示例demo中模型的输出是1000个label的概率，期望得到这1000个结果中概率最大的三个标签。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "销毁申请的Tensor资源和执行器实例。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["上述流程可参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/HarmonyOS_Samples/cannkit-samplecode-clientdemo-cpp",
        children: "SampleCode"
      }), "中\"entry/src/main/cpp/Classification.cpp\"文件中的GetResult、UnloadModel函数和\"entry/src/main/cpp/HIAIModelManager.cpp\"中的HIAIModelManager::GetResult、HIAIModelManager::UnloadModel函数。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(217150)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可根据需要自行设置模型推理优先级。使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-core-h/capi-neural-network-core-h#oh_nncompilation_setpriority",
        children: "OH_NNCompilation_SetPriority"
      }), "接口，默认值为OH_NN_PRIORITY_NONE，本接口应在模型推理前调用。"]
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
406445(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479223-107d121dce9cc47657f05d7b1ea68b0d.png");

},
217150(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
289969(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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