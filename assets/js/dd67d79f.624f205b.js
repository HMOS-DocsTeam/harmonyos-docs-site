"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["295709"], {
737254(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_media_kit_media_kit_dev_c_media_recording_c_using_ndk_avrecorder_for_video_recording_using_ndk_avrecorder_for_video_recording_md_dd6_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-media-kit-media-kit-dev-c-media-recording-c-using-ndk-avrecorder-for-video-recording-using-ndk-avrecorder-for-video-recording-md-dd6.json
var site_docs_media_kit_media_kit_dev_c_media_recording_c_using_ndk_avrecorder_for_video_recording_using_ndk_avrecorder_for_video_recording_md_dd6_namespaceObject = JSON.parse('{"id":"media-kit/media-kit-dev--c/media-recording-c/using-ndk-avrecorder-for-video-recording/using-ndk-avrecorder-for-video-recording","title":"使用AVRecorder录制视频(C/C++)","description":"AVRecorder支持开发音视频录制，集成了音频捕获，音频编码，视频编码，音视频封装功能，适用于实现简单视频录制并直接得到本地媒体文件的场景。","source":"@site/docs/media-kit/media-kit-dev--c/media-recording-c/using-ndk-avrecorder-for-video-recording/using-ndk-avrecorder-for-video-recording.md","sourceDirName":"media-kit/media-kit-dev--c/media-recording-c/using-ndk-avrecorder-for-video-recording","slug":"/media-kit/media-kit-dev--c/media-recording-c/using-ndk-avrecorder-for-video-recording/","permalink":"/harmonyos-docs-site/media-kit/media-kit-dev--c/media-recording-c/using-ndk-avrecorder-for-video-recording/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"使用AVRecorder录制视频(C/C++)","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/using-ndk-avrecorder-for-video-recording","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用AVRecorder录制音频(C/C++)","permalink":"/harmonyos-docs-site/media-kit/media-kit-dev--c/media-recording-c/using-ndk-avrecorder-for-audio-recording/"},"next":{"title":"AVScreenCapture录屏基础流程","permalink":"/harmonyos-docs-site/media-kit/media-kit-dev--c/media-recording-c/using-avscreencapture-for-buffer/avscreencapture-c-basic-process/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/media-kit/media-kit-dev--c/media-recording-c/using-ndk-avrecorder-for-video-recording/using-ndk-avrecorder-for-video-recording.md


const frontMatter = {
	title: '使用AVRecorder录制视频(C/C++)',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/using-ndk-avrecorder-for-video-recording',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '使用AVRecorder录制视频(C/C++)';

const assets = {

};



const toc = [{
  "value": "申请权限",
  "id": "申请权限",
  "level": 2
}, {
  "value": "开发步骤及注意事项",
  "id": "开发步骤及注意事项",
  "level": 2
}, {
  "value": "完整示例",
  "id": "完整示例",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "使用avrecorder录制视频cc",
        children: "使用AVRecorder录制视频(C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AVRecorder支持开发音视频录制，集成了音频捕获，音频编码，视频编码，音视频封装功能，适用于实现简单视频录制并直接得到本地媒体文件的场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本开发指导将以“开始录制-暂停录制-恢复录制-停止录制”的一次流程为示例，向开发者讲解如何使用AVRecorder进行视频录制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在进行应用开发的过程中，开发者可以通过AVRecorder的state属性主动获取当前状态，或使用OH_AVRecorder_SetStateCallback方法注册回调监听状态变化。开发过程中应严格遵循状态机要求，例如只能在started状态下调用pause()接口，只能在paused状态下调用resume()接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 录制状态变化示意图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(162625)/* ["default"] */.A) + "",
        width: "659",
        height: "471"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["状态的详细说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-t/arkts-apis-media-t#avrecorderstate9",
        children: "AVRecorderState"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "申请权限",
      children: "申请权限"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在开发此功能前，开发者应根据实际需求申请相关权限："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当需要使用麦克风时，需要申请", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "ohos.permission.MICROPHONE"
          })
        }), "麦克风权限。申请方式请参考：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/request-user-authorization",
          children: "向用户申请授权"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当需要使用相机拍摄时，需要申请", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "ohos.permission.CAMERA"
          })
        }), "相机权限。申请方式请参考：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/request-user-authorization",
          children: "向用户申请授权"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当需要从图库读取图片或视频文件时，请优先使用媒体库", (0,jsx_runtime.jsx)(_components.a, {
          href: "/medialibrary-kit/photoaccesshelper-photoviewpicker",
          children: "Picker选择媒体资源"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当需要保存图片或视频文件至图库时，请优先使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/medialibrary-kit/photoaccesshelper-savebutton",
          children: "安全控件保存媒体资源"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(247920)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["仅应用需要克隆、备份或同步用户公共目录的图片、视频类文件时，可申请ohos.permission.READ_IMAGEVIDEO、ohos.permission.WRITE_IMAGEVIDEO权限来读写音视频文件，申请方式请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions-in-acl",
        children: "申请受控权限"
      }), "，通过AGC审核后才能使用。为避免应用的上架申请被驳回，开发者应优先使用Picker/控件等替代方案，仅少量符合", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/app-permissions/restricted-permissions#ohospermissionread_imagevideo",
        children: "特殊场景"
      }), "的应用被允许申请受限权限。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤及注意事项",
      children: "开发步骤及注意事项"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(469327)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["AVRecorder只负责视频数据的处理，需要与视频数据采集模块配合才能完成视频录制。视频数据采集模块需要通过Surface将视频数据传递给AVRecorder进行数据处理。当前常用的数据采集模块为相机模块，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/camera-kit/camera-dev-native/native-camera-recording",
        children: "相机-录像"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["文件的创建与存储，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/core-file-kit/app-file/app-file-access-management/app-file-access",
        children: "应用文件访问与管理"
      }), "，默认存储在应用的沙箱路径之下，如需存储至图库，请使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/medialibrary-kit/photoaccesshelper-savebutton",
        children: "安全控件保存媒体资源"
      }), "对沙箱内文件进行存储。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者通过引入", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-avrecorder-h/capi-avrecorder-h",
        children: "avrecorder.h"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-avrecorder-base-h/capi-avrecorder-base-h",
        children: "avrecorder_base.h"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-averrors-h/capi-native-averrors-h",
        children: "native_averrors.h"
      }), "头文件，使用视频录制相关API。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["AVRecorder详细的API说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-module/capi-avrecorder/capi-avrecorder",
        children: "AVRecorder API参考"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在CMake脚本中链接动态库。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "target_link_libraries(entry PUBLIC libavrecorder.so)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avformat-h/capi-native-avformat-h",
        children: "OH_AVFormat"
      }), "相关接口时，需引入如下头文件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <multimedia/player_framework/native_avformat.h>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "并在CMake脚本中链接如下动态库。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "target_link_libraries(entry PUBLIC libnative_media_core.so)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者使用系统日志能力时，需引入如下头文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <hilog/log.h>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "并需要在CMake脚本中链接如下动态库。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "target_link_libraries(entry PUBLIC libhilog_ndk.z.so)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建AVRecorder实例，实例创建完成进入idle状态。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <multimedia/player_framework/avrecorder.h>\n#include <multimedia/player_framework/avrecorder_base.h>\n\nstatic struct OH_AVRecorder *g_avRecorder = nullptr;\ng_avRecorder = OH_AVRecorder_Create();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置业务需要的监听事件，监听状态变化及错误上报。"
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
                children: "OnStateChange"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "监听AVRecorder的状态改变。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "OnError"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "监听AVRecorder的错误信息。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "OnUri"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "监听AVRecorder生成媒体文件。"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 设置状态回调。\nvoid OnStateChange(OH_AVRecorder *recorder, OH_AVRecorder_State state,\n    OH_AVRecorder_StateChangeReason reason, void *userData) {\n    (void)recorder;\n    (void)userData;\n\n    // 将reason转换为字符串表示。\n    const char *reasonStr = (reason == OH_AVRecorder_StateChangeReason::AVRECORDER_USER) ? \"USER\" :\n                            (reason == OH_AVRecorder_StateChangeReason::AVRECORDER_BACKGROUND) ? \"BACKGROUND\" : \"UNKNOWN\";\n\n    if (state == OH_AVRecorder_State::AVRECORDER_IDLE) {\n        OH_LOG_INFO(LOG_APP, \"==NDKDemo== Recorder OnStateChange IDLE, reason: %{public}s\", reasonStr);\n        // 处理状态变更。\n    }\n    if (state == OH_AVRecorder_State::PREPARED) {\n        OH_LOG_INFO(LOG_APP, \"==NDKDemo== Recorder OnStateChange PREPARED, reason: %{public}s\", reasonStr);\n        // 处理状态变更。\n    }\n    if (state == OH_AVRecorder_State::STARTED) {\n        OH_LOG_INFO(LOG_APP, \"==NDKDemo== Recorder OnStateChange STARTED, reason: %{public}s\", reasonStr);\n        // 处理状态变更。\n    }\n    if (state == OH_AVRecorder_State::PAUSED) {\n        OH_LOG_INFO(LOG_APP, \"==NDKDemo== Recorder OnStateChange PAUSED, reason: %{public}s\", reasonStr);\n        // 处理状态变更。\n    }\n    if (state == OH_AVRecorder_State::STOPPED) {\n        OH_LOG_INFO(LOG_APP, \"==NDKDemo== Recorder OnStateChange STOPPED, reason: %{public}s\", reasonStr);\n        // 处理状态变更。\n    }\n    if (state == OH_AVRecorder_State::RELEASED) {\n        OH_LOG_INFO(LOG_APP, \"==NDKDemo== Recorder OnStateChange RELEASED, reason: %{public}s\", reasonStr);\n        // 处理状态变更。\n    }\n    if (state == OH_AVRecorder_State::ERROR) {\n        OH_LOG_INFO(LOG_APP, \"==NDKDemo== Recorder OnStateChange ERROR, reason: %{public}s\", reasonStr);\n        // 处理状态变更。\n    }\n}\n\n// 设置错误回调。\nvoid OnError(OH_AVRecorder *recorder, int32_t errorCode, const char *errorMsg, void *userData) {\n    (void)recorder;\n    (void)userData;\n    OH_LOG_INFO(LOG_APP, \"==NDKDemo== Recorder OnError errorCode: %{public}d, error message: %{public}s\",\n        errorCode, errorMsg);\n}\n\n// 设置生成媒体文件回调（fileGenerationMode选择AUTO_CREATE时设置）。\nvoid OnUri(OH_AVRecorder *recorder, OH_MediaAsset *asset, void *userData) {\n    (void)recorder;\n    (void)userData;\n    if (asset != nullptr) {\n        auto changeRequest = OH_MediaAssetChangeRequest_Create(asset);\n        if (changeRequest == nullptr) {\n            OH_LOG_ERROR(LOG_APP, \"==NDKDemo== changeRequest is null!\");\n            return;\n        }\n        MediaLibrary_ImageFileType imageFileType = MEDIA_LIBRARY_IMAGE_JPEG; // 待媒体库提供可用的VIDEO接口。\n        uint32_t result = OH_MediaAssetChangeRequest_SaveCameraPhoto(changeRequest, imageFileType);\n        OH_LOG_INFO(LOG_APP, \"result of OH_MediaAssetChangeRequest_SaveCameraPhoto: %d\", result);\n\n        uint32_t resultChange = OH_MediaAccessHelper_ApplyChanges(changeRequest);\n        OH_LOG_INFO(LOG_APP, \"result of OH_MediaAccessHelper_ApplyChanges: %d\", resultChange);\n\n        OH_MediaAsset_Release(asset);\n        OH_MediaAssetChangeRequest_Release(changeRequest);\n    } else {\n        OH_LOG_ERROR(LOG_APP, \"Received null media asset!\");\n    }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置视频录制参数，调用OH_AVRecorder_Prepare()接口，此时进入prepared状态。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(62862)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置参数需要注意："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["配置参数之前需要确保完成对应权限的申请，请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E7%94%B3%E8%AF%B7%E6%9D%83%E9%99%90",
              children: "申请权限"
            }), "。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "prepare接口的入参OH_AVRecorder_Config中设置的音视频相关的配置参数，如示例代码所示。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["需要使用支持的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/media-kit/media-kit-intro#%E6%94%AF%E6%8C%81%E7%9A%84%E6%A0%BC%E5%BC%8F",
              children: "录制规格"
            }), "，视频比特率、分辨率、帧率以实际硬件设备支持的范围为准。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["录制输出的url地址（即示例里avConfig中的url），形式为fd://xx (fd number)。需要调用基础文件操作接口实现应用文件访问能力，获取方式参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/core-file-kit/app-file/app-file-access-management/native-fileio-guidelines",
              children: "应用文件访问与管理"
            }), "。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "void SetConfig(OH_AVRecorder_Config &config)\n{\n    config.audioSourceType = AVRECORDER_MIC;\n    config.videoSourceType = AVRECORDER_SURFACE_ES;\n\n    // 设置媒体属性。\n    config.profile.audioBitrate = 96000;\n    config.profile.audioChannels = 2;\n    config.profile.audioCodec = AVRECORDER_AUDIO_AAC;\n    config.profile.audioSampleRate = 48000;\n\n    config.profile.videoBitrate = 2000000;\n    config.profile.videoFrameWidth = 1280;\n    config.profile.videoFrameHeight = 720;\n    config.profile.videoFrameRate = 30;\n    config.profile.videoCodec = AVRECORDER_VIDEO_AVC;\n    config.profile.isHdr = false;\n    config.profile.enableTemporalScale = false;\n \n    config.profile.fileFormat = AVRECORDER_CFT_MPEG_4;\n    config.fileGenerationMode = AVRECORDER_APP_CREATE;\n\n    config.metadata.videoOrientation = new char[2]; // 开发者需要自行释放申请的内存。\n    if (config.metadata.videoOrientation != nullptr) {\n        strcpy(config.metadata.videoOrientation, \"0\"); // 视频旋转角度，支持0、90、180、270。\n    }\n    OH_LOG_INFO(LOG_APP, \"==NDKDemo== videoOrientation: %{public}s\", config.metadata.videoOrientation);\n\n    config.metadata.location.latitude = 27.791863;\n    config.metadata.location.longitude = 64.574687;\n }\n\n // 准备录制。\n static napi_value PrepareAVRecorder(napi_env env, napi_callback_info info)\n {\n     (void)info;\n     OH_LOG_INFO(LOG_APP, \"==NDKDemo== PrepareAVRecorder in!\");\n     g_avRecorder = OH_AVRecorder_Create();\n     OH_LOG_INFO(LOG_APP, \"==NDKDemo== AVRecorder Create ok! g_avRecorder: %{public}p\", g_avRecorder);\n     if (g_avRecorder == nullptr) {\n         OH_LOG_ERROR(LOG_APP, \"==NDKDemo== AVRecorder Create failed!\");\n     }\n     OH_AVRecorder_Config *config = new OH_AVRecorder_Config(); // 开发者需要自行释放申请的内存。\n     \n     SetConfig(*config);\n \n     // 1.设置URL（fileGenerationMode选择APP_CREATE时设置）。\n     const std::string AVRECORDER_ROOT = \"/data/storage/el2/base/files/\";\n     int32_t outputFd = open((AVRECORDER_ROOT + \"avrecorder01.mp4\").c_str(), O_RDWR | O_CREAT, 0777); // 设置文件名。\n     std::string fileUrl = \"fd://\" + std::to_string(outputFd);\n     config->url = const_cast<char *>(fileUrl.c_str());\n     OH_LOG_INFO(LOG_APP, \"config.url is: %s\", const_cast<char *>(fileUrl.c_str()));\n \n     // 2.设置回调。\n     // 状态回调。\n     OH_AVRecorder_SetStateCallback(g_avRecorder, OnStateChange, nullptr);\n\n     // 错误回调。\n     OH_AVRecorder_SetErrorCallback(g_avRecorder, OnError, nullptr);\n\n     // 生成媒体文件回调（fileGenerationMode选择AUTO_CREATE时设置）。\n     OH_AVErrCode ret = OH_AVRecorder_SetUriCallback(g_avRecorder, OnUri, nullptr);\n     if (ret == AV_ERR_OK) {\n         OH_LOG_INFO(LOG_APP, \"==NDKDemo==  OH_AVRecorder_SetUriCallback succeed!\");\n     } else {\n         OH_LOG_ERROR(LOG_APP, \"==NDKDemo==  Failed to set URI callback, error code: %d\", ret);\n     }\n     \n     // 3.调用prepare接口。\n     int result = OH_AVRecorder_Prepare(g_avRecorder, config);\n     if (result != AV_ERR_OK) {\n         OH_LOG_ERROR(LOG_APP, \"==NDKDemo== AVRecorder Prepare failed %{public}d\", result);\n     }\n   \n     // 4.释放内存。\n     delete config->metadata.videoOrientation;\n     delete config;\n     config = nullptr;\n   \n     napi_value res;\n     napi_create_int32(env, result, &res);\n     return res;\n }\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["获取视频录制需要的SurfaceID，初始化视频数据输入源。该步骤需要在输入源模块完成，以相机为例，需要创建录像输出流，包括创建Camera对象、获取相机列表、创建相机输入流等，相机详细步骤请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/camera-kit/camera-dev-native/native-camera-recording",
            children: "相机-录像方案"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用getInputSurface()接口，接口的返回值SurfaceID用于传递给视频数据输入源模块。常用的输入源模块为相机，以下示例代码中，仅展示获取SurfaceID的步骤。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "输入源模块通过SurfaceID可以获取到Surface，通过Surface可以将视频数据流传递给AVRecorder，由AVRecorder再进行视频数据的处理。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 获取surfaceID。\nOHNativeWindow *window = nullptr;\nint resultCode = OH_AVRecorder_GetInputSurface(g_avRecorder, &window);\nuint64_t surfaceId = 0;\nif (resultCode == AV_ERR_OK && window != nullptr) {\n   OH_NativeWindow_GetSurfaceId(window, &surfaceId);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["初始化视频数据输入源。该步骤需要在输入源模块完成，以相机为例，需要创建录像输出流，包括创建Camera对象、获取相机列表、创建相机输入流等，相机详细步骤请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/camera-kit/camera-dev-native/native-camera-recording",
            children: "相机-录像方案"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开始录制，启动输入源输入视频数据，例如相机模块调用OH_VideoOutput_Start()接口启动相机录制。然后调用OH_AVRecorder_Start()接口，此时AVRecorder进入started状态。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_AVRecorder_Start(g_avRecorder);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "暂停录制，调用OH_AVRecorder_Pause()接口，此时AVRecorder进入paused状态，同时暂停输入源输入数据。例如相机模块调用OH_VideoOutput_Stop()停止相机视频数据输入。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_AVRecorder_Pause(g_avRecorder);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "恢复录制，调用OH_AVRecorder_Resume()接口，此时再次进入started状态。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_AVRecorder_Resume(g_avRecorder);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "停止录制，调用OH_AVRecorder_Stop()接口，此时进入stopped状态，同时停止相机录制。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_AVRecorder_Stop(g_avRecorder);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "重置资源，调用OH_AVRecorder_Reset()重新进入idle状态，允许重新配置录制参数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_AVRecorder_Reset(g_avRecorder);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "销毁实例，调用OH_AVRecorder_Release()进入released状态，退出录制，释放视频数据输入源相关资源，例如相机资源。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_AVRecorder_Release(g_avRecorder);\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "完整示例",
      children: "完整示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参考以下示例，包括“创建录制实例-准备录制-开始录制-暂停录制-恢复录制-停止录制-重置录制状态-释放录制资源”的完整流程。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <unistd.h>\n#include <fcntl.h>\n#include \"hilog/log.h\"\n#include <multimedia/player_framework/avrecorder.h>\n#include <multimedia/player_framework/avrecorder_base.h>\n#include <multimedia/media_library/media_asset_change_request_capi.h>\n#include <multimedia/media_library/media_access_helper_capi.h>\n#include <multimedia/media_library/media_asset_capi.h>\n\nstatic struct OH_AVRecorder *g_avRecorder = nullptr;\nstatic int32_t g_outputFd;\n\n// 设置状态回调。\nvoid OnStateChange(OH_AVRecorder *recorder, OH_AVRecorder_State state,\n                   OH_AVRecorder_StateChangeReason reason, void *userData)\n{\n   (void)recorder;\n   (void)userData;\n\n   // 将reason转换为字符串表示。\n   const char *reasonStr = (reason == OH_AVRecorder_StateChangeReason::AVRECORDER_USER) ? \"USER\" :\n                           (reason == OH_AVRecorder_StateChangeReason::AVRECORDER_BACKGROUND) ? \"BACKGROUND\" : \"UNKNOWN\";\n\n   if (state == OH_AVRecorder_State::AVRECORDER_IDLE) {\n      OH_LOG_INFO(LOG_APP, \"==NDKDemo== Recorder OnStateChange IDLE, reason: %{public}s\", reasonStr);\n      // 处理状态变更。\n   }\n   if (state == OH_AVRecorder_State::AVRECORDER_PREPARED) {\n      OH_LOG_INFO(LOG_APP, \"==NDKDemo== Recorder OnStateChange PREPARED, reason: %{public}s\", reasonStr);\n      // 处理状态变更。\n   }\n   if (state == OH_AVRecorder_State::AVRECORDER_STARTED) {\n      OH_LOG_INFO(LOG_APP, \"==NDKDemo== Recorder OnStateChange STARTED, reason: %{public}s\", reasonStr);\n      // 处理状态变更。\n   }\n   if (state == OH_AVRecorder_State::AVRECORDER_PAUSED) {\n      OH_LOG_INFO(LOG_APP, \"==NDKDemo== Recorder OnStateChange PAUSED, reason: %{public}s\", reasonStr);\n      // 处理状态变更。\n   }\n   if (state == OH_AVRecorder_State::AVRECORDER_STOPPED) {\n      OH_LOG_INFO(LOG_APP, \"==NDKDemo== Recorder OnStateChange STOPPED, reason: %{public}s\", reasonStr);\n      // 处理状态变更。\n   }\n   if (state == OH_AVRecorder_State::AVRECORDER_RELEASED) {\n      OH_LOG_INFO(LOG_APP, \"==NDKDemo== Recorder OnStateChange RELEASED, reason: %{public}s\", reasonStr);\n      // 处理状态变更。\n   }\n   if (state == OH_AVRecorder_State::AVRECORDER_ERROR) {\n      OH_LOG_INFO(LOG_APP, \"==NDKDemo== Recorder OnStateChange ERROR, reason: %{public}s\", reasonStr);\n      // 处理状态变更。\n   }\n}\n\n// 设置错误回调。\nvoid OnError(OH_AVRecorder *recorder, int32_t errorCode, const char *errorMsg, void *userData)\n{\n   (void)recorder;\n   (void)userData;\n   OH_LOG_INFO(LOG_APP, \"==NDKDemo== Recorder OnError errorCode: %{public}d, error message: %{public}s\",\n               errorCode, errorMsg);\n}\n\n// 设置生成媒体文件回调（fileGenerationMode选择AUTO_CREATE时设置）。\nvoid OnUri(OH_AVRecorder *recorder, OH_MediaAsset *asset, void *userData)\n{\n   (void)recorder;\n   (void)userData;\n   OH_LOG_INFO(LOG_APP, \"==NDKDemo== OnUri in!\");\n   if (asset != nullptr) {\n      auto changeRequest = OH_MediaAssetChangeRequest_Create(asset);\n      if (changeRequest == nullptr) {\n         OH_LOG_ERROR(LOG_APP, \"==NDKDemo== changeRequest is null!\");\n         return;\n      }\n      MediaLibrary_ImageFileType imageFileType = MEDIA_LIBRARY_IMAGE_JPEG; // 待媒体库提供可用的VIDEO接口。\n      uint32_t result = OH_MediaAssetChangeRequest_SaveCameraPhoto(changeRequest, imageFileType);\n      OH_LOG_INFO(LOG_APP, \"result of OH_MediaAssetChangeRequest_SaveCameraPhoto: %d\", result);\n\n      uint32_t resultChange = OH_MediaAccessHelper_ApplyChanges(changeRequest);\n      OH_LOG_INFO(LOG_APP, \"result of OH_MediaAccessHelper_ApplyChanges: %d\", resultChange);\n\n      OH_MediaAsset_Release(asset);\n      OH_MediaAssetChangeRequest_Release(changeRequest);\n   } else {\n      OH_LOG_ERROR(LOG_APP, \"Received null media asset!\");\n   }\n   OH_LOG_INFO(LOG_APP, \"==NDKDemo== OnUri out!\");\n}\n\nvoid SetConfig(OH_AVRecorder_Config &config)\n{\n   config.audioSourceType = AVRECORDER_MIC;\n   config.videoSourceType = AVRECORDER_SURFACE_ES;\n\n   // 设置媒体属性。\n   config.profile.audioBitrate = 96000;\n   config.profile.audioChannels = 2;\n   config.profile.audioCodec = AVRECORDER_AUDIO_AAC;\n   config.profile.audioSampleRate = 48000;\n\n   config.profile.videoBitrate = 2000000;\n   config.profile.videoFrameWidth = 1280;\n   config.profile.videoFrameHeight = 720;\n   config.profile.videoFrameRate = 30;\n   config.profile.videoCodec = AVRECORDER_VIDEO_AVC;\n   config.profile.isHdr = false;\n   config.profile.enableTemporalScale = false;\n\n   config.profile.fileFormat = AVRECORDER_CFT_MPEG_4;\n   config.fileGenerationMode = AVRECORDER_APP_CREATE;\n\n   config.metadata.videoOrientation = new char[2]; // 开发者需要自行释放申请的内存。\n   if (config.metadata.videoOrientation != nullptr) {\n      strcpy(config.metadata.videoOrientation, \"0\"); // 视频旋转角度，支持0、90、180、270。\n   }\n   OH_LOG_INFO(LOG_APP, \"==NDKDemo== videoOrientation: %{public}s\", config.metadata.videoOrientation);\n\n   config.metadata.location.latitude = 27.791863;\n   config.metadata.location.longitude = 64.574687;\n}\n\n// 1.准备录制。\nstatic napi_value PrepareAVRecorder(napi_env env, napi_callback_info info)\n{\n   (void)info;\n   OH_LOG_INFO(LOG_APP, \"==NDKDemo== PrepareAVRecorder in!\");\n   g_avRecorder = OH_AVRecorder_Create();\n   OH_LOG_INFO(LOG_APP, \"==NDKDemo== AVRecorder Create ok! g_avRecorder: %{public}p\", g_avRecorder);\n   if (g_avRecorder == nullptr) {\n      OH_LOG_ERROR(LOG_APP, \"==NDKDemo== AVRecorder Create failed!\");\n   }\n   OH_AVRecorder_Config *config = new OH_AVRecorder_Config(); // 开发者需要自行释放申请的内存。\n\n   SetConfig(*config);\n\n   // 1.1设置URL（fileGenerationMode选择APP_CREATE时设置）。\n   const std::string AVRECORDER_ROOT = \"/data/storage/el2/base/files/\";\n   g_outputFd = open((AVRECORDER_ROOT + \"avrecorder01.mp4\").c_str(), O_RDWR | O_CREAT, 0777); // 设置文件名。\n   std::string fileUrl = \"fd://\" + std::to_string(g_outputFd);\n   config->url = const_cast<char *>(fileUrl.c_str());\n\n   // 1.2设置回调。\n   // 状态回调。\n   OH_AVRecorder_SetStateCallback(g_avRecorder, OnStateChange, nullptr);\n\n   // 错误回调。\n   OH_AVRecorder_SetErrorCallback(g_avRecorder, OnError, nullptr);\n\n   // 生成媒体文件回调（fileGenerationMode选择AUTO_CREATE时设置）。\n   OH_AVErrCode ret = OH_AVRecorder_SetUriCallback(g_avRecorder, OnUri, nullptr);\n   if (ret == AV_ERR_OK) {\n      OH_LOG_INFO(LOG_APP, \"==NDKDemo==  OH_AVRecorder_SetUriCallback succeed!\");\n   } else {\n      OH_LOG_ERROR(LOG_APP, \"==NDKDemo==  Failed to set URI callback, error code: %d\", ret);\n   }\n\n   // 1.3调用prepare接口。\n   int result = OH_AVRecorder_Prepare(g_avRecorder, config);\n   if (result != AV_ERR_OK) {\n      OH_LOG_ERROR(LOG_APP, \"==NDKDemo== AVRecorder Prepare failed %{public}d\", result);\n   }\n   \n   // 1.4释放内存。\n   delete config->metadata.videoOrientation;\n   delete config;\n   config = nullptr;\n\n   napi_value res;\n   napi_create_int32(env, result, &res);\n   return res;\n}\n\n// 2.启动相机。\nstatic napi_value PrepareCamera(napi_env env, napi_callback_info info)\n{\n   OH_LOG_INFO(LOG_APP, \"==NDKDemo== AVRecorder PrepareCamera\");\n   (void)info;\n\n   OHNativeWindow *window = nullptr;\n   int resultCode = OH_AVRecorder_GetInputSurface(g_avRecorder, &window);\n   if (resultCode != AV_ERR_OK || window == nullptr) {\n       OH_LOG_INFO(LOG_APP, \"==NDKDemo== AVRecorder OH_AVRecorder_GetInputSurface failed!\");\n       napi_value errorResult;\n       napi_create_int32(env, -1, &errorResult); // -1表示错误\n       return errorResult;\n   }\n   uint64_t surfaceId = 0;\n   OH_NativeWindow_GetSurfaceId(window, &surfaceId);\n\n   // 将surfaceId传入数据采集模块，具体请参考相机模块。\n\n   int result = 0;\n   napi_value res;\n   napi_create_int32(env, result, &res);\n   return res;\n}\n\n// 3.开始录制。\nstatic napi_value StartAVRecorder(napi_env env, napi_callback_info info)\n{\n   (void)info;\n   int result = OH_AVRecorder_Start(g_avRecorder);\n   if (result != AV_ERR_OK) {\n      OH_LOG_ERROR(LOG_APP, \"==NDKDemo== AVRecorder Start failed %{public}d\", result);\n   }\n   napi_value res;\n   napi_create_int32(env, result, &res);\n   return res;\n}\n\n// 4.暂停录制。\nstatic napi_value PauseAVRecorder(napi_env env, napi_callback_info info)\n{\n   (void)info;\n   int result = OH_AVRecorder_Pause(g_avRecorder);\n   if (result != AV_ERR_OK) {\n      OH_LOG_ERROR(LOG_APP, \"==NDKDemo== AVRecorder Pause failed %{public}d\", result);\n   }\n   napi_value res;\n   napi_create_int32(env, result, &res);\n   return res;\n}\n\n// 5.恢复录制。\nstatic napi_value ResumeAVRecorder(napi_env env, napi_callback_info info)\n{\n   (void)info;\n   int result = OH_AVRecorder_Resume(g_avRecorder);\n   if (result != AV_ERR_OK) {\n      OH_LOG_ERROR(LOG_APP, \"==NDKDemo== AVRecorder Resume failed %{public}d\", result);\n   }\n   napi_value res;\n   napi_create_int32(env, result, &res);\n   return res;\n}\n\n// 6.停止录制。\nstatic napi_value StopAVRecorder(napi_env env, napi_callback_info info)\n{\n   (void)info;\n   int result = OH_AVRecorder_Stop(g_avRecorder);\n   if (result != AV_ERR_OK) {\n      OH_LOG_ERROR(LOG_APP, \"==NDKDemo== AVRecorder Stop failed %{public}d\", result);\n   }\n   close(g_outputFd);\n   napi_value res;\n   napi_create_int32(env, result, &res);\n   return res;\n}\n\n// 7.重置录制状态。\nstatic napi_value ResetAVRecorder(napi_env env, napi_callback_info info)\n{\n   (void)info;\n   // 检查g_avRecorder是否有效。\n   if (g_avRecorder == nullptr) {\n      OH_LOG_ERROR(LOG_APP, \"==NDKDemo== g_avRecorder is nullptr!\");\n      napi_value res;\n      napi_create_int32(env, AV_ERR_INVALID_VAL, &res);\n      return res;\n   }\n\n   int result = OH_AVRecorder_Reset(g_avRecorder);\n   if (result != AV_ERR_OK) {\n      OH_LOG_ERROR(LOG_APP, \"==NDKDemo== AVRecorder Reset failed %{public}d\", result);\n   }\n   napi_value res;\n   napi_create_int32(env, result, &res);\n   return res;\n}\n\n// 8.释放录制资源。\nstatic napi_value ReleaseAVRecorder(napi_env env, napi_callback_info info)\n{\n   (void)info;\n   // 检查g_avRecorder是否有效。\n   if (g_avRecorder == nullptr) {\n      OH_LOG_ERROR(LOG_APP, \"==NDKDemo== g_avRecorder is nullptr!\");\n      napi_value res;\n      napi_create_int32(env, AV_ERR_INVALID_VAL, &res);\n      return res;\n   }\n   \n   int result = OH_AVRecorder_Release(g_avRecorder);\n   g_avRecorder = nullptr;   // 释放录制资源后，需要显式地将g_avRecorder指针置空。\n\n   if (result != AV_ERR_OK) {\n      OH_LOG_ERROR(LOG_APP, \"==NDKDemo== AVRecorder Release failed %{public}d\", result);\n   }\n   napi_value res;\n   napi_create_int32(env, result, &res);\n   return res;\n}\n"
      })
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
247920(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
469327(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
162625(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438645-e85fae91e47b103da3d6deda4f7987f0.png");

},
62862(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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