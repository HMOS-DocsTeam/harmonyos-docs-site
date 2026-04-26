"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["371095"], {
304234(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_audio_kit_audio_recording_audio_ear_monitor_audio_ear_monitor_md_2c8_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-audio-kit-audio-recording-audio-ear-monitor-audio-ear-monitor-md-2c8.json
var site_docs_audio_kit_audio_recording_audio_ear_monitor_audio_ear_monitor_md_2c8_namespaceObject = JSON.parse('{"id":"audio-kit/audio-recording/audio-ear-monitor/audio-ear-monitor","title":"实现音频耳返","description":"实现音频耳返的功能，可将音频实时传输到耳机中，让用户可以实时听到自己或者其他相关声音。","source":"@site/docs/audio-kit/audio-recording/audio-ear-monitor/audio-ear-monitor.md","sourceDirName":"audio-kit/audio-recording/audio-ear-monitor","slug":"/audio-kit/audio-recording/audio-ear-monitor/","permalink":"/harmonyos-docs-site/audio-kit/audio-recording/audio-ear-monitor/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"title":"实现音频耳返","sidebar_position":8,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/audio-ear-monitor","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"录音并发策略说明","permalink":"/harmonyos-docs-site/audio-kit/audio-recording/audio-recording-concurrency/"},"next":{"title":"实现音频低时延耳返","permalink":"/harmonyos-docs-site/audio-kit/audio-recording/audio-ear-monitor-loopback/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/audio-kit/audio-recording/audio-ear-monitor/audio-ear-monitor.md


const frontMatter = {
	title: '实现音频耳返',
	sidebar_position: 8,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/audio-ear-monitor',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '实现音频耳返';

const assets = {

};



const toc = [{
  "value": "使用前提",
  "id": "使用前提",
  "level": 2
}, {
  "value": "开发指导",
  "id": "开发指导",
  "level": 2
}, {
  "value": "创建音频录制",
  "id": "创建音频录制",
  "level": 3
}, {
  "value": "创建音频播放",
  "id": "创建音频播放",
  "level": 3
}, {
  "value": "设置低时延模式",
  "id": "设置低时延模式",
  "level": 3
}, {
  "value": "定义公共缓存和录制、播放函数",
  "id": "定义公共缓存和录制播放函数",
  "level": 3
}, {
  "value": "设置音频流参数",
  "id": "设置音频流参数",
  "level": 3
}, {
  "value": "设置录制回调函数",
  "id": "设置录制回调函数",
  "level": 3
}, {
  "value": "设置播放回调函数",
  "id": "设置播放回调函数",
  "level": 3
}, {
  "value": "构造录制音频流",
  "id": "构造录制音频流",
  "level": 3
}, {
  "value": "构造播放音频流",
  "id": "构造播放音频流",
  "level": 3
}, {
  "value": "使用音频流",
  "id": "使用音频流",
  "level": 3
}, {
  "value": "释放构造器",
  "id": "释放构造器",
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
    p: "p",
    pre: "pre",
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
        id: "实现音频耳返",
        children: "实现音频耳返"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "实现音频耳返的功能，可将音频实时传输到耳机中，让用户可以实时听到自己或者其他相关声音。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "常用于K歌类应用，将录制的人声和背景音乐实时送到耳机中，使用户通过反馈即时调整，获得更好的使用体验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用前提",
      children: "使用前提"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开发者可使用OHAudio提供的播放和录制能力相结合，将录制获取的音频数据作为播放的音频输入，实现耳返功能。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["实现参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/audio-kit/audio-playback/using-ohaudio-for-playback",
            children: "推荐使用OHAudio开发音频播放功能(C/C++)"
          }), "、", (0,jsx_runtime.jsx)(_components.a, {
            href: "/audio-kit/audio-recording/using-ohaudio-for-recording",
            children: "推荐使用OHAudio开发音频录制功能(C/C++)"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当前仅支持通过有线耳机实现耳返功能。音频由有线耳机采集并播放。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发指导",
      children: "开发指导"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下各步骤示例为片段代码，可通过示例代码右下方链接获取", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/openharmony/applications_app_samples/blob/master/code/DocsSample/Media/Audio/AudioCapturerSampleC",
        children: "完整示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "创建音频录制",
      children: "创建音频录制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过OHAudio提供OH_AudioStreamBuilder接口，遵循构造器设计模式，构建录制音频流。指定对应的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiostream_type",
        children: "OH_AudioStream_Type"
      }), ", 设置为AUDIOSTREAM_TYPE_CAPTURER。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioStreamBuilder* builder;\nOH_AudioStreamBuilder_Create(&builder, AUDIOSTREAM_TYPE_CAPTURER);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "创建音频播放",
      children: "创建音频播放"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过OHAudio提供OH_AudioStreamBuilder接口，遵循构造器设计模式，构建播放音频流。指定对应的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiostream_type",
        children: "OH_AudioStream_Type"
      }), ", AUDIOSTREAM_TYPE_RENDERER。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioStreamBuilder* builder;\nOH_AudioStreamBuilder_Create(&builder, AUDIOSTREAM_TYPE_RENDERER);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置低时延模式",
      children: "设置低时延模式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了实现更好的耳返功能，需要使得音频从录制到播放保持较低的时延，当设备支持低时延通路时，开发者需要使用低时延模式来进行录制和播放。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在创建音频录制构造器时调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostreambuilder-h/capi-native-audiostreambuilder-h#oh_audiostreambuilder_setlatencymode",
        children: "OH_AudioStreamBuilder_SetLatencyMode()"
      }), "设置低时延模式，播放和录制均按如下方式设置为低时延模式。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioStream_LatencyMode latencyMode = AUDIOSTREAM_LATENCY_MODE_FAST;\nOH_AudioStreamBuilder_SetLatencyMode(builder, latencyMode);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为实现实时耳返功能，需创建一个公共缓存区用于存储录制的数据，并及时从该缓存区获取数据写入播放构造器。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "定义公共缓存和录制播放函数",
      children: "定义公共缓存和录制、播放函数"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t MyOnReadData_Legacy(\n    OH_AudioCapturer* capturer,\n    void* userData,\n    void* buffer,\n    int32_t length)\n{\n    // 从buffer中取出length长度的录音数据。\n    return 0;\n}\n// ...\nint32_t MyOnWriteData(\n    OH_AudioRenderer* renderer,\n    void* userData,\n    void* buffer,\n    int32_t length)\n{\n    // 从公共缓存buffer中读取数据，并按length长度写入buffer。\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(55121)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用的公共缓存大小不应设置过大，以避免增加耳返时延，影响用户体验。开发者应根据时延要求和抗抖动要求，选择合适的缓存大小，确保用户体验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置音频流参数",
      children: "设置音频流参数"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以录制流参数设置为例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 设置音频采样率。\nconst int SAMPLING_RATE_48K = 48000;\nOH_AudioStreamBuilder_SetSamplingRate(builder, SAMPLING_RATE_48K);\n// 设置音频声道。\nconst int channelCount = 2;\nOH_AudioStreamBuilder_SetChannelCount(builder, channelCount);\n// 设置音频采样格式。\nOH_AudioStreamBuilder_SetSampleFormat(builder, AUDIOSTREAM_SAMPLE_S16LE);\n// 设置音频流的编码类型。\nOH_AudioStreamBuilder_SetEncodingType(builder, AUDIOSTREAM_ENCODING_TYPE_RAW);\n// 设置输入音频流的工作场景。\nOH_AudioStreamBuilder_SetCapturerInfo(builder, AUDIOSTREAM_SOURCE_TYPE_MIC);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于播放流，除了音频流的工作场景外，其余设置为和录制流相同的参数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "工作场景参数设置如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioStreamBuilder_SetRendererInfo(builder, AUDIOSTREAM_USAGE_MUSIC);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置录制回调函数",
      children: "设置录制回调函数"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t MyOnReadData_Legacy(\n    OH_AudioCapturer* capturer,\n    void* userData,\n    void* buffer,\n    int32_t length)\n{\n    // 从buffer中取出length长度的录音数据。\n    return 0;\n}\nint32_t MyOnInterruptEvent_Legacy(\n    OH_AudioCapturer* capturer,\n    void* userData,\n    OH_AudioInterrupt_ForceType type,\n    OH_AudioInterrupt_Hint hint)\n{\n    // 根据type和hint表示的音频中断信息，更新录制器状态和界面。\n    return 0;\n}\n\nint32_t MyOnStreamEvent_Legacy(\n    OH_AudioCapturer* capturer,\n    void* userData,\n    OH_AudioStream_Event event)\n{\n    // 根据event表示的音频流事件信息，更新录制器状态和界面。\n    return 0;\n}\n\nint32_t MyOnError_Legacy(\n    OH_AudioCapturer* capturer,\n    void* userData,\n    OH_AudioStream_Result error)\n{\n    // 根据error表示的音频异常信息，做出相应的处理。\n    return 0;\n}\n// ...\n    OH_AudioCapturer_Callbacks callbacks;\n    // 配置回调函数。\n    callbacks.OH_AudioCapturer_OnReadData = MyOnReadData_Legacy;\n    callbacks.OH_AudioCapturer_OnStreamEvent = MyOnStreamEvent_Legacy;\n    callbacks.OH_AudioCapturer_OnInterruptEvent = MyOnInterruptEvent_Legacy;\n    callbacks.OH_AudioCapturer_OnError = MyOnError_Legacy;\n\n    OH_AudioStreamBuilder_SetCapturerCallback(builder, callbacks, nullptr);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置播放回调函数",
      children: "设置播放回调函数"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t MyOnWriteData(\n    OH_AudioRenderer* renderer,\n    void* userData,\n    void* buffer,\n    int32_t length)\n{\n    // 从公共缓存BUFFER中读取数据，并按length长度写入buffer。\n    return 0;\n}\nint32_t MyOnStreamEvent_Renderer(\n    OH_AudioRenderer* renderer,\n    void* userData,\n    OH_AudioStream_Event event)\n{\n    // 根据event表示的音频流事件信息，更新播放器状态和界面。\n    return 0;\n}\n\nint32_t MyOnInterruptEvent_Renderer(\n    OH_AudioRenderer* renderer,\n    void* userData,\n    OH_AudioInterrupt_ForceType type,\n    OH_AudioInterrupt_Hint hint)\n{\n    // 根据type和hint表示的音频中断信息，更新播放器状态和界面。\n    return 0;\n}\n\nint32_t MyOnError_Renderer(\n    OH_AudioRenderer* renderer,\n    void* userData,\n    OH_AudioStream_Result error)\n{\n    // 根据error表示的音频异常信息，做出相应的处理。\n    return 0;\n}\n// ...\n    OH_AudioRenderer_Callbacks callbacks;\n    \n    // 配置回调函数。\n    callbacks.OH_AudioRenderer_OnWriteData = MyOnWriteData;\n    callbacks.OH_AudioRenderer_OnStreamEvent = MyOnStreamEvent_Renderer;\n    callbacks.OH_AudioRenderer_OnInterruptEvent = MyOnInterruptEvent_Renderer;\n    callbacks.OH_AudioRenderer_OnError = MyOnError_Renderer;\n\n    // 设置输出音频流的回调。\n    OH_AudioStreamBuilder_SetRendererCallback(builder, callbacks, nullptr);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "构造录制音频流",
      children: "构造录制音频流"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioCapturer* audioCapturer;\nOH_AudioStreamBuilder_GenerateCapturer(builder, &audioCapturer);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "构造播放音频流",
      children: "构造播放音频流"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioRenderer* audioRenderer;\nOH_AudioStreamBuilder_GenerateRenderer(builder, &audioRenderer);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用音频流",
      children: "使用音频流"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以录制为例，开发者可以使用以下接口控制音频流的开始、暂停、停止和释放。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(994439)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在实现耳返功能时，开发者需同时控制录制流和播放流，确保两者同步。"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_AudioStream_Result ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiorenderer-h/capi-native-audiorenderer-h#oh_audiorenderer_start",
              children: "OH_AudioRenderer_Start"
            }), "(OH_AudioRenderer* renderer)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开始播放。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_AudioStream_Result ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiorenderer-h/capi-native-audiorenderer-h#oh_audiorenderer_pause",
              children: "OH_AudioRenderer_Pause"
            }), "(OH_AudioRenderer* renderer)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "暂停播放。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_AudioStream_Result ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiorenderer-h/capi-native-audiorenderer-h#oh_audiorenderer_stop",
              children: "OH_AudioRenderer_Stop"
            }), "(OH_AudioRenderer* renderer)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "停止播放。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_AudioStream_Result ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiorenderer-h/capi-native-audiorenderer-h#oh_audiorenderer_flush",
              children: "OH_AudioRenderer_Flush"
            }), "(OH_AudioRenderer* renderer)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放缓存数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_AudioStream_Result ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiorenderer-h/capi-native-audiorenderer-h#oh_audiorenderer_release",
              children: "OH_AudioRenderer_Release"
            }), "(OH_AudioRenderer* renderer)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放播放实例。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "释放构造器",
      children: "释放构造器"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "构造器不再使用时，采用如下方式释放资源。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioStreamBuilder_Destroy(builder);\n"
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
55121(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
994439(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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