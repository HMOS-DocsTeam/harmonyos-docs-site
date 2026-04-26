"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["225842"], {
47459(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_avcodec_kit_audio_video_codec_synchronous_video_encoding_synchronous_video_encoding_md_337_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-avcodec-kit-audio-video-codec-synchronous-video-encoding-synchronous-video-encoding-md-337.json
var site_docs_avcodec_kit_audio_video_codec_synchronous_video_encoding_synchronous_video_encoding_md_337_namespaceObject = JSON.parse('{"id":"avcodec-kit/audio-video-codec/synchronous-video-encoding/synchronous-video-encoding","title":"视频编码同步模式","description":"从API version 20开始，支持视频编码同步模式。","source":"@site/docs/avcodec-kit/audio-video-codec/synchronous-video-encoding/synchronous-video-encoding.md","sourceDirName":"avcodec-kit/audio-video-codec/synchronous-video-encoding","slug":"/avcodec-kit/audio-video-codec/synchronous-video-encoding/","permalink":"/harmonyos-docs-site/avcodec-kit/audio-video-codec/synchronous-video-encoding/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"视频编码同步模式","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/synchronous-video-encoding","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"视频编码","permalink":"/harmonyos-docs-site/avcodec-kit/audio-video-codec/video-encoding/"},"next":{"title":"时域可分层视频编码","permalink":"/harmonyos-docs-site/avcodec-kit/audio-video-codec/video-encoding-temporal-scalability/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/avcodec-kit/audio-video-codec/synchronous-video-encoding/synchronous-video-encoding.md


const frontMatter = {
	title: '视频编码同步模式',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/synchronous-video-encoding',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '视频编码同步模式';

const assets = {

};



const toc = [{
  "value": "适用场景",
  "id": "适用场景",
  "level": 2
}, {
  "value": "开发指导",
  "id": "开发指导",
  "level": 2
}, {
  "value": "在CMake脚本中链接动态库",
  "id": "在cmake脚本中链接动态库",
  "level": 3
}, {
  "value": "定义基础结构",
  "id": "定义基础结构",
  "level": 3
}, {
  "value": "Surface模式",
  "id": "surface模式",
  "level": 3
}, {
  "value": "Buffer模式",
  "id": "buffer模式",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "视频编码同步模式",
        children: "视频编码同步模式"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 20开始，支持视频编码同步模式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以调用本模块的Native API接口，完成同步模式的视频编码。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体实现可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/openharmony/applications_app_samples/tree/master/code/BasicFeature/Media/AVCodec",
        children: "示例工程"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当前支持的编码能力，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/avcodec-kit/avcodec-support-formats#%E8%A7%86%E9%A2%91%E7%BC%96%E7%A0%81",
        children: "AVCodec支持的格式"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["视频编码的限制约束、支持的能力、状态机调用关系请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/avcodec-kit/audio-video-codec/video-encoding",
        children: "视频编码"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "适用场景",
      children: "适用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通常情况下，推荐使用异步模式。若需要主动请求buffer去送帧，则可以采用同步模式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发指导",
      children: "开发指导"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细的API说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-videoencoder-h/capi-native-avcodec-videoencoder-h",
        children: "VideoEncoder"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(215578)/* ["default"] */.A) + "",
        width: "5096",
        height: "4424"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在cmake脚本中链接动态库",
      children: "在CMake脚本中链接动态库"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "target_link_libraries(sample PUBLIC libnative_media_codecbase.so)\ntarget_link_libraries(sample PUBLIC libnative_media_core.so)\ntarget_link_libraries(sample PUBLIC libnative_media_venc.so)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(487071)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上述'sample'字样仅为示例，此处由开发者根据实际工程目录自定义。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "定义基础结构",
      children: "定义基础结构"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本部分示例代码按照C++17标准编写，仅作参考。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "添加头文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <multimedia/player_framework/native_avcodec_videoencoder.h>\n#include <multimedia/player_framework/native_avcapability.h>\n#include <multimedia/player_framework/native_avcodec_base.h>\n#include <multimedia/player_framework/native_avformat.h>\n#include <multimedia/player_framework/native_avbuffer.h>\n#include <multimedia/player_framework/native_averrors.h>\n#include <native_buffer/native_buffer.h>\n#include <memory>\n#include <fstream>\n#include <mutex>\n#include <shared_mutex>\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "全局变量（仅作参考，可以根据实际情况将其封装到对象中）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 视频帧宽度。\nint32_t width = 320;\n// 视频帧高度。\nint32_t height = 240;\n// 视频宽跨距。\nint32_t widthStride = 0;\n// 视频高跨距。\nint32_t heightStride = 0;\n// 视频像素格式。\nOH_AVPixelFormat pixelFormat = AV_PIXEL_FORMAT_NV12;\n// 编码器同步锁。\nstd::shared_mutex codecMutex;\n// 编码器实例指针。\nOH_AVCodec *videoEnc = nullptr;\n// 编码输出。\nbool outputDone = false;\n// 编码输入。\nbool inputDone = false;\nstd::unique_ptr<std::ifstream> inFile_;\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "surface模式",
      children: "Surface模式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参考以下示例代码，可以完成Surface模式下视频编码的全流程，实现同步模式的数据轮转。此处以输入surface数据，编码成H.264格式为例。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建编码器实例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过名称创建编码器。示例中的变量说明如下："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "videoEnc：视频编码器实例的指针。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "capability：编码器能力查询实例的指针。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#%E5%8F%98%E9%87%8F",
              children: "OH_AVCODEC_MIMETYPE_VIDEO_AVC"
            }), "：AVC格式视频编解码器。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 创建硬件编码器实例。\nOH_AVCapability *capability= OH_AVCodec_GetCapabilityByCategory(OH_AVCODEC_MIMETYPE_VIDEO_AVC, true, HARDWARE);\nconst char *name = OH_AVCapability_GetName(capability);\nOH_AVCodec *videoEnc = OH_VideoEncoder_CreateByName(name);\nif (videoEnc == nullptr) {\n    printf(\"create videoEnc failed\");\n    return;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_VideoEncoder_Configure()配置编码器。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["详细可配置选项的说明请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-module/capi-codecbase/capi-codecbase#%E5%AA%92%E4%BD%93%E6%95%B0%E6%8D%AE%E9%94%AE%E5%80%BC%E5%AF%B9",
              children: "媒体数据键值对"
            }), "。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["参数校验规则请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-videoencoder-h/capi-native-avcodec-videoencoder-h#oh_videoencoder_configure",
              children: "OH_VideoEncoder_Configure()"
            }), "。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["参数取值范围可以通过能力查询接口获取，具体示例请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/avcodec-kit/audio-video-codec/obtain-supported-codecs",
              children: "获取支持的编解码能力"
            }), "。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "目前支持的所有格式都必须配置以下选项：视频帧宽度、视频帧高度、视频像素格式。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "auto format = std::shared_ptr<OH_AVFormat>(OH_AVFormat_Create(), OH_AVFormat_Destroy);\nif (format == nullptr) {\n    // 异常处理。\n}\n// 写入format。\nOH_AVFormat_SetIntValue(format.get(), OH_MD_KEY_WIDTH, width); // 必须配置。\nOH_AVFormat_SetIntValue(format.get(), OH_MD_KEY_HEIGHT, height); // 必须配置。\nOH_AVFormat_SetIntValue(format.get(), OH_MD_KEY_PIXEL_FORMAT, pixelFormat);// 必须配置。\nOH_AVFormat_SetIntValue(format.get(), OH_MD_KEY_ENABLE_SYNC_MODE, 1); // 同步模式配置。\n// 配置编码器。\nOH_AVErrCode ret = OH_VideoEncoder_Configure(videoEnc, format.get());\nif (ret != AV_ERR_OK) {\n    // 异常处理。\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(84725)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "要使能视频编码同步模式，必须将OH_MD_KEY_ENABLE_SYNC_MODE配置为1。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "同步模式在调用OH_VideoEncoder_Configure接口前不能调用OH_VideoEncoder_RegisterCallback或OH_VideoEncoder_RegisterParameterCallback接口，否则为异步模式。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "不支持Surface模式的随帧通路的同步模式。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置surface。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "示例中的变量说明如下："
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["nativeWindow：获取方式请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/avcodec-kit/audio-video-codec/video-encoding#surface%E6%A8%A1%E5%BC%8F",
            children: "视频编码Surface模式"
          }), "的“步骤-6：设置surface”。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 获取需要输入的surface，以进行编码。\nOH_AVErrCode ret = OH_VideoEncoder_GetSurface(videoEnc, &nativeWindow);\nif (ret != AV_ERR_OK) {\n    // 异常处理。\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_VideoEncoder_Prepare()编码器就绪。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "该接口将在编码器运行前进行一些数据的准备工作。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_AVErrCode ret = OH_VideoEncoder_Prepare(videoEnc);\nif (ret != AV_ERR_OK) {\n    // 异常处理。\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_VideoEncoder_Start()启动编码器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 配置待编码文件路径。\nstd::string_view outputFilePath = \"/*yourpath*.h264\";\nstd::unique_ptr<std::ofstream> outputFile = std::make_unique<std::ofstream>();\nif (outputFile != nullptr) {\n    outputFile->open(outputFilePath.data(), std::ios::out | std::ios::binary | std::ios::ate);\n}\n// 启动编码器，开始编码。\nOH_AVErrCode ret = OH_VideoEncoder_Start(videoEnc);\nif (ret != AV_ERR_OK) {\n    // 异常处理。\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取可用buffer并释放编码帧。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-videoencoder-h/capi-native-avcodec-videoencoder-h#oh_videoencoder_queryoutputbuffer",
              children: "OH_VideoEncoder_QueryOutputBuffer"
            }), "接口获取下一个可用的输出缓冲区（buffer）的索引（index）。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["根据获取的索引（index），调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-videoencoder-h/capi-native-avcodec-videoencoder-h#oh_videoencoder_getoutputbuffer",
              children: "OH_VideoEncoder_GetOutputBuffer"
            }), "接口获取对应的缓冲区（buffer）实例。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-videoencoder-h/capi-native-avcodec-videoencoder-h#oh_videoencoder_freeoutputbuffer",
              children: "OH_VideoEncoder_FreeOutputBuffer"
            }), "接口释放编码帧。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "bool EncoderOutput(OH_AVCodec *videoEnc, int64_t timeoutUs)\n{\n    uint32_t index;\n    std::shared_lock<std::shared_mutex> lock(codecMutex);\n\n    OH_AVErrCode ret = OH_VideoEncoder_QueryOutputBuffer(videoEnc, &index, timeoutUs);\n    switch (ret) {\n        case AV_ERR_OK: {\n            OH_AVBuffer *buffer = OH_VideoEncoder_GetOutputBuffer(videoEnc, index);\n            if (buffer == nullptr) {\n                // 异常处理。\n                return false;\n            }\n        \n            // 获取编码后信息。\n            OH_AVCodecBufferAttr info;\n            OH_AVErrCode getBufferRet = OH_AVBuffer_GetBufferAttr(buffer, &info);\n            if (getBufferRet != AV_ERR_OK) {\n                // 异常处理。\n                return false;\n            }\n            if (info.flags & AVCODEC_BUFFER_FLAGS_EOS) {\n                outputDone = 1;\n            }\n\n            // 将编码完成帧数据buffer写入到对应输出文件中。\n            uint8_t *addr = OH_AVBuffer_GetAddr(buffer);\n            if (addr == nullptr) {\n               // 异常处理。\n               return false;\n            }\n            if (outputFile != nullptr && outputFile->is_open()) {\n                outputFile->write(reinterpret_cast<char *>(addr), info.size);\n            }\n            // 释放已完成写入的数据，index为对应输出队列下标。\n            OH_AVErrCode freeOutputRet = OH_VideoEncoder_FreeOutputBuffer(videoEnc, index);\n            if (freeOutputRet != AV_ERR_OK) {\n                // 异常处理。\n                return false;\n            }\n            break;\n        }\n        case AV_ERR_TRY_AGAIN_LATER: {\n            break;\n        }\n        case AV_ERR_STREAM_CHANGED: {\n            auto format = std::shared_ptr<OH_AVFormat>(OH_VideoEncoder_GetOutputDescription(videoEnc), OH_AVFormat_Destroy);\n            if (format == nullptr) {\n                // 异常处理。\n            }\n            // 获取新宽高。\n            bool getIntRet = OH_AVFormat_GetIntValue(format.get(), OH_MD_KEY_WIDTH, &width) &&\n                             OH_AVFormat_GetIntValue(format.get(), OH_MD_KEY_HEIGHT, &height);\n            if (!getIntRet) {\n                // 异常处理。\n            }\n            break;\n        }\n        default: {\n            // 异常处理。\n            return false;\n        }\n    }\n    return true;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编码器出帧处理循环。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "bool result = true;\nint64_t timeoutUs = 0; // 单位：微秒（us），负值：无限等待；0：立即退出；正值：等待指定时长后退出。\n\nwhile (!outputDone && result) {\n    if (!outputDone ) {\n        result = EncoderOutput(videoEnc, timeoutUs);\n    }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_VideoEncoder_NotifyEndOfStream()通知编码器结束。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// Surface模式：通知视频编码器输入流已结束，只能使用此接口进行通知。\nOH_AVErrCode ret = OH_VideoEncoder_NotifyEndOfStream(videoEnc);\nif (ret != AV_ERR_OK) {\n    // 异常处理。\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）调用OH_VideoEncoder_Flush()刷新编码器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_VideoEncoder_Flush接口后，编码器仍处于运行态，但会清除编码器中缓存的输入和输出数据及参数集（如H.264格式的PPS/SPS）。此时需要调用OH_VideoEncoder_Start接口重新开始编码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 通过codecMutex来避免调用Flush接口，状态切换后，编码线程还在跑会退出循环的问题。\nstd::unique_lock<std::shared_mutex> lock(codecMutex);\n// 刷新编码器videoEnc。\nOH_AVErrCode flushRet = OH_VideoEncoder_Flush(videoEnc);\nif (flushRet != AV_ERR_OK) {\n    // 异常处理。\n}\n\n// 重新开始编码。\nOH_AVErrCode startRet = OH_VideoEncoder_Start(videoEnc);\nif (startRet != AV_ERR_OK) {\n    // 异常处理。\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）调用OH_VideoEncoder_Reset()重置编码器。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用OH_VideoEncoder_Reset接口后，编码器回到初始化的状态，需要调用接口", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-videoencoder-h/capi-native-avcodec-videoencoder-h#oh_videoencoder_configure",
            children: "OH_VideoEncoder_Configure"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-videoencoder-h/capi-native-avcodec-videoencoder-h#oh_videoencoder_prepare",
            children: "OH_VideoEncoder_Prepare"
          }), "重新配置。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 重置编码器videoEnc。\nstd::unique_lock<std::shared_mutex> lock(codecMutex);\nOH_AVErrCode resetRet = OH_VideoEncoder_Reset(videoEnc);\nif (resetRet != AV_ERR_OK) {\n    // 异常处理。\n}\n\n// 重新配置编码器参数。\nauto format = std::shared_ptr<OH_AVFormat>(OH_AVFormat_Create(), OH_AVFormat_Destroy);\nif (format == nullptr) {\n    // 异常处理。\n}\nOH_AVErrCode configRet = OH_VideoEncoder_Configure(videoEnc, format.get());\nif (configRet != AV_ERR_OK) {\n    // 异常处理。\n}\n\n// 编码器重新就绪。\nOH_AVErrCode prepareRet = OH_VideoEncoder_Prepare(videoEnc);\nif (prepareRet != AV_ERR_OK) {\n    // 异常处理。\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(760284)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编码器回到初始化的状态，调用OH_VideoEncoder_Configure接口重新配置编码器参数时，同步模式需要重新配置OH_MD_KEY_ENABLE_SYNC_MODE为1，否则为异步模式。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）调用OH_VideoEncoder_Stop()停止编码器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_VideoEncoder_Stop接口后，编码器保留了编码实例，释放输入输出buffer。开发者可以直接调用OH_VideoEncoder_Start接口继续编码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 终止编码器videoEnc。\nstd::unique_lock<std::shared_mutex> lock(codecMutex);\nOH_AVErrCode ret = OH_VideoEncoder_Stop(videoEnc);\nif (ret != AV_ERR_OK) {\n    // 异常处理。\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_VideoEncoder_Destroy()销毁编码器实例，释放资源。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 注销编码器。\nstd::unique_lock<std::shared_mutex> lock(codecMutex);\nOH_AVErrCode ret = AV_ERR_OK;\nif (videoEnc != nullptr) {\n    OH_VideoEncoder_Destroy(videoEnc);\n    videoEnc = nullptr;\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(235778)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "执行该步骤之后，需要开发者将videoEnc指向nullptr，防止野指针导致程序错误。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "buffer模式",
      children: "Buffer模式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参考以下示例代码，可以完成Buffer模式下视频编码的全流程，实现同步模式的数据轮转。此处以输入YUV文件，编码成H.264格式为例。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建编码器实例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "与Surface模式相同，此处不再赘述。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 通过codecname创建编码器，应用有特殊需求，比如选择支持某种分辨率规格的编码器，可先查询capability，再根据codec name创建编码器。\nOH_AVCapability *capability = OH_AVCodec_GetCapability(OH_AVCODEC_MIMETYPE_VIDEO_AVC, true);\nconst char *name = OH_AVCapability_GetName(capability);\nOH_AVCodec *videoEnc = OH_VideoEncoder_CreateByName(name);\nif (videoEnc == nullptr) {\n    printf(\"create videoEnc failed\");\n    return;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_VideoEncoder_Configure()配置编码器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "与Surface模式相同，此处不再赘述。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "auto format = std::shared_ptr<OH_AVFormat>(OH_AVFormat_Create(), OH_AVFormat_Destroy);\nif (format == nullptr) {\n    // 异常处理。\n}\n// 写入format。\nOH_AVFormat_SetIntValue(format.get(), OH_MD_KEY_WIDTH, width); // 必须配置。\nOH_AVFormat_SetIntValue(format.get(), OH_MD_KEY_HEIGHT, height); // 必须配置。\nOH_AVFormat_SetIntValue(format.get(), OH_MD_KEY_PIXEL_FORMAT, pixelFormat);// 必须配置。\nOH_AVFormat_SetIntValue(format.get(), OH_MD_KEY_ENABLE_SYNC_MODE, 1); // 同步模式配置。\n// 配置编码器。\nOH_AVErrCode ret = OH_VideoEncoder_Configure(videoEnc, format.get());\nif (ret != AV_ERR_OK) {\n    // 异常处理。\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(278790)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "要使能视频编码同步模式，必须将OH_MD_KEY_ENABLE_SYNC_MODE配置为1。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "同步模式在调用OH_VideoEncoder_Configure接口前不能调用OH_VideoEncoder_RegisterCallback或OH_VideoEncoder_RegisterParameterCallback接口，否则为异步模式。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_VideoEncoder_Prepare()编码器就绪。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "该接口将在编码器运行前进行一些数据的准备工作。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ret = OH_VideoEncoder_Prepare(videoEnc);\nif (ret != AV_ERR_OK) {\n    // 异常处理。\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_VideoEncoder_Start()启动编码器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置输入文件、输出文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 配置待编码文件路径。\nstd::string_view inputFilePath = \"/*yourpath*.yuv\";\nstd::string_view outputFilePath = \"/*yourpath*.h264\";\nstd::unique_ptr<std::ifstream> inputFile = std::make_unique<std::ifstream>();\nstd::unique_ptr<std::ofstream> outputFile = std::make_unique<std::ofstream>();\nif (inputFile != nullptr) {\n    inputFile->open(inputFilePath.data(), std::ios::in | std::ios::binary);\n}\nif (outputFile != nullptr) {\n    outputFile->open(outputFilePath.data(), std::ios::out | std::ios::binary | std::ios::ate);\n}\n// 启动编码器，开始编码。\nOH_AVErrCode ret = OH_VideoEncoder_Start(videoEnc);\nif (ret != AV_ERR_OK) {\n    // 异常处理。\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取可用buffer并写入码流至编码器"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-videoencoder-h/capi-native-avcodec-videoencoder-h#oh_videoencoder_queryinputbuffer",
              children: "OH_VideoEncoder_QueryInputBuffer"
            }), "接口获取下一个可用的输入缓冲区（buffer）的索引（index）。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["根据获取的索引（index），调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-videoencoder-h/capi-native-avcodec-videoencoder-h#oh_videoencoder_getinputbuffer",
              children: "OH_VideoEncoder_GetInputBuffer"
            }), "接口获取对应的缓冲区（buffer）实例。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["将需要编码的数据写入该缓冲区（buffer）后，调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-videoencoder-h/capi-native-avcodec-videoencoder-h#oh_videoencoder_pushinputbuffer",
              children: "OH_VideoEncoder_PushInputBuffer"
            }), "接口将其送入编码输入队列进行编码。当最后一帧数据被送入编码输入队列时，需要将flag标识成", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avbuffer-info-h/capi-native-avbuffer-info-h#oh_avcodecbufferflags",
              children: "AVCODEC_BUFFER_FLAGS_EOS"
            }), "，通知编码器输入结束。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "示例中的变量size、offset、pts、frameData、flags说明与Surface模式相同，此处不再赘述。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "bool EncoderInput(OH_AVCodec *videoEnc, int64_t timeoutUs)\n{\n    uint32_t index;\n    std::shared_lock<std::shared_mutex> lock(codecMutex);\n\n    OH_AVErrCode ret = OH_VideoEncoder_QueryInputBuffer(videoEnc, &index, timeoutUs);\n    switch (ret) {\n        case AV_ERR_OK: {\n            OH_AVBuffer *buffer = OH_VideoEncoder_GetInputBuffer(videoEnc, index);\n            if (buffer == nullptr) {\n                // 异常处理。\n                return false;\n            }\n\n            // 写入图像数据。\n            int32_t frameSize = 0;\n            bool isFirstFrame = true;\n            // 获取视频宽跨距和高跨距。\n            if (isFirstFrame) {\n                auto format = std::shared_ptr<OH_AVFormat>(OH_VideoEncoder_GetInputDescription(videoEnc), OH_AVFormat_Destroy);\n                if (format == nullptr) {\n                    // 异常处理。\n                }\n                bool getIntRet = OH_AVFormat_GetIntValue(format.get(), OH_MD_KEY_VIDEO_STRIDE, &widthStride) &&\n                                 OH_AVFormat_GetIntValue(format.get(), OH_MD_KEY_VIDEO_SLICE_HEIGHT, &heightStride);\n                 if (!getIntRet) {\n                    // 异常处理。\n                 }\n                isFirstFrame = false;\n            }\n            if (widthStride == width && heightStride == height) {\n                frameSize = width * height * 3 / 2; // NV12像素格式下，每帧数据大小的计算公式。\n                // 处理文件流得到帧的长度，再将需要编码的数据写入到对应index的buffer中。\n                uint8_t *addr = OH_AVBuffer_GetAddr(buffer);\n                if (addr == nullptr) {\n                   // 异常处理\n                   return false;\n                }\n                if (inputFile != nullptr && inputFile->is_open()) {\n                    inputFile->read(reinterpret_cast<char *>(addr), frameSize);\n                }\n            } else {\n                // 如果跨距不等于宽，开发者需要按照跨距进行偏移，详情请参考视频编码Buffer模式“步骤-8. 写入编码图像”。\n            }\n\n            // 配置buffer info信息。\n            OH_AVCodecBufferAttr info;\n            info.size = frameSize;\n            info.offset = 0;\n            // 注意此处和Surface模式不同，pts需要应用填充，可根据预期显示的时间进行计算写入，如：帧数 * 1000000 / frameRate。\n            info.pts = 0;\n            // 输入最后一帧数据时，设置AVCODEC_BUFFER_FLAGS_EOS标识。\n            // info.flags = AVCODEC_BUFFER_FLAGS_EOS;\n            // 避免flags随机初始化为AVCODEC_BUFFER_FLAGS_EOS导致使用异常，flags需要赋值如0（普通帧标识）。\n            info.flags = 0;\n            OH_AVErrCode setBufferRet = OH_AVBuffer_SetBufferAttr(buffer, &info);\n            if (setBufferRet != AV_ERR_OK) {\n                // 异常处理。\n                return false;\n            }\n            // 送入编码输入队列进行编码，index为对应输入队列的下标。\n            OH_AVErrCode pushInputRet = OH_VideoEncoder_PushInputBuffer(videoEnc, index);\n            if (pushInputRet != AV_ERR_OK) {\n                // 异常处理。\n                return false;\n            }\n            if (inFile_->eof()) {\n                inputDone = 1;\n            }\n            break;\n        }\n        case AV_ERR_TRY_AGAIN_LATER: {\n            break;\n        }\n        default: {\n            // 异常处理。\n            return false;\n        }\n    }\n    return true;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取可用buffer并释放编码帧。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-videoencoder-h/capi-native-avcodec-videoencoder-h#oh_videoencoder_queryoutputbuffer",
              children: "OH_VideoEncoder_QueryOutputBuffer"
            }), "接口获取下一个可用的输出缓冲区（buffer）的索引（index）。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["根据获取的索引（index），调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-videoencoder-h/capi-native-avcodec-videoencoder-h#oh_videoencoder_getoutputbuffer",
              children: "OH_VideoEncoder_GetOutputBuffer"
            }), "接口获取对应的缓冲区（buffer）实例。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-videoencoder-h/capi-native-avcodec-videoencoder-h#oh_videoencoder_freeoutputbuffer",
              children: "OH_VideoEncoder_FreeOutputBuffer"
            }), "接口释放编码帧。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "bool EncoderOutput(OH_AVCodec *videoEnc, int64_t timeoutUs)\n{\n    uint32_t index;\n    std::shared_lock<std::shared_mutex> lock(codecMutex);\n\n    OH_AVErrCode ret = OH_VideoEncoder_QueryOutputBuffer(videoEnc, &index, timeoutUs);\n    switch (ret) {\n        case AV_ERR_OK: {\n            OH_AVBuffer *buffer = OH_VideoEncoder_GetOutputBuffer(videoEnc, index);\n            if (buffer == nullptr) {\n                // 异常处理。\n                return false;\n            }\n        \n            // 获取编码后信息。\n            OH_AVCodecBufferAttr info;\n            OH_AVErrCode getBufferRet = OH_AVBuffer_GetBufferAttr(buffer, &info);\n            if (getBufferRet != AV_ERR_OK) {\n                // 异常处理。\n                return false;\n            }\n            // 将编码完成帧数据buffer写入到对应输出文件中。\n            uint8_t *addr = OH_AVBuffer_GetAddr(buffer);\n            if (addr == nullptr) {\n               // 异常处理\n               return false;\n            }\n            if (outputFile != nullptr && outputFile->is_open()) {\n                outputFile->write(reinterpret_cast<char *>(addr), info.size);\n            }\n            if (info.flags & AVCODEC_BUFFER_FLAGS_EOS) {\n                outputDone = 1;\n            }\n            // 释放已完成处理的信息，index为对应buffer队列的下标。\n            OH_AVErrCode freeOutputRet = OH_VideoEncoder_FreeOutputBuffer(videoEnc, index);\n            if (freeOutputRet != AV_ERR_OK) {\n                // 异常处理。\n                return false;\n            }\n            break;\n        }\n        case AV_ERR_TRY_AGAIN_LATER: {\n            break;\n        }\n        case AV_ERR_STREAM_CHANGED: {\n            break;\n        }\n        default: {\n            // 异常处理。\n            return false;\n        }\n    }\n    return true;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编码器送帧/出帧处理循环。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "bool result = true;\nint64_t timeoutUs = 0; // 单位：微秒（us），负值：无限等待；0：立即退出；正值：等待指定时长后退出。\n\nwhile (!outputDone && result) {\n    if (!inputDone) {\n        result = EncoderInput(videoEnc, timeoutUs);\n    }\n    if (!outputDone) {\n        result = EncoderOutput(videoEnc, timeoutUs);\n    }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["后续流程（包括刷新、重置、停止和销毁编码器）与Surface模式基本一致，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#surface%E6%A8%A1%E5%BC%8F",
        children: "Surface模式"
      }), "的步骤9-12。"]
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
215578(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438591-6b3660a989846196f76cc3e2db0442b6.png");

},
278790(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
84725(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
487071(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
235778(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
760284(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAIQUlEQVRo3u2ae1DTVxbHP4gmPMLDhKcPEkAelqW2CsWyikLFik6VHV91hrGKdZmiOz6KY92hI+3Stajja6qWioiIi6i1rFWLUhCRUqkIVpYFBFHQBgUJ8taAsn9EwqYgVsA1XXNmMpPc+/3dc+/9/s6555wbvaa8YRHAenSiVTJItwU6YnSiI0ZHjE50xOiI0YkWyODnraC1TcLOb15juPUQAr0vYjikVrfr2kDMup2OxMQfAKAhchEh088MuI5d+0WEvtf0xP7SW6M4dQ78POtxd67ps56vDlnToW/M9coW1ixWIBErf5/EFMm9iYk/SnhYEPLbTXwYHsecSZORGF8dMB2RuyzJKRrCvyuFfLKsscfN+ktEFVl5pYQGebNx9dOJ+e6sSY/t2ZdbOJ5RiFKpxHCwC2+8KuwRF+DbqN3EfLTxFjKplLk+d1E0mxGbAH/bY862lQOnI6eghR/yKzirVNKhN46F0+vxGtuigXnFyZSsPPi5qIHSciFODg96HfPgGTHJp3/sFbNpf0mP7WEhfgT4FmsvMRmF/qRl7mdn1BLMhLmYCasIDwsicnMCIfPmMHpY9oDo+XZ3M8si3TmRUU7iiQL0OlwQWY3VwEzxaeTUOWsEgkEkpdrwpxkj1X0ig1akFpc08O7OQkbJ/Ghpvk/yyULkdfX4jHPgDQ+ZBi7l+2L+dU3OhHGjGe9hC4DtALm350JMa5uE5eEZyKRS3nLvcltzfe4SuRmi9jQQN4DVuZ3hVdhaulJVo8TdxZB3lqT3iCssk1NYBrHHStVtLlILvvuqCxN9xAFzUTvmAOJBSO2GIq+rR2xhjWhIEyYmAgBqFA/p0DcCwFDwQIOQQ6eG8e50eb/WpPc8ipiJ56axdFUsR6IX4SnL57rCFQB7cTEnL3uwbO1eThx4j8luqf3WlXzGAluLFrX7ik+240yOngamuUVJ6vlLuDo74mpvpTnAw0YSNirUPx3eVlJdc7dfcwoL8SMipFi7LKa22Zmlq2KZPXMqnrJ8Pj1gT2xCEgBR6xczy+sqMqmU5eEZXDws6Vf4nHzGgn98b0zbgyHMKjdg0RwFCwMrWRioiYs+4kDqeXC1tyJhQ0WvY659X/US5f7ct+jNY4wlZsYN2ufKtidZA7B8wVDgDrEJyeq+3XHpzPc2Z9NffZkbEkdydjALJqX0WZehkRENdffIulSEvNqRW9WWhIfW9Gv+IXPLATifJ8VmhO0zPavfXkfI3BLty/yL5N5s+SKJFR/Mx17c3ZQd7FQL9ZTlM3vmVJauiqW22bnP+t6eUElMpJCJHq4Ullyj+MbDAVtLdl4pX+49Ru0vpYgG3+v1U1l2lS/3HuOX2/e1M4+J2qMy4eCAenWbTCrlRkXF4+82wHW1RX19XGVhnwb3Pa8ZYV1NwucC1m1zZ8NKVf6wOsoWU3MzNUZRryKsqbWDiGhXjeeHmdXx53fvPHF8c5OOp0ZaFYZ62ptgZhT6c/SfXeFxp/hNfJ3Yx8QMsxGp2+3Fxaz4YD5bvkhiwbT+h89rFjWpk8trN9soSL/SDZN5IY8rRaYabaHzHXp3T6bOlFY/xYUZmwAF2kdMa5uErXtKuoXHvybD1lIzUw4OqGf7bog+3N6vpHNfshXpF5WYGLSStLWRHRFSmu53WcaRk3fZHJ3OJC93Itc4ajxrb9X7mXC1IBdrC8NeMTdutWinxSRne5KWGUvcjiUY6Odq9P03GTIbTZdgJqwiav1i1n6yj0D/vofPldX6ZOZcJnjem0Bjt4QxS6yyCmMjAW4jsp5p7PSfKn+fRczaZmc+25aG38TxTHbJ7db/il1XcVEi6l5onOVVxm6plK17SvDa1Lfw+frNZgCchrcNyKaczrLDZ0w1U70lnM+D9kfg5qDP3XsdnM5qwNxsCKsXql6465Ud2NvpUVcP35ytJu6omEVzFC8+Ktt3ciQ3Kir4OFTaY7+9uJjZM6cSHhaEjai8W7+BfgMRH04hLfMCydmefar4/nCpGDcXR6b9sf9XCrUKAbsOtXA88xblcgMa28QknirB0ETMO5PbsLe34VKRnMOpAgJ8G0k8/YCz+RISU9pIy7lJXpkJtQrBi7WYIrk3EZ8fIDgosMfwuFOWzmjEWvzkE3SySy5+E8fz2bY0pno4P1P1uUxuiFKpxEVmRllFMwdT7btheovKfh2ZbT84lLTsfN7yfpXw0BqC1qleuOKye4TMbWF5uwiBvjMyayWrNogpLL+Kra0FcX9/xOwVdsQe/hH9jj+wdZ3ixRETfbgdgBXznhy/1zXoMWdVHlYSEV9vGclQ044ecR+HSvFdcIF9J30Im/fbiSm6pnKPzjIh0Ez8sSs94qwsLbhSVMaVou59nZFZrULAxYJWBAIBMyboA2BkoJrv9TsigtY9vg7Qh9LbUFhWjVKpRDZciESsZMHMEQgNDLjXqEetQtCv+5o+E5NR6E9M/H6i1i/GTJj3RFx+oWph1bVN1NXDUFOe6PKCgwKJ+PwAMyb8tvC5tFyItWQwHm6j8PeswWtsC986+T3zWjojM4lYyY6P9EhKGa22oKCA+9y/P5ZHdM9VnOzM8X/Tm9mTq9VVg9ccjbpdO/xPi5izVtpxraKKlN12GOj3XhvKK1QtaqxbR6+4+ge2jJmZwvsLA9m28ideZunT4Z94bhppmRdYEzrlqaR0EvI0UjrD5/CwIGLik8kt932piemTK8vJ7zrYTl72GNAJmRg/Urmpm0I8HHTEPJN4vS4mJh6Wrd37XCYlk0pxGvngpbYYPd2//f+Pzhid6IjREaMTHTE60RGjI0YnzyGPydBtg/bJfwCln/+4V4N0SAAAAABJRU5ErkJggg==");

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