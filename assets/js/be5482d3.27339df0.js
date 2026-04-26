"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["748451"], {
187245(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_audio_kit_audio_recording_using_ohaudio_for_recording_using_ohaudio_for_recording_md_be5_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-audio-kit-audio-recording-using-ohaudio-for-recording-using-ohaudio-for-recording-md-be5.json
var site_docs_audio_kit_audio_recording_using_ohaudio_for_recording_using_ohaudio_for_recording_md_be5_namespaceObject = JSON.parse('{"id":"audio-kit/audio-recording/using-ohaudio-for-recording/using-ohaudio-for-recording","title":"推荐使用OHAudio开发音频录制功能(C/C++)","description":"OHAudio是系统在API version 10中引入的一套C API，此API在设计上实现归一，同时支持普通音频通路和低时延通路。仅支持PCM格式，适用于依赖Native层实现音频输入功能的场景。","source":"@site/docs/audio-kit/audio-recording/using-ohaudio-for-recording/using-ohaudio-for-recording.md","sourceDirName":"audio-kit/audio-recording/using-ohaudio-for-recording","slug":"/audio-kit/audio-recording/using-ohaudio-for-recording/","permalink":"/harmonyos-docs-site/audio-kit/audio-recording/using-ohaudio-for-recording/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"推荐使用OHAudio开发音频录制功能(C/C++)","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/using-ohaudio-for-recording","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"音频录制开发概述","permalink":"/harmonyos-docs-site/audio-kit/audio-recording/audio-recording-overview/"},"next":{"title":"使用AudioCapturer开发音频录制功能(ArkTs)","permalink":"/harmonyos-docs-site/audio-kit/audio-recording/using-audiocapturer-for-recording/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/audio-kit/audio-recording/using-ohaudio-for-recording/using-ohaudio-for-recording.md


const frontMatter = {
	title: '推荐使用OHAudio开发音频录制功能(C/C++)',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/using-ohaudio-for-recording',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '推荐使用OHAudio开发音频录制功能(C/C++)';

const assets = {

};



const toc = [{
  "value": "使用入门",
  "id": "使用入门",
  "level": 2
}, {
  "value": "在 CMake 脚本中链接动态库",
  "id": "在-cmake-脚本中链接动态库",
  "level": 3
}, {
  "value": "添加头文件",
  "id": "添加头文件",
  "level": 3
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "音频流构造器",
  "id": "音频流构造器",
  "level": 3
}, {
  "value": "实现音频录制",
  "id": "实现音频录制",
  "level": 3
}, {
  "value": "设置低时延模式",
  "id": "设置低时延模式",
  "level": 3
}, {
  "value": "设置静音打断模式",
  "id": "设置静音打断模式",
  "level": 3
}, {
  "value": "回声消除功能",
  "id": "回声消除功能",
  "level": 3
}, {
  "value": "注意事项",
  "id": "注意事项",
  "level": 2
}, {
  "value": "示例代码",
  "id": "示例代码",
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
        id: "推荐使用ohaudio开发音频录制功能cc",
        children: "推荐使用OHAudio开发音频录制功能(C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OHAudio是系统在API version 10中引入的一套C API，此API在设计上实现归一，同时支持普通音频通路和低时延通路。仅支持PCM格式，适用于依赖Native层实现音频输入功能的场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OHAudio音频录制状态变化示意图："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(862643)/* ["default"] */.A) + "",
        width: "708",
        height: "622"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用入门",
      children: "使用入门"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者要使用OHAudio提供的录制能力，需要添加对应的头文件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下各步骤示例为片段代码，可通过示例代码右下方链接获取", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/openharmony/applications_app_samples/blob/master/code/DocsSample/Media/Audio/AudioCapturerSampleC",
        children: "完整示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在-cmake-脚本中链接动态库",
      children: "在 CMake 脚本中链接动态库"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "target_link_libraries(sample PUBLIC libohaudio.so)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "添加头文件",
      children: "添加头文件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者通过引入<", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostreambuilder-h/capi-native-audiostreambuilder-h",
        children: "native_audiostreambuilder.h"
      }), ">和<", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiocapturer-h/capi-native-audiocapturer-h",
        children: "native_audiocapturer.h"
      }), ">头文件，使用音频录制相关API。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <ohaudio/native_audiocapturer.h>\n#include <ohaudio/native_audiostreambuilder.h>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细的API说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-module/capi-ohaudio/capi-ohaudio",
        children: "OHAudio"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "音频流构造器",
      children: "音频流构造器"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["OHAudio提供OH_AudioStreamBuilder接口，遵循构造器设计模式，用于构建音频流。开发者需要根据业务场景，指定对应的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiostream_type",
        children: "OH_AudioStream_Type"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OH_AudioStream_Type包含两种类型："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AUDIOSTREAM_TYPE_RENDERER"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AUDIOSTREAM_TYPE_CAPTURER"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostreambuilder-h/capi-native-audiostreambuilder-h#oh_audiostreambuilder_create",
        children: "OH_AudioStreamBuilder_Create"
      }), "创建构造器示例："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioStreamBuilder* builder;\nOH_AudioStreamBuilder_Create(&builder, streamType);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在音频业务结束之后，开发者应该执行", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostreambuilder-h/capi-native-audiostreambuilder-h#oh_audiostreambuilder_destroy",
        children: "OH_AudioStreamBuilder_Destroy"
      }), "接口来销毁构造器。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioStreamBuilder_Destroy(builder);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以通过以下几个步骤来实现一个简单的录制功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "实现音频录制",
      children: "实现音频录制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建构造器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_AudioStreamBuilder* builder;\nOH_AudioStreamBuilder_Create(&builder, AUDIOSTREAM_TYPE_CAPTURER);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置音频流参数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建音频录制构造器后，可以设置音频流所需要的参数，可以参考下面的案例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 设置音频采样率。\nconst int SAMPLING_RATE_48K = 48000;\nOH_AudioStreamBuilder_SetSamplingRate(builder, SAMPLING_RATE_48K);\n// 设置音频声道。\nconst int channelCount = 2;\nOH_AudioStreamBuilder_SetChannelCount(builder, channelCount);\n// 设置音频采样格式。\nOH_AudioStreamBuilder_SetSampleFormat(builder, AUDIOSTREAM_SAMPLE_S16LE);\n// 设置音频流的编码类型。\nOH_AudioStreamBuilder_SetEncodingType(builder, AUDIOSTREAM_ENCODING_TYPE_RAW);\n// 设置输入音频流的工作场景。\nOH_AudioStreamBuilder_SetCapturerInfo(builder, AUDIOSTREAM_SOURCE_TYPE_MIC);\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["注意，音频录制的音频数据需要通过回调接口读入，开发者要实现回调接口，从API version 12开始支持使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostreambuilder-h/capi-native-audiostreambuilder-h#oh_audiostreambuilder_setcapturerreaddatacallback",
            children: "OH_AudioStreamBuilder_SetCapturerReadDataCallback"
          }), "设置回调函数。回调函数的声明请查看", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiocapturer-h/capi-native-audiocapturer-h#oh_audiocapturer_onreaddatacallback",
            children: "OH_AudioCapturer_OnReadDataCallback"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置音频回调函数。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["多音频并发处理可参考文档", (0,jsx_runtime.jsx)(_components.a, {
            href: "/audio-kit/audio-session/audio-playback-concurrency",
            children: "处理音频焦点事件"
          }), "，仅接口语言差异。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "void MyOnReadData_NewAPI(\n    OH_AudioCapturer* capturer,\n    void* userData,\n    void* audioData,\n    int32_t audioDataSize)\n{\n    // 从buffer中取出length长度的录音数据。\n}\n\nvoid MyOnInterruptEvent_NewAPI(\n    OH_AudioCapturer* capturer,\n    void* userData,\n    OH_AudioInterrupt_ForceType type,\n    OH_AudioInterrupt_Hint hint)\n{\n    // 根据type和hint表示的音频中断信息，更新录制器状态和界面。\n}\n\nvoid MyOnError_NewAPI(\n    OH_AudioCapturer* capturer,\n    void* userData,\n    OH_AudioStream_Result error)\n{\n    // 根据error表示的音频异常信息，做出相应的处理。\n}\n// ...\n    // 配置音频中断事件回调函数。\n    OH_AudioCapturer_OnInterruptCallback OnInterruptCb = MyOnInterruptEvent_NewAPI;\n    OH_AudioStreamBuilder_SetCapturerInterruptCallback(builder, OnInterruptCb, nullptr);\n\n    // 配置音频异常回调函数。\n    OH_AudioCapturer_OnErrorCallback OnErrorCb = MyOnError_NewAPI;\n    OH_AudioStreamBuilder_SetCapturerErrorCallback(builder, OnErrorCb, nullptr);\n\n    // 配置音频输入流的回调。\n    OH_AudioCapturer_OnReadDataCallback OnReadDataCb = MyOnReadData_NewAPI;\n    OH_AudioStreamBuilder_SetCapturerReadDataCallback(builder, OnReadDataCb, nullptr);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "构造录制音频流。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_AudioCapturer* audioCapturer;\nOH_AudioStreamBuilder_GenerateCapturer(builder, &audioCapturer);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用音频流。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "录制音频流中包含以下接口，用来实现对音频流的控制。"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "接口"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "OH_AudioStream_Result OH_AudioCapturer_Start(OH_AudioCapturer* capturer)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "开始录制。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "OH_AudioStream_Result OH_AudioCapturer_Pause(OH_AudioCapturer* capturer)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "暂停录制。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "OH_AudioStream_Result OH_AudioCapturer_Stop(OH_AudioCapturer* capturer)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "停止录制。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "OH_AudioStream_Result OH_AudioCapturer_Flush(OH_AudioCapturer* capturer)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "释放缓存数据。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "OH_AudioStream_Result OH_AudioCapturer_Release(OH_AudioCapturer* capturer)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "释放录制实例。"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(720198)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "音频流控制接口执行会有耗时（例如OH_AudioCapturer_Stop接口单次执行普遍超过50ms），应避免在主线程中直接调用，以免造成界面显示卡顿。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "释放构造器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "构造器不再使用时，需要释放相关资源。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_AudioStreamBuilder_Destroy(builder);\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置低时延模式",
      children: "设置低时延模式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当设备支持低时延通路时，开发者可以使用低时延模式创建音频录制构造器，获得更低时延的音频体验。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发流程与普通录制（", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%AE%9E%E7%8E%B0%E9%9F%B3%E9%A2%91%E5%BD%95%E5%88%B6",
        children: "实现音频录制"
      }), "）场景一致，仅需要在步骤1创建音频录制构造器时，调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostreambuilder-h/capi-native-audiostreambuilder-h#oh_audiostreambuilder_setlatencymode",
        children: "OH_AudioStreamBuilder_SetLatencyMode()"
      }), "设置低时延模式。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(627217)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当音频录制场景", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiostream_sourcetype",
          children: "OH_AudioStream_SourceType"
        }), "为AUDIOSTREAM_SOURCE_TYPE_VOICE_COMMUNICATION时，不支持主动设置低时延模式，系统会根据设备的能力，决策输入的音频通路。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "部分场景（如通话来电）下系统能力受限会回落至普通音频通路模式，缓冲区大小也会发生变化，此时应同普通音频通路模式一样根据缓冲区大小将缓冲区中数据一次性全部取走，否则录制的数据会出现不连续，导致杂音。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioStream_LatencyMode latencyMode = AUDIOSTREAM_LATENCY_MODE_FAST;\nOH_AudioStreamBuilder_SetLatencyMode(builder, latencyMode);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置静音打断模式",
      children: "设置静音打断模式"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["静音打断模式提供将打断策略从停止录音切换为静音录制的功能，可以实现录音全程不被系统基于焦点并发规则打断的效果，并且录音过程中也不影响其他应用启动录音。开发者在创建音频录制构造器时，调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostreambuilder-h/capi-native-audiostreambuilder-h#oh_audiostreambuilder_setcapturerwillmutewheninterrupted",
        children: "OH_AudioStreamBuilder_SetCapturerWillMuteWhenInterrupted"
      }), "接口设置是否开启静音打断模式。默认不开启，此时由音频焦点策略管理并发音频流的执行顺序。开启后，被其他应用打断导致停止或暂停录制时会进入静音录制状态，在此状态下录制的音频没有声音。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "回声消除功能",
      children: "回声消除功能"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["回声消除功能可在支持的设备上有效消除录音过程中的回声干扰，提升音频采集质量。开发者可通过指定特定的音频输入源类型", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiostream_sourcetype",
        children: "OH_AudioStream_SourceType"
      }), "（AUDIOSTREAM_SOURCE_TYPE_VOICE_COMMUNICATION、AUDIOSTREAM_SOURCE_TYPE_LIVE）来启用该功能，系统将会自动对采集的音频信号进行回声消除处理。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在启用前，建议先调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-stream-manager-h/capi-native-audio-stream-manager-h#oh_audiostreammanager_isacousticechocancelersupported",
        children: "OH_AudioStreamManager_IsAcousticEchoCancelerSupported"
      }), "接口（从API version 20开始支持）查询当前设备对音频输入源类型", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiostream_sourcetype",
        children: "OH_AudioStream_SourceType"
      }), "是否支持回声消除功能，以确保功能的可用性。若支持，则可在创建音频录制构造器时通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostreambuilder-h/capi-native-audiostreambuilder-h#oh_audiostreambuilder_setcapturerinfo",
        children: "OH_AudioStreamBuilder_SetCapturerInfo"
      }), " 设置相应的音频输入源类型，从而激活回声消除处理流程。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "注意事项",
      children: "注意事项"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 12开始", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "不再推荐"
        })
      }), "使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiocapturer-callbacks-struct/capi-ohaudio-oh-audiocapturer-callbacks-struct",
        children: "OH_AudioCapturer_Callbacks"
      }), "的方式设置音频回调函数。若必须使用，需要注意在设置音频回调函数时，通过下面两种方式中的任意一种来设置音频回调函数，避免不可预期的行为。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["方式1：请确保", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiocapturer-callbacks-struct/capi-ohaudio-oh-audiocapturer-callbacks-struct",
            children: "OH_AudioCapturer_Callbacks"
          }), "的每一个回调都被", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "自定义的回调方法"
            })
          }), "或", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "空指针"
            })
          }), "初始化。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "int32_t MyOnReadData_Legacy(\n    OH_AudioCapturer* capturer,\n    void* userData,\n    void* buffer,\n    int32_t length)\n{\n    // 从buffer中取出length长度的录音数据。\n    return 0;\n}\nint32_t MyOnInterruptEvent_Legacy(\n    OH_AudioCapturer* capturer,\n    void* userData,\n    OH_AudioInterrupt_ForceType type,\n    OH_AudioInterrupt_Hint hint)\n{\n    // 根据type和hint表示的音频中断信息，更新录制器状态和界面。\n    return 0;\n}\n// ...\n    // 配置回调函数，如果需要监听，则赋值。\n    callbacks.OH_AudioCapturer_OnReadData = MyOnReadData_Legacy;\n    callbacks.OH_AudioCapturer_OnInterruptEvent = MyOnInterruptEvent_Legacy;\n    \n    // （必选）如果不需要监听，使用空指针初始化。\n    callbacks.OH_AudioCapturer_OnStreamEvent = nullptr;\n    callbacks.OH_AudioCapturer_OnError = nullptr;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "方式2：使用前，初始化并清零结构体。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "int32_t MyOnReadData_Legacy(\n    OH_AudioCapturer* capturer,\n    void* userData,\n    void* buffer,\n    int32_t length)\n{\n    // 从buffer中取出length长度的录音数据。\n    return 0;\n}\nint32_t MyOnInterruptEvent_Legacy(\n    OH_AudioCapturer* capturer,\n    void* userData,\n    OH_AudioInterrupt_ForceType type,\n    OH_AudioInterrupt_Hint hint)\n{\n    // 根据type和hint表示的音频中断信息，更新录制器状态和界面。\n    return 0;\n}\n// ...\n    // 使用前，初始化并清零结构体。\n    OH_AudioCapturer_Callbacks callbacks = {0};\n    // 配置需要的回调函数。\n    callbacks.OH_AudioCapturer_OnReadData = MyOnReadData_Legacy;\n    callbacks.OH_AudioCapturer_OnInterruptEvent = MyOnInterruptEvent_Legacy;\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/HarmonyOS_Samples/audio-native",
          children: "音频低时延录制与播放"
        })
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
862643(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958530-d59e669c0108f8cfce32dcdd672af5af.png");

},
720198(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAIQUlEQVRo3u2ae1DTVxbHP4gmPMLDhKcPEkAelqW2CsWyikLFik6VHV91hrGKdZmiOz6KY92hI+3Stajja6qWioiIi6i1rFWLUhCRUqkIVpYFBFHQBgUJ8taAsn9EwqYgVsA1XXNmMpPc+/3dc+/9/s6555wbvaa8YRHAenSiVTJItwU6YnSiI0ZHjE50xOiI0YkWyODnraC1TcLOb15juPUQAr0vYjikVrfr2kDMup2OxMQfAKAhchEh088MuI5d+0WEvtf0xP7SW6M4dQ78POtxd67ps56vDlnToW/M9coW1ixWIBErf5/EFMm9iYk/SnhYEPLbTXwYHsecSZORGF8dMB2RuyzJKRrCvyuFfLKsscfN+ktEFVl5pYQGebNx9dOJ+e6sSY/t2ZdbOJ5RiFKpxHCwC2+8KuwRF+DbqN3EfLTxFjKplLk+d1E0mxGbAH/bY862lQOnI6eghR/yKzirVNKhN46F0+vxGtuigXnFyZSsPPi5qIHSciFODg96HfPgGTHJp3/sFbNpf0mP7WEhfgT4FmsvMRmF/qRl7mdn1BLMhLmYCasIDwsicnMCIfPmMHpY9oDo+XZ3M8si3TmRUU7iiQL0OlwQWY3VwEzxaeTUOWsEgkEkpdrwpxkj1X0ig1akFpc08O7OQkbJ/Ghpvk/yyULkdfX4jHPgDQ+ZBi7l+2L+dU3OhHGjGe9hC4DtALm350JMa5uE5eEZyKRS3nLvcltzfe4SuRmi9jQQN4DVuZ3hVdhaulJVo8TdxZB3lqT3iCssk1NYBrHHStVtLlILvvuqCxN9xAFzUTvmAOJBSO2GIq+rR2xhjWhIEyYmAgBqFA/p0DcCwFDwQIOQQ6eG8e50eb/WpPc8ipiJ56axdFUsR6IX4SnL57rCFQB7cTEnL3uwbO1eThx4j8luqf3WlXzGAluLFrX7ik+240yOngamuUVJ6vlLuDo74mpvpTnAw0YSNirUPx3eVlJdc7dfcwoL8SMipFi7LKa22Zmlq2KZPXMqnrJ8Pj1gT2xCEgBR6xczy+sqMqmU5eEZXDws6Vf4nHzGgn98b0zbgyHMKjdg0RwFCwMrWRioiYs+4kDqeXC1tyJhQ0WvY659X/US5f7ct+jNY4wlZsYN2ufKtidZA7B8wVDgDrEJyeq+3XHpzPc2Z9NffZkbEkdydjALJqX0WZehkRENdffIulSEvNqRW9WWhIfW9Gv+IXPLATifJ8VmhO0zPavfXkfI3BLty/yL5N5s+SKJFR/Mx17c3ZQd7FQL9ZTlM3vmVJauiqW22bnP+t6eUElMpJCJHq4Ullyj+MbDAVtLdl4pX+49Ru0vpYgG3+v1U1l2lS/3HuOX2/e1M4+J2qMy4eCAenWbTCrlRkXF4+82wHW1RX19XGVhnwb3Pa8ZYV1NwucC1m1zZ8NKVf6wOsoWU3MzNUZRryKsqbWDiGhXjeeHmdXx53fvPHF8c5OOp0ZaFYZ62ptgZhT6c/SfXeFxp/hNfJ3Yx8QMsxGp2+3Fxaz4YD5bvkhiwbT+h89rFjWpk8trN9soSL/SDZN5IY8rRaYabaHzHXp3T6bOlFY/xYUZmwAF2kdMa5uErXtKuoXHvybD1lIzUw4OqGf7bog+3N6vpHNfshXpF5WYGLSStLWRHRFSmu53WcaRk3fZHJ3OJC93Itc4ajxrb9X7mXC1IBdrC8NeMTdutWinxSRne5KWGUvcjiUY6Odq9P03GTIbTZdgJqwiav1i1n6yj0D/vofPldX6ZOZcJnjem0Bjt4QxS6yyCmMjAW4jsp5p7PSfKn+fRczaZmc+25aG38TxTHbJ7db/il1XcVEi6l5onOVVxm6plK17SvDa1Lfw+frNZgCchrcNyKaczrLDZ0w1U70lnM+D9kfg5qDP3XsdnM5qwNxsCKsXql6465Ud2NvpUVcP35ytJu6omEVzFC8+Ktt3ciQ3Kir4OFTaY7+9uJjZM6cSHhaEjai8W7+BfgMRH04hLfMCydmefar4/nCpGDcXR6b9sf9XCrUKAbsOtXA88xblcgMa28QknirB0ETMO5PbsLe34VKRnMOpAgJ8G0k8/YCz+RISU9pIy7lJXpkJtQrBi7WYIrk3EZ8fIDgosMfwuFOWzmjEWvzkE3SySy5+E8fz2bY0pno4P1P1uUxuiFKpxEVmRllFMwdT7btheovKfh2ZbT84lLTsfN7yfpXw0BqC1qleuOKye4TMbWF5uwiBvjMyayWrNogpLL+Kra0FcX9/xOwVdsQe/hH9jj+wdZ3ixRETfbgdgBXznhy/1zXoMWdVHlYSEV9vGclQ044ecR+HSvFdcIF9J30Im/fbiSm6pnKPzjIh0Ez8sSs94qwsLbhSVMaVou59nZFZrULAxYJWBAIBMyboA2BkoJrv9TsigtY9vg7Qh9LbUFhWjVKpRDZciESsZMHMEQgNDLjXqEetQtCv+5o+E5NR6E9M/H6i1i/GTJj3RFx+oWph1bVN1NXDUFOe6PKCgwKJ+PwAMyb8tvC5tFyItWQwHm6j8PeswWtsC986+T3zWjojM4lYyY6P9EhKGa22oKCA+9y/P5ZHdM9VnOzM8X/Tm9mTq9VVg9ccjbpdO/xPi5izVtpxraKKlN12GOj3XhvKK1QtaqxbR6+4+ge2jJmZwvsLA9m28ideZunT4Z94bhppmRdYEzrlqaR0EvI0UjrD5/CwIGLik8kt932piemTK8vJ7zrYTl72GNAJmRg/Urmpm0I8HHTEPJN4vS4mJh6Wrd37XCYlk0pxGvngpbYYPd2//f+Pzhid6IjREaMTHTE60RGjI0YnzyGPydBtg/bJfwCln/+4V4N0SAAAAABJRU5ErkJggg==");

},
627217(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

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