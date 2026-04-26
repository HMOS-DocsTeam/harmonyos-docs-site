"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["985871"], {
794098(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_mindspore_lite_kit_mindspore_guidelines_based_native_mindspore_guidelines_based_native_md_b9d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-mindspore-lite-kit-mindspore-guidelines-based-native-mindspore-guidelines-based-native-md-b9d.json
var site_docs_mindspore_lite_kit_mindspore_guidelines_based_native_mindspore_guidelines_based_native_md_b9d_namespaceObject = JSON.parse('{"id":"mindspore-lite-kit/mindspore-guidelines-based-native/mindspore-guidelines-based-native","title":"使用MindSpore Lite实现图像分类（C/C++）","description":"场景说明","source":"@site/docs/mindspore-lite-kit/mindspore-guidelines-based-native/mindspore-guidelines-based-native.md","sourceDirName":"mindspore-lite-kit/mindspore-guidelines-based-native","slug":"/mindspore-lite-kit/mindspore-guidelines-based-native/","permalink":"/harmonyos-docs-site/mindspore-lite-kit/mindspore-guidelines-based-native/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"使用MindSpore Lite实现图像分类（C/C++）","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/mindspore-guidelines-based-native","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用MindSpore Lite实现图像分类（ArkTS）","permalink":"/harmonyos-docs-site/mindspore-lite-kit/mindspore-guidelines-based-js/"},"next":{"title":"使用MindSpore Lite实现语音识别（C/C++）","permalink":"/harmonyos-docs-site/mindspore-lite-kit/mindspore-asr-based-native/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/mindspore-lite-kit/mindspore-guidelines-based-native/mindspore-guidelines-based-native.md


const frontMatter = {
	title: '使用MindSpore Lite实现图像分类（C/C++）',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/mindspore-guidelines-based-native',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '使用MindSpore Lite实现图像分类（C/C++）';

const assets = {

};



const toc = [{
  "value": "场景说明",
  "id": "场景说明",
  "level": 2
}, {
  "value": "基本概念",
  "id": "基本概念",
  "level": 2
}, {
  "value": "开发流程",
  "id": "开发流程",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "选择模型",
  "id": "选择模型",
  "level": 3
}, {
  "value": "编写推理代码",
  "id": "编写推理代码",
  "level": 3
}, {
  "value": "使用N-API将C++动态库封装成ArkTS模块",
  "id": "使用n-api将c动态库封装成arkts模块",
  "level": 3
}, {
  "value": "实现图像输入和预处理，并执行推理",
  "id": "实现图像输入和预处理并执行推理",
  "level": 3
}, {
  "value": "调测验证",
  "id": "调测验证",
  "level": 3
}, {
  "value": "效果示意",
  "id": "效果示意",
  "level": 3
}, {
  "value": "示例代码",
  "id": "示例代码",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "使用mindspore-lite实现图像分类cc",
        children: "使用MindSpore Lite实现图像分类（C/C++）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景说明",
      children: "场景说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-module/capi-mindspore/capi-mindspore",
        children: "MindSpore"
      }), "，在UI代码中直接集成MindSpore Lite能力，快速部署AI算法，进行AI模型推理，实现图像分类的应用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图像分类可实现对图像中物体的识别，在医学影像分析、自动驾驶、电子商务、人脸识别等领域有广泛的应用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "N-API：用于构建ArkTS本地化组件的一套接口。可利用N-API，将C/C++开发的库封装成ArkTS模块。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发流程",
      children: "开发流程"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "选择图像分类模型。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在端侧使用MindSpore Lite推理模型，实现对选择的图片进行分类。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文以对相册的一张图片进行推理为例，提供使用MindSpore Lite实现图像分类的开发指导。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "选择模型",
      children: "选择模型"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本示例程序中使用的图像分类模型文件为", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://download.mindspore.cn/model_zoo/official/lite/mobilenetv2_openimage_lite/1.5/mobilenetv2.ms",
        children: "mobilenetv2.ms"
      }), "，放置在entry/src/main/resources/rawfile工程目录下。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果开发者有其他图像分类的预训练模型，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/mindspore-lite-kit/mindspore-lite-converter-guidelines",
        children: "MindSpore Lite 模型转换"
      }), "介绍，将原始模型转换成.ms格式。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "编写推理代码",
      children: "编写推理代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在 entry/src/main/cpp/mslite_napi.cpp，调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-module/capi-mindspore/capi-mindspore",
        children: "MindSpore"
      }), "实现端侧推理，推理代码流程如下。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "引用对应的头文件"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <iostream>\n#include <sstream>\n#include <cstdlib>\n#include <hilog/log.h>\n#include <rawfile/raw_file_manager.h>\n#include <mindspore/types.h>\n#include <mindspore/model.h>\n#include <mindspore/context.h>\n#include <mindspore/status.h>\n#include <mindspore/tensor.h>\n#include \"napi/native_api.h\"\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "读取模型文件"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#define LOGI(...) ((void)OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, \"[MSLiteNapi]\", __VA_ARGS__))\n#define LOGD(...) ((void)OH_LOG_Print(LOG_APP, LOG_DEBUG, LOG_DOMAIN, \"[MSLiteNapi]\", __VA_ARGS__))\n#define LOGW(...) ((void)OH_LOG_Print(LOG_APP, LOG_WARN, LOG_DOMAIN, \"[MSLiteNapi]\", __VA_ARGS__))\n#define LOGE(...) ((void)OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_DOMAIN, \"[MSLiteNapi]\", __VA_ARGS__))\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "void *ReadModelFile(NativeResourceManager *nativeResourceManager, const std::string &modelName, size_t *modelSize)\n{\n    auto rawFile = OH_ResourceManager_OpenRawFile(nativeResourceManager, modelName.c_str());\n    if (rawFile == nullptr) {\n        LOGE(\"MS_LITE_ERR: Open model file failed\");\n        OH_ResourceManager_CloseRawFile(rawFile);\n        return nullptr;\n    }\n    long fileSize = OH_ResourceManager_GetRawFileSize(rawFile);\n    if (fileSize <= 0) {\n        LOGE(\"MS_LITE_ERR: FileSize not correct\");\n    }\n    void *modelBuffer = malloc(fileSize);\n    if (modelBuffer == nullptr) {\n        LOGE(\"MS_LITE_ERR: malloc failed\");\n    }\n    int ret = OH_ResourceManager_ReadRawFile(rawFile, modelBuffer, fileSize);\n    if (ret == 0) {\n        LOGE(\"MS_LITE_ERR: OH_ResourceManager_ReadRawFile failed\");\n        OH_ResourceManager_CloseRawFile(rawFile);\n        return nullptr;\n    }\n    OH_ResourceManager_CloseRawFile(rawFile);\n    *modelSize = fileSize;\n    return modelBuffer;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建上下文，设置线程数、设备类型等参数，并加载模型。本样例模型，不支持使用NNRt推理。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "void DestroyModelBuffer(void **buffer)\n{\n    if (buffer == nullptr) {\n        return;\n    }\n    free(*buffer);\n    *buffer = nullptr;\n}\n\nOH_AI_ContextHandle CreateMSLiteContext(void *modelBuffer)\n{\n    // Set executing context for model.\n    auto context = OH_AI_ContextCreate();\n    if (context == nullptr) {\n        DestroyModelBuffer(&modelBuffer);\n        LOGE(\"MS_LITE_ERR: Create MSLite context failed.\\n\");\n        return nullptr;\n    }\n    // 本样例模型，不支持配置OH_AI_DeviceInfoCreate(OH_AI_DEVICETYPE_NNRT)\n    auto cpu_device_info = OH_AI_DeviceInfoCreate(OH_AI_DEVICETYPE_CPU);\n\n    OH_AI_DeviceInfoSetEnableFP16(cpu_device_info, true);\n    OH_AI_ContextAddDeviceInfo(context, cpu_device_info);\n    \n    LOGI(\"MS_LITE_LOG: Build MSLite context success.\\n\");\n    return context;\n}\n\nOH_AI_ModelHandle CreateMSLiteModel(void *modelBuffer, size_t modelSize, OH_AI_ContextHandle context)\n{\n    // Create model\n    auto model = OH_AI_ModelCreate();\n    if (model == nullptr) {\n        DestroyModelBuffer(&modelBuffer);\n        LOGE(\"MS_LITE_ERR: Allocate MSLite Model failed.\\n\");\n        return nullptr;\n    }\n\n    // Build model object\n    // `OH_AI_MODELTYPE_MINDIR` 适用于 `.ms` 模型文件格式\n    auto build_ret = OH_AI_ModelBuild(model, modelBuffer, modelSize, OH_AI_MODELTYPE_MINDIR, context);\n    DestroyModelBuffer(&modelBuffer);\n    if (build_ret != OH_AI_STATUS_SUCCESS) {\n        OH_AI_ModelDestroy(&model);\n        LOGE(\"MS_LITE_ERR: Build MSLite model failed.\\n\");\n        return nullptr;\n    }\n    LOGI(\"MS_LITE_LOG: Build MSLite model success.\\n\");\n    return model;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置模型输入数据，执行模型推理。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "constexpr int K_NUM_PRINT_OF_OUT_DATA = 20;\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 设置模型输入数据\nint FillInputTensor(OH_AI_TensorHandle input, std::vector<float> input_data)\n{\n    if (OH_AI_TensorGetDataType(input) == OH_AI_DATATYPE_NUMBERTYPE_FLOAT32) {\n        float *data = (float *)OH_AI_TensorGetMutableData(input);\n        for (size_t i = 0; i < OH_AI_TensorGetElementNum(input); i++) {\n            data[i] = input_data[i];\n        }\n        return OH_AI_STATUS_SUCCESS;\n    } else {\n        return OH_AI_STATUS_LITE_ERROR;\n    }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 执行模型推理\nint RunMSLiteModel(OH_AI_ModelHandle model, std::vector<float> input_data)\n{\n    // Set input data for model.\n    auto inputs = OH_AI_ModelGetInputs(model);\n    auto ret = FillInputTensor(inputs.handle_list[0], input_data);\n    if (ret != OH_AI_STATUS_SUCCESS) {\n        LOGE(\"MS_LITE_ERR: RunMSLiteModel set input error.\\n\");\n        return OH_AI_STATUS_LITE_ERROR;\n    }\n\n    // Get model output.\n    auto outputs = OH_AI_ModelGetOutputs(model);\n\n    // Predict model.\n    auto predict_ret = OH_AI_ModelPredict(model, inputs, &outputs, nullptr, nullptr);\n    if (predict_ret != OH_AI_STATUS_SUCCESS) {\n        LOGE(\"MS_LITE_ERR: MSLite Predict error.\\n\");\n        return OH_AI_STATUS_LITE_ERROR;\n    }\n    LOGI(\"MS_LITE_LOG: Run MSLite model Predict success.\\n\");\n\n    // Print output tensor data.\n    LOGI(\"MS_LITE_LOG: Get model outputs:\\n\");\n    for (size_t i = 0; i < outputs.handle_num; i++) {\n        auto tensor = outputs.handle_list[i];\n        LOGI(\"MS_LITE_LOG: - Tensor %{public}d name is: %{public}s.\\n\", static_cast<int>(i),\n             OH_AI_TensorGetName(tensor));\n        LOGI(\"MS_LITE_LOG: - Tensor %{public}d size is: %{public}d.\\n\", static_cast<int>(i),\n             (int)OH_AI_TensorGetDataSize(tensor));\n        LOGI(\"MS_LITE_LOG: - Tensor data is:\\n\");\n        auto out_data = reinterpret_cast<const float *>(OH_AI_TensorGetData(tensor));\n        std::stringstream outStr;\n        for (int i = 0; (i < OH_AI_TensorGetElementNum(tensor)) && (i <= K_NUM_PRINT_OF_OUT_DATA); i++) {\n            outStr << out_data[i] << \" \";\n        }\n        LOGI(\"MS_LITE_LOG: %{public}s\", outStr.str().c_str());\n    }\n    return OH_AI_STATUS_SUCCESS;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用以上方法，实现完整的模型推理流程。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "static napi_value RunDemo(napi_env env, napi_callback_info info)\n{\n    // run demo\n    napi_value error_ret;\n    napi_create_int32(env, -1, &error_ret);\n    // 传入数据处理\n    size_t argc = 2;\n    napi_value argv[2] = {nullptr};\n    napi_get_cb_info(env, info, &argc, argv, nullptr, nullptr);\n    bool isArray = false;\n    napi_is_array(env, argv[0], &isArray);\n    uint32_t length = 0;\n    // 获取数组的长度\n    napi_get_array_length(env, argv[0], &length);\n    LOGI(\"MS_LITE_LOG: argv array length = %{public}d\", length);\n    std::vector<float> input_data;\n    double param = 0;\n    for (int i = 0; i < length; i++) {\n        napi_value value;\n        napi_get_element(env, argv[0], i, &value);\n        napi_get_value_double(env, value, &param);\n        input_data.push_back(static_cast<float>(param));\n    }\n    std::stringstream outstr;\n    for (int i = 0; i < K_NUM_PRINT_OF_OUT_DATA; i++) {\n        outstr << input_data[i] << \" \";\n    }\n    LOGI(\"MS_LITE_LOG: input_data = %{public}s\", outstr.str().c_str());\n    // Read model file\n    const std::string modelName = \"mobilenetv2.ms\";\n    LOGI(\"MS_LITE_LOG: Run model: %{public}s\", modelName.c_str());\n    size_t modelSize;\n    auto resourcesManager = OH_ResourceManager_InitNativeResourceManager(env, argv[1]);\n    auto modelBuffer = ReadModelFile(resourcesManager, modelName, &modelSize);\n    if (modelBuffer == nullptr) {\n        LOGE(\"MS_LITE_ERR: Read model failed\");\n        return error_ret;\n    }\n    LOGI(\"MS_LITE_LOG: Read model file success\");\n    \n    auto context = CreateMSLiteContext(modelBuffer);\n    if (context == nullptr) {\n        LOGE(\"MS_LITE_ERR: MSLiteFwk Build context failed.\\n\");\n        return error_ret;\n    }\n    auto model = CreateMSLiteModel(modelBuffer, modelSize, context);\n    if (model == nullptr) {\n        OH_AI_ContextDestroy(&context);\n        LOGE(\"MS_LITE_ERR: MSLiteFwk Build model failed.\\n\");\n        return error_ret;\n    }\n    int ret = RunMSLiteModel(model, input_data);\n    if (ret != OH_AI_STATUS_SUCCESS) {\n        OH_AI_ModelDestroy(&model);\n        OH_AI_ContextDestroy(&context);\n        LOGE(\"MS_LITE_ERR: RunMSLiteModel failed.\\n\");\n        return error_ret;\n    }\n    napi_value out_data;\n    napi_create_array(env, &out_data);\n    auto outputs = OH_AI_ModelGetOutputs(model);\n    OH_AI_TensorHandle output_0 = outputs.handle_list[0];\n    float *output0Data = reinterpret_cast<float *>(OH_AI_TensorGetMutableData(output_0));\n    for (size_t i = 0; i < OH_AI_TensorGetElementNum(output_0); i++) {\n        napi_value element;\n        napi_create_double(env, static_cast<double>(output0Data[i]), &element);\n        napi_set_element(env, out_data, i, element);\n    }\n    OH_AI_ModelDestroy(&model);\n    OH_AI_ContextDestroy(&context);\n    LOGI(\"MS_LITE_LOG: Exit runDemo()\");\n    return out_data;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编写CMake脚本，链接MindSpore Lite动态库。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "# the minimum version of CMake.\ncmake_minimum_required(VERSION 3.4.1)\nproject(MindSporeLiteCDemo)\n\nset(NATIVERENDER_PATH ${CMAKE_CURRENT_SOURCE_DIR})\n\nif(DEFINED PACKAGE_FIND_FILE)\n    include(${PACKAGE_FIND_FILE})\nendif()\n\ninclude_directories(${NATIVERENDER_PATH}\n                    ${NATIVERENDER_PATH}/include)\n\nadd_library(entry SHARED mslite_napi.cpp)\ntarget_link_libraries(entry PUBLIC mindspore_lite_ndk)\ntarget_link_libraries(entry PUBLIC hilog_ndk.z)\ntarget_link_libraries(entry PUBLIC rawfile.z)\ntarget_link_libraries(entry PUBLIC ace_napi.z)\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用n-api将c动态库封装成arkts模块",
      children: "使用N-API将C++动态库封装成ArkTS模块"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在 entry/src/main/cpp/types/libentry/Index.d.ts，定义ArkTS接口runDemo() 。内容如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "export const runDemo: (a: number[], b:Object) => Array<number>;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在 oh-package.json5 文件，将API与so相关联，成为一个完整的ArkTS模块："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"name\": \"libentry.so\",\n  \"types\": \"./Index.d.ts\",\n  \"version\": \"1.0.0\",\n  \"description\": \"MindSpore Lite inference module\"\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "实现图像输入和预处理并执行推理",
      children: "实现图像输入和预处理，并执行推理"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["此处以获取相册图片为例，调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/core-file-api/core-file-arkts/js-apis-file-picker/js-apis-file-picker",
          children: "@ohos.file.picker"
        }), " 实现相册图片文件的选择。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["根据模型的输入尺寸，调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image/arkts-apis-image",
          children: "@ohos.multimedia.image"
        }), " （实现图片处理）、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/core-file-api/core-file-arkts/js-apis-file-fs/js-apis-file-fs",
          children: "@ohos.file.fs"
        }), " （实现基础文件操作） API对选择图片进行裁剪、获取图片buffer数据，并进行标准化处理。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在 entry/src/main/ets/pages/Index.ets 中，调用封装的ArkTS模块，最后对推理结果进行处理。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Index.ets\nimport msliteNapi from 'libentry.so';\nimport { photoAccessHelper } from '@kit.MediaLibraryKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { image } from '@kit.ImageKit';\nimport { fileIo } from '@kit.CoreFileKit';\nimport { abilityAccessCtrl, Permissions } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG = 'MindSporeLite';\nconst PERMISSIONS: Permissions[] = ['ohos.permission.READ_IMAGEVIDEO'];\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'MindSporeLite C Demo';\n  @State modelName: string = 'mobilenetv2.ms';\n  @State modelInputHeight: number = 224;\n  @State modelInputWidth: number = 224;\n  @State uris: Array<string> = [];\n  @State max: number = 0;\n  @State maxIndex: number = 0;\n  @State maxArray: Array<number> = [];\n  @State maxIndexArray: Array<number> = [];\n\n  build() {\n    Row() {\n      Column() {\n        Text(this.message)\n        Button() {\n          Text('photo')\n            .fontSize(30)\n            .fontWeight(FontWeight.Bold)\n        }\n        .onClick(() => {\n          let resMgr = this.getUIContext()?.getHostContext()?.getApplicationContext().resourceManager;\n          if (resMgr === null || resMgr === undefined){\n            hilog.error(0xFF00, TAG, '%{public}s', `MS_LITE_ERR: get resMgr failed.`);\n            return\n          }\n\n          // 获取相册图片\n          // 1.创建图片文件选择实例\n          let photoSelectOptions = new photoAccessHelper.PhotoSelectOptions();\n\n          // 2.设置选择媒体文件类型为IMAGE，设置选择媒体文件的最大数目\n          photoSelectOptions.MIMEType = photoAccessHelper.PhotoViewMIMETypes.IMAGE_TYPE;\n          photoSelectOptions.maxSelectNumber = 1;\n\n          // 3.创建图库选择器实例，调用select()接口拉起图库界面进行文件选择。文件选择成功后，返回photoSelectResult结果集。\n          let photoPicker = new photoAccessHelper.PhotoViewPicker();\n          photoPicker.select(photoSelectOptions,\n            async (err: BusinessError, photoSelectResult: photoAccessHelper.PhotoSelectResult) => {\n              if (err) {\n                hilog.error(0xFF00, TAG, '%{public}s',\n                  `MS_LITE_ERR: PhotoViewPicker.select failed with err: ${JSON.stringify(err)}`);\n                return;\n              }\n              hilog.info(0xFF00, TAG, '%{public}s',\n                `MS_LITE_LOG: PhotoViewPicker.select successfully, uri: ${JSON.stringify(photoSelectResult)}`);\n              this.uris = photoSelectResult.photoUris;\n              hilog.info(0xFF00, TAG, '%{public}s', `MS_LITE_LOG: uri: ${this.uris}`);\n\n              // 预处理图片数据\n              try {\n                // 1.使用fileIo.openSync接口，通过uri打开这个文件得到fd\n                let file = fileIo.openSync(this.uris[0], fileIo.OpenMode.READ_ONLY);\n                hilog.info(0xFF00, TAG, '%{public}s', `MS_LITE_LOG: file fd: ${file.fd}`);\n\n                // 2.通过fd使用fileIo.readSync接口读取这个文件内的数据\n                let inputBuffer = new ArrayBuffer(4096000);\n                let readLen = fileIo.readSync(file.fd, inputBuffer);\n                hilog.info(0xFF00, TAG, '%{public}s',\n                  `MS_LITE_LOG: readSync data to file succeed and inputBuffer size is: ${readLen}`);\n\n                // 3.通过PixelMap预处理\n                let imageSource = image.createImageSource(file.fd);\n                if (imageSource === undefined) {\n                  hilog.error(0xFF00, TAG, '%{public}s', `MS_LITE_ERR: createImageSource failed.`);\n                  return\n                }\n                imageSource.createPixelMap({ editable: true }).then((pixelMap) => {\n                  pixelMap.getImageInfo().then((info) => {\n                    hilog.info(0xFF00, TAG, '%{public}s',\n                      `MS_LITE_LOG: info.width = ${info.size.width}`);\n                    hilog.info(0xFF00, TAG, '%{public}s',\n                      `MS_LITE_LOG: info.height = ${info.size.height}`);\n\n                    // 4.根据模型输入的尺寸，将图片裁剪为对应的size，获取图片buffer数据readBuffer\n                    pixelMap.scale(256.0 / info.size.width, 256.0 / info.size.height).then(() => {\n                      pixelMap.crop({\n                        x: 16,\n                        y: 16,\n                        size: { height: this.modelInputHeight, width: this.modelInputWidth }\n                      }).then(async () => {\n                        let info = await pixelMap.getImageInfo();\n                        hilog.info(0xFF00, TAG, '%{public}s',\n                          `MS_LITE_LOG: crop info.width = ${info.size.width}`);\n                        hilog.info(0xFF00, TAG, '%{public}s',\n                          `MS_LITE_LOG: crop info.height = ${info.size.height}`);\n                        // 需要创建的像素buffer大小\n                        let readBuffer = new ArrayBuffer(this.modelInputHeight * this.modelInputWidth * 4);\n                        await pixelMap.readPixelsToBuffer(readBuffer);\n                        hilog.info(0xFF00, TAG, '%{public}s',\n                          `MS_LITE_LOG: Succeeded in reading image pixel data, buffer: ${readBuffer.byteLength}`);\n                        // 处理readBuffer，转换成float32格式，并进行标准化处理\n                        const imageArr =\n                          new Uint8Array(readBuffer.slice(0, this.modelInputHeight * this.modelInputWidth * 4));\n                        hilog.info(0xFF00, TAG, '%{public}s',\n                          `MS_LITE_LOG: imageArr length: ${imageArr.length}`);\n\n                        let means = [0.485, 0.456, 0.406];\n                        let stds = [0.229, 0.224, 0.225];\n                        let float32View = new Float32Array(this.modelInputHeight * this.modelInputWidth * 3);\n                        let index = 0;\n                        for (let i = 0; i < imageArr.length; i++) {\n                          if ((i + 1) % 4 === 0) {\n                            float32View[index] = (imageArr[i - 3] / 255.0 - means[0]) / stds[0]; // B\n                            float32View[index+1] = (imageArr[i - 2] / 255.0 - means[1]) / stds[1]; // G\n                            float32View[index+2] = (imageArr[i - 1] / 255.0 - means[2]) / stds[2]; // R\n                            index += 3;\n                          }\n                        }\n                        hilog.info(0xFF00, TAG, '%{public}s',\n                          `MS_LITE_LOG: float32View length: ${float32View.length}`);\n                        let printStr = 'float32View data:';\n                        for (let i = 0; i < 20; i++) {\n                          printStr += ' ' + float32View[i];\n                        }\n                        hilog.info(0xFF00, TAG, '%{public}s',\n                          `MS_LITE_LOG: float32View data: ${printStr}`);\n\n                        // 调用c++的runDemo\n                        hilog.info(0xFF00, TAG, '%{public}s',\n                          `MS_LITE_LOG: *** Start MSLite Demo ***`);\n\n                        let output: Array<number> = msliteNapi.runDemo(Array.from(float32View), resMgr);\n                        hilog.info(0xFF00, TAG, '%{public}s',\n                          `MS_LITE_WARN: output length = ${output.length}, value = ${output.slice(0, 20)}`);\n\n                        // 取分类占比的最大值top5\n                        this.max = 0;\n                        this.maxIndex = 0;\n                        this.maxArray = [];\n                        this.maxIndexArray = [];\n                        let newArray = output.filter(value => value !== this.max);\n                        for (let n = 0; n < 5; n++) {\n                          this.max = output[0];\n                          this.maxIndex = 0;\n                          // 取最大值\n                          for (let m = 0; m < newArray.length; m++) {\n                            if (newArray[m] > this.max) {\n                              this.max = newArray[m];\n                              this.maxIndex = m;\n                            }\n                          }\n                          this.maxArray.push(Math.round(this.max * 10000));\n                          this.maxIndexArray.push(this.maxIndex);\n                          // filter数组过滤函数\n                          newArray = newArray.filter(value => value !== this.max);\n                        }\n                        hilog.info(0xFF00, TAG, '%{public}s',\n                          `MS_LITE_LOG: max: ${this.maxArray}`);\n                        hilog.info(0xFF00, TAG, '%{public}s',\n                          `MS_LITE_LOG: maxIndex: ${this.maxIndexArray}`);\n\n                        hilog.info(0xFF00, TAG, '%{public}s',\n                          `MS_LITE_LOG: *** Finished MSLite Demo ***`);\n                      }).catch((error: BusinessError) => {\n                        hilog.error(0xFF00, TAG, '%{public}s',\n                          `MS_LITE_ERR: getRawFileContent promise error is: ${error}`);\n                      })\n                    })\n                    // 5.关闭文件\n                    fileIo.closeSync(file);\n                  })\n                })\n              } catch (err) {\n                hilog.error(0xFF00, TAG, '%{public}s',\n                  `MS_LITE_ERR: uri: open file fd failed. ${err}`);\n              }\n            })\n        })\n      }.width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "调测验证",
      children: "调测验证"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在DevEco Studio中连接设备，点击Run entry，编译Hap，有如下显示："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Launching com.samples.mindsporelitecdemo\n$ hdc shell aa force-stop com.samples.mindsporelitecdemo\n$ hdc shell mkdir data/local/tmp/xxx\n$ hdc file send C:\\Users\\xxx\\MindSporeLiteCDemo\\entry\\build\\default\\outputs\\default\\entry-default-signed.hap \"data/local/tmp/xxx\"\n$ hdc shell bm install -p data/local/tmp/xxx\n$ hdc shell rm -rf data/local/tmp/xxx\n$ hdc shell aa start -a EntryAbility -b com.samples.mindsporelitecdemo\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在设备屏幕点击photo按钮，选择图片，点击确定。设备屏幕显示所选图片的分类结果，在日志打印结果中，过滤关键字”MS_LITE“，可得到如下结果："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "08-05 17:15:52.001   4684-4684    A03d00/JSAPP                   pid-4684              I     MS_LITE_LOG: PhotoViewPicker.select successfully, photoSelectResult uri: {\"photoUris\":[\"file://media/Photo/13/IMG_1501955351_012/plant.jpg\"]}\n...\n08-05 17:15:52.627   4684-4684    A03d00/JSAPP                   pid-4684              I     MS_LITE_LOG: crop info.width = 224\n08-05 17:15:52.627   4684-4684    A03d00/JSAPP                   pid-4684              I     MS_LITE_LOG: crop info.height = 224\n08-05 17:15:52.628   4684-4684    A03d00/JSAPP                   pid-4684              I     MS_LITE_LOG: Succeeded in reading image pixel data, buffer: 200704\n08-05 17:15:52.971   4684-4684    A03d00/JSAPP                   pid-4684              I     MS_LITE_LOG: float32View data: float32View data: 1.2385478019714355 1.308123230934143 1.4722440242767334 1.2385478019714355 1.308123230934143 1.4722440242767334 1.2385478019714355 1.308123230934143 1.4722440242767334 1.2385478019714355 1.308123230934143 1.4722440242767334 1.2385478019714355 1.308123230934143 1.4722440242767334 1.2385478019714355 1.308123230934143 1.4722440242767334 1.2385478019714355 1.308123230934143\n08-05 17:15:52.971   4684-4684    A03d00/JSAPP                   pid-4684              I     MS_LITE_LOG: *** Start MSLite Demo ***\n08-05 17:15:53.454   4684-4684    A00000/[MSLiteNapi]            pid-4684              I     MS_LITE_LOG: Build MSLite model success.\n08-05 17:15:53.753   4684-4684    A00000/[MSLiteNapi]            pid-4684              I     MS_LITE_LOG: Run MSLite model Predict success.\n08-05 17:15:53.753   4684-4684    A00000/[MSLiteNapi]            pid-4684              I     MS_LITE_LOG: Get model outputs:\n08-05 17:15:53.753   4684-4684    A00000/[MSLiteNapi]            pid-4684              I     MS_LITE_LOG: - Tensor 0 name is: Default/head-MobileNetV2Head/Sigmoid-op466.\n08-05 17:15:53.753   4684-4684    A00000/[MSLiteNapi]            pid-4684              I     MS_LITE_LOG: - Tensor data is:\n08-05 17:15:53.753   4684-4684    A00000/[MSLiteNapi]            pid-4684              I     MS_LITE_LOG: 3.43385e-06 1.40285e-05 9.11969e-07 4.91007e-05 9.50266e-07 3.94537e-07 0.0434676 3.97196e-05 0.00054832 0.000246202 1.576e-05 3.6494e-06 1.23553e-05 0.196977 5.3028e-05 3.29346e-05 4.90475e-07 1.66109e-06 7.03273e-06 8.83677e-07 3.1365e-06\n08-05 17:15:53.781   4684-4684    A03d00/JSAPP                   pid-4684              W     MS_LITE_WARN: output length =  500 ;value =  0.0000034338463592575863,0.000014028532859811094,9.119685273617506e-7,0.000049100715841632336,9.502661555416125e-7,3.945370394831116e-7,0.04346757382154465,0.00003971960904891603,0.0005483203567564487,0.00024620210751891136,0.000015759984307806008,0.0000036493988773145247,0.00001235533181898063,0.1969769448041916,0.000053027983085485175,0.000032934600312728435,4.904751449430478e-7,0.0000016610861166554969,0.000007032729172351537,8.836767619868624e-7\n08-05 17:15:53.831   4684-4684    A03d00/JSAPP                   pid-4684              I     MS_LITE_LOG: max:9497,7756,1970,435,46\n08-05 17:15:53.831   4684-4684    A03d00/JSAPP                   pid-4684              I     MS_LITE_LOG: maxIndex:323,46,13,6,349\n08-05 17:15:53.831   4684-4684    A03d00/JSAPP                   pid-4684              I     MS_LITE_LOG: *** Finished MSLite Demo ***\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "效果示意",
      children: "效果示意"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在设备上，点击photo按钮，选择相册中的一张图片，点击确定。在图片下方显示此图片占比前4的分类信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(551604)/* ["default"] */.A) + "",
        width: "342",
        height: "597"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(465040)/* ["default"] */.A) + "",
        width: "391",
        height: "669"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(639157)/* ["default"] */.A) + "",
        width: "395",
        height: "619"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(79992)/* ["default"] */.A) + "",
        width: "345",
        height: "662"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/HarmonyOS_Samples/guide-snippets/tree/master/MindSporeLiteKit/MindSporeLiteCDemo",
          children: "基于MindSporeLite接口实现图像分类（C/C++）"
        })
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
551604(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959348-4640f216ec0a55fc3eac663a48b75490.png");

},
79992(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479349-9d36a562f654349a14e68ee110d1b55a.png");

},
465040(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479347-d303046a8350f6dfbc8affc375410067.png");

},
639157(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799698-56ef020073bfb83dc7ebbb4279b6be85.png");

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