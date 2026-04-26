"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["823930"], {
330929(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_mindspore_lite_kit_mindspore_asr_based_native_mindspore_asr_based_native_md_0a5_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-mindspore-lite-kit-mindspore-asr-based-native-mindspore-asr-based-native-md-0a5.json
var site_docs_mindspore_lite_kit_mindspore_asr_based_native_mindspore_asr_based_native_md_0a5_namespaceObject = JSON.parse('{"id":"mindspore-lite-kit/mindspore-asr-based-native/mindspore-asr-based-native","title":"使用MindSpore Lite实现语音识别（C/C++）","description":"场景说明","source":"@site/docs/mindspore-lite-kit/mindspore-asr-based-native/mindspore-asr-based-native.md","sourceDirName":"mindspore-lite-kit/mindspore-asr-based-native","slug":"/mindspore-lite-kit/mindspore-asr-based-native/","permalink":"/harmonyos-docs-site/mindspore-lite-kit/mindspore-asr-based-native/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"使用MindSpore Lite实现语音识别（C/C++）","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/mindspore-asr-based-native","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用MindSpore Lite实现图像分类（C/C++）","permalink":"/harmonyos-docs-site/mindspore-lite-kit/mindspore-guidelines-based-native/"},"next":{"title":"MindSpore Lite Kit算子支持列表","permalink":"/harmonyos-docs-site/mindspore-lite-kit/mindspore-lite-appendix/mindspore-lite-supported-operators/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/mindspore-lite-kit/mindspore-asr-based-native/mindspore-asr-based-native.md


const frontMatter = {
	title: '使用MindSpore Lite实现语音识别（C/C++）',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/mindspore-asr-based-native',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '使用MindSpore Lite实现语音识别（C/C++）';

const assets = {

};



const toc = [{
  "value": "场景说明",
  "id": "场景说明",
  "level": 2
}, {
  "value": "环境配置",
  "id": "环境配置",
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
  "value": "编写播放音频代码",
  "id": "编写播放音频代码",
  "level": 3
}, {
  "value": "编写识别音频代码",
  "id": "编写识别音频代码",
  "level": 3
}, {
  "value": "使用N-API将C++动态库封装成ArkTS模块",
  "id": "使用n-api将c动态库封装成arkts模块",
  "level": 3
}, {
  "value": "调用封装的ArkTS模块进行推理并输出结果",
  "id": "调用封装的arkts模块进行推理并输出结果",
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
        id: "使用mindspore-lite实现语音识别cc",
        children: "使用MindSpore Lite实现语音识别（C/C++）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景说明",
      children: "场景说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-module/capi-mindspore/capi-mindspore",
        children: "MindSpore"
      }), "，在UI代码中集成MindSpore Lite能力，快速部署AI算法，进行AI模型推理，实现语音识别的应用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "语音识别可以将一段音频信息转换为文本，在智能语音助手、语音输入、语音搜索等领域有广泛的应用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "环境配置",
      children: "环境配置"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["若需要使用模拟器运行该示例，请参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-run-emulator",
        children: "使用模拟器运行应用"
      })]
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
        children: "选择语音识别模型。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在端侧使用MindSpore Lite推理模型，实现对语音文件的语音识别。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文以对语音识别模型进行推理为例，提供使用MindSpore Lite实现语音识别应用的开发指导。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "选择模型",
      children: "选择模型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本示例程序中使用的语音识别模型文件为tiny-encoder.ms、tiny-decoder-main.ms、tiny-decoder-loop.ms，放置在entry/src/main/resources/rawfile工程目录下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "编写播放音频代码",
      children: "编写播放音频代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media/arkts-apis-media",
        children: "@ohos.multimedia.media"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio/arkts-apis-audio",
        children: "@ohos.multimedia.audio"
      }), "，实现播放音频的功能。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// player.ets\nimport { media } from '@kit.MediaKit';\nimport { common } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { audio } from '@kit.AudioKit';\nimport { UIContext } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG = 'MindSporeLite';\n\nexport default class AVPlayerDemo {\n  private isSeek: boolean = false; // 用于区分模式是否支持seek操作。\n  // 注册avplayer回调函数。\n  setAVPlayerCallback(avPlayer: media.AVPlayer) {\n    // seek操作结果回调函数。\n    avPlayer.on('seekDone', (seekDoneTime: number) => {\n      hilog.info(0xFF00, TAG, '%{public}s', `MS_LITE_LOG: AVPlayer seek succeeded, seek time is ${seekDoneTime}`);\n    });\n    // error回调监听函数，当avPlayer在操作过程中出现错误时调用reset接口触发重置流程。\n    avPlayer.on('error', (err: BusinessError) => {\n      hilog.error(0xFF00, TAG, '%{public}s',\n        `MS_LITE_ERR: Invoke avPlayer failed, code is ${err.code}, message is ${err.message}`);\n      avPlayer.reset(); // 调用reset重置资源，触发idle状态。\n    });\n    // 状态机变化回调函数。\n    avPlayer.on('stateChange', async (state: string, reason: media.StateChangeReason) => {\n      switch (state) {\n        case 'idle': // 成功调用reset接口后触发该状态机上报。\n          hilog.info(0xFF00, TAG, '%{public}s', 'MS_LITE_LOG: AVPlayer state idle called.');\n          avPlayer.release(); // 调用release接口销毁实例对象。\n          break;\n        case 'initialized': // avplayer 设置播放源后触发该状态上报。\n          hilog.info(0xFF00, TAG, '%{public}s', 'MS_LITE_LOG: AVPlayer state initialized called.');\n          avPlayer.audioRendererInfo = {\n            usage: audio.StreamUsage.STREAM_USAGE_MUSIC, // 音频流使用类型：音乐。根据业务场景配置。\n            rendererFlags: 0 // 音频渲染器标志。\n          };\n          avPlayer.prepare();\n          break;\n        case 'prepared': // prepare调用成功后上报该状态机。\n          hilog.info(0xFF00, TAG, '%{public}s', 'MS_LITE_LOG: AVPlayer state prepared called.');\n          avPlayer.play(); // 调用播放接口开始播放。\n          break;\n        case 'playing': // play成功调用后触发该状态机上报。\n          hilog.info(0xFF00, TAG, '%{public}s', 'MS_LITE_LOG: AVPlayer state playing called.');\n          if (this.isSeek) {\n            hilog.info(0xFF00, TAG, '%{public}s', 'MS_LITE_LOG: AVPlayer start to seek.');\n            avPlayer.seek(0); // 将播放位置移动到音频的开始。\n          } else {\n            // 当播放模式不支持seek操作时继续播放到结尾。\n            hilog.info(0xFF00, TAG, '%{public}s', 'MS_LITE_LOG: AVPlayer wait to play end.');\n          }\n          break;\n        case 'paused': // pause成功调用后触发该状态机上报。\n          hilog.info(0xFF00, TAG, '%{public}s', 'MS_LITE_LOG: AVPlayer state paused called.');\n          setTimeout(() => {\n            hilog.info(0xFF00, TAG, '%{public}s', 'MS_LITE_LOG: AVPlayer paused wait to play again');\n            avPlayer.play(); // 暂停3s后再次调用播放接口开始播放。\n          }, 3000);\n          break;\n        case 'completed': // 播放结束后触发该状态机上报。\n          hilog.info(0xFF00, TAG, '%{public}s', 'MS_LITE_LOG: AVPlayer state completed called.');\n          avPlayer.stop(); // 调用播放结束接口。\n          break;\n        case 'stopped': // stop接口成功调用后触发该状态机上报。\n          hilog.info(0xFF00, TAG, '%{public}s', 'MS_LITE_LOG: AVPlayer state stopped called.');\n          avPlayer.reset(); // 调用reset接口初始化avplayer状态。\n          break;\n        case 'released':\n          hilog.info(0xFF00, TAG, '%{public}s', 'MS_LITE_LOG: AVPlayer state released called.');\n          break;\n        default:\n          hilog.info(0xFF00, TAG, '%{public}s', 'MS_LITE_LOG: AVPlayer state unknown called.');\n          break;\n      }\n    });\n  }\n\n  // 使用资源管理接口获取音频文件并通过fdSrc属性进行播放。\n  async avPlayerFdSrcDemo() {\n    // 创建avPlayer实例对象。\n    let avPlayer: media.AVPlayer = await media.createAVPlayer();\n    // 创建状态机变化回调函数。\n    this.setAVPlayerCallback(avPlayer);\n    // 通过UIAbilityContext的resourceManager成员的getRawFd接口获取媒体资源播放地址。\n    // 返回类型为{fd,offset,length},fd为HAP包fd地址，offset为媒体资源偏移量，length为播放长度。\n    let context = new UIContext().getHostContext() as common.UIAbilityContext;\n    let fileDescriptor = await context.resourceManager.getRawFd('zh.wav');\n    let avFileDescriptor: media.AVFileDescriptor =\n      { fd: fileDescriptor.fd, offset: fileDescriptor.offset, length: fileDescriptor.length };\n    this.isSeek = true; // 支持seek操作。\n    // 为fdSrc赋值触发initialized状态机上报。\n    avPlayer.fdSrc = avFileDescriptor;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "编写识别音频代码",
      children: "编写识别音频代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在 entry/src/main/cpp/mslite_napi.cpp，调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-module/capi-mindspore/capi-mindspore",
        children: "MindSpore"
      }), "，依次对3个模型进行推理，推理代码流程如下。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["引用对应的头文件。说明：需要用户下载三方库，其中librosa来源是", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://github.com/ewan-xu/LibrosaCpp",
            children: "LibrosaCpp"
          }), "，libsamplerate来源是", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://github.com/libsndfile/libsamplerate",
            children: "libsamplerate"
          }), "，下载后置于entry/src/main/cpp/third_party目录下。AudioFile.h的来源是", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://github.com/adamstark/AudioFile/blob/1.1.2/AudioFile.h",
            children: "AudioFile"
          }), "，base64.h、base64.cpp的来源是", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://github.com/ml-inory/whisper.axera/tree/main/cpp/src",
            children: "whisper.axera"
          }), "下载后置于entry/src/main/cpp/src目录下。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include \"AudioFile.h\"\n#include \"base64.h\"\n#include \"napi/native_api.h\"\n#include \"utils.h\"\n#include <algorithm>\n#include <cstdlib>\n#include <fstream>\n#include <hilog/log.h>\n#include <iostream>\n#include <librosa/librosa.h>\n#include <mindspore/context.h>\n#include <mindspore/model.h>\n#include <mindspore/status.h>\n#include <mindspore/tensor.h>\n#include <mindspore/types.h>\n#include <numeric> \n#include <rawfile/raw_file_manager.h>\n#include <sstream>\n#include <vector>\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "读取音频文件、模型文件等，转换为buffer数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#define LOGI(...) ((void)OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, \"[MSLiteNapi]\", __VA_ARGS__))\n#define LOGD(...) ((void)OH_LOG_Print(LOG_APP, LOG_DEBUG, LOG_DOMAIN, \"[MSLiteNapi]\", __VA_ARGS__))\n#define LOGW(...) ((void)OH_LOG_Print(LOG_APP, LOG_WARN, LOG_DOMAIN, \"[MSLiteNapi]\", __VA_ARGS__))\n#define LOGE(...) ((void)OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_DOMAIN, \"[MSLiteNapi]\", __VA_ARGS__))\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "using BinBuffer = std::pair<void *, size_t>;\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "BinBuffer ReadBinFile(NativeResourceManager *nativeResourceManager, const std::string &modelName)\n{\n    auto rawFile = OH_ResourceManager_OpenRawFile(nativeResourceManager, modelName.c_str());\n    if (rawFile == nullptr) {\n        LOGE(\"MS_LITE_ERR: Open model file failed\");\n        return BinBuffer(nullptr, 0);\n    }\n    long fileSize = OH_ResourceManager_GetRawFileSize(rawFile);\n    if (fileSize <= 0) {\n        LOGE(\"MS_LITE_ERR: FileSize not correct\");\n        return BinBuffer(nullptr, 0);\n    }\n    void *buffer = malloc(fileSize);\n    if (buffer == nullptr) {\n        LOGE(\"MS_LITE_ERR: OH_ResourceManager_ReadRawFile failed\");\n        return BinBuffer(nullptr, 0);\n    }\n    int ret = OH_ResourceManager_ReadRawFile(rawFile, buffer, fileSize);\n    if (ret == 0) {\n        LOGE(\"MS_LITE_ERR: OH_ResourceManager_ReadRawFile failed\");\n        OH_ResourceManager_CloseRawFile(rawFile);\n        return BinBuffer(nullptr, 0);\n    }\n    OH_ResourceManager_CloseRawFile(rawFile);\n    return BinBuffer(buffer, fileSize);\n}\n\nBinBuffer ReadTokens(NativeResourceManager *nativeResourceManager, const std::string &modelName)\n{\n    auto rawFile = OH_ResourceManager_OpenRawFile(nativeResourceManager, modelName.c_str());\n    if (rawFile == nullptr) {\n        LOGE(\"MS_LITE_ERR: Open model file failed\");\n        return BinBuffer(nullptr, 0);\n    }\n    long fileSize = OH_ResourceManager_GetRawFileSize(rawFile);\n    if (fileSize <= 0) {\n        LOGE(\"MS_LITE_ERR: FileSize not correct\");\n        return BinBuffer(nullptr, 0);\n    }\n    void *buffer = malloc(fileSize);\n    if (buffer == nullptr) {\n        LOGE(\"MS_LITE_ERR: OH_ResourceManager_ReadRawFile failed\");\n        return BinBuffer(nullptr, 0);\n    }\n    int ret = OH_ResourceManager_ReadRawFile(rawFile, buffer, fileSize);\n    if (ret == 0) {\n        LOGE(\"MS_LITE_ERR: OH_ResourceManager_ReadRawFile failed\");\n        OH_ResourceManager_CloseRawFile(rawFile);\n        return BinBuffer(nullptr, 0);\n    }\n    OH_ResourceManager_CloseRawFile(rawFile);\n    BinBuffer res(buffer, fileSize);\n    return res;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建上下文，设置设备类型，并加载模型。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "void DestroyModelBuffer(void **buffer)\n{\n    if (buffer == nullptr) {\n        return;\n    }\n    free(*buffer);\n    *buffer = nullptr;\n}\n\nOH_AI_ModelHandle CreateMSLiteModel(BinBuffer &bin)\n{\n    // 创建并配置上下文\n    auto context = OH_AI_ContextCreate();\n    if (context == nullptr) {\n        DestroyModelBuffer(&bin.first);\n        LOGE(\"MS_LITE_ERR: Create MSLite context failed.\\n\");\n        return nullptr;\n    }\n    auto cpu_device_info = OH_AI_DeviceInfoCreate(OH_AI_DEVICETYPE_CPU);\n    OH_AI_DeviceInfoSetEnableFP16(cpu_device_info, false);\n    OH_AI_ContextAddDeviceInfo(context, cpu_device_info);\n\n    // 创建模型\n    auto model = OH_AI_ModelCreate();\n    if (model == nullptr) {\n        DestroyModelBuffer(&bin.first);\n        LOGE(\"MS_LITE_ERR: Allocate MSLite Model failed.\\n\");\n        return nullptr;\n    }\n\n    // 加载与编译模型，模型的类型为OH_AI_MODELTYPE_MINDIR\n    auto build_ret = OH_AI_ModelBuild(model, bin.first, bin.second, OH_AI_MODELTYPE_MINDIR, context);\n    DestroyModelBuffer(&bin.first);\n    if (build_ret != OH_AI_STATUS_SUCCESS) {\n        OH_AI_ModelDestroy(&model);\n        LOGE(\"MS_LITE_ERR: Build MSLite model failed.\\n\");\n        return nullptr;\n    }\n    LOGI(\"MS_LITE_LOG: Build MSLite model success.\\n\");\n    return model;\n}\n"
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
            children: "int FillInputTensor(OH_AI_TensorHandle input, const BinBuffer &bin)\n{\n    if (OH_AI_TensorGetDataSize(input) != bin.second) {\n        return OH_AI_STATUS_LITE_INPUT_PARAM_INVALID;\n    }\n    char *data = (char *)OH_AI_TensorGetMutableData(input);\n    memcpy(data, (const char *)bin.first, OH_AI_TensorGetDataSize(input));\n    return OH_AI_STATUS_SUCCESS;\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 执行模型推理\nint RunMSLiteModel(OH_AI_ModelHandle model, std::vector<BinBuffer> inputBins)\n{\n    // 设置模型的输入数据\n    auto inputs = OH_AI_ModelGetInputs(model);\n    for(int i = 0; i < inputBins.size(); i++)\n    {\n        auto ret = FillInputTensor(inputs.handle_list[i], inputBins[i]);\n        if (ret != OH_AI_STATUS_SUCCESS) {\n            LOGE(\"MS_LITE_ERR: set input %{public}d error.\\n\", i);\n            return OH_AI_STATUS_LITE_ERROR;\n        }\n    }\n\n    // 获取模型的输出张量\n    auto outputs = OH_AI_ModelGetOutputs(model);\n\n    // 模型推理\n    auto predict_ret = OH_AI_ModelPredict(model, inputs, &outputs, nullptr, nullptr);\n    if (predict_ret != OH_AI_STATUS_SUCCESS) {\n        OH_AI_ModelDestroy(&model);\n        LOGE(\"MS_LITE_ERR: MSLite Predict error.\\n\");\n        return OH_AI_STATUS_LITE_ERROR;\n    }\n    LOGD(\"MS_LITE_LOG: Run MSLite model Predict success.\\n\");\n\n    // 打印输出数据\n    LOGD(\"MS_LITE_LOG: Get model outputs:\\n\");\n    for (size_t i = 0; i < outputs.handle_num; i++) {\n        auto tensor = outputs.handle_list[i];\n        LOGD(\"MS_LITE_LOG: - Tensor %{public}d name is: %{public}s.\\n\", static_cast<int>(i),\n             OH_AI_TensorGetName(tensor));\n        LOGD(\"MS_LITE_LOG: - Tensor %{public}d size is: %{public}d.\\n\", static_cast<int>(i),\n             (int)OH_AI_TensorGetDataSize(tensor));\n        LOGD(\"MS_LITE_LOG: - Tensor data is:\\n\");\n        auto out_data = reinterpret_cast<const float *>(OH_AI_TensorGetData(tensor));\n        std::stringstream outStr;\n        for (int i = 0; (i < OH_AI_TensorGetElementNum(tensor)) && (i <= K_NUM_PRINT_OF_OUT_DATA); i++) {\n            outStr << out_data[i] << \" \";\n        }\n        LOGD(\"MS_LITE_LOG: %{public}s\", outStr.str().c_str());\n    }\n    return OH_AI_STATUS_SUCCESS;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用以上方法，实现3个模型的推理流程。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const float NEG_INF = -std::numeric_limits<float>::infinity();\nconst int WHISPER_SOT = 50258;\nconst int WHISPER_TRANSCRIBE = 50359;\nconst int WHISPER_TRANSLATE = 50358;\nconst int WHISPER_NO_TIMESTAMPS = 50363;\nconst int WHISPER_EOT = 50257;\nconst int WHISPER_BLANK = 220;\nconst int WHISPER_NO_SPEECH = 50362;\nconst int WHISPER_N_TEXT_CTX = 448;\nconst int WHISPER_N_TEXT_STATE = 384;\nconstexpr int WHISPER_SAMPLE_RATE = 16000;\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "BinBuffer GetMSOutput(OH_AI_TensorHandle output)\n{\n    float *outputData = reinterpret_cast<float *>(OH_AI_TensorGetMutableData(output));\n    size_t size = OH_AI_TensorGetDataSize(output);\n    return {outputData, size};\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "void SuppressTokens(BinBuffer &logits, bool isInitial)\n{\n    auto logits_data = static_cast<float *>(logits.first);\n    if (isInitial) {\n        logits_data[WHISPER_EOT] = NEG_INF;\n        logits_data[WHISPER_BLANK] = NEG_INF;\n    }\n\n    // 其他令牌的抑制\n    logits_data[WHISPER_NO_TIMESTAMPS] = NEG_INF;\n    logits_data[WHISPER_SOT] = NEG_INF;\n    logits_data[WHISPER_NO_SPEECH] = NEG_INF;\n    logits_data[WHISPER_TRANSLATE] = NEG_INF;\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "std::vector<int> LoopPredict(const OH_AI_ModelHandle model, const BinBuffer &n_layer_cross_k,\n                             const BinBuffer &n_layer_cross_v, const BinBuffer &logits_init,\n                             BinBuffer &out_n_layer_self_k_cache, BinBuffer &out_n_layer_self_v_cache,\n                             const BinBuffer &data_embedding, const int loop, const int offset_init)\n{\n    BinBuffer logits{nullptr, 51865 * sizeof(float)};\n    logits.first = malloc(logits.second);\n    if (!logits.first) {\n        LOGE(\"MS_LITE_ERR: Fail to malloc!\\n\");\n        return {};\n    }\n    void *logits_init_src = static_cast<char *>(logits_init.first) + 51865 * 3 * sizeof(float);\n    memcpy(logits.first, logits_init_src, logits.second);\n    SuppressTokens(logits, true);\n\n    std::vector<int> output_token;\n    float *logits_data = static_cast<float *>(logits.first);\n    int max_token_id = 0;\n    float max_token = logits_data[0];\n    for (int i = 0; i < logits.second / sizeof(float); i++) {\n        if (logits_data[i] > max_token) {\n            max_token_id = i;\n            max_token = logits_data[i];\n        }\n    }\n\n    int offset = offset_init;\n    BinBuffer slice{nullptr, 0};\n    slice.second = WHISPER_N_TEXT_STATE * sizeof(float);\n    slice.first = malloc(slice.second);\n    if (!slice.first) {\n        LOGE(\"MS_LITE_ERR: Fail to malloc!\\n\");\n        return {};\n    }\n\n    auto out_n_layer_self_k_cache_new = out_n_layer_self_k_cache;\n    auto out_n_layer_self_v_cache_new = out_n_layer_self_v_cache;\n\n    for (size_t i = 0; i < loop; i++) {\n        if (max_token_id == WHISPER_EOT) {\n            break;\n        }\n        output_token.push_back(max_token_id);\n        std::vector<float> mask(WHISPER_N_TEXT_CTX, 0.0f);\n        for (size_t i = 0; i < WHISPER_N_TEXT_CTX - offset - 1; ++i) {\n            mask[i] = NEG_INF;\n        }\n        BinBuffer tokens{&max_token_id, sizeof(int)};\n\n        void *data_embedding_src =\n            static_cast<char *>(data_embedding.first) + offset * WHISPER_N_TEXT_STATE * sizeof(float);\n        memcpy(slice.first, data_embedding_src, slice.second);\n        BinBuffer mask_bin(mask.data(), mask.size() * sizeof(float));\n        int ret = RunMSLiteModel(model, {tokens, out_n_layer_self_k_cache_new, out_n_layer_self_v_cache_new,\n                                         n_layer_cross_k, n_layer_cross_v, slice, mask_bin});\n\n        auto outputs = OH_AI_ModelGetOutputs(model);\n        logits = GetMSOutput(outputs.handle_list[0]);\n        out_n_layer_self_k_cache_new = GetMSOutput(outputs.handle_list[1]);\n        out_n_layer_self_v_cache_new = GetMSOutput(outputs.handle_list[2]);\n        offset++;\n        SuppressTokens(logits, false);\n        logits_data = static_cast<float *>(logits.first);\n        max_token = logits_data[0];\n\n        for (int j = 0; j < logits.second / sizeof(float); j++) {\n            if (logits_data[j] > max_token) {\n                max_token_id = j;\n                max_token = logits_data[j];\n            }\n        }\n        LOGI(\"MS_LITE_LOG: run decoder loop %{public}d ok!\\n token = %{public}d\", i, max_token_id);\n    }\n    return output_token;\n}\n\nstd::vector<std::string> ProcessDataLines(const BinBuffer token_txt)\n{\n    void *data_ptr = token_txt.first;\n    size_t data_size = token_txt.second;\n    std::vector<std::string> tokens;\n\n    const char *char_data = static_cast<const char *>(data_ptr);\n    std::stringstream ss(std::string(char_data, char_data + data_size));\n    std::string line;\n    while (std::getline(ss, line)) {\n        size_t space_pos = line.find(' ');\n        tokens.push_back(line.substr(0, space_pos));\n    }\n    return tokens;\n}\n\nstatic napi_value RunDemo(napi_env env, napi_callback_info info)\n{\n    // 执行样例推理\n    napi_value error_ret;\n    napi_create_int32(env, -1, &error_ret);\n    size_t argc = 1;\n    napi_value argv[1] = {nullptr};\n    napi_get_cb_info(env, info, &argc, argv, nullptr, nullptr);\n    auto resourcesManager = OH_ResourceManager_InitNativeResourceManager(env, argv[0]);\n\n    // 数据预处理\n    AudioFile<float> audioFile;\n    std::string filePath = \"zh.wav\";\n    auto audioBin = ReadBinFile(resourcesManager, filePath);\n    if (audioBin.first == nullptr) {\n        LOGE(\"MS_LITE_ERR: Fail to read  %{public}s!\", filePath.c_str());\n        return error_ret;\n    }\n    size_t dataSize = audioBin.second;\n    uint8_t *dataBuffer = (uint8_t *)audioBin.first;\n    bool ok = audioFile.loadFromMemory(std::vector<uint8_t>(dataBuffer, dataBuffer + dataSize));\n    if (!ok) {\n        LOGE(\"MS_LITE_ERR: Fail to read  %{public}s!\", filePath.c_str());\n        return error_ret;\n    }\n    std::vector<float> data(audioFile.samples[0]);\n    ResampleAudio(data, audioFile.getSampleRate(), WHISPER_SAMPLE_RATE, 1, SRC_SINC_BEST_QUALITY);\n    std::vector<float> audio(data);\n\n    int padding = 480000;\n    int sr = 16000;\n    int n_fft = 480;\n    int n_hop = 160;\n    int n_mel = 80;\n    int fmin = 0; // 最小频率，默认值为0.0 Hz\n    int fmax =\n        sr /\n        2.0; // 最大频率，默认值为采样率（sr/2.0）的一半\n    audio.insert(audio.end(), padding, 0.0f);\n    std::vector<std::vector<float>> mels_T =\n        librosa::Feature::melspectrogram(audio, sr, n_fft, n_hop, \"hann\", true, \"reflect\", 2.f, n_mel, fmin, fmax);\n    std::cout << \"mels: \" << std::endl;\n\n    std::vector<std::vector<float>> mels = TransposeMel(mels_T);\n    ProcessMelSpectrogram(mels);\n\n    std::vector<float> inputMels(mels.size() * mels[0].size(), 0);\n    for (int i = 0; i < mels.size(); i++) {\n        std::copy(mels[i].begin(), mels[i].end(), inputMels.begin() + i * mels[0].size());\n    }\n\n    BinBuffer inputMelsBin(inputMels.data(), inputMels.size() * sizeof(float));\n\n    // tiny-encoder.ms模型推理\n    auto encoderBin = ReadBinFile(resourcesManager, \"tiny-encoder.ms\");\n    if (encoderBin.first == nullptr) {\n        free(dataBuffer);\n        dataBuffer = nullptr;\n        return error_ret;\n    }\n\n    auto encoder = CreateMSLiteModel(encoderBin);\n\n    int ret = RunMSLiteModel(encoder, {inputMelsBin});\n    if (ret != OH_AI_STATUS_SUCCESS) {\n        OH_AI_ModelDestroy(&encoder);\n        return error_ret;\n    }\n    LOGI(\"MS_LITE_LOG: run encoder ok!\\n\");\n\n    auto outputs = OH_AI_ModelGetOutputs(encoder);\n    auto n_layer_cross_k = GetMSOutput(outputs.handle_list[0]);\n    auto n_layer_cross_v = GetMSOutput(outputs.handle_list[1]);\n\n    // tiny-decoder-main.ms模型推理\n    std::vector<int> SOT_SEQUENCE = {WHISPER_SOT,\n                                     WHISPER_SOT + 1 + 1,\n                                     WHISPER_TRANSCRIBE, WHISPER_NO_TIMESTAMPS};\n    BinBuffer sotSequence(SOT_SEQUENCE.data(), SOT_SEQUENCE.size() * sizeof(int));\n\n    const std::string decoder_main_path = \"tiny-decoder-main.ms\";\n    auto decoderMainBin = ReadBinFile(resourcesManager, decoder_main_path);\n    if (decoderMainBin.first == nullptr) {\n        OH_AI_ModelDestroy(&encoder);\n        return error_ret;\n    }\n    auto decoder_main = CreateMSLiteModel(decoderMainBin);\n    int ret2 = RunMSLiteModel(decoder_main, {sotSequence, n_layer_cross_k, n_layer_cross_v});\n\n    if (ret2 != OH_AI_STATUS_SUCCESS) {\n        OH_AI_ModelDestroy(&decoder_main);\n        return error_ret;\n    }\n    LOGI(\"MS_LITE_LOG: run decoder_main ok!\\n\");\n\n    auto decoderMainOut = OH_AI_ModelGetOutputs(decoder_main);\n    auto logitsBin = GetMSOutput(decoderMainOut.handle_list[0]);\n    auto out_n_layer_self_k_cache_Bin = GetMSOutput(decoderMainOut.handle_list[1]);\n    auto out_n_layer_self_v_cache_Bin = GetMSOutput(decoderMainOut.handle_list[2]);\n\n    // tiny-decoder-loop.ms模型推理\n    const std::string modelName3 = \"tiny-decoder-loop.ms\";\n    auto modelBuffer3 = ReadBinFile(resourcesManager, modelName3);\n    auto decoder_loop = CreateMSLiteModel(modelBuffer3);\n\n    const std::string dataName_embedding = \"tiny-positional_embedding.bin\"; // 获取输入数据\n    auto data_embedding = ReadBinFile(resourcesManager, dataName_embedding);\n    if (data_embedding.first == nullptr) {\n        OH_AI_ModelDestroy(&encoder);\n        OH_AI_ModelDestroy(&decoder_main);\n        OH_AI_ModelDestroy(&decoder_loop);\n        return error_ret;\n    }\n\n    int loop_times = WHISPER_N_TEXT_CTX - SOT_SEQUENCE.size();\n    int offset_init = SOT_SEQUENCE.size();\n    auto output_tokens =\n        LoopPredict(decoder_loop, n_layer_cross_k, n_layer_cross_v, logitsBin, out_n_layer_self_k_cache_Bin,\n                    out_n_layer_self_v_cache_Bin, data_embedding, loop_times, offset_init);\n\n    std::vector<std::string> token_tables = ProcessDataLines(ReadTokens(resourcesManager, \"tiny-tokens.txt\"));\n    std::string result;\n    for (const auto i : output_tokens) {\n        char str[1024];\n        base64_decode((const uint8 *)token_tables[i].c_str(), (uint32)token_tables[i].size(), str);\n        result += str;\n    }\n    LOGI(\"MS_LITE_LOG: result is -> %{public}s\", result.c_str());\n\n    OH_AI_ModelDestroy(&encoder);\n    OH_AI_ModelDestroy(&decoder_main);\n    OH_AI_ModelDestroy(&decoder_loop);\n\n    napi_value out_data;\n    napi_create_string_utf8(env, result.c_str(), result.length(), &out_data);\n    return out_data;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编写CMake脚本，链接MindSpore Lite动态库。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "# the minimum version of CMake.\ncmake_minimum_required(VERSION 3.5.0)\nproject(test)\n# AudioFile.h\nset(CMAKE_CXX_STANDARD 17)\nset(CMAKE_CXX_STANDARD_REQUIRED TRUE)\nset(NATIVERENDER_PATH ${CMAKE_CURRENT_SOURCE_DIR})\n\nif(DEFINED PACKAGE_FIND_FILE)\n    include(${PACKAGE_FIND_FILE})\nendif()\n\ninclude_directories(${NATIVERENDER_PATH}\n                    ${NATIVERENDER_PATH}/include)\n\n# libsamplerate\nset(LIBSAMPLERATE_DIR ${NATIVERENDER_PATH}/third_party/libsamplerate)\ninclude_directories(${LIBSAMPLERATE_DIR}/include)\nadd_subdirectory(${LIBSAMPLERATE_DIR})\n\ninclude_directories(${NATIVERENDER_PATH}/third_party/opencc/include/opencc)\n# src\naux_source_directory(src SRC_DIR)\ninclude_directories(${NATIVERENDER_PATH}/src)\n\ninclude_directories(${CMAKE_SOURCE_DIR}/third_party)\n\nfile(GLOB SRC src/*.cc)\n\nadd_library(entry SHARED mslite_napi.cpp ${SRC})\ntarget_link_libraries(entry PUBLIC samplerate)\ntarget_link_libraries(entry PUBLIC mindspore_lite_ndk)\ntarget_link_libraries(entry PUBLIC hilog_ndk.z)\ntarget_link_libraries(entry PUBLIC rawfile.z)\ntarget_link_libraries(entry PUBLIC ace_napi.z)\n"
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
            children: "export const runDemo: (a: Object) => string;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在 oh-package.json5 文件，将API与so相关联，成为一个完整的ArkTS模块："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"name\": \"libentry.so\",\n  \"types\": \"./Index.d.ts\",\n  \"version\": \"1.0.0\",\n  \"description\": \"MindSpore Lite inference module.\"\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "调用封装的arkts模块进行推理并输出结果",
      children: "调用封装的ArkTS模块进行推理并输出结果"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在 entry/src/main/ets/pages/Index.ets 中，调用封装的ArkTS模块，最后对推理结果进行处理。若提示@nutpi/chinese_transverter不存在，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/forum/topic/0202169478029484501?fid=0109140870620153026",
        children: "中文简繁体转换器三方库"
      }), "安装@nutpi/chinese_transverter组件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Index.ets\nimport msliteNapi from 'libentry.so'\nimport AVPlayerDemo from './player';\nimport { transverter, TransverterType, TransverterLanguage } from \"@nutpi/chinese_transverter\"\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG = 'MindSporeLite';\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'MSLite Whisper Demo';\n  @State wavName: string = 'zh.wav';\n  @State content: string = '';\n\n  build() {\n    Row() {\n      Column() {\n        Text(this.message)\n          .fontSize(30)\n          .fontWeight(FontWeight.Bold);\n        Button() {\n          Text('播放示例音频')\n            .fontSize(20)\n            .fontWeight(FontWeight.Medium)\n        }\n        .type(ButtonType.Capsule)\n        .margin({\n          top: 20\n        })\n        .backgroundColor('#0D9FFB')\n        .width('40%')\n        .height('5%')\n        .onClick(async () =>{\n          // 通过实例调用类中的函数\n          hilog.info(0xFF00, TAG, '%{public}s', `MS_LITE_LOG: begin to play wav.`);\n          let myClass = new AVPlayerDemo();\n          myClass.avPlayerFdSrcDemo();\n        })\n        Button() {\n          Text('识别示例音频')\n            .fontSize(20)\n            .fontWeight(FontWeight.Medium)\n        }\n        .type(ButtonType.Capsule)\n        .margin({\n          top: 20\n        })\n        .backgroundColor('#0D9FFB')\n        .width('40%')\n        .height('5%')\n        .onClick(() => {\n          let resMgr = this.getUIContext()?.getHostContext()?.getApplicationContext().resourceManager;\n          if (resMgr === undefined || resMgr === null) {\n            hilog.error(0xFF00, TAG, '%{public}s', `MS_LITE_ERR: get resourceManager failed.`);\n            return\n          }\n          // 调用封装的runDemo函数\n          hilog.info(0xFF00, TAG, '%{public}s', `MS_LITE_LOG: *** Start MSLite Demo ***`);\n          let output = msliteNapi.runDemo(resMgr);\n          if (output === null || output.length === 0) {\n            hilog.error(0xFF00, TAG, '%{public}s', `MS_LITE_ERR: runDemo failed.`);\n            return\n          }\n          hilog.info(0xFF00, TAG, '%{public}s',\n            `MS_LITE_LOG: output length = ${output.length}; value = ${output.slice(0, 20)}`);\n          this.content = output;\n          hilog.info(0xFF00, TAG, '%{public}s', `MS_LITE_LOG: *** Finished MSLite Demo ***`);\n        })\n\n        // 显示识别内容\n        if (this.content) {\n          Text('识别内容: \\n' + transverter({\n            type: TransverterType.SIMPLIFIED,\n            str: this.content,\n            language: TransverterLanguage.ZH_CN\n          }) + '\\n').focusable(true).fontSize(20).height('20%')\n        }\n      }.width('100%')\n    }\n    .height('100%')\n  }\n}\n"
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
            children: "Launching com.samples.mindsporelitecdemoasr\n$ hdc shell aa force-stop com.samples.mindsporelitecdemoasr\n$ hdc shell mkdir data/local/tmp/xxx\n$ hdc file send E:\\xxx\\entry\\build\\default\\outputs\\default\\entry-default-signed.hap \"data/local/tmp/xxx\"\n$ hdc shell bm install -p data/local/tmp/xxx\n$ hdc shell rm -rf data/local/tmp/xxx\n$ hdc shell aa start -a EntryAbility -b com.samples.mindsporelitecdemoasr\ncom.samples.mindsporelitecdemoasr successfully launched...\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在设备屏幕点击播放示例音频按钮，会播放本示例音频文件。点击识别示例音频按钮，设备屏幕显示本示例音频文件的中文内容。在日志打印结果中，过滤关键字”MS_LITE_LOG“，可得到如下结果："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "05-16 14:53:44.200   1679-1679     A03d00/JSAPP                    com.sampl...cdemoasr  I     MS_LITE_LOG: begin to play wav.\n05-16 14:53:44.210   1679-1679     A03d00/JSAPP                    com.sampl...cdemoasr  I     [a92ab1e0f831191, 0, 0] MS_LITE_LOG: AVPlayer state initialized called.\n05-16 14:53:44.228   1679-1679     A03d00/JSAPP                    com.sampl...cdemoasr  I     [a92ab1e0f831191, 0, 0] MS_LITE_LOG: AVPlayer state prepared called.\n05-16 14:53:44.242   1679-1679     A03d00/JSAPP                    com.sampl...cdemoasr  I     MS_LITE_LOG: AVPlayer state playing called.\n05-16 14:53:44.242   1679-1679     A03d00/JSAPP                    com.sampl...cdemoasr  I     MS_LITE_LOG: AVPlayer start to seek.\n05-16 14:53:44.372   1679-1679     A03d00/JSAPP                    com.sampl...cdemoasr  I     MS_LITE_LOG: AVPlayer seek succeeded, seek time is 0\n05-16 14:53:49.621   1679-1679     A03d00/JSAPP                    com.sampl...cdemoasr  I     MS_LITE_LOG: AVPlayer state completed called.\n05-16 14:53:49.646   1679-1679     A03d00/JSAPP                    com.sampl...cdemoasr  I     MS_LITE_LOG: AVPlayer state stopped called.\n05-16 14:53:49.647   1679-1679     A03d00/JSAPP                    com.sampl...cdemoasr  I     MS_LITE_LOG: AVPlayer state idle called.\n05-16 14:53:49.649   1679-1679     A03d00/JSAPP                    com.sampl...cdemoasr  I     MS_LITE_LOG: AVPlayer state released called.\n05-16 14:53:53.282   1679-1679     A03d00/JSAPP                    com.sampl...cdemoasr  I     MS_LITE_LOG: *** Start MSLite Demo ***\n05-16 14:53:53.926   1679-1679     A00000/[MSLiteNapi]             com.sampl...cdemoasr  I     MS_LITE_LOG: Build MSLite model success.\n05-16 14:53:54.260   1679-1679     A00000/[MSLiteNapi]             com.sampl...cdemoasr  D     MS_LITE_LOG: Run MSLite model Predict success.\n05-16 14:53:54.260   1679-1679     A00000/[MSLiteNapi]             com.sampl...cdemoasr  D     MS_LITE_LOG: Get model outputs:\n05-16 14:53:54.260   1679-1679     A00000/[MSLiteNapi]             com.sampl...cdemoasr  D     MS_LITE_LOG: - Tensor 0 name is: n_layer_cross_k.\n05-16 14:53:54.260   1679-1679     A00000/[MSLiteNapi]             com.sampl...cdemoasr  D     MS_LITE_LOG: - Tensor 0 size is: 9216000.\n05-16 14:53:54.260   1679-1679     A00000/[MSLiteNapi]             com.sampl...cdemoasr  D     MS_LITE_LOG: - Tensor data is:\n05-16 14:53:54.260   1679-1679     A00000/[MSLiteNapi]             com.sampl...cdemoasr  D     MS_LITE_LOG: -1.14678 -2.30223 0.868679 0.284441 1.03233 -2.02062 0.688163 -0.732034 -1.10553 1.43459 0.083885 -0.116173 -0.772636 1.5466 -0.631993 -0.897929 -0.0501685 -1.62517 0.375988 -1.77772 -0.432178\n05-16 14:53:54.260   1679-1679     A00000/[MSLiteNapi]             com.sampl...cdemoasr  D     MS_LITE_LOG: - Tensor 1 name is: n_layer_cross_v.\n05-16 14:53:54.260   1679-1679     A00000/[MSLiteNapi]             com.sampl...cdemoasr  D     MS_LITE_LOG: - Tensor 1 size is: 9216000.\n05-16 14:53:54.260   1679-1679     A00000/[MSLiteNapi]             com.sampl...cdemoasr  D     MS_LITE_LOG: - Tensor data is:\n05-16 14:53:54.260   1679-1679     A00000/[MSLiteNapi]             com.sampl...cdemoasr  D     MS_LITE_LOG: 0.0876085 -0.560317 -0.652518 -0.116969 -0.182608 -9.40531e-05 0.186293 0.123206 0.0127445 0.0708352 -0.489624 -0.226322 -0.0686949 -0.0341293 -0.0719619 0.103588 0.398025 -0.444261 0.396124 -0.347295 0.00541205\n05-16 14:53:54.430   1679-1679     A00000/[MSLiteNapi]             com.sampl...cdemoasr  I     MS_LITE_LOG: Build MSLite model success.\n05-16 14:53:54.462   1679-1679     A00000/[MSLiteNapi]             com.sampl...cdemoasr  D     MS_LITE_LOG: Run MSLite model Predict success.\n......\n05-16 14:53:55.272   1679-1679     A00000/[MSLiteNapi]             com.sampl...cdemoasr  I     MS_LITE_LOG: run decoder loop 16 ok!\n                                                                                                token = 50257\n05-16 14:53:55.334   1679-1679     A03d00/JSAPP                    com.sampl...cdemoasr  I     MS_LITE_LOG: *** Finished MSLite Demo ***\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "效果示意",
      children: "效果示意"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在设备上，点击", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "播放示例音频"
        })
      }), "按钮，会播放本示例音频文件。点击", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "识别示例音频"
        })
      }), "按钮，设备屏幕显示本示例音频文件的中文内容。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "初始页面"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "点击识别示例音频按钮后"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/HarmonyOS_Samples/guide-snippets/tree/master/MindSporeLiteKit/MindSporeLiteCDemoASR",
          children: "基于MindSporeLite接口实现语音识别（C/C++）"
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