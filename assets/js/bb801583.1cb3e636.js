"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["996663"], {
559334(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_audio_kit_audio_playback_using_ohaudio_for_playback_using_ohaudio_for_playback_md_bb8_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-audio-kit-audio-playback-using-ohaudio-for-playback-using-ohaudio-for-playback-md-bb8.json
var site_docs_audio_kit_audio_playback_using_ohaudio_for_playback_using_ohaudio_for_playback_md_bb8_namespaceObject = JSON.parse('{"id":"audio-kit/audio-playback/using-ohaudio-for-playback/using-ohaudio-for-playback","title":"推荐使用OHAudio开发音频播放功能(C/C++)","description":"OHAudio是系统在API version 10中引入的一套C API，此API在设计上实现归一，同时支持普通音频通路和低时延通路。仅支持PCM格式，适用于依赖Native层实现音频输出功能的场景。","source":"@site/docs/audio-kit/audio-playback/using-ohaudio-for-playback/using-ohaudio-for-playback.md","sourceDirName":"audio-kit/audio-playback/using-ohaudio-for-playback","slug":"/audio-kit/audio-playback/using-ohaudio-for-playback/","permalink":"/harmonyos-docs-site/audio-kit/audio-playback/using-ohaudio-for-playback/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"推荐使用OHAudio开发音频播放功能(C/C++)","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/using-ohaudio-for-playback","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"音频播放开发概述","permalink":"/harmonyos-docs-site/audio-kit/audio-playback/audio-playback-overview/"},"next":{"title":"使用AudioRenderer开发音频播放功能(ArkTs)","permalink":"/harmonyos-docs-site/audio-kit/audio-playback/using-audiorenderer-for-playback/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/audio-kit/audio-playback/using-ohaudio-for-playback/using-ohaudio-for-playback.md


const frontMatter = {
	title: '推荐使用OHAudio开发音频播放功能(C/C++)',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/using-ohaudio-for-playback',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '推荐使用OHAudio开发音频播放功能(C/C++)';

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
  "value": "实现音频播放",
  "id": "实现音频播放",
  "level": 3
}, {
  "value": "设置音频流音量",
  "id": "设置音频流音量",
  "level": 3
}, {
  "value": "设置低时延模式",
  "id": "设置低时延模式",
  "level": 3
}, {
  "value": "设置音频声道布局",
  "id": "设置音频声道布局",
  "level": 3
}, {
  "value": "播放Audio Vivid格式音源",
  "id": "播放audio-vivid格式音源",
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
        id: "推荐使用ohaudio开发音频播放功能cc",
        children: "推荐使用OHAudio开发音频播放功能(C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OHAudio是系统在API version 10中引入的一套C API，此API在设计上实现归一，同时支持普通音频通路和低时延通路。仅支持PCM格式，适用于依赖Native层实现音频输出功能的场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OHAudio音频播放状态变化示意图："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(970397)/* ["default"] */.A) + "",
        width: "882",
        height: "705"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用入门",
      children: "使用入门"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者要使用OHAudio提供的播放能力，需要添加对应的头文件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下各步骤示例为片段代码，可通过示例代码右下方链接获取", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/openharmony/applications_app_samples/blob/master/code/DocsSample/Media/Audio/AudioRendererSampleC",
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
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiorenderer-h/capi-native-audiorenderer-h",
        children: "native_audiorenderer.h"
      }), ">头文件，使用音频播放相关API。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <ohaudio/native_audiorenderer.h>\n#include <ohaudio/native_audiostreambuilder.h>\n"
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
        children: "OH_AudioStreamBuilder* builder;\n// ...\n    OH_AudioStreamBuilder_Create(&builder, AUDIOSTREAM_TYPE_RENDERER);\n"
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
      children: "开发者可以通过以下几个步骤来实现一个简单的播放功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "实现音频播放",
      children: "实现音频播放"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建构造器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_AudioStreamBuilder* builder;\n// ...\n    OH_AudioStreamBuilder_Create(&builder, AUDIOSTREAM_TYPE_RENDERER);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置音频流参数。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["关于音频采样率可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/audio-kit/audio-playback/using-audiorenderer-for-playback#%E9%85%8D%E7%BD%AE%E5%90%88%E9%80%82%E7%9A%84%E9%9F%B3%E9%A2%91%E9%87%87%E6%A0%B7%E7%8E%87",
            children: "配置合适的音频采样率"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建音频播放构造器后，可以设置音频流所需要的参数，可以参考下面的案例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 设置音频采样率。\nconst int SAMPLING_RATE_48K = 48000;\nOH_AudioStreamBuilder_SetSamplingRate(builder, SAMPLING_RATE_48K);\n// 设置音频声道。\nconst int channelCount = 2;\nOH_AudioStreamBuilder_SetChannelCount(builder, channelCount);\n// 设置音频采样格式。\nOH_AudioStreamBuilder_SetSampleFormat(builder, AUDIOSTREAM_SAMPLE_S16LE);\n// 设置音频流的编码类型。\nOH_AudioStreamBuilder_SetEncodingType(builder, AUDIOSTREAM_ENCODING_TYPE_RAW);\n// 设置输出音频流的工作场景。\nOH_AudioStreamBuilder_SetRendererInfo(builder, AUDIOSTREAM_USAGE_MUSIC);\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["注意，播放的音频数据要通过回调接口写入，开发者要实现回调接口，从API version 12开始支持使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostreambuilder-h/capi-native-audiostreambuilder-h#oh_audiostreambuilder_setrendererwritedatacallback",
            children: "OH_AudioStreamBuilder_SetRendererWriteDataCallback"
          }), "设置数据回调函数。数据回调函数的声明请查看", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiorenderer_onwritedatacallback",
            children: "OH_AudioRenderer_OnWriteDataCallback"
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
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["从API version 12开始", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "推荐"
                })
              }), "使用", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiorenderer_onwritedatacallback",
                children: "OH_AudioRenderer_OnWriteDataCallback"
              }), "用于写入音频数据。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(581136)/* ["default"] */.A) + "",
                width: "102",
                height: "38"
              })
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "能填满回调所需长度数据的情况下，返回AUDIO_DATA_CALLBACK_RESULT_VALID，系统会取用完整长度的数据缓冲进行播放。请不要在未填满数据的情况下返回AUDIO_DATA_CALLBACK_RESULT_VALID，否则会导致杂音、卡顿等现象。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "在无法填满回调所需长度数据的情况下，建议开发者返回AUDIO_DATA_CALLBACK_RESULT_INVALID，系统不会处理该段音频数据，然后会再次向应用请求数据，确认数据填满后返回AUDIO_DATA_CALLBACK_RESULT_VALID。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "回调函数结束后，音频服务会把缓冲中数据放入队列里等待播放，因此请勿在回调外再次更改缓冲中的数据。对于最后一帧，如果数据不够填满缓冲长度，开发者需要使用剩余数据拼接空数据的方式，将缓冲填满，避免缓冲内的历史脏数据对播放效果产生不良的影响。"
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["从API version 12开始可通过", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostreambuilder-h/capi-native-audiostreambuilder-h#oh_audiostreambuilder_setframesizeincallback",
                children: "OH_AudioStreamBuilder_SetFrameSizeInCallback"
              }), "设置audioDataSize的大小。"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 自定义写入数据函数。\nstatic OH_AudioData_Callback_Result MyOnWriteData_New(\n    OH_AudioRenderer* renderer,\n    void* userData,\n    void* audioData,\n    int32_t audioDataSize)\n{\n    // 将待播放的数据，按audioDataSize长度写入audioData。\n    // 如果开发者不希望播放某段audioData，返回AUDIO_DATA_CALLBACK_RESULT_INVALID即可。\n    int32_t readCount = fread(audioData, audioDataSize, 1, g_fp);\n    if (readCount < 0) {\n        return AUDIO_DATA_CALLBACK_RESULT_INVALID;\n    }\n    if (feof(g_fp)) {\n        fseek(g_fp, 0, SEEK_SET);\n    }\n    return AUDIO_DATA_CALLBACK_RESULT_VALID;\n}\n\n// 自定义音频中断事件函数。\nvoid MyOnInterruptEvent_New(\n    OH_AudioRenderer* renderer,\n    void* userData,\n    OH_AudioInterrupt_ForceType type,\n    OH_AudioInterrupt_Hint hint)\n{\n    // 根据type和hint表示的音频中断信息，更新播放器状态和界面。\n}\n\n// 自定义异常回调函数。\nvoid MyOnError_New(\n    OH_AudioRenderer* renderer,\n    void* userData,\n    OH_AudioStream_Result error)\n{\n    // 根据error表示的音频异常信息，做出相应的处理。\n}\n// ...\n    // 配置音频中断事件回调函数。\n    OH_AudioRenderer_OnInterruptCallback OnInterruptCb = MyOnInterruptEvent_New;\n    OH_AudioStreamBuilder_SetRendererInterruptCallback(builder, OnInterruptCb, nullptr);\n    \n    // 配置音频异常回调函数。\n    OH_AudioRenderer_OnErrorCallback OnErrorCb = MyOnError_New;\n    OH_AudioStreamBuilder_SetRendererErrorCallback(builder, OnErrorCb, nullptr);\n    \n    // 配置写入音频数据回调函数。\n    OH_AudioRenderer_OnWriteDataCallback writeDataCb = MyOnWriteData_New;\n    OH_AudioStreamBuilder_SetRendererWriteDataCallback(builder, writeDataCb, nullptr);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "构造播放音频流。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_AudioRenderer* audioRenderer;\n// ...\n    OH_AudioStreamBuilder_GenerateRenderer(builder, &audioRenderer);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用音频流。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "音频流中包含以下接口，用来实现对音频流的控制。"
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
                children: "OH_AudioStream_Result OH_AudioRenderer_Start(OH_AudioRenderer* renderer)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "开始播放。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "OH_AudioStream_Result OH_AudioRenderer_Pause(OH_AudioRenderer* renderer)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "暂停播放。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "OH_AudioStream_Result OH_AudioRenderer_Stop(OH_AudioRenderer* renderer)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "停止播放。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "OH_AudioStream_Result OH_AudioRenderer_Flush(OH_AudioRenderer* renderer)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "释放缓存数据。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "OH_AudioStream_Result OH_AudioRenderer_Release(OH_AudioRenderer* renderer)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "释放播放实例。"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(388726)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "音频流控制接口执行会有耗时（例如OH_AudioRenderer_Stop接口需要播完缓存，单次执行普遍超过50ms），应避免在主线程中直接调用，以免造成界面显示卡顿。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "释放构造器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "构造器不再使用时，需要释放相关资源。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用需根据实际业务需求合理使用构造器，按需创建并及时释放，避免占用过多音频资源导致异常。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_AudioStreamBuilder_Destroy(builder);\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置音频流音量",
      children: "设置音频流音量"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiorenderer-h/capi-native-audiorenderer-h#oh_audiorenderer_setvolume",
        children: "OH_AudioRenderer_SetVolume"
      }), "接口设置当前音频流音量值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float volume = 0.5f;\n\n// 设置当前音频流音量值。\nOH_AudioRenderer_SetVolume(audioRenderer, volume);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置低时延模式",
      children: "设置低时延模式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当设备支持低时延通路且采样率设置为48000Hz时，开发者可以使用低时延模式创建播放器，获得更高质量的音频体验。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发流程与普通播放（", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%AE%9E%E7%8E%B0%E9%9F%B3%E9%A2%91%E6%92%AD%E6%94%BE",
        children: "实现音频播放"
      }), "）场景一致，仅需要在步骤1创建音频流构造器时，调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostreambuilder-h/capi-native-audiostreambuilder-h#oh_audiostreambuilder_setlatencymode",
        children: "OH_AudioStreamBuilder_SetLatencyMode()"
      }), "设置低时延模式。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(648089)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当音频播放场景", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h#oh_audiostream_usage",
          children: "OH_AudioStream_Usage"
        }), "为AUDIOSTREAM_USAGE_VOICE_COMMUNICATION和AUDIOSTREAM_USAGE_VIDEO_COMMUNICATION时，不支持主动设置低时延模式，系统会根据设备的能力，决策输出的音频通路。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "低时延通路对于数据处理性能要求较高，应用数据生成缓慢时容易导致卡顿。普通音乐、视频播放场景下不建议设置该模式，仅推荐游戏、K歌等对时延敏感的应用设置低时延模式。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioStreamBuilder_SetLatencyMode(builder, AUDIOSTREAM_LATENCY_MODE_FAST);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置音频声道布局",
      children: "设置音频声道布局"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "播放音频文件时，可以通过设置音频的声道布局信息，指定渲染或播放时的扬声器摆位，使得渲染和播放效果更佳，获得更高质量的音频体验。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发流程与普通播放（", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%AE%9E%E7%8E%B0%E9%9F%B3%E9%A2%91%E6%92%AD%E6%94%BE",
        children: "实现音频播放"
      }), "）场景一致，仅需要在步骤1创建音频流构造器时，调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostreambuilder-h/capi-native-audiostreambuilder-h#oh_audiostreambuilder_setchannellayout",
        children: "OH_AudioStreamBuilder_SetChannelLayout()"
      }), "设置声道布局信息。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当声道布局与声道数不匹配时，创建音频流会失败。建议在设置声道布局时，确认下发的声道布局信息是否正确。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果不知道准确的声道布局信息，或者开发者需要使用默认声道布局，可以不调用设置声道布局接口，或者下发CH_LAYOUT_UNKNOWN，以使用基于声道数的默认声道布局。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于HOA（高阶立体环绕声）格式的音频，想要获得正确的渲染和播放效果，必须指定声道布局信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AudioStreamBuilder_SetChannelLayout(builder, CH_LAYOUT_STEREO);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "播放audio-vivid格式音源",
      children: "播放Audio Vivid格式音源"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "播放Audio Vivid（菁彩三维声）格式音频文件时，需要使用与普通播放不同的数据写入回调函数，该回调可以同时写入PCM（脉冲编码调制）数据与元数据。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发流程与普通播放（", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%AE%9E%E7%8E%B0%E9%9F%B3%E9%A2%91%E6%92%AD%E6%94%BE",
        children: "实现音频播放"
      }), "）场景一致，仅需要在步骤1创建音频流构造器时，调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostreambuilder-h/capi-native-audiostreambuilder-h#oh_audiostreambuilder_setwritedatawithmetadatacallback",
        children: "OH_AudioStreamBuilder_SetWriteDataWithMetadataCallback()"
      }), "设置PCM数据与元数据同时写入的回调函数，同时调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostreambuilder-h/capi-native-audiostreambuilder-h#oh_audiostreambuilder_setencodingtype",
        children: "OH_AudioStreamBuilder_SetEncodingType()"
      }), "设置编码类型为AUDIOSTREAM_ENCODING_TYPE_AUDIOVIVID。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在播放Audio Vivid时，帧长是固定的，不可通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostreambuilder-h/capi-native-audiostreambuilder-h#oh_audiostreambuilder_setframesizeincallback",
        children: "OH_AudioStreamBuilder_SetFrameSizeInCallback()"
      }), "设置回调帧长。同时，在设置播放声道数和声道布局时，需要将写入音源的声床数和对象数相加后进行设置。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 自定义同时写入PCM数据和元数据函数。\nint32_t MyOnWriteDataWithMetadata_New(\n    OH_AudioRenderer* renderer,\n    void* userData,\n    void* audioData,\n    int32_t audioDataSize,\n    void* metadata,\n    int32_t metadataSize)\n{\n    // 将待播放的PCM数据和元数据，分别按audioDataSize和metadataSize写入buffer。\n    return 0;\n}\n// ...\n    // 设置编码类型。\n    OH_AudioStreamBuilder_SetEncodingType(builder, AUDIOSTREAM_ENCODING_TYPE_AUDIOVIVID);\n    // 配置回调函数。\n    OH_AudioRenderer_WriteDataWithMetadataCallback metadataCallback = MyOnWriteDataWithMetadata_New;\n    // 设置同时写入PCM数据和元数据的回调。\n    OH_AudioStreamBuilder_SetWriteDataWithMetadataCallback(builder, metadataCallback, nullptr);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "注意事项",
      children: "注意事项"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 12开始", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "不再推荐"
        })
      }), "使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiorenderer-callbacks-struct/capi-ohaudio-oh-audiorenderer-callbacks-struct",
        children: "OH_AudioRenderer_Callbacks"
      }), "的方式设置音频回调函数。若必须使用，需要注意在设置音频回调函数时，通过下面两种方式中的任意一种来设置音频回调函数，避免不可预期的行为。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["方式1：请确保", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiorenderer-callbacks-struct/capi-ohaudio-oh-audiorenderer-callbacks-struct",
            children: "OH_AudioRenderer_Callbacks"
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
            children: "OH_AudioRenderer_Callbacks callbacks;\n// ...\n// 自定义写入数据函数。\nint32_t MyOnWriteData_Legacy(\n    OH_AudioRenderer* renderer,\n    void* userData,\n    void* buffer,\n    int32_t length)\n{\n    // 将待播放的数据，按length长度写入buffer。\n    return 0;\n}\n\n// 自定义音频中断事件函数。\nint32_t MyOnInterruptEvent_Legacy(\n    OH_AudioRenderer* renderer,\n    void* userData,\n    OH_AudioInterrupt_ForceType type,\n    OH_AudioInterrupt_Hint hint)\n{\n    // 根据type和hint表示的音频中断信息，更新播放器状态和界面。\n    return 0;\n}\n// ...\n    // 配置回调函数，如果需要监听，则赋值。\n    callbacks.OH_AudioRenderer_OnWriteData = MyOnWriteData_Legacy;\n    callbacks.OH_AudioRenderer_OnInterruptEvent = MyOnInterruptEvent_Legacy;\n\n    // （必选）无触发回调场景，使用空指针初始化。从API version 11开始，开发者如果需要监听设备变化，\n    // 可直接使用OH_AudioRenderer_OutputDeviceChangeCallback替代。\n    callbacks.OH_AudioRenderer_OnStreamEvent = nullptr;\n    // （必选）如果不需要监听，使用空指针初始化。\n    callbacks.OH_AudioRenderer_OnError = nullptr;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "方式2：使用前，初始化并清零结构体。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_AudioRenderer_Callbacks callbacks;\n// ...\n// 自定义写入数据函数。\nint32_t MyOnWriteData_Legacy(\n    OH_AudioRenderer* renderer,\n    void* userData,\n    void* buffer,\n    int32_t length)\n{\n    // 将待播放的数据，按length长度写入buffer。\n    return 0;\n}\n\n// 自定义音频中断事件函数。\nint32_t MyOnInterruptEvent_Legacy(\n    OH_AudioRenderer* renderer,\n    void* userData,\n    OH_AudioInterrupt_ForceType type,\n    OH_AudioInterrupt_Hint hint)\n{\n    // 根据type和hint表示的音频中断信息，更新播放器状态和界面。\n    return 0;\n}\n// ...\n    // 使用前，初始化并清零结构体。\n    OH_AudioRenderer_Callbacks callbacks = {0};\n\n    // 配置需要的回调函数。\n    callbacks.OH_AudioRenderer_OnWriteData = MyOnWriteData_Legacy;\n    callbacks.OH_AudioRenderer_OnInterruptEvent = MyOnInterruptEvent_Legacy;\n"
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
648089(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
388726(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
970397(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798878-74e87480872e5c577732472f405999ee.png");

},
581136(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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