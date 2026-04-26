"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["808672"], {
304096(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_avcodec_kit_audio_video_codec_audio_decoding_audio_decoding_md_cd3_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-avcodec-kit-audio-video-codec-audio-decoding-audio-decoding-md-cd3.json
var site_docs_avcodec_kit_audio_video_codec_audio_decoding_audio_decoding_md_cd3_namespaceObject = JSON.parse('{"id":"avcodec-kit/audio-video-codec/audio-decoding/audio-decoding","title":"音频解码","description":"开发者可以调用本模块的Native API接口，完成音频解码，即将媒体数据解码为PCM码流。","source":"@site/docs/avcodec-kit/audio-video-codec/audio-decoding/audio-decoding.md","sourceDirName":"avcodec-kit/audio-video-codec/audio-decoding","slug":"/avcodec-kit/audio-video-codec/audio-decoding/","permalink":"/harmonyos-docs-site/avcodec-kit/audio-video-codec/audio-decoding/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"音频解码","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/audio-decoding","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"音频编码同步模式","permalink":"/harmonyos-docs-site/avcodec-kit/audio-video-codec/synchronous-audio-encoding/"},"next":{"title":"音频解码同步模式","permalink":"/harmonyos-docs-site/avcodec-kit/audio-video-codec/synchronous-audio-decoding/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/avcodec-kit/audio-video-codec/audio-decoding/audio-decoding.md


const frontMatter = {
	title: '音频解码',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/audio-decoding',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '音频解码';

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
        id: "音频解码",
        children: "音频解码"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以调用本模块的Native API接口，完成音频解码，即将媒体数据解码为PCM码流。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当前支持的解码能力请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/avcodec-kit/avcodec-support-formats#%E9%9F%B3%E9%A2%91%E8%A7%A3%E7%A0%81",
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
          children: "音频播放"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在播放音频之前，需要先解码音频，再将数据输送到硬件扬声器播放。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "音频渲染"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在对音频文件进行音效处理之前，需要先解码再由音频处理模块进行音频渲染。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "音频编辑"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "音频编辑（如调整单个声道的播放倍速等）需要基于PCM码流进行，所以需要先将音频文件解码。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(620787)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过MP3音频编码流程生成的码流无法直接通过MP3音频解码流程进行解码。建议通过（PCM码流->MP3音频编码->封装->解封装->MP3音频解码）流程进行。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发指导",
      children: "开发指导"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细的API说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-audiocodec-h/capi-native-avcodec-audiocodec-h",
        children: "native_avcodec_audiocodec.h"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参考以下示例代码，完成音频解码的全流程，包括：创建解码器、设置解码参数（采样率/码率/声道数等）、开始、刷新、重置、销毁资源。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在应用开发过程中，开发者应按一定顺序调用方法，执行对应操作，否则系统可能会抛出异常或产生其他未定义的行为。具体顺序可参考下列开发步骤及对应说明。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如下为音频解码调用关系图："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "虚线表示可选。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "实线表示必选。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(333919)/* ["default"] */.A) + "",
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
        src: (__webpack_require__(882150)/* ["default"] */.A) + "",
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
          children: "创建解码器实例对象，OH_AVCodec *为解码器实例指针。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用可以通过媒体类型或编解码器名称创建解码器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "方法一：通过 Mimetype 创建解码器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 设置判定是否为编码；设置false表示当前是解码。\nbool isEncoder = false;\n// 通过 Mimetype 创建解码器。\nOH_AVCodec *audioDec_ = OH_AudioCodec_CreateByMime(OH_AVCODEC_MIMETYPE_AUDIO_AAC, isEncoder);\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "方法二：通过 codec name 创建解码器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 通过 codec name 创建解码器。\nOH_AVCapability *capability = OH_AVCodec_GetCapability(OH_AVCODEC_MIMETYPE_AUDIO_AAC, false);\nconst char *name = OH_AVCapability_GetName(capability);\nOH_AVCodec *audioDec_ = OH_AudioCodec_CreateByName(name);\n"
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
            children: "// 初始化队列。\nclass ADecBufferSignal {\npublic:\n    std::mutex inMutex_;\n    std::mutex outMutex_;\n    std::mutex startMutex_;\n    std::condition_variable inCond_;\n    std::condition_variable outCond_;\n    std::condition_variable startCond_;\n    std::queue<uint32_t> inQueue_;\n    std::queue<uint32_t> outQueue_;\n    std::queue<OH_AVBuffer *> inBufferQueue_;\n    std::queue<OH_AVBuffer *> outBufferQueue_;\n};\nADecBufferSignal *signal_;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_AudioCodec_RegisterCallback()注册回调函数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "注册回调函数指针集合OH_AVCodecCallback，包括："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "OH_AVCodecOnError：解码器运行错误。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "OH_AVCodecOnStreamChanged：码流信息变化回调，包括采样率变化、声道数变化、音频采样格式变化，支持检测此变化的解码格式有：Audio Vivid，AAC，FLAC，MP3，VORBIS。(API version 15开始支持)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "OH_AVCodecOnNeedInputBuffer：运行过程中需要新的输入数据，即解码器已准备好，可以输入数据。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "OH_AVCodecOnNewOutputBuffer：运行过程中产生了新的输出数据，即解码完成。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开发者可以通过处理该回调报告的信息，确保解码器正常运转。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(883029)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "请勿在回调中调用解码器的相关接口或进行耗时操作。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// OH_AVCodecOnError回调函数的实现。\nstatic void OnError(OH_AVCodec *codec, int32_t errorCode, void *userData)\n{\n    (void)codec;\n    (void)errorCode;\n    (void)userData;\n}\n// OH_AVCodecOnStreamChanged回调函数的实现。\nstatic void OnOutputFormatChanged(OH_AVCodec *codec, OH_AVFormat *format, void *userData)\n{\n    (void)codec;\n    (void)userData;\n    // 解码输出参数变化后的回调处理，应用根据实际情况进行处理。\n    int32_t sampleRate;\n    int32_t channelCount;\n    int32_t sampleFormat;\n    if (OH_AVFormat_GetIntValue(format, OH_MD_KEY_AUD_SAMPLE_RATE, &sampleRate)) {\n        // 判断采样率是否发生变化，进行对应处理。\n    }\n    if (OH_AVFormat_GetIntValue(format, OH_MD_KEY_AUD_CHANNEL_COUNT, &channelCount)) {\n        // 判断声道数是否发生变化，进行对应处理。\n    }\n    if (OH_AVFormat_GetIntValue(format, OH_MD_KEY_AUDIO_SAMPLE_FORMAT, &sampleFormat)) {\n        // 判断音频采样格式是否发生变化，进行对应处理。\n    }\n}\n// OH_AVCodecOnNeedInputBuffer回调函数的实现。\nstatic void OnInputBufferAvailable(OH_AVCodec *codec, uint32_t index, OH_AVBuffer *data, void *userData)\n{\n    (void)codec;\n    ADecBufferSignal *signal = static_cast<ADecBufferSignal *>(userData);\n    unique_lock<mutex> lock(signal->inMutex_);\n    signal->inQueue_.push(index);\n    signal->inBufferQueue_.push(data);\n    signal->inCond_.notify_all();\n    // 解码输入码流送入inBufferQueue_队列。\n}\n// OH_AVCodecOnNewOutputBuffer回调函数的实现。\nstatic void OnOutputBufferAvailable(OH_AVCodec *codec, uint32_t index, OH_AVBuffer *data, void *userData)\n{\n    (void)codec;\n    ADecBufferSignal *signal = static_cast<ADecBufferSignal *>(userData);\n    unique_lock<mutex> lock(signal->outMutex_);\n    signal->outQueue_.push(index);\n    signal->outBufferQueue_.push(data);\n    signal->outCond_.notify_all();\n    // 将对应输出buffer的 index 送入outQueue_队列。\n    // 将对应解码完成的数据data送入outBufferQueue_队列。\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置回调："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "signal_ = new ADecBufferSignal();\nOH_AVCodecCallback cb_ = {&OnError, &OnOutputFormatChanged, &OnInputBufferAvailable, &OnOutputBufferAvailable};\n// 配置异步回调。\nint32_t ret = OH_AudioCodec_RegisterCallback(audioDec_, cb_, signal_);\nif (ret != AV_ERR_OK) {\n    // 异常处理。\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）OH_AudioCodec_SetDecryptionConfig设置解密配置。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["当获取到DRM信息(参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/avcodec-kit/file-muxing-demuxing/audio-video-demuxer",
            children: "音视频解封装"
          }), "开发步骤第4步)后，通过此接口进行解密配置。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["DRM相关接口详见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/drm-api/drm-c/drm-module/capi-drm/capi-drm",
            children: "DRM API文档"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "此接口需在Prepare前调用。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "添加头文件:"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <multimedia/drm_framework/native_mediakeysystem.h>\n#include <multimedia/drm_framework/native_mediakeysession.h>\n#include <multimedia/drm_framework/native_drm_err.h>\n#include <multimedia/drm_framework/native_drm_common.h>\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在 CMake 脚本中链接动态库:"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "target_link_libraries(sample PUBLIC libnative_drm.so)\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用示例:"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 根据DRM信息创建指定的DRM系统, 以创建\"com.wiseplay.drm\"为例。\nMediaKeySystem *system = nullptr;\nint32_t ret = OH_MediaKeySystem_Create(\"com.wiseplay.drm\", &system);\nif (system == nullptr) {\n    printf(\"create media key system failed\");\n    return;\n}\n\n// 创建解密会话。\nMediaKeySession *session = nullptr;\nDRM_ContentProtectionLevel contentProtectionLevel = CONTENT_PROTECTION_LEVEL_SW_CRYPTO;\nret = OH_MediaKeySystem_CreateMediaKeySession(system, &contentProtectionLevel, &session);\nif (ret != DRM_ERR_OK) {\n    // 如创建失败，请查看DRM接口文档及日志信息。\n    printf(\"create media key session failed.\");\n    return;\n}\nif (session == nullptr) {\n    printf(\"media key session is nullptr.\");\n    return;\n}\n// 获取许可证请求、设置许可证响应等。\n// 设置解密配置, 即将解密会话、安全通路标志(当前音频解密不支持安全通路，应设置为false)设置到解码器中。\nbool secureAudio = false;\nret = OH_AudioCodec_SetDecryptionConfig(audioDec_, session, secureAudio);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_AudioCodec_Configure()配置解码器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置选项key值说明："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(703033)/* ["default"] */.A) + "",
            width: "2953",
            height: "337"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "各音频解码类型参数范围说明："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(573154)/* ["default"] */.A) + "",
            width: "1534",
            height: "607"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["从API version 20开始，支持", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcapability-h/capi-native-avcapability-h#oh_avcapability_getaudiosupportedsamplerateranges",
            children: "采样率范围"
          }), "能力查询，以下几种音频解码类型支持对范围内的任意采样率进行解码："]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "音频解码类型"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "采样率(Hz)"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Flac"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "8000 ~ 384000"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Vorbis"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "8000 ~ 192000"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "APE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1 ~ 2147483647"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 配置音频采样率（必须）。\nconstexpr uint32_t DEFAULT_SAMPLERATE = 44100;\n// 配置音频码率（可选）。\nconstexpr uint32_t DEFAULT_BITRATE = 32000;\n// 配置音频声道数（必须）。\nconstexpr uint32_t DEFAULT_CHANNEL_COUNT = 2;\n// 配置最大输入长度（可选）。\nconstexpr uint32_t DEFAULT_MAX_INPUT_SIZE = 1152;\n// 配置是否为ADTS解码（aac解码时可选）。\nconstexpr uint32_t DEFAULT_AAC_TYPE = 1;\n// 配置划分音频数据块字节数，从API version 22开始支持，仅WMAV1、WMAV2、WMA PRO解码时必须配置。\nconstexpr int32_t DEFAULT_BLOCK_ALIGN = 1;\nOH_AVFormat *format = OH_AVFormat_Create();\n// 写入format。\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_AUD_SAMPLE_RATE, DEFAULT_SAMPLERATE);\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_BITRATE, DEFAULT_BITRATE);\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_AUD_CHANNEL_COUNT, DEFAULT_CHANNEL_COUNT);\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_MAX_INPUT_SIZE, DEFAULT_MAX_INPUT_SIZE);\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_AAC_IS_ADTS, DEFAULT_AAC_TYPE);\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_BLOCK_ALIGN, DEFAULT_BLOCK_ALIGN);\n// 配置解码器。\nint32_t ret = OH_AudioCodec_Configure(audioDec_, format);\nif (ret != AV_ERR_OK) {\n    // 异常处理。\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_AudioCodec_Prepare()，解码器就绪。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "int32_t ret = OH_AudioCodec_Prepare(audioDec_);\nif (ret != AV_ERR_OK) {\n    // 异常处理。\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_AudioCodec_Start()启动解码器，进入运行态。"
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
            children: "ifstream inputFile_;\nofstream outFile_;\n\n// 根据实际使用情况填写输入文件路径。\nconst char* inputFilePath = \"/\";\n// 根据实际使用情况填写输出文件路径。\nconst char* outputFilePath = \"/\";\n// 打开待解码二进制文件路径。\ninputFile_.open(inputFilePath, ios::in | ios::binary);\n// 配置解码文件输出路径。\noutFile_.open(outputFilePath, ios::out | ios::binary);\n// 开始解码。\nint32_t ret = OH_AudioCodec_Start(audioDec_);\nif (ret != AV_ERR_OK) {\n    // 异常处理。\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）调用OH_AVCencInfo_SetAVBuffer()，设置cencInfo。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["若当前播放的节目是DRM加密节目，且由上层应用做", (0,jsx_runtime.jsx)(_components.a, {
            href: "/avcodec-kit/file-muxing-demuxing/audio-video-demuxer",
            children: "媒体解封装"
          }), "，则须调用OH_AVCencInfo_SetAVBuffer()将cencInfo设置给AVBuffer，以实现AVBuffer中媒体数据的解密。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "添加头文件："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <multimedia/player_framework/native_cencinfo.h>\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在 CMake 脚本中链接动态库："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "target_link_libraries(sample PUBLIC libnative_media_avcencinfo.so)\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用示例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "auto buffer = signal_->inBufferQueue_.front();\nuint32_t keyIdLen = DRM_KEY_ID_SIZE;\nuint8_t keyId[] = {\n    0xd4, 0xb2, 0x01, 0xe4, 0x61, 0xc8, 0x98, 0x96,\n    0xcf, 0x05, 0x22, 0x39, 0x8d, 0x09, 0xe6, 0x28};\nuint32_t ivLen = DRM_KEY_IV_SIZE;\nuint8_t iv[] = {\n    0xbf, 0x77, 0xed, 0x51, 0x81, 0xde, 0x36, 0x3e,\n    0x52, 0xf7, 0x20, 0x4f, 0x72, 0x14, 0xa3, 0x95};\nuint32_t encryptedBlockCount = 0;\nuint32_t skippedBlockCount = 0;\nuint32_t firstEncryptedOffset = 0;\nuint32_t subsampleCount = 1;\nDrmSubsample subsamples[1] = { {0x10, 0x16} };\n// 创建CencInfo实例。\nOH_AVCencInfo *cencInfo = OH_AVCencInfo_Create();\nif (cencInfo == nullptr) {\n    // 异常处理。\n}\n// 设置解密算法。\nOH_AVErrCode errNo = OH_AVCencInfo_SetAlgorithm(cencInfo, DRM_ALG_CENC_AES_CTR);\nif (errNo != AV_ERR_OK) {\n    // 异常处理。\n}\n// 设置KeyId和Iv。\nerrNo = OH_AVCencInfo_SetKeyIdAndIv(cencInfo, keyId, keyIdLen, iv, ivLen);\nif (errNo != AV_ERR_OK) {\n    // 异常处理。\n}\n// 设置Sample信息。\nerrNo = OH_AVCencInfo_SetSubsampleInfo(cencInfo, encryptedBlockCount, skippedBlockCount, firstEncryptedOffset,\n    subsampleCount, subsamples);\nif (errNo != AV_ERR_OK) {\n    // 异常处理。\n}\n// 设置模式：KeyId、Iv和SubSamples已被设置。\nerrNo = OH_AVCencInfo_SetMode(cencInfo, DRM_CENC_INFO_KEY_IV_SUBSAMPLES_SET);\nif (errNo != AV_ERR_OK) {\n    // 异常处理。\n}\n// 将CencInfo设置到AVBuffer中。\nerrNo = OH_AVCencInfo_SetAVBuffer(cencInfo, buffer);\nif (errNo != AV_ERR_OK) {\n    // 异常处理。\n}\n// 销毁CencInfo实例。\nerrNo = OH_AVCencInfo_Destroy(cencInfo);\nif (errNo != AV_ERR_OK) {\n    // 异常处理。\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_AudioCodec_PushInputBuffer()，写入待解码的数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "需开发者填充完整的输入数据后调用。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "结束时需要将flags标识为AVCODEC_BUFFER_FLAGS_EOS。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "uint32_t index = signal_->inQueue_.front();\nauto buffer = signal_->inBufferQueue_.front();\nint32_t size;\nint64_t pts;\n// size是待解码数据的每帧帧长度。pts是每帧的时间戳，用于指示音频应该何时被播放。\n// size和pts的获取来源：音视频资源文件或者待解码的数据流。\n// 若是解码音视频资源文件，则需从解封装OH_AVDemuxer_ReadSampleBuffer的buffer中获取。\n// 若是解码数据流，则需要从数据流的提供者获取。\n// 此处为了介绍解码功能以测试文件中保存的size和pts为示例。\ninputFile_.read(reinterpret_cast<char *>(&size), sizeof(size));\ninputFile_.read(reinterpret_cast<char *>(&pts), sizeof(pts));\ninputFile_.read((char *)OH_AVBuffer_GetAddr(buffer), size);\nOH_AVCodecBufferAttr attr = {0};\nif (inputFile_.eof()) {\n    attr.size = 0;\n    attr.flags = AVCODEC_BUFFER_FLAGS_EOS;\n} else {\n    attr.size = size;\n    attr.flags = AVCODEC_BUFFER_FLAGS_NONE;\n}\nattr.pts = pts;\nOH_AVBuffer_SetBufferAttr(buffer, &attr);\nint32_t ret = OH_AudioCodec_PushInputBuffer(audioDec_, index);\nif (ret != AV_ERR_OK) {\n    // 异常处理。\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_AudioCodec_FreeOutputBuffer()，释放解码后的数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在获取解码PCM码流后，应及时调用OH_AudioCodec_FreeOutputBuffer()进行释放。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "uint32_t index = signal_->outQueue_.front();\nOH_AVBuffer *data = signal_->outBufferQueue_.front();\nif (data == nullptr) {\n    // 异常处理\n}\n// 获取buffer attributes。\nOH_AVCodecBufferAttr attr = {0};\nint32_t ret = OH_AVBuffer_GetBufferAttr(data, &attr);\nif (ret != AV_ERR_OK) {\n    // 异常处理。\n}\n// 将解码完成数据data写入到对应输出文件中。\noutFile_.write(reinterpret_cast<char *>(OH_AVBuffer_GetAddr(data)), attr.size);\nret = OH_AudioCodec_FreeOutputBuffer(audioDec_, index);\nif (ret != AV_ERR_OK) {\n    // 异常处理。\n}\nif (attr.flags == AVCODEC_BUFFER_FLAGS_EOS) {\n    // 结束。\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 11开始，Audio Vivid新增获取元数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uint32_t index = signal_->outQueue_.front();\nOH_AVBuffer *data = signal_->outBufferQueue_.front();\n// 获取buffer attributes。\nOH_AVCodecBufferAttr attr = {0};\nint32_t ret = OH_AVBuffer_GetBufferAttr(data, &attr);\nif (ret != AV_ERR_OK) {\n    // 异常处理。\n}\n// 将解码完成数据data写入到对应输出文件中。\noutFile_.write(reinterpret_cast<char *>(OH_AVBuffer_GetAddr(data)), attr.size);\n\n// API version 11开始提供 获取audio vivid 元数据。\nOH_AVFormat *format = OH_AVBuffer_GetParameter(data);\nuint8_t *metadata = nullptr;\nsize_t metaSize;\nOH_AVFormat_GetBuffer(format, OH_MD_KEY_AUDIO_VIVID_METADATA, &metadata, &metaSize);\n\nret = OH_AudioCodec_FreeOutputBuffer(audioDec_, index);\nif (ret != AV_ERR_OK) {\n    // 异常处理。\n}\nif (attr.flags == AVCODEC_BUFFER_FLAGS_EOS) {\n    // 结束。\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）调用OH_AudioCodec_Flush()刷新解码器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_AudioCodec_Flush()后，解码器仍处于运行态，但会将当前队列清空，将已解码的数据释放。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "此时需要调用OH_AudioCodec_Start()重新开始解码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用情况："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "在解码输出buffer属性为AVCODEC_BUFFER_FLAGS_EOS后，若想重新使用相同配置进行解码时，需要调用刷新。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "在执行过程中遇到可继续执行的错误时（即OH_AudioCodec_IsValid()为true）可以调用刷新，然后调用OH_AudioCodec_Start()重新开始解码。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 刷新解码器 audioDec_。\nint32_t ret = OH_AudioCodec_Flush(audioDec_);\nif (ret != AV_ERR_OK) {\n    // 异常处理。\n}\n// 重新开始解码。\nret = OH_AudioCodec_Start(audioDec_);\nif (ret != AV_ERR_OK) {\n    // 异常处理。\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）调用OH_AudioCodec_Reset()重置解码器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_AudioCodec_Reset()后，解码器回到初始化状态，重置前获取到的输入/输出buffer都无法继续使用，需先调用OH_AudioCodec_Configure()重新配置，再调用OH_AudioCodec_Start()重新开始解码。启动后重新获取输入/输出buffer。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 重置解码器 audioDec_。\nint32_t ret = OH_AudioCodec_Reset(audioDec_);\nif (ret != AV_ERR_OK) {\n    // 异常处理。\n}\n// 重新配置解码器参数。\nret = OH_AudioCodec_Configure(audioDec_, format);\nif (ret != AV_ERR_OK) {\n    // 异常处理。\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_AudioCodec_Stop()停止解码器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "停止后，可以通过调用OH_AudioCodec_Start()重新进入已启动状态（started）。停止前获取到的输入/输出buffer都无法继续使用，需要在启动后重新获取输入/输出buffer。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 终止解码器 audioDec_。\nint32_t ret = OH_AudioCodec_Stop(audioDec_);\nif (ret != AV_ERR_OK) {\n    // 异常处理。\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_AudioCodec_Destroy()销毁解码器实例，释放资源。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(431443)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "禁止重复销毁解码器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 调用OH_AudioCodec_Destroy, 销毁解码器。\nint32_t ret = OH_AudioCodec_Destroy(audioDec_);\nif (ret != AV_ERR_OK) {\n    // 异常处理。\n} else {\n    audioDec_ = NULL; // 不可重复destroy。\n}\n"
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
333919(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798892-d0bf61375a14f7ceca89ed4c10945b8a.png");

},
620787(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
431443(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
703033(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798894-aa758fc50463b9ff3fd521fceaddc3e4.png");

},
882150(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
573154(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438589-d142a20a49976df937cc4706d6ad5672.png");

},
883029(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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