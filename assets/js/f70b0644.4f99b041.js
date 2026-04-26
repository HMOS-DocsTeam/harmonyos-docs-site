"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["766103"], {
130410(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_media_kit_media_kit_dev_c_media_recording_c_using_avscreencapture_for_buffer_avscreencapture_c_basic_process_avscreencapture_c_basic_process_md_f70_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-media-kit-media-kit-dev-c-media-recording-c-using-avscreencapture-for-buffer-avscreencapture-c-basic-process-avscreencapture-c-basic-process-md-f70.json
var site_docs_media_kit_media_kit_dev_c_media_recording_c_using_avscreencapture_for_buffer_avscreencapture_c_basic_process_avscreencapture_c_basic_process_md_f70_namespaceObject = JSON.parse('{"id":"media-kit/media-kit-dev--c/media-recording-c/using-avscreencapture-for-buffer/avscreencapture-c-basic-process/avscreencapture-c-basic-process","title":"AVScreenCapture录屏基础流程","description":"屏幕录制功能支持开发者获取屏幕数据，适用于屏幕录制、会议共享、直播等场景。开发者可通过调用AVScreenCapture模块的C API，采集设备内外的音视频数据源。该模块需与窗口管理（Window）、图形处理（Graphic）等模块协同工作，以完成完整的视频采集流程。","source":"@site/docs/media-kit/media-kit-dev--c/media-recording-c/using-avscreencapture-for-buffer/avscreencapture-c-basic-process/avscreencapture-c-basic-process.md","sourceDirName":"media-kit/media-kit-dev--c/media-recording-c/using-avscreencapture-for-buffer/avscreencapture-c-basic-process","slug":"/media-kit/media-kit-dev--c/media-recording-c/using-avscreencapture-for-buffer/avscreencapture-c-basic-process/","permalink":"/harmonyos-docs-site/media-kit/media-kit-dev--c/media-recording-c/using-avscreencapture-for-buffer/avscreencapture-c-basic-process/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"AVScreenCapture录屏基础流程","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/avscreencapture-c-basic-process","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用AVRecorder录制视频(C/C++)","permalink":"/harmonyos-docs-site/media-kit/media-kit-dev--c/media-recording-c/using-ndk-avrecorder-for-video-recording/"},"next":{"title":"AVScreenCapture录屏自定义场景","permalink":"/harmonyos-docs-site/media-kit/media-kit-dev--c/media-recording-c/using-avscreencapture-for-buffer/avscreencapture-c-custom-scenarios/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/media-kit/media-kit-dev--c/media-recording-c/using-avscreencapture-for-buffer/avscreencapture-c-basic-process/avscreencapture-c-basic-process.md


const frontMatter = {
	title: 'AVScreenCapture录屏基础流程',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/avscreencapture-c-basic-process',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = 'AVScreenCapture录屏基础流程';

const assets = {

};



const toc = [{
  "value": "流程介绍",
  "id": "流程介绍",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "通用开发步骤",
  "id": "通用开发步骤",
  "level": 2
}, {
  "value": "依赖导入",
  "id": "依赖导入",
  "level": 3
}, {
  "value": "创建AVScreenCapture实例",
  "id": "创建avscreencapture实例",
  "level": 3
}, {
  "value": "配置音频采集参数",
  "id": "配置音频采集参数",
  "level": 3
}, {
  "value": "配置视频采集参数",
  "id": "配置视频采集参数",
  "level": 3
}, {
  "value": "初始化AVScreenCapture实例配置",
  "id": "初始化avscreencapture实例配置",
  "level": 3
}, {
  "value": "设置数据更新、状态切换、错误上报的回调",
  "id": "设置数据更新状态切换错误上报的回调",
  "level": 3
}, {
  "value": "启动录屏",
  "id": "启动录屏",
  "level": 3
}, {
  "value": "处理录屏数据",
  "id": "处理录屏数据",
  "level": 3
}, {
  "value": "停止录屏",
  "id": "停止录屏",
  "level": 3
}, {
  "value": "释放资源",
  "id": "释放资源",
  "level": 3
}, {
  "value": "PC/2in1弹窗模式配置说明",
  "id": "pc2in1弹窗模式配置说明",
  "level": 2
}, {
  "value": "录制指定屏幕",
  "id": "录制指定屏幕",
  "level": 3
}, {
  "value": "录制主屏幕",
  "id": "录制主屏幕",
  "level": 3
}, {
  "value": "录制指定窗口（推荐）",
  "id": "录制指定窗口推荐",
  "level": 3
}, {
  "value": "Phone/Tablet弹窗模式配置说明",
  "id": "phonetablet弹窗模式配置说明",
  "level": 2
}, {
  "value": "更多资源",
  "id": "更多资源",
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
        id: "avscreencapture录屏基础流程",
        children: "AVScreenCapture录屏基础流程"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["屏幕录制功能支持开发者获取屏幕数据，适用于屏幕录制、会议共享、直播等场景。开发者可通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/media-kit/media-kit-intro#avscreencapture",
        children: "AVScreenCapture"
      }), "模块的C API，采集设备内外的音视频数据源。该模块需与窗口管理（Window）、图形处理（Graphic）等模块协同工作，以完成完整的视频采集流程。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 22开始，在PC/2in1设备上录屏时新增如下能力："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["支持在熄屏但不锁屏的情况下保持录制：需要申请权限", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "ohos.permission.TIMEOUT_SCREENOFF_DISABLE_LOCK"
          })
        }), "。配置方式请参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions",
          children: "声明权限"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["支持在录制屏幕时不再弹出隐私告警弹窗：需要申请权限", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "ohos.permission.CUSTOM_SCREEN_RECORDING"
          })
        }), "。配置方式请参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/access-control/app-permission-mgmt/app-permissions/restricted-permissions",
          children: "受限开放权限"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "流程介绍",
      children: "流程介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基础屏幕录制功能涉及到AVScreenCapture实例创建、音视频参数配置、回调设置、开始与停止、结果处理、资源释放等步骤。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在此基础上，开发者可以根据视频录制、直播等特定场景进行更高级的设置，详情参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/media-kit/media-kit-dev--c/media-recording-c/using-avscreencapture-for-buffer/avscreencapture-c-custom-scenarios",
        children: "AVScreenCapture录屏自定义场景"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基础流程如下图所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(317769)/* ["default"] */.A) + "",
        width: "1585",
        height: "852"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "录屏采集的内容输出方式如下。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "文件形式：保存为文件，该文件可以播放、分享等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "码流形式：该码流可根据场景进行不同的处理，例如将码流流转到其他模块，实现桌面共享、视频直播等。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用AVScreenCapture时需明确其状态变化。创建实例后，调用方法可进入指定状态。在错误状态下执行方法会导致AVScreenCapture出错。开发者应在状态转换前进行检查以避免异常。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在录屏取码流场景中，屏幕录制启动时会弹出隐私保护弹框，包含“屏幕隐私保护”选项。勾选后，隐私信息（如横幅通知、控制中心、通话界面等）将被屏蔽。不同产品上的隐私信息可能有差异，以实际录制结果为准。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "隐私保护弹框："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(457791)/* ["default"] */.A) + "",
            width: "270",
            height: "562"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "通用开发步骤",
      children: "通用开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "依赖导入",
      children: "依赖导入"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在CMake脚本中链接动态库："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "target_link_libraries(entry PUBLIC libnative_avscreen_capture.so libnative_buffer.so libnative_media_core.so)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "添加头文件："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"napi/native_api.h\"\n#include <multimedia/player_framework/native_avscreen_capture.h>\n#include <multimedia/player_framework/native_avscreen_capture_base.h>\n#include <multimedia/player_framework/native_avscreen_capture_errors.h>\n#include <multimedia/player_framework/native_avbuffer.h>\n#include <native_buffer/native_buffer.h>\n#include <vector>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "创建avscreencapture实例",
      children: "创建AVScreenCapture实例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["实例化对象，通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-h/capi-native-avscreen-capture-h#oh_avscreencapture_create",
        children: "OH_AVScreenCapture_Create"
      }), "创建", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-struct/capi-avscreencapture-oh-avscreencapture/capi-avscreencapture-oh-avscreencapture",
        children: "OH_AVScreenCapture"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVScreenCapture* capture = OH_AVScreenCapture_Create();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "配置音频采集参数",
      children: "配置音频采集参数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建AVScreenCapture实例后，可设置屏幕录制所需要的音频参数", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-struct/capi-avscreencapture-oh-audioinfo/capi-avscreencapture-oh-audioinfo",
        children: "OH_AudioInfo"
      }), "，包括内录、麦克风音频", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-struct/capi-avscreencapture-oh-audiocaptureinfo/capi-avscreencapture-oh-audiocaptureinfo",
        children: "OH_AudioCaptureInfo"
      }), "和输出规格", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-struct/capi-avscreencapture-oh-audioencinfo/capi-avscreencapture-oh-audioencinfo",
        children: "OH_AudioEncInfo"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果配置了采集麦克风音频数据，需："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["配置麦克风权限ohos.permission.MICROPHONE，配置方式请参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/request-user-authorization",
          children: "向用户申请权限"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["申请长时任务，申请方式请参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/background-task-kit/continuous-task",
          children: "申请长时任务"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "录屏存文件时默认只开启内录。录制过程中，麦克风可以动态开启/关闭，开启后，可同时启动内外录制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "内录音频信息必须设置，麦克风音频信息可按实际场景按需设置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 录屏时获取麦克风，如果同时设置了内录和麦克风音频信息，两者参数设置需保持一致。\nOH_AudioCaptureInfo micCapInfo = {\n    .audioSampleRate = 48000,\n    .audioChannels = 2,\n    .audioSource = OH_MIC\n};\n// 录屏时获取内录数据，内录参数必填。如果同时设置了内录和麦克风音频信息，两者参数设置需保持一致。\nOH_AudioCaptureInfo innerCapInfo = {\n    .audioSampleRate = 48000,\n    .audioChannels = 2,\n    .audioSource = OH_ALL_PLAYBACK\n};\n// 录屏音频输出规格配置。audioBitrate保证输出文件的比特率为设置的预期比特率，和audioSampleRate无强关联。\nOH_AudioEncInfo audioEncInfo = {\n    .audioBitrate = 48000,\n    .audioCodecformat = OH_AAC_LC\n};\nOH_AudioInfo audioInfo = {\n    .micCapInfo = micCapInfo,\n    .innerCapInfo = innerCapInfo,\n    .audioEncInfo = audioEncInfo\n};\n// 可以单独设置麦克风开关。\nbool isMic = true;\nOH_AVScreenCapture_SetMicrophoneEnabled(capture, isMic);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "配置视频采集参数",
      children: "配置视频采集参数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["录屏的视频采集信息", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-struct/capi-avscreencapture-oh-videoinfo/capi-avscreencapture-oh-videoinfo",
        children: "OH_VideoInfo"
      }), "包含录屏输入规格配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-struct/capi-avscreencapture-oh-videocaptureinfo/capi-avscreencapture-oh-videocaptureinfo",
        children: "OH_VideoCaptureInfo"
      }), "和录屏输出规格配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-struct/capi-avscreencapture-oh-videoencinfo/capi-avscreencapture-oh-videoencinfo",
        children: "OH_VideoEncInfo"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 录屏输入规格配置。\nOH_VideoCaptureInfo videoCapInfo = {\n    .videoFrameWidth = 768,\n    .videoFrameHeight = 1280,\n    .videoSource = OH_VIDEO_SOURCE_SURFACE_RGBA\n };\n// 录屏输出规格配置。\nOH_VideoEncInfo videoEncInfo = {\n    .videoCodec = OH_H264,\n    .videoBitrate = 2000000,\n    .videoFrameRate = 30\n };\nOH_VideoInfo videoInfo = {\n    .videoCapInfo = videoCapInfo,\n    .videoEncInfo = videoEncInfo\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "初始化avscreencapture实例配置",
      children: "初始化AVScreenCapture实例配置"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["AVScreenCapture实例的配置信息为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-struct/capi-avscreencapture-oh-avscreencaptureconfig/capi-avscreencapture-oh-avscreencaptureconfig",
        children: "OH_AVScreenCaptureConfig"
      }), "，包括录制数据格式", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-struct/capi-avscreencapture-oh-videoinfo/capi-avscreencapture-oh-videoinfo",
        children: "OH_VideoInfo"
      }), "、音视频采集参数", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-struct/capi-avscreencapture-oh-audioinfo/capi-avscreencapture-oh-audioinfo",
        children: "OH_AudioInfo"
      }), "、录屏模式", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-base-h/capi-native-avscreen-capture-base-h#oh_capturemode",
        children: "OH_CaptureMode"
      }), "等，录屏模式包含OH_CAPTURE_HOME_SCREEN、OH_CAPTURE_SPECIFIED_SCREEN、OH_CAPTURE_SPECIFIED_WINDOW。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["配置完成后通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-h/capi-native-avscreen-capture-h#oh_avscreencapture_init",
        children: "OH_AVScreenCapture_Init"
      }), "将配置项设置到", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-struct/capi-avscreencapture-oh-avscreencapture/capi-avscreencapture-oh-avscreencapture",
        children: "OH_AVScreenCapture"
      }), "中。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(784727)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在PC/2in1设备上，根据不同的录屏模式会有不同弹窗表现，详情见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#pc2in1%E5%BC%B9%E7%AA%97%E6%A8%A1%E5%BC%8F%E9%85%8D%E7%BD%AE%E8%AF%B4%E6%98%8E",
        children: "PC/2in1弹窗模式配置说明"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 初始化录屏，传入配置信息OH_AVScreenCaptureConfig。\nOH_AVScreenCaptureConfig config = {\n    .dataType = OH_ORIGINAL_STREAM,\n    .audioInfo = audioInfo,\n    .captureMode = OH_CAPTURE_HOME_SCREEN, // 录屏模式设置。\n    .videoInfo = videoInfo\n};\nOH_AVScreenCapture_Init(capture, config);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置数据更新状态切换错误上报的回调",
      children: "设置数据更新、状态切换、错误上报的回调"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["回调函数主要用来监听录屏过程中的错误发生、音视频流生成和录屏状态变更等事件，详细内容请参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-base-h/capi-native-avscreen-capture-base-h#oh_avscreencaptureonerror",
        children: "错误回调"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-h/capi-native-avscreen-capture-h#oh_avscreencapture_setstatecallback",
        children: "状态回调"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-h/capi-native-avscreen-capture-h#oh_avscreencapture_setdatacallback",
        children: "获取数据回调"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 设置回调。\n// 错误事件发生回调函数OnError()。\nvoid OnError(OH_AVScreenCapture *capture, int32_t errorCode, void *userData) {\n    (void)capture;\n    // 应用根据错误码进行事件处理。\n    (void)errorCode;\n    (void)userData;\n}\n\n// 状态变更事件处理函数OnStateChange()。\nvoid OnStateChange(struct OH_AVScreenCapture *capture, OH_AVScreenCaptureStateCode stateCode, void *userData) {\n    (void)capture;\n    if (stateCode == OH_AVScreenCaptureStateCode::OH_SCREEN_CAPTURE_STATE_CANCELED) { // 按照所需状态自行修改填写。\n        // 处理录屏状态变更。\n    }\n    (void)userData;\n}\n\n// 获取并处理音视频原始码流数据回调函数OnBufferAvailable()。\nvoid OnBufferAvailable(OH_AVScreenCapture *capture, OH_AVBuffer *buffer, OH_AVScreenCaptureBufferType bufferType, int64_t timestamp, void *userData) {\n    // 处于录屏取码流状态。\n}\nint *userData = nullptr;// 用户自定义数据。\nOH_AVScreenCapture_SetErrorCallback(capture, OnError, userData);\nOH_AVScreenCapture_SetStateCallback(capture, OnStateChange, userData);\nOH_AVScreenCapture_SetDataCallback(capture, OnBufferAvailable, userData);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "启动录屏",
      children: "启动录屏"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["启动录屏", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-h/capi-native-avscreen-capture-h#oh_avscreencapture_startscreencapture",
        children: "OH_AVScreenCapture_StartScreenCapture"
      }), "后，开始采集原始码流，通过回调", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-base-h/capi-native-avscreen-capture-base-h#oh_avscreencapture_onbufferavailable",
        children: "OH_AVScreenCapture_OnBufferAvailable"
      }), "来监听当前是否有码流的产生，通过回调", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-base-h/capi-native-avscreen-capture-base-h#oh_avscreencapture_onstatechange",
        children: "OH_AVScreenCapture_OnStateChange"
      }), "来监听启动状态的变更。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在回调接口中，可以调用获取音频码流", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-h/capi-native-avscreen-capture-h#oh_avscreencapture_acquireaudiobuffer",
        children: "OH_AVScreenCapture_AcquireAudioBuffer"
      }), "和获取视频码流", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-h/capi-native-avscreen-capture-h#oh_avscreencapture_acquirevideobuffer",
        children: "OH_AVScreenCapture_AcquireVideoBuffer"
      }), "的接口来获取录屏的原始码流。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVScreenCapture_StartScreenCapture(capture);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "处理录屏数据",
      children: "处理录屏数据"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据音视频采集的参数不同，会生成不同数据流，包含视频流、内录的音频流、麦克风录制的音频流，开发者可根据场景进行不同的处理，如将码流流转到其他模块，实现共享桌面、视频直播等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "bool IsCaptureStreamRunning = true;\n// 获取并处理音视频原始码流数据回调函数OnBufferAvailable()。\nvoid OnBufferAvailable(OH_AVScreenCapture *capture, OH_AVBuffer *buffer, OH_AVScreenCaptureBufferType bufferType, int64_t timestamp, void *userData) {\n    // 处于录屏取码流状态。\n    if (IsCaptureStreamRunning) {\n        if (bufferType == OH_SCREEN_CAPTURE_BUFFERTYPE_VIDEO) {\n            // 视频buffer。\n            OH_NativeBuffer *nativeBuffer = OH_AVBuffer_GetNativeBuffer(buffer);\n            if (nativeBuffer != nullptr && capture != nullptr) {\n                // 获取buffer容量。\n                int bufferLen = OH_AVBuffer_GetCapacity(buffer);\n\n                // 获取buffer属性。\n                OH_AVCodecBufferAttr info;\n                OH_AVBuffer_GetBufferAttr(buffer, &info);\n\n                // 获取nativeBuffer配置。\n                OH_NativeBuffer_Config config;\n                OH_NativeBuffer_GetConfig(nativeBuffer, &config);\n\n                // 获取buffer地址。\n                uint8_t *buf = OH_AVBuffer_GetAddr(buffer);\n                if (buf == nullptr) {\n                    return;\n                }\n                // 使用buffer数据。\n\n                // nativeBuffer的引用计数值减一，当引用计数值减为0，释放该资源。\n                OH_NativeBuffer_Unreference(nativeBuffer);\n            }\n        } else if (bufferType == OH_SCREEN_CAPTURE_BUFFERTYPE_AUDIO_INNER) {\n            // 内录buffer。\n            // 获取buffer属性。\n            OH_AVCodecBufferAttr info;\n            OH_AVBuffer_GetBufferAttr(buffer, &info);\n\n            // 获取buffer容量。\n            int bufferLen = OH_AVBuffer_GetCapacity(buffer);\n\n            // 获取buffer地址。\n            uint8_t *buf = OH_AVBuffer_GetAddr(buffer);\n            if (buf == nullptr) {\n                return;\n            }\n            // 使用buffer数据。\n        } else if (bufferType == OH_SCREEN_CAPTURE_BUFFERTYPE_AUDIO_MIC) {\n            // 麦克风buffer。\n            // 获取buffer容量。\n            int bufferLen = OH_AVBuffer_GetCapacity(buffer);\n\n            // 获取buffer地址。\n            uint8_t *buf = OH_AVBuffer_GetAddr(buffer);\n            if (buf == nullptr) {\n                return;\n            }\n            // 使用buffer数据。\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "停止录屏",
      children: "停止录屏"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-h/capi-native-avscreen-capture-h#oh_avscreencapture_stopscreencapture",
        children: "OH_AVScreenCapture_StopScreenCapture"
      }), "后应用会停止录屏或屏幕共享，释放麦克风。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 停止录屏。\nOH_AVScreenCapture_StopScreenCapture(capture);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "释放资源",
      children: "释放资源"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-h/capi-native-avscreen-capture-h#oh_avscreencapture_release",
        children: "OH_AVScreenCapture_Release"
      }), "释放创建的OH_AVScreenCapture实例，需要在停止录屏后释放。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 释放录屏资源。\nOH_AVScreenCapture_Release(capture);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pc2in1弹窗模式配置说明",
      children: "PC/2in1弹窗模式配置说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["系统提供的录屏模式：", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%BD%95%E5%88%B6%E6%8C%87%E5%AE%9A%E5%B1%8F%E5%B9%95",
        children: "录制指定屏幕"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%BD%95%E5%88%B6%E4%B8%BB%E5%B1%8F%E5%B9%95",
        children: "录制主屏幕"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%BD%95%E5%88%B6%E6%8C%87%E5%AE%9A%E7%AA%97%E5%8F%A3%E6%8E%A8%E8%8D%90",
        children: "录制指定窗口"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["录屏模式会使用到屏幕ID（displayId）和窗口ID（missionIds）。获取方式可参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-manager-h/capi-oh-display-manager-h#oh_nativedisplaymanager_createalldisplays",
        children: "获取displayid"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#getwindowproperties9",
        children: "获取missionIds"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "录制指定屏幕",
      children: "录制指定屏幕"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["即", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-base-h/capi-native-avscreen-capture-base-h#oh_capturemode",
        children: "OH_CAPTURE_SPECIFIED_SCREEN"
      }), "模式。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在此模式下，启动录屏后，PC/2in1设备会弹出选择共享内容弹窗，并默认选中videoCapInfo.displayId参数对应的屏幕，如果传入的displayId对应的窗口不存在，则不做任何选中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 根据PC/2in1设备分辨率在config中配置录屏的宽度、高度。\nconfig.videoInfo.videoCapInfo.videoFrameWidth = 2880;\nconfig.videoInfo.videoCapInfo.videoFrameHeight = 1920;\n\n// 设置录屏模式为OH_CAPTURE_SPECIFIED_SCREEN，传入屏幕Id。\nconfig.captureMode = OH_CAPTURE_SPECIFIED_SCREEN;\nconfig.videoInfo.videoCapInfo.displayId = 0;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如下图所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(594900)/* ["default"] */.A) + "",
        width: "2472",
        height: "1608"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "录制主屏幕",
      children: "录制主屏幕"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["即", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-base-h/capi-native-avscreen-capture-base-h#oh_capturemode",
        children: "OH_CAPTURE_HOME_SCREEN"
      }), "模式。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在此模式下，启动录屏后，PC/2in1设备不会弹出选择录屏内容弹窗，会弹出隐私保护弹窗，同时配置的videoCapInfo.displayId参数不会生效，默认生效主屏的displayId。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 根据PC/2in1设备分辨率在config中配置录屏的宽度、高度。\nconfig.videoInfo.videoCapInfo.videoFrameWidth = 2880;\nconfig.videoInfo.videoCapInfo.videoFrameHeight = 1920;\n\n// 设置录屏模式为OH_CAPTURE_HOME_SCREEN，传入屏幕Id。\nconfig.captureMode = OH_CAPTURE_HOME_SCREEN;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "录制指定窗口推荐",
      children: "录制指定窗口（推荐）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["即", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-base-h/capi-native-avscreen-capture-base-h#oh_capturemode",
        children: "OH_CAPTURE_SPECIFIED_WINDOW"
      }), "模式。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用需根据PC/2in1设备分辨率配置录屏的高度和宽度值并传入屏幕Id。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若期望录制某个指定窗口，需要设置指定的窗口Id。该场景下，启动录屏后，会弹出选择共享内容弹窗，并默认选中指定的窗口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 根据PC/2in1设备分辨率在config中配置录屏的宽度、高度。\nconfig.videoInfo.videoCapInfo.videoFrameWidth = 2880;\nconfig.videoInfo.videoCapInfo.videoFrameHeight = 1920;\n\n// 设置录屏模式为OH_CAPTURE_SPECIFIED_WINDOW，传入屏幕Id。\nconfig.captureMode = OH_CAPTURE_SPECIFIED_WINDOW;\nconfig.videoInfo.videoCapInfo.displayId = 0;\n\n// (可选)若有期望录制的窗口，可传入单个窗口Id。\nstd::vector<int32_t> missionIds = {61}; // 表示弹出的Picker默认选中61号窗口。\nconfig.videoInfo.videoCapInfo.missionIDs = &missionIds[0];\nconfig.videoInfo.videoCapInfo.missionIDsLen = static_cast<int32_t>(missionIds.size());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(232403)/* ["default"] */.A) + "",
        width: "2472",
        height: "1608"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若期望同时录制多个窗口，需要传入期望录制的窗口Id列表。该场景下，不弹出选择共享内容弹窗，弹出隐私保护弹窗。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 根据PC/2in1设备分辨率在config中配置录屏的宽度、高度。\nconfig.videoInfo.videoCapInfo.videoFrameWidth = 2880;\nconfig.videoInfo.videoCapInfo.videoFrameHeight = 1920;\n\n// 设置录屏模式为OH_CAPTURE_SPECIFIED_WINDOW，传入屏幕Id。\nconfig.captureMode = OH_CAPTURE_SPECIFIED_WINDOW;\nconfig.videoInfo.videoCapInfo.displayId = 0;\n\n// 传入多个窗口Id。\nvector<int32_t> missionIds = {60, 61}; // 表示期望同时录制60、61号窗口。\nconfig.videoInfo.videoCapInfo.missionIDs = &missionIds[0];\nconfig.videoInfo.videoCapInfo.missionIDsLen = static_cast<int32_t>(missionIds.size());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "phonetablet弹窗模式配置说明",
      children: "Phone/Tablet弹窗模式配置说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 23开始，支持在设备Phone/Tablet上通过策略控制是否弹出选择共享内容弹窗。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在PC/2in1设备上，是否弹出选择共享内容弹窗受录制模式控制，在Phone/Tablet设备上可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-h/capi-native-avscreen-capture-h#oh_avscreencapture_strategyforpickerpopup",
        children: "OH_AVScreenCapture_StrategyForPickerPopUp"
      }), "配置选择共享内容弹窗模式，无需指定录制模式。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 创建AVScreenCapture对象\nOH_AVScreenCapture* capture = OH_AVScreenCapture_Create();\n\n// 创建CaptureStrategy对象。\nOH_AVScreenCapture_CaptureStrategy* strategy = OH_AVScreenCapture_CreateCaptureStrategy();\n\n// 设置是否弹出屏幕捕获Picker。\n// 设置为true，代表录屏启动后统一弹出Picker。\nOH_AVScreenCapture_StrategyForPickerPopUp(strategy, true);\n\n// 设置CaptureStrategy到AVScreenCapture实例。\nOH_AVScreenCapture_SetCaptureStrategy(capture, strategy);\n\n// 释放CaptureStrategy对象。\nOH_AVScreenCapture_ReleaseCaptureStrategy(strategy);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "更多资源",
      children: "更多资源"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["API参考：详细的API描述请见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-h/capi-native-avscreen-capture-h",
          children: "native_avscreen_capture.h"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["示例工程：该示例调用了媒体AVScreenCapture组件提供的接口能力，提供屏幕捕获的功能，详情见", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/openharmony/applications_app_samples/tree/master/code/DocsSample/Media/ScreenCapture/ScreenCaptureSample",
          children: "录屏示例工程"
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
232403(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438647-1e575f8d53f08233b3e58db09f925a99.png");

},
594900(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798952-35674e9fde4c8a98afb326f3d8fa9199.png");

},
317769(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958600-9df049aa4965db042bd275acc69c0efd.png");

},
784727(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
457791(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478601-fdb703a94e0edec259db84c6caca21b1.png");

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