"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["13391"], {
799713(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_avcodec_kit_audio_video_codec_audiovivid_audiovivid_audiodecoder_audiovivid_audiodecoder_md_22e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-avcodec-kit-audio-video-codec-audiovivid-audiovivid-audiodecoder-audiovivid-audiodecoder-md-22e.json
var site_docs_avcodec_kit_audio_video_codec_audiovivid_audiovivid_audiodecoder_audiovivid_audiodecoder_md_22e_namespaceObject = JSON.parse('{"id":"avcodec-kit/audio-video-codec/audiovivid/audiovivid-audiodecoder/audiovivid-audiodecoder","title":"Audio Vivid解码","description":"获取解封装后的数据，送入解码器中，使用解码器获取PCM和Metadata元数据。详细的API请参考AudioCodec模块。","source":"@site/docs/avcodec-kit/audio-video-codec/audiovivid/audiovivid-audiodecoder/audiovivid-audiodecoder.md","sourceDirName":"avcodec-kit/audio-video-codec/audiovivid/audiovivid-audiodecoder","slug":"/avcodec-kit/audio-video-codec/audiovivid/audiovivid-audiodecoder/","permalink":"/harmonyos-docs-site/avcodec-kit/audio-video-codec/audiovivid/audiovivid-audiodecoder/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Audio Vivid解码","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/audiovivid-audiodecoder","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Audio Vivid解封装","permalink":"/harmonyos-docs-site/avcodec-kit/audio-video-codec/audiovivid/audiovivid-avdemuxer/"},"next":{"title":"Audio Vivid播放","permalink":"/harmonyos-docs-site/avcodec-kit/audio-video-codec/audiovivid/audiovivid-audiorenderer/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/avcodec-kit/audio-video-codec/audiovivid/audiovivid-audiodecoder/audiovivid-audiodecoder.md


const frontMatter = {
	title: 'Audio Vivid解码',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/audiovivid-audiodecoder',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = 'Audio Vivid解码';

const assets = {

};



const toc = [{
  "value": "在CMake脚本中链接到动态库",
  "id": "在cmake脚本中链接到动态库",
  "level": 2
}, {
  "value": "添加头文件",
  "id": "添加头文件",
  "level": 2
}, {
  "value": "定义相关实例",
  "id": "定义相关实例",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "audio-vivid解码",
        children: "Audio Vivid解码"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取解封装后的数据，送入解码器中，使用解码器获取PCM和Metadata元数据。详细的API请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/avcodec-api/avcodec-c/avcodec-module/capi-audiocodec/capi-audiocodec",
        children: "AudioCodec模块"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Audio Vivid解码当前支持的规格如下表所示。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "规格项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "支持范围"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "支持采样率"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32000，44100，48000，96000，192000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "支持码率范围"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16000~3075000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "支持声道数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1~16"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "支持的位深"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S16，S24"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "在cmake脚本中链接到动态库",
      children: "在CMake脚本中链接到动态库"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "target_link_libraries(sample PUBLIC\nlibnative_media_codecbase.so libnative_media_core.so\nlibnative_media_acodec.so libnative_media_avdemuxer.so libnative_media_avsource.so\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "添加头文件",
      children: "添加头文件"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "//解封装头文件\n#include \"multimedia/player_framework/native_avdemuxer.h\"\n#include <string>\n\n// 解封装解码传递信息结构体\nstruct AudioSampleInfo {\nstd::string audioCodecMime = \"\";\nint32_t audioSampleFormat = 0;\nint32_t audioSampleRate = 0;\nint32_t audioChannelCount = 0;\nint64_t audioChannelLayout = 0;\nuint8_t audioCodecConfig[100] = {0};\nsize_t audioCodecSize = 0;\n};\n\nAudioSampleInfo  info;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "定义相关实例",
      children: "定义相关实例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "定义CodecBufferInfo"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "解码码流的属性定义，为后面传给播放的码流数据封装。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "struct CodecBufferInfo {\n    uint32_t bufferIndex = 0;\n    uintptr_t *buffer = nullptr;\n    uint8_t *bufferAddr = nullptr;\n    OH_AVCodecBufferAttr attr = {0, 0, 0, AVCODEC_BUFFER_FLAGS_NONE};\n\n    CodecBufferInfo(uint8_t *addr) : bufferAddr(addr){};\n    CodecBufferInfo(uint8_t *addr, int32_t bufferSize)\n        : bufferAddr(addr), attr({0, bufferSize, 0, AVCODEC_BUFFER_FLAGS_NONE}){};\n    CodecBufferInfo(uint32_t argBufferIndex, OH_AVMemory *argBuffer, OH_AVCodecBufferAttr argAttr)\n        : bufferIndex(argBufferIndex), buffer(reinterpret_cast<uintptr_t *>(argBuffer)), attr(argAttr){};\n    CodecBufferInfo(uint32_t argBufferIndex, OH_AVMemory *argBuffer)\n        : bufferIndex(argBufferIndex), buffer(reinterpret_cast<uintptr_t *>(argBuffer)){};\n    CodecBufferInfo(uint32_t argBufferIndex, OH_AVBuffer *argBuffer)\n        : bufferIndex(argBufferIndex), buffer(reinterpret_cast<uintptr_t *>(argBuffer)) {\n        OH_AVBuffer_GetBufferAttr(argBuffer, &attr);\n    };\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "定义解码工作队列"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class CodecUserData {\npublic:\n    SampleInfo *sampleInfo = nullptr;\n\n    // 输入帧数\n    uint32_t inputFrameCount_ = 0;\n    // 输入队列锁，防止多线程同时操作输入队列\n    std::mutex inputMutex_;\n    // 输入线程的条件变量，当输入队列为空时用于阻塞输入线程\n    std::condition_variable inputCond_;\n    // 输入buffer队列，存放编解码器传给用户用来写入输入数据的buffer\n    std::queue<CodecBufferInfo> inputBufferInfoQueue_;\n\n    // 输出帧数\n    uint32_t outputFrameCount_ = 0;\n    // 输出队列锁，防止多线程同时操作输出队列\n    std::mutex outputMutex_;\n    // 输出线程的条件变量，当输出队列为空时用于阻塞输出线程\n    std::condition_variable outputCond_;\n    std::mutex renderMutex_;\n    std::condition_variable renderCond_;\n    // 输出buffer队列，存放编解码器传给用户用来存放输出数据的buffer\n    std::queue<CodecBufferInfo> outputBufferInfoQueue_;\n\n    std::shared_ptr<AudioDecoder> audioCodec_;\n    std::queue<unsigned char> renderQueue_;\n\n    void ClearQueue() {\n        {\n            std::unique_lock<std::mutex> lock(inputMutex_);\n            auto emptyQueue = std::queue<CodecBufferInfo>();\n            inputBufferInfoQueue_.swap(emptyQueue);\n        }\n        {\n            std::unique_lock<std::mutex> lock(outputMutex_);\n            auto emptyQueue = std::queue<CodecBufferInfo>();\n            outputBufferInfoQueue_.swap(emptyQueue);\n        }\n    }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "定义回调函数"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class SampleCallback {\npublic:\n    // 报错回调函数，当编解码器内部报错时调用，返回给用户相应错误码\n    static void OnCodecError(OH_AVCodec *codec, int32_t errorCode, void *userData);\n    // 参数修改回调函数，当编解码器参数被修改时调用，返回给用户被修改后的format参数\n    static void OnCodecFormatChange(OH_AVCodec *codec, OH_AVFormat *format, void *userData);\n    // 输入回调函数，当编解码器需要输入时调用，返回给用户用来写入输入数据的buffer及其对应的index\n    static void OnNeedInputBuffer(OH_AVCodec *codec, uint32_t index, OH_AVBuffer *buffer, void *userData);\n    // 输出回调函数，当编解码器生成新的输出数据时调用，返回给用户用来存放输出数据的buffer及其对应的index\n    static void OnNewOutputBuffer(OH_AVCodec *codec, uint32_t index, OH_AVBuffer *buffer, void *userData);\n};\nvoid SampleCallback::OnCodecError(OH_AVCodec *codec, int32_t errorCode, void *userData) {\n    (void)codec;\n    (void)errorCode;\n    (void)userData;\n}\nvoid SampleCallback::OnCodecFormatChange(OH_AVCodec *codec, OH_AVFormat *format, void *userData) {\n}\nvoid SampleCallback::OnNeedInputBuffer(OH_AVCodec *codec, uint32_t index, OH_AVBuffer *buffer, void *userData) {\n    if (userData == nullptr) {\n        return;\n    }\n    (void)codec;\n    CodecUserData *codecUserData = static_cast<CodecUserData *>(userData);\n    std::unique_lock<std::mutex> lock(codecUserData->inputMutex_);\n    // 将输入buffer存放到输入队列中\n    codecUserData->inputBufferInfoQueue_.emplace(index, buffer);\n    // 通知输入线程开始运行\n    codecUserData->inputCond_.notify_all();\n}\n\nvoid SampleCallback::OnNewOutputBuffer(OH_AVCodec *codec, uint32_t index, OH_AVBuffer *buffer, void *userData) {\n    if (userData == nullptr) {\n        return;\n    }\n    (void)codec;\n    CodecUserData *codecUserData = static_cast<CodecUserData *>(userData);\n    std::unique_lock<std::mutex> lock(codecUserData->outputMutex_);\n    // 将输出buffer存放到输出队列中\n    codecUserData->outputBufferInfoQueue_.emplace(index, buffer);\n    // 通知输出线程开始运行\n    codecUserData->outputCond_.notify_all();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建解码实例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 创建解码器\nOH_AVCodec * decoder = OH_AudioCodec_CreateByMime(info.audioCodecMime,false);\n\n// 参数配置\nOH_AVFormat *format = OH_AVFormat_Create();\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_AUDIO_SAMPLE_FORMAT, SAMPLE_S16LE); //或者S24LE\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_AUD_CHANNEL_COUNT, sampleInfo.audioChannelCount);\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_AUD_SAMPLE_RATE, sampleInfo.audioSampleRate);\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_AAC_IS_ADTS, 1);\nOH_AVFormat_SetLongValue(format, OH_MD_KEY_BITRATE, 96422);//码率，当前作为参考，解封装也可以获取到\nOH_AVFormat_SetBuffer(format, OH_MD_KEY_CODEC_CONFIG, sampleInfo.audioCodecConfig, sampleInfo.audioCodecSize);\nbool res = OH_AVFormat_SetLongValue(format, OH_MD_KEY_CHANNEL_LAYOUT, sampleInfo.audioChannelLayout);\nret = OH_AudioCodec_Configure(decoder, format);\nOH_AVFormat_Destroy(format);\nformat = nullptr;\n\n// 设置回调，用于输入输出buffer准备完毕后由系统回调出来\nint32_t ret = OH_AudioCodec_RegisterCallback(decoder,\n    {SampleCallback::OnCodecError, SampleCallback::OnCodecFormatChange,\n     SampleCallback::OnNeedInputBuffer, SampleCallback::OnNewOutputBuffer},codecUserData);\n// 准备回调和参数设置完毕后通知系统解码器准备好了，下一步准备启动。\nret = OH_AudioCodec_Prepare(decoder)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "音频写入解码器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "int32_t PushInputData(CodecBufferInfo &info)\n{\n    int32_t  ret = OH_AVBuffer_SetBufferAttr(reinterpret_cast<OH_AVBuffer *>(info.buffer), &info.attr);\n    ret = OH_AudioCodec_PushInputBuffer(decoder, info.bufferIndex);\n    return 0;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "释放使用过的输出码流。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "int32_t AudioDecoder::FreeOutputData(uint32_t bufferIndex)\n{\n    int32_t ret = 0;\n    ret = OH_AudioCodec_FreeOutputBuffer(decoder, bufferIndex);\n    return ret ;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "音频写入线程。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "CodecUserData*audioDecContext_ = new CodecUserData;\nvoid AudioDecInputThread()\n{\n    while (true) {\n        if(!isStarted_){\n           return;\n        }\n        std::unique_lock<std::mutex> lock(audioDecContext_->inputMutex_);\n        // 阻塞输入线程，直到程序运行结束，或者输入队列不为空\n        bool condRet = audioDecContext_->inputCond_.wait_for(\n            lock, 5s, [this]() { return !isStarted_ || !audioDecContext_->inputBufferInfoQueue_.empty(); });\n        if(!isStarted_ || audioDecContext_->inputBufferInfoQueue_.empty()){\n           return;\n        }\n        // 获取输入buffer\n        CodecBufferInfo bufferInfo = audioDecContext_->inputBufferInfoQueue_.front();\n        audioDecContext_->inputBufferInfoQueue_.pop();\n        audioDecContext_->inputFrameCount_++;\n        lock.unlock();\n        // 从解封装器中读取一帧数据写入输入buffer\n        demuxer_->ReadSample(demuxer_->GetAudioTrackId(), reinterpret_cast<OH_AVBuffer *>(bufferInfo.buffer), bufferInfo.attr);\n        int32_t ret = audioDecoder_->PushInputData(bufferInfo);\n        if(ret != 0){\n            return;\n        }\n        if(bufferInfo.attr.flags & AVCODEC_BUFFER_FLAGS_EOS){\n            return;\n        }\n    }\n    // StartRelease();\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "音频解码输出线程。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "void AudioDecOutputThread()\n{\n    while (true) {\n        if(!isStarted_){\n           return;\n        }\n        std::unique_lock<std::mutex> lock(audioDecContext_->outputMutex_);\n        // 阻塞输出线程，直到程序运行结束，或者输出队列不为空\n        bool condRet = audioDecContext_->outputCond_.wait_for(\n            lock, 5s, [this]() { return !isStarted_ || !audioDecContext_->outputBufferInfoQueue_.empty(); });\n        if(!isStarted_ || audioDecContext_->outputBufferInfoQueue_.empty()){\n           return;\n        }\n        // 获取输出buffer\n        CodecBufferInfo bufferInfo = audioDecContext_->outputBufferInfoQueue_.front();\n        audioDecContext_->outputBufferInfoQueue_.pop();\n        if(bufferInfo.attr.flags & AVCODEC_BUFFER_FLAGS_EOS){\n           return;\n        }\n        audioDecContext_->outputFrameCount_++;\n        // 获取解码后的pcm数据\n        uint8_t *source = OH_AVBuffer_GetAddr(reinterpret_cast<OH_AVBuffer *>(bufferInfo.buffer));\n        OH_AVFormat * format = OH_AVBuffer_GetParameter(reinterpret_cast<OH_AVBuffer *>(bufferInfo.buffer));\n        uint8_t * metadata;\n        size_t size;\n        // 获取元数据\n        OH_AVFormat_GetBuffer(format, OH_MD_KEY_AUDIO_VIVID_METADATA, &metadata, &size);\n#ifdef DEBUG_DECODE\n        if (audioOutputFile_.is_open()) {\n            audioOutputFile_.write((const char*)OH_AVBuffer_GetAddr(reinterpret_cast<OH_AVBuffer *>(bufferInfo.buffer)), bufferInfo.attr.size);\n        }\n#endif\n        lock.unlock();\n        int32_t ret = audioDecoder_->FreeOutputData(bufferInfo.bufferIndex);\n        if(ret != 0){\n            return;\n        }\n    }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "启动解码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "int ret = OH_AudioCodec_Start(decoder);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "停止和释放实例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_AudioCodec_Stop(decoder);\nOH_AudioCodec_Destroy(decoder);\ndecoder = nullptr;\n"
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