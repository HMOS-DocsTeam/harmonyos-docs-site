"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["867709"], {
809640(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_media_kit_media_kit_dev_c_media_recording_c_using_avscreencapture_for_buffer_avscreencapture_c_custom_scenarios_avscreencapture_c_custom_scenarios_md_29c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-media-kit-media-kit-dev-c-media-recording-c-using-avscreencapture-for-buffer-avscreencapture-c-custom-scenarios-avscreencapture-c-custom-scenarios-md-29c.json
var site_docs_media_kit_media_kit_dev_c_media_recording_c_using_avscreencapture_for_buffer_avscreencapture_c_custom_scenarios_avscreencapture_c_custom_scenarios_md_29c_namespaceObject = JSON.parse('{"id":"media-kit/media-kit-dev--c/media-recording-c/using-avscreencapture-for-buffer/avscreencapture-c-custom-scenarios/avscreencapture-c-custom-scenarios","title":"AVScreenCapture录屏自定义场景","description":"AVScreenCapture支持应用完成场景化的自定义配置，具体配置可参考下述指导。","source":"@site/docs/media-kit/media-kit-dev--c/media-recording-c/using-avscreencapture-for-buffer/avscreencapture-c-custom-scenarios/avscreencapture-c-custom-scenarios.md","sourceDirName":"media-kit/media-kit-dev--c/media-recording-c/using-avscreencapture-for-buffer/avscreencapture-c-custom-scenarios","slug":"/media-kit/media-kit-dev--c/media-recording-c/using-avscreencapture-for-buffer/avscreencapture-c-custom-scenarios/","permalink":"/harmonyos-docs-site/media-kit/media-kit-dev--c/media-recording-c/using-avscreencapture-for-buffer/avscreencapture-c-custom-scenarios/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"AVScreenCapture录屏自定义场景","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/avscreencapture-c-custom-scenarios","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"AVScreenCapture录屏基础流程","permalink":"/harmonyos-docs-site/media-kit/media-kit-dev--c/media-recording-c/using-avscreencapture-for-buffer/avscreencapture-c-basic-process/"},"next":{"title":"录屏常见问题","permalink":"/harmonyos-docs-site/media-kit/media-kit-dev--c/media-recording-c/using-avscreencapture-for-buffer/avscreencapture-faqs/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/media-kit/media-kit-dev--c/media-recording-c/using-avscreencapture-for-buffer/avscreencapture-c-custom-scenarios/avscreencapture-c-custom-scenarios.md


const frontMatter = {
	title: 'AVScreenCapture录屏自定义场景',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/avscreencapture-c-custom-scenarios',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = 'AVScreenCapture录屏自定义场景';

const assets = {

};



const toc = [{
  "value": "设置录屏策略",
  "id": "设置录屏策略",
  "level": 2
}, {
  "value": "蜂窝通话设置",
  "id": "蜂窝通话设置",
  "level": 3
}, {
  "value": "设置B帧编码",
  "id": "设置b帧编码",
  "level": 3
}, {
  "value": "设置屏幕捕获Picker",
  "id": "设置屏幕捕获picker",
  "level": 3
}, {
  "value": "设置旋转适配",
  "id": "设置旋转适配",
  "level": 2
}, {
  "value": "设置麦克风开关",
  "id": "设置麦克风开关",
  "level": 2
}, {
  "value": "隐私设置",
  "id": "隐私设置",
  "level": 2
}, {
  "value": "设置捕获区域",
  "id": "设置捕获区域",
  "level": 2
}, {
  "value": "设置捕获光标",
  "id": "设置捕获光标",
  "level": 2
}, {
  "value": "设置最大帧率",
  "id": "设置最大帧率",
  "level": 2
}, {
  "value": "设置屏幕分辨率",
  "id": "设置屏幕分辨率",
  "level": 2
}, {
  "value": "设置内容过滤",
  "id": "设置内容过滤",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "avscreencapture录屏自定义场景",
        children: "AVScreenCapture录屏自定义场景"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AVScreenCapture支持应用完成场景化的自定义配置，具体配置可参考下述指导。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置录屏策略",
      children: "设置录屏策略"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "蜂窝通话设置",
      children: "蜂窝通话设置"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 20开始支持蜂窝通话设置。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-h/capi-native-avscreen-capture-h#oh_avscreencapture_strategyforkeepcaptureduringcall",
        children: "OH_AVScreenCapture_StrategyForKeepCaptureDuringCall"
      }), "设置蜂窝通话时是否保持录屏。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVScreenCapture_CaptureStrategy* strategy = OH_AVScreenCapture_CreateCaptureStrategy();\nOH_AVScreenCapture_StrategyForKeepCaptureDuringCall(strategy, true);\nOH_AVScreenCapture_SetCaptureStrategy(capture, strategy);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置b帧编码",
      children: "设置B帧编码"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 20开始支持设置B帧编码。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-h/capi-native-avscreen-capture-h#oh_avscreencapture_strategyforbframesencoding",
        children: "OH_AVScreenCapture_StrategyForBFramesEncoding"
      }), "设置是否使用B帧编码，用于减小录制文件的大小。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVScreenCapture_CaptureStrategy* strategy = OH_AVScreenCapture_CreateCaptureStrategy();\nOH_AVScreenCapture_StrategyForBFramesEncoding(strategy, true);\nOH_AVScreenCapture_SetCaptureStrategy(capture, strategy);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置屏幕捕获picker",
      children: "设置屏幕捕获Picker"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 20开始，支持在PC/2in1设备上设置屏幕捕获Picker。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 23开始，支持在Phone/Tablet设备上设置屏幕捕获Picker。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-h/capi-native-avscreen-capture-h#oh_avscreencapture_strategyforpickerpopup",
        children: "OH_AVScreenCapture_StrategyForPickerPopUp"
      }), "设置是否弹出屏幕捕获Picker。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVScreenCapture_CaptureStrategy* strategy = OH_AVScreenCapture_CreateCaptureStrategy();\nOH_AVScreenCapture_StrategyForPickerPopUp(strategy, true);\nOH_AVScreenCapture_SetCaptureStrategy(capture, strategy);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置旋转适配",
      children: "设置旋转适配"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 20开始支持设置旋转适配。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-h/capi-native-avscreen-capture-h#oh_avscreencapture_strategyforcanvasfollowrotation",
        children: "OH_AVScreenCapture_StrategyForCanvasFollowRotation"
      }), "，可设置录屏时是否自动跟随屏幕旋转。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用此接口完成设置后，无需再调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-h/capi-native-avscreen-capture-h#oh_avscreencapture_resizecanvas",
        children: "OH_AVScreenCapture_ResizeCanvas"
      }), "手动修改分辨率。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVScreenCapture_CaptureStrategy* strategy = OH_AVScreenCapture_CreateCaptureStrategy();\n// 设为true，表示跟随屏幕旋转，并在横竖屏旋转后，自动调换虚拟屏尺寸，确保输出画面及时跟随旋转。\nOH_AVScreenCapture_StrategyForCanvasFollowRotation(strategy, true);\nOH_AVScreenCapture_SetCaptureStrategy(capture, strategy);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置麦克风开关",
      children: "设置麦克风开关"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-h/capi-native-avscreen-capture-h#oh_avscreencapture_setmicrophoneenabled",
        children: "OH_AVScreenCapture_SetMicrophoneEnabled"
      }), "，可设置在录屏过程中是否开启麦克风，默认麦克风开关为开启状态。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(307527)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用麦克风录制，需要："
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "bool isMic = true;\nOH_AVScreenCapture_SetMicrophoneEnabled(capture, isMic);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "隐私设置",
      children: "隐私设置"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，支持使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-h/capi-native-avscreen-capture-h#oh_avscreencapture_strategyforprivacymaskmode",
        children: "OH_AVScreenCapture_StrategyForPrivacyMaskMode"
      }), "设置屏幕录制隐私窗口屏蔽模式。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// value值设为0，表示全屏屏蔽模式。value值设为1，表示窗口屏蔽模式。默认为全屏屏蔽模式。\nint value = 0;\nOH_AVScreenCapture_CaptureStrategy* strategy = OH_AVScreenCapture_CreateCaptureStrategy();\nOH_AVScreenCapture_StrategyForPrivacyMaskMode(strategy, value);\nOH_AVScreenCapture_SetCaptureStrategy(capture, strategy);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在API version 12时，支持使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-h/capi-native-avscreen-capture-h#oh_avscreencapture_skipprivacymode",
        children: "OH_AVScreenCapture_SkipPrivacyMode"
      }), "设置录屏时的豁免隐私窗口。目前设置豁免隐私窗口需要传入所有隐私子窗口和主窗口ID，传空数组取消豁免隐私窗口。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "std::vector<int> windowIdsSkipPrivacy = {};\nOH_AVScreenCapture_SkipPrivacyMode(capture, &windowIdsSkipPrivacy[0],\n    static_cast<int32_t>(windowIdsSkipPrivacy.size()));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置捕获区域",
      children: "设置捕获区域"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 20开始支持设置捕获区域。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可以根据需要设置区域坐标和大小，使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-h/capi-native-avscreen-capture-h#oh_avscreencapture_setcapturearea",
        children: "OH_AVScreenCapture_SetCaptureArea"
      }), "设置想要捕获的区域，如下方创建了一个从（0，0）为起点的长100px，宽100px的矩形区域。此接口在录屏开始前后都可以设置。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_Rect* region = new OH_Rect;\n    region->x = 0;\n    region->y = 0;\n    region->width = 100;\n    region->height = 100;\nuint64_t regionDisplayId = 0; // 传入矩形区域所在的屏幕Id。\nOH_AVScreenCapture_SetCaptureArea(capture, regionDisplayId, region);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置捕获光标",
      children: "设置捕获光标"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 15开始支持设置捕获光标。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-h/capi-native-avscreen-capture-h#oh_avscreencapture_showcursor",
        children: "OH_AVScreenCapture_ShowCursor"
      }), "设置光标显示开关，开始录屏前后均可调用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVScreenCapture_ShowCursor(capture, false);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置最大帧率",
      children: "设置最大帧率"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 14开始支持设置最大帧率。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-h/capi-native-avscreen-capture-h#oh_avscreencapture_setmaxvideoframerate",
        children: "OH_AVScreenCapture_SetMaxVideoFrameRate"
      }), "设置录屏时的最大帧率，需在录屏启动后被调用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVScreenCapture_SetMaxVideoFrameRate(capture, 20);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置屏幕分辨率",
      children: "设置屏幕分辨率"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-h/capi-native-avscreen-capture-h#oh_avscreencapture_resizecanvas",
        children: "OH_AVScreenCapture_ResizeCanvas"
      }), "调整录屏分辨率，需在启动后调用。分辨率有范围限制，视频的宽度和高度最大值不能超过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcapability-h/capi-native-avcapability-h#oh_avcapability_getvideowidthrange",
        children: "OH_AVCapability_GetVideoWidthRange"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcapability-h/capi-native-avcapability-h#oh_avcapability_getvideoheightrange",
        children: "OH_AVCapability_GetVideoHeightRange"
      }), "接口中定义的范围。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVScreenCapture_ResizeCanvas(capture, 768, 1280);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置内容过滤",
      children: "设置内容过滤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "选择录屏时要过滤的声音和窗口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-h/capi-native-avscreen-capture-h#oh_avscreencapture_contentfilter_addaudiocontent",
        children: "OH_AVScreenCapture_ContentFilter_AddAudioContent"
      }), "设置可过滤的声音，包含系统音和应用自身声音。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-h/capi-native-avscreen-capture-h#oh_avscreencapture_contentfilter_addwindowcontent",
        children: "OH_AVScreenCapture_ContentFilter_AddWindowContent"
      }), "设置可过滤的窗口，通过窗口ID来指定。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVScreenCapture_ContentFilter *contentFilter= OH_AVScreenCapture_CreateContentFilter();\n// 添加过滤通知音。\nOH_AVScreenCapture_ContentFilter_AddAudioContent(contentFilter, OH_SCREEN_CAPTURE_NOTIFICATION_AUDIO);\n// 排除指定窗口id。\nstd::vector<int> windowIdsExclude = {};\nOH_AVScreenCapture_ContentFilter_AddWindowContent(contentFilter, &windowIdsExclude[0],\n    static_cast<int32_t>(windowIdsExclude.size()));\n\nOH_AVScreenCapture_ExcludeContent(capture, contentFilter);\n"
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
307527(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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