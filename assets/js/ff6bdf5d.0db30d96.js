"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["748379"], {
827351(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_media_api_media_c_media_headerfile_capi_native_avscreen_capture_base_h_capi_native_avscreen_capture_base_h_md_ff6_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-media-api-media-c-media-headerfile-capi-native-avscreen-capture-base-h-capi-native-avscreen-capture-base-h-md-ff6.json
var site_docs_ref_media_api_media_c_media_headerfile_capi_native_avscreen_capture_base_h_capi_native_avscreen_capture_base_h_md_ff6_namespaceObject = JSON.parse('{"id":"media-api/media-c/media-headerfile/capi-native-avscreen-capture-base-h/capi-native-avscreen-capture-base-h","title":"native_avscreen_capture_base.h","description":"概述","source":"@site/docs-ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-base-h/capi-native-avscreen-capture-base-h.md","sourceDirName":"media-api/media-c/media-headerfile/capi-native-avscreen-capture-base-h","slug":"/media-api/media-c/media-headerfile/capi-native-avscreen-capture-base-h/capi-native-avscreen-capture-base-h","permalink":"/harmonyos-docs-site/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-base-h/capi-native-avscreen-capture-base-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"title":"native_avscreen_capture_base.h","sidebar_position":12,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avscreen-capture-base-h","kit":"媒体","last_updated":"2026-04-22","slug":"capi-native-avscreen-capture-base-h"},"sidebar":"ref","previous":{"title":"native_avscreen_capture.h","permalink":"/harmonyos-docs-site/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-h/capi-native-avscreen-capture-h"},"next":{"title":"native_avscreen_capture_errors.h","permalink":"/harmonyos-docs-site/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-errors-h/capi-native-avscreen-capture-errors-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-base-h/capi-native-avscreen-capture-base-h.md


const frontMatter = {
	title: 'native_avscreen_capture_base.h',
	sidebar_position: 12,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avscreen-capture-base-h',
	kit: '媒体',
	last_updated: '2026-04-22',
	slug: 'capi-native-avscreen-capture-base-h'
};
const contentTitle = 'native_avscreen_capture_base.h';

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
  "value": "结构体",
  "id": "结构体",
  "level": 3
}, {
  "value": "枚举",
  "id": "枚举",
  "level": 3
}, {
  "value": "函数",
  "id": "函数",
  "level": 3
}, {
  "value": "枚举类型说明",
  "id": "枚举类型说明",
  "level": 2
}, {
  "value": "OH_CaptureMode",
  "id": "oh_capturemode",
  "level": 3
}, {
  "value": "OH_AudioCaptureSourceType",
  "id": "oh_audiocapturesourcetype",
  "level": 3
}, {
  "value": "OH_AudioCodecFormat",
  "id": "oh_audiocodecformat",
  "level": 3
}, {
  "value": "OH_VideoCodecFormat",
  "id": "oh_videocodecformat",
  "level": 3
}, {
  "value": "OH_DataType",
  "id": "oh_datatype",
  "level": 3
}, {
  "value": "OH_VideoSourceType",
  "id": "oh_videosourcetype",
  "level": 3
}, {
  "value": "OH_ContainerFormatType",
  "id": "oh_containerformattype",
  "level": 3
}, {
  "value": "OH_AVScreenCaptureStateCode",
  "id": "oh_avscreencapturestatecode",
  "level": 3
}, {
  "value": "OH_AVScreenCaptureBufferType",
  "id": "oh_avscreencapturebuffertype",
  "level": 3
}, {
  "value": "OH_AVScreenCaptureFilterableAudioContent",
  "id": "oh_avscreencapturefilterableaudiocontent",
  "level": 3
}, {
  "value": "OH_AVScreenCaptureContentChangedEvent",
  "id": "oh_avscreencapturecontentchangedevent",
  "level": 3
}, {
  "value": "OH_AVScreenCapture_FillMode",
  "id": "oh_avscreencapture_fillmode",
  "level": 3
}, {
  "value": "OH_ScreenCaptureHighlightMode",
  "id": "oh_screencapturehighlightmode",
  "level": 3
}, {
  "value": "OH_CapturePickerMode",
  "id": "oh_capturepickermode",
  "level": 3
}, {
  "value": "函数说明",
  "id": "函数说明",
  "level": 2
}, {
  "value": "OH_AVScreenCaptureOnError()",
  "id": "oh_avscreencaptureonerror",
  "level": 3
}, {
  "value": "OH_AVScreenCaptureOnAudioBufferAvailable()",
  "id": "oh_avscreencaptureonaudiobufferavailable",
  "level": 3
}, {
  "value": "OH_AVScreenCaptureOnVideoBufferAvailable()",
  "id": "oh_avscreencaptureonvideobufferavailable",
  "level": 3
}, {
  "value": "OH_AVScreenCapture_OnStateChange()",
  "id": "oh_avscreencapture_onstatechange",
  "level": 3
}, {
  "value": "OH_AVScreenCapture_OnError()",
  "id": "oh_avscreencapture_onerror",
  "level": 3
}, {
  "value": "OH_AVScreenCapture_OnBufferAvailable()",
  "id": "oh_avscreencapture_onbufferavailable",
  "level": 3
}, {
  "value": "OH_AVScreenCapture_OnDisplaySelected()",
  "id": "oh_avscreencapture_ondisplayselected",
  "level": 3
}, {
  "value": "OH_AVScreenCapture_OnCaptureContentChanged()",
  "id": "oh_avscreencapture_oncapturecontentchanged",
  "level": 3
}, {
  "value": "OH_AVScreenCapture_OnUserSelected()",
  "id": "oh_avscreencapture_onuserselected",
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
        id: "native_avscreen_capture_baseh",
        children: "native_avscreen_capture_base.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "声明用于运行屏幕录制通用的结构体、字符常量、枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <multimedia/player_framework/native_avscreen_capture_base.h>"]
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "结构体",
      children: "结构体"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "typedef关键字"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-avscreencapture-oh-audiocaptureinfo/capi-avscreencapture-oh-audiocaptureinfo",
              children: "OH_AudioCaptureInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioCaptureInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频采样信息。  当audioSampleRate和audioChannels同时为0时，忽略该类型音频相关参数，不录制该类型音频数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-avscreencapture-oh-audioencinfo/capi-avscreencapture-oh-audioencinfo",
              children: "OH_AudioEncInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioEncInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频编码信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-avscreencapture-oh-audioinfo/capi-avscreencapture-oh-audioinfo",
              children: "OH_AudioInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频信息。  同时采集音频麦克风和音频内录数据时，两路音频的audioSampleRate和audioChannels采样参数需要相同。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-avscreencapture-oh-videocaptureinfo/capi-avscreencapture-oh-videocaptureinfo",
              children: "OH_VideoCaptureInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_VideoCaptureInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频录制信息。当videoFrameWidth和videoFrameHeight同时为0时，忽略视频相关参数不录制屏幕数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-avscreencapture-oh-videoencinfo/capi-avscreencapture-oh-videoencinfo",
              children: "OH_VideoEncInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_VideoEncInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频编码参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-avscreencapture-oh-videoinfo/capi-avscreencapture-oh-videoinfo",
              children: "OH_VideoInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_VideoInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-avscreencapture-oh-recorderinfo/capi-avscreencapture-oh-recorderinfo",
              children: "OH_RecorderInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_RecorderInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "录制文件信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-avscreencapture-oh-avscreencaptureconfig/capi-avscreencapture-oh-avscreencaptureconfig",
              children: "OH_AVScreenCaptureConfig"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVScreenCaptureConfig"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "屏幕录制配置参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-avscreencapture-oh-avscreencapturecallback/capi-avscreencapture-oh-avscreencapturecallback",
              children: "OH_AVScreenCaptureCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVScreenCaptureCallback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_AVScreenCapture中所有异步回调函数指针的集合。将该结构体的实例注册到OH_AVScreenCapture实例中，并处理回调上报的信息，以保证OH_AVScreenCapture的正常运行。  从API version 12开始，推荐使用接口", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avscreencapture_onerror",
              children: "OH_AVScreenCapture_OnError"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avscreencapture_onbufferavailable",
              children: "OH_AVScreenCapture_OnBufferAvailable"
            }), "替代。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-avscreencapture-oh-rect/capi-avscreencapture-oh-rect",
              children: "OH_Rect"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Rect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义录屏界面的宽高以及画面信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-avscreencapture-oh-audiobuffer/capi-avscreencapture-oh-audiobuffer",
              children: "OH_AudioBuffer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioBuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义了音频数据的大小、类型、时间戳等配置信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/x-avscreencapture-oh-avscreencapturehighlightconfig/x-avscreencapture-oh-avscreencapturehighlightconfig",
              children: "OH_AVScreenCaptureHighlightConfig"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVScreenCaptureHighlightConfig"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示高亮边框的样式，包括高亮边框的模式、边框宽度和边框颜色。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/pi-avscreencapture-avscreencapture-oh-nativebuffer/pi-avscreencapture-avscreencapture-oh-nativebuffer",
              children: "OH_NativeBuffer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeBuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供录屏的视频原始码流类。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-avscreencapture-oh-avscreencapture/capi-avscreencapture-oh-avscreencapture",
              children: "OH_AVScreenCapture"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVScreenCapture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过OH_AVScreenCapture可以获取视频与音频的原始码流。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/i-avscreencapture-oh-avscreencapture-contentfilter/i-avscreencapture-oh-avscreencapture-contentfilter",
              children: "OH_AVScreenCapture_ContentFilter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVScreenCapture_ContentFilter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过OH_AVScreenCapture_ContentFilter过滤音视频内容。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/avscreencapture-oh-avscreencapture-capturestrategy/avscreencapture-oh-avscreencapture-capturestrategy",
              children: "OH_AVScreenCapture_CaptureStrategy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVScreenCapture_CaptureStrategy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过OH_AVScreenCapture_CaptureStrategy设置录屏策略。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/screencapture-oh-avscreencapture-userselectioninfo/screencapture-oh-avscreencapture-userselectioninfo",
              children: "OH_AVScreenCapture_UserSelectionInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVScreenCapture_UserSelectionInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过OH_AVScreenCapture_UserSelectionInfo获取用户在授权界面（选择界面）选择的参数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "typedef关键字"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_capturemode",
              children: "OH_CaptureMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_CaptureMode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "枚举，表示屏幕录制的不同模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiocapturesourcetype",
              children: "OH_AudioCaptureSourceType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioCaptureSourceType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "枚举，表示屏幕录制时的音频源类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiocodecformat",
              children: "OH_AudioCodecFormat"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AudioCodecFormat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "枚举，表示音频编码格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_videocodecformat",
              children: "OH_VideoCodecFormat"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_VideoCodecFormat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "枚举，表示视频编码格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_datatype",
              children: "OH_DataType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_DataType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "枚举，表示屏幕录制流的数据格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_videosourcetype",
              children: "OH_VideoSourceType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_VideoSourceType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "枚举，表示视频源格式。当前仅支持RGBA格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_containerformattype",
              children: "OH_ContainerFormatType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_ContainerFormatType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "枚举，表示屏幕录制生成的文件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avscreencapturestatecode",
              children: "OH_AVScreenCaptureStateCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVScreenCaptureStateCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "枚举，表示状态码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avscreencapturebuffertype",
              children: "OH_AVScreenCaptureBufferType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVScreenCaptureBufferType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "枚举，表示buffer类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avscreencapturefilterableaudiocontent",
              children: "OH_AVScreenCaptureFilterableAudioContent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVScreenCaptureFilterableAudioContent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "枚举，表示可过滤的音频类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avscreencapturecontentchangedevent",
              children: "OH_AVScreenCaptureContentChangedEvent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVScreenCaptureContentChangedEvent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "枚举，表示录屏内容变更事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avscreencapture_fillmode",
              children: "OH_AVScreenCapture_FillMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVScreenCapture_FillMode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像填充模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_screencapturehighlightmode",
              children: "OH_ScreenCaptureHighlightMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_ScreenCaptureHighlightMode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "枚举，表示屏幕录制高亮边框的模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_capturepickermode",
              children: "OH_CapturePickerMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_CapturePickerMode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "枚举，表示Picker显示模式。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "typedef关键字"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avscreencaptureonerror",
              children: "typedef void (*OH_AVScreenCaptureOnError)(OH_AVScreenCapture *capture, int32_t errorCode)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVScreenCaptureOnError"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["当OH_AVScreenCapture实例运行出错时，将调用函数指针。  从API version 12开始，推荐使用接口", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avscreencapture_onerror",
              children: "OH_AVScreenCapture_OnError"
            }), "替代。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avscreencaptureonaudiobufferavailable",
              children: "typedef void (*OH_AVScreenCaptureOnAudioBufferAvailable)(OH_AVScreenCapture *capture, bool isReady, OH_AudioCaptureSourceType type)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVScreenCaptureOnAudioBufferAvailable"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["当OH_AVScreenCapture实例操作期间音频缓存区可用时，将调用函数指针。  从API version 12开始，推荐使用接口", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avscreencapture_onbufferavailable",
              children: "OH_AVScreenCapture_OnBufferAvailable"
            }), "替代。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avscreencaptureonvideobufferavailable",
              children: "typedef void (*OH_AVScreenCaptureOnVideoBufferAvailable)(OH_AVScreenCapture *capture, bool isReady)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVScreenCaptureOnVideoBufferAvailable"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["当OH_AVScreenCapture实例操作期间视频缓存区可用时，将调用函数指针。  从API version 12开始，推荐使用接口", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avscreencapture_onbufferavailable",
              children: "OH_AVScreenCapture_OnBufferAvailable"
            }), "替代。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avscreencapture_onstatechange",
              children: "typedef void (*OH_AVScreenCapture_OnStateChange)(struct OH_AVScreenCapture *capture, OH_AVScreenCaptureStateCode stateCode, void *userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVScreenCapture_OnStateChange"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当OH_AVScreenCapture实例操作期间发生状态变更时，将调用函数指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avscreencapture_onerror",
              children: "typedef void (*OH_AVScreenCapture_OnError)(OH_AVScreenCapture *capture, int32_t errorCode, void *userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVScreenCapture_OnError"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当OH_AVScreenCapture实例操作期间发生错误时，将调用函数指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avscreencapture_onbufferavailable",
              children: "typedef void (*OH_AVScreenCapture_OnBufferAvailable)(OH_AVScreenCapture *capture, OH_AVBuffer *buffer, OH_AVScreenCaptureBufferType bufferType, int64_t timestamp, void *userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVScreenCapture_OnBufferAvailable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当OH_AVScreenCapture实例操作期间音频或视频缓存区可用时，将调用该函数指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avscreencapture_ondisplayselected",
              children: "typedef void (*OH_AVScreenCapture_OnDisplaySelected)(OH_AVScreenCapture *capture, uint64_t displayId, void *userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVScreenCapture_OnDisplaySelected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当录屏事件开始时，将调用函数指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avscreencapture_oncapturecontentchanged",
              children: "typedef void (*OH_AVScreenCapture_OnCaptureContentChanged)(OH_AVScreenCapture* capture, OH_AVScreenCaptureContentChangedEvent event, OH_Rect* area, void *userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVScreenCapture_OnCaptureContentChanged"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当OH_AVScreenCapture实例操作期间录屏内容变化时，将调用函数指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avscreencapture_onuserselected",
              children: "typedef void (*OH_AVScreenCapture_OnUserSelected)(OH_AVScreenCapture* capture, OH_AVScreenCapture_UserSelectionInfo* selections, void *userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVScreenCapture_OnUserSelected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当用户在授权界面（选择界面）选择参数时，功能接口将参数返回给应用程序。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_capturemode",
      children: "OH_CaptureMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_CaptureMode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "枚举，表示屏幕录制的不同模式。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_CAPTURE_HOME_SCREEN = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "录制主屏幕。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_CAPTURE_SPECIFIED_SCREEN = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "录制指定屏幕。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_CAPTURE_SPECIFIED_WINDOW = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "录制指定窗口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_CAPTURE_INVAILD = -1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无效模式。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiocapturesourcetype",
      children: "OH_AudioCaptureSourceType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_AudioCaptureSourceType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "枚举，表示屏幕录制时的音频源类型。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_SOURCE_INVALID = -1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无效音频源。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_SOURCE_DEFAULT = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认音频源，默认为麦克风。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MIC = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "麦克风录制的外部音频流。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_ALL_PLAYBACK = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统播放的所有内部音频流。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_APP_PLAYBACK = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定应用播放的内部音频流。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_audiocodecformat",
      children: "OH_AudioCodecFormat"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_AudioCodecFormat\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "枚举，表示音频编码格式。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AUDIO_DEFAULT = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认音频编码，默认为AAC_LC。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AAC_LC = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AAC_LC音频编码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AUDIO_CODEC_FORMAT_BUTT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无效格式。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_videocodecformat",
      children: "OH_VideoCodecFormat"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_VideoCodecFormat\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "枚举，表示视频编码格式。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_VIDEO_DEFAULT = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认视频编码，默认为H.264。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_H264 = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "H.264。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_H265 = 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "H.265/HEVC。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MPEG4 = 6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MPEG4。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_VP8 = 8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VP8。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_VP9 = 10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VP9。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_VIDEO_CODEC_FORMAT_BUTT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无效格式。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_datatype",
      children: "OH_DataType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_DataType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "枚举，表示屏幕录制流的数据格式。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_ORIGINAL_STREAM = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "原始流格式，如YUV/RGBA/PCM等。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_ENCODED_STREAM = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "编码格式，如H264/AAC等。当前版本暂不支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_CAPTURE_FILE = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "保存文件格式，支持mp4。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_INVAILD = -1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无效格式。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_videosourcetype",
      children: "OH_VideoSourceType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_VideoSourceType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "枚举，表示视频源格式。当前仅支持RGBA格式。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_VIDEO_SOURCE_SURFACE_YUV = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "YUV格式。当前版本暂不支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_VIDEO_SOURCE_SURFACE_ES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "raw格式。当前版本暂不支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_VIDEO_SOURCE_SURFACE_RGBA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RGBA格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_VIDEO_SOURCE_BUTT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无效格式。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_containerformattype",
      children: "OH_ContainerFormatType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_ContainerFormatType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "枚举，表示屏幕录制生成的文件类型。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CFT_MPEG_4A = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频格式 m4a。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CFT_MPEG_4 = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频格式 mp4。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avscreencapturestatecode",
      children: "OH_AVScreenCaptureStateCode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_AVScreenCaptureStateCode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "枚举，表示状态码。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_SCREEN_CAPTURE_STATE_STARTED = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "已开始录屏。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_SCREEN_CAPTURE_STATE_CANCELED = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "已取消录屏。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_SCREEN_CAPTURE_STATE_STOPPED_BY_USER = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "已停止录屏。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_SCREEN_CAPTURE_STATE_INTERRUPTED_BY_OTHER = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "录屏被其他录屏中断。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_SCREEN_CAPTURE_STATE_STOPPED_BY_CALL = 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "录屏被通话中断。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_SCREEN_CAPTURE_STATE_MIC_UNAVAILABLE = 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "麦克风不可用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_SCREEN_CAPTURE_STATE_MIC_MUTED_BY_USER = 6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "麦克风被静音。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_SCREEN_CAPTURE_STATE_MIC_UNMUTED_BY_USER = 7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "麦克风被取消静音。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_SCREEN_CAPTURE_STATE_ENTER_PRIVATE_SCENE = 8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "进入隐私界面。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_SCREEN_CAPTURE_STATE_EXIT_PRIVATE_SCENE = 9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "隐私界面退出。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_SCREEN_CAPTURE_STATE_STOPPED_BY_USER_SWITCHES = 10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统用户切换，录屏中断。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avscreencapturebuffertype",
      children: "OH_AVScreenCaptureBufferType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_AVScreenCaptureBufferType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "枚举，表示buffer类型。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_SCREEN_CAPTURE_BUFFERTYPE_VIDEO = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_SCREEN_CAPTURE_BUFFERTYPE_AUDIO_INNER = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内录音频数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_SCREEN_CAPTURE_BUFFERTYPE_AUDIO_MIC = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "麦克风音频数据。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avscreencapturefilterableaudiocontent",
      children: "OH_AVScreenCaptureFilterableAudioContent"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_AVScreenCaptureFilterableAudioContent\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "枚举，表示可过滤的音频类型。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_SCREEN_CAPTURE_NOTIFICATION_AUDIO = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通知音。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_SCREEN_CAPTURE_CURRENT_APP_AUDIO = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用自身声音。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avscreencapturecontentchangedevent",
      children: "OH_AVScreenCaptureContentChangedEvent"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_AVScreenCaptureContentChangedEvent\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "枚举，表示录屏内容变更事件。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_SCREEN_CAPTURE_CONTENT_HIDE = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "录屏内容变为隐藏。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_SCREEN_CAPTURE_CONTENT_VISIBLE = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "录屏内容变为可见。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_SCREEN_CAPTURE_CONTENT_UNAVAILABLE = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "录屏内容状态变化为不可用，如录屏窗口关闭。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avscreencapture_fillmode",
      children: "OH_AVScreenCapture_FillMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_AVScreenCapture_FillMode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图像填充模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_SCREENCAPTURE_FILLMODE_ASPECT_SCALE_FIT = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "保持图像原始宽高比匹配目标图像大小，若比例不一致可能存在黑边。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_SCREENCAPTURE_FILLMODE_SCALE_TO_FILL = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像拉伸匹配目标图像大小，若比例不一致图像变形。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_screencapturehighlightmode",
      children: "OH_ScreenCaptureHighlightMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_ScreenCaptureHighlightMode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "枚举，表示屏幕录制高亮边框的模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HIGHLIGHT_MODE_CLOSED = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认模式，用方形全包边框高亮显示录制区域。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HIGHLIGHT_MODE_CORNER_WRAP = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用四角包裹边框高亮显示录制区域。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_capturepickermode",
      children: "OH_CapturePickerMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_CapturePickerMode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "枚举，表示Picker显示模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_CAPTURE_PICKER_MODE_WINDOW_ONLY = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "仅显示窗口模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_CAPTURE_PICKER_MODE_SCREEN_ONLY = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "仅显示屏幕模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_CAPTURE_PICKER_MODE_SCREEN_AND_WINDOW = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示屏幕和窗口模式（默认模式）。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avscreencaptureonerror",
      children: "OH_AVScreenCaptureOnError()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_AVScreenCaptureOnError)(OH_AVScreenCapture *capture, int32_t errorCode)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当OH_AVScreenCapture实例运行出错时，将调用函数指针。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 12开始，推荐使用接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_avscreencapture_onerror",
        children: "OH_AVScreenCapture_OnError"
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
              children: "OH_AVScreenCapture"
            }), " *capture"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_AVScreenCapture实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t errorCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定错误码。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avscreencaptureonaudiobufferavailable",
      children: "OH_AVScreenCaptureOnAudioBufferAvailable()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_AVScreenCaptureOnAudioBufferAvailable)(OH_AVScreenCapture *capture, bool isReady, OH_AudioCaptureSourceType type)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当OH_AVScreenCapture实例操作期间音频缓存区可用时，将调用函数指针。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 12开始，推荐使用接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_avscreencapture_onbufferavailable",
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
              children: "OH_AVScreenCapture"
            }), " *capture"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_AVScreenCapture实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool isReady"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频缓存区是否可用。true表示音频缓存区可用，false表示音频缓存区不可用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_audiocapturesourcetype",
              children: "OH_AudioCaptureSourceType"
            }), " type"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频源类型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avscreencaptureonvideobufferavailable",
      children: "OH_AVScreenCaptureOnVideoBufferAvailable()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_AVScreenCaptureOnVideoBufferAvailable)(OH_AVScreenCapture *capture, bool isReady)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当OH_AVScreenCapture实例操作期间视频缓存区可用时，将调用函数指针。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 12开始，推荐使用接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_avscreencapture_onbufferavailable",
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
              children: "OH_AVScreenCapture"
            }), " *capture"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_AVScreenCapture实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool isReady"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频缓存区是否可用。true表示视频缓存区可用，false表示视频缓存区不可用。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avscreencapture_onstatechange",
      children: "OH_AVScreenCapture_OnStateChange()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_AVScreenCapture_OnStateChange)(struct OH_AVScreenCapture *capture, OH_AVScreenCaptureStateCode stateCode, void *userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当OH_AVScreenCapture实例操作期间发生状态变更时，将调用函数指针。"
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
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-avscreencapture-oh-avscreencapture/capi-avscreencapture-oh-avscreencapture",
              children: "OH_AVScreenCapture"
            }), " *capture"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_AVScreenCapture实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avscreencapturestatecode",
              children: "OH_AVScreenCaptureStateCode"
            }), " stateCode"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定状态码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void *userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向应用设置该回调处理方法时提供的自定义数据的指针。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avscreencapture_onerror",
      children: "OH_AVScreenCapture_OnError()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_AVScreenCapture_OnError)(OH_AVScreenCapture *capture, int32_t errorCode, void *userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当OH_AVScreenCapture实例操作期间发生错误时，将调用函数指针。"
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
              children: "OH_AVScreenCapture"
            }), " *capture"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_AVScreenCapture实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t errorCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定错误码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void *userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向应用设置该回调处理方法时提供的自定义数据的指针。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avscreencapture_onbufferavailable",
      children: "OH_AVScreenCapture_OnBufferAvailable()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_AVScreenCapture_OnBufferAvailable)(OH_AVScreenCapture *capture, OH_AVBuffer *buffer, OH_AVScreenCaptureBufferType bufferType, int64_t timestamp, void *userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当OH_AVScreenCapture实例操作期间音频或视频缓存区可用时，将调用该函数指针。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              children: "OH_AVScreenCapture"
            }), " *capture"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_AVScreenCapture实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-core-oh-avbuffer/capi-core-oh-avbuffer",
              children: "OH_AVBuffer"
            }), " *buffer"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_AVBuffer缓存区实例的指针，该回调方法执行结束返回后，数据缓存区不再有效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avscreencapturebuffertype",
              children: "OH_AVScreenCaptureBufferType"
            }), " bufferType"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可用缓存区的数据类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int64_t timestamp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "时间戳，单位纳秒。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void *userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向应用设置该回调处理方法时提供的自定义数据的指针。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avscreencapture_ondisplayselected",
      children: "OH_AVScreenCapture_OnDisplaySelected()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_AVScreenCapture_OnDisplaySelected)(OH_AVScreenCapture *capture, uint64_t displayId, void *userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当录屏事件开始时，将调用函数指针。"
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
              children: "OH_AVScreenCapture"
            }), " *capture"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_AVScreenCapture实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint64_t displayId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "录屏屏幕的Id。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void *userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向应用设置该回调处理方法时提供的自定义数据的指针。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avscreencapture_oncapturecontentchanged",
      children: "OH_AVScreenCapture_OnCaptureContentChanged()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_AVScreenCapture_OnCaptureContentChanged)(OH_AVScreenCapture* capture, OH_AVScreenCaptureContentChangedEvent event, OH_Rect* area, void *userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当OH_AVScreenCapture实例操作期间录屏内容变化时，将调用函数指针。"
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
              children: "OH_AVScreenCapture"
            }), "* capture"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_AVScreenCapture实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avscreencapturecontentchangedevent",
              children: "OH_AVScreenCaptureContentChangedEvent"
            }), " event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "录屏内容变更事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-avscreencapture-oh-rect/capi-avscreencapture-oh-rect",
              children: "OH_Rect"
            }), "* area"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "录屏内容可见时，对应位置信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void *userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向应用设置该回调处理方法时提供的自定义数据的指针。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avscreencapture_onuserselected",
      children: "OH_AVScreenCapture_OnUserSelected()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_AVScreenCapture_OnUserSelected)(OH_AVScreenCapture* capture, OH_AVScreenCapture_UserSelectionInfo* selections, void *userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当用户在授权界面（选择界面）选择参数时，功能接口将参数返回给应用程序。"
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
              children: "OH_AVScreenCapture"
            }), "* capture"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_AVScreenCapture实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/screencapture-oh-avscreencapture-userselectioninfo/screencapture-oh-avscreencapture-userselectioninfo",
              children: "OH_AVScreenCapture_UserSelectionInfo"
            }), "* selections"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户在授权界面选择的录制参数信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void *userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向用户数据的指针。"
          })]
        })]
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