"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["833252"], {
710391(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_media_api_media_c_media_headerfile_capi_native_avscreen_capture_h_capi_native_avscreen_capture_h_md_b12_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-media-api-media-c-media-headerfile-capi-native-avscreen-capture-h-capi-native-avscreen-capture-h-md-b12.json
var site_docs_ref_media_api_media_c_media_headerfile_capi_native_avscreen_capture_h_capi_native_avscreen_capture_h_md_b12_namespaceObject = JSON.parse('{"id":"media-api/media-c/media-headerfile/capi-native-avscreen-capture-h/capi-native-avscreen-capture-h","title":"native_avscreen_capture.h","description":"概述","source":"@site/docs-ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-h/capi-native-avscreen-capture-h.md","sourceDirName":"media-api/media-c/media-headerfile/capi-native-avscreen-capture-h","slug":"/media-api/media-c/media-headerfile/capi-native-avscreen-capture-h/capi-native-avscreen-capture-h","permalink":"/harmonyos-docs-site/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-h/capi-native-avscreen-capture-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"title":"native_avscreen_capture.h","sidebar_position":11,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avscreen-capture-h","kit":"媒体","last_updated":"2026-04-22","slug":"capi-native-avscreen-capture-h"},"sidebar":"ref","previous":{"title":"avtranscoder_base.h","permalink":"/harmonyos-docs-site/ref/media-api/media-c/media-headerfile/capi-avtranscoder-base-h/capi-avtranscoder-base-h"},"next":{"title":"native_avscreen_capture_base.h","permalink":"/harmonyos-docs-site/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-base-h/capi-native-avscreen-capture-base-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-h/capi-native-avscreen-capture-h.md


const frontMatter = {
	title: 'native_avscreen_capture.h',
	sidebar_position: 11,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avscreen-capture-h',
	kit: '媒体',
	last_updated: '2026-04-22',
	slug: 'capi-native-avscreen-capture-h'
};
const contentTitle = 'native_avscreen_capture.h';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "汇总",
  "id": "汇总",
  "level": 2
}, {
  "value": "函数",
  "id": "函数",
  "level": 3
}, {
  "value": "函数说明",
  "id": "函数说明",
  "level": 2
}, {
  "value": "OH_AVScreenCapture_Create()",
  "id": "oh_avscreencapture_create",
  "level": 3
}, {
  "value": "OH_AVScreenCapture_Init()",
  "id": "oh_avscreencapture_init",
  "level": 3
}, {
  "value": "OH_AVScreenCapture_StartScreenCapture()",
  "id": "oh_avscreencapture_startscreencapture",
  "level": 3
}, {
  "value": "OH_AVScreenCapture_StopScreenCapture()",
  "id": "oh_avscreencapture_stopscreencapture",
  "level": 3
}, {
  "value": "OH_AVScreenCapture_StartScreenRecording()",
  "id": "oh_avscreencapture_startscreenrecording",
  "level": 3
}, {
  "value": "OH_AVScreenCapture_StopScreenRecording()",
  "id": "oh_avscreencapture_stopscreenrecording",
  "level": 3
}, {
  "value": "OH_AVScreenCapture_AcquireAudioBuffer()",
  "id": "oh_avscreencapture_acquireaudiobuffer",
  "level": 3
}, {
  "value": "OH_AVScreenCapture_AcquireVideoBuffer()",
  "id": "oh_avscreencapture_acquirevideobuffer",
  "level": 3
}, {
  "value": "OH_AVScreenCapture_ReleaseAudioBuffer()",
  "id": "oh_avscreencapture_releaseaudiobuffer",
  "level": 3
}, {
  "value": "OH_AVScreenCapture_ReleaseVideoBuffer()",
  "id": "oh_avscreencapture_releasevideobuffer",
  "level": 3
}, {
  "value": "OH_AVScreenCapture_SetCallback()",
  "id": "oh_avscreencapture_setcallback",
  "level": 3
}, {
  "value": "OH_AVScreenCapture_Release()",
  "id": "oh_avscreencapture_release",
  "level": 3
}, {
  "value": "OH_AVScreenCapture_SetMicrophoneEnabled()",
  "id": "oh_avscreencapture_setmicrophoneenabled",
  "level": 3
}, {
  "value": "OH_AVScreenCapture_SetStateCallback()",
  "id": "oh_avscreencapture_setstatecallback",
  "level": 3
}, {
  "value": "OH_AVScreenCapture_SetDataCallback()",
  "id": "oh_avscreencapture_setdatacallback",
  "level": 3
}, {
  "value": "OH_AVScreenCapture_SetErrorCallback()",
  "id": "oh_avscreencapture_seterrorcallback",
  "level": 3
}, {
  "value": "OH_AVScreenCapture_StartScreenCaptureWithSurface()",
  "id": "oh_avscreencapture_startscreencapturewithsurface",
  "level": 3
}, {
  "value": "OH_AVScreenCapture_SetCanvasRotation()",
  "id": "oh_avscreencapture_setcanvasrotation",
  "level": 3
}, {
  "value": "OH_AVScreenCapture_CreateContentFilter()",
  "id": "oh_avscreencapture_createcontentfilter",
  "level": 3
}, {
  "value": "OH_AVScreenCapture_ReleaseContentFilter()",
  "id": "oh_avscreencapture_releasecontentfilter",
  "level": 3
}, {
  "value": "OH_AVScreenCapture_ContentFilter_AddAudioContent()",
  "id": "oh_avscreencapture_contentfilter_addaudiocontent",
  "level": 3
}, {
  "value": "OH_AVScreenCapture_ExcludeContent()",
  "id": "oh_avscreencapture_excludecontent",
  "level": 3
}, {
  "value": "OH_AVScreenCapture_ContentFilter_AddWindowContent()",
  "id": "oh_avscreencapture_contentfilter_addwindowcontent",
  "level": 3
}, {
  "value": "OH_AVScreenCapture_ResizeCanvas()",
  "id": "oh_avscreencapture_resizecanvas",
  "level": 3
}, {
  "value": "OH_AVScreenCapture_SkipPrivacyMode()",
  "id": "oh_avscreencapture_skipprivacymode",
  "level": 3
}, {
  "value": "OH_AVScreenCapture_SetMaxVideoFrameRate()",
  "id": "oh_avscreencapture_setmaxvideoframerate",
  "level": 3
}, {
  "value": "OH_AVScreenCapture_ShowCursor()",
  "id": "oh_avscreencapture_showcursor",
  "level": 3
}, {
  "value": "OH_AVScreenCapture_SetDisplayCallback()",
  "id": "oh_avscreencapture_setdisplaycallback",
  "level": 3
}, {
  "value": "OH_AVScreenCapture_CreateCaptureStrategy()",
  "id": "oh_avscreencapture_createcapturestrategy",
  "level": 3
}, {
  "value": "OH_AVScreenCapture_ReleaseCaptureStrategy()",
  "id": "oh_avscreencapture_releasecapturestrategy",
  "level": 3
}, {
  "value": "OH_AVScreenCapture_SetCaptureStrategy()",
  "id": "oh_avscreencapture_setcapturestrategy",
  "level": 3
}, {
  "value": "OH_AVScreenCapture_StrategyForCanvasFollowRotation()",
  "id": "oh_avscreencapture_strategyforcanvasfollowrotation",
  "level": 3
}, {
  "value": "OH_AVScreenCapture_StrategyForKeepCaptureDuringCall()",
  "id": "oh_avscreencapture_strategyforkeepcaptureduringcall",
  "level": 3
}, {
  "value": "OH_AVScreenCapture_SetCaptureContentChangedCallback()",
  "id": "oh_avscreencapture_setcapturecontentchangedcallback",
  "level": 3
}, {
  "value": "OH_AVScreenCapture_SetCaptureArea()",
  "id": "oh_avscreencapture_setcapturearea",
  "level": 3
}, {
  "value": "OH_AVScreenCapture_StrategyForPrivacyMaskMode()",
  "id": "oh_avscreencapture_strategyforprivacymaskmode",
  "level": 3
}, {
  "value": "OH_AVScreenCapture_SetSelectionCallback()",
  "id": "oh_avscreencapture_setselectioncallback",
  "level": 3
}, {
  "value": "OH_AVScreenCapture_GetCaptureTypeSelected()",
  "id": "oh_avscreencapture_getcapturetypeselected",
  "level": 3
}, {
  "value": "OH_AVScreenCapture_GetDisplayIdSelected()",
  "id": "oh_avscreencapture_getdisplayidselected",
  "level": 3
}, {
  "value": "OH_AVScreenCapture_StrategyForBFramesEncoding()",
  "id": "oh_avscreencapture_strategyforbframesencoding",
  "level": 3
}, {
  "value": "OH_AVScreenCapture_StrategyForPickerPopUp()",
  "id": "oh_avscreencapture_strategyforpickerpopup",
  "level": 3
}, {
  "value": "OH_AVScreenCapture_StrategyForFillMode()",
  "id": "oh_avscreencapture_strategyforfillmode",
  "level": 3
}, {
  "value": "OH_AVScreenCapture_PresentPicker()",
  "id": "oh_avscreencapture_presentpicker",
  "level": 3
}, {
  "value": "OH_AVScreenCapture_SetCaptureAreaHighlight()",
  "id": "oh_avscreencapture_setcaptureareahighlight",
  "level": 3
}, {
  "value": "OH_AVScreenCapture_SetPickerMode()",
  "id": "oh_avscreencapture_setpickermode",
  "level": 3
}, {
  "value": "OH_AVScreenCapture_ExcludePickerWindows()",
  "id": "oh_avscreencapture_excludepickerwindows",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "native_avscreen_captureh",
        children: "native_avscreen_capture.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "声明用于构造屏幕录制对象的API。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <multimedia/player_framework/native_avscreen_capture.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libnative_avscreen_capture.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVScreenCapture"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-module/capi-avscreencapture/capi-avscreencapture",
        children: "AVScreenCapture"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关示例："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/openharmony/applications_app_samples/tree/master/code/DocsSample/Media/ScreenCapture/ScreenCaptureSample",
        children: "NativeAvScreenCapture"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avscreencapture_create",
              children: "struct OH_AVScreenCapture *OH_AVScreenCapture_Create(void)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["实例化对象，创建OH_AVScreenCapture。  可以通过调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avscreencapture_release",
              children: "OH_AVScreenCapture_Release"
            }), "释放实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avscreencapture_init",
              children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_Init(struct OH_AVScreenCapture *capture, OH_AVScreenCaptureConfig config)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["初始化", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-avscreencapture-oh-avscreencapture/capi-avscreencapture-oh-avscreencapture",
              children: "OH_AVScreenCapture"
            }), "相关参数，包括下发的音频麦克风采样相关参数（可选）、音频内录采样相关参数、视频分辨率相关参数。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avscreencapture_startscreencapture",
              children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_StartScreenCapture(struct OH_AVScreenCapture *capture)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开始录屏，采集原始码流。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avscreencapture_stopscreencapture",
              children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_StopScreenCapture(struct OH_AVScreenCapture *capture)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["结束录屏，与", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avscreencapture_startscreencapture",
              children: "OH_AVScreenCapture_StartScreenCapture"
            }), "配合使用。调用后针对调用该接口的应用会停止录屏或屏幕共享，释放麦克风。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avscreencapture_startscreenrecording",
              children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_StartScreenRecording(struct OH_AVScreenCapture *capture)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "启动录屏，调用此接口，可保存录屏文件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avscreencapture_stopscreenrecording",
              children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_StopScreenRecording(struct OH_AVScreenCapture *capture)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["停止录屏，与", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avscreencapture_startscreenrecording",
              children: "OH_AVScreenCapture_StartScreenRecording"
            }), "配合使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avscreencapture_acquireaudiobuffer",
              children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_AcquireAudioBuffer(struct OH_AVScreenCapture *capture, OH_AudioBuffer **audiobuffer, OH_AudioCaptureSourceType type)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取音频buffer。应用调用时需分配audiobuffer对应结构体大小的内存，否则影响音频buffer的获取。  从API version 12开始，推荐使用接口", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-base-h/capi-native-avscreen-capture-base-h#oh_avscreencapture_onbufferavailable",
              children: "OH_AVScreenCapture_OnBufferAvailable"
            }), "替代。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avscreencapture_acquirevideobuffer",
              children: "OH_NativeBuffer* OH_AVScreenCapture_AcquireVideoBuffer(struct OH_AVScreenCapture *capture, int32_t *fence, int64_t *timestamp, struct OH_Rect *region)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取视频buffer。应用通过此接口获取视频缓存区及时间戳等信息。  buffer使用完成后，调用OH_AVScreenCapture_ReleaseVideoBuffer接口进行视频buffer的释放。  从API version 12开始，推荐使用接口", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-base-h/capi-native-avscreen-capture-base-h#oh_avscreencapture_onbufferavailable",
              children: "OH_AVScreenCapture_OnBufferAvailable"
            }), "替代。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avscreencapture_releaseaudiobuffer",
              children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_ReleaseAudioBuffer(struct OH_AVScreenCapture *capture, OH_AudioCaptureSourceType type)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["根据音频类型释放buffer。当某一帧音频buffer使用完成后，调用此接口进行释放对应的音频buffer。  从API version 12开始，推荐使用接口", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-base-h/capi-native-avscreen-capture-base-h#oh_avscreencapture_onbufferavailable",
              children: "OH_AVScreenCapture_OnBufferAvailable"
            }), "替代。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avscreencapture_releasevideobuffer",
              children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_ReleaseVideoBuffer(struct OH_AVScreenCapture *capture)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["根据视频类型释放buffer。当某一帧视频buffer使用完成后，调用此接口释放对应的视频buffer。  从API version 12开始，推荐使用接口", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-base-h/capi-native-avscreen-capture-base-h#oh_avscreencapture_onbufferavailable",
              children: "OH_AVScreenCapture_OnBufferAvailable"
            }), "替代。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avscreencapture_setcallback",
              children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_SetCallback(struct OH_AVScreenCapture *capture, struct OH_AVScreenCaptureCallback callback)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置监听接口，通过设置监听，可以监听到调用过程中的错误信息，以及是否有可用的视频buffer和音频buffer。  从API version 12开始，推荐使用接口", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avscreencapture_seterrorcallback",
              children: "OH_AVScreenCapture_SetErrorCallback"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avscreencapture_setdatacallback",
              children: "OH_AVScreenCapture_SetDataCallback"
            }), "替代。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avscreencapture_release",
              children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_Release(struct OH_AVScreenCapture *capture)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["释放创建的OH_AVScreenCapture实例，对应", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avscreencapture_create",
              children: "OH_AVScreenCapture_Create"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avscreencapture_setmicrophoneenabled",
              children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_SetMicrophoneEnabled(struct OH_AVScreenCapture *capture, bool isMicrophone)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置麦克风开关。  当isMicrophone为true时，则打开麦克风，通过调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avscreencapture_startscreencapture",
              children: "OH_AVScreenCapture_StartScreenCapture"
            }), "和", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avscreencapture_acquireaudiobuffer",
              children: "OH_AVScreenCapture_AcquireAudioBuffer"
            }), "可以正常获取到音频的麦克风原始PCM数据；isMicrophone为false时，获取到的音频数据为无声数据。  默认麦克风开关为开启。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avscreencapture_setstatecallback",
              children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_SetStateCallback(struct OH_AVScreenCapture *capture, OH_AVScreenCapture_OnStateChange callback, void *userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置状态变更处理回调方法，在开始录制前调用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avscreencapture_setdatacallback",
              children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_SetDataCallback(struct OH_AVScreenCapture *capture, OH_AVScreenCapture_OnBufferAvailable callback, void *userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置数据处理回调方法，在开始录制前调用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avscreencapture_seterrorcallback",
              children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_SetErrorCallback(struct OH_AVScreenCapture *capture, OH_AVScreenCapture_OnError callback, void *userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置错误处理回调方法，在开始录制前调用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avscreencapture_startscreencapturewithsurface",
              children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_StartScreenCaptureWithSurface(struct OH_AVScreenCapture *capture, OHNativeWindow *window)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用Surface模式录屏。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avscreencapture_setcanvasrotation",
              children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_SetCanvasRotation(struct OH_AVScreenCapture *capture, bool canvasRotation)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置录屏屏幕数据旋转。  调用该方法可以设置录屏屏幕数据是否旋转，当canvasRotation为true时，打开录屏屏幕数据旋转功能，录制的屏幕数据保持正向。  默认为false。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avscreencapture_createcontentfilter",
              children: "struct OH_AVScreenCapture_ContentFilter *OH_AVScreenCapture_CreateContentFilter(void)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建ContentFilter。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avscreencapture_releasecontentfilter",
              children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_ReleaseContentFilter(struct OH_AVScreenCapture_ContentFilter *filter)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放ContentFilter。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avscreencapture_contentfilter_addaudiocontent",
              children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_ContentFilter_AddAudioContent(struct OH_AVScreenCapture_ContentFilter *filter, OH_AVScreenCaptureFilterableAudioContent content)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向ContentFilter实例添加可过滤的声音类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avscreencapture_excludecontent",
              children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_ExcludeContent(struct OH_AVScreenCapture *capture, struct OH_AVScreenCapture_ContentFilter *filter)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置OH_AVScreenCapture实例的内容过滤器ContentFilter。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avscreencapture_contentfilter_addwindowcontent",
              children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_ContentFilter_AddWindowContent(struct OH_AVScreenCapture_ContentFilter *filter, int32_t *windowIDs, int32_t windowCount)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向ContentFilter实例添加可被过滤的窗口ID列表。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avscreencapture_resizecanvas",
              children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_ResizeCanvas(struct OH_AVScreenCapture *capture, int32_t width, int32_t height)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调整屏幕的分辨率。  调用该方法可以设置录屏屏幕数据的分辨率，width为屏幕的宽度，height为屏幕的高度。  该接口目前仅支持录屏取码流的场景，不支持录屏存文件的场景。并且调用该接口的调用者以及视频数据的消费者需要确保自身能够支持收到的视频数据分辨率发生变化。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avscreencapture_skipprivacymode",
              children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_SkipPrivacyMode(struct OH_AVScreenCapture *capture, int32_t *windowIDs, int32_t windowCount)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "录屏时豁免隐私窗口。  调用该方法可以豁免隐私窗口，windowIDs为需要豁免的隐私窗口ID指针，windowCount 为隐私窗口ID列表的长度，目前豁免需要传入所有隐私子窗口和主窗口ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avscreencapture_setmaxvideoframerate",
              children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_SetMaxVideoFrameRate(struct OH_AVScreenCapture *capture, int32_t frameRate)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置录屏时的最大帧率。  该接口应在录屏启动之后被调用。  调用该方法可以设置录屏时的最大帧率，frameRate为想要设置的最大帧率。  该接口设置最大帧率时，实际设置的帧率受限设备的能力，由底层的系统能力决定。  调用该接口设置录屏最大帧率时，实际帧率将受限于设备能力。目前接口入参的最大值不设限制，但当前支持的最高帧率为60FPS，当入参设置超过60FPS，将以60FPS处理。不超过上限时，则按照实际入参值处理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avscreencapture_showcursor",
              children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_ShowCursor(struct OH_AVScreenCapture *capture, bool showCursor)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置光标显示开关。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avscreencapture_setdisplaycallback",
              children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_SetDisplayCallback(struct OH_AVScreenCapture *capture, OH_AVScreenCapture_OnDisplaySelected callback, void *userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置获取录屏屏幕Id的回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avscreencapture_createcapturestrategy",
              children: "OH_AVScreenCapture_CaptureStrategy* OH_AVScreenCapture_CreateCaptureStrategy(void)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建录屏策略对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avscreencapture_releasecapturestrategy",
              children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_ReleaseCaptureStrategy(OH_AVScreenCapture_CaptureStrategy* strategy)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放录屏策略对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avscreencapture_setcapturestrategy",
              children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_SetCaptureStrategy(struct OH_AVScreenCapture *capture, OH_AVScreenCapture_CaptureStrategy *strategy)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "给指定的OH_AVScreenCapture实例设置捕获策略。  该接口应在录屏启动之前被调用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avscreencapture_strategyforcanvasfollowrotation",
              children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_StrategyForCanvasFollowRotation(OH_AVScreenCapture_CaptureStrategy *strategy, bool value)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置屏幕录屏自动跟随旋转配置。设为true，表示跟随屏幕旋转，并在横竖屏旋转后，自动调换虚拟屏尺寸，确保输出画面及时跟随旋转。  设置是否自动跟随旋转配置后，在旋转通知后，无需再手动调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avscreencapture_resizecanvas",
              children: "OH_AVScreenCapture_ResizeCanvas"
            }), "接口。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avscreencapture_strategyforkeepcaptureduringcall",
              children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_StrategyForKeepCaptureDuringCall(OH_AVScreenCapture_CaptureStrategy *strategy, bool value)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向CaptureStrategy实例设置蜂窝通话时是否保持录屏。  value设置为true时并且录屏时接听蜂窝通话的过程中，出于隐私要求，双方通话的声音（本地麦克风和对方说话声音）不会被录制，其他系统音录制正常。电话挂断之后，录屏框架恢复麦克风录制。注意，如果挂断电话时录屏应用在后台运行，麦克风录制会启动失败，原因是音频模块不允许后台应用启动麦克风录制。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avscreencapture_setcapturecontentchangedcallback",
              children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_SetCaptureContentChangedCallback(struct OH_AVScreenCapture *capture, OH_AVScreenCapture_OnCaptureContentChanged callback, void *userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置录屏内容变更回调事件，需在录屏启动前被调用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avscreencapture_setcapturearea",
              children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_SetCaptureArea(struct OH_AVScreenCapture *capture, uint64_t displayId, OH_Rect* area)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置或更新捕获区域。  接口在开始录屏前后都可以设置，设置的坐标和宽高不能为负数，捕获区域不能跨屏幕，区域位置设置失败后仍按照上一次的区域进行捕获。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avscreencapture_strategyforprivacymaskmode",
              children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_StrategyForPrivacyMaskMode(OH_AVScreenCapture_CaptureStrategy *strategy, int32_t value)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置隐私窗口屏蔽模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avscreencapture_setselectioncallback",
              children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_SetSelectionCallback(struct OH_AVScreenCapture *capture, OH_AVScreenCapture_OnUserSelected callback, void *userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册手工确认界面用户选择结果的回调，需在录屏启动前被调用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avscreencapture_getcapturetypeselected",
              children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_GetCaptureTypeSelected(OH_AVScreenCapture_UserSelectionInfo *selection, int32_t* type)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取用户在确认界面选择的屏幕捕获对象类型。在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-base-h/capi-native-avscreen-capture-base-h#oh_avscreencapture_onuserselected",
              children: "OH_AVScreenCapture_OnUserSelected"
            }), "回调中使用，selection指针在回调结束后销毁。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avscreencapture_getdisplayidselected",
              children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_GetDisplayIdSelected(OH_AVScreenCapture_UserSelectionInfo *selection, uint64_t* displayId)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取确认页面，用户选择录制的屏幕ID。在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-base-h/capi-native-avscreen-capture-base-h#oh_avscreencapture_onuserselected",
              children: "OH_AVScreenCapture_OnUserSelected"
            }), "回调中使用，selection指针在回调结束后销毁。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avscreencapture_strategyforbframesencoding",
              children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_StrategyForBFramesEncoding(OH_AVScreenCapture_CaptureStrategy *strategy, bool value)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["向CaptureStrategy实例设置是否使能B帧编码，用于减小录制文件的大小。  B帧视频编码相关的约束和限制可以参考文档", (0,jsx_runtime.jsx)(_components.a, {
              href: "/avcodec-kit/audio-video-codec/video-encoding-b-frame#%E7%BA%A6%E6%9D%9F%E5%92%8C%E9%99%90%E5%88%B6",
              children: "B帧视频编码约束和限制"
            }), "。如果当前不符合B帧视频编码的约束和限制，则正常录制不含B帧的视频，不会返回错误。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avscreencapture_strategyforpickerpopup",
              children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_StrategyForPickerPopUp(OH_AVScreenCapture_CaptureStrategy *strategy, bool value)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置是否弹出屏幕捕获Picker。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avscreencapture_strategyforfillmode",
              children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_StrategyForFillMode(OH_AVScreenCapture_CaptureStrategy *strategy, OH_AVScreenCapture_FillMode mode)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置捕获图像在目标区域的填充模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avscreencapture_presentpicker",
              children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_PresentPicker(struct OH_AVScreenCapture *capture)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "录屏开始后，调用该接口再次弹出picker，可动态更新录制源（窗口、屏幕）。更新录制源过程中，原录制流程不中断。  通过picker动态更新录制源后，可以按照新的录制源进行录制。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avscreencapture_setcaptureareahighlight",
              children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_SetCaptureAreaHighlight(struct OH_AVScreenCapture *capture, OH_AVScreenCaptureHighlightConfig config)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置屏幕捕获区域高亮模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avscreencapture_setpickermode",
              children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_SetPickerMode(struct OH_AVScreenCapture *capture, OH_CapturePickerMode pickerMode)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置Picker显示模式。定义picker中显示的内容类型，模式更改会在下一次调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avscreencapture_presentpicker",
              children: "OH_AVScreenCapture_PresentPicker"
            }), " 函数时生效。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avscreencapture_excludepickerwindows",
              children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_ExcludePickerWindows(struct OH_AVScreenCapture *capture, const int32_t *excludedWindowIDs, uint32_t windowCount)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在Picker界面中隐藏指定的窗口。在picker界面显示前调用本接口，可对指定窗口进行过滤和隐藏。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avscreencapture_create",
      children: "OH_AVScreenCapture_Create()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "struct OH_AVScreenCapture *OH_AVScreenCapture_Create(void)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "实例化对象，创建OH_AVScreenCapture。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可以通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_avscreencapture_release",
        children: "OH_AVScreenCapture_Release"
      }), "释放实例。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVScreenCapture"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-avscreencapture-oh-avscreencapture/capi-avscreencapture-oh-avscreencapture",
              children: "struct OH_AVScreenCapture"
            }), " *"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回一个指向OH_AVScreenCapture实例的指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avscreencapture_init",
      children: "OH_AVScreenCapture_Init()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_Init(struct OH_AVScreenCapture *capture, OH_AVScreenCaptureConfig config)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["初始化", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-struct/capi-avscreencapture-oh-avscreencapture/capi-avscreencapture-oh-avscreencapture",
        children: "OH_AVScreenCapture"
      }), "相关参数，包括下发的音频麦克风采样相关参数（可选）、音频内录采样相关参数、视频分辨率相关参数。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "录屏存文件场景，应用需要保证视频编码参数、视频采样参数、音频编码参数、音频内录采样参数均合法，音频麦克风采样参数合法（可选）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "录屏出码流场景，应用需要保证音频内录采样参数、视频采样参数至少一个合法，音频麦克风采样参数合法（可选）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于结构体变量在初始化时不会对成员进行初始化，应用必须根据使用场景正确设置各项参数。建议应用先将OH_AVScreenCaptureConfig结构体变量的所有内存字节均设置为0，然后再根据录屏场景设置合法参数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["音频采样参数结构体", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-struct/capi-avscreencapture-oh-audiocaptureinfo/capi-avscreencapture-oh-audiocaptureinfo",
        children: "OH_AudioCaptureInfo"
      }), "，若audioSampleRate和audioChannels同时为0，则录屏实例OH_AVScreenCapture将忽略该类型的音频参数，且不采集该类型的音频数据。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["视频采样参数结构体", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-struct/capi-avscreencapture-oh-videocaptureinfo/capi-avscreencapture-oh-videocaptureinfo",
        children: "OH_VideoCaptureInfo"
      }), "，若videoFrameWidth和videoFrameHeight同时为0，则录屏实例OH_AVScreenCapture将忽略对应视频参数，且不采集屏幕数据。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVScreenCapture"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-avscreencapture-oh-avscreencapture/capi-avscreencapture-oh-avscreencapture",
              children: "struct OH_AVScreenCapture"
            }), " *capture"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_AVScreenCapture实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-avscreencapture-oh-avscreencaptureconfig/capi-avscreencapture-oh-avscreencaptureconfig",
              children: "OH_AVScreenCaptureConfig"
            }), " config"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "录屏初始化相关参数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-errors-h/capi-native-avscreen-capture-errors-h#oh_avscreen_capture_errcode",
              children: "OH_AVSCREEN_CAPTURE_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SCREEN_CAPTURE_ERR_OK：执行成功。  AV_SCREEN_CAPTURE_ERR_INVALID_VAL：输入参数capture为空指针。  AV_SCREEN_CAPTURE_ERR_OPERATE_NOT_PERMIT：不允许操作，初始化配置失败。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avscreencapture_startscreencapture",
      children: "OH_AVScreenCapture_StartScreenCapture()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_StartScreenCapture(struct OH_AVScreenCapture *capture)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开始录屏，采集原始码流。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用后可以通过回调的监听（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-base-h/capi-native-avscreen-capture-base-h#oh_avscreencapture_onbufferavailable",
        children: "OH_AVScreenCapture_OnBufferAvailable"
      }), "）来监听当前是否有码流的产生,通过回调的监听（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-base-h/capi-native-avscreen-capture-base-h#oh_avscreencapture_onstatechange",
        children: "OH_AVScreenCapture_OnStateChange"
      }), "）来监听启动状态。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过调用获取音频buffer（", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_avscreencapture_acquireaudiobuffer",
        children: "OH_AVScreenCapture_AcquireAudioBuffer"
      }), "）和视频buffer（", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_avscreencapture_acquirevideobuffer",
        children: "OH_AVScreenCapture_AcquireVideoBuffer"
      }), "）的接口来获取录屏的原始码流。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVScreenCapture"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-avscreencapture-oh-avscreencapture/capi-avscreencapture-oh-avscreencapture",
              children: "struct OH_AVScreenCapture"
            }), " *capture"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_AVScreenCapture实例的指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-errors-h/capi-native-avscreen-capture-errors-h#oh_avscreen_capture_errcode",
              children: "OH_AVSCREEN_CAPTURE_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SCREEN_CAPTURE_ERR_OK：执行成功。  AV_SCREEN_CAPTURE_ERR_INVALID_VAL：输入参数capture为空指针。  AV_SCREEN_CAPTURE_ERR_UNSUPPORT（API version 20新增）：设备不支持该操作。  AV_SCREEN_CAPTURE_ERR_OPERATE_NOT_PERMIT：不允许操作，设置隐私权限启用失败或启动录屏失败。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avscreencapture_stopscreencapture",
      children: "OH_AVScreenCapture_StopScreenCapture()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_StopScreenCapture(struct OH_AVScreenCapture *capture)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["结束录屏，与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_avscreencapture_startscreencapture",
        children: "OH_AVScreenCapture_StartScreenCapture"
      }), "配合使用。调用后针对调用该接口的应用会停止录屏或屏幕共享，释放麦克风。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVScreenCapture"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-avscreencapture-oh-avscreencapture/capi-avscreencapture-oh-avscreencapture",
              children: "struct OH_AVScreenCapture"
            }), " *capture"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_AVScreenCapture实例的指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-errors-h/capi-native-avscreen-capture-errors-h#oh_avscreen_capture_errcode",
              children: "OH_AVSCREEN_CAPTURE_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SCREEN_CAPTURE_ERR_OK：执行成功。  AV_SCREEN_CAPTURE_ERR_INVALID_VAL：输入参数capture为空指针。  AV_SCREEN_CAPTURE_ERR_OPERATE_NOT_PERMIT：不允许操作，结束录屏失败。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avscreencapture_startscreenrecording",
      children: "OH_AVScreenCapture_StartScreenRecording()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_StartScreenRecording(struct OH_AVScreenCapture *capture)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "启动录屏，调用此接口，可保存录屏文件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVScreenCapture"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-avscreencapture-oh-avscreencapture/capi-avscreencapture-oh-avscreencapture",
              children: "struct OH_AVScreenCapture"
            }), " *capture"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_AVScreenCapture实例的指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-errors-h/capi-native-avscreen-capture-errors-h#oh_avscreen_capture_errcode",
              children: "OH_AVSCREEN_CAPTURE_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SCREEN_CAPTURE_ERR_OK：执行成功。  AV_SCREEN_CAPTURE_ERR_INVALID_VAL：输入参数capture为空指针。  AV_SCREEN_CAPTURE_ERR_UNSUPPORT（API version 20新增）：设备不支持该操作。  AV_SCREEN_CAPTURE_ERR_OPERATE_NOT_PERMIT：不允许操作，设置隐私权限启用失败或启用屏幕录制失败。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avscreencapture_stopscreenrecording",
      children: "OH_AVScreenCapture_StopScreenRecording()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_StopScreenRecording(struct OH_AVScreenCapture *capture)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["停止录屏，与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_avscreencapture_startscreenrecording",
        children: "OH_AVScreenCapture_StartScreenRecording"
      }), "配合使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVScreenCapture"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-avscreencapture-oh-avscreencapture/capi-avscreencapture-oh-avscreencapture",
              children: "struct OH_AVScreenCapture"
            }), " *capture"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_AVScreenCapture实例的指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-errors-h/capi-native-avscreen-capture-errors-h#oh_avscreen_capture_errcode",
              children: "OH_AVSCREEN_CAPTURE_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SCREEN_CAPTURE_ERR_OK：执行成功。  AV_SCREEN_CAPTURE_ERR_INVALID_VAL：输入参数capture为空指针。  AV_SCREEN_CAPTURE_ERR_OPERATE_NOT_PERMIT：不允许操作，停止屏幕录制失败。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avscreencapture_acquireaudiobuffer",
      children: "OH_AVScreenCapture_AcquireAudioBuffer()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_AcquireAudioBuffer(struct OH_AVScreenCapture *capture, OH_AudioBuffer **audiobuffer, OH_AudioCaptureSourceType type)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取音频buffer。应用调用时需分配audiobuffer对应结构体大小的内存，否则影响音频buffer的获取。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 12开始，推荐使用接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-base-h/capi-native-avscreen-capture-base-h#oh_avscreencapture_onbufferavailable",
        children: "OH_AVScreenCapture_OnBufferAvailable"
      }), "替代。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVScreenCapture"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-avscreencapture-oh-avscreencapture/capi-avscreencapture-oh-avscreencapture",
              children: "struct OH_AVScreenCapture"
            }), " *capture"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_AVScreenCapture实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-avscreencapture-oh-audiobuffer/capi-avscreencapture-oh-audiobuffer",
              children: "OH_AudioBuffer"
            }), " **audiobuffer"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "保存音频buffer的结构体，通过该结构体获取到音频buffer以及buffer的时间戳等信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-base-h/capi-native-avscreen-capture-base-h#oh_audiocapturesourcetype",
              children: "OH_AudioCaptureSourceType"
            }), " type"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频buffer的类型，区分是麦克风录制的外部流还是系统内部播放音频的内录流。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-errors-h/capi-native-avscreen-capture-errors-h#oh_avscreen_capture_errcode",
              children: "OH_AVSCREEN_CAPTURE_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SCREEN_CAPTURE_ERR_OK：执行成功。  AV_SCREEN_CAPTURE_ERR_INVALID_VAL：输入参数capture为空指针或输入参数audiobuffer为空指针。  AV_SCREEN_CAPTURE_ERR_NO_MEMORY：内存不足，audiobuffer分配失败。  AV_SCREEN_CAPTURE_ERR_OPERATE_NOT_PERMIT：不允许操作，设置隐私权限启用失败或获取音频buffer失败。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avscreencapture_acquirevideobuffer",
      children: "OH_AVScreenCapture_AcquireVideoBuffer()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_NativeBuffer* OH_AVScreenCapture_AcquireVideoBuffer(struct OH_AVScreenCapture *capture, int32_t *fence, int64_t *timestamp, struct OH_Rect *region)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取视频buffer。应用通过此接口获取视频缓存区及时间戳等信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "buffer使用完成后，调用OH_AVScreenCapture_ReleaseVideoBuffer接口进行视频buffer的释放。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 12开始，推荐使用接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-base-h/capi-native-avscreen-capture-base-h#oh_avscreencapture_onbufferavailable",
        children: "OH_AVScreenCapture_OnBufferAvailable"
      }), "替代。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVScreenCapture"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-avscreencapture-oh-avscreencapture/capi-avscreencapture-oh-avscreencapture",
              children: "struct OH_AVScreenCapture"
            }), " *capture"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_AVScreenCapture实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t *fence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于同步的显示相关参数信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int64_t *timestamp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频帧的时间戳。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-avscreencapture-oh-rect/capi-avscreencapture-oh-rect",
              children: "struct OH_Rect"
            }), " *region"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频显示相关的坐标信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/pi-avscreencapture-avscreencapture-oh-nativebuffer/pi-avscreencapture-avscreencapture-oh-nativebuffer",
              children: "OH_NativeBuffer"
            }), "*"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "执行成功返回OH_NativeBuffer对象，通过OH_NativeBuffer对象相关接口可以获取到视频buffer和分辨率等信息参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avscreencapture_releaseaudiobuffer",
      children: "OH_AVScreenCapture_ReleaseAudioBuffer()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_ReleaseAudioBuffer(struct OH_AVScreenCapture *capture, OH_AudioCaptureSourceType type)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据音频类型释放buffer。当某一帧音频buffer使用完成后，调用此接口进行释放对应的音频buffer。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 12开始，推荐使用接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-base-h/capi-native-avscreen-capture-base-h#oh_avscreencapture_onbufferavailable",
        children: "OH_AVScreenCapture_OnBufferAvailable"
      }), "替代。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVScreenCapture"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-avscreencapture-oh-avscreencapture/capi-avscreencapture-oh-avscreencapture",
              children: "struct OH_AVScreenCapture"
            }), " *capture"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_AVScreenCapture实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-base-h/capi-native-avscreen-capture-base-h#oh_audiocapturesourcetype",
              children: "OH_AudioCaptureSourceType"
            }), " type"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频buffer的类型，区分麦克风录制的外部流还是系统内部播放音频的内录流。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-errors-h/capi-native-avscreen-capture-errors-h#oh_avscreen_capture_errcode",
              children: "OH_AVSCREEN_CAPTURE_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SCREEN_CAPTURE_ERR_OK：执行成功。  AV_SCREEN_CAPTURE_ERR_INVALID_VAL：输入参数capture为空指针。  AV_SCREEN_CAPTURE_ERR_OPERATE_NOT_PERMIT：不允许操作，不允许用于已设置过DataCallback或释放音频buffer失败。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avscreencapture_releasevideobuffer",
      children: "OH_AVScreenCapture_ReleaseVideoBuffer()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_ReleaseVideoBuffer(struct OH_AVScreenCapture *capture)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据视频类型释放buffer。当某一帧视频buffer使用完成后，调用此接口释放对应的视频buffer。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 12开始，推荐使用接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-base-h/capi-native-avscreen-capture-base-h#oh_avscreencapture_onbufferavailable",
        children: "OH_AVScreenCapture_OnBufferAvailable"
      }), "替代。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVScreenCapture"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-avscreencapture-oh-avscreencapture/capi-avscreencapture-oh-avscreencapture",
              children: "struct OH_AVScreenCapture"
            }), " *capture"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_AVScreenCapture实例的指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-errors-h/capi-native-avscreen-capture-errors-h#oh_avscreen_capture_errcode",
              children: "OH_AVSCREEN_CAPTURE_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SCREEN_CAPTURE_ERR_OK：执行成功。  AV_SCREEN_CAPTURE_ERR_INVALID_VAL：输入参数capture为空指针。  AV_SCREEN_CAPTURE_ERR_OPERATE_NOT_PERMIT：不允许操作，不允许用于已设置过DataCallback或释放视频buffer失败。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avscreencapture_setcallback",
      children: "OH_AVScreenCapture_SetCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_SetCallback(struct OH_AVScreenCapture *capture, struct OH_AVScreenCaptureCallback callback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置监听接口，通过设置监听，可以监听到调用过程中的错误信息，以及是否有可用的视频buffer和音频buffer。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 12开始，推荐使用接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_avscreencapture_seterrorcallback",
        children: "OH_AVScreenCapture_SetErrorCallback"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_avscreencapture_setdatacallback",
        children: "OH_AVScreenCapture_SetDataCallback"
      }), "替代。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVScreenCapture"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-avscreencapture-oh-avscreencapture/capi-avscreencapture-oh-avscreencapture",
              children: "struct OH_AVScreenCapture"
            }), " *capture"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_AVScreenCapture实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-avscreencapture-oh-avscreencapturecallback/capi-avscreencapture-oh-avscreencapturecallback",
              children: "struct OH_AVScreenCaptureCallback"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVScreenCaptureCallback的结构体，保存相关回调函数指针。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-errors-h/capi-native-avscreen-capture-errors-h#oh_avscreen_capture_errcode",
              children: "OH_AVSCREEN_CAPTURE_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SCREEN_CAPTURE_ERR_OK：执行成功。  AV_SCREEN_CAPTURE_ERR_INVALID_VAL：输入参数capture为空指针或输入参数callback为空指针。  AV_SCREEN_CAPTURE_ERR_OPERATE_NOT_PERMIT：不允许操作，设置监听接口失败。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avscreencapture_release",
      children: "OH_AVScreenCapture_Release()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_Release(struct OH_AVScreenCapture *capture)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["释放创建的OH_AVScreenCapture实例，对应", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_avscreencapture_create",
        children: "OH_AVScreenCapture_Create"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVScreenCapture"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-avscreencapture-oh-avscreencapture/capi-avscreencapture-oh-avscreencapture",
              children: "struct OH_AVScreenCapture"
            }), " *capture"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_AVScreenCapture实例的指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-errors-h/capi-native-avscreen-capture-errors-h#oh_avscreen_capture_errcode",
              children: "OH_AVSCREEN_CAPTURE_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SCREEN_CAPTURE_ERR_OK：执行成功。  AV_SCREEN_CAPTURE_ERR_INVALID_VAL：输入参数capture为空指针。  AV_SCREEN_CAPTURE_ERR_OPERATE_NOT_PERMIT：不允许操作，OH_AVScreenCapture实例释放失败。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avscreencapture_setmicrophoneenabled",
      children: "OH_AVScreenCapture_SetMicrophoneEnabled()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_SetMicrophoneEnabled(struct OH_AVScreenCapture *capture, bool isMicrophone)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置麦克风开关。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当isMicrophone为true时，则打开麦克风，通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_avscreencapture_startscreencapture",
        children: "OH_AVScreenCapture_StartScreenCapture"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_avscreencapture_acquireaudiobuffer",
        children: "OH_AVScreenCapture_AcquireAudioBuffer"
      }), "可以正常获取到音频的麦克风原始PCM数据；isMicrophone为false时，获取到的音频数据为无声数据。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "默认麦克风开关为开启。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVScreenCapture"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-avscreencapture-oh-avscreencapture/capi-avscreencapture-oh-avscreencapture",
              children: "struct OH_AVScreenCapture"
            }), " *capture"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_AVScreenCapture实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool isMicrophone"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "麦克风开关参数。  true表示打开麦克风，false表示关闭麦克风。  默认是true。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-errors-h/capi-native-avscreen-capture-errors-h#oh_avscreen_capture_errcode",
              children: "OH_AVSCREEN_CAPTURE_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SCREEN_CAPTURE_ERR_OK：执行成功。  AV_SCREEN_CAPTURE_ERR_INVALID_VAL：输入参数capture为空指针。  AV_SCREEN_CAPTURE_ERR_OPERATE_NOT_PERMIT：不允许操作，设置麦克风开关失败。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avscreencapture_setstatecallback",
      children: "OH_AVScreenCapture_SetStateCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_SetStateCallback(struct OH_AVScreenCapture *capture, OH_AVScreenCapture_OnStateChange callback, void *userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置状态变更处理回调方法，在开始录制前调用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调用该方法设置状态变更处理回调方法，当OH_AVScreenCapture实例发生状态变更时，该状态变更处理回调方法将会被调用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调用该设置方法成功后，在启动录屏时将通过隐私弹窗方式征求用户同意："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如果用户同意则开始启动录屏流程，在启动录屏成功后，通过该状态处理回调方法上报", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-base-h/capi-native-avscreen-capture-base-h#oh_avscreencapturestatecode",
            children: "OH_AVScreenCaptureStateCode"
          }), ".OH_SCREEN_CAPTURE_STATE_STARTED状态，告知应用启动录屏成功，并在屏幕显示录屏通知。如果启动录屏失败，则通过该状态处理回调方法上报失败状态信息（如，若麦克风不可用则上报", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-base-h/capi-native-avscreen-capture-base-h#oh_avscreencapturestatecode",
            children: "OH_AVScreenCaptureStateCode"
          }), ".OH_SCREEN_CAPTURE_STATE_MIC_UNAVAILABLE状态），或通过错误处理回调方法", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-base-h/capi-native-avscreen-capture-base-h#oh_avscreencapture_onerror",
            children: "OH_AVScreenCapture_OnError"
          }), "上报错误信息。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如果用户拒绝，则终止启动录屏，通过该状态处理回调方法上报", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-base-h/capi-native-avscreen-capture-base-h#oh_avscreencapturestatecode",
            children: "OH_AVScreenCaptureStateCode"
          }), ".OH_SCREEN_CAPTURE_STATE_CANCELED状态，告知应用用户拒绝启动录屏，启动录屏失败。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVScreenCapture"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-avscreencapture-oh-avscreencapture/capi-avscreencapture-oh-avscreencapture",
              children: "struct OH_AVScreenCapture"
            }), " *capture"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_AVScreenCapture实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-base-h/capi-native-avscreen-capture-base-h#oh_avscreencapture_onstatechange",
              children: "OH_AVScreenCapture_OnStateChange"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向状态处理回调方法实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void *userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向应用提供的自定义数据的指针，在状态处理回调方法被调用时作为入参回传。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-errors-h/capi-native-avscreen-capture-errors-h#oh_avscreen_capture_errcode",
              children: "OH_AVSCREEN_CAPTURE_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SCREEN_CAPTURE_ERR_OK：执行成功。  AV_SCREEN_CAPTURE_ERR_INVALID_VAL：输入参数capture为空指针或输入参数callback为空指针。  AV_SCREEN_CAPTURE_ERR_NO_MEMORY：内存不足，内存分配失败。  AV_SCREEN_CAPTURE_ERR_OPERATE_NOT_PERMIT：不允许操作，设置StateCallback失败。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avscreencapture_setdatacallback",
      children: "OH_AVScreenCapture_SetDataCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_SetDataCallback(struct OH_AVScreenCapture *capture, OH_AVScreenCapture_OnBufferAvailable callback, void *userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置数据处理回调方法，在开始录制前调用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调用该方法设置数据处理回调方法，当OH_AVScreenCapture操作期间有音频或视频数据缓存区可用时，将调用该数据处理回调方法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用需要在该数据处理回调方法中根据数据类型完成处理麦克风音频、内录音频、视频数据，当该数据处理回调方法返回后数据缓存区将不再有效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调用该方法成功后："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["当OH_AVScreenCapture操作期间有音视频缓存区可用时，将不再调用通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "#oh_avscreencapture_setcallback",
            children: "OH_AVScreenCapture_SetCallback"
          }), "设置的数据回调方法", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-base-h/capi-native-avscreen-capture-base-h#oh_avscreencaptureonaudiobufferavailable",
            children: "OH_AVScreenCaptureOnAudioBufferAvailable"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-base-h/capi-native-avscreen-capture-base-h#oh_avscreencaptureonvideobufferavailable",
            children: "OH_AVScreenCaptureOnVideoBufferAvailable"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["不允许应用调用如下4个方法", (0,jsx_runtime.jsx)(_components.a, {
            href: "#oh_avscreencapture_acquireaudiobuffer",
            children: "OH_AVScreenCapture_AcquireAudioBuffer"
          }), "、", (0,jsx_runtime.jsx)(_components.a, {
            href: "#oh_avscreencapture_releaseaudiobuffer",
            children: "OH_AVScreenCapture_ReleaseAudioBuffer"
          }), "、", (0,jsx_runtime.jsx)(_components.a, {
            href: "#oh_avscreencapture_acquirevideobuffer",
            children: "OH_AVScreenCapture_AcquireVideoBuffer"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "#oh_avscreencapture_releasevideobuffer",
            children: "OH_AVScreenCapture_ReleaseVideoBuffer"
          }), "，直接返回失败。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVScreenCapture"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-avscreencapture-oh-avscreencapture/capi-avscreencapture-oh-avscreencapture",
              children: "struct OH_AVScreenCapture"
            }), " *capture"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_AVScreenCapture实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-base-h/capi-native-avscreen-capture-base-h#oh_avscreencapture_onbufferavailable",
              children: "OH_AVScreenCapture_OnBufferAvailable"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向数据处理回调方法实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void *userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向应用提供的自定义数据的指针，在数据处理回调方法被调用时作为入参回传。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-errors-h/capi-native-avscreen-capture-errors-h#oh_avscreen_capture_errcode",
              children: "OH_AVSCREEN_CAPTURE_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SCREEN_CAPTURE_ERR_OK：执行成功。  AV_SCREEN_CAPTURE_ERR_INVALID_VAL：输入参数capture为空指针或输入参数callback为空指针。  AV_SCREEN_CAPTURE_ERR_NO_MEMORY：内存不足，内存分配失败。  AV_SCREEN_CAPTURE_ERR_OPERATE_NOT_PERMIT：不允许操作，设置DataCallback失败。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avscreencapture_seterrorcallback",
      children: "OH_AVScreenCapture_SetErrorCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_SetErrorCallback(struct OH_AVScreenCapture *capture, OH_AVScreenCapture_OnError callback, void *userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置错误处理回调方法，在开始录制前调用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调用该方法设置错误处理回调方法，当OH_AVScreenCapture实例发生错误时，该错误处理回调方法将会被调用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用该设置方法成功后，当OH_AVScreenCapture实例发生错误时，将不再调用通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_avscreencapture_setcallback",
        children: "OH_AVScreenCapture_SetCallback"
      }), "设置的错误处理回调方法", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-base-h/capi-native-avscreen-capture-base-h#oh_avscreencaptureonerror",
        children: "OH_AVScreenCaptureOnError"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVScreenCapture"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-avscreencapture-oh-avscreencapture/capi-avscreencapture-oh-avscreencapture",
              children: "struct OH_AVScreenCapture"
            }), " *capture"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_AVScreenCapture实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-base-h/capi-native-avscreen-capture-base-h#oh_avscreencapture_onerror",
              children: "OH_AVScreenCapture_OnError"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向错误处理回调方法实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void *userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向应用提供的自定义数据的指针，在错误处理回调方法被调用时作为入参回传。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-errors-h/capi-native-avscreen-capture-errors-h#oh_avscreen_capture_errcode",
              children: "OH_AVSCREEN_CAPTURE_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SCREEN_CAPTURE_ERR_OK：执行成功。  AV_SCREEN_CAPTURE_ERR_INVALID_VAL：输入参数capture为空指针或输入参数callback为空指针。  AV_SCREEN_CAPTURE_ERR_NO_MEMORY：内存不足，内存分配失败。  AV_SCREEN_CAPTURE_ERR_OPERATE_NOT_PERMIT：不允许操作，设置ErrorCallback失败。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avscreencapture_startscreencapturewithsurface",
      children: "OH_AVScreenCapture_StartScreenCaptureWithSurface()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_StartScreenCaptureWithSurface(struct OH_AVScreenCapture *capture, OHNativeWindow *window)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用Surface模式录屏。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVScreenCapture"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-avscreencapture-oh-avscreencapture/capi-avscreencapture-oh-avscreencapture",
              children: "struct OH_AVScreenCapture"
            }), " *capture"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_AVScreenCapture实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-nativewindow-nativewindow/capi-nativewindow-nativewindow",
              children: "OHNativeWindow"
            }), " *window"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OHNativeWindow实例的指针。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-errors-h/capi-native-avscreen-capture-errors-h#oh_avscreen_capture_errcode",
              children: "OH_AVSCREEN_CAPTURE_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SCREEN_CAPTURE_ERR_OK：执行成功。  AV_SCREEN_CAPTURE_ERR_INVALID_VAL：输入参数capture为空指针或输入参数window为空指针或window指向的windowSurface为空指针。  AV_SCREEN_CAPTURE_ERR_UNSUPPORT（API version 20新增）：设备不支持该操作。  AV_SCREEN_CAPTURE_ERR_OPERATE_NOT_PERMIT：不允许操作，设置隐私权限启用失败或启动ScreenCaptureWithSurface失败。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avscreencapture_setcanvasrotation",
      children: "OH_AVScreenCapture_SetCanvasRotation()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_SetCanvasRotation(struct OH_AVScreenCapture *capture, bool canvasRotation)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置录屏屏幕数据旋转。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调用该方法可以设置录屏屏幕数据是否旋转，当canvasRotation为true时，打开录屏屏幕数据旋转功能，录制的屏幕数据保持正向。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "默认为false。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(106165)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 20开始，支持折叠PC/2in1设备。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVScreenCapture"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-avscreencapture-oh-avscreencapture/capi-avscreencapture-oh-avscreencapture",
              children: "struct OH_AVScreenCapture"
            }), " *capture"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_AVScreenCapture实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool canvasRotation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指示屏幕数据旋转参数。  true表示打开录屏屏幕数据旋转功能，录制的屏幕数据保持正向，false表示关闭录屏屏幕数据旋转功能，录制的屏幕数据跟随屏幕旋转。  默认是false。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-errors-h/capi-native-avscreen-capture-errors-h#oh_avscreen_capture_errcode",
              children: "OH_AVSCREEN_CAPTURE_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SCREEN_CAPTURE_ERR_OK：执行成功。  AV_SCREEN_CAPTURE_ERR_INVALID_VAL：输入参数capture为空指针。  AV_SCREEN_CAPTURE_ERR_UNSUPPORT（API version 20新增）：设备不支持该操作。  AV_SCREEN_CAPTURE_ERR_OPERATE_NOT_PERMIT：不允许操作，设置录屏屏幕数据旋转失败。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avscreencapture_createcontentfilter",
      children: "OH_AVScreenCapture_CreateContentFilter()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "struct OH_AVScreenCapture_ContentFilter *OH_AVScreenCapture_CreateContentFilter(void)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建ContentFilter。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVScreenCapture"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/i-avscreencapture-oh-avscreencapture-contentfilter/i-avscreencapture-oh-avscreencapture-contentfilter",
              children: "OH_AVScreenCapture_ContentFilter"
            }), " *"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "执行成功返回OH_AVScreenCapture_ContentFilter实例，否则返回空指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avscreencapture_releasecontentfilter",
      children: "OH_AVScreenCapture_ReleaseContentFilter()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_ReleaseContentFilter(struct OH_AVScreenCapture_ContentFilter *filter)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "释放ContentFilter。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVScreenCapture"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/i-avscreencapture-oh-avscreencapture-contentfilter/i-avscreencapture-oh-avscreencapture-contentfilter",
              children: "struct OH_AVScreenCapture_ContentFilter"
            }), " *filter"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_AVScreenCapture_ContentFilter实例的指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-errors-h/capi-native-avscreen-capture-errors-h#oh_avscreen_capture_errcode",
              children: "OH_AVSCREEN_CAPTURE_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SCREEN_CAPTURE_ERR_OK：执行成功。  AV_SCREEN_CAPTURE_ERR_INVALID_VAL：输入参数filter为空指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avscreencapture_contentfilter_addaudiocontent",
      children: "OH_AVScreenCapture_ContentFilter_AddAudioContent()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_ContentFilter_AddAudioContent(struct OH_AVScreenCapture_ContentFilter *filter, OH_AVScreenCaptureFilterableAudioContent content)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "向ContentFilter实例添加可过滤的声音类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVScreenCapture"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/i-avscreencapture-oh-avscreencapture-contentfilter/i-avscreencapture-oh-avscreencapture-contentfilter",
              children: "struct OH_AVScreenCapture_ContentFilter"
            }), " *filter"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_AVScreenCapture_ContentFilter实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-base-h/capi-native-avscreen-capture-base-h#oh_avscreencapturefilterableaudiocontent",
              children: "OH_AVScreenCaptureFilterableAudioContent"
            }), " content"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVScreenCaptureFilterableAudioContent实例。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-errors-h/capi-native-avscreen-capture-errors-h#oh_avscreen_capture_errcode",
              children: "OH_AVSCREEN_CAPTURE_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SCREEN_CAPTURE_ERR_OK：执行成功。  AV_SCREEN_CAPTURE_ERR_INVALID_VAL：输入参数filter为空指针或输入参数content无效。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avscreencapture_excludecontent",
      children: "OH_AVScreenCapture_ExcludeContent()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_ExcludeContent(struct OH_AVScreenCapture *capture, struct OH_AVScreenCapture_ContentFilter *filter)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置OH_AVScreenCapture实例的内容过滤器ContentFilter。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVScreenCapture"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-avscreencapture-oh-avscreencapture/capi-avscreencapture-oh-avscreencapture",
              children: "struct OH_AVScreenCapture"
            }), " *capture"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_AVScreenCapture实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/i-avscreencapture-oh-avscreencapture-contentfilter/i-avscreencapture-oh-avscreencapture-contentfilter",
              children: "struct OH_AVScreenCapture_ContentFilter"
            }), " *filter"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_AVScreenCapture_ContentFilter实例的指针。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-errors-h/capi-native-avscreen-capture-errors-h#oh_avscreen_capture_errcode",
              children: "OH_AVSCREEN_CAPTURE_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SCREEN_CAPTURE_ERR_OK：执行成功。  AV_SCREEN_CAPTURE_ERR_INVALID_VAL：输入参数capture为空指针或输入参数filter为空指针。  AV_SCREEN_CAPTURE_ERR_UNSUPPORT：操作不支持。对于流，启动时应该调用AudioCapturer接口。  对于capture文件，启动时调用Recorder接口。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avscreencapture_contentfilter_addwindowcontent",
      children: "OH_AVScreenCapture_ContentFilter_AddWindowContent()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_ContentFilter_AddWindowContent(struct OH_AVScreenCapture_ContentFilter *filter, int32_t *windowIDs, int32_t windowCount)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "向ContentFilter实例添加可被过滤的窗口ID列表。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVScreenCapture"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/i-avscreencapture-oh-avscreencapture-contentfilter/i-avscreencapture-oh-avscreencapture-contentfilter",
              children: "struct OH_AVScreenCapture_ContentFilter"
            }), " *filter"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_AVScreenCapture_ContentFilter实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t *windowIDs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向窗口ID的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t windowCount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "窗口ID列表的长度。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-errors-h/capi-native-avscreen-capture-errors-h#oh_avscreen_capture_errcode",
              children: "OH_AVSCREEN_CAPTURE_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "执行成功返回AV_SCREEN_CAPTURE_ERR_OK，否则返回具体错误码。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avscreencapture_resizecanvas",
      children: "OH_AVScreenCapture_ResizeCanvas()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_ResizeCanvas(struct OH_AVScreenCapture *capture, int32_t width, int32_t height)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调整屏幕的分辨率。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调用该方法可以设置录屏屏幕数据的分辨率，width为屏幕的宽度，height为屏幕的高度。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该接口目前仅支持录屏取码流的场景，不支持录屏存文件的场景。并且调用该接口的调用者以及视频数据的消费者需要确保自身能够支持收到的视频数据分辨率发生变化。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVScreenCapture"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-avscreencapture-oh-avscreencapture/capi-avscreencapture-oh-avscreencapture",
              children: "struct OH_AVScreenCapture"
            }), " *capture"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_AVScreenCapture实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t width"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "录屏屏幕的宽度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t height"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "录屏屏幕的高度。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-errors-h/capi-native-avscreen-capture-errors-h#oh_avscreen_capture_errcode",
              children: "OH_AVSCREEN_CAPTURE_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SCREEN_CAPTURE_ERR_OK：执行成功。  AV_SCREEN_CAPTURE_ERR_INVALID_VAL：输入参数capture为空指针。  AV_SCREEN_CAPTURE_ERR_UNSUPPORT（API version 20新增）：设备不支持该操作。  AV_SCREEN_CAPTURE_ERR_OPERATE_NOT_PERMIT：不允许操作。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avscreencapture_skipprivacymode",
      children: "OH_AVScreenCapture_SkipPrivacyMode()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_SkipPrivacyMode(struct OH_AVScreenCapture *capture, int32_t *windowIDs, int32_t windowCount)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "录屏时豁免隐私窗口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调用该方法可以豁免隐私窗口，windowIDs为需要豁免的隐私窗口ID指针，windowCount 为隐私窗口ID列表的长度，目前豁免需要传入所有隐私子窗口和主窗口ID。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVScreenCapture"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-avscreencapture-oh-avscreencapture/capi-avscreencapture-oh-avscreencapture",
              children: "struct OH_AVScreenCapture"
            }), " *capture"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_AVScreenCapture实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t *windowIDs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向隐私窗口ID的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t windowCount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "隐私窗口ID列表的长度。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-errors-h/capi-native-avscreen-capture-errors-h#oh_avscreen_capture_errcode",
              children: "OH_AVSCREEN_CAPTURE_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SCREEN_CAPTURE_ERR_OK：执行成功。  AV_SCREEN_CAPTURE_ERR_INVALID_VAL：输入参数capture为空指针。  AV_SCREEN_CAPTURE_ERR_UNSUPPORT（API version 20新增）：设备不支持该操作。  AV_SCREEN_CAPTURE_ERR_OPERATE_NOT_PERMIT：不允许操作。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avscreencapture_setmaxvideoframerate",
      children: "OH_AVScreenCapture_SetMaxVideoFrameRate()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_SetMaxVideoFrameRate(struct OH_AVScreenCapture *capture, int32_t frameRate)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置录屏时的最大帧率。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该接口应在录屏启动之后被调用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调用该方法可以设置录屏时的最大帧率，frameRate为想要设置的最大帧率。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该接口设置最大帧率时，实际设置的帧率受限设备的能力，由底层的系统能力决定。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调用该接口设置录屏最大帧率时，实际帧率将受限于设备能力。目前接口入参的最大值不设限制，但当前支持的最高帧率为60FPS，当入参设置超过60FPS，将以60FPS处理。不超过上限时，则按照实际入参值处理。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVScreenCapture"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 14"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-avscreencapture-oh-avscreencapture/capi-avscreencapture-oh-avscreencapture",
              children: "struct OH_AVScreenCapture"
            }), " *capture"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_AVScreenCapture实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t frameRate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "录屏的最大帧率。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-errors-h/capi-native-avscreen-capture-errors-h#oh_avscreen_capture_errcode",
              children: "OH_AVSCREEN_CAPTURE_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SCREEN_CAPTURE_ERR_OK：执行成功。  AV_SCREEN_CAPTURE_ERR_INVALID_VAL：输入参数capture为空指针或者输入参数frameRate不支持。  AV_SCREEN_CAPTURE_ERR_UNSUPPORT（API version 20新增）：设备不支持该操作。  AV_SCREEN_CAPTURE_ERR_OPERATE_NOT_PERMIT：不允许操作。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avscreencapture_showcursor",
      children: "OH_AVScreenCapture_ShowCursor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_ShowCursor(struct OH_AVScreenCapture *capture, bool showCursor)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置光标显示开关。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVScreenCapture"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 15"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-avscreencapture-oh-avscreencapture/capi-avscreencapture-oh-avscreencapture",
              children: "struct OH_AVScreenCapture"
            }), " *capture"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_AVScreenCapture实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool showCursor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "光标显示参数。  true表示显示光标，false表示隐藏光标。  默认是true。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-errors-h/capi-native-avscreen-capture-errors-h#oh_avscreen_capture_errcode",
              children: "OH_AVSCREEN_CAPTURE_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SCREEN_CAPTURE_ERR_OK：执行成功。  AV_SCREEN_CAPTURE_ERR_INVALID_VAL：输入参数capture为空指针。  AV_SCREEN_CAPTURE_ERR_UNSUPPORT（API version 20新增）：设备不支持该操作。  AV_SCREEN_CAPTURE_ERR_OPERATE_NOT_PERMIT：不允许操作，设置光标失败。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avscreencapture_setdisplaycallback",
      children: "OH_AVScreenCapture_SetDisplayCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_SetDisplayCallback(struct OH_AVScreenCapture *capture, OH_AVScreenCapture_OnDisplaySelected callback, void *userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置获取录屏屏幕Id的回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVScreenCapture"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 15"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-avscreencapture-oh-avscreencapture/capi-avscreencapture-oh-avscreencapture",
              children: "struct OH_AVScreenCapture"
            }), " *capture"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_AVScreenCapture实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-base-h/capi-native-avscreen-capture-base-h#oh_avscreencapture_ondisplayselected",
              children: "OH_AVScreenCapture_OnDisplaySelected"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向录屏屏幕Id回调方法实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void *userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向应用提供的自定义数据的指针，在状态处理回调方法被调用时作为入参回传。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-errors-h/capi-native-avscreen-capture-errors-h#oh_avscreen_capture_errcode",
              children: "OH_AVSCREEN_CAPTURE_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SCREEN_CAPTURE_ERR_OK：执行成功。  AV_SCREEN_CAPTURE_ERR_INVALID_VAL：输入参数capture为空指针或输入参数callback为空指针。  AV_SCREEN_CAPTURE_ERR_NO_MEMORY：内存不足，内存分配失败。  AV_SCREEN_CAPTURE_ERR_INVALID_STATE：回调必须在start方法前调用。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avscreencapture_createcapturestrategy",
      children: "OH_AVScreenCapture_CreateCaptureStrategy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVScreenCapture_CaptureStrategy* OH_AVScreenCapture_CreateCaptureStrategy(void)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建录屏策略对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVScreenCapture"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/avscreencapture-oh-avscreencapture-capturestrategy/avscreencapture-oh-avscreencapture-capturestrategy",
              children: "OH_AVScreenCapture_CaptureStrategy"
            }), "*"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "执行成功返回OH_AVScreenCapture_CaptureStrategy实例，否则返回空指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avscreencapture_releasecapturestrategy",
      children: "OH_AVScreenCapture_ReleaseCaptureStrategy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_ReleaseCaptureStrategy(OH_AVScreenCapture_CaptureStrategy* strategy)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "释放录屏策略对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVScreenCapture"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/avscreencapture-oh-avscreencapture-capturestrategy/avscreencapture-oh-avscreencapture-capturestrategy",
              children: "OH_AVScreenCapture_CaptureStrategy"
            }), "* strategy"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向录屏策略对象的指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-errors-h/capi-native-avscreen-capture-errors-h#oh_avscreen_capture_errcode",
              children: "OH_AVSCREEN_CAPTURE_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SCREEN_CAPTURE_ERR_OK：执行成功。  AV_SCREEN_CAPTURE_ERR_INVALID_VAL：输入参数strategy为空指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avscreencapture_setcapturestrategy",
      children: "OH_AVScreenCapture_SetCaptureStrategy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_SetCaptureStrategy(struct OH_AVScreenCapture *capture, OH_AVScreenCapture_CaptureStrategy *strategy)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "给指定的OH_AVScreenCapture实例设置捕获策略。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该接口应在录屏启动之前被调用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVScreenCapture"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-avscreencapture-oh-avscreencapture/capi-avscreencapture-oh-avscreencapture",
              children: "struct OH_AVScreenCapture"
            }), " *capture"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_AVScreenCapture实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/avscreencapture-oh-avscreencapture-capturestrategy/avscreencapture-oh-avscreencapture-capturestrategy",
              children: "OH_AVScreenCapture_CaptureStrategy"
            }), " *strategy"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向捕获策略对象的指针。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-errors-h/capi-native-avscreen-capture-errors-h#oh_avscreen_capture_errcode",
              children: "OH_AVSCREEN_CAPTURE_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SCREEN_CAPTURE_ERR_OK：执行成功。  AV_SCREEN_CAPTURE_ERR_INVALID_VAL：输入参数capture或strategy为空指针。  AV_SCREEN_CAPTURE_ERR_INVALID_STATE：在录屏启动之后调用该接口。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avscreencapture_strategyforcanvasfollowrotation",
      children: "OH_AVScreenCapture_StrategyForCanvasFollowRotation()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_StrategyForCanvasFollowRotation(OH_AVScreenCapture_CaptureStrategy *strategy, bool value)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置屏幕录屏自动跟随旋转配置。设为true，表示跟随屏幕旋转，并在横竖屏旋转后，自动调换虚拟屏尺寸，确保输出画面及时跟随旋转。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置是否自动跟随旋转配置后，在旋转通知后，无需再手动调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_avscreencapture_resizecanvas",
        children: "OH_AVScreenCapture_ResizeCanvas"
      }), "接口。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/avscreencapture-oh-avscreencapture-capturestrategy/avscreencapture-oh-avscreencapture-capturestrategy",
              children: "OH_AVScreenCapture_CaptureStrategy"
            }), " *strategy"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_AVScreenCapture_CaptureStrategy实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "虚拟屏的宽和高是否跟随屏幕旋转而旋转。  true表示虚拟屏的宽和高随着屏幕的旋转而旋转，false表示虚拟屏的宽和高保持初始设定。  默认是false。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-errors-h/capi-native-avscreen-capture-errors-h#oh_avscreen_capture_errcode",
              children: "OH_AVSCREEN_CAPTURE_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SCREEN_CAPTURE_ERR_OK：执行成功。  AV_SCREEN_CAPTURE_ERR_INVALID_VAL：输入参数strategy为空指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avscreencapture_strategyforkeepcaptureduringcall",
      children: "OH_AVScreenCapture_StrategyForKeepCaptureDuringCall()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_StrategyForKeepCaptureDuringCall(OH_AVScreenCapture_CaptureStrategy *strategy, bool value)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "向CaptureStrategy实例设置蜂窝通话时是否保持录屏。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "value设置为true时并且录屏时接听蜂窝通话的过程中，出于隐私要求，双方通话的声音（本地麦克风和对方说话声音）不会被录制，其他系统音录制正常。电话挂断之后，录屏框架恢复麦克风录制。注意，如果挂断电话时录屏应用在后台运行，麦克风录制会启动失败，原因是音频模块不允许后台应用启动麦克风录制。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVScreenCapture"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/avscreencapture-oh-avscreencapture-capturestrategy/avscreencapture-oh-avscreencapture-capturestrategy",
              children: "OH_AVScreenCapture_CaptureStrategy"
            }), " *strategy"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_AVScreenCapture_CaptureStrategy对象的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "蜂窝通话时是否可以进行屏幕录制。  true表示蜂窝通话时可以录屏，false表示蜂窝通话时不允许录屏。  默认是false。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-errors-h/capi-native-avscreen-capture-errors-h#oh_avscreen_capture_errcode",
              children: "OH_AVSCREEN_CAPTURE_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SCREEN_CAPTURE_ERR_OK：执行成功。  AV_SCREEN_CAPTURE_ERR_INVALID_VAL：输入参数strategy为空指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avscreencapture_setcapturecontentchangedcallback",
      children: "OH_AVScreenCapture_SetCaptureContentChangedCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_SetCaptureContentChangedCallback(struct OH_AVScreenCapture *capture, OH_AVScreenCapture_OnCaptureContentChanged callback, void *userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置录屏内容变更回调事件，需在录屏启动前被调用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVScreenCapture"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-avscreencapture-oh-avscreencapture/capi-avscreencapture-oh-avscreencapture",
              children: "struct OH_AVScreenCapture"
            }), " *capture"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_AVScreenCapture实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-base-h/capi-native-avscreen-capture-base-h#oh_avscreencapture_oncapturecontentchanged",
              children: "OH_AVScreenCapture_OnCaptureContentChanged"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向录屏内容变更回调方法实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void *userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向应用提供的自定义数据的指针，在错误处理回调方法被调用时作为入参回传。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-errors-h/capi-native-avscreen-capture-errors-h#oh_avscreen_capture_errcode",
              children: "OH_AVSCREEN_CAPTURE_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SCREEN_CAPTURE_ERR_OK：操作成功。  AV_SCREEN_CAPTURE_ERR_INVALID_VAL：参数无效，输入参数capture或callback为空指针。  AV_SCREEN_CAPTURE_ERR_OPERATE_NOT_PERMIT：不允许操作，设置录屏内容回调失败。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avscreencapture_setcapturearea",
      children: "OH_AVScreenCapture_SetCaptureArea()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_SetCaptureArea(struct OH_AVScreenCapture *capture, uint64_t displayId, OH_Rect* area)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置或更新捕获区域。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口在开始录屏前后都可以设置，设置的坐标和宽高不能为负数，捕获区域不能跨屏幕，区域位置设置失败后仍按照上一次的区域进行捕获。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-avscreencapture-oh-avscreencapture/capi-avscreencapture-oh-avscreencapture",
              children: "struct OH_AVScreenCapture"
            }), " *capture"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_AVScreenCapture的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint64_t displayId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要执行屏幕捕获的屏幕ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-avscreencapture-oh-rect/capi-avscreencapture-oh-rect",
              children: "OH_Rect"
            }), "* area"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定捕获的区域。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-errors-h/capi-native-avscreen-capture-errors-h#oh_avscreen_capture_errcode",
              children: "OH_AVSCREEN_CAPTURE_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SCREEN_CAPTURE_ERR_OK：执行成功。  AV_SCREEN_CAPTURE_ERR_INVALID_VAL：输入参数capture为空指针、输入displayId不存在或输入的捕获区域异常。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avscreencapture_strategyforprivacymaskmode",
      children: "OH_AVScreenCapture_StrategyForPrivacyMaskMode()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_StrategyForPrivacyMaskMode(OH_AVScreenCapture_CaptureStrategy *strategy, int32_t value)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置隐私窗口屏蔽模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVScreenCapture"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/avscreencapture-oh-avscreencapture-capturestrategy/avscreencapture-oh-avscreencapture-capturestrategy",
              children: "OH_AVScreenCapture_CaptureStrategy"
            }), " *strategy"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_AVScreenCapture_CaptureStrategy实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置为0，表示存在隐私窗口时，采用全屏屏蔽模式。  设置为1，表示存在隐私窗口时，采用隐私窗口屏蔽模式，设置为其他值时返回错误。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-errors-h/capi-native-avscreen-capture-errors-h#oh_avscreen_capture_errcode",
              children: "OH_AVSCREEN_CAPTURE_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SCREEN_CAPTURE_ERR_OK：执行成功。  AV_SCREEN_CAPTURE_ERR_INVALID_VAL：输入参数strategy为空指针或输入value为无效值。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avscreencapture_setselectioncallback",
      children: "OH_AVScreenCapture_SetSelectionCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_SetSelectionCallback(struct OH_AVScreenCapture *capture, OH_AVScreenCapture_OnUserSelected callback, void *userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册手工确认界面用户选择结果的回调，需在录屏启动前被调用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-avscreencapture-oh-avscreencapture/capi-avscreencapture-oh-avscreencapture",
              children: "struct OH_AVScreenCapture"
            }), " *capture"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要注册该回调的屏幕捕获对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-base-h/capi-native-avscreen-capture-base-h#oh_avscreencapture_onuserselected",
              children: "OH_AVScreenCapture_OnUserSelected"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户在界面确认后，通过该函数通知应用进行逻辑处理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void *userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用传入的控制块指针，在返回时携带给应用。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-errors-h/capi-native-avscreen-capture-errors-h#oh_avscreen_capture_errcode",
              children: "OH_AVSCREEN_CAPTURE_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SCREEN_CAPTURE_ERR_OK：执行成功。  AV_SCREEN_CAPTURE_ERR_INVALID_VAL：输入参数capture为空指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avscreencapture_getcapturetypeselected",
      children: "OH_AVScreenCapture_GetCaptureTypeSelected()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_GetCaptureTypeSelected(OH_AVScreenCapture_UserSelectionInfo *selection, int32_t* type)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取用户在确认界面选择的屏幕捕获对象类型。在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-base-h/capi-native-avscreen-capture-base-h#oh_avscreencapture_onuserselected",
        children: "OH_AVScreenCapture_OnUserSelected"
      }), "回调中使用，selection指针在回调结束后销毁。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/screencapture-oh-avscreencapture-userselectioninfo/screencapture-oh-avscreencapture-userselectioninfo",
              children: "OH_AVScreenCapture_UserSelectionInfo"
            }), " *selection"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_AVScreenCapture_UserSelectionInfo实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t* type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户选择的捕获对象类型，0：代表屏幕，1：代表窗口。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-errors-h/capi-native-avscreen-capture-errors-h#oh_avscreen_capture_errcode",
              children: "OH_AVSCREEN_CAPTURE_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SCREEN_CAPTURE_ERR_OK：执行成功。  AV_SCREEN_CAPTURE_ERR_INVALID_VAL：输入参数selection为空指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avscreencapture_getdisplayidselected",
      children: "OH_AVScreenCapture_GetDisplayIdSelected()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_GetDisplayIdSelected(OH_AVScreenCapture_UserSelectionInfo *selection, uint64_t* displayId)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取确认页面，用户选择录制的屏幕ID。在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-base-h/capi-native-avscreen-capture-base-h#oh_avscreencapture_onuserselected",
        children: "OH_AVScreenCapture_OnUserSelected"
      }), "回调中使用，selection指针在回调结束后销毁。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/screencapture-oh-avscreencapture-userselectioninfo/screencapture-oh-avscreencapture-userselectioninfo",
              children: "OH_AVScreenCapture_UserSelectionInfo"
            }), " *selection"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_AVScreenCapture_UserSelectionInfo实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint64_t* displayId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回用户选择的屏幕ID。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-errors-h/capi-native-avscreen-capture-errors-h#oh_avscreen_capture_errcode",
              children: "OH_AVSCREEN_CAPTURE_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SCREEN_CAPTURE_ERR_OK：执行成功。  AV_SCREEN_CAPTURE_ERR_INVALID_VAL：输入参数selection为空指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avscreencapture_strategyforbframesencoding",
      children: "OH_AVScreenCapture_StrategyForBFramesEncoding()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_StrategyForBFramesEncoding(OH_AVScreenCapture_CaptureStrategy *strategy, bool value)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "向CaptureStrategy实例设置是否使能B帧编码，用于减小录制文件的大小。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["B帧视频编码相关的约束和限制可以参考文档", (0,jsx_runtime.jsx)(_components.a, {
        href: "/avcodec-kit/audio-video-codec/video-encoding-b-frame#%E7%BA%A6%E6%9D%9F%E5%92%8C%E9%99%90%E5%88%B6",
        children: "B帧视频编码约束和限制"
      }), "。如果当前不符合B帧视频编码的约束和限制，则正常录制不含B帧的视频，不会返回错误。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVScreenCapture"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/avscreencapture-oh-avscreencapture-capturestrategy/avscreencapture-oh-avscreencapture-capturestrategy",
              children: "OH_AVScreenCapture_CaptureStrategy"
            }), " *strategy"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_AVScreenCapture_CaptureStrategy对象的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "录屏文件是否使能B帧编码。  true表示录屏文件使能B帧编码，false表示录屏文件禁用B帧编码。  默认是false。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-errors-h/capi-native-avscreen-capture-errors-h#oh_avscreen_capture_errcode",
              children: "OH_AVSCREEN_CAPTURE_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SCREEN_CAPTURE_ERR_OK：执行成功。  AV_SCREEN_CAPTURE_ERR_INVALID_VAL：输入参数strategy为空指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avscreencapture_strategyforpickerpopup",
      children: "OH_AVScreenCapture_StrategyForPickerPopUp()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_StrategyForPickerPopUp(OH_AVScreenCapture_CaptureStrategy *strategy, bool value)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置是否弹出屏幕捕获Picker。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/avscreencapture-oh-avscreencapture-capturestrategy/avscreencapture-oh-avscreencapture-capturestrategy",
              children: "OH_AVScreenCapture_CaptureStrategy"
            }), " *strategy"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_AVScreenCapture_CaptureStrategy对象的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置为false，代表APP已经指定了录屏内容，录屏启动后无需弹出Picker；设置为true代表录屏启动后统一弹出Picker；不设置，代表使用系统推荐行为。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-errors-h/capi-native-avscreen-capture-errors-h#oh_avscreen_capture_errcode",
              children: "OH_AVSCREEN_CAPTURE_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SCREEN_CAPTURE_ERR_OK：执行成功。  AV_SCREEN_CAPTURE_ERR_INVALID_VAL：输入参数strategy为空指针或输入value为无效值。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avscreencapture_strategyforfillmode",
      children: "OH_AVScreenCapture_StrategyForFillMode()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_StrategyForFillMode(OH_AVScreenCapture_CaptureStrategy *strategy, OH_AVScreenCapture_FillMode mode)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置捕获图像在目标区域的填充模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/avscreencapture-oh-avscreencapture-capturestrategy/avscreencapture-oh-avscreencapture-capturestrategy",
              children: "OH_AVScreenCapture_CaptureStrategy"
            }), " *strategy"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_AVScreenCapture_CaptureStrategy对象的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-base-h/capi-native-avscreen-capture-base-h#oh_avscreencapture_fillmode",
              children: "OH_AVScreenCapture_FillMode"
            }), " mode"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "捕获图像在输出图像上的填充模式。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-errors-h/capi-native-avscreen-capture-errors-h#oh_avscreen_capture_errcode",
              children: "OH_AVSCREEN_CAPTURE_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SCREEN_CAPTURE_ERR_OK：执行成功。  AV_SCREEN_CAPTURE_ERR_INVALID_VAL：输入参数strategy为空指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avscreencapture_presentpicker",
      children: "OH_AVScreenCapture_PresentPicker()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_PresentPicker(struct OH_AVScreenCapture *capture)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "录屏开始后，调用该接口再次弹出picker，可动态更新录制源（窗口、屏幕）。更新录制源过程中，原录制流程不中断。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过picker动态更新录制源后，可以按照新的录制源进行录制。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-avscreencapture-oh-avscreencapture/capi-avscreencapture-oh-avscreencapture",
              children: "struct OH_AVScreenCapture"
            }), " *capture"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_AVScreenCapture实例的指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-errors-h/capi-native-avscreen-capture-errors-h#oh_avscreen_capture_errcode",
              children: "OH_AVSCREEN_CAPTURE_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SCREEN_CAPTURE_ERR_OK：执行成功。  AV_SCREEN_CAPTURE_ERR_INVALID_VAL：输入参数capture为空指针。  AV_SCREEN_CAPTURE_ERR_OPERATE_NOT_PERMIT：不允许操作。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avscreencapture_setcaptureareahighlight",
      children: "OH_AVScreenCapture_SetCaptureAreaHighlight()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_SetCaptureAreaHighlight(struct OH_AVScreenCapture *capture, OH_AVScreenCaptureHighlightConfig config)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置屏幕捕获区域高亮模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-avscreencapture-oh-avscreencapture/capi-avscreencapture-oh-avscreencapture",
              children: "struct OH_AVScreenCapture"
            }), " *capture"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_AVScreenCapture实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/x-avscreencapture-oh-avscreencapturehighlightconfig/x-avscreencapture-oh-avscreencapturehighlightconfig",
              children: "OH_AVScreenCaptureHighlightConfig"
            }), " config"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置本次屏幕捕获的高亮参数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-errors-h/capi-native-avscreen-capture-errors-h#oh_avscreen_capture_errcode",
              children: "OH_AVSCREEN_CAPTURE_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SCREEN_CAPTURE_ERR_OK：执行成功。  AV_SCREEN_CAPTURE_ERR_INVALID_VAL：输入参数capture为空指针或者config参数值无效。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avscreencapture_setpickermode",
      children: "OH_AVScreenCapture_SetPickerMode()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_SetPickerMode(struct OH_AVScreenCapture *capture, OH_CapturePickerMode pickerMode)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置Picker显示模式。定义picker中显示的内容类型，模式更改会在下一次调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_avscreencapture_presentpicker",
        children: "OH_AVScreenCapture_PresentPicker"
      }), " 函数时生效。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-avscreencapture-oh-avscreencapture/capi-avscreencapture-oh-avscreencapture",
              children: "struct OH_AVScreenCapture"
            }), " *capture"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_AVScreenCapture实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-base-h/capi-native-avscreen-capture-base-h#oh_capturepickermode",
              children: "OH_CapturePickerMode"
            }), " pickerMode"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Picker显示模式（请参阅OH_CapturePickerMode枚举）。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-errors-h/capi-native-avscreen-capture-errors-h#oh_avscreen_capture_errcode",
              children: "OH_AVSCREEN_CAPTURE_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SCREEN_CAPTURE_ERR_OK：执行成功。  AV_SCREEN_CAPTURE_ERR_INVALID_VAL：输入参数capture为空指针或者pickerMode参数值无效。  AV_SCREEN_CAPTURE_ERR_OPERATE_NOT_PERMIT：不允许操作。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avscreencapture_excludepickerwindows",
      children: "OH_AVScreenCapture_ExcludePickerWindows()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVSCREEN_CAPTURE_ErrCode OH_AVScreenCapture_ExcludePickerWindows(struct OH_AVScreenCapture *capture, const int32_t *excludedWindowIDs, uint32_t windowCount)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在Picker界面中隐藏指定的窗口。在picker界面显示前调用本接口，可对指定窗口进行过滤和隐藏。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-avscreencapture-oh-avscreencapture/capi-avscreencapture-oh-avscreencapture",
              children: "struct OH_AVScreenCapture"
            }), " *capture"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_AVScreenCapture实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const int32_t *excludedWindowIDs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要隐藏的窗口ID数组（已存在的窗口）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t windowCount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要隐藏的窗口ID数组长度。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-errors-h/capi-native-avscreen-capture-errors-h#oh_avscreen_capture_errcode",
              children: "OH_AVSCREEN_CAPTURE_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_SCREEN_CAPTURE_ERR_OK：执行成功。  AV_SCREEN_CAPTURE_ERR_INVALID_VAL：输入参数capture为空指针或者窗口ID参数值无效。  AV_SCREEN_CAPTURE_ERR_OPERATE_NOT_PERMIT：不允许操作。"
          })]
        })
      })]
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
106165(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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