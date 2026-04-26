"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["677360"], {
952019(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_audio_kit_audio_production_creation_audio_suite_manual_rendering_audio_suite_manual_rendering_md_2ef_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-audio-kit-audio-production-creation-audio-suite-manual-rendering-audio-suite-manual-rendering-md-2ef.json
var site_docs_audio_kit_audio_production_creation_audio_suite_manual_rendering_audio_suite_manual_rendering_md_2ef_namespaceObject = JSON.parse('{"id":"audio-kit/audio-production-creation/audio-suite-manual-rendering/audio-suite-manual-rendering","title":"离线编辑(C/C++)","description":"从API version 22开始，OHAudioSuite给开发者提供音频离线编辑能力，允许在非实时播放场景下对音频数据进行处理，开发者可以组合多个音频节点实现复杂的音频处理流程。","source":"@site/docs/audio-kit/audio-production-creation/audio-suite-manual-rendering/audio-suite-manual-rendering.md","sourceDirName":"audio-kit/audio-production-creation/audio-suite-manual-rendering","slug":"/audio-kit/audio-production-creation/audio-suite-manual-rendering/","permalink":"/harmonyos-docs-site/audio-kit/audio-production-creation/audio-suite-manual-rendering/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"离线编辑(C/C++)","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/audio-suite-manual-rendering","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"音频编创开发概述(C/C++)","permalink":"/harmonyos-docs-site/audio-kit/audio-production-creation/audio-suite/"},"next":{"title":"实时渲染(C/C++)","permalink":"/harmonyos-docs-site/audio-kit/audio-production-creation/audio-suite-real-time-rendering/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/audio-kit/audio-production-creation/audio-suite-manual-rendering/audio-suite-manual-rendering.md


const frontMatter = {
	title: '离线编辑(C/C++)',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/audio-suite-manual-rendering',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '离线编辑(C/C++)';

const assets = {

};



const toc = [{
  "value": "开发基础配置",
  "id": "开发基础配置",
  "level": 2
}, {
  "value": "在CMake脚本中链接动态库",
  "id": "在cmake脚本中链接动态库",
  "level": 3
}, {
  "value": "添加头文件",
  "id": "添加头文件",
  "level": 3
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "指定音频节点类型",
  "id": "指定音频节点类型",
  "level": 3
}, {
  "value": "指定音频节点格式",
  "id": "指定音频节点格式",
  "level": 3
}, {
  "value": "基础离线编辑",
  "id": "基础离线编辑",
  "level": 3
}, {
  "value": "音源分离场景",
  "id": "音源分离场景",
  "level": 3
}, {
  "value": "混音与级联",
  "id": "混音与级联",
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
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "离线编辑cc",
        children: "离线编辑(C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 22开始，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-module/capi-ohaudiosuite/capi-ohaudiosuite",
        children: "OHAudioSuite"
      }), "给开发者提供音频离线编辑能力，允许在非实时播放场景下对音频数据进行处理，开发者可以组合多个音频节点实现复杂的音频处理流程。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发基础配置",
      children: "开发基础配置"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-module/capi-ohaudiosuite/capi-ohaudiosuite",
        children: "OHAudioSuite"
      }), "提供的离线编辑能力，添加对应的头文件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在cmake脚本中链接动态库",
      children: "在CMake脚本中链接动态库"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "target_link_libraries(sample PUBLIC libohaudiosuite.so)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "添加头文件",
      children: "添加头文件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者通过引入头文件<", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h",
        children: "native_audio_suite_base.h"
      }), ">和<", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-engine-h/capi-native-audio-suite-engine-h",
        children: "native_audio_suite_engine.h"
      }), ">，使用音频编创相关API。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <ohaudiosuite/native_audio_suite_base.h>\n#include <ohaudiosuite/native_audio_suite_engine.h>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细的API说明请参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-module/capi-ohaudiosuite/capi-ohaudiosuite",
        children: "OHAudioSuite"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者参考本节内容实现音频离线编辑功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "指定音频节点类型",
      children: "指定音频节点类型"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者需要根据业务场景，调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-engine-h/capi-native-audio-suite-engine-h#oh_audiosuitenodebuilder_setnodetype",
        children: "OH_AudioSuiteNodeBuilder_SetNodeType()"
      }), "接口，指定对应的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audionode_type",
        children: "OH_AudioNode_Type"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "指定音频节点格式",
      children: "指定音频节点格式"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者需要根据业务场景，调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-engine-h/capi-native-audio-suite-engine-h#oh_audiosuitenodebuilder_setformat",
        children: "OH_AudioSuiteNodeBuilder_SetFormat()"
      }), "或者", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-engine-h/capi-native-audio-suite-engine-h#oh_audiosuiteengine_setaudioformat",
        children: "OH_AudioSuiteEngine_SetAudioFormat()"
      }), "接口，设置音频格式（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audio_sampleformat",
        children: "位深"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audio_samplerate",
        children: "采样率"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-audio-channel-layout-h/capi-native-audio-channel-layout-h#oh_audiochannellayout",
        children: "声道数"
      }), "等）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "基础离线编辑",
      children: "基础离线编辑"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用效果节点（如均衡器效果节点）处理输入的PCM（Pulse Code Modulation）音频数据，输出带有该音效的PCM音频数据。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), "：基础离线编辑示意图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(481933)/* ["default"] */.A) + "",
        width: "1100",
        height: "200"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建引擎和管线。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 创建引擎。\nOH_AudioSuiteEngine *audioSuiteEngine = nullptr;\nOH_AudioSuiteEngine_Create(&audioSuiteEngine);\n\n// 创建管线。\nOH_AudioSuitePipeline *audioSuitePipeline = nullptr;\nOH_AudioSuiteEngine_CreatePipeline(\n    audioSuiteEngine, &audioSuitePipeline, OH_AudioSuite_PipelineWorkMode::AUDIOSUITE_PIPELINE_EDIT_MODE);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建输入、输出、均衡器节点并连接组网。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["创建输入节点需要实现自定义回调函数InputNodeWriteDataCallBack，函数类型为", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-engine-h/capi-native-audio-suite-engine-h#oh_inputnode_requestdatacallback",
            children: "OH_InputNode_RequestDataCallback()"
          }), "，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-engine-h/capi-native-audio-suite-engine-h#oh_audiosuitenodebuilder_setrequestdatacallback",
            children: "OH_AudioSuiteNodeBuilder_SetRequestDataCallback()"
          }), "接口设置回调函数。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "struct AudioDataInfo {\n    uint8_t *buffer = nullptr;  // 音频数据。\n    int32_t bufferSize = 0;     // 音频数据总大小。\n    int32_t totalWriteSize = 0; // 处理过的音频数据总大小。\n};\n\n// 输入节点请求数据的回调函数。\nstatic int32_t InputNodeWriteDataCallBack(\n    OH_AudioNode *audioNode,\n    void *userData,\n    void *audioData,\n    int32_t audioDataSize,\n    bool *finished)\n{\n    if ((audioNode == nullptr) || (userData == nullptr) ||\n        (audioData == nullptr) || (audioDataSize <= 0) || (finished == nullptr)) {\n        return -1;\n    }\n\n    struct AudioDataInfo *info = static_cast<struct AudioDataInfo *>(userData);\n    // 要处理的音频大小。\n    int32_t actualDataSize = std::min(audioDataSize, info->bufferSize - info->totalWriteSize);\n    // 将PCM音频数据写入audioData。\n    memcpy(static_cast<void *>(audioData), info->buffer + info->totalWriteSize, actualDataSize);\n    info->totalWriteSize += actualDataSize;\n\n    // 音频数据全部处理完。\n    if (info->totalWriteSize >= info->bufferSize) {\n        *finished = true;\n    }\n    return actualDataSize;\n}\n\n// 创建节点构造器。\nOH_AudioNodeBuilder *nodeBuilder = nullptr;\nOH_AudioSuiteNodeBuilder_Create(&nodeBuilder);\nOH_AudioSuiteNodeBuilder_SetNodeType(nodeBuilder, OH_AudioNode_Type::INPUT_NODE_TYPE_DEFAULT);\n\n// 配置音频数据格式，开发者根据要处理的音频数据格式设置采样率、声道分布、声道数、位深、编码格式参数。\nOH_AudioFormat audioFormatInput;\naudioFormatInput.samplingRate = OH_Audio_SampleRate::SAMPLE_RATE_48000;\naudioFormatInput.channelLayout = OH_AudioChannelLayout::CH_LAYOUT_STEREO;\naudioFormatInput.channelCount = 2;\naudioFormatInput.sampleFormat = OH_Audio_SampleFormat::AUDIO_SAMPLE_S16LE;\naudioFormatInput.encodingType = OH_Audio_EncodingType::AUDIO_ENCODING_TYPE_RAW;\nOH_AudioSuiteNodeBuilder_SetFormat(nodeBuilder, audioFormatInput);\n// 设置音频流的回调。\nstruct AudioDataInfo audioInfo;\naudioInfo.buffer = nullptr; // 开发者根据业务场景存放要处理的音频数据。\naudioInfo.bufferSize = 0; // 开发者根据业务场景存放要处理的音频数据大小。\naudioInfo.totalWriteSize = 0;\nvoid *userData = static_cast<void *>(&audioInfo);\nOH_AudioSuiteNodeBuilder_SetRequestDataCallback(nodeBuilder, InputNodeWriteDataCallBack, userData);\n// 创建输入节点。\nOH_AudioNode *inputNode = nullptr;\nOH_AudioSuiteEngine_CreateNode(audioSuitePipeline, nodeBuilder, &inputNode);\n\n// 重置构造器配置并设置为均衡器节点类型。\nOH_AudioSuiteNodeBuilder_Reset(nodeBuilder);\nOH_AudioSuiteNodeBuilder_SetNodeType(nodeBuilder, OH_AudioNode_Type::EFFECT_NODE_TYPE_EQUALIZER);\n// 创建均衡器节点。\nOH_AudioNode *eqNode = nullptr;\nOH_AudioSuiteEngine_CreateNode(audioSuitePipeline, nodeBuilder, &eqNode);\n// 设置均衡器节点效果为默认。\nOH_AudioSuiteEngine_SetEqualizerFrequencyBandGains(eqNode, OH_EQUALIZER_PARAM_DEFAULT);\n\n// 重置构造器配置并设置为输出节点类型。\nOH_AudioSuiteNodeBuilder_Reset(nodeBuilder);\nOH_AudioSuiteNodeBuilder_SetNodeType(nodeBuilder, OH_AudioNode_Type::OUTPUT_NODE_TYPE_DEFAULT);\n// 配置音频数据格式，开发者根据预期输出的音频格式设置采样率、声道分布、声道数、位深、编码格式参数。\nOH_AudioFormat audioFormatOutput;\naudioFormatOutput.samplingRate = OH_Audio_SampleRate::SAMPLE_RATE_48000;\naudioFormatOutput.channelLayout = OH_AudioChannelLayout::CH_LAYOUT_STEREO;\naudioFormatOutput.channelCount = 2;\naudioFormatOutput.sampleFormat = OH_Audio_SampleFormat::AUDIO_SAMPLE_S16LE;\naudioFormatOutput.encodingType = OH_Audio_EncodingType::AUDIO_ENCODING_TYPE_RAW;\nOH_AudioSuiteNodeBuilder_SetFormat(nodeBuilder, audioFormatOutput);\n// 创建输出节点。\nOH_AudioNode *outputNode = nullptr;\nOH_AudioSuiteEngine_CreateNode(audioSuitePipeline, nodeBuilder, &outputNode);\n\n// 销毁节点构造器。\nOH_AudioSuiteNodeBuilder_Destroy(nodeBuilder);\n\n// 连接各个节点组成组网。\nOH_AudioSuiteEngine_ConnectNodes(inputNode, eqNode);\nOH_AudioSuiteEngine_ConnectNodes(eqNode, outputNode);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "渲染音频数据。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["开发者调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-engine-h/capi-native-audio-suite-engine-h#oh_audiosuiteengine_renderframe",
            children: "OH_AudioSuiteEngine_RenderFrame()"
          }), "接口渲染并获取PCM音频数据。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "int32_t byteSize = 2; // OH_Audio_SampleFormat::AUDIO_SAMPLE_S16LE格式对应的字节大小。\n// 根据输出节点的格式计算单帧处理数据大小。\n// 1000是时间转换单位，20表示的是20ms的音频采样数据，如果samplingRate为11025请使用40ms来计算。\nint32_t frameSize = 20 * audioFormatOutput.samplingRate * audioFormatOutput.channelCount * byteSize / 1000;\n// 用于接收渲染后的输出音频数据。\nuint8_t *audioData = (uint8_t *)malloc(frameSize);\nint32_t responseSize = 0;\nbool finished = false;\n\n// 渲染。\nOH_AudioSuiteEngine_StartPipeline(audioSuitePipeline);\ndo {\n    OH_AudioSuite_Result result = OH_AudioSuiteEngine_RenderFrame(\n        audioSuitePipeline, static_cast<void *>(audioData), frameSize, &responseSize, &finished);\n    if ((result != OH_AudioSuite_Result::AUDIOSUITE_SUCCESS) || (responseSize <= 0)) {\n        // 本次音频编创渲染失败。\n        break;\n    } else {\n        // audioData是渲染过后的音频数据，音频数据长度为responseSize，开发者根据业务场景自行使用或者保存。\n    }\n} while (!finished);\nOH_AudioSuiteEngine_StopPipeline(audioSuitePipeline);\nfree(audioData);\naudioData = nullptr;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "资源销毁。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 销毁节点。\nOH_AudioSuiteEngine_DestroyNode(inputNode);\nOH_AudioSuiteEngine_DestroyNode(eqNode);\nOH_AudioSuiteEngine_DestroyNode(outputNode);\n\n// 销毁管线。\nOH_AudioSuiteEngine_DestroyPipeline(audioSuitePipeline);\n\n// 销毁引擎。\nOH_AudioSuiteEngine_Destroy(audioSuiteEngine);\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "音源分离场景",
      children: "音源分离场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用音源分离节点分离输入的PCM音频数据为人声和背景声，然后通过输出节点分别输出这两路数据。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图2"
        })
      }), "：音源分离编辑示意图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(441383)/* ["default"] */.A) + "",
        width: "1100",
        height: "216"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例代码如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建引擎和管线。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 创建引擎。\nOH_AudioSuiteEngine *audioSuiteEngine = nullptr;\nOH_AudioSuiteEngine_Create(&audioSuiteEngine);\n\n// 创建管线。\nOH_AudioSuitePipeline *audioSuitePipeline = nullptr;\nOH_AudioSuiteEngine_CreatePipeline(\n    audioSuiteEngine, &audioSuitePipeline, OH_AudioSuite_PipelineWorkMode::AUDIOSUITE_PIPELINE_EDIT_MODE);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建输入、输出、音源分离节点并连接。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["创建输入节点需要实现自定义回调函数InputNodeWriteDataCallBack，函数类型为", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-engine-h/capi-native-audio-suite-engine-h#oh_inputnode_requestdatacallback",
            children: "OH_InputNode_RequestDataCallback()"
          }), "，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-engine-h/capi-native-audio-suite-engine-h#oh_audiosuitenodebuilder_setrequestdatacallback",
            children: "OH_AudioSuiteNodeBuilder_SetRequestDataCallback()"
          }), "接口设置回调函数。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "struct AudioDataInfo {\n    uint8_t *buffer = nullptr;  // 音频数据。\n    int32_t bufferSize = 0;     // 音频数据总大小。\n    int32_t totalWriteSize = 0; // 处理过的音频数据总大小。\n};\n\n// 输入节点请求数据的回调函数。\nstatic int32_t InputNodeWriteDataCallBack(\n    OH_AudioNode *audioNode,\n    void *userData,\n    void *audioData,\n    int32_t audioDataSize,\n    bool *finished)\n{\n    if ((audioNode == nullptr) || (userData == nullptr) ||\n        (audioData == nullptr) || (audioDataSize <= 0) || (finished == nullptr)) {\n        return -1;\n    }\n\n    struct AudioDataInfo *info = static_cast<struct AudioDataInfo *>(userData);\n    // 要处理的音频大小。\n    int32_t actualDataSize = std::min(audioDataSize, info->bufferSize - info->totalWriteSize);\n    // 将PCM音频数据写入audioData。\n    memcpy(static_cast<void *>(audioData), info->buffer + info->totalWriteSize, actualDataSize);\n    info->totalWriteSize += actualDataSize;\n\n    // 音频数据全部处理完。\n    if (info->totalWriteSize >= info->bufferSize) {\n        *finished = true;\n    }\n    return actualDataSize;\n}\n\n// 创建节点构造器。\nOH_AudioNodeBuilder *nodeBuilder = nullptr;\nOH_AudioSuiteNodeBuilder_Create(&nodeBuilder);\nOH_AudioSuiteNodeBuilder_SetNodeType(nodeBuilder, OH_AudioNode_Type::INPUT_NODE_TYPE_DEFAULT);\n\n// 配置音频数据格式，开发者根据要处理的音频数据格式设置采样率、声道分布、声道数、位深、编码格式参数。\nOH_AudioFormat audioFormatInput;\naudioFormatInput.samplingRate = OH_Audio_SampleRate::SAMPLE_RATE_48000;\naudioFormatInput.channelLayout = OH_AudioChannelLayout::CH_LAYOUT_STEREO;\naudioFormatInput.channelCount = 2;\naudioFormatInput.sampleFormat = OH_Audio_SampleFormat::AUDIO_SAMPLE_S16LE;\naudioFormatInput.encodingType = OH_Audio_EncodingType::AUDIO_ENCODING_TYPE_RAW;\nOH_AudioSuiteNodeBuilder_SetFormat(nodeBuilder, audioFormatInput);\n\nstruct AudioDataInfo audioInfo;\naudioInfo.buffer = nullptr; // 开发者根据业务场景存放要处理的音频数据。\naudioInfo.bufferSize = 0; // 开发者根据业务场景存放要处理的音频数据大小。\naudioInfo.totalWriteSize = 0;\nvoid *userData = static_cast<void *>(&audioInfo);\n// 设置音频流的回调。\nOH_AudioSuiteNodeBuilder_SetRequestDataCallback(nodeBuilder, InputNodeWriteDataCallBack, userData);\n\n// 创建输入节点。\nOH_AudioNode *inputNode = nullptr;\nOH_AudioSuiteEngine_CreateNode(audioSuitePipeline, nodeBuilder, &inputNode);\n\n// 重置构造器配置并设置为音源分离节点类型。\nOH_AudioSuiteNodeBuilder_Reset(nodeBuilder);\nOH_AudioSuiteNodeBuilder_SetNodeType(\n    nodeBuilder, OH_AudioNode_Type::EFFECT_MULTII_OUTPUT_NODE_TYPE_AUDIO_SEPARATION);\n\n// 创建音源分离节点。\nOH_AudioNode *aissNode = nullptr;\nOH_AudioSuiteEngine_CreateNode(audioSuitePipeline, nodeBuilder, &aissNode);\n\n// 重置构造器配置并设置为输出节点类型。\nOH_AudioSuiteNodeBuilder_Reset(nodeBuilder);\nOH_AudioSuiteNodeBuilder_SetNodeType(nodeBuilder, OH_AudioNode_Type::OUTPUT_NODE_TYPE_DEFAULT);\n// 配置音频数据格式，开发者根据预期输出的音频格式设置采样率、声道分布、声道数、位深、编码格式参数。\nOH_AudioFormat audioFormatOutput;\naudioFormatOutput.samplingRate = OH_Audio_SampleRate::SAMPLE_RATE_48000;\naudioFormatOutput.channelLayout = OH_AudioChannelLayout::CH_LAYOUT_STEREO;\naudioFormatOutput.channelCount = 2;\naudioFormatOutput.sampleFormat = OH_Audio_SampleFormat::AUDIO_SAMPLE_S16LE;\naudioFormatOutput.encodingType = OH_Audio_EncodingType::AUDIO_ENCODING_TYPE_RAW;\nOH_AudioSuiteNodeBuilder_SetFormat(nodeBuilder, audioFormatOutput);\n\n// 创建输出节点。\nOH_AudioNode *outputNode = nullptr;\nOH_AudioSuiteEngine_CreateNode(audioSuitePipeline, nodeBuilder, &outputNode);\n\n// 销毁节点构造器。\nOH_AudioSuiteNodeBuilder_Destroy(nodeBuilder);\n\n// 连接各个节点组成组网。\nOH_AudioSuiteEngine_ConnectNodes(inputNode, aissNode);\nOH_AudioSuiteEngine_ConnectNodes(aissNode, outputNode);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "渲染音频数据。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["包含音源分离节点的管线使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-engine-h/capi-native-audio-suite-engine-h#oh_audiosuiteengine_multirenderframe",
            children: "OH_AudioSuiteEngine_MultiRenderFrame()"
          }), "接口渲染并获取两路PCM音频数据。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "int32_t byteSize = 2; // OH_Audio_SampleFormat::AUDIO_SAMPLE_S16LE格式对应的字节大小。\n// 根据输出节点的格式计算单帧处理数据大小。\n// 1000是时间转换单位，20表示的是20ms的音频采样数据，如果samplingRate为11025请使用40ms来计算。\nint32_t frameSize = 20 * audioFormatOutput.samplingRate * audioFormatOutput.channelCount * byteSize / 1000;\n// 用于接收渲染后的输出音频数据。\nOH_AudioDataArray audioDataArray;\nint32_t outPutNum = 2;\naudioDataArray.audioDataArray = (void **)malloc(outPutNum * sizeof(void *));\nfor(int32_t i = 0; i < outPutNum; i++) {\n    audioDataArray.audioDataArray[i] = (void *)malloc(frameSize);\n}\naudioDataArray.arraySize = outPutNum;\naudioDataArray.requestFrameSize = frameSize;\nint32_t responseSize = 0;\nbool finished = false;\n\n// 渲染。\nOH_AudioSuiteEngine_StartPipeline(audioSuitePipeline);\ndo {\n    OH_AudioSuite_Result result = OH_AudioSuiteEngine_MultiRenderFrame(\n        audioSuitePipeline, &audioDataArray, &responseSize, &finished);\n    if ((result != OH_AudioSuite_Result::AUDIOSUITE_SUCCESS) || (responseSize <= 0)) {\n        // 本次音频编创渲染失败。\n        break;\n    } else {\n        // audioDataArray.audioDataArray[0]是提取的人声。\n        // audioDataArray.audioDataArray[1]是提取的背景声。\n        // 音频数据长度为responseSize，开发者根据业务场景自行使用或者保存。\n    }\n} while (!finished);\nOH_AudioSuiteEngine_StopPipeline(audioSuitePipeline);\n\nfor(int32_t i = 0; i < outPutNum; i++) {\n    free(audioDataArray.audioDataArray[i]);\n    audioDataArray.audioDataArray[i] = nullptr;\n}\nfree(audioDataArray.audioDataArray);\naudioDataArray.audioDataArray = nullptr;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "资源销毁。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 销毁节点。\nOH_AudioSuiteEngine_DestroyNode(inputNode);\nOH_AudioSuiteEngine_DestroyNode(aissNode);\nOH_AudioSuiteEngine_DestroyNode(outputNode);\n\n// 销毁管线。\nOH_AudioSuiteEngine_DestroyPipeline(audioSuitePipeline);\n\n// 销毁引擎。\nOH_AudioSuiteEngine_Destroy(audioSuiteEngine);\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "混音与级联",
      children: "混音与级联"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "输入多路PCM音频数据，使用混音节点进行混音，输出混音后的PCM音频数据。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图3"
        })
      }), "：级联编辑示意图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(772851)/* ["default"] */.A) + "",
        width: "1200",
        height: "254"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例代码如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建引擎和管线。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 创建引擎。\nOH_AudioSuiteEngine *audioSuiteEngine = nullptr;\nOH_AudioSuiteEngine_Create(&audioSuiteEngine);\n\n// 创建管线。\nOH_AudioSuitePipeline *audioSuitePipeline = nullptr;\nOH_AudioSuiteEngine_CreatePipeline(\n    audioSuiteEngine, &audioSuitePipeline, OH_AudioSuite_PipelineWorkMode::AUDIOSUITE_PIPELINE_EDIT_MODE);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建输入、输出、效果类节点并连接。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["由于混音功能有多个输入节点，需单独设置回调函数InputNodeWriteDataCallBack中的userData参数来区分多个输入节点，从而实现多个PCM音频数据的输入。InputNodeWriteDataCallBack函数类型为", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-engine-h/capi-native-audio-suite-engine-h#oh_inputnode_requestdatacallback",
            children: "OH_InputNode_RequestDataCallback()"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "struct AudioDataInfo {\n    uint8_t *buffer = nullptr;  // 音频数据。\n    int32_t bufferSize = 0;     // 音频数据总大小。\n    int32_t totalWriteSize = 0; // 处理过的音频数据总大小。\n};\n\n// 输入节点请求数据的回调函数。\nstatic int32_t InputNodeWriteDataCallBack(\n    OH_AudioNode *audioNode,\n    void *userData,\n    void *audioData,\n    int32_t audioDataSize,\n    bool *finished)\n{\n    if ((audioNode == nullptr) || (userData == nullptr) ||\n        (audioData == nullptr) || (audioDataSize <= 0) || (finished == nullptr)) {\n        return -1;\n    }\n\n    struct AudioDataInfo *info = static_cast<struct AudioDataInfo *>(userData);\n    // 要处理的音频大小。\n    int32_t actualDataSize = std::min(audioDataSize, info->bufferSize - info->totalWriteSize);\n    // 将PCM音频数据写入audioData。\n    memcpy(static_cast<void *>(audioData), info->buffer + info->totalWriteSize, actualDataSize);\n    info->totalWriteSize += actualDataSize;\n\n    // 音频数据全部处理完。\n    if (info->totalWriteSize >= info->bufferSize) {\n        *finished = true;\n    }\n    return actualDataSize;\n}\n\n// 创建节点构造器。\nOH_AudioNodeBuilder *nodeBuilder = nullptr;\nOH_AudioSuiteNodeBuilder_Create(&nodeBuilder);\nOH_AudioSuiteNodeBuilder_SetNodeType(nodeBuilder, OH_AudioNode_Type::INPUT_NODE_TYPE_DEFAULT);\n// 配置音频数据格式，开发者根据要处理的音频数据格式设置采样率、声道分布、声道数、位深、编码格式参数。\nOH_AudioFormat audioFormatInput;\naudioFormatInput.samplingRate = OH_Audio_SampleRate::SAMPLE_RATE_48000;\naudioFormatInput.channelLayout = OH_AudioChannelLayout::CH_LAYOUT_STEREO;\naudioFormatInput.channelCount = 2;\naudioFormatInput.sampleFormat = OH_Audio_SampleFormat::AUDIO_SAMPLE_S16LE;\naudioFormatInput.encodingType = OH_Audio_EncodingType::AUDIO_ENCODING_TYPE_RAW;\nOH_AudioSuiteNodeBuilder_SetFormat(nodeBuilder, audioFormatInput);\n// 设置第一个音频流的回调。\nstruct AudioDataInfo audioInfoForField;\naudioInfoForField.buffer = nullptr; // 开发者根据业务场景存放要处理的音频数据。\naudioInfoForField.bufferSize = 0; // 开发者根据业务场景存放要处理的音频数据大小。\naudioInfoForField.totalWriteSize = 0;\nvoid *userData = static_cast<void *>(&audioInfoForField);\nOH_AudioSuiteNodeBuilder_SetRequestDataCallback(nodeBuilder, InputNodeWriteDataCallBack, userData);\n// 创建第一个输入节点。\nOH_AudioNode *inputNodeForField = nullptr;\nOH_AudioSuiteEngine_CreateNode(audioSuitePipeline, nodeBuilder, &inputNodeForField);\n\n// 重置构造器配置并设置为输入节点类型。\nOH_AudioSuiteNodeBuilder_Reset(nodeBuilder);\nOH_AudioSuiteNodeBuilder_SetNodeType(nodeBuilder, OH_AudioNode_Type::INPUT_NODE_TYPE_DEFAULT);\nOH_AudioSuiteNodeBuilder_SetFormat(nodeBuilder, audioFormatInput);\n// 设置第二个音频流的回调。\nstruct AudioDataInfo audioInfoForMix;\naudioInfoForMix.buffer = nullptr; // 开发者根据业务场景存放要处理的音频数据。\naudioInfoForMix.bufferSize = 0; // 开发者根据业务场景存放要处理的音频数据大小。\naudioInfoForMix.totalWriteSize = 0;\nuserData = static_cast<void *>(&audioInfoForMix);\nOH_AudioSuiteNodeBuilder_SetRequestDataCallback(nodeBuilder, InputNodeWriteDataCallBack, userData);\n// 创建第二个输入节点。\nOH_AudioNode *inputNodeForMix = nullptr;\nOH_AudioSuiteEngine_CreateNode(audioSuitePipeline, nodeBuilder, &inputNodeForMix);\n\n// 重置构造器配置并设置为输入节点类型。\nOH_AudioSuiteNodeBuilder_Reset(nodeBuilder);\nOH_AudioSuiteNodeBuilder_SetNodeType(nodeBuilder, OH_AudioNode_Type::EFFECT_NODE_TYPE_SOUND_FIELD);\n// 创建声场节点并设置声场模式为聆听。\nOH_AudioNode *fieldNode = nullptr;\nOH_AudioSuiteEngine_CreateNode(audioSuitePipeline, nodeBuilder, &fieldNode);\nOH_AudioSuiteEngine_SetSoundFieldType(fieldNode, SOUND_FIELD_FRONT_FACING);\n\n// 重置构造器配置并设置为输入节点类型。\nOH_AudioSuiteNodeBuilder_Reset(nodeBuilder);\nOH_AudioSuiteNodeBuilder_SetNodeType(nodeBuilder, OH_AudioNode_Type::EFFECT_NODE_TYPE_AUDIO_MIXER);\nOH_AudioNode *mixerNode = nullptr;\n// 创建混音节点。\nOH_AudioSuiteEngine_CreateNode(audioSuitePipeline, nodeBuilder, &mixerNode);\n\n// 重置构造器配置并设置为输入节点类型。\nOH_AudioSuiteNodeBuilder_Reset(nodeBuilder);\nOH_AudioSuiteNodeBuilder_SetNodeType(nodeBuilder, OH_AudioNode_Type::OUTPUT_NODE_TYPE_DEFAULT);\n// 配置音频数据格式，开发者根据预期输出的音频格式设置采样率、声道分布、声道数、位深、编码格式参数。\nOH_AudioFormat audioFormatOutput;\naudioFormatOutput.samplingRate = OH_Audio_SampleRate::SAMPLE_RATE_48000;\naudioFormatOutput.channelLayout = OH_AudioChannelLayout::CH_LAYOUT_STEREO;\naudioFormatOutput.channelCount = 2;\naudioFormatOutput.sampleFormat = OH_Audio_SampleFormat::AUDIO_SAMPLE_S16LE;\naudioFormatOutput.encodingType = OH_Audio_EncodingType::AUDIO_ENCODING_TYPE_RAW;\nOH_AudioSuiteNodeBuilder_SetFormat(nodeBuilder, audioFormatOutput);\n// 创建输出节点。\nOH_AudioNode *outputNode = nullptr;\nOH_AudioSuiteEngine_CreateNode(audioSuitePipeline, nodeBuilder, &outputNode);\n\n// 销毁输出节点构造器。\nOH_AudioSuiteNodeBuilder_Destroy(nodeBuilder);\n\n// 连接各个节点组成组网。\nOH_AudioSuiteEngine_ConnectNodes(inputNodeForField, fieldNode);\nOH_AudioSuiteEngine_ConnectNodes(fieldNode, mixerNode);\nOH_AudioSuiteEngine_ConnectNodes(inputNodeForMix, mixerNode);\nOH_AudioSuiteEngine_ConnectNodes(mixerNode, outputNode);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "渲染音频数据。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["开发者调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-engine-h/capi-native-audio-suite-engine-h#oh_audiosuiteengine_renderframe",
            children: "OH_AudioSuiteEngine_RenderFrame()"
          }), "接口渲染并获取PCM音频数据。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "int32_t byteSize = 2; // OH_Audio_SampleFormat::AUDIO_SAMPLE_S16LE格式对应的字节大小。\n// 根据输出节点的格式计算单帧处理数据大小。\n// 1000是时间转换单位，20表示的是20ms的音频采样数据，如果samplingRate为11025请使用40ms来计算。\nint32_t frameSize = 20 * audioFormatOutput.samplingRate * audioFormatOutput.channelCount * byteSize / 1000;\n// 用于接收渲染后的输出音频数据。\nuint8_t *audioData = (uint8_t *)malloc(frameSize);\nint32_t responseSize = 0;\nbool finished = false;\n\n// 渲染。\nOH_AudioSuiteEngine_StartPipeline(audioSuitePipeline);\ndo {\n    OH_AudioSuite_Result result = OH_AudioSuiteEngine_RenderFrame(\n        audioSuitePipeline, static_cast<void *>(audioData), frameSize, &responseSize, &finished);\n    if ((result != OH_AudioSuite_Result::AUDIOSUITE_SUCCESS) || (responseSize <= 0)) {\n        // 本次音频编创渲染失败。\n        break;\n    } else {\n        // audioData是渲染过后的音频数据，音频数据长度为responseSize，开发者根据业务场景自行使用或者保存。\n    }\n} while (!finished);\nOH_AudioSuiteEngine_StopPipeline(audioSuitePipeline);\nfree(audioData);\naudioData = nullptr;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "资源销毁。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 销毁节点。\nOH_AudioSuiteEngine_DestroyNode(inputNodeForMix);\nOH_AudioSuiteEngine_DestroyNode(inputNodeForField);\nOH_AudioSuiteEngine_DestroyNode(fieldNode);\nOH_AudioSuiteEngine_DestroyNode(mixerNode);\nOH_AudioSuiteEngine_DestroyNode(outputNode);\n\n// 销毁管线。\nOH_AudioSuiteEngine_DestroyPipeline(audioSuitePipeline);\n\n// 销毁引擎。\nOH_AudioSuiteEngine_Destroy(audioSuiteEngine);\n"
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
441383(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798888-57ad6d885711d760944d7ffd954fdfd4.png");

},
772851(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438583-f102cf98f42824968e97a152ced103ed.png");

},
481933(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478537-ed6e8f0df8106f0a5b1106469945ffec.png");

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