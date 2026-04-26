"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["95113"], {
103458(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_avcodec_kit_audio_video_codec_audio_encoding_audio_encoding_md_73f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-avcodec-kit-audio-video-codec-audio-encoding-audio-encoding-md-73f.json
var site_docs_avcodec_kit_audio_video_codec_audio_encoding_audio_encoding_md_73f_namespaceObject = JSON.parse('{"id":"avcodec-kit/audio-video-codec/audio-encoding/audio-encoding","title":"音频编码","description":"开发者可以调用本模块的Native API接口，完成音频编码，即将音频PCM编码压缩成不同的格式。","source":"@site/docs/avcodec-kit/audio-video-codec/audio-encoding/audio-encoding.md","sourceDirName":"avcodec-kit/audio-video-codec/audio-encoding","slug":"/avcodec-kit/audio-video-codec/audio-encoding/","permalink":"/harmonyos-docs-site/avcodec-kit/audio-video-codec/audio-encoding/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"音频编码","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/audio-encoding","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"获取支持的编解码能力","permalink":"/harmonyos-docs-site/avcodec-kit/audio-video-codec/obtain-supported-codecs/"},"next":{"title":"音频编码同步模式","permalink":"/harmonyos-docs-site/avcodec-kit/audio-video-codec/synchronous-audio-encoding/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/avcodec-kit/audio-video-codec/audio-encoding/audio-encoding.md


const frontMatter = {
	title: '音频编码',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/audio-encoding',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '音频编码';

const assets = {

};



const toc = [{
  "value": "开发指导",
  "id": "开发指导",
  "level": 2
}, {
  "value": "在 CMake 脚本中链接动态库",
  "id": "在-cmake-脚本中链接动态库",
  "level": 3
}, {
  "value": "开发步骤",
  "id": "开发步骤",
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
        id: "音频编码",
        children: "音频编码"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以调用本模块的Native API接口，完成音频编码，即将音频PCM编码压缩成不同的格式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口不限制PCM数据的来源，开发者可以调用麦克风录制获取、也可以导入编辑后的PCM数据，通过音频编码，输出对应格式的码流，最后封装为目标格式文件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当前支持的编码能力请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/avcodec-kit/avcodec-support-formats#%E9%9F%B3%E9%A2%91%E7%BC%96%E7%A0%81",
        children: "AVCodec支持的格式"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "适用场景"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "音频录制"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过录制传入PCM，然后编码出对应格式的码流，最后", (0,jsx_runtime.jsx)(_components.a, {
            href: "/avcodec-kit/file-muxing-demuxing/audio-video-muxer",
            children: "封装"
          }), "为所需格式的音频文件。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "音频编辑"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["编辑PCM后导出音频文件的场景，需要编码成对应音频格式后再", (0,jsx_runtime.jsx)(_components.a, {
            href: "/avcodec-kit/file-muxing-demuxing/audio-video-muxer",
            children: "封装"
          }), "成文件。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(97617)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AAC编码器默认采用的VBR可变码率模式，与配置的预期参数可能存在偏差。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AAC编码器默认输出携带ADTS头部，帧数据的前7字节为ADTS头部。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发指导",
      children: "开发指导"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细的API说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-audiocodec-h/capi-native-avcodec-audiocodec-h",
        children: "native_avcodec_audiocodec.h"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参考以下示例代码，完成音频编码的全流程，包括：创建编码器、设置编码参数（采样率/码率/声道数等）、开始、刷新、重置、销毁资源。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在应用开发过程中，开发者应按一定顺序调用方法，执行对应操作，否则系统可能会抛出异常或生成其他未定义的行为。具体顺序可参考下列开发步骤及对应说明。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如下为音频编码调用关系图："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "虚线表示可选。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "实线表示必选。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(39027)/* ["default"] */.A) + "",
        width: "4445",
        height: "3377"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在-cmake-脚本中链接动态库",
      children: "在 CMake 脚本中链接动态库"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "target_link_libraries(sample PUBLIC libnative_media_codecbase.so)\ntarget_link_libraries(sample PUBLIC libnative_media_core.so)\ntarget_link_libraries(sample PUBLIC libnative_media_acodec.so)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(823009)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上述'sample'字样仅为示例，此处由开发者根据实际工程目录自定义。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "添加所需的头文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <multimedia/player_framework/native_avcodec_audiocodec.h>\n#include <multimedia/native_audio_channel_layout.h>\n#include <multimedia/player_framework/native_avcapability.h>\n#include <multimedia/player_framework/native_avcodec_base.h>\n#include <multimedia/player_framework/native_avformat.h>\n#include <multimedia/player_framework/native_avbuffer.h>\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建编码器实例对象，OH_AVCodec*为编码器实例指针。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用可以通过媒体类型或编解码器名称创建编码器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "方法一：通过mime type创建编码器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 设置判定是否为编码；设置true表示当前是编码。\nbool isEncoder = true;\n// 通过媒体类型创建编码器。\nOH_AVCodec *audioEnc_ = OH_AudioCodec_CreateByMime(OH_AVCODEC_MIMETYPE_AUDIO_AAC, isEncoder);\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "方法二：通过codec name创建编码器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 通过codec name创建编码器。\nOH_AVCapability *capability = OH_AVCodec_GetCapability(OH_AVCODEC_MIMETYPE_AUDIO_AAC, true);\nconst char *name = OH_AVCapability_GetName(capability);\nOH_AVCodec *audioEnc_ = OH_AudioCodec_CreateByName(name);\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "添加头文件和命名空间:"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <mutex>\n#include <queue>\n// c++标准库命名空间。\nusing namespace std;\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "示例代码："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 初始化队列。\nclass AEncBufferSignal {\npublic:\n    std::mutex inMutex_;\n    std::mutex outMutex_;\n    std::mutex startMutex_;\n    std::condition_variable inCond_;\n    std::condition_variable outCond_;\n    std::condition_variable startCond_;\n    std::queue<uint32_t> inQueue_;\n    std::queue<uint32_t> outQueue_;\n    std::queue<OH_AVBuffer *> inBufferQueue_;\n    std::queue<OH_AVBuffer *> outBufferQueue_;\n};\nAEncBufferSignal *signal_;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_AudioCodec_RegisterCallback()注册回调函数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "注册回调函数指针集合OH_AVCodecCallback，包括："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "OH_AVCodecOnError：编码器运行错误。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "OH_AVCodecOnStreamChanged：音频编码器暂未支持此回调。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "OH_AVCodecOnNeedInputBuffer：运行过程中需要新的输入数据，即编码器已准备好，可以输入PCM数据。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "OH_AVCodecOnNewOutputBuffer：运行过程中产生了新的输出数据，即编码完成。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开发者可以通过处理该回调报告的信息，确保编码器正常运转。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(126626)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "请勿在回调中调用编码器的相关接口或进行耗时操作。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// OH_AVCodecOnError回调函数的实现。\nstatic void OnError(OH_AVCodec *codec, int32_t errorCode, void *userData)\n{\n    (void)codec;\n    (void)errorCode;\n    (void)userData;\n}\n// OH_AVCodecOnStreamChanged回调函数的实现。\nstatic void OnOutputFormatChanged(OH_AVCodec *codec, OH_AVFormat *format, void *userData)\n{\n    (void)codec;\n    (void)format;\n    (void)userData;\n}\n// OH_AVCodecOnNeedInputBuffer回调函数的实现。\nstatic void OnInputBufferAvailable(OH_AVCodec *codec, uint32_t index, OH_AVBuffer *data, void *userData)\n{\n    (void)codec;\n    // 编码输入码流送入InputBuffer队列。\n    AEncBufferSignal *signal = static_cast<AEncBufferSignal *>(userData);\n    unique_lock<mutex> lock(signal->inMutex_);\n    signal->inQueue_.push(index);\n    signal->inBufferQueue_.push(data);\n    signal->inCond_.notify_all();\n}\n// OH_AVCodecOnNewOutputBuffer回调函数的实现。\nstatic void OnOutputBufferAvailable(OH_AVCodec *codec, uint32_t index, OH_AVBuffer *data, void *userData)\n{\n    (void)codec;\n    // 将对应输出buffer的index送入OutputQueue_队列。\n    // 将对应编码完成的数据data送入outBuffer队列。\n    AEncBufferSignal *signal = static_cast<AEncBufferSignal *>(userData);\n    unique_lock<mutex> lock(signal->outMutex_);\n    signal->outQueue_.push(index);\n    signal->outBufferQueue_.push(data);\n    signal->outCond_.notify_all();\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置回调："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "signal_ = new AEncBufferSignal();\nOH_AVCodecCallback cb_ = {&OnError, &OnOutputFormatChanged, &OnInputBufferAvailable, &OnOutputBufferAvailable};\n// 配置异步回调。\nint32_t ret = OH_AudioCodec_RegisterCallback(audioEnc_, cb_, signal_);\nif (ret != AV_ERR_OK) {\n    // 异常处理。\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_AudioCodec_Configure设置编码器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置选项key值说明："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(737248)/* ["default"] */.A) + "",
            width: "1375",
            height: "241"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "各音频编码类型参数范围说明："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(510184)/* ["default"] */.A) + "",
            width: "1990",
            height: "391"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "例如对一个44100Hz采样率、2声道立体声、SAMPLE_S16LE采样格式的PCM音频，以32000bps的码率进行AAC编码的调用流程如下："
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "   int32_t ret;\n   // 配置音频采样率（必须）\n   constexpr uint32_t DEFAULT_SAMPLERATE = 44100;\n   // 配置音频码率（必须）\n   constexpr uint64_t DEFAULT_BITRATE = 32000;\n   // 配置音频声道数（必须）\n   constexpr uint32_t DEFAULT_CHANNEL_COUNT = 2;\n   // 配置音频声道类型（必须）\n   constexpr OH_AudioChannelLayout CHANNEL_LAYOUT = OH_AudioChannelLayout::CH_LAYOUT_STEREO;\n   // 配置音频位深（必须）\n   constexpr OH_BitsPerSample SAMPLE_FORMAT = OH_BitsPerSample::SAMPLE_S16LE;\n   // 配置AAC profile（可选，默认值：AAC_PROFILE_LC，其他可选值：AAC_PROFILE_HE、AAC_PROFILE_HE_V2）\n   constexpr int32_t AAC_PROFILE = OH_AACProfile::AAC_PROFILE_LC;\n\n   OH_AVFormat *format = OH_AVFormat_Create();\n   // 写入format\n   OH_AVFormat_SetIntValue(format, OH_MD_KEY_AUD_CHANNEL_COUNT, DEFAULT_CHANNEL_COUNT);\n   OH_AVFormat_SetIntValue(format, OH_MD_KEY_AUD_SAMPLE_RATE, DEFAULT_SAMPLERATE);\n   OH_AVFormat_SetLongValue(format, OH_MD_KEY_BITRATE, DEFAULT_BITRATE);\n   OH_AVFormat_SetIntValue(format, OH_MD_KEY_AUDIO_SAMPLE_FORMAT, SAMPLE_FORMAT);\n   OH_AVFormat_SetLongValue(format, OH_MD_KEY_CHANNEL_LAYOUT, CHANNEL_LAYOUT);\n   OH_AVFormat_SetIntValue(format, OH_MD_KEY_PROFILE, AAC_PROFILE);\n   // 配置编码器\n   ret = OH_AudioCodec_Configure(audioEnc_, format);\n   if (ret != AV_ERR_OK) {\n       // 异常处理\n   }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例FLAC调用流程："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t ret;\n// 配置音频采样率（必须）。\nconstexpr uint32_t DEFAULT_SAMPLERATE = 44100;\n// 配置音频码率（必须）。\nconstexpr uint64_t DEFAULT_BITRATE = 261000;\n// 配置音频声道数（必须）。\nconstexpr uint32_t DEFAULT_CHANNEL_COUNT = 2;\n// 配置音频声道布局（必须）。\n// 值为CH_LAYOUT_MONO、CH_LAYOUT_STEREO、CH_LAYOUT_SURROUND、CH_LAYOUT_QUAD、CH_LAYOUT_5POINT0、CH_LAYOUT_5POINT1、CH_LAYOUT_6POINT1或CH_LAYOUT_7POINT1其中一项。\nconstexpr OH_AudioChannelLayout CHANNEL_LAYOUT = OH_AudioChannelLayout::CH_LAYOUT_STEREO;\n// 配置音频位深（必须） flac只有SAMPLE_S16LE和SAMPLE_S32LE。\nconstexpr OH_BitsPerSample SAMPLE_FORMAT = OH_BitsPerSample::SAMPLE_S32LE;\n// 配置音频compliance level (默认值0，取值范围-2~2)。\nconstexpr int32_t COMPLIANCE_LEVEL = 0;\n\nOH_AVFormat *format = OH_AVFormat_Create();\n// 写入format。\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_AUD_CHANNEL_COUNT, DEFAULT_CHANNEL_COUNT);\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_AUD_SAMPLE_RATE, DEFAULT_SAMPLERATE);\nOH_AVFormat_SetLongValue(format, OH_MD_KEY_BITRATE, DEFAULT_BITRATE);\n// 配置音频精度。API version 20前，FLAC编码必须设置此参数，设置为1即可；未设置此参数配置FLAC编码器时，调用OH_AudioCodec_Configure会返回错误码AV_ERR_INVALID_VAL。该值无实际作   用，不会影响编码结果。从API version 20开始，无需设置此参数。\n// constexpr int32_t BITS_PER_CODED_SAMPLE = 1;\n// OH_AVFormat_SetIntValue(format, OH_MD_KEY_BITS_PER_CODED_SAMPLE, BITS_PER_CODED_SAMPLE);\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_AUDIO_SAMPLE_FORMAT, SAMPLE_FORMAT);\nOH_AVFormat_SetLongValue(format, OH_MD_KEY_CHANNEL_LAYOUT, CHANNEL_LAYOUT);\nOH_AVFormat_SetLongValue(format, OH_MD_KEY_COMPLIANCE_LEVEL, COMPLIANCE_LEVEL);\n// 配置编码器。\nret = OH_AudioCodec_Configure(audioEnc_, format);\nif (ret != AV_ERR_OK) {\n    // 异常处理。\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例AMR编码调用流程："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t ret;\n// 配置音频采样率（必须），amr-nb输入采样率为8000hz的PCM，amr-wb输入采样率为16000hz的PCM\nconstexpr uint32_t DEFAULT_SAMPLERATE = 8000;\n// 配置音频码率（必须）\n// amr-nb支持码率4750、5150、5900、6700、7400、7950、10200、12200\n// amr-wb支持码率6600、8850、12650、14250、15850、18250、19850、23050、23850\nconstexpr uint64_t DEFAULT_BITRATE = 10200;\n// 配置音频声道数（必须）\nconstexpr uint32_t DEFAULT_CHANNEL_COUNT = 1;\n// 配置音频声道类型（必须）\nconstexpr OH_AudioChannelLayout CHANNEL_LAYOUT = OH_AudioChannelLayout::CH_LAYOUT_MONO;\n// 配置音频位深（必须）\nconstexpr OH_BitsPerSample SAMPLE_FORMAT = OH_BitsPerSample::SAMPLE_S16LE;\nOH_AVFormat *format = OH_AVFormat_Create();\n// 写入format\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_AUD_CHANNEL_COUNT, DEFAULT_CHANNEL_COUNT);\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_AUD_SAMPLE_RATE, DEFAULT_SAMPLERATE);\nOH_AVFormat_SetLongValue(format, OH_MD_KEY_BITRATE, DEFAULT_BITRATE);\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_AUDIO_SAMPLE_FORMAT, SAMPLE_FORMAT);\nOH_AVFormat_SetLongValue(format, OH_MD_KEY_CHANNEL_LAYOUT, CHANNEL_LAYOUT);\n// 配置编码器\nret = OH_AudioCodec_Configure(audioEnc_, format);\nif (ret != AV_ERR_OK) {\n    // 异常处理\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例opus编码调用流程："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t ret;\n// 配置音频采样率（必须）\n// opus编码支持采样率：8000、12000、16000、24000、48000\nconstexpr uint32_t DEFAULT_SAMPLERATE = 8000;\n// 配置音频码率（必须）\n// opus编码码率范围：[6000, 510000]\nconstexpr uint64_t DEFAULT_BITRATE = 6000;\n// 配置音频声道数（必须）\n// opus编码支持声道数：1、2\nconstexpr uint32_t DEFAULT_CHANNEL_COUNT = 1;\n// 配置音频位深（必须）\n// opus编码支持位深：SAMPLE_S16LE\nconstexpr OH_BitsPerSample SAMPLE_FORMAT = OH_BitsPerSample::SAMPLE_S16LE;\nOH_AVFormat *format = OH_AVFormat_Create();\n// 写入format\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_AUD_CHANNEL_COUNT, DEFAULT_CHANNEL_COUNT);\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_AUD_SAMPLE_RATE, DEFAULT_SAMPLERATE);\nOH_AVFormat_SetLongValue(format, OH_MD_KEY_BITRATE, DEFAULT_BITRATE);\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_AUDIO_SAMPLE_FORMAT, SAMPLE_FORMAT);\n// 配置编码器\nret = OH_AudioCodec_Configure(audioEnc_, format);\nif (ret != AV_ERR_OK) {\n    // 异常处理\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_AudioCodec_Prepare()，编码器就绪。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "int32_t ret = OH_AudioCodec_Prepare(audioEnc_);\nif (ret != AV_ERR_OK) {\n    // 异常处理。\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_AudioCodec_Start()启动编码器，进入运行态。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "添加头文件："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <fstream>\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用示例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ifstream inputFile_;\nofstream outFile_;\n\n// 根据实际使用情况填写输入文件路径。\nconst char* inputFilePath = \"/\";\n// 根据实际使用情况填写输出文件路径。\nconst char* outputFilePath = \"/\";\n// 打开待编码二进制文件路径（此处以输入为PCM文件为例）。\ninputFile_.open(inputFilePath, ios::in | ios::binary);\n// 配置编码文件输出路径（此处以输出为编码码流文件为例）。\noutFile_.open(outputFilePath, ios::out | ios::binary);\n// 开始编码。\nint32_t ret = OH_AudioCodec_Start(audioEnc_);\nif (ret != AV_ERR_OK) {\n    // 异常处理。\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_AudioCodec_PushInputBuffer()，写入待编码的数据。需开发者填充完整的输入数据后调用。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "每次输入的采样点数（SAMPLES_PER_FRAME）取值方法如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "AAC-LC编码每帧包含1024个PCM样点，建议单次输入1024个样点的数据量。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "HE-AAC编码每帧包含2048个PCM样点，建议单次输入2048个样点的数据量。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "flac比较特殊，需要根据如下表格进行设置。"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "采样率"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "样点数"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "8000"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "576"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "16000"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1152"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "22050"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "2304"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "24000"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "2304"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "32000"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "2304"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "44100"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "4608"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "48000"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "4608"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "88200"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "8192"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "96000"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "8192"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(79807)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "单次编码输入的数据量（单位：字节）为：采样点数（SAMPLES_PER_FRAME） * 声道数 * 单个采样点的占用字节。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "flac编码的样点数建议参考表格根据采样率对应的样点数进行设置，否则可能出现编码文件损坏问题。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 声道数。\nconstexpr int32_t DEFAULT_CHANNEL_COUNT = 2;\n// 采样点数，这里以AAC-LC为例，采样点数为1024。\nconstexpr int32_t SAMPLES_PER_FRAME = 1024;\n// 单次编码输入的数据量（单位：字节）为：采样点数 * 声道数 * 单个采样点的占用字节（以采样格式SAMPLE_S16LE为例）。\n// 如果最后一帧数据不满足长度，建议进行丢弃或填充处理。\nconstexpr int32_t INPUT_FRAME_BYTES = SAMPLES_PER_FRAME * DEFAULT_CHANNEL_COUNT * sizeof(short);\nuint32_t index = signal_->inQueue_.front();\nauto buffer = signal_->inBufferQueue_.front();\nOH_AVCodecBufferAttr attr = {0};\nif (!inputFile_.eof()) {\n    inputFile_.read((char *)OH_AVBuffer_GetAddr(buffer), INPUT_FRAME_BYTES);\n    attr.size = INPUT_FRAME_BYTES;\n    attr.flags = AVCODEC_BUFFER_FLAGS_NONE;\n} else {\n    attr.size = 0;\n    attr.flags = AVCODEC_BUFFER_FLAGS_EOS;\n}\nOH_AVBuffer_SetBufferAttr(buffer, &attr);\n// 送入编码输入队列进行编码, index为对应队列下标。\nint32_t ret = OH_AudioCodec_PushInputBuffer(audioEnc_, index);\nif (ret != AV_ERR_OK) {\n    // 异常处理。\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在上方案例中，attr.flags代表缓冲区标记的类别。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "结束时需要将flags标识为AVCODEC_BUFFER_FLAGS_EOS。"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "枚举值"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "描述"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "AVCODEC_BUFFER_FLAGS_NONE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "表示为普通帧。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "AVCODEC_BUFFER_FLAGS_EOS"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "表示缓冲区是流结束帧。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "AVCODEC_BUFFER_FLAGS_CODEC_DATA"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "表示缓冲区包含编解码特定数据。"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_AudioCodec_FreeOutputBuffer()，释放编码后的数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在取走编码码流后，就应及时调用OH_AudioCodec_FreeOutputBuffer()进行释放。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "uint32_t index = signal_->outQueue_.front();\nOH_AVBuffer *avBuffer = signal_->outBufferQueue_.front();\nif (avBuffer == nullptr) {\n    // 异常处理\n}\n// 获取buffer attributes。\nOH_AVCodecBufferAttr attr = {0};\nint32_t ret = OH_AVBuffer_GetBufferAttr(avBuffer, &attr);\nif (ret != AV_ERR_OK) {\n    // 异常处理。\n}\n// 将编码完成数据data写入到对应输出文件中。\noutFile_.write(reinterpret_cast<char *>(OH_AVBuffer_GetAddr(avBuffer)), attr.size);\n// 释放已完成写入的数据。\nret = OH_AudioCodec_FreeOutputBuffer(audioEnc_, index);\nif (ret != AV_ERR_OK) {\n    // 异常处理。\n}\nif (attr.flags == AVCODEC_BUFFER_FLAGS_EOS) {\n    // 结束。\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）调用OH_AudioCodec_Flush()刷新编码器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_AudioCodec_Flush()后，编码器处于Flush状态，会将当前编码队列清空。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "此时需要调用OH_AudioCodec_Start()重新开始编码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用情况："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "在编码输出buffer属性为AVCODEC_BUFFER_FLAGS_EOS后，若想重新使用相同配置进行编码时，需要调用刷新。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "在执行过程中遇到可继续执行的错误时（即OH_AudioCodec_IsValid()为true）可以调用刷新，然后调用OH_AudioCodec_Start()重新开始编码。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 刷新编码器 audioEnc_。\nint32_t ret = OH_AudioCodec_Flush(audioEnc_);\nif (ret != AV_ERR_OK) {\n    // 异常处理。\n}\n// 重新开始编码。\nret = OH_AudioCodec_Start(audioEnc_);\nif (ret != AV_ERR_OK) {\n    // 异常处理。\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）调用OH_AudioCodec_Reset()重置编码器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_AudioCodec_Reset()后，编码器回到初始化状态，重置前获取到的输入/输出buffer都无法继续使用，需先调用OH_AudioCodec_Configure()重新配置，再调用OH_AudioCodec_Start()重新开始编码。启动后重新获取输入/输出buffer。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 重置编码器 audioEnc_。\nint32_t ret = OH_AudioCodec_Reset(audioEnc_);\nif (ret != AV_ERR_OK) {\n    // 异常处理。\n}\n// 重新配置编码器参数。\nret = OH_AudioCodec_Configure(audioEnc_, format);\nif (ret != AV_ERR_OK) {\n    // 异常处理。\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_AudioCodec_Stop()停止编码器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "停止后，可以通过调用OH_AudioCodec_Start()重新进入已启动状态（started）。停止前获取到的输入/输出buffer都无法继续使用，需要在启动后重新获取输入/输出buffer。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 终止编码器 audioEnc_。\nint32_t ret = OH_AudioCodec_Stop(audioEnc_);\nif (ret != AV_ERR_OK) {\n    // 异常处理。\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_AudioCodec_Destroy()销毁编码器实例，释放资源。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(617616)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "禁止重复销毁编码器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 调用OH_AudioCodec_Destroy, 销毁编码器。\nint32_t ret = OH_AudioCodec_Destroy(audioEnc_);\nif (ret != AV_ERR_OK) {\n    // 异常处理。\n} else {\n    audioEnc_ = NULL; // 不可重复destroy。\n}\n"
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
39027(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798892-d0bf61375a14f7ceca89ed4c10945b8a.png");

},
823009(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
97617(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
510184(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958542-664cdab845e9c810ffd3501589bc39ba.png");

},
617616(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
126626(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
79807(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
737248(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438587-7f224e335b6ace50cf394ac52298cff6.png");

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