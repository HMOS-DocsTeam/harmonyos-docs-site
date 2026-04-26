"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["985959"], {
894252(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_media_kit_media_kit_dev_c_media_recording_c_using_avscreencapture_for_file_using_avscreencapture_for_file_md_99d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-media-kit-media-kit-dev-c-media-recording-c-using-avscreencapture-for-file-using-avscreencapture-for-file-md-99d.json
var site_docs_media_kit_media_kit_dev_c_media_recording_c_using_avscreencapture_for_file_using_avscreencapture_for_file_md_99d_namespaceObject = JSON.parse('{"id":"media-kit/media-kit-dev--c/media-recording-c/using-avscreencapture-for-file/using-avscreencapture-for-file","title":"使用AVScreenCapture录屏写文件(C/C++)","description":"屏幕录制主要为主屏幕录屏功能。","source":"@site/docs/media-kit/media-kit-dev--c/media-recording-c/using-avscreencapture-for-file/using-avscreencapture-for-file.md","sourceDirName":"media-kit/media-kit-dev--c/media-recording-c/using-avscreencapture-for-file","slug":"/media-kit/media-kit-dev--c/media-recording-c/using-avscreencapture-for-file/","permalink":"/harmonyos-docs-site/media-kit/media-kit-dev--c/media-recording-c/using-avscreencapture-for-file/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"使用AVScreenCapture录屏写文件(C/C++)","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/using-avscreencapture-for-file","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"录屏常见问题","permalink":"/harmonyos-docs-site/media-kit/media-kit-dev--c/media-recording-c/using-avscreencapture-for-buffer/avscreencapture-faqs/"},"next":{"title":"屏幕录制支持矩形区域录制","permalink":"/harmonyos-docs-site/media-kit/media-kit-dev--c/media-recording-c/video-supports-rectangular-area-recording/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/media-kit/media-kit-dev--c/media-recording-c/using-avscreencapture-for-file/using-avscreencapture-for-file.md


const frontMatter = {
	title: '使用AVScreenCapture录屏写文件(C/C++)',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/using-avscreencapture-for-file',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '使用AVScreenCapture录屏写文件(C/C++)';

const assets = {

};



const toc = [{
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
        id: "使用avscreencapture录屏写文件cc",
        children: "使用AVScreenCapture录屏写文件(C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "屏幕录制主要为主屏幕录屏功能。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可以调用录屏（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/media-kit/media-kit-intro#avscreencapture",
        children: "AVScreenCapture"
      }), "）模块的C API接口，完成屏幕录制，采集设备内、麦克风等的音视频源数据。可以调用录屏模块获取音视频文件，然后通过文件的形式流转到其他模块进行播放或处理，达成文件形式分享屏幕内容的场景。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "录屏模块和窗口（Window）、图形（Graphic）等模块协同完成整个视频采集的流程。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用AVScreenCapture录制屏幕涉及到AVScreenCapture实例的创建、音视频采集参数的配置、采集的开始与停止、资源的释放等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开始屏幕录制时正在通话中或者屏幕录制过程中来电，录屏将自动停止。因通话中断的录屏会上报OH_SCREEN_CAPTURE_STATE_STOPPED_BY_CALL状态。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "屏幕录制过程中发生系统用户切换事件时，录屏将自动停止。因系统用户切换中断的录屏会上报OH_SCREEN_CAPTURE_STATE_STOPPED_BY_USER_SWITCHES状态。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本开发指导将以完成一次屏幕数据录制的过程为例，向开发者讲解如何使用AVScreenCapture进行屏幕录制，详细的API声明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-module/capi-avscreencapture/capi-avscreencapture",
        children: "AVScreenCapture API参考"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果配置了采集麦克风音频数据，需对应配置麦克风权限ohos.permission.MICROPHONE和申请长时任务，配置方式请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/request-user-authorization",
        children: "向用户申请权限"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/background-task-kit/continuous-task",
        children: "申请长时任务"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 22开始，在PC/2in1设备上对应用进行录屏时，可通过申请权限", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ohos.permission.TIMEOUT_SCREENOFF_DISABLE_LOCK"
        })
      }), "，实现在屏幕熄灭但不锁屏的场景下，继续保持录制的效果，配置方式请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions",
        children: "声明权限"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 22开始，在PC/2in1设备上对应用进行录屏时，可通过申请权限", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ohos.permission.CUSTOM_SCREEN_RECORDING"
        })
      }), "，实现在录制屏幕时不再弹出隐私告警弹窗。配置方式请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/app-permissions/restricted-permissions",
        children: "受限开放权限"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤及注意事项",
      children: "开发步骤及注意事项"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用AVScreenCapture时要明确其状态的变化，在创建实例后，调用对应的方法可以进入指定的状态实现对应的行为。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在确定的状态下执行不合适的方法会导致AVScreenCapture发生错误，开发者需要在调用状态转换的方法前进行状态检查，避免程序运行异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "在 CMake 脚本中链接动态库"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "target_link_libraries(entry PUBLIC libnative_avscreen_capture.so)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "添加头文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include \"napi/native_api.h\"\n#include <multimedia/player_framework/native_avscreen_capture.h>\n#include <multimedia/player_framework/native_avscreen_capture_base.h>\n#include <multimedia/player_framework/native_avscreen_capture_errors.h>\n#include <fcntl.h>\n#include <string>\n#include <unistd.h>\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建AVScreenCapture实例capture。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_AVScreenCapture* capture = OH_AVScreenCapture_Create();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置屏幕录制参数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建AVScreenCapture实例capture后，可以设置屏幕录制所需要的参数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "其中，录屏存文件时默认录制内录，麦克风可以动态开关，可以同时内外录制。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "同时，录屏存文件需要设置状态回调，感知录制状态。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 录屏时获取麦克风或者内录，内录参数必填，如果都设置了，内录和麦克风的参数设置需要一致。\nOH_AudioCaptureInfo micCapInfo = {\n    .audioSampleRate = 48000,\n    .audioChannels = 2,\n    .audioSource = OH_MIC\n};\n\nOH_AudioCaptureInfo innerCapInfo = {\n    .audioSampleRate = 48000,\n    .audioChannels = 2,\n    .audioSource = OH_ALL_PLAYBACK\n};\n// 录屏音频输出规格配置。audioBitrate保证输出文件的比特率为设置的预期比特率，和audioSampleRate无强关联。\nOH_AudioEncInfo audioEncInfo = {\n    .audioBitrate = 48000,\n    .audioCodecformat = OH_AAC_LC\n};\n\nOH_VideoCaptureInfo videoCapInfo = {\n    .videoFrameWidth = 768,\n    .videoFrameHeight = 1280,\n    .videoSource = OH_VIDEO_SOURCE_SURFACE_RGBA\n};\n\nOH_VideoEncInfo videoEncInfo = {\n    .videoCodec = OH_H264,\n    .videoBitrate = 2000000,\n    .videoFrameRate = 30\n};\n\nOH_AudioInfo audioInfo = {\n    .innerCapInfo = innerCapInfo,\n    .audioEncInfo = audioEncInfo\n};\n\nOH_VideoInfo videoInfo = {\n    .videoCapInfo = videoCapInfo,\n    .videoEncInfo = videoEncInfo\n};\n\nconfig = {\n    .captureMode = OH_CAPTURE_HOME_SCREEN,\n    .dataType = OH_CAPTURE_FILE,\n    .audioInfo = audioInfo,\n    .videoInfo = videoInfo,\n};\n\nOH_AVScreenCapture_Init(capture, config);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用StartScreenRecording()方法开始进行屏幕录制。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_AVScreenCapture_StartScreenRecording(capture);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用StopScreenRecording()方法停止录制。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_AVScreenCapture_StopScreenRecording(capture);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用Release()方法销毁实例，释放资源。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_AVScreenCapture_Release(capture);\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "完整示例",
      children: "完整示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面展示了使用AVScreenCapture屏幕录制存文件的完整示例代码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"napi/native_api.h\"\n#include <multimedia/player_framework/native_avscreen_capture.h>\n#include <multimedia/player_framework/native_avscreen_capture_base.h>\n#include <multimedia/player_framework/native_avscreen_capture_errors.h>\n#include <fcntl.h>\n#include <string>\n#include <unistd.h>\n\nint32_t outputFd;\nstruct OH_AVScreenCapture* capture;\n\nvoid OnStateChange(struct OH_AVScreenCapture *capture, OH_AVScreenCaptureStateCode stateCode, void *userData) {\n    (void)capture;\n    \n    if (stateCode == OH_SCREEN_CAPTURE_STATE_STARTED) {\n        // 处理状态变更。\n    }\n    if (stateCode == OH_SCREEN_CAPTURE_STATE_STOPPED_BY_CALL ||\n        stateCode == OH_SCREEN_CAPTURE_STATE_STOPPED_BY_USER_SWITCHES) {\n        // 录屏中断状态处理。\n    }\n    if (stateCode == OH_SCREEN_CAPTURE_STATE_INTERRUPTED_BY_OTHER) {\n        // 处理状态变更。\n    }\n    (void)userData;\n}\n\n// 获取录屏屏幕id的回调函数OnDisplaySelected()。\nvoid OnDisplaySelected(struct OH_AVScreenCapture *capture, uint64_t displayId, void *userData) {\n    (void)capture;\n    (void)displayId;\n    (void)userData;\n}\n\n// 录屏内容变更回调函数OnCaptureContentChanged()。\nvoid OnCaptureContentChanged(struct OH_AVScreenCapture *capture, OH_AVScreenCaptureContentChangedEvent event, OH_Rect *area, void *userData) {\n    (void)capture;\n    if (event == OH_SCREEN_CAPTURE_CONTENT_HIDE) {\n        // 处理录屏内容变为隐藏。\n    }\n    if (event == OH_SCREEN_CAPTURE_CONTENT_VISIBLE) {\n        // 处理录屏内容变为可见。\n        // 录屏内容变为可见时，可通过回调回传的area参数，获取窗口的位置信息。\n    }\n    if (event == OH_SCREEN_CAPTURE_CONTENT_UNAVAILABLE) {\n        // 处理录屏内容变为不可用，如录屏窗口关闭。\n    }\n    (void)area;\n    (void)userData;\n}\n\n// 手工确认页面用户选择结果的回调函数OnUserSelected()。\nvoid OnUserSelected(OH_AVScreenCapture* capture, OH_AVScreenCapture_UserSelectionInfo* selections, void *userData) {\n    (void)capture;\n    (void)userData;\n    int* selectType = new int;\n    uint64_t* displayId = new uint64_t;\n\n    // 通过获取接口，拿到对应的选择类型和屏幕Id。OH_AVScreenCapture_UserSelectionInfo* selections仅在OnUserSelected回调中有效。\n    OH_AVSCREEN_CAPTURE_ErrCode errorSelectType = OH_AVScreenCapture_GetCaptureTypeSelected(selections, selectType);\n    OH_AVSCREEN_CAPTURE_ErrCode errorDisplayId = OH_AVScreenCapture_GetDisplayIdSelected(selections, displayId);\n\n    // 在使用完成后，对申请的内存进行释放\n    delete selectType, displayId;\n}\n\n// 开始录屏时调用StartScreenCapture。\nstatic napi_value StartScreenCapture(napi_env env, napi_callback_info info) {\n    // 初始化录屏参数，传入配置信息OH_AVScreenCaptureConfig。\n    OH_AVScreenCaptureConfig config;\n    OH_AudioCaptureInfo micCapInfo = {\n        .audioSampleRate = 48000,\n        .audioChannels = 2,\n        .audioSource = OH_MIC\n    };\n\n    OH_AudioCaptureInfo innerCapInfo = {\n        .audioSampleRate = 48000,\n        .audioChannels = 2,\n        .audioSource = OH_ALL_PLAYBACK\n    };\n\n    OH_AudioEncInfo audioEncInfo = {\n        .audioBitrate = 48000,\n        .audioCodecformat = OH_AudioCodecFormat::OH_AAC_LC\n    };\n\n    OH_VideoCaptureInfo videoCapInfo = {\n        .videoFrameWidth = 768,\n        .videoFrameHeight = 1280,\n        .videoSource = OH_VIDEO_SOURCE_SURFACE_RGBA\n    };\n\n    OH_VideoEncInfo videoEncInfo = {\n        .videoCodec = OH_VideoCodecFormat::OH_H264,\n        .videoBitrate = 2000000,\n        .videoFrameRate = 30\n    };\n\n    OH_AudioInfo audioInfo = {\n        .micCapInfo = micCapInfo,\n        .innerCapInfo = innerCapInfo,\n        .audioEncInfo = audioEncInfo\n    };\n\n    OH_VideoInfo videoInfo = {\n        .videoCapInfo = videoCapInfo,\n        .videoEncInfo = videoEncInfo\n    };\n\n    config = {\n        .captureMode = OH_CAPTURE_HOME_SCREEN,\n        .dataType = OH_CAPTURE_FILE,\n        .audioInfo = audioInfo,\n        .videoInfo = videoInfo,\n    };\n\n    // 实例化ScreenCapture。\n    capture = OH_AVScreenCapture_Create();\n\n    OH_RecorderInfo recorderInfo;\n    const std::string SCREEN_CAPTURE_ROOT = \"/data/storage/el2/base/files/\";\n    outputFd = open((SCREEN_CAPTURE_ROOT + \"screen01.mp4\").c_str(), O_RDWR | O_CREAT, 0777);\n\n    // 处理打开失败或创建失败的情况，返回报错结果。\n    if (outputFd == -1) {\n        napi_value errCode;\n        napi_create_double(env, AV_SCREEN_CAPTURE_ERR_IO, &errCode);\n        return errCode;\n    }\n\n    std::string fileUrl = \"fd://\" + std::to_string(outputFd);\n    recorderInfo.url = const_cast<char *>(fileUrl.c_str());\n    recorderInfo.fileFormat = OH_ContainerFormatType::CFT_MPEG_4;\n    config.recorderInfo = recorderInfo;\n\n    // 设置状态回调。\n    OH_AVScreenCapture_SetStateCallback(capture, OnStateChange, nullptr);\n\n    // 可选，设置录屏内容变化回调。\n    OH_Rect* area = nullptr;\n    OH_AVScreenCapture_SetCaptureContentChangedCallback(capture, OnCaptureContentChanged, area);\n\n    // 可选，设置隐私窗口屏蔽模式。\n    int value = 0;\n    OH_AVScreenCapture_CaptureStrategy* strategy = OH_AVScreenCapture_CreateCaptureStrategy();\n    OH_AVScreenCapture_StrategyForPrivacyMaskMode(strategy, value);\n    OH_AVScreenCapture_SetCaptureStrategy(capture, strategy);\n\n    // 可选，设置录屏屏幕Id回调，必须在开始录屏前调用。\n    OH_AVScreenCapture_SetDisplayCallback(capture, OnDisplaySelected, nullptr);\n\n    // 可选 设置手工确认页面用户选择结果的回调，必须在开始录屏前调用。\n    OH_AVScreenCapture_SetSelectionCallback(capture, OnUserSelected, nullptr);\n\n    // 可选，设置光标显示开关，开始录屏前后均可调用。\n    OH_AVScreenCapture_ShowCursor(capture, false);\n\n    // 进行初始化操作。\n    int32_t retInit = OH_AVScreenCapture_Init(capture, config);\n\n    // 可选（API version 20开始支持）：可以根据需要设置区域坐标和大小，设置想要捕获的区域，如下方创建了一个从（0，0）为起点的长100，宽100的矩形区域。此接口也可以在开始录屏以后设置。\n    OH_Rect* region = new OH_Rect;\n    region->x = 0;\n    region->y = 0;\n    region->width = 100;\n    region->height = 100;\n    uint64_t regionDisplayId = 0; // 传入矩形区域所在的屏幕Id。\n    OH_AVScreenCapture_SetCaptureArea(capture, regionDisplayId, region);\n    \n    // 对申请的内存进行释放。\n    delete region;\n\n    // 开始录屏。\n    int32_t retStart = OH_AVScreenCapture_StartScreenRecording(capture);\n\n    // 开始录屏失败的情况处理，返回报错结果。\n    if (retStart != AV_SCREEN_CAPTURE_ERR_OK) {\n        napi_value errCode;\n        napi_create_double(env, retStart, &errCode);\n        return errCode;\n    }\n\n    // 结束录屏见StopScreenCapture。\n    \n    // 返回调用结果，示例仅返回随意值。\n    napi_value code;\n    napi_create_double(env, AV_SCREEN_CAPTURE_ERR_OK, &code);\n\n    return code;\n}\n\n// 结束录屏时调用StopScreenCapture。\nstatic napi_value StopScreenCapture(napi_env env, napi_callback_info info) {\n    if (capture != nullptr) {\n        // 结束录屏。\n        int32_t retStop = OH_AVScreenCapture_StopScreenRecording(capture);\n\n        // 关闭文件访问\n        close(outputFd);\n\n        // 结束录屏失败的情况处理，返回报错结果。\n        if (retStop != AV_SCREEN_CAPTURE_ERR_OK) {\n            napi_value errCode;\n            napi_create_double(env, retStop, &errCode);\n            return errCode;\n        }\n\n        // 释放ScreenCapture。\n        int32_t retRelease = OH_AVScreenCapture_Release(capture);\n\n        // 释放ScreenCapture失败情况下处理，返回报错结果。\n        if (retRelease != AV_SCREEN_CAPTURE_ERR_OK) {\n            napi_value errCode;\n            napi_create_double(env, retRelease, &errCode);\n            return errCode;\n        }\n\n        capture = nullptr;\n    }\n\n    // 返回成功结果。\n    napi_value code;\n    napi_create_double(env, AV_SCREEN_CAPTURE_ERR_OK, &code);\n\n    return code;\n}\n\nEXTERN_C_START\nstatic napi_value Init(napi_env env, napi_value exports) {\n    napi_property_descriptor desc[] = {\n        {\"startScreenCapture\", nullptr, StartScreenCapture, nullptr, nullptr, nullptr, napi_default, nullptr},\n        {\"stopScreenCapture\", nullptr, StopScreenCapture, nullptr, nullptr, nullptr, napi_default, nullptr}};\n    napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc);\n    return exports;\n}\nEXTERN_C_END\n\nstatic napi_module demoModule = {\n    .nm_version = 1,\n    .nm_flags = 0,\n    .nm_filename = nullptr,\n    .nm_register_func = Init,\n    .nm_modname = \"entry\",\n    .nm_priv = ((void *)0),\n    .reserved = {0},\n};\n\nextern \"C\" __attribute__((constructor)) void RegisterEntryModule(void) { napi_module_register(&demoModule); }\n"
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