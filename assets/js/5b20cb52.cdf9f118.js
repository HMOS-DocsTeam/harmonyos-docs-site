"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["549871"], {
989747(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_media_kit_media_kit_dev_c_media_transcoder_c_using_ndk_avtranscoder_for_transcodering_using_ndk_avtranscoder_for_transcodering_md_5b2_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-media-kit-media-kit-dev-c-media-transcoder-c-using-ndk-avtranscoder-for-transcodering-using-ndk-avtranscoder-for-transcodering-md-5b2.json
var site_docs_media_kit_media_kit_dev_c_media_transcoder_c_using_ndk_avtranscoder_for_transcodering_using_ndk_avtranscoder_for_transcodering_md_5b2_namespaceObject = JSON.parse('{"id":"media-kit/media-kit-dev--c/media-transcoder-c/using-ndk-avtranscoder-for-transcodering/using-ndk-avtranscoder-for-transcodering","title":"使用AVTranscoder实现视频转码(C/C++)","description":"从API version 20开始支持使用NDK接口（C/C++）实现视频转码。","source":"@site/docs/media-kit/media-kit-dev--c/media-transcoder-c/using-ndk-avtranscoder-for-transcodering/using-ndk-avtranscoder-for-transcodering.md","sourceDirName":"media-kit/media-kit-dev--c/media-transcoder-c/using-ndk-avtranscoder-for-transcodering","slug":"/media-kit/media-kit-dev--c/media-transcoder-c/using-ndk-avtranscoder-for-transcodering/","permalink":"/harmonyos-docs-site/media-kit/media-kit-dev--c/media-transcoder-c/using-ndk-avtranscoder-for-transcodering/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"使用AVTranscoder实现视频转码(C/C++)","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/using-ndk-avtranscoder-for-transcodering","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用AVImageGenerator获取视频帧(C/C++)","permalink":"/harmonyos-docs-site/media-kit/media-kit-dev--c/media-info-c/using-ndk-avimagegenerator-for-video/"},"next":{"title":"视频缩放","permalink":"/harmonyos-docs-site/media-kit/media-kit-dev--c/videoprocessing-guidelines/generate-super-resolution-video/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/media-kit/media-kit-dev--c/media-transcoder-c/using-ndk-avtranscoder-for-transcodering/using-ndk-avtranscoder-for-transcodering.md


const frontMatter = {
	title: '使用AVTranscoder实现视频转码(C/C++)',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/using-ndk-avtranscoder-for-transcodering',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '使用AVTranscoder实现视频转码(C/C++)';

const assets = {

};



const toc = [{
  "value": "开发步骤及注意事项",
  "id": "开发步骤及注意事项",
  "level": 2
}, {
  "value": "运行完整示例",
  "id": "运行完整示例",
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
        id: "使用avtranscoder实现视频转码cc",
        children: "使用AVTranscoder实现视频转码(C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 20开始支持使用NDK接口（C/C++）实现视频转码。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/media-kit/media-kit-intro#avtranscoder",
        children: "AVTranscoder"
      }), "可以实现视频转码功能，从API 12开始，转码功能可在手机、平板、2in1设备上作为系统提供的基础能力使用。可以通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/common-basic-c/common-basic-module/init/init#caniuse",
        children: "canIUse"
      }), "接口来判断当前设备是否支持AVTranscoder。当canIUse(\"SystemCapability.Multimedia.Media.AVTranscoder\")返回值为true时，表示可以使用转码能力。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本开发指导将以“开始转码-暂停转码-恢复转码-完成转码”的一次完整流程为示例，向开发者讲解AVTranscoder视频转码相关功能。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 转码状态变化示意图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(737882)/* ["default"] */.A) + "",
        width: "837",
        height: "467"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["状态的详细说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-avtranscoder-base-h/capi-avtranscoder-base-h#oh_avtranscoder_state",
        children: "OH_AVTranscoder_State"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤及注意事项",
      children: "开发步骤及注意事项"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在CMake脚本中链接动态库。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "target_link_libraries(entry PUBLIC libavtranscoder.so libace_napi.z.so)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者使用系统日志能力时，需引入如下头文件："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <hilog/log.h>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "并需要在CMake脚本中链接如下动态库:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "target_link_libraries(sample PUBLIC libhilog_ndk.z.so)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者通过引入avtranscoder.h和avtranscoder_base.h头文件，使用转码相关API。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细的API说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-module/capi-avtranscoder/capi-avtranscoder",
        children: "AVTranscoder"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建转码实例：调用OH_AVTranscoder_Create()。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_AVTranscoder *transcoder = OH_AVTranscoder_Create();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置回调事件函数：使用OH_AVTranscoder_SetStateCallback()、OH_AVTranscoder_SetErrorCallback()和OH_AVTranscoder_SetProgressUpdateCallback()接口设置回调转码状态、转码错误事件和转码进度更新回调函数，搭配全流程场景使用。支持的回调事件包括："
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "事件类型"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "OH_AVTranscoder_OnStateChange"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "可选事件，回调转码过程中状态。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "OH_AVTranscoder_OnError"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "可选事件，回调转码错误事件。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "OH_AVTranscoder_OnProgressUpdate"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "可选事件，回调转码进度更新事件。"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用使用OH_AVTranscoder_SetStateCallback()、OH_AVTranscoder_SetErrorCallback()和OH_AVTranscoder_SetProgressUpdateCallback()接口设置回调转码状态、转码错误事件和转码进度更新回调函数，可以获取更多信息，还可以通过设置userData自定义数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "typedef struct NdkAVTransCoderUser {\n   using StateChangeFunc = std::function<void()>;\n   NdkAVTransCoderUser();\n   NdkAVTransCoderUser(const NdkAVTransCoderUser &other) = delete;\n   NdkAVTransCoderUser &operator=(const NdkAVTransCoderUser &other) = delete;\n   ~NdkAVTransCoderUser();\n\n   void OnStateChangeCb(OH_AVTranscoder *transcoder, OH_AVTranscoder_State state);\n   void OnErrorCb(OH_AVTranscoder *transcoder, int32_t errorCode, const char  *errorMsg);\n   void OnProgressUpdateCb(OH_AVTranscoder *transcoder, int progress);\n   std::map<uint32_t, StateChangeFunc> stateChangeFuncs_;\n\n   OH_AVTranscoder *transcoder = nullptr;\n   int32_t errorCode = AV_ERR_OK;\n   OH_AVTranscoder_State transCoderState = AVTRANSCODER_PREPARED;\n   int avTranscoderProgress = 0;\n   int inStartStateCount = 0;\n} NdkAVTransCoderUser;\n\nvoid NdkAVTransCoderUser::OnProgressUpdateCb(OH_AVTranscoder *transcoder, int  progress)\n{\n   LOG(\"NdkAVTransCoderUser OnProgressUpdateCb progress: %{public}d\", progress);\n   this->avTranscoderProgress = progress;\n}\n\nvoid NdkAVTransCoderUser::OnErrorCb(OH_AVTranscoder *transcoder, int32_t  errorCode, const char *errorMsg)\n{\n   LOG(\"NdkAVTransCoderUser OnErrorCb errorCode: %{public}d ,errorMsg: %{public} s\", errorCode,\n      errorMsg == nullptr ? \"unknown\" : errorMsg);\n   this->errorCode = errorCode;\n}\n\nvoid NdkAVTransCoderUser::OnStateChangeCb(OH_AVTranscoder *transcoder,  OH_AVTranscoder_State state)\n{\n   this->transCoderState = state;\n   if (transcoder == nullptr) {\n      return;\n   }\n   int32_t ret = -1;\n   switch (state) {\n      case AVTRANSCODER_PREPARED: {\n            this->transCoderState = AVTRANSCODER_PREPARED;\n            if (this->stateChangeFuncs_.count(AVTRANSCODER_PREPARED) > 0) {\n               this->stateChangeFuncs_[AVTRANSCODER_PREPARED]();\n            }\n            break;\n      }\n      case AVTRANSCODER_STARTED: {\n            this->transCoderState = AVTRANSCODER_STARTED;\n            if (this->stateChangeFuncs_.count(AVTRANSCODER_STARTED) > 0) {\n               this->stateChangeFuncs_[AVTRANSCODER_STARTED]();\n            }\n            break;\n      }\n      case AVTRANSCODER_PAUSED: {\n            this->transCoderState = AVTRANSCODER_PAUSED;\n            if (this->stateChangeFuncs_.count(AVTRANSCODER_PAUSED) > 0) {\n               this->stateChangeFuncs_[AVTRANSCODER_PAUSED]();\n            }\n            break;\n      }\n      case AVTRANSCODER_CANCELLED: {\n            this->transCoderState = AVTRANSCODER_CANCELLED;\n            if (this->stateChangeFuncs_.count(AVTRANSCODER_CANCELLED) > 0) {\n               this->stateChangeFuncs_[AVTRANSCODER_CANCELLED]();\n            }\n            break;\n      }\n      case AVTRANSCODER_COMPLETED: {\n            this->transCoderState = AVTRANSCODER_COMPLETED;\n            if (this->stateChangeFuncs_.count(AVTRANSCODER_COMPLETED) > 0) {\n               this->stateChangeFuncs_[AVTRANSCODER_COMPLETED]();\n            }\n            break;\n      }\n      default:\n            break;\n   }\n}\n\nstatic void AvTranscoderStateChangeCbImpl(OH_AVTranscoder *transcoder,  OH_AVTranscoder_State state, void *userData)\n{\n   LOG(\"AvTranscoderStateChangeCbImpl state: %{public}d\", state);\n   NdkAVTransCoderUser *ndkAVTransCoderUser =  reinterpret_cast<NdkAVTransCoderUser *>(userData);\n   if (ndkAVTransCoderUser == nullptr || transcoder == nullptr) {\n      LOGE(\"AvTranscoderStateChangeCbImpl ndkAVTransCoderUser or transcoder is  nullptr\");\n      return;\n   }\n   ndkAVTransCoderUser->OnStateChangeCb(transcoder, state);\n}\n\nstatic void AvTranscoderErrorCbImpl(OH_AVTranscoder *transcoder, int32_t  errorCode, const char *errorMsg,\n                                    void *userData)\n{\n   LOG(\"AvTranscoderErrorCbImpl errorCode: %{public}d, errorMsg: %{public}s\",  errorCode,\n      errorMsg == nullptr ? \"unknown\" : errorMsg);\n   NdkAVTransCoderUser *ndkAVTransCoderUser =  reinterpret_cast<NdkAVTransCoderUser *>(userData);\n   if (ndkAVTransCoderUser == nullptr || transcoder == nullptr) {\n      LOGE(\"AvTranscoderErrorCbImpl ndkAVTransCoderUser or transcoder is  nullptr\");\n      return;\n   }\n   ndkAVTransCoderUser->OnErrorCb(transcoder, errorCode, errorMsg);\n}\n\nstatic void AvTranscoderProgressUpdateCbImpl(OH_AVTranscoder *transcoder, int  progress, void *userData)\n{\n   LOG(\"AvTranscoderProgressUpdateCbImpl progress: %{public}d\", progress);\n   NdkAVTransCoderUser *ndkAVTransCoderUser =  reinterpret_cast<NdkAVTransCoderUser *>(userData);\n   if (ndkAVTransCoderUser == nullptr || transcoder == nullptr) {\n      LOGE(\"AvTranscoderProgressUpdateCbImpl ndkAVTransCoderUser or transcoder is  nullptr\");\n      return;\n   }\n   ndkAVTransCoderUser->OnProgressUpdateCb(transcoder, progress);\n}\nstatic napi_value OHAvTranscoderNdkPlay(napi_env env, napi_callback_info info)\n{\n   OH_AVTranscoder_SetStateCallback(transcoder, AvTranscoderStateChangeCbImpl,  transcoderUser); // 设置状态回调\n   OH_AVTranscoder_SetErrorCallback(transcoder, AvTranscoderErrorCbImpl,  transcoderUser); // 设置错误码回调\n   OH_AVTranscoder_SetProgressUpdateCallback(transcoder,  AvTranscoderProgressUpdateCbImpl, transcoderUser); // 设置进度值回调\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用OH_AVTranscoderConfig_Create()创建转码配置实例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_AVTranscoder_Config *config = OH_AVTranscoderConfig_Create();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置转码源视频的文件描述符：调用OH_AVTranscoderConfig_SetSrcFD()设置源视频文件信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_AVTranscoderConfig_SetSrcFD(config, srcFd, srcOffset, length); // 设置转码源视频FD\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置转码输出视频的文件描述符：调用OH_AVTranscoderConfig_SetDstFD()设置目标视频文件描述符。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_AVTranscoderConfig_SetDstFD(config, dstFd); // 设置转码的目标文件描述符dstFd。\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）设置转码输出视频的编码格式：调用OH_AVTranscoderConfig_SetDstVideoType()设置输出视频的编码格式。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_AVTranscoderConfig_SetDstVideoType(config, \"video/avc\"); // 视频编码格式，可选。\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）设置转码输出音频的编码格式：调用OH_AVTranscoderConfig_SetDstAudioType()设置输出音频的编码格式。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_AVTranscoderConfig_SetDstAudioType(config, \"audio/mp4a-latm\"); // 音频编码格式，可选。\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置转码输出视频文件的封装格式：调用OH_AVTranscoderConfig_SetDstFileType()设置输出视频文件的封装格式。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_AVTranscoderConfig_SetDstFileType(config, AV_OUTPUT_FORMAT_MPEG_4); // 封装格式。\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）设置转码输出音频的码率：调用OH_AVTranscoderConfig_SetDstAudioBitrate()设置输出音频的码率。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const std::int32_t AUDIO_BITRATE = 200000;\nOH_AVTranscoderConfig_SetDstAudioBitrate(config, AUDIO_BITRATE); // 音频比特率，可选。\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）设置转码输出视频的码率：调用OH_AVTranscoderConfig_SetDstVideoBitrate()设置输出视频的码率。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const std::int32_t VIDEO_BITRATE = 3000000;\nOH_AVTranscoderConfig_SetDstVideoBitrate(config, VIDEO_BITRATE); // 视频比特率，可选。\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）设置转码输出视频的分辨率：调用OH_AVTranscoderConfig_SetDstVideoResolution()设置输出视频的分辨率。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const std::int32_t VIDEO_WIDTH = 1280;\nconst std::int32_t VIDEO_HEIGHT = 720;\nOH_AVTranscoderConfig_SetDstVideoResolution(config, VIDEO_WIDTH, VIDEO_HEIGHT);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "准备转码：调用OH_AVTranscoder_Prepare()成功之后进入AVTRANSCODER_PREPARED状态。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_AVErrCode errCode = AV_ERR_OK;\nerrCode = OH_AVTranscoder_Prepare(transcoder, config); // 准备转码\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开始转码：调用OH_AVTranscoder_Start()成功之后进入AVTRANSCODER_STARTED状态。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_AVErrCode errCode = AV_ERR_OK;\nerrCode = OH_AVTranscoder_Start(transcoder); // 开始转码\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）暂停转码：调用OH_AVTranscoder_Pause()成功之后进入AVTRANSCODER_PAUSED状态。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_AVErrCode errCode = AV_ERR_OK;\nerrCode = OH_AVTranscoder_Pause(transcoder); // 暂停转码\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）恢复转码：调用OH_AVTranscoder_Resume()成功之后重新进入AVTRANSCODER_STARTED状态。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_AVErrCode errCode = AV_ERR_OK;\nerrCode = OH_AVTranscoder_Resume(transcoder); // 恢复转码\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）取消转码：调用OH_AVTranscoder_Cancel()成功之后进入AVTRANSCODER_CANCELLED状态。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_AVErrCode errCode = AV_ERR_OK;\nerrCode = OH_AVTranscoder_Cancel(transcoder); // 取消转码\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "释放转码配置参数：调用OH_AVTranscoderConfig_Release()销毁实例，释放资源。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_AVErrCode errCode = AV_ERR_OK;\nerrCode = OH_AVTranscoderConfig_Release(config); // 释放转码配置实例\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "释放转码资源：调用OH_AVTranscoder_Release()销毁实例，释放资源。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_AVErrCode errCode = AV_ERR_OK;\nerrCode = OH_AVTranscoder_Release(transcoder); // 释放转码实例\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "运行完整示例",
      children: "运行完整示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["新建工程，下载", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://gitcode.com/openharmony/applications_app_samples/tree/master/code/DocsSample/Media/AVTranscoder/AVTranscoderNDK",
            children: "示例工程"
          }), "，并将示例工程的以下资源复制到对应目录。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "AVTranscoderNDK\nentry/src/main/ets/\n└── pages\n    └── Index.ets（转码界面）\nentry/src/main/\n├── cpp\n│   ├── types\n│   │   └── libentry\n│   │       └── Index.d.ts（NDK函数对应的js映射）\n│   ├── CMakeLists.txt（CMake脚本）\n│   └── napi_init.cpp（NDK函数）\n└── resources\n    ├── base\n    │   └── element\n    │       ├── color.json\n    │       ├── float.json\n    │       └── string.json\n    └── rawfile\n        └── src.mp4（视频资源）\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编译新建工程并运行。"
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
737882(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958602-fe2405ad2718e528e081888e8c9711df.png");

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