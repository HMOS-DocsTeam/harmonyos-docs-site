"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["523185"], {
593249(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_audio_kit_audio_production_creation_audio_suite_real_time_rendering_audio_suite_real_time_rendering_md_5b2_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-audio-kit-audio-production-creation-audio-suite-real-time-rendering-audio-suite-real-time-rendering-md-5b2.json
var site_docs_audio_kit_audio_production_creation_audio_suite_real_time_rendering_audio_suite_real_time_rendering_md_5b2_namespaceObject = JSON.parse('{"id":"audio-kit/audio-production-creation/audio-suite-real-time-rendering/audio-suite-real-time-rendering","title":"实时渲染(C/C++)","description":"从API version 22开始，OHAudioSuite给开发者提供音频实时渲染能力，即音频实时播放时可进行自定义音效（仅支持均衡器节点）。例如，可以使用均衡器中预置的音效，改变音乐的风格。","source":"@site/docs/audio-kit/audio-production-creation/audio-suite-real-time-rendering/audio-suite-real-time-rendering.md","sourceDirName":"audio-kit/audio-production-creation/audio-suite-real-time-rendering","slug":"/audio-kit/audio-production-creation/audio-suite-real-time-rendering/","permalink":"/harmonyos-docs-site/audio-kit/audio-production-creation/audio-suite-real-time-rendering/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"实时渲染(C/C++)","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/audio-suite-real-time-rendering","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"离线编辑(C/C++)","permalink":"/harmonyos-docs-site/audio-kit/audio-production-creation/audio-suite-manual-rendering/"},"next":{"title":"从OpenSL ES切换到OHAudio(C/C++)","permalink":"/harmonyos-docs-site/audio-kit/not-recommended/replace-opensles-by-ohaudio/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/audio-kit/audio-production-creation/audio-suite-real-time-rendering/audio-suite-real-time-rendering.md


const frontMatter = {
	title: '实时渲染(C/C++)',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/audio-suite-real-time-rendering',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '实时渲染(C/C++)';

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
  "value": "接口调用",
  "id": "接口调用",
  "level": 3
}, {
  "value": "均衡器效果",
  "id": "均衡器效果",
  "level": 3
}, {
  "value": "注意事项",
  "id": "注意事项",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "实时渲染cc",
        children: "实时渲染(C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 22开始，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-module/capi-ohaudiosuite/capi-ohaudiosuite",
        children: "OHAudioSuite"
      }), "给开发者提供音频实时渲染能力，即音频实时播放时可进行自定义音效（仅支持均衡器节点）。例如，可以使用均衡器中预置的音效，改变音乐的风格。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发基础配置",
      children: "开发基础配置"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-module/capi-ohaudiosuite/capi-ohaudiosuite",
        children: "OHAudioSuite"
      }), "提供的实时渲染能力，添加对应的头文件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在cmake脚本中链接动态库",
      children: "在CMake脚本中链接动态库"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "target_link_libraries(sample PUBLIC libohaudio.so libohaudiosuite.so)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "添加头文件",
      children: "添加头文件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者通过引入头文件<", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h",
        children: "native_audio_suite_base.h"
      }), ">、<", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-engine-h/capi-native-audio-suite-engine-h",
        children: "native_audio_suite_engine.h"
      }), ">、<", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostreambuilder-h/capi-native-audiostreambuilder-h",
        children: "native_audiostreambuilder.h"
      }), ">和<", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiorenderer-h/capi-native-audiorenderer-h",
        children: "native_audiorenderer.h"
      }), ">使用音频编创和音频播放相关API。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <ohaudiosuite/native_audio_suite_base.h>\n#include <ohaudiosuite/native_audio_suite_engine.h>\n#include <ohaudio/native_audiorenderer.h>\n#include <ohaudio/native_audiostreambuilder.h>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口调用",
      children: "接口调用"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细的API说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-module/capi-ohaudiosuite/capi-ohaudiosuite",
        children: "OHAudioSuite"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "均衡器效果",
      children: "均衡器效果"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), "：实时播放示意图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(855596)/* ["default"] */.A) + "",
        width: "1200",
        height: "179"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以通过以下步骤来实现一个简单的均衡器效果节点实时播放功能。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在初始化时，创建", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-c/audio-module/capi-ohaudiosuite/capi-ohaudiosuite",
            children: "OHAudioSuite"
          }), "管线（包括输入节点、均衡器节点、输出节点）。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "struct AudioDataInfo {\n    uint8_t *buffer = nullptr;  // 音频数据。\n    int32_t bufferSize = 0;     // 音频数据总大小。\n    int32_t totalWriteSize = 0; // 处理过的音频数据总大小。\n};\n\n// 输入节点请求数据的回调函数。\nstatic int32_t InputNodeWriteDataCallBack(\n    OH_AudioNode *audioNode,\n    void *userData,\n    void *audioData,\n    int32_t audioDataSize,\n    bool *finished)\n{\n    if ((audioNode == nullptr) || (userData == nullptr) ||\n        (audioData == nullptr) || (audioDataSize <= 0) || (finished == nullptr)) {\n        return -1;\n    }\n\n    struct AudioDataInfo *info = static_cast<struct AudioDataInfo *>(userData);\n    // 要处理的音频大小。\n    int32_t actualDataSize = std::min(audioDataSize, info->bufferSize - info->totalWriteSize);\n    // 将PCM音频数据写入audioData。\n    memcpy(static_cast<void *>(audioData), info->buffer + info->totalWriteSize, actualDataSize);\n    info->totalWriteSize += actualDataSize;\n\n    // 音频数据全部处理完。\n    if (info->totalWriteSize >= info->bufferSize) {\n        *finished = true;\n    }\n    return actualDataSize;\n}\n\n// 创建引擎。\nOH_AudioSuiteEngine *audioSuiteEngine = nullptr;\nOH_AudioSuiteEngine_Create(&audioSuiteEngine);\n\n// 创建实时渲染的管线。\nOH_AudioSuitePipeline *audioSuitePipeline;\nOH_AudioSuiteEngine_CreatePipeline(audioSuiteEngine, &audioSuitePipeline,\n    OH_AudioSuite_PipelineWorkMode::AUDIOSUITE_PIPELINE_REALTIME_MODE);\n\n// 创建节点构造器。\nOH_AudioNodeBuilder *nodeBuilder = nullptr;\nOH_AudioSuiteNodeBuilder_Create(&nodeBuilder);\nOH_AudioSuiteNodeBuilder_SetNodeType(nodeBuilder, OH_AudioNode_Type::INPUT_NODE_TYPE_DEFAULT);\n\n// 配置音频数据格式，开发者根据要处理的音频数据格式设置采样率、声道分布、声道数、位深、编码格式参数。\nOH_AudioFormat audioFormatInput;\naudioFormatInput.samplingRate = OH_Audio_SampleRate::SAMPLE_RATE_48000;\naudioFormatInput.channelLayout = OH_AudioChannelLayout::CH_LAYOUT_STEREO;\naudioFormatInput.channelCount = 2;\naudioFormatInput.sampleFormat = OH_Audio_SampleFormat::AUDIO_SAMPLE_S16LE;\naudioFormatInput.encodingType = OH_Audio_EncodingType::AUDIO_ENCODING_TYPE_RAW;\nOH_AudioSuiteNodeBuilder_SetFormat(nodeBuilder, audioFormatInput);\n// 设置音频流的回调。\nstruct AudioDataInfo audioInfo;\naudioInfo.buffer = nullptr; // 开发者根据业务场景存放要处理的音频数据。\naudioInfo.bufferSize = 0; // 开发者根据业务场景存放要处理的音频数据大小。\naudioInfo.totalWriteSize = 0;\nvoid *userData = static_cast<void *>(&audioInfo);\nOH_AudioSuiteNodeBuilder_SetRequestDataCallback(nodeBuilder, InputNodeWriteDataCallBack, userData);\n// 创建输入节点。\nOH_AudioNode *inputNode = nullptr;\nOH_AudioSuiteEngine_CreateNode(audioSuitePipeline, nodeBuilder, &inputNode);\n\n// 重置构造器配置并设置为均衡器节点类型。\nOH_AudioSuiteNodeBuilder_Reset(nodeBuilder);\nOH_AudioSuiteNodeBuilder_SetNodeType(nodeBuilder, OH_AudioNode_Type::EFFECT_NODE_TYPE_EQUALIZER);\n// 创建均衡器节点。\nOH_AudioNode *eqNode = nullptr;\nOH_AudioSuiteEngine_CreateNode(audioSuitePipeline, nodeBuilder, &eqNode);\n// 设置均衡器节点效果为默认。\nOH_AudioSuiteEngine_SetEqualizerFrequencyBandGains(eqNode, OH_EQUALIZER_PARAM_DEFAULT);\n\n// 重置构造器配置并设置为输出节点类型。\nOH_AudioSuiteNodeBuilder_Reset(nodeBuilder);\nOH_AudioSuiteNodeBuilder_SetNodeType(nodeBuilder, OH_AudioNode_Type::OUTPUT_NODE_TYPE_DEFAULT);\n// 配置音频数据格式，开发者根据预期输出的音频格式设置采样率、声道分布、声道数、位深、编码格式参数。\nOH_AudioFormat audioFormatOutput;\naudioFormatOutput.samplingRate = OH_Audio_SampleRate::SAMPLE_RATE_48000;\naudioFormatOutput.channelLayout = OH_AudioChannelLayout::CH_LAYOUT_STEREO;\naudioFormatOutput.channelCount = 2;\naudioFormatOutput.sampleFormat = OH_Audio_SampleFormat::AUDIO_SAMPLE_S16LE;\naudioFormatOutput.encodingType = OH_Audio_EncodingType::AUDIO_ENCODING_TYPE_RAW;\nOH_AudioSuiteNodeBuilder_SetFormat(nodeBuilder, audioFormatOutput);\n// 创建输出节点。\nOH_AudioNode *outputNode = nullptr;\nOH_AudioSuiteEngine_CreateNode(audioSuitePipeline, nodeBuilder, &outputNode);\n\n// 销毁节点构造器。\nOH_AudioSuiteNodeBuilder_Destroy(nodeBuilder);\n\n// 连接各个节点组成组网。\nOH_AudioSuiteEngine_ConnectNodes(inputNode, eqNode);\nOH_AudioSuiteEngine_ConnectNodes(eqNode, outputNode);\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(312683)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "离线编辑和实时渲染在创建管线时有区别。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "实时渲染：OH_AudioSuite_PipelineWorkMode::AUDIOSUITE_PIPELINE_REALTIME_MODE"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "离线编辑：OH_AudioSuite_PipelineWorkMode::AUDIOSUITE_PIPELINE_EDIT_MODE"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiorendererstruct/capi-ohaudio-oh-audiorendererstruct",
            children: "OH_AudioRendererStruct"
          }), "实例，并在其AudioRendererOnWriteData()回调函数中调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-c/audio-module/capi-ohaudiosuite/capi-ohaudiosuite",
            children: "OHAudioSuite"
          }), "管线的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-engine-h/capi-native-audio-suite-engine-h#oh_audiosuiteengine_renderframe",
            children: "OH_AudioSuiteEngine_RenderFrame()"
          }), "接口来处理数据。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["请参考音频播放完成音频播放功能开发：", (0,jsx_runtime.jsx)(_components.a, {
            href: "/audio-kit/audio-playback/using-ohaudio-for-playback",
            children: "使用OHAudio开发音频播放功能(C/C++)"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在播放器的回调函数中，将处理后的数据复制到OH_AudioRenderer实例的缓冲区中，实现音频播放过程中实时渲染。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "static OH_AudioData_Callback_Result AudioRendererOnWriteData(\n    OH_AudioRenderer* renderer,\n    void* userData,\n    void* audioData,\n    int32_t audioDataSize)\n{\n    bool finishedFlag = false;\n    int32_t writeSize = 0;\n    OH_AudioSuite_Result result = OH_AudioSuiteEngine_RenderFrame(\n        static_cast<OH_AudioSuitePipeline *>(userData), audioData, audioDataSize, &writeSize, &finishedFlag);\n    if (result != OH_AudioSuite_Result::AUDIOSUITE_SUCCESS) {\n        // 音频编创渲染失败。\n        return AUDIO_DATA_CALLBACK_RESULT_INVALID;\n    }\n    // 音频编创渲染完成。\n    if (finishedFlag) {\n        // 开发者自定义的行为。\n    }\n\n    return AUDIO_DATA_CALLBACK_RESULT_VALID;\n }\n\n// 创建构建器\nOH_AudioStreamBuilder *rendererBuilder = nullptr;\nOH_AudioStreamBuilder_Create(&rendererBuilder, OH_AudioStream_Type::AUDIOSTREAM_TYPE_RENDERER);\nOH_AudioStreamBuilder_SetSamplingRate(rendererBuilder, 48000);\nOH_AudioStreamBuilder_SetChannelCount(rendererBuilder, 2);\nOH_AudioStreamBuilder_SetSampleFormat(rendererBuilder, AUDIOSTREAM_SAMPLE_S16LE);\nOH_AudioStreamBuilder_SetEncodingType(rendererBuilder, AUDIOSTREAM_ENCODING_TYPE_RAW);\nOH_AudioStreamBuilder_SetRendererInfo(rendererBuilder, AUDIOSTREAM_USAGE_MUSIC);\n\nint32_t byteSize = 2; // AUDIOSTREAM_SAMPLE_S16LE格式对应的字节大小。\n// 1000是时间转换单位，20表示的是20ms的音频采样数据，如果samplingRate为11025请使用40ms来计算。\nint32_t frameSize = 20 * audioFormatOutput.samplingRate * audioFormatOutput.channelCount * byteSize / 1000;\n// 设置audioDataSize长度（待播放的数据大小）。\nOH_AudioStreamBuilder_SetFrameSizeInCallback(rendererBuilder, frameSize);\n// 配置写入音频数据回调函数。\nOH_AudioStreamBuilder_SetRendererWriteDataCallback(\n    rendererBuilder, AudioRendererOnWriteData, static_cast<void *>(audioSuitePipeline));\n\n// 启动管线。\nOH_AudioSuiteEngine_StartPipeline(audioSuitePipeline);\n\n// 开发者可以自行创建renderer流，播放音频。\n// ...\n\n// 停止管线。\nOH_AudioSuiteEngine_StopPipeline(audioSuitePipeline);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "资源销毁。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 销毁流构造器。\nOH_AudioStreamBuilder_Destroy(rendererBuilder);\n\n// 销毁节点。\nOH_AudioSuiteEngine_DestroyNode(inputNode);\nOH_AudioSuiteEngine_DestroyNode(eqNode);\nOH_AudioSuiteEngine_DestroyNode(outputNode);\n\n// 销毁管线。\nOH_AudioSuiteEngine_DestroyPipeline(audioSuitePipeline);\n\n// 销毁引擎。\nOH_AudioSuiteEngine_Destroy(audioSuiteEngine);\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "注意事项",
      children: "注意事项"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "音频实时渲染过程中，不支持重新创建新的效果节点，只支持修改效果节点的参数。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["音频编创错误码具体报错信息请参考：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h#oh_audiosuite_result",
          children: "OH_AudioSuite_Result"
        }), "。"]
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
855596(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958538-9eff1d91577c09d683ac0890a6ef44ef.png");

},
312683(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

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