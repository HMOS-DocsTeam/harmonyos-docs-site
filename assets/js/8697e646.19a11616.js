"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["83275"], {
909251(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_avcodec_kit_audio_video_codec_hdr_vivid_capability_hdr_vivid_video_player_hdr_vivid_video_player_md_869_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-avcodec-kit-audio-video-codec-hdr-vivid-capability-hdr-vivid-video-player-hdr-vivid-video-player-md-869.json
var site_docs_avcodec_kit_audio_video_codec_hdr_vivid_capability_hdr_vivid_video_player_hdr_vivid_video_player_md_869_namespaceObject = JSON.parse('{"id":"avcodec-kit/audio-video-codec/hdr-vivid-capability/hdr-vivid-video-player/hdr-vivid-video-player","title":"HDR Vivid视频播放","description":"开发者可以调用本模块的Native API接口，实现在视频播放中支持HDR Vivid标准。","source":"@site/docs/avcodec-kit/audio-video-codec/hdr-vivid-capability/hdr-vivid-video-player/hdr-vivid-video-player.md","sourceDirName":"avcodec-kit/audio-video-codec/hdr-vivid-capability/hdr-vivid-video-player","slug":"/avcodec-kit/audio-video-codec/hdr-vivid-capability/hdr-vivid-video-player/","permalink":"/harmonyos-docs-site/avcodec-kit/audio-video-codec/hdr-vivid-capability/hdr-vivid-video-player/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"HDR Vivid视频播放","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hdr-vivid-video-player","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Audio Vivid播放","permalink":"/harmonyos-docs-site/avcodec-kit/audio-video-codec/audiovivid/audiovivid-audiorenderer/"},"next":{"title":"HDR Vivid视频录制","permalink":"/harmonyos-docs-site/avcodec-kit/audio-video-codec/hdr-vivid-capability/hdr-vivid-video-recorder/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/avcodec-kit/audio-video-codec/hdr-vivid-capability/hdr-vivid-video-player/hdr-vivid-video-player.md


const frontMatter = {
	title: 'HDR Vivid视频播放',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hdr-vivid-video-player',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = 'HDR Vivid视频播放';

const assets = {

};



const toc = [{
  "value": "HDR Vivid视频解析",
  "id": "hdr-vivid视频解析",
  "level": 2
}, {
  "value": "在 CMake 脚本中链接动态库",
  "id": "在-cmake-脚本中链接动态库",
  "level": 3
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 3
}, {
  "value": "HDR Vivid视频解码",
  "id": "hdr-vivid视频解码",
  "level": 2
}, {
  "value": "在 CMake 脚本中链接动态库",
  "id": "在-cmake-脚本中链接动态库-1",
  "level": 3
}, {
  "value": "定义基础结构",
  "id": "定义基础结构",
  "level": 3
}, {
  "value": "开发步骤",
  "id": "开发步骤-1",
  "level": 3
}, {
  "value": "处理视频帧数据",
  "id": "处理视频帧数据",
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
        id: "hdr-vivid视频播放",
        children: "HDR Vivid视频播放"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以调用本模块的Native API接口，实现在视频播放中支持HDR Vivid标准。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "视频播放的主要流程，是将视频文件“解封装 > 解码 > 送显/播放”。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hdr-vivid视频解析",
      children: "HDR Vivid视频解析"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从视频文件中，可以解析出其是否为HDR Vivid视频，如果视频源为HDR Vivid视频，可以解析相关的信息，如元数据、颜色信息（Color）等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在-cmake-脚本中链接动态库",
      children: "在 CMake 脚本中链接动态库"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "target_link_libraries(sample PUBLIC libnative_media_codecbase.so)\ntarget_link_libraries(sample PUBLIC libnative_media_avdemuxer.so)\ntarget_link_libraries(sample PUBLIC libnative_media_avsource.so)\ntarget_link_libraries(sample PUBLIC libnative_media_core.so)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(661010)/* ["default"] */.A) + "",
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
          children: "添加头文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <multimedia/player_framework/native_avdemuxer.h>\n#include <multimedia/player_framework/native_avsource.h>\n#include <multimedia/player_framework/native_avcodec_base.h>\n#include <multimedia/player_framework/native_avformat.h>\n#include <multimedia/player_framework/native_avbuffer.h>\n#include <fcntl.h>\n#include <sys/stat.h>\n#include <string>\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "文件解析器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 创建文件操作符 fd，打开时对文件实例必须有读权限（filePath 为待解封装文件路径，需预置文件，保证路径指向的文件存在）。\nstd::string filePath = \"test.mp4\";\nint fd = open(filePath.c_str(), O_RDONLY);\nstruct stat fileStatus {};\n// 获取fileSize。\nsize_t fileSize = 0;\nif (stat(filePath.c_str(), &fileStatus) == 0) {\n   fileSize = static_cast<size_t>(fileStatus.st_size);\n} else {\n    printf(\"get stat failed\");\n    return;\n}\n// 为 fd 资源文件创建 source 资源实例。\nOH_AVSource *source = OH_AVSource_CreateWithFD(fd, 0, fileSize);\nif (source == nullptr) {\n   printf(\"create source failed\");\n   return;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取视频轨道信息，查询文件HDR类型。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "int32_t trackCount = 0;\nuint32_t audioTrackIndex = 0;\nuint32_t videoTrackIndex = 0;\nint32_t trackType;\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 从文件 source 信息获取文件轨道数。\nOH_AVFormat *sourceFormat = OH_AVSource_GetSourceFormat(source);\nif (sourceFormat == nullptr) {\n   printf(\"get source format failed\");\n   return;\n}\nbool getTrackRet = OH_AVFormat_GetIntValue(sourceFormat, OH_MD_KEY_TRACK_COUNT, &trackCount);\nif (!getTrackRet) {\n    // 异常处理。\n}\nOH_AVFormat_Destroy(sourceFormat);\nfor (uint32_t index = 0; index < (static_cast<int32_t>(trackCount)); index++) {\n   // 获取轨道信息。\n   OH_AVFormat *format = OH_AVSource_GetTrackFormat(source, index);\n   if (format == nullptr) {\n      printf(\"get track format failed\");\n      return;\n   }\n   // 判断轨道类型。\n   static_cast<OH_MediaType>(trackType) == OH_MediaType::MEDIA_TYPE_AUD ? audioTrackIndex = index : videoTrackIndex = index;\n   // 查询文件HDR类型，是否为HDR Vivid视频。\n   int32_t isHDRVivid = 0;\n   bool getHdrRet = OH_AVFormat_GetIntValue(format, OH_MD_KEY_VIDEO_IS_HDR_VIVID, &isHDRVivid);\n   if (getHdrRet == false || isHDRVivid == 0) {\n      printf(\"is not HDRVivid \");\n      return;\n   }\n   OH_AVFormat_Destroy(format); // 销毁。\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hdr-vivid视频解码",
      children: "HDR Vivid视频解码"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用创建H.265解码器，并配置宽、高、format信息。解码器解析码流，生成对应的视频帧数据以及元数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前支持surface输出与buffer输出两种类型，差异如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在接口调用的过程中，两种方式的接口调用方式基本一致，但存在以下差异点："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Surface模式下，应用在解码器就绪前，必须调用OH_VideoDecoder_SetSurface接口设置OHNativeWindow。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Buffer模式下，可以通过调用OH_AVBuffer_GetNativeBuffer接口将buffer转换为nativebuffer，再通过调用OH_NativeBuffer_GetMetadataValue接口获取元数据。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在-cmake-脚本中链接动态库-1",
      children: "在 CMake 脚本中链接动态库"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "target_link_libraries(sample PUBLIC libnative_media_codecbase.so)\ntarget_link_libraries(sample PUBLIC libnative_media_core.so)\ntarget_link_libraries(sample PUBLIC libnative_media_vdec.so)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(336352)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上述'sample'字样仅为示例，此处由开发者根据实际工程目录自定义。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "定义基础结构",
      children: "定义基础结构"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本部分示例代码按照C++17标准编写，仅作参考。开发者可以参考此部分，定义自己的buffer对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "添加头文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <condition_variable>\n#include <memory>\n#include <mutex>\n#include <queue>\n#include <shared_mutex>\n#include <multimedia/player_framework/native_avcodec_videodecoder.h>\n#include <multimedia/player_framework/native_avcapability.h>\n#include <multimedia/player_framework/native_avcodec_base.h>\n#include <multimedia/player_framework/native_avformat.h>\n#include <multimedia/player_framework/native_avbuffer.h>\n#include <fstream>\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "解码器回调buffer的信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "struct CodecBufferInfo {\n    CodecBufferInfo(uint32_t index, OH_AVBuffer *buffer): index(index), buffer(buffer), isValid(true) {}\n    // 回调buffer。\n    OH_AVBuffer *buffer = nullptr;\n    // 回调buffer对应的index。\n    uint32_t index = 0;\n    // 判断当前buffer信息是否有效。\n    bool isValid = true;\n};\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "解码输入输出队列。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "class CodecBufferQueue {\npublic:\n    // 将回调buffer的信息传入队列。\n    void Enqueue(const std::shared_ptr<CodecBufferInfo> bufferInfo)\n    {\n        std::unique_lock<std::mutex> lock(mutex_);\n        bufferQueue_.push(bufferInfo);\n        cond_.notify_all();\n    }\n\n    // 获取回调buffer的信息。\n    std::shared_ptr<CodecBufferInfo> Dequeue(int32_t timeoutMs = 1000)\n    {\n        std::unique_lock<std::mutex> lock(mutex_);\n        (void)cond_.wait_for(lock, std::chrono::milliseconds(timeoutMs), [this]() { return !bufferQueue_.empty(); });\n        if (bufferQueue_.empty()) {\n            return nullptr;\n        }\n        std::shared_ptr<CodecBufferInfo> bufferInfo = bufferQueue_.front();\n        bufferQueue_.pop();\n        return bufferInfo;\n    }\n\n    // 清空队列，之前的回调buffer设置为不可用。\n    void Flush()\n    {\n        std::unique_lock<std::mutex> lock(mutex_);\n        while (!bufferQueue_.empty()) {\n            std::shared_ptr<CodecBufferInfo> bufferInfo = bufferQueue_.front();\n            // Flush、Stop、Reset、Destroy操作之后，之前回调的buffer信息设置为无效。\n            bufferInfo->isValid = false;\n            bufferQueue_.pop();\n        }\n    }\n\nprivate:\n    std::mutex mutex_;\n    std::condition_variable cond_;\n    std::queue<std::shared_ptr<CodecBufferInfo>> bufferQueue_;\n};\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "全局变量。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "仅作参考，可以根据实际情况将其封装到对象中。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 解码器实例指针。\nOH_AVCodec *videoDec = nullptr;\n// 解码器同步锁。\nstd::shared_mutex codecMutex;\n// 解码器输入队列。\nCodecBufferQueue inQueue;\n// 解码器输出队列。\nCodecBufferQueue outQueue;\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发步骤-1",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Surface模式"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建H.265解码器实例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用可以通过名称或媒体类型创建解码器。示例中的变量说明如下："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "videoDec：视频解码器实例的指针。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "OH_AVCODEC_MIMETYPE_VIDEO_HEVC：HEVC格式视频编解码器。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 通过mimetype创建H.265解码器实例。\nOH_AVCodec *videoDec = OH_VideoDecoder_CreateByMime(OH_AVCODEC_MIMETYPE_VIDEO_HEVC);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置异步回调函数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 解码输入回调OH_AVCodecOnNeedInputBuffer实现。\nstatic void OnNeedInputBuffer(OH_AVCodec *codec, uint32_t index, OH_AVBuffer *buffer, void *userData)\n{\n    // 输入帧的数据buffer和对应的index送入inQueue队列。\n    (void)codec;\n    (void)userData;\n    inQueue.Enqueue(std::make_shared<CodecBufferInfo>(index, buffer));\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["具体可参考：", (0,jsx_runtime.jsx)(_components.a, {
            href: "/avcodec-kit/audio-video-codec/video-decoding#surface%E6%A8%A1%E5%BC%8F",
            children: "视频解码Surface模式"
          }), "中的“步骤-3：调用OH_VideoDecoder_RegisterCallback()设置回调函数”。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置解码器。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["具体可参考：", (0,jsx_runtime.jsx)(_components.a, {
            href: "/avcodec-kit/audio-video-codec/video-decoding#surface%E6%A8%A1%E5%BC%8F",
            children: "视频解码Surface模式"
          }), "中的“步骤-5：调用OH_VideoDecoder_Configure()配置解码器”。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置surface。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["具体可参考：", (0,jsx_runtime.jsx)(_components.a, {
            href: "/avcodec-kit/audio-video-codec/video-decoding#surface%E6%A8%A1%E5%BC%8F",
            children: "视频解码Surface模式"
          }), "中的“步骤-6：设置surface”。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_VideoDecoder_Start()启动解码器。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["具体可参考：", (0,jsx_runtime.jsx)(_components.a, {
            href: "/avcodec-kit/audio-video-codec/video-decoding#surface%E6%A8%A1%E5%BC%8F",
            children: "视频解码Surface模式"
          }), "中的“步骤-8：调用OH_VideoDecoder_Start()启动解码器”。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Buffer模式"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建H.265解码器实例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用可以通过名称或媒体类型创建解码器。示例中的变量说明如下："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "videoDec：视频解码器实例的指针。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "OH_AVCODEC_MIMETYPE_VIDEO_HEVC：HEVC格式视频编解码器。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 通过mimetype创建H.265解码器实例。\nOH_AVCodec *videoDec = OH_VideoDecoder_CreateByMime(OH_AVCODEC_MIMETYPE_VIDEO_HEVC);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置异步回调函数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 解码输入回调OH_AVCodecOnNeedInputBuffer实现。\nstatic void OnNeedInputBuffer(OH_AVCodec *codec, uint32_t index, OH_AVBuffer *buffer, void *userData)\n{\n    // 输入帧的数据buffer和对应的index送入inQueue队列。\n    (void)codec;\n    (void)userData;\n    inQueue.Enqueue(std::make_shared<CodecBufferInfo>(index, buffer));\n}\n\n// 解码输出回调OH_AVCodecOnNewOutputBuffer实现。\nstatic void OnNewOutputBuffer(OH_AVCodec *codec, uint32_t index, OH_AVBuffer *buffer, void *userData)\n{\n    // 完成帧的数据buffer和对应的index送入outQueue队列。\n    (void)userData;\n    outQueue.Enqueue(std::make_shared<CodecBufferInfo>(index, buffer));\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["具体可参考：", (0,jsx_runtime.jsx)(_components.a, {
            href: "/avcodec-kit/audio-video-codec/video-decoding#buffer%E6%A8%A1%E5%BC%8F",
            children: "视频解码Buffer模式"
          }), "中的“步骤-3：调用OH_VideoDecoder_RegisterCallback()设置回调函数”。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置解码器。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["具体可参考：", (0,jsx_runtime.jsx)(_components.a, {
            href: "/avcodec-kit/audio-video-codec/video-decoding#buffer%E6%A8%A1%E5%BC%8F",
            children: "视频解码Buffer模式"
          }), "中的“步骤-5：调用OH_VideoDecoder_Configure()配置解码器”。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_VideoDecoder_Start()启动解码器。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["具体可参考：", (0,jsx_runtime.jsx)(_components.a, {
            href: "/avcodec-kit/audio-video-codec/video-decoding#buffer%E6%A8%A1%E5%BC%8F",
            children: "视频解码Buffer模式"
          }), "中的“步骤-7：调用OH_VideoDecoder_Start()启动解码器”。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取元数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在 CMake 脚本中链接动态库。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "target_link_libraries(sample PUBLIC libnative_buffer.so)\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "添加头文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <string.h>\n#include <native_buffer/native_buffer.h>\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "示例代码如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 元数据的大小。\nint32_t size = 0;\n// 元数据实例指针。\nuint8_t *metadata = nullptr;\n// 存储元数据的容器。\nstd::vector<uint8_t> meta;\n\n// 取出回调函数OnNewOutputBuffer存到输出队列的帧buffer。\nstd::shared_ptr<CodecBufferInfo> bufferInfo = outQueue.Dequeue();\nstd::shared_lock<std::shared_mutex> lock(codecMutex);\nif (bufferInfo == nullptr || !bufferInfo->isValid) {\n    // 异常处理。\n}\n// 获取OH_NativeBuffer指针实例。\nOH_NativeBuffer *nativeBuffer = OH_AVBuffer_GetNativeBuffer(bufferInfo.buffer);\nif (nativeBuffer != nullptr){\n    // 获取static元数据。\n    if (OH_NativeBuffer_GetMetadataValue(nativeBuffer, OH_HDR_STATIC_METADATA, &size, &metadata) != 0){\n        // 异常处理。\n    } else {\n        meta.resize(size);\n        memcpy(&meta[0], metadata, size);\n        delete[] metadata;\n        metadata = nullptr;\n    }\n    // 获取dynamic元数据。\n    if (OH_NativeBuffer_GetMetadataValue(nativeBuffer, OH_HDR_DYNAMIC_METADATA, &size, &metadata) != 0){\n        // 异常处理。\n    } else {\n        meta.resize(size);\n        memcpy(&meta[0], metadata, size);\n        delete[] metadata;\n        metadata = nullptr;\n    }\n}\n//销毁nativebuffer。\nif (nativeBuffer != nullptr) {\n    OH_NativeBuffer_Unreference(nativeBuffer);\n    nativeBuffer = nullptr;\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "处理视频帧数据",
      children: "处理视频帧数据"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "解封装，循环获取帧数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "bool videoIsEnd = false;\n// 为资源实例创建对应的解封装器。\nOH_AVDemuxer *demuxer = OH_AVDemuxer_CreateWithSource(source);\n// 取出回调函数OnNeedInputBuffer存到输入队列的帧buffer。\nstd::shared_ptr<CodecBufferInfo> bufferInfo = inQueue.Dequeue();\nstd::shared_lock<std::shared_mutex> lock(codecMutex);\nif (bufferInfo == nullptr || !bufferInfo->isValid) {\n    // 异常处理。\n}\n// 解封装帧数据。\nint32_t ret = OH_AVDemuxer_ReadSampleBuffer(demuxer, videoTrackIndex, bufferInfo->buffer);\nif (ret == AV_ERR_OK) {\n   // 可通过buffer获取并处理视频帧数据。\n    OH_AVCodecBufferAttr info;\n    OH_AVErrCode getBufferRet = OH_AVBuffer_GetBufferAttr(bufferInfo->buffer, &info);\n    if (getBufferRet != AV_ERR_OK) {\n        // 异常处理。\n    }\n    if (info.flags == OH_AVCodecBufferFlags::AVCODEC_BUFFER_FLAGS_EOS) {\n        videoIsEnd = true;\n    }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "将解封装后的视频帧数据送入解码输入队列。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 送入解码输入队列进行解码，index为对应队列下标。\nret = OH_VideoDecoder_PushInputBuffer(videoDec, bufferInfo->index);\nif (ret != AV_ERR_OK) {\n   // 异常处理。\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["后续步骤具体可参考：", (0,jsx_runtime.jsx)(_components.a, {
            href: "/avcodec-kit/audio-video-codec/video-decoding",
            children: "视频解码"
          }), "。"]
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
336352(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
661010(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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